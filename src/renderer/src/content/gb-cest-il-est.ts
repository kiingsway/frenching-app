import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-cest-il-est',

  pt: {
    title: 'Diferença entre C’est e il/elle est',
    summary:
      'Aprenda a diferenciar as construções utilizadas para apresentar ou identificar pessoas e coisas daquelas utilizadas para descrevê-las. ' +
      'Entenda quando usar substantivos com ou sem artigo, adjetivos, profissões, nacionalidades e expressões impessoais.',
    blocks: [
      { type: 'heading', text: '1. Qual é a diferença?' },
      {
        type: 'paragraph',
        text:
          'As construções [[c’est|é / isto é]] e [[il est / elle est|ele é / ela é]] podem ser traduzidas de maneira semelhante em português, mas possuem usos diferentes. ' +
          'A escolha depende principalmente da informação que vem depois do verbo. Utilize [[c’est|é / isto é]] ' +
          'para apresentar ou identificar alguém ou alguma coisa e [[il est / elle est|ele é / ela é]] para descrever uma pessoa ou coisa já identificada.'
      },
      {
        type: 'table',
        headers: ['Construção', 'Quando utilizar', 'Exemplo'],
        rows: [
            [
              '[[C’est + nome com determinante|É + substantivo com determinante]]',
              'Apresentar ou identificar alguém ou alguma coisa.',
              '[[C’est un médecin.|É um médico.]]'
            ],
            [
              '[[C’est + nome próprio|É + nome próprio]]',
              'Identificar uma pessoa ou um lugar.',
              '[[C’est André.|É o André.]]'
            ],
            [
              '[[C’est + pronome tônico|É + pronome tônico]]',
              'Identificar quem é uma pessoa.',
              '[[C’est lui.|É ele.]]'
            ],
            [
              '[[Il/Elle est + adjetivo|Ele/Ela é + adjetivo]]',
              'Descrever uma característica.',
              '[[Elle est sympathique.|Ela é simpática.]]'
            ],
            [
              '[[Il/Elle est + profissão sem artigo|Ele/Ela é + profissão sem artigo]]',
              'Informar a profissão de alguém.',
              '[[Il est médecin.|Ele é médico.]]'
            ],
            [
              '[[Il/Elle est + nacionalidade sem artigo|Ele/Ela é + nacionalidade sem artigo]]',
              'Informar a nacionalidade.',
              '[[Elle est canadienne.|Ela é canadense.]]'
            ]
        ]
      },
      { type: 'heading', text: '2. Quando utilizar C’est' },
      {
        type: 'paragraph',
        text:
          'Utilize [[c’est|é / isto é]] para apresentar, identificar ou classificar uma pessoa ou coisa. ' +
          'Quando a expressão introduz um substantivo comum, normalmente aparece um determinante antes dele, como [[un|um]], [[une|uma]], [[le|o]], [[la|a]] ' +
          'ou [[mon|meu]].'
      },
      {
        type: 'list',
        items: [
          'Apresentar uma pessoa: [[C’est ma sœur.|É minha irmã.]]',
          'Apresentar uma profissão: [[C’est une médecin expérimentée.|É uma médica experiente.]]',
          'Identificar alguém: [[C’est Marie.|É a Marie.]]',
          'Identificar um objeto: [[C’est mon téléphone.|É meu celular.]]',
          'Expressar uma avaliação geral: [[C’est intéressant.|Isso é interessante.]]',
          'Comentar uma situação: [[C’est difficile de trouver un logement à Toronto.|É difícil encontrar moradia em Toronto.]]',
          'Identificar uma data ou um dia: [[C’est lundi.|É segunda-feira.]]'
        ]
      },
      { type: 'heading', text: '3. Quando utilizar Il est ou Elle est' },
      {
        type: 'paragraph',
        text:
          'Utilize [[il est|ele é]] ou [[elle est|ela é]] para descrever uma pessoa ou coisa já identificada. ' +
          'A construção aparece frequentemente antes de adjetivos, profissões e nacionalidades sem artigo. ' +
          'O pronome também pode ser impessoal, como em expressões que indicam horário ou necessidade.'
      },
      {
        type: 'list',
        items: [
          'Característica de uma pessoa: [[Il est intelligent.|Ele é inteligente.]]',
          'Característica de uma mulher: [[Elle est très organisée.|Ela é muito organizada.]]',
          'Profissão: [[Il est professeur.|Ele é professor.]]',
          'Nacionalidade: [[Elle est brésilienne.|Ela é brasileira.]]',
          'Descrição de algo já mencionado: [[Ce livre est intéressant.|Este livro é interessante.]] [[Il est aussi très facile à lire.|Ele também é muito fácil de ler.]]',
          'Horário: [[Il est huit heures du matin.|São oito horas da manhã.]]',
          'Construção impessoal: [[Il est important de pratiquer régulièrement.|É importante praticar regularmente.]] Na fala, [[c’est important de pratiquer|é importante praticar]] também é muito comum.'
        ]
      },
      { type: 'heading', text: '4. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não coloque artigo automaticamente antes de uma profissão',
        text:
          'Em português, tanto "ele é médico" quanto "ele é um médico" soam naturais, e o artigo costuma passar para o francês. ' +
          'Na apresentação neutra de uma profissão, o francês normalmente retira o artigo: [[Il est médecin.|Ele é médico.]] Quando queremos apresentar ou identificar a pessoa, utilizamos [[C’est un médecin.|É um médico.]] ' +
          'Portanto, [[Il est un médecin|Ele é um médico]] não é a construção neutra recomendada nesse contexto.'
      },
      {
        type: 'list',
        items: [
          'Não utilize [[Il est Marie.|Ele é Marie.]] para identificar uma pessoa. Prefira [[C’est Marie.|É a Marie.]]',
          'Não confunda profissão com descrição. Compare [[Il est professeur.|Ele é professor.]] e [[C’est un professeur compétent.|É um professor competente.]]',
            'Para descrever uma característica específica, respeite o gênero e o número: [[Elle est intelligente.|Ela é inteligente.]] ' +
            'e [[Ils sont intelligents.|Eles são inteligentes.]]',
            'Para identificar várias pessoas ou coisas, utilize [[ce sont|são / estes são]] na linguagem escrita padrão: [[Ce sont mes amis.|São meus amigos.]] ' +
            'Na fala informal, também é comum ouvir [[c’est|é]] antes de um grupo no plural.',
          'Não utilize [[il est|ele é]] para identificar uma coisa com substantivo acompanhado de determinante. Prefira [[C’est une bonne idée.|É uma boa ideia.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique a transformação de frases entre as duas construções. ' +
          'Aprenda a identificar se você está apresentando alguém, descrevendo uma característica, informando uma profissão ou fazendo uma avaliação geral. ' +
          'Esse domínio ajuda a construir frases mais naturais na expressão oral e evita erros de artigos e estrutura na expressão escrita, especialmente em respostas de apresentação pessoal, descrição de pessoas e opiniões.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A página do Le Robert listada confirma que c’est pode introduzir nome próprio, grupo nominal, pronome e adjetivo (C’est Agathe, C’est un bon journaliste, C’est lui, C’est facile), que c’est varia para ce sont e que, na língua descontraída, c’est aparece antes de plural. ' +
          'Nenhuma fonte aberta confirma: o uso de il/elle est com profissão e nacionalidade sem artigo, o horário e as construções impessoais com il est, e a regra de não usar il est diante de substantivo com determinante. ' +
          'Também não há fonte para a recomendação de praticar essas estruturas para o TEF Canada e o TCF Canada: é orientação de preparação, não exigência das provas.'
      }
    ]
  },

  fr: {
    title: 'C’est × il/elle est',
    summary:
      'Apprenez à distinguer les constructions utilisées pour présenter ou identifier des personnes et des choses de celles qui servent à les décrire. ' +
      'Découvrez quand employer les noms avec ou sans déterminant, les adjectifs, les professions, les nationalités et les tournures impersonnelles.',
    blocks: [
      { type: 'heading', text: '1. Quelle est la différence ?' },
      {
        type: 'paragraph',
        text:
          'Les constructions « c’est » et « il est / elle est » peuvent exprimer des idées semblables, mais elles ne s’utilisent pas exactement dans les mêmes contextes. ' +
          'Le choix dépend principalement de l’information qui suit le verbe. ' +
          'Utilisez « c’est » pour présenter ou identifier quelqu’un ou quelque chose et « il est / elle est » pour décrire une personne ou une chose déjà identifiée.'
      },
      {
        type: 'table',
        headers: ['Construction', 'Quand l’utiliser', 'Exemple'],
        rows: [
            [
              'C’est + nom avec déterminant',
              'Présenter ou identifier quelqu’un ou quelque chose.',
              'C’est un médecin.'
            ],
            [
              'C’est + nom propre',
              'Identifier une personne ou un lieu.',
              'C’est André.'
            ],
            [
              'C’est + pronom tonique',
              'Identifier une personne.',
              'C’est lui.'
            ],
            [
              'Il/Elle est + adjectif',
              'Décrire une caractéristique.',
              'Elle est sympathique.'
            ],
            [
              'Il/Elle est + profession sans déterminant',
              'Indiquer la profession de quelqu’un.',
              'Il est médecin.'
            ],
            [
              'Il/Elle est + nationalité sans déterminant',
              'Indiquer la nationalité.',
              'Elle est canadienne.'
            ]
        ]
      },
      { type: 'heading', text: '2. Quand utiliser C’est' },
      {
        type: 'paragraph',
        text:
          'Utilisez « c’est » pour présenter, identifier ou classer une personne ou une chose. ' +
          'Lorsque l’expression introduit un nom commun, celui-ci est généralement précédé d’un déterminant comme « un », « une », « le », « la » ou « mon ».'
      },
      {
        type: 'list',
        items: [
          'Présenter une personne : C’est ma sœur.',
          'Présenter une profession : C’est une médecin expérimentée.',
          'Identifier quelqu’un : C’est Marie.',
          'Identifier un objet : C’est mon téléphone.',
          'Exprimer une appréciation générale : C’est intéressant.',
          'Commenter une situation : C’est difficile de trouver un logement à Toronto.',
          'Identifier une date ou un jour : C’est lundi.'
        ]
      },
      { type: 'heading', text: '3. Quand utiliser Il est ou Elle est' },
      {
        type: 'paragraph',
        text:
          'Utilisez « il est » ou « elle est » pour décrire une personne ou une chose déjà identifiée. ' +
          'Cette construction apparaît fréquemment devant les adjectifs, les professions et les nationalités sans déterminant. ' +
          'Le pronom peut également être impersonnel, notamment dans les expressions qui indiquent l’heure ou une nécessité.'
      },
      {
        type: 'list',
        items: [
          'Caractéristique d’une personne : Il est intelligent.',
          'Caractéristique d’une femme : Elle est très organisée.',
          'Profession : Il est professeur.',
          'Nationalité : Elle est brésilienne.',
          'Description d’une chose déjà mentionnée : Ce livre est intéressant. Il est aussi très facile à lire.',
          'Heure : Il est huit heures du matin.',
          'Construction impersonnelle : Il est important de pratiquer régulièrement. À l’oral, « c’est important de pratiquer » est aussi très courant.'
        ]
      },
      { type: 'heading', text: '4. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'N’ajoutez pas automatiquement un déterminant devant une profession',
        text:
          'En portugais, « ele é médico » et « ele é um médico » semblent tous deux naturels, et l’article passe souvent en français. Dans une présentation neutre d’une profession, le français supprime généralement le déterminant. ' +
          'On dit « Il est médecin ». Lorsqu’on souhaite présenter ou identifier la personne, on utilise « C’est un médecin ». ' +
          'Ainsi, « Il est un médecin » n’est pas la construction neutre recommandée dans ce contexte.'
      },
      {
        type: 'list',
        items: [
          'N’utilisez pas « Il est Marie » pour identifier une personne. Préférez « C’est Marie ».',
          'Ne confondez pas la profession et la description. Comparez « Il est professeur » et « C’est un professeur compétent ».',
          'Pour décrire une caractéristique précise, respectez le genre et le nombre : « Elle est intelligente » et « Ils sont intelligents ».',
            'Pour identifier plusieurs personnes ou choses, utilisez « ce sont » dans la langue écrite standard : « Ce sont mes amis ». ' +
            'À l’oral informel, on entend aussi fréquemment « c’est » devant un groupe au pluriel.',
          'N’utilisez pas « il est » pour identifier une chose avec un nom accompagné d’un déterminant. Préférez « C’est une bonne idée ».'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous à transformer des phrases d’une construction à l’autre. ' +
          'Apprenez à reconnaître si vous présentez quelqu’un, décrivez une caractéristique, indiquez une profession ou exprimez une appréciation générale. ' +
          'Cette maîtrise permet de construire des phrases plus naturelles à l’expression orale et d’éviter les erreurs de déterminants et de structure à l’expression écrite, notamment dans les présentations personnelles, les descriptions de personnes et les opinions.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La page du Robert indiquée confirme que c’est peut introduire un nom propre, un groupe nominal, un pronom et un adjectif (C’est Agathe, C’est un bon journaliste, C’est lui, C’est facile), que c’est varie en ce sont et que, dans la langue relâchée, c’est se trouve devant un pluriel. ' +
          'Aucune source ouverte ne confirme : l’emploi de il/elle est avec une profession et une nationalité sans déterminant, l’heure et les constructions impersonnelles avec il est, et la règle de ne pas utiliser il est devant un nom accompagné d’un déterminant. ' +
          'Il n’y a pas non plus de source pour la recommandation de pratiquer ces constructions pour le TEF Canada et le TCF Canada : c’est un conseil de préparation, pas une exigence des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le Robert – c’est… qui/que (emprego e concordância de c’est)',
      url: 'https://dictionnaire.lerobert.com/guide/c-est-qui-que'
    }
  ]
}

export default content
