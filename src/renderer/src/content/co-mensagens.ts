import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-mensagens',

  pt: {
    title: 'Mensagens curtas: anúncios, recados e avisos',
    summary:
      'Entre os documentos mais simples da prova estão o anúncio numa estação, o recado na secretária eletrônica e o aviso numa loja. A prova cobra a compreensão do essencial de mensagens e anúncios simples e claros. [1] ' +
      'Cada áudio toca uma única vez, [1] então o segredo é saber de antemão que tipo de informação procurar.',
    blocks: [
      { type: 'heading', text: 'Onde aparecem na prova' },
      {
        type: 'paragraph',
        text:
          'No TCF Canada as questões têm dificuldade progressiva, [1] e os primeiros áudios, de nível A1, são comunicações curtas do dia a dia, como recados de secretária eletrônica e anúncios de transporte. [2] ' +
          'No TEF Canada, os anúncios públicos são 4 das 40 questões, com cerca de 20 a 40 segundos de voz sobre ruído de fundo, e a ordem das questões não garante que as fáceis venham primeiro. [3] ' +
          'Nas duas provas cada áudio toca uma vez só: não dá para voltar nem pausar. [1] [2] [3]'
      },

      { type: 'heading', text: 'Tipos de mensagem' },
      {
        type: 'table',
        headers: ['Tipo', 'Exemplo', 'O que costumam perguntar'],
        rows: [
          [
            'Anúncio em estação ou aeroporto [2]',
            'Mudança de plataforma, atraso de voo, portão de embarque',
            'Número, horário, destino, o que fazer'
          ],
          [
            'Recado na secretária eletrônica [2]',
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
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'Não aparecem nas fontes desta página: as perguntas que cada tipo de mensagem costuma gerar, os exemplos de aviso em loja e de mensagem automática, o vocabulário da lista, o uso do relógio de 24 horas nos anúncios e o hábito de corrigir uma informação no meio do anúncio. ' +
          'As dicas de treino são conselho de preparação, não regra da prova.'
      }
    ]
  },

  fr: {
    title: 'Messages courts : annonces, messages et avis',
    summary:
      'Parmi les documents les plus simples de l’épreuve figurent l’annonce dans une gare, le message sur un répondeur et l’avis dans un magasin. L’épreuve évalue la compréhension de l’essentiel de messages et d’annonces simples et clairs. [1] ' +
      'Chaque enregistrement n’est diffusé qu’une seule fois, [1] alors le secret, c’est de savoir à l’avance quel type d’information chercher.',
    blocks: [
      { type: 'heading', text: 'Où ils apparaissent dans l’épreuve' },
      {
        type: 'paragraph',
        text:
          'Au TCF Canada, les questions suivent une difficulté progressive, [1] et les premiers documents, de niveau A1, sont de courtes communications du quotidien, comme des messages sur répondeur et des annonces de transport. [2] ' +
          'Au TEF Canada, les annonces publiques représentent 4 des 40 questions, d’environ 20 à 40 secondes, avec une seule voix sur un bruit de fond, et l’ordre des questions ne garantit pas que les plus faciles viennent en premier. [3] ' +
          'Dans les deux épreuves, chaque document n’est diffusé qu’une fois : impossible de revenir en arrière ou de faire une pause. [1] [2] [3]'
      },

      { type: 'heading', text: 'Types de messages' },
      {
        type: 'table',
        headers: ['Type', 'Exemple', 'Ce qu’on demande souvent'],
        rows: [
          [
            'Annonce dans une gare ou un aéroport [2]',
            'Changement de voie, retard de vol, porte d’embarquement',
            'Un numéro, un horaire, une destination, ce qu’il faut faire'
          ],
          [
            'Message sur un répondeur [2]',
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
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'N’apparaissent pas dans les sources de cette fiche : les questions que chaque type de message pose habituellement, les exemples d’avis en magasin et de message automatique, le vocabulaire de la liste, l’emploi de l’heure sur 24 heures dans les annonces et l’habitude de corriger une information en cours d’annonce. ' +
          'Les conseils d’entraînement sont des conseils de préparation, pas des règles de l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  // A ordem é fixa: o texto cita cada fonte pelo número da posição ([1], [2]…). Ao mudar, atualize os [n].
  sources: [
    {
      title: 'Université de Sherbrooke – TCF : compréhension orale',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-orale'
    },
    {
      title: 'Open Exam Prep – TCF Canada: format and structure (guia de terceiros, não oficial)',
      url: 'https://open-exam-prep.com/study-guides/tcf-canada/introduction-logistics/tcf-canada-format-structure'
    },
    {
      title: 'Open Exam Prep – TEF Canada Listening: structure and question types (guia de terceiros, não oficial)',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/listening-comprehension/listening-overview'
    }
  ]
}

export default content
