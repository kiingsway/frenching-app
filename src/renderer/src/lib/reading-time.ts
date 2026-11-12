import type { Block } from '@/content/types'
import { TERM_MARKUP } from '@/lib/audio-texts'

// Tempo de leitura de uma página de estudo, calculado do texto da versão que a pessoa lê.
// Velocidade de estudo (mais lenta que a de um romance): palavras por minuto.
const WORDS_PER_MINUTE = 150

// Nos termos [[francês|tradução]], só o francês conta: a tradução fica numa dica
const withoutTranslations = (text: string): string => text.replace(TERM_MARKUP, '$1')

const countWords = (text: string): number =>
  withoutTranslations(text).split(/\s+/).filter(Boolean).length

function blockWords(block: Block): number {
  switch (block.type) {
    case 'heading':
    case 'paragraph':
      return countWords(block.text)
    case 'list':
      return block.items.reduce((sum, item) => sum + countWords(item), 0)
    case 'table':
      return (
        block.headers.reduce((sum, h) => sum + countWords(h), 0) +
        block.rows.reduce((sum, row) => sum + row.reduce((s, cell) => s + countWords(cell), 0), 0)
      )
    case 'callout':
      return countWords(block.text) + (block.title ? countWords(block.title) : 0)
  }
}

// Minutos, arredondados para cima, com mínimo de 1
export function readingMinutes(page: { title: string; summary: string; blocks: Block[] }): number {
  const words =
    countWords(page.title) +
    countWords(page.summary) +
    page.blocks.reduce((sum, block) => sum + blockWords(block), 0)
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}
