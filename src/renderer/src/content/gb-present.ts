import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-present',

  pt: {
    title: 'Présent: verbos regulares e irregulares principais',
    summary:
      'O présent é o tempo mais usado do francês: serve para o que acontece agora, para hábitos, para verdades gerais e até para o futuro próximo. ' +
      'Os verbos em -er seguem um modelo só; os em -ir com -issons seguem outro; e um grupo pequeno de irregulares, que aparecem o tempo todo, precisa ser decorado.',
    blocks: [
      { type: 'heading', text: 'Verbos em -er (1º grupo)' },
      {
        type: 'paragraph',
        text:
          'Cerca de 90% dos verbos franceses terminam em -er e quase todos são regulares. Tire o -er e acrescente as terminações: ' +
          'parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.'
      },
      {
        type: 'paragraph',
        text:
          'Na fala, quatro formas soam iguais: parle, parles, parle e parlent. Só nous parlons e vous parlez se distinguem pelo som. ' +
          'O único -er irregular é aller (je vais, tu vas, il va, nous allons, vous allez, ils vont).'
      },

      { type: 'heading', text: 'Verbos em -ir com -issons (2º grupo)' },
      {
        type: 'paragraph',
        text: 'Verbos como finir, choisir, réussir e remplir ganham -iss- no plural: je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.'
      },

      { type: 'heading', text: 'Os irregulares que mais aparecem' },
      {
        type: 'table',
        headers: ['Verbo', 'je, tu, il', 'nous, vous, ils'],
        rows: [
          ['être (ser, estar)', 'suis, es, est', 'sommes, êtes, sont'],
          ['avoir (ter)', 'ai, as, a', 'avons, avez, ont'],
          ['faire (fazer)', 'fais, fais, fait', 'faisons, faites, font'],
          ['pouvoir (poder)', 'peux, peux, peut', 'pouvons, pouvez, peuvent'],
          ['vouloir (querer)', 'veux, veux, veut', 'voulons, voulez, veulent'],
          ['devoir (dever)', 'dois, dois, doit', 'devons, devez, doivent'],
          ['prendre (pegar, tomar)', 'prends, prends, prend', 'prenons, prenez, prennent'],
          ['venir (vir)', 'viens, viens, vient', 'venons, venez, viennent'],
          ['savoir (saber)', 'sais, sais, sait', 'savons, savez, savent'],
          ['attendre (esperar)', 'attends, attends, attend', 'attendons, attendez, attendent']
        ]
      },
      {
        type: 'paragraph',
        text: 'Prendre serve de modelo para apprendre e comprendre; venir, para devenir, revenir e tenir. Attendre é o modelo dos verbos em -re regulares, como répondre, vendre e entendre.'
      },

      { type: 'heading', text: 'Quando usar o présent' },
      {
        type: 'list',
        items: [
          'O que acontece agora: Je travaille. (Estou trabalhando.) Para insistir na ação em andamento: Je suis en train de travailler.',
          'Hábitos: Je prends le métro tous les jours.',
          'Verdades gerais: L’eau bout à 100 degrés.',
          'Um futuro próximo já combinado: Je pars demain matin.',
          'Com depuis, para uma ação que começou no passado e continua: J’habite à Montréal depuis deux ans. (Moro em Montreal há dois anos.)'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Não existe "estou fazendo" em francês',
        text:
          'O francês não usa estar + gerúndio. "Estou estudando" é simplesmente J’étudie (ou Je suis en train d’étudier). ' +
          'E "moro aqui há dois anos" fica no présent com depuis, nunca no passé composé.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'As questões costumam testar o plural dos irregulares (ils font, ils doivent, ils prennent, ils viennent) e o depuis com présent. ' +
          'Na compreensão oral, lembre que ils parlent e il parle soam iguais: o contexto e a liaison (ils‿arrivent) dizem se é plural.'
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
          'Environ 90 % des verbes français se terminent en -er et presque tous sont réguliers. On enlève -er et on ajoute les terminaisons : ' +
          'parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.'
      },
      {
        type: 'paragraph',
        text:
          'À l’oral, quatre formes se prononcent de la même façon : parle, parles, parle et parlent. Seuls nous parlons et vous parlez se distinguent à l’oreille. ' +
          'Le seul verbe en -er irrégulier est aller (je vais, tu vas, il va, nous allons, vous allez, ils vont).'
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
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

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
