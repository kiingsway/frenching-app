import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-saude',

  pt: {
    title: 'Saúde: médico, farmácia, sistema de saúde, bem-estar e esporte',
    summary:
      'Você vai aprender o vocabulário francês relacionado a consultas médicas, sintomas, medicamentos, farmácias e acesso ao sistema de saúde canadense. ' +
      'Também vai estudar expressões para falar sobre hábitos saudáveis, saúde mental, exercícios físicos e atividades esportivas.',
    blocks: [
      { type: 'heading', text: 'Consultas médicas e profissionais de saúde' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre saúde, é importante conhecer os nomes dos profissionais, dos estabelecimentos e dos serviços médicos. ' +
          'No francês canadense, algumas expressões são especialmente úteis, como [[médecin de famille|médico de família]], [[clinique sans rendez-vous|clínica sem agendamento]], [[pharmacie|farmácia]] ' +
          'e [[urgence|emergência]].'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado'],
        rows: [
            [
              '[[médecin de famille|Médico de família]]',
              'Profissional que acompanha a saúde geral do paciente.'
            ],
            [
              '[[médecin généraliste|Clínico geral]]',
              'Forma também utilizada, especialmente no francês europeu.'
            ],
            [
              '[[pharmacien / pharmacienne|Farmacêutico / farmacêutica]]',
              'Profissional que orienta sobre medicamentos.'
            ],
            [
              '[[infirmier / infirmière|Enfermeiro / enfermeira]]',
              'Profissional de enfermagem.'
            ],
            [
              '[[dentiste|Dentista]]',
              'Profissional responsável pela saúde bucal.'
            ],
            [
              '[[clinique médicale|Clínica médica]]',
              'Estabelecimento que oferece consultas.'
            ],
            [
              '[[CLSC|Centro local de serviços comunitários]]',
              'Estrutura do sistema de saúde do Québec que oferece serviços de saúde e sociais.'
            ],
            [
              '[[salle d’attente|Sala de espera]]',
              'Local onde os pacientes aguardam atendimento.'
            ],
            [
              '[[rendez-vous|Consulta marcada]]',
              'Horário previamente agendado.'
            ],
            [
              '[[service d’urgence|Serviço de emergência]]',
              'Atendimento para situações que exigem cuidados urgentes.'
            ]
        ]
      },
      { type: 'heading', text: 'Sintomas, medicamentos e farmácia' },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado'],
        rows: [
            [
              '[[avoir mal à la tête|Estar com dor de cabeça]]',
              'Dor na cabeça.'
            ],
            [
              '[[avoir mal à la gorge|Estar com dor de garganta]]',
              'Dor na garganta.'
            ],
            [
              '[[avoir mal au dos|Estar com dor nas costas]]',
              'Dor nas costas.'
            ],
            [
              '[[avoir de la fièvre|Estar com febre]]',
              'Apresentar temperatura corporal elevada.'
            ],
            [
              '[[tousser|Tossir]]',
              'Apresentar tosse.'
            ],
            [
              '[[une ordonnance|Uma receita médica]]',
              'Documento que autoriza a obtenção de um medicamento prescrito.'
            ],
            [
              '[[un médicament sur ordonnance|Um medicamento sob prescrição]]',
              'Medicamento que exige receita médica.'
            ],
            [
              '[[un médicament en vente libre|Um medicamento de venda livre]]',
              'Medicamento que pode ser adquirido sem receita.'
            ],
            [
              '[[les effets secondaires|Os efeitos colaterais]]',
              'Efeitos indesejados associados a um medicamento.'
            ],
            [
              '[[renouveler une ordonnance|Renovar uma receita]]',
              'Obter a renovação de uma prescrição.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'No Canadá, cada província e território possui seu próprio regime público de seguro de saúde. No Québec, a [[RAMQ|Régie de l’assurance maladie du Québec]] ' +
          'administra o seguro público, e a [[carte d’assurance maladie|carteira de seguro de saúde]] permite acessar os serviços cobertos. ' +
          'A cobertura de medicamentos pode depender de um regime separado, público ou privado. Por isso, não presuma que todos os medicamentos prescritos sejam gratuitos. ' +
          'O site do Governo do Québec informa que quem espera um [[médecin de famille|médico de família]] pode usar o [[Guichet d’accès à la première ligne|Guichê de acesso à primeira linha]] (GAP) para obter uma consulta ou um serviço médico.'
      },
      { type: 'heading', text: 'Bem-estar, hábitos saudáveis e esporte' },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado'],
        rows: [
            [
              '[[le bien-être|O bem-estar]]',
              'Estado de satisfação física e mental.'
            ],
            [
              '[[la santé mentale|A saúde mental]]',
              'Bem-estar psicológico e emocional.'
            ],
            [
              '[[la santé physique|A saúde física]]',
              'Condição geral do organismo.'
            ],
            [
              '[[une alimentation équilibrée|Uma alimentação equilibrada]]',
              'Alimentação variada e adequada.'
            ],
            [
              '[[un sommeil réparateur|Um sono reparador]]',
              'Sono que proporciona descanso suficiente.'
            ],
            [
              '[[la gestion du stress|O gerenciamento do estresse]]',
              'Estratégias para lidar com situações estressantes.'
            ],
            [
              '[[l’activité physique|A atividade física]]',
              'Movimentos corporais que envolvem gasto de energia.'
            ],
            [
              '[[l’entraînement|O treinamento]]',
              'Prática organizada de exercícios.'
            ],
            [
              '[[la musculation|A musculação]]',
              'Exercícios para desenvolver força muscular.'
            ],
            [
              '[[l’endurance|A resistência física]]',
              'Capacidade de manter um esforço físico.'
            ],
            [
              '[[les étirements|Os alongamentos]]',
              'Exercícios para alongar os músculos.'
            ],
            [
              '[[les courbatures|As dores musculares após o esforço]]',
              'Desconforto muscular que pode surgir depois de uma atividade física.'
            ]
        ]
      },
      {
        type: 'list',
        items: [
          '[[Je voudrais prendre rendez-vous avec un médecin de famille.|Gostaria de marcar uma consulta com um médico de família.]]',
          '[[J’ai mal à la gorge depuis trois jours et je tousse.|Estou com dor de garganta há três dias e estou tossindo.]]',
          '[[Est-ce que ce médicament est disponible sans ordonnance ?|Este medicamento está disponível sem receita?]]',
          '[[Le pharmacien m’a expliqué comment prendre le médicament.|O farmacêutico me explicou como tomar o medicamento.]]',
          '[[J’essaie de faire de l’exercice plusieurs fois par semaine.|Tento fazer exercícios várias vezes por semana.]]',
          '[[Je préfère aller au gym pour faire de la musculation.|Prefiro ir à academia para fazer musculação.]]',
          '[[Un sommeil suffisant est important pour le bien-être.|Dormir o suficiente é importante para o bem-estar.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Uma particularidade regional: no Québec, [[gym|academia]] ' +
          'é bastante utilizado na linguagem cotidiana, enquanto [[centre de conditionnement physique|centro de condicionamento físico]] é uma denominação mais formal. ' +
          'Na França, [[salle de sport|academia]] também é muito comum.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com as construções para descrever dores',
        text:
          'Um erro possível é traduzir literalmente expressões como “estou com dor de cabeça”. Em francês, utilize [[avoir mal à|estar com dor em]] ' +
          'seguido da parte do corpo: [[J’ai mal à la tête.|Estou com dor de cabeça.]] [[J’ai mal au dos.|Estou com dor nas costas.]] ' +
          '[[J’ai mal aux jambes.|Estou com dor nas pernas.]] Observe também a contração da preposição à com os artigos: à + le = au ' +
          'e à + les = aux.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na compreensão e na produção oral, pratique descrever sintomas, explicar há quanto tempo sente uma dor, solicitar uma consulta e conversar sobre hábitos de saúde. ' +
          'Também treine comparar estilos de vida, discutir os benefícios da atividade física e apresentar opiniões sobre o sistema de saúde. ' +
          'Construa respostas completas, utilizando expressões como [[depuis quelques jours|há alguns dias]], [[faire régulièrement de l’exercice|praticar exercícios regularmente]] ' +
          'e [[prendre soin de sa santé|cuidar da própria saúde]].'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O site do Governo do Québec confirma o [[Guichet d’accès à la première ligne|Guichê de acesso à primeira linha]] (GAP) para quem espera um [[médecin de famille|médico de família]]. ' +
          'O IRCC (Canada.ca) confirma que o Canadá tem um sistema de saúde universal financiado por impostos. ' +
          'Os sites do Governo do Québec sobre atividade física e saúde mental existem e tratam de hábitos saudáveis. As páginas do OQLF sobre vocabulário médico e farmacêutico são apresentações gerais. ' +
          'A RAMQ confirma que a [[l’assurance maladie|seguro de saúde]] é um regime público gerido por ela, que dá acesso gratuito aos serviços cobertos mediante a [[carte d’assurance maladie|carteira de seguro de saúde]] válida (no hospital, em clínica médica ou no [[CLSC|CLSC]]), e que o [[l’assurance médicaments|seguro de medicamentos]] é obrigatório para quem reside de forma permanente no Québec, podendo ser público (gerido pela RAMQ) ou privado. ' +
          'Não têm fonte confirmada: as tabelas de vocabulário (profissionais, sintomas, medicamentos, bem-estar e esporte), [[clinique sans rendez-vous|clínica sem agendamento]], [[gym|academia]] e [[salle de sport|academia]], os exemplos e a dica de treino. ' +
          'Esses pontos são recomendações de estudo, não regras oficiais das provas.'
      }
    ]
  },

  fr: {
    title: 'Santé : médecin, pharmacie, système de santé, bien-être et sport',
    summary:
      'Vous apprendrez le vocabulaire français lié aux consultations médicales, aux symptômes, aux médicaments, aux pharmacies et à l’accès au système de santé canadien. ' +
      'Vous étudierez également des expressions pour parler des habitudes saines, de la santé mentale, de l’exercice physique et des activités sportives.',
    blocks: [
      { type: 'heading', text: 'Consultations médicales et professionnels de la santé' },
      {
        type: 'paragraph',
        text:
          'Pour parler de santé, il est important de connaître les noms des professionnels, des établissements et des services médicaux. ' +
          'En français canadien, certaines expressions sont particulièrement utiles, comme médecin de famille, clinique sans rendez-vous, pharmacie et urgence.'
      },
      {
        type: 'table',
        headers: ['Expression en français', 'Explication'],
        rows: [
            [
              'Médecin de famille',
              'Professionnel qui assure le suivi général de la santé d’un patient.'
            ],
            [
              'Médecin généraliste',
              'Forme également utilisée, notamment dans le français européen.'
            ],
            [
              'Pharmacien / pharmacienne',
              'Professionnel qui conseille les patients sur les médicaments.'
            ],
            [
              'Infirmier / infirmière',
              'Professionnel des soins infirmiers.'
            ],
            [
              'Dentiste',
              'Professionnel responsable de la santé buccodentaire.'
            ],
            [
              'Clinique médicale',
              'Établissement qui offre des consultations médicales.'
            ],
            [
              'CLSC',
              'Centre local de services communautaires qui offre des services de santé et des services sociaux au Québec.'
            ],
            [
              'Salle d’attente',
              'Lieu où les patients attendent leur consultation.'
            ],
            [
              'Rendez-vous',
              'Consultation dont l’heure a été fixée à l’avance.'
            ],
            [
              'Service d’urgence',
              'Service destiné aux situations qui nécessitent des soins urgents.'
            ]
        ]
      },
      { type: 'heading', text: 'Symptômes, médicaments et pharmacie' },
      {
        type: 'table',
        headers: ['Expression en français', 'Explication'],
        rows: [
            [
              'Avoir mal à la tête',
              'Ressentir une douleur à la tête.'
            ],
            [
              'Avoir mal à la gorge',
              'Ressentir une douleur à la gorge.'
            ],
            [
              'Avoir mal au dos',
              'Ressentir une douleur au dos.'
            ],
            [
              'Avoir de la fièvre',
              'Présenter une température corporelle élevée.'
            ],
            [
              'Tousser',
              'Avoir une toux.'
            ],
            [
              'Une ordonnance',
              'Document qui autorise l’obtention d’un médicament prescrit.'
            ],
            [
              'Un médicament sur ordonnance',
              'Médicament qui nécessite une prescription.'
            ],
            [
              'Un médicament en vente libre',
              'Médicament qui peut être acheté sans ordonnance.'
            ],
            [
              'Les effets secondaires',
              'Effets indésirables associés à un médicament.'
            ],
            [
              'Renouveler une ordonnance',
              'Obtenir le renouvellement d’une prescription.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Au Canada, chaque province et territoire possède son propre régime public d’assurance maladie. ' +
          'Au Québec, la RAMQ, ou Régie de l’assurance maladie du Québec, administre l’assurance publique, et la carte d’assurance maladie permet d’accéder aux services couverts. ' +
          'La couverture des médicaments peut dépendre d’un régime distinct, public ou privé. ' +
          'Il ne faut donc pas supposer que tous les médicaments prescrits sont gratuits. ' +
          'Le site du gouvernement du Québec indique que les personnes en attente d’un médecin de famille peuvent utiliser le Guichet d’accès à la première ligne (GAP) pour obtenir une consultation ou un service médical.'
      },
      { type: 'heading', text: 'Bien-être, habitudes saines et sport' },
      {
        type: 'table',
        headers: ['Expression en français', 'Explication'],
        rows: [
            [
              'Le bien-être',
              'État de satisfaction physique et mentale.'
            ],
            [
              'La santé mentale',
              'Bien-être psychologique et émotionnel.'
            ],
            [
              'La santé physique',
              'État général de l’organisme.'
            ],
            [
              'Une alimentation équilibrée',
              'Alimentation variée et adaptée.'
            ],
            [
              'Un sommeil réparateur',
              'Sommeil qui procure un repos suffisant.'
            ],
            [
              'La gestion du stress',
              'Stratégies permettant de faire face aux situations stressantes.'
            ],
            [
              'L’activité physique',
              'Mouvements corporels qui entraînent une dépense énergétique.'
            ],
            [
              'L’entraînement',
              'Pratique organisée d’exercices.'
            ],
            [
              'La musculation',
              'Exercices destinés à développer la force musculaire.'
            ],
            [
              'L’endurance',
              'Capacité à maintenir un effort physique.'
            ],
            [
              'Les étirements',
              'Exercices destinés à étirer les muscles.'
            ],
            [
              'Les courbatures',
              'Douleurs musculaires qui peuvent apparaître après une activité physique.'
            ]
        ]
      },
      {
        type: 'list',
        items: [
          'Je voudrais prendre rendez-vous avec un médecin de famille.',
          'J’ai mal à la gorge depuis trois jours et je tousse.',
          'Est-ce que ce médicament est disponible sans ordonnance ?',
          'Le pharmacien m’a expliqué comment prendre le médicament.',
          'J’essaie de faire de l’exercice plusieurs fois par semaine.',
          'Je préfère aller au gym pour faire de la musculation.',
          'Un sommeil suffisant est important pour le bien-être.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Une particularité régionale : au Québec, gym est couramment utilisé dans la langue quotidienne, tandis que centre de conditionnement physique est une appellation plus formelle. ' +
          'En France, salle de sport est également très courant.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux constructions pour décrire les douleurs',
        text:
          'Une erreur possible consiste à traduire littéralement les expressions portugaises correspondant à avoir mal à la tête. ' +
          'En français, utilisez avoir mal à suivi de la partie du corps : « J’ai mal à la tête. » « J’ai mal au dos. » « J’ai mal aux jambes. ' +
          '» Faites également attention à la contraction de la préposition à avec les articles : à + le = au et à + les = aux.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'En compréhension et en production orale, entraînez-vous à décrire des symptômes, à préciser depuis combien de temps vous ressentez une douleur, à demander une consultation et à parler de vos habitudes de santé. ' +
          'Entraînez-vous également à comparer des modes de vie, à discuter des bienfaits de l’activité physique et à présenter des opinions sur le système de santé. ' +
          'Construisez des réponses complètes en utilisant des expressions comme depuis quelques jours, faire régulièrement de l’exercice et prendre soin de sa santé.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Le site du gouvernement du Québec confirme le Guichet d’accès à la première ligne (GAP) pour les personnes en attente d’un médecin de famille. ' +
          'IRCC (Canada.ca) confirme que le Canada dispose d’un système de santé universel financé par les impôts. ' +
          'Les sites du gouvernement du Québec sur l’activité physique et la santé mentale existent et portent sur les saines habitudes de vie. Les pages de l’OQLF sur le vocabulaire médical et pharmaceutique sont des présentations générales. ' +
          'La RAMQ confirme que l’assurance maladie est un régime public géré par elle, qui donne accès gratuitement aux soins couverts sur présentation d’une carte d’assurance maladie valide (à l’hôpital, dans une clinique médicale ou dans un CLSC), et que l’assurance médicaments est obligatoire pour les personnes qui résident au Québec de façon permanente, publique (gérée par la RAMQ) ou privée. ' +
          'Ne sont pas confirmés par une source : les tableaux de vocabulaire (professionnels, symptômes, médicaments, bien-être et sport), clinique sans rendez-vous, gym et salle de sport, les exemples et le conseil d’entraînement. ' +
          'Ces points sont des recommandations d’étude et non des règles officielles des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Assurance maladie ou assurance médicaments : quelle différence? — Régie de l’assurance maladie du Québec',
      url: 'https://www.ramq.gouv.qc.ca/fr/citoyens/assurance-maladie/assurance-maladie-medicaments-quelle-difference'
    },
    {
      title: 'Vocabulaire de la médecine — Office québécois de la langue française',
      url: 'https://www.oqlf.gouv.qc.ca/francisation/ordres_prof/vocabulaires/medecine/'
    },
    {
      title: 'Vocabulaire de la pharmacie — Office québécois de la langue française',
      url: 'https://www.oqlf.gouv.qc.ca/francisation/ordres_prof/vocabulaires/pharmacie/'
    },
    {
      title: 'Obtenir une consultation avec un professionnel de la santé — Gouvernement du Québec',
      url: 'https://www.quebec.ca/sante/systeme-et-services-de-sante/organisation-des-services/services-de-sante-et-services-sociaux-de-premiere-ligne/comment-obtenir-consultation-avec-professionnel-sante'
    },
    {
      title: 'Health care in Canada: Access our universal health care system — Immigration, Refugees and Citizenship Canada',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/health-care/universal-system.html'
    },
    {
      title: 'Améliorer sa santé grâce à l’activité physique — Gouvernement du Québec',
      url: 'https://www.quebec.ca/sante/conseils-et-prevention/saines-habitudes-de-vie/activite-physique/ameliorer-sa-sante-grace-a-lactivite-physique'
    },
    {
      title: 'Maintenir une bonne santé mentale — Gouvernement du Québec',
      url: 'https://www.quebec.ca/sante/sante-mentale/s-informer-sur-sante-mentale-et-troubles-mentaux/favoriser-bonne-sante-mentale/maintenir-bonne-sante-mentale'
    }
  ]
}

export default content
