import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-radio',

  pt: {
    title: 'Entrevistas e reportagens de rádio',
    summary:
      'No meio da prova (níveis B1 e B2) aparecem trechos de rádio: entrevistas com especialistas, reportagens e crônicas. ' +
      'São mais longos, mais rápidos e com vocabulário de notícia. O objetivo é captar o tema, a informação principal e a posição de quem fala.',
    blocks: [
      { type: 'heading', text: 'Os formatos mais comuns' },
      {
        type: 'table',
        headers: ['Formato', 'Como é', 'O que procurar'],
        rows: [
          [
            'Entrevista',
            'Um jornalista pergunta, um convidado (especialista, testemunha) responde',
            'Quem é o convidado e qual é a mensagem principal dele'
          ],
          [
            'Reportagem',
            'Narração do jornalista com trechos de pessoas entrevistadas',
            'O fato principal: o quê, onde, quando, por quê'
          ],
          [
            'Micro-trottoir',
            'Várias pessoas na rua respondem à mesma pergunta',
            'Quem é a favor, quem é contra, quem hesita'
          ],
          [
            'Crônica',
            'Um apresentador desenvolve um tema sozinho',
            'O tema e o conselho ou a opinião do cronista'
          ]
        ]
      },

      { type: 'heading', text: 'Use a apresentação a seu favor' },
      {
        type: 'paragraph',
        text:
          'Os primeiros segundos de um trecho de rádio costumam anunciar o tema e o convidado: "Nous recevons aujourd’hui Marie Dupont, sociologue, qui a étudié…". ' +
          'Quem capta essa frase já sabe do que se trata e consegue antecipar o vocabulário.'
      },

      { type: 'heading', text: 'Vocabulário de notícia' },
      {
        type: 'list',
        items: [
          'Anunciar um tema: il s’agit de, il est question de, on parle de, à propos de.',
          'Números e tendências: une hausse (alta), une baisse (queda), doubler, la moitié, un tiers, en moyenne.',
          'Citar alguém: selon, d’après (segundo), affirmer, souligner (destacar), estimer (considerar), rappeler (lembrar).',
          'Causa e consequência: en raison de, à cause de, grâce à, ce qui entraîne, par conséquent.'
        ]
      },

      { type: 'heading', text: 'Perguntas típicas' },
      {
        type: 'list',
        items: [
          'Qual é o tema principal do trecho?',
          'Quem é a pessoa entrevistada ou qual é a profissão dela?',
          'Que informação foi dada sobre um número, uma data ou um lugar?',
          'O que o convidado pensa ou recomenda?'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'O "Journal en français facile" da RFI e os vídeos do TV5MONDE Apprendre são noticiários com nível controlado. ' +
          'Comece por eles e passe para o rádio comum (Radio-Canada, France Inter) quando entender a ideia principal já na primeira escuta.'
      }
    ]
  },

  fr: {
    title: 'Interviews et reportages radio',
    summary:
      'Au milieu de l’épreuve (niveaux B1 et B2), on entend des extraits de radio : des interviews d’experts, des reportages et des chroniques. ' +
      'Ils sont plus longs, plus rapides et utilisent le vocabulaire de l’actualité. L’objectif est de saisir le thème, l’information principale et la position de la personne qui parle.',
    blocks: [
      { type: 'heading', text: 'Les formats les plus courants' },
      {
        type: 'table',
        headers: ['Format', 'Description', 'Ce qu’il faut chercher'],
        rows: [
          [
            'Interview',
            'Un journaliste pose des questions, un invité (expert, témoin) répond',
            'Qui est l’invité et quel est son message principal'
          ],
          [
            'Reportage',
            'La narration du journaliste, avec des extraits de personnes interrogées',
            'Le fait principal : quoi, où, quand, pourquoi'
          ],
          [
            'Micro-trottoir',
            'Plusieurs personnes dans la rue répondent à la même question',
            'Qui est pour, qui est contre, qui hésite'
          ],
          [
            'Chronique',
            'Un animateur développe seul un thème',
            'Le thème et le conseil ou l’opinion du chroniqueur'
          ]
        ]
      },

      { type: 'heading', text: 'Profitez de la présentation' },
      {
        type: 'paragraph',
        text:
          'Les premières secondes d’un extrait de radio annoncent souvent le thème et l’invité : « Nous recevons aujourd’hui Marie Dupont, sociologue, qui a étudié… ». ' +
          'Si vous saisissez cette phrase, vous savez déjà de quoi on va parler et vous pouvez anticiper le vocabulaire.'
      },

      { type: 'heading', text: 'Le vocabulaire de l’actualité' },
      {
        type: 'list',
        items: [
          'Annoncer un thème : il s’agit de, il est question de, on parle de, à propos de.',
          'Chiffres et tendances : une hausse, une baisse, doubler, la moitié, un tiers, en moyenne.',
          'Citer quelqu’un : selon, d’après, affirmer, souligner, estimer, rappeler.',
          'Cause et conséquence : en raison de, à cause de, grâce à, ce qui entraîne, par conséquent.'
        ]
      },

      { type: 'heading', text: 'Questions typiques' },
      {
        type: 'list',
        items: [
          'Quel est le thème principal de l’extrait ?',
          'Qui est la personne interrogée, ou quelle est sa profession ?',
          'Quelle information a été donnée sur un chiffre, une date ou un lieu ?',
          'Que pense ou que recommande l’invité ?'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Le « Journal en français facile » de RFI et les vidéos de TV5MONDE Apprendre sont des journaux d’information à niveau contrôlé. ' +
          'Commencez par eux, puis passez à la radio habituelle (Radio-Canada, France Inter) quand vous comprenez l’idée principale dès la première écoute.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Open Exam Prep – TEF Canada Listening: structure and question types',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/listening-comprehension/listening-overview'
    },
    {
      title: 'Université de Sherbrooke – TCF : compréhension orale',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-orale'
    },
    {
      title: 'RFI – Le français facile (Journal en français facile, exercices TCF)',
      url: 'https://francaisfacile.rfi.fr/fr/'
    },
    {
      title: 'TV5MONDE – Apprendre le français',
      url: 'https://apprendre.tv5monde.com/fr'
    }
  ]
}

export default content
