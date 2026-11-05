// Tipos da revisão das questões de gramática, compartilhados pelo app e pelo
// processo principal (src/main/review.ts). Sem imports, como lib/audio-texts.ts.

export interface ReviewEntry {
  status: 'ok' | 'problem'
  note?: string
  // Impressão digital da questão quando foi revisada (veja questionHash)
  hash: string
  // Enunciado e resposta, só para o arquivo ser legível sem abrir o app
  prompt: string
  answer: string
  at: string
}

export type ReviewMap = Record<string, ReviewEntry>
