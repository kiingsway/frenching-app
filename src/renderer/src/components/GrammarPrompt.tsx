import { Fragment, type ReactElement } from 'react'
import Box from '@mui/material/Box'

// Enunciado de uma questão de gramática: o "___" vira uma lacuna sublinhada.
// Com `fill`, a lacuna mostra a resposta (ex.: depois de responder).
export default function GrammarPrompt({
  prompt,
  fill,
  tone = 'success'
}: {
  prompt: string
  fill?: string
  tone?: 'success' | 'error' | 'primary'
}): ReactElement {
  const parts = prompt.split('___')
  return (
    <Box component="span" lang="fr">
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 &&
            (fill ? (
              <Box
                component="span"
                sx={{
                  px: 0.5,
                  mx: 0.25,
                  borderRadius: 0.5,
                  fontWeight: 600,
                  color: `${tone}.main`,
                  bgcolor: `rgba(var(--mui-palette-${tone}-mainChannel) / 0.12)`
                }}
              >
                {fill}
              </Box>
            ) : (
              <Box
                component="span"
                aria-label="lacuna"
                sx={{
                  display: 'inline-block',
                  minWidth: '3em',
                  mx: 0.5,
                  borderBottom: 2,
                  borderColor: 'text.secondary',
                  verticalAlign: 'baseline'
                }}
              >
                &nbsp;
              </Box>
            ))}
        </Fragment>
      ))}
    </Box>
  )
}
