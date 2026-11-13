// Funções compartilhadas pelo app e pelo script scripts/generate-audio.mts.
// Sem imports, para poder ser usado direto pelo Node no script.

// Texto como deve ser falado: faixas, símbolos e abreviações viram palavras,
// para a voz ler "549–699" como "549 à 699" e "2 h 55" como "2 heures 55".
export function speechText(text: string): string {
  return (
    text
      // Citações das fontes ([1], [2]…) não são lidas
      .replace(/\s*\[\d+\]/g, '')
      // Telefones não são faixas: 514 555-0182 → 5 1 4, 5 5 5, 0 1 8 2 (algarismo por
      // algarismo, como se diz no Québec)
      .replace(/\b(\d{3}) (\d{3})-(\d{4})\b/g, (_, a: string, b: string, c: string) =>
        [a, b, c].map((group) => group.split('').join(' ')).join(', ')
      )
      // Datas ano-mês-dia não são faixas: 2026-10-12 → 2026 10 12
      .replace(/\b(\d{4})-(\d{2})-(\d{2})\b/g, '$1 $2 $3')
      // Faixas: 549–699 → 549 à 699 · C1–C2 → C1 à C2
      .replace(/(\d)\s*[–-]\s*(\d)/g, '$1 à $2')
      .replace(/\b([ABC][12])\s*–\s*([ABC][12])\b/g, '$1 à $2')
      // Notas: 10/20 → 10 sur 20 (sem mexer em datas como 11/12/2023)
      .replace(/(?<![\d/])(\d+)\s*\/\s*(\d+)(?![\d/])/g, '$1 sur $2')
      .replace(/(\p{L})\s+\/\s+(\d+)/gu, '$1 sur $2')
      // Níveis do CECR: B1+ → B1 plus · demais números: 10+ → 10 et plus
      .replace(/\b([ABC][12])\+/g, '$1 plus')
      .replace(/(\d)\+/g, '$1 et plus')
      // Horas e minutos: 2 h 55 → 2 heures 55 · 40 min → 40 minutes
      .replace(/(\d)\s*h\s*(\d)/g, '$1 heures $2')
      .replace(/(?<!\d)1\s*min\b/g, '1 minute')
      .replace(/(\d)\s*min\b/g, '$1 minutes')
      // Símbolos
      .replace(/\s*·\s*/g, ', ')
      .replace(/≈/g, ' environ ')
      .replace(/↔/g, ' et ')
      .replace(/×/g, ' ou ')
      .replace(/\s{2,}/g, ' ')
      .trim()
  )
}

// Se não sobra nada para falar (ex.: célula com "—"), o texto não tem áudio
export function hasSpeech(text: string): boolean {
  return /[\p{L}\p{N}]/u.test(speechText(text))
}

// Nome do arquivo de áudio: hash FNV-1a (32 bits), em hex, do texto falado.
// Se o texto (ou a forma de falá-lo) mudar, o nome muda e o áudio é gerado de novo.
export function audioKey(text: string): string {
  const spoken = speechText(text)
  let hash = 0x811c9dc5
  for (let i = 0; i < spoken.length; i++) {
    hash ^= spoken.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193) >>> 0
  }
  return hash.toString(16).padStart(8, '0')
}
