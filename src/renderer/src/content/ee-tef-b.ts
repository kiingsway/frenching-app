import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-tef-b',

  pt: {
    title: 'TEF – Seção B: defender e justificar um ponto de vista',
    summary:
      'Aprenda a construir um texto argumentativo claro, organizado e convincente, apresentando sua opinião e justificando-a com argumentos e exemplos. ' +
      'Você vai praticar introduções, desenvolvimento, contra-argumentos, conectores e conclusões, seguindo as exigências da Seção B do TEF Canada.',
    blocks: [
      { type: 'heading', text: '1. O que a tarefa exige?' },
      {
        type: 'paragraph',
        text:
          'Na Seção B da expressão escrita do TEF Canada, você deve apresentar seu ponto de vista sobre uma afirmação ou questão e justificá-lo com argumentos e exemplos. ' +
          'A tarefa dura 35 minutos e exige pelo menos 200 palavras. Embora seja frequentemente chamada de carta, não é obrigatório escrever uma carta formal. ' +
          'O objetivo principal é desenvolver uma argumentação pessoal, coerente e bem fundamentada. ' +
          'Dependendo do enunciado, você pode reagir a um artigo de jornal, concordar ou discordar de uma opinião ou defender determinada proposta. ' +
          'A avaliação considera a pertinência das informações, a qualidade e o desenvolvimento dos argumentos, a coerência, a coesão, o vocabulário, a gramática, a ortografia e a pontuação.'
      },
      { type: 'heading', text: '2. Estrutura recomendada para o texto' },
      {
        type: 'list',
        items: [
          'Introdução: apresente o assunto e deixe clara sua posição. Não comece com uma introdução genérica que poderia servir para qualquer tema.',
          'Primeiro argumento: explique uma razão que sustenta sua opinião e desenvolva-a com uma justificativa ou exemplo concreto.',
          'Segundo argumento: apresente uma razão diferente, acrescentando novas informações e evitando repetir a mesma ideia.',
          'Contra-argumento: reconheça uma possível opinião contrária (a concessão) e explique por que ela não invalida necessariamente sua posição.',
          'Conclusão: retome sua opinião, sintetize os argumentos e apresente uma reflexão ou recomendação coerente.'
        ]
      },
      { type: 'heading', text: '3. Expressões para apresentar e desenvolver sua opinião' },
      {
        type: 'table',
        headers: ['Função', 'Expressões em francês', 'Como utilizar'],
        rows: [
            [
              'Apresentar opinião',
              '[[À mon avis, selon moi, pour ma part|Na minha opinião, segundo meu ponto de vista, quanto a mim]]',
              'Indicar seu posicionamento.'
            ],
            [
              'Concordar',
              '[[Je partage cet avis, je suis tout à fait d’accord|Compartilho dessa opinião, concordo plenamente]]',
              'Demonstrar concordância.'
            ],
            [
              'Discordar',
              '[[Je ne partage pas cette opinion, je suis en désaccord avec cette idée|Não compartilho dessa opinião, discordo dessa ideia]]',
              'Apresentar uma posição contrária.'
            ],
            [
              'Acrescentar argumentos',
              '[[De plus, en outre, par ailleurs|Além disso, ademais, por outro lado]]',
              'Desenvolver novos argumentos.'
            ],
            [
              'Justificar',
              '[[En effet, étant donné que, puisque|De fato, considerando que, já que]]',
              'Explicar os motivos de uma afirmação.'
            ],
            [
              'Dar exemplos',
              '[[Par exemple, notamment, à titre d’exemple|Por exemplo, especialmente, a título de exemplo]]',
              'Tornar os argumentos mais concretos.'
            ],
            [
              'Apresentar uma ressalva',
              '[[Certes, toutefois, néanmoins|É verdade que, todavia, não obstante]]',
              'Introduzir uma concessão ou oposição.'
            ],
            [
              'Concluir',
              '[[En somme, en définitive, pour conclure|Em resumo, em última análise, para concluir]]',
              'Sintetizar sua posição.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemplo prático: proposta de redação' },
      { type: 'paragraph', text: 'Tema fictício: transporte público gratuito.' },
      {
        type: 'paragraph',
        text:
          '[[Les transports en commun devraient être gratuits pour tous les citoyens.|O transporte público deveria ser gratuito para todos os cidadãos.]] ' +
          '[[Êtes-vous d’accord avec cette affirmation ?|Você concorda com essa afirmação?]] ' +
          '[[Justifiez votre point de vue à l’aide d’arguments et d’exemples.|Justifique seu ponto de vista utilizando argumentos e exemplos.]]'
      },
      { type: 'heading', text: '5. Exemplo de resposta argumentativa' },
      {
        type: 'paragraph',
        text:
          '[[À la suite de votre article affirmant que les transports en commun devraient être gratuits pour tous, je souhaite apporter mon point de vue.|Após ler seu artigo afirmando que o transporte público deveria ser gratuito para todos, gostaria de apresentar meu ponto de vista.]] ' +
          '[[À mon avis, cette mesure serait avantageuse, à condition qu’elle soit mise en place progressivement et accompagnée d’un financement adéquat.|Na minha opinião, essa medida seria vantajosa, desde que fosse implementada progressivamente e acompanhada de um financiamento adequado.]]'
      },
      {
        type: 'paragraph',
        text:
          '[[Tout d’abord, la gratuité pourrait encourager davantage de personnes à laisser leur voiture à la maison.|Primeiramente, a gratuidade poderia incentivar mais pessoas a deixar o carro em casa.]] ' +
          '[[Dans les grandes villes comme Montréal, cela contribuerait à réduire la congestion routière et les émissions polluantes.|Nas grandes cidades, como Montreal, isso contribuiria para reduzir o congestionamento nas ruas e as emissões de poluentes.]] ' +
          '[[Les ménages à faible revenu bénéficieraient également d’un accès plus facile aux emplois, aux études et aux services essentiels.|As famílias de baixa renda também se beneficiariam de um acesso mais fácil aos empregos, aos estudos e aos serviços essenciais.]]'
      },
      {
        type: 'paragraph',
        text:
          '[[De plus, un réseau accessible à tous favoriserait l’inclusion sociale.|Além disso, uma rede acessível a todos favoreceria a inclusão social.]] ' +
          '[[Une personne qui doit limiter ses déplacements pour des raisons financières pourrait participer plus facilement à la vie culturelle et communautaire.|Uma pessoa que precisa limitar seus deslocamentos por razões financeiras poderia participar mais facilmente da vida cultural e comunitária.]]'
      },
      {
        type: 'paragraph',
        text:
          '[[Il ne faut toutefois pas négliger les coûts d’une telle décision.|No entanto, não devemos ignorar os custos de uma decisão como essa.]] ' +
          '[[Les sociétés de transport ont besoin de revenus pour entretenir les véhicules, améliorer la fréquence du service et prolonger certaines lignes.|As empresas de transporte precisam de receitas para manter os veículos, melhorar a frequência do serviço e ampliar determinadas linhas.]] ' +
          '[[Sans financement public suffisant, la gratuité risque même d’entraîner une baisse de la qualité du service.|Sem financiamento público suficiente, a gratuidade pode até provocar uma queda na qualidade do serviço.]] ' +
          '[[C’est pourquoi je privilégierais une mise en œuvre progressive, en commençant par les étudiants, les personnes âgées et les ménages à faible revenu.|Por esse motivo, eu priorizaria uma implementação gradual, começando pelos estudantes, idosos e famílias de baixa renda.]] ' +
          '[[Les autorités pourraient ensuite évaluer les résultats avant d’élargir le programme.|As autoridades poderiam então avaliar os resultados antes de ampliar o programa.]]'
      },
      {
        type: 'paragraph',
        text:
          '[[En somme, rendre les transports en commun gratuits représente une mesure intéressante, mais elle doit s’appuyer sur un financement durable et sur un service fiable.|Em resumo, tornar o transporte público gratuito representa uma medida interessante, mas ela precisa estar apoiada em um financiamento sustentável e em um serviço confiável.]] ' +
          '[[L’objectif ne devrait pas seulement être de supprimer le prix du billet, mais aussi d’offrir une véritable solution de mobilité à toute la population.|O objetivo não deveria ser apenas eliminar o preço da passagem, mas também oferecer uma verdadeira solução de mobilidade para toda a população.]]'
      },
      { type: 'heading', text: '6. Armadilhas comuns para brasileiros' },
      {
        type: 'list',
        items: [
          
            'Escrever como se fosse uma carta comercial formal, com endereço, data, assunto e despedida elaborada. Essa estrutura não é obrigatória na Seção B. ' +
            'Siga o formato indicado pelo enunciado.',
          
            'Apresentar opiniões sem justificá-las. Uma afirmação como [[Les transports gratuits sont une bonne idée.|O transporte gratuito é uma boa ideia.]] ' +
            'precisa ser acompanhada de razões e exemplos.',
          'Repetir o mesmo argumento utilizando palavras diferentes. Cada parágrafo deve acrescentar uma ideia relevante.',
          'Utilizar conectores sem compreender sua função. [[Pourtant|No entanto]] indica oposição, enquanto [[donc|portanto]] indica consequência.',
          'Fazer generalizações sem sustentação, como afirmar que uma medida beneficiará absolutamente todas as pessoas.',
          'Traduzir diretamente as estruturas do português. Prefira construções naturais em francês, respeitando a ordem das palavras e as regências dos verbos.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com os falsos cognatos',
        text:
          'Algumas palavras podem induzir brasileiros ao erro. [[Demander|Pedir ou perguntar]] não significa demandar, no sentido de exigir. ' +
          '[[Éventuellement|Possivelmente ou se necessário]] não significa eventualmente, no sentido de algo que acontece ocasionalmente. [[Prétendre|Afirmar ou alegar]] ' +
          'não significa pretender, no sentido de ter a intenção de fazer algo. Para isso, utilize [[avoir l’intention de|ter a intenção de]]. ' +
          'Esses erros podem prejudicar a clareza dos seus argumentos.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que a prova realmente cobra',
        text:
          'A Seção B exige pelo menos 200 palavras em 35 minutos. Não basta apresentar uma opinião: você precisa justificá-la, desenvolvê-la e ilustrá-la. ' +
          'Procure desenvolver pelo menos dois argumentos diferentes, com explicações e exemplos concretos. ' +
          'Utilize conectores variados sem exagerar e mantenha uma posição coerente do início ao fim. ' +
          'Não desperdice tempo criando uma introdução genérica ou uma despedida formal. ' +
          'Antes de entregar, confira a quantidade de palavras, os acordos de gênero e número, a conjugação verbal, os artigos, as preposições e a pontuação.'
      }
    ]
  },

  fr: {
    title: 'TEF – Section B : défendre et justifier un point de vue',
    summary:
      'Apprenez à construire un texte argumentatif clair, structuré et convaincant en présentant votre opinion et en la justifiant à l’aide d’arguments et d’exemples. ' +
      'Vous pratiquerez les introductions, le développement, les contre-arguments, les connecteurs et les conclusions, conformément aux exigences de la section B du TEF Canada.',
    blocks: [
      { type: 'heading', text: '1. Que demande cette activité ?' },
      {
        type: 'paragraph',
        text:
          'Dans la section B de l’épreuve d’expression écrite du TEF Canada, vous devez présenter votre point de vue sur une affirmation ou une question et le justifier à l’aide d’arguments et d’exemples. ' +
          'L’activité dure 35 minutes et exige au moins 200 mots. ' +
          'Bien que cette activité soit souvent appelée une lettre, il n’est pas obligatoire de rédiger une lettre formelle. ' +
          'L’objectif principal est de développer une argumentation personnelle, cohérente et bien fondée. ' +
          'Selon la consigne, vous pouvez réagir à un article de journal, exprimer votre accord ou votre désaccord avec une opinion ou défendre une proposition. ' +
          'L’évaluation porte sur la pertinence des informations, la qualité et le développement des arguments, la cohérence, la cohésion, le vocabulaire, la grammaire, l’orthographe et la ponctuation.'
      },
      { type: 'heading', text: '2. Structure recommandée pour le texte' },
      {
        type: 'list',
        items: [
          'Introduction : présentez le sujet et exprimez clairement votre position. Évitez les introductions génériques qui pourraient convenir à n’importe quel sujet.',
          'Premier argument : expliquez une raison qui soutient votre opinion et développez-la à l’aide d’une justification ou d’un exemple concret.',
          'Deuxième argument : présentez une raison différente en ajoutant de nouvelles informations et en évitant de répéter la même idée.',
          'Contre-argument : reconnaissez un éventuel point de vue opposé (la concession) et expliquez pourquoi il ne remet pas nécessairement en question votre position.',
          'Conclusion : reprenez votre opinion, résumez vos arguments et proposez une réflexion ou une recommandation cohérente.'
        ]
      },
      { type: 'heading', text: '3. Expressions pour présenter et développer votre opinion' },
      {
        type: 'table',
        headers: ['Fonction', 'Expressions', 'Utilisation'],
        rows: [
            [
              'Présenter son opinion',
              'À mon avis, selon moi, pour ma part',
              'Indiquer sa position.'
            ],
            [
              'Exprimer son accord',
              'Je partage cet avis, je suis tout à fait d’accord',
              'Montrer son accord.'
            ],
            [
              'Exprimer son désaccord',
              'Je ne partage pas cette opinion, je suis en désaccord avec cette idée',
              'Présenter une position opposée.'
            ],
            [
              'Ajouter des arguments',
              'De plus, en outre, par ailleurs',
              'Développer de nouveaux arguments.'
            ],
            [
              'Justifier',
              'En effet, étant donné que, puisque',
              'Expliquer les raisons d’une affirmation.'
            ],
            [
              'Donner des exemples',
              'Par exemple, notamment, à titre d’exemple',
              'Rendre les arguments plus concrets.'
            ],
            [
              'Présenter une réserve',
              'Certes, toutefois, néanmoins',
              'Introduire une concession ou une opposition.'
            ],
            [
              'Conclure',
              'En somme, en définitive, pour conclure',
              'Résumer sa position.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemple pratique : sujet de rédaction' },
      { type: 'paragraph', text: 'Sujet fictif : la gratuité des transports en commun.' },
      {
        type: 'paragraph',
        text:
          'Les transports en commun devraient être gratuits pour tous les citoyens. Êtes-vous d’accord avec cette affirmation ? ' +
          'Justifiez votre point de vue à l’aide d’arguments et d’exemples.'
      },
      { type: 'heading', text: '5. Exemple de réponse argumentative' },
      {
        type: 'paragraph',
        text:
          'À la suite de votre article affirmant que les transports en commun devraient être gratuits pour tous, je souhaite apporter mon point de vue. ' +
          'À mon avis, cette mesure serait avantageuse, à condition qu’elle soit mise en place progressivement et accompagnée d’un financement adéquat.'
      },
      {
        type: 'paragraph',
        text:
          'Tout d’abord, la gratuité pourrait encourager davantage de personnes à laisser leur voiture à la maison. ' +
          'Dans les grandes villes comme Montréal, cela contribuerait à réduire la congestion routière et les émissions polluantes. ' +
          'Les ménages à faible revenu bénéficieraient également d’un accès plus facile aux emplois, aux études et aux services essentiels.'
      },
      {
        type: 'paragraph',
        text:
          'De plus, un réseau accessible à tous favoriserait l’inclusion sociale. ' +
          'Une personne qui doit limiter ses déplacements pour des raisons financières pourrait participer plus facilement à la vie culturelle et communautaire.'
      },
      {
        type: 'paragraph',
        text:
          'Il ne faut toutefois pas négliger les coûts d’une telle décision. ' +
          'Les sociétés de transport ont besoin de revenus pour entretenir les véhicules, améliorer la fréquence du service et prolonger certaines lignes. ' +
          'Sans financement public suffisant, la gratuité risque même d’entraîner une baisse de la qualité du service. ' +
          'C’est pourquoi je privilégierais une mise en œuvre progressive, en commençant par les étudiants, les personnes âgées et les ménages à faible revenu. ' +
          'Les autorités pourraient ensuite évaluer les résultats avant d’élargir le programme.'
      },
      {
        type: 'paragraph',
        text:
          'En somme, rendre les transports en commun gratuits représente une mesure intéressante, mais elle doit s’appuyer sur un financement durable et sur un service fiable. ' +
          'L’objectif ne devrait pas seulement être de supprimer le prix du billet, mais aussi d’offrir une véritable solution de mobilité à toute la population.'
      },
      { type: 'heading', text: '6. Pièges fréquents pour les lusophones' },
      {
        type: 'list',
        items: [
          
            'Rédiger comme s’il s’agissait d’une lettre commerciale formelle, avec une adresse, une date, un objet et une formule de politesse élaborée. ' +
            'Cette structure n’est pas obligatoire dans la section B. Respectez le format indiqué dans la consigne.',
          
            'Présenter des opinions sans les justifier. Une affirmation comme « Les transports gratuits sont une bonne idée. ' +
            '» doit être accompagnée de raisons et d’exemples.',
          'Répéter le même argument en utilisant des mots différents. Chaque paragraphe doit apporter une idée pertinente.',
          'Utiliser des connecteurs sans comprendre leur fonction. « Pourtant » exprime une opposition, tandis que « donc » exprime une conséquence.',
          'Faire des généralisations sans justification, par exemple affirmer qu’une mesure profitera absolument à tout le monde.',
          
            'Traduire directement les structures du portugais. ' +
            'Privilégiez des constructions naturelles en français et respectez l’ordre des mots ainsi que la construction des verbes.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux faux amis',
        text:
          'Certains mots peuvent induire les lusophones en erreur. « Demander » ne correspond pas à « demandar » en portugais, au sens d’exiger. ' +
          '« Éventuellement » signifie « possiblement » ou « si nécessaire », et non « eventualmente » au sens de quelque chose qui arrive de temps en temps. ' +
          '« Prétendre » signifie avancer ou affirmer quelque chose, et non « pretender » au sens d’avoir l’intention de faire quelque chose. ' +
          'Pour exprimer cette idée, le français utilise « avoir l’intention de ». Ces erreurs peuvent nuire à la clarté de vos arguments.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que l’examen évalue réellement',
        text:
          'La section B exige au moins 200 mots en 35 minutes. Il ne suffit pas de présenter une opinion : vous devez la justifier, la développer et l’illustrer. ' +
          'Essayez de développer au moins deux arguments différents, accompagnés d’explications et d’exemples concrets. ' +
          'Utilisez des connecteurs variés sans en abuser et conservez une position cohérente du début à la fin. ' +
          'Ne perdez pas de temps à rédiger une introduction générique ou une formule de politesse formelle. ' +
          'Avant de terminer, vérifiez le nombre de mots, les accords en genre et en nombre, les conjugaisons, les articles, les prépositions et la ponctuation.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'L’argumentation : préparer la section B de l’expression écrite du TEF – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/largumentation-preparer-la-section-b-de-lexpression-ecrite-du-tef/'
    },
    {
      title: 'TEF Canada – Présentation des épreuves – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'TEF Canada – Passer le test – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/passation/'
    }
  ]
}

export default content
