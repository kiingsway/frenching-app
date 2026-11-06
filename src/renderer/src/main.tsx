import { StrictMode, useEffect, useMemo, type ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, useColorScheme } from '@mui/material/styles'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import App from './App'
import UpdateToast from './components/UpdateToast'
import { initAccess } from './lib/access'
import { useAccent } from './lib/accent'
import { backgroundPref } from './lib/background'
import { initAudioSuggestions } from './lib/audio-suggestions'
import { initCloudSync } from './lib/cloud-sync'
import { themeModePref } from './lib/prefs'
import { makeTheme } from './theme'

// Repassa a preferência de tema (claro/escuro/sistema) ao MUI. A preferência pode
// mudar pelas Configurações ou vir da conta (sincronização)
function ThemeModeBridge(): null {
  const mode = themeModePref.use()
  const { mode: muiMode, setMode } = useColorScheme()
  useEffect(() => {
    if (muiMode !== mode) setMode(mode)
  }, [mode, muiMode, setMode])
  return null
}

// O tema é refeito quando a cor principal muda em Configurações
function Root(): ReactElement {
  const accent = useAccent()
  const background = backgroundPref.use()
  const theme = useMemo(() => makeTheme(accent, background), [accent, background])
  return (
    <ThemeProvider theme={theme} defaultMode="system">
      <ThemeModeBridge />
      <CssBaseline />
      <App />
      <UpdateToast />
    </ThemeProvider>
  )
}

// Com login: descobre se a conta tem acesso à nuvem (pede acesso no primeiro login)
initAccess()
// Com acesso à nuvem, as configurações e o progresso passam a ser salvos na conta
initCloudSync()
// Sugestões de troca de voz dos áudios (também dependem do login)
initAudioSuggestions()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
