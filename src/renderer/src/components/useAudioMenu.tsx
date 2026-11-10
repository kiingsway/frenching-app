import {
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type ReactElement
} from 'react'
import AudioMenu, { type SuggestOptions, type VoiceMode } from '@/components/AudioMenu'
import { isAdmin, useAccess } from '@/lib/access'
import { getAudioKeyByUrl, getAudioUrlByKey } from '@/lib/audio'
import { isGenerating, useAudioDev } from '@/lib/audio-dev'
import { bundledVoiceFor } from '@/lib/audio-entries'
import { cancelSuggestion, suggestVoiceChange, useAudioSuggestions } from '@/lib/audio-suggestions'
import { DEFAULT_VOICE, type VoiceId } from '@/lib/audio-texts'
import { audioTools } from '@/lib/platform'

// Menu de botão direito de um áudio (recomeçar e voz), usado pelos trechos de áudio
// (AudioSection) e pelos termos traduzidos (TranslatedText).
// Botão direito, tecla de menu ou Shift+F10 abrem o menu; na tela de toque, pressionar e
// segurar. `restart` toca do início; `stop` para o áudio antes de trocar a voz.
export function useAudioMenu(
  src: string | undefined,
  actions: { restart: () => void; stop: () => void }
): {
  // URL a tocar: no npm run dev, com a data de geração (toca a versão nova após trocar a voz)
  playSrc: string | undefined
  generating: boolean
  menu: ReactElement
  handlers: {
    onContextMenu: (e: MouseEvent<HTMLElement>) => void
    onPointerDown: (e: PointerEvent<HTMLElement>) => void
    onPointerMove: (e: PointerEvent<HTMLElement>) => void
    onPointerUp: () => void
    onPointerCancel: () => void
  }
  // O clique que chega ao soltar o dedo depois do toque longo: deve ser ignorado
  wasLongPress: () => boolean
} {
  // As ações mudam a cada render; a ref sempre aponta para as atuais
  const actionsRef = useRef(actions)
  actionsRef.current = actions

  // Posição do menu (null = fechado)
  const [menuAt, setMenuAt] = useState<{ top: number; left: number } | null>(null)

  // No modo de desenvolvimento, o arquivo pode ser gerado de novo com o app aberto
  // (ex.: troca de voz): a data de geração na URL faz tocar sempre a versão nova
  const dev = useAudioDev()
  const key = src ? getAudioKeyByUrl(src) : undefined
  const mtime = key ? dev.mtimes[key] : undefined
  const playSrc = key && mtime ? getAudioUrlByKey(key, mtime) : src
  // No npm run dev a voz vem do voices.json atual; no app compilado, da versão do build
  const voice: VoiceId = !key
    ? DEFAULT_VOICE
    : dev.available
      ? (dev.voices[key] ?? DEFAULT_VOICE)
      : bundledVoiceFor(key)
  const generating = !!key && isGenerating(dev.status, key)
  // O que o menu oferece sobre a voz (veja VoiceMode em AudioMenu):
  // npm run dev → trocar só a conta admin; app compilado/site → sugerir só com acesso
  // à nuvem (admin incluso), senão apenas mostra a voz usada
  const access = useAccess()
  const suggestions = useAudioSuggestions()
  const voiceMode: VoiceMode | undefined = !key
    ? undefined
    : dev.available
      ? isAdmin(access)
        ? 'change'
        : 'locked'
      : suggestions.user
        ? 'suggest'
        : 'show'

  // App compilado/site: sugestão de troca de voz (salva na conta)
  const [sending, setSending] = useState(false)
  const mySuggestion = key ? suggestions.mine.find((s) => s.key === key) : undefined
  const suggest: SuggestOptions | undefined =
    key && voiceMode === 'suggest'
      ? {
          status: mySuggestion?.status ?? 'none',
          toVoice: mySuggestion?.toVoice,
          sending,
          onSuggest: (toVoice) => {
            setSending(true)
            void suggestVoiceChange(key, voice, toVoice)
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

  const changeVoice = (next: VoiceId): void => {
    setMenuAt(null)
    if (!key || next === voice || voiceMode !== 'change') return
    actionsRef.current.stop()
    void audioTools!.setVoice(key, next)
  }

  // Tela de toque: pressionar e segurar abre o mesmo menu. O navegador nem sempre
  // manda o contextmenu no toque longo (às vezes só seleciona o texto), então o app
  // conta o tempo ele mesmo; mexer o dedo (rolar a página) cancela
  const longPress = useRef<{ timer: number; x: number; y: number; fired: boolean } | null>(null)
  const cancelLongPress = (): void => {
    if (longPress.current) clearTimeout(longPress.current.timer)
  }

  const onContextMenu = (e: MouseEvent<HTMLElement>): void => {
    if (!src) return
    e.preventDefault()
    // Toque longo: o menu já foi aberto pelo temporizador
    if (longPress.current?.fired) return
    // O navegador mandou o contextmenu antes do temporizador: abre agora e ignora o
    // "clique" ao soltar o dedo (o próximo toque cria um registro novo)
    if (longPress.current) {
      cancelLongPress()
      longPress.current.fired = true
    }
    if (e.clientX === 0 && e.clientY === 0) {
      const rect = e.currentTarget.getBoundingClientRect()
      setMenuAt({ top: rect.bottom, left: rect.left })
    } else setMenuAt({ top: e.clientY, left: e.clientX })
  }

  const onPointerDown = (e: PointerEvent<HTMLElement>): void => {
    cancelLongPress()
    if (!src || e.pointerType !== 'touch') {
      longPress.current = null
      return
    }
    const { clientX: x, clientY: y } = e
    longPress.current = {
      x,
      y,
      fired: false,
      timer: window.setTimeout(() => {
        if (!longPress.current) return
        longPress.current.fired = true
        window.getSelection()?.removeAllRanges()
        navigator.vibrate?.(10)
        setMenuAt({ top: y, left: x })
      }, 450)
    }
  }

  const onPointerMove = (e: PointerEvent<HTMLElement>): void => {
    const lp = longPress.current
    if (lp && !lp.fired && Math.hypot(e.clientX - lp.x, e.clientY - lp.y) > 10) cancelLongPress()
  }

  const wasLongPress = (): boolean => {
    if (longPress.current?.fired) {
      longPress.current = null
      return true
    }
    return false
  }

  const menu = (
    <AudioMenu
      at={menuAt}
      onClose={() => setMenuAt(null)}
      onRestart={() => {
        setMenuAt(null)
        actionsRef.current.restart()
      }}
      voice={voice}
      voiceMode={voiceMode}
      onChangeVoice={changeVoice}
      generating={generating}
      busy={!!dev.status?.running}
      suggest={suggest}
    />
  )

  return {
    playSrc,
    generating,
    menu,
    handlers: {
      onContextMenu,
      onPointerDown,
      onPointerMove,
      onPointerUp: cancelLongPress,
      onPointerCancel: cancelLongPress
    },
    wasLongPress
  }
}
