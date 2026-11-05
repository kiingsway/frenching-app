import { useSyncExternalStore } from 'react'
import { onAuthStateChanged, type User } from 'firebase/auth'
import {
  collection,
  collectionGroup,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
  writeBatch,
  type Unsubscribe
} from 'firebase/firestore'
import { getAudioDev, subscribeAudioDev } from './audio-dev'
import { getAudioEntry } from './audio-entries'
import { AUDIO_VOICES, type VoiceId } from './audio-texts'
import { APP_ID, auth, db } from './firebase'
import { load, save } from './storage'
import { audioTools, audioToolsAvailable } from './platform'

// Sugestões de troca de voz dos áudios.
//
// Quem usa o app (com login) clica com o botão direito num áudio que soa estranho
// (ex.: lido em inglês) e sugere a outra voz. A sugestão fica na conta de quem
// sugeriu: users/{uid}/apps/frenching/audioSuggestions/{chave do áudio}.
//
// No npm run dev, a conta administradora (regra em firestore.rules) vê as sugestões
// de todos e pode aplicar todas de uma vez: troca a voz desses textos, gera os
// áudios de novo e marca as sugestões como aplicadas. Quem sugeriu vê na lista o
// que foi trocado (e uma bolinha verde em Configurações até abrir a lista).

export type SuggestionStatus = 'pending' | 'applied'

export interface AudioSuggestion {
  key: string
  // Caminho do documento (para o administrador atualizar a de outra pessoa)
  path: string
  text: string
  pageTitle: string
  part: string
  fromVoice: VoiceId
  toVoice: VoiceId
  status: SuggestionStatus
  createdAt: number
  appliedAt?: number
  // Quem sugeriu já viu que foi aplicada?
  seenByUser: boolean
  uid: string
  userName: string
}

const isVoice = (v: unknown): v is VoiceId => typeof v === 'string' && v in AUDIO_VOICES

function parse(path: string, data: Record<string, unknown>): AudioSuggestion | null {
  if (typeof data.key !== 'string' || !isVoice(data.fromVoice) || !isVoice(data.toVoice))
    return null
  return {
    key: data.key,
    path,
    text: String(data.text ?? ''),
    pageTitle: String(data.pageTitle ?? ''),
    part: String(data.part ?? ''),
    fromVoice: data.fromVoice,
    toVoice: data.toVoice,
    status: data.status === 'applied' ? 'applied' : 'pending',
    createdAt: Number(data.createdAt) || 0,
    appliedAt: data.appliedAt ? Number(data.appliedAt) : undefined,
    seenByUser: data.seenByUser !== false,
    uid: String(data.uid ?? ''),
    userName: String(data.userName ?? '')
  }
}

const byNewest = (a: AudioSuggestion, b: AudioSuggestion): number =>
  (b.appliedAt ?? b.createdAt) - (a.appliedAt ?? a.createdAt)

// ---------- Estado compartilhado ----------

interface State {
  // Rodando no npm run dev (ferramentas de áudio disponíveis)
  dev: boolean
  user: User | null
  // Sugestões feitas pela conta conectada
  mine: AudioSuggestion[]
  // Sugestões de todos (só a conta administradora, no npm run dev); null = sem acesso
  all: AudioSuggestion[] | null
  // Ids (caminho) das sugestões pendentes que o administrador já viu na lista
  seenPending: string[]
  // Aplicando sugestões agora (gerando os áudios)
  applying: boolean
  error: string | null
}

const SEEN_KEY = 'seenPendingSuggestions'
const APPLY_KEY = 'applyingSuggestions'

let state: State = {
  dev: false,
  user: null,
  mine: [],
  all: null,
  seenPending: load<string[]>(SEEN_KEY, []),
  applying: !!load<unknown>(APPLY_KEY, null),
  error: null
}
const listeners = new Set<() => void>()
const setState = (next: Partial<State>): void => {
  state = { ...state, ...next }
  listeners.forEach((listener) => listener())
}

export function useAudioSuggestions(): State {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => state
  )
}

const mineRef = (uid: string) => collection(db, 'users', uid, 'apps', APP_ID, 'audioSuggestions')

// Sugestão da conta conectada para este áudio, se houver
export const mySuggestionFor = (key: string): AudioSuggestion | undefined =>
  state.mine.find((s) => s.key === key)

// ---------- Ações de quem usa o app ----------

export async function suggestVoiceChange(key: string, currentVoice: VoiceId): Promise<void> {
  const user = state.user
  if (!user) throw new Error('Entre com Google (Configurações → Conta) para sugerir.')
  const entry = getAudioEntry(key)
  const toVoice: VoiceId = currentVoice === 'denise' ? 'vivienne' : 'denise'
  await setDoc(doc(mineRef(user.uid), key), {
    key,
    text: entry?.spoken ?? '',
    pageTitle: entry?.pageTitle ?? '',
    part: entry?.part ?? '',
    fromVoice: currentVoice,
    toVoice,
    status: 'pending',
    createdAt: Date.now(),
    seenByUser: true,
    uid: user.uid,
    userName: user.displayName ?? user.email ?? ''
  })
}

