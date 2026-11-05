import { lighten } from '@mui/material/styles'
import { createPref } from './prefs'

// Cor principal do tema, escolhida em Configurações.
// Cada cor pronta tem um tom para o tema claro e outro, mais claro, para o escuro
// (a mesma cor do claro ficaria escura demais sobre o fundo escuro).
export interface AccentPreset {
  id: string
  label: string
  light: string
  dark: string
}

export const ACCENT_PRESETS: AccentPreset[] = [
  { id: 'blue', label: 'Azul', light: '#2f5bea', dark: '#7c9bff' },
  { id: 'indigo', label: 'Índigo', light: '#5b4bdb', dark: '#a497ff' },
  { id: 'violet', label: 'Violeta', light: '#8e3ec9', dark: '#c88cf0' },
  { id: 'pink', label: 'Rosa', light: '#c2185b', dark: '#f48fb1' },
  { id: 'red', label: 'Vermelho', light: '#d32f2f', dark: '#ef7a7a' },
  { id: 'orange', label: 'Laranja', light: '#d35400', dark: '#ffa463' },
  { id: 'green', label: 'Verde', light: '#2e7d32', dark: '#6fcf76' },
  { id: 'teal', label: 'Verde-azulado', light: '#00796b', dark: '#4fd1c0' }
]

export const DEFAULT_ACCENT = 'blue'

// Valor salvo: o id de uma cor pronta, ou uma cor personalizada ("#rrggbb")
export type AccentValue = string

export const isCustomAccent = (value: AccentValue): boolean => /^#[0-9a-f]{6}$/i.test(value)

// Tons do tema claro e escuro para o valor escolhido
export function accentColors(value: AccentValue): { light: string; dark: string } {
  if (isCustomAccent(value)) return { light: value, dark: lighten(value, 0.35) }
  const preset = ACCENT_PRESETS.find((p) => p.id === value) ?? ACCENT_PRESETS[0]
  return { light: preset.light, dark: preset.dark }
}

export const accentPref = createPref<AccentValue>(
  'accentColor',
  DEFAULT_ACCENT,
  (value): value is AccentValue =>
    typeof value === 'string' &&
    (isCustomAccent(value) || ACCENT_PRESETS.some((p) => p.id === value))
)

export const setAccent = (value: AccentValue): void => accentPref.set(value)
export const useAccent = (): AccentValue => accentPref.use()
