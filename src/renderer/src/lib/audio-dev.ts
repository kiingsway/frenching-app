import { useSyncExternalStore } from 'react'
import type { AudioGenStatus, VoiceOverrides } from './audio-texts'
import { audioTools } from './platform'

// Estado das ferramentas de áudio (só no modo de desenvolvimento): data de geração
// de cada arquivo, status do `npm run audio` e vozes escolhidas por texto.
// Um único estado compartilhado por todos os trechos de áudio da página, com uma
// só inscrição nos avisos do processo principal.
export interface AudioDevState {
  available: boolean
  mtimes: Record<string, number>
  status: AudioGenStatus | null
  voices: VoiceOverrides
}

let state: AudioDevState = {
  available: false,
  mtimes: {},
  status: null,
  voices: {}
}
const listeners = new Set<() => void>()
let started = false

async function refresh(): Promise<void> {
  const [files, status, voices] = await Promise.all([
    audioTools!.files(),
    audioTools!.status(),
    audioTools!.voices()
  ])
  state = { available: true, mtimes: files.mtimes, status, voices }
  listeners.forEach((listener) => listener())
}

function start(): void {
  if (started) return
  started = true
  // Na web (e no navegador comum) não há ferramentas de áudio: veja lib/platform.ts
  if (!audioTools) return
  void audioTools!.available().then((ok) => {
    if (!ok) return
    void refresh()
    audioTools!.onChange(() => void refresh())
  })
}

export function subscribeAudioDev(listener: () => void): () => void {
  start()
  listeners.add(listener)
  return () => listeners.delete(listener)
}
const subscribe = subscribeAudioDev

export const getAudioDev = (): AudioDevState => state

export function useAudioDev(): AudioDevState {
  return useSyncExternalStore(subscribe, () => state)
}

// O arquivo desta chave está sendo gerado agora ou ainda está na fila
export function isGenerating(status: AudioGenStatus | null, key: string): boolean {
  if (!status?.running) return false
  if (status.current === key) return true
  return status.queue.includes(key) && !status.done.includes(key) && !(key in status.errors)
}
