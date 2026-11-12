// Transforma o JSON de uma página de estudo (feito por outra IA) no arquivo do app.
// Uso: node scripts/importar-json.mts <arquivo.json>
//
// O que faz:
//  - acha o tópico pelo campo "topic" (título em src/renderer/src/data/topics.ts);
//  - troca apóstrofo reto por ’ entre letras;
//  - na versão pt, divide o francês de várias frases em uma marcação por frase
//    (cada frase com a sua dica e o seu áudio curto);
//  - grava src/renderer/src/content/<id>.ts e registra em content/index.ts;
//  - avisa de problemas que ele não conserta (Markdown, \n, célula vazia, fontes etc.).
// A revisão do conteúdo (docs/revisao-de-conteudo.md), o typecheck e o áudio ficam com quem chamou.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const contentDir = join(root, 'src/renderer/src/content')
const file = process.argv[2]
if (!file) {
  console.error('Uso: node scripts/importar-json.mts <arquivo.json>')
  process.exit(1)
}

const warnings: string[] = []
const warn = (s: string): number => warnings.push(s)

// --- JSON e tópico ---
let data: any
try {
  data = JSON.parse(readFileSync(file, 'utf8'))
} catch (e) {
  console.error(`JSON inválido: ${(e as Error).message}`)
  process.exit(1)
}
for (const k of ['topic', 'pt', 'fr', 'sources']) {
  if (!data[k]) {
    console.error(`Faltou o campo "${k}" no JSON.`)
    process.exit(1)
  }
}

const { SECTIONS } = await import(pathToFileURL(join(root, 'src/renderer/src/data/topics.ts')).href)
const norm = (s: string): string => s.toLowerCase().replace(/[\s:–—-]+/g, '')
const all = SECTIONS.flatMap((s: any) => s.topics) as { id: string; title: string }[]
// A outra IA às vezes marca o título do tópico com [[francês|tradução]]: fica só o francês
const wanted = String(data.topic).replace(/\[\[([^|\]]+)\|[^\]]+\]\]/g, '$1')
const topic = all.find((t) => norm(t.title) === norm(wanted))
if (!topic) {
  console.error(`Tópico não encontrado em topics.ts: "${data.topic}"`)
  process.exit(1)
}
const out = join(contentDir, topic.id + '.ts')
if (existsSync(out)) {
  console.error(`Já existe conteúdo para ${topic.id} (${out}). Nada foi gravado.`)
  process.exit(1)
}

// --- limpeza e avisos ---
let apostrophes = 0
const fix = (s: string): string =>
  s.replace(/(\p{L})'(\p{L})/gu, (_, a, b) => {
    apostrophes++
    return `${a}’${b}`
  })

function checkText(s: string, where: string, lang: 'pt' | 'fr'): void {
  if (/\*\*|(^|\s)#\s/.test(s)) warn(`${where}: parece ter Markdown`)
  if (/\\n|\n/.test(s)) warn(`${where}: tem quebra de linha dentro do texto`)
  if (lang === 'fr' && s.includes('[[')) warn(`${where}: a versão fr não deve ter marcação [[ ]]`)
  if (lang === 'pt') {
    const opens = (s.match(/\[\[/g) ?? []).length
    const closes = (s.match(/\]\]/g) ?? []).length
    if (opens !== closes) warn(`${where}: marcação [[ ]] desbalanceada`)
  }
}

function mapLocalized(c: any, lang: 'pt' | 'fr'): any {
  const t = (s: string, w: string): string => {
    const v = fix(s)
    checkText(v, `${lang} ${w}`, lang)
    return v
  }
  const blocks = c.blocks.map((b: any, i: number) => {
    const w = `bloco ${i + 1} (${b.type})`
    switch (b.type) {
      case 'heading':
      case 'paragraph':
        return { type: b.type, text: t(b.text, w) }
      case 'list':
        if (b.items.some((x: string) => /^\s*(\d+[.)]|[-•*])\s/.test(x))) warn(`${lang} ${w}: item com numeração ou marcador`)
        return { type: 'list', items: b.items.map((x: string) => t(x, w)) }
      case 'table':
        if (b.rows.some((r: string[]) => r.length !== b.headers.length)) warn(`${lang} ${w}: linha com número de colunas diferente do cabeçalho`)
        if (b.rows.some((r: string[]) => r.some((x) => !x || !x.trim()))) warn(`${lang} ${w}: célula vazia`)
        if (b.headers.some((h: string) => /^tradu/i.test(h))) warn(`${lang} ${w}: cabeçalho "Tradução" — confira se a coluna é mesmo tradução`)
        return {
          type: 'table',
          headers: b.headers.map((x: string) => t(x, w)),
          rows: b.rows.map((r: string[]) => r.map((x) => t(x, w)))
        }
      case 'callout':
        return { type: 'callout', tone: b.tone, ...(b.title ? { title: t(b.title, w) } : {}), text: t(b.text, w) }
      default:
        warn(`${lang} ${w}: tipo de bloco desconhecido "${b.type}"`)
        return b
    }
  })
  if (blocks.length < 6 || blocks.length > 12) warn(`${lang}: ${blocks.length} blocos (o esperado é de 6 a 12)`)
  if (!blocks.some((b: any) => b.type === 'callout' && b.tone === 'warning')) warn(`${lang}: sem aviso (warning)`)
  if (!blocks.some((b: any) => b.type === 'callout' && b.tone === 'tip')) warn(`${lang}: sem dica (tip)`)
  // Caixa vermelha "Sem fonte oficial": vai por último, e o aviso lembra de conferir se falta
  const unverifiedAt = blocks.findIndex((b: any) => b.type === 'callout' && b.tone === 'unverified')
  if (unverifiedAt >= 0 && unverifiedAt !== blocks.length - 1) warn(`${lang}: a caixa "unverified" deve ser o último bloco`)
  if (unverifiedAt < 0) warn(`${lang}: sem caixa "Sem fonte oficial" (unverified): confira se algo na página não tem fonte`)
  return { title: t(c.title, 'título'), summary: t(c.summary, 'resumo'), blocks }
}

