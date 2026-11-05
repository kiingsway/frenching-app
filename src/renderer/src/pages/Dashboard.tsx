import type { ReactElement } from 'react'
import { motion } from 'motion/react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import { AnimatedNumber, ProgressBar, riseIn, stagger } from '@/components/motion'
import { SECTIONS } from '@/data/topics'
import { getTopicContent } from '@/content'
import { useCompletedTopics } from '@/lib/completed'

export default function Dashboard({
  onOpenTopic
}: {
  onOpenTopic: (id: string) => void
}): ReactElement {
  const { done, isDone, toggle } = useCompletedTopics()

  const total = SECTIONS.reduce((n, s) => n + s.topics.length, 0)
  const percent = total ? Math.round((done.length / total) * 100) : 0

  return (
    <Page>
      {/* Cabeçalho, progresso e seções entram em sequência */}
      <motion.div variants={stagger(0, 0.06)} initial="hidden" animate="show">
        <motion.div variants={riseIn}>
          <Typography variant="h5" gutterBottom>
            Painel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Meta: NCLC 7+ nas 4 habilidades (TEF/TCF Canada).
          </Typography>
        </motion.div>

        <motion.div variants={riseIn}>
          <Box sx={{ my: 3 }}>
            <ProgressBar value={percent} />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              <AnimatedNumber value={done.length} /> de {total} tópicos concluídos (
              <AnimatedNumber value={percent} />
              %)
            </Typography>
          </Box>
        </motion.div>

        <Stack spacing={2}>
          {SECTIONS.map((section) => {
            const sectionDone = section.topics.filter((t) => isDone(t.id)).length
            return (
              <motion.div
                key={section.id}
                variants={riseIn}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <Card
                  sx={{
                    transition: 'box-shadow 200ms',
                    '&:hover': { boxShadow: 4 }
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                      <Typography variant="subtitle1" sx={{ flex: 1 }}>
                        {section.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <AnimatedNumber value={sectionDone} />/{section.topics.length}
                      </Typography>
                    </Box>
                    {section.topics.map((topic) => {
                      const written = !!getTopicContent(topic.id)
                      return (
                        <Stack key={topic.id} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          {/* Pequeno "pulo" ao marcar ou desmarcar */}
                          <motion.span
                            whileTap={written ? { scale: 0.8 } : undefined}
                            style={{ display: 'inline-flex' }}
                          >
                            <Checkbox
                              size="small"
                              checked={isDone(topic.id)}
                              disabled={!written}
                              onChange={() => toggle(topic.id)}
                            />
                          </motion.span>
                          <Link
                            component="button"
                            underline="hover"
                            color={isDone(topic.id) ? 'text.secondary' : 'text.primary'}
                            onClick={() => onOpenTopic(topic.id)}
                            sx={{ textAlign: 'left', transition: 'color 200ms' }}
                          >
                            {topic.title}
                          </Link>
                          {!written && <Chip label="em breve" size="small" variant="outlined" />}
                        </Stack>
                      )
                    })}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </Stack>
      </motion.div>
    </Page>
  )
}
