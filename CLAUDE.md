# Frenching: instruções para o Claude

## Tarefas pendentes

- **Armazenamento dos áudios (direção definida, detalhes em aberto, nada construído):** o usuário vai colocar cerca de 5x mais áudio, com áudios longos e várias vozes para o mesmo texto, e prefere um `.exe` bem leve. Parte dos áudios vem no app, e o resto é baixado quando for preciso e fica guardado. O serviço na nuvem fica para depois. As decisões e o que falta decidir estão em [docs/armazenamento-de-audios.md](docs/armazenamento-de-audios.md). Ao retomar o assunto, comece por esse documento; não construa nada sem o usuário pedir.

- **Verificação das fontes que não foram abertas (em andamento, desde 2026-11-12):** várias páginas de estudo têm fontes que não consegui abrir (PDFs, sites bloqueados) e 10 páginas de Funções (`f-*`) foram integradas sem abrir nenhuma fonte, a pedido do usuário. O controle está em [docs/fontes-nao-verificadas.md](docs/fontes-nao-verificadas.md): só tem as pendências (o que já foi resolvido saiu de lá) e o passo a passo para conferir uma fonte, inclusive PDF. Ao retomar, comece por esse documento e atualize-o a cada fonte resolvida. Pendente hoje: as fontes do Concordia (site fora do ar), e algumas lacunas por página (a página `nos-langues.canada.ca/…/sil-vous-plait` de `f-pedidos`, bloqueada pelo Cloudflare, foi conferida só por resumo de busca) (por exemplo, a tabela de sufixos de `ga-nominalizacao`).

- **Próxima tarefa: citações numeradas `[n]` nas páginas de estudo (definida em 2026-11-12, nada construído):** o texto das páginas passa a citar as fontes com marcadores numerados, como na Wikipédia. Regras combinadas com o usuário:
  - Cada fonte da lista `sources` ganha o número da sua posição (1, 2, 3…), e o texto cita `[1]`, `[2]`, etc. no fim de cada afirmação que uma fonte confirma.
  - **A caixa vermelha "Sem fonte oficial" deixa de citar fontes.** Frases do tipo "o OQLF confirma…" ou "o CCDMD confirma…" são removidas da caixa e substituídas pelo `[n]` da fonte, no lugar onde a afirmação aparece. A caixa só fica com o que não tem fonte e com comentários que sejam necessários (por exemplo, uma nuance entre fontes que se contradizem, ou o aviso de que algo é conselho de preparação). Se não sobrar nada a comentar, a caixa não é usada.
  - A seção **Fontes** no fim da página passa a mostrar o número (`[n]`) antes do título de cada fonte.
  - Como é mudança que quem usa o app percebe, sobe a versão (minor) e entra no changelog.
  - Cuidados: os números dependem da ordem da lista de `sources`, então a ordem fica fixa (se uma fonte for removida ou reordenada, atualizar os `[n]` do texto junto); o áudio não deve ler os marcadores (omitir `[n]` na geração, senão o áudio diria "colchete um"); opcionalmente, tornar o `[n]` clicável, levando à fonte.
  - Aplicar primeiro às páginas já revisadas. Para as 10 páginas de Funções e as demais com fontes ainda não lidas, o `[n]` só entra depois da leitura (veja o item acima, de verificação das fontes). As regras de conteúdo desta seção, mais abaixo, devem ser atualizadas junto quando a tarefa for feita.

## "Adicionar o próximo conteúdo" (caixa de entrada)

O usuário coloca os JSONs de páginas de estudo em `content-inbox/` (fora do Git; no `npm run dev`, o administrador também pode colar o JSON pelo botão "Colar JSON" das páginas sem conteúdo, que salva o arquivo lá; e o **studio** (`npm run studio`, em `studio/`, porta 5175) faz o mesmo para todos os tópicos do Painel, com o pedido para a IA e o andamento de cada tópico) e, em qualquer sessão, diz **"adicionar o próximo conteúdo"**. Fluxo:

