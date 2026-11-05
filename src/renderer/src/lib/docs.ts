// Documentos .md do projeto (na raiz e em docs/), embutidos no app no build.
// Um .md novo nesses lugares aparece sozinho em Configurações.

export interface ProjectDoc {
  id: string
  fileName: string
  title: string
  content: string
}

// O README é para quem desenvolve (GitHub), não para quem usa o app: fica de fora
const FILES = import.meta.glob<string>(
  ['../../../../*.md', '../../../../docs/**/*.md', '!../../../../README.md'],
  {
    query: '?raw',
    import: 'default',
    eager: true
  }
)

// Usa o primeiro título "# ..." do arquivo; sem título, usa o nome do arquivo
function firstHeading(content: string): string | undefined {
  return content.match(/^#\s+(.+)$/m)?.[1].trim()
}

export const PROJECT_DOCS: ProjectDoc[] = Object.entries(FILES)
  .map(([path, content]) => {
    const fileName = path.replace(/^(\.\.\/)+/, '')
    return { id: fileName, fileName, title: firstHeading(content) ?? fileName, content }
  })
  .sort((a, b) => a.fileName.localeCompare(b.fileName))

export function getProjectDoc(id: string): ProjectDoc | undefined {
  return PROJECT_DOCS.find((doc) => doc.id === id)
}
