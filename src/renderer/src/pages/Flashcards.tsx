import { useState, type ReactElement } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import { FLASHCARDS } from '@/data/flashcards'

// Versão simples: percorre o baralho em ordem.
// A repetição espaçada (FSRS/SM-2) entra depois, junto com o banco.
export default function Flashcards(): ReactElement {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = FLASHCARDS[index]

  const next = (): void => {
    setFlipped(false)
    setIndex((i) => (i + 1) % FLASHCARDS.length)
  }

  return (
    <Page>
      <Typography variant="h5" gutterBottom>
        Flashcards
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {card.deck} · {index + 1}/{FLASHCARDS.length}
      </Typography>

      <Card sx={{ maxWidth: 480 }}>
        <CardActionArea
          onClick={() => setFlipped((f) => !f)}
          sx={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Typography variant="h5" color={flipped ? 'primary' : 'text.primary'}>
            {flipped ? card.back : card.front}
          </Typography>
        </CardActionArea>
      </Card>
      <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
        Clique no cartão para virar.
      </Typography>

      <Stack direction="row" spacing={1.5}>
        <Button variant="outlined" color="error" onClick={next}>
          Errei
        </Button>
        <Button variant="contained" color="success" onClick={next}>
          Acertei
        </Button>
      </Stack>
    </Page>
  )
}
