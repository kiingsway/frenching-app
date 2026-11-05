import { readFileSync } from 'fs'
import { resolve } from 'path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Build do site (Vercel / PWA). Usa o mesmo renderer do Electron (src/renderer):
// componentes, páginas, conteúdo, áudios e Firebase são os mesmos. Só muda a
// "camada de plataforma" (src/renderer/src/lib/platform.ts), escolhida em tempo de
// execução pela presença de window.api.
//   npm run dev:web    → servidor local (porta 5174, para não brigar com o Electron na 5173)
//   npm run build:web  → gera dist-web/ (é o que a Vercel publica)

// Política de segurança (CSP) da versão web. Igual à do Electron, mais o que a janela
// de login do Firebase (signInWithPopup) precisa: o script do Google (apis.google.com)
// e o iframe do domínio de autenticação (sway-apps.firebaseapp.com)
const WEB_CSP = [
  "default-src 'self'",
  "script-src 'self' https://apis.google.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://*.googleusercontent.com",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self' https://*.googleapis.com https://apis.google.com https://sway-apps.firebaseapp.com",
  'frame-src https://sway-apps.firebaseapp.com https://apis.google.com https://accounts.google.com',
  "worker-src 'self'",
  "manifest-src 'self'"
].join('; ')

// Ajustes no index.html só para a web: CSP acima, entrada main-web.tsx (que registra o
// service worker) e ícones/cor do tema. O index.html original segue o do Electron
function webIndexHtml(): Plugin {
  return {
    name: 'frenching-web-index',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html
          .replace(
            /<meta\s+http-equiv="Content-Security-Policy"[\s\S]*?\/>/,
            `<meta http-equiv="Content-Security-Policy" content="${WEB_CSP}" />`
          )
          .replace('/src/main.tsx', '/src/main-web.tsx')
          .replace(
            '<title>',
            [
              '<meta name="viewport" content="width=device-width, initial-scale=1" />',
              '<meta name="theme-color" content="#2f5bea" />',
              '<meta name="description" content="Estudos de francês para o TEF/TCF Canada" />',
              '<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />',
              '<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />',
              '<title>'
            ].join('\n    ')
          )
      }
    }
  }
}

// Versão do app (package.json), mostrada nas Configurações
const APP_VERSION = JSON.parse(readFileSync(resolve('package.json'), 'utf8')).version as string

export default defineConfig({
  root: resolve('src/renderer'),
  define: { __APP_VERSION__: JSON.stringify(APP_VERSION) },
  // Arquivos estáticos só do site (ícones do PWA); o Electron não usa esta pasta
  publicDir: resolve('public-web'),
  resolve: {
    alias: {
      '@': resolve('src/renderer/src')
    }
  },
  plugins: [
    webIndexHtml(),
    react(),
    VitePWA({
      // Service worker próprio (src/web/sw.ts): guarda o app na instalação e os mp3
      // conforme forem tocados (veja o arquivo)
      strategies: 'injectManifest',
      srcDir: resolve('src/web'),
      filename: 'sw.ts',
      // A versão nova espera o usuário clicar em "Atualizar" (aviso em UpdateToast.tsx)
      registerType: 'prompt',
      // O registro é feito em main-web.tsx (virtual:pwa-register)
      injectRegister: false,
      injectManifest: {
        // Arquivos do app guardados na instalação. Os mp3 ficam de fora (~20 MB):
        // entram no cache quando são tocados. Das fontes, só woff2 (todo navegador com
        // service worker lê woff2; o .woff é só para navegadores antigos)
        globPatterns: ['**/*.{js,css,html,woff2,png,svg,ico,webmanifest}'],
        globIgnores: ['**/*.mp3'],
        // O bundle principal tem o conteúdo de estudo todo e passa de 2 MB
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024
      },
      manifest: {
        name: 'Frenching',
        short_name: 'Frenching',
        description: 'Estudos de francês para o TEF/TCF Canada',
        lang: 'pt-BR',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        theme_color: '#2f5bea',
        background_color: '#f6f7fb',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          {
            src: '/icons/maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      // No dev:web não há service worker (evita cache atrapalhando o desenvolvimento);
      // teste o PWA com build:web + preview:web
      devOptions: { enabled: false }
    })
  ],
  server: {
    port: 5174,
    strictPort: true,
    watch: { ignored: ['**/assets/audio/voices.json'] }
  },
  preview: {
    port: 4174,
    strictPort: true
  },
  build: {
    outDir: resolve('dist-web'),
    emptyOutDir: true,
    // Áudios pequenos não viram "data:" dentro do JS: a CSP só deixa tocar áudio de
    // arquivos do próprio site, e assim o service worker consegue guardá-los
    assetsInlineLimit: (filePath: string) => (filePath.endsWith('.mp3') ? false : undefined)
  }
})
