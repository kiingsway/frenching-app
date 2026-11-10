import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-mensagens',

  pt: {
    title: 'Mensagens curtas: anúncios, recados e avisos',
    summary:
      'São os primeiros documentos da prova e os mais fáceis: um anúncio numa estação, um recado na secretária eletrônica, um aviso numa loja. ' +
      'São curtos e tocam uma única vez, então o segredo é saber de antemão que tipo de informação procurar.',
    blocks: [
      { type: 'heading', text: 'Onde aparecem na prova' },
      {
        type: 'paragraph',
        text:
          'No TEF Canada e no TCF Canada as questões ficam mais difíceis ao longo da prova, e as mensagens curtas estão no começo (níveis A1 e A2). ' +
          'Cada áudio dura poucos segundos e toca uma vez só: não dá para voltar nem pausar.'
      },

      { type: 'heading', text: 'Tipos de mensagem' },
      {
        type: 'table',
        headers: ['Tipo', 'Exemplo', 'O que costumam perguntar'],
        rows: [
          [
            'Anúncio em estação ou aeroporto',
            'Mudança de plataforma, atraso de voo, portão de embarque',
            'Número, horário, destino, o que fazer'
          ],
          [
            'Recado na secretária eletrônica',
            'Um amigo remarca um encontro, um consultório confirma uma consulta',
            'Quem ligou, por quê, o que a pessoa deve fazer'
          ],
          [
            'Aviso em loja ou local público',
            'Promoção, horário de fechamento, objeto perdido',
            'Onde, até quando, qual o desconto'
          ],
          [
            'Mensagem automática',
            'Menu de atendimento telefônico, horário de funcionamento',
            'Qual tecla apertar, quando ligar de novo'
          ]
        ]
      },

      { type: 'heading', text: 'Vocabulário que volta sempre' },
      {
        type: 'list',
        items: [
          'Transporte: [[le quai|a plataforma]], [[la voie|a linha]], [[la correspondance|a conexão]], [[retardé|atrasado]], [[annulé|cancelado]], [[l’embarquement|o embarque]], [[la porte|o portão]].',
          'Telefone: [[rappeler|ligar de volta]], [[laisser un message|deixar um recado]], [[joindre quelqu’un|falar com alguém]], [[dans les plus brefs délais|o quanto antes]].',
          'Loja: [[les soldes|a liquidação]], [[une remise|um desconto]] ou [[une réduction|um desconto]], [[la caisse|o caixa]], [[fermer ses portes|fechar]].',
          'Tempo: [[dès|a partir de]], [[jusqu’à|até]], [[d’ici|dentro de]], [[en avance|adiantado]], [[à l’heure|no horário]], [[en retard|atrasado]].'
        ]
      },

      { type: 'heading', text: 'Números, horários e datas' },
      {
        type: 'paragraph',
        text:
          'Boa parte das perguntas cobra um número. Os anúncios usam o relógio de 24 horas ("[[le train de 18 h 42|o trem das 18h42]]"), ' +
          'e os números de 70 a 99 são compostos: [[soixante-dix|70]], [[quatre-vingts|80]], [[quatre-vingt-dix|90]]. ' +
          'Treine até reconhecê-los sem precisar traduzir.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a informação corrigida',
        text:
          'Anúncios muitas vezes dão uma informação e depois a corrigem: "[[le train partira de la voie 3, et non de la voie 5|o trem partirá da linha 3, e não da linha 5]]". ' +
          'A resposta certa é a informação final, não a primeira que você ouviu.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'Ouça anúncios reais (estações, aeroportos, vídeos de viagem) e anote só três coisas: o quê, onde e quando. ' +
          'Se conseguir anotar as três depois de uma única escuta, você está no ritmo da prova.'
      }
    ]
  },

  fr: {
    title: 'Messages courts : annonces, messages et avis',
    summary:
      'Ce sont les premiers documents de l’épreuve et les plus faciles : une annonce dans une gare, un message sur un répondeur, un avis dans un magasin. ' +
      'Ils sont courts et diffusés une seule fois : le secret, c’est de savoir à l’avance quel type d’information chercher.',
    blocks: [
      { type: 'heading', text: 'Où ils apparaissent dans l’épreuve' },
      {
        type: 'paragraph',
        text:
          'Au TEF Canada et au TCF Canada, les questions deviennent plus difficiles au fil de l’épreuve, et les messages courts se trouvent au début (niveaux A1 et A2). ' +
          'Chaque document dure quelques secondes et n’est diffusé qu’une fois : impossible de revenir en arrière ou de faire une pause.'
      },

      { type: 'heading', text: 'Types de messages' },
      {
        type: 'table',
        headers: ['Type', 'Exemple', 'Ce qu’on demande souvent'],
        rows: [
          [
            'Annonce dans une gare ou un aéroport',
            'Changement de voie, retard de vol, porte d’embarquement',
            'Un numéro, un horaire, une destination, ce qu’il faut faire'
          ],
          [
            'Message sur un répondeur',
            'Un ami déplace un rendez-vous, un cabinet médical confirme une consultation',
            'Qui a appelé, pourquoi, ce que la personne doit faire'
          ],
          [
            'Avis dans un magasin ou un lieu public',
            'Promotion, heure de fermeture, objet perdu',
            'Où, jusqu’à quand, quelle réduction'
          ],
          [
            'Message automatique',
            'Serveur vocal, horaires d’ouverture',
            'Sur quelle touche appuyer, quand rappeler'
          ]
        ]
      },

      { type: 'heading', text: 'Le vocabulaire qui revient toujours' },
      {
        type: 'list',
        items: [
          'Transports : le quai, la voie, la correspondance, retardé, annulé, l’embarquement, la porte.',
          'Téléphone : rappeler, laisser un message, joindre quelqu’un, dans les plus brefs délais.',
          'Magasin : les soldes, une remise ou une réduction, la caisse, fermer ses portes.',
          'Temps : dès, jusqu’à, d’ici, en avance, à l’heure, en retard.'
        ]
      },

      { type: 'heading', text: 'Nombres, horaires et dates' },
      {
        type: 'paragraph',
        text:
          'Une bonne partie des questions porte sur un nombre. Les annonces utilisent l’heure sur 24 heures (« le train de 18 h 42 »), ' +
          'et les nombres de 70 à 99 sont composés : soixante-dix, quatre-vingts, quatre-vingt-dix. ' +
          'Entraînez-vous jusqu’à les reconnaître sans traduire.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à l’information corrigée',
        text:
          'Les annonces donnent souvent une information, puis la corrigent : « le train partira de la voie 3, et non de la voie 5 ». ' +
          'La bonne réponse est l’information finale, pas la première que vous avez entendue.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Écoutez de vraies annonces (gares, aéroports, vidéos de voyage) et notez seulement trois choses : quoi, où et quand. ' +
          'Si vous y arrivez après une seule écoute, vous êtes au rythme de l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le français des affaires – TEF Canada : présentation des épreuves',
      url: 'https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'Université de Sherbrooke – TCF : compréhension orale',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-orale'
    },
    {
      title: 'Open Exam Prep – TEF Canada Listening: structure and question types',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/listening-comprehension/listening-overview'
    },
    {
      title: 'Open Exam Prep – TCF Canada: format and structure',
      url: 'https://open-exam-prep.com/study-guides/tcf-canada/introduction-logistics/tcf-canada-format-structure'
    }
  ]
}

export default content
