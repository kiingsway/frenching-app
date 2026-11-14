// Registro da revisão das páginas de estudo (fontes abertas e lidas). Mostrado no Studio.
// Ao revisar uma página, acrescente o id aqui (veja "Tarefas pendentes" no CLAUDE.md):
//   'citacoes' = fontes lidas e citações [n] no texto, com a caixa "Sem fonte oficial" no formato novo
//   'fontes'   = fontes lidas e caixa "Sem fonte oficial" ajustada, mas ainda sem [n] no texto
// Página que não está aqui não foi revisada (ou é do conteúdo antigo, anterior a estas regras).
// Atenção: a lista 'fontes' foi montada a partir do histórico das sessões de 2026-11-12 e 2026-11-13.

export type ReviewLevel = 'fontes' | 'citacoes'

export const REVIEWS: Record<string, ReviewLevel> = {
  // Conhecendo a prova
  'prova-tef-tcf': 'citacoes',
  'prova-nclc': 'citacoes',
  'prova-cecr': 'citacoes',
  'prova-crs': 'citacoes',
  'prova-formato': 'citacoes',
  'prova-criterios': 'citacoes',
  'prova-qcm': 'citacoes',

  // Compréhension orale
  'co-mensagens': 'citacoes',
  'co-dialogos': 'citacoes',
  'co-radio': 'citacoes',

  // Funções
  'f-informacoes': 'fontes',
  'f-narrar': 'fontes',
  'f-planos': 'fontes',
  'f-gostos': 'fontes',
  'f-reclamar': 'fontes',
  'f-pedidos': 'fontes',
  'f-argumentar': 'fontes',
  'f-opiniao': 'fontes',
  'f-conselhos': 'fontes',
  'f-hipotese': 'fontes',

  // Expression orale
  'eo-fluidez': 'fontes',
  'eo-persuadir': 'fontes',
  'eo-tcf-1': 'fontes',
  'eo-tcf-2': 'fontes',
  'eo-tcf-3': 'fontes',
  'eo-opiniao': 'fontes',

  // Gramática
  'gb-artigos': 'citacoes',
  'gb-savoir-connaitre': 'fontes',
  'gi-discurso-indireto': 'fontes',
  'gi-plus-que-parfait': 'fontes',
  'ga-indicativo-subjuntivo': 'fontes',
  'ga-nominalizacao': 'fontes',
  'ga-concordancia': 'fontes',

  // Vocabulário
  'v-moradia': 'fontes',
  'v-saude': 'fontes',
  'v-sociedade': 'fontes'
}
