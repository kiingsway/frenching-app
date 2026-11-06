// Revisão de conteúdo (Configurações → Questões de gramática / Lista de flashcards),
// só no modo de desenvolvimento: as marcações vão para content-review/grammar.json e
// content-review/flashcards.json, na raiz do projeto, para poderem ser lidas e
// corrigidas no código depois.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { app, ipcMain } from 'electron'
import type { ReviewEntry, ReviewKind, ReviewMap } from '../renderer/src/lib/review-types'

const FILES: Record<ReviewKind, string> = {
  grammar: join(app.getAppPath(), 'content-review/grammar.json'),
  flashcards: join(app.getAppPath(), 'content-review/flashcards.json')
}

const available = !app.isPackaged

const fileOf = (kind: unknown): string => FILES[kind === 'flashcards' ? 'flashcards' : 'grammar']

function read(file: string): ReviewMap {
  try {
    return JSON.parse(readFileSync(file, 'utf8')) as ReviewMap
  } catch {
    return {}
  }
}

export function setupReviewTools(): void {
  ipcMain.handle('review:available', () => available)
  if (!available) return
  ipcMain.handle('review:get', (_, kind?: ReviewKind) => read(fileOf(kind)))
  ipcMain.handle('review:set', (_, id: string, entry: ReviewEntry | null, kind?: ReviewKind) => {
    const file = fileOf(kind)
    const all = read(file)
    if (entry) all[id] = entry
    else delete all[id]
    if (!existsSync(dirname(file))) mkdirSync(dirname(file), { recursive: true })
    // Ordenado pelo id, para o arquivo mudar pouco entre uma revisão e outra
    const sorted = Object.fromEntries(Object.entries(all).sort(([a], [b]) => a.localeCompare(b)))
    writeFileSync(file, JSON.stringify(sorted, null, 2) + '\n')
    return sorted
  })
}
