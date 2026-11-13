import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-educacao',

  pt: {
    title: 'Educação e formação: escola, universidade e formação contínua',
    summary:
      'Aprenda a falar sobre a trajetória escolar e acadêmica, os diferentes níveis de ensino, diplomas e qualificações profissionais. ' +
      'Conheça também as particularidades do sistema educacional do Québec, incluindo os cégeps, os programas técnicos e as oportunidades de formação contínua.',
    blocks: [
      { type: 'heading', text: 'Níveis de ensino no Québec' },
      {
        type: 'paragraph',
        text:
          'No Québec, a trajetória escolar normalmente passa pela [[éducation préscolaire|educação pré-escolar]], pelo [[enseignement primaire|ensino primário]], pelo [[enseignement secondaire|ensino secundário]], pelos [[études collégiales|estudos colegiais]] ' +
          'e pelos [[études universitaires|estudos universitários]]. ' +
          'Uma particularidade importante é o [[cégep|cégep]], instituição de ensino colegial própria do sistema educacional quebequense. ' +
          'Ele oferece programas pré-universitários e técnicos depois do ensino secundário. ' +
          'Os programas pré-universitários geralmente duram dois anos, enquanto os técnicos geralmente duram três anos.'
      },
      {
        type: 'table',
        headers: ['Etapa ou formação', 'Vocabulário em francês', 'Descrição'],
        rows: [
            [
              'Pré-escola',
              '[[maternelle / éducation préscolaire|jardim de infância / educação pré-escolar]]',
              'Primeira etapa da educação.'
            ],
            [
              'Ensino primário',
              '[[école primaire|escola primária]]',
              'Educação básica anterior ao secundário.'
            ],
            [
              'Ensino secundário',
              '[[école secondaire / DES|escola secundária / diploma de estudos secundários]]',
              'Formação geral que conduz ao diploma DES.'
            ],
            [
              'Formação profissional',
              '[[formation professionnelle / DEP / ASP|formação profissional / diploma profissional / atestado de especialização profissional]]',
              'Preparação prática para exercer uma profissão.'
            ],
            [
              'Ensino colegial',
              '[[cégep / DEC / AEC|cégep / diploma de estudos colegiais / atestado de estudos colegiais]]',
              'Formação pré-universitária, técnica ou de curta duração.'
            ],
            [
              'Ensino universitário',
              '[[baccalauréat / maîtrise / doctorat|bacharelado / mestrado / doutorado]]',
              'Formação universitária de primeiro, segundo e terceiro ciclos.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Algumas diferenças em relação à França merecem atenção. No sistema francês, [[collège|colégio de ensino secundário inferior]] ' +
          'e [[lycée|colégio de ensino secundário superior]] designam etapas da educação secundária. ' +
          'No Québec, utiliza-se principalmente [[école secondaire|escola secundária]], seguida dos estudos colegiais. ' +
          'Outra diferença importante é [[baccalauréat|bacharelado]]: no Québec, corresponde a um diploma universitário de primeiro ciclo, enquanto na França, [[baccalauréat|bac]] ' +
          'é o diploma nacional obtido ao final do ensino secundário.'
      },
      { type: 'heading', text: 'Formação contínua e vida acadêmica' },
      {
        type: 'paragraph',
        text:
          'A [[formation continue|formação contínua]] permite atualizar conhecimentos, desenvolver competências e melhorar qualificações depois da formação inicial. ' +
          'Ela pode incluir cursos de curta duração, aperfeiçoamento profissional e atividades de atualização. ' +
          'Para falar sobre estudos e qualificações, utilize [[un cours|um curso]], [[un programme d’études|um programa de estudos]], [[une formation à distance|uma formação a distância]], [[un cours à temps partiel|um curso em meio período]], [[un stage|um estágio]], [[les frais de scolarité|as mensalidades / taxas escolares]], [[une bourse d’études|uma bolsa de estudos]], [[un relevé de notes|um histórico escolar]] ' +
          'e [[une reconnaissance des acquis|um reconhecimento de conhecimentos e competências adquiridos]]. ' +
          'O site do Governo do Québec informa que o histórico escolar do colegial se chama [[bulletin d’études collégiales|boletim de estudos colegiais]] e que o [[AEC|atestado de estudos colegiais]] é emitido para programas de curta duração, de caráter técnico, feitos na formação contínua.'
      },
      { type: 'heading', text: 'Exemplo em contexto' },
      {
        type: 'paragraph',
        text:
          '[[Après avoir terminé ses études secondaires au Brésil, Camila s’est installée au Québec.|Depois de concluir o ensino médio no Brasil, Camila se estabeleceu no Québec.]] ' +
          '[[Elle a suivi des cours de français dans un centre d’éducation des adultes.|Ela frequentou cursos de francês em um centro de educação de adultos.]] ' +
          '[[Ensuite, elle s’est inscrite à un programme de formation professionnelle en comptabilité.|Em seguida, matriculou-se em um programa de formação profissional em contabilidade.]] ' +
          '[[Elle suit actuellement une formation à temps partiel et travaille trois jours par semaine.|Atualmente, ela faz uma formação em meio período e trabalha três dias por semana.]] ' +
          '[[À long terme, elle aimerait poursuivre ses études au cégep ou à l’université.|A longo prazo, gostaria de continuar seus estudos em um cégep ou em uma universidade.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção aos nomes dos diplomas e das instituições',
        text:
          'Não traduza automaticamente [[collège|colégio]] ' +
          'como uma escola brasileira: na França, é uma etapa do ensino secundário; no Québec, o percurso colegial corresponde a uma etapa de ensino posterior ao secundário. ' +
          'Também não confunda [[baccalauréat|bacharelado universitário no Québec]] ' +
          'com [[baccalauréat|bac francês]], que corresponde ao diploma de conclusão do ensino secundário. Outro cuidado: [[diplôme|diploma]] ' +
          'e [[diplôme d’études secondaires|diploma de estudos secundários]] não são equivalentes. ' +
          'O primeiro é um termo geral, enquanto o segundo identifica uma qualificação específica do sistema quebequense.'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Saiba explicar sua formação e suas qualificações',
        text:
          'No TCF Canada, a compreensão escrita tem 39 questões de múltipla escolha em 60 minutos, e no TEF Canada ela também é obrigatória. ' +
          'Na expressão oral e escrita, pratique descrever sua trajetória acadêmica, justificar a escolha de uma formação, comparar programas e explicar como pretende desenvolver suas competências profissionais. ' +
          'Estruture sua resposta mencionando onde estudou, qual diploma obteve, quais conhecimentos adquiriu e como pretende utilizar essa formação no futuro.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O Governo do Québec confirma os níveis de ensino ([[éducation préscolaire|educação pré-escolar]], primário, secundário, colegial, universitário), o [[DEC|diploma de estudos colegiais]] técnico de 3 anos, o [[AEC|atestado de estudos colegiais]] e o [[bulletin d’études collégiales|boletim de estudos colegiais]]. ' +
          'O OQLF confirma o [[cégep|cégep]] (programas gerais de 2 anos e técnicos de 3 anos) e a [[formation continue|formação contínua]]. ' +
          'O FEI e o Le français des affaires confirmam as provas de compreensão escrita. ' +
          'Não têm fonte: as diferenças em relação à França ([[collège|colégio]], [[lycée|liceu]] e [[baccalauréat|bac]]), as siglas DES, DEP e ASP, o vocabulário de bolsas, estágios e mensalidades, o exemplo da Camila e a dica de treino. ' +
          'Esses pontos são recomendações pedagógicas, não regras oficiais das provas.'
      }
    ]
  },

  fr: {
    title: 'Éducation et formation : école, université et formation continue',
    summary:
      'Apprenez à parler de votre parcours scolaire et universitaire, des différents ordres d’enseignement, des diplômes et des qualifications professionnelles. ' +
      'Découvrez également les particularités du système éducatif québécois, notamment les cégeps, les programmes techniques et les possibilités de formation continue.',
    blocks: [
      { type: 'heading', text: 'Les ordres d’enseignement au Québec' },
      {
        type: 'paragraph',
        text:
          'Au Québec, le parcours scolaire passe généralement par l’éducation préscolaire, l’enseignement primaire, l’enseignement secondaire, les études collégiales et les études universitaires. ' +
          'Une particularité importante est le cégep, un établissement d’enseignement collégial propre au système éducatif québécois. ' +
          'Il propose des programmes préuniversitaires et techniques après les études secondaires. ' +
          'Les programmes préuniversitaires durent généralement deux ans, tandis que les programmes techniques durent généralement trois ans.'
      },
      {
        type: 'table',
        headers: ['Étape ou formation', 'Vocabulaire français', 'Description'],
        rows: [
            [
              'Préscolaire',
              'maternelle / éducation préscolaire',
              'Première étape de l’éducation.'
            ],
            [
              'Enseignement primaire',
              'école primaire',
              'Éducation de base précédant le secondaire.'
            ],
            [
              'Enseignement secondaire',
              'école secondaire / DES',
              'Formation générale menant au diplôme d’études secondaires.'
            ],
            [
              'Formation professionnelle',
              'formation professionnelle / DEP / ASP',
              'Préparation pratique à l’exercice d’un métier.'
            ],
            [
              'Enseignement collégial',
              'cégep / DEC / AEC',
              'Formation préuniversitaire, technique ou de courte durée.'
            ],
            [
              'Enseignement universitaire',
              'baccalauréat / maîtrise / doctorat',
              'Formation universitaire de premier, deuxième et troisième cycles.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Certaines différences avec la France méritent votre attention. ' +
          'Dans le système français, le collège et le lycée désignent deux étapes de l’enseignement secondaire. ' +
          'Au Québec, on utilise principalement école secondaire, suivie des études collégiales. ' +
          'Une autre différence importante concerne le baccalauréat : au Québec, il correspond à un diplôme universitaire de premier cycle, tandis qu’en France, le baccalauréat est le diplôme national obtenu à la fin des études secondaires.'
      },
      { type: 'heading', text: 'Formation continue et vie scolaire' },
      {
        type: 'paragraph',
        text:
          'La formation continue permet de mettre à jour ses connaissances, de développer ses compétences et d’améliorer ses qualifications après la formation initiale. ' +
          'Elle peut comprendre des cours de courte durée, du perfectionnement professionnel et des activités de mise à jour. ' +
          'Pour parler de vos études et de vos qualifications, utilisez un cours, un programme d’études, une formation à distance, un cours à temps partiel, un stage, les frais de scolarité, une bourse d’études, un relevé de notes et une reconnaissance des acquis. ' +
          'Le site du gouvernement du Québec indique que le relevé de notes du collégial s’appelle le bulletin d’études collégiales et que l’AEC est délivrée pour des programmes de courte durée, de caractère technique, suivis à la formation continue.'
      },
      { type: 'heading', text: 'Exemple en contexte' },
      {
        type: 'paragraph',
        text:
          'Après avoir terminé ses études secondaires au Brésil, Camila s’est installée au Québec. ' +
          'Elle a suivi des cours de français dans un centre d’éducation des adultes. ' +
          'Ensuite, elle s’est inscrite à un programme de formation professionnelle en comptabilité. ' +
          'Elle suit actuellement une formation à temps partiel et travaille trois jours par semaine. ' +
          'À long terme, elle aimerait poursuivre ses études au cégep ou à l’université.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux noms des diplômes et des établissements',
        text:
          'Ne traduisez pas automatiquement collège comme une école brésilienne : en France, il désigne une étape de l’enseignement secondaire ; au Québec, le parcours collégial correspond à un ordre d’enseignement après le secondaire. ' +
          'Ne confondez pas non plus le baccalauréat québécois avec le baccalauréat français, qui correspond au diplôme de fin d’études secondaires. ' +
          'Autre précaution : diplôme et diplôme d’études secondaires ne sont pas équivalents. ' +
          'Le premier est un terme général, tandis que le second désigne une qualification précise du système québécois.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Sachez expliquer votre formation et vos qualifications',
        text:
          'Au TCF Canada, la compréhension écrite comprend 39 questions à choix multiple en 60 minutes, et au TEF Canada elle est aussi obligatoire. ' +
          'En expression orale et écrite, entraînez-vous à décrire votre parcours scolaire, à justifier le choix d’une formation, à comparer des programmes et à expliquer comment vous comptez développer vos compétences professionnelles. ' +
          'Structurez votre réponse en mentionnant où vous avez étudié, quel diplôme vous avez obtenu, quelles connaissances vous avez acquises et comment vous comptez utiliser cette formation à l’avenir.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Le gouvernement du Québec confirme les ordres d’enseignement (préscolaire, primaire, secondaire, collégial, universitaire), le DEC technique de 3 ans, l’AEC et le bulletin d’études collégiales. ' +
          'L’OQLF confirme le cégep (programmes généraux de 2 ans et techniques de 3 ans) et la formation continue. ' +
          'Le FEI et Le français des affaires confirment les épreuves de compréhension écrite. ' +
          'Ne sont pas sourcés : les différences avec la France (collège, lycée et baccalauréat), les sigles DES, DEP et ASP, le vocabulaire des bourses, des stages et des frais de scolarité, l’exemple de Camila et le conseil d’entraînement. ' +
          'Ces points sont des recommandations pédagogiques et non des règles officielles des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Sistema de educação no Québec — Governo do Québec',
      url: 'https://www.quebec.ca/education/etudier-quebec/systeme-education'
    },
    {
      title: 'Cégep — Grande Dicionário Terminológico, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/1299032/cegep'
    },
    {
      title: 'Trajetórias de formação profissional, técnica e geral de adultos — Governo do Québec',
      url: 'https://www.quebec.ca/education/formation-professionnelle-education-adultes/parcours-de-formation-fga-fp-ft'
    },
    {
      title: 'Formação contínua — Grande Dicionário Terminológico, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/1199607/formation-continue'
    },
    {
      title: 'Estudos universitários no Québec — Governo do Québec',
      url: 'https://www.quebec.ca/education/universite/etudier/a-propos'
    },
    {
      title: 'Diplomas e documentos oficiais de estudos colegiais — Governo do Québec',
      url: 'https://www.quebec.ca/education/cegeps-colleges-prives/diplomes'
    },
    {
      title: 'TCF Canada — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
