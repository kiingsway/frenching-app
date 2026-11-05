import type { ReactElement } from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import { FiX } from 'react-icons/fi'
import { dismissUpdate, updateNow, useAppUpdate } from '@/lib/app-update'

// No canto direito, para não cobrir o menu lateral; na tela estreita, acima da
// barra de navegação de baixo
const position = { bottom: { xs: 88, md: 24 } }

// Aviso discreto no canto da tela quando o site (PWA) tem uma versão nova, ou quando
// acabou de ficar disponível offline. No Electron nunca aparece
export default function UpdateToast(): ReactElement {
  const { needRefresh, offlineReady } = useAppUpdate()
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
    </>
  )
}
