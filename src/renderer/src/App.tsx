import { useRef, useState, type ReactElement } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import type { IconType } from 'react-icons'
import {
  FiBookOpen,
  FiCheckSquare,
  FiEdit3,
  FiHeadphones,
  FiHome,
  FiLayers,
  FiLock,
  FiMic,
  FiSettings,
  FiType
} from 'react-icons/fi'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Dashboard from './pages/Dashboard'
import Flashcards from './pages/Flashcards'
import Grammar from './pages/Grammar'
import Placeholder from './pages/Placeholder'
import Settings from './pages/Settings'
import DocViewer from './pages/DocViewer'
import Changelog from './pages/Changelog'
import AudioManager from './pages/AudioManager'
import AudioSuggestions from './pages/AudioSuggestions'
import AccessRequests from './pages/AccessRequests'
import GrammarReview from './pages/GrammarReview'
import FlashcardList from './pages/FlashcardList'
import SuggestionDots from './components/SuggestionDots'
import TopicPage from './pages/TopicPage'
import { SECTIONS } from './data/topics'

type PageId =
  | 'dashboard'
  | 'flashcards'
  | 'grammar'
  | 'reading'
  | 'listening'
  | 'writing'
  | 'speaking'
  | 'mock'
  | 'settings'
  | 'doc'
  | 'audio'
  | 'audio-suggestions'
  | 'grammar-review'
  | 'flashcard-list'
  | 'access'
  | 'changelog'

const DRAWER_WIDTH = 240

interface NavItem {
  id: PageId
  label: string
  icon: IconType
  // Aba ainda sem conteúdo: aparece no menu, mas bloqueada, com um cadeado
  soon?: boolean
  // Nome curto, para a barra de baixo (janela estreita)
  short?: string
}

const NAV: NavItem[] = [
  { id: 'dashboard', label: 'Painel', icon: FiHome },
  { id: 'grammar', label: 'Gramática', icon: FiType },
  { id: 'flashcards', label: 'Flashcards', icon: FiLayers },
  {
    id: 'reading',
    label: 'Compreensão escrita',
    short: 'Comp. escrita',
    icon: FiBookOpen,
    soon: true
  },
  {
    id: 'listening',
    label: 'Compreensão oral',
    short: 'Comp. oral',
    icon: FiHeadphones,
    soon: true
  },
  { id: 'writing', label: 'Produção escrita', short: 'Prod. escrita', icon: FiEdit3, soon: true },
  { id: 'speaking', label: 'Produção oral', short: 'Prod. oral', icon: FiMic, soon: true },
  { id: 'mock', label: 'Simulados', icon: FiCheckSquare, soon: true }
]

const SETTINGS_NAV: NavItem = {
  id: 'settings',
  label: 'Configurações',
  short: 'Config.',
  icon: FiSettings
}

