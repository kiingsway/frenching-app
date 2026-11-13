import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-indefinidos',

  pt: {
    title: 'Pronomes indefinidos: tout, chacun, quelqu’un e plusieurs',
    summary:
      'Você vai aprender a diferenciar os principais pronomes indefinidos em francês e entender como utilizá-los para falar de pessoas, coisas e quantidades sem identificá-las precisamente. ' +
      'Também vai estudar as concordâncias e as diferenças entre as formas singulares e plurais, incluindo particularidades do francês canadense.',
    blocks: [
      { type: 'heading', text: 'O que cada pronome expressa' },
      {
        type: 'paragraph',
        text:
          'Os pronomes indefinidos substituem um nome ou designam pessoas e coisas sem identificar exatamente quem ou quantos. ' +
          'Neste tópico, você vai estudar [[tout|tudo]], [[tous / toutes|todos / todas]], [[chacun / chacune|cada um / cada uma]], [[quelqu’un|alguém]] ' +
          'e [[plusieurs|vários / várias]].'
      },
      {
        type: 'table',
        headers: ['Forma em francês', 'Sentido principal', 'Concordância e uso'],
        rows: [
            [
              '[[tout|tudo]]',
              'Expressa uma totalidade, geralmente de coisas.',
              'É invariável nesse uso e normalmente não possui um antecedente explícito.'
            ],
            [
              '[[tous / toutes|todos / todas]]',
              'Retoma a totalidade de pessoas ou coisas já mencionadas.',
              'Varia conforme o gênero e o número do termo retomado.'
            ],
            [
              '[[chacun / chacune|cada um / cada uma]]',
              'Considera individualmente cada elemento de um grupo.',
              'É sempre singular, mas varia em gênero.'
            ],
            [
              '[[quelqu’un|alguém]]',
              'Indica uma pessoa não identificada.',
              'É normalmente masculino e singular. A forma feminina existe, mas é rara.'
            ],
            [
              '[[plusieurs|vários / várias]]',
              'Indica uma quantidade indeterminada de pessoas ou coisas.',
              'É invariável na forma, sempre termina em s e exige concordância no plural.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Uma particularidade canadense: no Québec, [[plusieurs|vários]] também pode expressar a ideia de muitos ou de um grande número. ' +
          'Em outras variedades, especialmente no uso europeu, costuma indicar uma quantidade indeterminada mais limitada, próxima de alguns ou vários.'
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[Tout est prêt pour la réunion.|Tudo está pronto para a reunião.]]',
          '[[Les formulaires sont sur la table ; tous sont signés.|Os formulários estão sobre a mesa; todos estão assinados.]]',
          '[[Les demandes ont été examinées ; toutes ont été acceptées.|As solicitações foram examinadas; todas foram aceitas.]]',
          '[[Chacune des candidates recevra une confirmation par courriel.|Cada uma das candidatas receberá uma confirmação por e-mail.]]',
          '[[Quelqu’un a laissé son parapluie dans l’autobus.|Alguém deixou seu guarda-chuva no ônibus.]]',
          '[[Plusieurs ont demandé un délai supplémentaire.|Vários pediram um prazo adicional.]]',
          '[[Les bénévoles ont rangé la salle ; quelques-uns sont restés pour nettoyer la cuisine.|Os voluntários arrumaram a sala; alguns ficaram para limpar a cozinha.]]'
        ]
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'paragraph',
        text:
          'Não confunda um pronome com um determinante. Compare: [[Tous les candidats ont répondu.|Todos os candidatos responderam.]] Nesse caso, [[tous|todos]] ' +
          'acompanha o substantivo [[candidats|candidatos]] e funciona como determinante. Já em [[Tous ont répondu.|Todos responderam.]], [[tous|todos]] ' +
          'substitui o grupo mencionado anteriormente e funciona como pronome. Como pronome, [[tous|todos]] se pronuncia com o -s final.'
      },
      {
        type: 'paragraph',
        text:
          'Também não confunda [[quelqu’un|alguém]], no singular, com [[quelques-uns / quelques-unes|alguns / algumas]], no plural. ' +
          'As formas plurais podem retomar pessoas ou coisas mencionadas anteriormente. ' +
          'Quando usadas isoladamente com o sentido de alguns ou algumas pessoas, pertencem a um registro mais formal.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a concordância no singular',
        text:
          'Um erro frequente, segundo o OQLF, é fazer a concordância pelo sentido de pluralidade, em vez de seguir a gramática. ' +
          '[[Tout le monde|todo mundo]] traz a ideia de vários, mas é gramaticalmente singular: diga [[Tout le monde est arrivé.|Todo mundo chegou.]] e não [[Tout le monde sont arrivés.|Todo mundo chegaram. (errado)]] ' +
          'O mesmo acontece com [[chacun|cada um]], sempre no singular: [[Chacun des participants a reçu un courriel.|Cada um dos participantes recebeu um e-mail.]] ' +
          'Em contrapartida, [[plusieurs|vários]] exige verbo no plural.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Em exercícios de compreensão e produção, observe se o pronome substitui um substantivo já mencionado ou apresenta alguém ou algo indefinido. ' +
          'Identifique o antecedente, quando houver, e confira a concordância do verbo. ' +
          'Dê atenção especial à oposição entre [[chacun|cada um]], que exige singular, e [[plusieurs|vários]], que exige plural.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam: [[tout|tudo]] invariável e [[tous / toutes|todos / todas]] variável, com o -s de [[tous|todos]] pronunciado como pronome; [[chacun / chacune|cada um / cada uma]] sempre no singular; ' +
          '[[quelqu’un|alguém]] quase sempre masculino e [[quelques-uns|alguns]] em registro formal; [[plusieurs|vários]] invariável, com o sentido de “muitos” no Québec; e [[tout le monde|todo mundo]] com verbo no singular. ' +
          'Não têm fonte: a distinção entre determinante e pronome em [[tous|todos]], a pronúncia do determinante, os exemplos e a dica para a prova. ' +
          'Essa dica é conselho de preparação, não regra oficial. As páginas consultadas não indicam se essas estruturas são exigidas em alguma questão do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Les pronoms indéfinis : tout, chacun, quelqu’un et plusieurs',
    summary:
      'Vous apprendrez à distinguer les principaux pronoms indéfinis en français et à les utiliser pour parler de personnes, de choses et de quantités sans les identifier précisément. ' +
      'Vous étudierez également les accords et les différences entre les formes singulières et plurielles, y compris certaines particularités du français canadien.',
    blocks: [
      { type: 'heading', text: 'Ce que chaque pronom exprime' },
      {
        type: 'paragraph',
        text:
          'Les pronoms indéfinis remplacent un nom ou désignent des personnes et des choses sans préciser exactement leur identité ou leur nombre. ' +
          'Dans cette leçon, vous étudierez tout, tous, toutes, chacun, chacune, quelqu’un et plusieurs.'
      },
      {
        type: 'table',
        headers: ['Forme en français', 'Sens principal', 'Accord et emploi'],
        rows: [
            [
              'tout',
              'Exprime une totalité, généralement de choses.',
              'Il est invariable dans cet emploi et ne possède généralement pas d’antécédent explicite.'
            ],
            [
              'tous / toutes',
              'Reprend la totalité des personnes ou des choses déjà mentionnées.',
              'La forme varie selon le genre et le nombre de l’élément représenté.'
            ],
            [
              'chacun / chacune',
              'Considère individuellement chaque élément d’un ensemble.',
              'Le pronom est toujours au singulier, mais varie en genre.'
            ],
            [
              'quelqu’un',
              'Désigne une personne dont l’identité n’est pas connue.',
              'La forme habituelle est masculine et singulière. La forme féminine existe, mais elle est rare.'
            ],
            [
              'plusieurs',
              'Désigne un nombre indéterminé de personnes ou de choses.',
              'La forme est invariable, prend toujours un s final et entraîne un accord au pluriel.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Une particularité canadienne : au Québec, plusieurs peut aussi exprimer l’idée de beaucoup ou d’un grand nombre. ' +
          'Dans d’autres variétés, notamment dans l’usage européen, il désigne généralement un nombre indéterminé plus limité, proche de quelques-uns.'
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'list',
        items: [
          'Tout est prêt pour la réunion.',
          'Les formulaires sont sur la table ; tous sont signés.',
          'Les demandes ont été examinées ; toutes ont été acceptées.',
          'Chacune des candidates recevra une confirmation par courriel.',
          'Quelqu’un a laissé son parapluie dans l’autobus.',
          'Plusieurs ont demandé un délai supplémentaire.',
          'Les bénévoles ont rangé la salle ; quelques-uns sont restés pour nettoyer la cuisine.'
        ]
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'paragraph',
        text:
          'Ne confondez pas un pronom et un déterminant. Comparez : « Tous les candidats ont répondu. ' +
          '» Dans ce cas, tous accompagne le nom candidats et fonctionne comme un déterminant. ' +
          'En revanche, dans « Tous ont répondu », tous remplace le groupe mentionné précédemment et fonctionne comme un pronom. Comme pronom, tous se prononce avec le s final.'
      },
      {
        type: 'paragraph',
        text:
          'Ne confondez pas non plus quelqu’un, au singulier, avec quelques-uns ou quelques-unes, au pluriel. ' +
          'Les formes plurielles peuvent reprendre des personnes ou des choses déjà mentionnées. ' +
          'Employées seules au sens de certaines personnes, elles appartiennent à un registre plus soutenu.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à l’accord au singulier',
        text:
          'Une erreur fréquente, selon l’OQLF, consiste à accorder le verbe selon l’idée de pluralité plutôt que selon la grammaire. ' +
          'Tout le monde évoque plusieurs personnes, mais est grammaticalement au singulier : dites « Tout le monde est arrivé » et non « Tout le monde sont arrivés ». ' +
          'C’est aussi le cas de chacun, toujours au singulier : « Chacun des participants a reçu un courriel ». En revanche, plusieurs exige un verbe au pluriel.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les exercices de compréhension et de production, observez si le pronom remplace un nom déjà mentionné ou s’il désigne une personne ou une chose indéterminée. ' +
          'Repérez l’antécédent, lorsqu’il existe, et vérifiez l’accord du verbe. ' +
          'Portez une attention particulière à la différence entre chacun, qui exige le singulier, et plusieurs, qui exige le pluriel.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment : tout invariable et tous variable, avec le s de tous prononcé comme pronom ; chacun toujours au singulier ; ' +
          'quelqu’un presque toujours masculin et quelques-uns d’un registre soutenu ; plusieurs invariable, avec le sens de « beaucoup » au Québec ; et tout le monde avec un verbe au singulier. ' +
          'Ne sont pas sourcés : la distinction entre déterminant et pronom pour tous, la prononciation du déterminant, les exemples et le conseil pour l’examen. ' +
          'Ce conseil est une recommandation de préparation, et non une règle officielle. Les pages consultées ne précisent pas si ces structures sont exigées dans une question du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Tout employé comme pronom indéfini — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22911/la-grammaire/les-pronoms/pronoms-indefinis/tout-employe-comme-pronom-indefini'
    },
    {
      title: 'Accord du verbe avec le pronom indéfini chacun (chacune) — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21717/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/sujet-qui-comporte-un-indefini/accord-du-verbe-avec-le-pronom-indefini-chacun-chacune'
    },
    {
      title: 'Le pronom indéfini quelqu’un — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23437/la-grammaire/les-pronoms/pronoms-indefinis/le-pronom-indefini-quelquun'
    },
    {
      title: 'Sens du déterminant ou du pronom indéfini plusieurs — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22886/la-grammaire/les-determinants/determinants-indefinis/sens-du-determinant-ou-du-pronom-indefini-plusieurs'
    },
    {
      title: 'Accord du verbe avec tout le monde — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24121/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/sujet-qui-comporte-un-indefini/accord-du-verbe-avec-tout-le-monde'
    }
  ]
}

export default content
