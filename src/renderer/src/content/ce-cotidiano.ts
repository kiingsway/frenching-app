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
            'Pequeno anúncio (petite annonce)',
            'Quem oferece, o que, por quanto, como entrar em contato'
          ],
          ['Folheto ou prospecto', 'Público-alvo, datas, local, se é gratuito ou pago'],
          [
            'Cardápio (menu, carte)',
            'Preço do menu × à la carte, o que está incluído (boisson comprise)'
          ],
          [
            'Horários (horaires)',
            'Dias de funcionamento, feriados (jours fériés), horário de verão ou inverno'
          ],
          ['Formulário', 'Que informação vai em cada campo, documentos a anexar'],
          [
            'Placa ou aviso (panneau, affiche)',
            'Proibição, obrigação ou recomendação; onde a placa está'
          ]
        ]
      },

      { type: 'heading', text: 'Vocabulário que aparece sempre' },
      {
        type: 'table',
        headers: ['Francês', 'Sentido'],
        rows: [
          ['Fermé le lundi / sauf le dimanche', 'Fechado na segunda / exceto no domingo'],
          ['Ouvert tous les jours de 9 h à 18 h', 'Aberto todos os dias das 9h às 18h'],
          ['Entrée libre / gratuite', 'Entrada livre / grátis'],
          ['Sur réservation / sur rendez-vous', 'Com reserva / com hora marcada'],
          ['Il est interdit de… / Défense de…', 'É proibido…'],
          ['Prière de… / Merci de…', 'Favor… (pedido educado)'],
          ['À louer / À vendre / À donner', 'Para alugar / à venda / para doar'],
          ['Pièce justificative', 'Comprovante, documento a anexar'],
          ['Date limite d’inscription', 'Data limite de inscrição'],
          ['Taxes en sus (Québec)', 'Impostos não incluídos no preço']
        ]
      },

      { type: 'heading', text: 'Como ler um documento curto' },
      {
        type: 'list',
        items: [
          'Leia a pergunta primeiro: ela diz se você procura um preço, um dia, uma pessoa ou uma regra.',
          'Olhe o formato: título, logotipo e disposição já dizem se é um anúncio, um aviso ou um formulário.',
          'Leia por escaneamento (balayage): procure só o dado pedido, sem ler tudo palavra por palavra.',
          'Pare nas palavras de restrição: sauf, uniquement, seulement, à partir de, jusqu’à, sous réserve de.',
          'Confira números, datas e horas duas vezes: no Canadá se escreve 18 h ou 18 h 30, e a data vem dia/mês.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com as exceções',
        text:
          'Uma placa que diz "Ouvert tous les jours sauf le mardi" e uma alternativa que diz "aberto todos os dias" parecem iguais à primeira vista. ' +
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
          ['Petite annonce', 'Qui propose, quoi, à quel prix, comment prendre contact'],
          [
            'Prospectus ou dépliant',
            'Le public visé, les dates, le lieu, si c’est gratuit ou payant'
          ],
          ['Menu ou carte', 'Le prix du menu ou à la carte, ce qui est compris (boisson comprise)'],
          ['Horaires', 'Les jours d’ouverture, les jours fériés, les horaires d’été ou d’hiver'],
          ['Formulaire', 'L’information à donner dans chaque case, les pièces à joindre'],
          [
            'Panneau ou affiche',
            'Une interdiction, une obligation ou un conseil ; l’endroit où se trouve le panneau'
          ]
        ]
      },

      { type: 'heading', text: 'Le vocabulaire qui revient toujours' },
      {
        type: 'table',
        headers: ['Expression', 'Sens'],
        rows: [
          [
            'Fermé le lundi / sauf le dimanche',
            'Le commerce ne travaille pas le lundi / tous les jours, mais pas le dimanche'
          ],
          ['Ouvert tous les jours de 9 h à 18 h', 'On peut venir chaque jour entre 9 h et 18 h'],
          ['Entrée libre / gratuite', 'On entre sans payer'],
          ['Sur réservation / sur rendez-vous', 'Il faut réserver ou prendre rendez-vous avant'],
          ['Il est interdit de… / Défense de…', 'Ce n’est pas permis'],
          ['Prière de… / Merci de…', 'Une demande polie'],
          ['À louer / À vendre / À donner', 'Pour la location / pour la vente / gratuitement'],
          ['Pièce justificative', 'Un document qui prouve une information'],
          ['Date limite d’inscription', 'Le dernier jour pour s’inscrire'],
          ['Taxes en sus (Québec)', 'Les taxes s’ajoutent au prix affiché']
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
          'Vérifiez deux fois les nombres, les dates et les heures : au Canada, on écrit 18 h ou 18 h 30, et la date se lit jour puis mois.'
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

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

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
    }
  ]
}

export default content
