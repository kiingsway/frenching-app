# Plano das abas de prática

Como vamos construir as abas **Compreensão escrita**, **Compreensão oral**, **Produção escrita**, **Produção oral** e **Simulados**.

> Plano decidido em 08/11/2026. Em 12/11/2026 a aba Compreensão escrita foi construída e liberada com 5 textos de exemplo (Fase 1, falta o conteúdo); as outras quatro continuam bloqueadas como "em breve".

## Objetivo

Treinar as quatro provas do TEF Canada e do TCF Canada do jeito que elas são cobradas, com a meta de **NCLC 7** nas quatro habilidades. O Painel continua sendo o lugar de **estudar a teoria**; estas abas são o lugar de **praticar**.

## Decisões gerais

| Assunto | Decisão |
|---|---|
| Internet | Tudo funciona offline depois de instalado, menos os áudios fora do pacote do app, que precisam de internet na primeira vez (veja `armazenamento-de-audios.md`). A conta Google continua opcional e só guarda o progresso. |
| Correção da produção | Por conta de quem pratica. O app não chama nenhuma IA: traz autoavaliação com critérios e resposta modelo, e gera um **texto pronto para enviar a uma IA** que corrija, se a pessoa quiser. |
| Modos | Toda aba tem **Treino** (com ajuda e explicação na hora) e **Prova** (com tempo e sem ajuda). |
| Exame | Quem pratica escolhe **TEF** ou **TCF** e o formato acompanha a escolha. |
| Conteúdo | Textos, áudios e temas originais, escritos por nós ou por outras IAs. Provas oficiais servem de referência de formato e nunca são copiadas. |
| Regras | Vale o que está no `CLAUDE.md`: francês canadense primeiro, com a forma da França ao lado, e só fontes reais. |
| Revisão | Todo conteúdo entra numa lista do `npm run dev`, com OK ou Problema, como já acontece com as questões e os flashcards. |
| Ordem | Uma aba por vez, na ordem das fases abaixo. Cada aba só é liberada quando estiver pronta. |

## Como são as provas

Dados de `src/renderer/src/content/prova-formato.ts`. **Antes de construir cada aba, conferir nas fontes oficiais**, porque as regras da prova mudam.

| Prova | TEF Canada | TCF Canada | Como funciona |
|---|---|---|---|
| Compreensão oral | 40 questões · 40 min | 39 questões · 35 min | Em geral, cada áudio toca uma vez, sem pausa nem volta |
| Compreensão escrita | 40 questões · 60 min | 39 questões · 60 min | Você controla o tempo; a dificuldade cresce até o fim |
| Produção escrita | 2 seções · 60 min | 3 tarefas · 60 min | Redação com limite de palavras |
| Produção oral | 2 seções · cerca de 15 min | 3 tarefas · 12 min | Individual, com examinador |

## O que será reaproveitado

- **Sessão de questões:** `GrammarSession.tsx`, com embaralhamento de opções, explicação e resumo no fim.
- **Progresso e sincronização:** `map-store.ts` e `cloud-sync.ts`, usados pela Gramática e pelos Flashcards.
- **Revisão de conteúdo:** `main/review.ts`, que já aceita um tipo (`kind`), com novos arquivos em `content-review/`.
- **Áudio:** `generate-audio.mts`, `audio-texts.ts` e os componentes de áudio.
- **Critérios de avaliação:** os mesmos da página `prova-criterios.ts`.

## Fase 1: Compreensão escrita

**Como funciona:** você escolhe nível e tipo de documento, lê o texto e responde às questões em francês. No fim de cada questão aparece a explicação em português.

- **Treino:** explicação logo após responder, tradução do texto disponível e sem limite de tempo.
- **Prova:** cronômetro, sem explicação até terminar e com a dificuldade crescendo, como no exame.
- **Tipos de documento:** os da seção 2 da lista de estudos, de anúncios e formulários até editoriais e textos abstratos.
- **Revisão de erros:** lista das questões erradas, para refazer.

**Dados** (`data/reading/`):

```ts
interface ReadingPassage {
  id: string
  level: 'A2' | 'B1' | 'B2' | 'C1'
  kind: string // anúncio, e-mail, artigo...
  title: string
  text: string // em francês
  translation: string // em português
  sources?: Source[]
  questions: {
    prompt: string // em francês
    options: string[] // a primeira é a correta; o app embaralha
    explanation: string // em português
  }[]
}
```

**Pronto quando:** houver 30 textos com cerca de 60 questões, os dois modos funcionarem, o progresso sincronizar e a lista de revisão estiver no ar.

**Situação em 12/11/2026:** a aba está no ar com 5 textos e 15 questões (A2, B1, B1, B2, C1), em `data/reading/textos.ts`. Já funcionam o Treino (com tradução e áudio do título, de cada parágrafo e de cada pergunta, gerados pelo `npm run audio`) e a Prova (sem áudio), o filtro por nível e tipo, a revisão de erros, o progresso sincronizado (campo `reading`) e a lista de revisão (`content-review/reading.json`). Os 25 textos que faltam seguem a distribuição A2: 6, B1: 10, B2: 10, C1: 4 (contando os 5 que já existem), com 3 questões por texto. O modelo de pedido está em `pedidos-para-outras-ias.md`.

