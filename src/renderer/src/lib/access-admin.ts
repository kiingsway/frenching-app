import { useSyncExternalStore } from 'react'
import { collection, doc, onSnapshot, serverTimestamp, writeBatch } from 'firebase/firestore'
import { getAccess, isAdmin } from './access'
import { APP_ID, db } from './firebase'

// Tela Aprovar acessos (só a conta administradora; as regras do Firestore recusam
// qualquer outra). Aprovar cria o registro de membro, recusar marca o pedido como
// "rejected" e retira o registro, se houver. A pessoa não recebe aviso nenhum: a
// situação no cartão Conta dela muda sozinha.

export type RequestStatus = 'pending' | 'approved' | 'rejected'

export interface AccessRequest {
  uid: string
  email: string
  name: string
  photoURL: string
  status: RequestStatus
  createdAt: number
  decidedAt?: number
}

interface State {
  // null = ainda carregando
  requests: AccessRequest[] | null
  error: string | null
}

let state: State = { requests: null, error: null }
const listeners = new Set<() => void>()
let stop: (() => void) | null = null

const setState = (next: Partial<State>): void => {
  state = { ...state, ...next }
  listeners.forEach((listener) => listener())
}

const requestsRef = () => collection(db, 'apps', APP_ID, 'accessRequests')
const toMillis = (v: unknown): number =>
  v && typeof (v as { toMillis?: unknown }).toMillis === 'function'
    ? (v as { toMillis: () => number }).toMillis()
    : Number(v) || 0

// Ouve os pedidos só enquanto alguém (tela ou cartão) está usando a lista
function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  if (!stop && isAdmin(getAccess())) {
    stop = onSnapshot(
      requestsRef(),
      (snapshot) =>
        setState({
          error: null,
          requests: snapshot.docs
            .map((d) => {
              const data = d.data()
              const status: RequestStatus =
                data.status === 'approved' || data.status === 'rejected' ? data.status : 'pending'
              return {
                uid: d.id,
                email: String(data.email ?? ''),
                name: String(data.name ?? ''),
                photoURL: String(data.photoURL ?? ''),
                status,
                createdAt: toMillis(data.createdAt),
                decidedAt: data.decidedAt ? toMillis(data.decidedAt) : undefined
              }
            })
            .sort((a, b) => b.createdAt - a.createdAt)
        }),
      (e) => setState({ error: `Não foi possível ler os pedidos: ${e.message}` })
    )
  }
  return () => {
    listeners.delete(listener)
    if (!listeners.size && stop) {
      stop()
      stop = null
      state = { requests: null, error: null }
    }
  }
}

export function useAccessRequests(): State {
  return useSyncExternalStore(subscribe, () => state)
}

export async function approveAccess(r: AccessRequest): Promise<void> {
  const batch = writeBatch(db)
  batch.set(doc(db, 'apps', APP_ID, 'members', r.uid), {
    email: r.email,
    name: r.name,
    approvedAt: serverTimestamp()
  })
  batch.update(doc(requestsRef(), r.uid), { status: 'approved', decidedAt: serverTimestamp() })
  await batch.commit()
}

// Recusar (pedido novo) ou retirar o acesso (de quem já foi aprovado)
export async function rejectAccess(r: AccessRequest): Promise<void> {
  const batch = writeBatch(db)
  batch.delete(doc(db, 'apps', APP_ID, 'members', r.uid))
  batch.update(doc(requestsRef(), r.uid), { status: 'rejected', decidedAt: serverTimestamp() })
  await batch.commit()
}
