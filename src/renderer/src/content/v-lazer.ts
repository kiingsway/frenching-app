import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-lazer',

  pt: {
    title: 'Lazer e cultura: cinema, música, festivais e leitura',
    summary:
      'Aprenda o vocabulário francês relacionado às atividades culturais e de lazer, incluindo filmes, shows, festivais, livros e bibliotecas. ' +
      'Saiba descrever experiências culturais, expressar preferências, recomendar obras e discutir a importância da cultura e do entretenimento na sociedade.',
    blocks: [
      { type: 'heading', text: '1. Cinema e produções audiovisuais' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre cinema, é importante conhecer os gêneros, os profissionais envolvidos e os elementos de uma produção. ' +
          'Você também pode descrever sua experiência como espectador, comentar uma história e avaliar uma obra. No francês canadense, [[aller au cinéma|ir ao cinema]] ' +
          'e [[voir un film|assistir a um filme]] são expressões comuns.'
      },
      {
        type: 'table',
        headers: ['Categoria', 'Vocabulário em francês', 'Uso'],
        rows: [
            [
              'Cinema',
              '[[un film|um filme]], [[un long métrage|um longa-metragem]], [[un court métrage|um curta-metragem]], [[un documentaire|um documentário]], [[une séance|uma sessão]], [[une salle de cinéma|uma sala de cinema]]',
              'Obras e locais de exibição.'
            ],
            [
              'Produção',
              '[[un réalisateur / une réalisatrice|um diretor / uma diretora]], [[un acteur / une actrice|um ator / uma atriz]], [[un scénario|um roteiro]], [[une intrigue|um enredo]], [[une bande originale|uma trilha sonora]]',
              'Profissionais e elementos de um filme.'
            ],
            [
              'Exibição',
              '[[des sous-titres|legendas]], [[une version doublée|uma versão dublada]], [[une version originale|uma versão original]], [[une projection|uma exibição]], [[un billet|um ingresso]]',
              'Formatos e experiências de exibição.'
            ],
            [
              'Gêneros',
              '[[une comédie|uma comédia]], [[un film d’action|um filme de ação]], [[un film d’horreur|um filme de terror]], [[un film dramatique|um filme dramático]], [[un film de science-fiction|um filme de ficção científica]], [[un film d’animation|um filme de animação]]',
              'Tipos de produções audiovisuais.'
            ]
        ]
      },
      { type: 'heading', text: '2. Música, shows e festivais' },
      {
        type: 'paragraph',
        text:
          'A música e os eventos culturais são temas frequentes em conversas sobre lazer. ' +
          'Para falar de apresentações ao vivo, utilize [[un concert|um show / concerto]], [[un spectacle|um espetáculo]] e [[un festival|um festival]]. ' +
          'No Québec, também é comum encontrar expressões relacionadas à programação cultural, aos eventos ao ar livre e à participação de artistas locais.'
      },
      {
        type: 'table',
        headers: ['Categoria', 'Vocabulário em francês', 'Uso'],
        rows: [
            [
              'Música',
              '[[une chanson|uma canção]], [[un album|um álbum]], [[un groupe de musique|uma banda]], [[un chanteur / une chanteuse|um cantor / uma cantora]], [[un musicien / une musicienne|um músico / uma musicista]], [[les paroles|a letra da música]]',
              'Artistas e produções musicais.'
            ],
            [
              'Apresentações',
              '[[un concert|um show / concerto]], [[un spectacle|um espetáculo]], [[une scène|um palco]], [[une représentation|uma apresentação]], [[une tournée|uma turnê]], [[une salle de spectacle|uma casa de espetáculos]]',
              'Eventos e apresentações ao vivo.'
            ],
            [
              'Festivais',
              '[[un festival de musique|um festival de música]], [[la programmation|a programação]], [[un artiste invité|um artista convidado]], [[une scène extérieure|um palco externo]], [[un événement culturel|um evento cultural]], [[une activité gratuite|uma atividade gratuita]]',
              'Organização e atrações culturais.'
            ],
            [
              'Ingressos',
              '[[la billetterie|a bilheteria]], [[un billet|um ingresso]], [[une place réservée|um lugar reservado]], [[un tarif réduit|uma tarifa reduzida]], [[une entrée gratuite|uma entrada gratuita]]',
              'Acesso aos eventos.'
            ]
        ]
      },
      { type: 'heading', text: '3. Leitura, livros e bibliotecas' },
      {
        type: 'paragraph',
        text:
          'A leitura pode ser apresentada como uma atividade de lazer, uma forma de aprendizagem ou uma maneira de conhecer outras culturas. ' +
          'Para conversar sobre esse assunto, conheça os principais gêneros literários, os locais de leitura e as atividades realizadas em bibliotecas. ' +
          'No Québec, [[emprunter un livre|pegar um livro emprestado]], [[renouveler un prêt|renovar um empréstimo]] e [[retourner un livre|devolver um livro]] ' +
          'são expressões úteis no cotidiano.'
      },
      {
        type: 'table',
        headers: ['Categoria', 'Vocabulário em francês', 'Uso'],
        rows: [
            [
              'Livros',
              '[[un livre|um livro]], [[un roman|um romance]], [[un essai|um ensaio]], [[une nouvelle|um conto]], [[une bande dessinée|uma história em quadrinhos]], [[un livre numérique|um livro digital]], [[un livre audio|um audiolivro]]',
              'Tipos de publicação.'
            ],
            [
              'Pessoas',
              '[[un auteur / une autrice|um autor / uma autora]], [[un écrivain / une écrivaine|um escritor / uma escritora]], [[un lecteur / une lectrice|um leitor / uma leitora]], [[un bibliothécaire / une bibliothécaire|um bibliotecário / uma bibliotecária]]',
              'Profissionais e leitores.'
            ],
            [
              'Locais',
              '[[une bibliothèque|uma biblioteca]], [[une librairie|uma livraria]], [[une bibliothèque municipale|uma biblioteca municipal]], [[un club de lecture|um clube de leitura]]',
              'Espaços dedicados aos livros e à leitura.'
            ],
            [
              'Atividades',
              '[[lire un roman|ler um romance]], [[emprunter un livre|pegar um livro emprestado]], [[participer à un club de lecture|participar de um clube de leitura]], [[publier un livre|publicar um livro]], [[faire une critique littéraire|fazer uma crítica literária]]',
              'Hábitos e atividades literárias.'
            ]
        ]
      },
      { type: 'heading', text: '4. Descrever experiências e expressar opiniões' },
      {
        type: 'paragraph',
        text:
          'Para conversar sobre cultura, não basta mencionar o que você assistiu, ouviu ou leu. ' +
          'Também é importante explicar o que chamou sua atenção e por que recomenda determinada experiência. ' +
          'Utilize expressões como [[une histoire captivante|uma história envolvente]], [[une intrigue intéressante|um enredo interessante]], [[une performance remarquable|uma atuação marcante]], [[une musique entraînante|uma música animada]] ' +
          'e [[un spectacle décevant|um espetáculo decepcionante]]. ' +
          'Para avaliar uma obra, você também pode comentar o ritmo, os personagens, a originalidade e a qualidade da produção.'
      },
      {
        type: 'list',
        items: [
          '[[J’ai vu un film québécois qui raconte l’histoire d’une famille de Montréal.|Assisti a um filme quebequense que conta a história de uma família de Montreal.]]',
          '[[Le scénario était intéressant, mais la fin m’a déçu.|O roteiro era interessante, mas o final me decepcionou.]]',
          '[[J’ai assisté à un concert de musique traditionnelle pendant le festival.|Assisti a um show de música tradicional durante o festival.]]',
          '[[La programmation proposait des spectacles gratuits en plein air.|A programação oferecia espetáculos gratuitos ao ar livre.]]',
          '[[Je préfère lire des romans historiques pendant mes vacances.|Prefiro ler romances históricos durante minhas férias.]]',
          '[[J’ai emprunté un livre à la bibliothèque municipale et je l’ai terminé en trois jours.|Peguei um livro emprestado na biblioteca municipal e terminei de lê-lo em três dias.]]',
          '[[Je recommande cette exposition à tous ceux qui s’intéressent à l’art contemporain.|Recomendo essa exposição a todos que se interessam por arte contemporânea.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não confunda librairie e bibliothèque',
        text:
          'Um falso cognato importante é [[une librairie|uma livraria]]. ' +
          'Apesar da semelhança com biblioteca, essa palavra designa um estabelecimento onde se vendem livros. ' +
          'Para falar de uma biblioteca, utilize [[une bibliothèque|uma biblioteca]]. ' +
          'Outra atenção importante está no verbo assistir: para dizer que você assistiu a um filme, utilize [[regarder un film|assistir a um filme]] ' +
          'ou [[voir un film|ver um filme]]. Já [[assister à un concert|assistir a um show / concerto]] ' +
          'é correto quando você participa de uma apresentação como espectador. Não traduza todas as situações com o mesmo verbo.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Nas atividades de expressão oral e escrita, pratique falar sobre seus hábitos culturais, recomendar um filme ou livro, convidar alguém para um evento e justificar suas preferências. ' +
          'Também esteja preparado para discutir o acesso à cultura, o financiamento de festivais, a importância das bibliotecas públicas e as diferenças entre entretenimento digital e presencial. ' +
          'Não se limite a dizer que gosta de determinada atividade: explique os motivos, apresente exemplos e desenvolva seu ponto de vista. ' +
          'Utilize conectores como [[tout d’abord|em primeiro lugar]], [[en plus|além disso]], [[cependant|no entanto]] e [[pour conclure|para concluir]].'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O Usito, da Universidade de Sherbrooke, tem verbetes para [[loisir|lazer]], [[cinéma|cinema]], [[musique|música]], [[festival|festival]], [[spectacle|espetáculo]], [[roman|romance]] e [[bibliothèque|biblioteca]], que definem esses termos em geral. ' +
          'Não têm fonte confirmada: as tabelas de vocabulário, o falso amigo [[librairie|livraria]] × [[bibliothèque|biblioteca]], os usos de [[regarder|olhar / assistir]], [[voir|ver]] e [[assister à|assistir a]], as expressões típicas do Québec, os exemplos e a dica de treino. ' +
          'Essa dica é conselho de estudo, não regra oficial das provas.'
      }
    ]
  },

  fr: {
    title: 'Loisirs et culture : cinéma, musique, festivals et lecture',
    summary:
      'Apprenez le vocabulaire français lié aux activités culturelles et aux loisirs, notamment les films, les concerts, les festivals, les livres et les bibliothèques. ' +
      'Apprenez à décrire des expériences culturelles, à exprimer vos préférences, à recommander des œuvres et à discuter de l’importance de la culture et du divertissement dans la société.',
    blocks: [
      { type: 'heading', text: '1. Cinéma et productions audiovisuelles' },
      {
        type: 'paragraph',
        text:
          'Pour parler du cinéma, il est important de connaître les genres, les professionnels concernés et les éléments d’une production. ' +
          'Vous pouvez également décrire votre expérience en tant que spectateur, commenter une histoire et donner votre avis sur une œuvre. ' +
          'En français canadien, aller au cinéma et voir un film sont des expressions courantes.'
      },
      {
        type: 'table',
        headers: ['Catégorie', 'Vocabulaire français', 'Signification'],
        rows: [
            [
              'Cinéma',
              'un film, un long métrage, un court métrage, un documentaire, une séance, une salle de cinéma',
              'Œuvres et lieux de projection.'
            ],
            [
              'Production',
              'un réalisateur / une réalisatrice, un acteur / une actrice, un scénario, une intrigue, une bande originale',
              'Professionnels et éléments d’un film.'
            ],
            [
              'Projection',
              'des sous-titres, une version doublée, une version originale, une projection, un billet',
              'Formats et expériences de visionnement.'
            ],
            [
              'Genres',
              'une comédie, un film d’action, un film d’horreur, un film dramatique, un film de science-fiction, un film d’animation',
              'Types de productions audiovisuelles.'
            ]
        ]
      },
      { type: 'heading', text: '2. Musique, spectacles et festivals' },
      {
        type: 'paragraph',
        text:
          'La musique et les événements culturels sont des sujets fréquents dans les conversations sur les loisirs. ' +
          'Pour parler de prestations en direct, utilisez un concert, un spectacle et un festival. ' +
          'Au Québec, on trouve également des expressions liées à la programmation culturelle, aux événements en plein air et à la participation d’artistes locaux.'
      },
      {
        type: 'table',
        headers: ['Catégorie', 'Vocabulaire français', 'Signification'],
        rows: [
            [
              'Musique',
              'une chanson, un album, un groupe de musique, un chanteur / une chanteuse, un musicien / une musicienne, les paroles',
              'Artistes et productions musicales.'
            ],
            [
              'Spectacles',
              'un concert, un spectacle, une scène, une représentation, une tournée, une salle de spectacle',
              'Événements et prestations en direct.'
            ],
            [
              'Festivals',
              'un festival de musique, la programmation, un artiste invité, une scène extérieure, un événement culturel, une activité gratuite',
              'Organisation et activités culturelles.'
            ],
            [
              'Billetterie',
              'la billetterie, un billet, une place réservée, un tarif réduit, une entrée gratuite',
              'Accès aux événements.'
            ]
        ]
      },
      { type: 'heading', text: '3. Lecture, livres et bibliothèques' },
      {
        type: 'paragraph',
        text:
          'La lecture peut être présentée comme une activité de loisir, une forme d’apprentissage ou une manière de découvrir d’autres cultures. ' +
          'Pour discuter de ce sujet, apprenez les principaux genres littéraires, les lieux de lecture et les activités proposées dans les bibliothèques. ' +
          'Au Québec, emprunter un livre, renouveler un prêt et retourner un livre sont des expressions utiles dans la vie quotidienne.'
      },
      {
        type: 'table',
        headers: ['Catégorie', 'Vocabulaire français', 'Signification'],
        rows: [
            [
              'Livres',
              'un livre, un roman, un essai, une nouvelle, une bande dessinée, un livre numérique, un livre audio',
              'Types de publications.'
            ],
            [
              'Personnes',
              'un auteur / une autrice, un écrivain / une écrivaine, un lecteur / une lectrice, un bibliothécaire / une bibliothécaire',
              'Professionnels et lecteurs.'
            ],
            [
              'Lieux',
              'une bibliothèque, une librairie, une bibliothèque municipale, un club de lecture',
              'Espaces consacrés aux livres et à la lecture.'
            ],
            [
              'Activités',
              'lire un roman, emprunter un livre, participer à un club de lecture, publier un livre, faire une critique littéraire',
              'Habitudes et activités littéraires.'
            ]
        ]
      },
      { type: 'heading', text: '4. Décrire ses expériences et exprimer ses opinions' },
      {
        type: 'paragraph',
        text:
          'Pour discuter de culture, il ne suffit pas de mentionner ce que vous avez regardé, écouté ou lu. ' +
          'Il est également important d’expliquer ce qui a retenu votre attention et pourquoi vous recommandez une expérience particulière. ' +
          'Utilisez des expressions comme une histoire captivante, une intrigue intéressante, une performance remarquable, une musique entraînante et un spectacle décevant. ' +
          'Pour évaluer une œuvre, vous pouvez également commenter le rythme, les personnages, l’originalité et la qualité de la production.'
      },
      {
        type: 'list',
        items: [
          'J’ai vu un film québécois qui raconte l’histoire d’une famille de Montréal.',
          'Le scénario était intéressant, mais la fin m’a déçu.',
          'J’ai assisté à un concert de musique traditionnelle pendant le festival.',
          'La programmation proposait des spectacles gratuits en plein air.',
          'Je préfère lire des romans historiques pendant mes vacances.',
          'J’ai emprunté un livre à la bibliothèque municipale et je l’ai terminé en trois jours.',
          'Je recommande cette exposition à tous ceux qui s’intéressent à l’art contemporain.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne confondez pas librairie et bibliothèque',
        text:
          'Un faux ami important est librairie. Malgré sa ressemblance avec le mot portugais biblioteca, ce mot désigne un établissement où l’on vend des livres. ' +
          'Pour parler d’une bibliothèque, utilisez bibliothèque. ' +
          'Une autre distinction importante concerne le verbe assister : pour dire que vous avez regardé un film, utilisez regarder un film ou voir un film. ' +
          'En revanche, assister à un concert est correct lorsqu’on participe à une représentation en tant que spectateur. ' +
          'Ne traduisez pas toutes les situations avec le même verbe.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les activités d’expression orale et écrite, entraînez-vous à parler de vos habitudes culturelles, à recommander un film ou un livre, à inviter quelqu’un à un événement et à justifier vos préférences. ' +
          'Préparez-vous également à discuter de l’accès à la culture, du financement des festivals, de l’importance des bibliothèques publiques et des différences entre les divertissements numériques et les activités en personne. ' +
          'Ne vous contentez pas de dire que vous aimez une activité : expliquez vos raisons, donnez des exemples et développez votre point de vue. ' +
          'Utilisez des connecteurs comme tout d’abord, en plus, cependant et pour conclure.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Usito, de l’Université de Sherbrooke, comporte des articles pour loisir, cinéma, musique, festival, spectacle, roman et bibliothèque, qui définissent ces termes de façon générale. ' +
          'Ne sont pas confirmés par une source : les tableaux de vocabulaire, le faux ami librairie et bibliothèque, les emplois de regarder, voir et assister à, les expressions typiques du Québec, les exemples et le conseil d’entraînement. ' +
          'Ce conseil est une recommandation d’étude et non une règle officielle des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Loisir — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/loisir'
    },
    {
      title: 'Cinéma — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/cin%C3%A9ma'
    },
    {
      title: 'Musique — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/musique'
    },
    {
      title: 'Festival — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/festival'
    },
    {
      title: 'Spectacle — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/spectacle'
    },
    {
      title: 'Roman — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/roman'
    },
    {
      title: 'Bibliothèque — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/biblioth%C3%A8que'
    }
  ]
}

export default content
