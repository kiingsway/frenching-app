import { audioKey } from './audio-key'

// Áudios gerados por scripts/generate-audio.mts, embutidos no app no build.
const FILES = import.meta.glob<string>('../assets/audio/*.mp3', {
  query: '?url',
  import: 'default',
  eager: true
})

const URLS = new Map(
  Object.entries(FILES).map(([path, url]) => [path.replace(/^.*\/|\.mp3$/g, ''), url])
)

const KEYS_BY_URL = new Map([...URLS].map(([key, url]) => [url, key]))

// Chave (nome do arquivo) de uma URL devolvida por getAudioUrl
export function getAudioKeyByUrl(url: string): string | undefined {
  return KEYS_BY_URL.get(url)
}

// O arquivo desta chave entrou no app (no build)?
export const hasAudioFile = (key: string): boolean => URLS.has(key)

// URL do áudio de um texto, se ele já foi gerado
export function getAudioUrl(text: string): string | undefined {
  return URLS.get(audioKey(text))
}

// URL de um arquivo pela chave, mesmo que ele tenha sido gerado com o app aberto.
// Só no servidor de desenvolvimento (npm run dev) o Vite serve a pasta de áudios
// diretamente, com os nomes originais; `version` (data de geração) evita tocar a
// versão antiga guardada em cache. No app compilado (build/preview/.exe) os arquivos
// têm um hash no nome e só existem os que estavam lá no build: usa a URL do bundle.
const DIR_URL = '/src/assets/audio/'
export function getAudioUrlByKey(key: string, version: number): string {
  if (import.meta.env.DEV) return `${DIR_URL}${key}.mp3?v=${version}`
  return URLS.get(key) ?? ''
}
