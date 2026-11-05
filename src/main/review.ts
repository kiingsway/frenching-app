// Revisão das questões de gramática (Configurações → Questões de gramática),
// só no modo de desenvolvimento: as marcações vão para content-review/grammar.json,
// na raiz do projeto, para poderem ser lidas e corrigidas no código depois.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { app, ipcMain } from 'electron'
import type { ReviewEntry, ReviewMap } from '../renderer/src/lib/review-types'

const FILE = join(app.getAppPath(), 'content-review/grammar.json')

const available = !app.isPackaged

function read(): ReviewMap {
  try {
    return JSON.parse(readFileSync(FILE, 'utf8')) as ReviewMap
  } catch {
    return {}
  }
}

export function setupReviewTools(): void {
  ipcMain.handle('review:available', () => available)
  if (!available) return
  ipcMain.handle('review:get', () => read())
  ipcMain.handle('review:set', (_, id: string, entry: ReviewEntry | null) => {
    const all = read()
    if (entry) all[id] = entry
    else delete all[id]
    if (!existsSync(dirname(FILE))) mkdirSync(dirname(FILE), { recursive: true })
    // Ordenado pelo id, para o arquivo mudar pouco entre uma revisão e outra
    const sorted = Object.fromEntries(Object.entries(all).sort(([a], [b]) => a.localeCompare(b)))
    writeFileSync(FILE, JSON.stringify(sorted, null, 2) + '\n')
    return sorted
  })
}
