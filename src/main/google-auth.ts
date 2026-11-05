// Login com Google pelo navegador do sistema.
//
// O Google não deixa fazer login dentro de janelas embutidas (como a do Electron),
// então o fluxo é o recomendado para apps de desktop (OAuth com "loopback" + PKCE):
//  1. sobe um servidor local temporário em 127.0.0.1, numa porta livre;
//  2. abre a página de login do Google no navegador padrão;
//  3. o Google redireciona o navegador para o servidor local com um código;
//  4. o código é trocado por um id_token, que o app entrega ao Firebase Auth.
//
// O cliente OAuth é do tipo "App para computador" (Desktop), do projeto sway-apps.
// O "client secret" desse tipo de cliente não é secreto de verdade (o Google sabe
// que ele vai dentro do app); a segurança vem do PKCE e do redirecionamento local.

import { createHash, randomBytes } from 'crypto'
import { createServer, type Server } from 'http'
import type { AddressInfo } from 'net'
import { ipcMain, shell } from 'electron'

const CLIENT_ID = import.meta.env.MAIN_VITE_GOOGLE_CLIENT_ID
const CLIENT_SECRET = import.meta.env.MAIN_VITE_GOOGLE_CLIENT_SECRET
// Tempo para concluir o login no navegador
const TIMEOUT_MS = 5 * 60 * 1000

const base64url = (buffer: Buffer): string =>
  buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

// Página mostrada no navegador depois do login
const page = (title: string, text: string): string => `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>Frenching</title>
<style>body{font-family:system-ui,sans-serif;display:grid;place-items:center;height:100vh;margin:0;background:#f6f7fb;color:#1b2130}
main{text-align:center;max-width:420px;padding:32px}h1{font-size:22px;margin:0 0 8px}p{color:#5a6275;margin:0}</style>
</head><body><main><h1>${title}</h1><p>${text}</p></main></body></html>`

let pending: { server: Server; cancel: () => void } | null = null

function signIn(): Promise<{ idToken: string }> {
  if (!CLIENT_ID || !CLIENT_SECRET)
    return Promise.reject(
      new Error('Login com Google não configurado: falta o cliente OAuth no arquivo .env.')
    )

  // Um login por vez: um novo clique cancela o anterior
  pending?.cancel()

  const verifier = base64url(randomBytes(32))
  const challenge = base64url(createHash('sha256').update(verifier).digest())
  const state = base64url(randomBytes(16))

  return new Promise((resolve, reject) => {
    let redirectUri = ''
    let settled = false
    const finish = (error: Error | null, idToken?: string): void => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      server.close()
      pending = null
      if (error) reject(error)
      else resolve({ idToken: idToken! })
    }

    const server = createServer(async (req, res) => {
      const url = new URL(req.url ?? '/', redirectUri)
      if (url.pathname !== '/') {
        res.writeHead(404).end()
        return
      }
      const error = url.searchParams.get('error')
      const code = url.searchParams.get('code')
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      if (error || !code || url.searchParams.get('state') !== state) {
        res.end(page('Login cancelado', 'Você pode fechar esta aba e tentar de novo no Frenching.'))
        finish(
          new Error(error === 'access_denied' ? 'Login cancelado.' : 'Falha no login com Google.')
        )
        return
      }
      try {
        const response = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            code,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: redirectUri,
            grant_type: 'authorization_code',
            code_verifier: verifier
          })
        })
        const data = (await response.json()) as { id_token?: string; error_description?: string }
        if (!response.ok || !data.id_token)
          throw new Error(data.error_description ?? 'Resposta inválida do Google.')
        res.end(page('Pronto!', 'Login feito. Você já pode fechar esta aba e voltar ao Frenching.'))
        finish(null, data.id_token)
      } catch (e) {
        res.end(
          page('Algo deu errado', 'Não foi possível concluir o login. Tente de novo no Frenching.')
        )
        finish(e instanceof Error ? e : new Error(String(e)))
      }
    })

    const timer = setTimeout(
      () => finish(new Error('O login demorou demais e foi cancelado.')),
      TIMEOUT_MS
    )
    pending = { server, cancel: () => finish(new Error('Login cancelado.')) }

    // Porta 0 = o sistema escolhe uma livre; só aceita conexões da própria máquina
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address() as AddressInfo
      redirectUri = `http://127.0.0.1:${port}`
      const auth = new URL('https://accounts.google.com/o/oauth2/v2/auth')
      auth.search = new URLSearchParams({
        client_id: CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: 'openid email profile',
        code_challenge: challenge,
        code_challenge_method: 'S256',
        state,
        prompt: 'select_account'
      }).toString()
      void shell.openExternal(auth.toString())
    })
    server.on('error', (e) => finish(e))
  })
}

export function setupGoogleAuth(): void {
  ipcMain.handle('auth:configured', () => !!CLIENT_ID && !!CLIENT_SECRET)
  ipcMain.handle('auth:google-sign-in', () => signIn())
  ipcMain.handle('auth:cancel', () => pending?.cancel())
}
