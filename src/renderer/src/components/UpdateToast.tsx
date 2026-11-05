import type { ReactElement } from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import { FiX } from 'react-icons/fi'
import { dismissUpdate, updateNow, useAppUpdate } from '@/lib/app-update'
import { dismissDesktopUpdate, installDesktopUpdate, useDesktopUpdate } from '@/lib/desktop-update'

// No canto direito, para não cobrir o menu lateral; na tela estreita, acima da
// barra de navegação de baixo
const position = { bottom: { xs: 88, md: 24 } }

// Aviso discreto no canto da tela quando há uma versão nova: no site (PWA), pelo service
// worker; no app do Windows instalado, quando o electron-updater terminou de baixar.
// No site também avisa quando ele acabou de ficar disponível offline
export default function UpdateToast(): ReactElement {
  const { needRefresh, offlineReady } = useAppUpdate()
  const desktop = useDesktopUpdate()
  const close = (
    <IconButton size="small" color="inherit" aria-label="Fechar" onClick={dismissUpdate}>
      <FiX />
    </IconButton>
  )
  return (
    <>
      <Snackbar
        open={needRefresh}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={position}
        message="Há uma versão nova do Frenching."
        action={
          <>
            <Button color="primary" size="small" onClick={updateNow}>
              Atualizar
            </Button>
            {close}
          </>
        }
      />
      <Snackbar
        open={offlineReady && !needRefresh}
        autoHideDuration={5000}
        onClose={(_, reason) => reason !== 'clickaway' && dismissUpdate()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={position}
        message="Pronto: o Frenching já funciona sem internet."
        action={close}
      />
      {/* App do Windows: versão nova baixada. Fechar o aviso não cancela: ela é instalada
          na próxima vez que o app for fechado */}
      <Snackbar
        open={desktop.status.state === 'ready' && !desktop.dismissed}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        sx={position}
        message={
          desktop.status.state === 'ready'
            ? `A versão ${desktop.status.version} do Frenching está pronta.`
            : ''
        }
        action={
          <>
            <Button color="primary" size="small" onClick={installDesktopUpdate}>
              Reiniciar e atualizar
            </Button>
            <IconButton
              size="small"
              color="inherit"
              aria-label="Fechar (atualiza ao fechar o app)"
              title="Fechar: a atualização é instalada quando você fechar o app"
              onClick={dismissDesktopUpdate}
            >
              <FiX />
            </IconButton>
          </>
        }
      />
    </>
  )
}