// --- divisão por frase (só pt) ---
const MARKUP = /\[\[([^|\]]+)\|([^\]]+)\]\]/g
const SPLIT = /(?<=[.!?…])\s+(?=[A-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜÇŒ"0-9«“])/u
let splitCount = 0

function splitText(text: string, where: string): string {
  if (!text.includes('[[')) return text
  return text.replace(MARKUP, (whole, fr: string, pt: string) => {
    const frParts = fr.split(SPLIT).map((s) => s.trim()).filter(Boolean)
    if (frParts.length < 2) return whole
    const ptParts = pt.split(SPLIT).map((s) => s.trim()).filter(Boolean)
    if (frParts.length !== ptParts.length) {
      warn(`NÃO DIVIDIDO (${frParts.length} frases em francês × ${ptParts.length} em português) em ${where}: ${fr.slice(0, 60)}…`)
      return whole
    }
    splitCount++
    return frParts.map((f, i) => `[[${f}|${ptParts[i]}]]`).join(' ')
  })
}

function splitPt(pt: any): any {
  const t = (s: string, w: string): string => splitText(s, w)
  return {
    title: t(pt.title, 'título'),
    summary: t(pt.summary, 'resumo'),
    blocks: pt.blocks.map((b: any, i: number) => {
      const w = `bloco ${i + 1}`
      switch (b.type) {
        case 'heading':
        case 'paragraph':
          return { ...b, text: t(b.text, w) }
        case 'list':
          return { ...b, items: b.items.map((x: string) => t(x, w)) }
        case 'table':
          return { ...b, headers: b.headers.map((x: string) => t(x, w)), rows: b.rows.map((r: string[]) => r.map((x) => t(x, w))) }
        case 'callout':
          return { ...b, title: b.title ? t(b.title, w) : b.title, text: t(b.text, w) }
      }
      return b
    })
  }
}

// --- fontes ---
const sources = data.sources.map((s: any) => ({ title: fix(String(s.title)), url: String(s.url).trim() }))
if (!sources.length) warn('sem fontes')
for (const s of sources) if (!/^https?:\/\//.test(s.url)) warn(`fonte com endereço inválido: ${s.url}`)

// --- monta e grava ---
const page = {
  id: topic.id,
  pt: splitPt(mapLocalized(data.pt, 'pt')),
  fr: mapLocalized(data.fr, 'fr'),
  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],
  sources
}

const q = (s: string): string => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
const IND = (n: number): string => '  '.repeat(n)

function str(s: string, level: number): string {
  if (s.length <= 110) return q(s)
  const pieces = s.split(/(?<=[.!?…]\s)|(?<=\]\]\s)/)
  const lines: string[] = []
  let cur = ''
  for (const p of pieces) {
    if (cur && (cur + p).length > 160) {
      lines.push(cur)
      cur = p
    } else cur += p
  }
  if (cur) lines.push(cur)
  if (lines.length === 1) return q(s)
  return '\n' + lines.map((l) => IND(level + 1) + q(l)).join(' +\n')
}
const strProp = (key: string, s: string, level: number): string => {
  const v = str(s, level)
  return v.startsWith('\n') ? `${IND(level)}${key}:${v}` : `${IND(level)}${key}: ${v}`
}

