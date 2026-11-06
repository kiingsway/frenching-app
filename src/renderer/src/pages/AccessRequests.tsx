import { useState, type ReactElement } from 'react'
import { FiArrowLeft, FiCheck, FiX } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CircularProgress from '@mui/material/CircularProgress'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import { isAdmin, useAccess } from '@/lib/access'
import {
  approveAccess,
  rejectAccess,
  useAccessRequests,
  type AccessRequest,
  type RequestStatus
} from '@/lib/access-admin'

const formatDate = (ms: number): string =>
  ms
    ? new Date(ms).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })
    : ''

const FILTERS: { value: RequestStatus; label: string }[] = [
  { value: 'pending', label: 'Pendentes' },
  { value: 'approved', label: 'Aprovados' },
  { value: 'rejected', label: 'Recusados' }
]

const EMPTY: Record<RequestStatus, string> = {
  pending: 'Nenhum pedido aguardando.',
  approved: 'Ninguém aprovado ainda.',
  rejected: 'Ninguém recusado.'
}

function RequestRow({ r }: { r: AccessRequest }): ReactElement {
  const [busy, setBusy] = useState<'approve' | 'reject' | null>(null)
  const [error, setError] = useState<string | null>(null)
  const run = (kind: 'approve' | 'reject'): void => {
    setBusy(kind)
    setError(null)
    void (kind === 'approve' ? approveAccess(r) : rejectAccess(r))
      .catch((e) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setBusy(null))
  }
  const date =
    r.status === 'pending'
      ? `Pediu em ${formatDate(r.createdAt)}`
      : `${r.status === 'approved' ? 'Aprovado' : 'Recusado'} em ${formatDate(r.decidedAt ?? r.createdAt)}`

  return (
    <Box
      sx={{
        px: 2,
        py: 1.75,
        borderBottom: 1,
        borderColor: 'divider',
        '&:last-child': { borderBottom: 0 }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Avatar
          src={r.photoURL || undefined}
          alt={r.name}
          slotProps={{ img: { referrerPolicy: 'no-referrer' } }}
          sx={{ width: 40, height: 40 }}
        >
          {(r.name || r.email || '?')[0].toUpperCase()}
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 160 }}>
          <Typography noWrap sx={{ fontWeight: 500 }}>
            {r.name || 'Sem nome'}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {r.email}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {date}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {r.status !== 'approved' && (
            <Button
              size="small"
              variant="contained"
              disabled={!!busy}
              startIcon={busy === 'approve' ? <CircularProgress size={14} /> : <FiCheck />}
              onClick={() => run('approve')}
            >
              Aprovar
            </Button>
          )}
          {r.status !== 'rejected' && (
            <Button
              size="small"
              variant="outlined"
              color="error"
              disabled={!!busy}
              startIcon={busy === 'reject' ? <CircularProgress size={14} /> : <FiX />}
              onClick={() => run('reject')}
            >
              {r.status === 'approved' ? 'Remover acesso' : 'Recusar'}
            </Button>
          )}
        </Box>
      </Box>
      {error && (
        <Alert severity="error" sx={{ mt: 1.5 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
    </Box>
  )
}

// Aprovar acessos: quem entrou com Google e pediu para usar a nuvem (só admin)
export default function AccessRequests({ onBack }: { onBack: () => void }): ReactElement {
  const access = useAccess()
  const { requests, error } = useAccessRequests()
  const [filter, setFilter] = useState<RequestStatus>('pending')
  const count = (s: RequestStatus): number => requests?.filter((r) => r.status === s).length ?? 0
  const shown = requests?.filter((r) => r.status === filter) ?? []

  return (
    <Page>
      <Button
        size="small"
        variant="outlined"
        startIcon={<FiArrowLeft />}
        onClick={onBack}
        sx={{ mb: 3 }}
      >
        Configurações
      </Button>
      <Typography variant="h5" gutterBottom>
        Aprovar acessos
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Quem entra com Google pede acesso à nuvem automaticamente. Só quem você aprovar tem o
        progresso e as configurações salvos na conta; a pessoa não recebe aviso, só vê a situação
        mudar em Configurações.
      </Typography>

      {!isAdmin(access) ? (
        <Alert severity="info" sx={{ mt: 3 }}>
          Só a conta administradora pode aprovar acessos.
        </Alert>
      ) : (
        <>
          <ToggleButtonGroup
            exclusive
            size="small"
            color="primary"
            value={filter}
            onChange={(_, v: RequestStatus | null) => v && setFilter(v)}
            sx={{ mt: 3, mb: 2, flexWrap: 'wrap' }}
          >
            {FILTERS.map((f) => (
              <ToggleButton key={f.value} value={f.value} sx={{ px: 1.75 }}>
                {f.label}
                {requests ? ` (${count(f.value)})` : ''}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {!(error && requests === null) && (
            <Card>
              {requests === null ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                  <CircularProgress size={24} />
                </Box>
              ) : shown.length ? (
                shown.map((r) => <RequestRow key={r.uid} r={r} />)
              ) : (
                <Typography color="text.secondary" sx={{ px: 2, py: 3 }}>
                  {EMPTY[filter]}
                </Typography>
              )}
            </Card>
          )}
        </>
      )}
    </Page>
  )
}
