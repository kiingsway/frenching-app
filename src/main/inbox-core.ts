// Caixa de entrada de conteúdo (content-inbox/): salvar e listar os JSONs de páginas de
// estudo. Sem Electron, para ser usado pelo processo principal (src/main/inbox.ts) e pelo
// studio (vite.studio.config.ts).

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

export interface InboxResult {
  ok: boolean
  // Mensagem de erro (ok = false) ou nome do arquivo salvo (ok = true)
  message: string
}

// Um JSON da caixa de entrada: ainda na fila (content-inbox/) ou já integrado (feitos/)
export interface InboxFile {
  file: string
  // Campo "topic" do JSON (título do tópico), sem a marcação [[francês|tradução]]
  topic: string
  done: boolean
}

const stripTerms = (s: string): string => s.replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, '$1')

// Nome do arquivo: tópico sem acentos nem símbolos, para ser reconhecível na pasta
const slug = (s: string): string =>
  stripTerms(s)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 50) || 'conteudo'

// Mesma comparação de títulos do scripts/importar-json.mts
export const sameTopic = (a: string, b: string): boolean => {
  const norm = (s: string): string =>
    stripTerms(s)
      .toLowerCase()
      .replace(/[\s:–—-]+/g, '')
  return norm(a) === norm(b)
}

// Valida e salva o JSON colado. `topic`, se dado, substitui o campo "topic" do JSON
// (o studio sabe para qual tópico o JSON foi pedido)
export function saveToInbox(dir: string, text: unknown, topic?: string): InboxResult {
  if (typeof text !== 'string' || !text.trim())
    return { ok: false, message: 'Cole o JSON primeiro.' }
  let data: any
  try {
    data = JSON.parse(text)
  } catch (e) {
    return { ok: false, message: `JSON inválido: ${(e as Error).message}` }
  }
  if (!data || typeof data !== 'object' || Array.isArray(data))
    return {
      ok: false,
      message: 'O JSON precisa ser um objeto com "topic", "pt", "fr" e "sources".'
    }
  if (topic) data = { ...data, topic }
  for (const key of ['topic', 'pt', 'fr', 'sources'])
    if (!data[key]) return { ok: false, message: `Faltou o campo "${key}" no JSON.` }
  if (typeof data.topic !== 'string')
    return { ok: false, message: 'O campo "topic" precisa ser um texto.' }

  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  // Data e hora no nome: a ordem na pasta é a ordem em que o Claude vai integrando
  const stamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14)
  let name = `${stamp}-${slug(data.topic)}.json`
  for (let i = 2; existsSync(join(dir, name)); i++) name = `${stamp}-${slug(data.topic)}-${i}.json`
  writeFileSync(join(dir, name), JSON.stringify(data, null, 2) + '\n', 'utf8')
  return { ok: true, message: name }
}

// Todos os JSONs da caixa de entrada e de feitos/, com o tópico de cada um
export function listInbox(dir: string): InboxFile[] {
  const read = (folder: string, done: boolean): InboxFile[] => {
    if (!existsSync(folder)) return []
    return readdirSync(folder)
      .filter((f) => f.endsWith('.json'))
      .flatMap((file) => {
        try {
          const data = JSON.parse(readFileSync(join(folder, file), 'utf8'))
          return typeof data?.topic === 'string'
            ? [{ file, topic: stripTerms(data.topic), done }]
            : []
        } catch {
          return []
        }
      })
  }
  return [...read(dir, false), ...read(join(dir, 'feitos'), true)]
}
