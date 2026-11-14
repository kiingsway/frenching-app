# Como pedir conteúdo para outras IAs

Modelos de pedido para gerar conteúdo do Frenching em outra IA (ChatGPT, Gemini etc.). Cada modelo pede a resposta num formato fixo (JSON), que o Claude transforma nos arquivos do app e para o qual gera os áudios.

**Como usar:**
1. Copie o **contexto geral** e depois o modelo do que você quer.
2. Troque o que está entre `[colchetes]`.
3. Mande para a outra IA.
4. Cole a resposta para o Claude com um pedido como: "integra estes flashcards no app e gera os áudios".

> Conteúdo gerado por IA pode ter erros de francês ou de fatos sobre a prova. Depois de integrado, revise na lista do app:
> - Configurações → Lista de questões, para as questões de gramática;
> - Lista de flashcards, para os cartões;
> - Lista de textos, para os textos de compreensão escrita.
>
> Marque OK ou Problema; o Claude corrige os marcados.

---

## Contexto geral (cole sempre no começo)

```
Você vai gerar conteúdo para um app de estudos de francês para brasileiros que vão fazer o TEF Canada ou o TCF Canada, com meta de NCLC 7 (≈ B2) nas quatro habilidades. O app é em português do Brasil.

Regras:
- Francês correto e natural, com a ortografia padrão (acentos, apóstrofo tipográfico ’ e espaço antes de : ; ? ! no texto em francês).
- Apóstrofo: use SEMPRE o tipográfico ’ (J’utilise, l’argent, s’il vous plaît), nunca o reto ' (errado: J'utilise). Vale para todo texto em francês, inclusive exemplos, notas, títulos e nomes de fontes (ex.: "L’accord dans le groupe nominal").
- Não afirme o que você não tem certeza: se não souber ao certo uma diferença regional, um dado ou um endereço, deixe de fora em vez de arriscar. Uma afirmação errada é pior do que uma ausente.
- Priorize o francês canadense (Québec): vocabulário, expressões e exemplos do Canadá são a forma principal (ex.: courriel, fin de semaine, magasiner). Quando a forma da França for diferente, mostre-a ao lado como alternativa, porque ela também pode aparecer na prova.
- Explicações em português do Brasil, curtas e diretas, pensando nos erros típicos de quem fala português.
- Fontes: use só páginas que existem de verdade, com o endereço completo, e prefira fontes oficiais (IRCC, France Éducation international, Le français des affaires) e de referência (Le Robert, Larousse, Usito, Lawless French, Kwiziq, TV5Monde, RFI). Se não tiver certeza de um endereço, não invente: deixe de fora.
- Responda com o JSON pedido (use code snippet se disponível) e no final mandar "Tópico pronto: [tópico] (seção: [seção])", nenhum comentário a mais.
```

---

## Flashcards (um baralho novo)

```
Crie um baralho de [20] flashcards sobre [tema, ex.: "vocabulário de saúde e consultas médicas"], nível [A2–B1 / B1–B2 / B2].

Cada cartão tem:
- "fr": a palavra ou expressão em francês, só o que se fala (com artigo nos substantivos: "le loyer"). Notas de gramática vão em "note". Substantivo que começa com vogal ou h mudo: use "un/une" (não "l’"), porque o "l’" esconde o gênero (ex.: "un arbre", "une adresse").
- "pt": a tradução em português, em minúsculas, sem ponto final, e com artigo nos substantivos ("o carro", "a bicicleta"), igual em todos os cartões. Só tradução de verdade: se a palavra francesa significa X, o "pt" é X (não use outra palavra parecida; ex.: "faute" é "culpa" ou "falta", não "erro").
- "example": uma frase de exemplo útil para a prova, em francês ("fr") e a tradução ("pt"). Frase neutra e natural, sem afirmações sobre fatos reais (estatísticas, situação econômica de um lugar, regras de órgãos públicos). Boas frases falam do cotidiano, do trabalho, da moradia, da imigração.
- "note" (opcional): observação de uso (preposição que acompanha, registro formal/informal, auxiliar do passé composé, forma usada na França quando for diferente da canadense). Escreva uma ideia clara e verdadeira; sem frases sem sentido ("même au singulier") e sem repetir o óbvio.
- "trap" (opcional, só para falsos cognatos): a armadilha explicada, ex.: "Não é atender. Atender = répondre, servir."

Antes de responder, confira cada cartão:
- O cartão mostra o que o baralho promete. Num baralho de gênero, o gênero precisa ser DIFERENTE nas duas línguas (ex.: "la pause" e "a pausa" são os dois femininos: não serve). Num baralho de falsos cognatos, a palavra precisa ser mesmo um falso cognato.
- Diferenças entre Québec e França estão certas. Exemplo famoso: "déjeuner" é o café da manhã no Québec e o almoço na França; "dîner" é o almoço no Québec e o jantar na França. Se não tiver certeza, não escreva.
- Não repita cartão que já existe no baralho, e o número dito na "description" (ex.: "50 substantivos") é igual ao número de cartões.

Formato:
{
  "id": "[id-curto-sem-acento, ex.: saude]",
  "title": "[título do baralho em português]",
  "description": "[uma frase dizendo o que tem no baralho]",
  "sources": [{ "title": "...", "url": "https://..." }],
  "cards": [
    { "fr": "...", "pt": "...", "example": { "fr": "...", "pt": "..." }, "note": "..." }
  ]
}
```

