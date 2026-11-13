# Como revisar conteúdo antes de integrar

Lista de conferência para todo conteúdo novo ou vindo de outra IA (páginas de estudo, flashcards, questões de gramática). Foi montada a partir de erros reais que apareceram ao integrar conteúdo. Quem integra (o Claude) passa por ela **antes** de commitar e avisa o usuário do que corrigiu.

> Seguir as regras de formato não garante que o conteúdo esteja certo. O usuário ainda revisa no app (veja o fim deste documento).

## 1. Formato

- **Só texto simples** dentro dos blocos: sem Markdown (`**negrito**`, `#`), sem quebras de linha (`\n`) no meio de um texto e sem numeração dentro dos itens de lista. O app mostra esses símbolos como estão.
- Texto longo com mais de um parágrafo vira **vários blocos** `paragraph`. Um exemplo em francês (anúncio, notícia, trecho literário) vai marcado inteiro, num bloco só dele; o título do exemplo e os rótulos ("Interpretação literal:") ficam em blocos à parte.
- **Ortografia:** apóstrofo tipográfico `’` (não `'`) e espaço antes de `: ; ? !` no francês. Atenção também aos títulos das fontes.
- **Textos longos na versão `pt`:** francês com duas ou mais frases é dividido por ponto final, uma marcação por frase (cada uma com a sua tradução e o seu áudio curto). Se a outra IA entregou o trecho inteiro numa marcação só, divida ao integrar, conferindo que as frases em francês e em português têm o mesmo número.
- **Versão `pt`:** todo francês marcado como `[[francês|tradução]]`, sem parênteses. Sem `|` ou `]` soltos dentro da marcação, exceto as variantes por região (veja abaixo).
- **Versão `fr`:** toda em francês, sem marcações.
- **Variantes por região:** quando a mesma palavra muda de sentido conforme o país, use `[[déjeuner|Québec: café da manhã|França: almoço]]`. A dica mostra uma linha por região.
- Tabelas sem célula vazia; de 6 a 12 blocos por versão, com pelo menos um `warning` e um `tip`.

## 2. Fontes

- **Abra cada endereço** (precisa responder 200). Um endereço que não abre sai da lista.
- A fonte precisa tratar do assunto da página. Prefira as oficiais e as de referência (veja o CLAUDE.md).
- Dados da prova (número de questões, tempo, notas) só entram se estiverem na fonte oficial. Na dúvida, fora.
- **Caixa vermelha "Sem fonte oficial":** depois de abrir as fontes, compare com a página. O que as fontes não confirmam (principalmente o que parecer regra ou exigência da prova, como "o examinador vai…", "a prova exige…", "o avaliador espera…") deve estar listado numa caixa `unverified`, por último, nas duas versões. Se a página já tem a caixa, confira se a lista ainda bate com o texto. Fonte que bloqueia robôs e que você não conseguiu abrir não vale como confirmação: o que dependia dela entra na caixa.
- **Citações `[n]`:** confira que cada `[n]` aponta para a fonte certa (número = posição em `sources`) e que a fonte diz mesmo aquilo. Citação que a fonte não confirma sai, e a afirmação vai para a caixa "Sem fonte oficial".

## 3. Francês e português

- **Falsos cognatos:** confirme que a armadilha é real. Palavra que significa o mesmo nas duas línguas não é falso cognato (erro encontrado: `actuellement` = "atualmente"; a armadilha verdadeira seria `éventuellement`, `demander`, `prétendre` ≠ "pretender").
- **Explicações em geral:** leia como alguém que fala português. Se a frase for confusa ("não significa X no sentido de Y"), reescreva.
- **Gênero e artigos:** nos substantivos, confira o gênero e o artigo em francês (`le/la/l’/un/une`) e, nos baralhos de gênero, o gênero do equivalente em português.
- **Francês canadense primeiro:** a forma do Québec vem em primeiro lugar, com a da França ao lado quando diferir.

## 3b. Flashcards

- **O cartão cumpre o baralho:** num baralho de gênero, o gênero tem de ser diferente nas duas línguas; num de falsos cognatos, a palavra tem de ser mesmo um falso cognato. (Encontrado: `la pause`/`a pausa` e `la faute`/`o erro` não serviam.)
- **Tradução de verdade:** o `pt` é a tradução do `fr`, não de outra palavra próxima.
- **Diferenças regionais:** confira nas fontes. (Encontrado: `déjeuner` e `dîner` estavam invertidos entre Québec e França.)
- **Padrão de escrita:** `pt` em minúsculas, sem ponto final e com artigo; `un/une` no lugar de `l’`; apóstrofo `’` (inclusive nos títulos das fontes).
- **Notas e exemplos:** sem frases sem sentido e sem afirmações sobre fatos reais (estatísticas, situação de um lugar, prazos de órgãos públicos).
- **Descrição:** o número que ela cita bate com a quantidade de cartões.
- **Fontes de baralho:** páginas iniciais de sites de referência são aceitas; endereços profundos só se abrirem. Sites que bloqueiam robôs (erro 403) não dá para conferir sem ajuda: na dúvida, deixe de fora o endereço profundo.

## 4. Exemplos fictícios

- Quem lê precisa entender **quem fez o quê**. Não deixe personagens ou ações sem explicação (erro encontrado: uma motorista que "prestou socorro" numa notícia sem se dizer de quem era ou por que estava lá).
- O exemplo precisa demonstrar o que a página ensina (se a página fala de condicional, o texto usa o condicional).
- Traduções do exemplo em português natural, sem francês misturado no meio ("o dîner amanhã").

## 5. Itens com posição ou id

- **Flashcards e questões:** os ids dependem da posição, então itens novos entram **no fim**, sem mudar a ordem dos outros.
- **Questões:** só uma opção pode estar certa; as erradas são erros plausíveis de um brasileiro.

## 6. Áudio

- Depois de integrar, **sugira** rodar `npm run audio` (sem `--force`); só rode se o usuário pedir explicitamente. Se o script avisar que apagou áudios sem uso, confira se foi esperado.
- Texto que mudou gera áudio novo; o antigo, sem uso, é apagado. Isso é normal.

## 7. O que ainda cabe ao usuário

- O usuário revisa no app: Configurações → Lista de questões e Lista de flashcards. As marcações ficam em `content-review/grammar.json` e `content-review/flashcards.json`.
- Ao corrigir, trate todos os itens com `"status": "problem"` usando a nota de cada um.
- Parte do conteúdo antigo é anterior a estas regras; não presuma que já as segue.

## 8. Ao terminar

Diga ao usuário, em poucas linhas, o que foi corrigido na integração e o que **não** foi conferido (por exemplo, "não revisei os 50 cartões").
