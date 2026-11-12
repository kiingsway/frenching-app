import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-present',

  pt: {
    title: 'Présent: verbos regulares e irregulares principais',
    summary:
      'O [[présent|presente]] é o tempo mais usado do francês: serve para o que acontece agora, para hábitos, para verdades gerais e até para o futuro próximo. ' +
      'Os verbos em -er seguem um modelo só; os em -ir com -issons seguem outro; e um grupo pequeno de irregulares, que aparecem o tempo todo, precisa ser decorado.',
    blocks: [
      { type: 'heading', text: 'Verbos em -er (1º grupo)' },
      {
        type: 'paragraph',
        text:
          'A grande maioria dos verbos franceses termina em -er e quase todos são regulares. Tire o -er e acrescente as terminações: ' +
          '[[parler|falar]] → [[je parle|eu falo]], [[tu parles|você fala]], [[il parle|ele fala]], [[nous parlons|nós falamos]], [[vous parlez|vocês falam]], [[ils parlent|eles falam]].'
      },
      {
        type: 'paragraph',
        text:
          'Na fala, quatro formas soam iguais: [[parle|fala]], [[parles|você fala]], [[parle|fala]] e [[parlent|falam]]. Só [[nous parlons|nós falamos]] e [[vous parlez|vocês falam]] se distinguem pelo som. ' +
          'O único -er realmente irregular é [[aller|ir]] ([[je vais|eu vou]], [[tu vas|você vai]], [[il va|ele vai]], [[nous allons|nós vamos]], [[vous allez|vocês vão]], [[ils vont|eles vão]]). ' +
          'Alguns verbos em -er só mudam a grafia, como [[nous mangeons|nós comemos]] e [[j’achète|eu compro]].'
      },

      { type: 'heading', text: 'Verbos em -ir com -issons (2º grupo)' },
      {
        type: 'paragraph',
        text:
          'Verbos como [[finir|terminar]], [[choisir|escolher]], [[réussir|conseguir]] e [[remplir|preencher]] ganham -iss- no plural: ' +
          '[[je finis|eu termino]], [[tu finis|você termina]], [[il finit|ele termina]], [[nous finissons|nós terminamos]], [[vous finissez|vocês terminam]], [[ils finissent|eles terminam]].'
      },

      { type: 'heading', text: 'Os irregulares que mais aparecem' },
      {
        type: 'table',
        headers: ['Verbo', 'je, tu, il', 'nous, vous, ils'],
        rows: [
          [
            '[[être|ser / estar]]',
            '[[suis|sou / estou]], [[es|você é / está]], [[est|ele é / está]]',
            '[[sommes|somos / estamos]], [[êtes|vocês são / estão]], [[sont|eles são / estão]]'
          ],
          [
            '[[avoir|ter]]',
            '[[ai|tenho]], [[as|você tem]], [[a|ele tem]]',
            '[[avons|temos]], [[avez|vocês têm]], [[ont|eles têm]]'
          ],
          [
            '[[faire|fazer]]',
            '[[fais|faço]], [[fais|você faz]], [[fait|ele faz]]',
            '[[faisons|fazemos]], [[faites|vocês fazem]], [[font|eles fazem]]'
          ],
          [
            '[[pouvoir|poder]]',
            '[[peux|posso]], [[peux|você pode]], [[peut|ele pode]]',
            '[[pouvons|podemos]], [[pouvez|vocês podem]], [[peuvent|eles podem]]'
          ],
          [
            '[[vouloir|querer]]',
            '[[veux|quero]], [[veux|você quer]], [[veut|ele quer]]',
            '[[voulons|queremos]], [[voulez|vocês querem]], [[veulent|eles querem]]'
          ],
          [
            '[[devoir|dever]]',
            '[[dois|devo]], [[dois|você deve]], [[doit|ele deve]]',
            '[[devons|devemos]], [[devez|vocês devem]], [[doivent|eles devem]]'
          ],
          [
            '[[prendre|pegar / tomar]]',
            '[[prends|pego]], [[prends|você pega]], [[prend|ele pega]]',
            '[[prenons|pegamos]], [[prenez|vocês pegam]], [[prennent|eles pegam]]'
          ],
          [
            '[[venir|vir]]',
            '[[viens|venho]], [[viens|você vem]], [[vient|ele vem]]',
            '[[venons|vimos]], [[venez|vocês vêm]], [[viennent|eles vêm]]'
          ],
          [
            '[[savoir|saber]]',
            '[[sais|sei]], [[sais|você sabe]], [[sait|ele sabe]]',
            '[[savons|sabemos]], [[savez|vocês sabem]], [[savent|eles sabem]]'
          ],
          [
            '[[attendre|esperar]]',
            '[[attends|espero]], [[attends|você espera]], [[attend|ele espera]]',
            '[[attendons|esperamos]], [[attendez|vocês esperam]], [[attendent|eles esperam]]'
          ]
        ]
      },
      {
        type: 'paragraph',
        text:
          '[[Prendre|pegar]] serve de modelo para [[apprendre|aprender]] e [[comprendre|compreender]]; [[venir|vir]], para [[devenir|tornar-se]], [[revenir|voltar]] e [[tenir|segurar]]. ' +
          '[[Attendre|esperar]] é o modelo dos verbos em -re regulares, como [[répondre|responder]], [[vendre|vender]] e [[entendre|ouvir / entender]].'
      },

      { type: 'heading', text: 'Quando usar o [[présent|presente]]' },
      {
        type: 'list',
        items: [
          'O que acontece agora: [[Je travaille.|Estou trabalhando.]] Para insistir na ação em andamento: [[Je suis en train de travailler.|Estou trabalhando agora mesmo.]]',
          'Hábitos: [[Je prends le métro tous les jours.|Pego o metrô todos os dias.]]',
          'Verdades gerais: [[L’eau bout à 100 degrés.|A água ferve a 100 graus.]]',
          'Um futuro próximo já combinado: [[Je pars demain matin.|Parto amanhã de manhã.]]',
          'Com [[depuis|desde / há]], para uma ação que começou no passado e continua: [[J’habite à Montréal depuis deux ans.|Moro em Montreal há dois anos.]]'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Não existe "estou fazendo" em francês',
        text:
          'O francês não usa estar + gerúndio. "Estou estudando" é simplesmente [[J’étudie|Estudo]] (ou [[Je suis en train d’étudier|Estou estudando agora mesmo]]). ' +
          'E "moro aqui há dois anos" fica no [[présent|presente]] com [[depuis|desde / há]], nunca no [[passé composé|pretérito perfeito composto]].'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'As questões costumam testar o plural dos irregulares ([[ils font|eles fazem]], [[ils doivent|eles devem]], [[ils prennent|eles pegam]], [[ils viennent|eles vêm]]) e o [[depuis|desde / há]] com [[présent|presente]]. ' +
          'Na compreensão oral, lembre que [[ils parlent|eles falam]] e [[il parle|ele fala]] soam iguais: o contexto e a [[liaison|ligação]] entre as palavras, como em [[ils arrivent|eles chegam]], dizem se é plural.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'Nenhuma fonte oficial da prova confirma que as questões costumam testar o plural dos irregulares e o uso de depuis com o présent. ' +
          'Trate essa dica como conselho de preparação, não como regra da prova.'
      }
    ]
  },

  fr: {
    title: 'Le présent : les verbes réguliers et les principaux irréguliers',
    summary:
      'Le présent est le temps le plus utilisé en français : il sert pour ce qui se passe maintenant, pour les habitudes, pour les vérités générales et même pour le futur proche. ' +
      'Les verbes en -er suivent un seul modèle, ceux en -ir avec -issons en suivent un autre, et un petit groupe d’irréguliers, qu’on rencontre tout le temps, doit être appris par cœur.',
    blocks: [
      { type: 'heading', text: 'Les verbes en -er (1er groupe)' },
      {
        type: 'paragraph',
        text:
          'La grande majorité des verbes français se terminent en -er et presque tous sont réguliers. On enlève -er et on ajoute les terminaisons : ' +
          'parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.'
      },
      {
        type: 'paragraph',
        text:
          'À l’oral, quatre formes se prononcent de la même façon : parle, parles, parle et parlent. Seuls nous parlons et vous parlez se distinguent à l’oreille. ' +
          'Le seul verbe en -er vraiment irrégulier est aller (je vais, tu vas, il va, nous allons, vous allez, ils vont). ' +
          'Certains verbes en -er ne changent que d’orthographe, comme nous mangeons et j’achète.'
      },

      { type: 'heading', text: 'Les verbes en -ir avec -issons (2e groupe)' },
      {
        type: 'paragraph',
        text: 'Les verbes comme finir, choisir, réussir et remplir prennent -iss- au pluriel : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.'
      },

      { type: 'heading', text: 'Les irréguliers les plus fréquents' },
      {
        type: 'table',
        headers: ['Verbe', 'je, tu, il', 'nous, vous, ils'],
        rows: [
          ['être', 'suis, es, est', 'sommes, êtes, sont'],
          ['avoir', 'ai, as, a', 'avons, avez, ont'],
          ['faire', 'fais, fais, fait', 'faisons, faites, font'],
          ['pouvoir', 'peux, peux, peut', 'pouvons, pouvez, peuvent'],
          ['vouloir', 'veux, veux, veut', 'voulons, voulez, veulent'],
          ['devoir', 'dois, dois, doit', 'devons, devez, doivent'],
          ['prendre', 'prends, prends, prend', 'prenons, prenez, prennent'],
          ['venir', 'viens, viens, vient', 'venons, venez, viennent'],
          ['savoir', 'sais, sais, sait', 'savons, savez, savent'],
          ['attendre', 'attends, attends, attend', 'attendons, attendez, attendent']
        ]
      },
      {
        type: 'paragraph',
        text: 'Prendre sert de modèle pour apprendre et comprendre ; venir pour devenir, revenir et tenir. Attendre est le modèle des verbes réguliers en -re, comme répondre, vendre et entendre.'
      },

      { type: 'heading', text: 'Quand utiliser le présent' },
      {
        type: 'list',
        items: [
          'Ce qui se passe maintenant : Je travaille. Pour insister sur l’action en cours : Je suis en train de travailler.',
          'Les habitudes : Je prends le métro tous les jours.',
          'Les vérités générales : L’eau bout à 100 degrés.',
          'Un futur proche déjà prévu : Je pars demain matin.',
          'Avec depuis, pour une action qui a commencé dans le passé et qui continue : J’habite à Montréal depuis deux ans.'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Pas de forme progressive en français',
        text:
          'Le français n’utilise pas être + participe présent pour une action en cours. « Je suis en train d’étudier » existe, mais le plus souvent on dit simplement J’étudie. ' +
          'Et une action qui continue depuis deux ans reste au présent avec depuis, jamais au passé composé.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'À l’examen',
        text:
          'Les questions évaluent souvent le pluriel des irréguliers (ils font, ils doivent, ils prennent, ils viennent) et depuis avec le présent. ' +
          'En compréhension orale, rappelez-vous que ils parlent et il parle se prononcent de la même façon : c’est le contexte et la liaison (ils‿arrivent) qui indiquent le pluriel.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Aucune source officielle de l’épreuve ne confirme que les questions évaluent souvent le pluriel des irréguliers et l’emploi de depuis avec le présent. ' +
          'Cette indication est un conseil de préparation, pas une règle de l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Lawless French – Present Tense',
      url: 'https://www.lawlessfrench.com/grammar/present-tense/'
    },
    {
      title: 'Lawless French – Regular -er Verbs',
      url: 'https://www.lawlessfrench.com/grammar/regular-er-verbs/'
    },
    {
      title: 'Lawless French – Irregular Verbs',
      url: 'https://www.lawlessfrench.com/grammar/irregular-verbs/'
    },
    {
      title: 'Le Conjugueur (Le Figaro) – conjugação de qualquer verbo',
      url: 'https://leconjugueur.lefigaro.fr/'
    },
    {
      title: 'Kwiziq French – Gramática por tema e nível',
      url: 'https://french.kwiziq.com/revision/grammar'
    }
  ]
}

export default content
