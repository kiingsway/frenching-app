import { useSyncExternalStore } from 'react'
import type { User } from 'firebase/auth'
import {
  addDoc,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  writeBatch,
  type Unsubscribe
} from 'firebase/firestore'
import { getAccess, hasCloudAccess, isAdmin, subscribeAccess } from './access'
import { APP_VERSION } from './about'
import { getAudioEntry } from './audio-entries'
import { AUDIO_VOICES, DEFAULT_VOICE, type VoiceId } from './audio-texts'
import { APP_ID, db } from './firebase'
import { getTopicContent } from '@/content'

// Áudios reportados.
//
// Quem usa o app (com acesso à nuvem) clica com o botão direito num áudio que soa
// estranho (ex.: lido em inglês) e escreve o que está errado. O reporte fica na conta
// de quem reportou: users/{uid}/apps/frenching/audioReports/{id}, com a página em que
// estava (o mesmo áudio pode aparecer em várias).
//
// A conta administradora (regra em firestore.rules) vê os de todos em Configurações →
// Áudios → Áudios reportados, e pode marcar como resolvido ou apagar. Trocar a voz
// continua sendo pelo botão direito no áudio, no npm run dev. Quem reportou vê os
// próprios reportes na mesma lista, com uma bolinha verde quando um é resolvido.
//
// Substitui as antigas sugestões de troca de voz (audioSuggestions), que pediam a voz
// nova em vez de um comentário; elas ficaram no banco, mas o app não as mostra mais.

export interface AudioReport {
  // Caminho do documento (para o administrador atualizar o de outra pessoa)
  path: string
  key: string
  text: string
  // Página de estudo em que o áudio foi reportado (ou o baralho de flashcards)
  pageId: string
  pageTitle: string
  part: string
  // Voz com que o áudio estava
  voice: VoiceId
  comment: string
  createdAt: number
  appVersion: string
  resolved: boolean
  resolvedAt?: number
  // Quem reportou já viu que foi resolvido?
  seenByUser: boolean
  uid: string
  userName: string
}

const isVoice = (v: unknown): v is VoiceId => typeof v === 'string' && v in AUDIO_VOICES

function parse(path: string, data: Record<string, unknown>): AudioReport | null {
  if (typeof data.key !== 'string' || typeof data.comment !== 'string') return null
  return {
    path,
    key: data.key,
    text: String(data.text ?? ''),
    pageId: String(data.pageId ?? ''),
    pageTitle: String(data.pageTitle ?? ''),
    part: String(data.part ?? ''),
    voice: isVoice(data.voice) ? data.voice : DEFAULT_VOICE,
    comment: data.comment,
    createdAt: Number(data.createdAt) || 0,
    appVersion: String(data.appVersion ?? ''),
    resolved: data.resolved === true,
    resolvedAt: data.resolvedAt ? Number(data.resolvedAt) : undefined,
    seenByUser: data.seenByUser !== false,
    uid: String(data.uid ?? ''),
    userName: String(data.userName ?? '')
  }
}

const byNewest = (a: AudioReport, b: AudioReport): number => b.createdAt - a.createdAt

// ---------- Estado compartilhado ----------

interface State {
  // Conta conectada com acesso à nuvem (sem acesso: null)
  user: User | null
  // Entrou com Google, mas a conta ainda não tem acesso à nuvem
  noAccess: boolean
  // Reportes feitos pela conta conectada
  mine: AudioReport[]
  // Reportes de todos (só a conta administradora); null = sem acesso
  all: AudioReport[] | null
  error: string | null
}

let state: State = { user: null, noAccess: false, mine: [], all: null, error: null }
const listeners = new Set<() => void>()
const setState = (next: Partial<State>): void => {
  state = { ...state, ...next }
  listeners.forEach((listener) => listener())
}

export function useAudioReports(): State {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => state
  )
}

const mineRef = (uid: string) => collection(db, 'users', uid, 'apps', APP_ID, 'audioReports')

// ---------- Ações ----------

