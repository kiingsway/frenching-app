import { createEmptyCard, fsrs, Rating, State, type Card, type Grade } from 'ts-fsrs'
import type { Flashcard } from '@/data/flashcards'
import { createMapStore } from './map-store'
import { createPref, NEW_PER_DAY_MAX, newPerDayPref } from './prefs'

// Repetição espaçada dos flashcards com o FSRS (biblioteca ts-fsrs, roda no app,
// sem internet). Cada cartão tem UM estado de memória; a direção (francês → português
// ou português → francês) é sorteada cada vez que ele aparece. Assim os dois sentidos
// são treinados, sem dobrar as revisões nem furar o limite de cartões novos por dia.

// Retenção-alvo: o FSRS marca a próxima revisão para quando a chance de lembrar
// cair para 90%. Fuzz: espalha um pouco as datas, para os cartões não vencerem em bloco
const scheduler = fsrs({ request_retention: 0.9, enable_fuzz: true })

export { Rating, State }
export type { Grade }

// Estado FSRS de um cartão, como é salvo (no computador e na conta): só números,
// para caber no Firestore e no localStorage sem conversões de data
export interface CardRecord {
  due: number
  stability: number
  difficulty: number
  elapsedDays: number
  scheduledDays: number
  learningSteps: number
  reps: number
  lapses: number
  state: State
  // Última e primeira resposta (ms). A primeira conta para o limite de novos por dia
  lastReview: number
  firstReview: number
}

export type FlashcardStats = Record<string, CardRecord>

const NUMBER_FIELDS: (keyof CardRecord)[] = [
  'due',
  'stability',
  'difficulty',
  'elapsedDays',
  'scheduledDays',
  'learningSteps',
  'reps',
  'lapses',
  'state',
  'lastReview',
  'firstReview'
]

// Ao juntar com a conta, vale a revisão mais recente (em empate, a com mais revisões)
export const flashcardStore = createMapStore<CardRecord>({
  key: 'flashcardStats',
  isValid: (value): value is CardRecord =>
    !!value &&
    typeof value === 'object' &&
    NUMBER_FIELDS.every((f) => typeof (value as Record<string, unknown>)[f] === 'number'),
  wins: (a, b) => a.lastReview > b.lastReview || (a.lastReview === b.lastReview && a.reps > b.reps)
})

export const useFlashcardStats = (): FlashcardStats => flashcardStore.use()

// Limite de cartões novos por dia: preferência sincronizada, em lib/prefs.ts
export { NEW_PER_DAY_MAX, newPerDayPref }

// Baralhos DESMARCADOS para estudar (só neste computador). Guardar os desmarcados
// faz um baralho novo já entrar marcado
export const decksOffPref = createPref<string[]>(
  'flashcardDecksOff',
  [],
  (v): v is string[] => Array.isArray(v) && v.every((id) => typeof id === 'string')
)

function toCard(record: CardRecord): Card {
  return {
    due: new Date(record.due),
    stability: record.stability,
    difficulty: record.difficulty,
    elapsed_days: record.elapsedDays,
    scheduled_days: record.scheduledDays,
    learning_steps: record.learningSteps,
    reps: record.reps,
    lapses: record.lapses,
    state: record.state,
    last_review: new Date(record.lastReview)
  }
}

function fromCard(card: Card, now: number, previous?: CardRecord): CardRecord {
  return {
    due: card.due.getTime(),
    stability: card.stability,
    difficulty: card.difficulty,
    elapsedDays: card.elapsed_days,
    scheduledDays: card.scheduled_days,
    learningSteps: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    lastReview: now,
    firstReview: previous?.firstReview ?? now
  }
}

export const GRADES: Grade[] = [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy]

// O que aconteceria com o cartão em cada resposta (para mostrar o intervalo nos botões).
// Responder usa o mesmo resultado, então o intervalo mostrado é o que vale
export type Outcomes = Record<Grade, CardRecord>

export function previewOutcomes(record: CardRecord | undefined, now: number): Outcomes {
  const preview = scheduler.repeat(record ? toCard(record) : createEmptyCard(new Date(now)), now)
  return Object.fromEntries(
    GRADES.map((grade) => [grade, fromCard(preview[grade].card, now, record)])
  ) as Outcomes
}

