import type { ReactElement, ReactNode } from 'react'
import Box from '@mui/material/Box'

// Área de conteúdo padrão das telas: espaçamento e largura máxima de leitura.
// `narrow`: coluna de leitura mais estreita e centralizada (estilo Leitura das páginas de estudo)
export default function Page({
  children,
  narrow = false
}: {
  children: ReactNode
  narrow?: boolean
}): ReactElement {
  // Menos margem em janelas estreitas (barra de navegação embaixo)
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 2.5, md: 4 },
        maxWidth: narrow ? '46rem' : 900,
        ...(narrow && { mx: 'auto' })
      }}
    >
      {children}
    </Box>
  )
}
