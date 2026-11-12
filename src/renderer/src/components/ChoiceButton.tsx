import type { ReactElement, ReactNode } from 'react'
import { motion } from 'motion/react'
import { FiCheck, FiX } from 'react-icons/fi'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'

// idle: ainda não respondida · selected: escolhida, sem correção (modo Prova)
// correct / wrong: depois de corrigir · dim: as outras opções depois de corrigir
export type ChoiceState = 'idle' | 'selected' | 'correct' | 'wrong' | 'dim'

const tint = (color: string, opacity: number): string =>
  `rgba(var(--mui-palette-${color}-mainChannel) / ${opacity})`

// Uma opção de múltipla escolha (Gramática e Compreensão escrita), com o número do
// atalho, que vira ✓ ou ✕ depois da correção
export default function ChoiceButton({
  state,
  number,
  disabled,
  onClick,
  children
}: {
  state: ChoiceState
  number: number
  disabled?: boolean
  onClick: () => void
  children: ReactNode
}): ReactElement {
  const graded = state === 'correct' || state === 'wrong'
  const color = state === 'correct' ? 'success' : state === 'wrong' ? 'error' : 'primary'
  const marked = graded || state === 'selected'
  return (
    <motion.div whileTap={disabled ? undefined : { scale: 0.98 }}>
      <ButtonBase
        onClick={onClick}
        disabled={disabled}
        aria-pressed={state === 'selected' || undefined}
        sx={{
          width: '100%',
          justifyContent: 'flex-start',
          textAlign: 'left',
          gap: 1.5,
          px: 2,
          py: 1.5,
          borderRadius: 1,
          border: 1,
          fontSize: 17,
          transition: 'background-color 150ms, border-color 150ms, opacity 150ms',
          borderColor: marked ? `${color}.main` : 'divider',
          bgcolor: marked ? tint(color, 0.1) : 'background.paper',
          opacity: state === 'dim' ? 0.55 : 1,
          '&:hover':
            state === 'idle' || state === 'selected'
              ? { borderColor: 'primary.main', bgcolor: tint('primary', 0.05) }
              : {}
        }}
      >
        <Box
          sx={{
            width: 26,
            height: 26,
            flexShrink: 0,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
            fontWeight: 700,
            bgcolor: marked ? `${color}.main` : tint('primary', 0.12),
            color: marked ? `${color}.contrastText` : 'primary.main'
          }}
        >
          {state === 'correct' ? <FiCheck /> : state === 'wrong' ? <FiX /> : number}
        </Box>
        <span lang="fr">{children}</span>
      </ButtonBase>
    </motion.div>
  )
}
