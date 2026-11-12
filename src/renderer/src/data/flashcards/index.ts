import conectores from './conectores'
import essenciais from './essenciais'
import falsosCognatos from './falsos-cognatos'
import generoSubstantivos from './genre-different'
import opiniao from './opiniao'
import type { Flashcard, FlashcardDeck, FlashcardDeckDraft } from './types'

export type { Flashcard, FlashcardDeck } from './types'

const build = (draft: FlashcardDeckDraft): FlashcardDeck => ({
  ...draft,
  cards: draft.cards.map((card, i) => ({ ...card, id: `${draft.id}-${i + 1}`, deckId: draft.id }))
})

// O baralho iniciante vem primeiro (os ids dependem só da posição dentro de cada baralho)
export const FLASHCARD_DECKS: FlashcardDeck[] = [
  essenciais,
  conectores,
  generoSubstantivos,
  falsosCognatos,
  opiniao
].map(build)

export const ALL_FLASHCARDS: Flashcard[] = FLASHCARD_DECKS.flatMap((deck) => deck.cards)

const DECK_BY_ID = new Map(FLASHCARD_DECKS.map((deck) => [deck.id, deck]))
export const getDeck = (id: string): FlashcardDeck | undefined => DECK_BY_ID.get(id)

// Impressão digital do conteúdo do cartão: se algo mudar depois de revisado, a
// revisão aparece como desatualizada (mesma ideia do questionHash da gramática)
export function cardHash(card: Flashcard): string {
  const text = JSON.stringify([
    card.fr,
    card.pt,
    card.example.fr,
    card.example.pt,
    card.trap ?? '',
    card.note ?? ''
  ])
  let hash = 0x811c9dc5
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193) >>> 0
  }
  return hash.toString(16).padStart(8, '0')
}
