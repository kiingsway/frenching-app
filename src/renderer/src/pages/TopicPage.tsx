import { useEffect, useRef, useState, type ReactElement, type ReactNode } from 'react'
import {
  FiCheck,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiZoomIn,
  FiZoomOut
} from 'react-icons/fi'
import { RiSpeakLine } from 'react-icons/ri'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import AudioSection, { type AudioSectionVariant } from '@/components/AudioSection'
import Page from '@/components/Page'
import { translatedText } from '@/components/TranslatedText'
import { getAudioUrl } from '@/lib/audio'
import { SECTIONS, type Topic } from '@/data/topics'
import { readingMinutes } from '@/lib/reading-time'
import { getTopicContent } from '@/content'
import type { AudioPart, Block, Lang } from '@/content/types'
import { useCompletedTopics } from '@/lib/completed'
import { onZoomShortcut } from '@/lib/platform'
import {
  READING_FONT,
  READING_SANS_FONT,
  studyStylePref,
  topicLangPref,
  topicZoomPref,
  ZOOM_DEFAULT,
  ZOOM_MAX,
  ZOOM_MIN
} from '@/lib/prefs'
import type { ZoomAction } from '../../../preload'

// Todos os tópicos em sequência, para navegar entre anterior e próximo.
const ALL_TOPICS = SECTIONS.flatMap((s) => s.topics)

// Passo do zoom do conteúdo, em pontos percentuais (limites em lib/prefs.ts)
const ZOOM_STEP = 10

// Textos da própria página, nas duas línguas
const LABELS = {
  pt: {
    back: 'Painel',
    prev: 'Anterior',
    next: 'Próximo',
    sources: 'Fontes',
    markDone: 'Concluir',
    unmarkDone: 'Concluído',
    notWritten: 'Conteúdo deste tópico ainda não foi escrito.',
    zoomIn: 'Aumentar zoom (+ ou ↑)',
    zoomOut: 'Diminuir zoom (− ou ↓)',
    zoomReset: 'Restaurar 100% (Ctrl 0)',
    backHint: 'Voltar ao painel (Esc)',
    doneHint: 'Marcar ou desmarcar como concluído (Enter)',
    doneTag: 'concluído',
    listen: 'Ouvir em francês',
    frHasAudio: 'A versão em francês tem áudio'
  },
  fr: {
    back: 'Tableau de bord',
    prev: 'Précédent',
    next: 'Suivant',
    sources: 'Sources',
    markDone: 'Terminer',
    unmarkDone: 'Terminé',
    notWritten: 'Le contenu de ce sujet n’a pas encore été rédigé.',
    zoomIn: 'Zoom avant (+ ou ↑)',
    zoomOut: 'Zoom arrière (− ou ↓)',
    zoomReset: 'Revenir à 100 % (Ctrl 0)',
    backHint: 'Retour au tableau de bord (Échap)',
    doneHint: 'Marquer ou non comme terminé (Entrée)',
    doneTag: 'terminé',
    listen: 'Écouter',
    frHasAudio: 'La version française a de l’audio'
  }
}

function topicTitle(topic: Topic, lang: Lang): string {
  return getTopicContent(topic.id)?.[lang].title ?? topic.title
}

// Altura comum a todos os controles da barra
const BAR_HEIGHT = 32

// Grupo de botões com a mesma borda do seletor de língua (ToggleButtonGroup),
// com divisórias entre os itens
function BarGroup({ children }: { children: ReactNode }): ReactElement {
  return (
    <Box
      sx={{
        display: 'flex',
        height: BAR_HEIGHT,
        flexShrink: 0,
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'hidden',
        '& > *:not(:last-child)': { borderRight: 1, borderColor: 'divider' },
        '& .MuiButtonBase-root': { height: '100%', borderRadius: 0 }
      }}
    >
      {children}
    </Box>
  )
}

