import { useEffect, useMemo, useRef, useState, type ReactElement } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FiArrowRight, FiClock, FiEye, FiEyeOff, FiRepeat, FiRotateCcw, FiX } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ChoiceButton, { type ChoiceState } from '@/components/ChoiceButton'
import PassageView, { Spoken } from '@/components/PassageView'
import { Kbd } from '@/components/ShortcutTip'
import { AnimatedNumber, ProgressBar, riseIn, stagger } from '@/components/motion'
import {
  READING_LEVELS,
  frenchSpaces,
  type ReadingPassage,
  type ReadingQuestion
} from '@/data/reading'
import { shuffle } from '@/lib/grammar-progress'
import { recordReadingAnswer } from '@/lib/reading-progress'

export type ReadingMode = 'train' | 'exam'

// Um texto e as questões dele que entram na rodada (todas, ou só as erradas)
export interface ReadingItem {
  passage: ReadingPassage
  questions: ReadingQuestion[]
}

export interface ReadingConfig {
  title: string
  mode: ReadingMode
  items: ReadingItem[]
}

// Tempo do modo Prova: 1 min 30 por questão, a média das duas provas
// (TEF: 40 questões em 60 min; TCF: 39 em 60 min)
export const SECONDS_PER_QUESTION = 90

interface Step {
  passage: ReadingPassage
  question: ReadingQuestion
}

const clock = (seconds: number): string =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

