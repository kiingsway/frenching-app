import { useSyncExternalStore } from 'react'

// Aviso de versão nova do site (PWA). Quem preenche é src/renderer/src/main-web.tsx,
// que só existe no build web; no Electron este estado nunca muda e o aviso não aparece.

export interface AppUpdateState {
  // Há uma versão nova baixada, esperando para entrar no lugar da atual
  needRefresh: boolean
  // Primeira instalação terminou: o site já funciona sem internet
  offlineReady: boolean
}

let state: AppUpdateState = { needRefresh: false, offlineReady: false }
let applyUpdate: (() => Promise<void>) | null = null
const listeners = new Set<() => void>()

function setState(patch: Partial<AppUpdateState>): void {
  state = { ...state, ...patch }
  listeners.forEach((listener) => listener())
}

export function notifyUpdateAvailable(apply: () => Promise<void>): void {
  applyUpdate = apply
  setState({ needRefresh: true })
}

export const notifyOfflineReady = (): void => setState({ offlineReady: true })

// Troca para a versão nova (a página recarrega)
export const updateNow = (): void => void applyUpdate?.()

export const dismissUpdate = (): void => setState({ needRefresh: false, offlineReady: false })

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useAppUpdate(): AppUpdateState {
  return useSyncExternalStore(subscribe, () => state)
}
