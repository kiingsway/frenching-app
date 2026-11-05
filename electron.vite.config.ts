import { readFileSync } from 'fs'
import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

// Versão do app (package.json), mostrada nas Configurações
const APP_VERSION = JSON.parse(readFileSync(resolve('package.json'), 'utf8')).version as string

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src')
      }
    },
    plugins: [react()],
    define: { __APP_VERSION__: JSON.stringify(APP_VERSION) },
    // Porta fixa no npm run dev: o que o app salva no computador (localStorage,
    // login) é separado por endereço, então mudar de porta faria o app abrir "vazio".
    // Se a porta estiver ocupada, o dev avisa em vez de escolher outra sozinho.
    server: {
      port: 5173,
      strictPort: true,
      // O voices.json muda ao trocar vozes e ao aplicar sugestões; sem isto, o Vite
      // recarregaria a tela no meio. No dev a voz atual é lida pelo processo principal,
      // então a cópia importada pelo app não precisa estar em dia
      watch: { ignored: ['**/assets/audio/voices.json'] }
    },
    build: {
      // Áudios pequenos não viram "data:" dentro do JS: a política de segurança da
      // página (CSP) só deixa tocar áudio de arquivos do próprio app
      assetsInlineLimit: (filePath: string) => (filePath.endsWith('.mp3') ? false : undefined)
    }
  }
})
