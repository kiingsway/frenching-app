# Fontes ainda não verificadas

Controle do que falta conferir nas páginas de estudo. Só ficam aqui as pendências; o que foi resolvido (PDFs, páginas de vocabulário e outras) saiu do arquivo e está nas próprias páginas (caixa vermelha e lista de fontes). A tarefa está registrada em "Tarefas pendentes" do [CLAUDE.md](../CLAUDE.md). Atualize este arquivo a cada fonte resolvida.

## Como conferir uma fonte

- **Página comum:** abrir no navegador do app e ler o texto. Erros de certificado ou 404 podem ser passageiros ou endereço errado (já aconteceu com um hífen a menos e com um site trocado): tentar de novo e, se preciso, procurar o endereço certo por busca.
- **PDF:** o navegador do app só dispara o download (o usuário clica em salvar na janela). Esperar o arquivo terminar de baixar (o tamanho para de crescer e o fim do arquivo tem `%%EOF`; alguns servidores são lentos), e extrair o texto com `pypdf` (já instalado com `pip --user`; script de apoio no scratchpad da sessão). PDF que é só imagem: extrair a imagem com o `pypdf` e lê-la.
- Depois, ajustar a caixa vermelha da página ao que a fonte de fato confirma e recolocar a fonte na lista.
- Alguns sites bloqueiam o navegador do app (por exemplo `tefcanada.ca`). Vale procurar uma cópia do mesmo documento em outro site (o Le français des affaires costuma ter) ou pedir ao usuário que baixe.

## Fontes que não abriram

| Página | Fonte | Situação | O que conferir |
|---|---|---|---|
| gi-pronomes | `uoh.concordia.ca/pronoms/co/pronom-y-B1.html` e `.../suites-de-pronoms-B2.html` | Site da Universidade Concordia fora do ar (nem o usuário consegue abrir). Fontes retiradas da lista, e a caixa avisa que não foram abertas. | O pronome *y* e as suites de pronoms compléments (ordem dos pronomes). Tentar de novo mais tarde. |
| gb-cest-il-est | `uoh.concordia.ca/pronoms/co/m/res/Ressource_1.pdf` (nº 14 da lista antiga de PDFs) | Mesmo domínio. Já estava fora da lista de fontes. A única fonte hoje é o Le Robert. | *il/elle est* com profissão e nacionalidade sem artigo, horário e construções impessoais com *il est*, e a regra de não usar *il est* diante de substantivo com determinante. Alternativa: Lawless French, TV5Monde, Usito, OQLF. |
| (não identificada) | Sites atrás do Cloudflare (403) | Bloquearam o acesso. Não sei dizer quais páginas. | Reabrir no navegador normal. |

## PDFs do FEI (RESOLVIDO em 2026-11-12)

Lidos os quatro PDFs que estavam na pasta Downloads. Páginas atualizadas, com a fonte recolocada: eo-fluidez, eo-persuadir, eo-tcf-1, eo-tcf-2, eo-tcf-3 e f-reclamar.

- **`manuel-examinateur-tcf.pdf`** (versão Q, dezembro de 2025, 49 páginas): confirma a expressão oral do TCF Canada em 12 minutos (10 de produção e 2 de preparação), tarefa 1 (2 min, entrevista dirigida), tarefa 2 (3 min 30 com 2 min de preparação, mínimo de 5 intervenções do candidato, respostas do examinador de 20 a 30 s) e tarefa 3 (4 min 30, sem preparação, o examinador só intervém se precisar de precisões ou se o candidato bloquear, e pode interromper educadamente se suspeitar de texto decorado). A grade (anexo 4, descritores do CECRL) inclui o critério "fluidité, aisance, prononciation, accentuation, enchaînement, intonation, débit": no B2 o descritor fala de *débit régulier*, e no C2 as pausas estão *au service du discours*. Isso deu fonte à ideia de ritmo regular em eo-fluidez, que estava sem fonte.
- **`manuelcandidattoutes20dc3a9clinaisonsi.pdf`** (versão Q, setembro de 2026, 68 páginas): confirma a expressão escrita do TCF Canada (3 tarefas, 60 min; tarefa 1 de 60 a 120 palavras, tarefa 2 de 120 a 150 palavras com opiniões ou argumentos conforme um objetivo, por exemplo *revendiquer*, tarefa 3 de 120 a 180 palavras comparando dois pontos de vista), os critérios linguístico, pragmático e sociolinguístico, a dupla correção e as causas de "A1 não atingido". Para a expressão oral, repete que o examinador pode interromper.
- **`tcf-tp-qc-ca-exemple-epreuve-ee.pdf`** (e a cópia `...ee1.pdf`, 8 páginas): exemplo de prova de expressão escrita (60 min, 3 tarefas, tarefa 1 de 60 a 120 palavras sobre uma mala perdida). As páginas de expressão escrita já o usavam como fonte.
- **`tcf-tp-qc-ca-exemple-epreuve-eo.pdf`** (9 páginas): só imagens, sem texto extraível. Não foi relido agora, porque as páginas eo-tcf-1, 2 e 3 já o citavam como confirmado.

