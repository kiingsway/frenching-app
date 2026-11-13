import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-condicionais',

  pt: {
    title: 'Frases condicionais: si + présent e si + imparfait',
    summary:
      'Você vai aprender a construir frases condicionais em francês para expressar situações possíveis, hipóteses e consequências. ' +
      'Também vai entender a diferença entre uma condição realista e uma situação imaginária, utilizando o presente, o imperfeito e o condicional presente.',
    blocks: [
      { type: 'heading', text: 'Como funcionam as frases condicionais' },
      {
        type: 'paragraph',
        text:
          'Uma frase condicional apresenta uma condição e sua consequência. Em francês, a conjunção [[si|se]] introduz a condição. ' +
          'A escolha dos tempos verbais depende de como o falante considera essa situação: possível ou realista, de um lado, e hipotética ou imaginária, de outro.'
      },
      {
        type: 'table',
        headers: ['Estrutura', 'Quando utilizar', 'Exemplo'],
        rows: [
            [
              '[[Si + présent → présent|Se + presente → presente]]',
              'Condições habituais ou situações consideradas possíveis.',
              '[[Si j’ai le temps, je travaille à la bibliothèque.|Se tenho tempo, trabalho na biblioteca.]]'
            ],
            [
              '[[Si + présent → futur simple|Se + presente → futuro simples]]',
              'Uma condição possível com uma consequência futura.',
              '[[Si tu étudies, tu réussiras à l’examen.|Se você estudar, será aprovado na prova.]]'
            ],
            [
              '[[Si + présent → impératif|Se + presente → imperativo]]',
              'Uma instrução ou recomendação condicionada a uma situação.',
              '[[Si tu as besoin d’aide, appelle-moi.|Se precisar de ajuda, me ligue.]]'
            ],
            [
              '[[Si + imparfait → conditionnel présent|Se + imperfeito → condicional presente]]',
              'Uma hipótese imaginária ou pouco provável no presente ou no futuro.',
              '[[Si j’avais plus de temps, je suivrais un cours de français.|Se eu tivesse mais tempo, faria um curso de francês.]]'
            ]
        ]
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[Si le service est encore ouvert, nous passerons au bureau après le travail.|Se o serviço ainda estiver aberto, passaremos pelo escritório depois do trabalho.]]',
          '[[Si tu habites près du métro, tu peux facilement te rendre au centre-ville.|Se você mora perto do metrô, pode chegar facilmente ao centro da cidade.]]',
          '[[Si je gagnais mieux ma vie, je louerais un appartement plus grand.|Se eu ganhasse melhor a vida, alugaria um apartamento maior.]]',
          '[[Si nous avions une voiture, nous visiterions davantage de régions du Québec.|Se tivéssemos um carro, visitaríamos mais regiões de Quebec.]]'
        ]
      },
      { type: 'heading', text: 'Diferença entre possibilidade e hipótese' },
      {
        type: 'paragraph',
        text:
          'Com [[si + présent|se + presente]], o falante apresenta uma condição que pode realmente acontecer ou que faz parte de uma situação habitual. ' +
          'Com [[si + imparfait|se + imperfeito]], apresenta uma situação imaginária, hipotética ou menos provável, geralmente relacionada ao presente ou ao futuro. ' +
          'Nesse segundo caso, o [[imparfait|imperfeito]] não indica necessariamente uma ação passada: ele expressa a distância entre a realidade e a hipótese.'
      },
      {
        type: 'paragraph',
        text:
          'A ordem das orações pode ser invertida sem mudar a relação de condição e consequência. ' +
          'Compare [[Si j’avais plus de temps, je suivrais un cours.|Se eu tivesse mais tempo, faria um curso.]] ' +
          'e [[Je suivrais un cours si j’avais plus de temps.|Eu faria um curso se tivesse mais tempo.]] Quando a oração introduzida por [[si|se]] ' +
          'aparece primeiro, normalmente colocamos uma vírgula antes da consequência.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Nunca coloque o condicional ou o futuro depois de si em uma condição',
        text:
          'Um erro frequente, apontado pelo OQLF, é usar o condicional ou o futuro depois de [[si|se]] quando ele expressa uma condição, porque os dois fatos parecem hipotéticos. ' +
          'Não diga [[Si j’aurais plus de temps, je suivrais un cours.|Se eu teria mais tempo, faria um curso. (errado)]] ' +
          'nem [[Si tu viendras demain, nous irons ensemble.|Se você virá amanhã, iremos juntos. (errado)]] ' +
          'As formas corretas são [[Si j’avais plus de temps, je suivrais un cours.|Se eu tivesse mais tempo, faria um curso.]] ' +
          'e [[Si tu viens demain, nous irons ensemble.|Se você vier amanhã, iremos juntos.]] Atenção: o condicional pode aparecer depois de [[si|se]] ' +
          'em uma pergunta indireta, como [[Je me demande si elle viendrait.|Eu me pergunto se ela viria.]], porque nesse caso não se trata de uma condição.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Nas atividades de compreensão e produção, identifique primeiro se a frase expressa uma possibilidade ou uma hipótese. ' +
          'Para situações possíveis, pratique [[si + présent|se + presente]] seguido de presente, futuro ou imperativo. ' +
          'Para situações imaginárias no presente ou no futuro, utilize [[si + imparfait|se + imperfeito]] seguido de [[conditionnel présent|condicional presente]]. ' +
          'Também pratique inverter a ordem das orações sem alterar os tempos verbais.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam que depois de [[si|se]] com [[imparfait|imperfeito]] a consequência fica no [[conditionnel présent|condicional presente]], que a condição não vai ao condicional nem ao futuro, que a consequência pode estar no futuro ou no presente com valor de futuro, e que o condicional é possível depois de [[si|se]] em pergunta indireta. ' +
          'Não têm fonte: a consequência no imperativo, a distinção entre condição “possível” e “imaginária” como explicada, a ordem das orações e a vírgula, os exemplos e a dica para a prova. ' +
          'Esses pontos são material didático, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Les phrases conditionnelles : si + présent et si + imparfait',
    summary:
      'Vous apprendrez à construire des phrases conditionnelles en français pour exprimer des situations possibles, des hypothèses et leurs conséquences. ' +
      'Vous comprendrez également la différence entre une condition réaliste et une situation imaginaire, en utilisant le présent, l’imparfait et le conditionnel présent.',
    blocks: [
      { type: 'heading', text: 'Comment fonctionnent les phrases conditionnelles' },
      {
        type: 'paragraph',
        text:
          'Une phrase conditionnelle présente une condition et sa conséquence. En français, la conjonction si introduit la condition. ' +
          'Le choix des temps verbaux dépend de la manière dont le locuteur envisage la situation : comme une possibilité réelle ou comme une hypothèse imaginaire.'
      },
      {
        type: 'table',
        headers: ['Structure', 'Quand l’utiliser', 'Exemple'],
        rows: [
            [
              'Si + présent → présent',
              'Des conditions habituelles ou des situations considérées comme possibles.',
              'Si j’ai le temps, je travaille à la bibliothèque.'
            ],
            [
              'Si + présent → futur simple',
              'Une condition possible avec une conséquence future.',
              'Si tu étudies, tu réussiras à l’examen.'
            ],
            [
              'Si + présent → impératif',
              'Une instruction ou une recommandation qui dépend d’une situation.',
              'Si tu as besoin d’aide, appelle-moi.'
            ],
            [
              'Si + imparfait → conditionnel présent',
              'Une hypothèse imaginaire ou peu probable dans le présent ou dans l’avenir.',
              'Si j’avais plus de temps, je suivrais un cours de français.'
            ]
        ]
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'list',
        items: [
          'Si le service est encore ouvert, nous passerons au bureau après le travail.',
          'Si tu habites près du métro, tu peux facilement te rendre au centre-ville.',
          'Si je gagnais mieux ma vie, je louerais un appartement plus grand.',
          'Si nous avions une voiture, nous visiterions davantage de régions du Québec.'
        ]
      },
      { type: 'heading', text: 'Différence entre possibilité et hypothèse' },
      {
        type: 'paragraph',
        text:
          'Avec si + présent, le locuteur présente une condition qui peut réellement se produire ou qui fait partie d’une situation habituelle. ' +
          'Avec si + imparfait, il présente une situation imaginaire, hypothétique ou moins probable, généralement liée au présent ou à l’avenir. ' +
          'Dans ce deuxième cas, l’imparfait n’indique pas nécessairement une action passée : il exprime la distance entre la réalité et l’hypothèse.'
      },
      {
        type: 'paragraph',
        text:
          'L’ordre des propositions peut être inversé sans modifier la relation entre la condition et la conséquence. ' +
          'Comparez : « Si j’avais plus de temps, je suivrais un cours. » et « Je suivrais un cours si j’avais plus de temps. ' +
          '» Lorsque la proposition introduite par si apparaît en premier, on place généralement une virgule avant la conséquence.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne mettez jamais le conditionnel ou le futur après si dans une condition',
        text:
          'Une erreur fréquente, signalée par l’OQLF, consiste à employer le conditionnel ou le futur après si lorsqu’il exprime une condition, car les deux faits semblent hypothétiques. ' +
          'N’écrivez pas « Si j’aurais plus de temps, je suivrais un cours » ni « Si tu viendras demain, nous irons ensemble ». ' +
          'Les formes correctes sont « Si j’avais plus de temps, je suivrais un cours » et « Si tu viens demain, nous irons ensemble ». ' +
          'Attention : le conditionnel peut apparaître après si dans une interrogation indirecte, par exemple « Je me demande si elle viendrait », car il ne s’agit pas d’une condition.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les activités de compréhension et de production, identifiez d’abord si la phrase exprime une possibilité ou une hypothèse. ' +
          'Pour les situations possibles, entraînez-vous à utiliser si + présent suivi du présent, du futur ou de l’impératif. ' +
          'Pour les situations imaginaires dans le présent ou dans l’avenir, utilisez si + imparfait suivi du conditionnel présent. ' +
          'Entraînez-vous également à inverser l’ordre des propositions sans modifier les temps verbaux.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment qu’après si suivi de l’imparfait la conséquence se met au conditionnel présent, que la condition ne se met ni au conditionnel ni au futur, que la conséquence peut être au futur ou au présent à valeur de futur, et que le conditionnel est possible après si dans une interrogation indirecte. ' +
          'Ne sont pas sourcés : la conséquence à l’impératif, la distinction entre condition « possible » et « imaginaire » telle qu’expliquée, l’ordre des propositions et la virgule, les exemples et le conseil pour l’examen. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Office québécois de la langue française — Conditionnel dans les phrases hypothétiques',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24140/la-grammaire/le-verbe/temps-grammaticaux/conditionnel/conditionnel-dans-les-phrases-hypothetiques'
    },
    {
      title: 'Office québécois de la langue française — Phrase introduite par SI : mode verbal',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21324/la-grammaire/le-verbe/modes/concordance-des-temps/mode-verbal-apres-si'
    }
  ]
}

export default content
