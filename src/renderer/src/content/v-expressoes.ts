import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-expressoes',

  pt: {
    title: 'Expressões idiomáticas e quebequismos comuns',
    summary:
      'Conheça expressões idiomáticas e palavras características do francês falado no Québec, incluindo seus significados figurados e contextos de utilização. ' +
      'Aprenda a reconhecer registros informais, identificar equivalentes do francês mais neutro e evitar traduções literais que podem causar confusão durante conversas e provas.',
    blocks: [
      { type: 'heading', text: '1. Como funcionam as expressões quebequenses' },
      {
        type: 'paragraph',
        text:
          'O francês falado no Québec possui expressões próprias que podem ser difíceis de compreender quando traduzidas literalmente. ' +
          'Algumas são utilizadas frequentemente em conversas cotidianas, enquanto outras são bastante informais. ' +
          'É importante reconhecer essas expressões e conhecer seus equivalentes mais neutros, principalmente para adaptar sua linguagem à situação.'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado em português', 'Registro e alternativa'],
        rows: [
            [
              '[[Avoir de la misère à|Ter dificuldade para]]',
              'Ter dificuldade para fazer alguma coisa',
              'Familiar e principalmente oral. Forma neutra: [[avoir de la difficulté à|ter dificuldade para]].'
            ],
            [
              '[[Être tanné de|Estar cansado ou farto de]]',
              'Estar de saco cheio de alguma coisa',
              'Familiar. Alternativas: [[en avoir assez|estar farto]] e [[en avoir marre|não aguentar mais]].'
            ],
            [
              '[[Ça adonne mal|Não dá certo ou não é conveniente]]',
              'Uma situação não combina com os planos ou não é conveniente',
              'Informal. Alternativa: [[ça tombe mal|isso vem em má hora]].'
            ],
            [
              '[[À tantôt|Até mais tarde]]',
              'Expressão utilizada para se despedir de alguém que será visto novamente',
              'Comum no Québec. Alternativa mais amplamente utilizada: [[à tout à l’heure|até daqui a pouco]].'
            ],
            [
              '[[Bienvenue !|De nada!]]',
              'Resposta possível quando alguém diz obrigado',
              'Uso característico do francês canadense. Alternativa amplamente compreendida: [[de rien|de nada]].'
            ],
            [
              '[[Attacher sa tuque|Preparar-se para enfrentar uma situação difícil]]',
              'Preparar-se para algo desafiador ou inesperado',
              'Expressão informal e figurada do Québec. Alternativa: [[accroche-toi|aguente firme]].'
            ],
            [
              '[[Être dans les patates|Estar completamente enganado]]',
              'Cometer um erro ou estar muito equivocado',
              'Familiar. Na França, uma expressão equivalente é [[être à côté de la plaque|estar completamente enganado]].'
            ],
            [
              '[[C’est plate|É chato ou que pena]]',
              'Algo é entediante, desagradável ou decepcionante',
              'Informal e comum no Québec. Alternativas: [[c’est ennuyeux|é entediante]] e [[c’est dommage|é uma pena]].'
            ],
            [
              '[[Jaser|Bater papo ou conversar]]',
              'Conversar informalmente sobre assuntos diversos',
              'Comum no Québec. Alternativas: [[discuter|conversar]] e [[bavarder|bater papo]].'
            ],
            [
              '[[Lâche pas la patate !|Não desanime!]]',
              'Continuar tentando e não perder a coragem',
              'Expressão familiar e encorajadora do Québec. Alternativa neutra: [[ne perds pas courage !|não perca a coragem!]].'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Algumas expressões não possuem uma tradução única. Por exemplo, [[être tanné de|estar farto de]] ' +
          'pode expressar irritação ou cansaço, enquanto [[ça adonne mal|não ser conveniente]] depende da situação e dos planos envolvidos. ' +
          'Observe o contexto antes de interpretar uma expressão. ' +
          'As formas familiares são especialmente importantes para compreender conversas, entrevistas e conteúdos produzidos no Québec.'
      },
      { type: 'heading', text: '2. Exemplos em contexto' },
      { type: 'paragraph', text: 'Exemplo 1 — Uma situação inconveniente' },
      {
        type: 'paragraph',
        text: '[[Ça adonne mal aujourd’hui : je dois travailler jusqu’à 22 h, alors je ne pourrai pas venir au souper.|Não dá certo hoje: preciso trabalhar até as 22h, então não poderei ir ao jantar.]]'
      },
      { type: 'paragraph', text: 'Exemplo 2 — Aprendendo expressões locais' },
      {
        type: 'paragraph',
        text:
          '[[Malik a de la misère à comprendre certaines expressions québécoises.|Malik tem dificuldade para compreender algumas expressões quebequenses.]] ' +
          '[[Son collègue lui explique leur sens et l’encourage : « Lâche pas la patate ! »|Seu colega explica o significado delas e o encoraja: «Não desanime!».]]'
      },
      { type: 'heading', text: '3. Armadilhas e erros comuns' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com as traduções literais',
        text:
          'Não traduza as expressões palavra por palavra. Em [[attacher sa tuque|preparar-se para enfrentar algo difícil]], a ideia não é literalmente amarrar um gorro. ' +
          'Em [[être dans les patates|estar completamente enganado]], não existe necessariamente nenhuma batata envolvida. ' +
          'Da mesma forma, [[être tanné|estar farto ou cansado]] não significa simplesmente estar bronzeado ou ter um bronzeado. Também não confunda [[jaser|bater papo]] ' +
          'com uma conversa necessariamente séria ou formal. Essas expressões dependem do contexto e, em geral, pertencem ao registro informal.'
      },
      { type: 'heading', text: '4. Dica para o TEF Canada e o TCF Canada' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Reconhecimento e adaptação do registro',
        text:
          'Nas provas de compreensão oral e escrita, pratique reconhecer expressões regionais mesmo quando seu significado não é literal. ' +
          'Na expressão oral e escrita, prefira construções neutras quando precisar desenvolver uma argumentação formal. ' +
          'Por exemplo, substitua [[j’ai de la misère à comprendre|tenho dificuldade para compreender]] ' +
          'por [[j’ai de la difficulté à comprendre|tenho dificuldade para compreender]] em uma situação mais formal. ' +
          'No TCF Canada, a expressão escrita tem 3 exercícios (60 minutos) e a expressão oral tem 3 exercícios (12 minutos, dos quais 2 de preparação). ' +
          'No TEF Canada, a seção B da expressão oral consiste em argumentar para convencer.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'Os três sites consultados cobrem as dez expressões: o guia da McGill ([[avoir de la misère|ter dificuldade]], [[tanné|farto]], [[ça adonne|dá certo]], [[tuque|gorro]], [[patates|batatas]], [[plate|chato]], [[jaser|bater papo]] e [[lâche pas la patate|não desanime]]), o léxico da Université de Montréal ([[à tantôt|até mais tarde]] e [[bienvenue|de nada]]) e o guia de Québec Cité ([[à tantôt|até mais tarde]], [[bienvenue|de nada]] e [[tuque|gorro]]). ' +
          'O FEI e o Le français des affaires confirmam o formato das provas. ' +
          'Não têm fonte confirmada: as alternativas neutras e as equivalentes na França (por exemplo, [[être à côté de la plaque|estar completamente enganado]]), os exemplos e a recomendação de priorizar expressões neutras na argumentação formal. ' +
          'Essa recomendação é estratégia pedagógica de preparação, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Expressions idiomatiques et québécismes courants',
    summary:
      'Découvrez des expressions idiomatiques et des mots caractéristiques du français parlé au Québec, ainsi que leurs sens figurés et leurs contextes d’utilisation. ' +
      'Apprenez à reconnaître les registres familiers, à connaître leurs équivalents en français plus neutre et à éviter les traductions littérales qui peuvent provoquer des malentendus pendant les conversations et les examens.',
    blocks: [
      { type: 'heading', text: '1. Le fonctionnement des expressions québécoises' },
      {
        type: 'paragraph',
        text:
          'Le français parlé au Québec possède des expressions particulières qui peuvent être difficiles à comprendre lorsqu’on les traduit littéralement. ' +
          'Certaines sont très fréquentes dans les conversations quotidiennes, tandis que d’autres appartiennent à un registre très familier. ' +
          'Il est important de savoir les reconnaître et de connaître leurs équivalents plus neutres, notamment pour adapter son langage à la situation.'
      },
      {
        type: 'table',
        headers: ['Expression française', 'Sens', 'Registre et équivalent'],
        rows: [
            [
              'Avoir de la misère à',
              'Éprouver des difficultés à faire quelque chose',
              'Familier et surtout oral. Forme neutre : avoir de la difficulté à.'
            ],
            [
              'Être tanné de',
              'En avoir assez de quelque chose',
              'Familier. Équivalents : en avoir assez et en avoir marre.'
            ],
            [
              'Ça adonne mal',
              'Une situation ne convient pas ou ne correspond pas aux projets prévus',
              'Informel. Équivalent : ça tombe mal.'
            ],
            [
              'À tantôt',
              'Une expression utilisée pour prendre congé d’une personne que l’on reverra',
              'Courant au Québec. Équivalent plus largement employé : à tout à l’heure.'
            ],
            [
              'Bienvenue !',
              'Une réponse possible lorsqu’une personne dit merci',
              'Usage caractéristique du français canadien. Équivalent largement compris : de rien.'
            ],
            [
              'Attacher sa tuque',
              'Se préparer à affronter une situation difficile',
              'Expression familière et imagée du Québec. Équivalent : accroche-toi.'
            ],
            [
              'Être dans les patates',
              'Se tromper complètement',
              'Familier. En France, une expression équivalente est être à côté de la plaque.'
            ],
            [
              'C’est plate',
              'Quelque chose est ennuyeux, désagréable ou décevant',
              'Informel et courant au Québec. Équivalents : c’est ennuyeux et c’est dommage.'
            ],
            [
              'Jaser',
              'Discuter de manière informelle',
              'Courant au Québec. Équivalents : discuter et bavarder.'
            ],
            [
              'Lâche pas la patate !',
              'Continuer à faire des efforts et ne pas perdre courage',
              'Expression familière et encourageante du Québec. Équivalent neutre : ne perds pas courage !'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Certaines expressions n’ont pas une traduction unique. ' +
          'Par exemple, être tanné de peut exprimer de l’irritation ou de la fatigue, tandis que ça adonne mal dépend de la situation et des projets concernés. ' +
          'Il faut observer le contexte avant d’interpréter une expression. ' +
          'Les formes familières sont particulièrement importantes pour comprendre les conversations, les entrevues et les contenus produits au Québec.'
      },
      { type: 'heading', text: '2. Exemples en contexte' },
      { type: 'paragraph', text: 'Exemple 1 — Une situation qui ne convient pas' },
      {
        type: 'paragraph',
        text: 'Ça adonne mal aujourd’hui : je dois travailler jusqu’à 22 h, alors je ne pourrai pas venir au souper.'
      },
      { type: 'paragraph', text: 'Exemple 2 — Apprendre des expressions locales' },
      {
        type: 'paragraph',
        text: 'Malik a de la misère à comprendre certaines expressions québécoises. Son collègue lui explique leur sens et l’encourage : « Lâche pas la patate ! »'
      },
      { type: 'heading', text: '3. Les pièges et les erreurs fréquentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux traductions littérales',
        text:
          'Ne traduisez pas les expressions mot à mot. Dans attacher sa tuque, l’idée n’est pas littéralement d’attacher un bonnet. ' +
          'Dans être dans les patates, il n’est pas nécessairement question de pommes de terre. ' +
          'De même, être tanné ne signifie pas simplement être bronzé ou avoir un bronzage. ' +
          'Ne confondez pas non plus jaser avec une conversation nécessairement sérieuse ou formelle. ' +
          'Ces expressions dépendent du contexte et appartiennent généralement au registre informel.'
      },
      { type: 'heading', text: '4. Conseils pour le TEF Canada et le TCF Canada' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Reconnaître et adapter le registre',
        text:
          'Dans les épreuves de compréhension orale et écrite, entraînez-vous à reconnaître les expressions régionales même lorsque leur sens n’est pas littéral. ' +
          'En expression orale et écrite, privilégiez les formulations neutres lorsque vous devez développer une argumentation formelle. ' +
          'Par exemple, remplacez j’ai de la misère à comprendre par j’ai de la difficulté à comprendre dans une situation plus formelle. ' +
          'Au TCF Canada, l’expression écrite comprend 3 exercices (60 minutes) et l’expression orale comprend 3 exercices (12 minutes, dont 2 minutes de préparation). ' +
          'Au TEF Canada, la section B de l’expression orale consiste à argumenter pour convaincre.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les trois sites consultés couvrent les dix expressions : le guide de McGill (avoir de la misère, tanné, ça adonne, tuque, patates, plate, jaser et lâche pas la patate), le lexique de l’Université de Montréal (à tantôt et bienvenue) et le guide de Québec Cité (à tantôt, bienvenue et tuque). ' +
          'Le FEI et Le français des affaires confirment le format des épreuves. ' +
          'Ne sont pas confirmés par une source : les alternatives neutres et les équivalents en France (par exemple, être à côté de la plaque), les exemples et la recommandation de privilégier les expressions neutres dans une argumentation formelle. ' +
          'Cette recommandation est une stratégie pédagogique de préparation, et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Expressions québécoises — Vivre McGill en français',
      url: 'https://vivreenfrancais.mcgill.ca/capsules-linguistiques/expressions-quebecoises/'
    },
    {
      title: 'Lexique québécois à destination des futur(e)s étudiant(e)s de l’UdeM — Université de Montréal',
      url: 'https://admission.umontreal.ca/futur-etudiant/article/lexique-quebecois-a-destination-des-futurs-etudiants-de-luniversite-de-montreal/'
    },
    {
      title: '100 expressions québécoises pratiques pour voyager au Québec — Québec Cité',
      url: 'https://www.quebec-cite.com/fr/ville-quebec/expressions-quebecoises'
    },
    {
      title: 'TCF Canada — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
