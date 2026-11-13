// Caixa de entrada de conteúdo (página de estudo sem conteúdo → "Colar JSON"), só no modo
// de desenvolvimento: o JSON colado vai para content-inbox/, na raiz do projeto, de onde o
// Claude o integra ("adicionar o próximo conteúdo"; veja CLAUDE.md).

import { join } from 'path'
import { app, ipcMain } from 'electron'
import { saveToInbox } from './inbox-core'

const DIR = join(app.getAppPath(), 'content-inbox')
const available = !app.isPackaged

export type { InboxResult } from './inbox-core'

export function setupInboxTools(): void {
  ipcMain.handle('inbox:available', () => available)
  if (!available) return
  ipcMain.handle('inbox:save', (_, text: unknown) => saveToInbox(DIR, text))
}
