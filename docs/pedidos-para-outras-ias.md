# Como pedir conteúdo para outras IAs

Modelos de pedido para gerar conteúdo do Frenching em outra IA (ChatGPT, Gemini etc.). Cada modelo pede a resposta num formato fixo (JSON), que o Claude transforma nos arquivos do app e para o qual gera os áudios.

**Como usar:**
1. Copie o **contexto geral** e depois o modelo do que você quer.
2. Troque o que está entre `[colchetes]`.
3. Mande para a outra IA.
4. Cole a resposta para o Claude com um pedido como: "integra estes flashcards no app e gera os áudios".

> Conteúdo gerado por IA pode ter erros de francês ou de fatos sobre a prova. Depois de integrado, revise na lista do app:
> - Configurações → Lista de questões, para as questões de gramática;
> - Lista de flashcards, para os cartões.
>
> Marque OK ou Problema; o Claude corrige os marcados.

---

## Contexto geral (cole sempre no começo)

```
Você vai gerar conteúdo para um app de estudos de francês para brasileiros que vão fazer o TEF Canada ou o TCF Canada, com meta de NCLC 7 (≈ B2) nas quatro habilidades. O app é em português do Brasil.

Regras:
- Francês correto e natural, com a ortografia padrão (acentos, apóstrofo tipográfico ’ e espaço antes de : ; ? ! no texto em francês).
- Priorize o francês canadense (Québec): vocabulário, expressões e exemplos do Canadá são a forma principal (ex.: courriel, fin de semaine, magasiner). Quando a forma da França for diferente, mostre-a ao lado como alternativa, porque ela também pode aparecer na prova.
- Explicações em português do Brasil, curtas e diretas, pensando nos erros típicos de quem fala português.
- Fontes: use só páginas que existem de verdade, com o endereço completo, e prefira fontes oficiais (IRCC, France Éducation international, Le français des affaires) e de referência (Le Robert, Larousse, Usito, Lawless French, Kwiziq, TV5Monde, RFI). Se não tiver certeza de um endereço, não invente: deixe de fora.
- Responda SÓ com o JSON pedido, sem comentários antes ou depois.
```

---

## Flashcards (um baralho novo)

```
Crie um baralho de [20] flashcards sobre [tema, ex.: "vocabulário de saúde e consultas médicas"], nível [A2–B1 / B1–B2 / B2].

Cada cartão tem:
- "fr": a palavra ou expressão em francês, só o que se fala (com artigo nos substantivos: "le loyer"). Notas de gramática vão em "note".
- "pt": a tradução em português.
- "example": uma frase de exemplo útil para a prova, em francês ("fr") e a tradução ("pt").
- "note" (opcional): observação de uso (preposição que acompanha, registro formal/informal, auxiliar do passé composé, forma usada na França quando for diferente da canadense).
- "trap" (opcional, só para falsos cognatos): a armadilha explicada, ex.: "Não é atender. Atender = répondre, servir."

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
  { "type": "callout", "tone": "tip" ou "warning", "title": "...", "text": "..." }
- Inclua pelo menos um "warning" com o erro típico de quem fala português e um "tip" com o que a prova cobra.
- Tradução obrigatória na versão "pt": toda palavra, expressão ou frase em francês é marcada assim: [[francês|tradução em português]]. Exemplos: [[la voie|a linha]], [[Je peux vous aider ?|Posso ajudar?]], [[soixante-dix|70]]. Vale para títulos de seção, parágrafos, listas, tabelas, avisos e exemplos citados, sem exceção para palavras "fáceis". Só nomes próprios ficam sem marcação (RFI, Radio-Canada).
  - Não use parênteses para traduzir: o app mostra o francês destacado, com a tradução numa dica e o áudio ao clicar.
  - Cada marcação tem um trecho só em francês e não leva outra marcação dentro. Uma frase longa pode ser marcada inteira.
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

Formato:
{
  "topic": "[nome do tópico]",
  "pt": { "title": "...", "summary": "...", "blocks": [ ... ] },
  "fr": { "title": "...", "summary": "...", "blocks": [ ... ] },
  "sources": [{ "title": "...", "url": "https://..." }]
}
```

Os tópicos que faltam aparecem como "em breve" no Painel e estão listados em [topicos-de-estudo.md](../topicos-de-estudo.md).

Ao integrar a página, o Claude confere se todo francês da versão "pt" está marcado, acrescenta `'terms'` ao campo `audio` e gera os áudios dos termos.

---

## Pedidos úteis para revisar (em vez de gerar)

- **Conferir o francês:** "Revise estas frases em francês. Para cada uma, diga se está correta e natural; se não estiver, dê a versão corrigida e explique em português: [cole as frases]".
- **Conferir questões:** "Para cada questão, confirme que só a primeira opção está certa e que a explicação está correta. Liste só as que têm problema: [cole o JSON]".
- **Conferir fatos da prova:** "Confira estes dados sobre o TEF Canada / TCF Canada (duração, número de questões, notas NCLC) com as páginas oficiais e diga o que mudou, com o endereço da fonte: [cole o trecho]".
