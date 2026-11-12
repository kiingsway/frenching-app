// Quais textos de uma página têm áudio. Usado pelo app (lista de áudios) e pelo
// script scripts/generate-audio.mts, para os dois enxergarem exatamente a mesma lista.
// Só tem imports de tipo, para poder ser usado direto pelo Node no script.
import type { AudioPart, TopicContent } from '../content/types'
import type { CardDraft } from '../data/flashcards/types'
import type { ReadingPassageDraft } from '../data/reading/types'

export const AUDIO_PARTS: AudioPart[] = [
  'title',
  'summary',
  'headings',
  'paragraphs',
  'lists',
  'callouts',
  'tables',
  'terms'
]

// Vozes do edge-tts, na ordem em que aparecem no app. A Sylvie (mulher, padrão) e o
// Antoine (homem) têm o sotaque do francês canadense. A Denise e a Vivienne são da França.
// A voz de cada texto que não usa a padrão fica em assets/audio/voices.json
// (chave do arquivo → id da voz). Os áudios gerados antes de a Sylvie virar a padrão
// estão lá com a voz que usam, para não mudarem sem querer.
export const AUDIO_VOICES = {
  sylvie: { label: 'Sylvie', country: 'CA', name: 'fr-CA-SylvieNeural' },
  antoine: { label: 'Antoine', country: 'CA', name: 'fr-CA-AntoineNeural' },
  denise: { label: 'Denise', country: 'FR', name: 'fr-FR-DeniseNeural' },
  vivienne: { label: 'Vivienne', country: 'FR', name: 'fr-FR-VivienneMultilingualNeural' }
} as const

export type VoiceId = keyof typeof AUDIO_VOICES

export const DEFAULT_VOICE: VoiceId = 'sylvie'

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
    case 'terms':
      // O francês de cada [[francês|tradução]] da versão em português
      return allTexts(page.pt).flatMap((text) => termsIn(text).map((term) => term.fr))
  }
}

// Termo em francês com a tradução, escrito no texto em português como [[francês|tradução]]
// A tradução (segunda parte) pode ter variantes por região, separadas por "|":
// [[déjeuner|Québec: café da manhã|França: almoço]]. O áudio usa só o francês.
export const TERM_MARKUP =/\[\[([^|\]]+)\|([^\]]+)\]\]/g

export function termsIn(text: string): { fr: string; pt: string }[] {
  return [...text.matchAll(TERM_MARKUP)].map((match) => ({ fr: match[1], pt: match[2] }))
}

// Todos os textos de uma versão da página: título, resumo e cada texto dos blocos
function allTexts(content: TopicContent['pt']): string[] {
  return [
    content.title,
    content.summary,
    ...content.blocks.flatMap((block) => {
      switch (block.type) {
        case 'heading':
        case 'paragraph':
          return [block.text]
        case 'list':
          return block.items
        case 'callout':
          return [...(block.title ? [block.title] : []), block.text]
        case 'table':
          return [...block.headers, ...block.rows.flat()]
      }
    })
  ]
}

// Flashcards: todo cartão tem áudio do lado em francês, a palavra/expressão e a
// frase de exemplo
export type FlashcardAudioPart = 'cardWord' | 'cardExample'

export function flashcardTexts(card: CardDraft): [FlashcardAudioPart, string][] {
  return [
    ['cardWord', card.fr],
    ['cardExample', card.example.fr]
  ]
}

// Compreensão escrita: o título, cada parágrafo do texto e cada pergunta têm áudio
// (as opções não, porque clicar nelas é responder)
export type ReadingAudioPart = 'readingTitle' | 'readingText' | 'readingQuestion'

export function readingTexts(passage: ReadingPassageDraft): [ReadingAudioPart, string][] {
  return [
    ['readingTitle', passage.title],
    ...passage.text.map((text): [ReadingAudioPart, string] => ['readingText', text]),
    ...passage.questions.map(([prompt]): [ReadingAudioPart, string] => ['readingQuestion', prompt])
  ]
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