Para **acrescentar cartões a um baralho que já existe**, use o mesmo formato, troque a primeira linha por "Crie mais [10] cartões para o baralho [nome]" e cole a lista dos que já existem para não repetir. Os novos entram no fim do baralho.

Baralhos que já existem: Essenciais do dia a dia, Conectores e articuladores, Falsos cognatos, Dar opinião e argumentar.

---

## Questões de gramática (aba Gramática)

```
Crie [8] questões de múltipla escolha sobre "[tópico, ex.: Imparfait × passé composé]", nível [A1–A2 / B1 / B2–C1], no estilo das questões de gramática do TEF/TCF.

Cada questão:
- "prompt": uma frase em francês com uma lacuna marcada por ___ .
- "options": 4 opções; a PRIMEIRA é sempre a correta (o app embaralha depois). As erradas devem ser erros plausíveis, os que um brasileiro cometeria.
- "explanation": em português, por que a certa está certa e, quando ajudar, por que as outras não.
- Só uma opção pode estar certa. Varie o vocabulário e o contexto (trabalho, moradia, imigração, rotina).

Formato:
{
  "topic": "[o mesmo nome do tópico]",
  "questions": [
    { "prompt": "Hier, je ___ au cinéma.", "options": ["suis allé", "allais", "vais", "irai"], "explanation": "..." }
  ]
}
```

Os tópicos estão em [topicos-de-estudo.md](../topicos-de-estudo.md), na seção Gramática. Questões novas entram sempre no fim da lista do tópico.

---

## Textos de compreensão escrita (aba Compreensão escrita)

```
Crie [3] textos originais para treinar a compreensão escrita do TEF Canada e do TCF Canada, nível [A1 / A2 / B1 / B2 / C1], do tipo [documento do cotidiano / e-mail ou carta / oferta ou anúncio / notícia / texto argumentativo / texto literário].

Cada texto:
- Original: não copie nem adapte questões ou textos de provas oficiais ou de livros.
- Situação do Canadá (Québec) sempre que fizer sentido, com vocabulário canadense (courriel, fin de semaine, texto, 4 ½, chauffé et éclairé). Pessoas, empresas e endereços fictícios; cidades reais podem aparecer, mas sem afirmar fatos reais sobre elas (estatísticas, leis, preços médios). Notícias falam de um acontecimento inventado, de preferência numa cidade fictícia.
- Tamanho pelo nível: A1, 20 a 60 palavras (aviso, horário, cartaz, frases curtas no presente); A2, 60 a 120 palavras; B1, 120 a 200; B2, 200 a 300; C1, 250 a 400.
- "text": lista de parágrafos (num anúncio, uma linha por item), só texto simples, sem Markdown e sem 
.
- "translation": a tradução em português do Brasil, com o MESMO número de itens de "text", item por item.

Cada texto tem 3 questões:
- "prompt": a pergunta em francês, como na prova (ideia principal, detalhe, intenção do autor, sentido de uma expressão no contexto).
- "options": 4 opções em francês; a PRIMEIRA é sempre a correta (o app embaralha). Só uma pode estar certa pelo texto. As erradas devem ser plausíveis: usam palavras do texto com o sentido trocado, ou dados que aparecem no texto mas respondem a outra pergunta.
- A resposta certa usa paráfrase (sinônimos), em vez de repetir a frase do texto.
- "explanation": em português, cite o trecho do texto que dá a resposta e diga por que a armadilha principal está errada. Mostre a forma da França quando o texto usar uma palavra só do Canadá.

Formato:
{
  "id": "[id-curto-sem-acento, ex.: ce-annonce-velo]",
  "level": "[A1 | A2 | B1 | B2 | C1]",
  "kind": "[ce-cotidiano | ce-cartas | ce-ofertas | ce-noticias | ce-argumentativos | ce-literarios]",
  "title": "[título do documento, em francês]",
  "text": ["...", "..."],
  "translation": ["...", "..."],
  "questions": [
    { "prompt": "...", "options": ["certa", "errada", "errada", "errada"], "explanation": "..." }
  ]
}
```

