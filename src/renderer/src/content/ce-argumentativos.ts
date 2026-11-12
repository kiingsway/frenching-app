import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ce-argumentativos',

  pt: {
    title: 'Textos argumentativos e editoriais: identificar opiniões e argumentos',
    summary:
      'Aprenda a interpretar artigos de opinião e editoriais, identificando a tese defendida pelo autor, os argumentos apresentados e as possíveis opiniões contrárias. ' +
      'Você também vai reconhecer conectores lógicos, estratégias de persuasão, concessões e refutações, desenvolvendo a leitura crítica necessária para alcançar o nível B2.',
    blocks: [
      { type: 'heading', text: '1. Compreenda o objetivo dos textos argumentativos' },
      {
        type: 'paragraph',
        text:
          'Um texto argumentativo apresenta um posicionamento sobre determinado assunto e procura convencer o leitor por meio de argumentos, exemplos, explicações e evidências. ' +
          'Os editoriais e artigos de opinião são gêneros comuns desse tipo de texto. ' +
          'No Québec, você pode encontrar esse conteúdo em jornais como La Presse, Le Devoir e em publicações de Radio-Canada. ' +
          'Diferentemente de uma notícia puramente informativa, um editorial normalmente apresenta uma posição sobre um problema social, político, econômico ou cultural. ' +
          'Seu objetivo na compreensão escrita é identificar o que o autor defende, como justifica sua posição e quais ideias procura questionar.'
      },

      { type: 'heading', text: '2. Identifique a estrutura da argumentação' },
      {
        type: 'table',
        headers: ['Conceito em francês', 'Significado', 'O que procurar no texto'],
        rows: [
          [
            '[[Le sujet|O assunto]]',
            'O tema geral discutido.',
            'Qual é o problema ou a questão apresentada?'
          ],
          [
            '[[La thèse|A tese]]',
            'A posição principal defendida pelo autor.',
            'Qual opinião o autor deseja sustentar?'
          ],
          [
            '[[Les arguments|Os argumentos]]',
            'As razões utilizadas para defender a tese.',
            'Por que o autor acredita nisso?'
          ],
          [
            '[[Les fondements|Os fundamentos ou evidências]]',
            'Dados, exemplos, pesquisas e fatos que sustentam os argumentos.',
            'Que elementos tornam o argumento convincente?'
          ],
          [
            '[[Le contre-argument|O contra-argumento]]',
            'Uma razão que sustenta uma posição contrária à tese.',
            'Qual seria a principal objeção à opinião defendida?'
          ],
          [
            '[[La concession|A concessão]]',
            'O reconhecimento de que uma ideia contrária pode ter alguma validade.',
            'O autor admite parcialmente o ponto de vista oposto?'
          ],
          [
            '[[La réfutation|A refutação]]',
            'A resposta utilizada para contestar um argumento contrário.',
            'Como o autor demonstra que a objeção não invalida sua tese?'
          ],
          [
            '[[La conclusion|A conclusão]]',
            'A síntese da argumentação e, frequentemente, a reafirmação da tese.',
            'A que resultado ou recomendação o autor chega?'
          ]
        ]
      },

      { type: 'heading', text: '3. Reconheça os conectores argumentativos' },
      {
        type: 'paragraph',
        text:
          'Os conectores indicam a relação lógica entre as ideias. ' +
          'Eles ajudam a identificar se o autor está acrescentando uma informação, apresentando uma oposição, justificando uma afirmação ou chegando a uma conclusão. ' +
          'Preste atenção especial a eles, pois uma pequena palavra pode mudar completamente a interpretação de um argumento.'
      },
      {
        type: 'table',
        headers: ['Relação lógica', 'Expressões em francês', 'Função'],
        rows: [
          [
            'Adição',
            '[[de plus|além disso]], [[en outre|ademais]], [[également|igualmente]]',
            'Acrescentar informações ou novos argumentos.'
          ],
          [
            'Causa',
            '[[puisque|já que]], [[étant donné que|considerando que]], [[en raison de|devido a]]',
            'Apresentar a razão de uma afirmação.'
          ],
          [
            'Consequência',
            '[[donc|portanto]], [[par conséquent|consequentemente]], [[ainsi|assim]]',
            'Apresentar o resultado de uma ideia.'
          ],
          [
            'Oposição',
            '[[cependant|no entanto]], [[en revanche|em contrapartida]], [[toutefois|todavia]]',
            'Introduzir uma ideia diferente ou contrária.'
          ],
          [
            'Concessão',
            '[[certes|é verdade que]], [[bien que|embora]], [[malgré|apesar de]]',
            'Reconhecer uma circunstância contrária sem abandonar a tese.'
          ],
          [
            'Exemplificação',
            '[[par exemple|por exemplo]], [[notamment|especialmente]], [[en particulier|em particular]]',
            'Ilustrar ou especificar um argumento.'
          ],
          [
            'Conclusão',
            '[[en somme|em resumo]], [[en définitive|em definitivo]], [[pour conclure|para concluir]]',
            'Encerrar o raciocínio e sintetizar a posição.'
          ]
        ]
      },

      { type: 'heading', text: '4. Exemplo prático: interpretando um editorial' },
      {
        type: 'paragraph',
        text:
          'Leia o editorial fictício abaixo, inspirado em debates sobre mobilidade urbana no Québec. ' +
          'Observe como o autor apresenta sua opinião, reconhece uma preocupação contrária e utiliza argumentos para defender sua posição.'
      },
      {
        type: 'paragraph',
        text: '[[Faut-il investir davantage dans les pistes cyclables à Montréal ?|É necessário investir mais em ciclovias em Montreal?]]'
      },
      {
        type: 'paragraph',
        text:
          '[[Chaque printemps, le débat sur les pistes cyclables revient dans l’actualité. ' +
          'À mon avis, la Ville devrait poursuivre leur développement, car elles rendent les déplacements plus sécuritaires et réduisent la dépendance à l’automobile. ' +
          'Certes, certains commerçants craignent la perte de places de stationnement. ' +
          'Toutefois, cette préoccupation ne devrait pas freiner tous les projets : des aménagements bien conçus peuvent faciliter la livraison et l’accès aux commerces. ' +
          'De plus, un réseau continu encourage davantage de personnes à se déplacer à vélo. ' +
          'En somme, investir dans ces infrastructures n’est pas une dépense superflue, mais un choix qui améliore la qualité de vie collective.|' +
          'A cada primavera, o debate sobre as ciclovias volta à atualidade. ' +
          'Na minha opinião, a cidade deveria continuar desenvolvendo essas estruturas, pois elas tornam os deslocamentos mais seguros e reduzem a dependência do automóvel. ' +
          'É verdade que alguns comerciantes temem perder vagas de estacionamento. ' +
          'No entanto, essa preocupação não deveria impedir todos os projetos: instalações bem planejadas podem facilitar as entregas e o acesso aos estabelecimentos comerciais. ' +
          'Além disso, uma rede contínua incentiva mais pessoas a se deslocarem de bicicleta. ' +
          'Em resumo, investir nessas infraestruturas não é uma despesa supérflua, mas uma escolha que melhora a qualidade de vida coletiva.]]'
      },
      {
        type: 'table',
        headers: ['Trecho identificado', 'Função argumentativa', 'Interpretação'],
        rows: [
          [
            '[[À mon avis, la Ville devrait poursuivre leur développement.|Na minha opinião, a cidade deveria continuar desenvolvendo essas estruturas.]]',
            'Tese',
            'O autor defende a expansão das ciclovias.'
          ],
          [
            '[[Elles rendent les déplacements plus sécuritaires.|Elas tornam os deslocamentos mais seguros.]]',
            'Argumento',
            'As ciclovias contribuem para a segurança.'
          ],
          [
            '[[Certains commerçants craignent la perte de places de stationnement.|Alguns comerciantes temem perder vagas de estacionamento.]]',
            'Contra-argumento',
            'Existe uma preocupação com os efeitos sobre os estabelecimentos comerciais.'
          ],
          [
            '[[Toutefois, cette préoccupation ne devrait pas freiner tous les projets.|No entanto, essa preocupação não deveria impedir todos os projetos.]]',
            'Refutação',
            'O autor reconhece a preocupação, mas rejeita a ideia de interromper os projetos.'
          ],
          [
            '[[En somme, investir dans ces infrastructures...|Em resumo, investir nessas infraestruturas...]]',
            'Conclusão',
            'O autor reafirma sua posição favorável ao investimento.'
          ]
        ]
      },

      { type: 'heading', text: '5. Diferencie a intenção e a posição do autor' },
      {
        type: 'paragraph',
        text:
          'Nem todo texto argumentativo apresenta uma opinião de maneira explícita. ' +
          'Às vezes, o posicionamento é revelado por adjetivos, escolhas de palavras, comparações, exemplos e críticas. ' +
          'A intenção também pode variar: o autor pode procurar convencer, denunciar um problema, questionar uma decisão ou defender uma mudança. ' +
          'Observe a diferença entre apresentar uma informação, expressar uma opinião e tentar influenciar o leitor.'
      },
      {
        type: 'table',
        headers: ['Intenção', 'Expressões em francês', 'Indícios no texto'],
        rows: [
          [
            'Defender uma posição',
            '[[soutenir une idée|defender uma ideia]], [[prendre position|tomar posição]]',
            'O autor apresenta argumentos favoráveis a uma proposta.'
          ],
          [
            'Questionar',
            '[[remettre en question|questionar]], [[contester|contestar]]',
            'O autor coloca em dúvida uma ideia ou decisão.'
          ],
          [
            'Denunciar',
            '[[dénoncer|denunciar]], [[déplorer|lamentar]]',
            'O autor destaca uma situação considerada problemática.'
          ],
          [
            'Convencer',
            '[[convaincre|convencer]], [[inciter à|incentivar a]]',
            'O autor procura influenciar o comportamento ou a opinião do leitor.'
          ],
          [
            'Propor uma solução',
            '[[proposer une mesure|propor uma medida]], [[préconiser un changement|recomendar uma mudança]]',
            'O autor apresenta uma ação para resolver o problema.'
          ],
          [
            'Criticar uma política',
            '[[s’opposer à une décision|opor-se a uma decisão]], [[remettre en cause une politique|questionar uma política]]',
            'O autor aponta consequências negativas de uma decisão.'
          ]
        ]
      },

      { type: 'heading', text: '6. Armadilhas comuns na compreensão' },
      {
        type: 'list',
        items: [
          'Confundir opinião com fato: [[Je considère que cette mesure est injuste.|Considero que essa medida é injusta.]] apresenta uma opinião, não uma informação comprovada.',
          'Confundir tese com argumento: a tese é a posição defendida; o argumento é a razão utilizada para justificá-la.',
          'Interpretar uma concessão como abandono da tese. Quando o autor reconhece que uma crítica é válida, isso não significa necessariamente que concorda com a posição contrária.',
          'Confundir um exemplo com uma prova definitiva. Um caso isolado pode ilustrar um argumento, mas não necessariamente demonstra que ele é verdadeiro em todas as situações.',
          'Ignorar os conectores de oposição. Palavras como [[cependant|no entanto]] e [[néanmoins|mesmo assim]] podem introduzir uma ressalva que muda a direção do raciocínio.',
          'Acreditar que todo editorial apresenta os dois lados com o mesmo peso. O autor pode mencionar opiniões contrárias apenas para contestá-las.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção aos falsos cognatos e conectores',
        text:
          'Brasileiros podem confundir [[pourtant|no entanto]] com portanto. Para expressar a ideia de portanto, utilize [[donc|portanto]] ou [[par conséquent|consequentemente]]. ' +
          'Outro cuidado importante: [[prétendre|alegar ou afirmar]] não significa pretender, no sentido de ter a intenção de fazer algo. Para isso, o francês utiliza [[avoir l’intention de|ter a intenção de]]. ' +
          'Em textos argumentativos, essas diferenças podem alterar a interpretação da posição do autor e da relação entre os argumentos.'
      },

      { type: 'heading', text: '7. Estratégia para o TEF Canada e o TCF Canada' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Encontre a tese antes de analisar as alternativas',
        text:
          'Utilize esta sequência: primeiro, identifique o assunto do texto; depois, descubra qual posição o autor defende; em seguida, localize os argumentos, as evidências e as opiniões contrárias; por último, analise os conectores que relacionam essas ideias. ' +
          'Nas questões de múltipla escolha, preste atenção a alternativas que apresentam uma opinião verdadeira, mas que não corresponde à posição do autor. ' +
          'Também verifique se a questão pergunta sobre a tese, a intenção, um argumento específico ou a conclusão. ' +
          'No TEF Canada, a compreensão escrita possui 40 questões em 60 minutos; no TCF Canada, são 39 questões em 60 minutos. ' +
          'Nos dois exames, a interpretação precisa das relações entre ideias é mais importante do que simplesmente reconhecer palavras isoladas.'
      }
    ]
  },

  fr: {
    title: 'Textes argumentatifs et éditoriaux : identifier les opinions et les arguments',
    summary:
      'Apprenez à interpréter des articles d’opinion et des éditoriaux en identifiant la thèse défendue par l’auteur, les arguments présentés et les éventuelles opinions opposées. ' +
      'Vous apprendrez également à reconnaître les connecteurs logiques, les stratégies de persuasion, les concessions et les réfutations, afin de développer les compétences de lecture critique nécessaires pour atteindre le niveau B2.',
    blocks: [
      { type: 'heading', text: '1. Comprendre l’objectif des textes argumentatifs' },
      {
        type: 'paragraph',
        text:
          'Un texte argumentatif présente une prise de position sur un sujet donné et cherche à convaincre le lecteur à l’aide d’arguments, d’exemples, d’explications et de preuves. ' +
          'Les éditoriaux et les articles d’opinion sont des genres courants de ce type de texte. ' +
          'Au Québec, vous pouvez trouver ce contenu dans des journaux comme La Presse, Le Devoir et dans des publications de Radio-Canada. ' +
          'Contrairement à une nouvelle purement informative, un éditorial présente normalement une position sur un problème social, politique, économique ou culturel. ' +
          'En compréhension écrite, votre objectif est d’identifier ce que l’auteur défend, comment il justifie sa position et quelles idées il cherche à remettre en question.'
      },

      { type: 'heading', text: '2. Identifier la structure de l’argumentation' },
      {
        type: 'table',
        headers: ['Concept', 'Signification', 'Éléments à repérer'],
        rows: [
          ['Le sujet', 'Le thème général abordé.', 'Quel est le problème ou la question présentée ?'],
          [
            'La thèse',
            'La position principale défendue par l’auteur.',
            'Quelle opinion l’auteur cherche-t-il à défendre ?'
          ],
          [
            'Les arguments',
            'Les raisons utilisées pour soutenir la thèse.',
            'Pourquoi l’auteur pense-t-il ainsi ?'
          ],
          [
            'Les fondements',
            'Les données, les exemples, les recherches et les faits qui appuient les arguments.',
            'Quels éléments rendent l’argument convaincant ?'
          ],
          [
            'Le contre-argument',
            'Une raison qui soutient une position opposée à la thèse.',
            'Quelle serait la principale objection à l’opinion défendue ?'
          ],
          [
            'La concession',
            'La reconnaissance du fait qu’une idée opposée peut avoir une certaine validité.',
            'L’auteur reconnaît-il partiellement le point de vue opposé ?'
          ],
          [
            'La réfutation',
            'La réponse utilisée pour contester un argument opposé.',
            'Comment l’auteur démontre-t-il que l’objection n’invalide pas sa thèse ?'
          ],
          [
            'La conclusion',
            'La synthèse de l’argumentation et, souvent, la réaffirmation de la thèse.',
            'À quel résultat ou à quelle recommandation l’auteur arrive-t-il ?'
          ]
        ]
      },

      { type: 'heading', text: '3. Reconnaître les connecteurs argumentatifs' },
      {
        type: 'paragraph',
        text:
          'Les connecteurs indiquent la relation logique entre les idées. ' +
          'Ils permettent de comprendre si l’auteur ajoute une information, présente une opposition, justifie une affirmation ou arrive à une conclusion. ' +
          'Portez une attention particulière à ces éléments, car un seul mot peut complètement modifier l’interprétation d’un argument.'
      },
      {
        type: 'table',
        headers: ['Relation logique', 'Connecteurs', 'Fonction'],
        rows: [
          ['Addition', 'de plus, en outre, également', 'Ajouter des informations ou de nouveaux arguments.'],
          ['Cause', 'puisque, étant donné que, en raison de', 'Présenter la raison d’une affirmation.'],
          ['Conséquence', 'donc, par conséquent, ainsi', 'Présenter le résultat d’une idée.'],
          [
            'Opposition',
            'cependant, en revanche, toutefois',
            'Introduire une idée différente ou contraire.'
          ],
          [
            'Concession',
            'certes, bien que, malgré',
            'Reconnaître une circonstance opposée sans abandonner sa thèse.'
          ],
          [
            'Illustration',
            'par exemple, notamment, en particulier',
            'Illustrer ou préciser un argument.'
          ],
          [
            'Conclusion',
            'en somme, en définitive, pour conclure',
            'Terminer le raisonnement et résumer la position.'
          ]
        ]
      },

      { type: 'heading', text: '4. Exemple pratique : interpréter un éditorial' },
      {
        type: 'paragraph',
        text:
          'Lisez l’éditorial fictif ci-dessous, inspiré des débats sur la mobilité urbaine au Québec. ' +
          'Observez comment l’auteur présente son opinion, reconnaît une préoccupation opposée et utilise des arguments pour défendre sa position.'
      },
      {
        type: 'paragraph',
        text: 'Faut-il investir davantage dans les pistes cyclables à Montréal ?'
      },
      {
        type: 'paragraph',
        text:
          'Chaque printemps, le débat sur les pistes cyclables revient dans l’actualité. ' +
          'À mon avis, la Ville devrait poursuivre leur développement, car elles rendent les déplacements plus sécuritaires et réduisent la dépendance à l’automobile. ' +
          'Certes, certains commerçants craignent la perte de places de stationnement. ' +
          'Toutefois, cette préoccupation ne devrait pas freiner tous les projets : des aménagements bien conçus peuvent faciliter la livraison et l’accès aux commerces. ' +
          'De plus, un réseau continu encourage davantage de personnes à se déplacer à vélo. ' +
          'En somme, investir dans ces infrastructures n’est pas une dépense superflue, mais un choix qui améliore la qualité de vie collective.'
      },
      {
        type: 'table',
        headers: ['Extrait identifié', 'Fonction argumentative', 'Interprétation'],
        rows: [
          [
            'À mon avis, la Ville devrait poursuivre leur développement.',
            'Thèse',
            'L’auteur défend le développement des pistes cyclables.'
          ],
          [
            'Elles rendent les déplacements plus sécuritaires.',
            'Argument',
            'Les pistes cyclables contribuent à la sécurité.'
          ],
          [
            'Certains commerçants craignent la perte de places de stationnement.',
            'Contre-argument',
            'Il existe une préoccupation concernant les effets sur les commerces.'
          ],
          [
            'Toutefois, cette préoccupation ne devrait pas freiner tous les projets.',
            'Réfutation',
            'L’auteur reconnaît cette préoccupation, mais rejette l’idée d’interrompre les projets.'
          ],
          [
            'En somme, investir dans ces infrastructures...',
            'Conclusion',
            'L’auteur réaffirme sa position favorable aux investissements.'
          ]
        ]
      },

      { type: 'heading', text: '5. Distinguer l’intention et la position de l’auteur' },
      {
        type: 'paragraph',
        text:
          'Tous les textes argumentatifs ne présentent pas une opinion de manière explicite. ' +
          'Parfois, la position de l’auteur se révèle à travers les adjectifs, les choix de mots, les comparaisons, les exemples et les critiques. ' +
          'L’intention peut également varier : l’auteur peut chercher à convaincre, à dénoncer un problème, à remettre en question une décision ou à défendre un changement. ' +
          'Faites la différence entre présenter une information, exprimer une opinion et tenter d’influencer le lecteur.'
      },
      {
        type: 'table',
        headers: ['Intention', 'Expressions associées', 'Indices dans le texte'],
        rows: [
          [
            'Défendre une position',
            'soutenir une idée, prendre position',
            'L’auteur présente des arguments favorables à une proposition.'
          ],
          [
            'Remettre en question',
            'remettre en question, contester',
            'L’auteur doute d’une idée ou d’une décision.'
          ],
          [
            'Dénoncer',
            'dénoncer, déplorer',
            'L’auteur souligne une situation considérée comme problématique.'
          ],
          [
            'Convaincre',
            'convaincre, inciter à',
            'L’auteur cherche à influencer le comportement ou l’opinion du lecteur.'
          ],
          [
            'Proposer une solution',
            'proposer une mesure, préconiser un changement',
            'L’auteur présente une action pour résoudre le problème.'
          ],
          [
            'Critiquer une politique',
            's’opposer à une décision, remettre en cause une politique',
            'L’auteur souligne les conséquences négatives d’une décision.'
          ]
        ]
      },

      { type: 'heading', text: '6. Pièges fréquents en compréhension écrite' },
      {
        type: 'list',
        items: [
          'Confondre une opinion et un fait : « Je considère que cette mesure est injuste. » présente une opinion, et non une information prouvée.',
          'Confondre la thèse et l’argument : la thèse est la position défendue, tandis que l’argument est la raison utilisée pour la justifier.',
          'Interpréter une concession comme un abandon de la thèse. Lorsque l’auteur reconnaît qu’une critique est valable, cela ne signifie pas nécessairement qu’il partage la position opposée.',
          'Confondre un exemple avec une preuve définitive. Un cas isolé peut illustrer un argument, mais ne démontre pas nécessairement qu’il est vrai dans toutes les situations.',
          'Ignorer les connecteurs d’opposition. Des mots comme « cependant » et « néanmoins » peuvent introduire une réserve qui modifie la direction du raisonnement.',
          'Croire que tous les éditoriaux présentent les deux points de vue avec la même importance. L’auteur peut mentionner des opinions opposées uniquement pour les contester.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux faux amis et aux connecteurs',
        text:
          'Les lusophones peuvent confondre « pourtant » avec le portugais « portanto ». Pourtant signifie « no entanto », tandis que « donc » ou « par conséquent » expriment l’idée de « portanto ». ' +
          'Autre distinction importante : « prétendre » signifie avancer ou affirmer quelque chose, et non « pretender » au sens d’avoir l’intention de faire quelque chose. Pour exprimer cette idée, le français utilise « avoir l’intention de ». ' +
          'Dans les textes argumentatifs, ces différences peuvent modifier l’interprétation de la position de l’auteur et des relations entre les arguments.'
      },

      { type: 'heading', text: '7. Stratégie pour le TEF Canada et le TCF Canada' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Trouvez la thèse avant d’analyser les choix de réponse',
        text:
          'Suivez cette méthode : commencez par identifier le sujet du texte ; déterminez ensuite la position défendue par l’auteur ; repérez les arguments, les preuves et les opinions opposées ; enfin, analysez les connecteurs qui établissent les relations entre ces idées. ' +
          'Dans les questions à choix multiples, faites attention aux propositions qui présentent une opinion valable, mais qui ne correspond pas à la position de l’auteur. ' +
          'Vérifiez également si la question porte sur la thèse, l’intention, un argument précis ou la conclusion. ' +
          'Au TEF Canada, la compréhension écrite comporte 40 questions en 60 minutes ; au TCF Canada, elle comporte 39 questions en 60 minutes. ' +
          'Dans les deux examens, l’interprétation précise des relations entre les idées est plus importante que la simple reconnaissance de mots isolés.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le texte argumentatif – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/le-texte-argumentatif-f1110'
    },
    {
      title: 'La thèse, les arguments et les fondements dans le texte argumentatif – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-these-les-arguments-et-les-fondements-f1111'
    },
    {
      title: 'La structure du texte argumentatif – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/la-structure-du-texte-argumentatif-f1449'
    },
    {
      title: 'Organisateur textuel – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26559651/organisateur-textuel'
    },
    {
      title: 'Marqueur de relation – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26559642/marqueur-de-relation'
    },
    {
      title: 'TEF Canada – Présentation des épreuves – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'TCF Canada – France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    }
  ]
}

export default content
