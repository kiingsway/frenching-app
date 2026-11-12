import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-tef-a',

  pt: {
    title: 'TEF – Seção A: como continuar uma notícia em estilo jornalístico',
    summary:
      'Aprenda a dar continuidade a uma notícia curta, mantendo a coerência dos acontecimentos e utilizando uma linguagem jornalística clara e objetiva. ' +
      'Você vai desenvolver narrativas cronológicas, acrescentar informações novas, utilizar corretamente os tempos verbais e construir um desfecho convincente dentro das exigências da Seção A do TEF Canada.',
    blocks: [
      { type: 'heading', text: '1. O que a tarefa exige?' },
      {
        type: 'paragraph',
        text:
          'Na Seção A da expressão escrita do TEF Canada, você deve escrever a continuação do início de um artigo, geralmente um [[fait divers|notícia curta sobre um acontecimento real ou incomum]]. ' +
          'A tarefa tem duração de 25 minutos e exige pelo menos 80 palavras. ' +
          'Você precisa apresentar uma continuação coerente e pertinente, acrescentando detalhes, explicações e informações novas que não estejam no enunciado. ' +
          'A avaliação considera a relevância e o desenvolvimento das informações, a coerência, a coesão, a qualidade das frases, a variedade e a precisão do vocabulário, a ortografia e a pontuação.'
      },
      { type: 'heading', text: '2. Como estruturar a continuação' },
      {
        type: 'list',
        items: [
          'Leia atentamente o título e o início da notícia. O título pode indicar o acontecimento principal e sugerir como desenvolver a história.',
          'Identifique os fatos já apresentados: quem está envolvido, onde aconteceu, quando ocorreu e qual é a situação inicial.',
          'Continue a cronologia com acontecimentos novos: uma descoberta, uma intervenção, uma reação das pessoas envolvidas ou uma consequência.',
          'Acrescente informações concretas e plausíveis. Explique o que aconteceu depois, quem tomou alguma atitude e quais foram os resultados.',
          'Finalize com uma informação que dê continuidade lógica à notícia, como o estado das vítimas, os danos materiais ou o andamento de uma investigação.'
        ]
      },
      { type: 'heading', text: '3. Exemplo prático: tema e início da notícia' },
      { type: 'paragraph', text: 'Título do exemplo:' },
      {
        type: 'paragraph',
        text: '[[À Longueuil, un chauffeur évite une collision près d’une école|Em Longueuil, motorista evita uma colisão perto de uma escola]]'
      },
      {
        type: 'paragraph',
        text:
          '[[Un chauffeur d’autobus scolaire a évité une collision, mardi matin, près d’une école de Longueuil.|Um motorista de ônibus escolar evitou uma colisão na manhã de terça-feira, perto de uma escola de Longueuil.]] ' +
          '[[Alors qu’il transportait douze élèves, il a remarqué qu’une voiture venait de franchir un feu rouge.|Enquanto transportava doze alunos, percebeu que um carro acabara de avançar um sinal vermelho.]]'
      },
      { type: 'heading', text: '4. Exemplo de continuação possível' },
      {
        type: 'paragraph',
        text:
          '[[Il a aussitôt freiné et immobilisé l’autobus à quelques mètres du carrefour.|Ele freou imediatamente e imobilizou o ônibus a poucos metros do cruzamento.]] ' +
          '[[La voiture a traversé l’intersection avant de heurter un lampadaire.|O carro atravessou a interseção antes de atingir um poste de iluminação.]] ' +
          '[[Le chauffeur a vérifié que les douze élèves étaient indemnes, puis il a appelé les services d’urgence.|O motorista verificou se os doze alunos estavam ilesos e, em seguida, chamou os serviços de emergência.]] ' +
          '[[Le conducteur de l’automobile, qui était seul à bord, a été légèrement blessé et transporté à l’hôpital par précaution.|O condutor do automóvel, que estava sozinho no veículo, ficou levemente ferido e foi levado ao hospital por precaução.]] ' +
          '[[Les policiers ont sécurisé les lieux et recueilli les témoignages de plusieurs personnes.|Os policiais isolaram o local e recolheram os depoimentos de várias pessoas.]] ' +
          '[[Les élèves sont arrivés à l’école avec une dizaine de minutes de retard.|Os alunos chegaram à escola com cerca de dez minutos de atraso.]] ' +
          '[[Une enquête a été ouverte afin de déterminer pourquoi le feu rouge n’a pas été respecté.|Uma investigação foi aberta para determinar por que o sinal vermelho não foi respeitado.]]'
      },
      { type: 'heading', text: '5. Tempos verbais e expressões do estilo jornalístico' },
      {
        type: 'table',
        headers: ['Recurso em francês', 'Exemplo', 'Como utilizar'],
        rows: [
            [
              '[[Passé composé|Passado composto]]',
              '[[Le chauffeur a freiné.|O motorista freou.]]',
              'Apresenta os acontecimentos principais e as ações concluídas.'
            ],
            [
              '[[Imparfait|Pretérito imperfeito]]',
              '[[La chaussée était glissante.|A pista estava escorregadia.]]',
              'Descreve o cenário, as circunstâncias e as situações em andamento.'
            ],
            [
              '[[Plus-que-parfait|Mais-que-perfeito composto]]',
              '[[La voiture avait franchi le feu rouge.|O carro havia avançado o sinal vermelho.]]',
              'Apresenta um acontecimento anterior a outro momento passado.'
            ],
            [
              '[[Conditionnel journalistique|Condicional jornalístico]]',
              '[[Le conducteur aurait perdu le contrôle.|O motorista teria perdido o controle.]]',
              'Pode indicar uma informação relatada ou ainda não confirmada. Utilize de acordo com a fonte e o contexto.'
            ],
            [
              '[[Selon les premiers témoins|Segundo as primeiras testemunhas]]',
              '[[Selon les premiers témoins, la voiture roulait trop vite.|Segundo as primeiras testemunhas, o carro andava rápido demais.]]',
              'Identifica a origem de uma informação e ajuda a distinguir depoimentos de fatos oficialmente confirmados.'
            ],
            [
              '[[Une enquête est en cours|Uma investigação está em andamento]]',
              '[[Une enquête est en cours pour établir les causes de l’accident.|Uma investigação está em andamento para esclarecer as causas do acidente.]]',
              'Indica que as autoridades continuam investigando. Serve para apresentar o estado atual da ocorrência.'
            ]
        ]
      },
      { type: 'heading', text: '6. Conectores para organizar a narrativa' },
      {
        type: 'table',
        headers: ['Função', 'Expressões em francês', 'Como utilizar'],
        rows: [
            [
              'Sequência',
              '[[Tout d’abord, ensuite, puis|Primeiramente, em seguida, depois]]',
              'Organizar os acontecimentos em ordem cronológica.'
            ],
            [
              'Tempo',
              '[[Quelques minutes plus tard, peu après, le lendemain|Alguns minutos depois, pouco depois, no dia seguinte]]',
              'Indicar quando os acontecimentos ocorreram.'
            ],
            [
              'Consequência',
              '[[Par conséquent, ainsi, de ce fait|Consequentemente, assim, por esse motivo]]',
              'Apresentar os resultados de uma ação.'
            ],
            [
              'Oposição',
              '[[Cependant, toutefois, malgré cela|Entretanto, todavia, apesar disso]]',
              'Introduzir uma circunstância contrária.'
            ],
            [
              'Causa',
              '[[En raison de, à la suite de, à cause de|Devido a, na sequência de, por causa de]]',
              'Explicar o motivo de um acontecimento.'
            ],
            [
              'Conclusão',
              '[[Finalement, au terme de l’intervention, pour l’instant|Finalmente, ao término da intervenção, por enquanto]]',
              'Encerrar a sequência ou indicar a situação final.'
            ]
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado para não misturar passado e presente',
        text:
          'Uma notícia sobre um fato passado é contada no passado. Use o [[passé composé|passado composto]] ' +
          'para as ações que aconteceram e o [[imparfait|pretérito imperfeito]] para o cenário e as circunstâncias. ' +
          'Evite passar do passado para o presente no meio do texto, o que prejudica a coerência: [[Il a freiné, puis il appelle les secours.|Ele freou e depois chama o socorro.]] ' +
          'mistura os dois tempos. O correto é [[Il a freiné, puis il a appelé les secours.|Ele freou e depois chamou o socorro.]]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que o avaliador espera na Seção A',
        text:
          'O requisito oficial é escrever pelo menos 80 palavras em 25 minutos. ' +
          'Não copie o início da notícia, não o resuma e não se limite a reformular o que já foi apresentado. ' +
          'Acrescente acontecimentos e informações novas, mantendo a relação com o título e o enunciado. ' +
          'A qualidade da continuação depende da pertinência dos detalhes, da organização cronológica, da coesão entre as frases e da correção linguística. ' +
          'Antes de terminar, verifique se a continuação realmente desenvolve a notícia e possui um desfecho coerente.'
      }
    ]
  },

  fr: {
    title: 'TEF – Section A : poursuivre un fait divers dans un style journalistique',
    summary:
      'Apprenez à poursuivre le début d’un article en respectant la cohérence des événements et en utilisant un style journalistique clair et objectif. ' +
      'Vous développerez votre capacité à raconter des événements dans l’ordre chronologique, à ajouter de nouvelles informations, à employer correctement les temps verbaux et à construire une conclusion pertinente selon les exigences de la section A du TEF Canada.',
    blocks: [
      { type: 'heading', text: '1. Que demande cette activité ?' },
      {
        type: 'paragraph',
        text:
          'Dans la section A de l’épreuve d’expression écrite du TEF Canada, vous devez écrire la suite du début d’un article, généralement un fait divers. ' +
          'Vous disposez de 25 minutes et votre texte doit compter au moins 80 mots. ' +
          'Vous devez proposer une continuation cohérente et pertinente en ajoutant des détails, des explications et des informations nouvelles qui ne figurent pas dans l’énoncé. ' +
          'L’évaluation tient compte de la pertinence et du développement des informations, de la cohérence, de la cohésion, de la qualité des phrases, de la variété et de la précision du vocabulaire, de l’orthographe et de la ponctuation.'
      },
      { type: 'heading', text: '2. Comment structurer la suite de l’article' },
      {
        type: 'list',
        items: [
          'Lisez attentivement le titre et le début de l’article. Le titre peut indiquer l’événement principal et suggérer une direction pour la suite.',
          'Identifiez les faits déjà présentés : les personnes concernées, le lieu, le moment et la situation initiale.',
          'Poursuivez la chronologie avec de nouveaux événements : une découverte, une intervention, une réaction des personnes concernées ou une conséquence.',
          'Ajoutez des informations concrètes et plausibles. Expliquez ce qui s’est passé ensuite, qui a agi et quels ont été les résultats.',
          'Terminez par une information qui donne une suite logique à l’article, comme l’état des victimes, les dégâts matériels ou l’avancement d’une enquête.'
        ]
      },
      { type: 'heading', text: '3. Exemple pratique : sujet et début de l’article' },
      { type: 'paragraph', text: 'Titre de l’exemple :' },
      { type: 'paragraph', text: 'À Longueuil, un chauffeur évite une collision près d’une école' },
      {
        type: 'paragraph',
        text:
          'Un chauffeur d’autobus scolaire a évité une collision, mardi matin, près d’une école de Longueuil. ' +
          'Alors qu’il transportait douze élèves, il a remarqué qu’une voiture venait de franchir un feu rouge.'
      },
      { type: 'heading', text: '4. Exemple de continuation possible' },
      {
        type: 'paragraph',
        text:
          'Il a aussitôt freiné et immobilisé l’autobus à quelques mètres du carrefour. La voiture a traversé l’intersection avant de heurter un lampadaire. ' +
          'Le chauffeur a vérifié que les douze élèves étaient indemnes, puis il a appelé les services d’urgence. ' +
          'Le conducteur de l’automobile, qui était seul à bord, a été légèrement blessé et transporté à l’hôpital par précaution. ' +
          'Les policiers ont sécurisé les lieux et recueilli les témoignages de plusieurs personnes. ' +
          'Les élèves sont arrivés à l’école avec une dizaine de minutes de retard. ' +
          'Une enquête a été ouverte afin de déterminer pourquoi le feu rouge n’a pas été respecté.'
      },
      { type: 'heading', text: '5. Les temps verbaux et les expressions journalistiques' },
      {
        type: 'table',
        headers: ['Ressource linguistique', 'Exemple', 'Comment l’utiliser'],
        rows: [
            [
              'Passé composé',
              'Le chauffeur a freiné.',
              'Présenter les événements principaux et les actions terminées.'
            ],
            [
              'Imparfait',
              'La chaussée était glissante.',
              'Décrire le décor, les circonstances et les situations en cours.'
            ],
            [
              'Plus-que-parfait',
              'La voiture avait franchi le feu rouge.',
              'Présenter un événement antérieur à un autre moment du passé.'
            ],
            [
              'Conditionnel journalistique',
              'Le conducteur aurait perdu le contrôle.',
              'Il peut signaler une information rapportée ou non confirmée. Son utilisation dépend de la source et du contexte.'
            ],
            [
              'Selon les premiers témoins',
              'Selon les premiers témoins, la voiture roulait trop vite.',
              'Identifier la provenance d’une information et distinguer les témoignages des faits officiellement confirmés.'
            ],
            [
              'Une enquête est en cours',
              'Une enquête est en cours pour établir les causes de l’accident.',
              'Indiquer que les autorités poursuivent leurs recherches et présenter l’état actuel de l’intervention.'
            ]
        ]
      },
      { type: 'heading', text: '6. Les connecteurs pour organiser le récit' },
      {
        type: 'table',
        headers: ['Fonction', 'Expressions', 'Utilisation'],
        rows: [
            [
              'Ordre chronologique',
              'Tout d’abord, ensuite, puis',
              'Organiser les événements dans l’ordre où ils se produisent.'
            ],
            [
              'Temps',
              'Quelques minutes plus tard, peu après, le lendemain',
              'Indiquer le moment où les événements ont eu lieu.'
            ],
            [
              'Conséquence',
              'Par conséquent, ainsi, de ce fait',
              'Présenter les résultats d’une action.'
            ],
            [
              'Opposition',
              'Cependant, toutefois, malgré cela',
              'Introduire une circonstance contraire.'
            ],
            [
              'Cause',
              'En raison de, à la suite de, à cause de',
              'Expliquer la raison d’un événement.'
            ],
            [
              'Conclusion',
              'Finalement, au terme de l’intervention, pour l’instant',
              'Terminer la séquence ou présenter la situation finale.'
            ]
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à ne pas mélanger le passé et le présent',
        text:
          'Un article sur un fait passé est raconté au passé. ' +
          'Employez le passé composé pour les actions qui ont eu lieu et l’imparfait pour le décor et les circonstances. ' +
          'Évitez de passer du passé au présent au milieu du texte, ce qui nuit à la cohérence : « Il a freiné, puis il appelle les secours. » mélange les deux temps. ' +
          'La forme correcte est « Il a freiné, puis il a appelé les secours. »'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que le correcteur attend dans la section A',
        text:
          'La consigne officielle exige au moins 80 mots en 25 minutes. ' +
          'Ne recopiez pas le début de l’article, ne le résumez pas et ne vous contentez pas de le reformuler. ' +
          'Ajoutez des événements et des informations nouvelles en respectant le lien avec le titre et l’énoncé. ' +
          'La qualité de votre continuation dépend de la pertinence des détails, de l’organisation chronologique, de la cohésion entre les phrases et de la correction linguistique. ' +
          'Avant de terminer, vérifiez que votre texte développe réellement l’article et propose une conclusion cohérente.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le fait divers : préparer la section A de l’expression écrite du TEF – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/le-fait-divers-preparer-la-section-a-de-lexpression-ecrite-du-tef/'
    },
    {
      title: 'TEF Canada – Passer le test – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/passation/'
    }
  ]
}

export default content
