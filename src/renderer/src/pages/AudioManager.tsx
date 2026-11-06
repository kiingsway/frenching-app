import {
  memo,
  useCallback,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement
} from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { FiArrowLeft, FiLock, FiPause, FiPlay, FiRefreshCw, FiSearch } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import LinearProgress from '@mui/material/LinearProgress'
import NativeSelect from '@mui/material/NativeSelect'
import TextField from '@mui/material/TextField'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import { isAdmin, useAccess } from '@/lib/access'
import { getAudioUrlByKey, hasAudioFile } from '@/lib/audio'
import { buildEntries, bundledVoiceFor, PART_LABELS, type AudioEntry } from '@/lib/audio-entries'
import {
  AUDIO_VOICES,
  DEFAULT_VOICE,
  type AudioGenStatus,
  type VoiceId,
  type VoiceOverrides
} from '@/lib/audio-texts'
import { audioTools, audioToolsAvailable } from '@/lib/platform'

const VOICE_IDS = Object.keys(AUDIO_VOICES) as VoiceId[]

// Colunas: texto · voz · gerado em · ações
const GRID_COLUMNS = 'minmax(0, 1fr) 110px 150px 80px'
// Produção: texto · voz · ouvir
const GRID_COLUMNS_READ_ONLY = 'minmax(0, 1fr) 110px 48px'

type Entry = AudioEntry

// Data completa, para a dica ao passar o mouse
const formatFullDate = (ms: number): string =>
  new Date(ms).toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })

// Data amigável: "agora mesmo", "há 5 min", "hoje às 14:32", "ontem às 19:53",
// "terça às 10:05" (última semana), "3 de nov. às 19:53", "3 de nov. de 2025"
function formatFriendlyDate(ms: number, now: number): string {
  const minutes = Math.floor((now - ms) / 60_000)
  if (minutes < 1) return 'agora mesmo'
  if (minutes < 60) return `há ${minutes} min`

  const date = new Date(ms)
  const time = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  const startOfDay = (d: Date): number =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
  const days = Math.round((startOfDay(new Date(now)) - startOfDay(date)) / 86_400_000)
  if (days === 0) return `hoje às ${time}`
  if (days === 1) return `ontem às ${time}`
  if (days < 7)
    return `${date.toLocaleDateString('pt-BR', { weekday: 'long' }).replace('-feira', '')} às ${time}`
  if (date.getFullYear() === new Date(now).getFullYear())
    return `${date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })} às ${time}`
  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })
}

// Hora atual que avança sozinha, para "há 5 min" virar "há 6 min" sem recarregar
function useNow(intervalMs = 30_000): number {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])
  return now
}

