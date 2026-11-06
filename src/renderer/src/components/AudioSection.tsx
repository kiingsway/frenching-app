import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode
} from 'react'
import { FiLoader, FiPause, FiPlay } from 'react-icons/fi'
import Box from '@mui/material/Box'
import AudioMenu from '@/components/AudioMenu'
import { getAudioKeyByUrl, getAudioUrlByKey } from '@/lib/audio'
import { isGenerating, useAudioDev } from '@/lib/audio-dev'
import { bundledVoiceFor } from '@/lib/audio-entries'
import { cancelSuggestion, suggestVoiceChange, useAudioSuggestions } from '@/lib/audio-suggestions'
import { AUDIO_VOICES, DEFAULT_VOICE, type VoiceId } from '@/lib/audio-texts'
import { audioTools } from '@/lib/platform'

// Cor primária do tema (variável CSS do MUI) com transparência
const tint = (opacity: number): string =>
  `rgba(var(--mui-palette-primary-mainChannel) / ${opacity})`

// Só um trecho toca por vez: ao dar play, o que estava tocando pausa
let pauseCurrent: (() => void) | null = null

// Trecho de texto com áudio: parado não tem destaque; no hover ganha um fundo leve.
// Clicar (ou Espaço/Enter com foco) toca e pausa; o ícone mostra o estado atual.
// Durante a reprodução, um fundo se preenche da esquerda para a direita junto com o áudio.
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
  // Posição do menu de botão direito (null = fechado)
  const [menuAt, setMenuAt] = useState<{ top: number; left: number } | null>(null)

  // No modo de desenvolvimento, o arquivo pode ser gerado de novo com o app aberto
  // (ex.: troca de voz): a data de geração na URL faz tocar sempre a versão nova
  const dev = useAudioDev()
  const key = getAudioKeyByUrl(src)
  const mtime = key ? dev.mtimes[key] : undefined
  const playSrc = key && mtime ? getAudioUrlByKey(key, mtime) : src
  // No npm run dev a voz vem do voices.json atual; no app compilado, da versão do build
  const voice: VoiceId = !key
    ? DEFAULT_VOICE
    : dev.available
      ? (dev.voices[key] ?? DEFAULT_VOICE)
      : bundledVoiceFor(key)
  const generating = !!key && isGenerating(dev.status, key)
  const canChangeVoice = dev.available && !!key

  // App compilado: sugestão de troca de voz (salva na conta)
  const suggestions = useAudioSuggestions()
  const [sending, setSending] = useState(false)
  const mySuggestion = key ? suggestions.mine.find((s) => s.key === key) : undefined
  const otherVoice: VoiceId = voice === 'denise' ? 'vivienne' : 'denise'
  const suggest =
    key && !dev.available
      ? {
          signedIn: !!suggestions.user,
          noAccess: suggestions.noAccess,
          status: mySuggestion?.status ?? ('none' as const),
          toVoiceLabel: AUDIO_VOICES[mySuggestion?.toVoice ?? otherVoice].label,
          sending,
          onSuggest: () => {
            setSending(true)
            void suggestVoiceChange(key, voice)
              .catch((e) => console.error('Falha ao sugerir a troca de voz', e))
              .finally(() => {
                setSending(false)
                setMenuAt(null)
              })
          },
          onCancel: () => {
            setMenuAt(null)
            void cancelSuggestion(key)
          }
        }
      : undefined

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
    setMenuAt(null)
    const audio = getAudio()
    audio.currentTime = 0
    setProgress(0)
    if (!playing) play(audio)
  }

  const changeVoice = (next: VoiceId): void => {
    setMenuAt(null)
    if (!key || next === voice) return
    if (audioRef.current && playing) {
      pause(audioRef.current)
      pauseCurrent = null
    }
    void audioTools!.setVoice(key, next)
  }

  const onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggle()
    }
  }

  // Botão direito (ou a tecla de menu / Shift+F10, que abre junto ao trecho)
  const onContextMenu = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    if (e.clientX === 0 && e.clientY === 0) {
      const rect = e.currentTarget.getBoundingClientRect()
      setMenuAt({ top: rect.bottom, left: rect.left })
    } else setMenuAt({ top: e.clientY, left: e.clientX })
  }

  const statusClass = [playing && 'playing', generating && 'generating'].filter(Boolean).join(' ')

  return (
    <>
      <Box
        role="button"
        tabIndex={0}
        aria-label={label}
        aria-pressed={playing}
        onClick={toggle}
        onKeyDown={onKeyDown}
        onContextMenu={onContextMenu}
        className={statusClass || undefined}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
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
      <AudioMenu
        at={menuAt}
        onClose={() => setMenuAt(null)}
        onRestart={restart}
        voice={voice}
        onChangeVoice={changeVoice}
        showVoices={canChangeVoice}
        generating={generating}
        busy={!!dev.status?.running}
        suggest={suggest}
      />
    </>
  )
}
