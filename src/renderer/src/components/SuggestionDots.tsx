import type { ReactElement } from 'react'
import { motion } from 'motion/react'
import Box from '@mui/material/Box'
import { usePendingAccessCount } from '@/lib/access-admin'
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

// Bolinhas sobre um ícone (o pai precisa de position: relative).
// Sugestões de troca de voz (audio): vermelha = sugestão pendente ainda não vista
// (npm run dev); verde = uma sugestão sua foi aplicada. Somem ao abrir a tela de
// sugestões. Pedidos de acesso (access, só admin): vermelha enquanto houver pedido
// aguardando aprovação.
export default function SuggestionDots({
  audio = true,
  access = false
}: {
  audio?: boolean
  access?: boolean
}): ReactElement | null {
  const dots = useSuggestionDots()
  const pendingAccess = usePendingAccessCount() > 0
  const red = (audio && dots.red) || (access && pendingAccess)
  const green = audio && dots.green
  if (!red && !green) return null
  const label = [
    audio && dots.red && 'Há sugestões de áudio pendentes',
    access && pendingAccess && 'Há pedidos de acesso aguardando',
    green && 'Uma sugestão sua foi aplicada'
  ]
    .filter(Boolean)
    .join('. ')
  return (
    <Box
      sx={{ position: 'absolute', top: -3, left: 11, display: 'flex', gap: '2px' }}
      aria-label={label}
    >
      {red && <Dot color="error.main" />}
      {green && <Dot color="success.main" />}
    </Box>
  )
}
