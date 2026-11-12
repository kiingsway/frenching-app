import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-imperativo',

  pt: {
    title: 'Imperativo em francês',
    summary:
      'Aprenda a dar ordens, fazer pedidos, oferecer conselhos e formular instruções utilizando o imperativo presente. ' +
      'Entenda como conjugar os verbos, quando retirar o -s final e como posicionar os pronomes nas formas afirmativas e negativas.',
    blocks: [
      { type: 'heading', text: '1. Quando usar o imperativo' },
      {
        type: 'paragraph',
        text:
          'O imperativo é utilizado para dar ordens, fazer pedidos, oferecer conselhos, dar instruções e expressar convites ou proibições. ' +
          'Ele possui três formas de conjugação: segunda pessoa do singular, primeira pessoa do plural e segunda pessoa do plural. ' +
          'O pronome sujeito não aparece antes do verbo, pois a própria conjugação indica a quem a mensagem se dirige. ' +
          'A forma singular é usada com pessoas próximas, a primeira pessoa do plural inclui quem está falando e a segunda pessoa do plural pode indicar várias pessoas ou uma forma educada de tratamento.'
      },
      { type: 'heading', text: '2. Como formar o imperativo presente' },
      {
        type: 'paragraph',
        text:
          'Na maioria dos verbos, utilize as formas correspondentes do presente do indicativo, mas retire o pronome sujeito. ' +
          'A principal diferença está nos verbos regulares terminados em -er: na forma singular, eles perdem o -s final. ' +
          'Nos demais grupos, a forma singular geralmente mantém o -s. ' +
          'Há exceções: [[offrir|oferecer]], [[ouvrir|abrir]], [[couvrir|cobrir]], [[cueillir|colher]] e [[souffrir|sofrer]] também perdem o -s, como em [[Ouvre la fenêtre.|Abra a janela.]]'
      },
      {
        type: 'table',
        headers: ['Verbo no infinitivo', 'Singular informal', 'Primeira pessoa do plural', 'Plural ou tratamento formal'],
        rows: [
            [
              '[[parler|falar]]',
              '[[parle|fala]]',
              '[[parlons|falemos]]',
              '[[parlez|falem / fale]]'
            ],
            [
              '[[finir|terminar]]',
              '[[finis|termina]]',
              '[[finissons|terminemos]]',
              '[[finissez|terminem / termine]]'
            ],
            [
              '[[prendre|pegar]]',
              '[[prends|pega]]',
              '[[prenons|peguemos]]',
              '[[prenez|peguem / pegue]]'
            ]
        ]
      },
      {
        type: 'list',
        items: [
          'SER e ESTAR: [[Sois, soyons, soyez.|Seja, sejamos, sejam / seja.]]',
          'TER: [[Aie, ayons, ayez.|Tenha, tenhamos, tenham / tenha.]]',
          'SABER: [[Sache, sachons, sachez.|Saiba, saibamos, saibam / saiba.]]',
          'QUERER, em uma solicitação educada: [[Veuillez patienter.|Queira aguardar.]]',
          'IR: [[Va !|Vá!]] é a forma singular. Antes de [[y|lá]], utiliza-se [[Vas-y !|Vá lá!]].'
        ]
      },
      { type: 'heading', text: '3. Exemplos em situações cotidianas' },
      {
        type: 'list',
        items: [
          'Pedido informal: [[Ferme la porte, s’il te plaît.|Feche a porta, por favor.]]',
          'Pedido educado: [[Prenez votre temps.|Não tenha pressa.]]',
          'Sugestão incluindo quem fala: [[Allons-y !|Vamos lá!]]',
          'Instrução em um estabelecimento: [[Ne touchez pas à cet appareil.|Não toque neste aparelho.]]',
          'Conselho: [[Lève-toi tôt.|Levante-se cedo.]]',
          'Proibição: [[Ne te lève pas trop tôt.|Não se levante tão cedo.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Posição dos pronomes: nas frases afirmativas, o pronome complemento aparece depois do verbo, ligado por hífen: [[Prends-le.|Pegue-o.]] ' +
          'Nas negativas, ele aparece antes do verbo: [[Ne le prends pas.|Não o pegue.]] Com verbos pronominais, compare [[Lève-toi.|Levante-se.]] ' +
          'e [[Ne te lève pas.|Não se levante.]]'
      },
      { type: 'heading', text: '4. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda o presente com o imperativo',
        text:
          'Um erro comum é manter o -s da conjugação do presente nos verbos regulares terminados em -er ou conservar o pronome sujeito. A forma [[Tu parles !|Você fala!]] ' +
          'é uma afirmação, não o imperativo. Para dar uma ordem, utilize [[Parle !|Fale!]] Entretanto, antes dos pronomes [[y|lá]] ' +
          'e [[en|disso / alguns]], o -s é acrescentado por razões de pronúncia: [[Vas-y !|Vá lá!]] e [[Manges-en !|Coma um pouco!]] ' +
          'Quando esses pronomes são complemento de um infinitivo que vem depois, não há -s: [[Va en acheter.|Vá comprar.]]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que observar na prova',
        text:
          'Saiba reconhecer a intenção de uma frase: ordem, pedido, conselho, instrução ou proibição. ' +
          'Pratique especialmente a diferença entre o tratamento informal e o formal, utilizando as formas adequadas a cada interlocutor. ' +
          'Também é importante compreender a posição dos pronomes e a negação para interpretar corretamente instruções e formular frases naturais.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As regras de conjugação, as três pessoas do imperativo, as exceções, os usos e a posição dos pronomes são confirmados pelas três páginas do OQLF listadas. ' +
          'As recomendações sobre como aplicar esse conteúdo nas provas TEF Canada e TCF Canada são sugestões de preparação, não exigências específicas de uma tarefa nem garantia de que o imperativo será cobrado.'
      }
    ]
  },

  fr: {
    title: 'L’impératif en français',
    summary:
      'Apprenez à donner des ordres, à faire des demandes, à proposer des conseils et à formuler des instructions en utilisant l’impératif présent. ' +
      'Découvrez comment conjuguer les verbes, quand supprimer le -s final et comment placer les pronoms dans les formes affirmatives et négatives.',
    blocks: [
      { type: 'heading', text: '1. Quand utiliser l’impératif' },
      {
        type: 'paragraph',
        text:
          'L’impératif sert à donner des ordres, à faire des demandes, à proposer des conseils, à donner des instructions et à exprimer des invitations ou des interdictions. ' +
          'Il comporte trois formes de conjugaison : la deuxième personne du singulier, la première personne du pluriel et la deuxième personne du pluriel. ' +
          'Le pronom sujet ne figure pas devant le verbe, puisque la conjugaison indique elle-même à qui le message s’adresse. ' +
          'La forme singulière s’utilise avec les personnes proches, la première personne du pluriel inclut la personne qui parle et la deuxième personne du pluriel peut désigner plusieurs personnes ou exprimer la politesse.'
      },
      { type: 'heading', text: '2. Comment former l’impératif présent' },
      {
        type: 'paragraph',
        text:
          'Pour la plupart des verbes, utilisez les formes correspondantes du présent de l’indicatif, mais supprimez le pronom sujet. ' +
          'La principale différence concerne les verbes réguliers terminés en -er : à la deuxième personne du singulier, ils perdent leur -s final. ' +
          'Pour les autres groupes, la forme singulière conserve généralement son -s. ' +
          'Il y a des exceptions : offrir, ouvrir, couvrir, cueillir et souffrir perdent aussi leur -s, comme dans « Ouvre la fenêtre. »'
      },
      {
        type: 'table',
        headers: ['Verbe à l’infinitif', 'Deuxième personne du singulier', 'Première personne du pluriel', 'Deuxième personne du pluriel'],
        rows: [
            [
              'parler',
              'parle',
              'parlons',
              'parlez'
            ],
            [
              'finir',
              'finis',
              'finissons',
              'finissez'
            ],
            [
              'prendre',
              'prends',
              'prenons',
              'prenez'
            ]
        ]
      },
      {
        type: 'list',
        items: [
          'ÊTRE : sois, soyons, soyez.',
          'AVOIR : aie, ayons, ayez.',
          'SAVOIR : sache, sachons, sachez.',
          'VOULOIR, dans une demande polie : Veuillez patienter.',
          'ALLER : va est la forme singulière. Devant le pronom y, on utilise Vas-y !'
        ]
      },
      { type: 'heading', text: '3. Exemples dans des situations quotidiennes' },
      {
        type: 'list',
        items: [
          'Demande informelle : Ferme la porte, s’il te plaît.',
          'Demande polie : Prenez votre temps.',
          'Suggestion qui inclut la personne qui parle : Allons-y !',
          'Consigne dans un établissement : Ne touchez pas à cet appareil.',
          'Conseil : Lève-toi tôt.',
          'Interdiction : Ne te lève pas trop tôt.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Position des pronoms : dans les phrases affirmatives, le pronom complément se place après le verbe et se rattache à celui-ci par un trait d’union : Prends-le. ' +
          'Dans les phrases négatives, il se place avant le verbe : Ne le prends pas. Avec les verbes pronominaux, comparez Lève-toi et Ne te lève pas.'
      },
      { type: 'heading', text: '4. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas le présent et l’impératif',
        text:
          'Une erreur fréquente consiste à conserver le -s de la conjugaison au présent avec les verbes réguliers terminés en -er ou à garder le pronom sujet. ' +
          'La forme « Tu parles ! » exprime une affirmation et non un ordre. Pour donner un ordre, utilisez « Parle ! ». ' +
          'Toutefois, devant les pronoms y et en, on ajoute un -s pour des raisons de prononciation : « Vas-y ! » et « Manges-en ! ». ' +
          'Quand ces pronoms sont le complément d’un infinitif qui suit, il n’y a pas de -s : « Va en acheter. »'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut savoir pour l’examen',
        text:
          'Apprenez à reconnaître l’intention d’une phrase : ordre, demande, conseil, instruction ou interdiction. ' +
          'Entraînez-vous particulièrement à distinguer le tutoiement du vouvoiement et à utiliser les formes appropriées selon votre interlocuteur. ' +
          'Il est également important de comprendre la position des pronoms et la négation afin d’interpréter correctement les consignes et de formuler des phrases naturelles.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les règles de conjugaison, les trois personnes de l’impératif, les exceptions, les emplois et la position des pronoms sont confirmés par les trois pages de l’OQLF indiquées. ' +
          'Les recommandations concernant l’utilisation de ces connaissances aux épreuves du TEF Canada et du TCF Canada sont des conseils de préparation, et non des exigences propres à une tâche ni la garantie que l’impératif sera évalué.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – Formas e conjugação do imperativo',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24203/la-grammaire/le-verbe/conjugaison/formes-de-limperatif'
    },
    {
      title: 'OQLF – Usos e funções do imperativo',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24202/la-grammaire/le-verbe/modes/imperatif/generalites-sur-limperatif'
    },
    {
      title: 'OQLF – Posição dos pronomes e hífen com o imperativo',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24206/la-grammaire/les-pronoms/pronoms-personnels/pronoms-personnels-employes-avec-un-verbe-a-limperatif'
    }
  ]
}

export default content
