import { useEffect, useState, type ReactElement } from 'react'
import { motion } from 'motion/react'
import { FiAlertCircle, FiBookOpen, FiList, FiPlay, FiZap } from 'react-icons/fi'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import GrammarSession, { type SessionConfig } from '@/components/GrammarSession'
import Page from '@/components/Page'
import { AnimatedNumber, ProgressBar, riseIn, stagger } from '@/components/motion'
import { getTopicContent } from '@/content'
import { ALL_QUESTIONS, GRAMMAR_LEVELS, GRAMMAR_TOPICS } from '@/data/grammar'
import { pickQuestions, shuffle, summarize, useGrammarStats } from '@/lib/grammar-progress'
import { reviewToolsAvailable } from '@/lib/platform'

const QUICK_COUNT = 10
const LEVEL_COUNT = 15
const REVIEW_MAX = 20

// Barrinha fina de domínio de um tópico (questões cuja última resposta foi certa)
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

export default function Grammar({
  onOpenTopic,
  onOpenReview
}: {
  onOpenTopic: (id: string) => void
  onOpenReview: () => void
}): ReactElement {
  const stats = useGrammarStats()
  const [session, setSessionState] = useState<SessionConfig | null>(null)
  // Cada rodada ganha um número: o componente da rodada é recriado do zero
  const [run, setRun] = useState(0)
  const setSession = (config: SessionConfig | null): void => {
    setSessionState(config)
    setRun((r) => r + 1)
  }
  // A lista de questões (revisão) só existe no modo de desenvolvimento
  const [canReview, setCanReview] = useState(false)

  useEffect(() => {
    void reviewToolsAvailable().then(setCanReview)
  }, [])

  // Ao começar ou sair de uma rodada, volta para o topo
  useEffect(() => {
    document.getElementById('main-content')?.scrollTo({ top: 0 })
  }, [session])

  if (session)
    return (
      <GrammarSession
        // Nova rodada = componente novo (zera respostas e ordem das opções)
        key={run}
        config={session}
        onExit={() => setSession(null)}
        onRestart={setSession}
      />
    )

  const total = summarize(ALL_QUESTIONS, stats)
  const wrongQuestions = ALL_QUESTIONS.filter((q) => stats[q.id] && !stats[q.id].last)
  const masteredPercent = total.total ? (total.mastered / total.total) * 100 : 0

  return (
    <Page>
      <motion.div variants={stagger(0, 0.06)} initial="hidden" animate="show">
        <motion.div variants={riseIn}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" gutterBottom>
                Gramática
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Questões de múltipla escolha, como nas provas. Cada resposta vem com a explicação.
              </Typography>
            </Box>
            {canReview && (
              <Button size="small" startIcon={<FiList />} onClick={onOpenReview}>
                Lista de questões
              </Button>
            )}
          </Box>
        </motion.div>

        {/* Resumo geral e atalhos de treino */}
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
                    dominadas
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}>
                    <AnimatedNumber value={total.answered} />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    já respondidas
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
                      questions: pickQuestions(ALL_QUESTIONS, QUICK_COUNT, stats)
                    })
                  }
                >
                  Treino rápido ({QUICK_COUNT})
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FiAlertCircle />}
                  disabled={!wrongQuestions.length}
                  onClick={() =>
                    setSession({
                      title: 'Revisar erros',
                      questions: shuffle(wrongQuestions).slice(0, REVIEW_MAX)
                    })
                  }
                >
                  Revisar erros{wrongQuestions.length ? ` (${wrongQuestions.length})` : ''}
                </Button>
              </Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mt: 1.5 }}
              >
                O treino rápido mistura todos os níveis e prioriza as questões que você ainda não
                viu ou errou na última vez. “Dominada” = acertou na última tentativa.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* Um card por nível, com os tópicos */}
        {GRAMMAR_LEVELS.map((level) => {
          const topics = GRAMMAR_TOPICS.filter((t) => t.level === level)
          const levelQuestions = topics.flatMap((t) => t.questions)
          const levelSummary = summarize(levelQuestions, stats)
          return (
            <motion.div key={level.sectionId} variants={riseIn}>
              <Card sx={{ mb: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle1">{level.label}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {levelSummary.mastered}/{levelSummary.total} dominadas · {topics.length}{' '}
                        tópicos
                      </Typography>
                    </Box>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<FiPlay />}
                      onClick={() =>
                        setSession({
                          title: level.label,
                          questions: pickQuestions(levelQuestions, LEVEL_COUNT, stats)
                        })
                      }
                    >
                      Praticar nível ({LEVEL_COUNT})
                    </Button>
                  </Box>

                  {topics.map((topic) => {
                    const s = summarize(topic.questions, stats)
                    const hasTheory = !!getTopicContent(topic.id)
                    return (
                      <Box
                        key={topic.id}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          py: 0.75,
                          px: 1,
                          mx: -1,
                          borderRadius: 1,
                          '&:hover': { bgcolor: 'action.hover' },
                          '&:hover .topic-play': { opacity: 1 }
                        }}
                      >
                        <Link
                          component="button"
                          underline="hover"
                          color="text.primary"
                          disabled={!topic.questions.length}
                          onClick={() =>
                            setSession({ title: topic.title, questions: shuffle(topic.questions) })
                          }
                          sx={{ flex: 1, textAlign: 'left', fontSize: 15 }}
                        >
                          {topic.title}
                        </Link>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          // Em telas estreitas, só o contador (x/y) fica: o nome precisa do espaço
                          sx={{
                            width: 64,
                            textAlign: 'right',
                            display: { xs: 'none', sm: 'block' }
                          }}
                          title="Acerto em todas as tentativas"
                        >
                          {s.accuracy === null ? '' : `${s.accuracy}%`}
                        </Typography>
                        <Box
                          title={`${s.mastered} de ${s.total} dominadas`}
                          sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                          <MiniBar value={s.total ? (s.mastered / s.total) * 100 : 0} />
                        </Box>
                        <Typography variant="caption" color="text.secondary" sx={{ width: 36 }}>
                          {s.mastered}/{s.total}
                        </Typography>
                        <IconButton
                          size="small"
                          title={hasTheory ? 'Ver a teoria' : 'Teoria ainda não escrita'}
                          disabled={!hasTheory}
                          onClick={() => onOpenTopic(topic.id)}
                        >
                          <FiBookOpen />
                        </IconButton>
                        <IconButton
                          size="small"
                          className="topic-play"
                          title="Praticar este tópico"
                          disabled={!topic.questions.length}
                          onClick={() =>
                            setSession({ title: topic.title, questions: shuffle(topic.questions) })
                          }
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
          )
        })}

        {/* Fontes usadas para escrever as questões */}
        <motion.div variants={riseIn}>
          <Typography variant="subtitle2" sx={{ mt: 4, mb: 1 }}>
            Fontes
          </Typography>
          <Box component="ul" sx={{ pl: 3, m: 0 }}>
            {[
              ...new Map(GRAMMAR_LEVELS.flatMap((l) => l.sources).map((s) => [s.url, s])).values()
            ].map((source) => (
              <Typography key={source.url} component="li" variant="body2">
                <Link href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </Link>
              </Typography>
            ))}
          </Box>
        </motion.div>
      </motion.div>
    </Page>
  )
}
