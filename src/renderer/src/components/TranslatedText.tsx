import { useEffect, useRef, useState, type KeyboardEvent, type ReactElement, type ReactNode } from 'react'
import { FiLoader, FiPause, FiPlay } from 'react-icons/fi'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useAudioMenu } from '@/components/useAudioMenu'
import { getAudioUrl } from '@/lib/audio'
import { TERM_MARKUP } from '@/lib/audio-texts'

// Francês com a tradução numa dica, na versão em português das páginas de estudo.
// No conteúdo, escreva [[texto em francês|tradução em português]].
// - Sem áudio: o francês tem um sublinhado pontilhado, e a tradução surge ao passar o
//   mouse, ao focar com o teclado ou ao tocar na tela.
// - Com áudio (a página tem 'terms' no campo `audio`): o francês ganha um fundo discreto e
//   toca ao clicar; a dica mostra a tradução e um botão de play. O botão direito (ou tocar
//   e segurar) abre o mesmo menu de recomeçar e de voz dos outros áudios.
// Por enquanto, só as seções "Conhecendo a prova" (prova-*) e "Compreensão oral" (co-*)
// usam isso; as outras páginas ainda têm a tradução entre parênteses.

const tint = (opacity: number): string =>
  `rgba(var(--mui-palette-primary-mainChannel) / ${opacity})`

// Só um termo toca por vez: ao dar play, o que estava tocando para
let stopCurrent: (() => void) | null = null

// A tradução pode ter variantes por região, separadas por "|":
//   [[déjeuner|Québec: café da manhã|França: almoço]]
// Cada variante vira uma linha na dica, com o nome da região em destaque.
// Sem "|", é só o texto da tradução.
function translationNode(pt: string): ReactNode {
  const variants = pt.split('|').map((v) => v.trim())
  if (variants.length < 2) return pt
  return (
    <Box component="span" sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      {variants.map((variant) => {
        const colon = variant.indexOf(':')
        return colon > 0 ? (
          <span key={variant}>
            <b>{variant.slice(0, colon)}:</b>
            {variant.slice(colon + 1)}
          </span>
        ) : (
          <span key={variant}>{variant}</span>
        )
      })}
    </Box>
  )
}

function TermWithAudio({ fr, pt, src }: { fr: string; pt: string; src: string }): ReactElement {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const stop = (): void => {
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
    setPlaying(false)
  }

  const { playSrc, generating, menu, handlers, wasLongPress } = useAudioMenu(src, {
    restart: () => play(),
    stop: () => {
      stop()
      stopCurrent = null
    }
  })

  // Para o áudio ao sair da página ou quando o arquivo muda (troca de voz no npm run dev)
  useEffect(() => {
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
      setPlaying(false)
    }
  }, [playSrc])

  // Toca do início
  const play = (): void => {
    if (!playSrc) return
    stopCurrent?.()
    if (!audioRef.current) {
      const audio = new Audio(playSrc)
      audio.addEventListener('ended', () => setPlaying(false))
      audioRef.current = audio
    }
    audioRef.current.currentTime = 0
    stopCurrent = stop
    void audioRef.current.play()
    setPlaying(true)
  }

  const toggle = (): void => {
    if (playing) {
      stop()
      stopCurrent = null
    } else play()
  }

  // Depois do toque longo, o "clique" que vem ao soltar o dedo não toca o áudio
  const onClick = (): void => {
    if (!wasLongPress()) toggle()
  }

  const onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  const tip = (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <span>{translationNode(pt)}</span>
      <IconButton
        size="small"
        onClick={toggle}
        aria-label={playing ? 'Parar' : 'Ouvir em francês'}
        sx={{
          flexShrink: 0,
          p: 0.5,
          fontSize: 13,
          color: 'inherit',
          bgcolor: 'rgba(255, 255, 255, 0.16)',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.28)' },
          '@keyframes term-spin': { to: { transform: 'rotate(360deg)' } },
          '& .term-spin': { animation: 'term-spin 1s linear infinite' }
        }}
      >
        {generating ? (
          <FiLoader className="term-spin" />
        ) : playing ? (
          <FiPause />
        ) : (
          <FiPlay style={{ marginLeft: '0.1em' }} />
        )}
      </IconButton>
    </Box>
  )

  return (
    <>
      <Tooltip
        title={tip}
        arrow
        describeChild
        enterTouchDelay={0}
        leaveTouchDelay={4000}
        slotProps={{ tooltip: { sx: { fontSize: 13, lineHeight: 1.45, px: 1.25, py: 0.75 } } }}
      >
        {/* Fundo discreto na linha do texto, sem mudar a altura dela
            (só padding lateral; o de cima e de baixo ficaria por cima das outras linhas) */}
        <Box
          component="span"
          lang="fr"
          role="button"
          tabIndex={0}
          aria-pressed={playing}
          onClick={onClick}
          onKeyDown={onKeyDown}
          {...handlers}
          className={playing ? 'playing' : undefined}
          sx={{
            px: '0.25em',
            borderRadius: '0.35em',
            bgcolor: tint(0.07),
            // Termo que quebra de linha: cada pedaço ganha os próprios cantos e padding
            boxDecorationBreak: 'clone',
            WebkitBoxDecorationBreak: 'clone',
            cursor: 'pointer',
            outline: 'none',
            transition: 'background-color 150ms',
            '&:hover': { bgcolor: tint(0.14) },
            '&.playing': { bgcolor: tint(0.22) },
            '&:focus-visible': { boxShadow: `inset 0 0 0 2px ${tint(0.5)}` },
            // Tela de toque: segurar o dedo abre o menu, sem selecionar o texto
            '@media (hover: none)': {
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitTouchCallout: 'none'
            }
          }}
        >
          {fr}
        </Box>
      </Tooltip>
      {/* Fica fora do termo: cliques no menu não chegam ao toggle do áudio */}
      {menu}
    </>
  )
}

