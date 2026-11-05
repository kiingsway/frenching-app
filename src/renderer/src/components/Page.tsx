import type { ReactElement, ReactNode } from 'react'
import Box from '@mui/material/Box'

// Área de conteúdo padrão das telas: espaçamento e largura máxima de leitura.
export default function Page({ children }: { children: ReactNode }): ReactElement {
  // Menos margem em janelas estreitas (barra de navegação embaixo)
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: { xs: 2.5, md: 4 }, maxWidth: 900 }}>
      {children}
    </Box>
  )
}
