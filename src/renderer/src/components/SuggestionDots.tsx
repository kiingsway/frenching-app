import type { ReactElement } from 'react'
import { motion } from 'motion/react'
import Box from '@mui/material/Box'
import { useSuggestionDots } from '@/lib/audio-suggestions'

// Bolinha flutuante que aparece com um pulo
function Dot({ color }: { color: string }): ReactElement {
  return (
    <Box
      component={motion.span}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 18 }}
      sx={{
        width: 9,
        height: 9,
        borderRadius: '50%',
        bgcolor: color,
        border: '2px solid',
        borderColor: 'background.paper',
        boxSizing: 'content-box',
        display: 'block',
        boxShadow: 1
      }}
    />
  )
}

// Bolinhas das sugestões de troca de voz, sobre um ícone (o pai precisa de
// position: relative): vermelha = sugestão pendente ainda não vista (npm run dev);
// verde = uma sugestão sua foi aplicada. Somem ao abrir a tela de sugestões.
export default function SuggestionDots(): ReactElement | null {
  const dots = useSuggestionDots()
  if (!dots.red && !dots.green) return null
  return (
    <Box
      sx={{ position: 'absolute', top: -3, left: 11, display: 'flex', gap: '2px' }}
      aria-label={dots.red ? 'Há sugestões de áudio pendentes' : 'Uma sugestão sua foi aplicada'}
    >
      {dots.red && <Dot color="error.main" />}
      {dots.green && <Dot color="success.main" />}
    </Box>
  )
}
