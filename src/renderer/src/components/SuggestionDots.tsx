import type { ReactElement } from 'react'
import { motion } from 'motion/react'
import Box from '@mui/material/Box'
import { usePendingAccessCount } from '@/lib/access-admin'
import { useAudioReportDots } from '@/lib/audio-reports'
import { useUpdateAvailable } from '@/lib/desktop-update'
import { useOpenReportCount } from '@/lib/page-reports'

// Azul da atualização: não usa a cor principal, que a pessoa pode trocar nas Configurações
const UPDATE_COLOR = 'info.main'

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

// Bolinha azul no canto de um botão de atualizar (o botão do MUI já é position: relative)
export function UpdateButtonDot(): ReactElement {
  return (
    <Box sx={{ position: 'absolute', top: -5, right: -5, display: 'flex' }} aria-hidden>
      <Dot color={UPDATE_COLOR} />
    </Box>
  )
}

// Bolinhas sobre um ícone (o pai precisa de position: relative).
// Áudios reportados (audio): vermelha (só admin) enquanto houver áudio reportado sem
// resolver; verde = um reporte seu foi resolvido (some ao abrir a lista). Pedidos de acesso (access, só admin): vermelha enquanto houver pedido
// aguardando aprovação. Páginas reportadas (reports, só admin): vermelha enquanto houver
// reporte não resolvido nem apagado. Atualização (update): azul enquanto houver versão nova.
export default function SuggestionDots({
  audio = true,
  access = false,
  reports = false,
  update = false
}: {
  audio?: boolean
  access?: boolean
  reports?: boolean
  update?: boolean
}): ReactElement | null {
  const dots = useAudioReportDots()
  const pendingAccess = usePendingAccessCount() > 0
  const openReports = useOpenReportCount() > 0
  const updateAvailable = useUpdateAvailable()
  const red = (audio && dots.red) || (access && pendingAccess) || (reports && openReports)
  const green = audio && dots.green
  const blue = update && updateAvailable
  if (!red && !green && !blue) return null
  const label = [
    audio && dots.red && 'Há áudios reportados em aberto',
    access && pendingAccess && 'Há pedidos de acesso aguardando',
    reports && openReports && 'Há páginas reportadas em aberto',
    green && 'Um áudio que você reportou foi resolvido',
    blue && 'Há uma versão nova do Frenching'
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
      {blue && <Dot color={UPDATE_COLOR} />}
    </Box>
  )
}
