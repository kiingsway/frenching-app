import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-numeros',

  pt: {
    title: 'Números, horas e datas em francês',
    summary:
      'Aprenda a contar, escrever números, informar horários e marcar compromissos em francês. ' +
      'Domine as particularidades dos números compostos, o sistema de 24 horas e as regras para escrever datas, dias da semana e meses, com foco no uso canadense.',
    blocks: [
      { type: 'heading', text: '1. Números cardinais e sua formação' },
      {
        type: 'paragraph',
        text:
          'Os números cardinais são utilizados para indicar quantidades, idades, preços, horários e datas. ' +
          'Em francês, algumas dezenas seguem uma lógica diferente da portuguesa, especialmente a partir de 70. ' +
          'No Canadá, as formas [[soixante-dix|70]], [[quatre-vingts|80]] e [[quatre-vingt-dix|90]] são utilizadas normalmente, assim como na França.'
      },
      {
        type: 'table',
        headers: ['Número', 'Em francês'],
        rows: [
            [
              '0',
              '[[zéro|zero]]'
            ],
            [
              '1',
              '[[un / une|um / uma]]'
            ],
            [
              '2',
              '[[deux|dois]]'
            ],
            [
              '3',
              '[[trois|três]]'
            ],
            [
              '4',
              '[[quatre|quatro]]'
            ],
            [
              '5',
              '[[cinq|cinco]]'
            ],
            [
              '6',
              '[[six|seis]]'
            ],
            [
              '7',
              '[[sept|sete]]'
            ],
            [
              '8',
              '[[huit|oito]]'
            ],
            [
              '9',
              '[[neuf|nove]]'
            ],
            [
              '10',
              '[[dix|dez]]'
            ],
            [
              '11',
              '[[onze|onze]]'
            ],
            [
              '12',
              '[[douze|doze]]'
            ],
            [
              '13',
              '[[treize|treze]]'
            ],
            [
              '14',
              '[[quatorze|quatorze]]'
            ],
            [
              '15',
              '[[quinze|quinze]]'
            ],
            [
              '16',
              '[[seize|dezesseis]]'
            ],
            [
              '17',
              '[[dix-sept|dezessete]]'
            ],
            [
              '18',
              '[[dix-huit|dezoito]]'
            ],
            [
              '19',
              '[[dix-neuf|dezenove]]'
            ],
            [
              '20',
              '[[vingt|vinte]]'
            ],
            [
              '30',
              '[[trente|trinta]]'
            ],
            [
              '40',
              '[[quarante|quarenta]]'
            ],
            [
              '50',
              '[[cinquante|cinquenta]]'
            ],
            [
              '60',
              '[[soixante|sessenta]]'
            ],
            [
              '70',
              '[[soixante-dix|setenta]]'
            ],
            [
              '80',
              '[[quatre-vingts|oitenta]]'
            ],
            [
              '90',
              '[[quatre-vingt-dix|noventa]]'
            ],
            [
              '100',
              '[[cent|cem]]'
            ],
            [
              '1.000',
              '[[mille|mil]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Os números intermediários são formados pela combinação das dezenas e unidades: [[vingt-deux|22]], [[trente-cinq|35]], [[quarante-huit|48]] ' +
          'e [[soixante-trois|63]]. Algumas formas utilizam [[et|e]]: [[vingt et un|21]], [[trente et un|31]] e [[soixante et onze|71]]. ' +
          'Para números maiores, observe as regras de escrita: [[quatre-vingts|80]] e [[deux cents|200]] ' +
          'recebem s quando terminam nesses elementos, mas perdem essa marca antes de outro número, como em [[quatre-vingt-un|81]] e [[deux cent cinq|205]]. [[Mille|Mil]] ' +
          'nunca recebe s como numeral, enquanto [[million|milhão]] varia no plural: [[deux millions|dois milhões]].'
      },
      { type: 'heading', text: '2. Como informar as horas' },
      {
        type: 'paragraph',
        text:
          'No francês canadense, o sistema de 24 horas é muito utilizado em horários, documentos e comunicações formais. ' +
          'Para escrever as horas, utiliza-se o símbolo h entre as horas e os minutos, com espaços: [[8 h 30|8h30]], [[13 h 15|13h15]] e [[17 h 45|17h45]]. ' +
          'Na fala, você pode pronunciar os números normalmente ou utilizar expressões como [[midi|meio-dia]] e [[minuit|meia-noite]].'
      },
      {
        type: 'table',
        headers: ['Horário', 'Como dizer em francês', 'Significado'],
        rows: [
            [
              '6 h 00',
              '[[six heures|seis horas]]',
              'Seis da manhã'
            ],
            [
              '8 h 15',
              '[[huit heures quinze|oito e quinze]]',
              'Oito e quinze'
            ],
            [
              '8 h 30',
              '[[huit heures et demie|oito e meia]]',
              'Oito e trinta'
            ],
            [
              '12 h 00',
              '[[midi|meio-dia]]',
              'Doze horas'
            ],
            [
              '13 h 00',
              '[[treize heures|treze horas]]',
              'Uma da tarde'
            ],
            [
              '14 h 30',
              '[[quatorze heures trente|quatorze horas e trinta]]',
              'Duas e meia da tarde'
            ],
            [
              '18 h 45',
              '[[dix-huit heures quarante-cinq|dezoito e quarenta e cinco]]',
              'Seis e quarenta e cinco da tarde'
            ],
            [
              '0 h 00',
              '[[minuit|meia-noite]]',
              'Zero hora'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Para marcar compromissos, utilize [[à|às]] antes do horário: [[Le rendez-vous est à 9 h 30.|O compromisso é às 9h30.]] ' +
          'Para indicar um intervalo, utilize [[de ... à ...|das ... às ...]]: [[Je travaille de 9 h à 17 h.|Trabalho das 9h às 17h.]] ' +
          'Na escrita formal canadense, evite utilizar AM e PM; prefira o sistema de 24 horas.'
      },
      { type: 'heading', text: '3. Dias da semana, meses e datas' },
      {
        type: 'paragraph',
        text:
          'Os dias da semana e os meses são escritos com letra minúscula em francês, diferentemente do inglês. Uma data normalmente segue a ordem dia, mês e ano. ' +
          'O primeiro dia do mês é uma exceção: utiliza-se [[1er|primeiro]], e não apenas o número 1.'
      },
      {
        type: 'table',
        headers: ['Dias da semana'],
        rows: [
          ['[[lundi|segunda-feira]]'],
          ['[[mardi|terça-feira]]'],
          ['[[mercredi|quarta-feira]]'],
          ['[[jeudi|quinta-feira]]'],
          ['[[vendredi|sexta-feira]]'],
          ['[[samedi|sábado]]'],
          ['[[dimanche|domingo]]']
        ]
      },
      {
        type: 'table',
        headers: ['Meses do ano'],
        rows: [
          ['[[janvier|janeiro]]'],
          ['[[février|fevereiro]]'],
          ['[[mars|março]]'],
          ['[[avril|abril]]'],
          ['[[mai|maio]]'],
          ['[[juin|junho]]'],
          ['[[juillet|julho]]'],
          ['[[août|agosto]]'],
          ['[[septembre|setembro]]'],
          ['[[octobre|outubro]]'],
          ['[[novembre|novembro]]'],
          ['[[décembre|dezembro]]']
        ]
      },
      {
        type: 'list',
        items: [
          'Data completa: [[le 12 novembre 2026|12 de novembro de 2026]].',
          'Primeiro dia do mês: [[le 1er mai|1º de maio]].',
          'Com dia da semana: [[jeudi 12 novembre 2026|quinta-feira, 12 de novembro de 2026]].',
          'Indicar o mês: [[en novembre|em novembro]].',
          'Indicar uma data específica: [[le 15 juin|no dia 15 de junho]].',
          'Indicar uma data habitual: [[Tous les lundis, je vais à la salle de sport.|Todas as segundas-feiras, vou à academia.]]',
          'Indicar um período: [[Du 10 au 15 décembre.|De 10 a 15 de dezembro.]]'
        ]
      },
      { type: 'heading', text: '4. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a influência do português e do inglês',
        text:
          'Uma dificuldade frequente é utilizar a lógica numérica do português. Em francês, [[soixante-dix|70]] ' +
          'significa literalmente sessenta e dez, e [[quatre-vingts|80]] corresponde a quatro vezes vinte. ' +
          'Também não escreva os meses com inicial maiúscula por influência do inglês: [[novembre|novembro]] e [[décembre|dezembro]] começam com minúscula. ' +
          'Outra diferença importante está na apresentação das datas: utilize [[le 12 novembre 2026|12 de novembro de 2026]], e não a ordem mês, dia e ano do formato americano.'
      },
      {
        type: 'list',
        items: [
          'Não confunda [[quatre-vingts|80]] com [[quatre-vingt-un|81]]. O s desaparece quando o número é seguido de outra unidade numérica.',
          'Não acrescente s a [[mille|mil]] quando escrever números por extenso. A forma correta é [[deux mille|dois mil]].',
          'Não utilize ponto para separar a parte decimal. Em francês, utiliza-se vírgula: [[3,5|3,5]], lido [[trois virgule cinq|três vírgula cinco]].',
          'Não confunda [[midi|meio-dia]] com [[minuit|meia-noite]].',
          'Não escreva [[1 mai|1 de maio]] quando quiser indicar o primeiro dia do mês. Prefira [[1er mai|1º de maio]].',
          'Não coloque maiúscula nos dias e meses no meio de uma frase: [[lundi|segunda-feira]], [[mardi|terça-feira]] e [[janvier|janeiro]].'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Treine compreender e produzir números em diferentes contextos: idades, valores, quantidades, horários, datas e compromissos. ' +
          'Na compreensão oral, pratique reconhecer números pronunciados rapidamente e distinguir horários próximos, como 14 h 15 e 14 h 50. ' +
          'Na expressão oral e escrita, saiba marcar horários, informar datas e organizar compromissos com precisão. ' +
          'A familiaridade com o sistema de 24 horas e os números compostos também é especialmente útil no contexto canadense.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As sete páginas do Portal linguistique du Canada listadas não puderam ser abertas por causa de uma verificação de segurança do site, então nada nesta página foi confirmado por elas: ' +
          'nem as regras de escrita dos numerais (s em quatre-vingts e cents, mille invariável), nem a escrita da hora com h e espaços, nem a recomendação de evitar AM e PM, nem a ordem e a grafia das datas. ' +
          'Também não há fonte para a afirmação de que o sistema de 24 horas é muito usado no francês canadense, nem para as recomendações de treino para o TEF Canada e o TCF Canada (como distinguir 14 h 15 de 14 h 50): são sugestões de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'Les nombres, les heures et les dates',
    summary:
      'Apprenez à compter, à écrire les nombres, à indiquer l’heure et à fixer des rendez-vous en français. ' +
      'Maîtrisez les particularités des nombres composés, le système de vingt-quatre heures et les règles d’écriture des dates, des jours de la semaine et des mois, en privilégiant l’usage canadien.',
    blocks: [
      { type: 'heading', text: '1. Les nombres cardinaux et leur formation' },
      {
        type: 'paragraph',
        text:
          'Les nombres cardinaux servent à indiquer des quantités, des âges, des prix, des horaires et des dates. ' +
          'En français, certaines dizaines suivent une logique différente de celle du portugais, particulièrement à partir de 70. ' +
          'Au Canada, les formes soixante-dix, quatre-vingts et quatre-vingt-dix sont couramment utilisées, comme en France.'
      },
      {
        type: 'table',
        headers: ['Nombre', 'En français'],
        rows: [
            [
              '0',
              'zéro'
            ],
            [
              '1',
              'un / une'
            ],
            [
              '2',
              'deux'
            ],
            [
              '3',
              'trois'
            ],
            [
              '4',
              'quatre'
            ],
            [
              '5',
              'cinq'
            ],
            [
              '6',
              'six'
            ],
            [
              '7',
              'sept'
            ],
            [
              '8',
              'huit'
            ],
            [
              '9',
              'neuf'
            ],
            [
              '10',
              'dix'
            ],
            [
              '11',
              'onze'
            ],
            [
              '12',
              'douze'
            ],
            [
              '13',
              'treize'
            ],
            [
              '14',
              'quatorze'
            ],
            [
              '15',
              'quinze'
            ],
            [
              '16',
              'seize'
            ],
            [
              '17',
              'dix-sept'
            ],
            [
              '18',
              'dix-huit'
            ],
            [
              '19',
              'dix-neuf'
            ],
            [
              '20',
              'vingt'
            ],
            [
              '30',
              'trente'
            ],
            [
              '40',
              'quarante'
            ],
            [
              '50',
              'cinquante'
            ],
            [
              '60',
              'soixante'
            ],
            [
              '70',
              'soixante-dix'
            ],
            [
              '80',
              'quatre-vingts'
            ],
            [
              '90',
              'quatre-vingt-dix'
            ],
            [
              '100',
              'cent'
            ],
            [
              '1 000',
              'mille'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Les nombres intermédiaires sont formés en combinant les dizaines et les unités : vingt-deux, trente-cinq, quarante-huit et soixante-trois. ' +
          'Certaines formes utilisent et : vingt et un, trente et un et soixante et onze. ' +
          'Pour les nombres plus grands, observez les règles d’écriture : quatre-vingts et deux cents prennent un s lorsqu’ils terminent le nombre, mais perdent cette marque devant un autre nombre, comme dans quatre-vingt-un et deux cent cinq. ' +
          'Mille ne prend jamais de s lorsqu’il est employé comme numéral, tandis que million varie au pluriel : deux millions.'
      },
      { type: 'heading', text: '2. Comment indiquer l’heure' },
      {
        type: 'paragraph',
        text:
          'En français canadien, le système de vingt-quatre heures est très utilisé dans les horaires, les documents et les communications formelles. ' +
          'Pour écrire l’heure, on utilise le symbole h entre les heures et les minutes, avec des espaces : 8 h 30, 13 h 15 et 17 h 45. ' +
          'À l’oral, on peut prononcer les nombres normalement ou utiliser des expressions comme midi et minuit.'
      },
      {
        type: 'table',
        headers: ['Heure', 'Comment la dire en français', 'Signification'],
        rows: [
            [
              '6 h 00',
              'six heures',
              'Six heures du matin'
            ],
            [
              '8 h 15',
              'huit heures quinze',
              'Huit heures quinze'
            ],
            [
              '8 h 30',
              'huit heures et demie',
              'Huit heures trente'
            ],
            [
              '12 h 00',
              'midi',
              'Douze heures'
            ],
            [
              '13 h 00',
              'treize heures',
              'Une heure de l’après-midi'
            ],
            [
              '14 h 30',
              'quatorze heures trente',
              'Deux heures et demie de l’après-midi'
            ],
            [
              '18 h 45',
              'dix-huit heures quarante-cinq',
              'Six heures quarante-cinq du soir'
            ],
            [
              '0 h 00',
              'minuit',
              'Zéro heure'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Pour fixer un rendez-vous, utilisez à devant l’heure : « Le rendez-vous est à 9 h 30. » Pour indiquer un intervalle, utilisez de... à... ' +
          ': « Je travaille de 9 h à 17 h. » Dans les écrits formels au Canada, évitez les abréviations AM et PM ; privilégiez le système de vingt-quatre heures.'
      },
      { type: 'heading', text: '3. Les jours de la semaine, les mois et les dates' },
      {
        type: 'paragraph',
        text:
          'Les jours de la semaine et les mois s’écrivent avec une minuscule en français, contrairement à l’anglais. ' +
          'Une date suit normalement l’ordre jour, mois et année. Le premier jour du mois constitue une exception : on utilise 1er, et non simplement le chiffre 1.'
      },
      {
        type: 'table',
        headers: ['Jours de la semaine'],
        rows: [
          ['lundi'],
          ['mardi'],
          ['mercredi'],
          ['jeudi'],
          ['vendredi'],
          ['samedi'],
          ['dimanche']
        ]
      },
      {
        type: 'table',
        headers: ['Mois de l’année'],
        rows: [
          ['janvier'],
          ['février'],
          ['mars'],
          ['avril'],
          ['mai'],
          ['juin'],
          ['juillet'],
          ['août'],
          ['septembre'],
          ['octobre'],
          ['novembre'],
          ['décembre']
        ]
      },
      {
        type: 'list',
        items: [
          'Date complète : le 12 novembre 2026.',
          'Premier jour du mois : le 1er mai.',
          'Avec le jour de la semaine : jeudi 12 novembre 2026.',
          'Indiquer le mois : en novembre.',
          'Indiquer une date précise : le 15 juin.',
          'Indiquer une habitude : Tous les lundis, je vais à la salle de sport.',
          'Indiquer une période : Du 10 au 15 décembre.'
        ]
      },
      { type: 'heading', text: '4. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à l’influence du portugais et de l’anglais',
        text:
          'Une difficulté fréquente consiste à appliquer la logique des nombres du portugais. ' +
          'En français, soixante-dix signifie littéralement soixante et dix, et quatre-vingts correspond à quatre fois vingt. ' +
          'N’écrivez pas non plus les mois avec une majuscule initiale sous l’influence de l’anglais : novembre et décembre commencent par une minuscule. ' +
          'Une autre différence importante concerne la présentation des dates : écrivez le 12 novembre 2026, et non dans l’ordre mois, jour et année du format américain.'
      },
      {
        type: 'list',
        items: [
          'Ne confondez pas quatre-vingts et quatre-vingt-un. Le s disparaît lorsque le nombre est suivi d’une autre unité numérique.',
          'N’ajoutez pas de s à mille lorsque vous écrivez les nombres en toutes lettres. La forme correcte est deux mille.',
          'N’utilisez pas de point pour séparer la partie décimale. En français, on utilise une virgule : 3,5, qui se lit trois virgule cinq.',
          'Ne confondez pas midi et minuit.',
          'N’écrivez pas 1 mai lorsque vous voulez indiquer le premier jour du mois. Préférez 1er mai.',
          'Ne mettez pas de majuscule aux jours et aux mois au milieu d’une phrase : lundi, mardi et janvier.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous à comprendre et à produire des nombres dans différents contextes : âges, montants, quantités, horaires, dates et rendez-vous. ' +
          'En compréhension orale, pratiquez la reconnaissance des nombres prononcés rapidement et la distinction entre des horaires proches, comme 14 h 15 et 14 h 50. ' +
          'En expression orale et écrite, apprenez à indiquer les heures, à communiquer des dates et à organiser des rendez-vous avec précision. ' +
          'La maîtrise du système de vingt-quatre heures et des nombres composés est également particulièrement utile dans le contexte canadien.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les sept pages du Portail linguistique du Canada indiquées n’ont pas pu être ouvertes à cause d’une vérification de sécurité du site : rien sur cette page n’est donc confirmé par elles, ' +
          'ni les règles d’écriture des numéraux (s dans quatre-vingts et cents, mille invariable), ni l’écriture de l’heure avec h et des espaces, ni la recommandation d’éviter AM et PM, ni l’ordre et la graphie des dates. ' +
          'Il n’y a pas non plus de source pour l’affirmation selon laquelle le système de vingt-quatre heures est très utilisé en français canadien, ni pour les recommandations d’entraînement pour le TEF Canada et le TCF Canada (comme distinguer 14 h 15 de 14 h 50) : ce sont des conseils de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Portail linguistique du Canada – Nombres cardinaux',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/nombres-cardinaux'
    },
    {
      title: 'Portail linguistique du Canada – Écriture de l’heure',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/heure-ecriture-de-lheure'
    },
    {
      title: 'Portail linguistique du Canada – Date : règles d’écriture',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/date-regles-decriture'
    },
    {
      title: 'Portail linguistique du Canada – Jours de la semaine',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/jours-de-la-semaine'
    },
    {
      title: 'Portail linguistique du Canada – Mois',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/mois'
    },
    {
      title: 'Portail linguistique du Canada – Vingt',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/vingt'
    },
    {
      title: 'Portail linguistique du Canada – Cent',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/cent'
    }
  ]
}

export default content
