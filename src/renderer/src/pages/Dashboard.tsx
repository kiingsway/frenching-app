import { useEffect, useRef, useState, type ReactElement } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { FiCheck, FiChevronDown, FiSearch, FiX } from 'react-icons/fi'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import { AnimatedNumber, ProgressBar, riseIn, stagger } from '@/components/motion'
import { SECTIONS, type Section } from '@/data/topics'
import { getTopicContent } from '@/content'
import { pendingReturnSection, rememberDashboardReturn } from '@/lib/dashboard-return'
import { useCompletedTopics } from '@/lib/completed'

const written = (topicId: string): boolean => !!getTopicContent(topicId)

// Busca sem diferenciar maiúsculas nem acentos ("expressao" acha "Expressão"), letra a
// letra, para as posições do texto normalizado baterem com as do título original
const fold = (text: string): string =>
  [...text].map((c) => c.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()[0] ?? c).join('')

// A busca acha pelo título e também pelo id do tópico ("eo-opiniao")
const topicMatches = (topic: { id: string; title: string }, query: string): boolean =>
  fold(topic.title).includes(query) || topic.id.toLowerCase().includes(query)

// Título com o trecho buscado destacado
function Highlight({ text, query }: { text: string; query: string }): ReactElement {
  const start = query ? fold(text).indexOf(query) : -1
  if (start < 0) return <>{text}</>
  const end = start + query.length
  return (
    <>
      {text.slice(0, start)}
      <Box
        component="mark"
        sx={{
          bgcolor: 'rgba(var(--mui-palette-primary-mainChannel) / 0.25)',
          color: 'inherit',
          borderRadius: 0.5
        }}
      >
        {text.slice(start, end)}
      </Box>
      {text.slice(end)}
    </>
  )
}

// Anel de progresso da seção; vira um ✓ quando tudo o que dá para marcar foi marcado
function ProgressRing({ value, complete }: { value: number; complete: boolean }): ReactElement {
  const size = 34
  const stroke = 3.5
  const r = (size - stroke) / 2
  return (
    <Box sx={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', display: 'block' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          stroke="rgba(var(--mui-palette-primary-mainChannel) / 0.15)"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: value }}
          transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.15 }}
          // Sem traço nenhum quando está em 0 (a ponta arredondada apareceria). A cor
          // vem de variável CSS, que o motion não anima: troca com transição CSS
          style={{
            opacity: value > 0 ? 1 : 0,
            stroke: complete
              ? 'var(--mui-palette-success-main)'
              : 'var(--mui-palette-primary-main)',
            transition: 'stroke 400ms'
          }}
        />
      </svg>
      <AnimatePresence>
        {complete && (
          <Box
            component={motion.div}
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 18 }}
            sx={{
              position: 'absolute',
              inset: 7,
              borderRadius: '50%',
              bgcolor: 'success.main',
              color: 'success.contrastText',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13
            }}
          >
            <FiCheck strokeWidth={3.5} />
          </Box>
        )}
      </AnimatePresence>
    </Box>
  )
}

function SectionCard({
  section,
  open,
  onToggle,
  isDone,
  toggleDone,
  onOpenTopic,
  query
}: {
  section: Section
  // Busca já normalizada (fold); com busca, só os tópicos que batem aparecem
  query: string
  open: boolean
  onToggle: () => void
  isDone: (id: string) => boolean
  toggleDone: (id: string) => void
  onOpenTopic: (id: string) => void
}): ReactElement {
  const reduce = useReducedMotion()
  // Só tópicos com conteúdo contam: não dá para concluir o que ainda não foi escrito
  const available = section.topics.filter((t) => written(t.id))
  const sectionDone = available.filter((t) => isDone(t.id)).length
  const complete = available.length > 0 && available.every((t) => isDone(t.id))
  const progress = available.length ? sectionDone / available.length : 0
  const bodyId = `section-${section.id}`

  return (
    <motion.div variants={riseIn} layout="position">
      <Card
        sx={{
          transition: 'box-shadow 200ms, border-color 200ms',
          border: 1,
          borderColor: open ? 'rgba(var(--mui-palette-primary-mainChannel) / 0.35)' : 'transparent',
          '&:hover': { boxShadow: 4 }
        }}
      >
        {/* Cabeçalho: abre e fecha a seção */}
        <ButtonBase
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={bodyId}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 1.75,
            px: 2,
            py: 1.5,
            textAlign: 'left',
            '&:hover .section-chevron': { color: 'primary.main' }
          }}
        >
          <ProgressRing value={progress} complete={complete} />
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="subtitle1" sx={{ lineHeight: 1.3 }}>
              {section.title}
            </Typography>
            <Typography variant="caption" color={complete ? 'success.main' : 'text.secondary'}>
              {available.length > 0 && (
                <>
                  <AnimatedNumber value={sectionDone} /> de {available.length} concluídos
                </>
              )}
              {available.length > 0 && available.length < section.topics.length && ' · '}
              {available.length < section.topics.length &&
                `${section.topics.length - available.length} em breve`}
            </Typography>
          </Box>
          <Box
            component={motion.span}
            className="section-chevron"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            sx={{ display: 'inline-flex', color: 'text.secondary', fontSize: 20, flexShrink: 0 }}
          >
            <FiChevronDown />
          </Box>
        </ButtonBase>

        {/* Corpo: abre com a altura animada e os tópicos entram em cascata */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={bodyId}
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      height: { type: 'spring', stiffness: 260, damping: 30 },
                      opacity: { duration: 0.2 }
                    }
              }
              style={{ overflow: 'hidden' }}
            >
              <Box sx={{ px: 2, pb: 2 }}>
                <Box
                  component={motion.div}
                  variants={stagger(0.05, 0.025)}
                  initial="hidden"
                  animate="show"
                >
                  {/* Disponíveis primeiro, "em breve" no fim; a ordem de cada grupo é a original */}
                  {[
                    ...section.topics.filter((topic) => written(topic.id)),
                    ...section.topics.filter((topic) => !written(topic.id))
                  ]
                    .filter((topic) => !query || topicMatches(topic, query))
                    .map((topic) => {
                      const isWritten = written(topic.id)
                      return (
                        <Stack
                          key={topic.id}
                          component={motion.div}
                          variants={{
                            hidden: { opacity: 0, x: -8 },
                            show: { opacity: 1, x: 0 }
                          }}
                          direction="row"
                          spacing={1}
                          sx={{ alignItems: 'center' }}
                        >
                          {/* Pequeno "pulo" ao marcar ou desmarcar */}
                          <motion.span
                            whileTap={isWritten ? { scale: 0.8 } : undefined}
                            style={{ display: 'inline-flex' }}
                          >
                            <Checkbox
                              size="small"
                              checked={isDone(topic.id)}
                              disabled={!isWritten}
                              onChange={() => toggleDone(topic.id)}
                            />
                          </motion.span>
                          <Link
                            component="button"
                            underline="hover"
                            color={isDone(topic.id) ? 'text.secondary' : 'text.primary'}
                            onClick={() => onOpenTopic(topic.id)}
                            sx={{ textAlign: 'left', transition: 'color 200ms' }}
                          >
                            <Highlight text={topic.title} query={query} />
                          </Link>
                          {!isWritten && <Chip label="em breve" size="small" variant="outlined" />}
                        </Stack>
                      )
                    })}
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

