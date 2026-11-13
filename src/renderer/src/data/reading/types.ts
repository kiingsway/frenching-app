// Formato dos textos da aba Compreensão escrita (docs/plano-abas-de-pratica.md, Fase 1).
//
// Cada texto é original (escrito por nós ou por outras IAs, nunca copiado de uma prova)
// e traz questões de múltipla escolha em francês, como no TEF e no TCF Canada.
// Nos arquivos, a resposta certa é sempre a PRIMEIRA opção: o app embaralha.

import type { Source } from '../../content/types'

// A1 = os documentos mais curtos do começo da prova (veja a página ce-cotidiano)
export type ReadingLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1'

export const READING_LEVELS: ReadingLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1']

// Tipo de documento = tópico da seção "Compreensão escrita" de data/topics.ts,
// para o app poder abrir a teoria daquele tipo de texto
export type ReadingKind =
  | 'ce-cotidiano'
  | 'ce-cartas'
  | 'ce-ofertas'
  | 'ce-noticias'
  | 'ce-argumentativos'
  | 'ce-literarios'

export const KIND_LABELS: Record<ReadingKind, string> = {
  'ce-cotidiano': 'Documento do cotidiano',
  'ce-cartas': 'E-mail ou carta',
  'ce-ofertas': 'Oferta ou anúncio',
  'ce-noticias': 'Notícia',
  'ce-argumentativos': 'Texto argumentativo',
  'ce-literarios': 'Texto literário'
}

export interface ReadingQuestion {
  // `${passageId}-${n}`, gerado pela posição. Questões novas entram no FIM do texto,
  // para não bagunçar o progresso salvo e as revisões
  id: string
  passageId: string
  // Em francês
  prompt: string
  // Primeira = resposta certa; só uma pode estar certa
  options: string[]
  // Em português: por que a certa está certa e onde está no texto
  explanation: string
}

export interface ReadingPassage {
  // Fixo: o progresso e as revisões dependem dele
  id: string
  level: ReadingLevel
  kind: ReadingKind
  // Título do documento, em francês
  title: string
  // Parágrafos (ou linhas, num anúncio) em francês, só texto simples
  text: string[]
  // Tradução em português, um item para cada item de `text`
  translation: string[]
  sources?: Source[]
  questions: ReadingQuestion[]
}

// Atalho para escrever as questões: ['pergunta', ['certa', 'errada', ...], 'explicação']
export type ReadingQuestionDraft = [prompt: string, options: string[], explanation: string]

// Texto como é escrito em textos.ts: as questões ainda sem id
export type ReadingPassageDraft = Omit<ReadingPassage, 'questions'> & {
  questions: ReadingQuestionDraft[]
}

export function passage(data: ReadingPassageDraft): ReadingPassage {
  return {
    ...data,
    questions: data.questions.map(([prompt, options, explanation], i) => ({
      id: `${data.id}-${i + 1}`,
      passageId: data.id,
      prompt,
      options,
      explanation
    }))
  }
}