const formatBytes = (bytes: number): string =>
  bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} MB`
    : `${Math.round(bytes / 1024).toLocaleString('pt-BR')} KB`

type Filter = 'all' | 'missing' | 'generated'

// Item da lista virtualizada: título de página ou um áudio
type Item = { type: 'group'; id: string; title: string } | { type: 'entry'; entry: Entry }

// Arquivos e status da geração, atualizados sempre que algo muda na pasta de áudios
// ou no progresso do `npm run audio` (inclusive rodado pelo terminal)
function useAudioState(): {
  available: boolean | null
  files: Record<string, number>
  totalBytes: number
  status: AudioGenStatus | null
  voices: VoiceOverrides
} {
  const [available, setAvailable] = useState<boolean | null>(null)
  const [files, setFiles] = useState<Record<string, number>>({})
  const [totalBytes, setTotalBytes] = useState(0)
  const [status, setStatus] = useState<AudioGenStatus | null>(null)
  const [voices, setVoices] = useState<VoiceOverrides>({})

  useEffect(() => {
    let alive = true
    const refresh = async (): Promise<void> => {
      const [nextFiles, nextStatus, nextVoices] = await Promise.all([
        audioTools!.files(),
        audioTools!.status(),
        audioTools!.voices()
      ])
      if (!alive) return
      setFiles(nextFiles.mtimes)
      setTotalBytes(nextFiles.totalBytes)
      setStatus(nextStatus)
      setVoices(nextVoices)
    }
    let unsubscribe = (): void => {}
    // Na web (e no navegador comum) não há ferramentas de áudio: veja lib/platform.ts
    const isAvailable = audioToolsAvailable()
    void isAvailable.then((ok) => {
      if (!alive) return
      setAvailable(ok)
      if (!ok) return
      void refresh()
      unsubscribe = audioTools!.onChange(() => void refresh())
    })
    return () => {
      alive = false
      unsubscribe()
    }
  }, [])

  return { available, files, totalBytes, status, voices }
}

type RowState = 'current' | 'queued' | 'error' | null

// Uma linha da lista. Memoizada: só redesenha quando os dados dela mudam,
// não a cada atualização de progresso das outras linhas.
const AudioRow = memo(function AudioRow({
  entry,
  generatedAt,
  voice,
  state,
  error,
  playing,
  running,
  now,
  onTogglePlay,
  onRegenerate,
  progressRef,
  readOnly,
  canChangeVoice
}: {
  // Produção (preview/.exe): só ouvir; trocar a voz e gerar ficam no npm run dev
  readOnly: boolean
  // npm run dev: só a conta administradora troca a voz
  canChangeVoice: boolean
  entry: Entry
  generatedAt: number | undefined
  voice: VoiceId
  state: RowState
  error: string | undefined
  playing: boolean
  // Recebe o elemento do preenchimento de progresso (só existe enquanto toca)
  progressRef: (el: HTMLDivElement | null) => void
  running: boolean
  now: number
  onTogglePlay: (entry: Entry, version: number) => void
  onRegenerate: (key: string) => void
}): ReactElement {
  let statusNode: ReactElement
  if (state === 'current')
    statusNode = (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main' }}>
        <CircularProgress size={14} />
        <Typography variant="body2">Gerando…</Typography>
      </Box>
    )
  else if (state === 'queued')
    statusNode = (
      <Typography variant="body2" color="text.secondary">
        Na fila
      </Typography>
    )
  else if (state === 'error')
    statusNode = <Chip size="small" color="error" variant="outlined" label="Erro" title={error} />
  else if (!generatedAt)
    statusNode = <Chip size="small" color="warning" variant="outlined" label="Não gerado" />
  else
    statusNode = (
      <Typography variant="body2" title={formatFullDate(generatedAt)}>
        {formatFriendlyDate(generatedAt, now)}
      </Typography>
    )

  const waitHint = running ? 'Aguarde a geração atual terminar' : undefined

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: readOnly ? GRID_COLUMNS_READ_ONLY : GRID_COLUMNS,
        gap: 2,
        alignItems: 'center',
        px: 2,
        py: 1,
        borderBottom: 1,
        borderColor: 'divider',
        bgcolor: state === 'current' ? 'action.selected' : undefined,
        '&:hover': { bgcolor: state === 'current' ? 'action.selected' : 'action.hover' },
        // O conteúdo fica por cima do preenchimento de progresso
        position: 'relative',
        overflow: 'hidden',
        '& > :not(.row-progress)': { position: 'relative' }
      }}
    >
      {playing && (
        <Box
          ref={progressRef}
          className="row-progress"
          aria-hidden
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: 0,
            bgcolor: 'rgba(var(--mui-palette-primary-mainChannel) / 0.22)',
            pointerEvents: 'none'
          }}
        />
      )}
      <Box sx={{ minWidth: 0, overflowWrap: 'anywhere' }}>
        <Typography variant="body2" lang="fr">
          {entry.spoken}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {PART_LABELS[entry.part]}
          {entry.uses > 1 ? ` · aparece ${entry.uses} vezes` : ''}
          {entry.spoken !== entry.original ? ` · na página: “${entry.original}”` : ''}
          {' · '}
          {entry.key}.mp3
        </Typography>
      </Box>
      {readOnly ? (
        <Typography variant="body2">{AUDIO_VOICES[voice].label}</Typography>
      ) : (
        <NativeSelect
          variant="standard"
          disabled={running || !canChangeVoice}
          value={voice}
          title={
            !canChangeVoice
              ? 'Só a conta administradora pode trocar a voz'
              : (waitHint ?? 'Trocar a voz gera este áudio de novo')
          }
          onChange={(e) => void audioTools!.setVoice(entry.key, e.target.value as VoiceId)}
          sx={{ fontSize: 14 }}
        >
          {VOICE_IDS.map((id) => (
            <option key={id} value={id}>
              {AUDIO_VOICES[id].label}
            </option>
          ))}
        </NativeSelect>
      )}
      {!readOnly && <Box>{statusNode}</Box>}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton
          size="small"
          disabled={!generatedAt}
          title={playing ? 'Pausar' : 'Ouvir'}
          onClick={() => onTogglePlay(entry, generatedAt ?? 0)}
        >
          {playing ? <FiPause /> : <FiPlay />}
        </IconButton>
        {!readOnly && (
          <IconButton
            size="small"
            disabled={running}
            title={waitHint ?? 'Gerar de novo'}
            onClick={() => onRegenerate(entry.key)}
          >
            <FiRefreshCw />
          </IconButton>
        )}
      </Box>
    </Box>
  )
})

export default function AudioManager({ onBack }: { onBack: () => void }): ReactElement {
  const entries = useMemo(buildEntries, [])
  const audioState = useAudioState()
  const { available, totalBytes, status } = audioState
  // Produção (preview/.exe): prévia só para ouvir, com os arquivos e as vozes do build
  // (enquanto não se sabe, mostra a prévia: nunca aparecem botões que não funcionariam)
  const readOnly = available !== true
  // Trocar a voz (no npm run dev) é só da conta administradora
  const admin = isAdmin(useAccess())
  const bundled = useMemo(
    () => ({
      files: Object.fromEntries(entries.filter((e) => hasAudioFile(e.key)).map((e) => [e.key, 1])),
      voices: Object.fromEntries(entries.map((e) => [e.key, bundledVoiceFor(e.key)]))
    }),
    [entries]
  )
  const files = readOnly ? bundled.files : audioState.files
  const voices: VoiceOverrides = readOnly ? bundled.voices : audioState.voices
  const [filter, setFilter] = useState<Filter>('all')
  const [search, setSearch] = useState('')
  // A busca filtra com a versão "atrasada" do texto: digitar nunca espera a lista
  const deferredSearch = useDeferredValue(search)
  const [playingKey, setPlayingKey] = useState<string | null>(null)
  const now = useNow()
  const playerRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => () => playerRef.current?.pause(), [])

  const running = !!status?.running
  const queued = useMemo(() => {
    if (!status?.running) return new Set<string>()
    const done = new Set(status.done)
    return new Set(status.queue.filter((key) => !done.has(key)))
  }, [status])

  const missingCount = useMemo(() => entries.filter((e) => !files[e.key]).length, [entries, files])

  // Linhas visíveis (filtro + busca), com o título da página antes de cada grupo
  const items = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase()
    const result: Item[] = []
    let lastPage = ''
    for (const entry of entries) {
      if (filter === 'missing' && files[entry.key]) continue
      if (filter === 'generated' && !files[entry.key]) continue
      if (query && !entry.haystack.includes(query)) continue
      if (entry.pageId !== lastPage) {
        result.push({ type: 'group', id: entry.pageId, title: entry.pageTitle })
        lastPage = entry.pageId
      }
      result.push({ type: 'entry', entry })
    }
    return result
  }, [entries, files, filter, deferredSearch])

  // A lista rola junto com a página (o <main>), então a virtualização usa ele como
  // área de rolagem e desconta a altura do que vem antes da lista (scrollMargin)
  const listRef = useRef<HTMLDivElement | null>(null)
  const [scrollMargin, setScrollMargin] = useState(0)
  const scrollElement = (): HTMLElement | null => document.getElementById('main-content')
  useLayoutEffect(() => {
    const main = scrollElement()
    if (!listRef.current || !main) return
    const offset =
      listRef.current.getBoundingClientRect().top -
      main.getBoundingClientRect().top +
      main.scrollTop
    if (Math.abs(offset - scrollMargin) > 1) setScrollMargin(offset)
  })

  // Ao buscar ou trocar o filtro com a lista rolada para baixo, volta ao começo dela
  // (logo abaixo da barra presa no topo), senão os resultados ficariam fora da tela
  const stickyRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const main = scrollElement()
    if (!main || !stickyRef.current) return
    const listStart = scrollMargin - stickyRef.current.offsetHeight
    if (main.scrollTop > listStart) main.scrollTop = listStart
  }, [deferredSearch, filter]) // de propósito: só ao mudar busca/filtro

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: scrollElement,
    estimateSize: (i) => (items[i].type === 'group' ? 40 : 64),
    getItemKey: (i) => {
      const item = items[i]
      return item.type === 'group' ? `group-${item.id}` : item.entry.key
    },
    overscan: 10,
    scrollMargin
  })

  const generate = (keys: string[] | null): void => {
    void audioTools!.generate(keys)
  }

  const regenerateAll = (): void => {
    if (window.confirm(`Gerar de novo todos os ${entries.length} áudios? Leva alguns minutos.`))
      generate(entries.map((e) => e.key))
  }

  const regenerateOne = useCallback((key: string) => void audioTools!.generate([key]), [])

  // Chave tocando agora também numa ref, para o callback continuar estável (as linhas são memoizadas)
  const playingKeyRef = useRef<string | null>(null)
  const togglePlay = useCallback((entry: Entry, version: number) => {
    playerRef.current?.pause()
    const next = playingKeyRef.current === entry.key ? null : entry.key
    if (next) {
      const player = new Audio(getAudioUrlByKey(entry.key, version))
      player.addEventListener('ended', () => {
        playingKeyRef.current = null
        setPlayingKey(null)
      })
      playerRef.current = player
      void player.play()
    }
    playingKeyRef.current = next
    setPlayingKey(next)
  }, [])

  // Preenchimento de progresso na linha que está tocando, como nos trechos das páginas.
  // A largura é atualizada direto no elemento a cada quadro, sem re-renderizar a lista;
  // a linha pode sair e voltar da tela (virtualização), então o elemento é guardado
  // por um callback ref estável
  const progressElRef = useRef<HTMLDivElement | null>(null)
  const setProgressEl = useCallback((el: HTMLDivElement | null) => {
    progressElRef.current = el
  }, [])
  useEffect(() => {
    if (!playingKey) return
    let frame = 0
    const tick = (): void => {
      const player = playerRef.current
      if (progressElRef.current && player?.duration)
        progressElRef.current.style.width = `${(player.currentTime / player.duration) * 100}%`
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [playingKey])

  const header = (
    <Button
      size="small"
      variant="outlined"
      startIcon={<FiArrowLeft />}
      onClick={onBack}
      sx={{ mb: 3 }}
    >
      Configurações
    </Button>
  )

  const total = status?.queue.length ?? 0
  const doneCount = status?.done.length ?? 0
  const errorCount = Object.keys(status?.errors ?? {}).length
  const currentEntry = entries.find((e) => e.key === status?.current)

  const rowState = (key: string): RowState =>
    running && status?.current === key
      ? 'current'
      : queued.has(key)
        ? 'queued'
        : status?.errors[key]
          ? 'error'
          : null

  return (
    <Page>
      {header}
      <Typography variant="h5" gutterBottom>
        Áudios
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Todos os textos em francês com áudio, como a voz vai falá-los.
        {!readOnly && (
          <>
            {' '}
            O progresso aparece aqui também quando o <code>npm run audio</code> é rodado pelo
            terminal.
          </>
        )}
      </Typography>

      {!readOnly && !admin && (
        <Alert severity="info" icon={<FiLock />} sx={{ mt: 2 }}>
          Só a conta administradora pode trocar a voz dos áudios. Entre com ela em Configurações →
          Conta.
        </Alert>
      )}

      {!readOnly && (
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="subtitle1">
              {entries.length} áudios · {entries.length - missingCount} gerados · {missingCount} não
              gerados · {formatBytes(totalBytes)}
            </Typography>

            {running ? (
              <Box sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2">
                    Gerando {Math.min(doneCount + 1, total)} de {total}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {total ? Math.round((doneCount / total) * 100) : 0}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={total ? (doneCount / total) * 100 : 0}
                  sx={{ height: 8, borderRadius: 4 }}
                />
                {currentEntry && (
                  <Typography variant="body2" color="text.secondary" noWrap sx={{ mt: 1 }}>
                    “{currentEntry.spoken}”
                  </Typography>
                )}
              </Box>
            ) : (
              status?.finishedAt && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Última geração: {formatFriendlyDate(status.finishedAt, now)} ·{' '}
                  {total - errorCount} gerado(s)
                  {errorCount ? ` · ${errorCount} com erro` : ''}
                </Typography>
              )
            )}

            <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                disabled={running || !missingCount}
                onClick={() => generate(null)}
              >
                Gerar os que faltam ({missingCount})
              </Button>
              <Button variant="outlined" disabled={running} onClick={regenerateAll}>
                Gerar todos de novo
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Busca, filtro e cabeçalho das colunas ficam presos no topo ao rolar a lista */}
      <Box
        ref={stickyRef}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 2,
          mt: 1,
          pt: 2,
          bgcolor: 'background.default'
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, mb: 1, flexWrap: 'wrap', alignItems: 'center' }}>
          <TextField
            size="small"
            placeholder="Buscar texto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ flex: 1, minWidth: 220 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FiSearch />
                  </InputAdornment>
                )
              }
            }}
          />
          {!readOnly && (
            <ToggleButtonGroup
              exclusive
              size="small"
              color="primary"
              value={filter}
              onChange={(_, value: Filter | null) => value && setFilter(value)}
            >
              <ToggleButton value="all">Todos</ToggleButton>
              <ToggleButton value="missing">Não gerados</ToggleButton>
              <ToggleButton value="generated">Gerados</ToggleButton>
            </ToggleButtonGroup>
          )}
        </Box>

        {/* Cabeçalho das colunas */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: readOnly ? GRID_COLUMNS_READ_ONLY : GRID_COLUMNS,
            gap: 2,
            px: 2,
            py: 1,
            borderBottom: 1,
            borderColor: 'divider'
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Texto falado
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            Voz
          </Typography>
          {!readOnly && (
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Gerado em
            </Typography>
          )}
        </Box>
      </Box>

      {/* Só as linhas perto da área visível existem de fato na tela */}
      <Box ref={listRef} sx={{ position: 'relative', height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((row) => {
          const item = items[row.index]
          return (
            <Box
              key={row.key}
              data-index={row.index}
              ref={virtualizer.measureElement}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${row.start - scrollMargin}px)`
              }}
            >
              {item.type === 'group' ? (
                <Typography
                  variant="body2"
                  sx={{
                    px: 2,
                    py: 1.25,
                    fontWeight: 600,
                    bgcolor: 'action.hover',
                    borderBottom: 1,
                    borderColor: 'divider'
                  }}
                >
                  {item.title}
                </Typography>
              ) : (
                <AudioRow
                  readOnly={readOnly}
                  canChangeVoice={admin}
                  entry={item.entry}
                  generatedAt={files[item.entry.key]}
                  voice={voices[item.entry.key] ?? DEFAULT_VOICE}
                  state={rowState(item.entry.key)}
                  error={status?.errors[item.entry.key]}
                  playing={playingKey === item.entry.key}
                  progressRef={setProgressEl}
                  running={running}
                  now={now}
                  onTogglePlay={togglePlay}
                  onRegenerate={regenerateOne}
                />
              )}
            </Box>
          )
        })}
      </Box>
      {!items.length && (
        <Typography color="text.secondary" sx={{ mt: 2 }}>
          Nenhum áudio encontrado.
        </Typography>
      )}
    </Page>
  )
}
