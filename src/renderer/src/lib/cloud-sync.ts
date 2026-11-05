import { useSyncExternalStore } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, onSnapshot, serverTimestamp, setDoc, type FirestoreError } from 'firebase/firestore'
import { accentPref } from './accent'
import { backgroundPref } from './background'
import { completedStore } from './completed'
import { APP_ID, auth, db } from './firebase'
import { grammarStore } from './grammar-progress'
import type { MapStore } from './map-store'
import { themeModePref, topicLangPref, topicZoomPref, type Pref } from './prefs'
import { load, save } from './storage'

// Sincronização com a conta (login opcional).
//
// Tudo continua salvo no computador; com login, também vai para o Firestore em
// users/{uid}/apps/frenching/data/…:
//
//  settings (tema, cor, idioma e zoom das páginas)
//   - ao entrar, o que está na conta passa a valer neste computador;
//   - se a conta ainda não tem nada (primeiro login), sobe o que está no computador.
//
//  progress (tópicos concluídos e desempenho na gramática)
//   - o que está na conta e o que está no computador se JUNTAM, registro a registro
//     (um por tópico, um por questão), e o resultado fica nos dois lados;
//   - em cada registro, vale a regra do seu store (tópico: marcação mais recente;
//     questão: mais tentativas).
//
//  Nos dois casos, cada mudança depois disso é salva na conta, mudanças feitas em
//  outro computador chegam sozinhas, e sem internet as gravações ficam na fila do
//  Firestore até a conexão voltar.
//
//  Ao sair da conta (botão Sair), o progresso é apagado deste computador: ele
//  continua na conta e volta ao entrar de novo. O que for feito sem login depois
//  disso não é de ninguém e é juntado à próxima conta que entrar, seja qual for.
//  As configurações continuam aplicadas.
//
//  Proteção extra: se a sessão de uma conta acabar sem o botão Sair (ex.: login
//  revogado) e outra conta entrar, o progresso salvo aqui (que é da conta anterior)
//  não é misturado: ele é trocado pelo progresso da conta nova.

// Campo no documento de configurações → preferência local
const SETTINGS: Record<string, Pref<unknown>> = {
  themeMode: themeModePref as Pref<unknown>,
  accent: accentPref as Pref<unknown>,
  background: backgroundPref as Pref<unknown>,
  topicLang: topicLangPref as Pref<unknown>,
  topicZoom: topicZoomPref as Pref<unknown>
}

// Campo no documento de progresso → mapa local
const PROGRESS: Record<string, MapStore<unknown>> = {
  topics: completedStore as MapStore<unknown>,
  grammar: grammarStore as MapStore<unknown>
}

// Conta dona do que está salvo neste computador (a última que sincronizou)
const OWNER_KEY = 'syncOwner'

// ---------- Situação da sincronização (mostrada no cartão Conta) ----------

// off: sem login · connecting: esperando a conta · saving: enviando mudanças
// synced: tudo salvo na conta · offline: sem internet (mudanças ficam na fila) · error
export type SyncState = 'off' | 'connecting' | 'saving' | 'synced' | 'offline' | 'error'
type Part = 'settings' | 'progress'
type PartState = {
  state: 'off' | 'connecting' | 'synced' | 'error'
  pending: boolean
  error: string | null
}

const parts: Record<Part, PartState> = {
  settings: { state: 'off', pending: false, error: null },
  progress: { state: 'off', pending: false, error: null }
}
let online = typeof navigator === 'undefined' ? true : navigator.onLine
let status: { state: SyncState; error: string | null } = { state: 'off', error: null }
const listeners = new Set<() => void>()

function updateStatus(): void {
  const all = Object.values(parts)
  const failed = all.find((p) => p.state === 'error')
  const next: typeof status = failed
    ? { state: 'error', error: failed.error }
    : all.every((p) => p.state === 'off')
      ? { state: 'off', error: null }
      : !online
        ? { state: 'offline', error: null }
        : all.some((p) => p.state === 'connecting')
          ? { state: 'connecting', error: null }
          : all.some((p) => p.pending)
            ? { state: 'saving', error: null }
            : { state: 'synced', error: null }
  if (next.state === status.state && next.error === status.error) return
  status = next
  listeners.forEach((listener) => listener())
}

