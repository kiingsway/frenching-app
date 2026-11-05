import { ALL_CONTENT } from '@/content'
import type { AudioPart } from '@/content/types'
import { audioKey, hasSpeech, speechText } from './audio-key'
import { DEFAULT_VOICE, textsFor, type VoiceId, type VoiceOverrides } from './audio-texts'
// Vozes escolhidas por texto, como estavam no build (no npm run dev, a lista de
// áudios lê a versão atual pelo processo principal)
import bundledVoices from '../assets/audio/voices.json'

// Todos os textos com áudio, um por arquivo (textos iguais usam o mesmo arquivo).
// Mesma lista que o scripts/generate-audio.mts gera, na mesma ordem.

export const PART_LABELS: Record<AudioPart, string> = {
  title: 'Título',
  summary: 'Resumo',
  headings: 'Subtítulo',
  paragraphs: 'Parágrafo',
  lists: 'Item de lista',
  callouts: 'Caixa',
  tables: 'Célula de tabela'
}

export interface AudioEntry {
  key: string
  // O que a voz vai falar (speechText), e o texto como aparece na página
  spoken: string
  original: string
  pageId: string
  pageTitle: string
  part: AudioPart
  // Quantas vezes o mesmo texto aparece (todas usam o mesmo arquivo)
  uses: number
  // Texto em minúsculas para a busca, calculado uma vez só
  haystack: string
}

export function buildEntries(): AudioEntry[] {
  const byKey = new Map<string, AudioEntry>()
  for (const page of ALL_CONTENT) {
    for (const part of page.audio ?? []) {
      for (const text of textsFor(page, part)) {
        if (!hasSpeech(text)) continue
        const key = audioKey(text)
        const existing = byKey.get(key)
        if (existing) {
          existing.uses++
          continue
        }
        const spoken = speechText(text)
        byKey.set(key, {
          key,
          spoken,
          original: text,
          pageId: page.id,
          pageTitle: page.pt.title,
          part,
          uses: 1,
          haystack: `${spoken}\n${text}\n${key}`.toLowerCase()
        })
      }
    }
  }
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
