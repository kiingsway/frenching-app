import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-tcf-1',

  pt: {
    title: 'TCF – Tarefa 1: entrevista dirigida',
    summary:
      'Aprenda a conversar com o examinador sobre sua identidade, rotina, família, trabalho, experiências e projetos futuros. ' +
      'Pratique respostas espontâneas e bem desenvolvidas, utilizando vocabulário variado e estruturas gramaticais adequadas ao nível B2.',
    blocks: [
      { type: 'heading', text: '1. Como funciona a tarefa' },
      {
        type: 'paragraph',
        text:
          'A primeira tarefa da expressão oral consiste em uma entrevista individual, sem tempo de preparação, com duração de 2 minutos. ' +
          'Você conversa diretamente com um examinador que não conhece. ' +
          'O objetivo é demonstrar sua capacidade de interagir naturalmente e falar sobre si mesmo e seu ambiente pessoal e profissional.'
      },
      {
        type: 'paragraph',
        text:
          'As perguntas podem abordar sua apresentação pessoal, família, moradia, rotina, estudos, trabalho, lazer e planos para o futuro. ' +
          'O examinador pode começar com perguntas gerais e depois fazer perguntas complementares para conhecer melhor sua experiência.'
      },
      { type: 'heading', text: '2. Temas frequentes e exemplos de respostas' },
      {
        type: 'table',
        headers: ['Tema', 'Pergunta do examinador', 'Exemplo de resposta'],
        rows: [
            [
              'Apresentação pessoal',
              '[[Pouvez-vous vous présenter ?|Você pode se apresentar?]]',
              '[[Je m’appelle André, je viens du Brésil et j’habite à Toronto depuis deux ans.|Meu nome é André, sou do Brasil e moro em Toronto há dois anos.]]'
            ],
            [
              'Rotina',
              '[[À quoi ressemble une journée typique pour vous ?|Como é um dia típico para você?]]',
              '[[En général, je me lève tôt, je vais au travail et j’étudie le français le soir.|Em geral, acordo cedo, vou trabalhar e estudo francês à noite.]]'
            ],
            [
              'Trabalho',
              '[[Qu’est-ce que vous faites dans la vie ?|O que você faz da vida?]]',
              '[[Je travaille dans un restaurant italien et je participe à la préparation des repas.|Trabalho em um restaurante italiano e participo da preparação das refeições.]]'
            ],
            [
              'Lazer',
              '[[Que faites-vous pendant la fin de semaine ?|O que você faz durante o fim de semana?]]',
              '[[La fin de semaine, j’aime faire du vélo, découvrir de nouveaux endroits et passer du temps avec mes amis.|No fim de semana, gosto de andar de bicicleta, conhecer lugares novos e passar tempo com meus amigos.]]'
            ],
            [
              'Projetos futuros',
              '[[Quels sont vos projets pour les prochaines années ?|Quais são seus projetos para os próximos anos?]]',
              '[[J’aimerais améliorer mon français, poursuivre mes études et trouver de nouvelles possibilités professionnelles.|Gostaria de melhorar meu francês, continuar meus estudos e encontrar novas oportunidades profissionais.]]'
            ]
        ]
      },
      { type: 'heading', text: '3. Como desenvolver suas respostas' },
      {
        type: 'paragraph',
        text:
          'Evite responder somente com uma informação curta. ' +
          'Uma boa estratégia é apresentar a informação principal, acrescentar um detalhe e explicar uma razão, preferência ou consequência. ' +
          'Assim, você demonstra maior domínio do vocabulário e consegue manter a conversa.'
      },
      { type: 'paragraph', text: 'Exemplo de resposta desenvolvida sobre trabalho:' },
      {
        type: 'paragraph',
        text:
          '[[Je travaille dans un restaurant italien à Toronto.|Trabalho em um restaurante italiano em Toronto.]] ' +
          '[[Je suis responsable de la préparation de plusieurs plats et je collabore avec les autres membres de l’équipe.|Sou responsável pela preparação de vários pratos e colaboro com os outros membros da equipe.]] ' +
          '[[Ce que j’apprécie particulièrement dans ce travail, c’est l’occasion d’apprendre de nouvelles techniques et de développer mes compétences.|O que aprecio particularmente nesse trabalho é a oportunidade de aprender novas técnicas e desenvolver minhas habilidades.]]'
      },
      { type: 'heading', text: '4. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a tradução literal do português',
        text:
          'Para dizer há quanto tempo algo dura, não traduza o “há” do português por [[il y a|faz / há]]. ' +
          'Quando a situação continua até hoje, use o presente com [[depuis|há / desde]]: [[J’habite à Toronto depuis deux ans.|Moro em Toronto há dois anos.]] ' +
          'Já [[il y a|faz / há]] marca um fato terminado no passado e pede o passé composé: [[J’ai déménagé à Toronto il y a deux ans.|Mudei para Toronto há dois anos.]]'
      },
      {
        type: 'list',
        items: [
            'Para falar de rotina, utilize o presente e expressões de frequência, como [[en général|em geral]], [[d’habitude|geralmente]] ' +
            'e [[trois fois par semaine|três vezes por semana]].',
          'Para contar experiências passadas, pratique estruturas como [[J’ai commencé ce travail l’année dernière.|Comecei esse trabalho no ano passado.]]',
          'Para expressar desejos e projetos, utilize o condicional: [[J’aimerais suivre une formation.|Gostaria de fazer um curso.]]',
          'No francês canadense, [[la fin de semaine|o fim de semana]] é uma expressão comum. Na França, [[le week-end|o fim de semana]] é uma alternativa muito utilizada.',
          'Não memorize uma apresentação inteira. Você precisa conseguir adaptar suas respostas às perguntas complementares do examinador.'
        ]
      },
      { type: 'heading', text: '5. O que a prova cobra e como se preparar' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Priorize uma comunicação espontânea e organizada',
        text:
          'A tarefa verifica principalmente sua capacidade de conversar com uma pessoa desconhecida e falar sobre sua vida. ' +
          'Na avaliação da expressão oral, também são consideradas a adequação do vocabulário, a correção gramatical, a pronúncia, a interação e a organização das ideias. ' +
          'Para buscar um desempenho compatível com B2, desenvolva suas respostas com informações relevantes, varie as estruturas e mantenha uma comunicação natural. ' +
          'Não transforme a entrevista em um discurso decorado.'
      },
      {
        type: 'list',
        items: [
          'Treine apresentações pessoais com informações sobre origem, moradia, trabalho e interesses.',
          'Pratique perguntas sobre família, estudos, rotina, lazer, experiências e objetivos profissionais.',
            'Varie os conectores: [[d’abord|primeiramente]], [[ensuite|em seguida]], [[cependant|entretanto]], [[en revanche|por outro lado]] ' +
            'e [[c’est pourquoi|é por isso que]].',
          'Grave suas respostas e identifique pausas excessivas, repetições e erros de concordância.',
          'Pratique responder a perguntas inesperadas sem interromper a comunicação para procurar uma frase perfeita.'
        ]
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O site oficial e o exemplo oficial de prova (PDF) confirmam: entrevista dirigida sem preparação, de 2 minutos, com um examinador que você não conhece, avaliando a capacidade de falar de si e do seu meio familiar e profissional; ' +
          'os temas (estado civil, família, estudos, situação profissional, hábitos, gostos, fatos passados, moradia, projetos, viagens); e o pedido inicial “Est-ce que vous pouvez vous présenter ?”. ' +
          'Nenhuma fonte confirma isto: o examinador começar com perguntas gerais e depois fazer complementares, ' +
          'os critérios citados (vocabulário, gramática, pronúncia, interação, organização das ideias) e a referência ao nível B2. ' +
          'Os exemplos de resposta e os conselhos de treino são sugestões de preparação, não regras da prova.'
      }
    ]
  },

  fr: {
    title: 'TCF – Tâche 1 : l’entretien dirigé',
    summary:
      'Apprenez à converser avec l’examinateur au sujet de votre identité, de votre quotidien, de votre famille, de votre travail, de vos expériences et de vos projets d’avenir. ' +
      'Entraînez-vous à donner des réponses spontanées et développées, en utilisant un vocabulaire varié et des structures grammaticales adaptées au niveau B2.',
    blocks: [
      { type: 'heading', text: '1. Comment fonctionne cette tâche' },
      {
        type: 'paragraph',
        text:
          'La première tâche de l’expression orale consiste en un entretien individuel, sans temps de préparation, d’une durée de deux minutes. ' +
          'Vous échangez directement avec un examinateur que vous ne connaissez pas. ' +
          'L’objectif est de démontrer votre capacité à interagir naturellement et à parler de vous-même ainsi que de votre environnement personnel et professionnel.'
      },
      {
        type: 'paragraph',
        text:
          'Les questions peuvent porter sur votre présentation personnelle, votre famille, votre logement, votre quotidien, vos études, votre travail, vos loisirs et vos projets d’avenir. ' +
          'L’examinateur peut commencer par des questions générales, puis poser des questions complémentaires pour mieux connaître votre expérience.'
      },
      { type: 'heading', text: '2. Thèmes fréquents et exemples de réponses' },
      {
        type: 'table',
        headers: ['Thème', 'Question de l’examinateur', 'Exemple de réponse'],
        rows: [
            [
              'Présentation personnelle',
              'Pouvez-vous vous présenter ?',
              'Je m’appelle André, je viens du Brésil et j’habite à Toronto depuis deux ans.'
            ],
            [
              'Quotidien',
              'À quoi ressemble une journée typique pour vous ?',
              'En général, je me lève tôt, je vais au travail et j’étudie le français le soir.'
            ],
            [
              'Travail',
              'Qu’est-ce que vous faites dans la vie ?',
              'Je travaille dans un restaurant italien et je participe à la préparation des repas.'
            ],
            [
              'Loisirs',
              'Que faites-vous pendant la fin de semaine ?',
              'La fin de semaine, j’aime faire du vélo, découvrir de nouveaux endroits et passer du temps avec mes amis.'
            ],
            [
              'Projets d’avenir',
              'Quels sont vos projets pour les prochaines années ?',
              'J’aimerais améliorer mon français, poursuivre mes études et trouver de nouvelles possibilités professionnelles.'
            ]
        ]
      },
      { type: 'heading', text: '3. Comment développer vos réponses' },
      {
        type: 'paragraph',
        text:
          'Évitez de répondre uniquement par une information courte. ' +
          'Une bonne stratégie consiste à présenter l’information principale, à ajouter un détail et à expliquer une raison, une préférence ou une conséquence. ' +
          'Vous démontrez ainsi une meilleure maîtrise du vocabulaire et votre capacité à faire avancer la conversation.'
      },
      { type: 'paragraph', text: 'Exemple de réponse développée sur le thème du travail :' },
      {
        type: 'paragraph',
        text:
          'Je travaille dans un restaurant italien à Toronto. ' +
          'Je suis responsable de la préparation de plusieurs plats et je collabore avec les autres membres de l’équipe. ' +
          'Ce que j’apprécie particulièrement dans ce travail, c’est l’occasion d’apprendre de nouvelles techniques et de développer mes compétences.'
      },
      { type: 'heading', text: '4. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux traductions littérales du portugais',
        text:
          'Pour dire depuis combien de temps une situation dure, ne traduisez pas le « há » du portugais par « il y a ». ' +
          'Quand la situation continue aujourd’hui, utilisez le présent avec « depuis » : « J’habite à Toronto depuis deux ans ». ' +
          'En revanche, « il y a » situe un fait terminé dans le passé et demande le passé composé : « J’ai déménagé à Toronto il y a deux ans ».'
      },
      {
        type: 'list',
        items: [
          'Pour parler de votre quotidien, utilisez le présent et des expressions de fréquence comme « en général », « d’habitude » et « trois fois par semaine ».',
          'Pour raconter des expériences passées, entraînez-vous à utiliser des structures comme « J’ai commencé ce travail l’année dernière ».',
          'Pour exprimer vos souhaits et vos projets, utilisez le conditionnel : « J’aimerais suivre une formation ».',
          'En français canadien, « la fin de semaine » est une expression courante. En France, « le week-end » est une autre formulation très utilisée.',
          'Ne mémorisez pas une présentation entière. Vous devez pouvoir adapter vos réponses aux questions complémentaires de l’examinateur.'
        ]
      },
      { type: 'heading', text: '5. Ce que l’épreuve évalue et comment se préparer' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Privilégiez une communication spontanée et structurée',
        text:
          'Cette tâche vérifie principalement votre capacité à converser avec une personne que vous ne connaissez pas et à parler de votre vie. ' +
          'Dans l’évaluation de l’expression orale, la pertinence du vocabulaire, la correction grammaticale, la prononciation, l’interaction et l’organisation des idées sont également prises en compte. ' +
          'Pour viser une performance correspondant au niveau B2, développez vos réponses avec des informations pertinentes, variez les structures et conservez une communication naturelle. ' +
          'Ne transformez pas l’entretien en discours appris par cœur.'
      },
      {
        type: 'list',
        items: [
          'Entraînez-vous à faire une présentation personnelle en parlant de votre origine, de votre logement, de votre travail et de vos centres d’intérêt.',
          'Pratiquez des questions sur la famille, les études, le quotidien, les loisirs, les expériences et les objectifs professionnels.',
          'Variez les connecteurs : « d’abord », « ensuite », « cependant », « en revanche » et « c’est pourquoi ».',
          'Enregistrez vos réponses et repérez les pauses excessives, les répétitions et les erreurs d’accord.',
          'Entraînez-vous à répondre à des questions inattendues sans interrompre la communication pour chercher la phrase parfaite.'
        ]
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Le site officiel et l’exemple officiel d’épreuve (PDF) confirment : un entretien dirigé sans préparation, de deux minutes, avec un examinateur que vous ne connaissez pas, qui évalue la capacité à parler de soi et de son environnement familial et professionnel ; ' +
          'les thèmes (état civil, famille, études, situation professionnelle, habitudes, goûts, événements passés, logement, projets, voyages) ; et la demande initiale « Est-ce que vous pouvez vous présenter ? ». ' +
          'Aucune source ne confirme ceci : l’examinateur qui commence par des questions générales puis pose des questions complémentaires, ' +
          'les critères cités (vocabulaire, grammaire, prononciation, interaction, organisation des idées) et la référence au niveau B2. ' +
          'Les exemples de réponses et les conseils d’entraînement sont des suggestions de préparation, pas des règles de l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'TCF Canada – Présentation officielle des épreuves et de l’expression orale',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TCF TP / Canada / Québec – Exemplo de prova de expressão oral (PDF) – France Éducation international',
      url: 'https://www.france-education-international.fr/document/tcf-tp-qc-ca-exemple-epreuve-eo'
    }
  ]
}

export default content
