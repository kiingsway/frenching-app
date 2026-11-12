import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ce-noticias',

  pt: {
    title: 'Artigos de jornal e notícias: como compreender os faits divers',
    summary:
      'Aprenda a interpretar artigos de imprensa e notícias curtas sobre acidentes, ocorrências policiais, acontecimentos incomuns e situações do cotidiano. ' +
      'Você vai identificar os fatos principais, reconstruir a cronologia, reconhecer informações confirmadas ou hipotéticas e compreender o vocabulário jornalístico utilizado no francês canadense.',
    blocks: [
      { type: 'heading', text: '1. O que são notícias do tipo fait divers?' },
      {
        type: 'paragraph',
        text:
          'Um [[fait divers|notícia sobre um acontecimento cotidiano ou incomum]] ' +
          'é uma notícia curta sobre um acontecimento específico, geralmente relacionado a acidentes, desaparecimentos, incêndios, crimes, resgates ou situações extraordinárias. ' +
          'Esse tipo de notícia aparece frequentemente na imprensa local e regional. ' +
          'No Québec, você pode encontrar esse conteúdo em jornais como La Presse, Le Devoir e em veículos como Radio-Canada. ' +
          'Na compreensão escrita, o objetivo é entender o que aconteceu, quem esteve envolvido, onde e quando ocorreu e quais foram as consequências.'
      },
      { type: 'heading', text: '2. Estrutura e elementos de uma notícia' },
      {
        type: 'table',
        headers: ['Elemento', 'Como identificar', 'O que procurar'],
        rows: [
            [
              '[[Le titre|O título]]',
              'Apresenta o acontecimento principal de forma resumida.',
              'Identifique imediatamente o assunto da notícia.'
            ],
            [
              '[[Le lieu|O local]]',
              'Indica a cidade, o bairro ou o endereço da ocorrência.',
              'Procure nomes de cidades, ruas e regiões.'
            ],
            [
              '[[La date et l’heure|A data e o horário]]',
              'Situam o acontecimento no tempo.',
              'Observe expressões temporais e datas específicas.'
            ],
            [
              '[[Les faits|Os fatos]]',
              'Descrevem o que aconteceu e como aconteceu.',
              'Diferencie a ocorrência principal dos acontecimentos secundários.'
            ],
            [
              '[[Les témoins|As testemunhas]]',
              'Apresentam pessoas que presenciaram o acontecimento.',
              'Observe quem fornece informações e o que realmente presenciou.'
            ],
            [
              '[[Le bilan|O balanço da ocorrência]]',
              'Apresenta feridos, danos materiais, vítimas ou consequências.',
              'Procure números e informações sobre a gravidade do ocorrido.'
            ],
            [
              '[[L’enquête|A investigação]]',
              'Indica se as autoridades estão apurando o acontecimento.',
              'Verifique se a causa foi confirmada ou ainda está sendo investigada.'
            ]
        ]
      },
      { type: 'heading', text: '3. Exemplo prático de uma notícia' },
      {
        type: 'paragraph',
        text:
          'Leia o exemplo fictício abaixo, inspirado no estilo de notícias locais do Québec. ' +
          'Observe como o texto apresenta o acontecimento, a fonte das informações, as consequências e o andamento da investigação.'
      },
      {
        type: 'paragraph',
        text: '[[Une collision à Laval : trois passagers transportés à l’hôpital|Uma colisão em Laval: três passageiros levados ao hospital]]'
      },
      {
        type: 'paragraph',
        text:
          '[[LAVAL — Une automobiliste qui roulait derrière le véhicule a porté secours aux trois passagers après une collision survenue mardi matin près du boulevard des Laurentides.|LAVAL — Uma motorista que vinha atrás do veículo prestou socorro aos três passageiros após uma colisão ocorrida na manhã de terça-feira, perto do boulevard des Laurentides.]] ' +
          '[[Selon le Service de police de Laval, le véhicule aurait dérapé sur une chaussée glissante avant de heurter un lampadaire.|Segundo o Serviço de Polícia de Laval, o veículo teria derrapado em uma pista escorregadia antes de atingir um poste de iluminação.]] ' +
          '[[Les trois occupants ont été transportés à l’hôpital pour y être examinés.|Os três ocupantes foram levados ao hospital para avaliação.]] ' +
          '[[Leur état de santé n’inspire pas d’inquiétude.|O estado de saúde deles não inspira preocupação.]] ' +
          '[[Une voie a été fermée pendant près d’une heure.|Uma faixa da via ficou fechada por quase uma hora.]] ' +
          '[[Une enquête est en cours afin de déterminer les circonstances exactes de l’accident.|Uma investigação está em andamento para determinar as circunstâncias exatas do acidente.]]'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado em português', 'Função na notícia'],
        rows: [
            [
              '[[selon le Service de police|segundo o Serviço de Polícia]]',
              'Indica a origem da informação.',
              'Apresenta a fonte oficial.'
            ],
            [
              '[[une collision|uma colisão]]',
              'Acidente envolvendo veículos ou outros objetos.',
              'Identifica o acontecimento.'
            ],
            [
              '[[porter secours|prestar socorro]]',
              'Ajudar uma pessoa em perigo.',
              'Descreve uma ação de assistência.'
            ],
            [
              '[[un blessé|um ferido]]',
              'Pessoa que sofreu lesões.',
              'Indica uma consequência do acidente.'
            ],
            [
              '[[déraper|derrapar]]',
              'Perder o controle de um veículo e deslizar.',
              'Descreve uma possível causa.'
            ],
            [
              '[[une enquête est en cours|uma investigação está em andamento]]',
              'As autoridades ainda estão apurando os fatos.',
              'Indica que a ocorrência não foi totalmente esclarecida.'
            ]
        ]
      },
      { type: 'heading', text: '4. Armadilhas de interpretação e tempos verbais' },
      {
        type: 'list',
        items: [
          'O [[passé composé|passado composto]] apresenta acontecimentos concluídos: [[La voiture a heurté un poteau.|O carro atingiu um poste.]]',
          
            'O [[imparfait|pretérito imperfeito]] ' +
            'descreve o contexto, as circunstâncias ou uma situação em andamento: [[La chaussée était glissante.|A pista estava escorregadia.]]',
          
            'O [[plus-que-parfait|mais-que-perfeito composto]] ' +
            'indica algo que aconteceu antes de outro fato passado: [[Le conducteur avait quitté les lieux avant l’arrivée des policiers.|O motorista havia deixado o local antes da chegada dos policiais.]]',
          'O [[conditionnel|condicional]] pode indicar uma informação ainda não confirmada: [[Le véhicule aurait dérapé.|O veículo teria derrapado.]]',
          
            'Expressões como [[selon les témoins|segundo as testemunhas]] e [[d’après la police|de acordo com a polícia]] ' +
            'identificam a origem das informações e ajudam a distinguir relatos de fatos oficialmente confirmados.',
          
            'Expressões como [[quelques minutes plus tard|alguns minutos depois]], [[peu avant|pouco antes]] e [[le lendemain|no dia seguinte]] ' +
            'ajudam a reconstruir a sequência dos acontecimentos.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção ao verbo assister à',
        text:
          'Um erro comum para brasileiros é interpretar [[assister à|presenciar]] como [[porter secours|prestar socorro]]. ' +
          'Em uma notícia, [[Plusieurs témoins ont assisté à l’accident.|Várias testemunhas presenciaram o acidente.]] ' +
          'significa que essas pessoas viram o acontecimento, não necessariamente que ajudaram as vítimas. ' +
          'Para indicar que alguém prestou ajuda, procure expressões como [[venir en aide à quelqu’un|ajudar alguém]] ou [[porter secours|prestar socorro]].'
      },
      { type: 'heading', text: '5. Estratégia para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Reconstrua a notícia com seis perguntas',
        text:
          'Ao ler uma notícia, procure responder mentalmente: [[Qui ?|Quem?]], [[Quoi ?|O quê?]], [[Où ?|Onde?]], [[Quand ?|Quando?]], [[Comment ?|Como?]] ' +
          'e [[Pourquoi ?|Por quê?]]. A última pergunta exige atenção: nem sempre a causa do acontecimento foi confirmada. ' +
          'No TEF Canada, artigos de imprensa fazem parte da compreensão escrita. ' +
          'Leia primeiro a pergunta e as alternativas, depois o texto completo, procurando evidências para escolher a resposta. ' +
          'Não confunda uma hipótese apresentada no condicional com um fato comprovado. ' +
          'Atenção também à diferença entre compreender um [[fait divers|notícia de ocorrência]] ' +
          'na leitura e desenvolver sua continuação na seção de expressão escrita do TEF.'
      }
    ]
  },

  fr: {
    title: 'Lire des articles de presse et comprendre les faits divers',
    summary:
      'Apprenez à comprendre des articles de presse et de courtes nouvelles portant sur des accidents, des interventions policières, des événements inhabituels et des situations de la vie quotidienne. ' +
      'Vous apprendrez à repérer les faits principaux, à reconstituer la chronologie, à distinguer les informations confirmées des hypothèses et à reconnaître le vocabulaire journalistique utilisé dans la presse canadienne francophone.',
    blocks: [
      { type: 'heading', text: '1. Qu’est-ce qu’un fait divers ?' },
      {
        type: 'paragraph',
        text:
          'Un fait divers est une nouvelle courte qui rapporte un événement particulier, généralement lié à des accidents, des disparitions, des incendies, des crimes, des sauvetages ou des situations inhabituelles. ' +
          'Ce type d’article paraît fréquemment dans la presse locale et régionale. ' +
          'Au Québec, vous pouvez retrouver ces nouvelles dans des journaux comme La Presse, Le Devoir et dans des médias comme Radio-Canada. ' +
          'En compréhension écrite, l’objectif est de comprendre ce qui s’est passé, qui est impliqué, où et quand l’événement a eu lieu et quelles en sont les conséquences.'
      },
      { type: 'heading', text: '2. Structure et éléments d’un article de presse' },
      {
        type: 'table',
        headers: ['Élément', 'Comment le reconnaître', 'Informations à repérer'],
        rows: [
            [
              'Le titre',
              'Il présente brièvement l’événement principal.',
              'Identifiez immédiatement le sujet de l’article.'
            ],
            [
              'Le lieu',
              'Il indique la ville, le quartier ou l’adresse de l’événement.',
              'Repérez les noms de villes, de rues et de régions.'
            ],
            [
              'La date et l’heure',
              'Elles situent l’événement dans le temps.',
              'Observez les expressions temporelles et les dates précises.'
            ],
            [
              'Les faits',
              'Ils décrivent ce qui s’est passé et comment l’événement s’est produit.',
              'Distinguez l’événement principal des faits secondaires.'
            ],
            [
              'Les témoins',
              'Ils désignent les personnes qui ont vu l’événement.',
              'Observez qui fournit les informations et ce que cette personne a réellement constaté.'
            ],
            [
              'Le bilan',
              'Il présente les blessés, les dégâts matériels, les victimes ou les conséquences.',
              'Repérez les chiffres et les informations sur la gravité de l’événement.'
            ],
            [
              'L’enquête',
              'Elle indique si les autorités cherchent à établir les circonstances de l’événement.',
              'Vérifiez si la cause est confirmée ou si elle fait encore l’objet d’une enquête.'
            ]
        ]
      },
      { type: 'heading', text: '3. Exemple pratique d’un article de presse' },
      {
        type: 'paragraph',
        text:
          'Lisez l’exemple fictif ci-dessous, inspiré du style des nouvelles locales québécoises. ' +
          'Observez comment le texte présente l’événement, la source des informations, les conséquences et le déroulement de l’enquête.'
      },
      { type: 'paragraph', text: 'Une collision à Laval : trois passagers transportés à l’hôpital' },
      {
        type: 'paragraph',
        text:
          'LAVAL — Une automobiliste qui roulait derrière le véhicule a porté secours aux trois passagers après une collision survenue mardi matin près du boulevard des Laurentides. ' +
          'Selon le Service de police de Laval, le véhicule aurait dérapé sur une chaussée glissante avant de heurter un lampadaire. ' +
          'Les trois occupants ont été transportés à l’hôpital pour y être examinés. Leur état de santé n’inspire pas d’inquiétude. ' +
          'Une voie a été fermée pendant près d’une heure. Une enquête est en cours afin de déterminer les circonstances exactes de l’accident.'
      },
      {
        type: 'table',
        headers: ['Expression', 'Signification', 'Fonction dans l’article'],
        rows: [
            [
              'selon le Service de police',
              'D’après les informations communiquées par le service de police.',
              'Présente une source officielle.'
            ],
            [
              'une collision',
              'Un accident impliquant des véhicules ou d’autres objets.',
              'Identifie l’événement.'
            ],
            [
              'porter secours',
              'Aider une personne qui se trouve en danger.',
              'Décrit une action d’assistance.'
            ],
            [
              'un blessé',
              'Une personne qui a subi des blessures.',
              'Indique une conséquence de l’accident.'
            ],
            [
              'déraper',
              'Perdre le contrôle d’un véhicule et glisser.',
              'Décrit une cause possible.'
            ],
            [
              'une enquête est en cours',
              'Les autorités cherchent encore à établir les faits.',
              'Indique que l’affaire n’est pas entièrement élucidée.'
            ]
        ]
      },
      { type: 'heading', text: '4. Pièges d’interprétation et temps verbaux' },
      {
        type: 'list',
        items: [
          'Le passé composé présente des événements terminés : « La voiture a heurté un poteau. »',
          'L’imparfait décrit le contexte, les circonstances ou une situation en cours : « La chaussée était glissante. »',
          
            'Le plus-que-parfait indique un événement qui s’est produit avant un autre événement passé : « Le conducteur avait quitté les lieux avant l’arrivée des policiers. ' +
            '»',
          'Le conditionnel peut signaler une information qui n’a pas encore été confirmée : « Le véhicule aurait dérapé. »',
          'Des expressions comme « selon les témoins » et « d’après la police » indiquent la provenance des informations et permettent de distinguer les témoignages des faits officiellement confirmés.',
          'Des expressions comme « quelques minutes plus tard », « peu avant » et « le lendemain » permettent de reconstituer l’ordre des événements.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au verbe assister à',
        text:
          'Une erreur fréquente chez les lusophones consiste à confondre « assister à » et « porter secours ». ' +
          'Dans un article, « Plusieurs témoins ont assisté à l’accident. ' +
          '» signifie que ces personnes ont vu l’événement, et non qu’elles ont nécessairement aidé les victimes. ' +
          'Pour exprimer l’idée d’apporter de l’aide, cherchez plutôt des expressions comme « venir en aide à quelqu’un » ou « porter secours ».'
      },
      { type: 'heading', text: '5. Stratégie pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Reconstituez l’article à l’aide de six questions',
        text:
          'En lisant un article, essayez de répondre mentalement à six questions : Qui ? Quoi ? Où ? Quand ? Comment ? et Pourquoi ? ' +
          'Cette dernière question demande une attention particulière : la cause de l’événement n’est pas toujours confirmée. ' +
          'Au TEF Canada, les articles de presse font partie de l’épreuve de compréhension écrite. ' +
          'Lisez d’abord la question et les choix de réponse, puis le texte en entier, en cherchant des éléments qui justifient votre réponse. ' +
          'Ne confondez pas une hypothèse formulée au conditionnel avec un fait établi. ' +
          'Faites également la différence entre comprendre un fait divers en lecture et en rédiger la suite dans la section d’expression écrite du TEF.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Se préparer à l’épreuve de compréhension écrite du TEF – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-de-comprehension-ecrite-du-tef/'
    },
    {
      title: 'Faits divers – Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8402909/faits-divers'
    },
    {
      title: 'Le fait divers : préparer la section A de l’expression écrite du TEF – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/le-fait-divers-preparer-la-section-a-de-lexpression-ecrite-du-tef/'
    },
    {
      title: 'TCF Canada – France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    }
  ]
}

export default content
