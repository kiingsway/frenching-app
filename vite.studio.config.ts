// Studio: app separado, só para quem cuida do conteúdo (npm run studio). Nunca entra no
// .exe nem no site. Reaproveita o tema, os tópicos, o conteúdo e o modelo de pedido do
// app principal, e grava os JSONs colados em content-inbox/ por uma API local
// (/api/inbox), como o "Colar JSON" do npm run dev.
import { resolve } from 'path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { listInbox, saveToInbox } from './src/main/inbox-core'

const INBOX = resolve('content-inbox')

function inboxApi(): Plugin {
  return {
    name: 'studio-inbox-api',
    configureServer(server) {
      server.middlewares.use('/api/inbox', (req, res) => {
        const send = (status: number, body: unknown): void => {
          res.statusCode = status
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.end(JSON.stringify(body))
        }
        if (req.method === 'GET') return send(200, listInbox(INBOX))
        if (req.method !== 'POST') return send(405, { ok: false, message: 'Método não aceito.' })
        let raw = ''
        req.setEncoding('utf8')
        req.on('data', (chunk: string) => (raw += chunk))
        req.on('end', () => {
          try {
            const { text, topic } = JSON.parse(raw) as { text: string; topic?: string }
            const result = saveToInbox(INBOX, text, topic)
            send(result.ok ? 200 : 400, result)
          } catch (e) {
            send(400, { ok: false, message: (e as Error).message })
          }
        })
      })
    }
  }
}

export default defineConfig({
  root: resolve('studio'),
  resolve: { alias: { '@': resolve('src/renderer/src') } },
  plugins: [react(), inboxApi()],
  server: {
    port: 5175,
    strictPort: true,
    // Os arquivos do app principal (fora de studio/) podem ser servidos
    fs: { allow: [resolve('.')] },
    watch: { ignored: ['**/assets/audio/**', '**/content-inbox/**'] }
  }
})
