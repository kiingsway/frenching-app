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
import eeTefA from './ee-tef-a'
import eeTefB from './ee-tef-b'
import eeTcf1 from './ee-tcf-1'
import eeTcf2 from './ee-tcf-2'
import eeTcf3 from './ee-tcf-3'
import eeEstrutura from './ee-estrutura'
import eeRegistro from './ee-registro'
import eeCartaFormal from './ee-carta-formal'
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
import eeNarrar from './ee-narrar'
import eeArgumentar from './ee-argumentar'
import eeConectores from './ee-conectores'
import eePalavras from './ee-palavras'
import eeRevisao from './ee-revisao'
import eoTefA from './eo-tef-a'
import eoTefB from './eo-tef-b'
import eoTcf1 from './eo-tcf-1'
import eoTcf2 from './eo-tcf-2'
import eoTcf3 from './eo-tcf-3'
import gbImperativo from './gb-imperativo'
import gbPronominais from './gb-pronominais'
import gaPassiva from './ga-passiva'
import gbContracoes from './gb-contracoes'
import gbCestIlEst from './gb-cest-il-est'
import gbTonicos from './gb-tonicos'
import gbNumeros from './gb-numeros'
import giImparfait from './gi-imparfait'
import gaGerondif from './ga-gerondif'
import gbSavoirConnaitre from './gb-savoir-connaitre'
import gbGrafia from './gb-grafia'
import gbExpressoes from './gb-expressoes'
import gbAdverbios from './gb-adverbios'
import vCanada from './v-canada'
import vEconomia from './v-economia'

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
  eeTefA,
  eeTefB,
  eeTcf1,
  eeTcf2,
  eeTcf3,
  eeEstrutura,
  eeRegistro,
  eeCartaFormal,
  gbArtigos,
  gbGenero,
  gbAdjetivos,
  gbPresent,
  gbNegacao,
  gbInterrogacao,
  gbPreposicoes,
  gbPossessivos,
  gbPasseCompose,
  gbFuturProche,
  eeNarrar,
  eeArgumentar,
  eeConectores,
  eePalavras,
  eeRevisao,
  eoTefA,
  eoTefB,
  eoTcf1,
  eoTcf2,
  eoTcf3,
  gbImperativo,
  gbPronominais,
  gaPassiva,
  gbContracoes,
  gbCestIlEst,
  gbTonicos,
  gbNumeros,
  giImparfait,
  gaGerondif,
  gbSavoirConnaitre,
  gbGrafia,
  gbExpressoes,
  gbAdverbios,
  vCanada,
  vEconomia
]

const CONTENT: Record<string, TopicContent> = Object.fromEntries(
  ALL_CONTENT.map((page) => [page.id, page])
)

export function getTopicContent(id: string): TopicContent | undefined {
  return CONTENT[id]
}