1. Pegue o `.json` mais antigo de `content-inbox/` (se não houver, diga isso e pare).
2. Rode `node scripts/importar-json.mts content-inbox/<arquivo>.json`. Ele acha o tópico pelo campo `topic`, corrige apóstrofos, divide o francês da versão `pt` por frase, grava `src/renderer/src/content/<id>.ts`, registra em `content/index.ts` e lista avisos. Se o tópico não for achado, mostre os títulos parecidos de `data/topics.ts` e pergunte.
3. **Revise** pela lista de [docs/revisao-de-conteudo.md](docs/revisao-de-conteudo.md): abra as fontes (o script não confere endereços), confira fatos da prova, falsos cognatos, exemplos e tabelas, e corrija no arquivo gerado. Sugestões que não vêm de fonte oficial saem ou são marcadas como sugestão.
4. `npm run typecheck`. **Não rode `npm run audio` por conta própria:** só rode se o usuário pedir explicitamente. Ao terminar a página, sugira rodá-lo (o usuário também pode rodar). Se pedir e der EPERM, repita; sem `--force`.
5. Mova o JSON para `content-inbox/feitos/` e relate o que corrigiu e o que não conferiu. Não faça commit nem push sem o usuário pedir.

Um arquivo por vez. Se o usuário pedir "todos", repita o fluxo para cada um.

## Regras de conteúdo

Valem ao escrever ou integrar conteúdo, inclusive o gerado por outras IAs. Os modelos de pedido e os formatos em JSON estão em [docs/pedidos-para-outras-ias.md](docs/pedidos-para-outras-ias.md): ao mudar uma regra aqui, atualize lá também.

### Todo conteúdo

- **Francês canadense primeiro:** vocabulário, expressões e exemplos do Canadá/Québec são a forma principal (`courriel`, `fin de semaine`, `magasiner`). Quando a forma da França for diferente, mostre-a ao lado, porque ela também pode aparecer na prova.
- **Ortografia:** francês correto e natural, com acentos, apóstrofo tipográfico `’` e espaço antes de `: ; ? !`.
- **Explicações:** em português do Brasil, curtas e diretas, pensando nos erros típicos de quem fala português.
- **Fontes:** só páginas que existem de verdade, com o endereço completo. Prefira as oficiais (IRCC, France Éducation international, Le français des affaires) e as de referência (Le Robert, Larousse, Usito, Lawless French, Kwiziq, TV5Monde, RFI). Na dúvida sobre um endereço, deixe de fora. Comece a pesquisa pela seção "Fontes para pesquisa" de [topicos-de-estudo.md](topicos-de-estudo.md) e acrescente lá as boas fontes novas.
- **Sem dependência de internet:** o conteúdo vai no próprio app, sem IA nem APIs.

### Páginas de estudo

