import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-pronuncia',

  pt: {
    title: 'Pronúncia francesa: vogais nasais, R, U/OU, E/É/È e liaison',
    summary:
      'Aprenda a reconhecer e produzir os sons mais característicos da pronúncia francesa, incluindo as vogais nasais, o R uvular e a diferença entre U e OU. ' +
      'Entenda também os contrastes entre E, É e È e saiba quando realizar as ligações entre palavras, chamadas liaisons.',
    blocks: [
      { type: 'heading', text: '1. Vogais nasais: an, en, in e on' },
      {
        type: 'paragraph',
        text:
          'O francês possui vogais nasais, produzidas quando o ar passa simultaneamente pela boca e pelo nariz. ' +
          'Diferentemente de uma vogal oral seguida de uma consoante, a nasalização faz parte do próprio som da vogal: geralmente, o n ou m escrito não é pronunciado como uma consoante separada. ' +
          'Três sons importantes são [ɑ̃], [ɛ̃] e [ɔ̃]. ' +
          'O TV5Monde lembra que o n se escreve m diante de m, b ou p (como em [[chambre|quarto]], [[tombe|túmulo]] e [[pompier|bombeiro]]) e que “imm” não é nasal, como em [[immobile|imóvel]].'
      },
      {
        type: 'table',
        headers: ['Som', 'Grafias frequentes', 'Exemplos'],
        rows: [
            [
              '[ɑ̃]',
              'an / en',
              '[[sans|sem]], [[enfant|criança]], [[blanc|branco]]'
            ],
            [
              '[ɛ̃]',
              'in / im / ain / ein',
              '[[matin|manhã]], [[pain|pão]], [[plein|cheio]]'
            ],
            [
              '[ɔ̃]',
              'on / om',
              '[[bon|bom]], [[nom|nome]], [[tomber|cair]]'
            ]
        ]
      },
      { type: 'heading', text: '2. O R francês e a diferença entre U e OU' },
      {
        type: 'paragraph',
        text:
          'O R de referência do francês é frequentemente representado pelo símbolo [ʁ]. ' +
          'Trata-se de uma consoante uvular, articulada na parte posterior da boca, próxima à úvula, com passagem de ar por uma abertura estreita. ' +
          'Não é necessário vibrar exageradamente a ponta da língua como em um R vibrado. ' +
          'Na pronúncia canadense, como em outras variedades francófonas, podem existir realizações diferentes, mas o som [ʁ] é uma referência importante para o aprendizado.'
      },
      {
        type: 'table',
        headers: ['Grafia', 'Som', 'Exemplo', 'Articulação'],
        rows: [
            [
              'u',
              '[y]',
              '[[tu|tu / você]]',
              'Pronuncie com a língua posicionada na parte da frente da boca e os lábios arredondados.'
            ],
            [
              'ou',
              '[u]',
              '[[tout|tudo]]',
              'Pronuncie com a língua posicionada mais atrás na boca e os lábios arredondados.'
            ]
        ]
      },
      { type: 'heading', text: '3. E, É e È: vogais fechadas e abertas' },
      {
        type: 'paragraph',
        text:
          'A diferença entre [e] e [ɛ] é importante para a pronúncia francesa. O É, com acento agudo, representa geralmente o som fechado [e], como em [[été|verão]]. ' +
          'O È, com acento grave, representa o som aberto [ɛ], como em [[mère|mãe]] e [[près|perto]]. ' +
          'O Ê, com acento circunflexo, também pode representar [ɛ], como em [[fête|festa]]; o TV5Monde observa que, às vezes, a pronúncia do acento grave ou circunflexo depende da estrutura da sílaba, como em [[fêter|festejar]]. ' +
          'Já o E sem acento pode apresentar diferentes pronúncias, incluindo [ə], [e] e [ɛ], dependendo da palavra e da posição na sílaba.'
      },
      { type: 'heading', text: '4. Liaison: ligação entre palavras' },
      {
        type: 'paragraph',
        text:
          'A [[liaison|ligação]] ' +
          'acontece quando uma consoante final normalmente muda de uma palavra passa a ser pronunciada junto à vogal inicial da palavra seguinte, formando uma ligação entre as sílabas. ' +
          'Essa consoante pode mudar de som: o S e o X frequentemente produzem [z], enquanto o T produz [t]. Existem três categorias importantes:'
      },
      {
        type: 'list',
        items: [
            'Obrigatória: ocorre em determinados contextos, como entre um determinante e o substantivo seguinte ou entre um pronome pessoal sujeito e o verbo. ' +
            'Exemplos: [[les‿amis|os amigos]] e [[vous‿avez|vocês têm]].',
          'Facultativa: pode ocorrer ou não, dependendo do contexto e do nível de formalidade. Segundo o OQLF, quanto mais cuidado o estilo, mais ligações facultativas se fazem; na língua familiar, quase nenhuma.',
          'Proibida: não deve ser realizada em determinados contextos, como depois da conjunção [[et|e]], depois de um substantivo no singular, depois de um sinal de pontuação (quando há pausa) ou diante de palavras iniciadas por H aspirado.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não pronuncie todas as letras como em português',
        text:
          'Um erro possível é confundir [y] e [u], pronunciando [[tu|tu / você]] como [[tout|tudo]]. Outro erro é pronunciar o N final de [[pain|pão]] ' +
          'como uma consoante separada, em vez de produzir uma única vogal nasal. Também evite substituir o R francês de referência por um R vibrado de forma automática. ' +
          'Na [[liaison|ligação entre palavras]], não pronuncie todas as consoantes finais: por exemplo, não faça a ligação depois de [[et|e]]. ' +
          'O objetivo é reconhecer os contextos corretos, não ligar todas as palavras indiscriminadamente.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na expressão oral do TEF Canada e do TCF Canada, pratique a inteligibilidade, a articulação e a fluidez, sem tentar imitar um sotaque específico. ' +
          'Faça exercícios com pares de palavras como [[tu / tout|você / tudo]], [[rue / roue|rua / roda]] e [[dessus / dessous|em cima / embaixo]]. ' +
          'Para as vogais nasais, repita [[bon / banc|bom / banco]] e [[pain / pont|pão / ponte]], prestando atenção às diferenças sonoras. ' +
          'Leia frases em voz alta, grave sua pronúncia e compare-a com modelos de falantes francófonos. Pratique também as ligações obrigatórias e evite as proibidas.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O TV5Monde confirma as vogais nasais e suas grafias, as vogais [y] e [u], o som de [[é|é]], [[è|è]] e [[ê|ê]], a elisão, o encadeamento e a ligação. ' +
          'O OQLF confirma o [[r fricatif|r fricativo]] [ʁ] como pronúncia de referência do R e os contextos de ligação obrigatória, facultativa e proibida. ' +
          'Não têm fonte: as realizações canadenses do R, os erros típicos de quem fala português, os pares de palavras, os exercícios e a recomendação de não imitar um sotaque específico. ' +
          'Esses pontos são material didático, não regra oficial. As páginas consultadas não indicam pontuação por som nem exigem um sotaque regional nos exames.'
      }
    ]
  },

  fr: {
    title: 'Prononciation française : voyelles nasales, R, U/OU, E/É/È et liaison',
    summary:
      'Apprenez à reconnaître et à produire les sons les plus caractéristiques de la prononciation française, notamment les voyelles nasales, le R uvulaire et la différence entre U et OU. ' +
      'Comprenez également les distinctions entre E, É et È et apprenez quand effectuer les liaisons entre les mots.',
    blocks: [
      { type: 'heading', text: '1. Les voyelles nasales : an, en, in et on' },
      {
        type: 'paragraph',
        text:
          'Le français possède des voyelles nasales, produites lorsque l’air passe simultanément par la bouche et par le nez. ' +
          'Contrairement à une voyelle orale suivie d’une consonne, la nasalisation fait partie du son de la voyelle elle-même : généralement, le n ou le m écrit ne se prononce pas comme une consonne séparée. ' +
          'Trois sons importants sont [ɑ̃], [ɛ̃] et [ɔ̃]. ' +
          'TV5Monde rappelle que le n devient m devant m, b ou p (une chambre, une tombe, un pompier) et que « imm » ne se prononce pas [ɛ̃], comme dans immobile.'
      },
      {
        type: 'table',
        headers: ['Son', 'Graphies fréquentes', 'Exemples'],
        rows: [
            [
              '[ɑ̃]',
              'an / en',
              'sans, enfant, blanc'
            ],
            [
              '[ɛ̃]',
              'in / im / ain / ein',
              'matin, pain, plein'
            ],
            [
              '[ɔ̃]',
              'on / om',
              'bon, nom, tomber'
            ]
        ]
      },
      { type: 'heading', text: '2. Le R français et la différence entre U et OU' },
      {
        type: 'paragraph',
        text:
          'Le R de référence en français est souvent représenté par le symbole [ʁ]. ' +
          'Il s’agit d’une consonne uvulaire, articulée dans la partie arrière de la bouche, près de la luette, avec un passage d’air dans un canal étroit. ' +
          'Il n’est pas nécessaire de faire vibrer exagérément la pointe de la langue comme pour un R roulé. ' +
          'Dans la prononciation canadienne, comme dans d’autres variétés francophones, différentes réalisations peuvent exister, mais le son [ʁ] constitue une référence importante pour l’apprentissage.'
      },
      {
        type: 'table',
        headers: ['Graphie', 'Son', 'Exemple', 'Articulation'],
        rows: [
            [
              'U',
              '[y]',
              'tu',
              'La langue est placée vers l’avant de la bouche et les lèvres sont arrondies.'
            ],
            [
              'OU',
              '[u]',
              'tout',
              'La langue est placée plus vers l’arrière de la bouche et les lèvres sont arrondies.'
            ]
        ]
      },
      { type: 'heading', text: '3. E, É et È : voyelles fermées et ouvertes' },
      {
        type: 'paragraph',
        text:
          'La différence entre [e] et [ɛ] est importante en français. Le É, avec un accent aigu, représente généralement le son fermé [e], comme dans été. ' +
          'Le È, avec un accent grave, représente le son ouvert [ɛ], comme dans mère et près. ' +
          'Le Ê, avec un accent circonflexe, peut également représenter [ɛ], comme dans fête ; TV5Monde observe que, parfois, la prononciation de l’accent grave ou circonflexe dépend de la structure de la syllabe, comme dans fêter. ' +
          'Quant au E sans accent, il peut avoir différentes prononciations, notamment [ə], [e] et [ɛ], selon le mot et sa position dans la syllabe.'
      },
      { type: 'heading', text: '4. La liaison : relier les mots' },
      {
        type: 'paragraph',
        text:
          'La liaison se produit lorsqu’une consonne finale normalement muette devient prononcée avec la voyelle initiale du mot suivant, créant ainsi un enchaînement entre les syllabes. ' +
          'Cette consonne peut changer de son : le S et le X produisent fréquemment [z], tandis que le T produit [t]. On distingue trois catégories importantes :'
      },
      {
        type: 'list',
        items: [
            'Obligatoire : elle se réalise dans certains contextes, notamment entre un déterminant et le nom qui suit ou entre un pronom personnel sujet et le verbe. ' +
            'Exemples : les‿amis et vous‿avez.',
          'Facultative : elle peut être réalisée ou non selon le contexte et le registre de langue. Selon l’OQLF, plus le style est soigné, plus on fait de liaisons facultatives ; dans la langue familière, pratiquement aucune.',
          'Interdite : elle ne doit pas être réalisée dans certains contextes, notamment après la conjonction et, après un nom singulier, après un signe de ponctuation (lorsqu’il y a une pause) ou devant les mots commençant par un H aspiré.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne prononcez pas toutes les lettres comme en portugais',
        text:
          'Une erreur possible consiste à confondre [y] et [u], en prononçant tu comme tout. ' +
          'Une autre erreur consiste à prononcer le N final de pain comme une consonne séparée, au lieu de produire une seule voyelle nasale. ' +
          'Évitez également de remplacer automatiquement le R français de référence par un R roulé. ' +
          'Pour les liaisons, ne prononcez pas toutes les consonnes finales : par exemple, ne faites pas la liaison après et. ' +
          'L’objectif est de reconnaître les contextes appropriés et non de relier tous les mots sans distinction.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Pour l’expression orale du TEF Canada et du TCF Canada, travaillez l’intelligibilité, l’articulation et la fluidité, sans chercher à imiter un accent particulier. ' +
          'Entraînez-vous avec des paires de mots comme tu / tout, rue / roue et dessus / dessous. ' +
          'Pour les voyelles nasales, répétez bon / banc et pain / pont en faisant attention aux différences sonores. ' +
          'Lisez des phrases à voix haute, enregistrez votre prononciation et comparez-la avec des modèles de locuteurs francophones. ' +
          'Entraînez-vous également aux liaisons obligatoires et évitez les liaisons interdites.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'TV5Monde confirme les voyelles nasales et leurs graphies, les voyelles [y] et [u], le son de é, è et ê, l’élision, l’enchaînement et la liaison. ' +
          'L’OQLF confirme le r fricatif [ʁ] comme prononciation de référence du R et les contextes de liaison obligatoire, facultative et interdite. ' +
          'Ne sont pas sourcés : les réalisations canadiennes du R, les erreurs typiques des personnes de langue portugaise, les paires de mots, les exercices et la recommandation de ne pas imiter un accent particulier. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle. Les pages consultées n’indiquent aucune pondération par son et n’exigent pas d’accent régional aux examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Les sons [ɔ̃], [ɑ̃] et [ɛ̃] — TV5Monde',
      url: 'https://apprendre.tv5monde.com/fr/aides/les-sons-o-et-e'
    },
    {
      title: 'Les sons [u] et [y] : « ou » et « u » — TV5Monde',
      url: 'https://apprendre.tv5monde.com/fr/aides/prononciation-les-sons-u-et-y-ou-et-u'
    },
    {
      title: 'É, è, ê, à, où… Comment prononcer les accents en français ? — TV5Monde',
      url: 'https://apprendre.tv5monde.com/fr/aides/prononciation-e-e-e-ou-comment-prononcer-les-accents-en-francais'
    },
    {
      title: 'R fricatif — Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26560732/r-fricatif'
    },
    {
      title: 'Contextes de liaisons obligatoires — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23549/la-prononciation/liaisons/contextes-de-liaisons-obligatoires'
    },
    {
      title: 'Contextes de liaisons facultatives — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23550/la-prononciation/liaisons/contextes-de-liaisons-facultatives'
    },
    {
      title: 'Contextes de liaisons interdites — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23552/la-prononciation/liaisons/contextes-de-liaisons-interdites'
    }
  ]
}

export default content
