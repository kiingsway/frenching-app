import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ce-cotidiano',

  pt: {
    title: 'Documentos do cotidiano: anúncios, cardápios, horários, formulários, placas',
    summary:
      'As primeiras questões da compreensão escrita usam textos curtos do dia a dia: um anúncio, um cardápio, uma tabela de horários, uma placa. ' +
      'São as questões mais rápidas da prova, mas escondem armadilhas em detalhes como datas, preços, condições e exceções.',
    blocks: [
      { type: 'heading', text: 'Onde aparecem na prova' },
      {
        type: 'paragraph',
        text:
          'No TCF Canada (39 questões em 60 minutos) e no TEF Canada (40 questões em 60 minutos), as questões vão do mais fácil ao mais difícil. ' +
          'Os documentos do cotidiano ficam no começo: textos curtos, de nível A1 a A2, que você deve resolver depressa para guardar tempo para os textos longos do fim.'
      },

      { type: 'heading', text: 'Tipos de documento e o que procurar' },
      {
        type: 'table',
        headers: ['Documento', 'O que a pergunta costuma cobrar'],
        rows: [
          [
            '[[Petite annonce|pequeno anúncio]]',
            'Quem oferece, o quê, por quanto e como entrar em contato'
          ],
          [
            '[[Dépliant|folheto]] ou [[prospectus|prospecto]]',
            'Público-alvo, datas, local e se é gratuito ou pago'
          ],
          [
            '[[Carte|cardápio]] e [[menu|refeição de preço fixo]]',
            'Preço do menu e dos pratos [[à la carte|avulsos]], e o que está incluído, como em [[boisson comprise|bebida incluída]]'
          ],
          [
            '[[Horaires|horários]]',
            'Dias de funcionamento, [[jours fériés|feriados]], horário de verão ou de inverno'
          ],
          ['[[Formulaire|formulário]]', 'Que informação vai em cada campo e que documentos anexar'],
          [
            '[[Panneau|placa]] ou [[affiche|cartaz]]',
            'Proibição, obrigação ou recomendação, e onde a placa está'
          ]
        ]
      },

      { type: 'heading', text: 'Vocabulário que aparece sempre' },
      {
        type: 'table',
        headers: ['No documento', 'O que isso diz'],
        rows: [
          ['[[Fermé le lundi|fechado na segunda]]', 'Não abre às segundas; nos outros dias, sim.'],
          [
            '[[Ouvert tous les jours sauf le dimanche|aberto todos os dias, exceto domingo]]',
            'Abre de segunda a sábado.'
          ],
          ['[[Entrée libre|entrada livre]]', 'Não precisa pagar para entrar.'],
          ['[[Sur rendez-vous|com hora marcada]]', 'Precisa marcar antes; não adianta chegar sem avisar.'],
          ['[[Il est interdit de fumer|é proibido fumar]]', 'Uma proibição.'],
          ['[[Défense de stationner|proibido estacionar]]', 'Também uma proibição, num jeito mais curto, comum em placas.'],
          ['[[Prière de fermer la porte|favor fechar a porta]]', 'Um pedido educado, não uma proibição.'],
          [
            '[[Appartement à louer|apartamento para alugar]]',
            'Oferta de aluguel; [[à vendre|à venda]] anuncia uma venda.'
          ],
          ['[[Pièce justificative|comprovante]]', 'Um documento que você precisa anexar.'],
          [
            '[[Date limite d’inscription : le 30 octobre|data limite de inscrição: 30 de outubro]]',
            'Depois dessa data, não aceitam mais inscrições.'
          ],
          [
            '[[12,99 $, taxes en sus|12,99 dólares, mais impostos]]',
            'No Québec, o preço da etiqueta não inclui os impostos, que são somados no caixa.'
          ]
        ]
      },

      { type: 'heading', text: 'Datas e horas: o mesmo dia escrito de vários jeitos' },
      {
        type: 'table',
        headers: ['No documento', 'Como ler'],
        rows: [
          [
            '[[le lundi 12 octobre 2026|segunda-feira, 12 de outubro de 2026]]',
            'Por extenso, como em cartas e avisos: o dia vem antes do mês, e o mês fica em letra minúscula.'
          ],
          [
            '2026-10-12',
            'Só com números, no formato que o Québec recomenda: ano-mês-dia. É o mesmo 12 de outubro.'
          ],
          [
            '12/10/2026',
            'Dia/mês/ano, como no Brasil e na França. Não leia à moda americana (mês/dia): é 12 de outubro, e não 10 de dezembro.'
          ],
          [
            '[[lun. 12 oct.|seg., 12 de out.]]',
            'Abreviado. Cuidado: [[mar.|ter.]] é [[mardi|terça-feira]]; o mês de março, [[mars|março]], não se abrevia.'
          ],
          [
            '[[jusqu’au 30 octobre inclusivement|até 30 de outubro, inclusive]]',
            'O dia 30 ainda conta.'
          ],
          [
            '[[de 9 h à 17 h 30|das 9h às 17h30]]',
            'Relógio de 24 horas, com h entre a hora e os minutos. Em tabelas de horário também aparece 17:30.'
          ],
          [
            '[[midi|meio-dia]] e [[minuit|meia-noite]]',
            'Às vezes aparecem escritos no lugar de 12 h e de 0 h.'
          ]
        ]
      },

      { type: 'heading', text: 'Como ler um documento curto' },
      {
        type: 'list',
        items: [
          'Leia a pergunta primeiro: ela diz se você procura um preço, um dia, uma pessoa ou uma regra.',
          'Olhe o formato: título, logotipo e disposição já dizem se é um anúncio, um aviso ou um formulário.',
          'Leia por escaneamento, a [[lecture en balayage|leitura por varredura]]: procure só o dado pedido, sem ler tudo palavra por palavra.',
          'Pare nas palavras de restrição: [[sauf|exceto]], [[uniquement|unicamente]], [[seulement|somente]], [[à partir de|a partir de]], [[jusqu’à|até]], [[sous réserve de|sujeito a]].',
          'Confira duas vezes números, datas e horas, com a tabela acima.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com as exceções',
        text:
          'Uma placa que diz "[[Ouvert tous les jours sauf le mardi|aberto todos os dias, exceto terça]]" e uma alternativa que diz "[[ouvert tous les jours|aberto todos os dias]]" parecem iguais à primeira vista. ' +
          'A pergunta quase sempre testa justamente o detalhe da exceção ou da condição.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'Use documentos reais: sites de prefeituras do Québec, cardápios de restaurantes de Montréal, anúncios do Kijiji em francês, horários da STM ou da OC Transpo. ' +
          'Para cada um, escreva três perguntas como as da prova e responda em menos de um minuto.'
      }
    ]
  },

  fr: {
    title: 'Documents de la vie quotidienne : annonces, menus, horaires, formulaires, panneaux',
    summary:
      'Les premières questions de la compréhension écrite portent sur des textes courts de la vie de tous les jours : une annonce, un menu, un tableau d’horaires, un panneau. ' +
      'Ce sont les questions les plus rapides de l’épreuve, mais elles cachent des pièges dans les détails : dates, prix, conditions et exceptions.',
    blocks: [
      { type: 'heading', text: 'Où on les trouve dans l’épreuve' },
      {
        type: 'paragraph',
        text:
          'Au TCF Canada (39 questions en 60 minutes) comme au TEF Canada (40 questions en 60 minutes), les questions vont de la plus facile à la plus difficile. ' +
          'Les documents de la vie quotidienne sont au début : des textes courts, de niveau A1 à A2, à traiter rapidement pour garder du temps pour les longs textes de la fin.'
      },

      { type: 'heading', text: 'Types de documents et ce qu’il faut chercher' },
      {
        type: 'table',
        headers: ['Document', 'Ce que la question demande souvent'],
        rows: [
          ['Petite annonce', 'Qui propose, quoi, à quel prix et comment prendre contact'],
          [
            'Dépliant ou prospectus',
            'Le public visé, les dates, le lieu, et si c’est gratuit ou payant'
          ],
          [
            'Carte et menu',
            'Le prix du menu et des plats à la carte, et ce qui est compris, comme dans « boisson comprise »'
          ],
          ['Horaires', 'Les jours d’ouverture, les jours fériés, les horaires d’été ou d’hiver'],
          ['Formulaire', 'L’information à donner dans chaque case et les pièces à joindre'],
          [
            'Panneau ou affiche',
            'Une interdiction, une obligation ou un conseil, et l’endroit où se trouve le panneau'
          ]
        ]
      },

      { type: 'heading', text: 'Le vocabulaire qui revient toujours' },
      {
        type: 'table',
        headers: ['Sur le document', 'Ce que ça veut dire'],
        rows: [
          ['Fermé le lundi', 'Le commerce n’ouvre pas le lundi ; les autres jours, oui.'],
          ['Ouvert tous les jours sauf le dimanche', 'On peut venir du lundi au samedi.'],
          ['Entrée libre', 'On entre sans payer.'],
          ['Sur rendez-vous', 'Il faut prendre rendez-vous avant de venir.'],
          ['Il est interdit de fumer', 'Une interdiction.'],
          ['Défense de stationner', 'Une interdiction aussi, sous une forme plus courte, fréquente sur les panneaux.'],
          ['Prière de fermer la porte', 'Une demande polie, pas une interdiction.'],
          ['Appartement à louer', 'Une offre de location ; « à vendre » annonce une vente.'],
          ['Pièce justificative', 'Un document à joindre pour prouver une information.'],
          ['Date limite d’inscription : le 30 octobre', 'Après cette date, on n’accepte plus d’inscriptions.'],
          ['12,99 $, taxes en sus', 'Au Québec, le prix affiché ne comprend pas les taxes, qui s’ajoutent à la caisse.']
        ]
      },

      { type: 'heading', text: 'Dates et heures : le même jour écrit de plusieurs façons' },
      {
        type: 'table',
        headers: ['Sur le document', 'Comment le lire'],
        rows: [
          [
            'le lundi 12 octobre 2026',
            'En toutes lettres, comme dans les lettres et les avis : le jour vient avant le mois, et le mois s’écrit en minuscule.'
          ],
          [
            '2026-10-12',
            'En chiffres seulement, dans le format recommandé au Québec : année-mois-jour. C’est le même 12 octobre.'
          ],
          [
            '12/10/2026',
            'Jour/mois/année, comme en France. Ne lisez pas à l’américaine (mois/jour) : c’est le 12 octobre, et non le 10 décembre.'
          ],
          [
            'lun. 12 oct.',
            'En abrégé. Attention : « mar. », c’est mardi ; le mois de mars ne s’abrège pas.'
          ],
          ['jusqu’au 30 octobre inclusivement', 'Le 30 octobre compte encore.'],
          [
            'de 9 h à 17 h 30',
            'L’heure sur 24 heures, avec « h » entre les heures et les minutes. Dans les tableaux d’horaires, on voit aussi 17:30.'
          ],
          ['midi et minuit', 'On les trouve parfois à la place de 12 h et de 0 h.']
        ]
      },

      { type: 'heading', text: 'Comment lire un document court' },
      {
        type: 'list',
        items: [
          'Lisez d’abord la question : elle dit si vous cherchez un prix, un jour, une personne ou une règle.',
          'Regardez la forme : le titre, le logo et la mise en page indiquent déjà s’il s’agit d’une annonce, d’un avis ou d’un formulaire.',
          'Lisez en balayage : cherchez seulement l’information demandée, sans tout lire mot à mot.',
          'Arrêtez-vous sur les mots de restriction : sauf, uniquement, seulement, à partir de, jusqu’à, sous réserve de.',
          'Vérifiez deux fois les nombres, les dates et les heures, à l’aide du tableau ci-dessus.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux exceptions',
        text:
          'Un panneau qui dit « Ouvert tous les jours sauf le mardi » et une réponse qui dit « ouvert tous les jours » se ressemblent au premier coup d’œil. ' +
          'La question teste presque toujours le détail de l’exception ou de la condition.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Utilisez de vrais documents : les sites des municipalités du Québec, les menus de restaurants de Montréal, les annonces Kijiji en français, les horaires de la STM ou d’OC Transpo. ' +
          'Pour chacun, écrivez trois questions comme celles de l’examen et répondez en moins d’une minute.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Université de Sherbrooke – TCF : compréhension écrite',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-ecrite'
    },
    {
      title: 'Le français des affaires – TEF Canada : présentation des épreuves',
      url: 'https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'Open Exam Prep – TEF Canada Reading: structure and question types',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/reading-comprehension/reading-overview'
    },
    {
      title: 'OQLF, Banque de dépannage linguistique – Écriture des dates et des heures dans les textes courants',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21242/la-typographie/nombres/ecriture-des-dates-et-des-heures-dans-les-lettres-et-les-textes-courants'
    },
    {
      title: 'OQLF, Banque de dépannage linguistique – Écriture des dates et des heures dans certains contextes techniques',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21241/la-typographie/nombres/ecriture-des-dates-et-des-heures-dans-certains-contextes-techniques'
    },
    {
      title: 'OQLF, Banque de dépannage linguistique – Abréviation du nom des jours de la semaine',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23617/les-abreviations-et-les-symboles/les-abreviations/listes-dabreviations/abreviation-du-nom-des-jours-de-la-semaine'
    },
    {
      title: 'OQLF, Banque de dépannage linguistique – Abréviation des noms de mois',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23619/les-abreviations-et-les-symboles/les-abreviations/listes-dabreviations/abreviation-des-noms-de-mois'
    }
  ]
}

export default content