- Duas versões completas e equivalentes, `pt` e `fr` (título, resumo e blocos), com o botão PT/FR, e as fontes usadas no campo `sources`, que aparecem no fim da página.
- **Na versão `pt`, todo francês é marcado com a tradução:** `[[francês|tradução]]`, por exemplo `[[la voie|a linha]]`. O app mostra o termo destacado, com a tradução numa dica e o áudio ao clicar (`components/TranslatedText.tsx`). Vale também para palavras "fáceis" e para títulos de seção, tabelas e avisos. Só nomes próprios ficam sem marcação. Não traduza entre parênteses.
- Página com termos marcados leva `'terms'` no campo `audio`; depois rode `npm run audio` para gerar os áudios dos termos.
- As seções "Conhecendo a prova" e "Compreensão oral" já usam a marcação. As outras páginas ainda têm a tradução entre parênteses (ou nenhuma) e serão convertidas aos poucos.
- **Textos longos em francês na versão `pt` são divididos por ponto final:** uma marcação `[[frase|tradução]]` por frase, no mesmo bloco, para cada frase ter a sua dica e um áudio curto (pedido do usuário). Se o conteúdo vier com várias frases numa marcação só, divida ao integrar.
- **Só texto simples nos blocos:** sem Markdown (`**negrito**`), sem quebras de linha (`\n`) dentro de um texto e sem numeração dentro dos itens de lista; o app mostra os símbolos como estão. Ao integrar conteúdo que venha assim, separe em blocos `paragraph` (um texto de exemplo em francês vai marcado inteiro num bloco só dele; o rótulo "Interpretação literal:" abre um parágrafo novo) e tire o negrito. Isso já está pedido em [docs/pedidos-para-outras-ias.md](docs/pedidos-para-outras-ias.md).
- **Confira o conteúdo recebido antes de integrar:** abra as fontes (têm de existir), confira se os falsos cognatos são reais (palavra igual nas duas línguas, como `actuellement`, não é) e se os exemplos fictícios fazem sentido. Corrija ou avise o usuário do que mudou.
- **A versão `fr` fica toda em francês**, porque também é treino de leitura e vira áudio.
- De 6 a 12 blocos por versão, na ordem explicação → exemplos → armadilhas → dica para a prova, com pelo menos um aviso (`warning`) do erro típico de quem fala português e uma dica (`tip`) do que a prova cobra. Tabelas sem célula vazia.
- **Caixa vermelha "Sem fonte oficial" (`tone: 'unverified'`, pedido do usuário):** quando a página tiver conteúdo que as fontes de `sources` não confirmam, principalmente se parecer regra, dado ou exigência da prova, acrescente uma caixa `unverified` **por último, abaixo das outras caixas**, nas duas versões (título "Sem fonte oficial" / "Sans source officielle"). Ela diz o que tem fonte e o que não tem, e que o que não tem fonte é conselho de preparação, não regra da prova. O conteúdo sem fonte pode continuar no corpo da página, mas tem de estar listado na caixa. Se tudo tem fonte, não use. Ao integrar, confira as fontes (veja a lista de revisão) e acrescente a caixa onde faltar. Exemplo: [eo-tef-b.ts](src/renderer/src/content/eo-tef-b.ts). Nada na primeira pessoa na caixa ("abri", "li", "não consegui"): só o que tem e o que não tem fonte, em voz impessoal (pedido do usuário). Essa caixa não conta nos 6 a 12 blocos e não substitui o `warning` nem o `tip`.

### Flashcards

- Cada cartão tem `fr` (só o que se fala, com artigo nos substantivos), `pt` e `example` com `fr` e `pt`. Notas de gramática e a forma da França vão em `note`; a armadilha dos falsos cognatos vai em `trap`.
- Padrão dos cartões (detalhes em [docs/pedidos-para-outras-ias.md](docs/pedidos-para-outras-ias.md)): `pt` em minúsculas, sem ponto final e com artigo (`o carro`); substantivo que começa com vogal usa `un/une` em vez de `l’`; apóstrofo sempre `’`; exemplo neutro, sem afirmação sobre fatos reais; `description` com o número certo de cartões. Ao integrar, normalize o que vier fora desse padrão.
- Os ids dependem da posição: cartões novos entram **no fim** do baralho, sem mudar a ordem dos outros.

### Questões de gramática

- `prompt` em francês com a lacuna marcada por `___`, e 4 opções em que **a primeira é a correta** (o app embaralha) e só uma pode estar certa. As erradas são erros plausíveis de um brasileiro.
- `explanation` em português. Varie o vocabulário e o contexto (trabalho, moradia, imigração, rotina).
- Os ids dependem da posição: questões novas entram **no fim** do tópico, sem mudar a ordem das outras.

### Áudio

