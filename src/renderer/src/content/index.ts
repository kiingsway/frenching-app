import type { TopicContent } from './types'
import provaTefTcf from './prova-tef-tcf'
import provaNclc from './prova-nclc'
import provaCecr from './prova-cecr'
import provaCrs from './prova-crs'
import provaFormato from './prova-formato'
import provaCriterios from './prova-criterios'
import provaQcm from './prova-qcm'
import coMensagens from './co-mensagens'
import coDialogos from './co-dialogos'
import coRadio from './co-radio'
import coDebates from './co-debates'
import coPalestras from './co-palestras'
import coSotaques from './co-sotaques'
import coFalado from './co-falado'
import coEstrategias from './co-estrategias'

// Registro das páginas de tópico já escritas. Novas páginas entram aqui.
export const ALL_CONTENT: TopicContent[] = [
  provaTefTcf,
  provaNclc,
  provaCecr,
  provaCrs,
  provaFormato,
  provaCriterios,
  provaQcm,
  coMensagens,
  coDialogos,
  coRadio,
  coDebates,
  coPalestras,
  coSotaques,
  coFalado,
  coEstrategias
]

const CONTENT: Record<string, TopicContent> = Object.fromEntries(
  ALL_CONTENT.map((page) => [page.id, page])
)

export function getTopicContent(id: string): TopicContent | undefined {
  return CONTENT[id]
}
