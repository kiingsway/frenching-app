import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-transportes',

  pt: {
    title: 'Transportes e mobilidade urbana',
    summary:
      'Aprenda a falar sobre transporte público, deslocamentos urbanos, trânsito e mobilidade ativa utilizando o vocabulário do francês canadense. ' +
      'Conheça também expressões para consultar horários, comprar passagens, fazer conexões entre linhas e discutir problemas de transporte e infraestrutura urbana.',
    blocks: [
      { type: 'heading', text: 'Meios de transporte e mobilidade' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre transporte público no Québec, a expressão [[le transport en commun|o transporte público]] é especialmente importante. ' +
          'Ela inclui meios como [[l’autobus|o ônibus]], [[le métro|o metrô]], [[le tramway|o bonde / o VLT]] e [[le train de banlieue|o trem metropolitano]]. ' +
          'No Québec, [[autobus|ônibus]] é mais frequente do que [[bus|ônibus]], forma mais comum na França. ' +
          'Outros meios de deslocamento incluem [[le taxi|o táxi]], [[le covoiturage|a carona compartilhada]], [[le vélo|a bicicleta]] e [[la marche|a caminhada]].'
      },
      {
        type: 'table',
        headers: ['Francês', 'Significado', 'Contexto'],
        rows: [
            [
              '[[un arrêt d’autobus|um ponto de ônibus]]',
              'Local de embarque e desembarque.',
              'Autobus.'
            ],
            [
              '[[une station de métro|uma estação de metrô]]',
              'Local de acesso ao metrô.',
              'Metrô.'
            ],
            [
              '[[une ligne|uma linha]]',
              'Trajeto identificado por um número ou nome.',
              'Rede de transporte.'
            ],
            [
              '[[un trajet|um trajeto]]',
              'Percurso entre origem e destino.',
              'Deslocamento.'
            ],
            [
              '[[un horaire|um horário]]',
              'Informações sobre partidas e chegadas.',
              'Planejamento da viagem.'
            ],
            [
              '[[un titre de transport|um título de transporte / bilhete]]',
              'Documento ou meio que permite utilizar o serviço.',
              'Pagamento da passagem.'
            ],
            [
              '[[une correspondance|uma conexão / integração entre linhas]]',
              'Título de transporte que permite continuar o trajeto em outra linha sem pagar de novo; no Québec, em geral vale por 120 minutos ou menos (OQLF).',
              'Troca de linha.'
            ],
            [
              '[[un laissez-passer|um passe de transporte]]',
              'Título que permite realizar viagens durante determinado período ou quantidade de trajetos.',
              'Acesso ao transporte.'
            ]
        ]
      },
      { type: 'heading', text: 'Trânsito, infraestrutura e mobilidade ativa' },
      {
        type: 'paragraph',
        text:
          'Para descrever problemas de circulação, utilize [[la circulation|o trânsito / a circulação]], [[la congestion routière|o congestionamento de trânsito]], [[un embouteillage|um engarrafamento]], [[les heures de pointe|os horários de pico]], [[un retard|um atraso]] ' +
          'e [[des travaux routiers|obras viárias]]. ' +
          'Na infraestrutura urbana, são frequentes [[une piste cyclable|uma ciclovia]], [[un trottoir|uma calçada]], [[une intersection|um cruzamento]], [[une voie réservée|uma faixa exclusiva]] ' +
          'e [[un passage piéton|uma faixa de pedestres]]. A expressão [[la mobilité active|mobilidade ativa]] ' +
          'abrange deslocamentos que dependem principalmente do esforço físico, como caminhar e andar de bicicleta.'
      },
      {
        type: 'paragraph',
        text:
          'Para explicar como você se desloca, utilize [[se déplacer|deslocar-se]], [[prendre l’autobus|pegar o ônibus]], [[prendre le métro|pegar o metrô]], [[descendre à l’arrêt|descer no ponto]], [[changer de ligne|trocar de linha]], [[faire une correspondance|fazer uma conexão]] ' +
          'e [[se rendre au travail|ir para o trabalho]]. ' +
          'Para avaliar um serviço, utilize [[fréquent|frequente]], [[fiable|confiável]], [[accessible|acessível]], [[ponctuel|pontual]] e [[bondé|lotado]].'
      },
      { type: 'heading', text: 'Exemplo em contexto' },
      {
        type: 'paragraph',
        text:
          '[[Chaque matin, je prends l’autobus près de chez moi pour me rendre au centre-ville de Toronto.|Todas as manhãs, pego o ônibus perto de casa para ir ao centro de Toronto.]] ' +
          '[[Je descends à la station de métro et je fais une correspondance pour terminer mon trajet.|Desço na estação de metrô e faço uma conexão para terminar meu trajeto.]] ' +
          '[[Aux heures de pointe, le réseau est parfois bondé et les retards sont assez fréquents.|Nos horários de pico, a rede às vezes fica lotada e os atrasos são bastante frequentes.]] ' +
          '[[Je préfère utiliser les transports en commun plutôt que ma voiture, car cela me permet d’éviter les embouteillages.|Prefiro utilizar o transporte público em vez do meu carro, pois isso me permite evitar os engarrafamentos.]] ' +
          '[[Lorsque la météo le permet, je fais aussi une partie du trajet à vélo en empruntant une piste cyclable.|Quando o clima permite, também faço parte do trajeto de bicicleta, utilizando uma ciclovia.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção às diferenças regionais e às preposições',
        text:
          'O OQLF registra [[autobus|ônibus]] e [[bus|ônibus]] como termos válidos: [[bus|ônibus]] é mais frequente na Europa francófona e [[autobus|ônibus]] é mais frequente no Québec. ' +
          'Outro cuidado importante: [[correspondance|conexão entre linhas]] é o termo utilizado para a integração no transporte público quebequense. ' +
          'Evite [[transfert|transferência]] nesse sentido: o OQLF o desaconselha por ser calcado do inglês, e registra também [[billet de correspondance|bilhete de correspondência]] e [[titre de correspondance|título de correspondência]]. ' +
          'Também não confunda [[prendre l’autobus|pegar o ônibus]] ' +
          'com uma tradução literal usando [[entrer dans|entrar em]]: para indicar o uso de um meio de transporte, o verbo [[prendre|pegar]] é uma construção natural. ' +
          'Por fim, diga [[descendre de l’autobus|descer do ônibus]], mas [[descendre à l’arrêt|descer no ponto]].'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Treine situações reais de deslocamento urbano',
        text:
          'No TCF Canada, a compreensão escrita tem 39 questões de múltipla escolha em 60 minutos, e a compreensão oral tem 39 questões em 35 minutos. No TEF Canada, a compreensão oral e a escrita também são obrigatórias. ' +
          'Na expressão oral e escrita, pratique explicar como chega a determinado lugar, descrever problemas no transporte público e defender propostas para melhorar a mobilidade urbana. ' +
          'Utilize conectores para justificar suas opiniões, por exemplo: [[Les transports en commun devraient être plus fréquents, car cela réduirait le nombre de voitures dans les rues.|O transporte público deveria ser mais frequente, pois isso reduziria a quantidade de carros nas ruas.]] ' +
          'Treine também perguntas como [[À quelle heure passe le prochain autobus ?|A que horas passa o próximo ônibus?]] ' +
          'e [[Est-ce que je dois faire une correspondance ?|Preciso fazer uma conexão?]]'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O OQLF confirma [[transport en commun|transporte público]], [[autobus|ônibus]] (mais frequente no Québec) e [[bus|ônibus]] (mais frequente na Europa francófona), [[correspondance|conexão]] (válida em geral por 120 minutos ou menos no Québec) e a rejeição de [[transfert|transferência]], [[laissez-passer|passe de transporte]], [[mobilité active|mobilidade ativa]], [[piste cyclable|ciclovia]] e [[congestion routière|congestionamento]]. ' +
          'O site do Governo do Québec sobre vias cicláveis existe e trata de infraestrutura para bicicletas. ' +
          'O FEI e o Le français des affaires confirmam as provas de compreensão e expressão. ' +
          'Não têm fonte confirmada: as listas de vocabulário de pontos, linhas, trânsito, sinalização e verbos de deslocamento, [[les heures de pointe|os horários de pico]], os adjetivos de avaliação do serviço, o exemplo e a dica de treino. ' +
          'Essa dica é conselho de preparação, não regra oficial das provas.'
      }
    ]
  },

  fr: {
    title: 'Les transports et la mobilité urbaine',
    summary:
      'Apprenez à parler des transports en commun, des déplacements urbains, de la circulation et de la mobilité active en utilisant le vocabulaire du français canadien. ' +
      'Découvrez également des expressions pour consulter les horaires, acheter des titres de transport, faire des correspondances et discuter des problèmes de transport et d’infrastructures urbaines.',
    blocks: [
      { type: 'heading', text: 'Les moyens de transport et la mobilité' },
      {
        type: 'paragraph',
        text:
          'Pour parler des transports publics au Québec, l’expression le transport en commun est particulièrement importante. ' +
          'Elle comprend différents moyens de transport comme l’autobus, le métro, le tramway et le train de banlieue. ' +
          'Au Québec, autobus est plus fréquent que bus, une forme plus courante en France. ' +
          'Parmi les autres moyens de déplacement, on trouve le taxi, le covoiturage, le vélo et la marche.'
      },
      {
        type: 'table',
        headers: ['Terme français', 'Signification', 'Contexte'],
        rows: [
            [
              'un arrêt d’autobus',
              'Lieu où les passagers montent et descendent.',
              'Autobus.'
            ],
            [
              'une station de métro',
              'Lieu d’accès au métro.',
              'Métro.'
            ],
            [
              'une ligne',
              'Trajet identifié par un numéro ou un nom.',
              'Réseau de transport.'
            ],
            [
              'un trajet',
              'Parcours entre un point de départ et une destination.',
              'Déplacement.'
            ],
            [
              'un horaire',
              'Informations sur les départs et les arrivées.',
              'Planification du déplacement.'
            ],
            [
              'un titre de transport',
              'Document ou moyen permettant d’utiliser un service.',
              'Paiement du transport.'
            ],
            [
              'une correspondance',
              'Liaison entre différents trajets de transport en commun.',
              'Changement de ligne.'
            ],
            [
              'un laissez-passer',
              'Titre permettant d’effectuer des déplacements pendant une période déterminée ou pour un certain nombre de trajets.',
              'Accès aux transports.'
            ]
        ]
      },
      { type: 'heading', text: 'La circulation, les infrastructures et la mobilité active' },
      {
        type: 'paragraph',
        text:
          'Pour décrire les problèmes de circulation, utilisez la circulation, la congestion routière, un embouteillage, les heures de pointe, un retard et des travaux routiers. ' +
          'Dans le domaine des infrastructures urbaines, on trouve une piste cyclable, un trottoir, une intersection, une voie réservée et un passage piéton. ' +
          'L’expression mobilité active désigne les déplacements qui reposent principalement sur l’effort physique, comme la marche et le vélo.'
      },
      {
        type: 'paragraph',
        text:
          'Pour expliquer comment vous vous déplacez, utilisez se déplacer, prendre l’autobus, prendre le métro, descendre à l’arrêt, changer de ligne, faire une correspondance et se rendre au travail. ' +
          'Pour évaluer un service, utilisez fréquent, fiable, accessible, ponctuel et bondé.'
      },
      { type: 'heading', text: 'Exemple en contexte' },
      {
        type: 'paragraph',
        text:
          'Chaque matin, je prends l’autobus près de chez moi pour me rendre au centre-ville de Toronto. ' +
          'Je descends à la station de métro et je fais une correspondance pour terminer mon trajet. ' +
          'Aux heures de pointe, le réseau est parfois bondé et les retards sont assez fréquents. ' +
          'Je préfère utiliser les transports en commun plutôt que ma voiture, car cela me permet d’éviter les embouteillages. ' +
          'Lorsque la météo le permet, je fais aussi une partie du trajet à vélo en empruntant une piste cyclable.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux différences régionales et aux prépositions',
        text:
          'Au Québec, préférez autobus à bus, qui est plus fréquent en France. ' +
          'Autre précaution importante : correspondance est le terme utilisé pour désigner la liaison entre des lignes de transport en commun au Québec. ' +
          'Évitez transfert dans ce sens, car il s’agit d’un calque de l’anglais déconseillé par l’OQLF. ' +
          'Ne confondez pas non plus prendre l’autobus avec une traduction littérale utilisant entrer dans : pour indiquer l’utilisation d’un moyen de transport, le verbe prendre est naturel. ' +
          'Enfin, dites descendre de l’autobus, mais descendre à l’arrêt.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Entraînez-vous avec des situations réelles de déplacement urbain',
        text:
          'Au TCF Canada, la compréhension écrite comprend 39 questions à choix multiple en 60 minutes et la compréhension orale 39 questions en 35 minutes. Au TEF Canada, la compréhension orale et écrite sont aussi obligatoires. ' +
          'En expression orale et écrite, entraînez-vous à expliquer comment vous vous rendez quelque part, à décrire des problèmes de transport en commun et à défendre des propositions pour améliorer la mobilité urbaine. ' +
          'Utilisez des connecteurs pour justifier vos opinions, par exemple : Les transports en commun devraient être plus fréquents, car cela réduirait le nombre de voitures dans les rues. ' +
          'Entraînez-vous aussi à poser des questions comme À quelle heure passe le prochain autobus ? et Est-ce que je dois faire une correspondance ?'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme transport en commun, autobus (plus fréquent au Québec) et bus (plus fréquent en Europe francophone), correspondance (valide généralement 120 minutes ou moins au Québec) et le rejet de transfert, laissez-passer, mobilité active, piste cyclable et congestion routière. ' +
          'Le site du gouvernement du Québec sur les voies cyclables existe et porte sur les infrastructures pour vélos. ' +
          'Le FEI et Le français des affaires confirment les épreuves de compréhension et d’expression. ' +
          'Ne sont pas confirmés par une source : les listes de vocabulaire des arrêts, des lignes, de la circulation, de la signalisation et des verbes de déplacement, les heures de pointe, les adjectifs d’évaluation du service, l’exemple et le conseil d’entraînement. ' +
          'Ce conseil est une recommandation de préparation et non une règle officielle des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Transport en commun — Grand dictionnaire terminologique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8361878/transport-en-commun'
    },
    {
      title: 'Autobus — Grand dictionnaire terminologique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26543588/autobus'
    },
    {
      title: 'Correspondance — Grand dictionnaire terminologique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8355994/correspondance'
    },
    {
      title: 'Laissez-passer — Grand dictionnaire terminologique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26589749/laissez-passer'
    },
    {
      title: 'Mobilité active — Grand dictionnaire terminologique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26560186/mobilite-active'
    },
    {
      title: 'Piste cyclable — Grand dictionnaire terminologique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8353988/piste-cyclable'
    },
    {
      title: 'Congestion routière — Grand dictionnaire terminologique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/19472593/congestion-routiere'
    },
    {
      title: 'Voies cyclables — Gouvernement du Québec',
      url: 'https://www.quebec.ca/transports/circulation-securite-routiere/regles-conseils-mode-transport/velo/voies-cyclables'
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
