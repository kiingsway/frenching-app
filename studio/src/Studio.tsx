import { useCallback, useEffect, useState, type ReactElement } from 'react'
import {
  IoCheckmarkCircle,
  IoCheckmarkCircleOutline,
  IoShieldCheckmark,
  IoShieldCheckmarkOutline
} from 'react-icons/io5'
import { LuFileJson2 } from 'react-icons/lu'
import {
  FiClipboard,
  FiCopy,
  FiEdit2,
  FiEye,
  FiRefreshCw,
  FiSearch,
  FiTrash2,
  FiX
} from 'react-icons/fi'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Snackbar from '@mui/material/Snackbar'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { ProgressBar } from '@/components/motion'
import { getTopicContent } from '@/content'
import { REVIEWS } from '@/data/revisoes'
import { SECTIONS, type Section, type Topic } from '@/data/topics'
import { reviewPagePrompt, studyPagePrompt } from '@/lib/ai-prompt'
import PasteDialog from './PasteDialog'
import { fetchInbox, sameTopic, type InboxFile } from './inbox'

// Todas as seções e tópicos do Painel, na mesma ordem
const ALL_TOPICS = SECTIONS.flatMap((s) => s.topics)

// Busca sem diferenciar maiúsculas nem acentos
const fold = (s: string): string => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()

// Quantas vezes o pedido de cada tópico foi copiado, salvo no localStorage do navegador
const COPIES_KEY = 'studio.copies'
// Quantas vezes o pedido de revisão de cada tópico foi copiado
const REVIEW_COPIES_KEY = 'studio.reviewCopies'
function loadCopies(key: string = COPIES_KEY): Record<string, number> {
  try {
    const data = JSON.parse(localStorage.getItem(key) ?? '{}')
    return data && typeof data === 'object' ? data : {}
  } catch {
    return {}
  }
}

// Contador no canto do ícone de copiar: círculo só com a borda, na cor do ícone
function CopyCount({ count }: { count: number }): ReactElement | null {
  if (!count) return null
  return (
    <Box
      component="span"
      aria-label={`${count} cópia${count === 1 ? '' : 's'}`}
      sx={{
        position: 'absolute',
        top: -7,
        right: -9,
        minWidth: 15,
        height: 15,
        px: count > 9 ? 0.4 : 0,
        borderRadius: 8,
        border: '1.5px solid currentColor',
        bgcolor: 'transparent',
        color: 'inherit',
        fontSize: 9,
        fontWeight: 700,
        lineHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}
    >
      {count}
    </Box>
  )
}

interface Status {
  // Já existe um JSON colado (na fila ou já integrado) para o tópico
  json: boolean
  // A página de estudo já está no app
  app: boolean
}

function Progress({
  label,
  value,
  total
}: {
  label: string
  value: number
  total: number
}): ReactElement {
  const percent = total ? Math.round((value / total) * 100) : 0
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
        <Typography variant="body2">{label}</Typography>
        <Typography variant="body2" color="text.secondary">
          {value}/{total} ({percent}%)
        </Typography>
      </Box>
      <ProgressBar value={percent} />
    </Box>
  )
}

