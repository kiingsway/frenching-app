import type { ReactElement } from 'react'
import { FiCheck, FiClock, FiFlag, FiLoader, FiRotateCcw, FiX } from 'react-icons/fi'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { AUDIO_VOICES, DEFAULT_VOICE, type VoiceId } from '@/lib/audio-texts'

const VOICE_IDS = Object.keys(AUDIO_VOICES) as VoiceId[]

const tint = (opacity: number): string =>
  `rgba(var(--mui-palette-primary-mainChannel) / ${opacity})`

// Item com cantos arredondados, solto das bordas do menu
const itemSx = {
  mx: 0.75,
  px: 1.25,
  py: 0.875,
  minHeight: 0,
  gap: 1.25,
  borderRadius: 0.8,
  fontSize: 14,
  '&:hover, &.Mui-focusVisible': { bgcolor: 'action.hover' }
}

// Rótulo pequeno de seção, sem fundo próprio
const sectionLabelSx = {
  px: 2,
  pt: 1,
  pb: 0.5,
  display: 'block',
  color: 'text.secondary',
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  fontSize: 11
}

// Menu de botão direito de um trecho de áudio: recomeçar e, no modo de
// desenvolvimento, escolher a voz (trocar gera o áudio daquele texto de novo)
export default function AudioMenu({
  at,
  onClose,
  onRestart,
  voice,
  onChangeVoice,
  showVoices,
  generating,
  busy,
  suggest
}: {
  at: { top: number; left: number } | null
  onClose: () => void
  onRestart: () => void
  voice: VoiceId
  onChangeVoice: (voice: VoiceId) => void
  showVoices: boolean
  // Este áudio está sendo gerado / há alguma geração rodando
  generating: boolean
  busy: boolean
  // Só no app compilado: sugerir a troca de voz em vez de trocar
  suggest?: {
    signedIn: boolean
    // Entrou, mas a conta ainda não tem acesso à nuvem
    noAccess: boolean
    status: 'none' | 'pending' | 'applied'
    toVoiceLabel: string
    sending: boolean
    onSuggest: () => void
    onCancel: () => void
  }
}): ReactElement {
  return (
    <Menu
      open={!!at}
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={at ?? undefined}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            mt: 0.5,
            minWidth: 236,
            borderRadius: 1.2,
            border: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            backgroundImage: 'none',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.08)'
          }
        },
        list: { sx: { py: 0.75 } }
      }}
    >
      <MenuItem onClick={onRestart} sx={itemSx}>
        <Box component={FiRotateCcw} sx={{ fontSize: 16, color: 'text.secondary' }} />
        Recomeçar do início
      </MenuItem>

      {showVoices && <Divider sx={{ my: '6px !important', mx: 1.5 }} />}
      {showVoices && (
        <Typography component="div" sx={sectionLabelSx}>
          Voz
        </Typography>
      )}
      {showVoices &&
        VOICE_IDS.map((id) => {
          const current = id === voice
          return (
            <MenuItem
              key={id}
              role="menuitemradio"
              aria-checked={current}
              disabled={busy && !current}
              onClick={() => onChangeVoice(id)}
              sx={itemSx}
            >
              {/* Inicial da voz numa bolinha; cheia na voz atual */}
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 700,
                  transition: 'background-color 150ms, color 150ms',
                  bgcolor: current ? 'primary.main' : tint(0.12),
                  color: current ? 'primary.contrastText' : 'primary.main'
                }}
              >
                {AUDIO_VOICES[id].label[0]}
              </Box>
              <Box sx={{ flex: 1, fontWeight: current ? 600 : 400 }}>
                {AUDIO_VOICES[id].label}
                {id === DEFAULT_VOICE && (
                  <Typography
                    component="span"
                    sx={{ ml: 0.75, fontSize: 12, color: 'text.secondary' }}
                  >
                    padrão
                  </Typography>
                )}
              </Box>
              {current && (
                <Box
                  component={generating ? FiLoader : FiCheck}
                  className={generating ? 'audio-menu-spin' : undefined}
                  sx={{
                    fontSize: 16,
                    color: 'primary.main',
                    '@keyframes audio-menu-spin': { to: { transform: 'rotate(360deg)' } },
                    '&.audio-menu-spin': { animation: 'audio-menu-spin 1s linear infinite' }
                  }}
                />
              )}
            </MenuItem>
          )
        })}
      {showVoices && (
        <Typography
          component="div"
          sx={{ px: 2, pt: 0.75, pb: 0.5, fontSize: 12, color: 'text.secondary', maxWidth: 236 }}
        >
          {generating
            ? 'Gerando o áudio com a nova voz…'
            : busy
              ? 'Aguarde a geração atual terminar.'
              : 'Trocar a voz gera este áudio de novo.'}
        </Typography>
      )}

      {/* App compilado: em vez de trocar a voz, sugerir a troca (fica salvo na conta) */}
      {suggest && <Divider sx={{ my: '6px !important', mx: 1.5 }} />}
      {suggest && (
        <Typography component="div" sx={sectionLabelSx}>
          Voz
        </Typography>
      )}
      {suggest && suggest.status === 'none' && (
        <MenuItem
          onClick={suggest.onSuggest}
          disabled={!suggest.signedIn || suggest.sending}
          sx={itemSx}
        >
          <Box
            component={suggest.sending ? FiLoader : FiFlag}
            sx={{ fontSize: 16, color: 'text.secondary' }}
          />
          Sugerir trocar para {suggest.toVoiceLabel}
        </MenuItem>
      )}
      {suggest && suggest.status === 'pending' && (
        <MenuItem disabled sx={{ ...itemSx, opacity: '1 !important' }}>
          <Box component={FiClock} sx={{ fontSize: 16, color: 'warning.main' }} />
          Troca para {suggest.toVoiceLabel} sugerida
        </MenuItem>
      )}
      {suggest && suggest.status === 'pending' && (
        <MenuItem onClick={suggest.onCancel} sx={itemSx}>
          <Box component={FiX} sx={{ fontSize: 16, color: 'text.secondary' }} />
          Cancelar sugestão
        </MenuItem>
      )}
      {suggest && suggest.status === 'applied' && (
        <MenuItem disabled sx={{ ...itemSx, opacity: '1 !important' }}>
          <Box component={FiCheck} sx={{ fontSize: 16, color: 'success.main' }} />
          Troca para {suggest.toVoiceLabel} aplicada
        </MenuItem>
      )}
      {suggest && (
        <Typography
          component="div"
          sx={{ px: 2, pt: 0.75, pb: 0.5, fontSize: 12, color: 'text.secondary', maxWidth: 236 }}
        >
          {suggest.noAccess
            ? 'Sua conta ainda não tem acesso à nuvem para sugerir.'
            : !suggest.signedIn
              ? 'Entre com Google (Configurações → Conta) para sugerir.'
              : suggest.status === 'pending'
                ? 'Aguardando a revisão. Acompanhe em Configurações → Áudios.'
                : suggest.status === 'applied'
                  ? 'O áudio novo chega na próxima versão do app.'
                  : 'Use se o áudio soar em inglês ou estranho.'}
        </Typography>
      )}
    </Menu>
  )
}
