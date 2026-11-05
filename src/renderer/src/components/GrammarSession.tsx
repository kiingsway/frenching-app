import { useEffect, useMemo, useState, type ReactElement } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FiArrowRight, FiCheck, FiRepeat, FiRotateCcw, FiX } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonBase from '@mui/material/ButtonBase'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import GrammarPrompt from '@/components/GrammarPrompt'
import Page from '@/components/Page'
import { AnimatedNumber, ProgressBar, riseIn, stagger } from '@/components/motion'
import { getGrammarTopic, type GrammarQuestion } from '@/data/grammar'
import { recordAnswer, shuffle } from '@/lib/grammar-progress'

export interface SessionConfig {
  title: string
  questions: GrammarQuestion[]
}

const tint = (color: string, opacity: number): string =>
  `rgba(var(--mui-palette-${color}-mainChannel) / ${opacity})`

// Uma rodada de exercícios: uma questão por vez, correção na hora e resultado no fim.
// Atalhos: 1–4 escolhem a opção; Enter ou → passam para a próxima.
export default function GrammarSession({
  config,
  onExit,
  onRestart
}: {
  config: SessionConfig
  onExit: () => void
  // Começa outra rodada (ex.: só com as que errou)
  onRestart: (config: SessionConfig) => void
}): ReactElement {
  const { questions } = config
  // Ordem embaralhada das opções de cada questão (nos dados, a certa é a primeira)
  const orders = useMemo(
    () => questions.map((q) => shuffle(q.options.map((_, i) => i))),
    [questions]
  )
  const [index, setIndex] = useState(0)
  // Opção escolhida em cada questão (índice nos dados; 0 = certa)
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [finished, setFinished] = useState(false)

  const q = questions[index]
  const picked = answers[index]
  const answered = picked !== null
  const correctCount = answers.filter((a) => a === 0).length

  const pick = (option: number): void => {
    if (answered || finished) return
    setAnswers((prev) => prev.map((a, i) => (i === index ? option : a)))
    recordAnswer(q.id, option === 0)
  }

  const next = (): void => {
    if (!answered) return
    if (index + 1 < questions.length) setIndex(index + 1)
    else setFinished(true)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (finished || e.ctrlKey || e.metaKey || e.altKey) return
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

  if (finished) {
    const wrong = questions.filter((_, i) => answers[i] !== 0)
    const percent = Math.round((correctCount / questions.length) * 100)
    const message =
      percent === 100
        ? 'Perfeito! Nenhum erro.'
        : percent >= 80
          ? 'Muito bem! Revise os poucos erros abaixo.'
          : percent >= 50
            ? 'Bom caminho. Vale revisar as explicações abaixo.'
            : 'Este tema merece mais uma rodada. Leia as explicações com calma.'
    return (
      <Page>
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
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Typography
                  sx={{ fontSize: 44, fontWeight: 700, lineHeight: 1, color: 'primary.main' }}
                >
                  <AnimatedNumber value={percent} />%
                </Typography>
                <Box>
                  <Typography variant="subtitle1">
                    {correctCount} de {questions.length} certas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {message}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={riseIn}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
              {wrong.length > 0 && (
                <Button
                  variant="contained"
                  startIcon={<FiRepeat />}
                  onClick={() =>
                    onRestart({ title: `${config.title} · erros`, questions: shuffle(wrong) })
                  }
                >
                  Refazer as {wrong.length} erradas
                </Button>
              )}
              <Button
                variant={wrong.length ? 'outlined' : 'contained'}
                startIcon={<FiRotateCcw />}
                onClick={() => onRestart({ ...config, questions: shuffle(questions) })}
              >
                Repetir a rodada
              </Button>
              <Button onClick={onExit}>Voltar</Button>
            </Box>
          </motion.div>

          {wrong.length > 0 && (
            <motion.div variants={riseIn}>
              <Typography variant="subtitle1" sx={{ mb: 1.5 }}>
                Para revisar
              </Typography>
              {questions.map((question, i) =>
                answers[i] === 0 ? null : (
                  <Card key={question.id} sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant="caption" color="text.secondary">
                        {getGrammarTopic(question.topicId)?.title}
                      </Typography>
                      <Typography sx={{ fontSize: 17, my: 0.5 }}>
                        <GrammarPrompt prompt={question.prompt} fill={question.options[0]} />
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'error.main', mb: 1 }}>
                        Sua resposta: <span lang="fr">{question.options[answers[i] ?? 0]}</span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {question.explanation}
                      </Typography>
                    </CardContent>
                  </Card>
                )
              )}
            </motion.div>
          )}
        </motion.div>
      </Page>
    )
  }

  const progress = ((index + (answered ? 1 : 0)) / questions.length) * 100

  return (
    <Page>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <IconButton size="small" title="Sair da rodada" onClick={onExit} sx={{ ml: -1 }}>
          <FiX />
        </IconButton>
        <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }} noWrap>
          {config.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {index + 1}/{questions.length} · {correctCount} certa{correctCount === 1 ? '' : 's'}
        </Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <ProgressBar value={progress} />
      </Box>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={q.id + index}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.18 }}
        >
          <Typography variant="caption" color="text.secondary">
            {getGrammarTopic(q.topicId)?.title}
          </Typography>
          <Typography sx={{ fontSize: 22, lineHeight: 1.5, mt: 0.5, mb: 3 }}>
            <GrammarPrompt prompt={q.prompt} fill={answered ? q.options[0] : undefined} />
          </Typography>

          <Box sx={{ display: 'grid', gap: 1.25 }}>
            {orders[index].map((option, n) => {
              const isCorrect = option === 0
              const isPicked = option === picked
              const state = !answered ? 'idle' : isCorrect ? 'correct' : isPicked ? 'wrong' : 'dim'
              const color =
                state === 'correct' ? 'success' : state === 'wrong' ? 'error' : 'primary'
              return (
                <motion.div key={option} whileTap={answered ? undefined : { scale: 0.98 }}>
                  <ButtonBase
                    onClick={() => pick(option)}
                    disabled={answered}
                    sx={{
                      width: '100%',
                      justifyContent: 'flex-start',
                      textAlign: 'left',
                      gap: 1.5,
                      px: 2,
                      py: 1.5,
                      borderRadius: 1,
                      border: 1,
                      fontSize: 17,
                      transition: 'background-color 150ms, border-color 150ms, opacity 150ms',
                      borderColor:
                        state === 'idle' || state === 'dim' ? 'divider' : `${color}.main`,
                      bgcolor:
                        state === 'correct' || state === 'wrong'
                          ? tint(color, 0.1)
                          : 'background.paper',
                      opacity: state === 'dim' ? 0.55 : 1,
                      '&:hover':
                        state === 'idle'
                          ? { borderColor: 'primary.main', bgcolor: tint('primary', 0.05) }
                          : {}
                    }}
                  >
                    {/* Número do atalho, que vira ✓ ou ✕ depois de responder */}
                    <Box
                      sx={{
                        width: 26,
                        height: 26,
                        flexShrink: 0,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 13,
                        fontWeight: 700,
                        bgcolor:
                          state === 'correct' || state === 'wrong'
                            ? `${color}.main`
                            : tint('primary', 0.12),
                        color:
                          state === 'correct' || state === 'wrong'
                            ? `${color}.contrastText`
                            : 'primary.main'
                      }}
                    >
                      {state === 'correct' ? <FiCheck /> : state === 'wrong' ? <FiX /> : n + 1}
                    </Box>
                    <span lang="fr">{questions[index].options[option]}</span>
                  </ButtonBase>
                </motion.div>
              )
            })}
          </Box>

          <AnimatePresence>
            {answered && (
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
                  {q.explanation}
                </Alert>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                  <Button variant="contained" endIcon={<FiArrowRight />} onClick={next}>
                    {index + 1 < questions.length ? 'Próxima' : 'Ver resultado'}
                  </Button>
                  <Typography variant="caption" color="text.secondary">
                    ou Enter
                  </Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {!answered && (
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
          Dica: use as teclas 1 a {orders[index].length} para responder.
        </Typography>
      )}
    </Page>
  )
}
