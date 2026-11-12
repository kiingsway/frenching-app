import { TEXTOS } from './textos'
import { READING_LEVELS, passage, type ReadingPassage, type ReadingQuestion } from './types'

export type { ReadingKind, ReadingLevel, ReadingPassage, ReadingQuestion } from './types'
export { KIND_LABELS, READING_LEVELS } from './types'

const LEVEL_ORDER = new Map(READING_LEVELS.map((l, i) => [l, i]))

// Do mais fácil ao mais difícil (ordem do modo Prova); no mesmo nível, a ordem do arquivo
export const READING_PASSAGES: ReadingPassage[] = TEXTOS.map(passage).sort(
  (a, b) => LEVEL_ORDER.get(a.level)! - LEVEL_ORDER.get(b.level)!
)

export const ALL_READING_QUESTIONS: ReadingQuestion[] = READING_PASSAGES.flatMap((p) => p.questions)

const BY_ID = new Map(READING_PASSAGES.map((p) => [p.id, p]))
export const getPassage = (id: string): ReadingPassage | undefined => BY_ID.get(id)

function hash(text: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h.toString(16).padStart(8, '0')
}

// Impressões digitais para a revisão: se o conteúdo mudar depois de revisado, a
// revisão aparece como desatualizada
export const passageHash = (p: ReadingPassage): string =>
  hash(JSON.stringify([p.level, p.kind, p.title, p.text, p.translation]))
export const readingQuestionHash = (q: ReadingQuestion): string =>
  hash(JSON.stringify([q.prompt, q.options, q.explanation]))

// Na tela, o espaço antes de : ; ? ! » e depois de « vira espaço que não quebra a linha,
// para a pontuação não cair sozinha na linha de baixo
export const frenchSpaces = (text: string): string =>
  text.replace(/ ([:;?!»])/g, ' $1').replace(/« /g, '« ')
