import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-relativos',

  pt: {
    title: 'Pronomes relativos simples: qui, que, où e dont',
    summary:
      'Aprenda a utilizar os quatro principais elementos relativos do francês para conectar frases e evitar repetições. ' +
      'Entenda a diferença entre sujeito, complemento direto, lugar, tempo e construções com de, evitando confusões comuns para brasileiros.',
    blocks: [
      { type: 'heading', text: '1. Entendendo os pronomes relativos' },
      {
        type: 'paragraph',
        text:
          'Os pronomes relativos conectam duas partes de uma frase e retomam um elemento mencionado anteriormente, chamado [[antécédent|antecedente]]. ' +
          'Em vez de repetir uma pessoa, um objeto ou um lugar, você utiliza um elemento relativo para introduzir uma [[proposition subordonnée relative|oração subordinada relativa]]. ' +
          'A escolha depende da função que esse elemento desempenha dentro da segunda oração.'
      },
      {
        type: 'table',
        headers: ['Pronome', 'Função', 'Exemplo'],
        rows: [
          [
            '[[qui|que (sujeito)]]',
            'Sujeito do verbo na oração relativa.',
            '[[La conseillère qui travaille ici parle portugais.|A consultora que trabalha aqui fala português.]]'
          ],
          [
            '[[que|que (complemento direto)]]',
            'Complemento direto do verbo na oração relativa.',
            '[[Le document que j’ai envoyé est complet.|O documento que enviei está completo.]]'
          ],
          [
            '[[où|onde / em que]]',
            'Retoma um lugar ou um momento.',
            '[[Le quartier où j’habite est tranquille.|O bairro onde moro é tranquilo.]]'
          ],
          [
            '[[dont|de que / cujo]]',
            'Substitui um complemento introduzido pela preposição de.',
            '[[Le document dont j’ai besoin est disponible en ligne.|O documento de que preciso está disponível on-line.]]'
          ]
        ]
      },
      { type: 'heading', text: '2. Como escolher o pronome correto' },
      {
        type: 'paragraph',
        text:
          '[[Qui|que (sujeito)]] ou [[que|que (complemento direto)]]: observe a função do elemento retomado. Utilize [[qui|que (sujeito)]] quando ele for o sujeito do verbo na oração relativa. Utilize [[que|que (complemento direto)]] ' +
          'quando ele for o complemento direto. Uma maneira prática de reconhecer a diferença é observar o que vem depois: [[qui|que (sujeito)]] ' +
          'geralmente é seguido diretamente pelo verbo, enquanto [[que|que (complemento direto)]] normalmente é seguido por um sujeito e depois pelo verbo. ' +
          'Antes de uma vogal ou de um h mudo, [[que|pronome que]] transforma-se em [[qu’|forma contraída de que]].'
      },
      {
        type: 'paragraph',
        text:
          '[[Dont|de que / cujo]]: utilize [[dont|de que / cujo]] quando o elemento retomado estiver relacionado a uma construção que exige a preposição [[de|de (preposição)]]. ' +
          'Isso acontece com expressões como [[parler de|falar de]], [[avoir besoin de|precisar de]] e [[être fier de|ter orgulho de]]. O pronome [[dont|de que / cujo]] ' +
          'já incorpora essa preposição, portanto não acrescente outro [[de|de (preposição)]] depois dele. ' +
          'Ele também pode indicar posse, equivalendo a cujo, cuja, cujos ou cujas: [[La collègue dont le fils étudie à Toronto participe au projet.|A colega cujo filho estuda em Toronto participa do projeto.]]'
      },
      {
        type: 'paragraph',
        text:
          '[[Où|onde / em que]]: utilize [[où|onde / em que]] para retomar um lugar ou um período. Ele pode equivaler a onde, em que ou quando, dependendo do antecedente. ' +
          'Atenção ao acento grave: [[où|onde / em que]] indica lugar ou tempo, enquanto [[ou|ou (conjunção alternativa)]] significa ou.'
      },
      { type: 'heading', text: '3. Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[La bénévole qui accueille les nouveaux arrivants parle portugais.|A voluntária que recebe os recém-chegados fala português.]]',
          '[[Le formulaire que la conseillère m’a remis est facile à remplir.|O formulário que a consultora me entregou é fácil de preencher.]]',
          '[[Le centre communautaire où nous suivons des cours est près du métro.|O centro comunitário onde fazemos cursos fica perto do metrô.]]',
          '[[C’est le document dont j’ai besoin pour ma demande.|Este é o documento de que preciso para minha solicitação.]]',
          '[[Le programme dont je vous ai parlé offre des ateliers gratuits.|O programa de que falei oferece oficinas gratuitas.]]',
          '[[Je me souviens de l’année où j’ai commencé à apprendre le français.|Lembro-me do ano em que comecei a aprender francês.]]',
          '[[Voilà un ouvrage dont la qualité typographique est remarquable.|Eis uma obra cuja qualidade tipográfica é notável.]]',
          '[[J’ai parlé à ce psychologue dont tu connais la sœur.|Falei com este psicólogo, cuja irmã você conhece.]] Depois de [[dont|de que / cujo]], use o artigo definido, e não o possessivo: [[dont tu connais sa sœur|cuja irmã você conhece (errado)]].'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não escolha o pronome apenas pela tradução de que',
        text:
          'Em português, utilizamos frequentemente que tanto para o sujeito quanto para o complemento direto. Em francês, essas funções são diferentes. ' +
          'Por exemplo, [[La personne que je connais|A pessoa que conheço]] está correto, pois a pessoa é o complemento direto de conhecer. ' +
          'Já [[La personne qui travaille ici|A pessoa que trabalha aqui]] utiliza [[qui|que (sujeito)]], pois a pessoa pratica a ação de trabalhar. ' +
          'Outro erro frequente é escrever [[Le document que j’ai besoin|O documento que preciso (errado)]], mas a construção correta é [[Le document dont j’ai besoin|O documento de que preciso]], porque a expressão exige [[avoir besoin de|precisar de]].'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Nas atividades de compreensão e produção, procure identificar a função do elemento retomado antes de escolher o pronome. ' +
          'Pergunte-se: ele é o sujeito, o complemento direto, indica lugar ou tempo, ou faz parte de uma construção com [[de|de (preposição)]]? ' +
          'Pratique principalmente a diferença entre [[qui|que (sujeito)]] e [[que|que (complemento direto)]], além de expressões que exigem [[dont|de que / cujo]]. ' +
          'Na produção escrita, esses pronomes ajudam a conectar ideias, evitar repetições e construir frases mais elaboradas, características importantes para desenvolver uma comunicação de nível B2.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam as funções de [[qui|que (sujeito)]] e [[que|que (complemento direto)]] como pronomes relativos, que [[dont|de que / cujo]] equivale a [[de|de (preposição)]] mais pronome e não aceita possessivo depois dele, ' +
          'e que [[où|onde / em que]] retoma um lugar ou um tempo e se distingue de [[ou|ou (conjunção alternativa)]]. ' +
          'Não têm fonte: o truque de olhar a palavra seguinte ([[qui|que (sujeito)]] + verbo, [[que|que (complemento direto)]] + sujeito), os exemplos, as listas de expressões com [[de|de (preposição)]] e os conselhos para a prova, incluindo o nível B2. ' +
          'Esses pontos são material didático. As páginas consultadas não indicam frequência, ordem ou peso desses pronomes no TEF Canada ou no TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Les pronoms relatifs simples : qui, que, où et dont',
    summary:
      'Apprenez à utiliser les quatre principaux éléments relatifs du français pour relier des phrases et éviter les répétitions. ' +
      'Comprenez la différence entre le sujet, le complément direct, le lieu, le temps et les constructions avec de, tout en évitant les erreurs fréquentes chez les apprenants lusophones.',
    blocks: [
      { type: 'heading', text: '1. Comprendre les pronoms relatifs' },
      {
        type: 'paragraph',
        text:
          'Les pronoms relatifs permettent de relier deux parties d’une phrase et de reprendre un élément mentionné précédemment, appelé antécédent. ' +
          'Au lieu de répéter une personne, un objet ou un lieu, on utilise un élément relatif pour introduire une proposition subordonnée relative. ' +
          'Le choix dépend de la fonction que cet élément exerce dans la deuxième proposition.'
      },
      {
        type: 'table',
        headers: ['Pronom', 'Fonction', 'Exemple'],
        rows: [
          ['qui', 'Sujet du verbe dans la proposition relative.', 'La conseillère qui travaille ici parle portugais.'],
          ['que', 'Complément direct du verbe dans la proposition relative.', 'Le document que j’ai envoyé est complet.'],
          ['où', 'Renvoie à un lieu ou à un moment.', 'Le quartier où j’habite est tranquille.'],
          ['dont', 'Remplace un complément introduit par la préposition de.', 'Le document dont j’ai besoin est disponible en ligne.']
        ]
      },
      { type: 'heading', text: '2. Comment choisir le bon pronom' },
      {
        type: 'paragraph',
        text:
          'Qui ou que : observez la fonction de l’élément repris. Utilisez qui lorsqu’il est le sujet du verbe dans la proposition relative. ' +
          'Utilisez que lorsqu’il est le complément direct. ' +
          'Une manière pratique de reconnaître la différence consiste à observer les mots qui suivent : qui est généralement suivi directement du verbe, tandis que que est normalement suivi d’un sujet, puis du verbe. ' +
          'Devant une voyelle ou un h muet, que devient qu’.'
      },
      {
        type: 'paragraph',
        text:
          'Dont : utilisez dont lorsque l’élément repris est lié à une construction qui exige la préposition de. ' +
          'C’est notamment le cas d’expressions comme parler de, avoir besoin de et être fier de. ' +
          'Le pronom dont contient déjà cette préposition : il ne faut donc pas ajouter un autre de après celui-ci. ' +
          'Il peut aussi exprimer la possession et correspondre à dont le, dont la ou dont les : La collègue dont le fils étudie à Toronto participe au projet.'
      },
      {
        type: 'paragraph',
        text:
          'Où : utilisez où pour reprendre un lieu ou une période. Selon son antécédent, il peut exprimer un lieu, un moment ou une période. ' +
          'Attention à l’accent grave : où indique un lieu ou un moment, tandis que ou est une conjonction qui exprime une alternative.'
      },
      { type: 'heading', text: '3. Exemples en contexte' },
      {
        type: 'list',
        items: [
          'La bénévole qui accueille les nouveaux arrivants parle portugais.',
          'Le formulaire que la conseillère m’a remis est facile à remplir.',
          'Le centre communautaire où nous suivons des cours est près du métro.',
          'C’est le document dont j’ai besoin pour ma demande.',
          'Le programme dont je vous ai parlé offre des ateliers gratuits.',
          'Je me souviens de l’année où j’ai commencé à apprendre le français.',
          'Voilà un ouvrage dont la qualité typographique est remarquable.',
          'J’ai parlé à ce psychologue dont tu connais la sœur. Après dont, on emploie l’article défini et non le possessif : on ne dit pas « dont tu connais sa sœur ».'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne choisissez pas le pronom uniquement selon la traduction de que',
        text:
          'En portugais, on utilise fréquemment que aussi bien pour le sujet que pour le complément direct. En français, ces fonctions sont différentes. ' +
          'Par exemple, « La personne que je connais » est correct, car la personne est le complément direct du verbe connaître. ' +
          'En revanche, « La personne qui travaille ici » utilise qui, car la personne effectue l’action de travailler. ' +
          'Une autre erreur fréquente consiste à écrire « Le document que j’ai besoin », alors que la construction correcte est « Le document dont j’ai besoin », parce que l’expression exige avoir besoin de.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les activités de compréhension et de production, essayez d’identifier la fonction de l’élément repris avant de choisir le pronom. ' +
          'Posez-vous les questions suivantes : est-il le sujet, le complément direct, indique-t-il un lieu ou un moment, ou fait-il partie d’une construction avec de ? ' +
          'Entraînez-vous particulièrement à distinguer qui et que, ainsi qu’à reconnaître les expressions qui exigent dont. ' +
          'Dans vos productions écrites, ces pronoms permettent de relier les idées, d’éviter les répétitions et de construire des phrases plus élaborées, des compétences importantes pour développer une communication de niveau B2.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment les fonctions de qui et de que comme pronoms relatifs, que dont équivaut à de plus un pronom et ne s’emploie pas avec un possessif, ' +
          'et que où reprend un lieu ou un temps et se distingue de ou. ' +
          'Ne sont pas sourcés : l’astuce consistant à regarder le mot suivant (qui + verbe, que + sujet), les exemples, les listes d’expressions avec de et les conseils pour l’examen, y compris le niveau B2. ' +
          'Ces points sont du matériel pédagogique. Les pages consultées n’indiquent ni fréquence, ni ordre, ni poids de ces pronoms au TEF Canada ou au TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le subordonnant : mode d’emploi — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24302/la-grammaire/la-grammaire-actuelle/les-fonctions-et-roles-syntaxiques/le-subordonnant'
    },
    {
      title: 'Dont : pronom relatif — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22904/la-grammaire/les-pronoms/pronoms-relatifs/le-pronom-relatif-dont'
    },
    {
      title: 'Où : pronom relatif ou adverbe, selon le cas — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21461/la-grammaire/les-pronoms/pronoms-relatifs/ou-employe-comme-pronom-relatif-ou-adverbe'
    }
  ]
}

export default content
