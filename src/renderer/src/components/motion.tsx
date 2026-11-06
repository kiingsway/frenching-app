// Peças de animação reutilizáveis (biblioteca motion).
// Todas respeitam a opção "reduzir movimento" do sistema (MotionConfig em App.tsx).
import { useEffect, useRef, type ReactElement } from 'react'
import { animate, motion, useReducedMotion, type Variants } from 'motion/react'
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
