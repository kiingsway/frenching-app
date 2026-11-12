import type { ReactElement } from 'react'
import { FiCheck, FiClock, FiFlag, FiLoader, FiLock, FiRotateCcw } from 'react-icons/fi'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { AUDIO_VOICES, DEFAULT_VOICE, type VoiceId } from '@/lib/audio-texts'
import { VoiceFlag } from './VoiceLabel'

const VOICE_IDS = Object.keys(AUDIO_VOICES) as VoiceId[]

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

// Item só informativo: desativado, mas sem ficar apagado
const infoItemSx = { ...itemSx, opacity: '1 !important' }

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

const hintSx = { px: 2, pt: 0.75, pb: 0.5, fontSize: 12, color: 'text.secondary', maxWidth: 236 }

// As vozes só aparecem para a conta administradora:
//  change – npm run dev: escolher a voz (gera o áudio de novo)
//  locked – app compilado/site: as vozes aparecem, mas bloqueadas (só dá para gerar no dev)
// Sem modo (contas comuns): o menu não mostra vozes, só "Reportar este áudio" (se houver
// acesso à nuvem; veja ReportOptions)
export type VoiceMode = 'change' | 'locked'

export interface ReportOptions {
  // Quantos reportes seus deste áudio ainda não foram resolvidos
  open: number
  onReport: () => void
}

function VoiceName({ id, current }: { id: VoiceId; current: boolean }): ReactElement {
  return (
    <Box sx={{ flex: 1, fontWeight: current ? 600 : 400 }}>
      {AUDIO_VOICES[id].label}
      {id === DEFAULT_VOICE && (
        <Typography component="span" sx={{ ml: 0.75, fontSize: 12, color: 'text.secondary' }}>
          padrão
        </Typography>
      )}
    </Box>
  )
}

// Menu de botão direito de um trecho de áudio: recomeçar, a voz (só administrador; veja
// VoiceMode) e reportar o áudio
export default function AudioMenu({
  at,
  onClose,
  onRestart,
  voice,
  voiceMode,
  onChangeVoice,
  generating,
  busy,
  report
}: {
  at: { top: number; left: number } | null
  onClose: () => void
  onRestart: () => void
  voice: VoiceId
  // Sem valor: sem vozes no menu (contas comuns ou trecho sem áudio identificado)
  voiceMode?: VoiceMode
  onChangeVoice: (voice: VoiceId) => void
  // Este áudio está sendo gerado / há alguma geração rodando
  generating: boolean
  busy: boolean
  // Conta com acesso à nuvem (fora do npm run dev do administrador): reportar o áudio
  report?: ReportOptions
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

      {voiceMode && <Divider sx={{ my: '6px !important', mx: 1.5 }} />}
      {voiceMode && (
        <Typography component="div" sx={sectionLabelSx}>
          Voz
        </Typography>
      )}

      {/* Administrador: todas as vozes (no npm run dev escolhe; fora dele, bloqueadas) */}
      {voiceMode &&
        VOICE_IDS.map((id) => {
          const current = id === voice
          const locked = voiceMode === 'locked'
          return (
            <MenuItem
              key={id}
              role="menuitemradio"
              aria-checked={current}
              disabled={locked || (busy && !current)}
              onClick={() => onChangeVoice(id)}
              sx={locked && current ? infoItemSx : itemSx}
            >
              <VoiceFlag id={id} size={24} current={current} />
              <VoiceName id={id} current={current} />
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
      {voiceMode === 'change' && (
        <Typography component="div" sx={hintSx}>
          {generating
            ? 'Gerando o áudio com a nova voz…'
            : busy
              ? 'Aguarde a geração atual terminar.'
              : 'Trocar a voz gera este áudio de novo.'}
        </Typography>
      )}
      {voiceMode === 'locked' && (
        <Box sx={{ ...hintSx, display: 'flex', gap: 0.75, alignItems: 'flex-start' }}>
          <Box component={FiLock} sx={{ fontSize: 13, mt: '2px', flexShrink: 0 }} />
          Só dá para trocar a voz (e gerar o áudio de novo) com o app aberto pelo npm run dev.
        </Box>
      )}

      {/* Reportar o áudio com um comentário */}
      {report && <Divider sx={{ my: '6px !important', mx: 1.5 }} />}
      {report && (
        <MenuItem onClick={report.onReport} sx={itemSx}>
          <Box component={FiFlag} sx={{ fontSize: 16, color: 'text.secondary' }} />
          Reportar este áudio
        </MenuItem>
      )}
      {report && (
        <Box sx={{ ...hintSx, display: 'flex', gap: 0.75, alignItems: 'flex-start' }}>
          {report.open > 0 && (
            <Box
              component={FiClock}
              sx={{ fontSize: 13, mt: '2px', flexShrink: 0, color: 'warning.main' }}
            />
          )}
          {report.open > 0
            ? 'Você já reportou este áudio; aguardando a revisão. Acompanhe em Configurações → Áudios.'
            : 'Use se o áudio soar em inglês, cortado ou estranho.'}
        </Box>
      )}
    </Menu>
  )
}
