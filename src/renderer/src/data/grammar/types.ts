// Formato do banco de questões de gramática (aba Gramática).
//
// Cada tópico de gramática de data/topics.ts (seções gram-base, gram-inter e
// gram-avancado) tem uma lista de questões de múltipla escolha, como no TEF/TCF.
// Nos arquivos, a resposta certa é sempre a PRIMEIRA opção: o app embaralha as
// opções na hora de mostrar.

import type { Source } from '@/content/types'

export interface GrammarQuestion {
  // `${topicId}-${n}`, gerado pela posição. Para não bagunçar o progresso salvo
  // e as revisões, questões novas entram sempre no FIM da lista do tópico.
  id: string
  topicId: string
  // Frase em francês; "___" marca a lacuna
  prompt: string
  // Primeira = resposta certa
  options: string[]
  // Por que a certa está certa (e, quando ajuda, por que as outras não)
  explanation: string
}

export interface GrammarLevel {
  // Id da seção em data/topics.ts
  sectionId: string
  label: string
  sources: Source[]
  topics: Record<string, GrammarQuestion[]>
}

// Atalho para escrever as questões: q('frase com ___', ['certa', 'errada', ...], 'explicação')
export type QuestionDraft = [prompt: string, options: string[], explanation: string]

export function buildTopic(topicId: string, drafts: QuestionDraft[]): GrammarQuestion[] {
  return drafts.map(([prompt, options, explanation], i) => ({
    id: `${topicId}-${i + 1}`,
    topicId,
    prompt,
    options,
    explanation
  }))
}
