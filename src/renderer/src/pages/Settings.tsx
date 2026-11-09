import { useEffect, useRef, useState, type ReactElement, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaWindows } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import {
  FiCheck,
  FiCheckSquare,
  FiCloud,
  FiCloudOff,
  FiFileText,
  FiFlag,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiLogOut,
  FiMonitor,
  FiMoon,
  FiPlus,
  FiRefreshCw,
  FiSun,
  FiUserCheck,
  FiVolume2
} from 'react-icons/fi'
import type { IconType } from 'react-icons'
import Alert from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Skeleton from '@mui/material/Skeleton'
import Slider from '@mui/material/Slider'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import Page from '@/components/Page'
import SuggestionDots, { UpdateButtonDot } from '@/components/SuggestionDots'
import { riseIn, stagger } from '@/components/motion'
import { ACCENT_PRESETS, accentColors, isCustomAccent, setAccent, useAccent } from '@/lib/accent'
import { hasCloudAccess, isAdmin, useAccess } from '@/lib/access'
import { useAccessRequests, usePendingAccessCount } from '@/lib/access-admin'
import { cancelSignIn, signInWithGoogle, signOut, useAccount } from '@/lib/account'
import { APP_NAME, APP_TAGLINE, APP_VERSION, GITHUB_URL } from '@/lib/about'
import { useAudioSuggestions } from '@/lib/audio-suggestions'
import { checkForDesktopUpdate, installDesktopUpdate, useDesktopUpdate } from '@/lib/desktop-update'
import type { UpdaterStatus } from '@/lib/updater-types'
import {
  canCancelSignIn,
  googleAuthConfigured,
  isElectron,
  openExternal,
  signInWaitingLabel
} from '@/lib/platform'
import {
  BACKGROUND_PRESETS,
  backgroundPref,
  backgroundTones,
  isCustomBackground
} from '@/lib/background'
import { useSyncStatus } from '@/lib/cloud-sync'
import { themeModePref } from '@/lib/prefs'
import { NEW_PER_DAY_MAX, newPerDayPref } from '@/lib/flashcard-progress'
import { PROJECT_DOCS } from '@/lib/docs'

type Mode = 'light' | 'dark' | 'system'

const THEME_OPTIONS: { value: Mode; label: string; icon: IconType }[] = [
  { value: 'light', label: 'Claro', icon: FiSun },
  { value: 'dark', label: 'Escuro', icon: FiMoon },
  { value: 'system', label: 'Sistema', icon: FiMonitor }
]

// Bolinha de cor: cresce no hover, mostra ✓ quando escolhida
const SWATCH_SIZE = 30

function swatchSx(color: string, selected: boolean): object {
  return {
    width: SWATCH_SIZE,
    height: SWATCH_SIZE,
    borderRadius: '50%',
    border: 'none',
    p: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: color,
    color: '#fff',
    // Anel em volta da escolhida, separado da bolinha pelo fundo do card
    boxShadow: selected
      ? '0 0 0 2px var(--mui-palette-background-paper), 0 0 0 4px var(--mui-palette-text-primary)'
      : 'none',
    outline: 'none',
    '&:focus-visible': {
      boxShadow:
        '0 0 0 2px var(--mui-palette-background-paper), 0 0 0 4px var(--mui-palette-text-secondary)'
    }
  }
}

const swatchMotion = {
  whileHover: { scale: 1.12 },
  whileTap: { scale: 0.92 },
  transition: { type: 'spring', stiffness: 400, damping: 22 }
} as const

// ✓ que aparece com um pulo na cor escolhida
function SwatchCheck({ show }: { show: boolean }): ReactElement {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
          style={{ display: 'inline-flex', filter: 'drop-shadow(0 0 1px rgba(0,0,0,.5))' }}
        >
          <FiCheck size={15} strokeWidth={3} />
        </motion.span>
      )}
    </AnimatePresence>
  )
}

