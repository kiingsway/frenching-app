import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-sociedade',

  pt: {
    title: 'Sociedade: imigração, integração, diversidade e voluntariado',
    summary:
      'Aprenda a falar sobre imigração, integração social, diversidade cultural, envelhecimento da população e participação comunitária. ' +
      'Domine o vocabulário utilizado no contexto canadense para discutir inclusão, desafios sociais, solidariedade entre gerações e o papel do voluntariado na sociedade.',
    blocks: [
      { type: 'heading', text: 'Imigração e integração social' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre imigração, conheça expressões como [[une personne immigrante|uma pessoa imigrante]], [[un nouvel arrivant / une nouvelle arrivante|um recém-chegado / uma recém-chegada]], [[une personne réfugiée|uma pessoa refugiada]], [[un parcours d’immigration|uma trajetória de imigração]], [[la résidence permanente|a residência permanente]], [[un statut d’immigration|um status imigratório]] ' +
          'e [[une demande d’asile|um pedido de asilo]]. ' +
          'No Québec, também é importante conhecer [[l’installation|o estabelecimento inicial no país]], [[l’intégration|a integração social]], [[la francisation|o aprendizado do francês como língua de integração]] ' +
          'e [[la reconnaissance des compétences|o reconhecimento das competências profissionais]].'
      },
      {
        type: 'table',
        headers: ['Tema', 'Vocabulário em francês', 'Significado'],
        rows: [
            [
              'Imigração',
              '[[l’immigration|a imigração]], [[l’émigration|a emigração]], [[la résidence permanente|a residência permanente]]',
              'Movimentos migratórios e situação das pessoas imigrantes.'
            ],
            [
              'Integração',
              '[[l’accueil|o acolhimento]], [[l’intégration sociale|a integração social]], [[la participation citoyenne|a participação cidadã]]',
              'Participação na sociedade e acesso aos serviços.'
            ],
            [
              'Diversidade',
              '[[la diversité culturelle|a diversidade cultural]], [[l’inclusion|a inclusão]], [[les relations interculturelles|as relações interculturais]]',
              'Convivência entre pessoas de diferentes origens.'
            ],
            [
              'Envelhecimento',
              '[[le vieillissement de la population|o envelhecimento da população]], [[les personnes aînées|as pessoas idosas]], [[la retraite|a aposentadoria]]',
              'Mudanças demográficas e necessidades da população.'
            ],
            [
              'Solidariedade',
              '[[l’entraide|a ajuda mútua]], [[la solidarité intergénérationnelle|a solidariedade entre gerações]], [[le soutien communautaire|o apoio comunitário]]',
              'Cooperação e apoio entre pessoas e gerações.'
            ],
            [
              'Voluntariado',
              '[[le bénévolat|o voluntariado]], [[un bénévole / une bénévole|um voluntário / uma voluntária]], [[un organisme communautaire|uma organização comunitária]]',
              'Participação voluntária em iniciativas sociais.'
            ]
        ]
      },
      { type: 'heading', text: 'Diversidade, inclusão e desafios sociais' },
      {
        type: 'paragraph',
        text:
          'Para discutir diversidade e convivência, utilize [[le vivre-ensemble|a convivência coletiva]], [[l’égalité des chances|a igualdade de oportunidades]], [[le respect des différences|o respeito às diferenças]], [[les préjugés|os preconceitos]], [[la discrimination|a discriminação]], [[l’exclusion sociale|a exclusão social]] ' +
          'e [[la cohésion sociale|a coesão social]]. ' +
          'No contexto canadense e quebequense, são frequentes os debates sobre relações interculturais, participação das pessoas imigrantes e construção de uma sociedade inclusiva. ' +
          'Para argumentar, você pode discutir a importância do acesso à educação, do aprendizado do francês, do reconhecimento de diplomas estrangeiros e das oportunidades profissionais.'
      },
      {
        type: 'paragraph',
        text:
          'O envelhecimento da população também representa um importante tema social. ' +
          'Algumas expressões úteis são [[le maintien à domicile|a permanência da pessoa idosa em sua própria casa com apoio]], [[les soins à domicile|os cuidados domiciliares]], [[la perte d’autonomie|a perda de autonomia]], [[les proches aidants|os cuidadores familiares]], [[l’isolement social|o isolamento social]] ' +
          'e [[les services aux personnes aînées|os serviços destinados às pessoas idosas]]. ' +
          'Para falar de voluntariado, utilize [[faire du bénévolat|fazer trabalho voluntário]], [[s’engager dans sa communauté|envolver-se na comunidade]], [[donner de son temps|dedicar seu tempo]], [[organiser une collecte de fonds|organizar uma arrecadação de fundos]] ' +
          'e [[venir en aide aux personnes vulnérables|ajudar pessoas em situação de vulnerabilidade]].'
      },
      { type: 'heading', text: 'Exemplo em contexto' },
      {
        type: 'paragraph',
        text:
          '[[Depuis son arrivée à Sherbrooke, Ana participe aux activités d’un organisme communautaire.|Desde sua chegada a Sherbrooke, Ana participa das atividades de uma organização comunitária.]] ' +
          '[[Elle suit des cours de francisation et fait du bénévolat dans une banque alimentaire du quartier.|Ela frequenta cursos de francês e faz trabalho voluntário em um banco de alimentos do bairro.]] ' +
          '[[Cette expérience lui permet de rencontrer des gens, de pratiquer le français et de mieux connaître sa communauté.|Essa experiência permite que ela conheça pessoas, pratique francês e conheça melhor sua comunidade.]] ' +
          '[[Elle estime que l’intégration repose sur des efforts réciproques, l’accès aux services et la reconnaissance des compétences.|Ela considera que a integração depende de esforços mútuos, do acesso aos serviços e do reconhecimento das competências.]] ' +
          '[[Par ailleurs, le vieillissement de la population soulève des questions sur les soins à domicile, l’isolement social et la solidarité entre les générations.|Além disso, o envelhecimento da população levanta questões sobre os cuidados domiciliares, o isolamento social e a solidariedade entre gerações.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção aos termos relacionados à integração e ao voluntariado',
        text:
          'Não confunda [[immigration|imigração]] ' +
          'com [[émigration|emigração]]: a primeira indica a entrada em um país para nele se estabelecer, enquanto a segunda indica a saída do país de origem. ' +
          'Outro cuidado importante é a diferença entre [[bénévole|voluntário]] ' +
          'e [[bénévolat|voluntariado]]: o primeiro designa a pessoa, enquanto o segundo representa a atividade voluntária. ' +
          'Também evite traduzir literalmente o verbo português assistir no sentido de ajudar. ' +
          'Em francês, [[assister à une activité|participar de uma atividade como espectador ou estar presente]] não significa prestar ajuda. ' +
          'Para expressar ajuda, utilize [[aider quelqu’un|ajudar alguém]] ou [[venir en aide à quelqu’un|prestar ajuda a alguém]].'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Desenvolva argumentos sobre questões sociais atuais',
        text:
          'No TCF Canada, a expressão escrita tem 3 exercícios (60 minutos) e a expressão oral tem 3 exercícios (12 minutos, dos quais 2 de preparação). No TEF Canada, a seção B da expressão oral consiste em argumentar para convencer. ' +
          'Nas produções oral e escrita, pratique expressar opiniões sobre integração dos imigrantes, diversidade cultural, envelhecimento da população e participação comunitária. ' +
          'Apresente vantagens e desafios, explique causas e consequências e proponha soluções. ' +
          'Utilize exemplos concretos e conectores para construir uma argumentação equilibrada. ' +
          'Uma expressão útil para esse tipo de discussão é [[Une société inclusive devrait offrir les mêmes possibilités à toutes les personnes.|Uma sociedade inclusiva deveria oferecer as mesmas oportunidades a todas as pessoas.]]'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do Québec.ca consultadas confirmam: o serviço Accompagnement Québec (gratuito, com plano de ação individualizado, [[la francisation|a francização]], [[la reconnaissance des compétences|o reconhecimento de competências]] e [[l’emploi|o emprego]]); a Política sobre a integração nacional, que trata de [[le vivre-ensemble|a convivência coletiva]], [[les relations interculturelles|as relações interculturais]] e do respeito à [[la diversité culturelle|diversidade cultural]]; e o programa de apoio à integração, que fala de [[la pleine participation|a plena participação]] em francês na [[la vie collective|vida coletiva]] e de [[le jumelage interculturel|o pareamento intercultural]]. ' +
          'A página da Statistique Canada trata do [[le vieillissement démographique|envelhecimento demográfico]] e informa que a expressão “les aînés et le vieillissement” passou a ser “les adultes âgés et le vieillissement démographique” ([[les adultes âgés|os adultos mais velhos]]). O Rapport 2025 do IRCC trata dos [[les services d’établissement|serviços de acolhimento e instalação]], dos [[les résultats d’établissement|resultados de instalação]] dos [[les nouveaux arrivants|recém-chegados]] e dos [[les francophones hors Québec|francófonos fora do Québec]]. O FEI e o Le français des affaires confirmam o formato das provas. ' +
          'Não têm fonte confirmada: as tabelas de vocabulário, a distinção entre [[immigration|imigração]] e [[émigration|emigração]], a ideia de [[bénévole|voluntário]] × [[bénévolat|voluntariado]], o aviso sobre assistir, os exemplos e a sugestão de argumentação. ' +
          'Essa sugestão é recomendação de preparação, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'La société : immigration, intégration, diversité et bénévolat',
    summary:
      'Apprenez à parler d’immigration, d’intégration sociale, de diversité culturelle, du vieillissement de la population et de la participation communautaire. ' +
      'Maîtrisez le vocabulaire utilisé dans le contexte canadien pour discuter de l’inclusion, des défis sociaux, de la solidarité entre les générations et du rôle du bénévolat dans la société.',
    blocks: [
      { type: 'heading', text: 'Immigration et intégration sociale' },
      {
        type: 'paragraph',
        text:
          'Pour parler d’immigration, apprenez des expressions comme une personne immigrante, un nouvel arrivant ou une nouvelle arrivante, une personne réfugiée, un parcours d’immigration, la résidence permanente, un statut d’immigration et une demande d’asile. ' +
          'Au Québec, il est également important de connaître l’installation, l’intégration, la francisation et la reconnaissance des compétences professionnelles.'
      },
      {
        type: 'table',
        headers: ['Thème', 'Vocabulaire français', 'Signification'],
        rows: [
            [
              'Immigration',
              'l’immigration, l’émigration, la résidence permanente',
              'Mouvements migratoires et situation des personnes immigrantes.'
            ],
            [
              'Intégration',
              'l’accueil, l’intégration sociale, la participation citoyenne',
              'Participation à la société et accès aux services.'
            ],
            [
              'Diversité',
              'la diversité culturelle, l’inclusion, les relations interculturelles',
              'Cohabitation entre des personnes de différentes origines.'
            ],
            [
              'Vieillissement',
              'le vieillissement de la population, les personnes aînées, la retraite',
              'Évolutions démographiques et besoins de la population.'
            ],
            [
              'Solidarité',
              'l’entraide, la solidarité intergénérationnelle, le soutien communautaire',
              'Coopération et soutien entre les personnes et les générations.'
            ],
            [
              'Bénévolat',
              'le bénévolat, un bénévole / une bénévole, un organisme communautaire',
              'Participation volontaire à des initiatives sociales.'
            ]
        ]
      },
      { type: 'heading', text: 'Diversité, inclusion et défis sociaux' },
      {
        type: 'paragraph',
        text:
          'Pour discuter de diversité et de vivre-ensemble, utilisez le vivre-ensemble, l’égalité des chances, le respect des différences, les préjugés, la discrimination, l’exclusion sociale et la cohésion sociale. ' +
          'Dans le contexte canadien et québécois, les débats portent souvent sur les relations interculturelles, la participation des personnes immigrantes et la construction d’une société inclusive. ' +
          'Pour argumenter, vous pouvez discuter de l’importance de l’accès à l’éducation, de l’apprentissage du français, de la reconnaissance des diplômes étrangers et des possibilités professionnelles.'
      },
      {
        type: 'paragraph',
        text:
          'Le vieillissement de la population représente également un enjeu social important. ' +
          'Certaines expressions utiles sont le maintien à domicile, les soins à domicile, la perte d’autonomie, les proches aidants, l’isolement social et les services aux personnes aînées. ' +
          'Pour parler de bénévolat, utilisez faire du bénévolat, s’engager dans sa communauté, donner de son temps, organiser une collecte de fonds et venir en aide aux personnes vulnérables.'
      },
      { type: 'heading', text: 'Exemple en contexte' },
      {
        type: 'paragraph',
        text:
          'Depuis son arrivée à Sherbrooke, Ana participe aux activités d’un organisme communautaire. ' +
          'Elle suit des cours de francisation et fait du bénévolat dans une banque alimentaire du quartier. ' +
          'Cette expérience lui permet de rencontrer des gens, de pratiquer le français et de mieux connaître sa communauté. ' +
          'Elle estime que l’intégration repose sur des efforts réciproques, l’accès aux services et la reconnaissance des compétences. ' +
          'Par ailleurs, le vieillissement de la population soulève des questions sur les soins à domicile, l’isolement social et la solidarité entre les générations.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux termes liés à l’intégration et au bénévolat',
        text:
          'Ne confondez pas immigration et émigration : le premier terme désigne l’entrée dans un pays pour s’y établir, tandis que le second désigne le départ du pays d’origine. ' +
          'Autre distinction importante : bénévole désigne la personne, tandis que bénévolat désigne l’activité volontaire. ' +
          'Évitez également de traduire littéralement le verbe portugais assistir lorsqu’il signifie aider. ' +
          'En français, assister à une activité signifie y être présent ou y participer en tant que spectateur, et non apporter de l’aide. ' +
          'Pour exprimer l’idée d’aider, utilisez aider quelqu’un ou venir en aide à quelqu’un.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Développez des arguments sur les enjeux sociaux actuels',
        text:
          'Au TCF Canada, l’expression écrite comprend 3 exercices (60 minutes) et l’expression orale comprend 3 exercices (12 minutes, dont 2 minutes de préparation). Au TEF Canada, la section B de l’expression orale consiste à argumenter pour convaincre. ' +
          'Dans les productions orales et écrites, entraînez-vous à exprimer des opinions sur l’intégration des personnes immigrantes, la diversité culturelle, le vieillissement de la population et la participation communautaire. ' +
          'Présentez des avantages et des défis, expliquez les causes et les conséquences et proposez des solutions. ' +
          'Utilisez des exemples concrets et des connecteurs pour construire une argumentation équilibrée. ' +
          'Une expression utile pour ce type de discussion est : Une société inclusive devrait offrir les mêmes possibilités à toutes les personnes.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de Québec.ca consultées confirment : le service Accompagnement Québec (gratuit, avec plan d’action individualisé, francisation, reconnaissance des compétences et emploi) ; la Politique sur l’intégration nationale, qui traite du vivre-ensemble, des relations interculturelles et du respect de la diversité culturelle ; et le programme de soutien à l’intégration, qui parle de pleine participation, en français, à la vie collective et de jumelage interculturel. ' +
          'La page de Statistique Canada traite du vieillissement démographique et indique que « les aînés et le vieillissement » est devenu « les adultes âgés et le vieillissement démographique » (les adultes âgés). Le Rapport 2025 d’IRCC traite des services d’établissement, des résultats d’établissement, des nouveaux arrivants et des francophones hors Québec. Le FEI et Le français des affaires confirment le format des épreuves. ' +
          'Ne sont pas confirmés par une source : les tableaux de vocabulaire, la distinction entre immigration et émigration, bénévole et bénévolat, l’avertissement sur assister, les exemples et la suggestion d’argumentation. ' +
          'Cette suggestion est une recommandation de préparation et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Service d’intégration pour les personnes immigrantes — Gouvernement du Québec',
      url: 'https://www.quebec.ca/immigration/service-integration-personnes-immigrantes'
    },
    {
      title: 'Politique sur l’intégration nationale — Gouvernement du Québec',
      url: 'https://www.quebec.ca/gouvernement/ministeres-organismes/langue-francaise/publications/politique-integration-nationale'
    },
    {
      title: 'S’installer et s’intégrer au Québec — Gouvernement du Québec',
      url: 'https://www.quebec.ca/immigration/installer-integrer'
    },
    {
      title: 'Programme d’accompagnement et de soutien à l’intégration — Gouvernement du Québec',
      url: 'https://www.quebec.ca/immigration/aide-organismes-integration-immigration/programme-accompagnement-soutien-integration'
    },
    {
      title: 'Statistiques sur les adultes âgés et le vieillissement démographique — Statistique Canada',
      url: 'https://www.statcan.gc.ca/fr/sujets-debut/adultes_ages_et_vieillissement_demographique'
    },
    {
      title: 'Rapport 2025 sur les résultats en matière d’établissement — Immigration, Réfugiés et Citoyenneté Canada',
      url: 'https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/renseignements-fournisseurs-services-detablissement-reinstallation/donnees-recherches-rapports/rapport-2025-resultats-etablissement.html'
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