function setPart(part: Part, next: Partial<PartState>): void {
  parts[part] = { ...parts[part], ...next }
  updateStatus()
}

// Saber se há internet, para avisar que as mudanças estão na fila
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    online = true
    updateStatus()
  })
  window.addEventListener('offline', () => {
    online = false
    updateStatus()
  })
}

export function useSyncStatus(): typeof status {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => status
  )
}

const describe = (e: FirestoreError): string =>
  e.code === 'permission-denied'
    ? 'Sem permissão para salvar na conta (regras do Firestore).'
    : `Não foi possível sincronizar: ${e.message}`

// ---------- Configurações ----------

function startSettingsSync(uid: string): () => void {
  const ref = doc(db, 'users', uid, 'apps', APP_ID, 'data', 'settings')
  // Enquanto aplica valores vindos da nuvem, não os manda de volta
  let applyingRemote = false
  // Só depois de saber o que há na conta é que mudanças locais sobem
  let ready = false
  // Configurações mudadas aqui antes disso (ex.: abriu o app sem internet e trocou o
  // tema): na primeira resposta da conta, essas valem mais que as da conta
  const changedBeforeReady = new Set<string>()
  setPart('settings', { state: 'connecting', error: null })

  const upload = (values: Record<string, unknown>): void => {
    void setDoc(ref, { ...values, updatedAt: serverTimestamp() }, { merge: true }).catch(
      (e: FirestoreError) => setPart('settings', { state: 'error', error: describe(e) })
    )
  }

  const unsubscribeSnapshot = onSnapshot(
    ref,
    // Também avisa quando uma gravação pendente é confirmada (para o estado "enviando")
    { includeMetadataChanges: true },
    (snapshot) => {
      setPart('settings', { pending: snapshot.metadata.hasPendingWrites })
      // O primeiro resultado pode vir do cache local; para decidir se a conta
      // está vazia, espera a resposta do servidor
      if (!snapshot.exists()) {
        if (snapshot.metadata.fromCache || ready) return
        ready = true
        upload(
          Object.fromEntries(Object.entries(SETTINGS).map(([field, pref]) => [field, pref.get()]))
        )
        setPart('settings', { state: 'synced' })
        return
      }
      // Os valores aqui já incluem as nossas gravações pendentes, então aplicar é
      // seguro (não desfaz nada) e garante que mudanças de outro computador cheguem
      const data = snapshot.data()
      applyingRemote = true
      for (const [field, pref] of Object.entries(SETTINGS)) {
        if (changedBeforeReady.has(field)) continue
        if (field in data && pref.isValid(data[field])) pref.set(data[field])
      }
      applyingRemote = false
      if (!ready) {
        ready = true
        if (changedBeforeReady.size)
          upload(Object.fromEntries([...changedBeforeReady].map((f) => [f, SETTINGS[f].get()])))
        changedBeforeReady.clear()
      }
      setPart('settings', { state: 'synced' })
    },
    (e) => setPart('settings', { state: 'error', error: describe(e) })
  )

  const unsubscribePrefs = Object.entries(SETTINGS).map(([field, pref]) =>
    pref.subscribe(() => {
      if (applyingRemote) return
      if (!ready) changedBeforeReady.add(field)
      else upload({ [field]: pref.get() })
    })
  )

  return () => {
    unsubscribeSnapshot()
    unsubscribePrefs.forEach((unsubscribe) => unsubscribe())
    setPart('settings', { state: 'off', pending: false, error: null })
  }
}

// ---------- Progresso ----------

const same = (a: unknown, b: unknown): boolean => JSON.stringify(a) === JSON.stringify(b)