export function saveOutcome(cardId: string, outcome: CardRecord): void {
  flashcardStore.set(cardId, outcome)
}

// Início do dia de hoje (meia-noite, no fuso do computador)
export function startOfToday(now = Date.now()): number {
  const d = new Date(now)
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

export const introducedToday = (stats: FlashcardStats, now = Date.now()): number => {
  const start = startOfToday(now)
  return Object.values(stats).filter((r) => r.firstReview >= start).length
}

export const reviewedToday = (stats: FlashcardStats, now = Date.now()): number => {
  const start = startOfToday(now)
  return Object.values(stats).filter((r) => r.lastReview >= start).length
}

// Um cartão de aprendizado que vence em até 20 min aparece antes, se não houver
// outro cartão para estudar (como o "learn ahead" do Anki): a sessão termina sem espera
export const LEARN_AHEAD_MS = 20 * 60 * 1000

export type CardStatus = 'new' | 'learning' | 'review'

export function cardStatus(record: CardRecord | undefined): CardStatus {
  if (!record || record.state === State.New) return 'new'
  return record.state === State.Review ? 'review' : 'learning'
}

export interface DeckSummary {
  total: number
  new: number
  learning: number
  review: number
  // Vencidos agora (aprendendo + revisão)
  due: number
}

export function summarizeCards(
  cards: Flashcard[],
  stats: FlashcardStats,
  now = Date.now()
): DeckSummary {
  const s: DeckSummary = { total: cards.length, new: 0, learning: 0, review: 0, due: 0 }
  for (const card of cards) {
    const record = stats[card.id]
    s[cardStatus(record)]++
    if (record && record.state !== State.New && record.due <= now) s.due++
  }
  return s
}

// Cartões novos na ordem de estudo: os baralhos se alternam (1º de cada, 2º de cada…)
export function newCardsInOrder(cards: Flashcard[], stats: FlashcardStats): Flashcard[] {
  const position = new Map<string, number>()
  const counters = new Map<string, number>()
  for (const card of cards) {
    const n = counters.get(card.deckId) ?? 0
    position.set(card.id, n)
    counters.set(card.deckId, n + 1)
  }
  return cards
    .filter((card) => cardStatus(stats[card.id]) === 'new')
    .sort((a, b) => position.get(a.id)! - position.get(b.id)!)
}

// Próximo cartão da sessão: primeiro os vencidos (o mais atrasado antes), depois um
// novo (se ainda cabe no limite do dia), e por fim um de aprendizado que vence logo
export function pickNext(
  cards: Flashcard[],
  stats: FlashcardStats,
  newAllowance: number,
  now: number,
  skip?: string
): Flashcard | null {
  const started = cards.filter((c) => cardStatus(stats[c.id]) !== 'new')
  const byDue = (a: Flashcard, b: Flashcard): number => stats[a.id].due - stats[b.id].due
  const due = started.filter((c) => stats[c.id].due <= now).sort(byDue)
  // Evita mostrar o mesmo cartão duas vezes seguidas, se houver outro
  const firstDue = due.find((c) => c.id !== skip) ?? due[0]
  if (firstDue) return firstDue
  if (newAllowance > 0) {
    const next = newCardsInOrder(cards, stats)[0]
    if (next) return next
  }
  const soon = started
    .filter(
      (c) => cardStatus(stats[c.id]) === 'learning' && stats[c.id].due <= now + LEARN_AHEAD_MS
    )
    .sort(byDue)
  return soon.find((c) => c.id !== skip) ?? soon[0] ?? null
}

// Intervalo até a próxima revisão, curto, para os botões: "1 min", "10 min", "3 dias"…
export function formatInterval(ms: number): string {
  const minutes = Math.max(0, ms) / 60_000
  if (minutes < 1) return '< 1 min'
  if (minutes < 60) return `${Math.round(minutes)} min`
  const hours = minutes / 60
  if (hours < 24) return `${Math.round(hours)} h`
  const days = Math.round(hours / 24)
  if (days < 31) return days === 1 ? '1 dia' : `${days} dias`
  const months = Math.round(days / 30.4)
  if (months < 12) return months === 1 ? '1 mês' : `${months} meses`
  const years = Math.round((days / 365) * 10) / 10
  return `${String(years).replace('.', ',')} ${years < 2 ? 'ano' : 'anos'}`
}
