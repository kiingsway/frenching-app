import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-falado',

  pt: {
    title: 'Francês falado: liaisons, elisões, ritmo rápido e "ne" omitido',
    summary:
      'O francês falado de verdade é diferente do escrito: palavras se juntam, sílabas somem, o "ne" da negação desaparece e aparecem expressões informais. ' +
      'Reconhecer esses fenômenos é essencial para entender diálogos e entrevistas na velocidade normal.',
    blocks: [
      { type: 'heading', text: 'Liaison: palavras que se juntam' },
      {
        type: 'paragraph',
        text:
          'Quando uma palavra termina em consoante muda e a seguinte começa com vogal, a consoante pode ser pronunciada e se juntar à próxima palavra: ' +
          '"les amis" soa "lé-za-mi" e "ils ont" soa "il-zon". Isso muda a forma sonora das palavras e confunde quem procura cada palavra separada.'
      },
      {
        type: 'list',
        items: [
          'Obrigatória: depois de artigos e determinantes (les enfants, un ami, mes amis), entre pronome e verbo (nous avons, ils arrivent) e depois de preposições curtas (chez eux, dans un).',
          'Proibida: depois de "et" (em "et un", o t nunca soa), antes de h aspirado ("les héros" sem ligação) e depois de um substantivo no singular.',
          'A liaison diferencia "ils ont" (com som de z) de "ils sont" (com som de s), um par clássico de confusão.'
        ]
      },

      { type: 'heading', text: 'Elisão e sílabas que somem' },
      {
        type: 'paragraph',
        text:
          'Na escrita, a elisão já existe (l’ami, j’aime, qu’il). Na fala informal ela vai além: o e de muitas palavras some e as palavras se encurtam.'
      },
      {
        type: 'table',
        headers: ['Escrito', 'Como costuma soar', 'Sentido'],
        rows: [
          ['je suis', 'chuis', 'eu sou, eu estou'],
          ['je ne sais pas', 'chais pas', 'não sei'],
          ['tu as', 't’as', 'você tem'],
          ['il y a', 'y a', 'há, tem'],
          ['il faut', 'faut', 'é preciso'],
          ['petit', 'p’tit', 'pequeno']
        ]
      },

      { type: 'heading', text: 'A negação sem "ne"' },
      {
        type: 'paragraph',
        text:
          'Na fala do dia a dia, o "ne" da negação quase sempre desaparece: "Je ne sais pas" vira "Je sais pas" e "Il n’y a plus de pain" vira "Y a plus de pain". ' +
          'O "pas", o "plus", o "jamais" e o "rien" ficam e carregam a negação. Preste atenção a eles: mesmo sem o "ne", a frase continua negativa.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda com afirmativa',
        text:
          '"J’ai plus faim", sem o ne, quer dizer "não estou mais com fome", e não "estou com mais fome". ' +
          'Na negação, o "plus" soa "plu", sem o s.'
      },

      { type: 'heading', text: 'Expressões informais frequentes' },
      {
        type: 'list',
        items: [
          'Ça marche, ça roule: tudo bem, combinado.',
          'Un truc, un machin: uma coisa (quando não se lembra da palavra).',
          'Bosser (trabalhar), un boulot (um emprego), la bouffe (a comida), une bagnole (um carro).',
          'Trop, grave, carrément: muito, totalmente ("c’est trop bien", "t’as carrément raison").',
          'Du coup: então, por isso (muito usado só para ligar frases).'
        ]
      },

      { type: 'heading', text: 'Palavras de preenchimento' },
      {
        type: 'paragraph',
        text:
          '"Euh", "bah", "ben", "bon", "enfin", "tu vois" e "quoi" no fim da frase não trazem informação: servem para ganhar tempo. ' +
          'Não tente traduzi-las; concentre-se nas palavras com conteúdo.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'Escolha um vídeo informal (vlog, entrevista de rua) com legenda em francês. Ouça uma frase, escreva o que ouviu e compare com a legenda. ' +
          'Esse exercício de transcrição treina o ouvido para as liaisons e as sílabas que somem.'
      }
    ]
  },

  fr: {
    title: 'Le français parlé : liaisons, élisions, débit rapide et « ne » omis',
    summary:
      'Le vrai français parlé est différent du français écrit : les mots se lient, des syllabes disparaissent, le « ne » de la négation tombe et des expressions familières apparaissent. ' +
      'Reconnaître ces phénomènes est indispensable pour comprendre les dialogues et les interviews à vitesse normale.',
    blocks: [
      { type: 'heading', text: 'La liaison : des mots qui se lient' },
      {
        type: 'paragraph',
        text:
          'Quand un mot se termine par une consonne muette et que le suivant commence par une voyelle, la consonne peut se prononcer et se lier au mot suivant : ' +
          '« les amis » et « ils ont » se prononcent d’un seul bloc, avec un son z. Cela change la forme sonore des mots et piège ceux qui cherchent chaque mot séparément.'
      },
      {
        type: 'list',
        items: [
          'Obligatoire : après les articles et les déterminants (les enfants, un ami, mes amis), entre le pronom et le verbe (nous avons, ils arrivent) et après les prépositions courtes (chez eux, dans un).',
          'Interdite : après « et » (dans « et un », le t ne se prononce jamais), devant un h aspiré (« les héros », sans liaison) et après un nom au singulier.',
          'La liaison distingue « ils ont » (avec un son z) de « ils sont » (avec un son s), une confusion classique.'
        ]
      },

      { type: 'heading', text: 'L’élision et les syllabes qui disparaissent' },
      {
        type: 'paragraph',
        text:
          'À l’écrit, l’élision existe déjà (l’ami, j’aime, qu’il). À l’oral familier, elle va plus loin : le e de nombreux mots disparaît et les mots raccourcissent.'
      },
      {
        type: 'table',
        headers: ['À l’écrit', 'Ce qu’on entend souvent', 'Exemple'],
        rows: [
          ['je suis', 'chuis', 'Chuis fatigué.'],
          ['je ne sais pas', 'chais pas', 'Chais pas où il est.'],
          ['tu as', 't’as', 'T’as faim ?'],
          ['il y a', 'y a', 'Y a du monde.'],
          ['il faut', 'faut', 'Faut partir.'],
          ['petit', 'p’tit', 'Un p’tit café ?']
        ]
      },

      { type: 'heading', text: 'La négation sans « ne »' },
      {
        type: 'paragraph',
        text:
          'À l’oral, au quotidien, le « ne » de la négation disparaît presque toujours : « Je ne sais pas » devient « Je sais pas » et « Il n’y a plus de pain » devient « Y a plus de pain ». ' +
          '« Pas », « plus », « jamais » et « rien » restent et portent la négation. Soyez attentif à ces mots : même sans le « ne », la phrase reste négative.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas avec une phrase affirmative',
        text:
          '« J’ai plus faim », sans le ne, veut dire « je n’ai plus faim », et non « j’ai davantage faim ». ' +
          'Dans la négation, on ne prononce pas le s de « plus ».'
      },

      { type: 'heading', text: 'Expressions familières fréquentes' },
      {
        type: 'list',
        items: [
          'Ça marche, ça roule : d’accord, c’est entendu.',
          'Un truc, un machin : une chose (quand on ne trouve pas le mot).',
          'Bosser (travailler), un boulot (un emploi), la bouffe (la nourriture), une bagnole (une voiture).',
          'Trop, grave, carrément : très, complètement (« c’est trop bien », « t’as carrément raison »).',
          'Du coup : donc, alors (très souvent utilisé juste pour enchaîner).'
        ]
      },

      { type: 'heading', text: 'Les mots de remplissage' },
      {
        type: 'paragraph',
        text:
          '« Euh », « bah », « ben », « bon », « enfin », « tu vois » et « quoi » en fin de phrase n’apportent pas d’information : ils servent à gagner du temps. ' +
          'N’essayez pas de les traduire ; concentrez-vous sur les mots qui ont du sens.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Choisissez une vidéo familière (vlog, micro-trottoir) avec des sous-titres en français. Écoutez une phrase, écrivez ce que vous avez entendu et comparez avec les sous-titres. ' +
          'Cet exercice de transcription entraîne l’oreille aux liaisons et aux syllabes qui disparaissent.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Kwiziq French – Omitting the "ne" in informal negative sentences',
      url: 'https://french.kwiziq.com/my-languages/French/view/3075'
    },
    {
      title: 'Lawless French – "Chui" (je suis à l’oral)',
      url: 'https://progress.lawlessfrench.com/questions/view/chui'
    },
    {
      title: 'ielanguages – Informal French',
      url: 'https://ielanguages.com/french-informal.html'
    },
    {
      title: 'Sherpas – Liaisons en français : règles et exemples',
      url: 'https://sherpas.com/blog/liaisons-francais/'
    }
  ]
}

export default content
