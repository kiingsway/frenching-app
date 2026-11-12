import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-estrutura',

  pt: {
    title: 'Estrutura de texto: como organizar introdução, desenvolvimento e conclusão',
    summary:
      'Aprenda a estruturar textos em francês de maneira clara, lógica e coerente, organizando suas ideias em introdução, desenvolvimento e conclusão. ' +
      'Você vai praticar a apresentação de um tema, a construção de parágrafos bem desenvolvidos e o encerramento de argumentos, competências essenciais para a expressão escrita no TEF Canada e no TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. Por que a estrutura do texto é importante?' },
      {
        type: 'paragraph',
        text:
          'Um texto bem escrito não depende apenas de vocabulário e gramática. As ideias precisam estar organizadas para que o leitor compreenda a mensagem sem dificuldade. ' +
          'A estrutura tradicional de um texto mais desenvolvido possui três partes: [[l’introduction|a introdução]], [[le développement|o desenvolvimento]] e [[la conclusion|a conclusão]]. ' +
          'Cada parte tem uma função específica e contribui para a progressão das ideias. Essa organização é especialmente útil em textos argumentativos, artigos e redações mais longas. ' +
          'Entretanto, a estrutura deve ser adaptada ao enunciado: uma mensagem curta, por exemplo, não precisa necessariamente apresentar três partes formais.'
      },
      { type: 'heading', text: '2. As três partes de um texto' },
      {
        type: 'table',
        headers: ['Parte', 'Função', 'O que incluir'],
        rows: [
          [
            '[[Introduction|Introdução]]',
            'Apresentar o assunto e orientar o leitor.',
            'Contextualização, apresentação do problema, tema central e, quando necessário, sua posição ou tese.'
          ],
          [
            '[[Développement|Desenvolvimento]]',
            'Explicar e desenvolver as ideias principais.',
            'Argumentos, justificativas, explicações, exemplos, dados e possíveis contrapontos.'
          ],
          [
            '[[Conclusion|Conclusão]]',
            'Encerrar o raciocínio e reforçar a mensagem principal.',
            'Síntese das ideias, retomada da posição e, quando pertinente, uma recomendação ou reflexão final.'
          ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Na introdução, procure apresentar o assunto sem entrar imediatamente em todos os detalhes. ' +
          'Nos textos argumentativos, você pode utilizar elementos como [[le sujet amené|a contextualização do assunto]], [[le sujet posé|a apresentação da questão central]], [[la thèse|a tese ou posição defendida]] e, às vezes, [[le sujet divisé|a apresentação dos argumentos que serão desenvolvidos]]. ' +
          'No desenvolvimento, cada parágrafo deve trabalhar uma ideia principal. Na conclusão, retome o raciocínio sem simplesmente copiar a introdução.'
      },
      { type: 'heading', text: '3. Exemplo prático: a importância dos espaços verdes' },
      { type: 'paragraph', text: 'Tema: defender a criação e a preservação de parques e áreas verdes nos bairros.' },
      { type: 'paragraph', text: 'Exemplo de introdução:' },
      {
        type: 'paragraph',
        text:
          '[[Dans plusieurs quartiers de Montréal, les espaces verts occupent une place importante dans la qualité de vie. Pourtant, certains secteurs manquent encore de parcs accessibles. À mon avis, la Ville devrait investir davantage dans ces lieux, car ils favorisent la santé et renforcent les liens entre voisins.|Em vários bairros de Montreal, os espaços verdes ocupam um lugar importante na qualidade de vida. Entretanto, algumas regiões ainda carecem de parques acessíveis. Na minha opinião, a cidade deveria investir mais nesses espaços, pois eles favorecem a saúde e fortalecem os laços entre os vizinhos.]]'
      },
      { type: 'paragraph', text: 'Exemplo de desenvolvimento:' },
      {
        type: 'paragraph',
        text:
          '[[Tout d’abord, les parcs offrent un endroit où les familles peuvent marcher, faire du vélo et pratiquer des activités gratuites. Par exemple, un terrain de jeu bien entretenu permet aux enfants de bouger près de chez eux. De plus, ces espaces encouragent les rencontres entre les résidents et peuvent rendre un quartier plus accueillant. Certes, leur entretien demande des ressources, mais cet investissement profite à l’ensemble de la communauté.|Primeiramente, os parques oferecem um lugar onde as famílias podem caminhar, andar de bicicleta e praticar atividades gratuitas. Por exemplo, um parquinho bem cuidado permite que as crianças se movimentem perto de casa. Além disso, esses espaços incentivam encontros entre os moradores e podem tornar um bairro mais acolhedor. É verdade que sua manutenção exige recursos, mas esse investimento beneficia toda a comunidade.]]'
      },
      { type: 'paragraph', text: 'Exemplo de conclusão:' },
      {
        type: 'paragraph',
        text:
          '[[En somme, les espaces verts ne sont pas un luxe, mais un élément essentiel d’un quartier agréable. La Ville devrait donc protéger les parcs existants et créer de nouveaux espaces dans les secteurs qui en ont le plus besoin.|Em resumo, os espaços verdes não são um luxo, mas um elemento essencial de um bairro agradável. A cidade deveria, portanto, proteger os parques existentes e criar novos espaços nas regiões que mais precisam deles.]]'
      },
      { type: 'heading', text: '4. Armadilhas comuns na organização do texto' },
      {
        type: 'list',
        items: [
          'Introdução muito longa: não gaste boa parte do texto contextualizando o assunto. Apresente o tema e chegue rapidamente à ideia central.',
          'Desenvolvimento sem organização: evite colocar vários argumentos diferentes no mesmo parágrafo sem uma conexão clara.',
          'Argumentos sem explicação: apresentar uma opinião não é suficiente. Explique por que você pensa assim e, quando possível, apresente um exemplo.',
          'Conclusão com informações completamente novas: a conclusão deve fechar o raciocínio, e não abrir uma nova discussão.',
          'Repetição excessiva: não repita a mesma opinião em todos os parágrafos. Cada parte precisa contribuir para o desenvolvimento da mensagem.',
          'Conectores utilizados mecanicamente: não comece todos os parágrafos com a mesma expressão. Escolha os conectores de acordo com a relação entre as ideias.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a tradução literal do português',
        text:
          'Brasileiros frequentemente escrevem [[À mon opinion|Na minha opinião]] por influência da expressão portuguesa. Essa construção não é natural em francês. ' +
          'Prefira [[À mon avis|Na minha opinião]] ou [[Selon moi|Segundo meu ponto de vista]]. ' +
          'Outro cuidado é evitar começar todos os parágrafos com [[En premier lieu|Em primeiro lugar]] ou [[En conclusion|Em conclusão]]. ' +
          'Os conectores devem refletir a função real de cada parte, e não ser utilizados apenas para dar aparência de organização.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que o avaliador espera',
        text:
          'No TEF Canada e no TCF Canada, a organização precisa estar adequada ao tipo de tarefa. Nos textos argumentativos, deixe sua posição clara, desenvolva argumentos em parágrafos distintos e encerre com uma conclusão coerente. ' +
          'Em artigos e relatos, adapte a estrutura ao objetivo solicitado. Em mensagens curtas, não force uma introdução e uma conclusão formais. ' +
          'Uma boa técnica é utilizar a sequência ideia principal, explicação e exemplo em cada parágrafo de desenvolvimento. ' +
          'Antes de finalizar, verifique se existe uma progressão lógica entre as partes, se os conectores estão corretos e se cada parágrafo contribui para responder ao enunciado.'
      }
    ]
  },

  fr: {
    title: 'Structure d’un texte : organiser l’introduction, le développement et la conclusion',
    summary:
      'Apprenez à structurer vos textes en français de manière claire, logique et cohérente en organisant vos idées autour d’une introduction, d’un développement et d’une conclusion. ' +
      'Vous apprendrez à présenter un sujet, à construire des paragraphes bien développés et à terminer votre argumentation, des compétences essentielles pour l’expression écrite au TEF Canada et au TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. Pourquoi la structure du texte est-elle importante ?' },
      {
        type: 'paragraph',
        text:
          'Un texte bien rédigé ne dépend pas uniquement du vocabulaire et de la grammaire. Les idées doivent être organisées pour que le lecteur comprenne le message sans difficulté. ' +
          'La structure traditionnelle d’un texte développé comporte trois parties : l’introduction, le développement et la conclusion. ' +
          'Chaque partie a une fonction particulière et contribue à la progression des idées. Cette organisation est particulièrement utile dans les textes argumentatifs, les articles et les rédactions plus longues. ' +
          'Toutefois, la structure doit être adaptée à la consigne : un message court, par exemple, n’a pas nécessairement besoin de trois parties formelles.'
      },
      { type: 'heading', text: '2. Les trois parties d’un texte' },
      {
        type: 'table',
        headers: ['Partie', 'Fonction', 'Éléments à inclure'],
        rows: [
          [
            'Introduction',
            'Présenter le sujet et orienter le lecteur.',
            'Mise en contexte, présentation du problème, idée centrale et, si nécessaire, position ou thèse.'
          ],
          [
            'Développement',
            'Expliquer et approfondir les idées principales.',
            'Arguments, justifications, explications, exemples, données et éventuels contre-arguments.'
          ],
          [
            'Conclusion',
            'Terminer le raisonnement et renforcer le message principal.',
            'Synthèse des idées, rappel de la position et, lorsque cela est pertinent, recommandation ou réflexion finale.'
          ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Dans l’introduction, essayez de présenter le sujet sans entrer immédiatement dans tous les détails. ' +
          'Dans un texte argumentatif, vous pouvez utiliser des éléments comme le sujet amené, le sujet posé, la thèse et, parfois, le sujet divisé, qui annonce les arguments à développer. ' +
          'Dans le développement, chaque paragraphe doit présenter une idée principale. Dans la conclusion, reprenez le raisonnement sans simplement recopier l’introduction.'
      },
      { type: 'heading', text: '3. Exemple pratique : l’importance des espaces verts' },
      { type: 'paragraph', text: 'Sujet : défendre la création et la préservation des parcs et des espaces verts dans les quartiers.' },
      { type: 'paragraph', text: 'Exemple d’introduction :' },
      {
        type: 'paragraph',
        text:
          'Dans plusieurs quartiers de Montréal, les espaces verts occupent une place importante dans la qualité de vie. Pourtant, certains secteurs manquent encore de parcs accessibles. À mon avis, la Ville devrait investir davantage dans ces lieux, car ils favorisent la santé et renforcent les liens entre voisins.'
      },
      { type: 'paragraph', text: 'Exemple de développement :' },
      {
        type: 'paragraph',
        text:
          'Tout d’abord, les parcs offrent un endroit où les familles peuvent marcher, faire du vélo et pratiquer des activités gratuites. Par exemple, un terrain de jeu bien entretenu permet aux enfants de bouger près de chez eux. De plus, ces espaces encouragent les rencontres entre les résidents et peuvent rendre un quartier plus accueillant. Certes, leur entretien demande des ressources, mais cet investissement profite à l’ensemble de la communauté.'
      },
      { type: 'paragraph', text: 'Exemple de conclusion :' },
      {
        type: 'paragraph',
        text:
          'En somme, les espaces verts ne sont pas un luxe, mais un élément essentiel d’un quartier agréable. La Ville devrait donc protéger les parcs existants et créer de nouveaux espaces dans les secteurs qui en ont le plus besoin.'
      },
      { type: 'heading', text: '4. Pièges fréquents dans l’organisation du texte' },
      {
        type: 'list',
        items: [
          'Une introduction trop longue : ne consacrez pas une grande partie du texte à la mise en contexte. Présentez le sujet et arrivez rapidement à l’idée centrale.',
          'Un développement mal organisé : évitez de placer plusieurs arguments différents dans le même paragraphe sans lien clair entre eux.',
          'Des arguments sans explication : présenter une opinion ne suffit pas. Expliquez pourquoi vous pensez ainsi et, si possible, donnez un exemple.',
          'Une conclusion qui introduit des informations entièrement nouvelles : la conclusion doit terminer le raisonnement et non ouvrir une nouvelle discussion.',
          'Les répétitions excessives : ne répétez pas la même opinion dans tous les paragraphes. Chaque partie doit contribuer au développement du message.',
          'L’utilisation mécanique des connecteurs : ne commencez pas tous les paragraphes par la même expression. Choisissez vos connecteurs selon la relation entre les idées.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à la traduction littérale du portugais',
        text:
          'Les lusophones écrivent parfois « À mon opinion » sous l’influence de l’expression portugaise. Cette construction n’est pas naturelle en français. ' +
          'Préférez « À mon avis » ou « Selon moi ». ' +
          'Évitez également de commencer tous les paragraphes par « En premier lieu » ou « En conclusion ». ' +
          'Les connecteurs doivent correspondre à la fonction réelle de chaque partie et ne doivent pas être utilisés uniquement pour donner une apparence de structure.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que le correcteur attend',
        text:
          'Au TEF Canada et au TCF Canada, l’organisation doit être adaptée au type de tâche. Dans les textes argumentatifs, exprimez clairement votre position, développez vos arguments dans des paragraphes distincts et terminez par une conclusion cohérente. ' +
          'Dans les articles et les récits, adaptez la structure à l’objectif demandé. Dans les messages courts, ne forcez pas la présence d’une introduction et d’une conclusion formelles. ' +
          'Une bonne méthode consiste à suivre la séquence suivante dans chaque paragraphe de développement : idée principale, explication et exemple. ' +
          'Avant de terminer, vérifiez que les différentes parties s’enchaînent logiquement, que les connecteurs sont bien employés et que chaque paragraphe contribue à répondre à la consigne.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'La structure du texte argumentatif – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-structure-du-texte-argumentatif-f1449/'
    },
    {
      title: 'L’introduction du texte argumentatif – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/l-introduction-du-texte-argumentatif-f1450'
    },
    {
      title: 'Le développement du texte argumentatif – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/le-developpement-du-texte-argumentatif-f1451'
    },
    {
      title: 'La conclusion d’un texte argumentatif – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-conclusion-d-un-texte-argumentatif-f1452'
    }
  ]
}

export default content
