# Frenching

App de estudos de francês para o **TEF Canada / TCF Canada**, com a meta de chegar ao **NCLC 7+** nas quatro habilidades (Express Entry / residência permanente no Canadá).

Roda como **app desktop** (Electron, Windows) e como **site/PWA** (Vercel), a partir do mesmo código.

> Versão **1.0.0** · Repositório: [github.com/kiingsway/frenching-app](https://github.com/kiingsway/frenching-app)

## Como usar

- 🌐 **No navegador:** **[frenching-app.vercel.app](https://frenching-app.vercel.app)**. No Chrome ou no Edge dá para instalar como app (ícone de instalar na barra de endereço); depois da primeira visita funciona sem internet.
- 💻 **No Windows:** baixe em **[Releases](https://github.com/kiingsway/frenching-app/releases/latest)**:
  - `Frenching-Setup-<versão>.exe`: instalador (recomendado), com atalhos no menu Iniciar e na área de trabalho;
  - `Frenching-<versão>-portable.exe`: versão portátil, abre sem instalar.

  O app instalado **se atualiza sozinho**: ao abrir (e a cada 6 horas) ele procura versões novas nos Releases, baixa em segundo plano e avisa "A versão X está pronta"; clique em **Reiniciar e atualizar** ou deixe para quando fechar o app. A versão portátil não se atualiza: baixe a nova nos Releases.

  Os arquivos não têm assinatura digital: na primeira vez o Windows pode mostrar o aviso do SmartScreen (**Mais informações → Executar assim mesmo**).

O app para Windows e o site são o mesmo Frenching. Com a conta Google, o progresso aparece nos dois.

## O que tem

- **Painel**: lista de estudos com o progresso de cada seção.
- **Páginas de estudo** em português e em francês (botão PT/FR), com as fontes no fim. Na versão em francês, cada trecho tem áudio: clique para ouvir; botão direito para recomeçar ou sugerir outra voz.
- **Gramática**: 312 questões de múltipla escolha em 50 tópicos (A1 a C1), com explicação, treino rápido, prática por nível/tópico e revisão de erros.
- **Conta opcional (Google)**: progresso e configurações salvos na conta (Firebase), sincronizados entre computadores. Sem login, ou enquanto a conta não é aprovada para usar a nuvem, tudo fica só no computador.
- **Funciona offline**: o app desktop é 100% offline; o site vira PWA e funciona sem internet depois da primeira visita.
- **Aparência**: tema claro/escuro/sistema, cor principal e cor de fundo.
- **Layout estreito**: em janelas pequenas e no celular, o menu vira uma barra embaixo.

## Tecnologias

Electron · electron-vite · Vite · React · TypeScript · MUI · Motion · Firebase (Auth + Firestore) · vite-plugin-pwa (Workbox) · electron-builder + electron-updater (instalador e atualização automática do Windows) · edge-tts (geração dos áudios, só no desenvolvimento).

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
| `npm run dist:win` | Gera o instalador e a versão portátil do Windows em `release/` (veja Releases) |
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

### Acesso à nuvem (aprovação)

Qualquer pessoa pode entrar com Google, mas só contas aprovadas têm dados na nuvem, e quem garante isso são as regras do Firestore, não só o app:

- No primeiro login, o app cria um pedido em `apps/frenching/accessRequests/{uid}` (sempre `pending`, com o e-mail da conta).
- A conta administradora (uid fixo em `firestore.rules` e em `lib/access.ts`) vê **Configurações → Administração → Aprovar acessos** e aprova (cria `apps/frenching/members/{uid}`) ou recusa/remove o acesso.
- Sem registro em `members`, o banco recusa ler e gravar em `users/{uid}/apps/frenching/…`; o app mostra em Conta que tudo fica só no computador. A pessoa não recebe aviso: ao ser aprovada, a sincronização liga sozinha e junta o progresso do computador com a conta.

## Site na Vercel

Publicado em **[frenching-app.vercel.app](https://frenching-app.vercel.app)**. Cada envio para a branch `main` no GitHub gera um deploy novo.

As configurações vêm do `vercel.json`: instalação com `npm ci` (sem baixar o Electron), build com `npm run build:web` e pasta `dist-web`. Não precisa de variáveis de ambiente. O domínio do site precisa estar em **Firebase → Authentication → Configurações → Domínios autorizados** para o login com Google funcionar.

Quando o site é atualizado, quem está com ele aberto (ou instalado) vê o aviso **"Há uma versão nova do Frenching"** com o botão de atualizar.

## Releases (versão para Windows)

Cada versão do app para Windows fica em **[Releases](https://github.com/kiingsway/frenching-app/releases)**. Para publicar uma versão nova:

1. Suba a versão em `package.json` (ex.: `1.0.0` → `1.1.0`). A atualização automática só acontece se a versão nova for **maior** que a instalada.
2. Rode `npm run dist:win` (precisa do `.env`, para o login com Google funcionar no app). Em `release/` saem:
   - `Frenching-Setup-<versão>.exe`: instalador;
   - `Frenching-Setup-<versão>.exe.blockmap`: deixa a atualização baixar só o que mudou;
   - `latest.yml`: diz ao app instalado qual é a versão mais recente;
   - `Frenching-<versão>-portable.exe`: versão portátil.
3. No GitHub, **Releases → Draft a new release**, crie a tag `v<versão>` na branch `main`, escreva as novidades e anexe **os quatro arquivos**. Sem o `latest.yml` (e o `.blockmap`), os apps instalados não ficam sabendo da versão nova. Opcionalmente, anexe também um `.zip` do `dist-web/` para quem quiser hospedar o site em outro lugar.
4. Publique a release (não deixe como rascunho nem como pré-lançamento: o app só enxerga releases publicadas).

A atualização automática fica em `src/main/updater.ts` (electron-updater). Para testar sem publicar, gere uma versão maior em outra pasta (`npx electron-builder --win nsis --publish never -c.extraMetadata.version=X -c.directories.output=release-test`), sirva essa pasta por HTTP e abra o app de `release/win-unpacked/` com `FRENCHING_UPDATE_FEED=http://endereço`.

O app instalado e o `npm run dev` usam a mesma pasta de dados (`%APPDATA%\frenching-electron`), então o progresso e o login são os mesmos nos dois.

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
build/         recursos do instalador do Windows (ícone)
topicos-de-estudo.md   lista de estudos (aparece no app em Configurações → Documentos)
```

## Licença

Projeto pessoal, sem licença de uso definida: todos os direitos reservados ao autor, até que uma licença seja escolhida.
