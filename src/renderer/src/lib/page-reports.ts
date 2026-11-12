import { useSyncExternalStore } from 'react'
import {
  addDoc,
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc
} from 'firebase/firestore'
import { getAccess, hasCloudAccess, isAdmin, subscribeAccess } from './access'
import { APP_VERSION } from './about'
import { APP_ID, db } from './firebase'
import type { Lang } from '@/content/types'

// Reportes de páginas de estudo com erro.
//
// Quem estuda clica no botão de reportar na barra da página e escreve o que está
// errado. O reporte fica na conta de quem reportou:
// users/{uid}/apps/frenching/pageReports/{id}. A conta administradora (regra em
// firestore.rules) vê os de todos em Configurações → Administração → Páginas
// reportadas, e pode marcar como resolvido ou apagar.

export interface PageReport {
  // Caminho do documento (para o administrador atualizar o de outra pessoa)
  path: string
  topicId: string
  pageTitle: string
  sectionTitle: string
  // Versão da página que estava aberta (PT ou FR)
  lang: Lang
  comment: string
  createdAt: number
  appVersion: string
  resolved: boolean
  resolvedAt?: number
  uid: string
  userName: string
}

function parse(path: string, data: Record<string, unknown>): PageReport | null {
  if (typeof data.topicId !== 'string' || typeof data.comment !== 'string') return null
  return {
    path,
    topicId: data.topicId,
    pageTitle: String(data.pageTitle ?? ''),
    sectionTitle: String(data.sectionTitle ?? ''),
    lang: data.lang === 'fr' ? 'fr' : 'pt',
    comment: data.comment,
    createdAt: Number(data.createdAt) || 0,
    appVersion: String(data.appVersion ?? ''),
    resolved: data.resolved === true,
    resolvedAt: data.resolvedAt ? Number(data.resolvedAt) : undefined,
    uid: String(data.uid ?? ''),
    userName: String(data.userName ?? '')
  }
}

const mineRef = (uid: string) => collection(db, 'users', uid, 'apps', APP_ID, 'pageReports')

// ---------- Enviar ----------

export async function reportPage(report: {
  topicId: string
  pageTitle: string
  sectionTitle: string
  lang: Lang
  comment: string
}): Promise<void> {
  const access = getAccess()
  const user = hasCloudAccess(access) ? access.user : null
  if (!user)
    throw new Error(
      access.user
        ? 'Sua conta ainda não tem acesso à nuvem.'
        : 'Entre com Google (Configurações → Conta) para reportar.'
    )
  await addDoc(mineRef(user.uid), {
    ...report,
    comment: report.comment.trim(),
    createdAt: Date.now(),
    appVersion: APP_VERSION,
    resolved: false,
    uid: user.uid,
    userName: user.displayName ?? user.email ?? ''
  })
}

// ---------- Lista (só a conta administradora) ----------

interface State {
  // null = ainda carregando (ou sem ser a conta administradora)
  reports: PageReport[] | null
  error: string | null
}

let state: State = { reports: null, error: null }
const listeners = new Set<() => void>()
let stop: (() => void) | null = null
let watchingAccess = false

const setState = (next: Partial<State>): void => {
  state = { ...state, ...next }
  listeners.forEach((listener) => listener())
}

// Ouve os reportes só enquanto alguém usa a lista e a conta é a administradora
function sync(): void {
  const want = listeners.size > 0 && isAdmin(getAccess())
  if (want && !stop) {
    stop = onSnapshot(
      collectionGroup(db, 'pageReports'),
      (snapshot) =>
        setState({
          error: null,
          reports: snapshot.docs
            // Só os deste app (outros apps do projeto podem ter coleções com o mesmo nome)
            .filter((d) => d.ref.path.includes(`/apps/${APP_ID}/`))
            .map((d) => parse(d.ref.path, d.data()))
            .filter((r): r is PageReport => !!r)
            .sort((a, b) => b.createdAt - a.createdAt)
        }),
      (e) => setState({ error: `Não foi possível ler os reportes: ${e.message}` })
    )
  } else if (!want && stop) {
    stop()
    stop = null
    setState({ reports: null, error: null })
  }
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  if (!watchingAccess) {
    watchingAccess = true
    subscribeAccess(sync)
  }
  sync()
  return () => {
    listeners.delete(listener)
    sync()
  }
}

export function usePageReports(): State {
  return useSyncExternalStore(subscribe, () => state)
}

// Reportes ainda não resolvidos (bolinha vermelha para o admin; some ao resolver ou apagar)
export function useOpenReportCount(): number {
  const { reports } = usePageReports()
  return reports?.filter((r) => !r.resolved).length ?? 0
}

export async function setReportResolved(r: PageReport, resolved: boolean): Promise<void> {
  await updateDoc(doc(db, r.path), resolved ? { resolved, resolvedAt: Date.now() } : { resolved })
}

export async function deleteReport(r: PageReport): Promise<void> {
  await deleteDoc(doc(db, r.path))
}