Para vários textos, peça uma lista desses objetos. Os textos novos entram no fim de `data/reading/textos.ts`; os ids não mudam depois de publicados.

---

## Páginas de estudo (Painel)

```
Escreva a página de estudo do tópico "[nome do tópico, como está na lista]" (seção "[nome da seção]").

A página tem duas versões completas e equivalentes: português ("pt") e francês ("fr"). A versão em francês não é resumo: é a mesma página, escrita em francês natural (ela também serve de treino de leitura e vira áudio).

Cada versão tem:
- "title": título.
- "summary": 2 ou 3 frases do que a pessoa vai aprender.
- "blocks": a página, em blocos, nesta ordem lógica: explicação → exemplos → armadilhas → dica para a prova. Tipos de bloco:
  { "type": "heading", "text": "..." }
  { "type": "paragraph", "text": "..." }
  { "type": "list", "items": ["...", "..."] }
  { "type": "table", "headers": ["...", "..."], "rows": [["...", "..."]] }   (nenhuma célula vazia)
  { "type": "callout", "tone": "tip" ou "warning" ou "unverified", "title": "...", "text": "..." }
- Inclua pelo menos um "warning" com o erro típico de quem fala português e um "tip" com o que a prova cobra.
- Caixa vermelha "unverified" (título "Sem fonte oficial" em "pt" e "Sans source officielle" em "fr"): quando a página tiver conteúdo que as fontes listadas não confirmam (principalmente algo que pareça regra, dado ou exigência da prova), acrescente UMA caixa assim, por último, depois da dica. Ela diz o que tem fonte e o que não tem, e que o que não tem fonte é conselho de preparação, não regra da prova. Se tudo na página tem fonte, não use.
- Tradução obrigatória na versão "pt": toda palavra, expressão ou frase em francês é marcada assim: [[francês|tradução em português]]. Exemplos: [[la voie|a linha]], [[Je peux vous aider ?|Posso ajudar?]], [[soixante-dix|70]]. Vale para títulos de seção, parágrafos, listas, tabelas, avisos e exemplos citados, sem exceção para palavras "fáceis". Só nomes próprios ficam sem marcação (RFI, Radio-Canada).
  - Não use parênteses para traduzir: o app mostra o francês destacado, com a tradução numa dica e o áudio ao clicar.
  - Cada marcação tem um trecho só em francês e não leva outra marcação dentro.
  - Texto longo em francês (dois ou mais pontos finais) é dividido por frase: uma marcação para cada frase, com a tradução da própria frase, uma depois da outra no mesmo bloco, separadas por um espaço. Assim cada frase tem a sua dica e o seu áudio curto, em vez de um áudio longo. Ex.: "[[Samedi dernier, j’ai participé à une opération.|No último sábado, participei de uma operação.]] [[Une vingtaine de résidents se sont retrouvés à 9 h.|Cerca de vinte moradores se reuniram às 9h.]]". Uma frase isolada, mesmo longa, fica numa marcação só.
  - O número de frases em francês e na tradução tem de ser o mesmo, na mesma ordem. Pontuação no meio da frase (: ; ,) não divide.
  - Dentro da marcação, não use os caracteres | e ] além dos da própria marcação.
  - O texto em volta continua em português: "a resposta certa é [[à l’heure|no horário]]".
  - Uma tabela pode ter colunas separadas para o francês e o português; nesse caso, as células em francês também levam a marcação.
  - Texto de exemplo em francês (um anúncio, uma notícia, um trecho literário): vai num bloco "paragraph" só dele, marcado inteiro, com a tradução do trecho todo. O título do exemplo, se houver, é outro bloco "paragraph".
- Só texto simples dentro dos blocos:
  - Nada de Markdown: sem `**negrito**`, `*itálico*`, `#` nem listas com hífen dentro de um texto. O app mostra os asteriscos como estão. Para destacar um rótulo, como "Interpretação literal:", abra um bloco "paragraph" novo começando por ele.
  - Nada de quebras de linha (\n) dentro de um texto: cada parágrafo é um bloco "paragraph" separado.
  - Uma lista é um bloco "list" com um item por linha; não use "1.", "-" nem "•" no começo do item.
