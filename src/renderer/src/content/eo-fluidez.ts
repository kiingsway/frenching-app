import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-fluidez',

  pt: {
    title: 'Fluidez e entonação no francês oral',
    summary:
      'Você vai aprender a organizar a fala em grupos de sentido, controlar as pausas e utilizar a entonação para transmitir suas ideias com naturalidade. ' +
      'Também vai praticar o ritmo das frases, as ligações entre palavras e técnicas para falar com mais clareza e confiança.',
    blocks: [
      { type: 'heading', text: 'O que significa falar com fluidez' },
      {
        type: 'paragraph',
        text:
          'Fluidez não significa falar depressa. ' +
          'É conseguir manter uma fala compreensível e contínua, com pausas naturais para respirar e organizar as ideias, sem deixar que hesitações longas interrompam o raciocínio. ' +
          'A entonação é a variação da voz que ajuda a mostrar se uma ideia continua, termina ou se a frase é uma pergunta.'
      },
      { type: 'heading', text: 'Ritmo e grupos de sentido' },
      {
        type: 'paragraph',
        text:
          'Em francês, a fala se organiza em grupos de palavras que formam unidades de sentido, chamados [[groupes rythmiques|grupos rítmicos]]. ' +
          'Dentro de cada grupo, evite pausar entre todas as palavras. No final do grupo, a última sílaba pronunciada costuma receber um leve alongamento e destaque. ' +
          'As pausas devem separar ideias completas, sem fragmentar excessivamente a frase. ' +
          'O TV5Monde recomenda pronunciar cada grupo de palavras em um único fôlego, sem pausa, alongando levemente a última sílaba.'
      },
      {
        type: 'table',
        headers: ['Situação', 'Comportamento da voz', 'Exemplo'],
        rows: [
            [
              'Continuação de uma ideia',
              'A voz pode subir levemente no final de um grupo interno.',
              '[[Quand je termine le travail, je rentre chez moi.|Quando termino o trabalho, vou para casa.]]'
            ],
            [
              'Fim de uma afirmação',
              'A voz geralmente desce no final da frase.',
              '[[Le rendez-vous est confirmé.|O compromisso está confirmado.]]'
            ],
            [
              'Pergunta por entonação',
              'A voz sobe mais no final da pergunta.',
              '[[Vous êtes disponible demain ?|Você está disponível amanhã?]]'
            ]
        ]
      },
      { type: 'heading', text: 'Ligações entre palavras' },
      {
        type: 'paragraph',
        text:
          'Para falar com naturalidade, conecte as palavras que pertencem ao mesmo grupo. ' +
          'No [[enchaînement|encadeamento]], uma consoante final já pronunciada se liga à vogal seguinte, como em [[avec elle|com ela]]. ' +
          'Na [[liaison|ligação fonética]], uma consoante final normalmente muda pode ser pronunciada diante de uma vogal, como em [[vous avez|vocês têm]] ' +
          'e [[les horaires|os horários]]. Algumas ligações são obrigatórias, como depois de [[les|os / as]] ou de [[vous|vocês]] diante de um verbo, e outras são proibidas: o TV5Monde indica que não se faz ligação depois de [[et|e]], como em [[et aussi|e também]].'
      },
      { type: 'heading', text: 'Prática de repetição' },
      {
        type: 'list',
        items: [
          '[[Je voudrais prendre rendez-vous pour la semaine prochaine.|Gostaria de marcar um horário para a semana que vem.]]',
          '[[Vous avez reçu le courriel que je vous ai envoyé hier ?|Você recebeu o e-mail que enviei ontem?]]',
          '[[D’abord, je vais présenter le problème.|Primeiro, vou apresentar o problema.]] [[Ensuite, je proposerai deux solutions.|Em seguida, proporei duas soluções.]]',
          '[[Je ne suis pas tout à fait d’accord, mais je comprends votre point de vue.|Não concordo inteiramente, mas entendo seu ponto de vista.]]'
        ]
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda fluidez com velocidade',
        text:
          'Um desafio possível é manter o ritmo da língua materna, fazendo pausas entre palavras que, em francês, pertencem ao mesmo grupo, ou destacando cada sílaba como se tivesse o mesmo peso. ' +
          'Outro erro é falar rápido demais ou forçar todas as [[liaisons|ligações fonéticas]]. ' +
          'Priorize a articulação clara, os grupos de sentido e as pausas nos lugares adequados. Nem toda consoante final deve ser pronunciada.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'No TCF Canada, a expressão oral é individual, presencial com um examinador, com 3 exercícios e 12 minutos, dos quais 2 são de preparação. ' +
          'No TEF Canada, a expressão oral é presencial, gravada e dura 15 minutos (seção A de 5 minutos e seção B de 10). ' +
          'Para treinar, o TV5Monde sugere repetir em um fôlego contínuo; escute uma frase curta, repita imitando o ritmo e grave sua própria voz. ' +
          'Procure manter um ritmo regular, poucas pausas longas e uma fala fácil de acompanhar.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O TV5Monde confirma a elisão, o encadeamento e a ligação, os grupos de palavras ditos em um fôlego com a última sílaba alongada, a entonação que sobe no interior da frase e desce no fim, a pergunta com voz mais alta, as ligações obrigatórias e proibidas (incluindo depois de [[et|e]]). ' +
          'O FEI e o Le français des affaires confirmam o formato das provas orais. ' +
          'Não têm fonte: as dificuldades típicas de quem fala português, a tabela de exemplos e a sequência de treino de gravar a própria voz. ' +
          'O PDF de exemplos de sujets do TEF (Le français des affaires) confirma que a expressão oral é avaliada por pelo menos dois corretores, com critérios de léxico, sintaxe e pronúncia (“a pronúncia é clara, natural?”) e de reações adequadas, espontâneas e naturais às intervenções do examinador; ele não menciona velocidade nem ritmo regular. O manual do examinador do TCF (versão Q, dezembro de 2025, anexo com os descritores do CECRL) avalia, num mesmo critério, [[fluidité, aisance, prononciation, accentuation, enchaînement, intonation, débit|fluidez, desenvoltura, pronúncia, acentuação, encadeamento, entonação, débito]]: nos níveis mais baixos aparecem muitas pausas e hesitações evidentes, no B2 o descritor fala de [[un débit régulier|um débito regular]], poucas pausas longas e pronúncia claramente inteligível, e no C2 as pausas estão [[au service du discours|a serviço do discurso]]. ' +
          'Esses pontos são conselhos de preparação, não regras oficiais dos exames, e nenhuma velocidade de fala garante determinada pontuação.'
      }
    ]
  },

  fr: {
    title: 'Fluidité et intonation à l’oral',
    summary:
      'Vous apprendrez à organiser votre discours en groupes de sens, à gérer les pauses et à utiliser l’intonation pour communiquer naturellement. ' +
      'Vous pratiquerez également le rythme des phrases, les liaisons entre les mots et des techniques pour parler avec plus de clarté et d’assurance.',
    blocks: [
      { type: 'heading', text: 'Que signifie parler avec fluidité ?' },
      {
        type: 'paragraph',
        text:
          'La fluidité ne signifie pas parler vite. ' +
          'C’est la capacité de maintenir un discours compréhensible et continu, avec des pauses naturelles pour respirer et organiser ses idées, sans laisser de longues hésitations interrompre le fil du discours. ' +
          'L’intonation est la variation de la voix qui permet de montrer si une idée continue, se termine ou si la phrase est une question.'
      },
      { type: 'heading', text: 'Le rythme et les groupes de sens' },
      {
        type: 'paragraph',
        text:
          'En français, la parole s’organise en groupes de mots qui forment des unités de sens, appelés groupes rythmiques. ' +
          'À l’intérieur de chaque groupe, évitez de faire une pause entre tous les mots. ' +
          'À la fin du groupe, la dernière syllabe prononcée est généralement légèrement allongée et mise en valeur. ' +
          'Les pauses doivent séparer les idées complètes sans fragmenter excessivement les phrases. ' +
          'TV5Monde recommande de prononcer chaque groupe de mots en un seul souffle, sans pause, en allongeant légèrement la dernière syllabe.'
      },
      {
        type: 'table',
        headers: ['Situation', 'Comportement de la voix', 'Exemple'],
        rows: [
            [
              'Une idée qui continue',
              'La voix peut monter légèrement à la fin d’un groupe interne.',
              'Quand je termine le travail, je rentre chez moi.'
            ],
            [
              'Fin d’une affirmation',
              'La voix descend généralement à la fin de la phrase.',
              'Le rendez-vous est confirmé.'
            ],
            [
              'Question par intonation',
              'La voix monte davantage à la fin de la question.',
              'Vous êtes disponible demain ?'
            ]
        ]
      },
      { type: 'heading', text: 'Les liaisons entre les mots' },
      {
        type: 'paragraph',
        text:
          'Pour parler naturellement, reliez les mots qui appartiennent au même groupe. ' +
          'Dans l’enchaînement, une consonne finale déjà prononcée se rattache à la voyelle suivante, comme dans « avec elle ». ' +
          'Dans la liaison, une consonne finale normalement muette peut être prononcée devant une voyelle, comme dans « vous avez » et « les horaires ». ' +
          'Certaines liaisons sont obligatoires, par exemple après les ou après vous devant un verbe, et d’autres sont interdites : TV5Monde indique qu’on ne fait pas de liaison après « et », comme dans « et aussi ».'
      },
      { type: 'heading', text: 'Exercice de répétition' },
      {
        type: 'list',
        items: [
          'Je voudrais prendre rendez-vous pour la semaine prochaine.',
          'Vous avez reçu le courriel que je vous ai envoyé hier ?',
          'D’abord, je vais présenter le problème. Ensuite, je proposerai deux solutions.',
          'Je ne suis pas tout à fait d’accord, mais je comprends votre point de vue.'
        ]
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas fluidité et vitesse',
        text:
          'Un défi possible consiste à conserver le rythme de leur langue maternelle, en faisant des pauses entre des mots qui appartiennent au même groupe en français, ou en mettant toutes les syllabes en valeur de la même manière. ' +
          'Une autre erreur consiste à parler trop vite ou à forcer toutes les liaisons. ' +
          'Privilégiez une articulation claire, les groupes de sens et les pauses aux bons endroits. Toutes les consonnes finales ne doivent pas être prononcées.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Au TCF Canada, l’expression orale est une épreuve individuelle en face à face avec un examinateur, composée de 3 exercices et d’une durée de 12 minutes, dont 2 minutes de préparation. ' +
          'Au TEF Canada, l’expression orale se déroule en face à face, est enregistrée et dure 15 minutes (section A de 5 minutes et section B de 10). ' +
          'Pour vous entraîner, TV5Monde suggère de répéter en un souffle continu ; écoutez une phrase courte, répétez-la en imitant son rythme et enregistrez votre voix. ' +
          'Essayez de maintenir un débit régulier, de limiter les longues pauses et de produire un discours facile à suivre.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'TV5Monde confirme l’élision, l’enchaînement et la liaison, les groupes de mots dits en un souffle avec la dernière syllabe allongée, l’intonation qui monte à l’intérieur de la phrase et descend à la fin, la question à voix plus haute, les liaisons obligatoires et interdites (y compris après et). ' +
          'Le FEI et Le français des affaires confirment le format des épreuves orales. ' +
          'Ne sont pas sourcés : les difficultés typiques des personnes de langue portugaise, le tableau d’exemples et la méthode d’entraînement par enregistrement de sa propre voix. ' +
          'Le PDF d’exemples de sujets du TEF (Le français des affaires) confirme que l’expression orale est évaluée par au moins deux correcteurs, selon des critères de lexique, de syntaxe et de prononciation (« la prononciation est-elle claire, naturelle ? ») et de réactions adaptées, spontanées et naturelles aux interventions de l’examinateur ; il ne mentionne ni débit ni rythme régulier. Le manuel de l’examinateur du TCF (version Q, décembre 2025, annexe avec les descripteurs du CECRL) évalue, dans un même critère, fluidité, aisance, prononciation, accentuation, enchaînement, intonation et débit : aux niveaux les plus bas apparaissent de nombreuses pauses et des hésitations très évidentes, au niveau B2 le descripteur parle d’un débit régulier, de peu de longues pauses et d’une prononciation clairement intelligible, et au niveau C2 les pauses sont au service du discours. ' +
          'Ces points sont des conseils de préparation et non des règles officielles des examens, et aucune vitesse de parole ne garantit un résultat particulier.'
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
      title: 'Comment donner du rythme et de la musique à votre français ? — TV5Monde',
      url: 'https://apprendre.tv5monde.com/fr/aides/prononciation-comment-donner-du-rythme-et-de-la-musique-votre-francais'
    },
    {
      title: 'L’intonation en français — TV5Monde',
      url: 'https://apprendre.tv5monde.com/fr/aides/prononciation-lintonation-en-francais'
    },
    {
      title: 'La liaison — TV5Monde',
      url: 'https://apprendre.tv5monde.com/fr/aides/prononciation-la-liaison'
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