// Cores prontas + uma personalizada (abre o seletor de cor do sistema)
function AccentPicker(): ReactElement {
  const accent = useAccent()
  const { mode, systemMode } = useColorScheme()
  const scheme = (mode === 'system' ? systemMode : mode) === 'dark' ? 'dark' : 'light'
  const custom = isCustomAccent(accent)
  const customColor = custom ? accent : accentColors(accent).light

  // O seletor do sistema avisa a cada movimento do mouse: aplica no máximo uma vez por quadro
  const frame = useRef<number | null>(null)
  const pickCustom = (color: string): void => {
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      frame.current = null
      setAccent(color)
    })
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
      {ACCENT_PRESETS.map((preset) => {
        const selected = preset.id === accent
        return (
          <Box
            key={preset.id}
            component={motion.button}
            type="button"
            {...swatchMotion}
            title={preset.label}
            aria-label={preset.label}
            aria-pressed={selected}
            onClick={() => setAccent(preset.id)}
            sx={swatchSx(preset[scheme], selected)}
          >
            <SwatchCheck show={selected} />
          </Box>
        )
      })}
      <Box
        component={motion.label}
        {...swatchMotion}
        title="Personalizada"
        sx={{
          ...swatchSx(
            custom
              ? accentColors(accent)[scheme]
              : 'conic-gradient(red, yellow, lime, cyan, blue, magenta, red)',
            custom
          ),
          position: 'relative',
          '&:has(input:focus-visible)': {
            boxShadow:
              '0 0 0 2px var(--mui-palette-background-paper), 0 0 0 4px var(--mui-palette-text-secondary)'
          }
        }}
      >
        {/* Input invisível por cima da bolinha: clicar abre o seletor de cor */}
        <input
          type="color"
          aria-label="Cor personalizada"
          value={customColor}
          onChange={(e) => pickCustom(e.target.value)}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0,
            cursor: 'pointer',
            width: '100%',
            height: '100%'
          }}
        />
        {custom ? (
          <SwatchCheck show />
        ) : (
          <FiPlus
            size={15}
            strokeWidth={3}
            style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,.6))' }}
          />
        )}
      </Box>
    </Box>
  )
}

// Situação da sincronização com a conta, logo abaixo do usuário. Sem acesso à nuvem
// (conta ainda não aprovada), mostra só isso, num tom neutro
function SyncStatusLine(): ReactElement {
  const { state, error } = useSyncStatus()
  const access = useAccess()
  if (!hasCloudAccess(access)) {
    const text =
      access.status === 'pending'
        ? 'Aguardando aprovação para usar a nuvem. Por enquanto, tudo fica salvo só neste computador.'
        : access.status === 'rejected'
          ? 'Esta conta não tem acesso à nuvem. Tudo fica salvo só neste computador.'
          : access.status === 'error'
            ? 'Não foi possível verificar o acesso à nuvem. Tudo continua salvo neste computador.'
            : 'Verificando o acesso à nuvem…'
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1.5, color: 'text.secondary' }}>
        {access.status === 'checking' ? <CircularProgress size={12} /> : <FiCloudOff />}
        <Typography variant="caption">{text}</Typography>
      </Box>
    )
  }
  if (state === 'error')
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    )
  const line =
    state === 'offline'
      ? {
          icon: <FiCloudOff />,
          color: 'warning.main',
          text: 'Sem internet. Tudo continua salvo neste computador e vai para a conta quando a conexão voltar.'
        }
      : state === 'saving'
        ? {
            icon: <CircularProgress size={12} />,
            color: 'text.secondary',
            text: 'Salvando na conta…'
          }
        : state === 'synced'
          ? {
              icon: <FiCloud />,
              color: 'text.secondary',
              text: 'Progresso (tópicos concluídos e gramática) e configurações estão salvos na sua conta.'
            }
          : {
              icon: <CircularProgress size={12} />,
              color: 'text.secondary',
              text: 'Conectando à conta…'
            }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1.5, color: line.color }}>
      {line.icon}
      <Typography variant="caption">{line.text}</Typography>
    </Box>
  )
}

