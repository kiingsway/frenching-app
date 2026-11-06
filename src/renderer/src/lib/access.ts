import { useSyncExternalStore } from 'react'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { doc, onSnapshot, serverTimestamp, setDoc, type Unsubscribe } from 'firebase/firestore'
import { APP_ID, auth, db } from './firebase'

// Acesso à nuvem (Firestore) de quem entrou com Google.
//
// Qualquer pessoa pode fazer login, mas só quem o admin aprovou tem os dados salvos
// na nuvem. Quem garante isso são as regras do Firestore (firestore.rules): sem
// aprovação, o banco recusa ler e gravar. Este módulo só descobre a situação para o
// app saber se liga a sincronização e o que mostrar em Configurações → Conta.
//
//  - No primeiro login, o app cria um pedido (apps/frenching/accessRequests/{uid}).
//  - O admin aprova (cria apps/frenching/members/{uid}) ou recusa (o pedido fica
//    "rejected") na tela Aprovar acessos. A pessoa não recebe aviso: só a situação
//    no cartão Conta muda, sozinha.
//  - Enquanto não é aprovada, tudo continua salvo só no computador; ao ser aprovada,
//    a sincronização liga e junta o que estava no computador com a conta.

// Mesmo uid da função isAdmin() em firestore.rules (a regra é quem vale)
export const ADMIN_UID = 'xYK4ucxImscP4kdul7sRlk4l0UC2'

export type AccessStatus =
  | 'signed-out'
  // Ainda descobrindo (ex.: primeiro login sem internet)
  | 'checking'
  | 'admin'
  | 'approved'
  | 'pending'
  | 'rejected'
  | 'error'

export interface AccessState {
  status: AccessStatus
  user: User | null
  error?: string
}

let state: AccessState = { status: 'signed-out', user: null }
const listeners = new Set<() => void>()

function setState(next: AccessState): void {
  if (
    next.status === state.status &&
    next.user?.uid === state.user?.uid &&
    next.error === state.error
  )
    return
  state = next
  listeners.forEach((listener) => listener())
}

export function subscribeAccess(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export const getAccess = (): AccessState => state

export function useAccess(): AccessState {
  return useSyncExternalStore(subscribeAccess, getAccess)
}

// Pode usar a nuvem (sincronização, sugestões)?
export const hasCloudAccess = (s: AccessState = state): boolean =>
  s.status === 'admin' || s.status === 'approved'

export const isAdmin = (s: AccessState = state): boolean => s.status === 'admin'

const membersPath = ['apps', APP_ID, 'members'] as const
const requestsPath = ['apps', APP_ID, 'accessRequests'] as const

// Liga conforme o login (chamado uma vez, em main.tsx)
export function initAccess(): void {
  let stopMember: Unsubscribe | null = null
  let stopRequest: Unsubscribe | null = null

  onAuthStateChanged(auth, (user) => {
    stopMember?.()
    stopRequest?.()
    stopMember = stopRequest = null

    if (!user) return setState({ status: 'signed-out', user: null })
    if (user.uid === ADMIN_UID) return setState({ status: 'admin', user })

    setState({ status: 'checking', user })
    let isMember: boolean | null = null
    let requestStatus: 'pending' | 'rejected' | 'approved' | 'none' | null = null
    let creating = false

    const update = (): void => {
      if (isMember) return setState({ status: 'approved', user })
      if (isMember === null || requestStatus === null) return
      if (requestStatus === 'rejected') return setState({ status: 'rejected', user })
      // Sem registro de membro, "approved" no pedido não vale (o acesso foi retirado)
      setState({ status: 'pending', user })
    }
    const fail = (e: Error): void => setState({ status: 'error', user, error: e.message })

    // Membro (aprovado): muda sozinho quando o admin aprova ou retira o acesso
    stopMember = onSnapshot(
      doc(db, ...membersPath, user.uid),
      (snapshot) => {
        // Do cache sem registro: espera o servidor antes de concluir que não é membro
        if (!snapshot.exists() && snapshot.metadata.fromCache && isMember === null) return
        isMember = snapshot.exists()
        update()
      },
      fail
    )

    // Pedido de acesso: criado no primeiro login, como "pending"
    stopRequest = onSnapshot(
      doc(db, ...requestsPath, user.uid),
      (snapshot) => {
        if (!snapshot.exists()) {
          if (snapshot.metadata.fromCache) return
          requestStatus = 'none'
          if (!creating) {
            creating = true
            void setDoc(doc(db, ...requestsPath, user.uid), {
              uid: user.uid,
              email: user.email ?? '',
              name: user.displayName ?? '',
              photoURL: user.photoURL ?? '',
              status: 'pending',
              createdAt: serverTimestamp()
            }).catch(fail)
          }
          update()
          return
        }
        const status = snapshot.data().status
        requestStatus = status === 'rejected' || status === 'approved' ? status : 'pending'
        update()
      },
      fail
    )
  })
}