// Botão de tópico anterior/próximo: largura fixa, título com reticências
// e um ✓ verde quando aquele tópico já foi concluído.
function TopicNavButton({
  direction,
  topic,
  lang,
  done,
  onOpen
}: {
  direction: 'prev' | 'next'
  topic: Topic | undefined
  lang: Lang
  done: boolean
  onOpen: (id: string) => void
}): ReactElement {
  const t = LABELS[lang]
  const isPrev = direction === 'prev'
  const label = isPrev ? t.prev : t.next
  const title = topic ? topicTitle(topic, lang) : label
  const tooltip = topic
    ? `${label}: ${title}${done ? ` · ${t.doneTag}` : ''} (${isPrev ? '←' : '→'})`
    : ''

  return (
    <Tooltip title={tooltip}>
      <span>
        <Button
          size="small"
          color="inherit"
          disabled={!topic}
          onClick={() => topic && onOpen(topic.id)}
          startIcon={isPrev ? <FiChevronLeft /> : undefined}
          endIcon={isPrev ? undefined : <FiChevronRight />}
          sx={{
            width: { xs: 140, md: 180 },
            px: 1.25,
            fontWeight: 400,
            justifyContent: isPrev ? 'flex-start' : 'flex-end',
            '& .MuiButton-startIcon, & .MuiButton-endIcon': { color: 'text.secondary' }
          }}
        >
          {done && (
            <Box
              component={FiCheckCircle}
              sx={{ flexShrink: 0, color: 'success.main', mr: 0.75 }}
              aria-label={t.doneTag}
            />
          )}
          <Box
            component="span"
            sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            {title}
          </Box>
        </Button>
      </span>
    </Tooltip>
  )
}

// Estilo Leitura (Configurações → Aparência → Página de estudo), copiado da proposta.
// Os elementos da página levam classes "st-*" e este objeto as estiliza a partir do
// contêiner. O "&&" dá peso para ganhar dos estilos que o MUI põe em cada elemento.
// Cores: acento = cor principal; cinza = text.secondary; linhas = divider
const accentSoft = (a: number): string => `rgba(var(--mui-palette-primary-mainChannel) / ${a})`
const toneSoft = (tone: 'success' | 'warning', a: number): string =>
  `rgba(var(--mui-palette-${tone}-mainChannel) / ${a})`
const muted = 'var(--mui-palette-text-secondary)'
const line = 'var(--mui-palette-divider)'