// Conta: login opcional com Google
function AccountSection(): ReactElement {
  const { ready, user } = useAccount()
  const [configured, setConfigured] = useState<boolean | null>(null)
  const [waiting, setWaiting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirmLogout, setConfirmLogout] = useState(false)
  // Acabou de sair (para animar a troca e mostrar a confirmação por alguns segundos)
  const [justLoggedOut, setJustLoggedOut] = useState(false)
  const { state: syncState } = useSyncStatus()
  const access = useAccess()
  // Para a mensagem depois de sair (a conta já saiu quando ela aparece)
  const [leftWithCloud, setLeftWithCloud] = useState(true)

  useEffect(() => {
    if (!justLoggedOut) return
    const timer = setTimeout(() => setJustLoggedOut(false), 4000)
    return () => clearTimeout(timer)
  }, [justLoggedOut])

  // Entrou de novo: a confirmação de saída não vale mais
  useEffect(() => {
    if (user) setJustLoggedOut(false)
  }, [user])

  useEffect(() => {
    void googleAuthConfigured().then(setConfigured)
  }, [])

  const login = async (): Promise<void> => {
    setError(null)
    setWaiting(true)
    try {
      await signInWithGoogle()
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e)
      // Cancelar pelo botão não é erro
      if (message !== 'Login cancelado.') setError(message)
    } finally {
      setWaiting(false)
    }
  }

  if (!ready || configured === null)
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Skeleton variant="circular" width={44} height={44} />
        <Skeleton width={200} />
      </Box>
    )

  const signedIn = user && (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src={user.photoURL ?? undefined}
          alt={user.displayName ?? ''}
          slotProps={{ img: { referrerPolicy: 'no-referrer' } }}
          sx={{ width: 44, height: 44 }}
        >
          {(user.displayName ?? user.email ?? '?')[0].toUpperCase()}
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography noWrap sx={{ fontWeight: 500 }}>
            {user.displayName ?? 'Conta Google'}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {user.email}
          </Typography>
        </Box>
        <Button variant="outlined" startIcon={<FiLogOut />} onClick={() => setConfirmLogout(true)}>
          Sair
        </Button>
      </Box>
      <SyncStatusLine />

      {/* Confirmação antes de sair da conta */}
      <Dialog
        open={confirmLogout}
        onClose={() => setConfirmLogout(false)}
        aria-labelledby="logout-title"
        slotProps={{ paper: { sx: { borderRadius: 1.5, maxWidth: 420 } } }}
      >
        <DialogTitle id="logout-title">Sair da conta?</DialogTitle>
        <DialogContent>
          {hasCloudAccess(access) ? (
            <>
              <DialogContentText>
                Você vai sair de {user.email ?? 'sua conta Google'}. Seu progresso (tópicos
                concluídos e gramática) sai deste computador, mas continua salvo na sua conta e
                volta quando você entrar de novo. O tema e a cor continuam como estão.
              </DialogContentText>
              <DialogContentText sx={{ mt: 1.5 }}>
                O que você fizer sem login a partir daí vai para a próxima conta que entrar.
              </DialogContentText>
            </>
          ) : (
            <DialogContentText>
              Você vai sair de {user.email ?? 'sua conta Google'}. Como esta conta não usa a nuvem,
              nada muda: seu progresso e as configurações continuam neste computador.
            </DialogContentText>
          )}
          {hasCloudAccess(access) && (syncState === 'offline' || syncState === 'saving') && (
            <Alert severity="warning" sx={{ mt: 2 }}>
              Ainda há mudanças que não chegaram à conta. Elas ficam guardadas e sobem na próxima
              vez que você entrar com esta conta neste computador.
            </Alert>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setConfirmLogout(false)} autoFocus>
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<FiLogOut />}
            onClick={() => {
              setConfirmLogout(false)
              setLeftWithCloud(hasCloudAccess(access))
              setJustLoggedOut(true)
              void signOut()
            }}
          >
            Sair
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )

  const signedOut = (
    <Box>
      {/* Logo depois de sair: confirmação que aparece e some sozinha */}
      <AnimatePresence>
        {justLoggedOut && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 2,
                color: 'success.main'
              }}
            >
              <FiCheck />
              <Typography variant="body2">
                {leftWithCloud
                  ? 'Você saiu da conta. Seu progresso continua salvo nela.'
                  : 'Você saiu da conta.'}
              </Typography>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      {!configured && (
        <Alert severity="info" sx={{ mb: 2 }}>
          O login com Google ainda não foi configurado: falta o cliente OAuth no arquivo .env do
          projeto (veja .env.example).
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
        <Button
          variant="outlined"
          disabled={!configured || waiting}
          startIcon={waiting ? <CircularProgress size={16} /> : <FcGoogle />}
          onClick={() => void login()}
          sx={{ px: 2 }}
        >
          {waiting ? signInWaitingLabel : 'Entrar com Google'}
        </Button>
        {waiting && canCancelSignIn && (
          <Button onClick={() => void cancelSignIn()}>Cancelar</Button>
        )}
      </Box>
    </Box>
  )

  // Sair da conta é animado: o usuário desliza para a esquerda e some, e o botão de
  // entrar aparece subindo. Entrar não anima (nessa hora a atenção está no navegador)
  return (
    <AnimatePresence mode="wait" initial={false}>
      {signedIn ? (
        <motion.div
          key="signed-in"
          initial={false}
          exit={{ opacity: 0, x: -24, scale: 0.97, transition: { duration: 0.28, ease: 'easeIn' } }}
        >
          {signedIn}
        </motion.div>
      ) : (
        <motion.div
          key="signed-out"
          initial={justLoggedOut ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
        >
          {signedOut}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Cores de fundo prontas + uma personalizada. Cada bolinha mostra os dois tons do
// tema atual: o fundo da janela e o dos cartões
function BackgroundPicker(): ReactElement {
  const background = backgroundPref.use()
  const { mode, systemMode } = useColorScheme()
  const scheme = (mode === 'system' ? systemMode : mode) === 'dark' ? 'dark' : 'light'
  const custom = isCustomBackground(background)
  const customColor = custom
    ? background
    : (BACKGROUND_PRESETS.find((p) => p.id === background)?.color ?? '#808080')

  const frame = useRef<number | null>(null)
  const pickCustom = (color: string): void => {
    if (frame.current !== null) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      frame.current = null
      backgroundPref.set(color)
    })
  }

  // Bolinha dividida na diagonal: fundo da janela × fundo dos cartões
  const toneSx = (value: string, selected: boolean): object => {
    const tones = backgroundTones(value)[scheme]
    return {
      ...swatchSx(`linear-gradient(135deg, ${tones.default} 50%, ${tones.paper} 50%)`, selected),
      border: 1,
      borderColor: 'divider',
      color: 'text.primary'
    }
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
      {BACKGROUND_PRESETS.map((preset) => {
        const selected = preset.id === background
        return (
          <Box
            key={preset.id}
            component={motion.button}
            type="button"
            {...swatchMotion}
            title={preset.label}
            aria-label={preset.label}
            aria-pressed={selected}
            onClick={() => backgroundPref.set(preset.id)}
            sx={toneSx(preset.id, selected)}
          >
            <SwatchCheck show={selected} />
          </Box>
        )
      })}
      <Box
        component={motion.label}
        {...swatchMotion}
        title="Personalizada"
        sx={{
          ...(custom
            ? toneSx(background, true)
            : swatchSx('conic-gradient(red, yellow, lime, cyan, blue, magenta, red)', false)),
          position: 'relative',
          '&:has(input:focus-visible)': {
            boxShadow:
              '0 0 0 2px var(--mui-palette-background-paper), 0 0 0 4px var(--mui-palette-text-secondary)'
          }
        }}
      >
        {/* Input invisível por cima da bolinha: clicar abre o seletor de cor */}
        <input
          type="color"
          aria-label="Cor de fundo personalizada"
          value={customColor}
          onChange={(e) => pickCustom(e.target.value)}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0,
            cursor: 'pointer',
            width: '100%',
            height: '100%'
          }}
        />
        {custom ? (
          <SwatchCheck show />
        ) : (
          <FiPlus
            size={15}
            strokeWidth={3}
            style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,.6))' }}
          />
        )}
      </Box>
    </Box>
  )
}

