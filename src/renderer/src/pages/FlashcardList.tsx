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
import { CardDetails, FrenchAudio } from '@/components/FlashcardParts'
import Page from '@/components/Page'
import { cardHash, FLASHCARD_DECKS, type Flashcard } from '@/data/flashcards'
import {
  cardStatus,
  formatInterval,
  useFlashcardStats,
  type CardRecord,
  type CardStatus
} from '@/lib/flashcard-progress'
import type { ReviewEntry, ReviewMap } from '@/lib/review-types'
import { reviewTools } from '@/lib/platform'

type Status = 'ok' | 'problem'
type ReviewFilter = 'all' | 'pending' | 'ok' | 'problem'

// Item da lista virtualizada: título de baralho ou um cartão
type Item = { type: 'group'; deckId: string; count: number } | { type: 'row'; row: Row }

const DECK_TITLES = new Map(FLASHCARD_DECKS.map((d) => [d.id, d.title]))

const STATUS_LABELS: Record<CardStatus, string> = {
  new: 'Novo',
  learning: 'Aprendendo',
  review: 'Em revisão'
}

interface Row {
  card: Flashcard
  hash: string
  // Texto em minúsculas para a busca
  haystack: string
}

function buildRows(): Row[] {
  return FLASHCARD_DECKS.flatMap((deck) =>
    deck.cards.map((card) => ({
      card,
      hash: cardHash(card),
      haystack: [
        card.id,
        deck.title,
        card.fr,
        card.pt,
        card.example.fr,
        card.example.pt,
        card.trap ?? '',
        card.note ?? ''
      ]
        .join('\n')
        .toLowerCase()
    }))
  )
}

// Estado da revisão de um cartão, considerando se ele mudou depois de revisado
function reviewState(
  entry: ReviewEntry | undefined,
  hash: string
): Status | 'pending' | 'outdated' {
  if (!entry) return 'pending'
  if (entry.hash !== hash) return 'outdated'
  return entry.status
}

// Situação no estudo: novo, aprendendo ou em revisão, e quando volta
function studyLabel(record: CardRecord | undefined, now: number): string {
  const status = cardStatus(record)
  if (!record || status === 'new') return STATUS_LABELS.new
  const when =
    record.due <= now ? 'para revisar agora' : `volta em ${formatInterval(record.due - now)}`
  return `${STATUS_LABELS[status]} · ${when}`
}

// Um cartão: frente e verso, exemplo, armadilha/nota e (no modo de desenvolvimento)
// os botões de revisão
const CardRow = memo(function CardRow({
  row,
  record,
  entry,
  canEdit,
  onSave
}: {
  row: Row
  record: CardRecord | undefined
  entry: ReviewEntry | undefined
  canEdit: boolean
  onSave: (row: Row, status: Status | null, note: string) => void
}): ReactElement {
  const { card } = row
  const state = reviewState(entry, row.hash)
  const current: Status | null = entry && state !== 'outdated' ? entry.status : null
  const [note, setNote] = useState(entry?.note ?? '')
  useEffect(() => setNote(entry?.note ?? ''), [entry?.note])
  const status = cardStatus(record)

  return (
    <Box
      sx={{
        display: 'grid',
        // Telas estreitas: os botões de revisão descem para baixo do cartão
        gridTemplateColumns: canEdit
          ? { xs: 'minmax(0, 1fr)', sm: 'minmax(0, 1fr) 190px' }
          : 'minmax(0, 1fr)',
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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', columnGap: 1.5 }}>
          <FrenchAudio text={card.fr}>
            <Typography component="span" sx={{ fontSize: 18, fontWeight: 600 }}>
              {card.fr}
            </Typography>
          </FrenchAudio>
          <Typography sx={{ fontSize: 16 }}>{card.pt}</Typography>
        </Box>
        <Box sx={{ mt: 1 }}>
          <CardDetails card={card} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, px: 1 }}>
          <Chip
            size="small"
            variant="outlined"
            color={status === 'new' ? 'info' : status === 'learning' ? 'error' : 'success'}
            label={studyLabel(record, Date.now())}
          />
          <Typography variant="caption" color="text.disabled">
            {card.id}
          </Typography>
        </Box>
      </Box>

      {canEdit && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'stretch' }}>
          <ToggleButtonGroup
            exclusive
            size="small"
            fullWidth
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
              title={`Revisado como “${entry?.status === 'ok' ? 'OK' : 'Problema'}”, mas o cartão foi alterado depois`}
            />
          )}
          {current === 'problem' && (
            <TextField
              size="small"
              multiline
              minRows={2}
              placeholder="O que está errado?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onBlur={() => note !== (entry?.note ?? '') && onSave(row, 'problem', note)}
              slotProps={{ htmlInput: { style: { fontSize: 13 } } }}
            />
          )}
        </Box>
      )}
    </Box>
  )
})

