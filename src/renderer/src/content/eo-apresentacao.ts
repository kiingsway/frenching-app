import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-apresentacao',

  pt: {
    title: 'Apresentação pessoal: formação, profissão e projeto de imigração',
    summary:
      'Aprenda a apresentar sua trajetória pessoal, acadêmica e profissional em francês, explicando suas qualificações, experiências e objetivos. ' +
      'Desenvolva respostas naturais para falar sobre seus motivos para imigrar ao Canadá e seus planos de integração profissional e pessoal.',
    blocks: [
      { type: 'heading', text: 'Como organizar sua apresentação' },
      {
        type: 'paragraph',
        text:
          'Uma boa apresentação pessoal deve seguir uma sequência lógica, sem parecer uma lista de informações decoradas. ' +
          'Comece dizendo seu nome, sua origem e onde mora atualmente. ' +
          'Depois, apresente sua formação, suas experiências profissionais e, por último, explique seus objetivos e motivos para viver no Canadá. ' +
          'Procure relacionar sua experiência anterior com seus planos futuros.'
      },
      { type: 'heading', text: 'Vocabulário para formação, profissão e imigração' },
      {
        type: 'table',
        headers: ['Objetivo', 'Expressões em francês', 'Uso'],
        rows: [
            [
              'Apresentação',
              '[[Je m’appelle…|Meu nome é…]] / [[Je suis originaire de…|Sou natural de…]] / [[J’habite à…|Moro em…]]',
              'Informar identidade, origem e residência.'
            ],
            [
              'Formação',
              '[[J’ai fait des études en…|Estudei…]] / [[Je suis titulaire d’un diplôme en…|Tenho diploma em…]] / [[J’ai obtenu mon diplôme en…|Obtive meu diploma em…]]',
              'Descrever estudos e qualificações.'
            ],
            [
              'Experiência',
              
                '[[J’ai travaillé dans le domaine de…|Trabalhei na área de…]] / [[J’occupe un poste de…|Ocupo um cargo de…]] ' +
                '/ [[Mes principales responsabilités consistent à…|Minhas principais responsabilidades consistem em…]]',
              'Explicar trajetória e responsabilidades profissionais.'
            ],
            [
              'Motivos para imigrar',
              '[[Je souhaite m’établir au Canada parce que…|Desejo me estabelecer no Canadá porque…]] / [[Ce qui me motive, c’est…|O que me motiva é…]]',
              'Apresentar razões pessoais e profissionais.'
            ],
            [
              'Planos futuros',
              '[[À court terme, je voudrais…|A curto prazo, gostaria de…]] / [[À long terme, j’aimerais…|A longo prazo, gostaria de…]]',
              'Explicar objetivos e projetos.'
            ]
        ]
      },
      { type: 'heading', text: 'Como explicar seus motivos e objetivos' },
      {
        type: 'paragraph',
        text:
          'Evite apresentar seus motivos para imigrar de maneira muito genérica. Explique o que procura e como isso se relaciona com sua trajetória. ' +
          'Você pode mencionar oportunidades profissionais, projetos familiares, continuidade dos estudos, desenvolvimento pessoal ou interesse pela cultura e pelo idioma. ' +
          'Para organizar suas justificativas, utilize [[parce que|porque]], [[car|pois]], [[afin de|a fim de]] e [[en raison de|em razão de]]. ' +
          'Diferencie também seus planos imediatos dos objetivos de longo prazo.'
      },
      { type: 'heading', text: 'Exemplo de apresentação completa' },
      {
        type: 'paragraph',
        text:
          '[[Je m’appelle Rafael, je suis originaire du Brésil et j’habite à Laval depuis un an.|Meu nome é Rafael, sou natural do Brasil e moro em Laval há um ano.]] ' +
          '[[J’ai fait des études en administration et j’ai obtenu mon diplôme en 2020.|Estudei administração e obtive meu diploma em 2020.]] ' +
          '[[Au Brésil, j’ai travaillé pendant quatre ans dans le service à la clientèle.|No Brasil, trabalhei durante quatro anos no atendimento ao cliente.]] ' +
          '[[Je répondais aux demandes des clients et je formais les nouveaux employés.|Eu respondia às solicitações dos clientes e treinava os novos funcionários.]] ' +
          '[[Je souhaite m’établir durablement au Québec afin de poursuivre ma carrière et de développer mes compétences en français.|Desejo me estabelecer permanentemente no Québec para continuar minha carreira e desenvolver minhas competências em francês.]] ' +
          '[[Je sais que je devrai m’adapter au marché du travail et, au besoin, suivre une formation complémentaire.|Sei que terei que me adaptar ao mercado de trabalho e, se necessário, fazer uma formação complementar.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Evite traduzir estruturas diretamente do português',
        text:
          'Para uma atividade profissional que continua até hoje, utilize o presente com [[depuis|há / desde]]: [[Je travaille dans ce domaine depuis trois ans.|Trabalho nessa área há três anos.]] ' +
          'Não use o passado composto nesse caso: [[J’ai travaillé dans ce domaine depuis trois ans.|Trabalhei nessa área há três anos. (errado para uma atividade que continua)]] ' +
          'Não confunda [[depuis|há / desde]] com [[pendant|durante]]: o OQLF explica que [[depuis|há / desde]] introduz o momento em que começou uma ação ou um estado que dura, enquanto [[pendant|durante]] apresenta um período delimitado: [[Au Brésil, j’ai travaillé pendant quatre ans.|No Brasil, trabalhei durante quatro anos.]] ' +
          'Outro cuidado: [[Je suis titulaire d’un diplôme en administration.|Tenho diploma em administração.]] é uma maneira natural de apresentar uma qualificação acadêmica.'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Adapte sua apresentação ao formato do exame',
        text:
          'No TCF Canada, a expressão oral é individual, presencial com um examinador, com 3 exercícios e 12 minutos, dos quais 2 são de preparação. ' +
          'No TEF Canada, a expressão oral é presencial com um examinador e é gravada, com a seção A (obter informações, 5 minutos) e a seção B (argumentar para convencer, 10 minutos). ' +
          'Pratique apresentar sua trajetória em aproximadamente um minuto como exercício de fluência, mas também desenvolva respostas espontâneas, com detalhes e justificativas. ' +
          'Não dependa de um discurso decorado.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O FEI confirma o formato da expressão oral do TCF Canada (individual, 3 exercícios, 12 minutos com 2 de preparação), e o Le français des affaires confirma o formato do TEF Canada (seções A e B, durações e gravação). ' +
          'O OQLF confirma o sentido de [[depuis|há / desde]]. ' +
          'Não têm fonte: o conteúdo das tarefas do TCF Canada, o modelo de apresentação, as expressões sugeridas, a ordem recomendada e o exercício de um minuto. ' +
          'Esses pontos são material didático, não regra oficial. As páginas consultadas não indicam que motivos específicos para imigrar sejam perguntados nem exigem uma apresentação de duração determinada.'
      }
    ]
  },

  fr: {
    title: 'Présentation personnelle : formation, profession et projet d’immigration',
    summary:
      'Apprenez à présenter votre parcours personnel, scolaire et professionnel en français en expliquant vos qualifications, vos expériences et vos objectifs. ' +
      'Développez des réponses naturelles pour parler de vos motivations à immigrer au Canada et de vos projets d’intégration professionnelle et personnelle.',
    blocks: [
      { type: 'heading', text: 'Comment organiser votre présentation' },
      {
        type: 'paragraph',
        text:
          'Une bonne présentation personnelle doit suivre un ordre logique, sans ressembler à une liste de renseignements appris par cœur. ' +
          'Commencez par donner votre nom, votre origine et votre lieu de résidence actuel. ' +
          'Ensuite, présentez votre formation, vos expériences professionnelles et, enfin, expliquez vos objectifs et vos motivations pour vivre au Canada. ' +
          'Essayez de faire le lien entre votre expérience passée et vos projets d’avenir.'
      },
      { type: 'heading', text: 'Vocabulaire de la formation, de la profession et de l’immigration' },
      {
        type: 'table',
        headers: ['Objectif', 'Expressions utiles', 'Utilisation'],
        rows: [
            [
              'Présentation',
              'Je m’appelle… / Je suis originaire de… / J’habite à…',
              'Donner son identité, son origine et son lieu de résidence.'
            ],
            [
              'Formation',
              'J’ai fait des études en… / Je suis titulaire d’un diplôme en… / J’ai obtenu mon diplôme en…',
              'Décrire ses études et ses qualifications.'
            ],
            [
              'Expérience',
              'J’ai travaillé dans le domaine de… / J’occupe un poste de… / Mes principales responsabilités consistent à…',
              'Expliquer son parcours et ses responsabilités professionnelles.'
            ],
            [
              'Motivations à immigrer',
              'Je souhaite m’établir au Canada parce que… / Ce qui me motive, c’est…',
              'Présenter des raisons personnelles et professionnelles.'
            ],
            [
              'Projets d’avenir',
              'À court terme, je voudrais… / À long terme, j’aimerais…',
              'Expliquer ses objectifs et ses projets.'
            ]
        ]
      },
      { type: 'heading', text: 'Comment expliquer vos motivations et vos objectifs' },
      {
        type: 'paragraph',
        text:
          'Évitez de présenter vos motivations à immigrer de manière trop générale. Expliquez ce que vous recherchez et comment cela correspond à votre parcours. ' +
          'Vous pouvez parler de possibilités professionnelles, de projets familiaux, de la poursuite de vos études, de votre développement personnel ou de votre intérêt pour la culture et la langue. ' +
          'Pour organiser vos justifications, utilisez parce que, car, afin de et en raison de. Distinguez également vos projets immédiats de vos objectifs à long terme.'
      },
      { type: 'heading', text: 'Exemple de présentation complète' },
      {
        type: 'paragraph',
        text:
          'Je m’appelle Rafael, je suis originaire du Brésil et j’habite à Laval depuis un an. J’ai fait des études en administration et j’ai obtenu mon diplôme en 2020. ' +
          'Au Brésil, j’ai travaillé pendant quatre ans dans le service à la clientèle. Je répondais aux demandes des clients et je formais les nouveaux employés. ' +
          'Je souhaite m’établir durablement au Québec afin de poursuivre ma carrière et de développer mes compétences en français. ' +
          'Je sais que je devrai m’adapter au marché du travail et, au besoin, suivre une formation complémentaire.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Évitez de traduire directement les structures du portugais',
        text:
          'Pour une activité professionnelle qui se poursuit actuellement, utilisez le présent avec depuis : Je travaille dans ce domaine depuis trois ans. ' +
          'N’employez pas le passé composé dans ce cas : « J’ai travaillé dans ce domaine depuis trois ans » est incorrect pour une activité qui continue. ' +
          'Ne confondez pas depuis et pendant : l’OQLF explique que depuis introduit le moment où a commencé une action ou un état qui dure, tandis que pendant présente une période délimitée : Au Brésil, j’ai travaillé pendant quatre ans. ' +
          'Autre expression utile : Je suis titulaire d’un diplôme en administration est une manière naturelle de présenter une qualification scolaire ou universitaire.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Adaptez votre présentation au format de l’examen',
        text:
          'Au TCF Canada, l’expression orale est une épreuve individuelle en face à face avec un examinateur, composée de 3 exercices et d’une durée de 12 minutes, dont 2 minutes de préparation. ' +
          'Au TEF Canada, l’expression orale se déroule en face à face avec un examinateur et est enregistrée, avec la section A (obtenir des renseignements, 5 minutes) et la section B (argumenter pour convaincre, 10 minutes). ' +
          'Entraînez-vous à présenter votre parcours en une minute environ comme exercice de fluidité, mais développez également des réponses spontanées, avec des détails et des justifications. ' +
          'Ne dépendez pas d’un discours appris par cœur.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Le FEI confirme le format de l’expression orale du TCF Canada (individuelle, 3 exercices, 12 minutes dont 2 de préparation), et Le français des affaires confirme le format du TEF Canada (sections A et B, durées et enregistrement). ' +
          'L’OQLF confirme le sens de depuis. ' +
          'Ne sont pas sourcés : le contenu des tâches du TCF Canada, le modèle de présentation, les expressions proposées, l’ordre recommandé et l’exercice d’une minute. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle. Les pages consultées n’indiquent pas que des motivations précises à immigrer soient demandées ni n’imposent une présentation d’une durée déterminée.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'TCF Canada — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'Se préparer à l’épreuve d’expression orale du TEF — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-dexpression-orale-du-tef/'
    },
    {
      title: 'La préposition depuis — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21188/la-syntaxe/les-prepositions/preposition-devant-un-nom/preposition-depuis'
    }
  ]
}

export default content