// Uma rodada de Compreensão escrita: o texto fica ao lado (ou acima, em tela estreita)
// e as questões dele vêm uma por vez.
//  Treino: correção e explicação logo depois de responder, tradução e áudio do texto,
//  sem tempo.
//  Prova: cronômetro, sem tradução, sem áudio e sem correção até o fim, sem voltar a uma
//  questão.
// Atalhos: 1–4 escolhem a opção; Enter ou → passam para a próxima.
export default function ReadingSession({
  config,
  onExit,
  onRestart
}: {
  config: ReadingConfig
  onExit: () => void
  onRestart: (config: ReadingConfig) => void
}): ReactElement {
  const exam = config.mode === 'exam'
  const steps = useMemo<Step[]>(
    () =>
      config.items.flatMap((item) =>
        item.questions.map((question) => ({ passage: item.passage, question }))
      ),
    [config]
  )
  // Ordem embaralhada das opções (nos dados, a certa é a primeira)
  const orders = useMemo(
    () => steps.map((s) => shuffle(s.question.options.map((_, i) => i))),
    [steps]
  )
  const [index, setIndex] = useState(0)
  // Opção confirmada em cada questão (índice nos dados; 0 = certa)
  const [answers, setAnswers] = useState<(number | null)[]>(() => steps.map(() => null))
  // Modo Prova: opção marcada e ainda não confirmada
  const [selected, setSelected] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)
  const [translation, setTranslation] = useState(false)
  const totalSeconds = steps.length * SECONDS_PER_QUESTION
  const [left, setLeft] = useState(totalSeconds)

  const step = steps[index]
  const picked = answers[index]
  const answered = picked !== null

  // No modo Prova, as respostas só são gravadas no fim (sem resposta conta como erro)
  const finish = (final: (number | null)[]): void => {
    if (exam) steps.forEach((s, i) => recordReadingAnswer(s.question.id, final[i] === 0))
    setFinished(true)
  }

  // Cronômetro do modo Prova: ao zerar, a rodada termina com o que foi respondido
  const answersRef = useRef(answers)
  answersRef.current = answers
  useEffect(() => {
    if (!exam || finished) return
    const timer = window.setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000)
    return () => window.clearInterval(timer)
  }, [exam, finished])
  useEffect(() => {
    if (exam && !finished && left === 0) finish(answersRef.current)
  }) // de propósito: confere a cada segundo

  // Texto novo: volta para o começo dele
  const passageRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    passageRef.current?.scrollTo({ top: 0 })
  }, [step?.passage.id])

  const pick = (option: number): void => {
    if (finished || answered) return
    if (exam) return setSelected(option)
    setAnswers((prev) => prev.map((a, i) => (i === index ? option : a)))
    recordReadingAnswer(step.question.id, option === 0)
  }

  const next = (): void => {
    if (finished) return
    let current = answers
    if (exam) {
      if (selected === null) return
      current = answers.map((a, i) => (i === index ? selected : a))
      setAnswers(current)
      setSelected(null)
    } else if (!answered) return
    if (index + 1 < steps.length) setIndex(index + 1)
    else finish(current)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      // defaultPrevented: Enter ou Espaço num trecho com áudio, que já tocou o áudio
      if (finished || e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return
      const n = Number(e.key)
      if (n >= 1 && n <= orders[index].length) {
        e.preventDefault()
        pick(orders[index][n - 1])
      } else if (e.key === 'Enter' || e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (finished)
    return (
      <Result
        config={config}
        steps={steps}
        answers={answers}
        onExit={onExit}
        onRestart={onRestart}
        timeUsed={exam ? totalSeconds - left : null}
      />
    )

  const correctCount = answers.filter((a) => a === 0).length
  const done = answers.filter((a) => a !== null).length
  const progress = (done / steps.length) * 100
  const canGo = exam ? selected !== null : answered

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: { xs: 2.5, md: 4 }, maxWidth: 1240 }}>
      {/* Barra de cima: sair, título, contagem e cronômetro */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <IconButton size="small" title="Sair da rodada" onClick={onExit} sx={{ ml: -1 }}>
          <FiX />
        </IconButton>
        <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }} noWrap>
          {config.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {index + 1}/{steps.length}
          {!exam && ` · ${correctCount} certa${correctCount === 1 ? '' : 's'}`}
        </Typography>
        {exam && (
          <Typography
            variant="body2"
            title="Tempo restante"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 1.5,
              fontWeight: 600,
              fontVariantNumeric: 'tabular-nums',
              color: left <= 60 ? 'error.main' : 'text.primary'
            }}
          >
            <FiClock /> {clock(left)}
          </Typography>
        )}
      </Box>
      <Box sx={{ mb: 3 }}>
        <ProgressBar value={progress} />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 1.1fr) minmax(0, 1fr)' },
          gap: { xs: 3, md: 4 },
          alignItems: 'start'
        }}
      >
        {/* Texto: fica preso no topo ao rolar, em tela larga */}
        <Box
          ref={passageRef}
          sx={{
            position: { md: 'sticky' },
            top: { md: 16 },
            maxHeight: { md: 'calc(100vh - 140px)' },
            overflowY: { md: 'auto' }
          }}
        >
          {!exam && (
            <Button
              size="small"
              startIcon={translation ? <FiEyeOff /> : <FiEye />}
              onClick={() => setTranslation((t) => !t)}
              sx={{ mb: 1, ml: -0.5 }}
            >
              {translation ? 'Esconder a tradução' : 'Mostrar a tradução'}
            </Button>
          )}
          <PassageView
            passage={step.passage}
            translation={!exam && translation}
            audio={!exam}
          />
        </Box>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step.question.id + index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.18 }}
          >
            <Box sx={{ mb: 2.5 }}>
              <Spoken text={step.question.prompt} audio={!exam}>
                <Typography lang="fr" sx={{ fontSize: 19, lineHeight: 1.5 }}>
                  {frenchSpaces(step.question.prompt)}
                </Typography>
              </Spoken>
            </Box>

            <Box sx={{ display: 'grid', gap: 1.25 }}>
              {orders[index].map((option, n) => {
                const state: ChoiceState = exam
                  ? option === selected
                    ? 'selected'
                    : 'idle'
                  : !answered
                    ? 'idle'
                    : option === 0
                      ? 'correct'
                      : option === picked
                        ? 'wrong'
                        : 'dim'
                return (
                  <ChoiceButton
                    key={option}
                    state={state}
                    number={n + 1}
                    disabled={!exam && answered}
                    onClick={() => pick(option)}
                  >
                    {frenchSpaces(step.question.options[option])}
                  </ChoiceButton>
                )
              })}
            </Box>

            <AnimatePresence>
              {!exam && answered && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Alert
                    severity={picked === 0 ? 'success' : 'error'}
                    variant="outlined"
                    sx={{ mt: 3 }}
                  >
                    {picked === 0 ? 'Certo! ' : 'Não é essa. '}
                    {step.question.explanation}
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2.5 }}>
              {(exam || answered) && (
                <Button
                  variant="contained"
                  endIcon={<FiArrowRight />}
                  disabled={!canGo}
                  onClick={next}
                >
                  {index + 1 < steps.length ? 'Próxima' : exam ? 'Terminar' : 'Ver resultado'}
                </Button>
              )}
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', gap: 0.5 }}
              >
                {canGo ? (
                  <>
                    ou <Kbd>Enter</Kbd>
                  </>
                ) : (
                  <>
                    Dica: use as teclas
                    {orders[index].map((_, n) => (
                      <Kbd key={n}>{String(n + 1)}</Kbd>
                    ))}
                    para responder.
                  </>
                )}
              </Typography>
            </Box>
            {exam && (
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
                Modo Prova: a correção aparece no fim, e não dá para voltar a uma questão.
              </Typography>
            )}
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  )
}