- Falsos cognatos e comparações de palavras: confira que a armadilha é real. Palavra que significa o mesmo em francês e em português (ex.: "actuellement" = "atualmente") não é falso cognato. Dê só exemplos verdadeiros (ex.: "demander" = pedir ou perguntar, não "demandar"; "éventuellement" = possivelmente, não "eventualmente").
- Exemplos fictícios coerentes: quem lê precisa entender quem fez o quê. Não deixe personagens ou ações sem explicação (ex.: alguém que "prestou socorro" sem se dizer de quem era ou por que estava lá).
- Dados da prova (número de questões, tempo) só se forem conferidos nas fontes oficiais; na dúvida, deixe de fora.
- A versão "fr" fica toda em francês, sem traduções nem marcações, porque vira áudio.
- Tamanho: de 6 a 12 blocos por versão.

"sources": as fontes usadas, no fim (título e endereço real, de uma página que abre). Prefira as que você de fato consultou.

Citações: os números seguem a ordem em que as fontes aparecem no texto (a primeira citada é a [1], a próxima nova é a [2]…), e cada fonte de "sources" tem de ser citada pelo menos uma vez; a que não entra no texto fica de fora da lista. No texto, cite [n] no fim de cada afirmação que a fonte confirma, depois da pontuação e com um espaço antes ("… até 136 pontos. [1]"; várias: "[1] [2]"). Cite só o que está de fato na fonte. Não cite em títulos de seção nem na caixa "unverified".

Formato:
{
  "topic": "[nome do tópico]",
  "pt": { "title": "...", "summary": "...", "blocks": [ ... ] },
  "fr": { "title": "...", "summary": "...", "blocks": [ ... ] },
  "sources": [{ "title": "...", "url": "https://..." }]
}
```

No app, o administrador vê o botão "Copiar pedido para a IA" nas páginas sem conteúdo: ele copia o **contexto geral** e este modelo, já com o nome do tópico e da seção. O botão lê este arquivo, então basta mantê-lo em dia (o contexto e este modelo continuam sendo o primeiro bloco de código de cada seção, e os trechos `[nome do tópico…]` e `[nome da seção]` são os que o app troca).

Os tópicos que faltam aparecem como "em breve" no Painel e estão listados em [topicos-de-estudo.md](../topicos-de-estudo.md).

Ao integrar a página, o Claude confere se todo francês da versão "pt" está marcado, acrescenta `'terms'` ao campo `audio` e gera os áudios dos termos.

---

## Pedidos úteis para revisar (em vez de gerar)

- **Conferir o francês:** "Revise estas frases em francês. Para cada uma, diga se está correta e natural; se não estiver, dê a versão corrigida e explique em português: [cole as frases]".
- **Conferir questões:** "Para cada questão, confirme que só a primeira opção está certa e que a explicação está correta. Liste só as que têm problema: [cole o JSON]".
- **Conferir fatos da prova:** "Confira estes dados sobre o TEF Canada / TCF Canada (duração, número de questões, notas NCLC) com as páginas oficiais e diga o que mudou, com o endereço da fonte: [cole o trecho]".

---

## Revisar uma página de estudo que já existe (fontes e citações `[n]`)

Serve para as páginas ainda sem `[n]` (veja "Tarefas pendentes" no [CLAUDE.md](../CLAUDE.md)). A outra IA **precisa conseguir abrir links**: sem isso ela cita de memória, e é isso que o pedido quer evitar. **No app,** o administrador vê "Copiar pedido de revisão" no menu "⋯" de cada página com conteúdo: ele copia o contexto geral e este modelo, já com o nome do tópico e o conteúdo da página em JSON (o botão lê este arquivo: o modelo continua sendo o primeiro bloco de código desta seção, e os trechos `[nome do tópico]` e `[cole aqui o conteúdo do arquivo]` são os que o app troca). À mão, copie o **contexto geral** (acima), troque o que está entre `[colchetes]` e cole o conteúdo do arquivo `src/renderer/src/content/<id>.ts`. Depois, cole a resposta para o Claude ("aplica esta revisão em <id>"): ele confere por amostragem, ajusta e roda o `typecheck`.

```
Você vai REVISAR (não reescrever) a página de estudo "[nome do tópico]" do app, conferindo cada afirmação nas fontes da lista "sources" e acrescentando citações numeradas [n]. A página tem duas versões equivalentes, "pt" (português) e "fr" (francês), com blocos dos tipos heading, paragraph, list, table e callout (tone: tip, warning ou unverified).

