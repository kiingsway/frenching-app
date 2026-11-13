import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-reclamar',

  pt: {
    title: 'Reclamar, expressar insatisfação e pedir uma solução',
    summary:
      'Aprenda a comunicar problemas, expressar insatisfação de maneira educada e solicitar soluções em francês, tanto em conversas quanto em mensagens formais. ' +
      'Domine o vocabulário de reclamações, pedidos de reembolso, substituição de produtos e resolução de problemas, adaptando o tom ao interlocutor.',
    blocks: [
      { type: 'heading', text: 'Como estruturar uma reclamação' },
      {
        type: 'paragraph',
        text:
          'Uma reclamação eficaz deve apresentar o problema com clareza, explicar o que aconteceu e indicar qual solução você espera. ' +
          'Comece identificando o motivo do contato, apresente os fatos com informações concretas, explique as consequências e termine com um pedido específico. ' +
          'Em situações formais, mantenha um tom educado, mas firme, sem exagerar nas críticas ou utilizar expressões agressivas.'
      },
      {
        type: 'table',
        headers: ['Objetivo', 'Expressões em francês', 'Significado'],
        rows: [
            [
              'Iniciar uma reclamação',
              '[[Je vous écris au sujet de…|Escrevo a respeito de…]] / [[Je souhaite vous signaler un problème concernant…|Gostaria de informar um problema referente a…]]',
              'Apresentar o motivo do contato.'
            ],
            [
              'Descrever o problema',
              '[[J’ai constaté que…|Constatei que…]] / [[Le produit ne fonctionne pas correctement.|O produto não funciona corretamente.]]',
              'Relatar os fatos objetivamente.'
            ],
            [
              'Expressar insatisfação',
              
                '[[Je suis déçu par la qualité du service.|Estou decepcionado com a qualidade do serviço.]] ' +
                '/ [[Je ne suis pas satisfait de cette situation.|Não estou satisfeito com essa situação.]]',
              'Demonstrar descontentamento sem ser agressivo.'
            ],
            [
              'Solicitar uma solução',
              
                '[[Je souhaiterais obtenir un remboursement.|Gostaria de receber um reembolso.]] ' +
                '/ [[Je vous demande de bien vouloir remplacer le produit.|Peço que substituam o produto, por gentileza.]]',
              'Apresentar o resultado esperado.'
            ],
            [
              'Pedir esclarecimentos',
              
                '[[Pourriez-vous m’indiquer la marche à suivre ?|Poderia me informar como devo proceder?]] ' +
                '/ [[Dans quel délai puis-je espérer une réponse ?|Em quanto tempo posso esperar uma resposta?]]',
              'Solicitar informações sobre os próximos passos.'
            ],
            [
              'Encerrar formalmente',
              
                '[[Dans l’attente de votre réponse…|Aguardando sua resposta…]] ' +
                '/ [[Je vous remercie de l’attention portée à ma demande.|Agradeço a atenção dedicada à minha solicitação.]]',
              'Finalizar o contato com cortesia.'
            ]
        ]
      },
      { type: 'heading', text: 'Vocabulário de reclamações e soluções' },
      {
        type: 'paragraph',
        text:
          'Algumas palavras são especialmente úteis em situações de consumo e atendimento ao cliente no Canadá: [[une réclamation|uma reclamação]], [[un remboursement|um reembolso]], [[un échange|uma troca]], [[un remplacement|uma substituição]], [[une facture|uma nota fiscal / fatura]], [[un reçu|um recibo]], [[une garantie|uma garantia]], [[un défaut|um defeito]], [[un retard|um atraso]] ' +
          'e [[le service à la clientèle|o atendimento ao cliente]]. ' +
          'Para falar de uma solução, utilize também [[régler le problème|resolver o problema]], [[corriger la situation|corrigir a situação]] ' +
          'e [[trouver un arrangement|encontrar um acordo]]. No francês do Québec, [[courriel|e-mail]] é a palavra habitual para correspondência eletrônica.'
      },
      {
        type: 'paragraph',
        text:
          'Diferencie algumas construções importantes: [[se plaindre de|reclamar de / queixar-se de]] ' +
          'apresenta uma insatisfação; [[réclamer quelque chose|reivindicar / solicitar algo]] ' +
          'expressa um pedido ou uma exigência; [[demander un remboursement|solicitar um reembolso]] ' +
          'apresenta diretamente o que você deseja; e [[porter plainte contre quelqu’un|apresentar uma queixa formal contra alguém]] ' +
          'indica uma reclamação formal dirigida à autoridade competente. Escolha a expressão de acordo com o objetivo e o contexto.'
      },
      { type: 'heading', text: 'Exemplo de reclamação por e-mail' },
      {
        type: 'paragraph',
        text:
          '[[Madame, Monsieur,|Prezados(as),]] ' +
          '[[Je me permets de vous écrire au sujet d’un problème concernant une chaise de bureau que j’ai commandée sur votre site Web.|Permito-me escrever a respeito de um problema referente a uma cadeira de escritório que encomendei em seu site.]] ' +
          '[[J’ai passé ma commande le 3 octobre et j’ai reçu le produit le 10 octobre.|Fiz meu pedido em 3 de outubro e recebi o produto em 10 de outubro.]] ' +
          '[[À la livraison, j’ai constaté que le dossier était fissuré et qu’une pièce de fixation manquait.|No momento da entrega, constatei que o encosto estava rachado e que faltava uma peça de fixação.]] ' +
          '[[Vous trouverez ci-joint des photos du produit ainsi qu’une copie de la facture.|Encontrarão em anexo fotos do produto e uma cópia da fatura.]] ' +
          '[[Je souhaiterais obtenir le remplacement de la chaise sans frais ou, si cela n’est pas possible, un remboursement.|Gostaria de receber a substituição da cadeira sem custos ou, se isso não for possível, um reembolso.]] ' +
          '[[Pourriez-vous m’indiquer la marche à suivre et me répondre d’ici vendredi ?|Poderiam me informar como devo proceder e responder até sexta-feira?]] ' +
          '[[Je vous remercie de l’attention portée à ma demande.|Agradeço a atenção dedicada à minha solicitação.]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção à construção dos verbos',
        text:
          'Um erro comum de brasileiros é escrever [[Je demande pour un remboursement.|Peço por um reembolso.]], traduzindo literalmente a construção do português. ' +
          'Em francês, diga [[Je demande un remboursement.|Solicito um reembolso.]], sem a preposição [[pour|por]]. Outro cuidado: [[se plaindre de|queixar-se de]] ' +
          'exige a preposição [[de|de]]: [[Je voudrais me plaindre de ce service.|Gostaria de reclamar desse serviço.]] ' +
          'Não confunda também [[réclamer|reivindicar / solicitar]] ' +
          'com [[porter plainte|apresentar uma queixa formal]]: os dois verbos não são intercambiáveis em todos os contextos.'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Seja específico e apresente uma solução esperada',
        text:
          'No TCF Canada, a produção escrita inclui mensagens, correspondências e relatos acompanhados de opiniões ou argumentos, conforme a situação proposta. ' +
          'No TEF Canada, a produção escrita inclui a continuação de um artigo e uma carta ao jornal para expressar e justificar um ponto de vista. ' +
          'Embora uma reclamação comercial não seja uma tarefa fixa garantida nesses exames, essa competência ajuda a desenvolver a comunicação formal e a capacidade de reivindicar, explicar e justificar. ' +
          'Ao praticar, identifique o destinatário, apresente os fatos, explique o impacto do problema e formule um pedido concreto. ' +
          'Adapte o grau de formalidade ao contexto e evite acusações sem fundamento.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A OQLF confirma, para o e-mail, a fórmula de chamada [[Madame, Monsieur,|Prezados(as),]] ou [[Mesdames, Messieurs,|Prezados senhores e senhoras,]] quando não se conhece o destinatário, [[Bonjour,|Olá,]] seguido de vírgula, a estrutura em introdução, desenvolvimento e conclusão, o objeto curto e representativo, uma fórmula de despedida mais curta que a da carta e o bloco de assinatura. Para a introdução de uma carta, confirma fórmulas como [[En réponse à votre lettre du...|Em resposta à sua carta de...]] e [[Vous trouverez ci-joint quelques documents qui répondront à vos questions sur...|Encontrará em anexo alguns documentos que responderão às suas perguntas sobre...]], e recomenda ir direto ao essencial: fórmulas como [[Je vous écris aujourd’hui pour vous faire part de...|Escrevo hoje para lhe comunicar...]] são desvios de estilo inúteis, o que vale também para a abertura [[Je me permets de vous écrire au sujet de...|Permito-me escrever-lhe a respeito de...]] do exemplo da página. ' +
          'O programa-cadre do Québec (estágio 2, nível 7) confirma a tarefa de [[rédiger une lettre de réclamation|redigir uma carta de reclamação]] (150 a 200 palavras), com a sequência de apresentar a situação, expor os elementos pertinentes e propor uma solução, em tom adequado, e, na produção oral, [[faire une réclamation|fazer uma reclamação]] sobre o mau funcionamento de um eletrodoméstico ou de um veículo. O manual do candidato do TCF confirma, na expressão escrita (3 tarefas, 60 minutos), a tarefa 2, com relato de experiência acompanhado de comentários, opiniões ou argumentos conforme um objetivo, por exemplo [[revendiquer|reivindicar]] (120 a 150 palavras), a tarefa 1 (60 a 120 palavras) e a tarefa 3 (120 a 180 palavras). O PDF de exemplos de sujets do TEF confirma a seção A (continuar um artigo, 80 palavras, 25 minutos) e a seção B (carta ao jornal, 200 palavras, ao menos 3 argumentos, 35 minutos). ' +
          'Não têm fonte: as expressões da tabela para reclamar, pedir solução e agradecer, a organização exata da carta de exemplo e a dica de treino. ' +
          'Entretanto, isso não significa que uma carta de reclamação comercial seja uma tarefa obrigatória ou garantida no TEF Canada ou no TCF Canada. ' +
          'Os exemplos, as expressões sugeridas e a organização da reclamação são recursos pedagógicos de preparação, não regras oficiais dos exames.'
      }
    ]
  },

  fr: {
    title: 'Formuler une réclamation et demander une solution',
    summary:
      'Apprenez à signaler des problèmes, à exprimer votre insatisfaction avec politesse et à demander des solutions en français, aussi bien dans une conversation que dans un message formel. ' +
      'Maîtrisez le vocabulaire des réclamations, des remboursements, des remplacements de produits et du règlement des problèmes, en adaptant votre ton à votre interlocuteur.',
    blocks: [
      { type: 'heading', text: 'Comment structurer une réclamation' },
      {
        type: 'paragraph',
        text:
          'Une réclamation efficace doit présenter clairement le problème, expliquer ce qui s’est passé et préciser la solution que vous souhaitez obtenir. ' +
          'Commencez par indiquer la raison de votre contact, présentez les faits avec des renseignements concrets, expliquez les conséquences et terminez par une demande précise. ' +
          'Dans les situations formelles, gardez un ton poli, mais ferme, sans exagérer les critiques ni utiliser des expressions agressives.'
      },
      {
        type: 'table',
        headers: ['Objectif', 'Expressions utiles', 'Fonction'],
        rows: [
            [
              'Commencer une réclamation',
              'Je vous écris au sujet de… / Je souhaite vous signaler un problème concernant…',
              'Présenter la raison du contact.'
            ],
            [
              'Décrire le problème',
              'J’ai constaté que… / Le produit ne fonctionne pas correctement.',
              'Rapporter les faits objectivement.'
            ],
            [
              'Exprimer son insatisfaction',
              'Je suis déçu par la qualité du service. / Je ne suis pas satisfait de cette situation.',
              'Manifester son mécontentement sans être agressif.'
            ],
            [
              'Demander une solution',
              'Je souhaiterais obtenir un remboursement. / Je vous demande de bien vouloir remplacer le produit.',
              'Présenter le résultat souhaité.'
            ],
            [
              'Demander des précisions',
              'Pourriez-vous m’indiquer la marche à suivre ? / Dans quel délai puis-je espérer une réponse ?',
              'Demander des renseignements sur les prochaines étapes.'
            ],
            [
              'Terminer poliment',
              'Dans l’attente de votre réponse… / Je vous remercie de l’attention portée à ma demande.',
              'Conclure le contact avec courtoisie.'
            ]
        ]
      },
      { type: 'heading', text: 'Vocabulaire des réclamations et des solutions' },
      {
        type: 'paragraph',
        text:
          'Certains mots sont particulièrement utiles dans les situations de consommation et de service à la clientèle au Canada : une réclamation, un remboursement, un échange, un remplacement, une facture, un reçu, une garantie, un défaut, un retard et le service à la clientèle. ' +
          'Pour parler d’une solution, utilisez également régler le problème, corriger la situation et trouver un arrangement. ' +
          'En français québécois, courriel est le mot courant pour désigner un courrier électronique.'
      },
      {
        type: 'paragraph',
        text:
          'Distinguez quelques constructions importantes : se plaindre de présente une insatisfaction ; réclamer quelque chose exprime une demande ou une revendication ; demander un remboursement indique directement ce que vous souhaitez obtenir ; et porter plainte contre quelqu’un désigne une démarche de plainte formelle auprès de l’autorité compétente. ' +
          'Choisissez l’expression selon votre objectif et le contexte.'
      },
      { type: 'heading', text: 'Exemple de réclamation par courriel' },
      {
        type: 'paragraph',
        text:
          'Madame, Monsieur, Je me permets de vous écrire au sujet d’un problème concernant une chaise de bureau que j’ai commandée sur votre site Web. ' +
          'J’ai passé ma commande le 3 octobre et j’ai reçu le produit le 10 octobre. ' +
          'À la livraison, j’ai constaté que le dossier était fissuré et qu’une pièce de fixation manquait. ' +
          'Vous trouverez ci-joint des photos du produit ainsi qu’une copie de la facture. ' +
          'Je souhaiterais obtenir le remplacement de la chaise sans frais ou, si cela n’est pas possible, un remboursement. ' +
          'Pourriez-vous m’indiquer la marche à suivre et me répondre d’ici vendredi ? Je vous remercie de l’attention portée à ma demande.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à la construction des verbes',
        text:
          'Une erreur fréquente chez les lusophones consiste à écrire Je demande pour un remboursement en traduisant littéralement la construction portugaise. ' +
          'En français, dites Je demande un remboursement, sans la préposition pour. ' +
          'Autre précaution : se plaindre de exige la préposition de : Je voudrais me plaindre de ce service. ' +
          'Ne confondez pas non plus réclamer et porter plainte : ces deux expressions ne sont pas interchangeables dans tous les contextes.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Soyez précis et proposez une solution concrète',
        text:
          'Au TCF Canada, l’expression écrite comprend des messages, des courriers et des comptes rendus accompagnés de commentaires ou d’arguments, selon la situation proposée. ' +
          'Au TEF Canada, l’expression écrite comprend la continuation d’un article et une lettre au journal visant à exprimer et à justifier un point de vue. ' +
          'Bien qu’une réclamation commerciale ne soit pas une tâche fixe garantie dans ces examens, cette compétence permet de développer la communication formelle et la capacité à revendiquer, à expliquer et à justifier. ' +
          'Pendant vos exercices, identifiez le destinataire, présentez les faits, expliquez les conséquences du problème et formulez une demande concrète. ' +
          'Adaptez le niveau de formalité au contexte et évitez les accusations sans fondement.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme, pour le courriel, la formule d’appel Madame, Monsieur, ou Mesdames, Messieurs, quand on ne connaît pas le ou la destinataire, Bonjour, suivi d’une virgule, la structure en introduction, développement et conclusion, l’objet court et représentatif, une formule de salutation plus courte que celle de la lettre et le bloc-signature. Pour l’introduction d’une lettre, elle confirme des formules comme En réponse à votre lettre du... et Vous trouverez ci-joint quelques documents qui répondront à vos questions sur..., et recommande d’aller directement à l’essentiel : des formules comme Je vous écris aujourd’hui pour vous faire part de... sont des détours stylistiques inutiles, ce qui vaut aussi pour l’ouverture Je me permets de vous écrire au sujet de... de l’exemple de la page. ' +
          'Le programme-cadre du Québec (stade 2, niveau 7) confirme la tâche rédiger une lettre de réclamation (150 à 200 mots), avec la séquence consistant à présenter la situation, exposer les éléments pertinents et proposer une solution, sur un ton approprié, et, en production orale, faire une réclamation au sujet du fonctionnement d’un électroménager ou d’un véhicule. Le manuel du candidat au TCF confirme, à l’expression écrite (3 tâches, 60 minutes), la tâche 2, avec un compte rendu d’expérience accompagné de commentaires, d’opinions ou d’arguments en fonction d’un objectif, par exemple revendiquer (120 à 150 mots), la tâche 1 (60 à 120 mots) et la tâche 3 (120 à 180 mots). Le PDF d’exemples de sujets du TEF confirme la section A (écrire la suite d’un article, 80 mots, 25 minutes) et la section B (lettre au journal, 200 mots, au moins 3 arguments, 35 minutes). ' +
          'Ne sont pas sourcés : les expressions du tableau pour réclamer, demander une solution et remercier, l’organisation exacte de la lettre d’exemple et le conseil d’entraînement. ' +
          'Cependant, cela ne signifie pas qu’une lettre de réclamation commerciale soit une tâche obligatoire ou garantie au TEF Canada ou au TCF Canada. ' +
          'Les exemples, les expressions proposées et l’organisation de la réclamation sont des ressources pédagogiques de préparation et non des règles officielles des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Formules d’appel dans les courriels : règles d’usage — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24944/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/courriel/formules-dappel-dans-le-courriel'
    },
    {
      title: 'Rédaction des courriels : généralités — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22794/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/courriel/generalites-sur-la-redaction-du-courriel'
    },
    {
      title: 'L’introduction de la lettre — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22344/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/lettre/introduction-de-la-lettre'
    },
    {
      title: 'Programme-cadre de français pour les personnes immigrantes adultes au Québec — Niveau 7, production écrite',
      url: 'https://cdn-contenu.quebec.ca/cdn-contenu/francisation/MIFI/referentiel/programme-cadre-francais-personnes-immigrantes-adultes-quebec.pdf'
    },
    {
      title: 'Manuel du candidat au TCF — France Éducation international, version avril 2026',
      url: 'https://france-education-international.fr/document/manuelcandidattoutes20dc3a9clinaisonsi'
    },
    {
      title: 'TEF Canada — Exemples de sujets et présentation de l’expression écrite — Le français des affaires',
      url: 'https://tefcanada.ca/wp-content/uploads/2025/06/tef-exemples-epreuve-ee.pdf'
    }
  ]
}

export default content
