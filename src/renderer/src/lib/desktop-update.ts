import { useSyncExternalStore } from 'react'
import { desktopUpdates } from './platform'
import type { UpdaterStatus } from './updater-types'

// Estado da atualização automática do app do Windows, vindo do processo principal.
// Na web fica sempre "unsupported" (lá a versão nova chega pelo service worker).

let status: UpdaterStatus = { state: 'unsupported', reason: 'dev' }
// O aviso de "versão pronta" foi fechado (continua instalando ao fechar o app)
let dismissed = false
const listeners = new Set<() => void>()
let started = false

const emit = (): void => listeners.forEach((listener) => listener())

function start(): void {
  if (started || !desktopUpdates) return
  started = true
  void desktopUpdates.status().then((s) => {
    status = s
    emit()
  })
  desktopUpdates.onStatus((s) => {
    if (s.state === 'ready' && (status.state !== 'ready' || status.version !== s.version))
      dismissed = false
    status = s
    emit()
  })
}

function subscribe(listener: () => void): () => void {
  start()
  listeners.add(listener)
  return () => listeners.delete(listener)
}

let snapshot: { status: UpdaterStatus; dismissed: boolean } = { status, dismissed }
function getSnapshot(): typeof snapshot {
  if (snapshot.status !== status || snapshot.dismissed !== dismissed)
    snapshot = { status, dismissed }
  return snapshot
}

export function useDesktopUpdate(): { status: UpdaterStatus; dismissed: boolean } {
  return useSyncExternalStore(subscribe, getSnapshot)
}

export const checkForDesktopUpdate = (): void => void desktopUpdates?.check()
export const installDesktopUpdate = (): void => void desktopUpdates?.install()
export function dismissDesktopUpdate(): void {
  dismissed = true
  emit()
}