function TermWithoutAudio({ fr, pt }: { fr: string; pt: string }): ReactElement {
  return (
    <Tooltip
      title={translationNode(pt)}
      arrow
      describeChild
      enterTouchDelay={0}
      leaveTouchDelay={4000}
      slotProps={{ tooltip: { sx: { fontSize: 13, lineHeight: 1.45, px: 1.25, py: 0.75 } } }}
    >
      <Box
        component="span"
        lang="fr"
        tabIndex={0}
        sx={{
          textDecorationLine: 'underline',
          textDecorationStyle: 'dotted',
          textDecorationColor: 'currentColor',
          textDecorationThickness: '1.5px',
          textUnderlineOffset: '3px',
          cursor: 'help',
          borderRadius: 0.5,
          '&:hover, &:focus-visible': { color: 'primary.main', outline: 'none' }
        }}
      >
        {fr}
      </Box>
    </Tooltip>
  )
}

// Citação numerada [n] (como na Wikipédia): o número da fonte na lista "Fontes" do fim da
// página. Clicar leva até a fonte, sem tocar o áudio do trecho em volta
const CITATION = /\[(\d+)\]/g

export function sourceAnchorId(n: number): string {
  return `source-${n}`
}

function Citation({ n }: { n: number }): ReactElement {
  return (
    <Box
      component="a"
      href={`#${sourceAnchorId(n)}`}
      title={`Fonte ${n}`}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        const target = document.getElementById(sourceAnchorId(n))
        target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        target?.animate(
          [{ backgroundColor: tint(0.25) }, { backgroundColor: 'transparent' }],
          { duration: 1600 }
        )
      }}
      onKeyDown={(e) => e.stopPropagation()}
      sx={{
        fontSize: '0.7em',
        verticalAlign: 'super',
        lineHeight: 0,
        ml: '1px',
        color: 'primary.main',
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' }
      }}
    >
      [{n}]
    </Box>
  )
}

// Troca os [n] de um trecho de texto simples pelas citações; o espaço antes do [n] some
function withCitations(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(CITATION)) {
    const before = text.slice(last, match.index).replace(/\s+$/, '')
    if (before) nodes.push(before)
    nodes.push(<Citation key={`${keyPrefix}-c${match.index}`} n={Number(match[1])} />)
    last = match.index + match[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

// Troca cada [[francês|tradução]] do texto pelo termo com a dica e cada [n] pela citação;
// o resto fica igual. `withAudio`: a página tem áudio dos termos ('terms' no campo `audio`)
export function translatedText(text: string, withAudio = false): ReactNode {
  const hasCitation = /\[\d+\]/.test(text)
  if (!text.includes('[[') && !hasCitation) return text
  const plain = (s: string, key: number): ReactNode[] =>
    hasCitation ? withCitations(s, String(key)) : [s]
  const nodes: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(TERM_MARKUP)) {
    if (match.index > last) nodes.push(...plain(text.slice(last, match.index), last))
    const [, fr, pt] = match
    const src = withAudio ? getAudioUrl(fr) : undefined
    nodes.push(
      src ? (
        <TermWithAudio key={match.index} fr={fr} pt={pt} src={src} />
      ) : (
        <TermWithoutAudio key={match.index} fr={fr} pt={pt} />
      )
    )
    last = match.index + match[0].length
  }
  if (last < text.length) nodes.push(...plain(text.slice(last), last))
  return nodes
}
