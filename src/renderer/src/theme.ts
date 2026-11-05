import { createTheme, type Theme } from '@mui/material/styles'
import { accentColors, type AccentValue } from './lib/accent'
import { backgroundTones, type BackgroundValue } from './lib/background'

// Tema com esquema claro e escuro. O modo (claro, escuro ou do sistema), a cor
// principal (lib/accent.ts) e a cor de fundo (lib/background.ts) são escolhidos
// em Configurações.
export function makeTheme(accent: AccentValue, background: BackgroundValue): Theme {
  const primary = accentColors(accent)
  const bg = backgroundTones(background)
  return createTheme({
    cssVariables: { colorSchemeSelector: 'class' },
    colorSchemes: {
      light: {
        palette: {
          primary: { main: primary.light },
          background: bg.light
        }
      },
      dark: {
        palette: {
          primary: { main: primary.dark },
          background: bg.dark
        }
      }
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily: 'Roboto, system-ui, "Segoe UI", sans-serif',
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      subtitle1: { fontWeight: 600 },
      subtitle2: { fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 500 }
    },
    components: {
      MuiCard: { defaultProps: { variant: 'outlined' } },
      // Mesmo espaçamento nos quatro lados (o padrão do MUI põe mais espaço embaixo)
      MuiCardContent: {
        styleOverrides: { root: { padding: 20, '&:last-child': { paddingBottom: 20 } } }
      },
      MuiButton: { defaultProps: { disableElevation: true } }
    }
  })
}