// Situação da atualização automática (só no app do Windows instalado)
function updateText(status: UpdaterStatus): string | null {
  switch (status.state) {
    case 'unsupported':
      return status.reason === 'portable'
        ? 'Versão portátil: as atualizações são baixadas à mão, nos Releases do GitHub.'
        : null
    case 'checking':
      return 'Procurando atualizações…'
    case 'up-to-date':
      return 'Você está usando a versão mais recente.'
    case 'downloading':
      return `Baixando a versão ${status.version}… ${status.percent}%`
    case 'ready':
      return `A versão ${status.version} está pronta: reinicie para atualizar (ou ela entra ao fechar o app).`
    case 'error':
      return status.message
    default:
      return null
  }
}

function UpdateLine(): ReactElement | null {
  const { status } = useDesktopUpdate()
  const text = updateText(status)
  if (!text) return null
  return (
    <Typography
      variant="body2"
      color={status.state === 'ready' ? 'primary' : 'text.secondary'}
      sx={{ mt: 1.5 }}
    >
      {text}
    </Typography>
  )
}

function UpdateButton(): ReactElement | null {
  const { status } = useDesktopUpdate()
  if (status.state === 'unsupported') return null
  if (status.state === 'ready')
    return (
      <Button
        variant="contained"
        size="small"
        startIcon={<FiRefreshCw />}
        onClick={installDesktopUpdate}
      >
        Reiniciar e atualizar
        <UpdateButtonDot />
      </Button>
    )
  const busy = status.state === 'checking' || status.state === 'downloading'
  return (
    <Button
      variant="outlined"
      size="small"
      disabled={busy}
      startIcon={busy ? <CircularProgress size={14} /> : <FiRefreshCw />}
      onClick={checkForDesktopUpdate}
    >
      Procurar atualizações
    </Button>
  )
}

