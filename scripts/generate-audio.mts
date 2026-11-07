// Gera os áudios em francês das páginas de estudo com o edge-tts.
//
//   npm run audio              gera os áudios que faltam e apaga os que não são mais usados
//   npm run audio -- --dry     só lista o que falta e o que seria apagado, sem mexer em nada
//   npm run audio -- --force   gera de novo todos os áudios, mesmo os que já existem
//   npm run audio -- --only=a1b2c3d4,e5f6a7b8   gera de novo só esses arquivos (sem .mp3)
//   npm run audio -- --jobs=3  quantos áudios gerar ao mesmo tempo (padrão: 5)
//
// Para cada página com o campo `audio`, gera um mp3 para cada parte listada
// (veja AudioPart em content/types.ts) da versão em francês, e para cada flashcard
// (data/flashcards), a palavra e o exemplo em francês. O arquivo se chama pelo hash
// do texto falado (speechText), então só textos novos ou alterados são gerados de novo.
// Requer o edge-tts (pip install edge-tts) e internet; o app em si continua offline.
// O edge-tts roda em lote por scripts/tts-batch.py (um processo Python só, vários
// áudios ao mesmo tempo), que força o francês na leitura (sem isso, a voz
// multilíngue lê alguns textos curtos em inglês).
// A voz padrão é a Vivienne; textos com outra voz ficam em assets/audio/voices.json.
//
// O progresso vai para scripts/.audio-status.json, que a lista de áudios do app
// (Configurações → Áudios) acompanha ao vivo.

import { spawn } from 'node:child_process'
import { createInterface } from 'node:readline'
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync
} from 'node:fs'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { audioKey, hasSpeech, speechText } from '../src/renderer/src/lib/audio-key.ts'
import {
  AUDIO_VOICES,
  DEFAULT_VOICE,
  flashcardTexts,
  textsFor,
  type AudioGenStatus,
  type VoiceOverrides
} from '../src/renderer/src/lib/audio-texts.ts'
import type { TopicContent } from '../src/renderer/src/content/types.ts'
import type { FlashcardDeckDraft } from '../src/renderer/src/data/flashcards/types.ts'

const RATE = '-24%'

const DRY_RUN = process.argv.includes('--dry')
const FORCE = process.argv.includes('--force')
const ONLY = new Set(
  (process.argv.find((a) => a.startsWith('--only='))?.slice('--only='.length) ?? '')
    .split(',')
    .map((k) => k.trim().replace(/\.mp3$/, ''))
    .filter(Boolean)
)

// Quantos áudios pedir ao serviço ao mesmo tempo (--jobs=N; 1 = um de cada vez).
// Mais que isso, o serviço da Microsoft pode começar a recusar
const JOBS = Math.max(
  1,
  Number(process.argv.find((a) => a.startsWith('--jobs='))?.slice('--jobs='.length)) || 5
)

const BATCH_SCRIPT = resolve('scripts/tts-batch.py')
const CONTENT_DIR = resolve('src/renderer/src/content')
const FLASHCARDS_DIR = resolve('src/renderer/src/data/flashcards')
const AUDIO_DIR = resolve('src/renderer/src/assets/audio')
const STATUS_FILE = resolve('scripts/.audio-status.json')
// Voz de cada texto que não usa a padrão (definida na lista de áudios do app)
const VOICES_FILE = join(AUDIO_DIR, 'voices.json')

mkdirSync(AUDIO_DIR, { recursive: true })

// Restos de uma geração interrompida (o .part só vira .mp3 quando o áudio termina)
for (const f of readdirSync(AUDIO_DIR)) if (f.endsWith('.part')) rmSync(join(AUDIO_DIR, f))

const voices: VoiceOverrides = existsSync(VOICES_FILE)
  ? JSON.parse(readFileSync(VOICES_FILE, 'utf8'))
  : {}
const voiceFor = (key: string): string => AUDIO_VOICES[voices[key] ?? DEFAULT_VOICE].name

// 1. Todos os textos com áudio, sem repetidos
const files = readdirSync(CONTENT_DIR).filter(
  (f) => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts'
)

const entries = new Map<string, { label: string; spoken: string }>()
for (const file of files) {
  const page = (await import(pathToFileURL(join(CONTENT_DIR, file)).href)).default as TopicContent
  for (const part of page.audio ?? []) {
    for (const text of textsFor(page, part)) {
      if (!hasSpeech(text)) continue
      const key = audioKey(text)
      // Textos repetidos (ex.: a mesma célula em duas tabelas) usam o mesmo áudio
      if (!entries.has(key))
        entries.set(key, { label: `${page.id} (${part})`, spoken: speechText(text) })
    }
  }
}

