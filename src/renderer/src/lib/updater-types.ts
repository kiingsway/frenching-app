// Estado da atualização automática do app do Windows (electron-updater), compartilhado
// pelo processo principal (src/main/updater.ts) e pela interface. Sem imports.

export type UpdaterStatus =
  // npm run dev / preview: não há atualização automática (só no app instalado)
  | { state: 'unsupported'; reason: 'dev' | 'portable' }
  | { state: 'idle' }
  | { state: 'checking' }
  | { state: 'up-to-date'; checkedAt: number }
  // Achou uma versão nova e está baixando
  | { state: 'downloading'; version: string; percent: number }
  // Baixada: entra no lugar da atual ao reiniciar (ou ao fechar o app)
  | { state: 'ready'; version: string }
  | { state: 'error'; message: string }
