import { useSyncExternalStore } from 'react'
import { onAuthStateChanged, signOut as firebaseSignOut, type User } from 'firebase/auth'
import { hasCloudAccess } from './access'
import { clearLocalProgress } from './cloud-sync'
import { auth } from './firebase'
import { cancelGoogleSignIn, googleSignIn } from './platform'

// Conta do usuário (login opcional com Google).
// Sem login, o app funciona como antes, salvando tudo só no computador.

export interface AccountState {
  // false até o Firebase dizer se já há uma sessão salva
  ready: boolean
  user: User | null
}

let state: AccountState = { ready: false, user: null }
const listeners = new Set<() => void>()

onAuthStateChanged(auth, (user) => {
  state = { ready: true, user }
  listeners.forEach((listener) => listener())
})

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useAccount(): AccountState {
  return useSyncExternalStore(subscribe, () => state)
}

// Entra com Google: no Electron pelo navegador do sistema, na web por uma janela
// de login do Firebase (veja lib/platform.ts)
export async function signInWithGoogle(): Promise<void> {
  // Sem internet, nem tenta: o login precisa falar com o Google
  if (!navigator.onLine)
    throw new Error(
      'Sem internet. Conecte-se para entrar com Google; o app continua funcionando sem conta.'
    )
  await googleSignIn(auth)
}

export const cancelSignIn = (): Promise<void> => cancelGoogleSignIn()

// Sair da conta: o progresso some deste computador (continua salvo na conta e volta
// ao entrar de novo). Assim, o que for feito sem login a partir daqui não é de
// ninguém e vai para a próxima conta que entrar, seja qual for.
// As configurações (tema, cor, idioma, zoom) continuam aplicadas.
// Conta sem acesso à nuvem (aguardando aprovação ou recusada): o progresso nunca foi
// para a conta, então fica no computador ao sair.
export async function signOut(): Promise<void> {
  const hadCloud = hasCloudAccess()
  await firebaseSignOut(auth)
  if (hadCloud) clearLocalProgress()
}