function renderPage(
  id: PageId,
  openTopic: (topicId: string) => void,
  goTo: (id: PageId) => void,
  docId: string | null,
  openDoc: (docId: string) => void,
  // As listas de questões e de flashcards abrem pela própria aba ou pelas
  // Configurações e voltam para onde vieram
  reviewBack: PageId,
  openReview: (from: PageId) => void,
  openFlashcardList: (from: PageId) => void
): ReactElement {
  switch (id) {
    case 'dashboard':
      return <Dashboard onOpenTopic={openTopic} />
    case 'flashcards':
      return <Flashcards onOpenList={() => openFlashcardList('flashcards')} />
    case 'grammar':
      return <Grammar onOpenTopic={openTopic} onOpenReview={() => openReview('grammar')} />
    case 'settings':
      return (
        <Settings
          onOpenDoc={openDoc}
          onOpenAudio={() => goTo('audio')}
          onOpenAudioSuggestions={() => goTo('audio-suggestions')}
          onOpenGrammarReview={() => openReview('settings')}
          onOpenFlashcardList={() => openFlashcardList('settings')}
          onOpenAccess={() => goTo('access')}
          onOpenChangelog={() => goTo('changelog')}
        />
      )
    case 'changelog':
      return <Changelog onBack={() => goTo('settings')} />
    case 'access':
      return <AccessRequests onBack={() => goTo('settings')} />
    case 'audio-suggestions':
      return <AudioSuggestions onBack={() => goTo('settings')} />
    case 'doc':
      return <DocViewer docId={docId ?? ''} onBack={() => goTo('settings')} />
    case 'audio':
      return <AudioManager onBack={() => goTo('settings')} />
    case 'grammar-review':
      return (
        <GrammarReview
          backLabel={reviewBack === 'grammar' ? 'Gramática' : 'Configurações'}
          onBack={() => goTo(reviewBack)}
        />
      )
    case 'flashcard-list':
      return (
        <FlashcardList
          backLabel={reviewBack === 'flashcards' ? 'Flashcards' : 'Configurações'}
          onBack={() => goTo(reviewBack)}
        />
      )
    default:
      return <Placeholder title={NAV.find((n) => n.id === id)!.label} />
  }
}

// ---------- Direção da transição entre páginas ----------

// Ordem dos tópicos no Painel (para "Anterior/Próximo" dentro das páginas de estudo)
const TOPIC_ORDER = new Map(SECTIONS.flatMap((s) => s.topics).map((t, i) => [t.id, i]))

// Telas que ficam "dentro" de outra aba (abertas por um botão, com "voltar")
const SETTINGS_SUBPAGES: PageId[] = ['doc', 'audio', 'audio-suggestions', 'access', 'changelog']

interface View {
  key: string
  // Posição da aba no menu (Configurações por último)
  tab: number
  // 0 = a aba em si, 1 = uma tela aberta a partir dela
  depth: number
  // Ordem entre telas do mesmo nível (tópicos)
  order: number
}

function viewOf(page: PageId, topicId: string | null, reviewBack: PageId): View {
  const owner: PageId = SETTINGS_SUBPAGES.includes(page)
    ? 'settings'
    : page === 'grammar-review' || page === 'flashcard-list'
      ? reviewBack
      : page
  const index = NAV.findIndex((n) => n.id === owner)
  return {
    key: topicId ? `topic-${topicId}` : page,
    tab: owner === 'settings' || index < 0 ? NAV.length : index,
    depth: topicId || owner !== page ? 1 : 0,
    order: topicId ? (TOPIC_ORDER.get(topicId) ?? 0) : 0
  }
}

// 1 = avançar (a nova entra pela direita), -1 = voltar (entra pela esquerda), 0 = só fade
function directionBetween(from: View, to: View): number {
  if (from.tab !== to.tab) return Math.sign(to.tab - from.tab)
  if (from.depth !== to.depth) return Math.sign(to.depth - from.depth)
  return Math.sign(to.order - from.order)
}

// Como a troca anima:
//  'x'     – entre abas, telas e tópicos vizinhos: desliza para os lados (dir = lado)
//  'open'  – abrir uma página de estudo: ela sobe de baixo, a anterior só esmaece
//  'close' – fechar a página de estudo: ela desce, e a tela de baixo só reaparece
interface Transition {
  kind: 'x' | 'open' | 'close'
  dir: number
}

const isTopic = (v: View): boolean => v.key.startsWith('topic-')

function transitionBetween(from: View, to: View): Transition {
  if (!isTopic(from) && isTopic(to)) return { kind: 'open', dir: 1 }
  if (isTopic(from) && !isTopic(to)) return { kind: 'close', dir: -1 }
  return { kind: 'x', dir: directionBetween(from, to) }
}

