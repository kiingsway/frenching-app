// Formato do conteúdo das páginas de tópico.
// Cada página é uma lista de blocos simples, renderizados por TopicPage.
// Toda página tem versão em português e em francês, e lista suas fontes no fim.

export type Lang = 'pt' | 'fr'

export type Block =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  // 'unverified' = caixa vermelha que avisa o que a página afirma sem fonte (vai por último)
  | { type: 'callout'; tone: 'tip' | 'warning' | 'unverified'; title?: string; text: string }

export interface Source {
  title: string
  url: string
}

export interface LocalizedContent {
  title: string
  summary: string
  blocks: Block[]
}

// Partes da versão em francês que têm áudio gerado (scripts/generate-audio.ts)
// title = título da página · summary = resumo · headings = subtítulos
// paragraphs = parágrafos · lists = cada item das listas
// callouts = caixas de dica/aviso (título e texto têm áudios separados)
// tables = cada célula das tabelas, cabeçalhos incluídos
// terms = os termos em francês marcados na versão em português com [[francês|tradução]]
//         (tocam pela dica de tradução, veja components/TranslatedText.tsx)
export type AudioPart =
  | 'title'
  | 'summary'
  | 'headings'
  | 'paragraphs'
  | 'lists'
  | 'callouts'
  | 'tables'
  | 'terms'

export interface TopicContent {
  id: string
  pt: LocalizedContent
  fr: LocalizedContent
  sources: Source[]
  audio?: AudioPart[]
}
