import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-moradia',

  pt: {
    title: 'Moradia: aluguel, vizinhança, mudança e anúncios imobiliários',
    summary:
      'Aprenda a procurar moradia, compreender anúncios imobiliários e conversar sobre aluguel, condições do imóvel e localização. ' +
      'Domine também o vocabulário de contratos, vizinhança e mudança, incluindo expressões características do mercado imobiliário do Québec.',
    blocks: [
      { type: 'heading', text: 'Tipos de moradia e vocabulário básico' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre moradia, comece distinguindo [[un logement|uma moradia / um imóvel]], termo geral para um lugar onde alguém mora, e [[un appartement|um apartamento]]. ' +
          'No Québec, você também encontrará [[un studio|uma quitinete / um apartamento de um cômodo]], [[un condo à louer|um condomínio para alugar]], [[une chambre|um quarto]], [[une colocation|uma moradia compartilhada]] ' +
          'e [[une maison jumelée|uma casa geminada]]. ' +
          'Para falar das pessoas envolvidas na locação, utilize [[le locataire|o inquilino]], [[le locateur / la locatrice|o locador / a locadora]], [[le propriétaire|o proprietário]] ' +
          'e [[le bail|o contrato de locação]].'
      },
      {
        type: 'table',
        headers: ['Francês', 'Significado', 'Utilização'],
        rows: [
            [
              '[[le loyer|o aluguel]]',
              'Valor pago pelo uso do imóvel.',
              'Valor mensal ou periódico.'
            ],
            [
              '[[le bail|o contrato de locação]]',
              'Contrato entre locador e inquilino.',
              'Condições e duração da locação.'
            ],
            [
              '[[la chambre|o quarto]]',
              'Espaço utilizado para dormir.',
              'Quantidade e disposição dos quartos.'
            ],
            [
              '[[la superficie|a área / metragem]]',
              'Tamanho do imóvel.',
              'Dimensões e área disponível.'
            ],
            [
              '[[le stationnement|a vaga de estacionamento]]',
              'Local destinado ao estacionamento.',
              'Disponibilidade de vaga.'
            ],
            [
              '[[le rangement / le locker|o espaço de armazenamento / depósito]]',
              'Espaço adicional para guardar objetos.',
              'Armazenamento de pertences.'
            ],
            [
              '[[la buanderie|a lavanderia]]',
              'Espaço com máquinas de lavar e secar.',
              'Serviços disponíveis no edifício.'
            ],
            [
              '[[les électroménagers|os eletrodomésticos]]',
              'Geladeira, fogão e outros aparelhos.',
              'Equipamentos incluídos no aluguel.'
            ]
        ]
      },
      { type: 'heading', text: 'Como interpretar anúncios imobiliários no Québec' },
      {
        type: 'paragraph',
        text:
          'Uma particularidade importante dos anúncios imobiliários do Québec é a indicação do número de cômodos com frações: [[1 ½, 2 ½, 3 ½, 4 ½|1 e meio, 2 e meio, 3 e meio, 4 e meio]]. ' +
          'Segundo o JuridiQC, o número inteiro representa os cômodos principais (sala, quartos e cozinha) e a metade representa sempre o banheiro. ' +
          'Assim, um [[3 ½|apartamento de três cômodos principais e um banheiro]] normalmente possui sala, cozinha, um quarto e banheiro. ' +
          'Outros termos frequentes são [[meublé|mobiliado]], [[semi-meublé|semimobiliado]], [[non meublé|não mobiliado]], [[chauffé / éclairé|com aquecimento / eletricidade incluídos]] ' +
          'e [[non-fumeur|não fumante]]. ' +
          'O JuridiQC explica também que [[un studio|uma quitinete]] costuma ser chamado de [[1 ½|um e meio]], que um [[bachelor|apartamento no subsolo]] fica no subsolo ou semissubsolo de uma casa, que o [[rez-de-chaussée|térreo]] (RDC) fica no nível da rua e não deve ser confundido com o [[premier étage|primeiro andar]], e que a área é muitas vezes dada em [[pieds carrés|pés quadrados]] (1 pé quadrado = 0,092 m²).'
      },
      {
        type: 'paragraph',
        text:
          'Para descrever a localização, utilize [[un quartier résidentiel|um bairro residencial]], [[le voisinage|a vizinhança]], [[à proximité de|próximo de]], [[un arrêt d’autobus|um ponto de ônibus]], [[les commerces|os estabelecimentos comerciais]] ' +
          'e [[les transports en commun|o transporte público]]. ' +
          'Para falar de mudanças, são úteis [[déménager|mudar de residência]], [[un déménagement|uma mudança]], [[les cartons|as caixas de mudança]], [[un camion de déménagement|um caminhão de mudança]] ' +
          'e [[changer d’adresse|mudar de endereço]].'
      },
      { type: 'heading', text: 'Exemplo de anúncio imobiliário' },
      {
        type: 'paragraph',
        text:
          '[[À louer : appartement 3 ½ lumineux dans un quartier résidentiel de Montréal.|Para alugar: apartamento de três cômodos principais e um banheiro, bem iluminado, em um bairro residencial de Montreal.]] ' +
          '[[Disponible dès le 1er juillet.|Disponível a partir de 1º de julho.]] ' +
          '[[Semi-meublé, avec réfrigérateur et cuisinière inclus.|Semimobiliado, com geladeira e fogão incluídos.]] ' +
          '[[Chauffage non inclus dans le loyer.|Aquecimento não incluído no aluguel.]] ' +
          '[[Espace de rangement intérieur et stationnement extérieur disponibles.|Espaço de armazenamento interno e vaga de estacionamento externa disponíveis.]] ' +
          '[[À proximité des commerces et d’un arrêt d’autobus.|Próximo a estabelecimentos comerciais e a um ponto de ônibus.]] ' +
          '[[Pour organiser une visite, veuillez communiquer avec le propriétaire par courriel.|Para agendar uma visita, entre em contato com o proprietário por e-mail.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção às palavras e às particularidades do Québec',
        text:
          'Um falso cognato importante é [[location|aluguel / locação]], que em francês não significa localização geográfica. ' +
          'Para falar da localização, utilize [[emplacement|localização / lugar]]. Outro cuidado: [[un locataire|um inquilino]] ' +
          'é quem aluga o imóvel, enquanto [[un locateur|um locador]] é quem concede o direito de ocupá-lo. Não inverta os papéis. ' +
          'Também não interprete [[3 ½|três e meio]] ' +
          'como três andares e meio: nos anúncios do Québec, essa indicação descreve a quantidade de cômodos principais e um banheiro. ' +
          'Por fim, [[stationnement|estacionamento]] é a palavra usada nos anúncios do Québec e na documentação consultada.'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Aprenda a extrair informações de anúncios',
        text:
          'No TCF Canada, a compreensão escrita tem 39 questões de múltipla escolha em 60 minutos, e no TEF Canada ela também é obrigatória. ' +
          'Ao analisar um anúncio imobiliário, identifique o tipo de imóvel, o valor do aluguel, a data de disponibilidade, os serviços incluídos, as condições e a localização. ' +
          'Na expressão oral, pratique perguntas como [[Le chauffage est-il compris dans le loyer ?|O aquecimento está incluído no aluguel?]] ' +
          'e [[Est-ce qu’il est possible de visiter le logement cette semaine ?|É possível visitar o imóvel esta semana?]] ' +
          'Na produção escrita, pratique responder a anúncios, solicitar informações e descrever as características da moradia que procura.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O JuridiQC confirma os tipos de moradia, as indicações de cômodos como [[3 ½|três e meio]], [[meublé|mobiliado]], [[semi-meublé|semimobiliado]], [[chauffé / éclairé|com aquecimento / eletricidade incluídos]], [[locker|depósito]], [[non-fumeur|não fumante]] e a conversão de pés quadrados. ' +
          'O OQLF confirma [[bail|contrato de locação]], [[locateur|locador]] e [[locataire|inquilino]]. ' +
          'O FEI e o Le français des affaires confirmam as provas de compreensão escrita e oral. ' +
          'O "Aide-mémoire pour la recherche d’un logement permanent" (Governo do Québec, 2021) confirma [[le bail|o contrato de locação]] entre o proprietário e o inquilino, o [[3 ½|três e meio]] (três cômodos, com sala, quarto e cozinha, mais um banheiro, a "metade"), [[semi-meublé|semimobiliado]] (fogão e geladeira incluídos no aluguel), [[chauffé ou non chauffé|aquecido ou não]], e a recomendação de perguntar por serviços ([[le chauffage|o aquecimento]], [[l’électricité|a eletricidade]], [[la buanderie|a lavanderia]]), móveis e eletrodomésticos, de avaliar o [[le quartier|o bairro]] e o [[le transport en commun|o transporte coletivo]] e de ler o contrato antes de assinar. ' +
          'Não têm fonte: [[le déménagement|a mudança]], o falso amigo [[location|aluguel / locação]] e [[emplacement|localização]], o anúncio de exemplo e a dica de treino. ' +
          'Esses pontos são conselhos de preparação, não regras oficiais dos exames.'
      }
    ]
  },

  fr: {
    title: 'Le logement : location, voisinage, déménagement et annonces immobilières',
    summary:
      'Apprenez à rechercher un logement, à comprendre les annonces immobilières et à discuter du loyer, des conditions du logement et de son emplacement. ' +
      'Maîtrisez également le vocabulaire des contrats, du voisinage et du déménagement, y compris les expressions caractéristiques du marché immobilier québécois.',
    blocks: [
      { type: 'heading', text: 'Types de logements et vocabulaire de base' },
      {
        type: 'paragraph',
        text:
          'Pour parler du logement, commencez par distinguer un logement, terme général qui désigne un lieu où une personne habite, et un appartement. ' +
          'Au Québec, vous rencontrerez également un studio, un condo à louer, une chambre, une colocation et une maison jumelée. ' +
          'Pour parler des personnes concernées par la location, utilisez le locataire, le locateur ou la locatrice, le propriétaire et le bail.'
      },
      {
        type: 'table',
        headers: ['Terme', 'Signification', 'Utilisation'],
        rows: [
            [
              'le loyer',
              'Somme payée pour occuper un logement.',
              'Montant mensuel ou périodique.'
            ],
            [
              'le bail',
              'Contrat entre le locateur et le locataire.',
              'Conditions et durée de la location.'
            ],
            [
              'la chambre',
              'Pièce utilisée pour dormir.',
              'Nombre et disposition des chambres.'
            ],
            [
              'la superficie',
              'Dimension du logement.',
              'Surface disponible.'
            ],
            [
              'le stationnement',
              'Espace destiné au stationnement d’un véhicule.',
              'Disponibilité d’une place.'
            ],
            [
              'le rangement / le locker',
              'Espace supplémentaire pour entreposer des objets.',
              'Rangement des effets personnels.'
            ],
            [
              'la buanderie',
              'Espace équipé de laveuses et de sécheuses.',
              'Services disponibles dans l’immeuble.'
            ],
            [
              'les électroménagers',
              'Réfrigérateur, cuisinière et autres appareils.',
              'Équipements compris dans la location.'
            ]
        ]
      },
      { type: 'heading', text: 'Comment comprendre les annonces immobilières au Québec' },
      {
        type: 'paragraph',
        text:
          'Une particularité importante des annonces immobilières au Québec est l’indication du nombre de pièces à l’aide de fractions : 1 ½, 2 ½, 3 ½, 4 ½. ' +
          'Le nombre entier représente les pièces principales, comme le salon, les chambres et la cuisine, tandis que la moitié représente la salle de bain. ' +
          'Ainsi, un 3 ½ comprend normalement un salon, une cuisine, une chambre et une salle de bain. ' +
          'D’autres termes fréquents sont meublé, semi-meublé, non meublé, chauffé / éclairé et non-fumeur. ' +
          'JuridiQC précise aussi qu’un studio s’appelle souvent un 1 ½, qu’un bachelor est situé au sous-sol ou au demi-sous-sol d’une maison, que le rez-de-chaussée (RDC) est au niveau de la rue et ne doit pas être confondu avec le premier étage, et que la superficie est souvent donnée en pieds carrés (1 pi² = 0,092 m²).'
      },
      {
        type: 'paragraph',
        text:
          'Pour décrire l’emplacement, utilisez un quartier résidentiel, le voisinage, à proximité de, un arrêt d’autobus, les commerces et les transports en commun. ' +
          'Pour parler d’un changement de domicile, les expressions utiles sont déménager, un déménagement, les cartons, un camion de déménagement et changer d’adresse.'
      },
      { type: 'heading', text: 'Exemple d’annonce immobilière' },
      {
        type: 'paragraph',
        text:
          'À louer : appartement 3 ½ lumineux dans un quartier résidentiel de Montréal. Disponible dès le 1er juillet. ' +
          'Semi-meublé, avec réfrigérateur et cuisinière inclus. Chauffage non inclus dans le loyer. Espace de rangement intérieur et stationnement extérieur disponibles. ' +
          'À proximité des commerces et d’un arrêt d’autobus. Pour organiser une visite, veuillez communiquer avec le propriétaire par courriel.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux mots et aux particularités du Québec',
        text:
          'Un faux ami important est location, qui signifie la location ou le fait de louer, et non l’emplacement géographique. ' +
          'Pour parler de la localisation, utilisez emplacement. ' +
          'Autre précaution : un locataire est la personne qui loue le logement, tandis qu’un locateur est la personne qui accorde le droit de l’occuper. ' +
          'N’inversez pas ces deux rôles. ' +
          'Ne comprenez pas non plus 3 ½ comme trois étages et demi : dans les annonces québécoises, cette indication désigne le nombre de pièces principales et une salle de bain. ' +
          'Enfin, stationnement est le mot employé dans les annonces québécoises et dans la documentation consultée.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Apprenez à extraire les informations des annonces',
        text:
          'Au TCF Canada, la compréhension écrite comprend 39 questions à choix multiple en 60 minutes, et au TEF Canada elle est aussi obligatoire. ' +
          'Lorsque vous lisez une annonce immobilière, identifiez le type de logement, le montant du loyer, la date de disponibilité, les services inclus, les conditions et l’emplacement. ' +
          'En expression orale, entraînez-vous à poser des questions comme Le chauffage est-il compris dans le loyer ? ' +
          'et Est-ce qu’il est possible de visiter le logement cette semaine ? ' +
          'En production écrite, entraînez-vous à répondre à des annonces, à demander des renseignements et à décrire les caractéristiques du logement recherché.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'JuridiQC confirme les types de logements, les indications de pièces comme 3 ½, meublé, semi-meublé, chauffé / éclairé, locker, non-fumeur et la conversion des pieds carrés. ' +
          'L’OQLF confirme bail, locateur et locataire. ' +
          'Le FEI et Le français des affaires confirment les épreuves de compréhension écrite et orale. ' +
          'L’« Aide-mémoire pour la recherche d’un logement permanent » (gouvernement du Québec, 2021) confirme le bail entre le propriétaire et le locataire, le 3 ½ (trois pièces, avec salon, chambre et cuisine, plus une salle de bain, la « demie »), semi-meublé (cuisinière et réfrigérateur inclus dans le loyer), chauffé ou non chauffé, et la recommandation de s’informer des services (chauffage, électricité, buanderie), des meubles et appareils compris, d’examiner le quartier et le transport en commun et de lire le bail avant de le signer. ' +
          'Ne sont pas sourcés : le déménagement, le faux ami location et emplacement, l’annonce d’exemple et le conseil d’entraînement. ' +
          'Ces points sont des conseils de préparation et non des règles officielles des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Aide-mémoire pour la recherche d’un logement permanent (F-1823-FR, 2021-12) — gouvernement du Québec',
      url: 'https://cdn-contenu.quebec.ca/cdn-contenu/immigration/publications/fr/DOC_Aide_memoire_logement.pdf'
    },
    {
      title: 'Recherche de logement : comprendre les différents types de locations disponibles au Québec — JuridiQC',
      url: 'https://www.juridiqc.gouv.qc.ca/etre-locataire/trouver-un-logement/recherche-et-visite/recherche-de-logement-comprendre-les-differents-types-de-locations-disponibles-au-quebec'
    },
    {
      title: 'bail de logement — Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/18957069/bail-de-logement'
    },
    {
      title: 'locataire — Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/17026014/locataire'
    },
    {
      title: 'locateur, locatrice — Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8366294/locateur'
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
