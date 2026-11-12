import { useEffect, useMemo, useState, type ReactElement } from 'react'
import { FiAlertTriangle, FiArrowLeft, FiCheck, FiFlag } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import PassageView from '@/components/PassageView'
import {
  READING_PASSAGES,
  passageHash,
  readingQuestionHash,
  type ReadingPassage
} from '@/data/reading'
import { reviewTools } from '@/lib/platform'
import type { ReviewEntry, ReviewMap } from '@/lib/review-types'

// Revisão dos textos de Compreensão escrita (só no npm run dev): cada texto (com a
// tradução) e cada questão ganham OK ou Problema, salvos em content-review/reading.json

type Status = 'ok' | 'problem'
type Filter = 'all' | 'pending' | 'ok' | 'problem'
type State = Status | 'pending' | 'outdated'

// Um item revisável: o texto em si ou uma questão
interface Target {
  id: string
  hash: string
  prompt: string
  answer: string
}

function stateOf(entry: ReviewEntry | undefined, hash: string): State {
  if (!entry) return 'pending'
  if (entry.hash !== hash) return 'outdated'
  return entry.status
}

const targetsOf = (p: ReadingPassage): Target[] => [
  { id: p.id, hash: passageHash(p), prompt: p.title, answer: p.text[0] ?? '' },
  ...p.questions.map((q) => ({
    id: q.id,
    hash: readingQuestionHash(q),
    prompt: q.prompt,
    answer: q.options[0]
  }))
]

function ReviewButtons({
  target,
  entry,
  canEdit,
  onSave
}: {
  target: Target
  entry: ReviewEntry | undefined
  canEdit: boolean
  onSave: (target: Target, status: Status | null, note: string) => void
}): ReactElement {
  const state = stateOf(entry, target.hash)
  const current: Status | null = entry && state !== 'outdated' ? entry.status : null
  const [note, setNote] = useState(entry?.note ?? '')
  useEffect(() => setNote(entry?.note ?? ''), [entry?.note])
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: { xs: '100%', sm: 190 } }}>
      <ToggleButtonGroup
        exclusive
        size="small"
        fullWidth
        disabled={!canEdit}
        value={current}
        onChange={(_, value: Status | null) => onSave(target, value, note)}
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
          onBlur={() => note !== (entry?.note ?? '') && onSave(target, 'problem', note)}
          slotProps={{ htmlInput: { style: { fontSize: 13 } } }}
        />
      )}
    </Box>
  )
}

export default function ReadingReview({
  backLabel,
  onBack
}: {
  backLabel: string
  onBack: () => void
}): ReactElement {
  const [available, setAvailable] = useState<boolean | null>(null)
  const [reviews, setReviews] = useState<ReviewMap>({})
  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    if (!reviewTools) return setAvailable(false)
    void reviewTools.available().then(async (ok) => {
      setAvailable(ok)
      if (ok) setReviews(await reviewTools!.get('reading'))
    })
  }, [])

  const onSave = (target: Target, status: Status | null, note: string): void => {
    const entry: ReviewEntry | null = status
      ? {
          status,
          ...(status === 'problem' && note.trim() ? { note: note.trim() } : {}),
          hash: target.hash,
          prompt: target.prompt,
          answer: target.answer,
          at: new Date().toISOString()
        }
      : null
    void reviewTools!.set(target.id, entry, 'reading').then(setReviews)
  }

  const all = useMemo(() => READING_PASSAGES.flatMap(targetsOf), [])
  const counts = { ok: 0, problem: 0, pending: 0 }
  for (const t of all) {
    const s = stateOf(reviews[t.id], t.hash)
    if (s === 'ok') counts.ok++
    else if (s === 'problem') counts.problem++
    else counts.pending++
  }
  // Um texto aparece se ele ou alguma questão dele passa no filtro
  const matches = (t: Target): boolean => {
    if (filter === 'all') return true
    const s = stateOf(reviews[t.id], t.hash)
    return filter === 'pending' ? s === 'pending' || s === 'outdated' : s === filter
  }
  const visible = READING_PASSAGES.filter((p) => targetsOf(p).some(matches))
  const canEdit = available === true

  return (
    <Page>
      <Button startIcon={<FiArrowLeft />} onClick={onBack} sx={{ mb: 2, ml: -1 }}>
        {backLabel}
      </Button>
      <Typography variant="h5" gutterBottom>
        Textos de compreensão escrita
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {READING_PASSAGES.length} textos e {all.length - READING_PASSAGES.length} questões ·{' '}
        {counts.ok} OK · {counts.problem} com problema · {counts.pending} pendentes. O texto (com a
        tradução) e cada questão são revisados à parte; a resposta certa aparece em verde.
      </Typography>

      {available === false && (
        <Alert severity="info" sx={{ mt: 2 }}>
          Marcar revisões só funciona no modo de desenvolvimento (npm run dev): elas são salvas em
          content-review/reading.json, no projeto.
        </Alert>
      )}

      <ToggleButtonGroup
        exclusive
        size="small"
        color="primary"
        value={filter}
        onChange={(_, value: Filter | null) => value && setFilter(value)}
        sx={{ my: 2.5 }}
      >
        <ToggleButton value="all">Todos</ToggleButton>
        <ToggleButton value="pending">Pendentes</ToggleButton>
        <ToggleButton value="ok">OK</ToggleButton>
        <ToggleButton value="problem">Problema</ToggleButton>
      </ToggleButtonGroup>

      {visible.length === 0 && (
        <Typography color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
          Nenhum texto com esse filtro.
        </Typography>
      )}

      {visible.map((p) => {
        const [passageTarget, ...questionTargets] = targetsOf(p)
        return (
          <Card key={p.id} sx={{ mb: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  alignItems: 'flex-start'
                }}
              >
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <PassageView passage={p} translation audio />
                  <Typography variant="caption" color="text.disabled">
                    {p.id}
                  </Typography>
                </Box>
                <ReviewButtons
                  target={passageTarget}
                  entry={reviews[passageTarget.id]}
                  canEdit={canEdit}
                  onSave={onSave}
                />
              </Box>

              {p.questions.map((q, i) => (
                <Box
                  key={q.id}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    alignItems: 'flex-start',
                    mt: 2,
                    pt: 2,
                    borderTop: 1,
                    borderColor: 'divider'
                  }}
                >
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography lang="fr" sx={{ fontSize: 16, mb: 1 }}>
                      {q.prompt}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 1 }}>
                      {q.options.map((option, n) => (
                        <Typography
                          key={n}
                          lang="fr"
                          variant="body2"
                          sx={{
                            display: 'flex',
                            gap: 0.75,
                            alignItems: 'center',
                            color: n === 0 ? 'success.main' : 'text.primary',
                            fontWeight: n === 0 ? 600 : 400
                          }}
                        >
                          {n === 0 ? <FiCheck /> : <Box component="span" sx={{ width: 14 }} />}
                          {option}
                        </Typography>
                      ))}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {q.explanation}
                    </Typography>
                    <Typography variant="caption" color="text.disabled">
                      {q.id}
                    </Typography>
                  </Box>
                  <ReviewButtons
                    target={questionTargets[i]}
                    entry={reviews[q.id]}
                    canEdit={canEdit}
                    onSave={onSave}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        )
      })}
    </Page>
  )
}