export default function Dashboard({
  onOpenTopic
}: {
  onOpenTopic: (id: string) => void
}): ReactElement {
  const { done, isDone, toggle } = useCompletedTopics()

  // Só tópicos com conteúdo entram na conta
  const total = SECTIONS.reduce((n, s) => n + s.topics.filter((t) => written(t.id)).length, 0)
  const doneCount = SECTIONS.reduce(
    (n, s) => n + s.topics.filter((t) => written(t.id) && isDone(t.id)).length,
    0
  )
  const percent = total ? Math.round((doneCount / total) * 100) : 0

  // Seção "da vez": a primeira, de cima para baixo, que ainda tem tópico para marcar.
  // Só contam os tópicos que já têm página (os "em breve" não podem ser marcados)
  const current =
    SECTIONS.find((s) => s.topics.some((t) => written(t.id) && !isDone(t.id)))?.id ?? null

  // Começa só com a seção da vez aberta; as outras abrem e fecham com um clique.
  // Ao concluir a seção da vez, ela fecha e a próxima abre sozinha
  // Ao voltar de uma página de estudo aberta por aqui, também reabre a seção dela
  const [open, setOpen] = useState<Set<string>>(() => {
    const ids = new Set(current ? [current] : [])
    const back = pendingReturnSection()
    if (back) ids.add(back)
    return ids
  })
  const previous = useRef(current)
  useEffect(() => {
    if (previous.current === current) return
    previous.current = current
    setOpen(new Set(current ? [current] : []))
  }, [current])

  // Busca pelos títulos dos tópicos: mostra só as seções com algum tópico que bate,
  // já abertas, e só esses tópicos dentro delas
  const [search, setSearch] = useState('')
  const query = fold(search.trim())
  const sections = query
    ? SECTIONS.filter((s) => s.topics.some((t) => topicMatches(t, query)))
    : SECTIONS
  const found = query
    ? sections.reduce((n, s) => n + s.topics.filter((t) => topicMatches(t, query)).length, 0)
    : 0

  const toggleOpen = (id: string): void =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

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
              <AnimatedNumber value={doneCount} /> de {total} tópicos concluídos (
              <AnimatedNumber value={percent} />
              %)
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={riseIn}>
          <TextField
            fullWidth
            size="small"
            placeholder="Buscar tópico pelo título"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape' && search) {
                e.stopPropagation()
                setSearch('')
              }
            }}
            sx={{ mb: 2 }}
            slotProps={{
              htmlInput: { 'aria-label': 'Buscar tópico pelo título' },
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FiSearch />
                  </InputAdornment>
                ),
                endAdornment: search ? (
                  <InputAdornment position="end">
                    <IconButton size="small" title="Limpar a busca" onClick={() => setSearch('')}>
                      <FiX />
                    </IconButton>
                  </InputAdornment>
                ) : undefined
              }
            }}
          />
          {query && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: -1, mb: 2 }}>
              {found
                ? `${found} tópico${found === 1 ? '' : 's'} encontrado${found === 1 ? '' : 's'}`
                : 'Nenhum tópico com esse título.'}
            </Typography>
          )}
        </motion.div>

        <Stack spacing={1.5}>
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              section={section}
              query={query}
              open={!!query || open.has(section.id)}
              onToggle={() => toggleOpen(section.id)}
              isDone={isDone}
              toggleDone={toggle}
              onOpenTopic={(id) => {
                // Guarda a seção e a altura da tela para a volta (veja lib/dashboard-return.ts)
                rememberDashboardReturn(section.id)
                onOpenTopic(id)
              }}
            />
          ))}
        </Stack>
      </motion.div>
    </Page>
  )
}
