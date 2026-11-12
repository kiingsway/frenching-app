// Pedido pronto para outra IA escrever uma página de estudo que ainda não existe.
// O texto vem de docs/pedidos-para-outras-ias.md (única fonte): o contexto geral e o
// modelo "Páginas de estudo", com o nome do tópico e da seção já trocados.
import doc from '../../../../docs/pedidos-para-outras-ias.md?raw'

// Primeiro bloco de código (```...```) depois do título "## ..." dado
function codeAfter(heading: string): string {
  const start = doc.indexOf(`## ${heading}`)
  if (start < 0) return ''
  const open = doc.indexOf('```', start)
  if (open < 0) return ''
  const bodyStart = doc.indexOf('\n', open) + 1
  const close = doc.indexOf('\n```', bodyStart)
  return close < 0 ? '' : doc.slice(bodyStart, close)
}

export function studyPagePrompt(topicTitle: string, sectionTitle: string): string {
  const context = codeAfter('Contexto geral')
  const page = codeAfter('Páginas de estudo')
    .replaceAll('[nome do tópico, como está na lista]', topicTitle)
    .replaceAll('[nome da seção]', sectionTitle)
    .replaceAll('[nome do tópico]', topicTitle)
  return `${context}\n\n${page}\n`
}