// Rótulo de cada linha do cartão Aparência
const rowLabelSx = {
  fontWeight: 500,
  color: 'text.secondary',
  // Em telas estreitas as linhas empilham: um respiro entre uma opção e a próxima
  '&:not(:first-of-type)': { mt: { xs: 1.5, sm: 0 } }
}

// Limite de cartões novos por dia (preferência sincronizada com a conta).
// O controle desliza livre e o valor só é salvo ao soltar, para não gravar a cada passo
function NewPerDaySetting(): ReactElement {
  const saved = newPerDayPref.use()
  const [value, setValue] = useState(saved)
  useEffect(() => setValue(saved), [saved])
  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary', flex: 1 }}>
          Cartões novos por dia
        </Typography>
        <Typography sx={{ fontWeight: 600 }}>{value}</Typography>
      </Box>
      <Slider
        value={value}
        min={0}
        max={NEW_PER_DAY_MAX}
        step={1}
        marks={[0, 10, 20, 30, 40, 50].map((v) => ({ value: v, label: String(v) }))}
        onChange={(_, v) => setValue(v as number)}
        onChangeCommitted={(_, v) => newPerDayPref.set(v as number)}
        aria-label="Cartões novos por dia"
        sx={{ mt: 0.5, mx: 1, width: 'calc(100% - 16px)' }}
      />
      <Typography variant="caption" color="text.secondary">
        Cada cartão novo traz revisões nos dias seguintes. Com 10 por dia, os 50 cartões entram em
        cinco dias, com poucos minutos de revisão diária.
      </Typography>
    </Box>
  )
}

// Card que entra em sequência com os outros
function SettingsCard({ children }: { children: ReactNode }): ReactElement {
  return (
    <motion.div variants={riseIn}>
      <Card sx={{ mb: 2 }}>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  )
}

