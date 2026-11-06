// Formato dos baralhos de flashcards (aba Flashcards).
//
// Cada arquivo deste diretório (menos index.ts e types.ts) exporta um baralho.
// O script de áudios (scripts/generate-audio.mts) lê esses arquivos direto pelo Node,
// então aqui só entram imports de tipo.

import type { Source } from '../../content/types'

export interface CardDraft {
  // Palavra ou expressão em francês (tem áudio). Só o que se fala: notas de
  // gramática como "+ subjonctif" vão em `note`
  fr: string
  // Tradução em português
  pt: string
  // Frase de exemplo, em francês (tem áudio) e em português
  example: { fr: string; pt: string }
  // Falsos cognatos: a armadilha explicada (ex.: "não é atender")
  trap?: string
  // Observação de uso (regência, registro, modo verbal…)
  note?: string
}

export interface Flashcard extends CardDraft {
  // `${deckId}-${n}`, gerado pela posição. Para não bagunçar o progresso salvo e
  // as revisões, cartões novos entram sempre no FIM do baralho.
  id: string
  deckId: string
}

export interface FlashcardDeckDraft {
  id: string
  title: string
  description: string
  sources: Source[]
  cards: CardDraft[]
}

export interface FlashcardDeck extends Omit<FlashcardDeckDraft, 'cards'> {
  cards: Flashcard[]
}
