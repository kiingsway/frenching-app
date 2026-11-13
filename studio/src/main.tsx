// Entrada do studio (npm run studio): mesmo tema do app principal, no modo do sistema
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { DEFAULT_ACCENT } from '@/lib/accent'
import { DEFAULT_BACKGROUND } from '@/lib/background'
import { makeTheme } from '@/theme'
import Studio from './Studio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={makeTheme(DEFAULT_ACCENT, DEFAULT_BACKGROUND)} defaultMode="system">
      <CssBaseline />
      <Studio />
    </ThemeProvider>
  </StrictMode>
)
