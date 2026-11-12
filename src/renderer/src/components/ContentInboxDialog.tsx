import { useEffect, useState, type ReactElement } from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { inboxTools } from '@/lib/platform'

// Janela para colar o JSON de uma página de estudo e salvá-lo em content-inbox/
// (só no Electron em modo de desenvolvimento, para administradores)
export default function ContentInboxDialog({
  open,
  onClose,
  onSaved
}: {
  open: boolean
  onClose: () => void
  onSaved: (fileName: string) => void
}): ReactElement {
  const [text, setText] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  // Cada abertura começa limpa
  useEffect(() => {
    if (open) {
      setText('')
      setError(null)
    }
  }, [open])

  const save = async (): Promise<void> => {
    if (!inboxTools) return
    setSaving(true)
    setError(null)
    try {
      const result = await inboxTools.save(text)
      if (result.ok) onSaved(result.message)
      else setError(result.message)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog open={open} onClose={saving ? undefined : onClose} fullWidth maxWidth="md">
      <DialogTitle>Colar o JSON do conteúdo</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          O JSON é salvo na pasta content-inbox. Depois, é só pedir ao Claude: “adicionar o
          próximo conteúdo”.
        </DialogContentText>
        <TextField
          autoFocus
          fullWidth
          multiline
          minRows={12}
          maxRows={20}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='{ "topic": "…", "pt": { … }, "fr": { … }, "sources": [ … ] }'
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
        <Button onClick={onClose} disabled={saving}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={save} disabled={saving || !text.trim()}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
