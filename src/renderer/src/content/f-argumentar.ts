import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-argumentar',

  pt: {
    title: 'Argumentar, comparar e concluir: [[organiser ses idées|organizar suas ideias]]',
    summary:
      'Você vai aprender a apresentar uma opinião, justificar argumentos, comparar alternativas e construir uma conclusão convincente em francês. ' +
      'Também vai conhecer conectores lógicos para expressar causa, oposição, concessão e consequência, organizando suas ideias de maneira clara e coerente.',
    blocks: [
      { type: 'heading', text: 'Como construir uma argumentação' },
      {
        type: 'paragraph',
        text:
          'Uma boa argumentação apresenta uma opinião, explica os motivos que a sustentam e utiliza exemplos para torná-la mais convincente. ' +
          'Quando necessário, também considera uma opinião contrária e explica por que sua posição continua válida. ' +
          'Para organizar esse raciocínio em francês, utilize conectores lógicos, chamados [[connecteurs logiques|conectores lógicos]], que estabelecem relações entre as ideias.'
      },
      {
        type: 'table',
        headers: ['Função', 'Expressões em francês', 'Utilização'],
        rows: [
            [
              'Apresentar uma opinião',
              '[[À mon avis, selon moi, à mon sens|Na minha opinião, segundo meu ponto de vista]]',
              'Introduzir sua posição sobre um assunto.'
            ],
            [
              'Adicionar argumentos',
              '[[De plus, en outre, également|Além disso, ademais, também]]',
              'Acrescentar informações e justificativas.'
            ],
            [
              'Explicar ou justificar',
              '[[En effet, parce que, puisque, car|De fato, porque, já que, pois]]',
              'Apresentar razões que sustentam sua opinião.'
            ],
            [
              'Dar exemplos',
              '[[Par exemple, notamment, entre autres|Por exemplo, especialmente, entre outros]]',
              'Ilustrar um argumento com situações concretas.'
            ],
            [
              'Expressar oposição',
              '[[Cependant, toutefois, en revanche, au contraire|Entretanto, contudo, em contrapartida, pelo contrário]]',
              'Apresentar uma ideia diferente ou contrária.'
            ],
            [
              'Expressar concessão',
              '[[Certes, bien que, même si|Certamente, embora, mesmo que]]',
              'Reconhecer uma dificuldade ou um argumento contrário.'
            ],
            [
              'Expressar consequência',
              '[[Donc, ainsi, par conséquent, c’est pourquoi|Portanto, assim, consequentemente, é por isso que]]',
              'Mostrar o resultado de um argumento.'
            ],
            [
              'Concluir',
              '[[En somme, en conclusion, pour conclure|Em suma, em conclusão, para concluir]]',
              'Retomar a ideia principal e encerrar o raciocínio.'
            ]
        ]
      },
      { type: 'heading', text: 'Comparar alternativas e apresentar diferenças' },
      {
        type: 'paragraph',
        text:
          'Para comparar pessoas, situações, serviços ou possibilidades, utilize estruturas comparativas. ' +
          'Elas permitem demonstrar superioridade, inferioridade ou igualdade e ajudam a justificar por que uma opção pode ser mais interessante do que outra.'
      },
      {
        type: 'table',
        headers: ['Estrutura', 'Significado', 'Exemplo'],
        rows: [
            [
              '[[Plus... que|Mais... do que]]',
              'Superioridade.',
              '[[Le train est plus rapide que l’autobus.|O trem é mais rápido do que o ônibus.]]'
            ],
            [
              '[[Moins... que|Menos... do que]]',
              'Inferioridade.',
              '[[Cette solution est moins coûteuse que l’autre.|Esta solução é menos cara do que a outra.]]'
            ],
            [
              '[[Aussi... que|Tão... quanto]]',
              'Igualdade com adjetivos ou advérbios.',
              '[[Ce quartier est aussi tranquille que le centre-ville.|Este bairro é tão tranquilo quanto o centro da cidade.]]'
            ],
            [
              '[[Plus de... que|Mais... do que]]',
              'Superioridade em quantidade.',
              '[[Cette option offre plus de possibilités que l’autre.|Esta opção oferece mais possibilidades do que a outra.]]'
            ],
            [
              '[[Autant de... que|Tanto... quanto]]',
              'Igualdade em quantidade.',
              '[[Nous avons autant de responsabilités que nos collègues.|Temos tantas responsabilidades quanto nossos colegas.]]'
            ],
            [
              '[[Meilleur que|Melhor do que]]',
              'Comparação de qualidade.',
              '[[Ce service est meilleur que l’ancien.|Este serviço é melhor do que o antigo.]]'
            ]
        ]
      },
      { type: 'heading', text: 'Exemplo de argumentação completa' },
      {
        type: 'paragraph',
        text:
          '[[À mon avis, les transports en commun devraient être plus accessibles.|Na minha opinião, o transporte público deveria ser mais acessível.]] ' +
          '[[D’abord, ils coûtent souvent moins cher que la voiture.|Primeiro, eles geralmente custam menos do que o carro.]] ' +
          '[[De plus, ils permettent à plusieurs personnes de se déplacer en même temps.|Além disso, permitem que várias pessoas se desloquem ao mesmo tempo.]] ' +
          '[[Certes, ils ne sont pas toujours pratiques dans tous les quartiers ; cependant, on peut améliorer le service en augmentant la fréquence des autobus.|É verdade que nem sempre são práticos em todos os bairros; entretanto, podemos melhorar o serviço aumentando a frequência dos ônibus.]] ' +
          '[[En somme, investir dans le transport collectif serait bénéfique pour l’ensemble de la communauté.|Em suma, investir no transporte coletivo seria benéfico para toda a comunidade.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não utilize conectores sem observar a lógica',
        text:
          'Um erro comum é utilizar conectores apenas para deixar o discurso aparentemente mais sofisticado, sem respeitar o significado de cada um. [[En effet|De fato]] ' +
          'introduz uma explicação ou justificativa, enquanto [[donc|portanto]] apresenta uma consequência. [[Cependant|Entretanto]] ' +
          'indica oposição, e [[en somme|em suma]] introduz uma síntese. ' +
          'Outro erro é escrever [[plus meilleur|mais melhor]]: a forma correta é [[meilleur|melhor]], sem acrescentar [[plus|mais]]. ' +
          'Evite também repetir o mesmo conector em todas as frases ou acumular expressões desnecessárias.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na produção oral e escrita do TEF Canada e do TCF Canada, procure apresentar uma posição clara e desenvolvê-la com justificativas, exemplos e comparações pertinentes. ' +
          'Uma estrutura útil é: opinião inicial, primeiro argumento, segundo argumento, consideração de uma possível objeção e conclusão. ' +
          'Não basta enumerar vantagens e desvantagens: explique por que elas são importantes e como sustentam sua posição. ' +
          'Priorize argumentos coerentes, vocabulário variado e conectores utilizados corretamente.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A lista de charneiras da OQLF confirma os conectores da tabela para opinião ([[à mon avis|na minha opinião]], [[selon moi|segundo meu ponto de vista]], [[à mon sens|a meu ver]]), adição ([[de plus|além disso]], [[en outre|ademais]], [[également|também]]), justificativa ([[en effet|de fato]], [[parce que|porque]], [[puisque|já que]], [[car|pois]]), exemplo ([[par exemple|por exemplo]], [[notamment|especialmente]], [[entre autres|entre outros]]), oposição ([[cependant|entretanto]], [[toutefois|contudo]], [[en revanche|em contrapartida]], [[au contraire|pelo contrário]]), concessão ([[certes|certamente]], [[bien que|embora]], [[même si|mesmo que]]), consequência ([[donc|portanto]], [[ainsi|assim]], [[par conséquent|consequentemente]], [[c’est pourquoi|é por isso que]]), conclusão ([[en somme|em suma]], [[en conclusion|em conclusão]], [[pour conclure|para concluir]]) e [[d’abord|primeiro]]. O TV5MONDE (nível B2) confirma que os conectores lógicos servem para encadear ideias, construir a argumentação e nuançar, e a OQLF confirma que [[donc|portanto]] exprime uma consequência ou conclusão, geralmente com vírgula, e que a comparação de igualdade, inferioridade e superioridade usa [[plus que|mais que]], [[moins que|menos que]] e [[aussi que|tão... quanto]] ou [[autant que|tanto quanto]]. ' +
          'Não têm fonte: [[plus de|mais de]], [[autant de|tanto de]] e [[meilleur que|melhor que]], o aviso sobre [[plus meilleur|mais melhor]], o exemplo de argumentação e a sequência da dica. ' +
          'Entretanto, essas referências não estabelecem uma estrutura obrigatória de argumentação nem uma sequência fixa de conectores para o TEF Canada ou o TCF Canada. ' +
          'O modelo de organização apresentado na dica é um conselho de preparação, não uma regra oficial das provas.'
      }
    ]
  },

  fr: {
    title: 'Argumenter, comparer et conclure : organiser ses idées',
    summary:
      'Vous apprendrez à présenter une opinion, à justifier vos arguments, à comparer des solutions et à construire une conclusion convaincante en français. ' +
      'Vous découvrirez également des connecteurs logiques pour exprimer la cause, l’opposition, la concession et la conséquence, tout en organisant vos idées de manière claire et cohérente.',
    blocks: [
      { type: 'heading', text: 'Comment construire une argumentation' },
      {
        type: 'paragraph',
        text:
          'Une bonne argumentation présente une opinion, explique les raisons qui la soutiennent et utilise des exemples pour la rendre plus convaincante. ' +
          'Au besoin, elle prend également en considération un point de vue contraire et explique pourquoi la position défendue reste valable. ' +
          'Pour organiser ce raisonnement en français, utilisez des connecteurs logiques qui établissent des relations entre les idées.'
      },
      {
        type: 'table',
        headers: ['Fonction', 'Expressions en français', 'Utilisation'],
        rows: [
            [
              'Présenter une opinion',
              'À mon avis, selon moi, à mon sens',
              'Introduire votre position sur un sujet.'
            ],
            [
              'Ajouter des arguments',
              'De plus, en outre, également',
              'Ajouter des informations et des justifications.'
            ],
            [
              'Expliquer ou justifier',
              'En effet, parce que, puisque, car',
              'Présenter les raisons qui soutiennent votre opinion.'
            ],
            [
              'Donner des exemples',
              'Par exemple, notamment, entre autres',
              'Illustrer un argument avec des situations concrètes.'
            ],
            [
              'Exprimer une opposition',
              'Cependant, toutefois, en revanche, au contraire',
              'Présenter une idée différente ou contraire.'
            ],
            [
              'Exprimer une concession',
              'Certes, bien que, même si',
              'Reconnaître une difficulté ou un argument contraire.'
            ],
            [
              'Exprimer une conséquence',
              'Donc, ainsi, par conséquent, c’est pourquoi',
              'Présenter le résultat d’un argument.'
            ],
            [
              'Conclure',
              'En somme, en conclusion, pour conclure',
              'Reprendre l’idée principale et terminer le raisonnement.'
            ]
        ]
      },
      { type: 'heading', text: 'Comparer des solutions et présenter des différences' },
      {
        type: 'paragraph',
        text:
          'Pour comparer des personnes, des situations, des services ou des possibilités, utilisez des structures comparatives. ' +
          'Elles permettent d’exprimer la supériorité, l’infériorité ou l’égalité et d’expliquer pourquoi une option peut être plus intéressante qu’une autre.'
      },
      {
        type: 'table',
        headers: ['Structure', 'Signification', 'Exemple'],
        rows: [
            [
              'Plus... que',
              'Supériorité.',
              'Le train est plus rapide que l’autobus.'
            ],
            [
              'Moins... que',
              'Infériorité.',
              'Cette solution est moins coûteuse que l’autre.'
            ],
            [
              'Aussi... que',
              'Égalité avec des adjectifs ou des adverbes.',
              'Ce quartier est aussi tranquille que le centre-ville.'
            ],
            [
              'Plus de... que',
              'Supériorité en quantité.',
              'Cette option offre plus de possibilités que l’autre.'
            ],
            [
              'Autant de... que',
              'Égalité en quantité.',
              'Nous avons autant de responsabilités que nos collègues.'
            ],
            [
              'Meilleur que',
              'Comparaison de qualité.',
              'Ce service est meilleur que l’ancien.'
            ]
        ]
      },
      { type: 'heading', text: 'Exemple d’argumentation complète' },
      {
        type: 'paragraph',
        text:
          'À mon avis, les transports en commun devraient être plus accessibles. D’abord, ils coûtent souvent moins cher que la voiture. ' +
          'De plus, ils permettent à plusieurs personnes de se déplacer en même temps. ' +
          'Certes, ils ne sont pas toujours pratiques dans tous les quartiers ; cependant, on peut améliorer le service en augmentant la fréquence des autobus. ' +
          'En somme, investir dans le transport collectif serait bénéfique pour l’ensemble de la communauté.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'N’utilisez pas les connecteurs sans tenir compte de la logique',
        text:
          'Une erreur fréquente consiste à utiliser des connecteurs uniquement pour donner une apparence plus sophistiquée au discours, sans respecter leur signification. ' +
          '« En effet » introduit une explication ou une justification, tandis que « donc » présente une conséquence. ' +
          '« Cependant » indique une opposition, et « en somme » introduit une synthèse. ' +
          'Une autre erreur consiste à écrire « plus meilleur » : la forme correcte est « meilleur », sans ajouter « plus ». ' +
          'Évitez également de répéter le même connecteur dans chaque phrase ou d’accumuler des expressions inutiles.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans la production orale et écrite du TEF Canada et du TCF Canada, essayez de présenter une position claire et de la développer à l’aide de justifications, d’exemples et de comparaisons pertinentes. ' +
          'Une structure utile est la suivante : opinion initiale, premier argument, deuxième argument, prise en compte d’une objection possible et conclusion. ' +
          'Il ne suffit pas d’énumérer des avantages et des inconvénients : expliquez pourquoi ils sont importants et comment ils soutiennent votre position. ' +
          'Privilégiez des arguments cohérents, un vocabulaire varié et des connecteurs correctement employés.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La liste de charnières de l’OQLF confirme les connecteurs du tableau pour l’opinion (à mon avis, selon moi, à mon sens), l’addition (de plus, en outre, également), la justification (en effet, parce que, puisque, car), l’exemple (par exemple, notamment, entre autres), l’opposition (cependant, toutefois, en revanche, au contraire), la concession (certes, bien que, même si), la conséquence (donc, ainsi, par conséquent, c’est pourquoi), la conclusion (en somme, en conclusion, pour conclure) et d’abord. TV5MONDE (niveau B2) confirme que les connecteurs logiques servent à enchaîner les idées, à construire l’argumentation et à nuancer, et l’OQLF confirme que donc exprime une conséquence ou une conclusion, généralement avec une virgule, et que la comparaison d’égalité, d’infériorité et de supériorité emploie plus que, moins que et aussi que ou autant que. ' +
          'Ne sont pas sourcés : plus de, autant de et meilleur que, l’avertissement sur plus meilleur, l’exemple d’argumentation et l’ordre du conseil. ' +
          'Toutefois, ces références n’établissent aucune structure argumentative obligatoire ni aucune succession fixe de connecteurs pour le TEF Canada ou le TCF Canada. ' +
          'Le modèle d’organisation présenté dans le conseil est une recommandation de préparation, et non une règle officielle des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Liste de charnières — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/25159/la-redaction-et-la-communication/organisation-textuelle/liste-de-charnieres'
    },
    {
      title: 'TV5MONDE — Structurer son message (niveau B2)',
      url: 'https://apprendre.tv5monde.com/en/aides/grammaire-structurer-son-message-0'
    },
    {
      title: 'Office québécois de la langue française — Marqueur de relation',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26559642/marqueur-de-relation'
    },
    {
      title: 'Office québécois de la langue française — Phrase subordonnée corrélative',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26560605/phrase-subordonnee-correlative'
    },
    {
      title: 'Office québécois de la langue française — Virgule avec la conjonction donc',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23448/la-ponctuation/virgule/la-virgule-avec-la-conjonction-donc'
    }
  ]
}

export default content
