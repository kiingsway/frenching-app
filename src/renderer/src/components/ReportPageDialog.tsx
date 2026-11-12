import type { ReactElement } from 'react'
import ReportDialog from '@/components/ReportDialog'
import { reportPage } from '@/lib/page-reports'
import type { Lang } from '@/content/types'

// Janela para reportar um erro na página de estudo aberta (veja lib/page-reports.ts)
export default function ReportPageDialog({
  open,
  onClose,
  onSent,
  topicId,
  pageTitle,
  sectionTitle,
  lang
}: {
  open: boolean
  onClose: () => void
  onSent: () => void
  topicId: string
  pageTitle: string
  sectionTitle: string
  lang: Lang
}): ReactElement {
  return (
    <ReportDialog
      open={open}
      onClose={onClose}
      onSent={onSent}
      title="Reportar erro na página"
      subject={`${pageTitle}. Descreva o que está errado, para lembrar e corrigir depois.`}
      placeholder="Ex.: o exemplo da tabela de verbos está com a conjugação errada"
      onSubmit={(comment) => reportPage({ topicId, pageTitle, sectionTitle, lang, comment })}
    />
  )
}
