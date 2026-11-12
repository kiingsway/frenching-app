import { createQuestionStore, recordInStore, type GrammarStats } from './grammar-progress'

// Desempenho em cada questão de Compreensão escrita, salvo no computador (e na conta,
// com login, no campo `reading` do progresso: lib/cloud-sync.ts)
export const readingStore = createQuestionStore('readingStats')

export const recordReadingAnswer = (questionId: string, correct: boolean): void =>
  recordInStore(readingStore, questionId, correct)

export const useReadingStats = (): GrammarStats => readingStore.use()
