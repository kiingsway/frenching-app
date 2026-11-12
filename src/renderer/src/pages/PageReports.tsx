import { useState, type ReactElement } from 'react'
import { FiArrowLeft, FiCheck, FiExternalLink, FiRotateCcw, FiTrash2 } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import { getTopicContent } from '@/content'
import { isAdmin, useAccess } from '@/lib/access'
import {
  deleteReport,
  setReportResolved,
  usePageReports,
  type PageReport
} from '@/lib/page-reports'

const formatDate = (ms: number): string =>
  ms
    ? new Date(ms).toLocaleString('pt-BR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : ''

type Filter = 'open' | 'resolved'

function ReportRow({
  r,
  onOpenTopic
}: {
  r: PageReport
  onOpenTopic: (topicId: string) => void
}): ReactElement {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const run = (action: Promise<void>): void => {
    setBusy(true)
    setError(null)
    void action
      .catch((e) => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setBusy(false))
  }
  // A página pode ter saído do app depois do reporte
  const exists = !!getTopicContent(r.topicId)
  const meta = [
    r.sectionTitle,
    `versão ${r.lang.toUpperCase()}`,
    formatDate(r.createdAt),
    r.userName && `por ${r.userName}`,
    r.appVersion && `app ${r.appVersion}`
  ].filter(Boolean)

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
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography sx={{ fontWeight: 600 }}>{r.pageTitle || r.topicId}</Typography>
          <Typography sx={{ mt: 0.5, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
            {r.comment}
          </Typography>
          <Typography variant="caption" color="text.secondary" component="div" sx={{ mt: 0.75 }}>
            {meta.join(' · ')}
          </Typography>
          {r.resolved && r.resolvedAt && (
            <Typography variant="caption" sx={{ color: 'success.main' }} component="div">
              Resolvido em {formatDate(r.resolvedAt)}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
          {busy && <CircularProgress size={16} sx={{ mr: 1 }} />}
          <Tooltip title={exists ? 'Abrir a página' : 'A página não existe mais'}>
            <span>
              <IconButton
                size="small"
                disabled={!exists}
                onClick={() => onOpenTopic(r.topicId)}
              >
                <FiExternalLink />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title={r.resolved ? 'Reabrir' : 'Marcar como resolvido'}>
            <span>
              <IconButton
                size="small"
                disabled={busy}
                color={r.resolved ? 'default' : 'success'}
                onClick={() => run(setReportResolved(r, !r.resolved))}
              >
                {r.resolved ? <FiRotateCcw /> : <FiCheck />}
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Apagar">
            <span>
              <IconButton
                size="small"
                disabled={busy}
                color="error"
                onClick={() => run(deleteReport(r))}
              >
                <FiTrash2 />
              </IconButton>
            </span>
          </Tooltip>
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

// Páginas reportadas: erros que quem estuda apontou nas páginas de estudo (só admin)
export default function PageReports({
  onBack,
  onOpenTopic
}: {
  onBack: () => void
  onOpenTopic: (topicId: string) => void
}): ReactElement {
  const access = useAccess()
  const { reports, error } = usePageReports()
  const [filter, setFilter] = useState<Filter>('open')
  const count = (f: Filter): number =>
    reports?.filter((r) => r.resolved === (f === 'resolved')).length ?? 0
  const shown = reports?.filter((r) => r.resolved === (filter === 'resolved')) ?? []

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
        Páginas reportadas
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Erros apontados nas páginas de estudo pelo botão de reportar, na barra do topo da página.
      </Typography>

      {!isAdmin(access) ? (
        <Alert severity="info" sx={{ mt: 3 }}>
          Só a conta administradora vê as páginas reportadas.
        </Alert>
      ) : (
        <>
          <ToggleButtonGroup
            exclusive
            size="small"
            color="primary"
            value={filter}
            onChange={(_, v: Filter | null) => v && setFilter(v)}
            sx={{ mt: 3, mb: 2 }}
          >
            <ToggleButton value="open" sx={{ px: 1.75 }}>
              Abertos{reports ? ` (${count('open')})` : ''}
            </ToggleButton>
            <ToggleButton value="resolved" sx={{ px: 1.75 }}>
              Resolvidos{reports ? ` (${count('resolved')})` : ''}
            </ToggleButton>
          </ToggleButtonGroup>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {!(error && reports === null) && (
            <Card>
              {reports === null ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                  <CircularProgress size={24} />
                </Box>
              ) : shown.length ? (
                shown.map((r) => <ReportRow key={r.path} r={r} onOpenTopic={onOpenTopic} />)
              ) : (
                <Typography color="text.secondary" sx={{ px: 2, py: 3 }}>
                  {filter === 'open' ? 'Nenhuma página reportada.' : 'Nenhum reporte resolvido.'}
                </Typography>
              )}
            </Card>
          )}
        </>
      )}
    </Page>
  )
}
