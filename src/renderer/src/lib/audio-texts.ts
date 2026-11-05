// Quais textos de uma página têm áudio. Usado pelo app (lista de áudios) e pelo
// script scripts/generate-audio.mts, para os dois enxergarem exatamente a mesma lista.
// Só tem imports de tipo, para poder ser usado direto pelo Node no script.
import type { AudioPart, TopicContent } from '../content/types'

export const AUDIO_PARTS: AudioPart[] = [
  'title',
  'summary',
  'headings',
  'paragraphs',
  'lists',
  'callouts',
  'tables'
]

// Vozes do edge-tts. A Vivienne é a padrão; a Denise só fala francês e serve para
// textos que a Vivienne (multilíngue) lê em inglês, como "TEF Canada".
// A voz de cada texto que não usa a padrão fica em assets/audio/voices.json
// (chave do arquivo → id da voz).
export const AUDIO_VOICES = {
  vivienne: { label: 'Vivienne', name: 'fr-FR-VivienneMultilingualNeural' },
  denise: { label: 'Denise', name: 'fr-FR-DeniseNeural' }
} as const

export type VoiceId = keyof typeof AUDIO_VOICES

export const DEFAULT_VOICE: VoiceId = 'vivienne'

export type VoiceOverrides = Record<string, VoiceId>

export function textsFor(page: TopicContent, part: AudioPart): string[] {
  const blocks = page.fr.blocks
  switch (part) {
    case 'title':
      return [page.fr.title]
    case 'summary':
      return [page.fr.summary]
    case 'headings':
      return blocks.flatMap((block) => (block.type === 'heading' ? [block.text] : []))
    case 'paragraphs':
      return blocks.flatMap((block) => (block.type === 'paragraph' ? [block.text] : []))
    case 'lists':
      return blocks.flatMap((block) => (block.type === 'list' ? block.items : []))
    case 'callouts':
      // Título e texto da caixa viram áudios separados
      return blocks.flatMap((block) =>
        block.type === 'callout' ? [...(block.title ? [block.title] : []), block.text] : []
      )
    case 'tables':
      // Cada célula (cabeçalhos incluídos) tem seu próprio áudio
      return blocks.flatMap((block) =>
        block.type === 'table' ? [...block.headers, ...block.rows.flat()] : []
      )
  }
}

// Status da geração, gravado pelo script em scripts/.audio-status.json
// e lido pelo app para mostrar o progresso na lista de áudios.
export interface AudioGenStatus {
  running: boolean
  pid: number
  startedAt: number
  finishedAt: number | null
  // Arquivos (chaves) a gerar nesta execução, na ordem
  queue: string[]
  done: string[]
  current: string | null
  errors: Record<string, string>
}
