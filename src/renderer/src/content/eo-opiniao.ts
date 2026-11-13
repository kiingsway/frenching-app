import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-opiniao',

  pt: {
    title: 'Expressar opinião, concordar, discordar e nuançar',
    summary:
      'Aprenda a apresentar seu ponto de vista, concordar ou discordar de maneira natural e respeitosa e introduzir ressalvas sem abandonar sua posição. ' +
      'Conheça expressões para justificar argumentos, reconhecer opiniões contrárias, propor alternativas e desenvolver uma discussão com clareza e naturalidade.',
    blocks: [
      { type: 'heading', text: '1. Expressar e justificar sua opinião' },
      {
        type: 'paragraph',
        text:
          'Em uma conversa ou discussão, não basta dizer o que você pensa: é importante explicar por que defende determinada posição. ' +
          'Para construir uma resposta organizada, apresente sua opinião, desenvolva um ou dois argumentos, ilustre suas ideias com exemplos e, quando necessário, reconheça pontos de vista diferentes. ' +
          'Variar as expressões utilizadas também torna sua comunicação mais natural e evita repetir sempre as mesmas estruturas.'
      },
      {
        type: 'table',
        headers: ['Função comunicativa', 'Expressões em francês', 'Uso'],
        rows: [
            [
              'Apresentar opinião',
              '[[À mon avis,...|Na minha opinião,...]] / [[Selon moi,...|Segundo meu ponto de vista,...]] / [[Pour ma part,...|Quanto a mim,...]]',
              'Introduzir sua posição pessoal.'
            ],
            [
              'Justificar opinião',
              '[[Je considère que...|Considero que...]] / [[Je suis convaincu(e) que...|Estou convencido(a) de que...]] / [[Il me semble que...|Parece-me que...]]',
              'Apresentar uma posição e indicar seu grau de convicção.'
            ],
            [
              'Concordar',
              '[[Je suis tout à fait d’accord avec vous.|Concordo plenamente com você.]] / [[Je partage votre point de vue.|Compartilho seu ponto de vista.]]',
              'Demonstrar concordância.'
            ],
            [
              'Discordar',
              '[[Je ne suis pas entièrement d’accord.|Não concordo inteiramente.]] / [[Je vois les choses autrement.|Vejo as coisas de outra maneira.]]',
              'Expressar uma opinião contrária.'
            ],
            [
              'Nuançar uma opinião',
              '[[Je comprends votre argument, toutefois...|Entendo seu argumento, no entanto...]] / [[Cela dépend du contexte.|Isso depende do contexto.]]',
              'Reconhecer uma ideia sem concordar completamente.'
            ],
            [
              'Pedir esclarecimentos',
              '[[Si je comprends bien, vous voulez dire que… ?|Se entendi bem, você quer dizer que...?]]',
              'Confirmar se compreendeu corretamente o argumento do interlocutor.'
            ]
        ]
      },
      { type: 'heading', text: '2. Concordar parcialmente e nuançar' },
      {
        type: 'paragraph',
        text:
          'Nuançar significa reconhecer que uma ideia pode ter pontos positivos, mas também limitações ou condições. ' +
          'Em vez de aceitar ou rejeitar completamente uma opinião, você pode demonstrar concordância parcial, apresentar uma ressalva ou explicar que sua posição depende da situação. ' +
          'Algumas expressões especialmente úteis são [[Je suis en partie d’accord, mais...|Concordo em parte, mas...]], [[Certes..., cependant...|Certamente..., entretanto...]], [[Il est vrai que..., toutefois...|É verdade que..., contudo...]] ' +
          'e [[D’un côté..., de l’autre...|De um lado..., de outro...]]'
      },
      {
        type: 'paragraph',
        text:
          'Para desenvolver a argumentação, utilize conectores que organizem suas ideias. [[Tout d’abord|Em primeiro lugar]] ' +
          'introduz o primeiro argumento; [[en effet|de fato]] apresenta uma justificativa; [[par exemple|por exemplo]] introduz uma ilustração; [[de plus|além disso]] ' +
          'acrescenta uma informação; [[cependant|no entanto]] introduz uma ressalva; e [[en conclusion|em conclusão]] encerra o raciocínio.'
      },
      { type: 'heading', text: '3. Exemplo de uma discussão' },
      {
        type: 'paragraph',
        text:
          'Situação: colegas de trabalho estão discutindo a adoção de horários flexíveis no escritório. ' +
          'Você acredita que a proposta é positiva, mas considera importante estabelecer algumas condições.'
      },
      {
        type: 'list',
        items: [
          '[[À mon avis, l’horaire flexible est une bonne solution, car il permet aux employés de mieux organiser leur journée.|Na minha opinião, o horário flexível é uma boa solução, pois permite que os funcionários organizem melhor seu dia.]]',
          '[[Je suis d’accord avec cette proposition, surtout pour les personnes qui habitent loin du bureau.|Concordo com essa proposta, principalmente para as pessoas que moram longe do escritório.]]',
          '[[Cependant, il faut également tenir compte des besoins de l’équipe et des heures de service.|No entanto, também é necessário levar em consideração as necessidades da equipe e os horários de atendimento.]]',
          '[[Par exemple, certains collègues doivent être présents pour accueillir les clients.|Por exemplo, alguns colegas precisam estar presentes para receber os clientes.]]',
          '[[Je serais donc favorable à un horaire flexible avec quelques heures communes pour toute l’équipe.|Eu seria, portanto, favorável a um horário flexível com algumas horas em comum para toda a equipe.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: traduzir concordar com literalmente',
        text:
          'Em francês não existe um verbo equivalente a “concordar” para essa ideia: use [[être d’accord avec quelqu’un|concordar com alguém]] ou [[être d’accord sur un point|concordar sobre um ponto]]. ' +
          'Cuidado com o gênero: [[Je suis convaincu(e) que...|Estou convencido(a) de que...]] concorda com quem fala. ' +
          'Outro erro é expressar discordância de maneira excessivamente direta, sem explicar o motivo. ' +
          'Prefira [[Je comprends votre point de vue, mais...|Entendo seu ponto de vista, mas...]] ou [[Je ne suis pas tout à fait d’accord.|Não concordo totalmente.]] ' +
          'Além de discordar, apresente uma justificativa ou uma alternativa.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'No TCF Canada, a expressão oral é individual, presencial com um examinador, com 3 exercícios e 12 minutos, dos quais 2 são de preparação. ' +
          'No TEF Canada, a seção B da expressão oral (10 minutos) consiste em argumentar para convencer, em um jogo de papéis com o examinador. Segundo o Français des affaires, o interlocutor nunca concorda com você: isso não deve desestabilizá-lo. ' +
          'Pratique esta sequência: apresente sua posição, desenvolva argumentos, dê exemplos, reconheça uma possível objeção e conclua. ' +
          'Evite apenas listar expressões memorizadas: utilize-as para construir uma argumentação coerente e responder também às observações do interlocutor.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O FEI confirma o formato da expressão oral do TCF Canada, e o Le français des affaires confirma o formato do TEF Canada (seção B para argumentar e convencer) e a observação de que o interlocutor nunca concorda. ' +
          'Não têm fonte: todas as expressões para opinar, concordar, discordar, nuançar e pedir esclarecimentos, os conectores, o exemplo de discussão sobre horários flexíveis e a sequência sugerida para argumentar. ' +
          'O Mon Portfolio NCLC 5 a 8 (IRCC, seção "Donner son opinion") confirma [[À mon avis,...|Na minha opinião,...]], [[Selon moi,...|Segundo meu ponto de vista,...]], [[Je pense que...|Acho que...]], [[Je crois que...|Acredito que...]], [[Je trouve que...|Acho que...]], [[Je suis d’accord.|Concordo.]], [[Je ne suis pas d’accord.|Não concordo.]], [[Je comprends votre point de vue, mais d’un autre côté...|Entendo seu ponto de vista, mas por outro lado...]], [[C’est un bon point, mais...|É um bom ponto, mas...]], [[Si je comprends bien,...|Se entendi bem,...]] e [[Voulez-vous dire que... ?|Você quer dizer que...?]]. ' +
          'A atividade FLI "Échanger avec des collègues" (Ministère de l’Immigration, estágio 2, nível 8) confirma, como introdutores para dar opinião, [[pour ma part,|quanto a mim,]], [[à mon avis,|na minha opinião,]], [[selon moi,|segundo meu ponto de vista,]] e [[en ce qui me concerne,|no que me diz respeito,]], além de [[je suis d’accord, mais|concordo, mas]] para propor um compromisso. A situação proposta ali, uma conversa informal entre colegas sobre o horário variável de trabalho, é a mesma do exemplo da página. ' +
          'Não aparecem no portfólio nem nessa atividade: [[Je considère que...|Considero que...]], [[Je suis convaincu(e) que...|Estou convencido(a) de que...]], [[Je suis tout à fait d’accord avec vous.|Concordo plenamente com você.]], [[Je partage votre point de vue.|Compartilho seu ponto de vista.]], [[Je vois les choses autrement.|Vejo as coisas de outra maneira.]], [[Je suis en partie d’accord, mais...|Concordo em parte, mas...]] e [[D’un côté..., de l’autre...|De um lado..., de outro...]]. ' +
          'O esquema "Exprimer un désaccord" da COPRAL (Universidade Laval) confirma, para discordar de forma atenuada, acrescentar um advérbio, como em [[Je ne suis pas vraiment / entièrement d’accord.|Não estou realmente / inteiramente de acordo.]], e, para discordar de forma parcial, [[C’est une bonne idée, mais...|É uma boa ideia, mas...]]. Confirma também dar a opinião com [[Je pense que|acho que]], [[Il me semble que|parece-me que]] ou [[Je trouve que|acho que]], apoiá-la com fatos ([[par exemple|por exemplo]], [[parce que|porque]]) e pedir esclarecimentos antes de discordar. ' +
          'Esses pontos são material didático, não regra oficial nem estrutura obrigatória das provas, e nenhuma fonte exige essas expressões ou garante pontuação.'
      }
    ]
  },

  fr: {
    title: 'Exprimer son opinion, être d’accord, être en désaccord et nuancer',
    summary:
      'Apprenez à présenter votre point de vue, à exprimer votre accord ou votre désaccord de manière naturelle et respectueuse et à introduire des réserves sans abandonner votre position. ' +
      'Découvrez des expressions pour justifier vos arguments, reconnaître les opinions contraires, proposer des solutions et développer une discussion avec clarté et naturel.',
    blocks: [
      { type: 'heading', text: '1. Exprimer et justifier son opinion' },
      {
        type: 'paragraph',
        text:
          'Dans une conversation ou une discussion, il ne suffit pas de dire ce que l’on pense : il est important d’expliquer pourquoi on défend une position particulière. ' +
          'Pour construire une réponse organisée, présentez votre opinion, développez un ou deux arguments, illustrez vos idées avec des exemples et, au besoin, reconnaissez les points de vue différents. ' +
          'Varier les expressions utilisées rend également votre communication plus naturelle et évite de répéter toujours les mêmes structures.'
      },
      {
        type: 'table',
        headers: ['Fonction communicative', 'Expressions en français', 'Utilisation'],
        rows: [
            [
              'Présenter son opinion',
              'À mon avis,... / Selon moi,... / Pour ma part,...',
              'Introduire sa position personnelle.'
            ],
            [
              'Justifier son opinion',
              'Je considère que... / Je suis convaincu(e) que... / Il me semble que...',
              'Présenter une position et indiquer son degré de conviction.'
            ],
            [
              'Exprimer son accord',
              'Je suis tout à fait d’accord avec vous. / Je partage votre point de vue.',
              'Montrer son accord.'
            ],
            [
              'Exprimer son désaccord',
              'Je ne suis pas entièrement d’accord. / Je vois les choses autrement.',
              'Exprimer une opinion contraire.'
            ],
            [
              'Nuancer son opinion',
              'Je comprends votre argument, toutefois... / Cela dépend du contexte.',
              'Reconnaître une idée sans être entièrement d’accord.'
            ],
            [
              'Demander des précisions',
              'Si je comprends bien, vous voulez dire que… ?',
              'Vérifier si l’on a bien compris l’argument de son interlocuteur.'
            ]
        ]
      },
      { type: 'heading', text: '2. Exprimer un accord partiel et nuancer' },
      {
        type: 'paragraph',
        text:
          'Nuancer signifie reconnaître qu’une idée peut avoir des aspects positifs, mais aussi des limites ou des conditions. ' +
          'Au lieu d’accepter ou de rejeter complètement une opinion, vous pouvez exprimer un accord partiel, présenter une réserve ou expliquer que votre position dépend de la situation. ' +
          'Certaines expressions particulièrement utiles sont « Je suis en partie d’accord, mais… », « Certes…, cependant… », « Il est vrai que…, toutefois… ' +
          '» et « D’un côté…, de l’autre… ».'
      },
      {
        type: 'paragraph',
        text:
          'Pour développer votre argumentation, utilisez des connecteurs qui organisent vos idées. ' +
          'Tout d’abord introduit le premier argument ; en effet présente une justification ; par exemple introduit une illustration ; de plus ajoute une information ; cependant introduit une réserve ; et en conclusion termine le raisonnement.'
      },
      { type: 'heading', text: '3. Exemple de discussion' },
      {
        type: 'paragraph',
        text:
          'Situation : des collègues discutent de l’adoption d’un horaire flexible au bureau. ' +
          'Vous pensez que cette proposition est intéressante, mais vous estimez qu’il est important d’établir certaines conditions.'
      },
      {
        type: 'list',
        items: [
          'À mon avis, l’horaire flexible est une bonne solution, car il permet aux employés de mieux organiser leur journée.',
          'Je suis d’accord avec cette proposition, surtout pour les personnes qui habitent loin du bureau.',
          'Cependant, il faut également tenir compte des besoins de l’équipe et des heures de service.',
          'Par exemple, certains collègues doivent être présents pour accueillir les clients.',
          'Je serais donc favorable à un horaire flexible avec quelques heures communes pour toute l’équipe.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : traduire littéralement l’expression concordar com',
        text:
          'En français, il n’existe pas de verbe équivalent à « concordar » pour cette idée : on emploie être d’accord avec quelqu’un ou être d’accord sur un point. ' +
          'Attention à l’accord : Je suis convaincu(e) que… s’accorde avec la personne qui parle. ' +
          'Une autre erreur consiste à exprimer son désaccord de manière trop directe, sans expliquer pourquoi. Préférez « Je comprends votre point de vue, mais… » ou « Je ne suis pas tout à fait d’accord ». ' +
          'En plus d’exprimer votre désaccord, donnez une justification ou proposez une autre solution.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Au TCF Canada, l’expression orale est une épreuve individuelle en face à face avec un examinateur, composée de 3 exercices et d’une durée de 12 minutes, dont 2 minutes de préparation. ' +
          'Au TEF Canada, la section B de l’expression orale (10 minutes) consiste à argumenter pour convaincre, dans un jeu de rôle avec l’examinateur. Selon Le français des affaires, votre interlocuteur ne sera jamais d’accord avec vous : cela ne doit pas vous déstabiliser. ' +
          'Entraînez-vous à suivre cette démarche : présentez votre position, développez vos arguments, donnez des exemples, reconnaissez une objection possible et concluez. ' +
          'Évitez simplement d’énumérer des expressions mémorisées : utilisez-les pour construire une argumentation cohérente et répondre également aux remarques de votre interlocuteur.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Le FEI confirme le format de l’expression orale du TCF Canada, et Le français des affaires confirme le format du TEF Canada (section B pour argumenter et convaincre) et la remarque selon laquelle l’interlocuteur n’est jamais d’accord. ' +
          'Ne sont pas sourcés : toutes les expressions pour donner son opinion, exprimer son accord ou son désaccord, nuancer et demander des précisions, les connecteurs, l’exemple de discussion sur les horaires flexibles et la démarche proposée pour argumenter. ' +
          'Mon Portfolio NCLC 5 à 8 (IRCC, section « Donner son opinion ») confirme À mon avis,..., Selon moi,..., Je pense que..., Je crois que..., Je trouve que..., Je suis d’accord., Je ne suis pas d’accord., Je comprends votre point de vue, mais d’un autre côté..., C’est un bon point, mais..., Si je comprends bien,... et Voulez-vous dire que... ?. ' +
          'L’activité FLI « Échanger avec des collègues » (ministère de l’Immigration, stade 2, niveau 8) confirme, comme introducteurs pour donner son opinion, pour ma part, à mon avis, selon moi et en ce qui me concerne, ainsi que je suis d’accord, mais pour proposer un compromis. La situation proposée, une conversation informelle entre collègues sur l’horaire variable de travail, est la même que celle de l’exemple de la page. ' +
          'Ne figurent ni dans le portfolio ni dans cette activité : Je considère que..., Je suis convaincu(e) que..., Je suis tout à fait d’accord avec vous., Je partage votre point de vue., Je vois les choses autrement., Je suis en partie d’accord, mais... et D’un côté..., de l’autre.... ' +
          'Le schéma « Exprimer un désaccord » de la COPRAL (Université Laval) confirme, pour exprimer un désaccord de manière atténuée, d’ajouter un adverbe, comme dans Je ne suis pas vraiment / entièrement d’accord., et, pour un désaccord partiel, C’est une bonne idée, mais.... Il confirme aussi de donner son opinion avec Je pense que, Il me semble que ou Je trouve que, de l’appuyer par des faits (par exemple, parce que) et de demander des clarifications avant de s’opposer. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une structure obligatoire des examens, et aucune source n’impose ces expressions ni ne garantit une note.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Exprimer un désaccord (schéma) — COPRAL, Université Laval',
      url: 'https://www.copral.lli.ulaval.ca/sites/copral.lli.ulaval.ca/files/uploads/schema_formulations_desaccord.pdf'
    },
    {
      title: 'Français langue d’intégration (FLI), Production orale, stade 2, niveau 8 : Échanger avec des collègues (section apprentissage) — ministère de l’Immigration, de la Diversité et de l’Inclusion',
      url: 'https://referencesfrancisation.immigration-quebec.gouv.qc.ca/moodle_ref/pluginfile.php/603/mod_resource/content/1/N8_PO_S-03_Apprentissage.pdf'
    },
    {
      title: 'Mon Portfolio NCLC : NCLC 5 à 8 — Immigration, Réfugiés et Citoyenneté Canada',
      url: 'https://www.language.ca/wp-content/uploads/2019/09/Mon-Portfolio-NCLC_5_8_mars_2019.pdf'
    },
    {
      title: 'TCF Canada — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'Se préparer à l’épreuve d’expression orale du TEF — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-dexpression-orale-du-tef/'
    }
  ]
}

export default content
