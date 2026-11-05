import {
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement
} from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { FiAlertTriangle, FiArrowLeft, FiCheck, FiFlag, FiSearch } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import InputAdornment from '@mui/material/InputAdornment'
import NativeSelect from '@mui/material/NativeSelect'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import GrammarPrompt from '@/components/GrammarPrompt'
import Page from '@/components/Page'
import { GRAMMAR_LEVELS, GRAMMAR_TOPICS, questionHash, type GrammarQuestion } from '@/data/grammar'
import type { ReviewEntry, ReviewMap } from '@/lib/review-types'
import { reviewTools } from '@/lib/platform'

type Status = 'ok' | 'problem'
type Filter = 'all' | 'pending' | 'ok' | 'problem'

// Item da lista virtualizada: título de tópico ou uma questão
type Item = { type: 'group'; topicId: string; count: number } | { type: 'row'; row: Row }

const TOPIC_TITLES = new Map(GRAMMAR_TOPICS.map((t) => [t.id, t.title]))
const TOPIC_LEVELS = new Map(GRAMMAR_TOPICS.map((t) => [t.id, t.level.label]))

interface Row {
  question: GrammarQuestion
  topicId: string
  levelId: string
  hash: string
  // Texto em minúsculas para a busca
  haystack: string
}

function buildRows(): Row[] {
  return GRAMMAR_TOPICS.flatMap((topic) =>
    topic.questions.map((question) => ({
      question,
      topicId: topic.id,
      levelId: topic.level.sectionId,
      hash: questionHash(question),
      haystack: [
        question.id,
        topic.title,
        question.prompt,
        ...question.options,
        question.explanation
      ]
        .join('\n')
        .toLowerCase()
    }))
  )
}

// Estado da revisão de uma questão, considerando se ela mudou depois de revisada
function reviewState(
  entry: ReviewEntry | undefined,
  hash: string
): Status | 'pending' | 'outdated' {
  if (!entry) return 'pending'
  if (entry.hash !== hash) return 'outdated'
  return entry.status
}

// Uma questão: enunciado com a resposta na lacuna, opções (a certa marcada),
// explicação e os botões de revisão
const ReviewRow = memo(function ReviewRow({
  row,
  entry,
  canEdit,
  onSave
}: {
  row: Row
  entry: ReviewEntry | undefined
  canEdit: boolean
  onSave: (row: Row, status: Status | null, note: string) => void
}): ReactElement {
  const { question } = row
  const state = reviewState(entry, row.hash)
  const current: Status | null = entry && state !== 'outdated' ? entry.status : null
  const [note, setNote] = useState(entry?.note ?? '')
  useEffect(() => setNote(entry?.note ?? ''), [entry?.note])

  return (
    <Box
      sx={{
        display: 'grid',
        // Telas estreitas: os botões de revisão descem para baixo da questão
        gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'minmax(0, 1fr) 190px' },
        gap: 2,
        px: 2,
        py: 1.75,
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor:
          current === 'problem' ? 'rgba(var(--mui-palette-error-mainChannel) / 0.05)' : undefined
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontSize: 16, mb: 1 }}>
          <GrammarPrompt prompt={question.prompt} fill={question.options[0]} />
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 1 }}>
          {question.options.map((option, i) => (
            <Chip
              key={i}
              size="small"
              lang="fr"
              label={option}
              icon={i === 0 ? <FiCheck /> : undefined}
              color={i === 0 ? 'success' : 'default'}
              variant={i === 0 ? 'filled' : 'outlined'}
              title={i === 0 ? 'Resposta certa' : 'Opção errada'}
            />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {question.explanation}
        </Typography>
        <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mt: 0.5 }}>
          {question.id}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'stretch' }}>
        <ToggleButtonGroup
          exclusive
          size="small"
          fullWidth
          disabled={!canEdit}
          value={current}
          onChange={(_, value: Status | null) => onSave(row, value, note)}
        >
          <ToggleButton value="ok" color="success" sx={{ gap: 0.75 }}>
            <FiCheck /> OK
          </ToggleButton>
          <ToggleButton value="problem" color="error" sx={{ gap: 0.75 }}>
            <FiFlag /> Problema
          </ToggleButton>
        </ToggleButtonGroup>
        {state === 'outdated' && (
          <Chip
            size="small"
            color="warning"
            variant="outlined"
            icon={<FiAlertTriangle />}
            label="Mudou após a revisão"
            title={`Revisada como “${entry?.status === 'ok' ? 'OK' : 'Problema'}”, mas a questão foi alterada depois`}
          />
        )}
        {current === 'problem' && (
          <TextField
            size="small"
            multiline
            minRows={2}
            placeholder="O que está errado?"
            value={note}
            disabled={!canEdit}
            onChange={(e) => setNote(e.target.value)}
            onBlur={() => note !== (entry?.note ?? '') && onSave(row, 'problem', note)}
            slotProps={{ htmlInput: { style: { fontSize: 13 } } }}
          />
        )}
      </Box>
    </Box>
  )
})

