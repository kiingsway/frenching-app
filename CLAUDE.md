# Frenching: instruções para o Claude

## Tarefas pendentes

- **Armazenamento dos áudios (direção definida, detalhes em aberto, nada construído):** o usuário vai colocar cerca de 5x mais áudio, com áudios longos e várias vozes para o mesmo texto, e prefere um `.exe` bem leve. Parte dos áudios vem no app, e o resto é baixado quando for preciso e fica guardado. O serviço na nuvem fica para depois. As decisões e o que falta decidir estão em [docs/armazenamento-de-audios.md](docs/armazenamento-de-audios.md). Ao retomar o assunto, comece por esse documento; não construa nada sem o usuário pedir.

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
- **A versão `fr` fica toda em francês**, porque também é treino de leitura e vira áudio.
- De 6 a 12 blocos por versão, na ordem explicação → exemplos → armadilhas → dica para a prova, com pelo menos um aviso (`warning`) do erro típico de quem fala português e uma dica (`tip`) do que a prova cobra. Tabelas sem célula vazia.

### Flashcards

- Cada cartão tem `fr` (só o que se fala, com artigo nos substantivos), `pt` e `example` com `fr` e `pt`. Notas de gramática e a forma da França vão em `note`; a armadilha dos falsos cognatos vai em `trap`.
- Os ids dependem da posição: cartões novos entram **no fim** do baralho, sem mudar a ordem dos outros.

### Questões de gramática

- `prompt` em francês com a lacuna marcada por `___`, e 4 opções em que **a primeira é a correta** (o app embaralha) e só uma pode estar certa. As erradas são erros plausíveis de um brasileiro.
- `explanation` em português. Varie o vocabulário e o contexto (trabalho, moradia, imigração, rotina).
- Os ids dependem da posição: questões novas entram **no fim** do tópico, sem mudar a ordem das outras.

### Áudio

- Depois de criar conteúdo ou mudar o francês, rode `npm run audio`, que gera só o que falta. **Não use `--force`** sem o usuário pedir; para textos específicos, use `--only=chave1,chave2`.
- Vozes (`AUDIO_VOICES` em `src/renderer/src/lib/audio-texts.ts`): Sylvie (mulher, padrão) e Antoine (homem), do Canadá; Denise e Vivienne, da França. A voz de cada texto que não usa a padrão fica em `assets/audio/voices.json`, inclusive os gerados antes de a Sylvie virar a padrão: ao mudar a voz padrão, marque os áudios existentes com a voz atual deles. Não troque a voz de textos existentes sem o usuário pedir, porque isso gera os áudios de novo.

### Revisão

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
