import { useEffect, useMemo, useRef, useState, type ReactElement } from 'react'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { FiCheckCircle, FiPlus, FiRepeat, FiX } from 'react-icons/fi'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { CardDetails, FrenchAudio } from '@/components/FlashcardParts'
import Page from '@/components/Page'
import { AnimatedNumber, ProgressBar, riseIn, stagger } from '@/components/motion'
import { ALL_FLASHCARDS, getDeck, type Flashcard } from '@/data/flashcards'
import { getAudioUrl } from '@/lib/audio'
import {
  cardStatus,
  flashcardStore,
  formatInterval,
  GRADES,
  introducedToday,
  newCardsInOrder,
  newPerDayPref,
  pickNext,
  previewOutcomes,
  Rating,
  saveOutcome,
  State,
  useFlashcardStats,
  type Grade,
  type Outcomes
} from '@/lib/flashcard-progress'

export interface FlashcardSessionConfig {
  deckIds: string[]
  // Cartões novos além do limite do dia (botão "Mais 5 novos")
  extraNew: number
}

// Lado da frente: 'fr' = mostra o francês e pede o português; 'pt' = o contrário
type Direction = 'fr' | 'pt'

interface Current {
  card: Flashcard
  direction: Direction
  // Muda a cada cartão mostrado (mesmo que o cartão se repita)
  serial: number
}

const GRADE_INFO: Record<
  Grade,
  { label: string; color: 'error' | 'warning' | 'success' | 'info' }
> = {
  [Rating.Again]: { label: 'Errei', color: 'error' },
  [Rating.Hard]: { label: 'Difícil', color: 'warning' },
  [Rating.Good]: { label: 'Bom', color: 'success' },
  [Rating.Easy]: { label: 'Fácil', color: 'info' }
}

// Virar o cartão gira no eixo vertical; passar para o próximo desliza para o lado
const faceVariants: Variants = {
  enter: (mode: 'flip' | 'next') =>
    mode === 'flip' ? { rotateY: -90, opacity: 0.3 } : { x: 32, opacity: 0 },
  center: { rotateY: 0, x: 0, opacity: 1 },
  exit: (mode: 'flip' | 'next') =>
    mode === 'flip' ? { rotateY: 90, opacity: 0.3 } : { x: -32, opacity: 0 }
}

// Toca o áudio de um texto pelo teclado (tecla A)
let keyboardAudio: HTMLAudioElement | null = null
function playText(text: string): void {
  const url = getAudioUrl(text)
  if (!url) return
  keyboardAudio?.pause()
  keyboardAudio = new Audio(url)
  void keyboardAudio.play()
}

// Teclas digitadas num campo ou com foco num botão ficam com eles
function ignoreKey(e: KeyboardEvent): boolean {
  if (e.ctrlKey || e.metaKey || e.altKey) return true
  const target = e.target as HTMLElement | null
  if (!target) return false
  if (target.closest('input, textarea, [contenteditable="true"]')) return true
  return (e.key === ' ' || e.key === 'Enter') && !!target.closest('button, [role="button"]')
}

let serialCounter = 0

