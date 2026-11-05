import { darken, lighten } from '@mui/material/styles'
import { createPref } from './prefs'

// Cor de fundo (secundária) do tema: o fundo da janela e o dos cartões, do menu
// lateral e das janelas. Cada cor gera dois tons por tema: no claro, quase branco
// com um toque da cor; no escuro, quase preto com um toque da cor.
export interface BackgroundTones {
  // Fundo da janela
  default: string
  // Cartões, menu lateral, menus e janelas
  paper: string
}

export interface BackgroundPreset {
  id: string
  label: string
  // Cor-base; a "padrão" tem tons próprios (os originais do app)
  color: string
  tones?: { light: BackgroundTones; dark: BackgroundTones }
}

export const BACKGROUND_PRESETS: BackgroundPreset[] = [
  {
    id: 'default',
    label: 'Padrão (azulado)',
    color: '#5b6b8f',
    tones: {
      light: { default: '#f6f7fb', paper: '#ffffff' },
      dark: { default: '#121620', paper: '#1b2130' }
    }
  },
  { id: 'neutral', label: 'Cinza neutro', color: '#808080' },
  { id: 'warm', label: 'Areia', color: '#b08850' },
  { id: 'green', label: 'Verde', color: '#3f8f5f' },
  { id: 'teal', label: 'Verde-azulado', color: '#2f8f8f' },
  { id: 'violet', label: 'Violeta', color: '#7a5ab8' },
  { id: 'rose', label: 'Rosa', color: '#b0587a' }
]

export const DEFAULT_BACKGROUND = 'default'

// Valor salvo: o id de uma cor pronta, ou uma cor personalizada ("#rrggbb")
export type BackgroundValue = string

export const isCustomBackground = (value: BackgroundValue): boolean => /^#[0-9a-f]{6}$/i.test(value)

// Tons gerados a partir de uma cor
function tonesFrom(color: string): { light: BackgroundTones; dark: BackgroundTones } {
  return {
    light: { default: lighten(color, 0.9), paper: lighten(color, 0.96) },
    dark: { default: darken(color, 0.83), paper: darken(color, 0.75) }
  }
}

export function backgroundTones(value: BackgroundValue): {
  light: BackgroundTones
  dark: BackgroundTones
} {
  if (isCustomBackground(value)) return tonesFrom(value)
  const preset = BACKGROUND_PRESETS.find((p) => p.id === value) ?? BACKGROUND_PRESETS[0]
  return preset.tones ?? tonesFrom(preset.color)
}

export const backgroundPref = createPref<BackgroundValue>(
  'backgroundColor',
  DEFAULT_BACKGROUND,
  (value): value is BackgroundValue =>
    typeof value === 'string' &&
    (isCustomBackground(value) || BACKGROUND_PRESETS.some((p) => p.id === value))
)
