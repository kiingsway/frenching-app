import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-tcf-3',

  pt: {
    title: 'TCF – Tarefa 3: expressar e defender um ponto de vista',
    summary:
      'Aprenda a expressar uma opinião, desenvolver argumentos, apresentar exemplos e considerar pontos de vista diferentes sobre temas do cotidiano e da sociedade. ' +
      'Pratique uma argumentação espontânea, clara e convincente, adequada ao nível B2.',
    blocks: [
      { type: 'heading', text: '1. Como funciona a tarefa' },
      {
        type: 'paragraph',
        text:
          'A terceira tarefa da expressão oral consiste em apresentar e defender seu ponto de vista sobre um tema escolhido pelo examinador. ' +
          'No TCF Canada, você dispõe de 4 minutos e 30 segundos para conversar, sem tempo de preparação. ' +
          'O examinador escolhe uma pergunta e você deve responder espontaneamente, de forma argumentada: com exemplos, justificando suas ideias e tentando convencê-lo.'
      },
      {
        type: 'paragraph',
        text:
          'A avaliação considera sua capacidade de dar sua opinião, explicar vantagens e desvantagens, expressar concordância e discordância e apresentar uma argumentação clara e estruturada. ' +
          'Também são avaliados o desenvolvimento do tema, a coerência, o vocabulário, a gramática, a pronúncia, a fluidez e a adequação da linguagem ao contexto.'
      },
      { type: 'heading', text: '2. Como estruturar uma argumentação' },
      {
        type: 'list',
        items: [
          'Apresente sua opinião: [[À mon avis, les transports en commun devraient être améliorés.|Na minha opinião, o transporte público deveria ser melhorado.]]',
          'Desenvolva seu primeiro argumento: [[Tout d’abord, cela permettrait de réduire les embouteillages.|Primeiramente, isso permitiria reduzir os congestionamentos.]]',
          'Acrescente uma explicação ou exemplo: [[Par exemple, davantage de personnes pourraient laisser leur voiture à la maison.|Por exemplo, mais pessoas poderiam deixar o carro em casa.]]',
          'Apresente uma ressalva ou outro ponto de vista: [[Cependant, cette solution nécessite des investissements importants.|Entretanto, essa solução exige investimentos importantes.]]',
          'Finalize reafirmando sua posição: [[En conclusion, je pense que les avantages sont plus importants que les inconvénients.|Concluindo, penso que as vantagens são mais importantes do que as desvantagens.]]'
        ]
      },
      { type: 'heading', text: '3. Exemplo prático de argumentação' },
      {
        type: 'paragraph',
        text: 'Tema possível: [[Pensez-vous que les villes devraient investir davantage dans les transports en commun ?|Você acha que as cidades deveriam investir mais no transporte público?]]'
      },
      {
        type: 'paragraph',
        text:
          '[[À mon avis, les villes devraient investir davantage dans les transports en commun, car cela peut améliorer la qualité de vie de nombreux habitants.|Na minha opinião, as cidades deveriam investir mais no transporte público, pois isso pode melhorar a qualidade de vida de muitos moradores.]] ' +
          '[[Tout d’abord, un réseau fiable permet de réduire la dépendance à l’automobile et de faciliter les déplacements des personnes qui n’ont pas de voiture.|Primeiramente, uma rede confiável permite reduzir a dependência do automóvel e facilitar o deslocamento das pessoas que não têm carro.]] ' +
          '[[Par exemple, à Toronto, des transports fréquents et bien reliés aux quartiers résidentiels aideraient les travailleurs et les étudiants à se déplacer plus facilement.|Por exemplo, em Toronto, um transporte frequente e bem conectado aos bairros residenciais ajudaria trabalhadores e estudantes a se deslocarem com mais facilidade.]] ' +
          '[[Il est vrai que ces projets coûtent cher et nécessitent une planification à long terme.|É verdade que esses projetos custam caro e exigem planejamento a longo prazo.]] ' +
          '[[Cependant, les bénéfices pour la mobilité et l’environnement peuvent justifier cet investissement.|Entretanto, os benefícios para a mobilidade e o meio ambiente podem justificar esse investimento.]] ' +
          '[[En conclusion, je pense que les transports en commun devraient être une priorité, à condition que les projets répondent aux besoins réels de la population.|Concluindo, penso que o transporte público deveria ser uma prioridade, desde que os projetos atendam às necessidades reais da população.]]'
      },
      { type: 'heading', text: '4. Expressões para argumentar com naturalidade' },
      {
        type: 'table',
        headers: ['Objetivo', 'Expressão em francês', 'Utilização'],
        rows: [
            [
              'Dar opinião',
              '[[À mon avis|Na minha opinião]]',
              'Apresentar seu ponto de vista.'
            ],
            [
              'Expressar certeza',
              '[[Il est évident que|É evidente que]]',
              'Enfatizar uma ideia.'
            ],
            [
              'Acrescentar argumento',
              '[[De plus|Além disso]]',
              'Adicionar informação.'
            ],
            [
              'Dar exemplo',
              '[[Prenons l’exemple de|Tomemos o exemplo de]]',
              'Ilustrar um argumento.'
            ],
            [
              'Expressar oposição',
              '[[En revanche|Por outro lado]]',
              'Introduzir uma perspectiva diferente.'
            ],
            [
              'Conceder um ponto',
              '[[Certes... mais...|É verdade que... mas...]]',
              'Reconhecer uma dificuldade antes de apresentar uma ressalva.'
            ],
            [
              'Concluir',
              '[[En définitive|No fim das contas]]',
              'Apresentar uma conclusão.'
            ]
        ]
      },
      { type: 'heading', text: '5. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a tradução literal e a repetição de argumentos',
        text:
          'Em português, dizemos “concordo”, e a tentação é usar [[concorder|coincidir]]. ' +
          'Em francês, esse verbo fala de coisas que coincidem (as datas concordam), não de opinião. Use a expressão [[être d’accord|estar de acordo]], como em [[Je suis d’accord avec cette idée.|Concordo com essa ideia.]] ' +
          'E para discordar, diga [[Je ne suis pas d’accord.|Não concordo.]] ' +
          'Outro problema frequente é repetir a mesma justificativa com palavras diferentes, sem acrescentar informações. ' +
          'Cada argumento deve contribuir com uma ideia nova para sua defesa do ponto de vista.'
      },
      {
        type: 'list',
        items: [
          'Não apresente apenas sua opinião sem justificá-la. Explique por que você pensa daquela maneira.',
          'Evite utilizar [[parce que|porque]] em todas as frases. Varie com [[puisque|já que]], [[étant donné que|considerando que]] e [[en raison de|devido a]].',
          'Não confunda [[cependant|entretanto]] com [[donc|portanto]]. O primeiro introduz uma oposição; o segundo apresenta uma consequência ou conclusão.',
          'Evite afirmações absolutas sem justificativa, como dizer que uma solução é sempre melhor em qualquer situação.',
          'Não ignore argumentos contrários. Reconhecer uma desvantagem e explicar por que sua posição continua válida demonstra capacidade de argumentação.'
        ]
      },
      { type: 'heading', text: '6. O que a prova cobra e como se preparar' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Defenda suas ideias, não apenas sua opinião',
        text:
          'A avaliação oficial considera a capacidade de apresentar uma argumentação clara e estruturada, desenvolver temas, explicar vantagens e desvantagens e expressar concordância ou discordância. ' +
          'Para buscar um desempenho B2, procure desenvolver ideias com explicações e exemplos concretos, demonstrar nuances e concluir de maneira coerente. ' +
          'A comunicação precisa ser espontânea e convincente, não uma sequência de frases memorizadas.'
      },
      {
        type: 'list',
        items: [
          'Os exemplos oficiais de tema incluem [[Pour vous, qu’est-ce qu’un pays agréable à vivre ?|Para você, o que é um país agradável de se viver?]] e [[Voyager nous rend meilleurs. Êtes-vous d’accord avec cette affirmation ?|Viajar nos torna melhores. Você concorda com essa afirmação?]]',
          'Pratique também temas como trabalho, educação, tecnologia, meio ambiente, transporte, saúde e qualidade de vida.',
          'Treine defender uma opinião mesmo quando o assunto não corresponde exatamente às suas preferências pessoais.',
          'Aprenda a apresentar dois argumentos diferentes e um exemplo concreto para cada um.',
          'Pratique responder a perguntas complementares do examinador sem perder a linha de raciocínio.',
          'Grave suas respostas e avalie se existe introdução, desenvolvimento e conclusão.',
          'Treine falar sobre temas inesperados sem depender de um discurso previamente decorado.'
        ]
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O site oficial e o exemplo oficial de prova (PDF) confirmam: 4 minutos e 30 segundos, sem preparação, com uma pergunta escolhida pelo examinador; ' +
          'responder de forma argumentada, com exemplos, justificando as ideias e tentando convencer; e avaliar a opinião, vantagens e desvantagens, concordância e discordância e uma argumentação clara e estruturada. ' +
          'Nenhuma fonte confirma isto: os outros critérios citados (coerência, vocabulário, gramática, pronúncia, fluidez, adequação ao contexto); a referência ao nível B2; ' +
          'e o que o examinador faz durante a fala (o manual do candidato não foi consultado). ' +
          'A estrutura sugerida de opinião, argumentos, exemplos, ressalva e conclusão, os conectores, os modelos de resposta e os temas de treino além dos exemplos oficiais são recomendações didáticas, ' +
          'não uma fórmula obrigatória nem temas garantidos na prova.'
      }
    ]
  },

  fr: {
    title: 'TCF – Tâche 3 : exprimer et défendre un point de vue',
    summary:
      'Apprenez à exprimer une opinion, à développer des arguments, à présenter des exemples et à considérer différents points de vue sur des sujets de la vie quotidienne et de société. ' +
      'Entraînez-vous à construire une argumentation spontanée, claire et convaincante, adaptée au niveau B2.',
    blocks: [
      { type: 'heading', text: '1. Comment fonctionne cette tâche' },
      {
        type: 'paragraph',
        text:
          'La troisième tâche de l’expression orale consiste à présenter et à défendre votre point de vue sur un sujet choisi par l’examinateur. ' +
          'Dans le cadre du TCF Canada, vous disposez de quatre minutes et trente secondes pour échanger, sans temps de préparation. ' +
          'L’examinateur choisit une question et vous devez y répondre spontanément, de façon argumentée : en utilisant des exemples, en justifiant vos idées et en essayant de le convaincre.'
      },
      {
        type: 'paragraph',
        text:
          'L’évaluation porte sur votre capacité à donner votre opinion, à expliquer des avantages et des inconvénients, à exprimer votre accord et votre désaccord et à présenter une argumentation claire et structurée. ' +
          'Le développement du sujet, la cohérence, le vocabulaire, la grammaire, la prononciation, l’aisance et l’adaptation du langage au contexte sont également évalués.'
      },
      { type: 'heading', text: '2. Comment structurer une argumentation' },
      {
        type: 'list',
        items: [
          'Présentez votre opinion : « À mon avis, les transports en commun devraient être améliorés. »',
          'Développez votre premier argument : « Tout d’abord, cela permettrait de réduire les embouteillages. »',
          'Ajoutez une explication ou un exemple : « Par exemple, davantage de personnes pourraient laisser leur voiture à la maison. »',
          'Présentez une réserve ou un autre point de vue : « Cependant, cette solution nécessite des investissements importants. »',
          'Terminez en réaffirmant votre position : « En conclusion, je pense que les avantages sont plus importants que les inconvénients. »'
        ]
      },
      { type: 'heading', text: '3. Exemple concret d’argumentation' },
      {
        type: 'paragraph',
        text: 'Sujet possible : Pensez-vous que les villes devraient investir davantage dans les transports en commun ?'
      },
      {
        type: 'paragraph',
        text:
          'À mon avis, les villes devraient investir davantage dans les transports en commun, car cela peut améliorer la qualité de vie de nombreux habitants. ' +
          'Tout d’abord, un réseau fiable permet de réduire la dépendance à l’automobile et de faciliter les déplacements des personnes qui n’ont pas de voiture. ' +
          'Par exemple, à Toronto, des transports fréquents et bien reliés aux quartiers résidentiels aideraient les travailleurs et les étudiants à se déplacer plus facilement. ' +
          'Il est vrai que ces projets coûtent cher et nécessitent une planification à long terme. ' +
          'Cependant, les bénéfices pour la mobilité et l’environnement peuvent justifier cet investissement. ' +
          'En conclusion, je pense que les transports en commun devraient être une priorité, à condition que les projets répondent aux besoins réels de la population.'
      },
      { type: 'heading', text: '4. Expressions pour argumenter naturellement' },
      {
        type: 'table',
        headers: ['Objectif', 'Expression en français', 'Utilisation'],
        rows: [
            [
              'Donner son opinion',
              'À mon avis',
              'Présenter son point de vue.'
            ],
            [
              'Exprimer une certitude',
              'Il est évident que',
              'Mettre une idée en évidence.'
            ],
            [
              'Ajouter un argument',
              'De plus',
              'Ajouter une information.'
            ],
            [
              'Donner un exemple',
              'Prenons l’exemple de',
              'Illustrer un argument.'
            ],
            [
              'Exprimer une opposition',
              'En revanche',
              'Introduire une perspective différente.'
            ],
            [
              'Faire une concession',
              'Certes... mais...',
              'Reconnaître une difficulté avant de présenter une réserve.'
            ],
            [
              'Conclure',
              'En définitive',
              'Présenter une conclusion.'
            ]
        ]
      },
      { type: 'heading', text: '5. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux traductions littérales et à la répétition des arguments',
        text:
          'En portugais, on dit « concordo », et la tentation est d’utiliser « concorder ». ' +
          'En français, ce verbe parle de choses qui coïncident (les dates concordent), pas d’opinion. Utilisez l’expression « être d’accord », comme dans « Je suis d’accord avec cette idée ». ' +
          'Pour exprimer un désaccord, dites « Je ne suis pas d’accord ». ' +
          'Un autre problème fréquent consiste à répéter le même argument avec des mots différents, sans apporter de nouvelles informations. ' +
          'Chaque argument doit contribuer à défendre votre point de vue en apportant une idée supplémentaire.'
      },
      {
        type: 'list',
        items: [
          'Ne présentez pas seulement votre opinion sans la justifier. Expliquez pourquoi vous pensez de cette manière.',
          'Évitez d’utiliser « parce que » dans toutes vos phrases. Variez avec « puisque », « étant donné que » et « en raison de ».',
          'Ne confondez pas « cependant » et « donc ». Le premier introduit une opposition, tandis que le second présente une conséquence ou une conclusion.',
          'Évitez les affirmations absolues sans justification, comme dire qu’une solution est toujours meilleure dans toutes les situations.',
          'Ne négligez pas les arguments contraires. Reconnaître un inconvénient et expliquer pourquoi votre position reste valable démontre votre capacité à argumenter.'
        ]
      },
      { type: 'heading', text: '6. Ce que l’épreuve évalue et comment se préparer' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Défendez vos idées, pas seulement votre opinion',
        text:
          'L’évaluation officielle porte sur votre capacité à présenter une argumentation claire et structurée, à développer des sujets, à expliquer des avantages et des inconvénients et à exprimer votre accord ou votre désaccord. ' +
          'Pour viser une performance de niveau B2, développez vos idées avec des explications et des exemples concrets, présentez des nuances et terminez de manière cohérente. ' +
          'La communication doit être spontanée et convaincante, et non une succession de phrases mémorisées.'
      },
      {
        type: 'list',
        items: [
          'Les exemples officiels de sujets comprennent « Pour vous, qu’est-ce qu’un pays agréable à vivre ? » et « Voyager nous rend meilleurs. Êtes-vous d’accord avec cette affirmation ? »',
          'Entraînez-vous aussi sur des thèmes comme le travail, l’éducation, la technologie, l’environnement, les transports, la santé et la qualité de vie.',
          'Entraînez-vous à défendre une opinion même lorsque le sujet ne correspond pas exactement à vos préférences personnelles.',
          'Apprenez à présenter deux arguments différents et un exemple concret pour chacun.',
          'Entraînez-vous à répondre aux questions complémentaires de l’examinateur sans perdre le fil de votre raisonnement.',
          'Enregistrez vos réponses et vérifiez qu’elles comportent une introduction, un développement et une conclusion.',
          'Entraînez-vous à parler de sujets inattendus sans dépendre d’un discours préparé et mémorisé.'
        ]
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Le site officiel et l’exemple officiel d’épreuve (PDF) confirment : quatre minutes trente, sans préparation, avec une question choisie par l’examinateur ; ' +
          'répondre de façon argumentée, avec des exemples, en justifiant ses idées et en essayant de convaincre ; et l’évaluation de l’opinion, des avantages et inconvénients, de l’accord et du désaccord et d’une argumentation claire et structurée. ' +
          'Aucune source ne confirme ceci : les autres critères cités (cohérence, vocabulaire, grammaire, prononciation, aisance, adaptation au contexte) ; la référence au niveau B2 ; ' +
          'et ce que fait l’examinateur pendant la prise de parole (le manuel du candidat n’a pas été consulté). ' +
          'La structure proposée (opinion, arguments, exemples, réserve, conclusion), les connecteurs, les modèles de réponses et les thèmes d’entraînement au-delà des exemples officiels sont des recommandations pédagogiques, ' +
          'pas une formule obligatoire ni des thèmes garantis à l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'TCF Canada – Apresentação oficial das provas e da expressão oral',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TCF TP / Canada / Québec – Exemplo de prova de expressão oral (PDF) – France Éducation international',
      url: 'https://www.france-education-international.fr/document/tcf-tp-qc-ca-exemple-epreuve-eo'
    }
  ]
}

export default content
