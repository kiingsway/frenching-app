import type { ReactElement } from 'react'
import { FaCanadianMapleLeaf } from 'react-icons/fa'
import Box from '@mui/material/Box'
import { AUDIO_VOICES, type VoiceId } from '@/lib/audio-texts'

const COUNTRY_NAMES = { FR: 'França', CA: 'Canadá' } as const

const CANADA_RED = '#D80621'

// Faixa vertical da bandeira
function Band({ color, grow = 1 }: { color: string; grow?: number }): ReactElement {
  return <Box component="span" sx={{ flex: grow, bgcolor: color }} />
}

// Bolinha com a bandeira do país da voz. A bandeira é desenhada aqui, e não com emoji:
// no Windows, o navegador do Electron mostra o emoji de bandeira como as letras "CA"/"FR".
// `current` marca a voz escolhida com um anel na cor principal, separado da bandeira
// por um respiro; a bolinha cresce um pouco ao passar o mouse no item do menu.
export function VoiceFlag({
  id,
  size = 18,
  current = false
}: {
  id: VoiceId
  size?: number
  current?: boolean
}): ReactElement {
  const { country } = AUDIO_VOICES[id]
  return (
    <Box
      component="span"
      role="img"
      aria-label={COUNTRY_NAMES[country]}
      title={COUNTRY_NAMES[country]}
      sx={{
        position: 'relative',
        display: 'inline-flex',
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: current
          ? '0 0 0 2px var(--mui-palette-background-paper), 0 0 0 4px var(--mui-palette-primary-main)'
          : '0 1px 3px rgba(0, 0, 0, 0.3)',
        transition: 'box-shadow 150ms, transform 150ms',
        '.MuiMenuItem-root:hover &': { transform: 'scale(1.08)' },
        // Brilho suave de cima para baixo e contorno fino, para o branco não sumir no fundo
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background:
            'linear-gradient(160deg, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.12) 100%)',
          boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.14)'
        }
      }}
    >
      {country === 'FR' ? (
        <>
          <Band color="#0055A4" />
          <Band color="#FFFFFF" />
          <Band color="#EF4135" />
        </>
      ) : (
        <>
          <Band color={CANADA_RED} />
          <Box
            component="span"
            sx={{
              flex: 2,
              bgcolor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: CANADA_RED,
              fontSize: size * 0.46
            }}
          >
            <FaCanadianMapleLeaf />
          </Box>
          <Band color={CANADA_RED} />
        </>
      )}
    </Box>
  )
}

// Bolinha da bandeira seguida do nome da voz
export default function VoiceLabel({
  id,
  size = 18
}: {
  id: VoiceId
  size?: number
}): ReactElement {
  return (
    <Box
      component="span"
      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, verticalAlign: 'middle' }}
    >
      <VoiceFlag id={id} size={size} />
      {AUDIO_VOICES[id].label}
    </Box>
  )
}
