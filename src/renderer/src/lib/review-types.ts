// Tipos da revisão de conteúdo (questões de gramática, flashcards e compreensão escrita), compartilhados
// pelo app e pelo processo principal (src/main/review.ts). Sem imports, como
// lib/audio-texts.ts.

// Cada tipo de conteúdo tem seu arquivo: content-review/grammar.json, flashcards.json,
// reading.json
export type ReviewKind = 'grammar' | 'flashcards' | 'reading'

export interface ReviewEntry {
  status: 'ok' | 'problem'
  note?: string
  // Impressão digital do conteúdo quando foi revisado (veja questionHash e cardHash)
  hash: string
  // Enunciado e resposta (no flashcard: francês e português), só para o arquivo ser
  // legível sem abrir o app
  prompt: string
  answer: string
  at: string
}

export type ReviewMap = Record<string, ReviewEntry>
