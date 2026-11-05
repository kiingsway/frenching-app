// Gera os ícones do site (PWA) em public-web/icons, sem dependências (só zlib do Node).
// Uso: node scripts/make-web-icons.mjs
// Desenho: quadrado de cantos arredondados na cor principal do app com um "F" branco
// e uma faixa nas cores da França. A versão "maskable" ocupa o quadrado todo (o
// sistema recorta em círculo/gota) e mantém o desenho dentro da área segura.
import { mkdirSync, writeFileSync } from 'node:fs'
import { deflateSync } from 'node:zlib'

const OUT = 'public-web/icons'
const BG = [0x2f, 0x5b, 0xea]
const WHITE = [255, 255, 255]
const BLUE = [0x00, 0x23, 0x95]
const RED = [0xed, 0x29, 0x39]

// ---------- PNG mínimo (RGBA 8 bits) ----------
const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})
const crc32 = (buf) => {
  let c = 0xffffffff
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}
function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(td))
  return Buffer.concat([len, td, crc])
}
function png(size, pixel) {
  const raw = Buffer.alloc((size * 4 + 1) * size)
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = pixel(x + 0.5, y + 0.5)
      const i = y * (size * 4 + 1) + 1 + x * 4
      raw[i] = r
      raw[i + 1] = g
      raw[i + 2] = b
      raw[i + 3] = a
    }
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8
  ihdr[9] = 6
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ])
}

// ---------- Desenho em coordenadas 0..1 ----------
// Retângulos do "F" e da faixa tricolor (dentro da área segura central de 60%)
const SHAPES = [
  { x0: 0.33, y0: 0.24, x1: 0.45, y1: 0.7, c: WHITE }, // haste
  { x0: 0.33, y0: 0.24, x1: 0.68, y1: 0.35, c: WHITE }, // traço de cima
  { x0: 0.33, y0: 0.43, x1: 0.61, y1: 0.53, c: WHITE }, // traço do meio
  { x0: 0.33, y0: 0.74, x1: 0.445, y1: 0.79, c: BLUE },
  { x0: 0.445, y0: 0.74, x1: 0.555, y1: 0.79, c: WHITE },
  { x0: 0.555, y0: 0.74, x1: 0.67, y1: 0.79, c: RED }
]

// Cobertura com antisserrilhado simples (4x4 amostras por pixel)
function draw(size, { rounded, scale }) {
  const radius = 0.22
  const inside = (u, v) => {
    if (!rounded) return true
    const dx = Math.max(radius - u, 0, u - (1 - radius))
    const dy = Math.max(radius - v, 0, v - (1 - radius))
    return dx * dx + dy * dy <= radius * radius
  }
  const colorAt = (u, v) => {
    if (!inside(u, v)) return null
    // Encolhe o desenho em direção ao centro (maskable precisa de mais margem)
    const su = 0.5 + (u - 0.5) / scale
    const sv = 0.5 + (v - 0.5) / scale
    for (const s of SHAPES) if (su >= s.x0 && su < s.x1 && sv >= s.y0 && sv < s.y1) return s.c
    return BG
  }
  return png(size, (x, y) => {
    let r = 0, g = 0, b = 0, a = 0
    const N = 4
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++) {
        const c = colorAt((x - 0.5 + (i + 0.5) / N) / size, (y - 0.5 + (j + 0.5) / N) / size)
        if (!c) continue
        r += c[0]; g += c[1]; b += c[2]; a++
      }
    if (!a) return [0, 0, 0, 0]
    return [Math.round(r / a), Math.round(g / a), Math.round(b / a), Math.round((a / (N * N)) * 255)]
  })
}

mkdirSync(OUT, { recursive: true })
writeFileSync(`${OUT}/icon-192.png`, draw(192, { rounded: true, scale: 1 }))
writeFileSync(`${OUT}/icon-512.png`, draw(512, { rounded: true, scale: 1 }))
writeFileSync(`${OUT}/maskable-512.png`, draw(512, { rounded: false, scale: 0.8 }))
// Ícone da tela inicial do iPhone: o iOS arredonda sozinho, então vai sem transparência
writeFileSync(`${OUT}/apple-touch-icon.png`, draw(180, { rounded: false, scale: 0.9 }))
writeFileSync(`${OUT}/favicon-32.png`, draw(32, { rounded: true, scale: 1 }))
console.log('Ícones gerados em', OUT)
