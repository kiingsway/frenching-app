import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-radio',

  pt: {
    title: 'Entrevistas e reportagens de rádio',
    summary: 'Na prova de compreensão oral do TEF Canada aparecem trechos de rádio: entrevistas, reportagens, crônicas e micros-trottoirs, mais longos que os diálogos curtos e com vocabulário de atualidade. [1] [2] O objetivo é captar o tema, a informação principal e a posição de quem fala.',
    blocks: [
      { type: 'heading', text: 'Os formatos mais comuns' },
      {
        type: 'table',
        headers: ['Formato', 'Como é', 'O que procurar'],
        rows: [
          ['Entrevista [2]', 'Um jornalista pergunta, um convidado (especialista) responde [1]', 'Quem é o convidado e qual é a mensagem principal dele'],
          ['Reportagem [2]', 'Narração do jornalista com trechos de pessoas entrevistadas [1]', 'O fato principal: o quê, onde, quando, por quê'],
          ['[[Micro-trottoir|enquete de rua]] [2]', 'Várias pessoas na rua respondem à mesma pergunta [1]', 'Quem é a favor, quem é contra, quem hesita'],
          ['Crônica [2]', 'Um apresentador desenvolve um tema sozinho [1]', 'O tema e o conselho ou a opinião do cronista']
        ]
      },
      { type: 'paragraph', text: 'No TCF, a prova também inclui informações sobre pessoas, fatos e eventos em programas de rádio e televisão sobre atualidade. [3]' },
      { type: 'heading', text: 'Use a apresentação a seu favor' },
      { type: 'paragraph', text: 'Os primeiros segundos de um trecho de rádio costumam anunciar o tema e o convidado: "[[Nous recevons aujourd’hui Marie Dupont, sociologue, qui a étudié…|Recebemos hoje Marie Dupont, socióloga, que estudou…]]". Quem capta essa frase já sabe do que se trata e consegue antecipar o vocabulário.' },
      { type: 'heading', text: 'Vocabulário de notícia' },
      {
        type: 'list',
        items: [
          'Anunciar um tema: [[il s’agit de|trata-se de]], [[il est question de|a questão é]], [[on parle de|fala-se de]], [[à propos de|a respeito de]].',
          'Números e tendências: [[une hausse|uma alta]], [[une baisse|uma queda]], [[doubler|dobrar]], [[la moitié|a metade]], [[un tiers|um terço]], [[en moyenne|em média]].',
          'Citar alguém: [[selon|segundo]], [[d’après|segundo]], [[affirmer|afirmar]], [[souligner|destacar]], [[estimer|considerar]], [[rappeler|lembrar]].',
          'Causa e consequência: [[en raison de|devido a]], [[à cause de|por causa de]], [[grâce à|graças a]], [[ce qui entraîne|o que provoca]], [[par conséquent|por consequência]].'
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
        text: 'O "[[Journal en français facile|jornal em francês fácil]]" da RFI, com transcrição, e os vídeos do TV5MONDE [[Apprendre|aprender]], com exercícios por nível, são um bom começo. Passe para o rádio comum (Radio-Canada, France Inter) quando entender a ideia principal já na primeira escuta. [4] [5]'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text: 'Não aparecem nas fontes desta página: a posição exata desses trechos na prova, a afirmação de que são mais rápidos, o que procurar em cada formato, a regra de que os primeiros segundos anunciam sempre o tema e o convidado, o vocabulário de notícia, a lista de perguntas típicas e a progressão de treino recomendada (inclusive Radio-Canada e France Inter). Dicas e exemplos de treino são conselho de preparação, não regra da prova.'
      }
    ]
  },

  fr: {
    title: 'Interviews et reportages radio',
    summary: 'Dans l’épreuve de compréhension orale du TEF Canada, on entend des extraits de radio : des interviews, des reportages, des chroniques et des micros-trottoirs, plus longs que les dialogues courts et avec le vocabulaire de l’actualité. [1] [2] L’objectif est de saisir le thème, l’information principale et la position de la personne qui parle.',
    blocks: [
      { type: 'heading', text: 'Les formats les plus courants' },
      {
        type: 'table',
        headers: ['Format', 'Description', 'Ce qu’il faut chercher'],
        rows: [
          ['Interview [2]', 'Un journaliste pose des questions, un invité (expert) répond [1]', 'Qui est l’invité et quel est son message principal'],
          ['Reportage [2]', 'La narration du journaliste, avec des extraits de personnes interrogées [1]', 'Le fait principal : quoi, où, quand, pourquoi'],
          ['Micro-trottoir [2]', 'Plusieurs personnes dans la rue répondent à la même question [1]', 'Qui est pour, qui est contre, qui hésite'],
          ['Chronique [2]', 'Un animateur développe seul un thème [1]', 'Le thème et le conseil ou l’opinion du chroniqueur']
        ]
      },
      { type: 'paragraph', text: 'Au TCF, l’épreuve comprend aussi des informations sur des personnes, des faits ou des événements dans des émissions de radio ou de télévision sur l’actualité. [3]' },
      { type: 'heading', text: 'Profitez de la présentation' },
      { type: 'paragraph', text: 'Les premières secondes d’un extrait de radio annoncent souvent le thème et l’invité : « Nous recevons aujourd’hui Marie Dupont, sociologue, qui a étudié… ». Si vous saisissez cette phrase, vous savez déjà de quoi on va parler et vous pouvez anticiper le vocabulaire.' },
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
        text: 'Le « Journal en français facile » de RFI, avec transcription, et les vidéos de TV5MONDE Apprendre, avec des exercices par niveau, sont un bon début. Passez à la radio habituelle (Radio-Canada, France Inter) quand vous comprenez l’idée principale dès la première écoute. [4] [5]'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text: 'N’apparaissent pas dans les sources de cette fiche : la position exacte de ces extraits dans l’épreuve, l’affirmation qu’ils sont plus rapides, ce qu’il faut chercher dans chaque format, la règle selon laquelle les premières secondes annoncent toujours le thème et l’invité, le vocabulaire de l’actualité, la liste des questions typiques et la progression d’entraînement recommandée (y compris Radio-Canada et France Inter). Les conseils et exemples d’entraînement sont des suggestions de préparation, pas une règle de l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  // A ordem é fixa: o texto cita cada fonte pelo número da posição ([1], [2]…). Ao mudar, atualize os [n].
  sources: [
    {
      title: 'Open Exam Prep – TEF Canada Listening: structure and question types',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/listening-comprehension/listening-overview'
    },
    {
      title: 'Le français des affaires – Se préparer à l’épreuve de compréhension orale du TEF',
      url: 'https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-de-comprehension-orale-du-tef/'
    },
    {
      title: 'Université de Sherbrooke – TCF : compréhension orale',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-orale'
    },
    {
      title: 'RFI – Journal en français facile',
      url: 'https://francaisfacile.rfi.fr/fr/podcasts/journal-en-fran%C3%A7ais-facile/'
    },
    {
      title: 'TV5MONDE – Apprendre le français',
      url: 'https://apprendre.tv5monde.com/fr'
    }
  ]
}

export default content
