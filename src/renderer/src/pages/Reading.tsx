import { useEffect, useState, type ReactElement } from 'react'
import { motion } from 'motion/react'
import { FiAlertCircle, FiBookOpen, FiClock, FiList, FiPlay, FiZap } from 'react-icons/fi'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import NativeSelect from '@mui/material/NativeSelect'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import ReadingSession, {
  SECONDS_PER_QUESTION,
  type ReadingConfig,
  type ReadingItem
} from '@/components/ReadingSession'
import { AnimatedNumber, GameSwitch, ProgressBar, riseIn, stagger } from '@/components/motion'
import { getTopicContent } from '@/content'
import {
  ALL_READING_QUESTIONS,
  KIND_LABELS,
  READING_LEVELS,
  READING_PASSAGES,
  type ReadingKind,
  type ReadingLevel,
  type ReadingPassage
} from '@/data/reading'
import { shuffle, summarize, type GrammarStats } from '@/lib/grammar-progress'
import { reviewToolsAvailable } from '@/lib/platform'
import { useReadingStats } from '@/lib/reading-progress'

// Textos do treino rápido
const QUICK_COUNT = 3

const KINDS = Object.keys(KIND_LABELS) as ReadingKind[]

const whole = (passage: ReadingPassage): ReadingItem => ({
  passage,
  questions: passage.questions
})

// Prioridade do treino rápido: textos com questões nunca vistas, depois com erros,
// depois os já dominados
function pickPassages(
  pool: ReadingPassage[],
  count: number,
  stats: GrammarStats
): ReadingPassage[] {
  const rank = (p: ReadingPassage): number =>
    p.questions.some((q) => !stats[q.id]) ? 0 : p.questions.some((q) => !stats[q.id].last) ? 1 : 2
  const groups = [0, 1, 2].map((r) => shuffle(pool.filter((p) => rank(p) === r)))
  // O treino segue do mais fácil ao mais difícil, como a prova
  return groups
    .flat()
    .slice(0, count)
    .sort((a, b) => READING_LEVELS.indexOf(a.level) - READING_LEVELS.indexOf(b.level))
}

function MiniBar({ value }: { value: number }): ReactElement {
  return (
    <Box
      sx={{
        width: 72,
        height: 6,
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'rgba(var(--mui-palette-primary-mainChannel) / 0.15)'
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: `${value}%`,
          bgcolor: 'primary.main',
          transition: 'width 400ms'
        }}
      />
    </Box>
  )
}

// Tempo da Prova, ex.: "4 min 30", "23 min"
function minutes(questions: number): string {
  const total = questions * SECONDS_PER_QUESTION
  const s = total % 60
  return `${Math.floor(total / 60)} min${s ? ` ${s}` : ''}`
}

