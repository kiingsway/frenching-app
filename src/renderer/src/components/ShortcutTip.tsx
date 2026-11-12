import type { ReactElement, ReactNode } from 'react'
import type { IconType } from 'react-icons'
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiCornerDownLeft,
  FiMinus,
  FiPlus
} from 'react-icons/fi'
import { MdSpaceBar } from 'react-icons/md'
import Box from '@mui/material/Box'

// Teclas que não são letra, número ou nome (Esc, Ctrl…) viram ícone, para ficarem do
// mesmo tamanho e alinhadas. Enter também, com o símbolo de "voltar" do teclado
const KEY_ICONS: Record<string, { icon: IconType; label: string }> = {
  '←': { icon: FiArrowLeft, label: 'seta para a esquerda' },
  '→': { icon: FiArrowRight, label: 'seta para a direita' },
  '↑': { icon: FiArrowUp, label: 'seta para cima' },
  '↓': { icon: FiArrowDown, label: 'seta para baixo' },
  '+': { icon: FiPlus, label: 'mais' },
  '−': { icon: FiMinus, label: 'menos' },
  '-': { icon: FiMinus, label: 'menos' },
  Enter: { icon: FiCornerDownLeft, label: 'Enter' },
  Espaço: { icon: MdSpaceBar, label: 'Espaço' },
  Entrée: { icon: FiCornerDownLeft, label: 'Entrée' }
}

// Tecla desenhada como um "keycap" dentro da dica (fundo escuro do tooltip): borda e
// fundo translúcidos sobre a cor do texto, altura fixa e conteúdo centralizado
export function Kbd({ children }: { children: string }): ReactElement {
  const icon = KEY_ICONS[children]
  return (
    <Box
      component="kbd"
      aria-label={icon?.label}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        minWidth: 20,
        height: 20,
        px: icon ? 0 : 0.625,
        borderRadius: '5px',
        border: '1px solid rgba(255, 255, 255, 0.28)',
        borderBottomWidth: 2,
        // Um pouco mais escuro que o fundo da dica, para a tecla se destacar
        bgcolor: 'rgba(0, 0, 0, 0.28)',
        color: 'inherit',
        fontFamily: 'inherit',
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1,
        whiteSpace: 'nowrap'
      }}
    >
      {icon ? <Box component={icon.icon} sx={{ fontSize: 12 }} aria-hidden /> : children}
    </Box>
  )
}

// Texto de tooltip com atalho no fim, entre parênteses: "Voltar ao painel (Esc)".
// "ou" separa alternativas ("+ ou ↑") e o espaço separa teclas combinadas ("Ctrl 0").
// Sem atalho no fim, devolve o texto como está.
export function shortcutTip(label: string): ReactNode {
  const match = /^(.*?)\s*\(([^()]+)\)\s*$/.exec(label)
  if (!match) return label
  const [, text, shortcut] = match
  const alternatives = shortcut.split(/\s+ou\s+/)
  return (
    <Box
      component="span"
      sx={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: 0.75 }}
    >
      <span>{text}</span>
      <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
        {alternatives.map((alt, i) => (
          <Box
            component="span"
            key={i}
            sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
          >
            {i > 0 && (
              <Box component="span" sx={{ opacity: 0.7 }}>
                ou
              </Box>
            )}
            {/* Teclas combinadas ficam juntas ("Ctrl" "0") */}
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.25 }}>
              {alt.split(/\s+/).map((key, j) => (
                <Kbd key={j}>{key}</Kbd>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
