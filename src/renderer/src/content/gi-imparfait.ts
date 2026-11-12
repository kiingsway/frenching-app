import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-imparfait',

  pt: {
    title: 'Diferença entre l’imparfait e le passé composé',
    summary:
      'Aprenda a diferenciar os dois principais tempos do passado em francês e entenda quando utilizar cada um para narrar acontecimentos, descrever situações e falar de hábitos antigos. ' +
      'Pratique também a combinação dos dois tempos em uma mesma narrativa, uma estrutura essencial para desenvolver histórias com clareza e naturalidade.',
    blocks: [
      { type: 'heading', text: '1. Qual é a diferença entre os dois tempos?' },
      {
        type: 'paragraph',
        text:
          'O francês utiliza principalmente [[l’imparfait|o imperfeito]] e [[le passé composé|o passado composto]] para falar de acontecimentos passados. ' +
          'A diferença está na maneira como apresentamos a ação: [[l’imparfait|o imperfeito]] ' +
          'descreve uma situação em andamento, um hábito ou uma circunstância, enquanto [[le passé composé|o passado composto]] ' +
          'apresenta um acontecimento como concluído, geralmente com limites definidos. Os dois tempos podem aparecer juntos para construir uma narrativa.'
      },
      {
        type: 'table',
        headers: ['Tempo verbal', 'Quando utilizar', 'Exemplo'],
        rows: [
            [
              '[[L’imparfait|Imperfeito]]',
              'Hábitos antigos, descrições, estados e ações em andamento no passado.',
              '[[Je travaillais tous les jours.|Eu trabalhava todos os dias.]]'
            ],
            [
              '[[Le passé composé|Passado composto]]',
              'Acontecimentos concluídos e sequência de eventos no passado.',
              '[[J’ai travaillé samedi.|Trabalhei no sábado.]]'
            ],
            [
              '[[L’imparfait + passé composé|Imperfeito + passado composto]]',
              'Uma ação em andamento ou uma circunstância interrompida por um acontecimento.',
              '[[Je travaillais quand mon patron a appelé.|Eu estava trabalhando quando meu chefe ligou.]]'
            ]
        ]
      },
      { type: 'heading', text: '2. Como formar os dois tempos' },
      {
        type: 'paragraph',
        text:
          'Para formar [[l’imparfait|o imperfeito]], utilize o radical da primeira pessoa do plural do presente do indicativo, retirando a terminação -ons, e acrescente -ais, -ais, -ait, -ions, -iez ou -aient. ' +
          'A principal exceção é o verbo [[être|ser / estar]], que utiliza o radical ét-.'
      },
      {
        type: 'table',
        headers: ['Pessoa', 'Parler — falar', 'Finir — terminar'],
        rows: [
            [
              'Eu',
              '[[Je parlais|eu falava]]',
              '[[Je finissais|eu terminava]]'
            ],
            [
              'Você',
              '[[Tu parlais|você falava]]',
              '[[Tu finissais|você terminava]]'
            ],
            [
              'Ele / Ela',
              '[[Il parlait|ele falava]]',
              '[[Il finissait|ele terminava]]'
            ],
            [
              'Nós',
              '[[Nous parlions|nós falávamos]]',
              '[[Nous finissions|nós terminávamos]]'
            ],
            [
              'Vocês',
              '[[Vous parliez|vocês falavam]]',
              '[[Vous finissiez|vocês terminavam]]'
            ],
            [
              'Eles / Elas',
              '[[Ils parlaient|eles falavam]]',
              '[[Ils finissaient|eles terminavam]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Para formar [[le passé composé|o passado composto]], utilize o presente do auxiliar [[avoir|ter]] ' +
          'ou [[être|ser / estar]], seguido do particípio passado do verbo principal: [[J’ai travaillé.|Trabalhei.]] [[Elle est arrivée.|Ela chegou.]] ' +
          'A escolha do auxiliar depende do verbo, e os particípios podem apresentar regras de concordância.'
      },
      { type: 'heading', text: '3. Exemplos em situações cotidianas' },
      {
        type: 'paragraph',
        text: 'Exemplo de uma narrativa que combina os dois tempos: uma pessoa conta como foi um dia em que chegou ao Canadá.'
      },
      {
        type: 'paragraph',
        text:
          '[[Quand je suis arrivé au Canada, il neigeait.|Quando cheguei ao Canadá, estava nevando.]] ' +
          '[[Il faisait froid et les rues étaient presque désertes.|Fazia frio e as ruas estavam quase desertas.]] ' +
          '[[Je cherchais mon nouvel appartement quand mon téléphone a sonné.|Eu estava procurando meu novo apartamento quando meu telefone tocou.]] ' +
          '[[C’était mon propriétaire qui m’appelait pour me donner les clés.|Era meu proprietário que estava ligando para me entregar as chaves.]] ' +
          '[[Après notre rencontre, je suis allé chez moi et j’ai commencé à déballer mes affaires.|Depois do nosso encontro, fui para casa e comecei a desfazer minhas malas.]]'
      },
      {
        type: 'list',
        items: [
          'Hábito no passado: [[Quand j’étais enfant, je jouais au soccer tous les samedis.|Quando eu era criança, jogava futebol todos os sábados.]]',
          'Acontecimento específico: [[Samedi dernier, j’ai joué au soccer avec mes amis.|No último sábado, joguei futebol com meus amigos.]]',
          'Descrição de uma situação: [[La maison était grande et avait un beau jardin.|A casa era grande e tinha um belo jardim.]]',
          'Sequência de acontecimentos: [[Je me suis levé, j’ai pris une douche et je suis parti au travail.|Levantei-me, tomei banho e saí para trabalhar.]]',
          'Ação em andamento: [[À huit heures, je préparais encore le déjeuner.|Às oito horas, eu ainda estava preparando o almoço.]]',
          'Ação concluída com duração definida: [[J’ai travaillé pendant trois heures.|Trabalhei durante três horas.]]'
        ]
      },
      { type: 'heading', text: '4. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não traduza os tempos mecanicamente do português',
        text:
          'Os dois tempos não correspondem sempre aos mesmos tempos verbais em português. ' +
          'Uma ação pode durar bastante tempo e ainda utilizar [[le passé composé|o passado composto]] ' +
          'quando é apresentada como concluída: [[J’ai habité à Toronto pendant deux ans.|Morei em Toronto durante dois anos.]] ' +
          'Por outro lado, uma situação em andamento em determinado momento do passado utiliza [[l’imparfait|o imperfeito]]: [[J’habitais à Toronto quand j’ai rencontré mon meilleur ami.|Eu morava em Toronto quando conheci meu melhor amigo.]] ' +
          'Observe o contexto e a perspectiva da narrativa, não apenas a duração da ação.'
      },
      {
        type: 'list',
        items: [
            'Não utilize [[l’imparfait|o imperfeito]] automaticamente porque aparece uma expressão de frequência. ' +
            'O contexto determina se você descreve um hábito ou uma sequência de acontecimentos concluídos.',
            'Não pense que toda ação curta exige [[le passé composé|o passado composto]] e toda ação longa exige [[l’imparfait|o imperfeito]]. ' +
            'A diferença principal está na maneira como a ação é apresentada.',
          'Não confunda [[J’étais|Eu era / estava]] com [[J’ai été|Eu fui / estive]]. A escolha pode alterar a perspectiva e o sentido da frase.',
            'Não utilize [[le passé composé|o passado composto]] para todas as ações de uma narrativa. ' +
            'As descrições e circunstâncias podem exigir [[l’imparfait|o imperfeito]].',
            'Lembre-se de que [[être|ser / estar]] possui um radical irregular no imperfeito: [[j’étais|eu era / estava]], [[tu étais|você era / estava]] ' +
            'e [[nous étions|nós éramos / estávamos]].'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique principalmente a combinação dos dois tempos em narrativas sobre experiências pessoais, viagens, trabalho e acontecimentos inesperados. ' +
          'Na expressão oral e escrita, demonstre que consegue descrever o contexto com [[l’imparfait|o imperfeito]] ' +
          'e apresentar os acontecimentos principais com [[le passé composé|o passado composto]]. ' +
          'Na compreensão oral, preste atenção às terminações verbais e aos auxiliares para identificar quando uma ação estava em andamento ou foi apresentada como concluída.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF listadas sobre o imperfeito confirmam a formação (radical da 1ª pessoa do plural do presente, exceção de être com ét-, terminações -ais, -ais, -ait, -ions, -iez, -aient) e os usos do imperfeito para circunstâncias, descrições, simultaneidade e recorrência, inclusive o exemplo de ação em curso interrompida por outra. ' +
          'A página do passé composé abre, mas o que ela diz sobre o contraste de aspecto (ação concluída, duração definida) não foi conferido. ' +
          'Nenhuma fonte confirma as sugestões de aplicação ao TEF Canada e ao TCF Canada, nem a ideia de que a prova pede combinar os dois tempos em narrativas: são recomendações de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'L’imparfait et le passé composé',
    summary:
      'Apprenez à distinguer les deux principaux temps du passé en français et à comprendre quand les utiliser pour raconter des événements, décrire des situations et parler d’anciennes habitudes. ' +
      'Entraînez-vous également à combiner ces deux temps dans un même récit, une structure essentielle pour raconter des histoires de façon claire et naturelle.',
    blocks: [
      { type: 'heading', text: '1. Quelle est la différence entre les deux temps ?' },
      {
        type: 'paragraph',
        text:
          'En français, on utilise principalement l’imparfait et le passé composé pour parler d’événements passés. ' +
          'La différence réside dans la manière de présenter l’action : l’imparfait décrit une situation en cours, une habitude ou une circonstance, tandis que le passé composé présente un événement comme accompli, généralement avec des limites définies. ' +
          'Les deux temps peuvent être utilisés ensemble pour construire un récit.'
      },
      {
        type: 'table',
        headers: ['Temps verbal', 'Quand l’utiliser', 'Exemple'],
        rows: [
            [
              'L’imparfait',
              'Habitudes passées, descriptions, états et actions en cours dans le passé.',
              'Je travaillais tous les jours.'
            ],
            [
              'Le passé composé',
              'Événements accomplis et succession d’actions dans le passé.',
              'J’ai travaillé samedi.'
            ],
            [
              'L’imparfait + le passé composé',
              'Une action en cours ou une circonstance interrompue par un événement.',
              'Je travaillais quand mon patron a appelé.'
            ]
        ]
      },
      { type: 'heading', text: '2. Comment former les deux temps' },
      {
        type: 'paragraph',
        text:
          'Pour former l’imparfait, utilisez le radical de la première personne du pluriel du présent de l’indicatif, en retirant la terminaison -ons, puis ajoutez -ais, -ais, -ait, -ions, -iez ou -aient. ' +
          'La principale exception est le verbe être, qui utilise le radical ét-.'
      },
      {
        type: 'table',
        headers: ['Personne', 'Parler', 'Finir'],
        rows: [
            [
              'Je',
              'Je parlais',
              'Je finissais'
            ],
            [
              'Tu',
              'Tu parlais',
              'Tu finissais'
            ],
            [
              'Il / Elle',
              'Il parlait',
              'Il finissait'
            ],
            [
              'Nous',
              'Nous parlions',
              'Nous finissions'
            ],
            [
              'Vous',
              'Vous parliez',
              'Vous finissiez'
            ],
            [
              'Ils / Elles',
              'Ils parlaient',
              'Ils finissaient'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Pour former le passé composé, utilisez le présent de l’auxiliaire avoir ou être, suivi du participe passé du verbe principal : J’ai travaillé. ' +
          'Elle est arrivée. Le choix de l’auxiliaire dépend du verbe, et les participes peuvent être soumis à des règles d’accord.'
      },
      { type: 'heading', text: '3. Exemples dans des situations quotidiennes' },
      {
        type: 'paragraph',
        text: 'Exemple d’un récit qui combine les deux temps : une personne raconte une journée pendant laquelle elle est arrivée au Canada.'
      },
      {
        type: 'paragraph',
        text:
          'Quand je suis arrivé au Canada, il neigeait. Il faisait froid et les rues étaient presque désertes. ' +
          'Je cherchais mon nouvel appartement quand mon téléphone a sonné. C’était mon propriétaire qui m’appelait pour me donner les clés. ' +
          'Après notre rencontre, je suis allé chez moi et j’ai commencé à déballer mes affaires.'
      },
      {
        type: 'list',
        items: [
          'Habitude passée : « Quand j’étais enfant, je jouais au soccer tous les samedis. »',
          'Événement précis : « Samedi dernier, j’ai joué au soccer avec mes amis. »',
          'Description d’une situation : « La maison était grande et avait un beau jardin. »',
          'Succession d’événements : « Je me suis levé, j’ai pris une douche et je suis parti au travail. »',
          'Action en cours : « À huit heures, je préparais encore le déjeuner. »',
          'Action accomplie avec une durée définie : « J’ai travaillé pendant trois heures. »'
        ]
      },
      { type: 'heading', text: '4. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne traduisez pas mécaniquement les temps du portugais',
        text:
          'Les deux temps ne correspondent pas toujours aux mêmes temps verbaux en portugais. ' +
          'Une action peut durer assez longtemps et tout de même être exprimée au passé composé lorsqu’elle est présentée comme terminée : « J’ai habité à Toronto pendant deux ans. ' +
          '» En revanche, une situation en cours à un moment précis du passé s’exprime à l’imparfait : « J’habitais à Toronto quand j’ai rencontré mon meilleur ami. ' +
          '» Observez le contexte et la perspective du récit, et pas seulement la durée de l’action.'
      },
      {
        type: 'list',
        items: [
            'N’utilisez pas automatiquement l’imparfait parce qu’une expression de fréquence apparaît dans la phrase. ' +
            'Le contexte permet de déterminer s’il s’agit d’une habitude ou d’une succession d’événements accomplis.',
            'Ne pensez pas que toute action courte exige le passé composé et que toute action longue exige l’imparfait. ' +
            'La différence principale réside dans la manière dont l’action est présentée.',
          'Ne confondez pas « J’étais » et « J’ai été ». Le choix peut modifier la perspective et le sens de la phrase.',
          'N’utilisez pas le passé composé pour toutes les actions d’un récit. Les descriptions et les circonstances peuvent nécessiter l’imparfait.',
          'Rappelez-vous que le verbe être possède un radical irrégulier à l’imparfait : j’étais, tu étais et nous étions.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous principalement à combiner les deux temps dans des récits portant sur des expériences personnelles, des voyages, le travail et des événements inattendus. ' +
          'À l’expression orale et écrite, montrez que vous savez décrire le contexte à l’imparfait et présenter les événements principaux au passé composé. ' +
          'En compréhension orale, prêtez attention aux terminaisons verbales et aux auxiliaires pour identifier si une action était en cours ou si elle était présentée comme accomplie.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF indiquées sur l’imparfait confirment la formation (radical de la 1re personne du pluriel du présent, exception de être avec ét-, terminaisons -ais, -ais, -ait, -ions, -iez, -aient) et les emplois de l’imparfait pour les circonstances, les descriptions, la simultanéité et la récurrence, y compris l’exemple d’une action en cours interrompue par une autre. ' +
          'La page sur le passé composé s’ouvre, mais ce qu’elle dit sur le contraste d’aspect (action accomplie, durée définie) n’a pas été vérifié. ' +
          'Aucune source ne confirme les conseils d’application au TEF Canada et au TCF Canada, ni l’idée que l’épreuve demande de combiner les deux temps dans des récits : ce sont des recommandations de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – Généralités sur l’imparfait',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24196/la-grammaire/le-verbe/temps-grammaticaux/passe/generalites-sur-limparfait'
    },
    {
      title: 'OQLF – Valeur temporelle de l’imparfait',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24197/la-grammaire/le-verbe/temps-grammaticaux/passe/valeur-temporelle-de-limparfait'
    },
    {
      title: 'OQLF – Formes et conjugaison de l’imparfait',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24195/la-grammaire/le-verbe/conjugaison/formes-de-limparfait'
    },
    {
      title: 'OQLF – Généralités sur le passé composé',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24218/la-grammaire/le-verbe/temps-grammaticaux/passe/generalites-sur-le-passe-compose'
    }
  ]
}

export default content