export async function cancelSuggestion(key: string): Promise<void> {
  if (!state.user) return
  await deleteDoc(doc(mineRef(state.user.uid), key))
}

// Ao abrir a lista: as aplicadas deixam de ser "novidade" (bolinha verde) e as
// pendentes que o administrador já viu deixam de acender a bolinha vermelha
export function markSuggestionsSeen(): void {
  const unseen = state.mine.filter((s) => s.status === 'applied' && !s.seenByUser)
  if (unseen.length) {
    const batch = writeBatch(db)
    for (const s of unseen) batch.update(doc(db, s.path), { seenByUser: true })
    void batch.commit()
  }
  const pending = (state.all ?? state.mine).filter((s) => s.status === 'pending').map((s) => s.path)
  if (pending.some((p) => !state.seenPending.includes(p))) {
    save(SEEN_KEY, pending)
    setState({ seenPending: pending })
  }
}

// ---------- Aplicar (npm run dev) ----------

interface ApplyJob {
  startedAt: number
  items: { path: string; key: string; toVoice: VoiceId }[]
}

// Troca a voz de todos os áudios com sugestão pendente e gera os áudios de novo.
// As sugestões só são marcadas como aplicadas quando a geração termina (sem erro
// naquele áudio); se o app for fechado no meio, termina na próxima abertura.
export async function applyAllSuggestions(): Promise<void> {
  const pending = (state.all ?? state.mine).filter((s) => s.status === 'pending')
  if (!pending.length) return
  const changes: Record<string, VoiceId> = {}
  for (const s of pending) changes[s.key] = s.toVoice
  const job: ApplyJob = {
    startedAt: Date.now(),
    items: pending.map((s) => ({ path: s.path, key: s.key, toVoice: s.toVoice }))
  }
  const started = await audioTools!.setVoices(changes)
  if (!started) {
    setState({
      error: 'Já há uma geração de áudios em andamento. Tente de novo quando ela terminar.'
    })
    return
  }
  save(APPLY_KEY, job)
  setState({ applying: true, error: null })
}

function finishApplyIfDone(): void {
  const job = load<ApplyJob | null>(APPLY_KEY, null)
  if (!job) return
  const { status } = getAudioDev()
  // Espera a rodada que começou com o "aplicar" terminar
  if (!status || status.running || !status.finishedAt || status.startedAt < job.startedAt - 5000)
    return
  save(APPLY_KEY, null)
  const batch = writeBatch(db)
  const now = Date.now()
  let failed = 0
  for (const item of job.items) {
    if (item.key in status.errors) {
      failed++
      continue
    }
    batch.update(doc(db, item.path), { status: 'applied', appliedAt: now, seenByUser: false })
  }
  void batch
    .commit()
    .catch((e) => setState({ error: `Não foi possível marcar as sugestões: ${e}` }))
  setState({
    applying: false,
    error: failed ? `${failed} áudio(s) deram erro ao gerar e continuam pendentes.` : null
  })
}

// ---------- Liga e desliga conforme o login (chamado uma vez, em main.tsx) ----------

export function initAudioSuggestions(): void {
  let stopMine: Unsubscribe | null = null
  let stopAll: Unsubscribe | null = null

  onAuthStateChanged(auth, (user) => {
    stopMine?.()
    stopAll?.()
    stopMine = stopAll = null
    setState({ user, mine: [], all: null })
    if (!user) return

    stopMine = onSnapshot(
      mineRef(user.uid),
      (snapshot) =>
        setState({
          mine: snapshot.docs
            .map((d) => parse(d.ref.path, d.data()))
            .filter((s): s is AudioSuggestion => !!s)
            .sort(byNewest)
        }),
      (e) => setState({ error: `Não foi possível ler as sugestões: ${e.message}` })
    )

    // No npm run dev, tenta ler as sugestões de todos (só funciona para o administrador)
    void audioToolsAvailable().then((dev) => {
      setState({ dev })
      if (!dev || state.user?.uid !== user.uid) return
      stopAll = onSnapshot(
        collectionGroup(db, 'audioSuggestions'),
        (snapshot) =>
          setState({
            all: snapshot.docs
              // Só as deste app (outros apps do projeto podem ter coleções com o mesmo nome)
              .filter((d) => d.ref.path.includes(`/apps/${APP_ID}/`))
              .map((d) => parse(d.ref.path, d.data()))
              .filter((s): s is AudioSuggestion => !!s)
              .sort(byNewest)
          }),
        // Sem permissão: não é a conta administradora; fica só com as próprias
        () => setState({ all: null })
      )
    })
  })

  // Terminar uma aplicação em andamento quando a geração acabar
  subscribeAudioDev(finishApplyIfDone)
}

// Bolinhas no botão Configurações: vermelha (dev) se há sugestão pendente ainda não
// vista na lista; verde se uma sugestão sua foi aplicada e você ainda não viu
export function useSuggestionDots(): { red: boolean; green: boolean } {
  const s = useAudioSuggestions()
  const red =
    s.dev &&
    (s.all ?? s.mine).some((x) => x.status === 'pending' && !s.seenPending.includes(x.path))
  const green = s.mine.some((x) => x.status === 'applied' && !x.seenByUser)
  return { red, green }
}
