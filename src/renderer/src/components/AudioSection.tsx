import { useEffect, useRef, useState, type KeyboardEvent, type ReactElement, type ReactNode } from 'react'
import { FiLoader, FiPause, FiPlay } from 'react-icons/fi'
import Box from '@mui/material/Box'
import { useAudioMenu } from '@/components/useAudioMenu'

// Cor primária do tema (variável CSS do MUI) com transparência
const tint = (opacity: number): string =>
  `rgba(var(--mui-palette-primary-mainChannel) / ${opacity})`

// Só um trecho toca por vez: ao dar play, o que estava tocando pausa
let pauseCurrent: (() => void) | null = null

// Trecho de texto com áudio: parado não tem destaque; no hover ganha um fundo leve.
// Clicar (ou Espaço/Enter com foco) toca e pausa; o ícone mostra o estado atual.
// Durante a reprodução, um fundo se preenche da esquerda para a direita junto com o áudio.
// O botão direito (ou tocar e segurar) abre o menu de recomeçar e de voz (useAudioMenu).
// Variantes de tamanho:
//   block  – o destaque avança um pouco para fora do texto (títulos, parágrafos)
//   inline – o destaque fica dentro do bloco (itens de lista, caixas de dica/aviso)
//   cell   – preenche a célula inteira da tabela, sem cantos arredondados;
//            a célula precisa de padding 0 e height 1px para o height 100% funcionar
export type AudioSectionVariant = 'block' | 'inline' | 'cell'

const VARIANTS = {
  block: {
    px: 1.5,
    py: 1,
    pr: 5,
    mx: -1.5,
    iconSize: 22,
    iconTop: 8,
    iconRight: 8,
    framed: true
  },
  inline: {
    px: 1,
    py: 0.5,
    pr: 5,
    mx: 0,
    iconSize: 22,
    iconTop: 5,
    iconRight: 6,
    framed: true
  },
  cell: {
    // Menos espaço lateral em telas estreitas (tabelas apertadas)
    px: { xs: 1, sm: 2 },
    py: 0.5,
    pr: { xs: 2.5, sm: 3 },
    mx: 0,
    iconSize: 16,
    iconTop: 4,
    iconRight: 4,
    framed: false
  }
}

export default function AudioSection({
  src,
  label,
  variant = 'block',
  children
}: {
  src: string
  label: string
  variant?: AudioSectionVariant
  children: ReactNode
}): ReactElement {
  const v = VARIANTS[variant]
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const [playing, setPlaying] = useState(false)

  const { playSrc, generating, menu, handlers, wasLongPress } = useAudioMenu(src, {
    restart: () => restart(),
    stop: () => {
      if (audioRef.current && playing) {
        pause(audioRef.current)
        pauseCurrent = null
      }
    }
  })

  // A largura do preenchimento é atualizada direto no elemento, a cada quadro,
  // para acompanhar o áudio de forma suave sem re-renderizar o componente
  const setProgress = (fraction: number): void => {
    if (progressRef.current) progressRef.current.style.width = `${fraction * 100}%`
  }

  const stopTracking = (): void => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    frameRef.current = null
  }

  const startTracking = (): void => {
    stopTracking()
    const tick = (): void => {
      const audio = audioRef.current
      if (audio && audio.duration) setProgress(audio.currentTime / audio.duration)
      frameRef.current = requestAnimationFrame(tick)
    }
    frameRef.current = requestAnimationFrame(tick)
  }

  // Para o áudio ao sair da página ou trocar de texto
  useEffect(() => {
    return () => {
      stopTracking()
      audioRef.current?.pause()
      audioRef.current = null
      setProgress(0)
      setPlaying(false)
    }
  }, [playSrc])

  const pause = (audio: HTMLAudioElement): void => {
    audio.pause()
    stopTracking()
    setPlaying(false)
  }

  const getAudio = (): HTMLAudioElement => {
    if (!audioRef.current) {
      const audio = new Audio(playSrc)
      audio.addEventListener('ended', () => {
        stopTracking()
        setProgress(0)
        setPlaying(false)
      })
      audioRef.current = audio
    }
    return audioRef.current
  }

  const play = (audio: HTMLAudioElement): void => {
    pauseCurrent?.()
    pauseCurrent = () => pause(audio)
    void audio.play()
    startTracking()
    setPlaying(true)
  }

  const toggle = (): void => {
    const audio = getAudio()
    if (playing) {
      pause(audio)
      pauseCurrent = null
    } else play(audio)
  }

  // Volta ao início e toca (mesmo se estava pausado no meio)
  const restart = (): void => {
    const audio = getAudio()
    audio.currentTime = 0
    setProgress(0)
    if (!playing) play(audio)
  }

  const onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggle()
    }
  }

  // Depois do toque longo, o "clique" que vem ao soltar o dedo não toca o áudio
  const onClick = (): void => {
    if (!wasLongPress()) toggle()
  }

  const statusClass = [playing && 'playing', generating && 'generating'].filter(Boolean).join(' ')

  return (
    <>
      <Box
        role="button"
        tabIndex={0}
        aria-label={label}
        aria-pressed={playing}
        onClick={onClick}
        onKeyDown={onKeyDown}
        {...handlers}
        className={statusClass || undefined}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          // Tela de toque: segurar o dedo abre o menu, sem selecionar o texto
          // nem abrir o menu do sistema (no mouse, o texto continua selecionável)
          '@media (hover: none)': {
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none'
          },
          // Discreto: parado, parece texto normal (sem borda nem fundo).
          // No hover aparece só um fundo leve e o ícone; tocando, o preenchimento do progresso.
          borderRadius: v.framed ? 1 : 0,
          height: v.framed ? undefined : '100%',
          boxSizing: 'border-box',
          px: v.px,
          py: v.py,
          pr: v.pr,
          mx: v.mx,
          transition: 'background-color 150ms',
          outline: 'none',
          '& .audio-icon': { opacity: 0, transition: 'opacity 150ms' },
          '&:hover, &.playing': { bgcolor: tint(0.06) },
          '&:focus-visible': { boxShadow: `inset 0 0 0 2px ${tint(0.5)}` },
          '&:hover .audio-icon, &:focus-visible .audio-icon, &.playing .audio-icon, &.generating .audio-icon':
            { opacity: 1 },
          '@keyframes audio-spin': { to: { transform: 'rotate(360deg)' } },
          '& .audio-spin': { animation: 'audio-spin 1s linear infinite' }
        }}
      >
        {/* Preenchimento do progresso, atrás do texto */}
        <Box
          ref={progressRef}
          aria-hidden
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 0,
            bgcolor: tint(0.22),
            pointerEvents: 'none'
          }}
        />
        <Box sx={{ position: 'relative' }}>{children}</Box>
        <Box
          className="audio-icon"
          sx={{
            position: 'absolute',
            top: v.iconTop,
            right: v.iconRight,
            width: v.iconSize,
            height: v.iconSize,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'primary.main',
            color: 'primary.contrastText'
          }}
        >
          {generating ? (
            <FiLoader size={v.iconSize / 2} className="audio-spin" />
          ) : playing ? (
            <FiPause size={v.iconSize / 2} />
          ) : (
            <FiPlay size={v.iconSize / 2} style={{ marginLeft: v.iconSize / 14 }} />
          )}
        </Box>
      </Box>

      {/* Fica fora do trecho: cliques no menu não chegam ao toggle do áudio */}
      {menu}
    </>
  )
}
