import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-negacao',

  pt: {
    title: 'Negação avançada: ne… que, ne… plus, ni… ni, personne ne, rien ne e aucun',
    summary:
      'Aprenda a expressar restrição, interrupção, ausência de pessoas ou coisas e negação de elementos em francês. ' +
      'Entenda as diferenças entre essas construções, sua posição na frase e os erros mais comuns de brasileiros ao utilizar várias formas de negação.',
    blocks: [
      { type: 'heading', text: '1. Principais construções negativas' },
      {
        type: 'paragraph',
        text:
          'Em francês padrão, a negação geralmente é formada por [[ne|partícula negativa]] antes do verbo conjugado e por outro elemento negativo depois dele. ' +
          'Cada construção acrescenta um sentido específico: limitar uma informação, indicar que algo não acontece mais, negar dois elementos ou expressar a ausência de uma pessoa ou coisa. ' +
          'Em tempos compostos, [[ne|partícula negativa]] fica antes do auxiliar, enquanto elementos como [[rien|nada]] ' +
          'aparecem geralmente entre o auxiliar e o particípio passado. ' +
          'Na escrita formal, mantenha [[ne|partícula negativa]], embora ela seja frequentemente omitida na fala informal.'
      },
      {
        type: 'table',
        headers: ['Construção', 'Significado', 'Exemplo'],
        rows: [
            [
              '[[ne… que|somente / apenas]]',
              'Restrição: limita a informação a um elemento.',
              '[[Je ne travaille que trois jours par semaine.|Só trabalho três dias por semana.]]'
            ],
            [
              '[[ne… plus|não mais / não... mais]]',
              'Indica que uma situação deixou de acontecer.',
              '[[Le centre n’accepte plus les demandes papier.|O centro não aceita mais solicitações em papel.]]'
            ],
            [
              '[[ni… ni|nem... nem]]',
              'Nega dois ou mais elementos.',
              '[[Le formulaire n’est ni long ni compliqué.|O formulário não é nem longo nem complicado.]]'
            ],
            [
              '[[personne ne|ninguém]]',
              'Indica que nenhuma pessoa realiza a ação.',
              '[[Personne ne répond au téléphone.|Ninguém atende ao telefone.]]'
            ],
            [
              '[[rien ne|nada]]',
              'Indica que nenhuma coisa realiza ou provoca a ação.',
              '[[Rien ne justifie ce retard.|Nada justifica esse atraso.]]'
            ],
            [
              '[[aucun(e) + nom + ne|nenhum(a) + substantivo + verbo negado]]',
              'Indica ausência total de algo ou de alguém.',
              '[[Aucune place n’est disponible pour ce rendez-vous.|Nenhuma vaga está disponível para este horário.]]'
            ]
        ]
      },
      { type: 'heading', text: '2. Como utilizar cada construção' },
      {
        type: 'paragraph',
        text:
          'Restrição com [[ne… que|somente]]: essa estrutura não representa uma negação completa. Ela limita a informação e equivale a somente ou apenas. ' +
          'O elemento que vem depois de [[que|que]] é justamente aquilo que está sendo restringido. ' +
          'Por exemplo, [[Je ne travaille que trois jours par semaine.|Só trabalho três dias por semana.]] ' +
          'significa que a pessoa trabalha três dias, e não que deixou de trabalhar.'
      },
      {
        type: 'paragraph',
        text:
          'Interrupção com [[ne… plus|não mais]]: utilize essa construção quando uma ação ou situação deixou de acontecer. ' +
          'Ela também pode indicar que algo acabou ou não está mais disponível. Exemplo: [[Je n’habite plus à Montréal.|Não moro mais em Montreal.]]'
      },
      {
        type: 'paragraph',
        text:
          'Negação de elementos com [[ni… ni|nem... nem]]: utilize essa estrutura para negar dois ou mais elementos da mesma categoria. O [[ni|nem]] ' +
          'normalmente se repete diante de cada elemento coordenado. ' +
          'Exemplo: [[Je ne prends ni le métro ni l’autobus le dimanche.|Não utilizo nem o metrô nem o ônibus aos domingos.]]'
      },
      {
        type: 'paragraph',
        text:
          'Ausência de pessoas e coisas com [[personne|ninguém]] e [[rien|nada]]: quando essas palavras são o sujeito, aparecem antes de [[ne|partícula negativa]] ' +
          'e do verbo. Quando funcionam como complemento, aparecem depois do verbo conjugado em tempo simples. ' +
          'Em tempo composto, [[rien|nada]] fica geralmente entre o auxiliar e o particípio passado, enquanto [[personne|ninguém]] vem depois do particípio. ' +
          'Compare: [[Personne ne connaît cette adresse.|Ninguém conhece este endereço.]] ' +
          'e [[Je ne connais personne dans ce quartier.|Não conheço ninguém neste bairro.]]; [[Rien ne fonctionne correctement.|Nada funciona corretamente.]] ' +
          'e [[Je n’ai rien reçu.|Não recebi nada.]]'
      },
      {
        type: 'paragraph',
        text:
          'Ausência com [[aucun|nenhum]]: essa palavra acompanha um substantivo e concorda com ele em gênero. ' +
          'Normalmente aparece no singular, e o verbo também fica no singular quando [[aucun|nenhum]] introduz o sujeito. ' +
          'Ele só vai ao plural, como em [[aucuns frais|nenhuma despesa]], com substantivos que existem sempre no plural. Com [[aucun|nenhum]], não se usa [[pas|não]]. ' +
          'Exemplos: [[Aucun candidat n’a été retenu.|Nenhum candidato foi selecionado.]] e [[Aucune réponse n’a été reçue.|Nenhuma resposta foi recebida.]]'
      },
      { type: 'heading', text: '3. Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[Je ne travaille que le matin pendant la fin de semaine.|Só trabalho pela manhã durante o fim de semana.]]',
          '[[Le service n’accepte plus les demandes par téléphone.|O serviço não aceita mais solicitações por telefone.]]',
          '[[Cette formation n’est ni longue ni coûteuse.|Esta formação não é nem longa nem cara.]]',
          '[[Personne ne m’a informé du changement d’horaire.|Ninguém me informou sobre a mudança de horário.]]',
          '[[Rien ne garantit l’approbation de cette demande.|Nada garante a aprovação desta solicitação.]]',
          '[[Aucun employé n’était disponible pendant la réunion.|Nenhum funcionário estava disponível durante a reunião.]]',
          '[[Je n’ai rencontré personne à la séance d’information.|Não encontrei ninguém na sessão informativa.]]',
          '[[Nous n’avons reçu aucune confirmation par courriel.|Não recebemos nenhuma confirmação por e-mail.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não acumule pas com outras palavras negativas',
        text:
          '[[Personne|ninguém]], [[rien|nada]] e [[aucun|nenhum]] já são negativos e não aceitam [[pas|não]] junto. ' +
          'Diga [[Je n’ai rien reçu.|Não recebi nada.]] e [[Il n’y avait personne.|Não havia ninguém.]] ' +
          'e evite [[Je n’ai pas rien reçu.|Não recebi nada. (errado)]] e [[Il n’y avait pas personne.|Não havia ninguém. (errado)]] ' +
          'O OQLF também desaconselha juntar [[seulement|somente]] a [[ne… que|somente]], por ser redundante: diga [[Il n’y avait que trente membres.|Havia apenas trinta membros.]] ' +
          'Outro cuidado é não interpretar [[ne… que|somente]] como uma negação total: [[Je ne travaille que trois jours par semaine.|Só trabalho três dias por semana.]] ' +
          'expressa uma restrição, não a ausência de trabalho. Já [[ne… pas que|não apenas]] nega a restrição: [[Cet auteur n’a pas écrit que des nouvelles.|Esse autor não escreveu apenas contos.]]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na compreensão escrita e oral, identifique exatamente o alcance da negação: ela afeta a frase inteira, apenas um elemento ou indica que uma situação terminou? ' +
          'Diferencie especialmente [[ne… que|somente]], que expressa restrição, de [[ne… plus|não mais]], que indica interrupção. ' +
          'Na produção escrita e oral, pratique também a posição de [[personne|ninguém]] e [[rien|nada]] nos tempos compostos, a concordância de [[aucun|nenhum]] ' +
          'e a repetição de [[ni|nem]]. Essas construções ajudam a expressar informações negativas com maior precisão e variedade.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam: a negação com [[ne|partícula negativa]] mais outro elemento, o [[ne|partícula negativa]] que tende a sumir na fala e continua indispensável na escrita; ' +
          '[[ne… que|somente]] como restrição, o pleonasmo de [[ne… seulement… que|ne… seulement… que]] e o uso de [[ne… pas… que|não apenas]]; ' +
          '[[personne|ninguém]] nunca acompanhado de [[pas|não]]; a posição de [[rien|nada]] nos tempos compostos; [[aucun|nenhum]] no singular e sem [[pas|não]]; e [[ni|nem]] coordenando elementos e sendo repetido. ' +
          'Não têm fonte: o sentido de [[ne… plus|não mais]], a posição de [[personne|ninguém]] nos tempos compostos, o erro de [[pas|não]] com [[rien|nada]], os exemplos e os conselhos para a prova. ' +
          'Esses pontos são material didático, não regra oficial. As páginas consultadas não indicam frequência ou exigência dessas construções no TEF Canada ou no TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'La négation avancée : ne… que, ne… plus, ni… ni, personne ne, rien ne et aucun',
    summary:
      'Apprenez à exprimer la restriction, la cessation d’une action, l’absence de personnes ou de choses et la négation de plusieurs éléments en français. ' +
      'Comprenez les différences entre ces constructions, leur position dans la phrase et les erreurs fréquentes chez les apprenants lusophones.',
    blocks: [
      { type: 'heading', text: '1. Les principales constructions négatives' },
      {
        type: 'paragraph',
        text:
          'En français standard, la négation se construit généralement avec ne devant le verbe conjugué et un autre élément négatif après celui-ci. ' +
          'Chaque construction apporte une nuance particulière : limiter une information, indiquer qu’une situation ne se produit plus, nier plusieurs éléments ou exprimer l’absence d’une personne ou d’une chose. ' +
          'Aux temps composés, ne se place avant l’auxiliaire, tandis que des éléments comme rien apparaissent généralement entre l’auxiliaire et le participe passé. ' +
          'À l’écrit soigné, conservez ne, même s’il est fréquemment omis dans la langue orale familière.'
      },
      {
        type: 'table',
        headers: ['Construction', 'Signification', 'Exemple'],
        rows: [
            [
              'ne… que',
              'Restriction : limite l’information à un élément.',
              'Je ne travaille que trois jours par semaine.'
            ],
            [
              'ne… plus',
              'Indique qu’une situation a cessé de se produire.',
              'Le centre n’accepte plus les demandes papier.'
            ],
            [
              'ni… ni',
              'Nier deux éléments ou davantage.',
              'Le formulaire n’est ni long ni compliqué.'
            ],
            [
              'personne ne',
              'Indique qu’aucune personne n’effectue l’action.',
              'Personne ne répond au téléphone.'
            ],
            [
              'rien ne',
              'Indique qu’aucune chose n’effectue ou ne provoque l’action.',
              'Rien ne justifie ce retard.'
            ],
            [
              'aucun(e) + nom + ne',
              'Indique l’absence totale de quelque chose ou de quelqu’un.',
              'Aucune place n’est disponible pour ce rendez-vous.'
            ]
        ]
      },
      { type: 'heading', text: '2. Comment utiliser chaque construction' },
      {
        type: 'paragraph',
        text:
          'Restriction avec ne… que : cette structure n’exprime pas une négation complète. Elle limite l’information et signifie seulement ou uniquement. ' +
          'L’élément qui suit que est précisément celui qui fait l’objet de la restriction. ' +
          'Par exemple, « Je ne travaille que trois jours par semaine » signifie que la personne travaille trois jours, et non qu’elle a cessé de travailler.'
      },
      {
        type: 'paragraph',
        text:
          'Cessation avec ne… plus : utilisez cette construction lorsqu’une action ou une situation a cessé de se produire. ' +
          'Elle peut également indiquer que quelque chose n’est plus disponible. Exemple : « Je n’habite plus à Montréal. »'
      },
      {
        type: 'paragraph',
        text:
          'Négation de plusieurs éléments avec ni… ni : utilisez cette construction pour nier deux éléments ou davantage appartenant à une même catégorie. ' +
          'Ni est généralement répété devant chaque élément coordonné. Exemple : « Je ne prends ni le métro ni l’autobus le dimanche. »'
      },
      {
        type: 'paragraph',
        text:
          'Absence de personnes et de choses avec personne et rien : lorsque ces mots sont sujets, ils apparaissent avant ne et le verbe. ' +
          'Lorsqu’ils sont compléments, ils apparaissent après le verbe conjugué à un temps simple. ' +
          'Aux temps composés, rien se place généralement entre l’auxiliaire et le participe passé, tandis que personne se place après le participe. ' +
          'Comparez : « Personne ne connaît cette adresse » et « Je ne connais personne dans ce quartier » ; « Rien ne fonctionne correctement » et « Je n’ai rien reçu ».'
      },
      {
        type: 'paragraph',
        text:
          'Absence avec aucun : ce mot accompagne un nom et s’accorde avec celui-ci en genre. ' +
          'Il s’emploie généralement au singulier, et le verbe reste également au singulier lorsque aucun introduit le sujet. ' +
          'Il ne se met au pluriel, comme dans aucuns frais, qu’avec des noms toujours au pluriel. Avec aucun, on n’emploie pas pas. ' +
          'Exemples : « Aucun candidat n’a été retenu » et « Aucune réponse n’a été reçue ».'
      },
      { type: 'heading', text: '3. Exemples en contexte' },
      {
        type: 'list',
        items: [
          'Je ne travaille que le matin pendant la fin de semaine.',
          'Le service n’accepte plus les demandes par téléphone.',
          'Cette formation n’est ni longue ni coûteuse.',
          'Personne ne m’a informé du changement d’horaire.',
          'Rien ne garantit l’approbation de cette demande.',
          'Aucun employé n’était disponible pendant la réunion.',
          'Je n’ai rencontré personne à la séance d’information.',
          'Nous n’avons reçu aucune confirmation par courriel.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne cumulez pas pas avec d’autres mots négatifs',
        text:
          'Personne, rien et aucun sont déjà négatifs et n’acceptent pas pas. ' +
          'Dites « Je n’ai rien reçu » et « Il n’y avait personne », et évitez « Je n’ai pas rien reçu » et « Il n’y avait pas personne ». ' +
          'L’OQLF déconseille aussi d’associer seulement à ne… que, car c’est redondant : dites « Il n’y avait que trente membres ». ' +
          'Faites également attention à ne pas interpréter ne… que comme une négation totale : « Je ne travaille que trois jours par semaine » exprime une restriction, et non une absence de travail. ' +
          'En revanche, ne… pas que nie la restriction : « Cet auteur n’a pas écrit que des nouvelles ».'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'En compréhension écrite et orale, identifiez précisément la portée de la négation : concerne-t-elle toute la phrase, un seul élément ou indique-t-elle qu’une situation a pris fin ? ' +
          'Distinguez particulièrement ne… que, qui exprime une restriction, de ne… plus, qui indique une cessation. ' +
          'Dans vos productions écrites et orales, entraînez-vous également à placer personne et rien aux temps composés, à accorder aucun et à répéter ni. ' +
          'Ces constructions permettent d’exprimer des informations négatives avec davantage de précision et de variété.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment : la négation avec ne et un autre élément, le ne qui tend à disparaître à l’oral et reste indispensable à l’écrit ; ' +
          'ne… que comme restriction, le pléonasme de ne… seulement… que et l’emploi de ne… pas… que ; ' +
          'personne jamais accompagné de pas ; la place de rien aux temps composés ; aucun au singulier et sans pas ; et ni qui coordonne des éléments et se répète. ' +
          'Ne sont pas sourcés : le sens de ne… plus, la place de personne aux temps composés, l’erreur de pas avec rien, les exemples et les conseils pour l’examen. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle. Les pages consultées n’indiquent ni fréquence ni exigence de ces constructions au TEF Canada ou au TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Apprivoiser la négation — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23905/la-syntaxe/la-negation-et-la-restriction/generalites-sur-la-negation'
    },
    {
      title: 'Constructions avec ne… que — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22466/la-syntaxe/la-negation-et-la-restriction/constructions-avec-ne-que'
    },
    {
      title: 'Le pronom indéfini personne — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22893/la-syntaxe/la-negation-et-la-restriction/le-pronom-indefini-personne'
    },
    {
      title: 'Le pronom indéfini rien — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23886/la-syntaxe/la-negation-et-la-restriction/le-pronom-indefini-rien'
    },
    {
      title: 'Accord du déterminant indéfini aucun — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21440/la-grammaire/les-determinants/determinants-indefinis/accord-du-determinant-indefini-aucun'
    },
    {
      title: 'Ni et n’y : distinguer ces homophones — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24451/la-grammaire/les-homophones-grammaticaux/les-homophones-ni-et-ny'
    }
  ]
}

export default content
