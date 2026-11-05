// Atualização automática do app do Windows (electron-updater + Releases do GitHub).
//
// O app instalado consulta github.com/kiingsway/frenching-app/releases ao abrir e a
// cada 6 horas. Se houver versão nova (arquivo latest.yml da release), baixa em segundo
// plano e avisa a interface; ela entra no lugar da atual ao clicar em "Reiniciar" ou,
// sem clicar, na próxima vez que o app for fechado.
// Só funciona no app instalado (NSIS): no npm run dev, no preview e na versão portátil
// não há atualização automática.

import { app, BrowserWindow, ipcMain } from 'electron'
import electronUpdater from 'electron-updater'
import type { UpdaterStatus } from '../renderer/src/lib/updater-types'

const { autoUpdater } = electronUpdater

const CHECK_EVERY_MS = 6 * 60 * 60 * 1000

let status: UpdaterStatus = { state: 'idle' }

function setStatus(next: UpdaterStatus): void {
  status = next
  for (const win of BrowserWindow.getAllWindows()) win.webContents.send('update:status', status)
}

// Mensagens de erro curtas (sem internet não é erro: só não deu para procurar agora)
function describe(error: Error): string {
  const text = error.message || String(error)
  if (/ENOTFOUND|ECONNREFUSED|ETIMEDOUT|ERR_INTERNET_DISCONNECTED|net::/i.test(text))
    return 'Sem conexão para procurar atualizações.'
  if (/404|Cannot find latest/i.test(text)) return 'Nenhuma versão publicada nos Releases ainda.'
  return text.split('\n')[0]
}

async function check(): Promise<void> {
  if (status.state === 'unsupported' || status.state === 'downloading' || status.state === 'ready')
    return
  try {
    await autoUpdater.checkForUpdates()
  } catch (e) {
    setStatus({ state: 'error', message: describe(e as Error) })
  }
}

export function setupUpdater(): void {
  ipcMain.handle('update:status', () => status)
  ipcMain.handle('update:check', () => check())
  ipcMain.handle('update:install', () => {
    // Fecha o app, instala a versão baixada e abre de novo
    if (status.state === 'ready') setImmediate(() => autoUpdater.quitAndInstall(false, true))
  })

  // A versão portátil roda direto do .exe baixado: não tem o que atualizar no lugar
  if (!app.isPackaged || process.env.PORTABLE_EXECUTABLE_DIR) {
    status = { state: 'unsupported', reason: app.isPackaged ? 'portable' : 'dev' }
    return
  }

  autoUpdater.autoDownload = true
  autoUpdater.autoInstallOnAppQuit = true
  // Só para testar: FRENCHING_UPDATE_FEED=http://localhost:PORTA lê latest.yml e o
  // instalador desse endereço em vez dos Releases do GitHub
  const testFeed = process.env.FRENCHING_UPDATE_FEED
  if (testFeed) autoUpdater.setFeedURL({ provider: 'generic', url: testFeed })
  autoUpdater.on('checking-for-update', () => setStatus({ state: 'checking' }))
  autoUpdater.on('update-available', (info) =>
    setStatus({ state: 'downloading', version: info.version, percent: 0 })
  )
  autoUpdater.on('download-progress', (progress) => {
    if (status.state === 'downloading')
      setStatus({ ...status, percent: Math.round(progress.percent) })
  })
  autoUpdater.on('update-not-available', () =>
    setStatus({ state: 'up-to-date', checkedAt: Date.now() })
  )
  autoUpdater.on('update-downloaded', (info) =>
    setStatus({ state: 'ready', version: info.version })
  )
  autoUpdater.on('error', (error) => setStatus({ state: 'error', message: describe(error) }))

  // Primeira busca logo depois de abrir (sem atrasar a janela), depois a cada 6 horas
  setTimeout(() => void check(), 5000)
  setInterval(() => void check(), CHECK_EVERY_MS)
}