export default function GrammarReview({
  backLabel,
  onBack
}: {
  backLabel: string
  onBack: () => void
}): ReactElement {
  const rows = useMemo(buildRows, [])
  const [available, setAvailable] = useState<boolean | null>(null)
  const [reviews, setReviews] = useState<ReviewMap>({})
  const [search, setSearch] = useState('')
  const [level, setLevel] = useState('all')
  const [filter, setFilter] = useState<Filter>('all')
  const deferredSearch = useDeferredValue(search)
  // Questões revisadas desde a última troca de filtro continuam na tela
  // (senão, em “Pendentes”, a linha sumiria antes de dar tempo de escrever a nota)
  const [touched, setTouched] = useState<Set<string>>(() => new Set())
  useEffect(() => setTouched(new Set()), [filter, level, deferredSearch])

  useEffect(() => {
    if (!reviewTools) return setAvailable(false)
    void reviewTools!.available().then(async (ok) => {
      setAvailable(ok)
      if (ok) setReviews(await reviewTools!.get())
    })
  }, [])

  const onSave = useCallback((row: Row, status: Status | null, note: string): void => {
    const entry: ReviewEntry | null = status
      ? {
          status,
          ...(status === 'problem' && note.trim() ? { note: note.trim() } : {}),
          hash: row.hash,
          prompt: row.question.prompt,
          answer: row.question.options[0],
          at: new Date().toISOString()
        }
      : null
    setTouched((prev) => new Set(prev).add(row.question.id))
    void reviewTools!.set(row.question.id, entry).then(setReviews)
  }, [])

  const counts = useMemo(() => {
    const c = { ok: 0, problem: 0, pending: 0 }
    for (const row of rows) {
      const state = reviewState(reviews[row.question.id], row.hash)
      if (state === 'ok') c.ok++
      else if (state === 'problem') c.problem++
      else c.pending++
    }
    return c
  }, [rows, reviews])

  const visible = useMemo(() => {
    const term = deferredSearch.trim().toLowerCase()
    return rows.filter((row) => {
      if (level !== 'all' && row.levelId !== level) return false
      if (term && !row.haystack.includes(term)) return false
      if (filter === 'all' || touched.has(row.question.id)) return true
      const state = reviewState(reviews[row.question.id], row.hash)
      if (filter === 'pending') return state === 'pending' || state === 'outdated'
      return state === filter
    })
  }, [rows, reviews, deferredSearch, level, filter, touched])

  // Linhas visíveis com o título do tópico antes de cada grupo
  const items = useMemo(() => {
    const result: Item[] = []
    let lastTopic = ''
    for (const row of visible) {
      if (row.topicId !== lastTopic) {
        const count = visible.filter((r) => r.topicId === row.topicId).length
        result.push({ type: 'group', topicId: row.topicId, count })
        lastTopic = row.topicId
      }
      result.push({ type: 'row', row })
    }
    return result
  }, [visible])

  // Virtualização: só as linhas perto da área visível existem na tela.
  // A lista rola junto com o <main>, então ele é a área de rolagem e o que vem
  // antes da lista é descontado (scrollMargin), como na lista de áudios
  const listRef = useRef<HTMLDivElement | null>(null)
  const stickyRef = useRef<HTMLDivElement | null>(null)
  const [scrollMargin, setScrollMargin] = useState(0)
  const scrollElement = (): HTMLElement | null => document.getElementById('main-content')
  useLayoutEffect(() => {
    const main = scrollElement()
    if (!listRef.current || !main) return
    const offset =
      listRef.current.getBoundingClientRect().top -
      main.getBoundingClientRect().top +
      main.scrollTop
    if (Math.abs(offset - scrollMargin) > 1) setScrollMargin(offset)
  })

  // Ao mudar busca ou filtros com a lista rolada, volta ao começo dela
  useEffect(() => {
    const main = scrollElement()
    if (!main || !stickyRef.current) return
    const listStart = scrollMargin - stickyRef.current.offsetHeight
    if (main.scrollTop > listStart) main.scrollTop = listStart
  }, [deferredSearch, filter, level]) // de propósito: só ao mudar busca/filtros

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: scrollElement,
    estimateSize: (i) => (items[i].type === 'group' ? 44 : 150),
    getItemKey: (i) => {
      const item = items[i]
      return item.type === 'group' ? `group-${item.topicId}` : item.row.question.id
    },
    overscan: 6,
    scrollMargin
  })

  const canEdit = available === true

  return (
    <Page>
      <Button startIcon={<FiArrowLeft />} onClick={onBack} sx={{ mb: 2, ml: -1 }}>
        {backLabel}
      </Button>
      <Typography variant="h5" gutterBottom>
        Questões de gramática
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {rows.length} questões · {counts.ok} OK · {counts.problem} com problema · {counts.pending}{' '}
        pendentes. A resposta certa aparece na lacuna e em verde nas opções; na prova, as opções são
        embaralhadas.
      </Typography>

      {available === false && (
        <Alert severity="info" sx={{ mt: 2 }}>
          Marcar revisões só funciona no modo de desenvolvimento (npm run dev): elas são salvas em
          content-review/grammar.json, no projeto.
        </Alert>
      )}

      {/* Busca e filtros ficam presos no topo ao rolar */}
      <Box
        ref={stickyRef}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 2,
          mt: 1,
          pt: 2,
          pb: 1.5,
          bgcolor: 'background.default',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1.5,
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <TextField
          size="small"
          placeholder="Buscar (frase, opção, explicação, id)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ flex: 1, minWidth: 220 }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <FiSearch />
                </InputAdornment>
              )
            }
          }}
        />
        <NativeSelect
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          sx={{ fontSize: 14 }}
          inputProps={{ 'aria-label': 'Nível' }}
        >
          <option value="all">Todos os níveis</option>
          {GRAMMAR_LEVELS.map((l) => (
            <option key={l.sectionId} value={l.sectionId}>
              {l.label}
            </option>
          ))}
        </NativeSelect>
        <ToggleButtonGroup
          exclusive
          size="small"
          color="primary"
          value={filter}
          onChange={(_, value: Filter | null) => value && setFilter(value)}
        >
          <ToggleButton value="all">Todas</ToggleButton>
          <ToggleButton value="pending">Pendentes</ToggleButton>
          <ToggleButton value="ok">OK</ToggleButton>
          <ToggleButton value="problem">Problema</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {items.length === 0 && (
        <Typography color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
          Nenhuma questão com esses filtros.
        </Typography>
      )}

      <Box ref={listRef} sx={{ position: 'relative', height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((v) => {
          const item = items[v.index]
          return (
            <Box
              key={v.key}
              data-index={v.index}
              ref={virtualizer.measureElement}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${v.start - scrollMargin}px)`
              }}
            >
              {item.type === 'group' ? (
                <Typography
                  variant="body2"
                  sx={{
                    px: 2,
                    py: 1.25,
                    fontWeight: 600,
                    bgcolor: 'action.hover',
                    borderBottom: 1,
                    borderColor: 'divider'
                  }}
                >
                  {TOPIC_TITLES.get(item.topicId)}
                  <Typography
                    component="span"
                    variant="caption"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    {TOPIC_LEVELS.get(item.topicId)} · {item.count}
                  </Typography>
                </Typography>
              ) : (
                <ReviewRow
                  row={item.row}
                  entry={reviews[item.row.question.id]}
                  canEdit={canEdit}
                  onSave={onSave}
                />
              )}
            </Box>
          )
        })}
      </Box>
    </Page>
  )
}
