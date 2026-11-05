import { createMapStore } from './map-store'

// Tópicos marcados como concluídos, compartilhados entre o Painel e as páginas de tópico.
// Cada tópico guarda se está concluído e quando foi marcado/desmarcado: ao juntar com
// a conta, vale a marcação mais recente (desmarcar em um computador também conta).
export interface TopicMark {
  done: boolean
  at: number
}

export const completedStore = createMapStore<TopicMark>({
  key: 'completedTopics',
  isValid: (value): value is TopicMark =>
    !!value &&
    typeof value === 'object' &&
    typeof (value as TopicMark).done === 'boolean' &&
    typeof (value as TopicMark).at === 'number',
  wins: (a, b) => a.at > b.at,
  // Formato antigo: lista com os ids concluídos
  migrate: (raw) =>
    Array.isArray(raw)
      ? Object.fromEntries(
          raw.filter((id) => typeof id === 'string').map((id) => [id, { done: true, at: 0 }])
        )
      : undefined
})

export function useCompletedTopics(): {
  done: string[]
  isDone: (id: string) => boolean
  toggle: (id: string) => void
} {
  const marks = completedStore.use()
  const isDone = (id: string): boolean => !!marks[id]?.done
  return {
    done: Object.keys(marks).filter(isDone),
    isDone,
    toggle: (id) => completedStore.set(id, { done: !isDone(id), at: Date.now() })
  }
}
