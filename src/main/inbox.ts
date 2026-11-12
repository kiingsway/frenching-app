// Caixa de entrada de conteúdo (página de estudo sem conteúdo → "Colar JSON"), só no modo
// de desenvolvimento: o JSON colado vai para content-inbox/, na raiz do projeto, de onde o
// Claude o integra ("adicionar o próximo conteúdo"; veja CLAUDE.md).

import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { app, ipcMain } from 'electron'

const DIR = join(app.getAppPath(), 'content-inbox')
const available = !app.isPackaged

export interface InboxResult {
  ok: boolean
  // Mensagem de erro (ok = false) ou nome do arquivo salvo (ok = true)
  message: string
}

// Nome do arquivo: tópico sem acentos nem símbolos, para ser reconhecível na pasta
const slug = (s: string): string =>
  s
    .replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, '$1')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50) || 'conteudo'

function save(text: unknown): InboxResult {
  if (typeof text !== 'string' || !text.trim()) return { ok: false, message: 'Cole o JSON primeiro.' }
  let data: any
  try {
    data = JSON.parse(text)
  } catch (e) {
    return { ok: false, message: `JSON inválido: ${(e as Error).message}` }
  }
  if (!data || typeof data !== 'object' || Array.isArray(data))
    return { ok: false, message: 'O JSON precisa ser um objeto com "topic", "pt", "fr" e "sources".' }
  for (const key of ['topic', 'pt', 'fr', 'sources'])
    if (!data[key]) return { ok: false, message: `Faltou o campo "${key}" no JSON.` }
  if (typeof data.topic !== 'string') return { ok: false, message: 'O campo "topic" precisa ser um texto.' }

  if (!existsSync(DIR)) mkdirSync(DIR, { recursive: true })
  // Data e hora no nome: a ordem na pasta é a ordem em que o Claude vai integrando
  const stamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14)
  let name = `${stamp}-${slug(data.topic)}.json`
  for (let i = 2; existsSync(join(DIR, name)); i++) name = `${stamp}-${slug(data.topic)}-${i}.json`
  writeFileSync(join(DIR, name), JSON.stringify(data, null, 2) + '\n', 'utf8')
  return { ok: true, message: name }
}

export function setupInboxTools(): void {
  ipcMain.handle('inbox:available', () => available)
  if (!available) return
  ipcMain.handle('inbox:save', (_, text: unknown) => save(text))
}
