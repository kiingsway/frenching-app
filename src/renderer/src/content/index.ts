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
import ceCotidiano from './ce-cotidiano'
import ceCartas from './ce-cartas'
import ceOfertas from './ce-ofertas'
import ceNoticias from './ce-noticias'
import ceEstrategias from './ce-estrategias'
import ceLiterarios from './ce-literarios'
import ceArgumentativos from './ce-argumentativos'
import gbArtigos from './gb-artigos'
import gbGenero from './gb-genero'
import gbAdjetivos from './gb-adjetivos'
import gbPresent from './gb-present'
import gbNegacao from './gb-negacao'
import gbInterrogacao from './gb-interrogacao'
import gbPreposicoes from './gb-preposicoes'
import gbPossessivos from './gb-possessivos'
import gbPasseCompose from './gb-passe-compose'
import gbFuturProche from './gb-futur-proche'

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
  coEstrategias,
  ceCotidiano,
  ceCartas,
  ceOfertas,
  ceNoticias,
  ceEstrategias,
  ceLiterarios,
  ceArgumentativos,
  gbArtigos,
  gbGenero,
  gbAdjetivos,
  gbPresent,
  gbNegacao,
  gbInterrogacao,
  gbPreposicoes,
  gbPossessivos,
  gbPasseCompose,
  gbFuturProche
]

const CONTENT: Record<string, TopicContent> = Object.fromEntries(
  ALL_CONTENT.map((page) => [page.id, page])
)

export function getTopicContent(id: string): TopicContent | undefined {
  return CONTENT[id]
}