export default function FlashcardList({
  backLabel,
  onBack
}: {
  backLabel: string
  onBack: () => void
}): ReactElement {
  const rows = useMemo(buildRows, [])
  const stats = useFlashcardStats()
  const [available, setAvailable] = useState<boolean | null>(null)
  const [reviews, setReviews] = useState<ReviewMap>({})
  const [search, setSearch] = useState('')
  const [deck, setDeck] = useState('all')
  const [study, setStudy] = useState<'all' | CardStatus>('all')
  const [filter, setFilter] = useState<ReviewFilter>('all')
  const deferredSearch = useDeferredValue(search)
  // Cartões revisados desde a última troca de filtro continuam na tela
  // (senão, em “Pendentes”, a linha sumiria antes de dar tempo de escrever a nota)
  const [touched, setTouched] = useState<Set<string>>(() => new Set())
  useEffect(() => setTouched(new Set()), [filter, deck, study, deferredSearch])

  useEffect(() => {
    if (!reviewTools) return setAvailable(false)
    void reviewTools!.available().then(async (ok) => {
      setAvailable(ok)
      if (ok) setReviews(await reviewTools!.get('flashcards'))
    })
  }, [])

  const onSave = useCallback((row: Row, status: Status | null, note: string): void => {
    const entry: ReviewEntry | null = status
      ? {
          status,
          ...(status === 'problem' && note.trim() ? { note: note.trim() } : {}),
          hash: row.hash,
          prompt: row.card.fr,
          answer: row.card.pt,
          at: new Date().toISOString()
        }
      : null
    setTouched((prev) => new Set(prev).add(row.card.id))
    void reviewTools!.set(row.card.id, entry, 'flashcards').then(setReviews)
  }, [])

  const canEdit = available === true

  const counts = useMemo(() => {
    const c = { ok: 0, problem: 0, pending: 0 }
    for (const row of rows) {
      const state = reviewState(reviews[row.card.id], row.hash)
      if (state === 'ok') c.ok++
      else if (state === 'problem') c.problem++
      else c.pending++
    }
    return c
  }, [rows, reviews])

  const visible = useMemo(() => {
    const term = deferredSearch.trim().toLowerCase()
    return rows.filter((row) => {
      if (deck !== 'all' && row.card.deckId !== deck) return false
      if (study !== 'all' && cardStatus(stats[row.card.id]) !== study) return false
      if (term && !row.haystack.includes(term)) return false
      if (!canEdit || filter === 'all' || touched.has(row.card.id)) return true
      const state = reviewState(reviews[row.card.id], row.hash)
      if (filter === 'pending') return state === 'pending' || state === 'outdated'
      return state === filter
    })
  }, [rows, reviews, stats, deferredSearch, deck, study, filter, touched, canEdit])

  // Linhas visíveis com o título do baralho antes de cada grupo
  const items = useMemo(() => {
    const result: Item[] = []
    let lastDeck = ''
    for (const row of visible) {
      if (row.card.deckId !== lastDeck) {
        const count = visible.filter((r) => r.card.deckId === row.card.deckId).length
        result.push({ type: 'group', deckId: row.card.deckId, count })
        lastDeck = row.card.deckId
      }
      result.push({ type: 'row', row })
    }
    return result
  }, [visible])

  // Virtualização: só as linhas perto da área visível existem na tela.
  // A lista rola junto com o <main>, então ele é a área de rolagem e o que vem
  // antes da lista é descontado (scrollMargin), como na lista de questões
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
  }, [deferredSearch, filter, deck, study]) // de propósito: só ao mudar busca/filtros

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: scrollElement,
    estimateSize: (i) => (items[i].type === 'group' ? 44 : 190),
    getItemKey: (i) => {
      const item = items[i]
      return item.type === 'group' ? `group-${item.deckId}` : item.row.card.id
    },
    overscan: 6,
    scrollMargin
  })

  return (
    <Page>
      <Button startIcon={<FiArrowLeft />} onClick={onBack} sx={{ mb: 2, ml: -1 }}>
        {backLabel}
      </Button>
      <Typography variant="h5" gutterBottom>
        Lista de flashcards
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {rows.length} cartões em {FLASHCARD_DECKS.length} baralhos
        {canEdit
          ? ` · ${counts.ok} OK · ${counts.problem} com problema · ${counts.pending} pendentes`
          : ''}
        . Clique no francês para ouvir.
      </Typography>

      {canEdit && (
        <Alert severity="info" sx={{ mt: 2 }}>
          Modo de desenvolvimento: as revisões (OK/Problema) são salvas em
          content-review/flashcards.json, no projeto.
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
          placeholder="Buscar (francês, português, exemplo, id)"
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
          value={deck}
          onChange={(e) => setDeck(e.target.value)}
          sx={{ fontSize: 14 }}
          inputProps={{ 'aria-label': 'Baralho' }}
        >
          <option value="all">Todos os baralhos</option>
          {FLASHCARD_DECKS.map((d) => (
            <option key={d.id} value={d.id}>
              {d.title}
            </option>
          ))}
        </NativeSelect>
        <NativeSelect
          value={study}
          onChange={(e) => setStudy(e.target.value as 'all' | CardStatus)}
          sx={{ fontSize: 14 }}
          inputProps={{ 'aria-label': 'Situação no estudo' }}
        >
          <option value="all">Qualquer situação</option>
          <option value="new">Novos</option>
          <option value="learning">Aprendendo</option>
          <option value="review">Em revisão</option>
        </NativeSelect>
        {canEdit && (
          <ToggleButtonGroup
            exclusive
            size="small"
            color="primary"
            value={filter}
            onChange={(_, value: ReviewFilter | null) => value && setFilter(value)}
          >
            <ToggleButton value="all">Todos</ToggleButton>
            <ToggleButton value="pending">Pendentes</ToggleButton>
            <ToggleButton value="ok">OK</ToggleButton>
            <ToggleButton value="problem">Problema</ToggleButton>
          </ToggleButtonGroup>
        )}
      </Box>

      {items.length === 0 && (
        <Typography color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
          Nenhum cartão com esses filtros.
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
                  {DECK_TITLES.get(item.deckId)}
                  <Typography
                    component="span"
                    variant="caption"
                    color="text.secondary"
                    sx={{ ml: 1 }}
                  >
                    {item.count}
                  </Typography>
                </Typography>
              ) : (
                <CardRow
                  row={item.row}
                  record={stats[item.row.card.id]}
                  entry={reviews[item.row.card.id]}
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
