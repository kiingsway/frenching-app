import { useEffect, useRef, useState, type ReactElement, type ReactNode } from 'react'
import Markdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { FiArrowLeft, FiCheck, FiCopy } from 'react-icons/fi'
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
  // Bloco de código (ex.: os pedidos para outras IAs): quebra a linha em vez de
  // rolar para o lado, e tem um botão para copiar o texto inteiro
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
  code: ({ children, className }) =>
    // Dentro de um bloco, o <pre> já cuida do estilo; aqui só o código no meio do texto
    className?.startsWith('language-') ? (
      <code>{children}</code>
    ) : (
      <Box
        component="code"
        sx={{
          px: 0.6,
          py: 0.1,
          borderRadius: 0.5,
          fontFamily: 'Consolas, "Cascadia Mono", ui-monospace, monospace',
          fontSize: '0.88em',
          bgcolor: 'action.hover'
        }}
      >
        {children}
      </Box>
    ),
  blockquote: ({ children }) => (
    <Paper
      variant="outlined"
      sx={{ px: 2, py: 1, my: 2, borderLeft: 4, borderLeftColor: 'primary.main' }}
    >
      {children}
    </Paper>
  ),
  table: ({ children }) => <DocTable>{children}</DocTable>
}

// Tabela com contorno e cantos arredondados, cabeçalho destacado e linhas separadas.
// Em telas estreitas, rola para o lado dentro do próprio contorno
function DocTable({ children }: { children: ReactNode }): ReactElement {
  return (
    <Paper variant="outlined" sx={{ my: 2.5, overflowX: 'auto', bgcolor: 'transparent' }}>
      <Box
        component="table"
        sx={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: 14,
          lineHeight: 1.5,
          '& th, & td': {
            px: 1.75,
            py: 1.1,
            textAlign: 'left',
            verticalAlign: 'top',
            // Não parte palavras no meio: quebra só entre palavras
            overflowWrap: 'normal',
            minWidth: 90
          },
          '& thead th': {
            fontWeight: 600,
            fontSize: 13,
            whiteSpace: 'nowrap',
            color: 'text.secondary',
            bgcolor: 'action.hover',
            borderBottom: 1,
            borderColor: 'divider'
          },
          '& tbody tr + tr td': { borderTop: 1, borderColor: 'divider' },
          '& tbody tr:hover td': { bgcolor: 'action.hover' }
        }}
      >
        {children}
      </Box>
    </Paper>
  )
}

function CodeBlock({ children }: { children: ReactNode }): ReactElement {
  const ref = useRef<HTMLPreElement | null>(null)
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = (): void => {
    const text = ref.current?.innerText.replace(/\n$/, '') ?? ''
    void navigator.clipboard.writeText(text).then(() => setCopied(true))
  }

  return (
    <Paper variant="outlined" sx={{ position: 'relative', my: 2, bgcolor: 'action.hover' }}>
      <Button
        size="small"
        onClick={copy}
        startIcon={copied ? <FiCheck /> : <FiCopy />}
        color={copied ? 'success' : 'primary'}
        sx={{ position: 'absolute', top: 6, right: 6, minWidth: 0, bgcolor: 'background.paper' }}
      >
        {copied ? 'Copiado' : 'Copiar'}
      </Button>
      <Box
        component="pre"
        ref={ref}
        sx={{
          m: 0,
          p: 2,
          pr: { xs: 2, sm: 12 },
          pt: { xs: 6, sm: 2 },
          // O <code> de dentro herda tudo do bloco (sem o fundo do código no meio do texto)
          '& code': { p: 0, bgcolor: 'transparent', fontSize: 'inherit', borderRadius: 0 },
          // Quebra as linhas longas em vez de criar rolagem para o lado
          whiteSpace: 'pre-wrap',
          overflowWrap: 'anywhere',
          fontFamily: 'Consolas, "Cascadia Mono", ui-monospace, monospace',
          fontSize: 13.5,
          lineHeight: 1.6
        }}
      >
        {children}
      </Box>
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
    <>
      {/* Barra fixa no topo: continua visível durante o scroll */}
      <Paper
        square
        elevation={0}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: { xs: 2, sm: 3, md: 5 },
          py: 1.5,
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Button
          size="small"
          variant="outlined"
          startIcon={<FiArrowLeft />}
          onClick={onBack}
          sx={{ flexShrink: 0 }}
        >
          Configurações
        </Button>
        {doc && (
          <Typography variant="body2" color="text.secondary" noWrap title={doc.fileName}>
            {doc.fileName}
          </Typography>
        )}
      </Paper>
      <Page>
        {doc ? (
          <Box sx={{ overflowWrap: 'anywhere', '& li ul': { pl: 3.5 } }}>
            <Markdown remarkPlugins={[remarkGfm]} components={COMPONENTS}>
              {doc.content}
            </Markdown>
          </Box>
        ) : (
          <Typography color="text.secondary">Documento não encontrado.</Typography>
        )}
      </Page>
    </>
  )
}