// Uma sessão de estudo: vencidos primeiro, depois novos (até o limite do dia).
// Atalhos: Espaço/Enter vira o cartão; depois, 1–4 respondem (Espaço/Enter = Bom);
// A toca o áudio do francês, quando ele está à vista
export default function FlashcardSession({
  config,
  onExit,
  onMore
}: {
  config: FlashcardSessionConfig
  onExit: () => void
  // Nova sessão com mais 5 novos além do limite
  onMore: () => void
}): ReactElement {
  const stats = useFlashcardStats()
  const limit = newPerDayPref.use()
  const cards = useMemo(
    () => ALL_FLASHCARDS.filter((c) => config.deckIds.includes(c.deckId)),
    [config.deckIds]
  )

  const choose = (skip?: string): Current | null => {
    const now = Date.now()
    const all = flashcardStore.get()
    const allowance = limit + config.extraNew - introducedToday(all, now)
    const card = pickNext(cards, all, allowance, now, skip)
    if (!card) return null
    // Na primeira vez, sempre do francês para o português; depois, sorteado
    const direction: Direction = all[card.id] && Math.random() < 0.5 ? 'pt' : 'fr'
    return { card, direction, serial: ++serialCounter }
  }

  const [current, setCurrent] = useState<Current | null>(() => choose())
  const [outcomes, setOutcomes] = useState<Outcomes | null>(null)
  const [mode, setMode] = useState<'flip' | 'next'>('next')
  const [done, setDone] = useState({ reviews: 0, again: 0 })
  const flipped = outcomes !== null

  const flip = (): void => {
    if (!current || flipped) return
    setMode('flip')
    setOutcomes(previewOutcomes(flashcardStore.get()[current.card.id], Date.now()))
  }

  const answer = (grade: Grade): void => {
    if (!current || !outcomes) return
    saveOutcome(current.card.id, outcomes[grade])
    setDone((d) => ({ reviews: d.reviews + 1, again: d.again + (grade === Rating.Again ? 1 : 0) }))
    setMode('next')
    setOutcomes(null)
    setCurrent(choose(current.card.id))
  }

  // O francês está à vista? (para a tecla A)
  const frenchVisible = !!current && (current.direction === 'fr' || flipped)

  const keyHandler = useRef<(e: KeyboardEvent) => void>(() => {})
  keyHandler.current = (e) => {
    if (!current || ignoreKey(e)) return
    if (e.key === 'a' || e.key === 'A') {
      if (frenchVisible) playText(current.card.fr)
      return
    }
    if (!flipped) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        flip()
      }
      return
    }
    const n = Number(e.key)
    if (n >= 1 && n <= 4) {
      e.preventDefault()
      answer(GRADES[n - 1])
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      answer(Rating.Good)
    }
  }
  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => keyHandler.current(e)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Quanto falta: vencidos agora + novos que ainda cabem hoje
  const now = Date.now()
  const started = cards.filter((c) => cardStatus(stats[c.id]) !== 'new')
  const dueLearning = started.filter(
    (c) => stats[c.id].due <= now && stats[c.id].state !== State.Review
  ).length
  const dueReview = started.filter(
    (c) => stats[c.id].due <= now && stats[c.id].state === State.Review
  ).length
  const unseen = newCardsInOrder(cards, stats).length
  const newLeft = Math.min(
    unseen,
    Math.max(0, limit + config.extraNew - introducedToday(stats, now))
  )
  const remaining = dueLearning + dueReview + newLeft
  const progress =
    done.reviews + remaining ? (done.reviews / (done.reviews + remaining)) * 100 : 100

  if (!current) {
    // Próxima revisão entre os baralhos da sessão
    const nextDue = started.reduce<number | null>(
      (min, c) => (min === null || stats[c.id].due < min ? stats[c.id].due : min),
      null
    )
    const correct = done.reviews
      ? Math.round(((done.reviews - done.again) / done.reviews) * 100)
      : 0
    return (
      <Page>
        <motion.div variants={stagger(0, 0.06)} initial="hidden" animate="show">
          <motion.div variants={riseIn}>
            <Typography variant="body2" color="text.secondary">
              Flashcards
            </Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>
              {done.reviews ? 'Sessão concluída' : 'Nada para estudar agora'}
            </Typography>
          </motion.div>
          <motion.div variants={riseIn}>
            <Card sx={{ mb: 3 }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ color: 'success.main', display: 'flex' }}>
                  <FiCheckCircle size={44} />
                </Box>
                <Box>
                  {done.reviews > 0 && (
                    <Typography variant="subtitle1">
                      <AnimatedNumber value={done.reviews} /> resposta
                      {done.reviews === 1 ? '' : 's'} · {correct}% sem errar
                    </Typography>
                  )}
                  <Typography variant="body2" color="text.secondary">
                    {nextDue === null
                      ? 'Os cartões que você estudar voltam no momento certo para revisar.'
                      : `Próxima revisão: ${nextDue <= now ? 'agora' : `em ${formatInterval(nextDue - now)}`}.`}
                    {unseen > 0 && newLeft === 0
                      ? ` Você chegou ao limite de ${limit} cartões novos por dia.`
                      : ''}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={riseIn}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Button variant="contained" onClick={onExit}>
                Voltar
              </Button>
              {unseen > 0 && (
                <Button variant="outlined" startIcon={<FiPlus />} onClick={onMore}>
                  Estudar mais {Math.min(5, unseen)} novo{Math.min(5, unseen) === 1 ? '' : 's'}
                </Button>
              )}
            </Box>
          </motion.div>
        </motion.div>
      </Page>
    )
  }

  const { card, direction } = current
  const record = stats[card.id]
  const deck = getDeck(card.deckId)
  const status = cardStatus(record)
  const faceKey = `${current.serial}-${flipped ? 'back' : 'front'}`

  // Palavra em francês, grande, com áudio
  const frenchWord = (size: number): ReactElement => (
    <FrenchAudio text={card.fr} variant="block">
      <Typography component="span" sx={{ fontSize: size, fontWeight: 600, lineHeight: 1.3 }}>
        {card.fr}
      </Typography>
    </FrenchAudio>
  )
  const portuguese = (size: number, muted = false): ReactElement => (
    <Typography
      sx={{ fontSize: size, fontWeight: muted ? 400 : 600, lineHeight: 1.3 }}
      color={muted ? 'text.secondary' : 'text.primary'}
    >
      {card.pt}
    </Typography>
  )

  return (
    <Page>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <IconButton size="small" title="Sair da sessão" onClick={onExit} sx={{ ml: -1 }}>
          <FiX />
        </IconButton>
        <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }} noWrap>
          Flashcards
        </Typography>
        {/* Quanto falta, por tipo (o cartão atual sublinhado) */}
        <Box sx={{ display: 'flex', gap: 1.25, fontSize: 14, fontWeight: 600 }}>
          <Box
            component="span"
            title="Novos"
            sx={{ color: 'info.main', textDecoration: status === 'new' ? 'underline' : 'none' }}
          >
            {newLeft}
          </Box>
          <Box
            component="span"
            title="Aprendendo"
            sx={{
              color: 'error.main',
              textDecoration: status === 'learning' ? 'underline' : 'none'
            }}
          >
            {dueLearning}
          </Box>
          <Box
            component="span"
            title="Revisões"
            sx={{
              color: 'success.main',
              textDecoration: status === 'review' ? 'underline' : 'none'
            }}
          >
            {dueReview}
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: 3 }}>
        <ProgressBar value={progress} />
      </Box>

      <Box sx={{ maxWidth: 640, mx: 'auto', perspective: 1000 }}>
        <AnimatePresence mode="wait" initial={false} custom={mode}>
          <motion.div
            key={faceKey}
            custom={mode}
            variants={faceVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.16, ease: 'easeOut' }}
          >
            <Card
              onClick={flipped ? undefined : flip}
              sx={{
                cursor: flipped ? 'default' : 'pointer',
                minHeight: 260,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                  <Chip
                    size="small"
                    variant="outlined"
                    label={direction === 'fr' ? 'Francês → Português' : 'Português → Francês'}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ flex: 1 }}>
                    {deck?.title}
                  </Typography>
                  {status === 'new' && <Chip size="small" color="info" label="Novo" />}
                </Box>

                {!flipped ? (
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      gap: 1.5,
                      py: 2
                    }}
                  >
                    {direction === 'fr' ? frenchWord(32) : portuguese(28)}
                    <Typography variant="body2" color="text.secondary">
                      {direction === 'fr'
                        ? 'O que quer dizer em português?'
                        : 'Como se diz em francês?'}
                    </Typography>
                  </Box>
                ) : (
                  <Box sx={{ display: 'grid', gap: 1.5 }}>
                    {/* Pergunta (menor) e resposta (em destaque) */}
                    <Box sx={{ textAlign: 'center' }}>
                      {direction === 'fr' ? (
                        <>
                          {frenchWord(24)}
                          {portuguese(22)}
                        </>
                      ) : (
                        <>
                          {portuguese(18, true)}
                          {frenchWord(30)}
                        </>
                      )}
                    </Box>
                    <Divider />
                    <CardDetails card={card} />
                  </Box>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Botões: mostrar a resposta, ou as quatro notas com o próximo intervalo */}
        <Box sx={{ mt: 2.5 }}>
          {!outcomes ? (
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" size="large" onClick={flip} sx={{ minWidth: 220 }}>
                Mostrar resposta
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                ou Espaço · clique no cartão também vira
              </Typography>
            </Box>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Box
                sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 1 }}
              >
                {GRADES.map((grade, i) => {
                  const info = GRADE_INFO[grade]
                  return (
                    <motion.div key={grade} whileTap={{ scale: 0.96 }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color={info.color}
                        onClick={() => answer(grade)}
                        sx={{ flexDirection: 'column', py: 1, lineHeight: 1.2, px: 0.5 }}
                      >
                        <Typography
                          component="span"
                          variant="caption"
                          sx={{ opacity: 0.8, fontWeight: 500 }}
                        >
                          {formatInterval(outcomes[grade].due - now)}
                        </Typography>
                        <Box component="span" sx={{ fontWeight: 700, fontSize: 15 }}>
                          {info.label}
                        </Box>
                        <Typography
                          component="span"
                          variant="caption"
                          color="text.secondary"
                          sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                          {i + 1}
                        </Typography>
                      </Button>
                    </motion.div>
                  )
                })}
              </Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mt: 1, textAlign: 'center' }}
              >
                Teclas 1 a 4 (Espaço = Bom){getAudioUrl(card.fr) ? ' · A toca o áudio' : ''}
              </Typography>
            </motion.div>
          )}
        </Box>

        {done.reviews > 0 && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              justifyContent: 'center',
              mt: 3
            }}
          >
            <FiRepeat /> {done.reviews} resposta{done.reviews === 1 ? '' : 's'} nesta sessão
          </Typography>
        )}
      </Box>
    </Page>
  )
}
