import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-viagens',

  pt: {
    title: 'Viagens e turismo: transporte, hospedagem e passeios',
    summary:
      'Você vai aprender o vocabulário francês relacionado ao planejamento de viagens, passagens, aeroportos, hospedagem e atividades turísticas. ' +
      'Também vai praticar situações comuns, como fazer reservas, solicitar informações, organizar um roteiro e resolver imprevistos durante uma viagem.',
    blocks: [
      { type: 'heading', text: 'Transporte, aeroporto e documentos' },
      {
        type: 'paragraph',
        text:
          'Para conversar sobre viagens, comece aprendendo os termos relacionados ao deslocamento e aos documentos necessários. ' +
          'No francês canadense, você encontrará expressões utilizadas em aeroportos, estações de trem e serviços de transporte.'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado'],
        rows: [
            [
              '[[un billet d’avion|Uma passagem aérea]]',
              'Passagem de avião.'
            ],
            [
              '[[un billet aller-retour|Uma passagem de ida e volta]]',
              'Passagem com ida e retorno.'
            ],
            [
              '[[un billet aller simple|Uma passagem só de ida]]',
              'Passagem sem trecho de retorno.'
            ],
            [
              '[[un vol direct|Um voo direto]]',
              'Voo sem escalas.'
            ],
            [
              '[[une escale|Uma escala]]',
              'Parada intermediária durante uma viagem.'
            ],
            [
              '[[l’aéroport|O aeroporto]]',
              'Local de embarque e desembarque de passageiros.'
            ],
            [
              '[[le comptoir d’enregistrement|O balcão de check-in]]',
              'Local onde o passageiro realiza o registro e despacha a bagagem.'
            ],
            [
              '[[la carte d’embarquement|O cartão de embarque]]',
              'Documento necessário para acessar o embarque.'
            ],
            [
              '[[la salle d’embarquement|A sala de embarque]]',
              'Área onde os passageiros aguardam o embarque.'
            ],
            [
              '[[un bagage à main|Uma bagagem de mão]]',
              'Bagagem transportada pelo próprio passageiro na cabine.'
            ],
            [
              '[[un bagage enregistré|Uma bagagem despachada]]',
              'Bagagem entregue à companhia aérea para transporte.'
            ],
            [
              '[[le passeport|O passaporte]]',
              'Documento de identificação para viagens internacionais.'
            ],
            [
              '[[un visa|Um visto]]',
              'Autorização de entrada ou permanência em determinados países.'
            ],
            [
              '[[les douanes|A alfândega]]',
              'Serviço responsável pelo controle de mercadorias na fronteira.'
            ]
        ]
      },
      { type: 'heading', text: 'Hospedagem e reservas' },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado'],
        rows: [
            [
              '[[un hébergement|Uma hospedagem]]',
              'Local onde o viajante fica durante a viagem.'
            ],
            [
              '[[un hôtel|Um hotel]]',
              'Estabelecimento de hospedagem.'
            ],
            [
              '[[une auberge de jeunesse|Um albergue / hostel]]',
              'Hospedagem geralmente econômica, com opções de quartos compartilhados.'
            ],
            [
              '[[un gîte touristique|Uma hospedagem turística tipo pousada]]',
              'Estabelecimento de hospedagem geralmente pequeno, associado ao acolhimento e ao café da manhã.'
            ],
            [
              '[[un emplacement de camping|Um espaço para acampamento]]',
              'Área destinada à instalação de barracas ou equipamentos de camping.'
            ],
            [
              '[[une chambre individuelle|Um quarto individual]]',
              'Quarto destinado a uma pessoa.'
            ],
            [
              '[[une chambre double|Um quarto para duas pessoas]]',
              'Quarto com acomodação para duas pessoas.'
            ],
            [
              '[[une réservation|Uma reserva]]',
              'Ato de garantir antecipadamente um serviço ou uma acomodação.'
            ],
            [
              '[[confirmer une réservation|Confirmar uma reserva]]',
              'Validar uma reserva existente.'
            ],
            [
              '[[annuler une réservation|Cancelar uma reserva]]',
              'Desfazer uma reserva.'
            ],
            [
              '[[une location de voiture|Um aluguel de carro]]',
              'Serviço de aluguel de automóveis.'
            ],
            [
              '[[les frais supplémentaires|As taxas adicionais]]',
              'Valores cobrados além do preço inicial.'
            ]
        ]
      },
      { type: 'heading', text: 'Turismo, passeios e atividades' },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado'],
        rows: [
            [
              '[[une destination touristique|Um destino turístico]]',
              'Lugar escolhido para uma viagem.'
            ],
            [
              '[[un itinéraire|Um roteiro / itinerário]]',
              'Percurso planejado durante a viagem.'
            ],
            [
              '[[une attraction touristique|Uma atração turística]]',
              'Local ou atividade de interesse para visitantes.'
            ],
            [
              '[[une visite guidée|Uma visita guiada]]',
              'Passeio acompanhado por um guia.'
            ],
            [
              '[[un guide touristique|Um guia turístico]]',
              'Profissional que acompanha visitantes ou material que apresenta informações turísticas.'
            ],
            [
              '[[un monument historique|Um monumento histórico]]',
              'Construção de importância histórica.'
            ],
            [
              '[[un billet d’entrée|Um ingresso]]',
              'Documento que permite entrar em uma atração.'
            ],
            [
              '[[un tarif réduit|Uma tarifa reduzida]]',
              'Preço especial com desconto.'
            ],
            [
              '[[un paysage|Uma paisagem]]',
              'Vista de um ambiente natural ou urbano.'
            ],
            [
              '[[les environs|Os arredores]]',
              'Região ao redor de determinado lugar.'
            ],
            [
              '[[les souvenirs|As lembranças / os souvenirs]]',
              'Objetos comprados ou guardados para recordar uma viagem.'
            ],
            [
              '[[les renseignements touristiques|As informações turísticas]]',
              'Informações sobre atrações, transporte e atividades.'
            ]
        ]
      },
      { type: 'heading', text: 'Situações práticas durante uma viagem' },
      {
        type: 'list',
        items: [
          '[[J’ai réservé une chambre pour trois nuits.|Reservei um quarto para três noites.]]',
          '[[Mon vol part de Montréal à 8 h et fait escale à Toronto.|Meu voo sai de Montreal às 8h e faz escala em Toronto.]]',
          '[[À l’aéroport, je dois enregistrer mes bagages et récupérer ma carte d’embarquement.|No aeroporto, preciso despachar minhas malas e obter meu cartão de embarque.]]',
          '[[Nous avons loué une voiture pour visiter les environs.|Alugamos um carro para conhecer os arredores.]]',
          '[[Pourriez-vous m’indiquer le chemin pour me rendre au centre-ville ?|Poderia me indicar o caminho para chegar ao centro da cidade?]]',
          '[[Est-ce que le déjeuner est compris dans le prix de la chambre ?|O café da manhã está incluído no preço do quarto?]]',
          '[[Le musée propose un tarif réduit aux étudiants.|O museu oferece uma tarifa reduzida para estudantes.]]',
          '[[Notre réservation n’apparaît pas dans le système.|Nossa reserva não aparece no sistema.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Atenção a uma particularidade canadense: no Québec, [[déjeuner|café da manhã]], [[dîner|almoço]] e [[souper|jantar]] ' +
          'são as denominações habituais das três refeições; o Usito registra [[déjeuner|café da manhã]] como uso do Québec (e [[dîner|almoço]] e [[souper|jantar]] também). Na França, são comuns [[petit-déjeuner|café da manhã]], [[déjeuner|almoço]] e [[dîner|jantar]]. ' +
          'Por isso, ao perguntar sobre uma hospedagem no Québec, [[Le déjeuner est-il compris ?|O café da manhã está incluído?]] é uma pergunta natural.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com os falsos sentidos e as expressões literais',
        text:
          'A palavra [[location|aluguel / locação]] não significa localização ou lugar onde algo está. Por exemplo, [[une location de voiture|um aluguel de carro]] ' +
          'refere-se ao serviço de aluguel; para perguntar onde fica um estabelecimento, utilize [[Où se trouve l’hôtel ?|Onde fica o hotel?]]. ' +
          'Outro cuidado: para fazer uma reserva, utilize [[réserver|reservar]], e não traduza literalmente expressões do inglês. ' +
          'Prefira também aprender combinações completas, como [[réserver une chambre|reservar um quarto]], [[faire ses bagages|fazer as malas]] ' +
          'e [[visiter une région|visitar uma região]].'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na compreensão e na produção oral, pratique situações como reservar uma hospedagem, pedir informações em um aeroporto, explicar um problema com uma passagem e recomendar um destino turístico. ' +
          'Na produção escrita, treine mensagens para confirmar reservas, solicitar alterações e descrever experiências de viagem. ' +
          'Também pratique comparar destinos, meios de transporte e opções de hospedagem, justificando suas escolhas. ' +
          'Utilize conectores temporais para organizar seu roteiro e narrar experiências passadas.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O OQLF confirma [[réservation|reserva]], [[documents de voyage|documentos de viagem]] (passaporte, vistos, certificados de vacinação), [[escale|escala]] e [[gîte touristique|pousada turística]], e publica um vocabulário do turismo com mais de 65 fichas. O Usito confirma [[déjeuner|café da manhã]], [[dîner|almoço]] e [[souper|jantar]] como usos do Québec. ' +
          'A página do Transport Canada sobre sinalização aeroportuária existe e trata de terminologia de aeroportos. ' +
          'Não têm fonte confirmada: as tabelas de vocabulário de hospedagem, transporte e passeios, o falso amigo [[location|aluguel / locação]], os exemplos e a dica de treino. ' +
          'Essa dica é recomendação de preparação, não regra oficial das provas.'
      }
    ]
  },

  fr: {
    title: 'Voyages et tourisme : transport, hébergement et excursions',
    summary:
      'Vous apprendrez le vocabulaire français lié à l’organisation des voyages, aux billets, aux aéroports, à l’hébergement et aux activités touristiques. ' +
      'Vous pratiquerez également des situations courantes, comme effectuer des réservations, demander des renseignements, organiser un itinéraire et résoudre des imprévus pendant un voyage.',
    blocks: [
      { type: 'heading', text: 'Transport, aéroport et documents' },
      {
        type: 'paragraph',
        text:
          'Pour parler de voyages, commencez par apprendre les termes liés aux déplacements et aux documents nécessaires. ' +
          'En français canadien, vous trouverez des expressions utilisées dans les aéroports, les gares et les services de transport.'
      },
      {
        type: 'table',
        headers: ['Expression en français', 'Explication'],
        rows: [
            [
              'Un billet d’avion',
              'Billet permettant de voyager en avion.'
            ],
            [
              'Un billet aller-retour',
              'Billet comprenant le trajet aller et le trajet retour.'
            ],
            [
              'Un billet aller simple',
              'Billet sans trajet de retour.'
            ],
            [
              'Un vol direct',
              'Vol sans escale.'
            ],
            [
              'Une escale',
              'Arrêt intermédiaire pendant un voyage.'
            ],
            [
              'L’aéroport',
              'Lieu d’embarquement et de débarquement des passagers.'
            ],
            [
              'Le comptoir d’enregistrement',
              'Endroit où le passager effectue son enregistrement et dépose ses bagages.'
            ],
            [
              'La carte d’embarquement',
              'Document nécessaire pour accéder à l’embarquement.'
            ],
            [
              'La salle d’embarquement',
              'Zone où les passagers attendent l’embarquement.'
            ],
            [
              'Un bagage à main',
              'Bagage transporté par le passager dans la cabine.'
            ],
            [
              'Un bagage enregistré',
              'Bagage remis à la compagnie aérienne pour son transport.'
            ],
            [
              'Le passeport',
              'Document d’identification utilisé pour les voyages internationaux.'
            ],
            [
              'Un visa',
              'Autorisation d’entrée ou de séjour dans certains pays.'
            ],
            [
              'Les douanes',
              'Service chargé du contrôle des marchandises à la frontière.'
            ]
        ]
      },
      { type: 'heading', text: 'Hébergement et réservations' },
      {
        type: 'table',
        headers: ['Expression en français', 'Explication'],
        rows: [
            [
              'Un hébergement',
              'Endroit où le voyageur séjourne pendant son voyage.'
            ],
            [
              'Un hôtel',
              'Établissement d’hébergement.'
            ],
            [
              'Une auberge de jeunesse',
              'Hébergement généralement économique, avec des options de chambres partagées.'
            ],
            [
              'Un gîte touristique',
              'Établissement d’hébergement généralement de petite taille, associé à l’accueil et au déjeuner.'
            ],
            [
              'Un emplacement de camping',
              'Espace destiné à installer une tente ou du matériel de camping.'
            ],
            [
              'Une chambre individuelle',
              'Chambre destinée à une seule personne.'
            ],
            [
              'Une chambre double',
              'Chambre prévue pour deux personnes.'
            ],
            [
              'Une réservation',
              'Action de retenir à l’avance un service ou un hébergement.'
            ],
            [
              'Confirmer une réservation',
              'Valider une réservation existante.'
            ],
            [
              'Annuler une réservation',
              'Mettre fin à une réservation.'
            ],
            [
              'Une location de voiture',
              'Service de location automobile.'
            ],
            [
              'Les frais supplémentaires',
              'Montants facturés en plus du prix initial.'
            ]
        ]
      },
      { type: 'heading', text: 'Tourisme, excursions et activités' },
      {
        type: 'table',
        headers: ['Expression en français', 'Explication'],
        rows: [
            [
              'Une destination touristique',
              'Lieu choisi pour un voyage.'
            ],
            [
              'Un itinéraire',
              'Parcours planifié pendant le voyage.'
            ],
            [
              'Une attraction touristique',
              'Lieu ou activité présentant un intérêt pour les visiteurs.'
            ],
            [
              'Une visite guidée',
              'Excursion accompagnée par un guide.'
            ],
            [
              'Un guide touristique',
              'Professionnel qui accompagne les visiteurs ou document présentant des renseignements touristiques.'
            ],
            [
              'Un monument historique',
              'Construction présentant un intérêt historique.'
            ],
            [
              'Un billet d’entrée',
              'Document permettant d’accéder à une attraction.'
            ],
            [
              'Un tarif réduit',
              'Prix spécial avec une réduction.'
            ],
            [
              'Un paysage',
              'Vue d’un environnement naturel ou urbain.'
            ],
            [
              'Les environs',
              'Région qui entoure un endroit donné.'
            ],
            [
              'Les souvenirs',
              'Objets achetés ou conservés pour se rappeler un voyage.'
            ],
            [
              'Les renseignements touristiques',
              'Informations sur les attractions, les transports et les activités.'
            ]
        ]
      },
      { type: 'heading', text: 'Situations pratiques pendant un voyage' },
      {
        type: 'list',
        items: [
          'J’ai réservé une chambre pour trois nuits.',
          'Mon vol part de Montréal à 8 h et fait escale à Toronto.',
          'À l’aéroport, je dois enregistrer mes bagages et récupérer ma carte d’embarquement.',
          'Nous avons loué une voiture pour visiter les environs.',
          'Pourriez-vous m’indiquer le chemin pour me rendre au centre-ville ?',
          'Est-ce que le déjeuner est compris dans le prix de la chambre ?',
          'Le musée propose un tarif réduit aux étudiants.',
          'Notre réservation n’apparaît pas dans le système.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Attention à une particularité canadienne : au Québec, déjeuner, dîner et souper sont les appellations habituelles des trois repas. ' +
          'En France, on utilise couramment petit-déjeuner, déjeuner et dîner. ' +
          'Ainsi, lorsqu’on pose une question sur un hébergement au Québec, « Le déjeuner est-il compris ? » est une question naturelle.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux faux sens et aux traductions littérales',
        text:
          'Le mot location ne signifie pas l’endroit où se trouve quelque chose. ' +
          'Par exemple, une location de voiture désigne un service de location ; pour demander où se trouve un établissement, utilisez « Où se trouve l’hôtel ? ». ' +
          'Autre précaution : pour effectuer une réservation, utilisez réserver et évitez de traduire littéralement des expressions anglaises. ' +
          'Apprenez également des associations complètes, comme réserver une chambre, faire ses bagages et visiter une région.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'En compréhension et en production orale, entraînez-vous avec des situations comme réserver un hébergement, demander des renseignements dans un aéroport, expliquer un problème de billet et recommander une destination touristique. ' +
          'En production écrite, entraînez-vous à rédiger des messages pour confirmer des réservations, demander des modifications et décrire des expériences de voyage. ' +
          'Entraînez-vous également à comparer des destinations, des moyens de transport et des possibilités d’hébergement en justifiant vos choix. ' +
          'Utilisez des connecteurs temporels pour organiser votre itinéraire et raconter vos expériences passées.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme réservation, documents de voyage (passeport, visas, certificats de vaccination), escale et gîte touristique, et publie un vocabulaire du tourisme de plus de 65 fiches. Usito confirme déjeuner, dîner et souper comme usages du Québec. ' +
          'La page de Transports Canada sur l’affichage aéroportuaire existe et porte sur la terminologie des aéroports. ' +
          'Ne sont pas confirmés par une source : les tableaux de vocabulaire de l’hébergement, du transport et des visites, le faux ami location, les exemples et le conseil d’entraînement. ' +
          'Ce conseil est une recommandation de préparation et non une règle officielle des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF — Vocabulaire du tourisme',
      url: 'https://www.oqlf.gouv.qc.ca/ressources/bibliotheque/dictionnaires/vocabulaire-tourisme.aspx'
    },
    {
      title: 'OQLF — Réservation',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8392856/reservation'
    },
    {
      title: 'OQLF — Documents de voyage',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/17058169/documents-de-voyage'
    },
    {
      title: 'OQLF — Escale',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/17061559/escale'
    },
    {
      title: 'Transport Canada — Lexique d’enseignes aéroportuaires',
      url: 'https://tc.canada.ca/fr/aviation/exploitation-aeroports-aerodromes/lexique-enseignes-aeroportuaires'
    },
    {
      title: 'OQLF — Gîte touristique',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/1299019/gite-touristique'
    },
    {
      title: 'déjeuner — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/d%C3%A9jeuner_2/lexies'
    }
  ]
}

export default content