O que ficou diferente do desenho acima:
- `text` e `translation` são listas de parágrafos, um item de tradução para cada parágrafo, para mostrar a tradução logo abaixo de cada um.
- `kind` é o id do tópico da seção 2 (`ce-cotidiano`, `ce-cartas`…), e o botão do livro abre a teoria daquele tipo de texto.
- Não há escolha entre TEF e TCF nesta aba: as duas têm 60 minutos, e a Prova usa 1 min 30 por questão (40 em 60 min no TEF, 39 em 60 min no TCF). A escolha entra nos Simulados.
- A aba saiu na versão 1.4.1 (patch), a pedido do usuário, e não como minor.
- Na Prova, a resposta pode ser trocada até apertar "Próxima"; depois, não dá para voltar. Questão sem resposta quando o tempo acaba conta como erro.

## Fase 2: Compreensão oral

**Como funciona:** igual à escrita, trocando o texto por áudio. As perguntas podem ser lidas antes de o áudio começar.

- **Treino:** repetir, pausar, mudar a velocidade e abrir a transcrição com tradução.
- **Prova:** toca uma vez, sem pausa, e o ritmo é ditado pelos áudios.
- **Tipos de áudio:** os da seção 1 da lista de estudos, de avisos curtos até debates e palestras.

**O que precisa ser construído no áudio:**

| Necessidade | Hoje | O que muda |
|---|---|---|
| Velocidade | Todo áudio sai 24% mais lento (`RATE`), bom para estudar | Áudios de prova saem na **velocidade normal** |
| Diálogos | Um texto tem uma voz só | Cada fala tem a sua voz, e o player toca as falas em sequência |
| Mesmo texto em duas vozes | O arquivo se chama pelo texto, então só existe uma versão | O nome dos áudios desta aba inclui a voz e a velocidade |
| Sotaques | Só Canadá e França | Vozes do Canadá primeiro, depois França. Bélgica, Suíça e África só se o `edge-tts` tiver vozes boas |
| Offline | No site, o áudio entra no cache só depois de tocado | Estes áudios ficam fora do pacote do app, como definido em `armazenamento-de-audios.md`. Precisa de um botão para baixar um conjunto antes de praticar, no app e no site |

Uma limitação importante: vozes sintéticas não têm os ruídos, as interrupções e o ritmo de uma gravação real. Servem para treinar, mas é bom complementar com RFI e Radio-Canada, já citadas nas páginas de estudo.

**Pronto quando:** houver 30 áudios com cerca de 60 questões, o modo Prova não permitir pausar nem voltar, e os diálogos tocarem com duas vozes.

## Fase 3: Produção escrita

**Como funciona:** você escolhe a tarefa, recebe um tema e escreve dentro do app. Depois, compara com uma resposta modelo e se avalia.

| Tarefa | O que fazer | Tamanho |
|---|---|---|
| TEF – Seção A | Continuar uma notícia (*fait divers*) | Mínimo de 80 palavras |
| TEF – Seção B | Defender um ponto de vista | Mínimo de 200 palavras |
| TCF – Tarefa 1 | Mensagem curta | 60 a 120 palavras |
| TCF – Tarefa 2 | Artigo ou relato | 120 a 150 palavras |
| TCF – Tarefa 3 | Comparar dois documentos e opinar | 120 a 180 palavras |

**O editor:**
- Contador de palavras que avisa quando o texto está fora da faixa da tarefa.
- Cronômetro com o tempo da tarefa.
- Botões para acentos e letras do francês (é, è, ê, à, ç, œ…).
- Corretor do navegador desligado, porque a prova não tem corretor.
- Rascunho salvo sozinho, para não perder o texto.

**A autoavaliação:** nota de 1 a 5 em **realização da tarefa**, **coerência e coesão**, **vocabulário** e **gramática**, e o histórico mostra o critério mais fraco. Cada tema traz resposta modelo em francês canadense e uma lista do que ela faz bem, como conectores e estrutura.

**Corrigir com uma IA:** um botão "Copiar pedido de correção" monta um texto pronto para colar em qualquer IA, como ChatGPT, Gemini ou Claude. O app só copia o texto: quem envia e avalia a resposta é a própria pessoa, e isso funciona offline até a hora de colar. O texto leva:
- a prova, a tarefa e o tema;
- a faixa de palavras e o número de palavras escritas;
- os critérios de correção da prova e a meta de NCLC 7;
- o texto escrito;
- o pedido de nota por critério, erros corrigidos com explicação em português e uma versão melhorada, com o francês canadense como forma principal.

Depois, a pessoa pode registrar as notas nos mesmos critérios da autoavaliação. A resposta da IA pode ter erros e não equivale à nota da prova.

**Pronto quando:** houver 5 temas por tarefa (25 no total), cada um com resposta modelo, e o histórico guardar textos e notas.

## Fase 4: Produção oral

