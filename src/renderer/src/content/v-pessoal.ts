import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-pessoal',

  pt: {
    title: 'Vida pessoal: família, apresentação, rotina e personalidade',
    summary:
      'Aprenda a falar sobre familiares, apresentar-se, descrever hábitos cotidianos e caracterizar sua personalidade em francês. ' +
      'Conheça também diferenças entre o vocabulário do Québec e o da França e evite confusões comuns de uso e concordância.',
    blocks: [
      { type: 'heading', text: 'Família e apresentação' },
      {
        type: 'paragraph',
        text:
          'Para falar da família, use [[les parents|os pais]], [[le père|o pai]], [[la mère|a mãe]], [[les frères et sœurs|os irmãos]], [[le conjoint / la conjointe|o cônjuge / a pessoa parceira]], [[les enfants|os filhos]] ' +
          'e [[les petits-enfants|os netos]]. [[Le beau-père|O padrasto ou sogro]] e [[la belle-mère|a madrasta ou sogra]] dependem da relação familiar. ' +
          'Para se apresentar, combine [[Je m’appelle…|Meu nome é…]], [[J’habite à…|Moro em…]], [[Je travaille comme…|Trabalho como…]] e [[Je suis…|Sou…]].'
      },
      {
        type: 'paragraph',
        text:
          'Para descrever a rotina, alguns verbos importantes são [[se lever|levantar-se]], [[se préparer|preparar-se]], [[se rendre au travail|ir para o trabalho]], [[rentrer à la maison|voltar para casa]], [[se détendre|relaxar]] ' +
          'e [[se coucher|deitar-se]]. Para indicar frequência, use [[tous les jours|todos os dias]], [[souvent|com frequência]], [[parfois|às vezes]] ' +
          'e [[rarement|raramente]]. ' +
          'Para falar da personalidade, use adjetivos como [[calme|calmo / calma]], [[curieux / curieuse|curioso / curiosa]], [[organisé / organisée|organizado / organizada]], [[bavard / bavarde|falante]] e [[sociable|sociável]].'
      },
      {
        type: 'table',
        headers: ['Situação', 'Francês do Québec', 'Uso comum na França'],
        rows: [
            [
              'Refeição da manhã',
              '[[le déjeuner|o café da manhã]]',
              '[[le petit-déjeuner|o café da manhã]]'
            ],
            [
              'Refeição do meio-dia',
              '[[le dîner|o almoço]]',
              '[[le déjeuner|o almoço]]'
            ],
            [
              'Refeição da noite',
              '[[le souper|o jantar]]',
              '[[le dîner|o jantar]]'
            ]
        ]
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'paragraph',
        text:
          '[[Je m’appelle Ana et j’habite à Gatineau depuis deux ans.|Meu nome é Ana e moro em Gatineau há dois anos.]] ' +
          '[[Je vis avec mon conjoint et notre fille, et je téléphone à mes parents chaque fin de semaine.|Moro com meu companheiro e nossa filha, e telefono para meus pais todo fim de semana.]] ' +
          '[[En semaine, je me lève tôt, je travaille dans un café et je soupe avec ma famille vers 18 h.|Durante a semana, acordo cedo, trabalho em um café e janto com minha família por volta das 18h.]] ' +
          '[[Je suis plutôt calme, curieuse et organisée, mais je deviens bavarde avec mes proches.|Sou relativamente calma, curiosa e organizada, mas fico falante quando estou com pessoas próximas.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção ao contexto e à concordância',
        text:
          'Falso amigo: [[les parents|os pais]] não são “os parentes”. [[Mes parents|Meus pais]] designa a mãe e o pai, enquanto [[un parent|um parente]] é qualquer pessoa da família. ' +
          'Para falar claramente da família extensa, prefira [[les membres de ma famille|os membros da minha família]]. ' +
          'Cuidado também com as refeições: [[dîner|almoço (Québec) / jantar (França)]] muda de sentido conforme a região, e [[souper|jantar]] é a forma do Québec para a refeição da noite. ' +
          'Outro cuidado: [[mes|meus / minhas]] é a forma plural de [[mon|meu]] e [[ma|minha]], e acompanha o substantivo; não o confunda com [[mais|mas]]. ' +
          'Os adjetivos de personalidade também concordam com a pessoa descrita: [[curieux / curieuse|curioso / curiosa]] e [[organisé / organisée|organizado / organizada]].'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Prepare uma apresentação com detalhes',
        text:
          'No TCF Canada, a expressão oral é individual, presencial com um examinador, com 3 exercícios e 12 minutos, dos quais 2 são de preparação. ' +
          'O TEF Canada também inclui a expressão oral entre as provas obrigatórias. ' +
          'Treine respostas completas e naturais sobre você, sua família e sua rotina: apresente uma informação e acrescente um detalhe concreto, em vez de apenas listar palavras.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O Usito confirma [[déjeuner|café da manhã]], [[dîner|almoço]] e [[souper|jantar]] como o uso do Québec ([[déjeuner|café da manhã]] serve também ao almoço protocolar e [[dîner|almoço]] ao jantar protocolar) e a distinção entre [[parents|pais]] e [[parent|parente]]. ' +
          'O OQLF confirma que [[mes|meus / minhas]] é o plural de [[mon|meu]] e [[ma|minha]] e que o adjetivo concorda com o substantivo. ' +
          'O FEI confirma o formato da expressão oral do TCF Canada, e o Le français des affaires lista a expressão oral entre as provas obrigatórias do TEF Canada. ' +
          'Não têm fonte: [[petit-déjeuner|café da manhã]] e as outras formas da França, o vocabulário de família e rotina, os verbos pronominais da rotina, os exemplos e o conselho de treino. ' +
          'Esses pontos são material didático, não regra oficial nem garantia de que o tema aparece na prova.'
      }
    ]
  },

  fr: {
    title: 'Vie personnelle : famille, présentation, routine et personnalité',
    summary:
      'Apprenez à parler de votre famille, à vous présenter, à décrire vos habitudes quotidiennes et à caractériser votre personnalité en français. ' +
      'Découvrez également les différences entre le vocabulaire québécois et celui de France, ainsi que les erreurs courantes à éviter.',
    blocks: [
      { type: 'heading', text: 'Famille et présentation' },
      {
        type: 'paragraph',
        text:
          'Pour parler de votre famille, utilisez les mots suivants : les parents, le père, la mère, les frères et sœurs, le conjoint ou la conjointe, les enfants et les petits-enfants. ' +
          'Le beau-père et la belle-mère peuvent désigner les parents de votre conjoint ou de votre conjointe, ou encore le nouveau conjoint de votre père ou de votre mère. ' +
          'Pour vous présenter, vous pouvez utiliser des expressions comme Je m’appelle…, J’habite à…, Je travaille comme… et Je suis…'
      },
      {
        type: 'paragraph',
        text:
          'Pour décrire votre routine, certains verbes sont particulièrement utiles : se lever, se préparer, se rendre au travail, rentrer à la maison, se détendre et se coucher. ' +
          'Pour indiquer la fréquence d’une activité, utilisez tous les jours, souvent, parfois ou rarement. ' +
          'Pour parler de la personnalité, utilisez des adjectifs comme calme, curieux ou curieuse, organisé ou organisée, bavard ou bavarde et sociable.'
      },
      {
        type: 'table',
        headers: ['Situation', 'Usage au Québec', 'Usage courant en France'],
        rows: [
            [
              'Repas du matin',
              'le déjeuner',
              'le petit-déjeuner'
            ],
            [
              'Repas du midi',
              'le dîner',
              'le déjeuner'
            ],
            [
              'Repas du soir',
              'le souper',
              'le dîner'
            ]
        ]
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'paragraph',
        text:
          'Je m’appelle Ana et j’habite à Gatineau depuis deux ans. Je vis avec mon conjoint et notre fille, et je téléphone à mes parents chaque fin de semaine. ' +
          'En semaine, je me lève tôt, je travaille dans un café et je soupe avec ma famille vers 18 h. ' +
          'Je suis plutôt calme, curieuse et organisée, mais je deviens bavarde avec mes proches.'
      },
      { type: 'heading', text: 'Pièges à éviter' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au contexte et aux accords',
        text:
          'Faux ami : les parents désignent le père et la mère, et non « les parentes » du portugais. Un parent est en revanche n’importe quelle personne de la famille. ' +
          'Pour parler clairement de votre famille élargie, utilisez les membres de ma famille. ' +
          'Attention aussi aux repas : dîner désigne le repas du midi au Québec et le repas du soir en France, et souper est la forme québécoise pour le repas du soir. ' +
          'Attention aussi aux déterminants possessifs : mes est la forme plurielle de mon et de ma, et s’accorde avec le nom qui suit ; ne le confondez pas avec mais. ' +
          'Les adjectifs de personnalité s’accordent également avec la personne décrite : curieux ou curieuse, organisé ou organisée.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Préparez une présentation avec des détails',
        text:
          'Au TCF Canada, l’expression orale est une épreuve individuelle en face à face avec un examinateur, composée de 3 exercices et d’une durée de 12 minutes, dont 2 minutes de préparation. ' +
          'Le TEF Canada comprend aussi l’expression orale parmi ses épreuves obligatoires. ' +
          'Entraînez-vous à donner des réponses complètes et naturelles sur vous, votre famille et votre routine : donnez une information, puis ajoutez un détail concret au lieu de simplement énumérer des mots.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Usito confirme déjeuner, dîner et souper comme l’usage québécois (déjeuner désignant aussi le repas du midi protocolaire et dîner le repas du soir protocolaire) et la distinction entre parents et parent. ' +
          'L’OQLF confirme que mes est le pluriel de mon et de ma et que l’adjectif s’accorde avec le nom. ' +
          'Le FEI confirme le format de l’expression orale du TCF Canada, et Le français des affaires place l’expression orale parmi les épreuves obligatoires du TEF Canada. ' +
          'Ne sont pas sourcés : petit-déjeuner et les autres formes de France, le vocabulaire de la famille et de la routine, les verbes pronominaux de la routine, les exemples et le conseil d’entraînement. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une garantie que le sujet sera évalué.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le dictionnaire Usito — Université de Sherbrooke',
      url: 'https://www.usherbrooke.ca/usito/'
    },
    {
      title: 'Parent, parente — Usito',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/parents'
    },
    {
      title: 'Déjeuner — Usito',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/d%C3%A9jeuner_2/lexies'
    },
    {
      title: 'Dîner — Usito',
      url: 'https://usito.usherbrooke.ca/lexies/mots/d%C3%AEner'
    },
    {
      title: 'Souper — Usito',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/souper_1/lexies'
    },
    {
      title: 'L’adjectif et le groupe adjectival : mode d’emploi — Banque de dépannage linguistique',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24304/la-grammaire/la-grammaire-actuelle/les-classes-de-mots-et-les-groupes/ladjectif-et-le-groupe-adjectival'
    },
    {
      title: 'Les homophones mais et mes — Banque de dépannage linguistique',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24822/la-grammaire/les-homophones-grammaticaux/les-homophones-mais-et-mes'
    },
    {
      title: 'TCF Canada — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
