import { contextBridge, ipcRenderer, type IpcRendererEvent } from 'electron'
import type { AudioGenStatus, VoiceId, VoiceOverrides } from '../renderer/src/lib/audio-texts'
import type { ReviewEntry, ReviewKind, ReviewMap } from '../renderer/src/lib/review-types'
import type { UpdaterStatus } from '../renderer/src/lib/updater-types'

export type ZoomAction = 'in' | 'out' | 'reset'

// API exposta ao renderer. Aqui entrarão depois o acesso ao banco (SQLite)
// e outros recursos do sistema.
const api = {
  platform: process.platform,
  versions: {
    electron: process.versions.electron,
    node: process.versions.node
  },
  // Atalhos Ctrl +, Ctrl - e Ctrl 0, capturados no processo principal.
  // Retorna a função que cancela a inscrição.
  onZoomShortcut(callback: (action: ZoomAction) => void): () => void {
    const listener = (_: IpcRendererEvent, action: ZoomAction): void => callback(action)
    ipcRenderer.on('zoom-shortcut', listener)
    return () => ipcRenderer.removeListener('zoom-shortcut', listener)
  },
  // Lista de áudios (só no modo de desenvolvimento; veja src/main/audio.ts)
  audio: {
    available: (): Promise<boolean> => ipcRenderer.invoke('audio:available'),
    // Chave do arquivo → data de geração (ms), e o peso total dos mp3 em bytes
    files: (): Promise<{ mtimes: Record<string, number>; totalBytes: number }> =>
      ipcRenderer.invoke('audio:files'),
    status: (): Promise<AudioGenStatus | null> => ipcRenderer.invoke('audio:status'),
    // keys = null gera os que faltam; uma lista gera de novo só esses.
    // Retorna false se já há uma geração rodando.
    generate: (keys: string[] | null): Promise<boolean> =>
      ipcRenderer.invoke('audio:generate', keys),
    // Chave do arquivo → voz, só para os textos que não usam a padrão
    voices: (): Promise<VoiceOverrides> => ipcRenderer.invoke('audio:voices'),
    // Troca a voz de um texto e gera o áudio dele de novo
    setVoice: (key: string, voice: VoiceId): Promise<boolean> =>
      ipcRenderer.invoke('audio:set-voice', key, voice),
    // Troca a voz de vários textos e gera todos numa só rodada
    setVoices: (changes: Record<string, VoiceId>): Promise<boolean> =>
      ipcRenderer.invoke('audio:set-voices', changes),
    onChange(callback: () => void): () => void {
      const listener = (): void => callback()
      ipcRenderer.on('audio-changed', listener)
      return () => ipcRenderer.removeListener('audio-changed', listener)
    }
  },
  // Login com Google pelo navegador do sistema (veja src/main/google-auth.ts)
  auth: {
    configured: (): Promise<boolean> => ipcRenderer.invoke('auth:configured'),
    // Abre o navegador e espera o login; devolve o id_token do Google
    googleSignIn: (): Promise<{ idToken: string }> => ipcRenderer.invoke('auth:google-sign-in'),
    cancel: (): Promise<void> => ipcRenderer.invoke('auth:cancel')
  },
  // Atualização automática do app instalado (veja src/main/updater.ts)
  updates: {
    status: (): Promise<UpdaterStatus> => ipcRenderer.invoke('update:status'),
    check: (): Promise<void> => ipcRenderer.invoke('update:check'),
    // Fecha, instala a versão baixada e abre de novo
    install: (): Promise<void> => ipcRenderer.invoke('update:install'),
    onStatus(callback: (status: UpdaterStatus) => void): () => void {
      const listener = (_: IpcRendererEvent, status: UpdaterStatus): void => callback(status)
      ipcRenderer.on('update:status', listener)
      return () => ipcRenderer.removeListener('update:status', listener)
    }
  },
  // Revisão das questões de gramática e dos flashcards (só no modo de desenvolvimento;
  // veja src/main/review.ts). kind escolhe o arquivo; o padrão é a gramática
  review: {
    available: (): Promise<boolean> => ipcRenderer.invoke('review:available'),
    get: (kind: ReviewKind = 'grammar'): Promise<ReviewMap> =>
      ipcRenderer.invoke('review:get', kind),
    // entry = null apaga a revisão. Retorna todas as revisões do arquivo
    set: (
      id: string,
      entry: ReviewEntry | null,
      kind: ReviewKind = 'grammar'
    ): Promise<ReviewMap> => ipcRenderer.invoke('review:set', id, entry, kind)
  },
  // Caixa de entrada de conteúdo: salva o JSON de uma página em content-inbox/ (só no
  // modo de desenvolvimento; veja src/main/inbox.ts)
  inbox: {
    available: (): Promise<boolean> => ipcRenderer.invoke('inbox:available'),
    // ok = false traz a mensagem de erro; ok = true traz o nome do arquivo salvo
    save: (text: string): Promise<{ ok: boolean; message: string }> =>
      ipcRenderer.invoke('inbox:save', text)
  }
}

contextBridge.exposeInMainWorld('api', api)

export type Api = typeof api