export async function reportAudio(report: {
  key: string
  voice: VoiceId
  // Página de estudo aberta (sem ela, a primeira página em que o áudio aparece)
  pageId: string | null
  comment: string
}): Promise<void> {
  const user = state.user
  if (!user)
    throw new Error(
      state.noAccess
        ? 'Sua conta ainda não tem acesso à nuvem.'
        : 'Entre com Google (Configurações → Conta) para reportar.'
    )
  const entry = getAudioEntry(report.key)
  const page = report.pageId ? getTopicContent(report.pageId) : undefined
  await addDoc(mineRef(user.uid), {
    key: report.key,
    text: entry?.spoken ?? '',
    pageId: page ? report.pageId : (entry?.pageId ?? ''),
    pageTitle: page?.pt.title ?? entry?.pageTitle ?? '',
    part: entry?.part ?? '',
    voice: report.voice,
    comment: report.comment.trim(),
    createdAt: Date.now(),
    appVersion: APP_VERSION,
    resolved: false,
    seenByUser: true,
    uid: user.uid,
    userName: user.displayName ?? user.email ?? ''
  })
}

// Resolver avisa quem reportou (bolinha verde até abrir a lista)
export async function setAudioReportResolved(r: AudioReport, resolved: boolean): Promise<void> {
  await updateDoc(
    doc(db, r.path),
    resolved ? { resolved, resolvedAt: Date.now(), seenByUser: false } : { resolved }
  )
}

// O administrador apaga qualquer um; quem reportou, os próprios
export async function deleteAudioReport(r: AudioReport): Promise<void> {
  await deleteDoc(doc(db, r.path))
}

// Ao abrir a lista: os resolvidos deixam de ser "novidade" (bolinha verde)
export function markAudioReportsSeen(): void {
  const unseen = state.mine.filter((r) => r.resolved && !r.seenByUser)
  if (!unseen.length) return
  const batch = writeBatch(db)
  for (const r of unseen) batch.update(doc(db, r.path), { seenByUser: true })
  void batch.commit()
}

// ---------- Liga e desliga conforme o login (chamado uma vez, em main.tsx) ----------

export function initAudioReports(): void {
  let stopMine: Unsubscribe | null = null
  let stopAll: Unsubscribe | null = null
  let current: string | null = null

  const apply = (): void => {
    const access = getAccess()
    const user = hasCloudAccess(access) ? access.user : null
    const noAccess = !!access.user && !user
    if (noAccess !== state.noAccess) setState({ noAccess })
    // Muda quando troca a conta ou quando ela vira (ou deixa de ser) a administradora
    const id = user ? `${user.uid}:${isAdmin(access)}` : null
    if (id === current) return
    current = id
    stopMine?.()
    stopAll?.()
    stopMine = stopAll = null
    setState({ user, mine: [], all: null, error: null })
    if (!user) return

    stopMine = onSnapshot(
      mineRef(user.uid),
      (snapshot) =>
        setState({
          mine: snapshot.docs
            .map((d) => parse(d.ref.path, d.data()))
            .filter((r): r is AudioReport => !!r)
            .sort(byNewest)
        }),
      (e) => setState({ error: `Não foi possível ler os reportes: ${e.message}` })
    )

    if (isAdmin(access))
      stopAll = onSnapshot(
        collectionGroup(db, 'audioReports'),
        (snapshot) =>
          setState({
            all: snapshot.docs
              // Só os deste app (outros apps do projeto podem ter coleções com o mesmo nome)
              .filter((d) => d.ref.path.includes(`/apps/${APP_ID}/`))
              .map((d) => parse(d.ref.path, d.data()))
              .filter((r): r is AudioReport => !!r)
              .sort(byNewest)
          }),
        (e) => setState({ all: null, error: `Não foi possível ler os reportes: ${e.message}` })
      )
  }
  subscribeAccess(apply)
  apply()
}

// Bolinhas no botão Configurações: vermelha (administrador) enquanto houver áudio
// reportado sem resolver; verde se um reporte seu foi resolvido e você ainda não viu
export function useAudioReportDots(): { red: boolean; green: boolean } {
  const s = useAudioReports()
  const red = !!s.all?.some((r) => !r.resolved)
  const green = s.mine.some((r) => r.resolved && !r.seenByUser)
  return { red, green }
}