**Como funciona:** você escolhe a tarefa, recebe o tema, usa o tempo de preparação quando a tarefa tiver e grava a própria fala. Depois, ouve a gravação e se avalia.

| Tarefa | O que fazer | Duração |
|---|---|---|
| TEF – Seção A | Fazer perguntas sobre um anúncio | Cerca de 5 min |
| TEF – Seção B | Convencer um amigo cético | Cerca de 10 min |
| TCF – Tarefa 1 | Entrevista sobre você | 2 min, sem preparação |
| TCF – Tarefa 2 | *Role-play* pedindo informações | 5 min 30, com 2 min de preparação |
| TCF – Tarefa 3 | Defender um ponto de vista | 4 min 30 |

**Como simular o examinador sem IA:** falas gravadas, como perguntas e objeções, tocam em momentos definidos ou quando você aperta um botão. Isso **não é uma conversa de verdade**: o app não entende o que você diz. Serve para treinar a reação e a fluidez, mas não substitui praticar com uma pessoa.

**A autoavaliação:** os mesmos critérios da escrita, mais **pronúncia**, **fluidez** e **interação**. Cada tema traz exemplos de frases úteis e uma resposta modelo com áudio.

**Corrigir com uma IA:** o mesmo botão da produção escrita, com a tarefa, o tema e os critérios. O app não transcreve a fala, então a pessoa escreve ou cola a transcrição antes de copiar. Uma correção feita pelo texto não avalia pronúncia nem fluidez.

**O que precisa ser construído:**
- Gravação com `MediaRecorder`, guardada em **IndexedDB, só no computador**. As gravações não vão para a conta, para não pesar nem expor a voz de ninguém.
- Limite de gravações por tarefa, com botão para apagar.
- **Liberar o microfone**, que hoje está bloqueado:
  - `vercel.json`: mudar `microphone=()` para `microphone=(self)`;
  - Electron: tratar o pedido de permissão do microfone;
  - CSP do app e do site: aceitar `blob:` em `media-src`, para tocar a gravação.

**Pronto quando:** houver 5 temas por tarefa (25 no total), a gravação funcionar no app e no site, e as gravações continuarem lá depois de fechar o app.

## Fase 5: Simulados

**Como funciona:** junta as quatro abas com o tempo real da prova escolhida.

- **Opções:** uma prova só ou o simulado completo.
- **Durante:** cronômetro, sem explicações, sem pausa nos áudios e sem voltar à prova anterior.
- **No fim:** acertos por prova e por tipo de documento, revisão das questões e autoavaliação da produção.
- **Histórico:** evolução por data e por prova.
- **Revisão de erros recorrentes:** junta os erros de todas as abas, incluindo a Gramática, como pede a lista de estudos.
- **Sem repetir:** o simulado evita questões já vistas enquanto houver outras disponíveis.

Para isso, as questões precisam ser **suficientes para um simulado sem repetição**: pelo menos 40 de compreensão escrita e 40 de compreensão oral. A quantidade das Fases 1 e 2 será ampliada antes desta fase.

**Pronto quando:** for possível fazer um simulado completo de TEF e um de TCF do começo ao fim, com o histórico salvo.

## Ordem e motivo

| Fase | Aba | Por que nesta ordem |
|---|---|---|
| 1 | Compreensão escrita | É a mais simples e cria a base das outras |
| 2 | Compreensão oral | Usa a mesma base e acrescenta o áudio |
| 3 | Produção escrita | Traz a autoavaliação e o histórico |
| 4 | Produção oral | Reaproveita a autoavaliação e acrescenta o microfone |
| 5 | Simulados | Depende das outras quatro |

Cada aba nova sobe a versão como **minor** (`x.Y.0`), e o conteúdo novo depois dela sobe como **patch**, conforme o `CLAUDE.md`. O push continua só com pedido explícito.

## O que fica de fora

- Correção automática dentro do app, de texto ou de pronúncia, por IA ou por qualquer serviço online. O app só gera o texto para a pessoa enviar.
- Conversa real com um examinador virtual.
- Envio de gravações para a nuvem.
- Promessa de nota: os resultados são treino, não previsão oficial.

## Outras decisões

| Pergunta | Decisão |
|---|---|
| Como mostrar o resultado dos simulados? | Porcentagem de acertos e uma indicação simples (longe, perto ou acima da meta). Sem NCLC exato, porque as questões não são calibradas como as da prova real. |
| Quantas questões antes de liberar cada aba? | As metas de cada fase, ampliadas depois. |
| O texto das redações vai para a conta? | Sim, junto com as notas, porque é pequeno e útil em outros computadores. As gravações ficam só no computador. |
| Quem escreve o conteúdo? | O Claude ou outras IAs, sempre com revisão na lista do app. Os modelos de pedido para outras IAs entram em `docs/pedidos-para-outras-ias.md` a cada fase. |

## Fontes de referência

As fontes das provas ficam na seção "Fontes para pesquisa" de [topicos-de-estudo.md](../topicos-de-estudo.md). As páginas do app que servem de base para este plano são `prova-formato.ts` e `prova-criterios.ts`.
