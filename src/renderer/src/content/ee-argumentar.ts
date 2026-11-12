import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-argumentar',

  pt: {
    title: 'Argumentação em francês: construir, justificar e defender uma tese',
    summary:
      'Aprenda a construir uma argumentação consistente em francês, apresentando uma tese, desenvolvendo argumentos e utilizando exemplos para sustentar suas ideias. ' +
      'Você também vai praticar a apresentação de contra-argumentos, a concessão e a refutação, desenvolvendo a capacidade de defender seu ponto de vista com clareza e precisão no nível B2.',
    blocks: [
      { type: 'heading', text: '1. Os elementos fundamentais de uma argumentação' },
      {
        type: 'paragraph',
        text:
          'Argumentar significa defender uma posição sobre determinado assunto utilizando razões que justifiquem sua opinião. ' +
          'Em francês, uma argumentação bem desenvolvida geralmente apresenta uma [[thèse|tese]], sustentada por [[des arguments|argumentos]], que podem ser reforçados com [[des exemples et des fondements|exemplos e fundamentos]]. ' +
          'Também é importante compreender as opiniões contrárias e saber responder a elas. ' +
          'Uma argumentação não consiste apenas em dizer o que você pensa: é necessário explicar por que sua posição faz sentido e apresentar elementos que ajudem o leitor a compreender seu raciocínio.'
      },
      {
        type: 'table',
        headers: ['Elemento em francês', 'Significado', 'Função'],
        rows: [
            [
              '[[La thèse|A tese]]',
              'Posição principal defendida pelo autor.',
              'Deixar claro o que você pensa sobre o assunto.'
            ],
            [
              '[[L’argument|O argumento]]',
              'Razão utilizada para sustentar a tese.',
              'Explicar por que sua opinião é válida.'
            ],
            [
              '[[Le fondement|O fundamento]]',
              'Base que dá credibilidade ao argumento, como fatos, dados, valores ou experiências.',
              'Demonstrar em que o argumento está apoiado.'
            ],
            [
              '[[L’exemple|O exemplo]]',
              'Situação concreta que ilustra um argumento.',
              'Facilitar a compreensão e tornar a ideia mais convincente.'
            ],
            [
              '[[Le contre-argument|O contra-argumento]]',
              'Razão utilizada para defender uma posição contrária à tese.',
              'Apresentar uma objeção ou reconhecer outro ponto de vista.'
            ],
            [
              '[[La concession|A concessão]]',
              'Reconhecimento de que uma parte do argumento contrário pode ser válida.',
              'Demonstrar equilíbrio sem abandonar sua posição.'
            ],
            [
              '[[La réfutation|A refutação]]',
              'Resposta que contesta ou enfraquece o argumento contrário.',
              'Explicar por que a objeção não invalida sua tese.'
            ]
        ]
      },
      { type: 'heading', text: '2. Como desenvolver um argumento completo' },
      {
        type: 'paragraph',
        text:
          'Um argumento bem desenvolvido não deve terminar logo após apresentar uma opinião. ' +
          'Utilize uma sequência lógica: apresente a ideia principal, explique sua justificativa e acrescente um exemplo ou fundamento que a sustente. ' +
          'Essa estrutura evita argumentos superficiais e ajuda a construir parágrafos mais convincentes.'
      },
      {
        type: 'table',
        headers: ['Etapa', 'Exemplo em francês', 'Função'],
        rows: [
            [
              'Argumento',
              '[[Les transports collectifs devraient être plus accessibles.|O transporte coletivo deveria ser mais acessível.]]',
              'Apresentação da ideia principal.'
            ],
            [
              'Justificativa',
              '[[Cela permettrait de réduire les dépenses quotidiennes des ménages.|Isso permitiria reduzir as despesas diárias das famílias.]]',
              'Explicação do motivo.'
            ],
            [
              'Exemplo',
              '[[Par exemple, les étudiants pourraient se déplacer plus facilement entre leur domicile et leur établissement d’enseignement.|Por exemplo, os estudantes poderiam se deslocar mais facilmente entre suas casas e suas instituições de ensino.]]',
              'Ilustração concreta do argumento.'
            ],
            [
              'Resultado',
              '[[Cette mesure favoriserait donc l’accès aux études et à l’emploi.|Essa medida favoreceria, portanto, o acesso aos estudos e ao emprego.]]',
              'Consequência relacionada à ideia apresentada.'
            ]
        ]
      },
      { type: 'heading', text: '3. Contra-argumentação, concessão e refutação' },
      {
        type: 'paragraph',
        text:
          'Em uma argumentação mais avançada, você não precisa ignorar as opiniões contrárias. ' +
          'Pelo contrário, reconhecer uma objeção relevante e responder a ela demonstra capacidade de análise. ' +
          'Entretanto, os três conceitos são diferentes: o contra-argumento apresenta uma razão contrária à sua tese, a concessão reconhece que essa razão pode ter alguma validade e a refutação explica por que ela não é suficiente para invalidar sua posição.'
      },
      {
        type: 'table',
        headers: ['Recurso', 'Expressões em francês', 'Função'],
        rows: [
            [
              'Apresentar uma oposição',
              '[[Certains estiment que...|Algumas pessoas consideram que...]], [[D’autres soutiennent que...|Outras defendem que...]]',
              'Introduzir um ponto de vista contrário.'
            ],
            [
              'Fazer uma concessão',
              '[[Certes...|Certamente...]], [[Il est vrai que...|É verdade que...]], [[Bien que...|Embora...]]',
              'Reconhecer parcialmente a validade de uma objeção.'
            ],
            [
              'Refutar uma objeção',
              '[[Cependant, cet argument ne tient pas compte de...|Entretanto, esse argumento não leva em consideração...]], [[Toutefois, cela ne signifie pas que...|Todavia, isso não significa que...]]',
              'Contestar a conclusão ou os limites do argumento contrário.'
            ],
            [
              'Reafirmar a tese',
              '[[Malgré ces réserves, je considère que...|Apesar dessas ressalvas, considero que...]], [[C’est pourquoi je reste convaincu que...|É por isso que continuo convencido de que...]]',
              'Retomar sua posição depois de considerar a objeção.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemplo prático: defender investimentos em ciclovias' },
      { type: 'paragraph', text: 'Tema: a prefeitura deveria investir mais na construção de ciclovias?' },
      {
        type: 'paragraph',
        text:
          '[[À mon avis, la Ville devrait poursuivre le développement des pistes cyclables, car elles améliorent la sécurité des déplacements et offrent une solution pratique pour les trajets quotidiens.|Na minha opinião, a cidade deveria continuar ampliando as ciclovias, pois elas melhoram a segurança dos deslocamentos e oferecem uma solução prática para os trajetos diários.]] ' +
          '[[Des voies bien aménagées permettent aux cyclistes de circuler plus facilement, notamment aux heures de pointe.|Ciclovias bem planejadas permitem que os ciclistas circulem com mais facilidade, especialmente nos horários de pico.]] ' +
          '[[Par exemple, lorsqu’un axe cyclable relie un quartier à une station de métro, davantage de résidents peuvent combiner le vélo et le transport collectif.|Por exemplo, quando uma rota cicloviária conecta um bairro a uma estação de metrô, mais moradores podem combinar a bicicleta com o transporte coletivo.]] ' +
          '[[Certains commerçants craignent toutefois que la suppression de places de stationnement nuise à leurs activités.|Alguns comerciantes, entretanto, temem que a eliminação de vagas de estacionamento prejudique suas atividades.]] ' +
          '[[Cette inquiétude est compréhensible, puisque les livraisons et l’accès aux commerces doivent rester possibles.|Essa preocupação é compreensível, já que as entregas e o acesso aos estabelecimentos comerciais precisam continuar sendo possíveis.]] ' +
          '[[Cependant, elle ne justifie pas le rejet de tous les projets.|No entanto, ela não justifica a rejeição de todos os projetos.]] ' +
          '[[La municipalité peut prévoir des zones de livraison et consulter les commerçants avant les travaux.|A prefeitura pode prever áreas de carga e descarga e consultar os comerciantes antes das obras.]] ' +
          '[[En somme, investir dans des pistes cyclables bien conçues permet d’améliorer la mobilité, à condition de tenir compte des besoins de l’ensemble du quartier.|Em resumo, investir em ciclovias bem planejadas permite melhorar a mobilidade, desde que as necessidades de todo o bairro sejam consideradas.]]'
      },
      { type: 'heading', text: '5. Como identificar cada elemento no exemplo' },
      {
        type: 'table',
        headers: ['Trecho ou ideia', 'Elemento', 'Interpretação'],
        rows: [
            [
              '[[La Ville devrait poursuivre le développement des pistes cyclables.|A cidade deveria continuar ampliando as ciclovias.]]',
              'Tese',
              'O autor é favorável à expansão das ciclovias.'
            ],
            [
              '[[Elles améliorent la sécurité des déplacements.|Elas melhoram a segurança dos deslocamentos.]]',
              'Argumento',
              'A infraestrutura cicloviária pode contribuir para a segurança.'
            ],
            [
              '[[Lorsqu’un axe cyclable relie un quartier à une station de métro...|Quando uma rota cicloviária conecta um bairro a uma estação de metrô...]]',
              'Exemplo',
              'Uma situação concreta que ilustra a integração entre bicicleta e transporte coletivo.'
            ],
            [
              '[[Certains commerçants craignent que la suppression de places de stationnement nuise à leurs activités.|Alguns comerciantes temem que a eliminação de vagas de estacionamento prejudique suas atividades.]]',
              'Contra-argumento',
              'Apresenta uma preocupação contrária à expansão das ciclovias.'
            ],
            [
              '[[Cette inquiétude est compréhensible.|Essa preocupação é compreensível.]]',
              'Concessão',
              'Reconhece que a preocupação dos comerciantes tem fundamento.'
            ],
            [
              '[[Cependant, elle ne justifie pas le rejet de tous les projets.|No entanto, ela não justifica a rejeição de todos os projetos.]]',
              'Refutação',
              'Demonstra que a existência de uma dificuldade não invalida todos os projetos.'
            ]
        ]
      },
      { type: 'heading', text: '6. Armadilhas comuns na argumentação' },
      {
        type: 'list',
        items: [
          'Apresentar uma tese sem argumentos. Uma opinião isolada não constitui uma argumentação desenvolvida.',
          'Confundir argumento com exemplo. O argumento apresenta uma razão; o exemplo ilustra essa razão por meio de uma situação concreta.',
          'Utilizar uma concessão como se fosse uma desistência da própria tese. Reconhecer um problema não significa necessariamente concordar com a posição contrária.',
          'Apresentar um contra-argumento e não responder a ele. Se você introduz uma objeção, explique como ela se relaciona com sua posição.',
            'Utilizar exemplos inventados como se fossem dados estatísticos reais. ' +
            'Situações hipotéticas podem ilustrar ideias, mas não devem ser apresentadas como pesquisas ou fatos comprovados.',
          'Repetir a mesma ideia com conectores diferentes. Cada argumento deve acrescentar uma justificativa nova e relevante.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção ao verbo prétendre',
        text:
          'Um erro comum para brasileiros é confundir [[prétendre|afirmar ou alegar]] com “pretender”, no sentido de ter a intenção de fazer algo. ' +
          'Por exemplo, [[Certains prétendent que cette mesure est inutile.|Algumas pessoas afirmam que essa medida é inútil.]] ' +
          'não quer dizer que essas pessoas pretendem tornar a medida inútil: elas afirmam que ela é inútil. ' +
          'Para expressar a intenção de fazer algo, use [[avoir l’intention de|ter a intenção de]] ou [[vouloir|querer]]. ' +
          'Cuidado também com [[soutenir que|afirmar que]] e [[soutenir une thèse|defender uma tese]]: ambos servem para defender uma posição com argumentos. ' +
          'Analise o contexto para compreender o sentido correto.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que o avaliador espera no nível B2',
        text:
          'No TEF Canada e no TCF Canada, a capacidade de argumentar envolve apresentar um posicionamento compreensível, desenvolver ideias relevantes e estabelecer relações lógicas entre diferentes pontos de vista. ' +
          'Demonstre que consegue justificar suas opiniões, exemplificar seus argumentos, reconhecer objeções e responder a elas sem perder a coerência. ' +
          'Não é obrigatório utilizar um contra-argumento em todos os textos, mas saber trabalhar com concessões e refutações amplia sua capacidade de expressão. ' +
          'Uma técnica eficiente é construir cada parágrafo com uma ideia principal, uma explicação e um exemplo. ' +
          'Na revisão, verifique se os argumentos realmente sustentam a tese e se os conectores expressam corretamente as relações de oposição, concessão e consequência.'
      }
    ]
  },

  fr: {
    title: 'Argumenter : thèse, arguments, exemples, contre-argument et concession',
    summary:
      'Apprenez à construire une argumentation cohérente en français en présentant une thèse, en développant des arguments et en utilisant des exemples pour soutenir vos idées. ' +
      'Vous apprendrez également à présenter des contre-arguments, à faire des concessions et à réfuter des objections afin de défendre votre point de vue avec clarté et précision au niveau B2.',
    blocks: [
      { type: 'heading', text: '1. Les éléments fondamentaux d’une argumentation' },
      {
        type: 'paragraph',
        text:
          'Argumenter consiste à défendre une position sur un sujet donné en utilisant des raisons qui justifient son opinion. ' +
          'En français, une argumentation bien développée présente généralement une thèse, soutenue par des arguments, qui peuvent être renforcés par des exemples et des fondements. ' +
          'Il est également important de comprendre les opinions opposées et de savoir y répondre. ' +
          'Une argumentation ne consiste pas simplement à dire ce que l’on pense : il faut expliquer pourquoi sa position est pertinente et présenter des éléments qui permettent au lecteur de comprendre son raisonnement.'
      },
      {
        type: 'table',
        headers: ['Élément', 'Signification', 'Fonction'],
        rows: [
            [
              'La thèse',
              'Position principale défendue par l’auteur.',
              'Indiquer clairement son opinion sur le sujet.'
            ],
            [
              'L’argument',
              'Raison utilisée pour soutenir la thèse.',
              'Expliquer pourquoi son opinion est valable.'
            ],
            [
              'Le fondement',
              'Base qui donne de la crédibilité à un argument, comme des faits, des données, des valeurs ou des expériences.',
              'Démontrer sur quoi repose l’argument.'
            ],
            [
              'L’exemple',
              'Situation concrète qui illustre un argument.',
              'Faciliter la compréhension et rendre l’idée plus convaincante.'
            ],
            [
              'Le contre-argument',
              'Raison utilisée pour défendre une position opposée à la thèse.',
              'Présenter une objection ou reconnaître un autre point de vue.'
            ],
            [
              'La concession',
              'Reconnaissance du fait qu’une partie de l’argument opposé peut être valable.',
              'Faire preuve de nuance sans abandonner sa position.'
            ],
            [
              'La réfutation',
              'Réponse qui conteste ou affaiblit l’argument opposé.',
              'Expliquer pourquoi l’objection n’invalide pas la thèse.'
            ]
        ]
      },
      { type: 'heading', text: '2. Comment développer un argument complet' },
      {
        type: 'paragraph',
        text:
          'Un argument bien développé ne doit pas s’arrêter après la présentation d’une opinion. ' +
          'Suivez une progression logique : présentez l’idée principale, expliquez sa justification et ajoutez un exemple ou un fondement qui la soutient. ' +
          'Cette structure permet d’éviter les arguments superficiels et de construire des paragraphes plus convaincants.'
      },
      {
        type: 'table',
        headers: ['Étape', 'Exemple en français', 'Fonction'],
        rows: [
            [
              'Argument',
              'Les transports collectifs devraient être plus accessibles.',
              'Présenter l’idée principale.'
            ],
            [
              'Justification',
              'Cela permettrait de réduire les dépenses quotidiennes des ménages.',
              'Expliquer la raison.'
            ],
            [
              'Exemple',
              'Par exemple, les étudiants pourraient se déplacer plus facilement entre leur domicile et leur établissement d’enseignement.',
              'Illustrer concrètement l’argument.'
            ],
            [
              'Conséquence',
              'Cette mesure favoriserait donc l’accès aux études et à l’emploi.',
              'Présenter une conséquence liée à l’idée développée.'
            ]
        ]
      },
      { type: 'heading', text: '3. Contre-argumentation, concession et réfutation' },
      {
        type: 'paragraph',
        text:
          'Dans une argumentation plus avancée, vous ne devez pas ignorer les opinions opposées. ' +
          'Au contraire, reconnaître une objection pertinente et y répondre démontre une capacité d’analyse. ' +
          'Toutefois, ces trois concepts sont différents : le contre-argument présente une raison opposée à votre thèse, la concession reconnaît que cette raison peut avoir une certaine validité et la réfutation explique pourquoi elle ne suffit pas à invalider votre position.'
      },
      {
        type: 'table',
        headers: ['Procédé', 'Expressions en français', 'Fonction'],
        rows: [
            [
              'Présenter une opposition',
              'Certains estiment que..., D’autres soutiennent que...',
              'Introduire un point de vue opposé.'
            ],
            [
              'Faire une concession',
              'Certes..., Il est vrai que..., Bien que...',
              'Reconnaître partiellement la validité d’une objection.'
            ],
            [
              'Réfuter une objection',
              'Cependant, cet argument ne tient pas compte de..., Toutefois, cela ne signifie pas que...',
              'Contester la conclusion ou les limites de l’argument opposé.'
            ],
            [
              'Réaffirmer sa thèse',
              'Malgré ces réserves, je considère que..., C’est pourquoi je reste convaincu que...',
              'Reprendre sa position après avoir considéré l’objection.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemple pratique : défendre les investissements dans les pistes cyclables' },
      { type: 'paragraph', text: 'Sujet : la municipalité devrait-elle investir davantage dans la construction de pistes cyclables ?' },
      {
        type: 'paragraph',
        text:
          'À mon avis, la Ville devrait poursuivre le développement des pistes cyclables, car elles améliorent la sécurité des déplacements et offrent une solution pratique pour les trajets quotidiens. ' +
          'Des voies bien aménagées permettent aux cyclistes de circuler plus facilement, notamment aux heures de pointe. ' +
          'Par exemple, lorsqu’un axe cyclable relie un quartier à une station de métro, davantage de résidents peuvent combiner le vélo et le transport collectif. ' +
          'Certains commerçants craignent toutefois que la suppression de places de stationnement nuise à leurs activités. ' +
          'Cette inquiétude est compréhensible, puisque les livraisons et l’accès aux commerces doivent rester possibles. ' +
          'Cependant, elle ne justifie pas le rejet de tous les projets. ' +
          'La municipalité peut prévoir des zones de livraison et consulter les commerçants avant les travaux. ' +
          'En somme, investir dans des pistes cyclables bien conçues permet d’améliorer la mobilité, à condition de tenir compte des besoins de l’ensemble du quartier.'
      },
      { type: 'heading', text: '5. Comment identifier chaque élément dans l’exemple' },
      {
        type: 'table',
        headers: ['Extrait ou idée', 'Élément', 'Interprétation'],
        rows: [
            [
              'La Ville devrait poursuivre le développement des pistes cyclables.',
              'Thèse',
              'L’auteur est favorable au développement des pistes cyclables.'
            ],
            [
              'Elles améliorent la sécurité des déplacements.',
              'Argument',
              'Les infrastructures cyclables peuvent contribuer à la sécurité.'
            ],
            [
              'Lorsqu’un axe cyclable relie un quartier à une station de métro...',
              'Exemple',
              'Une situation concrète qui illustre l’intégration du vélo et du transport collectif.'
            ],
            [
              'Certains commerçants craignent que la suppression de places de stationnement nuise à leurs activités.',
              'Contre-argument',
              'Une préoccupation opposée au développement des pistes cyclables.'
            ],
            [
              'Cette inquiétude est compréhensible.',
              'Concession',
              'L’auteur reconnaît que la préoccupation des commerçants est fondée.'
            ],
            [
              'Cependant, elle ne justifie pas le rejet de tous les projets.',
              'Réfutation',
              'L’auteur démontre qu’une difficulté ne remet pas en question tous les projets.'
            ]
        ]
      },
      { type: 'heading', text: '6. Pièges fréquents dans l’argumentation' },
      {
        type: 'list',
        items: [
          'Présenter une thèse sans arguments. Une opinion isolée ne constitue pas une argumentation développée.',
          'Confondre un argument et un exemple. L’argument présente une raison ; l’exemple illustre cette raison à l’aide d’une situation concrète.',
          'Utiliser une concession comme un abandon de sa propre thèse. Reconnaître un problème ne signifie pas nécessairement être d’accord avec la position opposée.',
          'Présenter un contre-argument sans y répondre. Si vous introduisez une objection, expliquez comment elle se rapporte à votre position.',
            'Utiliser des exemples inventés comme s’il s’agissait de données statistiques réelles. ' +
            'Des situations hypothétiques peuvent illustrer des idées, mais ne doivent pas être présentées comme des recherches ou des faits vérifiés.',
          'Répéter la même idée avec des connecteurs différents. Chaque argument doit apporter une justification nouvelle et pertinente.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au verbe prétendre',
        text:
          'Une erreur fréquente chez les lusophones consiste à confondre « prétendre » avec le portugais « pretender », qui exprime l’intention de faire quelque chose. ' +
          'En français, prétendre signifie affirmer ou avancer quelque chose. Par exemple, « Certains prétendent que cette mesure est inutile. » ' +
          'signifie que certaines personnes affirment que cette mesure est inutile. Pour exprimer l’intention de faire quelque chose, utilisez « avoir l’intention de » ou « vouloir ». ' +
          'Attention aussi à « soutenir que » et à « soutenir une thèse » : les deux servent à défendre une position à l’aide d’arguments. ' +
          'Analysez le contexte pour comprendre le sens exact.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que le correcteur attend au niveau B2',
        text:
          'Au TEF Canada et au TCF Canada, la capacité à argumenter consiste à présenter une position compréhensible, à développer des idées pertinentes et à établir des relations logiques entre différents points de vue. ' +
          'Montrez que vous savez justifier vos opinions, illustrer vos arguments, reconnaître des objections et y répondre sans perdre la cohérence de votre texte. ' +
          'Il n’est pas obligatoire d’utiliser un contre-argument dans chaque texte, mais la maîtrise des concessions et des réfutations élargit vos capacités d’expression. ' +
          'Une technique efficace consiste à construire chaque paragraphe autour d’une idée principale, d’une explication et d’un exemple. ' +
          'Lors de la relecture, vérifiez que vos arguments soutiennent réellement votre thèse et que les connecteurs expriment correctement les relations d’opposition, de concession et de conséquence.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'La thèse, les arguments et les fondements dans le texte argumentatif – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-these-les-arguments-et-les-fondements-f1111'
    },
    {
      title: 'La structure du texte argumentatif – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-structure-du-texte-argumentatif-f1449'
    },
    {
      title: 'La réfutation – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-refutation-f1165'
    },
    {
      title: 'Les stratégies argumentatives – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/les-strategies-argumentatives-0-f1115'
    }
  ]
}

export default content