export default function Reading({
  onOpenTopic,
  onOpenReview
}: {
  onOpenTopic: (id: string) => void
  onOpenReview: () => void
}): ReactElement {
  const stats = useReadingStats()
  const [session, setSessionState] = useState<ReadingConfig | null>(null)
  const [run, setRun] = useState(0)
  const setSession = (config: ReadingConfig | null): void => {
    setSessionState(config)
    setRun((r) => r + 1)
  }
  const [level, setLevel] = useState<ReadingLevel | 'all'>('all')
  const [kind, setKind] = useState<ReadingKind | 'all'>('all')
  const [canReview, setCanReview] = useState(false)

  useEffect(() => {
    void reviewToolsAvailable().then(setCanReview)
  }, [])

  useEffect(() => {
    document.getElementById('main-content')?.scrollTo({ top: 0 })
  }, [session])

  if (session)
    return (
      <GameSwitch playing runKey={run}>
        <ReadingSession
          key={run}
          config={session}
          onExit={() => setSession(null)}
          onRestart={setSession}
        />
      </GameSwitch>
    )

  const total = summarize(ALL_READING_QUESTIONS, stats)
  const masteredPercent = total.total ? (total.mastered / total.total) * 100 : 0
  const wrongItems: ReadingItem[] = READING_PASSAGES.map((passage) => ({
    passage,
    questions: passage.questions.filter((q) => stats[q.id] && !stats[q.id].last)
  })).filter((item) => item.questions.length)
  const wrongCount = wrongItems.reduce((n, item) => n + item.questions.length, 0)

  const visible = READING_PASSAGES.filter(
    (p) => (level === 'all' || p.level === level) && (kind === 'all' || p.kind === kind)
  )
  const visibleQuestions = visible.reduce((n, p) => n + p.questions.length, 0)
  const filterLabel = [level === 'all' ? null : level, kind === 'all' ? null : KIND_LABELS[kind]]
    .filter(Boolean)
    .join(' · ')

  return (
    <GameSwitch playing={false} runKey={run}>
      <Page>
        <motion.div variants={stagger(0, 0.06)} initial="hidden" animate="show">
          <motion.div variants={riseIn}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" gutterBottom>
                  Compreensão escrita
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Leia o documento e responda às questões em francês, como no TEF e no TCF Canada.
                  No Treino, a explicação vem logo depois de cada resposta; na Prova, só no fim.
                </Typography>
              </Box>
              {canReview && (
                <Button size="small" startIcon={<FiList />} onClick={onOpenReview}>
                  Lista de textos
                </Button>
              )}
            </Box>
          </motion.div>

          {/* Resumo geral e atalhos */}
          <motion.div variants={riseIn}>
            <Card sx={{ my: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 2 }}>
                  <Box>
                    <Typography sx={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}>
                      <AnimatedNumber value={total.mastered} />
                      <Typography component="span" color="text.secondary" sx={{ fontSize: 16 }}>
                        /{total.total}
                      </Typography>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      questões dominadas
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}>
                      {READING_PASSAGES.length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      textos
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}>
                      {total.accuracy === null ? (
                        '—'
                      ) : (
                        <>
                          <AnimatedNumber value={total.accuracy} />%
                        </>
                      )}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      de acerto
                    </Typography>
                  </Box>
                </Box>
                <ProgressBar value={masteredPercent} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 2.5 }}>
                  <Button
                    variant="contained"
                    startIcon={<FiZap />}
                    onClick={() =>
                      setSession({
                        title: 'Treino rápido',
                        mode: 'train',
                        items: pickPassages(READING_PASSAGES, QUICK_COUNT, stats).map(whole)
                      })
                    }
                  >
                    Treino rápido ({QUICK_COUNT} textos)
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<FiClock />}
                    onClick={() =>
                      setSession({
                        title: 'Prova · todos os textos',
                        mode: 'exam',
                        items: READING_PASSAGES.map(whole)
                      })
                    }
                  >
                    Prova ({ALL_READING_QUESTIONS.length} questões ·{' '}
                    {minutes(ALL_READING_QUESTIONS.length)})
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<FiAlertCircle />}
                    disabled={!wrongCount}
                    onClick={() =>
                      setSession({ title: 'Revisar erros', mode: 'train', items: wrongItems })
                    }
                  >
                    Revisar erros{wrongCount ? ` (${wrongCount})` : ''}
                  </Button>
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', mt: 1.5 }}
                >
                  Na Prova, o tempo é de 1 min 30 por questão, o ritmo das provas reais (TEF: 40
                  questões em 60 min; TCF: 39 em 60 min), e os textos vêm do mais fácil ao mais
                  difícil. “Dominada” = acertou na última tentativa.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          {/* Escolha por nível e tipo de documento */}
          <motion.div variants={riseIn}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Box
                  sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 2 }}
                >
                  {(['all', ...READING_LEVELS] as const).map((l) => (
                    <Chip
                      key={l}
                      label={l === 'all' ? 'Todos os níveis' : l}
                      color={level === l ? 'primary' : 'default'}
                      variant={level === l ? 'filled' : 'outlined'}
                      onClick={() => setLevel(l)}
                    />
                  ))}
                  <NativeSelect
                    value={kind}
                    onChange={(e) => setKind(e.target.value as ReadingKind | 'all')}
                    sx={{ fontSize: 14, ml: { sm: 'auto' } }}
                    inputProps={{ 'aria-label': 'Tipo de documento' }}
                  >
                    <option value="all">Todos os tipos</option>
                    {KINDS.map((k) => (
                      <option key={k} value={k}>
                        {KIND_LABELS[k]}
                      </option>
                    ))}
                  </NativeSelect>
                </Box>

                {visible.length > 0 && filterLabel && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<FiPlay />}
                      onClick={() =>
                        setSession({ title: filterLabel, mode: 'train', items: visible.map(whole) })
                      }
                    >
                      Treinar estes ({visible.length})
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<FiClock />}
                      onClick={() =>
                        setSession({
                          title: `Prova · ${filterLabel}`,
                          mode: 'exam',
                          items: visible.map(whole)
                        })
                      }
                    >
                      Prova com estes ({visibleQuestions} questões · {minutes(visibleQuestions)})
                    </Button>
                  </Box>
                )}

                {visible.length === 0 && (
                  <Typography variant="body2" color="text.secondary" sx={{ py: 2 }}>
                    Ainda não há textos com esses filtros.
                  </Typography>
                )}

                {visible.map((p) => {
                  const s = summarize(p.questions, stats)
                  const hasTheory = !!getTopicContent(p.kind)
                  const start = (): void =>
                    setSession({ title: p.title, mode: 'train', items: [whole(p)] })
                  return (
                    <Box
                      key={p.id}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        py: 0.75,
                        px: 1,
                        mx: -1,
                        borderRadius: 1,
                        '&:hover': { bgcolor: 'action.hover' },
                        '&:hover .passage-play': { opacity: 1 }
                      }}
                    >
                      <Chip
                        size="small"
                        label={p.level}
                        variant="outlined"
                        sx={{ width: 40, flexShrink: 0 }}
                      />
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Link
                          component="button"
                          underline="hover"
                          color="text.primary"
                          lang="fr"
                          onClick={start}
                          sx={{ textAlign: 'left', fontSize: 15, display: 'block' }}
                        >
                          {p.title}
                        </Link>
                        <Typography variant="caption" color="text.secondary">
                          {KIND_LABELS[p.kind]} · {p.questions.length} questões
                        </Typography>
                      </Box>
                      <Box
                        title={`${s.mastered} de ${s.total} dominadas`}
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                      >
                        <MiniBar value={s.total ? (s.mastered / s.total) * 100 : 0} />
                      </Box>
                      <Typography variant="caption" color="text.secondary" sx={{ width: 28 }}>
                        {s.mastered}/{s.total}
                      </Typography>
                      <IconButton
                        size="small"
                        title={
                          hasTheory
                            ? 'Ver a teoria deste tipo de texto'
                            : 'Teoria ainda não escrita'
                        }
                        disabled={!hasTheory}
                        onClick={() => onOpenTopic(p.kind)}
                      >
                        <FiBookOpen />
                      </IconButton>
                      <IconButton
                        size="small"
                        className="passage-play"
                        title="Treinar este texto"
                        onClick={start}
                        sx={{ opacity: 0.6, transition: 'opacity 150ms', color: 'primary.main' }}
                      >
                        <FiPlay />
                      </IconButton>
                    </Box>
                  )
                })}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={riseIn}>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 3 }}>
              Os textos são originais, escritos para treino no formato das provas, com pessoas,
              empresas e situações fictícias. Não são questões oficiais, e o resultado não é uma
              previsão da nota.
            </Typography>
          </motion.div>
        </motion.div>
      </Page>
    </GameSwitch>
  )
}
