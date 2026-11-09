# Frenching

App de estudos de francês para o **TEF Canada / TCF Canada**, com a meta de chegar ao **NCLC 7+** nas quatro habilidades (Express Entry / residência permanente no Canadá).

Roda como **app desktop** (Electron, Windows) e como **site/PWA** (Vercel), a partir do mesmo código.

> Versão **1.2.7** · Repositório: [github.com/kiingsway/frenching-app](https://github.com/kiingsway/frenching-app)

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
- **Páginas de estudo** em português e em francês (botão PT/FR), com as fontes no fim. Na versão em francês, cada trecho tem áudio: clique para ouvir; botão direito (no celular, pressionar e segurar) abre o menu do áudio, para recomeçar e ver a voz usada. Contas com acesso à nuvem também podem sugerir outra voz.
- **Gramática**: 312 questões de múltipla escolha em 50 tópicos (A1 a C1), com explicação, treino rápido, prática por nível/tópico e revisão de erros.
- **Flashcards**: 50 cartões em 3 baralhos (conectores e articuladores, falsos cognatos PT↔FR, dar opinião e argumentar), cada um com tradução, frase de exemplo e áudio em francês. Repetição espaçada com o algoritmo **FSRS** (biblioteca [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs), roda no próprio app, retenção-alvo de 90%): notas Errei/Difícil/Bom/Fácil com o próximo intervalo em cada botão, atalhos (Espaço vira, 1–4 respondem, A toca o áudio), limite de cartões novos por dia nas Configurações e escolha de baralhos. Cada cartão tem um só estado de memória; a direção (FR→PT ou PT→FR) é sorteada a cada vez.
- **Conta opcional (Google)**: progresso e configurações salvos na conta (Firebase), sincronizados entre computadores. Sem login, ou enquanto a conta não é aprovada para usar a nuvem, tudo fica só no computador.
- **Funciona offline**: o app desktop é 100% offline; o site vira PWA e funciona sem internet depois da primeira visita.
- **Aparência**: tema claro/escuro/sistema, cor principal e cor de fundo.
- **Layout estreito**: em janelas pequenas e no celular, o menu vira uma barra embaixo.

## Tecnologias

Electron · electron-vite · Vite · React · TypeScript · MUI · Motion · ts-fsrs (repetição espaçada) · Firebase (Auth + Firestore) · vite-plugin-pwa (Workbox) · electron-builder + electron-updater (instalador e atualização automática do Windows) · edge-tts (geração dos áudios, só no desenvolvimento).

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

Os textos em francês têm áudio gerado com **edge-tts** e salvo em `src/renderer/src/assets/audio/` como mp3 (~20 MB). **Os mp3 vão no repositório**: o build do app e do site só os copia, sem gerar nada.

Para gerar áudios novos (depois de escrever conteúdo), é preciso Python 3:

```bash
pip install -r scripts/requirements.txt
npm run audio                 # gera só os que faltam
npm run audio -- --force      # gera todos de novo
npm run audio -- --only=chave1,chave2
npm run audio -- --jobs=3      # quantos áudios ao mesmo tempo (padrão: 5)
```

Vozes disponíveis: **Sylvie** (mulher, padrão) e **Antoine** (homem), do Canadá; **Denise** e **Vivienne**, da França. A lista fica em `AUDIO_VOICES` (`src/renderer/src/lib/audio-texts.ts`). Textos novos usam a Sylvie; os que usam outra voz ficam marcados em `assets/audio/voices.json`, inclusive os gerados antes de ela virar a padrão.

O script gera os áudios das páginas de estudo (partes listadas no campo `audio` de cada página) e de todos os flashcards (palavra e exemplo em francês).

No `npm run dev`, **Configurações → Áudios → Lista de áudios** mostra todos os áudios. Com a **conta administradora** logada, dá para trocar a voz de um texto (salvo em `assets/audio/voices.json`) e gerar de novo; sem ela, as vozes aparecem, mas a troca fica bloqueada. **Sugestões de troca de voz** recebe as sugestões de quem usa o app (contas com acesso à nuvem, pelo menu do áudio) e aplica todas de uma vez.

## Revisão de conteúdo

As questões de gramática e os flashcards foram escritos com ajuda de IA, então dá para validar cada um no app. Em **Configurações → Questões de gramática** e **Configurações → Flashcards → Lista de flashcards** (também pelas abas Gramática e Flashcards), no `npm run dev`, cada item pode ser marcado como **OK** ou **Problema** (com uma nota). As marcações vão para `content-review/grammar.json` e `content-review/flashcards.json`, com uma impressão digital do conteúdo: se o item mudar depois, aparece "Mudou após a revisão". Fora do modo de desenvolvimento, a lista de flashcards serve só para consultar (com busca, filtros e áudio).

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

Publicado em **[frenching-app.vercel.app](https://frenching-app.vercel.app)**. Cada envio para a branch `main` no GitHub gera um deploy novo, a não ser que o envio mexa só no app desktop (`src/main`, `src/preload`, `build/`, `scripts/`, README…): aí o `ignoreCommand` do `vercel.json` pula o build. Ele só faz o build quando muda algo em `src/renderer`, `src/web`, `public-web`, `vite.web.config.ts`, `vercel.json`, `package.json`, `package-lock.json` ou nos `tsconfig` do site.

As configurações vêm do `vercel.json`: instalação com `npm ci` (sem baixar o Electron), build com `npm run build:web`, pasta `dist-web`, cache dos arquivos e cabeçalhos de segurança (o site não abre dentro de outro site, e câmera, microfone e localização ficam bloqueados). Não precisa de variáveis de ambiente. O domínio do site precisa estar em **Firebase → Authentication → Configurações → Domínios autorizados** para o login com Google funcionar.

Quando o site é atualizado, quem está com ele aberto (ou instalado) vê o aviso **"Há uma versão nova do Frenching"** com o botão de atualizar.

## Releases (versão para Windows)

Cada versão do app para Windows fica em **[Releases](https://github.com/kiingsway/frenching-app/releases)**. A publicação é automática: **cada push na `main` com uma versão nova no `package.json` gera uma Release**, e os apps instalados a encontram sozinhos. Quem faz isso é o workflow `.github/workflows/release.yml`, que roda no GitHub Actions:

1. Lê a versão do `package.json`. Se já existe Release dela, para por aí. A atualização automática só acontece se a versão nova for **maior** que a instalada.
2. Roda `npm ci` e `npm run dist:win`, que geram em `release/`:
   - `Frenching-Setup-<versão>.exe`: instalador;
   - `Frenching-Setup-<versão>.exe.blockmap`: deixa a atualização baixar só o que mudou;
   - `latest.yml`: diz ao app instalado qual é a versão mais recente;
   - `Frenching-<versão>-portable.exe`: versão portátil.
3. Cria a Release com a tag `v<versão>`, os quatro arquivos e as notas geradas a partir dos commits. Para melhorar as notas, edite a Release no GitHub depois.
4. Apaga as Releases mais antigas e deixa só as **duas últimas**: a nova e a anterior, cujo `.blockmap` permite baixar só o que mudou. As tags continuam no repositório.

O build precisa do cliente OAuth do Google, para o login funcionar no app. Ele fica nos **Secrets** do repositório (`MAIN_VITE_GOOGLE_CLIENT_ID` e `MAIN_VITE_GOOGLE_CLIENT_SECRET`), e o workflow falha sem eles. Para cadastrar ou trocar, a partir do seu `.env`:

```bash
gh secret set -f .env --repo kiingsway/frenching-app
```

Para gerar os arquivos só no seu computador, sem publicar, rode `npm run dist:win` (precisa do `.env`).

A atualização automática fica em `src/main/updater.ts` (electron-updater). Para testar sem publicar, gere uma versão maior em outra pasta (`npx electron-builder --win nsis --publish never -c.extraMetadata.version=X -c.directories.output=release-test`), sirva essa pasta por HTTP e abra o app de `release/win-unpacked/` com `FRENCHING_UPDATE_FEED=http://endereço`.

O app instalado e o `npm run dev` usam a mesma pasta de dados (`%APPDATA%\frenching-electron`), então o progresso e o login são os mesmos nos dois.

## Estrutura

```
.github/workflows/  publicação automática da Release do Windows
src/
  main/        processo principal do Electron (janela, login Google, ferramentas de áudio e de revisão)
  preload/     ponte segura entre o Electron e a página (window.api)
  renderer/    a interface (a mesma no app e no site)
    src/
      pages/       telas (Painel, Gramática, Flashcards, Configurações, páginas de tópico…)
      components/  componentes compartilhados
      content/     páginas de estudo (PT + FR + fontes)
      data/        lista de tópicos, banco de questões de gramática e baralhos de flashcards
      lib/         preferências, progresso, sincronização, Firebase, plataforma (Electron × web)
      assets/audio/  mp3 dos textos em francês
  web/         service worker do PWA
scripts/       geração de áudios e ícones
public-web/    arquivos estáticos só do site (ícones do PWA)
build/         recursos do instalador do Windows (ícone)
content-review/  revisões das questões e dos flashcards (feitas no npm run dev)
docs/          guia para pedir conteúdo a outras IAs, plano das abas de prática e opções de armazenamento dos áudios
topicos-de-estudo.md   lista de estudos (aparece no app em Configurações → Documentos)
```

## Licença

Projeto pessoal, sem licença de uso definida: todos os direitos reservados ao autor, até que uma licença seja escolhida.
