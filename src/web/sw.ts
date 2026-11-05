/// <reference lib="webworker" />
// Service worker do site (PWA), só no build web (vite.web.config.ts, modo injectManifest).
// - Guarda os arquivos do app (JS, CSS, HTML, fontes, ícones) na instalação.
// - Guarda os áudios mp3 conforme forem tocados (são ~20 MB; baixar todos na
//   instalação pesaria demais na primeira visita, principalmente no celular).
// Assim, depois da primeira visita, o site abre e funciona sem internet.
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'
import { RangeRequestsPlugin } from 'workbox-range-requests'
import type { WorkboxPlugin } from 'workbox-core'

declare const self: ServiceWorkerGlobalScope

// Lista de arquivos do build, preenchida pelo vite-plugin-pwa
precacheAndRoute(self.__WB_MANIFEST)
cleanupOutdatedCaches()

// Qualquer navegação (ex.: abrir o site instalado sem internet) usa o index.html guardado
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html')))

// O <audio> pede os arquivos em pedaços (cabeçalho Range) e o servidor responde 206,
// que o Cache Storage não aceita guardar. Por isso o pedido à rede vai sem Range (vem
// o arquivo inteiro, que é guardado) e o RangeRequestsPlugin corta o pedaço pedido
// a partir da cópia guardada.
const fullFileRequest: WorkboxPlugin = {
  requestWillFetch: async ({ request }) => {
    if (!request.headers.has('range')) return request
    return new Request(request.url, { credentials: request.credentials, mode: 'cors' })
  }
}

// Os nomes dos mp3 do build têm hash (mudam quando o áudio muda), então nunca ficam velhos
registerRoute(
  ({ url, request }) =>
    url.origin === self.location.origin &&
    (request.destination === 'audio' || url.pathname.endsWith('.mp3')),
  new CacheFirst({
    cacheName: 'frenching-audio',
    plugins: [
      fullFileRequest,
      new CacheableResponsePlugin({ statuses: [200] }),
      new RangeRequestsPlugin(),
      // Áudios antigos (de versões passadas) saem depois de um tempo sem uso
      new ExpirationPlugin({ maxAgeSeconds: 120 * 24 * 60 * 60, purgeOnQuotaError: true })
    ]
  })
)

// Versão nova: o aviso "Atualizar" (main-web.tsx) pede para ela entrar no lugar da atual
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') void self.skipWaiting()
})