// Flashcards: um arquivo por baralho (menos index.ts e types.ts), na ordem do nome do
// arquivo. A ordem só muda a fila de geração; os nomes dos mp3 vêm do texto
const deckFiles = readdirSync(FLASHCARDS_DIR).filter(
  (f) => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts'
)
for (const file of deckFiles) {
  const deck = (await import(pathToFileURL(join(FLASHCARDS_DIR, file)).href))
    .default as FlashcardDeckDraft
  for (const card of deck.cards) {
    for (const [part, text] of flashcardTexts(card)) {
      if (!hasSpeech(text)) continue
      const key = audioKey(text)
      if (!entries.has(key))
        entries.set(key, { label: `flashcards-${deck.id} (${part})`, spoken: speechText(text) })
    }
  }
}

// 2. O que gerar nesta execução
const outFor = (key: string): string => join(AUDIO_DIR, `${key}.mp3`)
const queue = [...entries.keys()].filter((key) =>
  ONLY.size ? ONLY.has(key) : FORCE || !existsSync(outFor(key))
)
const unused = readdirSync(AUDIO_DIR).filter(
  (f) => f.endsWith('.mp3') && !entries.has(f.slice(0, -4))
)

if (DRY_RUN) {
  for (const key of queue) {
    const { label, spoken } = entries.get(key)!
    console.log(`Falta: ${label} "${spoken.slice(0, 60)}"`)
  }
  console.log(
    `${queue.length} áudio(s) faltando; ${unused.length} áudio(s) sem uso seriam apagados.`
  )
  process.exit(0)
}

// 3. Gera, gravando o progresso a cada arquivo
const status: AudioGenStatus = {
  running: true,
  pid: process.pid,
  startedAt: Date.now(),
  finishedAt: null,
  queue,
  done: [],
  current: null,
  errors: {}
}

function saveStatus(): void {
  // Grava num arquivo temporário e renomeia, para o app nunca ler um JSON pela metade
  writeFileSync(`${STATUS_FILE}.tmp`, JSON.stringify(status))
  renameSync(`${STATUS_FILE}.tmp`, STATUS_FILE)
}

saveStatus()

// Um processo Python só (scripts/tts-batch.py) gera a fila inteira, até JOBS áudios
// ao mesmo tempo, e avisa cada início e fim por uma linha JSON
if (queue.length) {
  const python = spawn('python', [BATCH_SCRIPT], { stdio: ['pipe', 'pipe', 'pipe'] })
  let stderr = ''
  python.stderr.on('data', (chunk) => (stderr += chunk))
  python.stdin.end(
    JSON.stringify({
      rate: RATE,
      jobs: JOBS,
      items: queue.map((key) => ({
        key,
        text: entries.get(key)!.spoken,
        voice: voiceFor(key),
        out: outFor(key)
      }))
    })
  )

  for await (const line of createInterface({ input: python.stdout })) {
    if (!line.trim()) continue
    const event = JSON.parse(line) as { event: 'start' | 'done'; key: string; error?: string }
    if (event.event === 'start') {
      // Com vários ao mesmo tempo, "current" é o último que começou
      status.current = event.key
    } else {
      status.done.push(event.key)
      const { label } = entries.get(event.key)!
      console.log(`[${status.done.length}/${queue.length}] ${label} → ${event.key}.mp3`)
      if (event.error) {
        status.errors[event.key] = event.error
        console.error(`  erro: ${event.error}`)
      }
    }
    saveStatus()
  }

  const code: number = await new Promise((done) => python.on('close', done))
  // O Python parou antes de terminar (ex.: edge-tts não instalado): o que sobrou na
  // fila conta como erro, com a última linha do erro dele
  if (code !== 0 || status.done.length < queue.length) {
    const message = stderr.trim().split('\n').at(-1) || `python saiu com código ${code}`
    for (const key of queue)
      if (!status.done.includes(key)) {
        status.done.push(key)
        status.errors[key] = message
      }
    console.error(`  erro: ${message}`)
  }
}

// 4. Áudios de textos que mudaram ou saíram das páginas
for (const f of unused) rmSync(join(AUDIO_DIR, f))

// Vozes de textos que saíram das páginas
const staleVoices = Object.keys(voices).filter((key) => !entries.has(key))
if (staleVoices.length) {
  for (const key of staleVoices) delete voices[key]
  writeFileSync(VOICES_FILE, JSON.stringify(voices, null, 2) + '\n')
}

status.running = false
status.current = null
status.finishedAt = Date.now()
saveStatus()

const failed = Object.keys(status.errors).length
console.log(
  queue.length ? `${queue.length - failed} áudio(s) gerado(s).` : 'Nenhum áudio novo para gerar.',
  failed ? `${failed} com erro.` : '',
  unused.length ? `${unused.length} áudio(s) sem uso apagado(s).` : ''
)
