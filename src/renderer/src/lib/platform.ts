import { GoogleAuthProvider, signInWithCredential, signInWithPopup, type Auth } from 'firebase/auth'
import type { Api, ZoomAction } from '../../../preload/index'

// Camada de plataforma: o mesmo app roda como programa (Electron, com window.api
// exposto pelo preload) e como site/PWA no navegador (sem window.api).
// Tudo o que muda entre os dois fica aqui; componentes e páginas só chamam estas funções.

// API do Electron, ou undefined no navegador
const electronApi: Api | undefined = (window as { api?: Api }).api

export const isElectron = !!electronApi
export const isWeb = !isElectron

export type { ZoomAction }

// ---------- Atalhos de zoom (Ctrl +, Ctrl -, Ctrl 0) ----------

// Traduz uma tecla em ação de zoom (mesmas teclas que o processo principal captura)
function zoomActionOf(e: KeyboardEvent): ZoomAction | null {
  if (!(e.ctrlKey || e.metaKey) || e.altKey) return null
  const { key, code } = e
  if (key === '+' || key === '=' || code === 'NumpadAdd' || code === 'Equal') return 'in'
  if (key === '-' || code === 'NumpadSubtract' || code === 'Minus') return 'out'
  if (key === '0' || code === 'Numpad0' || code === 'Digit0') return 'reset'
  return null
}

// No Electron os atalhos chegam pelo processo principal; no navegador são capturados
// no teclado da própria página (e o zoom padrão do navegador é impedido).
// Retorna a função que cancela a inscrição.
export function onZoomShortcut(callback: (action: ZoomAction) => void): () => void {
  if (electronApi) return electronApi.onZoomShortcut(callback)
  const onKeyDown = (e: KeyboardEvent): void => {
    const action = zoomActionOf(e)
    if (!action) return
    e.preventDefault()
    callback(action)
  }
  window.addEventListener('keydown', onKeyDown)
  return () => window.removeEventListener('keydown', onKeyDown)
}

// ---------- Login com Google ----------

// O login está disponível? No Electron depende do cliente OAuth no .env; na web o
// Firebase cuida de tudo (só precisa do domínio autorizado no console do Firebase)
export const googleAuthConfigured = (): Promise<boolean> =>
  electronApi ? electronApi.auth.configured() : Promise.resolve(true)

// Erros vindos do processo principal chegam como
// "Error invoking remote method 'auth:google-sign-in': Error: <mensagem>"
const cleanMessage = (e: unknown): string =>
  (e instanceof Error ? e.message : String(e)).replace(
    /^Error invoking remote method '[^']+': (Error: )?/,
    ''
  )

// Mensagens do login por janela (popup) do Firebase, em português
function popupMessage(e: unknown): string {
  const code = (e as { code?: string })?.code ?? ''
  if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request')
    return 'Login cancelado.'
  if (code === 'auth/popup-blocked')
    return 'O navegador bloqueou a janela de login. Permita pop-ups para este site e tente de novo.'
  if (code === 'auth/unauthorized-domain')
    return 'Este endereço ainda não está autorizado para login no Firebase.'
  if (code === 'auth/network-request-failed') return 'Sem conexão com o Google. Tente de novo.'
  return e instanceof Error ? e.message : String(e)
}

// Entra no Firebase com a conta Google.
// Electron: abre o navegador do sistema (src/main/google-auth.ts) e usa o id_token recebido.
// Web: janela de login (popup) do próprio Firebase Auth.
export async function googleSignIn(auth: Auth): Promise<void> {
  if (electronApi) {
    try {
      const { idToken } = await electronApi.auth.googleSignIn()
      await signInWithCredential(auth, GoogleAuthProvider.credential(idToken))
    } catch (e) {
      throw new Error(cleanMessage(e))
    }
    return
  }
  try {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    await signInWithPopup(auth, provider)
  } catch (e) {
    throw new Error(popupMessage(e))
  }
}

// Cancela a espera pelo login. Na web quem cancela é o usuário, fechando a janela
export const cancelGoogleSignIn = (): Promise<void> =>
  electronApi ? electronApi.auth.cancel() : Promise.resolve()

// O botão "Cancelar" só faz sentido no Electron (na web basta fechar a janela)
export const canCancelSignIn = isElectron

// Texto enquanto espera o login
export const signInWaitingLabel = isElectron
  ? 'Continue no navegador…'
  : 'Continue na janela do Google…'

// ---------- Links externos ----------

// Abre um link fora do app: no Electron, no navegador padrão (o processo principal
// intercepta window.open); na web, em uma nova aba
export function openExternal(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer')
}

// ---------- Ferramentas de desenvolvimento ----------

// Lista de áudios (troca de voz, geração, aplicar sugestões) e revisão de questões
// que grava arquivo: só no Electron em modo de desenvolvimento. Na web ficam como no
// app de produção (só leitura / sugerir), então estas APIs são undefined.
export const audioTools = electronApi?.audio
export const reviewTools = electronApi?.review

export const audioToolsAvailable = (): Promise<boolean> =>
  audioTools ? audioTools.available() : Promise.resolve(false)

export const reviewToolsAvailable = (): Promise<boolean> =>
  reviewTools ? reviewTools.available() : Promise.resolve(false)
