# Armazenamento dos áudios

Como guardar os áudios quando eles crescerem. **Tarefa pendente e ainda sem decisão**: o usuário vai colocar cerca de 5x mais áudio no app e ainda está pensando em como fazer.

> Registrado em 08/11/2026. Nada foi alterado no app por causa disto.

## Situação em 08/11/2026

| Item | Hoje | Com 5x mais áudio (estimativa) |
|---|---|---|
| Áudios | 39 MB em 1.486 arquivos, cerca de 27 KB cada | Cerca de 196 MB |
| Instalador do Windows | 161 MB | Cerca de 320 MB |

- Os mp3 ficam em `src/renderer/src/assets/audio/` e vão no repositório, no `.exe` e no site.
- No site, cada áudio só é baixado quando toca. No app do Windows, todos vêm no instalador.
- O tamanho depende da duração, não da quantidade. Os áudios da Compreensão oral (veja `plano-abas-de-pratica.md`) são mais longos e saem na velocidade normal, então podem pesar mais que a estimativa.
- O Git guarda as versões antigas: cada áudio regerado continua ocupando espaço no histórico.

## Opções

Os limites e preços abaixo vêm principalmente de guias de terceiros. **Confirmar nas páginas oficiais antes de decidir.**

| Opção | Custo | Prós | Contras |
|---|---|---|---|
| Deixar como está | Grátis | Nada muda e continua offline | `.exe` maior, atualizações mais pesadas e repositório crescendo |
| Firebase Storage | Grátis até cerca de 5 GB, mas exige plano Blaze | Já usamos o Firebase | Exige conta de cobrança, e os alertas de gasto não bloqueiam os downloads. Fica no projeto `sway-apps`, junto dos outros apps |
| Cloudflare R2 | Grátis até cerca de 10 GB, sem taxa de download | Mais barato se crescer muito | Mais um serviço para manter |
| GitHub Releases | Grátis | Já usamos, sem serviço novo | O workflow apaga Releases antigas, então essa precisaria ficar de fora. Serve bem para o app, menos para o site |

Ainda falta descobrir o limite de tamanho de deploy da Vercel, que importa se o site passar a ter cerca de 196 MB de áudio.

## Recomendação até agora

Ainda não é uma decisão.

- **Até cerca de 500 MB de áudio:** deixar como está.
- **Se o `.exe` incomodar ou o repositório passar de 1 GB:** mover para o Cloudflare R2, com um botão para baixar os áudios. O Firebase só faria sentido para manter tudo num lugar só.

## O que muda se os áudios forem para a nuvem

- **Offline:** o áudio deixa de vir no `.exe`, então o app precisa de um botão "Baixar áudios". Sem esse download, o áudio não funciona sem internet, o que contraria a regra atual do app.
- **Player:** busca primeiro no computador e depois na nuvem.
- **Segurança:** a CSP do app e do site precisa liberar o novo endereço em `media-src`.
- **Geração:** o `npm run audio` passa a enviar os arquivos para a nuvem.
- **Repositório:** os mp3 saem do Git, e isso só reduz o tamanho das novas cópias se o histórico também for limpo.
- **Workflow:** o `release.yml` deixa de levar os áudios no build.

## O que falta decidir

1. Quanto áudio entra, de verdade, e quanto tempo ele soma.
2. Se um `.exe` de cerca de 320 MB é aceitável.
3. Se vale abrir mão de ter todos os áudios já instalados no app, em troca de um `.exe` menor.
4. Qual serviço usar, caso a resposta seja ir para a nuvem.

Quando decidir, atualize este documento e tire a tarefa de "Tarefas pendentes" no `CLAUDE.md`.
