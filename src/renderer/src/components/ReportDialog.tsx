import { useEffect, useState, type ReactElement, type ReactNode } from 'react'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { hasCloudAccess, useAccess } from '@/lib/access'

// Janela de reporte com comentário, usada para páginas de estudo (ReportPageDialog)
// e para áudios (menu de botão direito do áudio). Quem chama decide onde salvar
export default function ReportDialog({
  open,
  onClose,
  onSent,
  title,
  subject,
  placeholder,
  onSubmit,
  commentOptional = false
}: {
  open: boolean
  onClose: () => void
  onSent: () => void
  title: string
  // O que está sendo reportado, mostrado acima do campo
  subject: ReactNode
  placeholder: string
  onSubmit: (comment: string) => Promise<void>
  // Pode enviar sem comentário (reporte de áudio)
  commentOptional?: boolean
}): ReactElement {
  const access = useAccess()
  const canSend = hasCloudAccess(access)
  const [comment, setComment] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const canSubmit = !sending && (commentOptional || !!comment.trim())

  // Cada abertura começa limpa
  useEffect(() => {
    if (open) {
      setComment('')
      setError(null)
    }
  }, [open])

  const send = async (): Promise<void> => {
    if (!canSubmit) return
    setSending(true)
    setError(null)
    try {
      await onSubmit(comment)
      onSent()
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setSending(false)
    }
  }

  return (
    <Dialog
      open={open}
      onClose={sending ? undefined : onClose}
      fullWidth
      maxWidth="sm"
      // As teclas ficam na janela: o Esc só a fecha, sem acionar os atalhos da página
      // de estudo (que ouvem no window)
      onKeyDown={(e) => e.stopPropagation()}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText component="div" sx={{ mb: 2 }}>
          {subject}
        </DialogContentText>
        {canSend ? (
          <TextField
            autoFocus
            fullWidth
            multiline
            minRows={4}
            label={commentOptional ? 'Comentário (opcional)' : 'Comentário'}
            placeholder={placeholder}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => {
              // Ctrl+Enter envia
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault()
                void send()
              }
            }}
            slotProps={{ htmlInput: { maxLength: 2000 } }}
          />
        ) : (
          <Alert severity="info">
            {access.user
              ? 'Sua conta ainda não tem acesso à nuvem, então não dá para reportar por enquanto.'
              : 'Entre com Google em Configurações → Conta para reportar.'}
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} disabled={sending} color="inherit">
          Cancelar
        </Button>
        {canSend && (
          <Button variant="contained" onClick={() => void send()} disabled={!canSubmit}>
            {sending ? 'Enviando…' : 'Enviar'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}
