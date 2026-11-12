import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ce-literarios',

  pt: {
    title: 'Interpretação de textos literários e abstratos: leitura avançada',
    summary:
      'Aprenda a compreender textos literários, reflexivos e abstratos que apresentam significados implícitos, metáforas, ironia e diferentes pontos de vista. ' +
      'Você vai desenvolver a capacidade de interpretar o que não está escrito explicitamente, identificar a perspectiva do narrador e reconhecer temas, símbolos e intenções do autor, habilidades importantes para alcançar o nível B2.',
    blocks: [
      { type: 'heading', text: '1. Vá além do significado literal' },
      {
        type: 'paragraph',
        text:
          'Textos literários e abstratos exigem uma leitura mais profunda do que textos informativos. ' +
          'Em vez de simplesmente localizar informações, você precisa compreender ideias implícitas, emoções, símbolos e relações entre diferentes partes do texto. ' +
          'Esses textos podem aparecer na forma de contos, crônicas, poemas, ensaios e reflexões filosóficas. ' +
          'Uma frase pode apresentar um significado literal e, ao mesmo tempo, transmitir uma ideia simbólica. ' +
          'Seu objetivo é compreender tanto o que está escrito quanto aquilo que o autor sugere.'
      },
      { type: 'heading', text: '2. Elementos fundamentais da interpretação' },
      {
        type: 'table',
        headers: ['Conceito em francês', 'Significado', 'O que observar'],
        rows: [
            [
              '[[Le sujet|O assunto]]',
              'Aquilo de que o texto trata diretamente.',
              'Identifique o tema concreto apresentado.'
            ],
            [
              '[[Le thème|O tema]]',
              'A ideia mais profunda explorada pelo texto.',
              'Pode ser solidão, liberdade, identidade, memória ou passagem do tempo.'
            ],
            [
              '[[Le narrateur|O narrador]]',
              'A voz que conta a história.',
              'Não confunda automaticamente o narrador com o autor real.'
            ],
            [
              '[[Le point de vue interne|O ponto de vista interno]]',
              'A narrativa apresenta os acontecimentos pela perspectiva de um personagem.',
              'Observe pensamentos, sentimentos, lembranças e percepções pessoais.'
            ],
            [
              '[[Le point de vue omniscient|O ponto de vista onisciente]]',
              'O narrador conhece informações que os personagens podem desconhecer.',
              'Pode revelar pensamentos, acontecimentos e informações de diferentes personagens.'
            ],
            [
              '[[Le point de vue externe|O ponto de vista externo]]',
              'Os acontecimentos são apresentados de fora, sem acesso direto aos pensamentos dos personagens.',
              'Observe descrições de comportamentos e acontecimentos visíveis.'
            ],
            [
              '[[Le champ lexical|O campo lexical]]',
              'Conjunto de palavras relacionadas a uma mesma ideia.',
              'Palavras associadas à escuridão, por exemplo, podem reforçar uma atmosfera de tristeza ou mistério.'
            ],
            [
              '[[La figure de style|A figura de linguagem]]',
              'Recurso utilizado para produzir determinado efeito.',
              'Observe metáforas, comparações, personificações e hipérboles.'
            ],
            [
              '[[Le ton|O tom]]',
              'A atitude ou atmosfera transmitida pelo texto.',
              'Pode ser irônico, nostálgico, melancólico, crítico ou dramático.'
            ],
            [
              '[[Le sous-entendu|O subentendido]]',
              'Uma informação sugerida, mas não declarada diretamente.',
              'Observe o contexto e os indícios que permitem chegar a uma interpretação.'
            ]
        ]
      },
      { type: 'heading', text: '3. Exemplo prático: interpretação de um trecho literário' },
      {
        type: 'paragraph',
        text:
          'Leia o trecho fictício abaixo, inspirado na literatura francófona contemporânea do Québec. Não tente traduzir cada palavra. ' +
          'Primeiro, identifique o que acontece literalmente e depois procure o significado simbólico.'
      },
      {
        type: 'paragraph',
        text:
          '[[Chaque matin, la ville ouvrait ses paupières de verre.|Todas as manhãs, a cidade abria suas pálpebras de vidro.]] ' +
          '[[Je traversais les rues sans chercher d’adresse ; je voulais seulement retarder le moment de rentrer.|Eu atravessava as ruas sem procurar um endereço; queria apenas adiar o momento de voltar para casa.]] ' +
          '[[Depuis le départ de mon frère, la maison était devenue trop silencieuse.|Desde a partida do meu irmão, a casa havia ficado silenciosa demais.]] ' +
          '[[Pourtant, je continuais d’allumer deux lampes, comme si la lumière pouvait empêcher son absence de grandir.|Mesmo assim, eu continuava acendendo duas lâmpadas, como se a luz pudesse impedir que sua ausência aumentasse.]]'
      },
      {
        type: 'paragraph',
        text: 'Interpretação literal: o narrador caminha pela cidade, evita voltar para casa e continua acendendo duas lâmpadas depois da partida do irmão.'
      },
      {
        type: 'paragraph',
        text:
          'Interpretação simbólica: a cidade ganha características humanas por meio de uma personificação. ' +
          'A luz pode representar memória, esperança ou uma tentativa de preservar a presença do irmão. O silêncio sugere solidão e sofrimento.'
      },
      { type: 'paragraph', text: 'Tema principal: ausência, memória e dificuldade de aceitar uma mudança na vida.' },
      { type: 'heading', text: '4. Figuras de linguagem e seus efeitos' },
      {
        type: 'table',
        headers: ['Figura em francês', 'Exemplo em francês', 'Significado e efeito'],
        rows: [
            [
              '[[La métaphore|Metáfora]]',
              '[[Cette femme est un rayon de soleil.|Essa mulher é um raio de sol.]]',
              'Associa duas realidades sem utilizar uma expressão comparativa explícita. Pode transmitir alegria ou esperança.'
            ],
            [
              '[[La comparaison|Comparação]]',
              '[[Il est courageux comme un lion.|Ele é corajoso como um leão.]]',
              'Aproxima duas realidades utilizando elementos comparativos como [[comme|como]].'
            ],
            [
              '[[La personnification|Personificação]]',
              '[[Le vent murmurait à travers les arbres.|O vento sussurrava entre as árvores.]]',
              'Atribui características humanas a elementos não humanos.'
            ],
            [
              '[[L’hyperbole|Hipérbole]]',
              '[[Je t’ai attendu pendant une éternité.|Esperei por você durante uma eternidade.]]',
              'Exagera uma característica ou situação para produzir intensidade.'
            ],
            [
              '[[L’ironie|Ironia]]',
              '[[Quelle merveilleuse journée !|Que dia maravilhoso!]] [[Il pleut depuis ce matin.|Está chovendo desde esta manhã.]]',
              'Expressa uma ideia diferente ou contrária ao sentido literal, geralmente para criticar ou provocar humor.'
            ],
            [
              '[[L’antithèse|Antítese]]',
              '[[Il cherchait la lumière au milieu des ténèbres.|Ele procurava a luz no meio das trevas.]]',
              'Aproxima ideias opostas para destacar um contraste.'
            ]
        ]
      },
      { type: 'heading', text: '5. Como reconhecer significados implícitos' },
      {
        type: 'list',
        items: [
          'Observe palavras e imagens repetidas. A repetição de referências à noite, ao silêncio e à escuridão pode construir um campo lexical associado à solidão.',
          'Preste atenção às contradições. Um personagem pode dizer que está feliz enquanto suas atitudes demonstram tristeza.',
          'Analise o contexto das frases. Uma palavra pode adquirir um sentido simbólico diferente de seu significado habitual.',
          'Observe a evolução do personagem. Mudanças de comportamento, pensamentos e atitudes podem revelar conflitos internos.',
          'Diferencie o que o narrador afirma daquilo que o leitor pode deduzir. Uma interpretação precisa de indícios no texto.',
          'Procure compreender o efeito das escolhas do autor: por que ele utiliza determinada imagem, comparação ou repetição?'
        ]
      },
      { type: 'heading', text: '6. Armadilhas comuns para brasileiros' },
      {
        type: 'list',
        items: [
          
            'Interpretar metáforas literalmente. ' +
            'Quando um texto afirma que [[Le temps dévore tout.|O tempo devora tudo.]], não está falando de uma ação física, mas da passagem inevitável do tempo.',
          'Confundir o narrador com o autor. Uma narrativa em primeira pessoa não significa necessariamente que o escritor esteja contando sua própria experiência.',
          'Confundir assunto com tema. Um texto pode falar sobre uma viagem, mas explorar questões mais profundas como liberdade, amadurecimento ou perda.',
          'Interpretar toda ironia como uma afirmação sincera. O contexto pode indicar que o autor está criticando justamente aquilo que parece elogiar.',
          
            'Considerar qualquer interpretação possível como correta. ' +
            'Uma leitura pode ser interessante, mas precisa encontrar sustentação nas palavras e nos acontecimentos do texto.',
          'Ignorar mudanças no tom. Um texto pode começar com uma atmosfera tranquila e terminar com uma crítica ou reflexão pessimista.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a tradução palavra por palavra',
        text:
          'Um erro frequente de brasileiros é tentar interpretar imagens literárias usando apenas o significado literal das palavras. ' +
          'Além disso, atenção a palavras parecidas com o português: [[sensible|sensível]] ' +
          'não significa necessariamente sensato; para expressar a ideia de alguém sensato, o francês utiliza [[sensé|sensato ou razoável]]. ' +
          'Em textos abstratos, procure compreender a frase completa, a intenção e o contexto antes de escolher uma interpretação.'
      },
      { type: 'heading', text: '7. Estratégia para o TEF Canada e o TCF Canada' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Encontre evidências para as interpretações',
        text:
          'Em questões de compreensão avançada, uma alternativa pode exigir que você deduza sentimentos, intenções, críticas ou mensagens implícitas. ' +
          'Leia o trecho completo, identifique o tom e procure elementos que sustentem sua interpretação. ' +
          'Não escolha uma resposta apenas porque ela parece filosoficamente interessante. A resposta precisa corresponder ao texto. ' +
          'Pratique especialmente perguntas como [[Quelle est l’idée sous-jacente ?|Qual é a ideia subjacente?]], [[Que cherche à exprimer l’auteur ?|O que o autor procura expressar?]] ' +
          'e [[Quelle est l’attitude du narrateur ?|Qual é a atitude do narrador?]]. ' +
          'Essas habilidades aprofundam sua compreensão de textos complexos, embora os exames também apresentem textos funcionais, informativos e argumentativos. ' +
          'Não é necessário produzir uma análise literária formal: o objetivo é compreender e justificar a interpretação.'
      }
    ]
  },

  fr: {
    title: 'Comprendre les textes littéraires et abstraits : lecture avancée',
    summary:
      'Apprenez à comprendre des textes littéraires, réflexifs et abstraits qui comportent des significations implicites, des métaphores, de l’ironie et différents points de vue. ' +
      'Vous développerez votre capacité à interpréter ce qui n’est pas explicitement écrit, à identifier la perspective du narrateur et à reconnaître les thèmes, les symboles et les intentions de l’auteur, des compétences importantes pour atteindre le niveau B2.',
    blocks: [
      { type: 'heading', text: '1. Allez au-delà du sens littéral' },
      {
        type: 'paragraph',
        text:
          'Les textes littéraires et abstraits exigent une lecture plus approfondie que les textes informatifs. ' +
          'Au lieu de simplement repérer des informations, vous devez comprendre les idées implicites, les émotions, les symboles et les liens entre les différentes parties du texte. ' +
          'Ces textes peuvent prendre la forme de nouvelles, de chroniques, de poèmes, d’essais et de réflexions philosophiques. ' +
          'Une phrase peut avoir un sens littéral tout en transmettant une idée symbolique. ' +
          'Votre objectif est de comprendre à la fois ce qui est écrit et ce que l’auteur suggère.'
      },
      { type: 'heading', text: '2. Les éléments fondamentaux de l’interprétation' },
      {
        type: 'table',
        headers: ['Concept', 'Signification', 'Éléments à observer'],
        rows: [
            [
              'Le sujet',
              'Ce dont le texte traite directement.',
              'Identifiez le sujet concret présenté.'
            ],
            [
              'Le thème',
              'L’idée plus profonde explorée dans le texte.',
              'Il peut s’agir de la solitude, de la liberté, de l’identité, de la mémoire ou du passage du temps.'
            ],
            [
              'Le narrateur',
              'La voix qui raconte l’histoire.',
              'Ne confondez pas automatiquement le narrateur avec l’auteur réel.'
            ],
            [
              'Le point de vue interne',
              'Le récit présente les événements à travers la perspective d’un personnage.',
              'Observez les pensées, les sentiments, les souvenirs et les perceptions personnelles.'
            ],
            [
              'Le point de vue omniscient',
              'Le narrateur connaît des informations que les personnages peuvent ignorer.',
              'Il peut révéler les pensées, les événements et les informations concernant différents personnages.'
            ],
            [
              'Le point de vue externe',
              'Les événements sont présentés de l’extérieur, sans accès direct aux pensées des personnages.',
              'Observez les descriptions des comportements et des événements visibles.'
            ],
            [
              'Le champ lexical',
              'Ensemble de mots associés à une même idée.',
              'Les mots associés à l’obscurité, par exemple, peuvent renforcer une atmosphère de tristesse ou de mystère.'
            ],
            [
              'La figure de style',
              'Procédé utilisé pour produire un effet particulier.',
              'Observez les métaphores, les comparaisons, les personnifications et les hyperboles.'
            ],
            [
              'Le ton',
              'L’attitude ou l’atmosphère transmise par le texte.',
              'Il peut être ironique, nostalgique, mélancolique, critique ou dramatique.'
            ],
            [
              'Le sous-entendu',
              'Une information suggérée, mais qui n’est pas déclarée directement.',
              'Observez le contexte et les indices qui permettent d’arriver à une interprétation.'
            ]
        ]
      },
      { type: 'heading', text: '3. Exemple pratique : interpréter un extrait littéraire' },
      {
        type: 'paragraph',
        text:
          'Lisez l’extrait fictif ci-dessous, inspiré de la littérature francophone contemporaine du Québec. N’essayez pas de traduire chaque mot. ' +
          'Commencez par identifier ce qui se passe littéralement, puis cherchez le sens symbolique.'
      },
      {
        type: 'paragraph',
        text:
          'Chaque matin, la ville ouvrait ses paupières de verre. Je traversais les rues sans chercher d’adresse ; je voulais seulement retarder le moment de rentrer. ' +
          'Depuis le départ de mon frère, la maison était devenue trop silencieuse. ' +
          'Pourtant, je continuais d’allumer deux lampes, comme si la lumière pouvait empêcher son absence de grandir.'
      },
      {
        type: 'paragraph',
        text: 'Interprétation littérale : le narrateur marche dans la ville, évite de rentrer chez lui et continue d’allumer deux lampes depuis le départ de son frère.'
      },
      {
        type: 'paragraph',
        text:
          'Interprétation symbolique : la ville reçoit des caractéristiques humaines grâce à une personnification. ' +
          'La lumière peut représenter la mémoire, l’espoir ou une tentative de préserver la présence du frère. Le silence suggère la solitude et la souffrance.'
      },
      { type: 'paragraph', text: 'Thème principal : l’absence, la mémoire et la difficulté d’accepter un changement dans sa vie.' },
      { type: 'heading', text: '4. Les figures de style et leurs effets' },
      {
        type: 'table',
        headers: ['Figure de style', 'Exemple', 'Signification et effet'],
        rows: [
            [
              'La métaphore',
              'Cette femme est un rayon de soleil.',
              'Elle associe deux réalités sans utiliser de terme comparatif explicite. Elle peut transmettre de la joie ou de l’espoir.'
            ],
            [
              'La comparaison',
              'Il est courageux comme un lion.',
              'Elle rapproche deux réalités en utilisant des éléments comparatifs comme comme.'
            ],
            [
              'La personnification',
              'Le vent murmurait à travers les arbres.',
              'Elle attribue des caractéristiques humaines à des éléments non humains.'
            ],
            [
              'L’hyperbole',
              'Je t’ai attendu pendant une éternité.',
              'Elle exagère une caractéristique ou une situation afin de produire un effet d’intensité.'
            ],
            [
              'L’ironie',
              'Quelle merveilleuse journée ! Il pleut depuis ce matin.',
              'Elle exprime une idée différente ou contraire au sens littéral, généralement pour critiquer ou provoquer un effet humoristique.'
            ],
            [
              'L’antithèse',
              'Il cherchait la lumière au milieu des ténèbres.',
              'Elle rapproche des idées opposées pour mettre en évidence un contraste.'
            ]
        ]
      },
      { type: 'heading', text: '5. Comment reconnaître les significations implicites' },
      {
        type: 'list',
        items: [
          
            'Observez les mots et les images qui se répètent. ' +
            'La répétition des références à la nuit, au silence et à l’obscurité peut construire un champ lexical associé à la solitude.',
          'Faites attention aux contradictions. Un personnage peut affirmer qu’il est heureux alors que ses comportements révèlent de la tristesse.',
          'Analysez le contexte des phrases. Un mot peut acquérir un sens symbolique différent de son sens habituel.',
          'Observez l’évolution du personnage. Les changements de comportement, de pensées et d’attitudes peuvent révéler des conflits intérieurs.',
          'Distinguez ce que le narrateur affirme de ce que le lecteur peut déduire. Une interprétation doit s’appuyer sur des indices présents dans le texte.',
          'Cherchez à comprendre l’effet des choix de l’auteur : pourquoi utilise-t-il une image, une comparaison ou une répétition particulière ?'
        ]
      },
      { type: 'heading', text: '6. Pièges fréquents pour les lusophones' },
      {
        type: 'list',
        items: [
          
            'Interpréter les métaphores littéralement. Lorsqu’un texte affirme que « Le temps dévore tout. ' +
            '», il ne décrit pas une action physique, mais le passage inévitable du temps.',
          'Confondre le narrateur et l’auteur. Un récit à la première personne ne signifie pas nécessairement que l’écrivain raconte sa propre expérience.',
          'Confondre le sujet et le thème. Un texte peut parler d’un voyage tout en explorant des questions plus profondes comme la liberté, la maturité ou la perte.',
          'Interpréter toute ironie comme une affirmation sincère. Le contexte peut indiquer que l’auteur critique précisément ce qu’il semble valoriser.',
          
            'Considérer toutes les interprétations possibles comme correctes. ' +
            'Une lecture peut être intéressante, mais elle doit être justifiée par les mots et les événements du texte.',
          'Ignorer les changements de ton. Un texte peut commencer dans une atmosphère paisible et se terminer par une critique ou une réflexion pessimiste.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à la traduction mot à mot',
        text:
          'Une erreur fréquente chez les lusophones consiste à interpréter les images littéraires uniquement selon le sens littéral des mots. ' +
          'Faites également attention aux ressemblances trompeuses : « sensible » ne signifie pas nécessairement « sensé » ; pour exprimer l’idée d’une personne raisonnable, le français utilise « sensé ». ' +
          'Dans les textes abstraits, cherchez à comprendre la phrase complète, l’intention et le contexte avant de choisir une interprétation.'
      },
      { type: 'heading', text: '7. Stratégie pour le TEF Canada et le TCF Canada' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Trouvez des indices pour justifier vos interprétations',
        text:
          'Dans les questions de compréhension avancée, une réponse peut exiger que vous déduisiez des sentiments, des intentions, des critiques ou des messages implicites. ' +
          'Lisez l’extrait en entier, identifiez le ton et cherchez les éléments qui justifient votre interprétation. ' +
          'Ne choisissez pas une réponse simplement parce qu’elle semble intéressante sur le plan philosophique. Elle doit correspondre au texte. ' +
          'Entraînez-vous particulièrement à répondre à des questions comme « Quelle est l’idée sous-jacente ? », « Que cherche à exprimer l’auteur ? ' +
          '» et « Quelle est l’attitude du narrateur ? ». ' +
          'Ces compétences approfondissent votre compréhension des textes complexes, même si les examens comportent également des textes fonctionnels, informatifs et argumentatifs. ' +
          'Il n’est pas nécessaire de produire une analyse littéraire formelle : l’objectif est de comprendre le texte et de justifier votre interprétation.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le point de vue du narrateur – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/le-point-de-vue-narratif-f1647'
    },
    {
      title: 'La métaphore (figure de style) – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-metaphore-f1370'
    },
    {
      title: 'Les procédés d’écriture – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/les-procedes-litteraires-f1072'
    }
  ]
}

export default content
