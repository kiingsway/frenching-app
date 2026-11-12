import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-gerondif',

  pt: {
    title: 'Gerúndio e particípio presente em francês',
    summary:
      'Aprenda a formar e utilizar o gerúndio e o particípio presente para expressar simultaneidade, maneira, causa, condição e outras relações entre ações. ' +
      'Entenda as diferenças entre essas duas formas verbais, suas regras de invariabilidade e como distingui-las dos adjetivos terminados em -ant.',
    blocks: [
      { type: 'heading', text: '1. O que são o gerúndio e o particípio presente' },
      {
        type: 'paragraph',
        text:
          'O [[participe présent|particípio presente]] e o [[gérondif|gerúndio]] ' +
          'são formas verbais utilizadas para acrescentar informações a uma frase, indicando relações entre ações ou descrevendo situações. ' +
          'O particípio presente normalmente termina em -ant. O gerúndio é formado pela preposição [[en|em]] seguida do particípio presente. ' +
          'A principal diferença é que o gerúndio sempre utiliza [[en|em]], enquanto o particípio presente pode aparecer sem essa preposição.'
      },
      { type: 'heading', text: '2. Como formar essas estruturas' },
      {
        type: 'paragraph',
        text:
          'Para formar o particípio presente, utilize a primeira pessoa do plural do presente do indicativo, retire a terminação -ons e acrescente -ant. ' +
          'Para formar o gerúndio, coloque [[en|em]] antes dessa forma. Existem três exceções importantes: [[être|ser / estar]] ' +
          'forma [[étant|sendo / estando]], [[avoir|ter]] forma [[ayant|tendo]] e [[savoir|saber]] forma [[sachant|sabendo]].'
      },
      {
        type: 'table',
        headers: ['Infinitivo', 'Forma nous no presente', 'Particípio presente', 'Gerúndio'],
        rows: [
            [
              '[[parler|falar]]',
              '[[nous parlons|nós falamos]]',
              '[[parlant|falando]]',
              '[[en parlant|falando]]'
            ],
            [
              '[[finir|terminar]]',
              '[[nous finissons|nós terminamos]]',
              '[[finissant|terminando]]',
              '[[en finissant|terminando]]'
            ],
            [
              '[[prendre|pegar]]',
              '[[nous prenons|nós pegamos]]',
              '[[prenant|pegando]]',
              '[[en prenant|pegando]]'
            ],
            [
              '[[être|ser / estar]]',
              '[[nous sommes|nós somos / estamos]]',
              '[[étant|sendo / estando]]',
              '[[en étant|sendo / estando]]'
            ],
            [
              '[[avoir|ter]]',
              '[[nous avons|nós temos]]',
              '[[ayant|tendo]]',
              '[[en ayant|tendo]]'
            ],
            [
              '[[savoir|saber]]',
              '[[nous savons|nós sabemos]]',
              '[[sachant|sabendo]]',
              '[[en sachant|sabendo]]'
            ]
        ]
      },
      { type: 'heading', text: '3. Quando utilizar o gerúndio' },
      {
        type: 'paragraph',
        text:
          'O gerúndio apresenta uma circunstância relacionada à ação principal. Ele pode expressar simultaneidade, maneira, meio, causa, condição ou oposição. ' +
          'O sujeito implícito do gerúndio normalmente deve ser o mesmo sujeito da oração principal.'
      },
      {
        type: 'list',
        items: [
          'Simultaneidade: [[Elle écoute un balado en préparant le souper.|Ela escuta um podcast enquanto prepara o jantar.]]',
          'Maneira ou meio: [[Il a appris le français en travaillant à Montréal.|Ele aprendeu francês trabalhando em Montreal.]]',
          'Causa: [[En oubliant son passeport, il a manqué son vol.|Por ter esquecido o passaporte, ele perdeu o voo.]]',
          'Condição: [[En réservant tôt, vous paierez moins cher.|Reservando com antecedência, você pagará menos.]]',
          'Oposição ou concessão com tout en: [[Tout en reconnaissant les avantages, je pense que cette solution est coûteuse.|Embora reconheça as vantagens, penso que essa solução é cara.]]'
        ]
      },
      { type: 'heading', text: '4. Quando utilizar o particípio presente' },
      {
        type: 'paragraph',
        text:
          'O particípio presente é utilizado para apresentar uma ação relacionada a um substantivo ou acrescentar uma circunstância à oração principal. ' +
          'Muitas vezes, pode substituir uma oração relativa introduzida por [[qui|que / quem]]. Diferentemente do gerúndio, não exige a presença de [[en|em]] ' +
          'e permanece invariável, mesmo quando se refere a um substantivo feminino ou plural.'
      },
      {
        type: 'list',
        items: [
          'Caracterizar uma pessoa por uma ação: [[Les personnes parlant plusieurs langues peuvent aider les clients.|As pessoas que falam vários idiomas podem ajudar os clientes.]]',
          'Expressar uma circunstância ou causa: [[Ne connaissant pas le quartier, j’ai utilisé une carte.|Como não conhecia o bairro, utilizei um mapa.]]',
          'Apresentar uma ação simultânea: [[Elle est entrée dans la salle portant plusieurs documents.|Ela entrou na sala carregando vários documentos.]]',
          'Utilização em contextos formais: [[Les candidats souhaitant participer doivent remplir le formulaire.|Os candidatos que desejam participar devem preencher o formulário.]]'
        ]
      },
      { type: 'heading', text: '5. Diferença entre particípio presente e adjetivo verbal' },
      {
        type: 'paragraph',
        text:
          'Nem toda palavra terminada em -ant é um particípio presente. ' +
          'Algumas formas são adjetivos derivados de verbos e, nesse caso, concordam em gênero e número com o substantivo. ' +
          'O particípio presente, por sua vez, é invariável. Compare [[Les sujets intéressant les lecteurs|os assuntos que interessam aos leitores]] ' +
          'com [[Ces histoires sont intéressantes.|Estas histórias são interessantes.]] Na primeira construção, [[intéressant|interessando]] ' +
          'é particípio presente e não varia. Na segunda, [[intéressantes|interessantes]] é um adjetivo e concorda com o substantivo feminino plural.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com o sujeito do gerúndio',
        text:
          'Um erro frequente é utilizar o gerúndio com um sujeito diferente daquele da oração principal. ' +
          'Por exemplo, [[En arrivant au bureau, le téléphone a sonné.|Ao chegar ao escritório, o telefone tocou.]] sugere que foi o telefone que chegou ao escritório. ' +
          'Para expressar a ideia corretamente, diga [[En arrivant au bureau, j’ai entendu le téléphone sonner.|Ao chegar ao escritório, ouvi o telefone tocar.]] ' +
          'Também não coloque [[en|em]] antes de todo particípio presente: [[Les employés travaillant ici|Os funcionários que trabalham aqui]] ' +
          'está correto sem essa preposição.'
      },
      {
        type: 'list',
        items: [
          'Não acrescente terminações de feminino ou plural ao particípio presente: [[des personnes travaillant ensemble|pessoas trabalhando juntas]].',
          'Não confunda gerúndio com infinitivo: [[en travaillant|trabalhando]] não é a mesma estrutura que [[pour travailler|para trabalhar]].',
          'Não confunda [[tout en|mesmo enquanto / embora]] com uma indicação obrigatória de oposição. Dependendo do contexto, também pode destacar duas ações simultâneas.',
          'Lembre-se de que o particípio presente pode ter seus próprios complementos: [[une personne connaissant bien la région|uma pessoa que conhece bem a região]].',
          'Na negativa, [[ne|não]] e [[pas|não]] cercam o particípio: [[En ne connaissant pas la réponse, il a préféré se taire.|Por não saber a resposta, ele preferiu ficar calado.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique principalmente a transformação de frases subordinadas em construções com gerúndio e particípio presente. ' +
          'Na expressão escrita, essas formas ajudam a evitar repetições e organizar argumentos com maior concisão. ' +
          'Na expressão oral, utilize o gerúndio para conectar ações e explicar como ou por que algo aconteceu. ' +
          'Para buscar o nível B2, procure também reconhecer a diferença entre uma forma verbal invariável e um adjetivo que exige concordância.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As quatro páginas listadas abrem. O Le Robert confirma a formação do particípio presente (radical da 1ª pessoa do plural + -ant), as exceções ayant, étant e sachant, os valores (relativa, tempo, causa, condição, concessão), a invariabilidade, a regra do sujeito implícito e o adjetivo verbal; ' +
          'o OQLF confirma a distinção entre particípio presente e adjetivo participe e o gerúndio como en + particípio presente, inclusive com negação (En ne négligeant pas…). ' +
          'Da página do OQLF sobre verbos regulares e irregulares só o título foi conferido. ' +
          'Nenhuma fonte confirma as recomendações de aplicação ao TEF Canada e ao TCF Canada, nem a referência ao nível B2: são sugestões de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'Le gérondif et le participe présent',
    summary:
      'Apprenez à former et à utiliser le gérondif et le participe présent pour exprimer la simultanéité, la manière, la cause, la condition et d’autres relations entre les actions. ' +
      'Découvrez les différences entre ces deux formes verbales, leurs règles d’invariabilité et la façon de les distinguer des adjectifs en -ant.',
    blocks: [
      { type: 'heading', text: '1. Qu’est-ce que le gérondif et le participe présent ?' },
      {
        type: 'paragraph',
        text:
          'Le participe présent et le gérondif sont des formes verbales qui permettent d’ajouter des informations à une phrase en établissant des relations entre les actions ou en décrivant des situations. ' +
          'Le participe présent se termine généralement par -ant. Le gérondif se forme à l’aide de la préposition en suivie du participe présent. ' +
          'La principale différence est que le gérondif utilise toujours en, tandis que le participe présent peut apparaître sans cette préposition.'
      },
      { type: 'heading', text: '2. Comment former ces structures' },
      {
        type: 'paragraph',
        text:
          'Pour former le participe présent, utilisez la première personne du pluriel du présent de l’indicatif, retirez la terminaison -ons et ajoutez -ant. ' +
          'Pour former le gérondif, placez en devant cette forme. Il existe trois exceptions importantes : être donne étant, avoir donne ayant et savoir donne sachant.'
      },
      {
        type: 'table',
        headers: ['Infinitif', 'Forme nous au présent', 'Participe présent', 'Gérondif'],
        rows: [
            [
              'parler',
              'nous parlons',
              'parlant',
              'en parlant'
            ],
            [
              'finir',
              'nous finissons',
              'finissant',
              'en finissant'
            ],
            [
              'prendre',
              'nous prenons',
              'prenant',
              'en prenant'
            ],
            [
              'être',
              'nous sommes',
              'étant',
              'en étant'
            ],
            [
              'avoir',
              'nous avons',
              'ayant',
              'en ayant'
            ],
            [
              'savoir',
              'nous savons',
              'sachant',
              'en sachant'
            ]
        ]
      },
      { type: 'heading', text: '3. Quand utiliser le gérondif ?' },
      {
        type: 'paragraph',
        text:
          'Le gérondif présente une circonstance liée à l’action principale. ' +
          'Il peut exprimer la simultanéité, la manière, le moyen, la cause, la condition ou l’opposition. ' +
          'Le sujet implicite du gérondif doit normalement être le même que celui de la proposition principale.'
      },
      {
        type: 'list',
        items: [
          'Simultanéité : « Elle écoute un balado en préparant le souper. »',
          'Manière ou moyen : « Il a appris le français en travaillant à Montréal. »',
          'Cause : « En oubliant son passeport, il a manqué son vol. »',
          'Condition : « En réservant tôt, vous paierez moins cher. »',
          'Opposition ou concession avec tout en : « Tout en reconnaissant les avantages, je pense que cette solution est coûteuse. »'
        ]
      },
      { type: 'heading', text: '4. Quand utiliser le participe présent ?' },
      {
        type: 'paragraph',
        text:
          'Le participe présent sert à présenter une action liée à un nom ou à ajouter une circonstance à la proposition principale. ' +
          'Il peut souvent remplacer une proposition relative introduite par qui. ' +
          'Contrairement au gérondif, il n’exige pas la présence de en et demeure invariable, même lorsqu’il se rapporte à un nom féminin ou pluriel.'
      },
      {
        type: 'list',
        items: [
          'Décrire une personne par une action : « Les personnes parlant plusieurs langues peuvent aider les clients. »',
          'Exprimer une circonstance ou une cause : « Ne connaissant pas le quartier, j’ai utilisé une carte. »',
          'Présenter une action simultanée : « Elle est entrée dans la salle portant plusieurs documents. »',
          'Utilisation dans des contextes formels : « Les candidats souhaitant participer doivent remplir le formulaire. »'
        ]
      },
      { type: 'heading', text: '5. Différence entre le participe présent et l’adjectif verbal' },
      {
        type: 'paragraph',
        text:
          'Tous les mots qui se terminent par -ant ne sont pas des participes présents. ' +
          'Certaines formes sont des adjectifs dérivés de verbes et, dans ce cas, elles s’accordent en genre et en nombre avec le nom. ' +
          'Le participe présent, quant à lui, est invariable. Comparez « Les sujets intéressant les lecteurs » et « Ces histoires sont intéressantes ». ' +
          'Dans la première construction, intéressant est un participe présent qui ne varie pas. ' +
          'Dans la deuxième, intéressantes est un adjectif qui s’accorde avec le nom féminin pluriel.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au sujet du gérondif',
        text:
          'Une erreur fréquente consiste à utiliser le gérondif avec un sujet différent de celui de la proposition principale. ' +
          'Par exemple, « En arrivant au bureau, le téléphone a sonné » laisse entendre que c’est le téléphone qui est arrivé au bureau. ' +
          'Pour exprimer correctement cette idée, dites « En arrivant au bureau, j’ai entendu le téléphone sonner ». ' +
          'N’ajoutez pas non plus en devant tous les participes présents : « Les employés travaillant ici » est correct sans cette préposition.'
      },
      {
        type: 'list',
        items: [
          'N’ajoutez pas de terminaisons du féminin ou du pluriel au participe présent : « des personnes travaillant ensemble ».',
          'Ne confondez pas le gérondif et l’infinitif : « en travaillant » n’a pas la même structure que « pour travailler ».',
          'Ne confondez pas tout en avec une indication obligatoire d’opposition. Selon le contexte, cette construction peut également souligner deux actions simultanées.',
          'Rappelez-vous que le participe présent peut avoir ses propres compléments : « une personne connaissant bien la région ».',
          'À la forme négative, ne et pas entourent le participe : « En ne connaissant pas la réponse, il a préféré se taire. »'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous principalement à transformer des propositions subordonnées en constructions utilisant le gérondif et le participe présent. ' +
          'À l’expression écrite, ces formes permettent d’éviter les répétitions et d’organiser les arguments de manière plus concise. ' +
          'À l’expression orale, utilisez le gérondif pour relier des actions et expliquer comment ou pourquoi quelque chose s’est produit. ' +
          'Pour viser le niveau B2, apprenez également à distinguer une forme verbale invariable d’un adjectif qui exige un accord.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les quatre pages indiquées s’ouvrent. Le Robert confirme la formation du participe présent (radical de la 1re personne du pluriel + -ant), les exceptions ayant, étant et sachant, les valeurs (relative, temps, cause, condition, concession), l’invariabilité, la règle du sujet implicite et l’adjectif verbal ; ' +
          'l’OQLF confirme la distinction entre le participe présent et l’adjectif participe et le gérondif comme en + participe présent, y compris avec la négation (En ne négligeant pas…). ' +
          'De la page de l’OQLF sur les verbes réguliers et irréguliers, seul le titre a été vérifié. ' +
          'Aucune source ne confirme les recommandations d’application au TEF Canada et au TCF Canada, ni la référence au niveau B2 : ce sont des suggestions de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – Participe présent et participe adjectif : distinctions',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22915/la-grammaire/le-verbe/modes/distinction-entre-le-participe-present-et-ladjectif-participe'
    },
    {
      title: 'OQLF – Sujet sous-entendu du participe présent et sujet de la phrase',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24712/la-syntaxe/constructions-syntaxiques-boiteuses/logique-syntaxique-sujet-sous-entendu-du-participe-present'
    },
    {
      title: 'OQLF – Verbes réguliers et irréguliers : classification et conjugaison',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24654/la-grammaire/le-verbe/conjugaison/verbes-reguliers-et-irreguliers'
    },
    {
      title: 'Le Robert – Le participe présent et le gérondif',
      url: 'https://dictionnaire.lerobert.com/guide/participe-present'
    }
  ]
}

export default content
