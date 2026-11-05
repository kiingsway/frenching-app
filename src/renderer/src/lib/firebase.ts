import { initializeApp } from 'firebase/app'
import {
  browserPopupRedirectResolver,
  indexedDBLocalPersistence,
  initializeAuth
} from 'firebase/auth'
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  persistentSingleTabManager
} from 'firebase/firestore'
import { isElectron } from './platform'

// App Web "Frenching" do projeto Firebase sway-apps.
// Esta configuração não é secreta: o Firebase espera que ela vá dentro do app.
// Quem pode ler e gravar o quê é decidido pelas regras de segurança do Firestore.
const firebaseConfig = {
  apiKey: 'AIzaSyCKy9GK1qpUzb9zE7bNJxU4OztlfbDiVnE',
  authDomain: 'sway-apps.firebaseapp.com',
  projectId: 'sway-apps',
  storageBucket: 'sway-apps.firebasestorage.app',
  messagingSenderId: '99635612004',
  appId: '1:99635612004:web:cea6af0a22f927d092d271'
}

export const firebaseApp = initializeApp(firebaseConfig)

// A sessão fica guardada no IndexedDB: o usuário continua conectado ao reabrir o app
// Na web o login é por janela (signInWithPopup), que precisa do popupRedirectResolver.
// No Electron ele fica de fora: o login passa pelo navegador do sistema e a página
// não carrega os scripts do Google
export const auth = initializeAuth(firebaseApp, {
  persistence: indexedDBLocalPersistence,
  ...(isElectron ? {} : { popupRedirectResolver: browserPopupRedirectResolver })
})

// Firestore com cache local: sem internet, as leituras usam o cache e as gravações
// ficam na fila até a conexão voltar. No Electron há uma janela só; na web o site pode
// estar aberto em várias abas, que passam a dividir o mesmo cache
export const db = initializeFirestore(firebaseApp, {
  localCache: persistentLocalCache({
    tabManager: isElectron
      ? persistentSingleTabManager(undefined)
      : persistentMultipleTabManager()
  })
})

// Onde ficam os dados deste app (as regras do projeto sway-apps só deixam cada
// usuário ler e gravar dentro de users/{uid})
export const APP_ID = 'frenching'
