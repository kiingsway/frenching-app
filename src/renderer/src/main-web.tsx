/// <reference types="vite-plugin-pwa/client" />
// Entrada do build web (site/PWA). O vite.web.config.ts troca no index.html o
// /src/main.tsx por este arquivo; o Electron continua usando main.tsx direto e nunca
// registra service worker.
import { registerSW } from 'virtual:pwa-register'
import { notifyOfflineReady, notifyUpdateAvailable } from './lib/app-update'
import './main'

// Registra o service worker (src/web/sw.ts). Com registerType "prompt", a versão nova
// fica esperando até o usuário clicar em "Atualizar" no aviso
const updateSW = registerSW({
  onNeedRefresh() {
    notifyUpdateAvailable(() => updateSW(true))
  },
  onOfflineReady() {
    notifyOfflineReady()
  },
  onRegisteredSW(_url, registration) {
    // Site aberto por muito tempo (ex.: instalado): procura versão nova a cada hora
    if (registration) setInterval(() => void registration.update(), 60 * 60 * 1000)
  }
})