// Administração (só a conta administradora): pedidos de acesso à nuvem
function AdminCard({ onOpenAccess }: { onOpenAccess: () => void }): ReactElement {
  const { requests } = useAccessRequests()
  const pending = usePendingAccessCount()
  return (
    <SettingsCard>
      <Typography variant="subtitle1">Administração</Typography>
      <List disablePadding component={motion.div} variants={stagger(0.1)} sx={{ mt: 2 }}>
        <LinkButton
          icon={FiUserCheck}
          primary="Aprovar acessos"
          secondary={
            requests === null
              ? 'Quem pode salvar na nuvem'
              : pending
                ? `${pending} pedido(s) aguardando`
                : 'Nenhum pedido aguardando'
          }
          onClick={onOpenAccess}
          dots="access"
        />
      </List>
    </SettingsCard>
  )
}

// Botão de lista com borda que desliza um pouco para a direita no hover
function LinkButton({
  icon: Icon,
  primary,
  secondary,
  onClick,
  dots
}: {
  icon: IconType
  primary: string
  secondary: string
  onClick: () => void
  // Bolinhas sobre o ícone: das sugestões de troca de voz ou dos pedidos de acesso
  dots?: 'audio' | 'access'
}): ReactElement {
  return (
    <motion.div
      variants={riseIn}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <ListItemButton
        onClick={onClick}
        sx={{
          border: 1,
          borderColor: 'divider',
          borderRadius: 1,
          '&:hover': { borderColor: 'primary.main' }
        }}
      >
        <ListItemIcon sx={{ minWidth: 36, position: 'relative' }}>
          <Icon size={18} />
          {dots && <SuggestionDots audio={dots === 'audio'} access={dots === 'access'} />}
        </ListItemIcon>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItemButton>
    </motion.div>
  )
}

