// Voltar de uma página de estudo ao Painel exatamente onde a pessoa clicou.
//
// Ao abrir um tópico pelo Painel, guardamos a seção dele e a posição da rolagem. Quando a
// pessoa volta (Esc, botão de fechar), o Painel abre de novo essa seção e a da vez, e a
// tela volta à mesma altura. Vale só para uma volta: depois de usado, ou ao ir para outra
// aba, o Painel volta a abrir só a seção da vez.

interface DashboardReturn {
  sectionId: string
  scrollTop: number
}

let pending: DashboardReturn | null = null

const scroller = (): HTMLElement | null => document.getElementById('main-content')

// Chamado ao abrir um tópico pelo Painel
export function rememberDashboardReturn(sectionId: string): void {
  clearDashboardReturn()
  pending = { sectionId, scrollTop: scroller()?.scrollTop ?? 0 }
}

// Seção a reabrir (sem consumir): lida ao montar o Painel
export function pendingReturnSection(): string | null {
  return pending?.sectionId ?? null
}

// Posição da rolagem a restaurar. A animação de entrada da tela pode avisar mais de uma
// vez, então o retorno vale por um instante e só depois é descartado
let discardTimer: ReturnType<typeof setTimeout> | undefined

export function takeDashboardReturnScroll(): number | null {
  if (!pending) return null
  if (discardTimer === undefined)
    discardTimer = setTimeout(() => {
      pending = null
      discardTimer = undefined
    }, 1000)
  return pending.scrollTop
}

export function clearDashboardReturn(): void {
  pending = null
  clearTimeout(discardTimer)
  discardTimer = undefined
}
