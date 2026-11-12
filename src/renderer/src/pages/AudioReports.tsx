import { useEffect, useRef, useState, type ReactElement } from 'react'
import {
  FiArrowLeft,
  FiCheck,
  FiExternalLink,
  FiLock,
  FiPause,
  FiPlay,
  FiRotateCcw,
  FiTrash2
} from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import VoiceLabel from '@/components/VoiceLabel'
import { getTopicContent } from '@/content'
import type { AudioPart } from '@/content/types'
import { getAudioUrlByKey } from '@/lib/audio'
import { isGenerating, useAudioDev } from '@/lib/audio-dev'
import { bundledVoiceFor, PART_LABELS } from '@/lib/audio-entries'
import { AUDIO_VOICES, DEFAULT_VOICE, type VoiceId } from '@/lib/audio-texts'
import { audioTools } from '@/lib/platform'
import {
  deleteAudioReport,
  markAudioReportsSeen,
  setAudioReportResolved,
  useAudioReports,
  type AudioReport
} from '@/lib/audio-reports'

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

const VOICE_IDS = Object.keys(AUDIO_VOICES) as VoiceId[]

// Troca de voz do áudio reportado (só administrador). Só dá para gerar o áudio no
// npm run dev; fora dele o seletor aparece bloqueado, com a voz que está no app
function AdminVoiceSelect({ audioKey }: { audioKey: string }): ReactElement {
  const dev = useAudioDev()
  const voice: VoiceId = dev.available
    ? (dev.voices[audioKey] ?? DEFAULT_VOICE)
    : bundledVoiceFor(audioKey)
  const generating = isGenerating(dev.status, audioKey)
  const running = !!dev.status?.running
  const hint = !dev.available
    ? 'Só dá para trocar a voz (e gerar o áudio de novo) com o app aberto pelo npm run dev'
    : generating
      ? 'Gerando o áudio com a nova voz…'
      : running
        ? 'Aguarde a geração atual terminar'
        : 'Trocar a voz gera este áudio de novo'

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
      <Typography variant="body2" color="text.secondary">
        Voz atual
      </Typography>
      <Tooltip title={hint}>
        <span>
          <Select
            variant="standard"
            size="small"
            disabled={!dev.available || running}
            value={voice}
            onChange={(e) => void audioTools?.setVoice(audioKey, e.target.value as VoiceId)}
            aria-label="Voz atual"
            sx={{ fontSize: 14 }}
          >
            {VOICE_IDS.map((id) => (
              <MenuItem key={id} value={id} sx={{ fontSize: 14 }}>
                <VoiceLabel id={id} />
              </MenuItem>
            ))}
          </Select>
        </span>
      </Tooltip>
      {generating && <CircularProgress size={14} />}
      {!dev.available && (
        <Box component={FiLock} sx={{ fontSize: 13, color: 'text.secondary' }} aria-hidden />
      )}
    </Box>
  )
}

