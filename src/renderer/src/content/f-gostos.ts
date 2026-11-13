import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-gostos',

  pt: {
    title: 'Expressar gostos, preferências e sentimentos',
    summary:
      'Aprenda a falar sobre aquilo de que gosta, suas preferências e suas reações emocionais em francês. ' +
      'Conheça diferentes níveis de intensidade, compare opções, explique suas escolhas e expresse sentimentos positivos e negativos em situações cotidianas e profissionais.',
    blocks: [
      { type: 'heading', text: '1. Expressar gostos e intensidade' },
      {
        type: 'paragraph',
        text:
          'Para falar do que gosta ou não gosta, você pode utilizar verbos como [[aimer|gostar]], [[adorer|adorar]] e [[détester|detestar]]. ' +
          'A intensidade varia conforme a expressão escolhida. Em geral, [[aimer bien|gostar / ter simpatia por]] ' +
          'expressa um gosto moderado, enquanto [[aimer beaucoup|gostar muito]] e [[adorer|adorar]] transmitem maior intensidade. ' +
          'Para expressar uma preferência negativa, utilize [[ne pas aimer|não gostar]] ou [[détester|detestar]].'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado', 'Exemplo'],
        rows: [
            [
              '[[Aimer bien|Gostar / gostar um pouco]]',
              'Gosto moderado',
              '[[J’aime bien la musique québécoise.|Gosto de música quebequense.]]'
            ],
            [
              '[[Aimer|Gostar]]',
              'Expressar um gosto',
              '[[J’aime cuisiner à la maison.|Gosto de cozinhar em casa.]]'
            ],
            [
              '[[Aimer beaucoup|Gostar muito]]',
              'Gosto intenso',
              '[[J’aime beaucoup les activités de plein air.|Gosto muito de atividades ao ar livre.]]'
            ],
            [
              '[[Adorer|Adorar]]',
              'Gosto muito intenso',
              '[[J’adore les promenades au bord du lac.|Adoro passeios à beira do lago.]]'
            ],
            [
              '[[Ne pas aimer|Não gostar]]',
              'Gosto negativo',
              '[[Je n’aime pas le froid extrême.|Não gosto de frio extremo.]]'
            ],
            [
              '[[Détester|Detestar]]',
              'Aversão intensa',
              '[[Je déteste attendre longtemps.|Detesto esperar muito tempo.]]'
            ]
        ]
      },
      { type: 'heading', text: '2. Expressar preferências e comparar opções' },
      {
        type: 'paragraph',
        text:
          'Para indicar que prefere uma opção a outra, utilize [[préférer A à B|preferir A a B]]. A preposição [[à|a]] introduz a segunda opção da comparação. ' +
          'Também é possível utilizar [[préférer + infinitif|preferir + infinitivo]] para explicar qual atividade você escolheria. ' +
          'Outra expressão frequente, especialmente útil no francês canadense, é [[aimer mieux|preferir]]. ' +
          'Na escolha entre vocabulário regional e internacional, lembre-se de que [[magasiner|fazer compras]] ' +
          'é muito utilizado no Québec, enquanto [[faire du shopping|fazer compras]] é uma expressão bastante conhecida na França.'
      },
      {
        type: 'list',
        items: [
          '[[Je préfère le thé au café.|Prefiro chá a café.]]',
          '[[Je préfère marcher plutôt que prendre l’autobus.|Prefiro caminhar a pegar o ônibus.]]',
          '[[J’aime mieux passer la fin de semaine à la campagne.|Prefiro passar o fim de semana no campo.]]',
          '[[Tu préfères sortir ou rester à la maison ?|Você prefere sair ou ficar em casa?]]',
          '[[Je préfère les activités en plein air aux activités à l’intérieur.|Prefiro atividades ao ar livre a atividades em ambientes fechados.]]',
          '[[J’aime magasiner au centre commercial avec ma sœur.|Gosto de fazer compras no shopping com minha irmã.]]'
        ]
      },
      { type: 'heading', text: '3. Expressar sentimentos e reações' },
      {
        type: 'paragraph',
        text:
          'Para expressar sentimentos, você pode utilizar estruturas com adjetivos, verbos ou expressões impessoais. ' +
          'Algumas construções frequentes são [[être heureux de|estar feliz por]], [[être déçu de|estar decepcionado por]], [[avoir peur de|ter medo de]], [[ça me plaît|isso me agrada]], [[ça m’inquiète|isso me preocupa]] ' +
          'e [[ça m’énerve|isso me irrita]]. Também é possível utilizar [[être content que + subjonctif|estar contente que + subjuntivo]] ' +
          'quando se fala de uma ação realizada por outra pessoa.'
      },
      {
        type: 'list',
        items: [
          '[[Je suis heureux d’avoir trouvé un appartement près du métro.|Estou feliz por ter encontrado um apartamento perto do metrô.]]',
          '[[Je suis contente que mes amis puissent venir.|Estou contente que meus amigos possam vir.]]',
          '[[Cette nouvelle me fait plaisir.|Essa notícia me deixa feliz.]]',
          '[[Je suis déçu que le cours soit annulé.|Estou decepcionado que o curso tenha sido cancelado.]]',
          '[[J’ai peur de ne pas réussir l’examen.|Tenho medo de não passar no exame.]]',
          '[[Ça m’intéresse beaucoup d’apprendre de nouvelles langues.|Tenho muito interesse em aprender novos idiomas.]]',
          '[[Je suis passionné par la culture québécoise.|Sou apaixonado pela cultura quebequense.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Atenção à estrutura: quando o sentimento e a ação pertencem à mesma pessoa, geralmente utilizamos [[être heureux de + infinitif|estar feliz por + infinitivo]]. ' +
          'Quando outra pessoa realiza a ação, podemos utilizar [[être heureux que + subjonctif|estar feliz que + subjuntivo]]. ' +
          'Compare [[Je suis heureux de participer.|Estou feliz por participar.]] com [[Je suis heureux que tu participes.|Estou feliz que você participe.]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não confunda aimer, aimer bien e préférer',
        text:
          'Um erro comum é utilizar todas essas expressões como se tivessem exatamente o mesmo significado. [[Aimer|Gostar]] ' +
          'expressa um gosto, [[aimer bien|gostar moderadamente]] pode indicar uma apreciação mais leve e [[préférer|preferir]] estabelece uma escolha entre alternativas. ' +
          'Outro erro é esquecer a preposição na comparação: a construção correta é [[Je préfère le thé au café.|Prefiro chá a café.]], e não uma tradução literal de prefiro chá do que café. ' +
          'Além disso, não utilize [[aimer de faire|gostar de fazer]]: o infinitivo vem diretamente depois de [[aimer|gostar]], como em [[J’aime voyager.|Gosto de viajar.]]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na expressão oral do TCF Canada, você pode precisar falar sobre si mesmo, seus interesses, suas experiências e suas opiniões. ' +
          'A terceira tarefa envolve desenvolver um ponto de vista, enquanto a primeira inclui uma conversa sobre sua vida pessoal. ' +
          'No TEF Canada, a seção B da expressão oral exige argumentar para convencer o interlocutor. ' +
          'Pratique apresentar um gosto pessoal, comparar duas opções, explicar suas razões e reconhecer uma vantagem da alternativa. ' +
          'Em vez de responder apenas [[J’aime ça.|Gosto disso.]], desenvolva sua resposta com [[parce que|porque]], [[car|pois]] e [[en revanche|por outro lado]].'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O TV5MONDE confirma a escala de intensidade [[bien aimer|gostar um pouco]] < [[aimer|gostar]] < [[aimer beaucoup|gostar muito]] < [[adorer|adorar]], [[ne pas aimer|não gostar]] < [[détester|detestar]], as fórmulas [[Je pense que|acho que]], [[Je crois que|acredito que]], [[Je trouve que|acho que]], [[J’ai l’impression que|tenho a impressão de que]], [[À mon avis|na minha opinião]] e [[Pour moi|para mim]], e, para sentimentos, [[ça me + verbe + de + infinitif|isso me + verbo + de + infinitivo]] e [[c’est + adjectif|é + adjetivo]] (por exemplo [[ça me plaît|isso me agrada]], [[ça m’amuse|isso me diverte]], [[ça me gêne|isso me incomoda]], [[ça m’agace|isso me irrita]]), além do conditionnel passé para os arrependimentos. ' +
          'O Usito confirma [[aimer + infinitif|gostar de + infinitivo]] sem preposição ([[Aimer sortir, chanter.|Gostar de sair, de cantar.]]), [[aimer mieux|preferir]] como sinônimo de [[préférer|preferir]], [[préférer qqch. à qqch.|preferir algo a algo]] e [[préférer + infinitif|preferir + infinitivo]], e [[magasiner|fazer compras]] como uso do Québec com o sentido de fazer compras nas lojas. ' +
          'Não têm fonte: [[ça m’inquiète|isso me preocupa]], [[ça m’énerve|isso me irrita]], [[être heureux de|estar feliz por]], [[être déçu de|estar decepcionado por]], [[avoir peur de|ter medo de]] e a regra de [[être content que|estar contente que]] + subjuntivo, [[faire du shopping|fazer compras]] como forma da França, os exemplos e as estratégias de desenvolvimento das respostas. ' +
          'O manual do examinador do TCF confirma que a tarefa 1 trata de gostos e centros de interesse e a tarefa 3 de expressão de um ponto de vista, e o PDF de exemplos de sujets do TEF confirma a seção B (convencer um amigo). ' +
          'Não existe exigência oficial de utilizar essas expressões específicas nos exames. As recomendações são conselhos de preparação, não regras oficiais das provas.'
      }
    ]
  },

  fr: {
    title: 'Exprimer ses goûts, ses préférences et ses sentiments',
    summary:
      'Apprenez à parler de ce que vous aimez, de vos préférences et de vos réactions émotionnelles en français. ' +
      'Découvrez différents degrés d’intensité, comparez des options, expliquez vos choix et exprimez des sentiments positifs et négatifs dans des situations quotidiennes et professionnelles.',
    blocks: [
      { type: 'heading', text: '1. Exprimer ses goûts et leur intensité' },
      {
        type: 'paragraph',
        text:
          'Pour parler de ce que vous aimez ou n’aimez pas, vous pouvez utiliser des verbes comme aimer, adorer et détester. L’intensité varie selon l’expression choisie. ' +
          'En général, aimer bien exprime un goût modéré, tandis qu’aimer beaucoup et adorer transmettent une plus grande intensité. ' +
          'Pour exprimer un goût négatif, utilisez ne pas aimer ou détester.'
      },
      {
        type: 'table',
        headers: ['Expression française', 'Signification', 'Exemple'],
        rows: [
            [
              'Aimer bien',
              'Goût modéré',
              'J’aime bien la musique québécoise.'
            ],
            [
              'Aimer',
              'Exprimer un goût',
              'J’aime cuisiner à la maison.'
            ],
            [
              'Aimer beaucoup',
              'Goût prononcé',
              'J’aime beaucoup les activités de plein air.'
            ],
            [
              'Adorer',
              'Goût très prononcé',
              'J’adore les promenades au bord du lac.'
            ],
            [
              'Ne pas aimer',
              'Goût négatif',
              'Je n’aime pas le froid extrême.'
            ],
            [
              'Détester',
              'Aversion intense',
              'Je déteste attendre longtemps.'
            ]
        ]
      },
      { type: 'heading', text: '2. Exprimer ses préférences et comparer des options' },
      {
        type: 'paragraph',
        text:
          'Pour indiquer que vous préférez une option à une autre, utilisez préférer A à B. La préposition à introduit la deuxième option de la comparaison. ' +
          'Il est également possible d’utiliser préférer + infinitif pour expliquer quelle activité vous choisiriez. ' +
          'Une autre expression fréquente, particulièrement utile en français canadien, est aimer mieux. ' +
          'Pour choisir entre le vocabulaire régional et international, retenez que magasiner est très courant au Québec, tandis que faire du shopping est une expression bien connue en France.'
      },
      {
        type: 'list',
        items: [
          'Je préfère le thé au café.',
          'Je préfère marcher plutôt que prendre l’autobus.',
          'J’aime mieux passer la fin de semaine à la campagne.',
          'Tu préfères sortir ou rester à la maison ?',
          'Je préfère les activités en plein air aux activités à l’intérieur.',
          'J’aime magasiner au centre commercial avec ma sœur.'
        ]
      },
      { type: 'heading', text: '3. Exprimer ses sentiments et ses réactions' },
      {
        type: 'paragraph',
        text:
          'Pour exprimer vos sentiments, vous pouvez utiliser des structures avec des adjectifs, des verbes ou des expressions impersonnelles. ' +
          'Parmi les constructions fréquentes, on trouve être heureux de, être déçu de, avoir peur de, ça me plaît, ça m’inquiète et ça m’énerve. ' +
          'Il est également possible d’utiliser être content que + subjonctif lorsqu’on parle d’une action réalisée par une autre personne.'
      },
      {
        type: 'list',
        items: [
          'Je suis heureux d’avoir trouvé un appartement près du métro.',
          'Je suis contente que mes amis puissent venir.',
          'Cette nouvelle me fait plaisir.',
          'Je suis déçu que le cours soit annulé.',
          'J’ai peur de ne pas réussir l’examen.',
          'Ça m’intéresse beaucoup d’apprendre de nouvelles langues.',
          'Je suis passionné par la culture québécoise.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Attention à la construction : lorsque le sentiment et l’action concernent la même personne, on utilise généralement être heureux de + infinitif. ' +
          'Lorsque l’action est réalisée par une autre personne, on peut utiliser être heureux que + subjonctif. ' +
          'Comparez « Je suis heureux de participer » et « Je suis heureux que tu participes ».'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne confondez pas aimer, aimer bien et préférer',
        text:
          'Une erreur fréquente consiste à employer toutes ces expressions comme si elles avaient exactement le même sens. ' +
          'Aimer exprime un goût, aimer bien peut indiquer une appréciation plus modérée et préférer établit un choix entre plusieurs possibilités. ' +
          'Une autre erreur consiste à oublier la préposition dans une comparaison : la construction correcte est « Je préfère le thé au café », et non une traduction littérale de l’expression portugaise. ' +
          'De plus, n’utilisez pas aimer de faire : l’infinitif suit directement aimer, comme dans « J’aime voyager ».'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans l’expression orale du TCF Canada, vous pouvez être amené à parler de vous-même, de vos intérêts, de vos expériences et de vos opinions. ' +
          'La troisième tâche consiste à développer un point de vue, tandis que la première comprend un échange sur votre vie personnelle. ' +
          'Au TEF Canada, la section B de l’expression orale consiste à argumenter pour convaincre votre interlocuteur. ' +
          'Entraînez-vous à présenter un goût personnel, à comparer deux options, à expliquer vos raisons et à reconnaître un avantage de l’autre possibilité. ' +
          'Au lieu de répondre simplement « J’aime ça », développez votre réponse avec parce que, car et en revanche.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'TV5MONDE confirme l’échelle d’intensité bien aimer < aimer < aimer beaucoup < adorer, ne pas aimer < détester, les formules Je pense que, Je crois que, Je trouve que, J’ai l’impression que, À mon avis et Pour moi, et, pour les sentiments, ça me + verbe + de + infinitif et c’est + adjectif (par exemple ça me plaît, ça m’amuse, ça me gêne, ça m’agace), ainsi que le conditionnel passé pour les regrets. ' +
          'Usito confirme aimer + infinitif sans préposition (Aimer sortir, chanter.), aimer mieux comme synonyme de préférer, préférer qqch. à qqch. et préférer + infinitif, et magasiner comme emploi du Québec au sens de faire des achats dans les magasins. ' +
          'Ne sont pas sourcés : ça m’inquiète, ça m’énerve, être heureux de, être déçu de, avoir peur de et la règle de être content que + subjonctif, faire du shopping comme forme de France, les exemples et les stratégies de développement des réponses. ' +
          'Le manuel de l’examinateur du TCF confirme que la tâche 1 porte sur les goûts et les centres d’intérêt et la tâche 3 sur l’expression d’un point de vue, et le PDF d’exemples de sujets du TEF confirme la section B (convaincre un(e) ami(e)). ' +
          'Aucune exigence officielle n’impose l’utilisation de ces expressions précises pendant les examens. ' +
          'Les recommandations sont des conseils de préparation et non des règles officielles des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Manuel de l’examinateur du TCF, version Q, décembre 2025 — France Éducation international',
      url: 'https://www.france-education-international.fr/document/manuel-examinateur-tcf'
    },
    {
      title: 'Expression orale : exemples de sujets — Le français des affaires (TEF Canada)',
      url: 'https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2024/10/tef-exemples-epreuve-eo.pdf'
    },
    {
      title: 'Magasiner — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/magasiner'
    },
    {
      title: 'Grammaire : Exprimer son opinion — TV5MONDE',
      url: 'https://apprendre.tv5monde.com/fr/aides/grammaire-exprimer-son-opinion'
    },
    {
      title: 'Grammaire : Exprimer un sentiment, un regret, une plainte — TV5MONDE',
      url: 'https://apprendre.tv5monde.com/fr/aides/grammaire-exprimer-un-sentiment-un-regret-une-plainte'
    },
    {
      title: 'Aimer — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/aimer'
    },
    {
      title: 'Préférer — Usito, Université de Sherbrooke',
      url: 'https://sanction.usito.usherbrooke.ca/d%C3%A9finitions/pr%C3%A9f%C3%A9rer'
    },
    {
      title: 'TCF Canada — Présentation des épreuves — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