export default function Studio(): ReactElement {
  const [files, setFiles] = useState<InboxFile[]>([])
  const [search, setSearch] = useState('')
  const [pasteFor, setPasteFor] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [copies, setCopies] = useState<Record<string, number>>(() => loadCopies())
  const [reviewCopies, setReviewCopies] = useState<Record<string, number>>(() =>
    loadCopies(REVIEW_COPIES_KEY)
  )

  const load = useCallback((): void => {
    void fetchInbox()
      .then(setFiles)
      .catch(() => setMessage('Não deu para ler a pasta content-inbox.'))
  }, [])

  // Recarrega ao abrir e ao voltar para a janela (o Claude pode ter integrado algo)
  useEffect(() => {
    load()
    window.addEventListener('focus', load)
    return () => window.removeEventListener('focus', load)
  }, [load])

  const statusOf = (topic: Topic): Status => {
    const app = !!getTopicContent(topic.id)
    // Página no app conta como JSON feito, mesmo que o JSON não esteja mais na pasta
    const json = app || files.some((f) => sameTopic(f.topic, topic.title))
    return { json, app }
  }

  const copyPrompt = async (topic: Topic, section: Section): Promise<void> => {
    try {
      await navigator.clipboard.writeText(studyPagePrompt(topic.title, section.title))
      const next = { ...copies, [topic.id]: (copies[topic.id] ?? 0) + 1 }
      setCopies(next)
      localStorage.setItem(COPIES_KEY, JSON.stringify(next))
      setMessage('Pedido copiado. Cole na IA.')
    } catch {
      setMessage('O navegador não deixou copiar.')
    }
  }

  // Copia o pedido para a IA revisar a página que já existe (fontes e citações [n])
  const copyReview = async (topic: Topic): Promise<void> => {
    const content = getTopicContent(topic.id)
    if (!content) return
    try {
      await navigator.clipboard.writeText(reviewPagePrompt(content.pt.title, content))
      const next = { ...reviewCopies, [topic.id]: (reviewCopies[topic.id] ?? 0) + 1 }
      setReviewCopies(next)
      localStorage.setItem(REVIEW_COPIES_KEY, JSON.stringify(next))
      setMessage('Pedido de revisão copiado. Cole na IA.')
    } catch {
      setMessage('O navegador não deixou copiar.')
    }
  }

  // Apaga do localStorage a contagem de cópias (escrever e revisar) só dos tópicos desta seção
  const clearSectionCopies = (section: Section): void => {
    if (!window.confirm(`Apagar a contagem de cópias da seção "${section.title}"?`)) return
    try {
      const next = { ...copies }
      const nextReview = { ...reviewCopies }
      for (const topic of section.topics) {
        delete next[topic.id]
        delete nextReview[topic.id]
      }
      localStorage.setItem(COPIES_KEY, JSON.stringify(next))
      localStorage.setItem(REVIEW_COPIES_KEY, JSON.stringify(nextReview))
      setCopies(next)
      setReviewCopies(nextReview)
      setMessage(`Contagem de cópias de "${section.title}" apagada.`)
    } catch {
      setMessage('Não deu para apagar a contagem.')
    }
  }

  const statuses = ALL_TOPICS.map(statusOf)
  const jsonCount = statuses.filter((s) => s.json).length
  const appCount = statuses.filter((s) => s.app).length
  // Revisão das fontes (data/revisoes.ts): "fontes" já conta como fontes conferidas
  const citedCount = ALL_TOPICS.filter((t) => REVIEWS[t.id] === 'citacoes').length
  const checkedCount = ALL_TOPICS.filter((t) => REVIEWS[t.id]).length

  const query = fold(search.trim())
  // Ordem: primeiro o que ainda não tem JSON, depois o que tem JSON mas não está no app,
  // e por último o que já está no app (concluído). Vale para os tópicos dentro da seção e
  // para as seções, pela etapa do tópico mais atrasado. Dentro de cada etapa, a ordem é a
  // do Painel (o sort é estável)
  const stage = (topic: Topic): number => {
    const s = statusOf(topic)
    return s.app ? 2 : s.json ? 1 : 0
  }
  const sorted = SECTIONS.map((section) => {
    const topics = [...section.topics].sort((a, b) => stage(a) - stage(b))
    return { section, stage: Math.min(...topics.map(stage)), topics }
  }).sort((a, b) => a.stage - b.stage)
  const visible = sorted
    .map((s) => ({
      ...s,
      topics: s.topics.filter((t) => !query || fold(t.title).includes(query))
    }))
    .filter((s) => s.topics.length)

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: { xs: 2.5, md: 4 }, maxWidth: 900, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom>
            Frenching Studio
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Páginas de estudo do Painel. Copie o pedido, cole na IA e cole aqui o JSON que ela
            devolver. Depois, peça ao Claude “adicionar o próximo conteúdo”.
          </Typography>
        </Box>
        <Tooltip title="Recarregar">
          <IconButton onClick={load}>
            <FiRefreshCw />
          </IconButton>
        </Tooltip>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ display: 'grid', gap: 2 }}>
          <Progress label="JSON pronto" value={jsonCount} total={ALL_TOPICS.length} />
          <Progress label="No app" value={appCount} total={ALL_TOPICS.length} />
          <Progress label="Fontes conferidas" value={checkedCount} total={ALL_TOPICS.length} />
          <Progress label="Revisadas com [n]" value={citedCount} total={ALL_TOPICS.length} />
        </CardContent>
      </Card>

      <TextField
        fullWidth
        size="small"
        placeholder="Buscar tópico"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === 'Escape' && setSearch('')}
        sx={{ mb: 2 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <FiSearch />
              </InputAdornment>
            ),
            endAdornment: search ? (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setSearch('')}>
                  <FiX />
                </IconButton>
              </InputAdornment>
            ) : undefined
          }
        }}
      />

      {visible.length === 0 && (
        <Typography color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
          Nenhum tópico com esse título.
        </Typography>
      )}

      {visible.map(({ section, topics }) => (
        <Card key={section.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="subtitle1" sx={{ flex: 1, minWidth: 0 }}>
                {section.title}
              </Typography>
              <Tooltip title="Apagar contagem de cópias desta seção">
                <span>
                  <IconButton
                    size="small"
                    onClick={() => clearSectionCopies(section)}
                    disabled={!section.topics.some((t) => copies[t.id] || reviewCopies[t.id])}
                  >
                    <FiTrash2 />
                  </IconButton>
                </span>
              </Tooltip>
            </Box>
            {topics.map((topic) => {
              const s = statusOf(topic)
              return (
                <Box
                  key={topic.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    py: 0.5,
                    px: 1,
                    mx: -1,
                    borderRadius: 1,
                    '&:hover': { bgcolor: 'action.hover' }
                  }}
                >
                  <Tooltip title={s.json ? 'JSON pronto' : 'Sem JSON'}>
                    <Box
                      sx={{
                        display: 'flex',
                        fontSize: 20,
                        color: s.json ? 'primary.main' : 'text.disabled',
                        opacity: s.json ? 1 : 0.5
                      }}
                    >
                      <LuFileJson2 />
                    </Box>
                  </Tooltip>
                  <Tooltip title={s.app ? 'No app' : 'Ainda não está no app'}>
                    <Box
                      sx={{
                        display: 'flex',
                        fontSize: 20,
                        // Verde mais vivo que o success do tema
                        color: s.app ? '#22c55e' : 'text.disabled',
                        opacity: s.app ? 1 : 0.5
                      }}
                    >
                      {s.app ? <IoCheckmarkCircle /> : <IoCheckmarkCircleOutline />}
                    </Box>
                  </Tooltip>
                  <Tooltip
                    title={
                      REVIEWS[topic.id] === 'citacoes'
                        ? 'Revisada: fontes lidas e citações [n]'
                        : REVIEWS[topic.id] === 'fontes'
                          ? 'Fontes conferidas, ainda sem [n] no texto'
                          : 'Não revisada'
                    }
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        fontSize: 20,
                        color:
                          REVIEWS[topic.id] === 'citacoes'
                            ? '#22c55e'
                            : REVIEWS[topic.id] === 'fontes'
                              ? 'warning.main'
                              : 'text.disabled',
                        opacity: REVIEWS[topic.id] ? 1 : 0.5
                      }}
                    >
                      {REVIEWS[topic.id] ? <IoShieldCheckmark /> : <IoShieldCheckmarkOutline />}
                    </Box>
                  </Tooltip>
                  <Typography sx={{ flex: 1, minWidth: 0, fontSize: 15, ml: 0.5 }}>
                    {topic.title}
                  </Typography>
                  <Tooltip title="Copiar pedido para a IA escrever a página">
                    <IconButton size="small" onClick={() => void copyPrompt(topic, section)}>
                      <Box component="span" sx={{ position: 'relative', display: 'flex', gap: 0.5 }}>
                        <FiEdit2 />
                        <FiCopy />
                        <CopyCount count={copies[topic.id] ?? 0} />
                      </Box>
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title={
                      s.app
                        ? 'Copiar pedido para a IA revisar a página'
                        : 'Só dá para revisar depois que a página estiver no app'
                    }
                  >
                    <span>
                      <IconButton
                        size="small"
                        disabled={!s.app}
                        onClick={() => void copyReview(topic)}
                      >
                        <Box component="span" sx={{ position: 'relative', display: 'flex', gap: 0.5 }}>
                          <FiEye />
                          <FiCopy />
                          <CopyCount count={reviewCopies[topic.id] ?? 0} />
                        </Box>
                      </IconButton>
                    </span>
                  </Tooltip>
                  <Tooltip title="Colar JSON">
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => setPasteFor(topic.title)}
                    >
                      <FiClipboard />
                    </IconButton>
                  </Tooltip>
                </Box>
              )
            })}
          </CardContent>
        </Card>
      ))}

      <PasteDialog
        topic={pasteFor}
        onClose={() => setPasteFor(null)}
        onSaved={(file) => {
          setPasteFor(null)
          setMessage(`Salvo em content-inbox/${file}`)
          load()
        }}
      />
      <Snackbar
        open={!!message}
        autoHideDuration={3000}
        onClose={() => setMessage(null)}
        message={message}
      />
    </Box>
  )
}