function block(b: any, level: number): string {
  const L = IND(level)
  switch (b.type) {
    case 'heading':
    case 'paragraph':
      if (b.text.length <= 100) return `${L}{ type: '${b.type}', text: ${q(b.text)} }`
      return `${L}{\n${IND(level + 1)}type: '${b.type}',\n${strProp('text', b.text, level + 1)}\n${L}}`
    case 'list':
      return `${L}{\n${IND(level + 1)}type: 'list',\n${IND(level + 1)}items: [\n${b.items
        .map((x: string) => {
          const v = str(x, level + 2)
          return v.startsWith('\n') ? v.slice(1) : IND(level + 2) + v
        })
        .join(',\n')}\n${IND(level + 1)}]\n${L}}`
    case 'table': {
      const row = (r: string[]): string =>
        `${IND(level + 3)}[\n${r.map((c) => IND(level + 4) + str(c, level + 4)).join(',\n')}\n${IND(level + 3)}]`
      return (
        `${L}{\n${IND(level + 1)}type: 'table',\n${IND(level + 1)}headers: [${b.headers.map(q).join(', ')}],\n` +
        `${IND(level + 1)}rows: [\n${b.rows.map(row).join(',\n')}\n${IND(level + 1)}]\n${L}}`
      )
    }
    case 'callout':
      return (
        `${L}{\n${IND(level + 1)}type: 'callout',\n${IND(level + 1)}tone: '${b.tone}',\n` +
        (b.title ? `${IND(level + 1)}title: ${q(b.title)},\n` : '') +
        `${strProp('text', b.text, level + 1)}\n${L}}`
      )
  }
  return ''
}
const localized = (c: any, level: number): string =>
  `{\n${strProp('title', c.title, level + 1)},\n${strProp('summary', c.summary, level + 1)},\n` +
  `${IND(level + 1)}blocks: [\n${c.blocks.map((b: any) => block(b, level + 2)).join(',\n')}\n${IND(level + 1)}]\n${IND(level)}}`

const source =
  `import type { TopicContent } from './types'\n\nconst content: TopicContent = {\n` +
  `  id: ${q(page.id)},\n\n  pt: ${localized(page.pt, 1)},\n\n  fr: ${localized(page.fr, 1)},\n\n` +
  `  audio: [${page.audio.map(q).join(', ')}],\n\n  sources: [\n${page.sources
    .map((s: any) => `    {\n      title: ${q(s.title)},\n      url: ${q(s.url)}\n    }`)
    .join(',\n')}\n  ]\n}\n\nexport default content\n`
writeFileSync(out, source, 'utf8')

// confere que o arquivo gravado tem os mesmos dados
const again = (await import(pathToFileURL(out).href + '?v=' + Date.now())).default
const same = JSON.stringify(again) === JSON.stringify(page)

// registra em content/index.ts
const camel = topic.id.replace(/-(\w)/g, (_, c: string) => c.toUpperCase())
const indexFile = join(contentDir, 'index.ts')
let index = readFileSync(indexFile, 'utf8')
if (!index.includes(`import ${camel} from`)) {
  const imports = [...index.matchAll(/^import .+$/gm)]
  const last = imports[imports.length - 1]
  const at = last.index! + last[0].length
  index = index.slice(0, at) + `\nimport ${camel} from './${topic.id}'` + index.slice(at)
  const eol = index.includes('\r\n') ? '\r\n' : '\n'
  index = index.replace(/,?(\r?\n)\](\r?\n\r?\nconst CONTENT)/, `,${eol}  ${camel}$1]$2`)
  if (!new RegExp(`^\\s+${camel}\\s*,?\\s*$`, 'm').test(index)) warn('não consegui registrar em content/index.ts: acrescente à mão')
  writeFileSync(indexFile, index, 'utf8')
}

console.log(`Tópico: ${topic.id} — ${topic.title}`)
console.log(`Arquivo: src/renderer/src/content/${topic.id}.ts (dados idênticos após gravar: ${same})`)
console.log(`Apóstrofos corrigidos: ${apostrophes} · trechos divididos por frase: ${splitCount}`)
console.log(warnings.length ? `\nAvisos (${warnings.length}):\n- ${warnings.join('\n- ')}` : '\nSem avisos automáticos.')
console.log('\nFalta: revisar o conteúdo (docs/revisao-de-conteudo.md), conferir as fontes, npm run typecheck e npm run audio.')
