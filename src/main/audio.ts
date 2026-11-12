// Suporte à lista de áudios (Configurações → Áudios), só no npm run dev:
// a geração usa o script do projeto, o Python e a internet, que o app empacotado não tem.
//
//  - audio:files    → data de geração (mtime) de cada mp3 da pasta e o peso total
//  - audio:status   → status da geração, lido de scripts/.audio-status.json
//  - audio:generate → roda `npm run audio` (opcionalmente só para alguns arquivos)
// Mudanças na pasta e no arquivo de status são avisadas ao renderer ('audio-changed'),
// inclusive quando o `npm run audio` é rodado pelo terminal.

import { spawn } from 'child_process'
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  watch,
  watchFile,
  writeFileSync
} from 'fs'
import { join } from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import {
  DEFAULT_VOICE,
  type AudioGenStatus,
  type VoiceId,
  type VoiceOverrides
} from '../renderer/src/lib/audio-texts'

const ROOT = app.getAppPath()
const AUDIO_DIR = join(ROOT, 'src/renderer/src/assets/audio')
const VOICES_FILE = join(AUDIO_DIR, 'voices.json')
const STATUS_FILE = join(ROOT, 'scripts/.audio-status.json')
const SCRIPT = join(ROOT, 'scripts/generate-audio.mts')

// As ferramentas de áudio (trocar voz, gerar, aplicar sugestões) só existem no
// npm run dev, que roda pelo servidor do Vite (ELECTRON_RENDERER_URL). O preview
// (npm run build + preview) toca os arquivos do build, uma foto tirada no build:
// lá, como no .exe, o app só sugere a troca de voz.
// FRENCHING_PROD=1 simula produção também no npm run dev.
export const audioToolsAvailable =
  !app.isPackaged &&
  !!process.env['ELECTRON_RENDERER_URL'] &&
  existsSync(SCRIPT) &&
  process.env.FRENCHING_PROD !== '1'

function isAlive(pid: number): boolean {
  try {
    process.kill(pid, 0)
    return true
  } catch {
    return false
  }
}

function readStatus(): AudioGenStatus | null {
  try {
    const status = JSON.parse(readFileSync(STATUS_FILE, 'utf8')) as AudioGenStatus
    // Script interrompido (Ctrl+C, terminal fechado): não está mais rodando
    if (status.running && !isAlive(status.pid)) status.running = false
    return status
  } catch {
    return null
  }
}

// Data de geração de cada mp3 e o peso total deles
function readFiles(): { mtimes: Record<string, number>; totalBytes: number } {
  const mtimes: Record<string, number> = {}
  let totalBytes = 0
  for (const name of readdirSync(AUDIO_DIR)) {
    if (!name.endsWith('.mp3')) continue
    const stat = statSync(join(AUDIO_DIR, name))
    mtimes[name.slice(0, -4)] = stat.mtimeMs
    totalBytes += stat.size
  }
  return { mtimes, totalBytes }
}

function readVoices(): VoiceOverrides {
  try {
    return JSON.parse(readFileSync(VOICES_FILE, 'utf8')) as VoiceOverrides
  } catch {
    return {}
  }
}

function generate(keys: string[] | null): boolean {
  if (readStatus()?.running) return false
  const args = ['--disable-warning=MODULE_TYPELESS_PACKAGE_JSON', SCRIPT]
  if (keys) args.push(`--only=${keys.join(',')}`)
  spawn('node', args, { cwd: ROOT, stdio: 'ignore', windowsHide: true, detached: true }).unref()
  return true
}

export function setupAudioTools(): void {
  ipcMain.handle('audio:available', () => audioToolsAvailable)
  if (!audioToolsAvailable) return

  ipcMain.handle('audio:files', () => readFiles())
  ipcMain.handle('audio:status', () => readStatus())
  ipcMain.handle('audio:voices', () => readVoices())
  ipcMain.handle('audio:generate', (_, keys: string[] | null) => generate(keys))
  // Troca a voz de um texto e gera o áudio dele de novo
  ipcMain.handle('audio:set-voice', (_, key: string, voice: VoiceId) => {
    if (readStatus()?.running) return false
    const voices = readVoices()
    if (voice === DEFAULT_VOICE) delete voices[key]
    else voices[key] = voice
    writeFileSync(VOICES_FILE, JSON.stringify(voices, null, 2) + '\n')
    return generate([key])
  })
  // Troca a voz de vários textos de uma vez e gera todos eles numa só rodada
  // (servia para aplicar as antigas sugestões de troca de voz; hoje o app não usa)
  ipcMain.handle('audio:set-voices', (_, changes: Record<string, VoiceId>) => {
    if (readStatus()?.running) return false
    const keys = Object.keys(changes)
    if (!keys.length) return false
    const voices = readVoices()
    for (const [key, voice] of Object.entries(changes)) {
      if (voice === DEFAULT_VOICE) delete voices[key]
      else voices[key] = voice
    }
    writeFileSync(VOICES_FILE, JSON.stringify(voices, null, 2) + '\n')
    return generate(keys)
  })

  // Avisos agrupados: vários eventos seguidos viram um só
  let timer: NodeJS.Timeout | null = null
  const notify = (): void => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      for (const win of BrowserWindow.getAllWindows()) win.webContents.send('audio-changed')
    }, 150)
  }
  watch(AUDIO_DIR, notify)
  watchFile(STATUS_FILE, { interval: 300 }, notify)
}
