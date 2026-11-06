import { useSyncExternalStore } from 'react'
import { load, save } from './storage'

// Preferência salva no computador (localStorage) que qualquer tela pode ler e mudar,
// e que a sincronização com a conta (lib/cloud-sync.ts) acompanha.
export interface Pref<T> {
  key: string
  get: () => T
  set: (value: T) => void
  subscribe: (listener: () => void) => () => void
  use: () => T
  // Aceita um valor vindo da nuvem? (protege contra dados num formato inesperado)
  isValid: (value: unknown) => value is T
}

export function createPref<T>(
  key: string,
  fallback: T,
  isValid: (value: unknown) => value is T,
  initial?: () => T | undefined
): Pref<T> {
  let value = load<T>(key, initial?.() ?? fallback)
  if (!isValid(value)) value = fallback
  const listeners = new Set<() => void>()
  const get = (): T => value
  const subscribe = (listener: () => void): (() => void) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }
  return {
    key,
    get,
    set: (next) => {
      if (Object.is(next, value)) return
      value = next
      save(key, next)
      listeners.forEach((listener) => listener())
    },
    subscribe,
    use: () => useSyncExternalStore(subscribe, get),
    isValid
  }
}

export const isOneOf =
  <T extends string>(...options: T[]) =>
  (value: unknown): value is T =>
    typeof value === 'string' && (options as string[]).includes(value)

export const isNumberBetween =
  (min: number, max: number) =>
  (value: unknown): value is number =>
    typeof value === 'number' && value >= min && value <= max

// Preferências das páginas de tópico
export const ZOOM_MIN = 80
export const ZOOM_MAX = 200
export const ZOOM_DEFAULT = 100
export const topicLangPref = createPref<'pt' | 'fr'>('topicLang', 'pt', isOneOf('pt', 'fr'))
export const topicZoomPref = createPref<number>(
  'topicZoom',
  ZOOM_DEFAULT,
  isNumberBetween(ZOOM_MIN, ZOOM_MAX)
)

// Flashcards: limite de cartões novos por dia (Configurações → Flashcards)
export const NEW_PER_DAY_MAX = 50
export const newPerDayPref = createPref<number>(
  'flashcardsNewPerDay',
  10,
  (v): v is number => isNumberBetween(0, NEW_PER_DAY_MAX)(v) && Number.isInteger(v)
)

// Tema claro/escuro/sistema. O MUI guarda o modo dele em "mui-mode"; esta
// preferência é a fonte, e o ThemeModeBridge (App.tsx) repassa o valor ao MUI.
export type ThemeMode = 'light' | 'dark' | 'system'
export const themeModePref = createPref<ThemeMode>(
  'themeMode',
  'system',
  isOneOf('light', 'dark', 'system'),
  () => {
    try {
      const mui = localStorage.getItem('mui-mode')
      return mui === 'light' || mui === 'dark' || mui === 'system' ? mui : undefined
    } catch {
      return undefined
    }
  }
)
