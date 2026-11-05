import type { ReactElement } from 'react'
import Markdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { FiArrowLeft } from 'react-icons/fi'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import { getProjectDoc } from '@/lib/docs'

// Mapeia os elementos do Markdown para componentes do MUI
const COMPONENTS: Components = {
  h1: ({ children }) => (
    <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="h5" sx={{ mt: 4, mb: 1.5 }}>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
      {children}
    </Typography>
  ),
  p: ({ children }) => <Typography sx={{ mb: 1.5 }}>{children}</Typography>,
  a: ({ href, children }) => (
    <Link href={href} target="_blank" rel="noreferrer">
      {children}
    </Link>
  ),
  ul: ({ children, className }) => (
    <Box
      component="ul"
      sx={{
        my: 1,
        pl: className?.includes('contains-task-list') ? 0 : 3,
        listStyle: className?.includes('contains-task-list') ? 'none' : undefined
      }}
    >
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Typography component="li" sx={{ mb: 0.25 }}>
      {children}
    </Typography>
  ),
  input: ({ checked }) => (
    <Checkbox size="small" checked={!!checked} disabled sx={{ p: 0.5, mr: 0.5 }} />
  ),
  hr: () => <Divider sx={{ my: 3 }} />,
  blockquote: ({ children }) => (
    <Paper
      variant="outlined"
      sx={{ px: 2, py: 1, my: 2, borderLeft: 4, borderLeftColor: 'primary.main' }}
    >
      {children}
    </Paper>
  )
}

export default function DocViewer({
  docId,
  onBack
}: {
  docId: string
  onBack: () => void
}): ReactElement {
  const doc = getProjectDoc(docId)

  return (
    <Page>
      <Button
        size="small"
        variant="outlined"
        startIcon={<FiArrowLeft />}
        onClick={onBack}
        sx={{ mb: 3 }}
      >
        Configurações
      </Button>
      {doc ? (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {doc.fileName}
          </Typography>
          <Box sx={{ overflowWrap: 'anywhere', '& li ul': { pl: 3.5 } }}>
            <Markdown remarkPlugins={[remarkGfm]} components={COMPONENTS}>
              {doc.content}
            </Markdown>
          </Box>
        </>
      ) : (
        <Typography color="text.secondary">Documento não encontrado.</Typography>
      )}
    </Page>
  )
}