const SLIDE = 48
const RISE = 96
const pageVariants = {
  enter: (t: Transition) =>
    t.kind === 'x'
      ? { opacity: 0, x: t.dir * SLIDE, y: 0 }
      : { opacity: 0, x: 0, y: t.kind === 'open' ? RISE : 0 },
  center: { opacity: 1, x: 0, y: 0 },
  exit: (t: Transition) =>
    t.kind === 'x'
      ? { opacity: 0, x: -t.dir * SLIDE, y: 0 }
      : { opacity: 0, x: 0, y: t.kind === 'close' ? RISE : 0 }
}

export default function App(): ReactElement {
  const [page, setPage] = useState<PageId>('dashboard')
  const [topicId, setTopicId] = useState<string | null>(null)
  const [docId, setDocId] = useState<string | null>(null)

  const goTo = (id: PageId): void => {
    setTopicId(null)
    setPage(id)
  }

  const openDoc = (id: string): void => {
    setDocId(id)
    goTo('doc')
  }

  const [reviewBack, setReviewBack] = useState<PageId>('settings')
  const openReview = (from: PageId): void => {
    setReviewBack(from)
    goTo('grammar-review')
  }
  const openFlashcardList = (from: PageId): void => {
    setReviewBack(from)
    goTo('flashcard-list')
  }

  // Janela estreita (ou celular, na versão web): menu vira uma barra embaixo
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))

  const isSelected = (id: PageId): boolean =>
    id === page ||
    (id === 'settings' &&
      SETTINGS_SUBPAGES.includes(page)) ||
    (id === reviewBack && (page === 'grammar-review' || page === 'flashcard-list'))

  // Item da barra de baixo: ícone em cima, nome curto embaixo
  const mobileNavItem = (item: NavItem): ReactElement => {
    const Icon = item.icon
    const selected = isSelected(item.id)
    return (
      <ButtonBase
        key={item.id}
        disabled={item.soon}
        aria-current={selected ? 'page' : undefined}
        aria-label={item.soon ? `${item.label} (em breve)` : item.label}
        onClick={() => goTo(item.id)}
        sx={{
          flexShrink: 0,
          flexDirection: 'column',
          gap: 0.5,
          minWidth: 68,
          px: 1,
          py: 0.75,
          borderRadius: 2,
          color: selected ? 'primary.main' : 'text.secondary',
          bgcolor: selected ? 'rgba(var(--mui-palette-primary-mainChannel) / 0.12)' : undefined,
          transition: 'background-color 150ms, color 150ms',
          '&.Mui-disabled': { opacity: 0.45 }
        }}
      >
        <Box sx={{ position: 'relative', display: 'flex' }}>
          <Icon size={20} />
          {item.id === 'settings' && <SuggestionDots access update />}
          {item.soon && <FiLock size={10} style={{ position: 'absolute', right: -9, top: -3 }} />}
        </Box>
        <Typography
          component="span"
          sx={{
            fontSize: 11,
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            fontWeight: selected ? 600 : 400
          }}
        >
          {item.short ?? item.label}
        </Typography>
      </ButtonBase>
    )
  }

  const navItem = (item: NavItem): ReactElement => {
    const Icon = item.icon
    return (
      <ListItemButton
        key={item.id}
        disabled={item.soon}
        selected={isSelected(item.id)}
        onClick={() => goTo(item.id)}
        sx={{ borderRadius: 2, mb: 0.5 }}
      >
        <ListItemIcon sx={{ minWidth: 36, position: 'relative' }}>
          <Icon size={18} />
          {/* Bolinhas das sugestões de voz, dos pedidos de acesso e da atualização,
              sobre o ícone de Configurações */}
          {item.id === 'settings' && <SuggestionDots access update />}
        </ListItemIcon>
        <ListItemText
          primary={item.label}
          sx={{ '& .MuiListItemText-primary': { fontSize: 14 } }}
        />
        {/* Cadeado discreto: a aba ainda não tem conteúdo */}
        {item.soon && (
          <FiLock size={13} aria-label="em breve" style={{ position: 'absolute', right: 6 }} />
        )}
      </ListItemButton>
    )
  }

  // Direção da troca: guardada ao mudar de tela, para a saída da anterior e a
  // entrada da nova deslizarem para o mesmo lado
  const view = viewOf(page, topicId, reviewBack)
  const lastView = useRef(view)
  const transition = useRef<Transition>({ kind: 'x', dir: 0 })
  if (lastView.current.key !== view.key) {
    transition.current = transitionBetween(lastView.current, view)
    lastView.current = view
  }

  const content = (
    // Troca de tela: a atual sai deslizando para um lado e a nova entra pelo outro.
    // Avançar (aba mais abaixo no menu, abrir uma tela, próximo tópico) entra pela
    // direita; voltar entra pela esquerda. A página de estudo sobe ao abrir e desce
    // ao fechar
    <AnimatePresence mode="wait" initial={false} custom={transition.current}>
      <motion.div
        key={view.key}
        custom={transition.current}
        variants={pageVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 520, damping: 42 },
          y: { type: 'spring', stiffness: 420, damping: 38 },
          opacity: { duration: 0.16 }
        }}
        // A página nova começa do topo (só na entrada, não durante a saída da anterior)
        onAnimationStart={(definition) => {
          if (definition === 'center') document.getElementById('main-content')?.scrollTo({ top: 0 })
        }}
      >
        {topicId ? (
          <TopicPage topicId={topicId} onBack={() => setTopicId(null)} onOpenTopic={setTopicId} />
        ) : (
          renderPage(
            page,
            setTopicId,
            goTo,
            docId,
            openDoc,
            reviewBack,
            openReview,
            openFlashcardList
          )
        )}
      </motion.div>
    </AnimatePresence>
  )

  if (isMobile)
    return (
      <MotionConfig reducedMotion="user">
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Box
            component="main"
            id="main-content"
            sx={{ flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden' }}
          >
            {content}
          </Box>

          {/* Barra de baixo: as abas rolam na horizontal; Configurações fica fixo à direita */}
          <Box
            component="nav"
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              borderTop: 1,
              borderColor: 'divider',
              bgcolor: 'background.paper',
              pb: 'env(safe-area-inset-bottom)'
            }}
          >
            <Box
              // A roda do mouse também rola a barra para os lados
              onWheel={(e) => {
                if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) e.currentTarget.scrollLeft += e.deltaY
              }}
              sx={{
                flex: 1,
                minWidth: 0,
                display: 'flex',
                gap: 0.5,
                px: 1,
                py: 0.75,
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                // Esmaece a borda direita: dá a dica de que há mais abas
                maskImage: 'linear-gradient(to right, #000 calc(100% - 24px), transparent)'
              }}
            >
              {NAV.map(mobileNavItem)}
            </Box>
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                px: 1,
                py: 0.75,
                borderLeft: 1,
                borderColor: 'divider'
              }}
            >
              {mobileNavItem(SETTINGS_NAV)}
            </Box>
          </Box>
        </Box>
      </MotionConfig>
    )

  return (
    // reducedMotion="user": se o Windows pede menos animações, elas ficam desligadas
    <MotionConfig reducedMotion="user">
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Drawer
          variant="permanent"
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box', p: 1.5 }
          }}
        >
          <Typography variant="h6" sx={{ px: 1.5, py: 1.5, fontWeight: 700 }}>
            Frenching
          </Typography>
          <List sx={{ flex: 1 }}>{NAV.map(navItem)}</List>
          <Divider sx={{ my: 1 }} />
          <List>{navItem(SETTINGS_NAV)}</List>
        </Drawer>

        <Box
          component="main"
          id="main-content"
          sx={{ flex: 1, minWidth: 0, overflowY: 'auto', overflowX: 'hidden' }}
        >
          {content}
        </Box>
      </Box>
    </MotionConfig>
  )
}