export default function Settings({
  onOpenDoc,
  onOpenAudio,
  onOpenAudioSuggestions,
  onOpenGrammarReview,
  onOpenFlashcardList,
  onOpenAccess
}: {
  onOpenDoc: (docId: string) => void
  onOpenAudio: () => void
  onOpenAudioSuggestions: () => void
  onOpenGrammarReview: () => void
  onOpenFlashcardList: () => void
  onOpenAccess: () => void
}): ReactElement {
  const admin = isAdmin(useAccess())
  const suggestions = useAudioSuggestions()
  const suggestionList = suggestions.all ?? suggestions.mine
  const pendingCount = suggestionList.filter((s) => s.status === 'pending').length
  const suggestionsSummary = pendingCount
    ? `${pendingCount} pendente(s)`
    : suggestionList.length
      ? 'Nenhuma pendente'
      : 'Botão direito num áudio para sugerir'
  // O tema é uma preferência sincronizada; o ThemeModeBridge (App.tsx) aplica no MUI
  const current = themeModePref.use()
  const setMode = themeModePref.set

  return (
    <Page>
      <motion.div variants={stagger(0, 0.07)} initial="hidden" animate="show">
        <motion.div variants={riseIn}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Configurações
          </Typography>
        </motion.div>

        <SettingsCard>
          <Typography variant="subtitle1">Conta</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Opcional: com login, progresso e configurações ficam salvos na sua conta.
          </Typography>
          <AccountSection />
        </SettingsCard>

        {/* Só a conta administradora: quem pode usar a nuvem */}
        {admin && <AdminCard onOpenAccess={onOpenAccess} />}

        {/* Aparência: uma linha por opção, rótulo à esquerda e escolha à direita */}
        <SettingsCard>
          <Typography variant="subtitle1" sx={{ mb: 2.5 }}>
            Aparência
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '120px 1fr' },
              columnGap: 3,
              rowGap: { xs: 1, sm: 3 },
              alignItems: 'center'
            }}
          >
            <Typography variant="body2" sx={rowLabelSx}>
              Tema
            </Typography>
            <Box>
              <ToggleButtonGroup
                exclusive
                size="small"
                color="primary"
                value={current}
                onChange={(_, value: Mode | null) => value && setMode(value)}
              >
                {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
                  <ToggleButton key={value} value={value} sx={{ gap: 1, px: 1.75 }}>
                    {/* O ícone do tema escolhido gira e cresce um pouco */}
                    <motion.span
                      animate={
                        value === current ? { rotate: 360, scale: 1.15 } : { rotate: 0, scale: 1 }
                      }
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      style={{ display: 'inline-flex' }}
                    >
                      <Icon />
                    </motion.span>
                    {label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>

            <Typography variant="body2" sx={rowLabelSx}>
              Cor principal
            </Typography>
            <AccentPicker />

            <Typography variant="body2" sx={rowLabelSx}>
              Cor de fundo
            </Typography>
            <BackgroundPicker />
          </Box>
        </SettingsCard>

        <SettingsCard>
          <Typography variant="subtitle1">Áudios</Typography>
          <List
            disablePadding
            component={motion.div}
            variants={stagger(0.1, 0.05)}
            sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
          >
            {/* Só para quem pode sugerir (conta com acesso à nuvem) */}
            {suggestions.user && (
              <LinkButton
                icon={FiFlag}
                primary="Sugestões de troca de voz"
                secondary={suggestionsSummary}
                onClick={onOpenAudioSuggestions}
                dots="audio"
              />
            )}
            <LinkButton
              icon={FiVolume2}
              primary="Lista de áudios"
              secondary="Ouvir todos os áudios do app"
              onClick={onOpenAudio}
            />
          </List>
        </SettingsCard>

        <SettingsCard>
          <Typography variant="subtitle1">Flashcards</Typography>
          <NewPerDaySetting />
          <List disablePadding component={motion.div} variants={stagger(0.1)} sx={{ mt: 2 }}>
            <LinkButton
              icon={FiLayers}
              primary="Lista de flashcards"
              secondary="Frente, verso, exemplo e áudio de todos os cartões"
              onClick={onOpenFlashcardList}
            />
          </List>
        </SettingsCard>

        <SettingsCard>
          <Typography variant="subtitle1">Questões de gramática</Typography>
          <List disablePadding component={motion.div} variants={stagger(0.1)} sx={{ mt: 2 }}>
            <LinkButton
              icon={FiCheckSquare}
              primary="Lista de questões"
              secondary="Enunciados, opções e respostas certas"
              onClick={onOpenGrammarReview}
            />
          </List>
        </SettingsCard>

        {/* Sobre: nome, versão, para que serve e o código no GitHub */}
        <SettingsCard>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Sobre
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                flexShrink: 0,
                borderRadius: 1.2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                fontSize: 24,
                fontWeight: 700
              }}
              aria-hidden
            >
              F
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap' }}>
                <Typography sx={{ fontWeight: 600, fontSize: 17 }}>{APP_NAME}</Typography>
                <Typography variant="body2" color="text.secondary">
                  versão {APP_VERSION} ·{' '}
                  <Box
                    component="span"
                    role="img"
                    aria-label={isElectron ? 'App para Windows' : 'Site'}
                    title={isElectron ? 'App para Windows' : 'Site'}
                    sx={{ display: 'inline-flex', verticalAlign: '-2px', fontSize: 14 }}
                  >
                    {isElectron ? <FaWindows /> : <FiGlobe />}
                  </Box>
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {APP_TAGLINE}
              </Typography>
            </Box>
          </Box>
          <UpdateLine />
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
            <UpdateButton />
            {GITHUB_URL && (
              <Button
                variant="outlined"
                size="small"
                startIcon={<FiGithub />}
                onClick={() => openExternal(GITHUB_URL)}
              >
                Código no GitHub
              </Button>
            )}
          </Box>
        </SettingsCard>

        <SettingsCard>
          <Typography variant="subtitle1">Documentos do projeto</Typography>
          <List
            disablePadding
            component={motion.div}
            variants={stagger(0.1, 0.05)}
            sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
          >
            {PROJECT_DOCS.map((doc) => (
              <LinkButton
                key={doc.id}
                icon={FiFileText}
                primary={doc.title}
                secondary={doc.fileName}
                onClick={() => onOpenDoc(doc.id)}
              />
            ))}
          </List>
        </SettingsCard>
      </motion.div>
    </Page>
  )
}