Passo a passo:
1. Abra cada fonte de "sources" e leia. Fonte que não abre, que bloqueia você ou que é só um índice não vale como confirmação: diga isso na entrega e não a cite.
2. Para cada afirmação da página, decida: (a) a fonte confirma, (b) a fonte contradiz ou diz algo um pouco diferente, (c) nenhuma fonte trata do assunto.
   - (a) ponha [n] no fim da afirmação, nas versões "pt" e "fr". n é a posição da fonte em "sources" (a primeira é [1]). Depois da pontuação, com um espaço antes ("… 136 pontos. [1]"; várias: "[1] [2]"). Em tabela, o [n] vai no fim da célula. Não cite em títulos de seção (heading) nem dentro da caixa "unverified".
   - (b) corrija o texto para dizer o que a fonte diz (por exemplo, "sempre" vira "normalmente" se a fonte diz "usually"), nas duas versões, e conte isso na entrega.
   - (c) deixe sem [n]. Se parecer regra, dado ou exigência da prova, entra na caixa vermelha; dados da prova (número de questões, tempo, ordem, notas) que nenhuma fonte confirma devem ser tirados.
3. Ordem dos números: numere as fontes pela ordem em que aparecem no texto (a primeira citada é [1], a próxima nova é [2]…), e reordene "sources" para bater. Fonte que ninguém cita sai da lista.
4. Caixa vermelha (tone "unverified"; título "Sem fonte oficial" em "pt" e "Sans source officielle" em "fr"): a última caixa, depois das outras, nas duas versões. Ela diz só o que NÃO tem fonte, em voz impessoal ("Não aparecem nas fontes desta página: …" / "N’apparaissent pas dans les sources de cette fiche : …"), e que dicas e exemplos de treino são conselho de preparação, não regra da prova. Nada na primeira pessoa ("abri", "li", "não consegui"). Não cite fontes nela e não ponha o que tem fonte. Se a página já tem a caixa, reescreva a lista para bater com o texto. Se tudo tem fonte, a caixa sai.
5. Formato que você não pode quebrar:
   - Versão "pt": todo francês marcado como [[francês|tradução]] (nada de parênteses para traduzir); só nomes próprios ficam sem marcação. Texto com duas ou mais frases em francês: uma marcação por frase. Dentro da marcação, não use | nem ] além dos da própria marcação. Se acrescentar francês, marque.
   - Versão "fr": toda em francês, sem marcações.
   - Apóstrofo tipográfico ’ (nunca '), espaço antes de : ; ? ! no francês.
   - Só texto simples: sem Markdown, sem quebras de linha dentro do texto, sem numeração nos itens de lista. Tabelas sem célula vazia.
   - Francês do Canadá (Québec) como forma principal, com a da França ao lado quando diferir.
   - Não mude a estrutura, a ordem dos blocos, os campos "id" e "audio", nem o que já está correto e sem relação com as fontes.
6. Não invente fontes nem endereços. Só acrescente uma fonte nova se você a abriu, ela trata do assunto e o endereço completo funciona.

Entrega (nesta ordem):
A) A página inteira corrigida, no mesmo formato recebido (JSON, com os mesmos campos), num bloco de código.
B) Uma lista curta com: o que você corrigiu e por quê (item b); o que foi para a caixa vermelha (item c); as fontes que não abriu ou não confirmaram nada e saíram da lista. Sem outros comentários.

Página:
[cole aqui o conteúdo do arquivo]
```

O que o Claude confere depois: abre uma ou duas fontes e vê se a frase citada está lá; confere se cada `[n]` aponta para a fonte certa, se a ordem bate nas duas versões e se a caixa vermelha ficou só com o que não tem fonte; roda o `typecheck`; sugere o `npm run audio` (texto reescrito precisa de áudio novo; só acrescentar `[n]` não muda o áudio).
