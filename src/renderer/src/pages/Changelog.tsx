import { useState, type ReactElement } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import Page from '@/components/Page'
import type { Lang } from '@/content/types'
import {
  CHANGELOG,
  CHANGE_LABELS,
  CHANGE_TYPES,
  type ChangeType,
  type ChangelogEntry
} from '@/data/changelog'
import { topicLangPref } from '@/lib/prefs'

// Novidades do app: todas as versões, uma aba por versão "minor" (1.3, 1.2…),
// em português ou em francês (a mesma escolha das páginas de estudo).

const TEXTS = {
  pt: {
    back: 'Configurações',
    title: 'Novidades',
    intro: 'O que mudou em cada versão do Frenching.',
    tab: 'Versão',
    locale: 'pt-BR'
  },
  fr: {
    back: 'Paramètres',
    title: 'Nouveautés',
    intro: 'Ce qui a changé dans chaque version de Frenching.',
    tab: 'Version',
    locale: 'fr-CA'
  }
}

const TYPE_COLORS: Record<ChangeType, 'success' | 'info' | 'warning' | 'error' | 'secondary'> = {
  added: 'success',
  changed: 'info',
  deprecated: 'warning',
  removed: 'error',
  fixed: 'secondary',
  security: 'error'
}

// "1.3.0" → "1.3"
const minorOf = (version: string): string => version.split('.').slice(0, 2).join('.')

// Versões agrupadas por minor, da mais nova para a mais antiga
const GROUPS: { minor: string; entries: ChangelogEntry[] }[] = []
for (const entry of CHANGELOG) {
  const minor = minorOf(entry.version)
  const group = GROUPS.find((g) => g.minor === minor)
  if (group) group.entries.push(entry)
  else GROUPS.push({ minor, entries: [entry] })
}

function formatDate(date: string, locale: string): string {
  const [y, m, d] = date.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function VersionCard({ entry, lang }: { entry: ChangelogEntry; lang: Lang }): ReactElement {
  return (
    <Paper variant="outlined" sx={{ p: { xs: 2, sm: 2.5 }, mb: 2, bgcolor: 'transparent' }}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1.25, flexWrap: 'wrap', mb: 1.5 }}>
        <Typography variant="h6" sx={{ fontSize: 18 }}>
          {entry.version}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {formatDate(entry.date, TEXTS[lang].locale)}
        </Typography>
      </Box>
      {CHANGE_TYPES.filter((type) => entry.changes[type]?.length).map((type) => (
        <Box key={type} sx={{ '& + &': { mt: 1.75 } }}>
          <Chip
            size="small"
            variant="outlined"
            color={TYPE_COLORS[type]}
            label={CHANGE_LABELS[type][lang]}
            sx={{ fontWeight: 600, mb: 0.75 }}
          />
          <Box component="ul" sx={{ m: 0, pl: 3, '& li + li': { mt: 0.5 } }}>
            {entry.changes[type]!.map((change) => (
              <Typography key={change.pt} component="li">
                {change[lang]}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}
    </Paper>
  )
}

export default function Changelog({ onBack }: { onBack: () => void }): ReactElement {
  const lang: Lang = topicLangPref.use()
  const t = TEXTS[lang]
  const [tab, setTab] = useState(0)
  const group = GROUPS[tab] ?? GROUPS[0]

  return (
    <>
      {/* Barra fixa no topo: voltar e língua */}
      <Paper
        square
        elevation={0}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: { xs: 2, sm: 3, md: 5 },
          py: 1.5,
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Button
          size="small"
          variant="outlined"
          startIcon={<FiArrowLeft />}
          onClick={onBack}
          sx={{ flexShrink: 0 }}
        >
          {t.back}
        </Button>
        <ToggleButtonGroup
          exclusive
          size="small"
          color="primary"
          value={lang}
          onChange={(_, value: Lang | null) => value && topicLangPref.set(value)}
          aria-label="Idioma / Langue"
          sx={{ ml: 'auto', height: 32 }}
        >
          <ToggleButton value="pt" sx={{ px: 1.5, fontWeight: 600 }}>
            PT
          </ToggleButton>
          <ToggleButton value="fr" sx={{ px: 1.5, fontWeight: 600 }}>
            FR
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>

      <Page>
        <Box lang={lang}>
          <Typography variant="h5">{t.title}</Typography>
          <Typography color="text.secondary" sx={{ mt: 0.5, mb: 2 }}>
            {t.intro}
          </Typography>

          <Tabs
            value={tab}
            onChange={(_, value: number) => setTab(value)}
            variant="scrollable"
            allowScrollButtonsMobile
            sx={{ mb: 2.5, borderBottom: 1, borderColor: 'divider' }}
          >
            {GROUPS.map((g) => (
              <Tab key={g.minor} label={`${t.tab} ${g.minor}`} sx={{ textTransform: 'none' }} />
            ))}
          </Tabs>

          {group?.entries.map((entry) => (
            <VersionCard key={entry.version} entry={entry} lang={lang} />
          ))}
        </Box>
      </Page>
    </>
  )
}
