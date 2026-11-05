import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'prova-qcm',

  pt: {
    title: 'Gestão de tempo e estratégias para QCM',
    summary:
      'As provas de compreensão oral e escrita são QCM (questionário de múltipla escolha). ' +
      'Além de entender francês, ir bem nelas depende de administrar o tempo e de conhecer as armadilhas mais comuns.',
    blocks: [
      { type: 'heading', text: 'Regra número 1: responda todas' },
      {
        type: 'paragraph',
        text:
          'Nos formatos atuais do TEF Canada e do TCF Canada, resposta errada vale zero, igual a resposta em branco: não há pontos negativos. ' +
          'Então nunca deixe uma questão sem resposta. Se não souber, elimine o que puder e chute entre as que sobrarem.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com material antigo',
        text:
          'Versões antigas do TEF descontavam pontos por erro, e alguns livros ainda dizem isso. Hoje, errar e deixar em branco dão o mesmo resultado.'
      },

      { type: 'heading', text: 'Orçamento de tempo' },
      {
        type: 'table',
        headers: ['Prova', 'Tempo por questão', 'Observação'],
        rows: [
          ['TEF – compreensão escrita', '1 min 30', '40 questões em 60 min'],
          ['TCF – compreensão escrita', 'cerca de 1 min 30', '39 questões em 60 min'],
          ['Compreensão oral (TEF e TCF)', 'ditado pelo áudio', 'Use as pausas entre os áudios para ler as próximas questões']
        ]
      },
      {
        type: 'list',
        items: [
          'As questões ficam mais difíceis ao longo da prova. As primeiras devem ser rápidas, para sobrar tempo para os textos longos do final.',
          'Se uma questão travar você por mais de 2 minutos, escolha a melhor alternativa e siga em frente.',
          'Confira o relógio em marcos: na escrita, mais ou menos na metade das questões deve ter passado menos da metade do tempo.'
        ]
      },

      { type: 'heading', text: 'Compreensão oral: antes, durante e depois do áudio' },
      {
        type: 'list',
        items: [
          'Antes: leia a pergunta e as alternativas. Descubra o que procurar: um número, um lugar, uma opinião, a intenção de quem fala.',
          'Durante: preste atenção ao sentido geral e às palavras-chave. Não tente entender cada palavra.',
          'Depois: responda na hora e passe para a próxima. Não fique remoendo o áudio anterior.',
          'Em opiniões, procure o tom: ironia, dúvida, entusiasmo. "Ce n’est pas mal" é um elogio moderado, não uma crítica.'
        ]
      },

      { type: 'heading', text: 'Compreensão escrita: ler com estratégia' },
      {
        type: 'list',
        items: [
          'Leia a pergunta antes do texto. Assim você sabe se precisa de um detalhe (busca rápida) ou da ideia geral (leitura completa).',
          'Em textos do dia a dia (anúncios, horários), procure só a informação pedida.',
          'Em textos argumentativos, identifique a opinião do autor: introdução, conectores de oposição (mais, cependant, pourtant) e conclusão.',
          'A resposta certa quase sempre está escrita com outras palavras (paráfrase ou sinônimo).'
        ]
      },

      { type: 'heading', text: 'As armadilhas mais comuns' },
      {
        type: 'table',
        headers: ['Armadilha', 'Como evitar'],
        rows: [
          ['A alternativa repete palavras exatas do texto ou do áudio', 'Desconfie: a certa costuma ser uma paráfrase'],
          ['A alternativa é verdadeira, mas não responde à pergunta', 'Releia a pergunta antes de marcar'],
          ['A alternativa exagera (toujours, jamais, tous)', 'Procure no texto se a afirmação é tão absoluta'],
          ['Negações e restrições (ne… que, ne… plus, sauf)', 'Leia com calma: "il ne reste que deux places" quer dizer que ainda há vagas'],
          ['Mudança de ideia no meio (mais, finalement)', 'O que vem depois do "mais" costuma ser o que vale']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Treine com cronômetro',
        text:
          'Faça os exercícios de compreensão sempre com tempo marcado e anote em quais tipos de questão você erra mais. ' +
          'Erros por falta de tempo e erros de compreensão pedem treinos diferentes.'
      }
    ]
  },

  fr: {
    title: 'Gestion du temps et stratégies pour les QCM',
    summary:
      'Les épreuves de compréhension orale et écrite sont des QCM (questionnaires à choix multiples). ' +
      'En plus de comprendre le français, bien y réussir dépend de la gestion du temps et de la connaissance des pièges les plus fréquents.',
    blocks: [
      { type: 'heading', text: 'Règle numéro 1 : répondez à tout' },
      {
        type: 'paragraph',
        text:
          'Dans les formats actuels du TEF Canada et du TCF Canada, une mauvaise réponse vaut zéro, comme une réponse vide : il n’y a pas de points négatifs. ' +
          'Ne laissez donc jamais une question sans réponse. Si vous ne savez pas, éliminez ce que vous pouvez et choisissez parmi les réponses restantes.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux anciens supports',
        text:
          'D’anciennes versions du TEF retiraient des points en cas d’erreur, et certains livres le disent encore. Aujourd’hui, se tromper ou ne pas répondre donne le même résultat.'
      },

      { type: 'heading', text: 'Budget de temps' },
      {
        type: 'table',
        headers: ['Épreuve', 'Temps par question', 'Remarque'],
        rows: [
          ['TEF – compréhension écrite', '1 min 30', '40 questions en 60 min'],
          ['TCF – compréhension écrite', 'environ 1 min 30', '39 questions en 60 min'],
          ['Compréhension orale (TEF et TCF)', 'imposé par l’audio', 'Profitez des pauses entre les documents pour lire les questions suivantes']
        ]
      },
      {
        type: 'list',
        items: [
          'Les questions deviennent plus difficiles au fil de l’épreuve. Les premières doivent aller vite, pour garder du temps pour les longs textes de la fin.',
          'Si une question vous bloque plus de 2 minutes, choisissez la meilleure réponse et passez à la suite.',
          'Vérifiez l’heure à des étapes clés : à l’écrit, à mi-parcours des questions, moins de la moitié du temps doit être écoulée.'
        ]
      },

      { type: 'heading', text: 'Compréhension orale : avant, pendant et après l’audio' },
      {
        type: 'list',
        items: [
          'Avant : lisez la question et les réponses. Repérez ce qu’il faut chercher : un nombre, un lieu, une opinion, l’intention de la personne qui parle.',
          'Pendant : concentrez-vous sur le sens général et les mots-clés. N’essayez pas de comprendre chaque mot.',
          'Après : répondez tout de suite et passez à la suite. Ne restez pas bloqué sur le document précédent.',
          'Pour les opinions, repérez le ton : ironie, doute, enthousiasme. « Ce n’est pas mal » est un compliment modéré, pas une critique.'
        ]
      },

      { type: 'heading', text: 'Compréhension écrite : lire avec stratégie' },
      {
        type: 'list',
        items: [
          'Lisez la question avant le texte. Vous saurez s’il faut un détail (lecture rapide) ou l’idée générale (lecture complète).',
          'Pour les documents du quotidien (annonces, horaires), cherchez seulement l’information demandée.',
          'Pour les textes argumentatifs, repérez l’opinion de l’auteur : introduction, connecteurs d’opposition (mais, cependant, pourtant) et conclusion.',
          'La bonne réponse est presque toujours formulée autrement (paraphrase ou synonyme).'
        ]
      },

      { type: 'heading', text: 'Les pièges les plus fréquents' },
      {
        type: 'table',
        headers: ['Piège', 'Comment l’éviter'],
        rows: [
          ['La réponse reprend les mots exacts du texte ou de l’audio', 'Méfiez-vous : la bonne réponse est souvent une paraphrase'],
          ['La réponse est vraie, mais ne répond pas à la question', 'Relisez la question avant de cocher'],
          ['La réponse exagère (toujours, jamais, tous)', 'Vérifiez dans le texte si l’affirmation est aussi absolue'],
          ['Négations et restrictions (ne… que, ne… plus, sauf)', 'Lisez calmement : « il ne reste que deux places » veut dire qu’il reste des places'],
          ['Changement d’idée en cours de route (mais, finalement)', 'Ce qui suit le « mais » est généralement ce qui compte']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Entraînez-vous avec un chronomètre',
        text:
          'Faites toujours les exercices de compréhension en temps limité et notez les types de questions où vous vous trompez le plus. ' +
          'Les erreurs dues au manque de temps et les erreurs de compréhension demandent des entraînements différents.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Manuel du candidat au e-TEF Canada (notation des QCM)',
      url: 'https://www.festivalff.cz/files/files/manuel_e-tef_canada(1).pdf'
    },
    {
      title: 'TCF en ligne – TCF Canada ou TEF Canada : guide complet',
      url: 'https://www.tcfenligne.com/tcf-canada-ou-tef-canada/'
    },
    {
      title: 'Formation TCF Canada – Maîtriser le chronomètre du TCF',
      url: 'https://www.formation-tcfcanada.com/maitriser-le-chronometre-du-tcf-5-strategies-concretes-pour-reussir'
    },
    {
      title: 'ATF Montréal – Compréhension écrite TEF Canada et TEFAQ',
      url: 'https://atfmontreal.ca/comprehension-ecrite-tef-canada-et-tefaq-tous-les-details/'
    },
    {
      title: 'Language Next – TEF Canada Reading 2026 Test Guide',
      url: 'https://www.languagenext.com/blog/tef-canada-reading/'
    }
  ]
}

export default content