const readingSx = {
  fontFamily: READING_FONT,
  fontSize: '1.125rem',
  lineHeight: 1.75,
  '&& *': { fontFamily: 'inherit' },
  // Sem serifa: nome da seção, títulos das seções, tabelas, títulos dos avisos, rótulos, fontes
  '&& .MuiTypography-body2, && .MuiTypography-h6, && .MuiTypography-subtitle2, && .MuiAlertTitle-root, && table, && table *, && .st-label':
    { fontFamily: READING_SANS_FONT },
  // Termos em francês em itálico
  '&& [lang="fr"]': { fontStyle: 'italic' },

  '&& .st-eyebrow': {
    fontSize: '.75rem',
    fontWeight: 600,
    letterSpacing: '.09em',
    textTransform: 'uppercase',
    color: 'var(--mui-palette-primary-main)',
    lineHeight: 1.5,
    mb: '.6rem'
  },
  '&& .st-title': {
    fontSize: { xs: '1.7rem', sm: '2.1rem' },
    lineHeight: 1.2,
    fontWeight: 600,
    letterSpacing: '-.01em',
    textWrap: 'balance',
    mt: 0,
    mb: '1.2rem'
  },
  '&& .st-lead': {
    fontSize: { xs: '1.15rem', sm: '1.3rem' },
    lineHeight: 1.6,
    color: muted,
    mb: '1rem'
  },
  '&& .st-meta': {
    fontSize: '.8rem',
    color: muted,
    pb: '1.6rem',
    borderBottom: `1px solid ${line}`,
    mb: '.5rem'
  },
  '&& .st-h2-box': { mt: '2.8rem', mb: '.8rem' },
  '&& .st-h2': { fontSize: '1.2rem', lineHeight: 1.3, fontWeight: 650 },
  '&& .st-p': { fontSize: '1.125rem', lineHeight: 1.75 },
  '&& .st-block': { mb: '1.1rem' },
  '&& .st-ul': { pl: '1.2rem', mt: 0, mb: '1.1rem' },
  '&& .st-li': {
    fontSize: '1.125rem',
    lineHeight: 1.75,
    mb: '.7rem',
    pl: '.3rem',
    '&::marker': { color: 'var(--mui-palette-primary-main)' }
  },
  '&& .st-label': {
    fontSize: '.8rem',
    fontWeight: 600,
    letterSpacing: '.05em',
    textTransform: 'uppercase',
    color: muted,
    mr: '.2rem'
  },

  // Tabela: só linhas horizontais, sem caixa em volta
  '&& .st-table': {
    border: 0,
    bgcolor: 'transparent',
    backgroundImage: 'none',
    my: '1.4rem'
  },
  '&& .st-table th, && .st-table td': { fontSize: '.95rem', lineHeight: 1.5 },
  '&& .st-table th': {
    fontSize: '.72rem',
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: muted,
    bgcolor: 'transparent',
    fontWeight: 600,
    borderBottom: '1.5px solid var(--mui-palette-text-primary)'
  },
  '&& .st-table td': { borderBottom: `1px solid ${line}` },
  '&& .st-table td:first-of-type': { fontWeight: 600 },
  '&& .st-table .st-cell': { p: '.8rem .9rem .8rem 0' },
  '&& .st-table th.st-cell': { p: '0 .9rem .6rem 0' },

  // Dicas e avisos: fundo suave com barra colorida à esquerda
  '&& .st-callout': {
    border: 0,
    borderLeft: '3px solid',
    borderRadius: '0 10px 10px 0',
    px: '1.2rem',
    py: '1rem',
    my: '1.6rem',
    color: 'var(--mui-palette-text-primary)',
    fontSize: '1.05rem',
    lineHeight: 1.75,
    // Ícone do aviso (⚠) ou da dica (✓), alinhado com o título, na cor do tipo
    // A altura do ícone é a da primeira linha (do título, quando há; senão, do texto),
    // para ele ficar centralizado nela. Quando a primeira linha tem áudio, o botão de
    // áudio (variante inline) tem 4px de espaço em cima, e o ícone desce o mesmo tanto.
    '& .MuiAlert-icon': {
      p: 0,
      m: 0,
      mr: '.6rem',
      fontSize: '.95rem',
      opacity: 1,
      color: 'inherit',
      alignItems: 'center',
      height: '1.84rem',
      '&:has(~ .MuiAlert-message .MuiAlertTitle-root)': { height: '1.25rem' },
      '&:has(~ .MuiAlert-message > [role="button"]:first-child)': { mt: '4px' }
    },
    alignItems: 'flex-start',
    '& .MuiAlert-message': { p: 0 },
    '& .MuiAlertTitle-root': {
      fontSize: '.78rem',
      fontWeight: 700,
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      lineHeight: '1.25rem',
      mt: 0,
      mb: '.35rem'
    }
  },
  '&& .st-callout.st-warn': {
    borderColor: 'var(--mui-palette-warning-main)',
    bgcolor: toneSoft('warning', 0.09),
    '& .MuiAlert-icon': { color: 'var(--mui-palette-warning-main)' },
    '& .MuiAlertTitle-root': { color: 'var(--mui-palette-warning-main)' }
  },
  '&& .st-callout.st-tip': {
    borderColor: 'var(--mui-palette-success-main)',
    bgcolor: toneSoft('success', 0.08),
    '& .MuiAlert-icon': { color: 'var(--mui-palette-success-main)' },
    '& .MuiAlertTitle-root': { color: 'var(--mui-palette-success-main)' }
  },

  // Fontes no fim: menores e discretas
  '&& .st-footer': {
    mt: '3.5rem',
    pt: '1.2rem',
    borderTop: `1px solid ${line}`,
    '& .MuiDivider-root': { display: 'none' },
    '& .st-sources-title': {
      fontSize: '.75rem',
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: muted,
      mb: '.5rem'
    },
    '& ul': { pl: '1rem' },
    '& li': { fontSize: '.85rem', lineHeight: 1.6, color: muted, mb: '.25rem' },
    '& a': { color: 'var(--mui-palette-primary-main)', textDecoration: 'none' },
    '& a:hover': { textDecoration: 'underline' }
  }
}

// Nos itens de lista do estilo Leitura, o que vem antes dos dois-pontos ("Transporte :")
// vira um rótulo em maiúsculas pequenas
function listLabel(item: string): { label: string; rest: string } | null {
  // Rótulo curto: até duas palavras (Transporte, Tempo). Frases com dois-pontos não contam
  const m = /^([^:[\]\s]+(?:\s[^:[\]\s]+)?)\s?:\s+([\s\S]+)$/.exec(item)
  return m && m[1].length <= 24 ? { label: m[1], rest: m[2] } : null
}