// Resultado: acertos, acertos por nível (no modo Prova) e as questões erradas com a
// explicação
function Result({
  config,
  steps,
  answers,
  timeUsed,
  onExit,
  onRestart
}: {
  config: ReadingConfig
  steps: Step[]
  answers: (number | null)[]
  timeUsed: number | null
  onExit: () => void
  onRestart: (config: ReadingConfig) => void
}): ReactElement {
  const correctCount = answers.filter((a) => a === 0).length
  const percent = Math.round((correctCount / steps.length) * 100)
  const message =
    percent === 100
      ? 'Perfeito! Nenhum erro.'
      : percent >= 80
        ? 'Muito bem! Revise os poucos erros abaixo.'
        : percent >= 50
          ? 'Bom caminho. Vale reler os trechos indicados nas explicações.'
          : 'Estes textos merecem mais uma leitura. Tente de novo no modo Treino, com a tradução.'

  // Só as questões erradas (ou sem resposta), agrupadas por texto
  const wrongItems = config.items
    .map((item) => ({
      passage: item.passage,
      questions: item.questions.filter((q) => {
        const i = steps.findIndex((s) => s.question.id === q.id)
        return answers[i] !== 0
      })
    }))
    .filter((item) => item.questions.length)
  const wrongCount = wrongItems.reduce((n, item) => n + item.questions.length, 0)

  const byLevel = READING_LEVELS.map((level) => {
    const idx = steps.map((s, i) => (s.passage.level === level ? i : -1)).filter((i) => i >= 0)
    return { level, total: idx.length, correct: idx.filter((i) => answers[i] === 0).length }
  }).filter((l) => l.total)

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: { xs: 2.5, md: 4 }, maxWidth: 900 }}>
      <motion.div variants={stagger(0, 0.06)} initial="hidden" animate="show">
        <motion.div variants={riseIn}>
          <Typography variant="body2" color="text.secondary">
            {config.title}
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Resultado
          </Typography>
        </motion.div>

        <motion.div variants={riseIn}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Typography
                  sx={{ fontSize: 44, fontWeight: 700, lineHeight: 1, color: 'primary.main' }}
                >
                  <AnimatedNumber value={percent} />%
                </Typography>
                <Box>
                  <Typography variant="subtitle1">
                    {correctCount} de {steps.length} certas
                    {timeUsed !== null &&
                      ` · ${clock(timeUsed)} de ${clock(steps.length * SECONDS_PER_QUESTION)}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {message}
                  </Typography>
                </Box>
              </Box>
              {config.mode === 'exam' && byLevel.length > 1 && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 2.5 }}>
                  {byLevel.map((l) => (
                    <Box key={l.level}>
                      <Typography sx={{ fontWeight: 700 }}>
                        {l.correct}/{l.total}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {l.level}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={riseIn}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
            {wrongCount > 0 && (
              <Button
                variant="contained"
                startIcon={<FiRepeat />}
                onClick={() =>
                  onRestart({ title: `${config.title} · erros`, mode: 'train', items: wrongItems })
                }
              >
                {wrongCount === 1
                  ? 'Refazer a errada no Treino'
                  : `Refazer as ${wrongCount} erradas no Treino`}
              </Button>
            )}
            <Button
              variant={wrongCount ? 'outlined' : 'contained'}
              startIcon={<FiRotateCcw />}
              onClick={() => onRestart(config)}
            >
              Repetir a rodada
            </Button>
            <Button onClick={onExit}>Voltar</Button>
          </Box>
        </motion.div>

        {wrongItems.length > 0 && (
          <motion.div variants={riseIn}>
            <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
              Para revisar
            </Typography>
            {wrongItems.flatMap((item) =>
              item.questions.map((question) => {
                const i = steps.findIndex((s) => s.question.id === question.id)
                const answer = answers[i]
                return (
                  <Card key={question.id} sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant="caption" color="text.secondary" lang="fr">
                        {item.passage.title}
                      </Typography>
                      <Typography lang="fr" sx={{ fontSize: 17, my: 0.5 }}>
                        {frenchSpaces(question.prompt)}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'error.main' }}>
                        Sua resposta:{' '}
                        {answer === null ? (
                          'sem resposta'
                        ) : (
                          <span lang="fr">{question.options[answer]}</span>
                        )}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'success.main', mb: 1 }}>
                        Resposta certa: <span lang="fr">{question.options[0]}</span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {question.explanation}
                      </Typography>
                    </CardContent>
                  </Card>
                )
              })
            )}
          </motion.div>
        )}
      </motion.div>
    </Box>
  )
}
