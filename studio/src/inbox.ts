// Conversa com a API local do studio (vite.studio.config.ts → src/main/inbox-core.ts)

// Um JSON de content-inbox/ (done = false) ou de content-inbox/feitos/ (done = true)
export interface InboxFile {
  file: string
  topic: string
  done: boolean
}

export interface InboxResult {
  ok: boolean
  message: string
}

export async function fetchInbox(): Promise<InboxFile[]> {
  const res = await fetch('/api/inbox')
  return (await res.json()) as InboxFile[]
}

// Salva o JSON colado na caixa de entrada, com o campo "topic" trocado pelo título do
// tópico para o qual o pedido foi feito
export async function saveJson(text: string, topic: string): Promise<InboxResult> {
  const res = await fetch('/api/inbox', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, topic })
  })
  return (await res.json()) as InboxResult
}

// Mesma comparação de títulos do scripts/importar-json.mts
const norm = (s: string): string =>
  s
    .replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, '$1')
    .toLowerCase()
    .replace(/[\s:–—-]+/g, '')
export const sameTopic = (a: string, b: string): boolean => norm(a) === norm(b)
