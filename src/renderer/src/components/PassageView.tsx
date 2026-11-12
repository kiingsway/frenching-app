import type { ReactElement, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import AudioSection from '@/components/AudioSection'
import { KIND_LABELS, frenchSpaces, type ReadingPassage } from '@/data/reading'
import { getAudioUrl } from '@/lib/audio'

// Trecho em francês que, com `audio`, toca o áudio ao clicar (se já foi gerado pelo
// npm run audio); sem áudio, fica só o texto
export function Spoken({
  text,
  audio,
  children
}: {
  text: string
  audio: boolean
  children: ReactNode
}): ReactElement {
  const src = audio ? getAudioUrl(text) : undefined
  if (!src) return <>{children}</>
  return (
    <AudioSection src={src} label={`Ouvir: ${text}`} variant="block">
      {children}
    </AudioSection>
  )
}

// Um texto da Compreensão escrita, como um documento: tipo e nível, título e parágrafos.
// Com `translation`, a tradução de cada parágrafo aparece logo abaixo dele.
// Com `audio`, o título e cada parágrafo tocam o áudio ao clicar.
export default function PassageView({
  passage,
  translation = false,
  audio = false
}: {
  passage: ReadingPassage
  translation?: boolean
  audio?: boolean
}): ReactElement {
  return (
    <Box
      component="article"
      sx={{
        p: { xs: 2, sm: 2.5 },
        borderRadius: 1,
        border: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper'
      }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <Chip size="small" label={passage.level} color="primary" variant="outlined" />
        <Typography variant="caption" color="text.secondary">
          {KIND_LABELS[passage.kind]}
        </Typography>
      </Box>
      <Box sx={{ mb: audio ? 0.5 : 1.5 }}>
        <Spoken text={passage.title} audio={audio}>
          <Typography lang="fr" variant="h6" sx={{ fontSize: 19, lineHeight: 1.35 }}>
            {frenchSpaces(passage.title)}
          </Typography>
        </Spoken>
      </Box>
      {passage.text.map((paragraph, i) => (
        // Com áudio, o trecho clicável já tem espaço em volta
        <Box key={i} sx={{ mb: audio ? 0.5 : 1.5, '&:last-child': { mb: 0 } }}>
          <Spoken text={paragraph} audio={audio}>
            <Typography lang="fr" sx={{ fontSize: 16.5, lineHeight: 1.65 }}>
              {frenchSpaces(paragraph)}
            </Typography>
          </Spoken>
          {translation && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 0.5, pl: 1.5, borderLeft: 2, borderColor: 'divider', fontStyle: 'italic' }}
            >
              {passage.translation[i]}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  )
}
