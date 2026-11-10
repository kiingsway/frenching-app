import type { ReactElement, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

// Francês com a tradução numa dica, na versão em português das páginas de estudo.
// No conteúdo, escreva [[texto em francês|tradução em português]]. O texto em francês
// aparece com um sublinhado pontilhado, e a tradução surge ao passar o mouse, ao focar
// com o teclado ou ao tocar na tela.
// Em teste: por enquanto só as páginas "Diferenças entre TEF Canada e TCF Canada"
// (prova-tef-tcf) e "Mensagens curtas" (co-mensagens) usam isso.
const MARKUP = /\[\[([^|\]]+)\|([^\]]+)\]\]/g

function FrenchTerm({ fr, pt }: { fr: string; pt: string }): ReactElement {
  return (
    <Tooltip
      title={pt}
      arrow
      describeChild
      enterTouchDelay={0}
      leaveTouchDelay={4000}
      slotProps={{ tooltip: { sx: { fontSize: 13, lineHeight: 1.45, px: 1.25, py: 0.75 } } }}
    >
      <Box
        component="span"
        lang="fr"
        tabIndex={0}
        sx={{
          textDecorationLine: 'underline',
          textDecorationStyle: 'dotted',
          textDecorationColor: 'currentColor',
          textDecorationThickness: '1.5px',
          textUnderlineOffset: '3px',
          cursor: 'help',
          borderRadius: 0.5,
          '&:hover, &:focus-visible': { color: 'primary.main', outline: 'none' }
        }}
      >
        {fr}
      </Box>
    </Tooltip>
  )
}

// Troca cada [[francês|tradução]] do texto pelo termo com a dica; o resto fica igual
export function translatedText(text: string): ReactNode {
  if (!text.includes('[[')) return text
  const nodes: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(MARKUP)) {
    if (match.index > last) nodes.push(text.slice(last, match.index))
    nodes.push(<FrenchTerm key={match.index} fr={match[1]} pt={match[2]} />)
    last = match.index + match[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}
