import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ce-ofertas',

  pt: {
    title: 'Como interpretar ofertas de emprego, anúncios de moradia e regulamentos',
    summary:
      'Aprenda a identificar informações importantes em anúncios de emprego, classificados de imóveis e regulamentos de edifícios em francês canadense. ' +
      'Você vai reconhecer vocabulário específico do Québec, interpretar condições e restrições e evitar armadilhas comuns de compreensão escrita no TEF Canada e no TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. Entenda o objetivo de cada documento' },
      {
        type: 'paragraph',
        text:
          'Na compreensão escrita, você pode encontrar documentos curtos e funcionais, como uma [[offre d’emploi|oferta de emprego]], uma [[annonce de logement|anúncio de moradia]] ou um [[règlement d’immeuble|regulamento de edifício]]. ' +
          'Cada documento tem uma finalidade diferente: apresentar uma vaga, divulgar um imóvel disponível ou estabelecer regras que devem ser respeitadas. ' +
          'Seu objetivo é localizar informações específicas, identificar condições e compreender o que é permitido, obrigatório ou proibido.'
      },

      { type: 'heading', text: '2. Vocabulário essencial' },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado', 'Uso e variação regional'],
        rows: [
          [
            '[[à temps plein|em tempo integral]]',
            'Trabalho com jornada integral.',
            'Expressão comum no Québec e na França.'
          ],
          [
            '[[à temps partiel|em meio período]]',
            'Trabalho com jornada parcial.',
            'Expressão comum nas duas variedades.'
          ],
          [
            '[[expérience exigée|experiência obrigatória]]',
            'O candidato precisa ter experiência anterior.',
            'Exigência, não apenas uma preferência.'
          ],
          [
            '[[un atout|um diferencial]]',
            'Uma qualificação que aumenta as chances do candidato.',
            'Não significa necessariamente uma exigência.'
          ],
          [
            '[[fin de semaine|fim de semana]]',
            'Período de sábado e domingo.',
            'No Québec; na França, [[week-end|fim de semana]] é mais comum.'
          ],
          [
            '[[3 ½|apartamento de um quarto, segundo a contagem usual do Québec]]',
            'Tipo de imóvel com um quarto, sala, cozinha e banheiro.',
            'Na França, anúncios costumam usar [[T2|apartamento com dois cômodos principais]] ou [[F2|apartamento com dois cômodos principais]].'
          ],
          [
            '[[loyer mensuel|aluguel mensal]]',
            'Valor pago pelo aluguel a cada mês.',
            'Expressão comum nas duas variedades.'
          ],
          [
            '[[chauffé et éclairé|com aquecimento e eletricidade incluídos]]',
            'As despesas de aquecimento e eletricidade estão incluídas no aluguel.',
            'Formulação frequente nos anúncios do Québec.'
          ],
          [
            '[[locateur|locador ou proprietário que aluga o imóvel]]',
            'Pessoa que disponibiliza o imóvel para aluguel.',
            'No Québec; na França, [[bailleur|locador]] é mais habitual.'
          ],
          [
            '[[locataire|inquilino]]',
            'Pessoa que aluga e ocupa o imóvel.',
            'Expressão comum nas duas variedades.'
          ],
          [
            '[[règlement de l’immeuble|regulamento do edifício]]',
            'Conjunto de regras que os moradores devem respeitar.',
            'Expressão comum nas duas variedades.'
          ],
          [
            '[[il est interdit de|é proibido]]',
            'Indica uma proibição.',
            'Expressão comum nas duas variedades.'
          ]
        ]
      },

      { type: 'heading', text: '3. Como analisar esses documentos' },
      {
        type: 'list',
        items: [
          'Identifique o tipo de documento: é uma vaga de emprego, um imóvel disponível ou um conjunto de regras?',
          'Procure informações concretas: datas, horários, valores, endereço, carga horária e requisitos.',
          'Diferencie condições obrigatórias de vantagens opcionais. Uma experiência exigida é diferente de uma experiência considerada um diferencial.',
          'Preste atenção às palavras que indicam obrigação, permissão, proibição e exceção.',
          'Observe as informações negativas: ausência de estacionamento, animais não permitidos, disponibilidade limitada ou requisitos não atendidos.',
          'Relacione cada informação ao objetivo do documento, em vez de traduzir cada palavra isoladamente.'
        ]
      },

      { type: 'heading', text: '4. Exemplos práticos' },
      {
        type: 'table',
        headers: ['Tipo de documento', 'Trecho em francês', 'O que você precisa compreender'],
        rows: [
          [
            'Oferta de emprego',
            '[[Poste à temps plein, 35 heures par semaine. Salaire : 24 $ l’heure. Expérience en service à la clientèle exigée. Disponibilité les soirs et les fins de semaine. Faites parvenir votre CV avant le 15 juin.|Vaga em tempo integral, 35 horas por semana. Salário de 24 dólares por hora. Experiência em atendimento ao cliente obrigatória. Disponibilidade à noite e nos fins de semana. Envie seu currículo antes de 15 de junho.]]',
            'É uma vaga de 35 horas semanais, paga 24 dólares por hora e exige experiência em atendimento ao cliente. O candidato também precisa ter disponibilidade à noite e nos fins de semana. O prazo para candidatura é 15 de junho.'
          ],
          [
            'Anúncio de moradia',
            '[[Logement 3 ½ non-fumeur, chauffé et éclairé, électroménagers inclus. Libre dès le 1er juillet. Animaux interdits.|Apartamento de um quarto, para não fumantes, com aquecimento, eletricidade e eletrodomésticos incluídos. Disponível a partir de 1º de julho. Animais proibidos.]]',
            'O imóvel tem um quarto, inclui aquecimento, eletricidade e eletrodomésticos, estará disponível em 1º de julho e não permite animais.'
          ],
          [
            'Regulamento',
            '[[Il est interdit de fumer dans les aires communes. Les déchets doivent être déposés dans les bacs prévus à cet effet. Le bruit doit être réduit après 22 h.|É proibido fumar nas áreas comuns. O lixo deve ser colocado nas lixeiras destinadas a esse fim. O barulho deve ser reduzido depois das 22 horas.]]',
            'Existem três regras: não fumar nas áreas comuns, descartar o lixo nos locais apropriados e reduzir o barulho depois das 22 horas.'
          ]
        ]
      },

      { type: 'heading', text: '5. Armadilhas comuns de interpretação' },
      {
        type: 'paragraph',
        text:
          'No francês canadense, algumas expressões diferem das utilizadas com mais frequência na França. Por exemplo, [[fin de semaine|fim de semana]] é típico do Québec, enquanto [[week-end|fim de semana]] é mais frequente na França. ' +
          'Da mesma forma, [[locateur|locador]] aparece no vocabulário do Québec, enquanto [[bailleur|locador]] é comum na França. ' +
          'Também é importante reconhecer a classificação de imóveis: um [[3 ½|apartamento de um quarto, pela classificação do Québec]] não deve ser confundido com um imóvel de três quartos.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção ao significado de livre',
        text:
          'Um erro comum para quem fala português é interpretar [[libre|disponível ou vago]] como gratuito. ' +
          'Em um anúncio, [[Logement libre dès le 1er juillet.|Imóvel disponível a partir de 1º de julho.]] indica a data em que o imóvel pode ser ocupado, e não que ele será oferecido sem custo. ' +
          'Da mesma forma, [[chauffé et éclairé|com aquecimento e eletricidade incluídos]] não significa que internet e estacionamento também estejam incluídos.'
      },

      { type: 'heading', text: '6. Estratégia para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Procure a informação, não apenas as palavras',
        text:
          'No TEF Canada e no TCF Canada, uma questão pode apresentar uma informação com palavras diferentes das utilizadas no documento. ' +
          'Leia primeiro a pergunta, identifique o que precisa encontrar e depois procure os dados correspondentes. ' +
          'Dê atenção especial a valores, datas, horários, requisitos, condições e exceções. ' +
          'Uma palavra de negação, como [[interdit|proibido]], pode mudar completamente a resposta.'
      }
    ]
  },

  fr: {
    title: 'Comprendre les offres d’emploi, les annonces de logement et les règlements',
    summary:
      'Apprenez à repérer les informations importantes dans les offres d’emploi, les petites annonces immobilières et les règlements d’immeubles en français canadien. ' +
      'Vous découvrirez le vocabulaire courant au Québec, les conditions à interpréter et les pièges fréquents de la compréhension écrite au TEF Canada et au TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. Comprendre le rôle de chaque document' },
      {
        type: 'paragraph',
        text:
          'En compréhension écrite, vous pouvez rencontrer des documents courts et pratiques, comme une offre d’emploi, une annonce de logement ou un règlement d’immeuble. ' +
          'Chaque document a un objectif différent : présenter un poste, annoncer un logement disponible ou établir des règles à respecter. ' +
          'Votre objectif est de repérer les informations précises, de comprendre les conditions et de distinguer ce qui est permis, obligatoire ou interdit.'
      },

      { type: 'heading', text: '2. Vocabulaire essentiel' },
      {
        type: 'table',
        headers: ['Expression', 'Signification', 'Usage et variation régionale'],
        rows: [
          [
            'à temps plein',
            'Emploi avec un horaire complet.',
            'Expression courante au Québec et en France.'
          ],
          [
            'à temps partiel',
            'Emploi avec un horaire réduit.',
            'Expression courante dans les deux variétés.'
          ],
          [
            'expérience exigée',
            'Le candidat doit avoir une expérience préalable.',
            'Il s’agit d’une condition obligatoire, pas seulement d’un avantage.'
          ],
          [
            'un atout',
            'Une qualification qui augmente les chances du candidat.',
            'Ce n’est pas nécessairement une exigence.'
          ],
          [
            'fin de semaine',
            'Période du samedi et du dimanche.',
            'Usage courant au Québec ; en France, week-end est plus fréquent.'
          ],
          [
            '3 ½',
            'Type de logement comprenant habituellement une chambre fermée, un salon, une cuisine et une salle de bain.',
            'Usage québécois ; en France, on trouve plutôt T2 ou F2.'
          ],
          [
            'loyer mensuel',
            'Montant payé chaque mois pour la location d’un logement.',
            'Expression courante dans les deux variétés.'
          ],
          [
            'chauffé et éclairé',
            'Le chauffage et l’électricité sont compris dans le prix du logement.',
            'Formulation fréquente dans les annonces au Québec.'
          ],
          [
            'locateur',
            'Personne qui loue un logement à un locataire.',
            'Terme courant au Québec ; en France, bailleur est plus habituel.'
          ],
          [
            'locataire',
            'Personne qui loue et occupe un logement.',
            'Expression courante dans les deux variétés.'
          ],
          [
            'règlement de l’immeuble',
            'Ensemble des règles que les occupants doivent respecter.',
            'Expression courante dans les deux variétés.'
          ],
          [
            'il est interdit de',
            'Formulation qui indique une interdiction.',
            'Expression courante dans les deux variétés.'
          ]
        ]
      },

      { type: 'heading', text: '3. Comment analyser ces documents' },
      {
        type: 'list',
        items: [
          'Identifiez le type de document : s’agit-il d’une offre d’emploi, d’un logement à louer ou d’un règlement ?',
          'Repérez les informations concrètes : dates, horaires, montants, adresse, nombre d’heures et exigences.',
          'Distinguez les conditions obligatoires des avantages facultatifs. Une expérience exigée n’est pas la même chose qu’une expérience considérée comme un atout.',
          'Soyez attentif aux mots qui expriment une obligation, une permission, une interdiction ou une exception.',
          'Repérez les informations négatives : absence de stationnement, animaux interdits, disponibilité limitée ou exigences non satisfaites.',
          'Reliez chaque information à l’objectif du document au lieu de traduire chaque mot isolément.'
        ]
      },

      { type: 'heading', text: '4. Exemples pratiques' },
      {
        type: 'table',
        headers: ['Type de document', 'Extrait en français', 'Informations à comprendre'],
        rows: [
          [
            'Offre d’emploi',
            'Poste à temps plein, 35 heures par semaine. Salaire : 24 $ l’heure. Expérience en service à la clientèle exigée. Disponibilité les soirs et les fins de semaine. Faites parvenir votre CV avant le 15 juin.',
            'Le poste offre 35 heures de travail par semaine et un salaire de 24 dollars de l’heure. Une expérience en service à la clientèle est obligatoire. Le candidat doit être disponible le soir et la fin de semaine. La date limite pour envoyer sa candidature est le 15 juin.'
          ],
          [
            'Annonce de logement',
            'Logement 3 ½ non-fumeur, chauffé et éclairé, électroménagers inclus. Libre dès le 1er juillet. Animaux interdits.',
            'Le logement comprend une chambre. Le chauffage, l’électricité et les appareils électroménagers sont inclus. Il sera disponible à partir du 1er juillet. Les animaux ne sont pas acceptés.'
          ],
          [
            'Règlement',
            'Il est interdit de fumer dans les aires communes. Les déchets doivent être déposés dans les bacs prévus à cet effet. Le bruit doit être réduit après 22 h.',
            'Trois règles sont établies : ne pas fumer dans les espaces communs, déposer les déchets dans les bacs appropriés et réduire le bruit après 22 heures.'
          ]
        ]
      },

      { type: 'heading', text: '5. Pièges fréquents d’interprétation' },
      {
        type: 'paragraph',
        text:
          'Certaines expressions varient entre le français canadien et celui de France. Par exemple, fin de semaine est courant au Québec, tandis que week-end est plus fréquent en France. ' +
          'De même, locateur apparaît dans le vocabulaire québécois, alors que bailleur est courant en France. ' +
          'Il faut également reconnaître les classifications immobilières : un logement 3 ½ au Québec ne correspond pas à un appartement de trois chambres. Il comprend habituellement une chambre fermée, un salon, une cuisine et une salle de bain.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au sens du mot libre',
        text:
          'Une erreur fréquente chez les lusophones consiste à interpréter libre comme gratuit. ' +
          'Dans une annonce immobilière, Logement libre dès le 1er juillet indique la date à laquelle le logement devient disponible, et non le fait qu’il est offert sans frais. ' +
          'De même, chauffé et éclairé signifie que le chauffage et l’électricité sont compris, mais cela ne garantit pas que l’accès à Internet ou le stationnement sont également inclus.'
      },

      { type: 'heading', text: '6. Stratégie pour l’épreuve' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Cherchez l’information, pas seulement les mots',
        text:
          'Au TEF Canada et au TCF Canada, une question peut reformuler une information avec des mots différents de ceux du document. ' +
          'Lisez d’abord la question, déterminez ce que vous devez trouver, puis repérez les informations correspondantes. ' +
          'Portez une attention particulière aux montants, aux dates, aux horaires, aux exigences, aux conditions et aux exceptions. ' +
          'Un mot de négation, comme interdit, peut complètement changer la bonne réponse.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Se préparer à l’épreuve de compréhension écrite du TEF – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-de-comprehension-ecrite-du-tef/'
    },
    {
      title: 'TCF Canada – France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'Consulter les offres d’emploi dans Québec emploi – Gouvernement du Québec',
      url: 'https://www.quebec.ca/emploi/trouver-emploi-stage/consulter-offres-emplois'
    },
    {
      title: 'Bail – Gouvernement du Québec',
      url: 'https://www.quebec.ca/habitation-territoire/location/bail'
    },
    {
      title: 'Droits et obligations des locateurs et des locataires – Gouvernement du Québec',
      url: 'https://www.quebec.ca/habitation-territoire/location/droits-et-obligations-des-locateurs-et-des-locataires'
    }
  ]
}

export default content
