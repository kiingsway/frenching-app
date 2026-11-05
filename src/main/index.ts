import { app, BrowserWindow, shell } from 'electron'
import { join } from 'path'
import { setupAudioTools } from './audio'
import { setupReviewTools } from './review'
import { setupGoogleAuth } from './google-auth'

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    // Pequena o bastante para o layout estreito (barra de navegação embaixo)
    minWidth: 360,
    minHeight: 520,
    title: 'Frenching',
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      sandbox: false
    }
  })

  win.once('ready-to-show', () => win.show())

  // Ctrl + / Ctrl - / Ctrl 0 mudam o zoom do conteúdo da página de estudo,
  // em vez do zoom padrão do Electron, que aumentaria a janela inteira
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown' || !(input.control || input.meta)) return
    const { key, code } = input
    const action =
      key === '+' || key === '=' || code === 'NumpadAdd' || code === 'Equal'
        ? 'in'
        : key === '-' || code === 'NumpadSubtract' || code === 'Minus'
          ? 'out'
          : key === '0' || code === 'Numpad0' || code === 'Digit0'
            ? 'reset'
            : null
    if (!action) return
    event.preventDefault()
    win.webContents.send('zoom-shortcut', action)
  })

  // Links externos abrem no navegador padrão, não dentro do app
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  if (process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// Pasta dos dados do app (progresso, login, cache): sempre %APPDATA%\frenching-electron.
// O instalador chama o app de "Frenching", e sem isto o Electron usaria outra pasta:
// o app instalado abriria sem o progresso salvo pelo npm run dev, e vice-versa.
app.setPath('userData', join(app.getPath('appData'), 'frenching-electron'))

// Só uma cópia do app por vez: duas cópias abertas disputam os dados salvos no
// computador, e a segunda abriria "vazia" (sem progresso e sem login). Abrir de
// novo só traz para a frente a janela que já está aberta.
const isFirstInstance = app.requestSingleInstanceLock()
if (!isFirstInstance) {
  app.quit()
} else {
  app.on('second-instance', () => {
    const win = BrowserWindow.getAllWindows()[0]
    if (!win) return
    if (win.isMinimized()) win.restore()
    win.focus()
  })
}

app.whenReady().then(() => {
  if (!isFirstInstance) return
  setupAudioTools()
  setupReviewTools()
  setupGoogleAuth()
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
