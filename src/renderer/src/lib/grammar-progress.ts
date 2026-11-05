import type { GrammarQuestion } from '@/data/grammar'
import { createMapStore } from './map-store'

// Desempenho em cada questão de gramática, salvo no computador (e na conta, com login)
export interface QuestionStats {
  seen: number
  correct: number
  // A última resposta estava certa?
  last: boolean
  at: number
}

export type GrammarStats = Record<string, QuestionStats>

// Ao juntar com a conta, vale o registro com mais tentativas (em empate, o mais recente)
export const grammarStore = createMapStore<QuestionStats>({
  key: 'grammarStats',
  isValid: (value): value is QuestionStats => {
    const v = value as QuestionStats
    return (
      !!v &&
      typeof v === 'object' &&
      typeof v.seen === 'number' &&
      typeof v.correct === 'number' &&
      typeof v.last === 'boolean' &&
      typeof v.at === 'number'
    )
  },
  wins: (a, b) => a.seen > b.seen || (a.seen === b.seen && a.at > b.at)
})

export function recordAnswer(questionId: string, correct: boolean): void {
  const prev = grammarStore.get()[questionId]
  grammarStore.set(questionId, {
    seen: (prev?.seen ?? 0) + 1,
    correct: (prev?.correct ?? 0) + (correct ? 1 : 0),
    last: correct,
    at: Date.now()
  })
}

export const useGrammarStats = (): GrammarStats => grammarStore.use()

export interface Summary {
  total: number
  // Respondidas ao menos uma vez
  answered: number
  // Última resposta certa
  mastered: number
  // Errou na última vez
  wrong: number
  // Acertos / respostas (todas as tentativas), 0–100; null se nada respondido
  accuracy: number | null
}

export function summarize(questions: GrammarQuestion[], all: GrammarStats): Summary {
  let answered = 0
  let mastered = 0
  let wrong = 0
  let seen = 0
  let correct = 0
  for (const q of questions) {
    const s = all[q.id]
    if (!s) continue
    answered++
    if (s.last) mastered++
    else wrong++
    seen += s.seen
    correct += s.correct
  }
  return {
    total: questions.length,
    answered,
    mastered,
    wrong,
    accuracy: seen ? Math.round((correct / seen) * 100) : null
  }
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

// Escolhe até `count` questões, priorizando as nunca respondidas e as erradas
// na última vez; dentro de cada grupo, a ordem é aleatória
export function pickQuestions(
  pool: GrammarQuestion[],
  count: number,
  all: GrammarStats
): GrammarQuestion[] {
  const unseen = pool.filter((q) => !all[q.id])
  const wrong = pool.filter((q) => all[q.id] && !all[q.id].last)
  const rest = pool.filter((q) => all[q.id]?.last)
  return [...shuffle(unseen), ...shuffle(wrong), ...shuffle(rest)].slice(0, count)
}

export { shuffle }
