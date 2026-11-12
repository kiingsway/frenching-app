import { useEffect, useState, type ReactElement } from 'react'
import { motion } from 'motion/react'
import { FiList, FiPlay, FiPlus } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import FlashcardSession, { type FlashcardSessionConfig } from '@/components/FlashcardSession'
import Page from '@/components/Page'
import { AnimatedNumber, GameSwitch, ProgressBar, riseIn, stagger } from '@/components/motion'
import { FLASHCARD_DECKS } from '@/data/flashcards'
import {
  decksOffPref,
  introducedToday,
  newPerDayPref,
  reviewedToday,
  summarizeCards,
  useFlashcardStats
} from '@/lib/flashcard-progress'

function Stat({
  value,
  label,
  suffix
}: {
  value: number
  label: string
  suffix?: string
}): ReactElement {
  return (
    <Box>
      <Typography sx={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}>
        <AnimatedNumber value={value} />
        {suffix && (
          <Typography component="span" color="text.secondary" sx={{ fontSize: 16 }}>
            {suffix}
          </Typography>
        )}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  )
}

export default function Flashcards({ onOpenList }: { onOpenList: () => void }): ReactElement {
  const stats = useFlashcardStats()
  const limit = newPerDayPref.use()
  const decksOff = decksOffPref.use()
  const [session, setSessionState] = useState<FlashcardSessionConfig | null>(null)
  // Cada sessão ganha um número: o componente da sessão é recriado do zero
  const [run, setRun] = useState(0)
  const setSession = (config: FlashcardSessionConfig | null): void => {
    setSessionState(config)
    setRun((r) => r + 1)
  }

  // Ao começar ou sair de uma sessão, volta para o topo
  useEffect(() => {
    document.getElementById('main-content')?.scrollTo({ top: 0 })
  }, [session])

  // Menu e sessão ficam dentro do mesmo GameSwitch (mesma posição nos dois returns),
  // que anima a troca entre eles como um mergulho
  if (session)
    return (
      <GameSwitch playing runKey={run}>
        <FlashcardSession
          key={run}
          config={session}
          onExit={() => setSession(null)}
          onMore={() => setSession({ ...session, extraNew: session.extraNew + 5 })}
        />
      </GameSwitch>
    )

  const now = Date.now()
  const selected = FLASHCARD_DECKS.filter((d) => !decksOff.includes(d.id))
  const selectedCards = selected.flatMap((d) => d.cards)
  const summary = summarizeCards(selectedCards, stats, now)
  const newToday = introducedToday(stats, now)
  const newLeft = Math.min(summary.new, Math.max(0, limit - newToday))
  const toStudy = summary.due + newLeft

  const toggleDeck = (id: string): void =>
    decksOffPref.set(decksOff.includes(id) ? decksOff.filter((d) => d !== id) : [...decksOff, id])

  const start = (deckIds: string[], extraNew = 0): void => setSession({ deckIds, extraNew })

  return (
    <GameSwitch playing={false} runKey={run}>
      <Page>
        <motion.div variants={stagger(0, 0.06)} initial="hidden" animate="show">
          <motion.div variants={riseIn}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" gutterBottom>
                  Flashcards
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Vocabulário para a produção escrita e oral, com repetição espaçada: cada cartão
                  volta pouco antes de você esquecer.
                </Typography>
              </Box>
              <Button size="small" startIcon={<FiList />} onClick={onOpenList}>
                Lista de flashcards
              </Button>
            </Box>
          </motion.div>

          {/* Hoje: o que vence, quantos novos cabem e o botão de estudar */}
          <motion.div variants={riseIn}>
            <Card sx={{ my: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 2.5 }}>
                  <Stat value={summary.due} label="para revisar" />
                  <Stat value={newToday} suffix={`/${limit}`} label="novos hoje" />
                  <Stat value={reviewedToday(stats, now)} label="estudados hoje" />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                  <Button
                    variant="contained"
                    startIcon={<FiPlay />}
                    disabled={!selected.length || !toStudy}
                    onClick={() => start(selected.map((d) => d.id))}
                  >
                    Estudar{toStudy ? ` (${toStudy})` : ''}
                  </Button>
                  {selected.length > 0 && !toStudy && summary.new > 0 && (
                    <Button
                      variant="outlined"
                      startIcon={<FiPlus />}
                      onClick={() =>
                        start(
                          selected.map((d) => d.id),
                          5
                        )
                      }
                    >
                      Mais {Math.min(5, summary.new)} novos
                    </Button>
                  )}
                  {selected.length > 0 && !toStudy && (
                    <Typography variant="body2" color="text.secondary">
                      Tudo em dia por hoje!
                    </Typography>
                  )}
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: 'block', mt: 1.5 }}
                >
                  Até {limit} cartões novos por dia (mude em Configurações). Os cartões aparecem do
                  francês para o português ou do português para o francês, sorteado a cada vez.
                  Responda com sinceridade: o algoritmo FSRS usa a sua resposta para marcar a
                  próxima revisão quando a chance de lembrar cair para 90%.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          {!selected.length && (
            <motion.div variants={riseIn}>
              <Alert severity="info" sx={{ mb: 2 }}>
                Marque ao menos um baralho para estudar.
              </Alert>
            </motion.div>
          )}

          {/* Baralhos: marcar quais entram no estudo e ver o progresso de cada um */}
          {FLASHCARD_DECKS.map((deck) => {
            const s = summarizeCards(deck.cards, stats, now)
            const on = !decksOff.includes(deck.id)
            const started = s.total - s.new
            return (
              <motion.div key={deck.id} variants={riseIn}>
                <Card sx={{ mb: 2, opacity: on ? 1 : 0.7, transition: 'opacity 150ms' }}>
                  <CardContent sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Checkbox
                      checked={on}
                      onChange={() => toggleDeck(deck.id)}
                      slotProps={{ input: { 'aria-label': `Estudar ${deck.title}` } }}
                      sx={{ mt: -0.75, ml: -1 }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="subtitle1">{deck.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                        {deck.description}
                      </Typography>
                      <ProgressBar value={s.total ? (started / s.total) * 100 : 0} height={6} />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', mt: 1 }}
                      >
                        {s.total} cartões · {s.new} novos · {s.learning} aprendendo · {s.review} em
                        revisão
                        {s.due ? ` · ${s.due} para revisar` : ''}
                      </Typography>
                    </Box>
                    <IconButton
                      title="Estudar só este baralho"
                      onClick={() => start([deck.id])}
                      sx={{ color: 'primary.main' }}
                    >
                      <FiPlay />
                    </IconButton>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}

          {/* Fontes usadas para escrever os cartões */}
          <motion.div variants={riseIn}>
            <Typography variant="subtitle2" sx={{ mt: 4, mb: 1 }}>
              Fontes
            </Typography>
            <Box component="ul" sx={{ pl: 3, m: 0 }}>
              {[
                ...new Map(
                  FLASHCARD_DECKS.flatMap((d) => d.sources).map((s) => [s.url, s])
                ).values()
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
    </GameSwitch>
  )
}
