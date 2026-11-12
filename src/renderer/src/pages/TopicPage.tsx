import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode
} from 'react'
import {
  FiCheck,
  FiCheckCircle,
  FiChevronLeft,
  FiBookOpen,
  FiCopy,
  FiInbox,
  FiLayout,
  FiChevronRight,
  FiFlag,
  FiMoreHorizontal,
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
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Snackbar from '@mui/material/Snackbar'
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
import ReportPageDialog from '@/components/ReportPageDialog'
import { translatedText } from '@/components/TranslatedText'
import { getAudioUrl } from '@/lib/audio'
import { AudioPageContext } from '@/lib/audio-page'
import { SECTIONS, type Topic } from '@/data/topics'
import { readingMinutes } from '@/lib/reading-time'
import { getTopicContent } from '@/content'
import type { AudioPart, Block, Lang } from '@/content/types'
import { useCompletedTopics } from '@/lib/completed'
import { hasCloudAccess, isAdmin, useAccess } from '@/lib/access'
import { studyPagePrompt } from '@/lib/ai-prompt'
import { inboxToolsAvailable } from '@/lib/platform'
import ContentInboxDialog from '@/components/ContentInboxDialog'
import { shortcutTip } from '@/components/ShortcutTip'
import { onZoomShortcut } from '@/lib/platform'
import {
  READING_FONT,
  READING_SANS_FONT,
  studyStylePref,
  type StudyStyle,
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
    frHasAudio: 'A versão em francês tem áudio',
    report: 'Reportar erro nesta página',
    more: 'Mais opções',
    zoom: 'Zoom',
    style: 'Estilo da página',
    styleCurrent: 'Padrão',
    styleReading: 'Leitura',
    reported: 'Reporte enviado. Obrigado!'
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
    frHasAudio: 'La version française a de l’audio',
    report: 'Signaler une erreur sur cette page',
    more: 'Plus d’options',
    zoom: 'Zoom',
    style: 'Style de la page',
    styleCurrent: 'Standard',
    styleReading: 'Lecture',
    reported: 'Signalement envoyé. Merci !'
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

// ---------- Barra responsiva ----------
//
// A barra nunca quebra em duas linhas. O botão "⋯" fica à esquerda dos controles da
// direita e vai "comendo" os itens que estão à direita dele, um por vez, da esquerda para
// a direita: primeiro o estilo da página, depois o zoom, depois o idioma. O botão de
// reportar mora sempre no menu "⋯". O botão "Concluir" nunca entra no menu: só encolhe
// para o ícone no último caso. Antes disso, anterior/próximo também encolhem.
// Do mais largo ao mais estreito:
//  0 – tudo na barra
//  1 – estilo no menu
//  2 – estilo e zoom no menu
//  3 – estilo, zoom e idioma no menu
//  4 – anterior/próximo mais estreitos
//  5 – anterior/próximo viram só a seta (o título fica na dica)
//  6 – "Concluir" vira só o ícone
interface BarConfig {
  nav: 'wide' | 'narrow' | 'icon'
  doneIcon: boolean
  // O que está no menu "⋯" (além do reportar, que sempre está)
  lang: boolean
  zoom: boolean
  style: boolean
}

const BAR_CONFIGS: BarConfig[] = [
  { nav: 'wide', doneIcon: false, lang: false, zoom: false, style: false },
  { nav: 'wide', doneIcon: false, lang: false, zoom: false, style: true },
  { nav: 'wide', doneIcon: false, lang: false, zoom: true, style: true },
  { nav: 'wide', doneIcon: false, lang: true, zoom: true, style: true },
  { nav: 'narrow', doneIcon: false, lang: true, zoom: true, style: true },
  { nav: 'icon', doneIcon: false, lang: true, zoom: true, style: true },
  { nav: 'icon', doneIcon: true, lang: true, zoom: true, style: true }
]

// Larguras aproximadas de cada controle (px), para escolher a configuração
const W = {
  icon: 36,
  navWide: 180,
  navNarrow: 140,
  zoom: 124,
  lang: 84,
  langAudio: 106,
  done: 130,
  gap: 12
}

function barConfigFor(
  width: number,
  opts: { canReport: boolean; hasAudio: boolean; hasContent: boolean }
): BarConfig {
  const langW = opts.hasAudio ? W.langAudio : W.lang
  const navW = (nav: BarConfig['nav']): number =>
    W.icon + (opts.hasContent ? 2 * (nav === 'wide' ? W.navWide : nav === 'narrow' ? W.navNarrow : W.icon) : 0)
  const fits = (c: BarConfig): boolean => {
    const groups = [navW(c.nav)]
    // O "⋯" aparece sempre que há reportar ou algo que foi para o menu
    if (opts.canReport || c.lang || c.zoom || c.style) groups.push(W.icon)
    if (opts.hasContent) {
      if (!c.style) groups.push(W.icon)
      if (!c.zoom) groups.push(W.zoom)
      if (!c.lang) groups.push(langW)
      groups.push(c.doneIcon ? W.icon : W.done)
    } else if (!c.lang) groups.push(langW)
    return groups.reduce((a, b) => a + b, 0) + W.gap * (groups.length - 1) <= width
  }
  return BAR_CONFIGS.find(fits) ?? BAR_CONFIGS[BAR_CONFIGS.length - 1]
}

// Botão de tópico anterior/próximo: largura fixa, título com reticências
// e um ✓ verde quando aquele tópico já foi concluído. Em "icon", só a seta.
function TopicNavButton({
  direction,
  topic,
  lang,
  done,
  onOpen,
  size
}: {
  direction: 'prev' | 'next'
  topic: Topic | undefined
  lang: Lang
  done: boolean
  onOpen: (id: string) => void
  size: 'wide' | 'narrow' | 'icon'
}): ReactElement {
  const t = LABELS[lang]
  const isPrev = direction === 'prev'
  const label = isPrev ? t.prev : t.next
  const title = topic ? topicTitle(topic, lang) : label
  const tooltip = topic
    ? shortcutTip(`${label}: ${title}${done ? ` · ${t.doneTag}` : ''} (${isPrev ? '←' : '→'})`)
    : ''

  if (size === 'icon')
    return (
      <Tooltip title={tooltip}>
        <span>
          <IconButton
            size="small"
            disabled={!topic}
            onClick={() => topic && onOpen(topic.id)}
            aria-label={topic ? `${label}: ${title}` : label}
            sx={{ width: W.icon, color: done ? 'success.main' : undefined }}
          >
            {isPrev ? <FiChevronLeft size={16} /> : <FiChevronRight size={16} />}
          </IconButton>
        </span>
      </Tooltip>
    )

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
            width: size === 'wide' ? W.navWide : W.navNarrow,
            px: 1.25,
            fontWeight: 400,
            justifyContent: isPrev ? 'flex-start' : 'flex-end',
            '& .MuiButton-startIcon, & .MuiButton-endIcon': {
              color: 'text.secondary'
            }
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
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
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
const toneSoft = (tone: 'success' | 'warning' | 'error', a: number): string =>
  `rgba(var(--mui-palette-${tone}-mainChannel) / ${a})`
// Tipo da caixa -> cor do Alert do MUI e classe "st-*" que a estiliza (veja abaixo)
const CALLOUT_STYLE = {
  tip: { severity: 'success', className: 'st-tip' },
  warning: { severity: 'warning', className: 'st-warn' },
  unverified: { severity: 'error', className: 'st-unverified' }
} as const
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
  // Sem fonte: vermelho, para se destacar dos avisos amarelos e das dicas verdes
  '&& .st-callout.st-unverified': {
    borderColor: 'var(--mui-palette-error-main)',
    bgcolor: toneSoft('error', 0.09),
    '& .MuiAlert-icon': { color: 'var(--mui-palette-error-main)' },
    '& .MuiAlertTitle-root': { color: 'var(--mui-palette-error-main)' }
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
                        <b className="st-label">{parts.label}</b>{' '}
                        {translatedText(parts.rest, terms)}
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
              '& td, & th': {
                fontSize: { xs: 13, sm: 14 },
                px: { xs: 1, sm: 2 }
              }
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
                      sx={{
                        fontWeight: 600,
                        bgcolor: 'action.hover',
                        ...(src && CELL_WITH_AUDIO)
                      }}
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
          severity={CALLOUT_STYLE[block.tone].severity}
          variant="outlined"
          className={`st-callout ${CALLOUT_STYLE[block.tone].className}`}
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

  // Reportar erro na página: janela com o comentário e aviso de enviado
  const [reportOpen, setReportOpen] = useState(false)
  const [reportSent, setReportSent] = useState(false)
  // Só quem pode enviar (conta com acesso à nuvem) vê o botão
  const access = useAccess()
  const canReport = hasCloudAccess(access)

  // Administrador, em página sem conteúdo: copia o pedido pronto para outra IA escrever a página
  const canCopyPrompt = isAdmin(access) && !content
  const [promptCopied, setPromptCopied] = useState<'ok' | 'error' | null>(null)
  // "Colar JSON": grava em content-inbox/. Só no Electron em modo de desenvolvimento
  const [inboxAvailable, setInboxAvailable] = useState(false)
  useEffect(() => {
    if (canCopyPrompt) void inboxToolsAvailable().then(setInboxAvailable)
  }, [canCopyPrompt])
  const canPasteJson = canCopyPrompt && inboxAvailable
  const [inboxOpen, setInboxOpen] = useState(false)
  const [inboxSaved, setInboxSaved] = useState<string | null>(null)
  const copyPrompt = (): void => {
    const text = studyPagePrompt(topic?.title ?? topicId, section?.title ?? '')
    navigator.clipboard.writeText(text).then(
      () => setPromptCopied('ok'),
      () => setPromptCopied('error')
    )
  }

  // Barra responsiva: mede a largura disponível e escolhe o que fica nela e o que vai
  // para o menu "⋯" (veja barConfigFor)
  const barRef = useRef<HTMLDivElement | null>(null)
  const [barWidth, setBarWidth] = useState(820)
  useLayoutEffect(() => {
    const el = barRef.current
    if (!el) return
    const update = (): void => setBarWidth(el.clientWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null)

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
    // Com a janela de reporte ou o menu "⋯" abertos, as teclas são deles (o Esc só fecha)
    if (reportOpen || menuAnchor) return
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

  const hasContent = !!content
  const bar = barConfigFor(barWidth, { canReport: canReport && hasContent, hasAudio, hasContent })
  const navSize = bar.nav
  // O que está no menu "⋯": reportar sempre; o resto, conforme a largura da barra
  const reportInMenu = hasContent && canReport
  const zoomInMenu = hasContent && bar.zoom
  const styleInMenu = hasContent && bar.style
  const langInMenu = bar.lang
  const hasMenu = reportInMenu || zoomInMenu || styleInMenu || langInMenu
  const closeMenu = (): void => setMenuAnchor(null)

  // Idioma da página: BR | FR (com o ícone de áudio no FR). O mesmo seletor vai na barra
  // ou, quando a barra é estreita, no menu "⋯"
  const langSwitch = (
    <ToggleButtonGroup
      exclusive
      size="small"
      color="primary"
      value={lang}
      onChange={(_, value: Lang | null) => value && setLang(value)}
      aria-label="Idioma / Langue"
      sx={{ height: BAR_HEIGHT, flexShrink: 0 }}
    >
      <ToggleButton value="pt" sx={{ px: 1.5, fontWeight: 600 }}>
        BR
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
  )

  // Estilo da página (Padrão / Leitura), o mesmo de Configurações → Aparência
  const styleLabel = (s: StudyStyle): string => (s === 'reading' ? t.styleReading : t.styleCurrent)
  const otherStyle: StudyStyle = reading ? 'current' : 'reading'
  const styleButton = (
    <BarGroup>
      <Tooltip title={`${t.style}: ${styleLabel(reading ? 'reading' : 'current')} → ${styleLabel(otherStyle)}`}>
        <IconButton
          size="small"
          onClick={() => studyStylePref.set(otherStyle)}
          aria-label={`${t.style}: ${styleLabel(otherStyle)}`}
          sx={{ width: 36 }}
        >
          {reading ? <FiBookOpen size={16} /> : <FiLayout size={16} />}
        </IconButton>
      </Tooltip>
    </BarGroup>
  )

  const zoomControls = (
    <BarGroup>
      <Tooltip title={shortcutTip(t.zoomOut)}>
        <span>
          <IconButton
            size="small"
            disabled={zoom <= ZOOM_MIN}
            onClick={() => changeZoom(-ZOOM_STEP)}
            aria-label={t.zoomOut}
            sx={{ width: 34 }}
          >
            <FiZoomOut size={16} />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={shortcutTip(t.zoomReset)}>
        <Button
          size="small"
          color="inherit"
          onClick={() => setZoom(ZOOM_DEFAULT)}
          sx={{ minWidth: 56, fontVariantNumeric: 'tabular-nums' }}
        >
          {zoom}%
        </Button>
      </Tooltip>
      <Tooltip title={shortcutTip(t.zoomIn)}>
        <span>
          <IconButton
            size="small"
            disabled={zoom >= ZOOM_MAX}
            onClick={() => changeZoom(ZOOM_STEP)}
            aria-label={t.zoomIn}
            sx={{ width: 34 }}
          >
            <FiZoomIn size={16} />
          </IconButton>
        </span>
      </Tooltip>
    </BarGroup>
  )

  return (
    // Os áudios da página sabem em que página estão (sugestão de troca de voz)
    <AudioPageContext.Provider value={topicId}>
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
            ref={barRef}
            direction="row"
            spacing={1.5}
            useFlexGap
            sx={{ alignItems: 'center', flexWrap: 'nowrap', maxWidth: 900 }}
          >
            {/* Navegação: painel + anterior/próximo */}
            <BarGroup>
              <Tooltip title={shortcutTip(t.backHint)}>
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
                  size={navSize}
                />
              )}
              {content && (
                <TopicNavButton
                  direction="next"
                  topic={next}
                  lang={lang}
                  done={!!next && isDone(next.id)}
                  onOpen={onOpenTopic}
                  size={navSize}
                />
              )}
            </BarGroup>

            {/* Menu "⋯", leitura (estilo, zoom e língua) e ação principal, à direita */}
            <Stack
              direction="row"
              spacing={1.5}
              useFlexGap
              sx={{
                alignItems: 'center',
                ml: 'auto',
                flexWrap: 'nowrap',
                flexShrink: 0
              }}
            >
              {hasMenu && (
                <BarGroup>
                  <Tooltip title={t.more}>
                    <IconButton
                      size="small"
                      onClick={(e) => setMenuAnchor(e.currentTarget)}
                      aria-label={t.more}
                      aria-haspopup="menu"
                      aria-expanded={!!menuAnchor}
                      sx={{ width: 36 }}
                    >
                      <FiMoreHorizontal size={16} />
                    </IconButton>
                  </Tooltip>
                </BarGroup>
              )}
              {content && !styleInMenu && styleButton}
              {content && !zoomInMenu && zoomControls}
              {!langInMenu && langSwitch}

              {/* Ação principal da página; na barra estreita, só o ícone */}
              {content && (
                <Tooltip
                  title={shortcutTip(
                    bar.doneIcon ? `${done ? t.unmarkDone : t.markDone} · ${t.doneHint}` : t.doneHint
                  )}
                >
                  <Button
                    size="small"
                    variant={done ? 'outlined' : 'contained'}
                    color={done ? 'success' : 'primary'}
                    startIcon={bar.doneIcon ? undefined : done ? <FiCheckCircle /> : <FiCheck />}
                    onClick={() => toggle(topicId)}
                    aria-label={done ? t.unmarkDone : t.markDone}
                    sx={{
                      height: BAR_HEIGHT,
                      flexShrink: 0,
                      ...(bar.doneIcon ? { minWidth: W.icon, px: 0 } : { px: 1.75 })
                    }}
                  >
                    {bar.doneIcon ? (
                      done ? (
                        <FiCheckCircle size={16} />
                      ) : (
                        <FiCheck size={16} />
                      )
                    ) : done ? (
                      t.unmarkDone
                    ) : (
                      t.markDone
                    )}
                  </Button>
                </Tooltip>
              )}
            </Stack>
          </Stack>

          {/* Menu "⋯": o que não coube na barra */}
          <Menu
            anchorEl={menuAnchor}
            open={!!menuAnchor}
            onClose={closeMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            slotProps={{ paper: { sx: { mt: 0.75, minWidth: 220 } } }}
          >
            {styleInMenu && (
              <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" sx={{ flex: 1 }}>
                  {t.style}
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  size="small"
                  color="primary"
                  value={reading ? 'reading' : 'current'}
                  onChange={(_, value: StudyStyle | null) => value && studyStylePref.set(value)}
                  aria-label={t.style}
                  sx={{ height: BAR_HEIGHT }}
                >
                  <ToggleButton value="current" sx={{ px: 1.5, gap: 0.75 }}>
                    <FiLayout size={14} />
                    {t.styleCurrent}
                  </ToggleButton>
                  <ToggleButton value="reading" sx={{ px: 1.5, gap: 0.75 }}>
                    <FiBookOpen size={14} />
                    {t.styleReading}
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            )}
            {styleInMenu && (zoomInMenu || langInMenu) && <Divider />}
            {zoomInMenu && (
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
                // As teclas do zoom não devem mover a seleção do menu
                onKeyDown={(e) => e.stopPropagation()}
              >
                <Typography variant="body2" sx={{ flex: 1 }}>
                  {t.zoom}
                </Typography>
                {zoomControls}
              </Box>
            )}
            {zoomInMenu && langInMenu && <Divider />}
            {langInMenu && (
              <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" sx={{ flex: 1 }}>
                  Idioma / Langue
                </Typography>
                {langSwitch}
              </Box>
            )}
            {reportInMenu && (styleInMenu || zoomInMenu || langInMenu) && <Divider />}
            {reportInMenu && (
              <MenuItem
                onClick={() => {
                  closeMenu()
                  setReportOpen(true)
                }}
              >
                <ListItemIcon>
                  <FiFlag size={16} />
                </ListItemIcon>
                <ListItemText>{t.report}</ListItemText>
              </MenuItem>
            )}
          </Menu>
        </Paper>

        {content && canReport && (
          <ReportPageDialog
            open={reportOpen}
            onClose={() => setReportOpen(false)}
            onSent={() => {
              setReportOpen(false)
              setReportSent(true)
            }}
            topicId={topicId}
            pageTitle={content.pt.title}
            sectionTitle={section?.title ?? ''}
            lang={lang}
          />
        )}
        {canPasteJson && (
          <ContentInboxDialog
            open={inboxOpen}
            onClose={() => setInboxOpen(false)}
            onSaved={(name) => {
              setInboxOpen(false)
              setInboxSaved(name)
            }}
          />
        )}
        <Snackbar
          open={inboxSaved !== null}
          autoHideDuration={5000}
          onClose={() => setInboxSaved(null)}
          message={`JSON salvo em content-inbox/${inboxSaved ?? ''}`}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
        <Snackbar
          open={promptCopied !== null}
          autoHideDuration={3000}
          onClose={() => setPromptCopied(null)}
          message={
            promptCopied === 'ok'
              ? 'Pedido copiado. Cole na outra IA.'
              : 'Não deu para copiar o pedido.'
          }
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
        <Snackbar
          open={reportSent}
          autoHideDuration={3000}
          onClose={() => setReportSent(false)}
          message={t.reported}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />

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
              <>
                <Typography color="text.secondary">{t.notWritten}</Typography>
                {canCopyPrompt && (
                  <Stack direction="row" spacing={1.5} useFlexGap sx={{ mt: 2, flexWrap: 'wrap' }}>
                    <Button variant="outlined" startIcon={<FiCopy />} onClick={copyPrompt}>
                      Copiar pedido para a IA
                    </Button>
                    {canPasteJson && (
                      <Button
                        variant="outlined"
                        startIcon={<FiInbox />}
                        onClick={() => setInboxOpen(true)}
                      >
                        Colar JSON
                      </Button>
                    )}
                  </Stack>
                )}
              </>
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
    </AudioPageContext.Provider>
  )
}
