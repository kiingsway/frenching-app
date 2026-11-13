import { useEffect, useState, type ReactElement } from 'react'
import { FiClipboard } from 'react-icons/fi'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { saveJson } from './inbox'

// Janela para colar a resposta da IA (o JSON da página de estudo) de um tópico.
// Salva em content-inbox/, de onde o Claude integra ("adicionar o próximo conteúdo")
export default function PasteDialog({
  topic,
  onClose,
  onSaved
}: {
  // Título do tópico; null = janela fechada
  topic: string | null
  onClose: () => void
  onSaved: (fileName: string) => void
}): ReactElement {
  const [text, setText] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (topic) {
      setText('')
      setError(null)
    }
  }, [topic])

  const pasteClipboard = async (): Promise<void> => {
    try {
      setText(await navigator.clipboard.readText())
    } catch {
      setError('O navegador não deixou ler a área de transferência. Cole com Ctrl+V.')
    }
  }

  const save = async (): Promise<void> => {
    if (!topic) return
    setSaving(true)
    setError(null)
    try {
      const result = await saveJson(text, topic)
      if (result.ok) onSaved(result.message)
      else setError(result.message)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog open={!!topic} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Colar JSON</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>{topic}</DialogContentText>
        <TextField
          autoFocus
          fullWidth
          multiline
          minRows={12}
          maxRows={20}
          placeholder='{ "topic": "…", "pt": { … }, "fr": { … }, "sources": [ … ] }'
          value={text}
          onChange={(e) => setText(e.target.value)}
          slotProps={{
            htmlInput: { spellCheck: false, style: { fontFamily: 'monospace', fontSize: 13 } }
          }}
        />
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          startIcon={<FiClipboard />}
          onClick={() => void pasteClipboard()}
          sx={{ mr: 'auto' }}
        >
          Colar da área de transferência
        </Button>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" disabled={!text.trim() || saving} onClick={() => void save()}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
