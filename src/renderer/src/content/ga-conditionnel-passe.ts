import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-conditionnel-passe',

  pt: {
    title: 'Condicional passado e hipóteses irreais no passado',
    summary:
      'Aprenda a formar e utilizar o condicional passado para expressar situações que não aconteceram, arrependimentos e consequências hipotéticas. ' +
      'Domine também a estrutura si + plus-que-parfait, entendendo quando utilizar o condicional passado ou o presente na oração principal.',
    blocks: [
      { type: 'heading', text: 'Formação do condicional passado' },
      {
        type: 'paragraph',
        text:
          'O [[conditionnel passé|condicional passado]] é um tempo composto formado pelo auxiliar [[avoir|ter]] ou [[être|ser / estar]] ' +
          'conjugado no [[conditionnel présent|condicional presente]], seguido do particípio passado do verbo principal. ' +
          'Ele expressa uma ação que teria acontecido, mas não aconteceu. Já o [[plus-que-parfait|pretérito mais-que-perfeito]] ' +
          'é formado pelo auxiliar no [[imparfait|imperfeito]], seguido do particípio passado, e geralmente aparece na oração introduzida por [[si|se]] ' +
          'quando a hipótese se refere a uma condição não realizada no passado.'
      },
      {
        type: 'table',
        headers: ['Construção', 'Exemplo em francês', 'Explicação'],
        rows: [
            [
              'Com avoir',
              '[[j’aurais terminé|eu teria terminado]]',
              'Auxiliar avoir no condicional presente + particípio.'
            ],
            [
              'Com être',
              '[[elle serait arrivée|ela teria chegado]]',
              'Auxiliar être no condicional presente + particípio.'
            ],
            [
              'Pretérito mais-que-perfeito com avoir',
              '[[j’avais terminé|eu tinha terminado]]',
              'Auxiliar avoir no imperfeito + particípio.'
            ],
            [
              'Pretérito mais-que-perfeito com être',
              '[[elle était arrivée|ela tinha chegado]]',
              'Auxiliar être no imperfeito + particípio.'
            ]
        ]
      },
      { type: 'heading', text: 'A estrutura si + plus-que-parfait' },
      {
        type: 'table',
        headers: ['Estrutura', 'Significado', 'Exemplo'],
        rows: [
            [
              '[[Si + présent → futur simple|Se + presente → futuro simples]]',
              'Condição possível ou aberta.',
              '[[Si j’ai le temps, je viendrai.|Se eu tiver tempo, virei.]]'
            ],
            [
              '[[Si + imparfait → conditionnel présent|Se + imperfeito → condicional presente]]',
              'Hipótese sobre o presente ou o futuro.',
              '[[Si j’avais plus de temps, je voyagerais davantage.|Se eu tivesse mais tempo, viajaria mais.]]'
            ],
            [
              '[[Si + plus-que-parfait → conditionnel passé|Se + mais-que-perfeito → condicional passado]]',
              'Condição passada não realizada e sua consequência também não realizada.',
              '[[Si j’avais étudié, j’aurais réussi.|Se eu tivesse estudado, teria passado.]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'A estrutura [[si + plus-que-parfait|se + mais-que-perfeito]] seguida do [[conditionnel passé|condicional passado]] ' +
          'é utilizada para imaginar um resultado diferente daquele que realmente aconteceu. A condição não foi cumprida, e a consequência também não se realizou. ' +
          'Existe ainda uma construção mista: quando a condição pertence ao passado, mas sua consequência diz respeito ao presente, pode-se utilizar o [[conditionnel présent|condicional presente]] ' +
          'na oração principal. ' +
          'Exemplo: [[Si j’avais économisé davantage, je pourrais acheter une voiture aujourd’hui.|Se eu tivesse economizado mais, poderia comprar um carro hoje.]] ' +
          'Na língua literária, o OQLF registra que o [[plus-que-parfait du subjonctif|mais-que-perfeito do subjuntivo]] pode substituir os dois tempos: [[Si j’eusse compris ce qu’elle voulait dire, j’eusse réagi tout autrement.|Se eu tivesse compreendido o que ela queria dizer, teria reagido de modo bem diferente.]] Vale reconhecê-lo na leitura, mas na fala e na escrita corrente use a construção com o indicativo.'
      },
      {
        type: 'paragraph',
        text:
          '[[Si la municipalité avait réparé la conduite plus tôt, les résidents n’auraient pas subi cette interruption d’eau.|Se a prefeitura tivesse consertado a tubulação mais cedo, os moradores não teriam sofrido essa interrupção no abastecimento de água.]] ' +
          '[[Si nous avions vérifié les horaires avant de partir, nous aurions évité d’attendre longtemps à l’arrêt d’autobus.|Se tivéssemos verificado os horários antes de sair, teríamos evitado esperar muito tempo no ponto de ônibus.]] ' +
          '[[Si j’avais su que le rendez-vous avait été annulé, je n’aurais pas fait le trajet jusqu’au centre-ville.|Se eu tivesse sabido que o compromisso tinha sido cancelado, não teria feito o trajeto até o centro da cidade.]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Nunca use o condicional depois de si para expressar uma condição',
        text:
          'Um erro frequente, apontado pelo OQLF, é usar o condicional depois de [[si|se]] quando ele expressa uma condição. ' +
          'Não escreva [[Si j’aurais su, j’aurais accepté.|Se eu tivesse sabido, teria aceitado. (errado)]] ' +
          'A forma correta é [[Si j’avais su, j’aurais accepté.|Se eu tivesse sabido, teria aceitado.]] Quando [[si|se]] ' +
          'introduz uma condição, utilize o [[plus-que-parfait|mais-que-perfeito]] na oração condicional e o [[conditionnel passé|condicional passado]] na consequência. ' +
          'Outro cuidado: o particípio passado concorda com o sujeito quando o auxiliar é [[être|ser / estar]]; com [[avoir|ter]], concorda com o complemento direto quando ele vem antes do verbo.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Use hipóteses para desenvolver argumentos mais complexos',
        text:
          'No TCF Canada, a expressão escrita tem 3 exercícios (60 minutos) e a expressão oral tem 3 exercícios (12 minutos, dos quais 2 de preparação). ' +
          'No TEF Canada, a expressão escrita e a expressão oral também são provas obrigatórias. ' +
          'O condicional passado permite discutir decisões anteriores, apresentar arrependimentos e imaginar resultados alternativos. ' +
          'Treine estruturas como [[Si le gouvernement avait investi davantage, la situation aurait été différente.|Se o governo tivesse investido mais, a situação teria sido diferente.]] ' +
          'e [[Nous aurions pu éviter ce problème si nous avions mieux planifié le projet.|Poderíamos ter evitado esse problema se tivéssemos planejado melhor o projeto.]] ' +
          'Preste atenção à sequência dos tempos verbais e à coerência entre a condição e sua consequência.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam a formação do [[conditionnel passé|condicional passado]], o [[plus-que-parfait|mais-que-perfeito]] na condição com o condicional passado na consequência, o condicional presente quando a consequência é possível, a variante literária com o [[plus-que-parfait du subjonctif|mais-que-perfeito do subjuntivo]], a regra de que a condição não leva condicional depois de [[si|se]] e a concordância do particípio. ' +
          'O FEI e o Le français des affaires confirmam as provas de expressão escrita e oral. ' +
          'Não têm fonte: os exemplos, a sugestão de usar hipóteses para argumentar e a dica de treino. ' +
          'Essa dica é conselho de preparação, não regra oficial nem exigência das provas.'
      }
    ]
  },

  fr: {
    title: 'Le conditionnel passé et les hypothèses irréelles dans le passé',
    summary:
      'Apprenez à former et à utiliser le conditionnel passé pour exprimer des situations qui ne se sont pas produites, des regrets et des conséquences hypothétiques. ' +
      'Maîtrisez également la structure si + plus-que-parfait et comprenez quand employer le conditionnel passé ou le présent dans la proposition principale.',
    blocks: [
      { type: 'heading', text: 'Formation du conditionnel passé' },
      {
        type: 'paragraph',
        text:
          'Le conditionnel passé est un temps composé formé de l’auxiliaire avoir ou être conjugué au conditionnel présent, suivi du participe passé du verbe principal. ' +
          'Il exprime une action qui aurait eu lieu, mais qui ne s’est pas réalisée. ' +
          'Le plus-que-parfait, quant à lui, est formé de l’auxiliaire à l’imparfait, suivi du participe passé, et apparaît généralement dans la proposition introduite par si lorsque l’hypothèse porte sur une condition non réalisée dans le passé.'
      },
      {
        type: 'table',
        headers: ['Construction', 'Exemple', 'Explication'],
        rows: [
            [
              'Avec avoir',
              'j’aurais terminé',
              'Auxiliaire avoir au conditionnel présent + participe passé.'
            ],
            [
              'Avec être',
              'elle serait arrivée',
              'Auxiliaire être au conditionnel présent + participe passé.'
            ],
            [
              'Plus-que-parfait avec avoir',
              'j’avais terminé',
              'Auxiliaire avoir à l’imparfait + participe passé.'
            ],
            [
              'Plus-que-parfait avec être',
              'elle était arrivée',
              'Auxiliaire être à l’imparfait + participe passé.'
            ]
        ]
      },
      { type: 'heading', text: 'La structure si + plus-que-parfait' },
      {
        type: 'table',
        headers: ['Structure', 'Signification', 'Exemple'],
        rows: [
            [
              'Si + présent → futur simple',
              'Condition possible ou ouverte.',
              'Si j’ai le temps, je viendrai.'
            ],
            [
              'Si + imparfait → conditionnel présent',
              'Hypothèse portant sur le présent ou le futur.',
              'Si j’avais plus de temps, je voyagerais davantage.'
            ],
            [
              'Si + plus-que-parfait → conditionnel passé',
              'Condition passée non réalisée et conséquence également non réalisée.',
              'Si j’avais étudié, j’aurais réussi.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'La structure si + plus-que-parfait suivie du conditionnel passé permet d’imaginer un résultat différent de celui qui s’est réellement produit. ' +
          'La condition n’a pas été remplie et la conséquence ne s’est pas non plus réalisée. ' +
          'Il existe également une construction mixte : lorsque la condition appartient au passé, mais que sa conséquence concerne le présent, on peut employer le conditionnel présent dans la proposition principale. ' +
          'Exemple : Si j’avais économisé davantage, je pourrais acheter une voiture aujourd’hui. ' +
          'Dans la langue littéraire, l’OQLF signale que le plus-que-parfait du subjonctif peut remplacer les deux temps : Si j’eusse compris ce qu’elle voulait dire, j’eusse réagi tout autrement. Il faut savoir le reconnaître à la lecture, mais à l’oral et à l’écrit courant, on emploie la construction avec l’indicatif.'
      },
      {
        type: 'paragraph',
        text:
          'Si la municipalité avait réparé la conduite plus tôt, les résidents n’auraient pas subi cette interruption d’eau. ' +
          'Si nous avions vérifié les horaires avant de partir, nous aurions évité d’attendre longtemps à l’arrêt d’autobus. ' +
          'Si j’avais su que le rendez-vous avait été annulé, je n’aurais pas fait le trajet jusqu’au centre-ville.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'N’utilisez jamais le conditionnel après si pour exprimer une condition',
        text:
          'Une erreur fréquente, signalée par l’OQLF, consiste à employer le conditionnel après si lorsqu’il exprime une condition. ' +
          'N’écrivez pas « Si j’aurais su, j’aurais accepté ». ' +
          'La forme correcte est « Si j’avais su, j’aurais accepté ». ' +
          'Lorsque si introduit une condition, utilisez le plus-que-parfait dans la proposition conditionnelle et le conditionnel passé pour exprimer la conséquence. ' +
          'Autre précaution : le participe passé s’accorde avec le sujet lorsque l’auxiliaire est être ; avec avoir, il s’accorde avec le complément direct lorsqu’il est placé avant le verbe.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Utilisez les hypothèses pour développer des arguments plus complexes',
        text:
          'Au TCF Canada, l’expression écrite comprend 3 exercices (60 minutes) et l’expression orale comprend 3 exercices (12 minutes, dont 2 minutes de préparation). ' +
          'Au TEF Canada, l’expression écrite et l’expression orale font aussi partie des épreuves obligatoires. ' +
          'Le conditionnel passé permet de discuter de décisions antérieures, d’exprimer des regrets et d’imaginer des résultats différents. ' +
          'Entraînez-vous à construire des phrases comme Si le gouvernement avait investi davantage, la situation aurait été différente et Nous aurions pu éviter ce problème si nous avions mieux planifié le projet. ' +
          'Faites attention à la succession des temps verbaux et à la cohérence entre la condition et sa conséquence.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment la formation du conditionnel passé, le plus-que-parfait dans la condition avec le conditionnel passé dans la conséquence, le conditionnel présent lorsque la conséquence est possible, la variante littéraire avec le plus-que-parfait du subjonctif, la règle selon laquelle la condition ne se met pas au conditionnel après si et l’accord du participe passé. ' +
          'Le FEI et Le français des affaires confirment les épreuves d’expression écrite et orale. ' +
          'Ne sont pas sourcés : les exemples, la suggestion d’utiliser des hypothèses pour argumenter et le conseil d’entraînement. ' +
          'Ce conseil est une recommandation de préparation, et non une règle officielle ni une exigence des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Conditionnel passé et plus-que-parfait du subjonctif — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24141/la-grammaire/le-verbe/temps-grammaticaux/conditionnel/conditionnel-passe-et-plus-que-parfait-du-subjonctif'
    },
    {
      title: 'Conditionnel dans les phrases hypothétiques — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24140/la-grammaire/le-verbe/temps-grammaticaux/conditionnel/conditionnel-dans-les-phrases-hypothetiques'
    },
    {
      title: 'Formes du conditionnel — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24137/la-grammaire/le-verbe/conjugaison/formes-du-conditionnel'
    },
    {
      title: 'Accord du participe passé employé avec l’auxiliaire être — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21547/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-etre/accord-du-participe-passe-employe-avec-lauxiliaire-etre'
    },
    {
      title: 'Accord du participe passé employé avec l’auxiliaire avoir — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21546/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-avoir/accord-du-participe-passe-employe-avec-lauxiliaire-avoir'
    },
    {
      title: 'TCF Canada — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