// Célula com áudio: o trecho de áudio ocupa a célula inteira (veja a variante 'cell')
const CELL_WITH_AUDIO = { p: 0, height: '1px' }

// URL do áudio de um texto daquela parte da página, quando ele tem áudio
type AudioFor = (part: AudioPart, text: string) => string | undefined

// Envolve o conteúdo num trecho de áudio se houver áudio; senão, devolve o conteúdo puro
function withAudio(
  src: string | undefined,
  label: string,
  node: ReactNode,
  variant: AudioSectionVariant = 'block'
): ReactNode {
  return src ? (
    <AudioSection src={src} label={label} variant={variant}>
      {node}
    </AudioSection>
  ) : (
    node
  )
}

// `terms`: os termos [[francês|tradução]] da versão em português têm áudio
function renderBlock(
  block: Block,
  key: number,
  audioFor: AudioFor,
  label: string,
  terms: boolean,
  reading: boolean
): ReactElement {
  switch (block.type) {
    case 'heading':
      return (
        <Box key={key} className="st-h2-box" sx={{ mt: 4, mb: 1.5 }}>
          {withAudio(
            audioFor('headings', block.text),
            label,
            <Typography variant="h6" className="st-h2">
              {translatedText(block.text, terms)}
            </Typography>
          )}
        </Box>
      )
    case 'paragraph':
      return (
        <Box key={key} className="st-block" sx={{ mb: 2 }}>
          {withAudio(
            audioFor('paragraphs', block.text),
            label,
            <Typography className="st-p">{translatedText(block.text, terms)}</Typography>
          )}
        </Box>
      )
    case 'list':
      return (
        <Box key={key} component="ul" className="st-ul" sx={{ pl: 3, my: 1, '& li': { mb: 0.75 } }}>
          {block.items.map((item) => {
            const parts = reading ? listLabel(item) : null
            return (
              <Typography key={item} component="li" className="st-li">
                {withAudio(
                  audioFor('lists', item),
                  label,
                  <Box component="span" sx={{ display: 'block' }}>
                    {parts ? (
                      <>
                        <b className="st-label">{parts.label}</b> {translatedText(parts.rest, terms)}
                      </>
                    ) : (
                      translatedText(item, terms)
                    )}
                  </Box>,
                  'inline'
                )}
              </Typography>
            )
          })}
        </Box>
      )
    case 'table':
      return (
        <TableContainer
          key={key}
          component={Paper}
          variant="outlined"
          className="st-table"
          sx={{ my: 2, overflowX: 'visible' }}
        >
          <Table
            size="small"
            sx={{
              tableLayout: 'fixed',
              // Telas estreitas: letra e espaçamento menores, para as palavras caberem inteiras
              '& td, & th': { fontSize: { xs: 13, sm: 14 }, px: { xs: 1, sm: 2 } }
            }}
          >
            <TableHead>
              <TableRow>
                {block.headers.map((h, i) => {
                  const src = audioFor('tables', h)
                  return (
                    <TableCell
                      key={i}
                      className={src ? undefined : 'st-cell'}
                      sx={{ fontWeight: 600, bgcolor: 'action.hover', ...(src && CELL_WITH_AUDIO) }}
                    >
                      {withAudio(src, label, translatedText(h, terms), 'cell')}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {block.rows.map((row, r) => (
                <TableRow key={r}>
                  {row.map((cell, c) => {
                    const src = audioFor('tables', cell)
                    return (
                      <TableCell
                        key={c}
                        className={src ? undefined : 'st-cell'}
                        sx={{
                          verticalAlign: 'top',
                          ...(c === 0 && { fontWeight: 500 }),
                          ...(src && CELL_WITH_AUDIO)
                        }}
                      >
                        {withAudio(src, label, translatedText(cell, terms), 'cell')}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
    case 'callout':
      return (
        <Alert
          key={key}
          severity={block.tone === 'tip' ? 'success' : 'warning'}
          variant="outlined"
          className={`st-callout ${block.tone === 'tip' ? 'st-tip' : 'st-warn'}`}
          sx={{ my: 2, '& .MuiAlert-message': { flex: 1 } }}
        >
          {/* Título e texto da caixa têm áudios separados */}
          {block.title &&
            withAudio(
              audioFor('callouts', block.title),
              label,
              <AlertTitle sx={{ mb: 0.5 }}>{translatedText(block.title, terms)}</AlertTitle>,
              'inline'
            )}
          {withAudio(
            audioFor('callouts', block.text),
            label,
            <Box component="span" sx={{ display: 'block' }}>
              {translatedText(block.text, terms)}
            </Box>,
            'inline'
          )}
        </Alert>
      )
  }
}

export default function TopicPage({
  topicId,
  onBack,
  onOpenTopic
}: {
  topicId: string
  onBack: () => void
  onOpenTopic: (id: string) => void
}): ReactElement {
  const { isDone, toggle } = useCompletedTopics()
  // Idioma e zoom são preferências salvas (e sincronizadas com a conta, se houver login)
  const lang: Lang = topicLangPref.use()
  const setLang = topicLangPref.set
  const reading = studyStylePref.use() === 'reading'
  const zoom = topicZoomPref.use()
  const setZoom = topicZoomPref.set

  const changeZoom = (delta: number): void =>
    setZoom(Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, topicZoomPref.get() + delta)))

  const t = LABELS[lang]
  const section = SECTIONS.find((s) => s.topics.some((topic) => topic.id === topicId))
  const topic = section?.topics.find((topic) => topic.id === topicId)
  const content = getTopicContent(topicId)
  const localized = content?.[lang]
  const done = isDone(topicId)

  // Áudio só existe na versão em francês
  const hasAudio = !!content?.audio?.length
  const audioFor: AudioFor = (part, text) =>
    lang === 'fr' && content?.audio?.includes(part) ? getAudioUrl(text) : undefined
  const titleAudio = content && audioFor('title', content.fr.title)
  const summaryAudio = content && audioFor('summary', content.fr.summary)
  // Termos em francês da versão em português ([[francês|tradução]]) com áudio
  const termsAudio = lang === 'pt' && !!content?.audio?.includes('terms')

  // Anterior/Próximo só levam a tópicos com conteúdo; páginas sem conteúdo não navegam
  const index = ALL_TOPICS.findIndex((topic) => topic.id === topicId)
  const isWritten = (topic: Topic): boolean => !!getTopicContent(topic.id)
  const prev = content && index >= 0 ? ALL_TOPICS.slice(0, index).findLast(isWritten) : undefined
  const next = content && index >= 0 ? ALL_TOPICS.slice(index + 1).find(isWritten) : undefined

  const applyZoom = (action: ZoomAction): void => {
    if (action === 'reset') setZoom(ZOOM_DEFAULT)
    else changeZoom(action === 'in' ? ZOOM_STEP : -ZOOM_STEP)
  }

  // Atalhos de teclado da página:
  //   Esc volta ao painel · ← → tópico anterior/próximo · Enter marca como concluído
  //   + − ↑ ↓ mudam o zoom · Ctrl +/−/0 também (via processo principal)
  // Zoom, Enter e setas só valem em páginas com conteúdo, como os botões do header.
  const handleKey = (e: KeyboardEvent): void => {
    if (e.ctrlKey || e.metaKey || e.altKey) return
    const target = e.target as HTMLElement
    if (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return

    if (e.key === 'Escape') {
      e.preventDefault()
      onBack()
      return
    }
    if (!content) return

    // e.code cobre o teclado numérico e layouts em que e.key varia
    const zoomIn = e.key === '+' || e.key === '=' || e.code === 'NumpadAdd' || e.code === 'Equal'
    const zoomOut = e.key === '-' || e.code === 'NumpadSubtract' || e.code === 'Minus'

    if (zoomIn || e.key === 'ArrowUp') {
      e.preventDefault()
      applyZoom('in')
    } else if (zoomOut || e.key === 'ArrowDown') {
      e.preventDefault()
      applyZoom('out')
    } else if (e.key === 'ArrowLeft' && prev) {
      e.preventDefault()
      onOpenTopic(prev.id)
    } else if (e.key === 'ArrowRight' && next) {
      e.preventDefault()
      onOpenTopic(next.id)
    } else if (
      e.key === 'Enter' &&
      !['BUTTON', 'A'].includes(target.tagName) &&
      target.getAttribute('role') !== 'button'
    ) {
      // Com um botão (ou trecho de áudio) em foco, o Enter aciona o próprio elemento
      e.preventDefault()
      toggle(topicId)
    }
  }

  // O listener é registrado uma vez; a ref sempre aponta para a versão atual do handler
  const handleKeyRef = useRef(handleKey)
  handleKeyRef.current = handleKey
  const applyZoomRef = useRef(applyZoom)
  applyZoomRef.current = applyZoom

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent): void => handleKeyRef.current(e)
    window.addEventListener('keydown', onKeyDown)
    // Ctrl +/−/0: no Electron chegam pelo processo principal; na web, pelo teclado da
    // página (veja lib/platform.ts). Sem conteúdo, o atalho fica com o padrão
    const unsubscribe = content
      ? onZoomShortcut((action) => applyZoomRef.current(action))
      : undefined

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      unsubscribe?.()
    }
  }, [content])

  // Ao trocar de tópico, volta ao topo da página
  useEffect(() => {
    document.getElementById('main-content')?.scrollTo(0, 0)
  }, [topicId])

  // Barra de progresso de leitura: uma linha fina na base da barra fixa, que enche com o
  // scroll da página (a área que rola é o #main-content). Atualiza direto no elemento,
  // sem renderizar a página a cada rolagem
  const progressRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const main = document.getElementById('main-content')
    if (!main) return
    const update = (): void => {
      const max = main.scrollHeight - main.clientHeight
      const pct = max > 0 ? Math.min(100, Math.max(0, (main.scrollTop / max) * 100)) : 0
      if (progressRef.current) progressRef.current.style.width = `${pct}%`
    }
    update()
    main.addEventListener('scroll', update, { passive: true })
    // O tamanho do texto muda com zoom, idioma, estilo e tópico
    const observer = new ResizeObserver(update)
    observer.observe(main)
    if (main.firstElementChild) observer.observe(main.firstElementChild)
    return () => {
      main.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [topicId, lang, zoom, reading, content])

  return (
    <Box component="article" lang={lang}>
      {/* Barra fixa no topo: continua visível durante o scroll */}
      <Paper
        square
        elevation={0}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          px: { xs: 2, sm: 3, md: 5 },
          py: 1.5,
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        {/* Progresso de leitura: acompanha o scroll, na cor principal do tema */}
        <Box
          ref={progressRef}
          aria-hidden
          sx={{
            position: 'absolute',
            left: 0,
            bottom: -1,
            height: 2,
            width: 0,
            bgcolor: 'primary.main',
            pointerEvents: 'none'
          }}
        />
        <Stack
          direction="row"
          spacing={1.5}
          useFlexGap
          sx={{ alignItems: 'center', flexWrap: 'wrap', maxWidth: 820 }}
        >
          {/* Navegação: painel + anterior/próximo */}
          <BarGroup>
            <Tooltip title={t.backHint}>
              <IconButton size="small" onClick={onBack} aria-label={t.back} sx={{ width: 36 }}>
                <FiX size={16} />
              </IconButton>
            </Tooltip>
            {content && (
              <TopicNavButton
                direction="prev"
                topic={prev}
                lang={lang}
                done={!!prev && isDone(prev.id)}
                onOpen={onOpenTopic}
              />
            )}
            {content && (
              <TopicNavButton
                direction="next"
                topic={next}
                lang={lang}
                done={!!next && isDone(next.id)}
                onOpen={onOpenTopic}
              />
            )}
          </BarGroup>

          {/* Leitura (zoom e língua) e ação principal; ml auto mantém o grupo à direita,
              inclusive quando a janela é estreita e ele quebra para a linha de baixo */}
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1.5 }}
            useFlexGap
            // Em telas estreitas o botão "Terminei" desce para a linha de baixo em vez de sair da tela
            sx={{ alignItems: 'center', ml: 'auto', flexWrap: 'wrap', justifyContent: 'flex-end' }}
          >
            {content && (
              <BarGroup>
                <Tooltip title={t.zoomOut}>
                  <span>
                    <IconButton
                      size="small"
                      disabled={zoom <= ZOOM_MIN}
                      onClick={() => changeZoom(-ZOOM_STEP)}
                      sx={{ width: 34 }}
                    >
                      <FiZoomOut size={16} />
                    </IconButton>
                  </span>
                </Tooltip>
                <Tooltip title={t.zoomReset}>
                  <Button
                    size="small"
                    color="inherit"
                    onClick={() => setZoom(ZOOM_DEFAULT)}
                    sx={{ minWidth: 56, fontVariantNumeric: 'tabular-nums' }}
                  >
                    {zoom}%
                  </Button>
                </Tooltip>
                <Tooltip title={t.zoomIn}>
                  <span>
                    <IconButton
                      size="small"
                      disabled={zoom >= ZOOM_MAX}
                      onClick={() => changeZoom(ZOOM_STEP)}
                      sx={{ width: 34 }}
                    >
                      <FiZoomIn size={16} />
                    </IconButton>
                  </span>
                </Tooltip>
              </BarGroup>
            )}
            <ToggleButtonGroup
              exclusive
              size="small"
              color="primary"
              value={lang}
              onChange={(_, value: Lang | null) => value && setLang(value)}
              aria-label="Idioma / Langue"
              sx={{ height: BAR_HEIGHT }}
            >
              <ToggleButton value="pt" sx={{ px: 1.5, fontWeight: 600 }}>
                PT
              </ToggleButton>
              <ToggleButton value="fr" sx={{ px: 1.5, fontWeight: 600, gap: 0.75 }}>
                FR
                {hasAudio && (
                  <Tooltip title={t.frHasAudio}>
                    <Box component="span" sx={{ display: 'inline-flex' }}>
                      <RiSpeakLine size={14} />
                    </Box>
                  </Tooltip>
                )}
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Ação principal da página */}
            {content && (
              <Tooltip title={t.doneHint}>
                <Button
                  size="small"
                  variant={done ? 'outlined' : 'contained'}
                  color={done ? 'success' : 'primary'}
                  startIcon={done ? <FiCheckCircle /> : <FiCheck />}
                  onClick={() => toggle(topicId)}
                  sx={{ height: BAR_HEIGHT, px: 1.75, flexShrink: 0 }}
                >
                  {done ? t.unmarkDone : t.markDone}
                </Button>
              </Tooltip>
            )}
          </Stack>
        </Stack>
      </Paper>

      {/* Zoom só no conteúdo; textos longos quebram em vez de gerar scroll horizontal */}
      <Box
        sx={{
          zoom: zoom / 100,
          overflowWrap: 'anywhere',
          hyphens: 'auto',
          ...(reading && readingSx)
        }}
      >
        <Page narrow={reading}>
          {section && (
            <Typography variant="body2" color="text.secondary" className="st-eyebrow">
              {section.title}
            </Typography>
          )}
          {titleAudio ? (
            <Box sx={{ mt: 0.5, mb: 2 }}>
              <AudioSection src={titleAudio} label={t.listen}>
                <Typography variant="h5" className="st-title">
                  {localized?.title}
                </Typography>
              </AudioSection>
            </Box>
          ) : (
            <Typography variant="h5" className="st-title" sx={{ mt: 0.5, mb: 2 }}>
              {localized?.title ?? topic?.title ?? 'Tópico'}
            </Typography>
          )}

          {localized ? (
            <>
              {summaryAudio ? (
                <Box sx={{ mb: 2 }}>
                  <AudioSection src={summaryAudio} label={t.listen}>
                    <Typography className="st-lead" sx={{ fontSize: 17 }}>
                      {localized.summary}
                    </Typography>
                  </AudioSection>
                </Box>
              ) : (
                <Typography className="st-lead" sx={{ fontSize: 17, mb: 2 }}>
                  {translatedText(localized.summary, termsAudio)}
                </Typography>
              )}
              {/* Tempo de leitura calculado do texto */}
              <Typography
                variant="body2"
                color="text.secondary"
                className="st-meta"
                sx={{ mb: 2 }}
              >
                {lang === 'fr'
                  ? `Lecture de ${readingMinutes(localized)} min`
                  : `Leitura de ${readingMinutes(localized)} min`}
              </Typography>
              {localized.blocks.map((block, i) =>
                renderBlock(block, i, audioFor, t.listen, termsAudio, reading)
              )}
            </>
          ) : (
            <Typography color="text.secondary">{t.notWritten}</Typography>
          )}

          {content && content.sources.length > 0 && (
            <Box component="footer" className="st-footer" sx={{ mt: 5 }}>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="subtitle2" className="st-sources-title" gutterBottom>
                {t.sources}
              </Typography>
              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                {content.sources.map((source) => (
                  <Typography key={source.url} component="li" variant="body2">
                    <Link href={source.url} target="_blank" rel="noreferrer">
                      {source.title}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
        </Page>
      </Box>
    </Box>
  )
}
