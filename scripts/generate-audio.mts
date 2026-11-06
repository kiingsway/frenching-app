// Gera os áudios em francês das páginas de estudo com o edge-tts.
//
//   npm run audio              gera os áudios que faltam e apaga os que não são mais usados
//   npm run audio -- --dry     só lista o que falta e o que seria apagado, sem mexer em nada
//   npm run audio -- --force   gera de novo todos os áudios, mesmo os que já existem
//   npm run audio -- --only=a1b2c3d4,e5f6a7b8   gera de novo só esses arquivos (sem .mp3)
//
// Para cada página com o campo `audio`, gera um mp3 para cada parte listada
// (veja AudioPart em content/types.ts) da versão em francês. O arquivo se chama pelo hash
// do texto falado (speechText), então só textos novos ou alterados são gerados de novo.
// Requer o edge-tts (pip install edge-tts) e internet; o app em si continua offline.
// O edge-tts é chamado via scripts/tts-fr.py, que força o francês na leitura
// (sem isso, a voz multilíngue lê alguns textos curtos em inglês).
// A voz padrão é a Vivienne; textos com outra voz ficam em assets/audio/voices.json.
//
// O progresso vai para scripts/.audio-status.json, que a lista de áudios do app
// (Configurações → Áudios) acompanha ao vivo.

import { execFileSync } from 'node:child_process'
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
  textsFor,
  type AudioGenStatus,
  type VoiceOverrides
} from '../src/renderer/src/lib/audio-texts.ts'
import type { TopicContent } from '../src/renderer/src/content/types.ts'

const RATE = '-24%'

const DRY_RUN = process.argv.includes('--dry')
const FORCE = process.argv.includes('--force')
const ONLY = new Set(
  (process.argv.find((a) => a.startsWith('--only='))?.slice('--only='.length) ?? '')
    .split(',')
    .map((k) => k.trim().replace(/\.mp3$/, ''))
    .filter(Boolean)
)

const TTS_SCRIPT = resolve('scripts/tts-fr.py')
const CONTENT_DIR = resolve('src/renderer/src/content')
const AUDIO_DIR = resolve('src/renderer/src/assets/audio')
const STATUS_FILE = resolve('scripts/.audio-status.json')
// Voz de cada texto que não usa a padrão (definida na lista de áudios do app)
const VOICES_FILE = join(AUDIO_DIR, 'voices.json')

mkdirSync(AUDIO_DIR, { recursive: true })

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
      if (!entries.has(key)) entries.set(key, { label: `${page.id} (${part})`, spoken: speechText(text) })
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
  console.log(`${queue.length} áudio(s) faltando; ${unused.length} áudio(s) sem uso seriam apagados.`)
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

queue.forEach((key, i) => {
  const { label, spoken } = entries.get(key)!
  status.current = key
  saveStatus()
  console.log(`[${i + 1}/${queue.length}] ${label} → ${key}.mp3`)
  try {
    execFileSync(
      'python',
      // --text=… junto: um texto que começa com hífen (ex.: "-age") não vira opção
      [
        TTS_SCRIPT,
        '--voice',
        voiceFor(key),
        `--rate=${RATE}`,
        `--text=${spoken}`,
        '--write-media',
        outFor(key)
      ],
      { stdio: ['ignore', 'inherit', 'pipe'] }
    )
  } catch (error) {
    const stderr = (error as { stderr?: Buffer }).stderr?.toString().trim() ?? ''
    const message = stderr.split('\n').at(-1) || String(error)
    status.errors[key] = message
    console.error(`  erro: ${message}`)
  }
  status.done.push(key)
})

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
