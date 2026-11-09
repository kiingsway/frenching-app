import { useEffect, useRef, useState, type ReactElement } from 'react'
import { FiArrowLeft, FiArrowRight, FiPause, FiPlay, FiRefreshCw, FiX } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import { getAudioUrlByKey } from '@/lib/audio'
import { useAudioDev } from '@/lib/audio-dev'
import { PART_LABELS } from '@/lib/audio-entries'
import {
  applyAllSuggestions,
  cancelSuggestion,
  markSuggestionsSeen,
  useAudioSuggestions,
  type AudioSuggestion
} from '@/lib/audio-suggestions'
import VoiceLabel from '@/components/VoiceLabel'
import type { AudioPart } from '@/content/types'

const formatDate = (ms: number): string =>
  new Date(ms).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })

function SuggestionRow({
  s,
  showUser,
  isMine,
  dev,
  playing,
  onPlay
}: {
  s: AudioSuggestion
  showUser: boolean
  isMine: boolean
  dev: boolean
  playing: boolean
  onPlay: () => void
}): ReactElement {
  const applied = s.status === 'applied'
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'flex-start',
        px: 2,
        py: 1.75,
        borderBottom: 1,
        borderColor: 'divider',
        '&:last-child': { borderBottom: 0 }
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography lang="fr" sx={{ overflowWrap: 'anywhere' }}>
          {s.text || s.key}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {s.pageTitle}
          {s.part ? ` · ${PART_LABELS[s.part as AudioPart] ?? s.part}` : ''}
          {showUser && s.userName ? ` · sugerido por ${s.userName}` : ''}
          {` · ${formatDate(s.createdAt)}`}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, color: 'text.secondary' }}>
          <Box component="span" sx={{ fontSize: 13 }}>
            <VoiceLabel id={s.fromVoice} />
          </Box>
          <FiArrowRight />
          <Box component="span" sx={{ fontSize: 13 }}>
            <VoiceLabel id={s.toVoice} />
          </Box>
        </Box>
        {applied && (
          <Typography variant="body2" sx={{ mt: 1, color: 'success.main' }}>
            Aplicada em {formatDate(s.appliedAt ?? s.createdAt)}: agora este áudio usa a voz{' '}
            <VoiceLabel id={s.toVoice} />.
            {!dev && ' O áudio novo chega na próxima versão do app.'}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Chip
          size="small"
          color={applied ? 'success' : 'warning'}
          variant={applied ? 'filled' : 'outlined'}
          label={applied ? 'Aplicada' : 'Pendente'}
        />
        <IconButton size="small" title={playing ? 'Pausar' : 'Ouvir'} onClick={onPlay}>
          {playing ? <FiPause /> : <FiPlay />}
        </IconButton>
        {isMine && !applied && (
          <IconButton
            size="small"
            title="Cancelar sugestão"
            onClick={() => void cancelSuggestion(s.key)}
          >
            <FiX />
          </IconButton>
        )}
      </Box>
    </Box>
  )
}

export default function AudioSuggestions({ onBack }: { onBack: () => void }): ReactElement {
  const s = useAudioSuggestions()
  const dev = useAudioDev()
  const list = s.all ?? s.mine
  const pending = list.filter((x) => x.status === 'pending')
  const isAdminView = s.all !== null

  // Abrir a lista apaga as bolinhas (e continua apagando se chegarem novidades com ela aberta)
  useEffect(() => markSuggestionsSeen(), [s.mine, s.all])

  // Ouvir o áudio atual de uma sugestão
  const [playingKey, setPlayingKey] = useState<string | null>(null)
  const player = useRef<HTMLAudioElement | null>(null)
  useEffect(() => () => player.current?.pause(), [])
  const togglePlay = (key: string): void => {
    player.current?.pause()
    if (playingKey === key) return setPlayingKey(null)
    const audio = new Audio(getAudioUrlByKey(key, dev.mtimes[key] ?? 0))
    audio.addEventListener('ended', () => setPlayingKey(null))
    player.current = audio
    void audio.play()
    setPlayingKey(key)
  }

  const status = dev.status
  const total = status?.queue.length ?? 0
  const done = status?.done.length ?? 0

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
        Sugestões de troca de voz
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Quando um áudio soar em inglês ou estranho, clique com o botão direito nele e sugira a outra
        voz.{' '}
        {isAdminView
          ? 'Mostrando as sugestões de todos os usuários.'
          : 'Aqui aparecem as suas sugestões e o que já foi trocado.'}
      </Typography>

      {!s.user && (
        <Alert severity="info" sx={{ mt: 2 }}>
          {s.noAccess
            ? 'Sua conta ainda não tem acesso à nuvem, então não dá para sugerir trocas por enquanto.'
            : 'Entre com Google em Configurações → Conta para sugerir trocas e acompanhar as suas sugestões.'}
        </Alert>
      )}
      {s.error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {s.error}
        </Alert>
      )}

      {/* npm run dev: aplicar todas as sugestões pendentes */}
      {s.dev && s.user && (
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="subtitle1">
              {pending.length
                ? `${pending.length} sugestão(ões) pendente(s)`
                : 'Nenhuma sugestão pendente'}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Troca a voz desses áudios, gera os áudios de novo e marca as sugestões como aplicadas
              (quem sugeriu vê na lista). Para chegar ao app compilado, gere o build de novo depois.
            </Typography>
            {s.applying && status?.running ? (
              <Box>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  Gerando {Math.min(done + 1, total)} de {total}…
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={total ? (done / total) * 100 : 0}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>
            ) : (
              <Button
                variant="contained"
                startIcon={<FiRefreshCw />}
                disabled={!pending.length || s.applying || !!status?.running}
                onClick={() => void applyAllSuggestions()}
              >
                {s.applying ? 'Aplicando…' : `Aplicar todas (${pending.length})`}
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {s.user && (
        <Card sx={{ mt: 3 }}>
          {list.length ? (
            list.map((x) => (
              <SuggestionRow
                key={x.path}
                s={x}
                showUser={isAdminView && x.uid !== s.user?.uid}
                isMine={x.uid === s.user?.uid}
                dev={s.dev}
                playing={playingKey === x.key}
                onPlay={() => togglePlay(x.key)}
              />
            ))
          ) : (
            <CardContent>
              <Typography color="text.secondary">
                Nenhuma sugestão ainda. Clique com o botão direito num áudio (na versão em francês
                das páginas) para sugerir a troca de voz.
              </Typography>
            </CardContent>
          )}
        </Card>
      )}
    </Page>
  )
}
