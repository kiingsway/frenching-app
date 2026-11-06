import { ALL_CONTENT } from '@/content'
import type { AudioPart } from '@/content/types'
import { FLASHCARD_DECKS } from '@/data/flashcards'
import { audioKey, hasSpeech, speechText } from './audio-key'
import {
  DEFAULT_VOICE,
  flashcardTexts,
  textsFor,
  type FlashcardAudioPart,
  type VoiceId,
  type VoiceOverrides
} from './audio-texts'
// Vozes escolhidas por texto, como estavam no build (no npm run dev, a lista de
// áudios lê a versão atual pelo processo principal)
import bundledVoices from '../assets/audio/voices.json'

// Todos os textos com áudio, um por arquivo (textos iguais usam o mesmo arquivo).
// Mesma lista que o scripts/generate-audio.mts gera, na mesma ordem: primeiro as
// páginas de estudo, depois os flashcards.

export type EntryPart = AudioPart | FlashcardAudioPart

export const PART_LABELS: Record<EntryPart, string> = {
  title: 'Título',
  summary: 'Resumo',
  headings: 'Subtítulo',
  paragraphs: 'Parágrafo',
  lists: 'Item de lista',
  callouts: 'Caixa',
  tables: 'Célula de tabela',
  cardWord: 'Palavra do cartão',
  cardExample: 'Exemplo do cartão'
}

export interface AudioEntry {
  key: string
  // O que a voz vai falar (speechText), e o texto como aparece na página
  spoken: string
  original: string
  // Página de estudo ou baralho de flashcards (`flashcards-${deckId}`)
  pageId: string
  pageTitle: string
  part: EntryPart
  // Quantas vezes o mesmo texto aparece (todas usam o mesmo arquivo)
  uses: number
  // Texto em minúsculas para a busca, calculado uma vez só
  haystack: string
}

export function buildEntries(): AudioEntry[] {
  const byKey = new Map<string, AudioEntry>()
  const add = (text: string, pageId: string, pageTitle: string, part: EntryPart): void => {
    if (!hasSpeech(text)) return
    const key = audioKey(text)
    const existing = byKey.get(key)
    if (existing) {
      existing.uses++
      return
    }
    const spoken = speechText(text)
    byKey.set(key, {
      key,
      spoken,
      original: text,
      pageId,
      pageTitle,
      part,
      uses: 1,
      haystack: `${spoken}\n${text}\n${key}`.toLowerCase()
    })
  }
  for (const page of ALL_CONTENT)
    for (const part of page.audio ?? [])
      for (const text of textsFor(page, part)) add(text, page.id, page.pt.title, part)
  for (const deck of FLASHCARD_DECKS)
    for (const card of deck.cards)
      for (const [part, text] of flashcardTexts(card))
        add(text, `flashcards-${deck.id}`, `Flashcards · ${deck.title}`, part)
  return [...byKey.values()]
}

let byKey: Map<string, AudioEntry> | null = null
export function getAudioEntry(key: string): AudioEntry | undefined {
  byKey ??= new Map(buildEntries().map((e) => [e.key, e]))
  return byKey.get(key)
}

// Voz com que o áudio foi gerado para o build
export const bundledVoiceFor = (key: string): VoiceId =>
  (bundledVoices as VoiceOverrides)[key] ?? DEFAULT_VOICE
