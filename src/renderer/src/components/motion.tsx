// Peças de animação reutilizáveis (biblioteca motion).
// Todas respeitam a opção "reduzir movimento" do sistema (MotionConfig em App.tsx).
import { useEffect, useRef, type ReactElement, type ReactNode } from 'react'
import { AnimatePresence, animate, motion, useReducedMotion, type Variants } from 'motion/react'
import Box from '@mui/material/Box'

// Entrada em sequência: o contêiner usa `stagger` e cada filho usa `riseIn`
export const stagger = (delayChildren = 0, staggerChildren = 0.05): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } }
})

export const riseIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } }
}

// ---------- Mergulho no jogo ----------
//
// Troca entre o menu e o jogo (Gramática e Flashcards), como uma câmera que muda de
// foco: ao começar, o menu recua e desfoca, e o jogo chega do primeiro plano, saindo
// do desfoque; ao sair, o contrário. `custom` diz o sentido (1 = entrar, -1 = sair).
const DIVE_SPRING = { type: 'spring', stiffness: 320, damping: 30 } as const
const diveVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    scale: dir > 0 ? 1.08 : 0.94,
    filter: 'blur(10px)'
  }),
  center: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { ...DIVE_SPRING, opacity: { duration: 0.22 }, filter: { duration: 0.28 } },
    // Sem filtro no fim: um filtro ativo prende elementos "fixed" dentro da tela
    transitionEnd: { filter: 'none' }
  },
  exit: (dir: number) => ({
    opacity: 0,
    scale: dir > 0 ? 0.94 : 1.08,
    filter: 'blur(8px)',
    transition: { duration: 0.18, ease: 'easeIn' }
  })
}

export function GameSwitch({
  playing,
  runKey,
  children
}: {
  // Está no jogo (true) ou no menu (false)
  playing: boolean
  // Muda a cada rodada: começar outra rodada também mergulha
  runKey: number
  children: ReactNode
}): ReactElement {
  const dir = playing ? 1 : -1
  return (
    // initial={false}: ao abrir a aba, quem anima é a troca de abas (App.tsx), não esta
    <AnimatePresence mode="wait" initial={false} custom={dir}>
      <motion.div
        key={playing ? `game-${runKey}` : 'menu'}
        custom={dir}
        variants={diveVariants}
        initial="enter"
        animate="center"
        exit="exit"
        style={{ transformOrigin: '50% 30%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// Número que conta até o valor (e anima de novo quando o valor muda)
export function AnimatedNumber({ value }: { value: number }): ReactElement {
  const ref = useRef<HTMLSpanElement | null>(null)
  const previous = useRef(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    const controls = animate(previous.current, value, {
      duration: reduce ? 0 : 0.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v))
      }
    })
    previous.current = value
    return () => controls.stop()
  }, [value, reduce])

  return <span ref={ref}>0</span>
}

// Barra de progresso que se preenche com uma mola ao aparecer e ao mudar
export function ProgressBar({
  value,
  height = 8,
  color = 'var(--mui-palette-primary-main)'
}: {
  value: number
  height?: number
  // Cor do preenchimento (ex.: verde quando está completo)
  color?: string
}): ReactElement {
  return (
    <Box
      role="progressbar"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      sx={{
        height,
        borderRadius: height / 2,
        overflow: 'hidden',
        bgcolor: 'rgba(var(--mui-palette-primary-mainChannel) / 0.15)'
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: 'spring', stiffness: 90, damping: 20, delay: 0.15 }}
        // A cor vem de variável CSS (o motion não anima var()): troca com transição CSS
        style={{
          height: '100%',
          borderRadius: height / 2,
          background: color,
          transition: 'background 400ms'
        }}
      />
    </Box>
  )
}
