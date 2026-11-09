# Armazenamento dos áudios

Como guardar os áudios quando eles crescerem, mantendo o instalador leve.

> Direção definida em 08/11/2026: parte dos áudios vem no app, e o resto é baixado quando for preciso. Ainda faltam os detalhes em "O que falta decidir". **Nada foi construído ainda.**

## O que motivou

- O usuário vai colocar cerca de 5x mais áudio no app.
- Serão áudios **longos**, como os da Compreensão oral (veja `plano-abas-de-pratica.md`).
- Serão **várias vozes para o mesmo texto, em qualquer lugar do app**.
- A preferência é por um **`.exe` bem leve**.

## O que já foi decidido

| Assunto | Decisão |
|---|---|
| Prioridade | `.exe` bem leve |
| Áudios que vêm no app | **Conhecendo a prova**, **Gramática Base**, **Gramática Intermediário**, alguns **flashcards** e **Gramática** |
| Áudios fora do app | O resto, principalmente os longos e as vozes adicionais |
| Várias vozes | O mesmo texto pode ter várias vozes. Não é preciso baixar todas de uma vez: **a voz baixada fica disponível** dali em diante |
| Serviço na nuvem | Fica para depois. O Cloudflare pareceu interessante, mas não foi escolhido |

## Como funcionaria

1. **Instalou:** o app já tem os áudios do pacote, cada texto na sua voz principal, e eles funcionam sem internet.
2. **Pediu outro áudio:** o app baixa da nuvem só aquele áudio, na voz escolhida.
3. **Baixou uma vez:** o áudio fica guardado no computador e passa a funcionar sem internet.
4. **Sem internet e sem o áudio guardado:** o app avisa, e o resto da página continua funcionando.

## Situação em 08/11/2026

Medido nos arquivos atuais. Textos repetidos em mais de uma seção contam nas duas, então a soma das linhas pode ser diferente do total.

| Grupo | Áudios | Peso | Onde fica |
|---|---|---|---|
| Conhecendo a prova | 435 | 12,1 MB | No app |
| Gramática Base (A1–A2) | 556 | 13,3 MB | No app |
| Gramática Intermediário (B1) | Ainda sem áudio | 0 MB | No app |
| Flashcards (4 baralhos) | 162 | 2,5 MB | Parte no app |
| Compreensão oral | 243 | 8,4 MB | Baixado |
| Compreensão escrita | 99 | 2,7 MB | Baixado |
| **Total** | **1.486** | **39,1 MB** | |

Com a divisão acima, o pacote de hoje ficaria em **até cerca de 28 MB**, em vez de 39 MB. A Gramática Intermediário vai somar quando tiver áudio.

### Até onde o `.exe` pode encolher

O instalador tem cerca de 161 MB, e **os áudios são a menor parte**: o resto, cerca de 120 MB, é principalmente o próprio Electron. Tirar áudio impede o `.exe` de crescer, mas ele não fica muito abaixo disso enquanto o app usar Electron. Trocar o Electron por outra tecnologia seria um projeto à parte, e isso não foi decidido.

## O que precisa ser construído

- **Separar os áudios:** uma lista do que vem no app. O build leva só esses.
- **Várias vozes por texto:** hoje o arquivo se chama pelo texto (`audioKey`), e cada texto só tem uma voz, marcada no `voices.json`. O nome do arquivo precisa passar a incluir a voz.
- **Escolha da voz:** no menu do áudio, em qualquer lugar do app, com a indicação de qual já está baixada.
- **Nuvem:** o `npm run audio` passa a enviar os áudios que não vêm no app.
- **Guardar o download:** no app do Windows, numa pasta de dados do usuário; no site, no cache do service worker, que já guarda o áudio tocado.
- **Player:** procura no app, depois no que já foi baixado, e por último na nuvem.
- **Segurança:** a CSP do app e do site precisa liberar o endereço da nuvem em `media-src`.
- **Regra de offline:** o app deixa de ter todo o áudio sem internet. O `CLAUDE.md` e o README precisam dizer isso quando for construído.
- **Repositório:** os áudios que forem para a nuvem saem do Git. O histórico só diminui se também for limpo.
- **Workflow:** o `release.yml` continua levando os áudios do pacote, e publicar áudio novo na nuvem vira uma etapa separada.

## Serviço na nuvem (para depois)

Os limites e preços abaixo vêm principalmente de guias de terceiros. **Confirmar nas páginas oficiais antes de decidir.**

| Opção | Custo | Prós | Contras |
|---|---|---|---|
| Cloudflare R2 | Grátis até cerca de 10 GB, sem taxa de download | Mais barato se crescer muito. Pareceu interessante ao usuário | Mais um serviço para manter |
| Firebase Storage | Grátis até cerca de 5 GB, mas exige plano Blaze | Já usamos o Firebase | Exige conta de cobrança, e os alertas de gasto não bloqueiam os downloads. Fica no projeto `sway-apps`, junto dos outros apps |
| GitHub Releases | Grátis | Já usamos, sem serviço novo | O workflow apaga Releases antigas, então essa precisaria ficar de fora. Serve para o app, menos para o site |

Com várias vozes, o volume cresce rápido: cada voz adicional soma mais ou menos o peso daquele texto de novo.

## O que falta decidir

1. **Serviço:** qual usar. O Cloudflare é o favorito até agora.
2. **Flashcards:** quais baralhos vêm no app. Hoje são Conectores, Essenciais, Falsos cognatos e Opinião.
3. **"Gramática":** a aba Gramática não tem áudio hoje, só as páginas de estudo. Confirmar se o item se refere às páginas de Base e Intermediário ou a áudios novos nas questões.
4. **Gramática Avançado:** pelo que foi definido, fica fora do app. Confirmar.
5. **Vozes:** quais textos têm quais vozes, e qual é a voz principal de cada um no pacote. Hoje quase todos os áudios do pacote estão na Vivienne, e a padrão para textos novos é a Sylvie.
6. **Limite do `.exe`:** quanto é "bem leve", sabendo que o Electron sozinho já pesa cerca de 120 MB.
7. **Baixar em bloco:** se vale ter um botão para baixar uma seção inteira de uma vez, por exemplo antes de ficar sem internet ou de fazer um simulado.