function ReportRow({
  r,
  admin,
  showUser,
  playing,
  onPlay,
  onOpenTopic
}: {
  r: AudioReport
  admin: boolean
  showUser: boolean
  playing: boolean
  onPlay: () => void
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
  // Só páginas de estudo abrem daqui (não os baralhos de flashcards, nem páginas removidas)
  const canOpen = !!r.pageId && !!getTopicContent(r.pageId)
  const meta = [
    r.pageTitle,
    r.part && (PART_LABELS[r.part as AudioPart] ?? r.part),
    formatDate(r.createdAt),
    showUser && r.userName && `por ${r.userName}`,
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
          <Typography lang="fr" sx={{ fontWeight: 600, overflowWrap: 'anywhere' }}>
            {r.text || r.key}
          </Typography>
          {/* O comentário é opcional no reporte de áudio */}
          {r.comment ? (
            <Typography sx={{ mt: 0.5, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
              {r.comment}
            </Typography>
          ) : (
            <Typography sx={{ mt: 0.5, fontStyle: 'italic' }} color="text.secondary">
              Sem comentário
            </Typography>
          )}
          <Typography variant="caption" color="text.secondary" component="div" sx={{ mt: 0.75 }}>
            {admin ? 'Voz no reporte ' : 'Voz '}
            <VoiceLabel id={r.voice} />
            {meta.length ? ` · ${meta.join(' · ')}` : ''}
          </Typography>
          {r.resolved && r.resolvedAt && (
            <Typography variant="caption" sx={{ color: 'success.main' }} component="div">
              Resolvido em {formatDate(r.resolvedAt)}
            </Typography>
          )}
          {admin && <AdminVoiceSelect audioKey={r.key} />}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0 }}>
          {busy && <CircularProgress size={16} sx={{ mr: 1 }} />}
          {!admin && (
            <Chip
              size="small"
              color={r.resolved ? 'success' : 'warning'}
              variant={r.resolved ? 'filled' : 'outlined'}
              label={r.resolved ? 'Resolvido' : 'Em aberto'}
            />
          )}
          <Tooltip title={playing ? 'Pausar' : 'Ouvir'}>
            <IconButton size="small" onClick={onPlay}>
              {playing ? <FiPause /> : <FiPlay />}
            </IconButton>
          </Tooltip>
          <Tooltip
            title={
              canOpen
                ? 'Abrir a página'
                : r.pageId.startsWith('flashcards-')
                  ? 'Este áudio é de um flashcard'
                  : 'A página não existe mais'
            }
          >
            <span>
              <IconButton
                size="small"
                disabled={!canOpen}
                onClick={() => onOpenTopic(r.pageId)}
                aria-label="Abrir a página"
              >
                <FiExternalLink />
              </IconButton>
            </span>
          </Tooltip>
          {admin && (
            <Tooltip title={r.resolved ? 'Reabrir' : 'Marcar como resolvido'}>
              <span>
                <IconButton
                  size="small"
                  disabled={busy}
                  color={r.resolved ? 'default' : 'success'}
                  onClick={() => run(setAudioReportResolved(r, !r.resolved))}
                >
                  {r.resolved ? <FiRotateCcw /> : <FiCheck />}
                </IconButton>
              </span>
            </Tooltip>
          )}
          {/* O administrador apaga qualquer um; quem reportou, os próprios ainda em aberto */}
          {(admin || !r.resolved) && (
            <Tooltip title="Apagar">
              <span>
                <IconButton
                  size="small"
                  disabled={busy}
                  color="error"
                  onClick={() => run(deleteAudioReport(r))}
                >
                  <FiTrash2 />
                </IconButton>
              </span>
            </Tooltip>
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

// Áudios reportados: os próprios (quem usa o app) ou os de todos (administrador)
export default function AudioReports({
  onBack,
  onOpenTopic
}: {
  onBack: () => void
  onOpenTopic: (topicId: string) => void
}): ReactElement {
  const s = useAudioReports()
  const dev = useAudioDev()
  const admin = s.all !== null
  const list = s.all ?? s.mine
  const [filter, setFilter] = useState<Filter>('open')
  const count = (f: Filter): number => list.filter((r) => r.resolved === (f === 'resolved')).length
  const shown = list.filter((r) => r.resolved === (filter === 'resolved'))

  // Abrir a lista apaga a bolinha verde (e continua apagando se chegar novidade com ela aberta)
  useEffect(() => markAudioReportsSeen(), [s.mine])

  // Ouvir o áudio atual de um reporte
  const [playingPath, setPlayingPath] = useState<string | null>(null)
  const player = useRef<HTMLAudioElement | null>(null)
  useEffect(() => () => player.current?.pause(), [])
  const togglePlay = (r: AudioReport): void => {
    player.current?.pause()
    if (playingPath === r.path) return setPlayingPath(null)
    const audio = new Audio(getAudioUrlByKey(r.key, dev.mtimes[r.key] ?? 0))
    audio.addEventListener('ended', () => setPlayingPath(null))
    player.current = audio
    void audio.play()
    setPlayingPath(r.path)
  }

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
        Áudios reportados
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Quando um áudio soar em inglês, cortado ou estranho, clique com o botão direito nele (ou
        toque e segure) e escolha "Reportar este áudio".{' '}
        {admin
          ? 'Mostrando os reportes de todos os usuários. A voz de cada áudio troca pelo seletor do reporte, só com o app aberto pelo npm run dev (é onde dá para gerar o áudio de novo).'
          : 'Aqui aparecem os seus reportes e o que já foi resolvido.'}
      </Typography>

      {!s.user && (
        <Alert severity="info" sx={{ mt: 2 }}>
          {s.noAccess
            ? 'Sua conta ainda não tem acesso à nuvem, então não dá para reportar por enquanto.'
            : 'Entre com Google em Configurações → Conta para reportar áudios e acompanhar os seus reportes.'}
        </Alert>
      )}
      {s.error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {s.error}
        </Alert>
      )}

      {s.user && (
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
              Em aberto ({count('open')})
            </ToggleButton>
            <ToggleButton value="resolved" sx={{ px: 1.75 }}>
              Resolvidos ({count('resolved')})
            </ToggleButton>
          </ToggleButtonGroup>
          <Card>
            {shown.length ? (
              shown.map((r) => (
                <ReportRow
                  key={r.path}
                  r={r}
                  admin={admin}
                  showUser={admin && r.uid !== s.user?.uid}
                  playing={playingPath === r.path}
                  onPlay={() => togglePlay(r)}
                  onOpenTopic={onOpenTopic}
                />
              ))
            ) : (
              <Typography color="text.secondary" sx={{ px: 2, py: 3 }}>
                {filter === 'open'
                  ? 'Nenhum áudio reportado em aberto.'
                  : 'Nenhum reporte resolvido.'}
              </Typography>
            )}
          </Card>
        </>
      )}
    </Page>
  )
}
