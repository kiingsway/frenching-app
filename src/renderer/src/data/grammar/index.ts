import { SECTIONS, type Topic } from '@/data/topics'
import { AVANCADO } from './avancado'
import { BASE } from './base'
import { INTER } from './inter'
import type { GrammarLevel, GrammarQuestion } from './types'

export type { GrammarLevel, GrammarQuestion } from './types'

export const GRAMMAR_LEVELS: GrammarLevel[] = [BASE, INTER, AVANCADO]

export interface GrammarTopic extends Topic {
  level: GrammarLevel
  questions: GrammarQuestion[]
}

// Tópicos na ordem de data/topics.ts (a mesma do Painel)
export const GRAMMAR_TOPICS: GrammarTopic[] = GRAMMAR_LEVELS.flatMap((level) => {
  const section = SECTIONS.find((s) => s.id === level.sectionId)
  return (section?.topics ?? []).map((topic) => ({
    ...topic,
    level,
    questions: level.topics[topic.id] ?? []
  }))
})

export const ALL_QUESTIONS: GrammarQuestion[] = GRAMMAR_TOPICS.flatMap((t) => t.questions)

const TOPIC_BY_ID = new Map(GRAMMAR_TOPICS.map((t) => [t.id, t]))
export const getGrammarTopic = (id: string): GrammarTopic | undefined => TOPIC_BY_ID.get(id)

// Impressão digital do conteúdo da questão: se o enunciado, as opções ou a
// explicação mudarem depois de revisada, a revisão aparece como desatualizada
export function questionHash(q: GrammarQuestion): string {
  const text = JSON.stringify([q.prompt, q.options, q.explanation])
  let hash = 0x811c9dc5
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193) >>> 0
  }
  return hash.toString(16).padStart(8, '0')
}
