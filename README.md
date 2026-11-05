# Frenching

App de estudos de francês para o **TEF Canada / TCF Canada**, com a meta de chegar ao **NCLC 7+** nas quatro habilidades (Express Entry / residência permanente no Canadá).

Roda como **app desktop** (Electron, Windows) e como **site/PWA** (Vercel), a partir do mesmo código.

> Versão **1.0.0** · Repositório: [github.com/kiingsway/frenching-app](https://github.com/kiingsway/frenching-app)

## O que tem

- **Painel**: lista de estudos com o progresso de cada seção.
- **Páginas de estudo** em português e em francês (botão PT/FR), com as fontes no fim. Na versão em francês, cada trecho tem áudio: clique para ouvir; botão direito para recomeçar ou sugerir outra voz.
- **Gramática**: 312 questões de múltipla escolha em 50 tópicos (A1 a C1), com explicação, treino rápido, prática por nível/tópico e revisão de erros.
- **Conta opcional (Google)**: progresso e configurações salvos na conta (Firebase), sincronizados entre computadores. Sem login, tudo fica só no computador.
- **Funciona offline**: o app desktop é 100% offline; o site vira PWA e funciona sem internet depois da primeira visita.
- **Aparência**: tema claro/escuro/sistema, cor principal e cor de fundo.
- **Layout estreito**: em janelas pequenas e no celular, o menu vira uma barra embaixo.

## Tecnologias

Electron · electron-vite · Vite · React · TypeScript · MUI · Motion · Firebase (Auth + Firestore) · vite-plugin-pwa (Workbox) · edge-tts (geração dos áudios, só no desenvolvimento).

## Começando

Pré-requisitos: **Node.js 22+** (testado com 24) e npm.

```bash
npm install
npm run dev        # app desktop (Electron), servidor na porta 5173
npm run dev:web    # site, servidor na porta 5174
```

> No Windows/PowerShell, use `npm.cmd` se a política de scripts bloquear o `npm`.

### Login com Google no app desktop (opcional)

O app desktop faz o login pelo navegador do sistema e precisa de um cliente OAuth do tipo **"App para computador"** (Google Cloud → projeto `sway-apps` → Credenciais). Copie `.env.example` para `.env` e preencha:

```
MAIN_VITE_GOOGLE_CLIENT_ID=...
MAIN_VITE_GOOGLE_CLIENT_SECRET=...
```

O `.env` **não vai para o Git**. Sem ele, o app funciona normalmente, só sem o botão de login. O site não usa o `.env` (o login na web é pela janela do Firebase).

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | App desktop em desenvolvimento (com as ferramentas de áudio) |
| `npm run build` | Compila o app desktop em `out/` |
| `npm run preview` | Abre o app desktop compilado (se comporta como o .exe) |
| `npm run dev:web` | Site em desenvolvimento |
| `npm run build:web` | Compila o site/PWA em `dist-web/` (é o que a Vercel publica) |
| `npm run preview:web` | Serve o `dist-web/` localmente (para testar o PWA e o offline) |
| `npm run typecheck` | Verifica os tipos (main, renderer e service worker) |
| `npm run audio` | Gera os áudios que faltam (veja abaixo) |
| `npm run icons:web` | Gera os ícones do PWA em `public-web/icons/` |

## Áudios

Os textos em francês têm áudio gerado com **edge-tts** (vozes Vivienne e Denise) e salvo em `src/renderer/src/assets/audio/` como mp3 (~20 MB). **Os mp3 vão no repositório**: o build do app e do site só os copia, sem gerar nada.

Para gerar áudios novos (depois de escrever conteúdo), é preciso Python 3:

```bash
pip install -r scripts/requirements.txt
npm run audio                 # gera só os que faltam
npm run audio -- --force      # gera todos de novo
npm run audio -- --only=chave1,chave2
```

No `npm run dev`, **Configurações → Áudios → Lista de áudios** mostra todos os áudios, permite trocar a voz de um texto (salvo em `assets/audio/voices.json`) e gerar de novo. **Sugestões de troca de voz** recebe as sugestões de quem usa o app (botão direito num áudio) e aplica todas de uma vez.

## Firebase

Projeto `sway-apps` (compartilhado com outros apps). A configuração web do Firebase fica em `src/renderer/src/lib/firebase.ts` (não é secreta).

Os dados de cada usuário ficam em `users/{uid}/apps/frenching/…`. As regras estão em `firestore.rules` e valem para o **projeto inteiro**:

```bash
firebase deploy --only firestore:rules --project sway-apps
```

> Publicar substitui as regras de todos os apps do projeto: mantenha no arquivo as regras dos outros apps também.

## Publicar o site na Vercel

1. Envie o repositório para o GitHub.
2. Na Vercel, **Add New → Project** e importe o repositório. As configurações vêm do `vercel.json` (`npm ci` sem baixar o Electron, `npm run build:web`, pasta `dist-web`). Não precisa de variáveis de ambiente.
3. Depois do primeiro deploy, adicione o domínio do site (ex.: `frenching.vercel.app`) em **Firebase → Authentication → Configurações → Domínios autorizados**. Sem isso, o login com Google não funciona no site.

## Estrutura

```
src/
  main/        processo principal do Electron (janela, login Google, ferramentas de áudio e de revisão)
  preload/     ponte segura entre o Electron e a página (window.api)
  renderer/    a interface (a mesma no app e no site)
    src/
      pages/       telas (Painel, Gramática, Configurações, páginas de tópico…)
      components/  componentes compartilhados
      content/     páginas de estudo (PT + FR + fontes)
      data/        lista de tópicos e banco de questões de gramática
      lib/         preferências, progresso, sincronização, Firebase, plataforma (Electron × web)
      assets/audio/  mp3 dos textos em francês
  web/         service worker do PWA
scripts/       geração de áudios e ícones
public-web/    arquivos estáticos só do site (ícones do PWA)
topicos-de-estudo.md   lista de estudos (aparece no app em Configurações → Documentos)
```

## Licença

Projeto pessoal, sem licença de uso definida: todos os direitos reservados ao autor, até que uma licença seja escolhida.
