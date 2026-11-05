import type { ReactElement } from 'react'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'

export default function Placeholder({ title }: { title: string }): ReactElement {
  return (
    <Page>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary">Em construção.</Typography>
    </Page>
  )
}
