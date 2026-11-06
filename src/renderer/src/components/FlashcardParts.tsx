import type { ReactElement, ReactNode } from 'react'
import { FiAlertTriangle, FiInfo } from 'react-icons/fi'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AudioSection, { type AudioSectionVariant } from '@/components/AudioSection'
import type { Flashcard } from '@/data/flashcards'
import { getAudioUrl } from '@/lib/audio'

// Peças dos flashcards usadas na sessão de estudo e na lista de flashcards

// Texto em francês com áudio (se já foi gerado). O clique toca o áudio e não chega
// ao que está em volta (ex.: não vira o cartão)
export function FrenchAudio({
  text,
  variant = 'inline',
  children
}: {
  text: string
  variant?: AudioSectionVariant
  children?: ReactNode
}): ReactElement {
  const src = getAudioUrl(text)
  const content = children ?? text
  if (!src) return <span lang="fr">{content}</span>
  return (
    <Box
      lang="fr"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      sx={{ display: 'inline-block', maxWidth: '100%' }}
    >
      <AudioSection src={src} label={`Ouvir: ${text}`} variant={variant}>
        {content}
      </AudioSection>
    </Box>
  )
}

// Exemplo (francês com áudio + tradução), armadilha dos falsos cognatos e nota de uso
export function CardDetails({ card }: { card: Flashcard }): ReactElement {
  return (
    <Box sx={{ display: 'grid', gap: 1.25 }}>
      <Box>
        <FrenchAudio text={card.example.fr}>
          <Typography component="span" sx={{ fontSize: 16, fontStyle: 'italic' }}>
            {card.example.fr}
          </Typography>
        </FrenchAudio>
        <Typography variant="body2" color="text.secondary" sx={{ px: 1 }}>
          {card.example.pt}
        </Typography>
      </Box>
      {card.trap && (
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'flex-start',
            px: 1.25,
            py: 1,
            borderRadius: 1,
            bgcolor: 'rgba(var(--mui-palette-warning-mainChannel) / 0.1)',
            color: 'text.primary'
          }}
        >
          <Box sx={{ color: 'warning.main', display: 'flex', mt: 0.25, flexShrink: 0 }}>
            <FiAlertTriangle />
          </Box>
          <Typography variant="body2">
            <strong>Armadilha:</strong> {card.trap}
          </Typography>
        </Box>
      )}
      {card.note && (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start', px: 1.25 }}>
          <Box sx={{ color: 'text.secondary', display: 'flex', mt: 0.25, flexShrink: 0 }}>
            <FiInfo />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {card.note}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