Ficou sem fonte, mesmo depois da leitura: a comparação de opções na tarefa 2, a organização das ideias como critério citado da tarefa 1 e a adequação ao contexto como critério da expressão oral.

## Páginas de Funções (RESOLVIDO em 2026-11-13, com uma exceção)

As 10 páginas (f-informacoes, f-narrar, f-planos, f-gostos, f-reclamar, f-pedidos, f-argumentar, f-opiniao, f-conselhos, f-hipotese) tiveram as fontes abertas e lidas. A frase "as fontes ainda não foram conferidas" saiu das caixas vermelhas, que agora dizem o que cada fonte confirma e o que continua sem fonte. Foram acrescentadas às listas de fontes o manual do examinador do TCF, o manual do candidato do TCF e os exemplos de provas do TEF, onde confirmam o formato das tarefas.

- **`nos-langues.canada.ca/fr/cles-de-la-redaction/sil-vous-plait` (fonte de f-pedidos), RESOLVIDO por resumo de busca:** a página devolve uma verificação de segurança do Cloudflare (403) ao navegador do app, e a verificação não foi contornada. O que a página diz foi obtido por um resumo de busca (pedido educado a quem se trata por *vous* ou a várias pessoas, ordem ou aceitação educada, escrita por extenso e sem hífens, de preferência no fim da frase, e *S.V.P.* é familiar, pouco adequada a uma carta oficial). A caixa de f-pedidos diz que a informação veio de resumo de busca, não de leitura direta. Se quiser a leitura direta, o usuário pode abrir a página no navegador dele.
- **Achados que mudaram as páginas:**
  - f-informacoes: a OQLF diz que *renseignement* e *information* são intercambiáveis em vários contextos. A afirmação de que *renseignement* é "muito utilizado" no Québec saiu do texto.
  - f-pedidos: a OQLF confirma que um pedido pode ter forma de pergunta direta (*Peux-tu fermer la porte ?*, *Que dirais-tu de…*, *Si l'on faisait une petite pause ?*).
  - f-reclamar: a OQLF recomenda ir direto ao essencial na introdução de uma carta e chama de desvio de estilo fórmulas como *Je vous écris aujourd'hui pour vous faire part de…*. A abertura do exemplo da página (*Je me permets de vous écrire au sujet de…*) é parecida. Está registrado na caixa, e o exemplo ainda não foi reescrito.
  - f-hipotese: a OQLF confirma as três estruturas com *si*, o erro de usar o condicional depois do *si* de condição e o condicional depois do *si* de pergunta indireta.
- **Sem fonte, mesmo depois da leitura (consta nas caixas):** as expressões das tabelas de f-informacoes e f-reclamar, *avoir l'intention de*, *prévoir de* e *compter* (f-planos), *être heureux de*, *être déçu de*, *avoir peur de* (f-gostos), *Je pense que* e *Je considère que* (f-opiniao), *Tu devrais*, *Tu pourrais*, *À ta place* (f-conselhos), *plus de*, *autant de*, *meilleur que* (f-argumentar), *Peut-être que*, *Sans doute*, *Il se peut que* e *à condition que* (f-hipotese), *puis* e *à la fin* (f-narrar).

## Outras pendências por página

| Página | O que falta |
|---|---|
| ga-nominalizacao | Lido o Usito: confirma a derivação de *organisation*, *fermeture*, *nettoyage* e *disponibilité* e o gênero dos substantivos. Mostra também que *décision*, *absence*, *participation* e *augmentation* vêm direto do latim, o que relativiza a tabela de formação, e isso está na caixa. Continuam sem fonte: a lista geral de sufixos (*-tion*, *-ment*, *-age*, *-ure*, *-ité*, *-ence*, *-té*) e a perda das marcas de tempo e pessoa. Uma busca por fonte dos sufixos não devolveu nada; vale procurar à mão (Larousse, CNRTL ou OQLF). |
| ga-indicativo-subjuntivo | Larousse lido (*croire* e *trouver*): confirma só os usos afirmativos com indicativo (*Je crois qu'il est intelligent*, *Je trouve que tu exagères*). Não trata de negação nem de subjuntivo. |
| v-moradia | Usito lido: confirma *déménagement*, *location* e *emplacement*. Sem fonte: o anúncio de exemplo e a dica de treino. A página usa *locateur*, e o aide-mémoire do Québec usa *propriétaire*. |
| gb-savoir-connaitre | *savoir* + nome (*Je sais son nom*) agora tem sustento na OQLF (*savoir* aceita complemento de coisa, como informação ou algo sabido de cor). |
| ga-concordancia | Sem fonte: os exemplos e a dica para a prova (material didático). |
| Páginas de vocabulário e de funções em geral | Tabelas de vocabulário, exemplos, equivalentes da França e dicas de treino estão sem fonte nas caixas vermelhas, e isso é intencional (material didático, não regra da prova). Conferir uma tabela específica só se o usuário pedir. |

## Estado

Nada foi commitado. O `npm run audio` não foi rodado (só rodar se o usuário pedir).
