import { useSyncExternalStore } from 'react'
import { load, save } from './storage'

// Progresso guardado como um mapa id → registro (um por tópico, um por questão),
// salvo no computador. Por ser um mapa, dá para juntar o progresso de dois
// computadores registro a registro (lib/cloud-sync.ts), em vez de um sobrescrever o outro.
export interface MapStore<V> {
  key: string
  get: () => Record<string, V>
  set: (id: string, value: V) => void
  // Troca o mapa inteiro (ex.: depois de juntar com o que veio da conta)
  replace: (next: Record<string, V>) => void
  subscribe: (listener: () => void) => () => void
  use: () => Record<string, V>
  isValid: (value: unknown) => value is V
  // `a` deve prevalecer sobre `b` ao juntar os dois lados?
  wins: (a: V, b: V) => boolean
}

export function createMapStore<V>(options: {
  key: string
  isValid: (value: unknown) => value is V
  wins: (a: V, b: V) => boolean
  // Converte formatos antigos salvos no computador
  migrate?: (raw: unknown) => Record<string, V> | undefined
}): MapStore<V> {
  const { key, isValid, wins, migrate } = options
  const raw = load<unknown>(key, {})
  let map: Record<string, V> = {}
  const source = migrate?.(raw) ?? raw
  if (source && typeof source === 'object' && !Array.isArray(source))
    for (const [id, value] of Object.entries(source)) if (isValid(value)) map[id] = value

  const listeners = new Set<() => void>()
  const emit = (): void => {
    save(key, map)
    listeners.forEach((listener) => listener())
  }
  const get = (): Record<string, V> => map
  const subscribe = (listener: () => void): (() => void) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return {
    key,
    get,
    set: (id, value) => {
      map = { ...map, [id]: value }
      emit()
    },
    replace: (next) => {
      map = next
      emit()
    },
    subscribe,
    use: () => useSyncExternalStore(subscribe, get),
    isValid,
    wins
  }
}
