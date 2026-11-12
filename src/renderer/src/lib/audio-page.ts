import { createContext, useContext } from 'react'

// Página de estudo em que o áudio está sendo tocado. O mesmo texto (e o mesmo arquivo de
// áudio) pode aparecer em várias páginas; o reporte do áudio guarda a página em que foi
// feito, para a lista poder abri-la. A TopicPage fornece o id do tópico aberto.
export const AudioPageContext = createContext<string | null>(null)

export const useAudioPage = (): string | null => useContext(AudioPageContext)
