import { useState, type ReactElement } from 'react'
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
import AudioManager from './pages/AudioManager'
import AudioSuggestions from './pages/AudioSuggestions'
import AccessRequests from './pages/AccessRequests'
import GrammarReview from './pages/GrammarReview'
import SuggestionDots from './components/SuggestionDots'
import TopicPage from './pages/TopicPage'

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
  | 'access'

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
  { id: 'flashcards', label: 'Flashcards', icon: FiLayers, soon: true },
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
  // A lista de questões abre pela aba Gramática ou pelas Configurações e volta para onde veio
  reviewBack: PageId,
  openReview: (from: PageId) => void
): ReactElement {
  switch (id) {
    case 'dashboard':
      return <Dashboard onOpenTopic={openTopic} />
    case 'flashcards':
      return <Flashcards />
    case 'grammar':
      return <Grammar onOpenTopic={openTopic} onOpenReview={() => openReview('grammar')} />
    case 'settings':
      return (
        <Settings
          onOpenDoc={openDoc}
          onOpenAudio={() => goTo('audio')}
          onOpenAudioSuggestions={() => goTo('audio-suggestions')}
          onOpenGrammarReview={() => openReview('settings')}
          onOpenAccess={() => goTo('access')}
        />
      )
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
    default:
      return <Placeholder title={NAV.find((n) => n.id === id)!.label} />
  }
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

  // Janela estreita (ou celular, na versão web): menu vira uma barra embaixo
  const isMobile = useMediaQuery(useTheme().breakpoints.down('md'))

  const isSelected = (id: PageId): boolean =>
    id === page ||
    (id === 'settings' &&
      (page === 'doc' || page === 'audio' || page === 'audio-suggestions' || page === 'access')) ||
    (id === reviewBack && page === 'grammar-review')

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
          {item.id === 'settings' && <SuggestionDots />}
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
          {/* Bolinhas das sugestões de troca de voz, sobre o ícone de Configurações */}
          {item.id === 'settings' && <SuggestionDots />}
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

  const content = (
    // Troca de aba: a página atual some e a nova aparece com um fade rápido
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={topicId ? `topic-${topicId}` : page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.12 }}
        // A página nova começa do topo (só na entrada, não durante a saída da anterior)
        onAnimationStart={(target) => {
          if ((target as { opacity?: number }).opacity === 1)
            document.getElementById('main-content')?.scrollTo({ top: 0 })
        }}
      >
        {topicId ? (
          <TopicPage topicId={topicId} onBack={() => setTopicId(null)} onOpenTopic={setTopicId} />
        ) : (
          renderPage(page, setTopicId, goTo, docId, openDoc, reviewBack, openReview)
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