function startProgressSync(uid: string): () => void {
  const ref = doc(db, 'users', uid, 'apps', APP_ID, 'data', 'progress')
  const owner = load<string | null>(OWNER_KEY, null)
  // O que está no computador é de outra conta: não junta, troca pelo da conta nova
  let foreign = !!owner && owner !== uid
  // Último estado conhecido da conta, para subir só o que mudou
  const remote: Record<string, Record<string, unknown>> = {}
  let applyingRemote = false
  let ready = false
  setPart('progress', { state: 'connecting', error: null })

  const upload = (changes: Record<string, Record<string, unknown>>): void => {
    if (!Object.keys(changes).length) return
    // merge: true junta os mapas aninhados, então só os registros enviados mudam
    void setDoc(ref, { ...changes, updatedAt: serverTimestamp() }, { merge: true }).catch(
      (e: FirestoreError) => setPart('progress', { state: 'error', error: describe(e) })
    )
    for (const [field, entries] of Object.entries(changes))
      remote[field] = { ...remote[field], ...entries }
  }

  const unsubscribeSnapshot = onSnapshot(
    ref,
    // Também avisa quando uma gravação pendente é confirmada (para o estado "enviando")
    { includeMetadataChanges: true },
    (snapshot) => {
      setPart('progress', { pending: snapshot.metadata.hasPendingWrites })
      if (!snapshot.exists() && snapshot.metadata.fromCache && !ready) return
      // Mesmo com gravações nossas pendentes, juntar é seguro: o documento já as inclui,
      // e assim mudanças de outro computador que chegarem nesse meio-tempo não se perdem
      const data = snapshot.exists() ? snapshot.data() : {}
      const changes: Record<string, Record<string, unknown>> = {}

      for (const [field, store] of Object.entries(PROGRESS)) {
        // Só registros num formato válido
        const fromCloud: Record<string, unknown> = {}
        const raw = data[field]
        if (raw && typeof raw === 'object')
          for (const [id, value] of Object.entries(raw as Record<string, unknown>))
            if (store.isValid(value)) fromCloud[id] = value
        remote[field] = fromCloud

        const local = foreign ? {} : store.get()
        const merged: Record<string, unknown> = { ...fromCloud }
        const toUpload: Record<string, unknown> = {}
        for (const [id, value] of Object.entries(local)) {
          const cloud = fromCloud[id]
          if (cloud === undefined || store.wins(value, cloud)) {
            merged[id] = value
            if (!same(value, cloud)) toUpload[id] = value
          }
        }
        if (!same(merged, store.get())) {
          applyingRemote = true
          store.replace(merged)
          applyingRemote = false
        }
        if (Object.keys(toUpload).length) changes[field] = toUpload
      }

      upload(changes)
      foreign = false
      if (!ready) save(OWNER_KEY, uid)
      ready = true
      setPart('progress', { state: 'synced' })
    },
    (e) => setPart('progress', { state: 'error', error: describe(e) })
  )

  // Mudanças locais (marcar tópico, responder questão): sobe só os registros alterados
  const unsubscribeStores = Object.entries(PROGRESS).map(([field, store]) =>
    store.subscribe(() => {
      if (applyingRemote || !ready) return
      const changed: Record<string, unknown> = {}
      for (const [id, value] of Object.entries(store.get()))
        if (!same(value, remote[field]?.[id])) changed[id] = value
      if (Object.keys(changed).length) upload({ [field]: changed })
    })
  )

  return () => {
    unsubscribeSnapshot()
    unsubscribeStores.forEach((unsubscribe) => unsubscribe())
    setPart('progress', { state: 'off', pending: false, error: null })
  }
}

// Chamado depois de sair da conta: apaga o progresso do computador e o "dono", para
// que o que for feito sem login vá para a próxima conta que entrar. Gravações que
// ainda não tinham subido ficam na fila do Firestore daquela conta e sobem quando ela
// entrar de novo neste computador.
export function clearLocalProgress(): void {
  for (const store of Object.values(PROGRESS)) store.replace({})
  save(OWNER_KEY, null)
}

// ---------- Liga e desliga conforme o login (chamado uma vez, em main.tsx) ----------

let stop: (() => void) | null = null
let currentUid: string | null = null
export function initCloudSync(): void {
  onAuthStateChanged(auth, (user) => {
    if (user?.uid === currentUid) return
    stop?.()
    stop = null
    currentUid = user?.uid ?? null
    if (user) {
      const stopSettings = startSettingsSync(user.uid)
      const stopProgress = startProgressSync(user.uid)
      stop = () => {
        stopSettings()
        stopProgress()
      }
    }
  })
}
