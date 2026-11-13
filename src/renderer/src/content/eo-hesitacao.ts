import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-hesitacao',

  pt: {
    title: 'Expressões de hesitação e para ganhar tempo: euh, alors, voyons e outras',
    summary:
      'Você vai aprender a utilizar expressões naturais para ganhar alguns segundos, organizar o raciocínio e manter a conversa enquanto procura as palavras certas. ' +
      'Também vai conhecer expressões comuns no francês canadense, entender suas diferenças de significado e evitar repetições que prejudicam a naturalidade da fala.',
    blocks: [
      { type: 'heading', text: 'Por que utilizar expressões de hesitação' },
      {
        type: 'paragraph',
        text:
          'Durante uma conversa, é normal precisar de alguns segundos para organizar uma resposta, encontrar uma palavra ou desenvolver uma ideia. ' +
          'Em francês, existem expressões que ajudam a manter a palavra enquanto você pensa. Elas são chamadas de [[marqueurs discursifs|marcadores discursivos]] ' +
          'e ajudam a estruturar a conversa. O objetivo não é preencher todos os silêncios, mas demonstrar que você está pensando e continuar desenvolvendo suas ideias.'
      },
      { type: 'heading', text: 'Expressões úteis e suas funções' },
      {
        type: 'table',
        headers: ['Expressão', 'Função', 'Exemplo'],
        rows: [
            [
              '[[Euh...|Ahn... / É...]]',
              'Expressa hesitação ou indica que você está procurando a palavra certa.',
              '[[Euh... je ne connais pas exactement la réponse.|Ahn... não conheço exatamente a resposta.]]'
            ],
            [
              '[[Alors...|Então... / Bem...]]',
              'Ajuda a retomar o raciocínio, introduzir uma consequência ou começar a desenvolver uma resposta.',
              '[[Alors, je dirais que cette solution est plus pratique.|Então, eu diria que esta solução é mais prática.]]'
            ],
            [
              '[[Bon...|Bom... / Certo...]]',
              'Marca o início de uma resposta, uma mudança de assunto ou a conclusão de uma ideia.',
              '[[Bon, revenons à la question principale.|Bom, voltemos à questão principal.]]'
            ],
            [
              '[[Voyons voir...|Vamos ver...]]',
              'Indica que você está examinando possibilidades ou tentando encontrar uma resposta.',
              '[[Voyons voir : il y a deux possibilités.|Vamos ver: há duas possibilidades.]]'
            ],
            [
              '[[En fait...|Na verdade...]]',
              'Introduz um esclarecimento, uma correção ou uma explicação mais precisa.',
              '[[En fait, je préfère habiter près du métro.|Na verdade, prefiro morar perto do metrô.]]'
            ],
            [
              '[[Disons que...|Digamos que...]]',
              'Permite apresentar uma opinião, hipótese ou estimativa com alguma ressalva.',
              '[[Disons que cette solution serait plus simple.|Digamos que esta solução seria mais simples.]]'
            ],
            [
              '[[Comment dire...|Como dizer...]]',
              'Ajuda quando você sabe o que deseja expressar, mas está procurando a palavra adequada.',
              '[[Comment dire... c’est une situation assez compliquée.|Como dizer... é uma situação bastante complicada.]]'
            ]
        ]
      },
      { type: 'heading', text: 'Frases para ganhar tempo sem interromper a conversa' },
      {
        type: 'paragraph',
        text: 'Além das interjeições curtas, você pode utilizar frases completas para organizar o pensamento e demonstrar que está preparando uma resposta.'
      },
      {
        type: 'list',
        items: [
          '[[C’est une bonne question.|Essa é uma boa pergunta.]] [[Laissez-moi y réfléchir un instant.|Deixe-me pensar um instante.]]',
          '[[Je dirais que cela dépend de la situation.|Eu diria que depende da situação.]]',
          '[[Si je comprends bien, vous souhaitez savoir si cette option est avantageuse.|Se entendi corretamente, você gostaria de saber se essa opção é vantajosa.]]',
          '[[Il y a plusieurs aspects à prendre en considération.|Há vários aspectos a serem considerados.]]',
          '[[Je n’ai pas le mot exact, mais je peux expliquer l’idée autrement.|Não tenho a palavra exata, mas posso explicar a ideia de outra maneira.]]',
          '[[Pour commencer, je voudrais souligner un point important.|Para começar, gostaria de destacar um ponto importante.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Uma particularidade do francês canadense: o Usito registra [[voyons donc !|ora essa! / mas veja só!]] como interjeição familiar do Québec, usada para expressar espanto ou irritação. ' +
          'Portanto, não é equivalente a [[voyons voir|vamos ver]], que funciona melhor quando você está refletindo ou examinando possibilidades. ' +
          'Para ganhar tempo em uma situação formal, prefira [[Laissez-moi y réfléchir un instant.|Deixe-me pensar um instante.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não transforme cada pausa em um euh',
        text:
          'Um erro comum é repetir [[euh|ahn]] várias vezes, utilizar [[alors|então]] ' +
          'no início de praticamente todas as frases ou recorrer a [[voyons donc !|mas veja só!]] como se fosse uma expressão neutra para pensar. ' +
          'Isso pode deixar a fala repetitiva ou transmitir uma reação inadequada ao contexto. ' +
          'Também não confunda [[en fait|na verdade]], que serve para esclarecer uma ideia, com uma simples expressão de hesitação. ' +
          'Uma pausa curta e natural é melhor do que preencher todos os silêncios com palavras.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'No TCF Canada, a expressão oral é individual, presencial com um examinador, com 3 exercícios e 12 minutos, dos quais 2 são de preparação. No TEF Canada, ela é presencial, gravada, com seções de 5 e 10 minutos. ' +
          'Experimente combinar uma expressão de abertura, uma justificativa e um exemplo: [[Alors, je pense que cette solution est intéressante, parce qu’elle permet de gagner du temps.|Então, acho que esta solução é interessante porque permite economizar tempo.]] ' +
          'Não memorize sequências de interjeições. Pratique ganhar tempo enquanto continua construindo uma resposta clara, organizada e relevante.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O Usito confirma [[euh|ahn]] (embaraço ou hesitação na busca da palavra certa), [[alors|então]] (introduz uma consequência, “nesse caso”) e [[voyons donc|ora essa]] (familiar, Québec, espanto ou irritação). ' +
          'O FEI e o Le français des affaires confirmam o formato das provas orais. ' +
          'Não têm fonte: [[bon|bom]], [[voyons voir|vamos ver]], [[en fait|na verdade]], [[disons que|digamos que]] e [[comment dire|como dizer]], o termo “marcadores discursivos”, as frases completas para ganhar tempo, o exemplo e a dica de treino. ' +
          'Esses pontos são material didático, não regra oficial. As páginas consultadas não trazem lista obrigatória de expressões de hesitação nem pontuação por usá-las.'
      }
    ]
  },

  fr: {
    title: 'Les expressions d’hésitation et pour gagner du temps : euh, alors, voyons et autres',
    summary:
      'Vous apprendrez à utiliser des expressions naturelles pour gagner quelques secondes, organiser votre raisonnement et maintenir la conversation pendant que vous cherchez les mots justes. ' +
      'Vous découvrirez également des expressions courantes en français canadien, leurs différences de sens et les répétitions à éviter pour parler plus naturellement.',
    blocks: [
      { type: 'heading', text: 'Pourquoi utiliser des expressions d’hésitation ?' },
      {
        type: 'paragraph',
        text:
          'Au cours d’une conversation, il est normal d’avoir besoin de quelques secondes pour organiser une réponse, trouver un mot ou développer une idée. ' +
          'En français, certaines expressions permettent de garder la parole pendant que vous réfléchissez. ' +
          'On les appelle des marqueurs discursifs et elles contribuent à structurer la conversation. ' +
          'Le but n’est pas de remplir tous les silences, mais de montrer que vous réfléchissez et de continuer à développer vos idées.'
      },
      { type: 'heading', text: 'Les expressions utiles et leurs fonctions' },
      {
        type: 'table',
        headers: ['Expression', 'Fonction', 'Exemple'],
        rows: [
            [
              'Euh...',
              'Exprime une hésitation ou indique que vous cherchez le mot juste.',
              'Euh... je ne connais pas exactement la réponse.'
            ],
            [
              'Alors...',
              'Aide à reprendre le fil de son raisonnement, à introduire une conséquence ou à commencer à développer une réponse.',
              'Alors, je dirais que cette solution est plus pratique.'
            ],
            [
              'Bon...',
              'Marque le début d’une réponse, un changement de sujet ou la conclusion d’une idée.',
              'Bon, revenons à la question principale.'
            ],
            [
              'Voyons voir...',
              'Indique que vous examinez des possibilités ou que vous cherchez une réponse.',
              'Voyons voir : il y a deux possibilités.'
            ],
            [
              'En fait...',
              'Introduit une précision, une correction ou une explication plus exacte.',
              'En fait, je préfère habiter près du métro.'
            ],
            [
              'Disons que...',
              'Permet de présenter une opinion, une hypothèse ou une estimation avec certaines réserves.',
              'Disons que cette solution serait plus simple.'
            ],
            [
              'Comment dire...',
              'Aide lorsque vous savez ce que vous voulez exprimer, mais que vous cherchez le mot approprié.',
              'Comment dire... c’est une situation assez compliquée.'
            ]
        ]
      },
      { type: 'heading', text: 'Des phrases pour gagner du temps sans interrompre la conversation' },
      {
        type: 'paragraph',
        text: 'En plus des interjections courtes, vous pouvez utiliser des phrases complètes pour organiser votre pensée et montrer que vous préparez une réponse.'
      },
      {
        type: 'list',
        items: [
          'C’est une bonne question. Laissez-moi y réfléchir un instant.',
          'Je dirais que cela dépend de la situation.',
          'Si je comprends bien, vous souhaitez savoir si cette option est avantageuse.',
          'Il y a plusieurs aspects à prendre en considération.',
          'Je n’ai pas le mot exact, mais je peux expliquer l’idée autrement.',
          'Pour commencer, je voudrais souligner un point important.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Une particularité du français canadien : Usito enregistre « Voyons donc ! » comme une interjection familière du Québec, employée pour exprimer l’étonnement ou l’irritation. ' +
          'Elle n’est donc pas équivalente à « Voyons voir », qui convient mieux lorsque vous réfléchissez ou examinez des possibilités. ' +
          'Pour gagner du temps dans une situation formelle, préférez « Laissez-moi y réfléchir un instant. »'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne transformez pas chaque pause en euh',
        text:
          'Une erreur fréquente consiste à répéter « euh » plusieurs fois, à utiliser « alors » au début de presque toutes les phrases ou à employer « voyons donc ! ' +
          '» comme s’il s’agissait d’une expression neutre pour réfléchir. Cela peut rendre le discours répétitif ou transmettre une réaction inadaptée au contexte. ' +
          'Ne confondez pas non plus « en fait », qui sert à préciser une idée, avec une simple expression d’hésitation. ' +
          'Une courte pause naturelle vaut mieux que des mots destinés à remplir tous les silences.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Au TCF Canada, l’expression orale est une épreuve individuelle en face à face avec un examinateur, composée de 3 exercices et d’une durée de 12 minutes, dont 2 minutes de préparation. Au TEF Canada, elle se déroule en face à face, est enregistrée et comprend des sections de 5 et de 10 minutes. ' +
          'Essayez de combiner une expression d’introduction, une justification et un exemple : « Alors, je pense que cette solution est intéressante, parce qu’elle permet de gagner du temps. ' +
          '» Ne mémorisez pas des suites d’interjections. Entraînez-vous à gagner du temps tout en construisant une réponse claire, structurée et pertinente.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Usito confirme euh (embarras ou hésitation dans la recherche du mot juste), alors (introduit une conséquence, « dans ce cas ») et voyons donc (familier, Québec, étonnement ou irritation). ' +
          'Le FEI et Le français des affaires confirment le format des épreuves orales. ' +
          'Ne sont pas sourcés : bon, voyons voir, en fait, disons que et comment dire, le terme « marqueurs discursifs », les phrases complètes pour gagner du temps, l’exemple et le conseil d’entraînement. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle. Les pages consultées ne contiennent aucune liste obligatoire d’expressions d’hésitation ni de points pour leur emploi.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'euh — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/lexies/mots/euh'
    },
    {
      title: 'alors — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/lexies/mots/alors'
    },
    {
      title: 'voyons donc — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/lexies/voyons'
    },
    {
      title: 'TCF Canada — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'Se préparer à l’épreuve d’expression orale du TEF — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-dexpression-orale-du-tef/'
    }
  ]
}

export default content