- **Ao adicionar ou mudar conteúdo, não rode `npm run audio` por conta própria** (pedido do usuário): só rode se ele pedir explicitamente. Depois de criar a página, apenas **sugira** rodá-lo, dizendo que faltam áudios. O comando gera só o que falta. **Não use `--force`** sem o usuário pedir; para textos específicos, use `--only=chave1,chave2`.
- Vozes (`AUDIO_VOICES` em `src/renderer/src/lib/audio-texts.ts`): Sylvie (mulher, padrão) e Antoine (homem), do Canadá; Denise e Vivienne, da França. A voz de cada texto que não usa a padrão fica em `assets/audio/voices.json`, inclusive os gerados antes de a Sylvie virar a padrão: ao mudar a voz padrão, marque os áudios existentes com a voz atual deles. Não troque a voz de textos existentes sem o usuário pedir, porque isso gera os áudios de novo.

### Revisão

- **Antes de integrar qualquer conteúdo novo, siga a lista de [docs/revisao-de-conteudo.md](docs/revisao-de-conteudo.md)** (formato, fontes, francês e português, exemplos, áudio) e diga ao usuário o que corrigiu e o que não conferiu. Quando aparecer um erro novo, acrescente-o lá.
- Conteúdo gerado pode ter erros de francês ou de fatos da prova, e seguir estas regras não evita isso. O usuário revisa no app, e as marcações ficam em `content-review/grammar.json` e `content-review/flashcards.json`. Ao corrigir, trate todos os itens com `"status": "problem"` usando a nota de cada um.
- Parte do conteúdo antigo é anterior às regras do francês canadense e da tradução na versão `pt`: não presuma que já as segue.

## Versionamento (pedido do usuário em 06/11/2026)

O Claude cuida da versão do app. **Todo commit sobe a versão** em `package.json` e `package-lock.json`. Use o comando abaixo, sem criar tag:

```bash
npm version <nova-versão> --no-git-tag-version
```

A versão aparece em Configurações → Sobre e é a que a atualização automática compara.

| Tipo de mudança | Sobe | Exemplo |
|---|---|---|
| Pequena correção, ajuste de estilo ou de texto, mudança de ordem de coisas pouco importantes, conteúdo novo (páginas de estudo, cartões, questões) | `x.y.Z` (patch) | 1.1.0 → 1.1.1 |
| Funcionalidade nova ou diferente, aba nova desenvolvida | `x.Y.0` (minor, zera o patch) | 1.1.3 → 1.2.0 |
| Mudança muito grande na interface (só com o usuário pedindo) | `X.0.0` (major) | 1.4.2 → 2.0.0 |

- Um commit com várias mudanças sobe pelo tipo mais alto entre elas.
- Cite a versão nova na mensagem do commit (ex.: "1.1.1: ...").
- Subir a versão não publica nada por si só. **Cada push na `main` com versão nova publica uma Release automaticamente**, que chega aos apps instalados (`.github/workflows/release.yml`, ver README → Releases). O workflow mantém só as duas últimas Releases e apaga as mais antigas, sem apagar as tags. Não crie tags nem Releases à mão.

## Novidades (changelog)

O app mostra as novidades em **Configurações → Sobre → Novidades**, só quando a pessoa abre (nunca sozinho), com uma aba por versão minor (1.3, 1.2…). O conteúdo fica em `src/renderer/src/data/changelog.ts`.

- **Toda mudança que quem usa o app percebe ganha uma entrada no mesmo commit**, na versão nova. Mudanças só internas (workflow, documentação técnica, regras para o Claude) ficam de fora.
- Formato do [Keep a Changelog](https://keepachangelog.com), com as seções em português e em francês: Adicionado/Ajouté, Modificado/Modifié, Obsoleto/Obsolète, Removido/Supprimé, Corrigido/Corrigé, Segurança/Sécurité.
- Cada item tem `pt` e `fr`, escritos para quem usa o app: o que mudou e onde, sem termos técnicos nem nomes de arquivo.
- A versão mais nova fica no topo, com a data (AAAA-MM-DD).
- As entradas cobrem desde a 1.0.0, escritas depois a partir do histórico de commits.

## Push

Quem faz o push é o Claude, mas **só quando o usuário pedir explicitamente**. Sem esse pedido, faça o commit local e apenas sugira o push.
