import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-expressao',

  pt: {
    title: 'Causa, consequência, finalidade, oposição e concessão',
    summary:
      'Aprenda a conectar ideias de maneira precisa e natural, expressando motivos, resultados, objetivos e contrastes em francês. ' +
      'Domine as principais conjunções, as diferenças de construção e os modos verbais exigidos em cada estrutura, essenciais para argumentar em nível B2–C1.',
    blocks: [
      { type: 'heading', text: 'As cinco relações lógicas' },
      {
        type: 'table',
        headers: ['Relação', 'Conectores e construção', 'Função'],
        rows: [
            [
              'Causa',
              '[[parce que|porque]], [[puisque|já que]], [[comme|como]], [[à cause de|por causa de]], [[grâce à|graças a]], [[en raison de|em razão de]]',
              'Explicar o motivo de uma situação.'
            ],
            [
              'Consequência',
              '[[donc|portanto]], [[par conséquent|consequentemente]], [[ainsi|assim]], [[si bien que|de modo que]]',
              'Apresentar o resultado de uma situação.'
            ],
            [
              'Finalidade',
              '[[pour / afin de|para / a fim de]] + infinitivo; [[pour que / afin que|para que / a fim de que]] + subjuntivo',
              'Indicar o objetivo de uma ação.'
            ],
            [
              'Oposição',
              '[[mais|mas]], [[alors que|enquanto / ao passo que]], [[tandis que|enquanto]], [[en revanche|em contrapartida]]',
              'Contrastar informações ou situações.'
            ],
            [
              'Concessão',
              '[[bien que / quoique|embora / ainda que]] + subjuntivo; [[même si|mesmo que]] + indicativo; [[malgré|apesar de]] + substantivo',
              'Reconhecer um obstáculo ou fato contrário sem alterar a conclusão principal.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Na expressão da causa, [[parce que|porque]] apresenta um motivo real ou lógico, enquanto [[puisque|já que]] ' +
          'introduz uma explicação considerada conhecida ou evidente. [[Comme|Como]] também pode introduzir uma causa, geralmente no início da frase. ' +
          'Quando a causa é expressa por um substantivo, use [[à cause de|por causa de]], normalmente associado a resultados desfavoráveis (mas que também pode ser neutro), [[grâce à|graças a]], associado a resultados favoráveis, ou [[en raison de|em razão de]], mais neutro e formal.'
      },
      {
        type: 'paragraph',
        text:
          'Para expressar consequência, [[donc|portanto]], [[ainsi|assim]] e [[par conséquent|consequentemente]] ' +
          'conectam uma conclusão ao que foi apresentado anteriormente. Já [[si bien que|de modo que]] introduz uma oração que apresenta o resultado. ' +
          'Atenção à estrutura [[de sorte que|de modo que]]: com indicativo, apresenta uma consequência realizada; com subjuntivo, pode expressar uma finalidade ou resultado pretendido. ' +
          'Essa diferença depende do sentido da frase.'
      },
      {
        type: 'paragraph',
        text:
          'Na finalidade, a escolha depende do sujeito das duas ações. Quando o sujeito é o mesmo, use [[pour|para]] ou [[afin de|a fim de]] seguido do infinitivo. ' +
          'O OQLF reserva [[afin de|a fim de]] e [[afin que|a fim de que]] à língua formal e à intenção de uma pessoa; para fatos sem intenção, use [[pour|para]]: [[Il faut mille millilitres pour faire un litre.|São necessários mil mililitros para fazer um litro.]] ' +
          'Quando os sujeitos são diferentes, use [[pour que|para que]] ou [[afin que|a fim de que]] seguido do subjuntivo. Na oposição, [[alors que|enquanto]] ' +
          'e [[tandis que|enquanto]] normalmente usam indicativo. Com [[alors que|enquanto]], coloque vírgula antes quando há oposição, mas não quando há simultaneidade: [[Anaïs jouait avec ses poupées alors que ses parents préparaient le repas.|Anaïs brincava com suas bonecas enquanto os pais preparavam a refeição.]] Na concessão, [[bien que|embora]] é geralmente seguido de subjuntivo e [[quoique|ainda que]] costuma ser, enquanto [[même si|mesmo que]] é seguido de indicativo. A expressão [[malgré|apesar de]] ' +
          'é seguida de um substantivo ou grupo nominal.'
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'paragraph',
        text:
          '[[Comme le budget a été réduit, la ville a reporté les travaux de rénovation de la bibliothèque.|Como o orçamento foi reduzido, a cidade adiou as obras de renovação da biblioteca.]] ' +
          '[[Puisque la consultation publique est terminée, le comité peut maintenant annoncer les résultats.|Já que a consulta pública terminou, o comitê pode agora anunciar os resultados.]] ' +
          '[[Les travaux ont pris du retard, si bien que la bibliothèque est restée fermée une journée de plus.|As obras sofreram um atraso, de modo que a biblioteca permaneceu fechada por mais um dia.]] ' +
          '[[La municipalité publiera le calendrier en ligne afin que tous les résidents puissent consulter les nouvelles dates.|A prefeitura publicará o calendário on-line para que todos os moradores possam consultar as novas datas.]] ' +
          '[[Certains habitants souhaitent davantage de stationnements, alors que d’autres privilégient le transport collectif.|Alguns moradores desejam mais vagas de estacionamento, enquanto outros dão preferência ao transporte coletivo.]] ' +
          '[[Bien que le projet entraîne des dépenses supplémentaires, le conseil municipal a décidé de le maintenir.|Embora o projeto gere despesas adicionais, o conselho municipal decidiu mantê-lo.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não traduza os conectores literalmente',
        text:
          'Três confusões são especialmente importantes. Primeiro, [[pour|para]] + infinitivo não é a mesma construção que [[pour que|para que]] ' +
          '+ subjuntivo. Segundo, nem toda concessão exige subjuntivo: [[même si|mesmo que]] utiliza indicativo, enquanto [[bien que|embora]] ' +
          'exige geralmente subjuntivo. Terceiro, não confunda [[à cause de|por causa de]] ' +
          'com [[grâce à|graças a]]: a primeira expressão costuma apresentar uma causa desfavorável, enquanto a segunda indica um resultado favorável. ' +
          'Lembre-se também de que [[malgré|apesar de]] deve ser seguido de um substantivo, não diretamente de um verbo conjugado.'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Construa argumentos com relações lógicas variadas',
        text:
          'No TCF Canada, a expressão escrita tem 3 exercícios (60 minutos) e a expressão oral tem 3 exercícios (12 minutos, dos quais 2 de preparação). ' +
          'No TEF Canada, a expressão escrita e a expressão oral também são provas obrigatórias. ' +
          'Durante os exercícios, procure apresentar uma opinião, explicar sua causa, desenvolver uma consequência e reconhecer uma possível objeção. ' +
          'Varie os conectores sem sacrificar a precisão gramatical.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O Usito confirma a lista de conectores por relação lógica. O OQLF confirma [[parce que|porque]] como causa objetiva e [[puisque|já que]] como explicação evidente, [[grâce à|graças a]] para resultado feliz e [[à cause de|por causa de]] para resultado em geral infeliz, ' +
          'as nuances de [[pour|para]], [[afin de|a fim de]], [[pour que|para que]] e [[afin que|a fim de que]], [[bien que|embora]] com subjuntivo, [[de sorte que|de modo que]] com indicativo ou subjuntivo, e [[alors que|enquanto]] com indicativo e a regra da vírgula. ' +
          'O FEI e o Le français des affaires confirmam as provas de expressão escrita e oral. ' +
          'Não têm fonte: a regra do mesmo sujeito com infinitivo, [[même si|mesmo que]] com indicativo, [[malgré|apesar de]] com substantivo, o uso de [[comme|como]] no início da frase, os exemplos e a sequência sugerida para argumentar. ' +
          'Essa sequência é conselho de preparação, não regra oficial das provas.'
      }
    ]
  },

  fr: {
    title: 'L’expression de la cause, de la conséquence, du but, de l’opposition et de la concession',
    summary:
      'Apprenez à relier vos idées de manière précise et naturelle en exprimant des raisons, des résultats, des objectifs et des contrastes en français. ' +
      'Maîtrisez les principales conjonctions, les différences de construction et les modes verbaux utilisés dans chaque structure, essentiels pour argumenter aux niveaux B2–C1.',
    blocks: [
      { type: 'heading', text: 'Les cinq relations logiques' },
      {
        type: 'table',
        headers: ['Relation', 'Connecteurs et construction', 'Fonction'],
        rows: [
            [
              'Cause',
              'parce que, puisque, comme, à cause de, grâce à, en raison de',
              'Expliquer la raison d’une situation.'
            ],
            [
              'Conséquence',
              'donc, par conséquent, ainsi, si bien que',
              'Présenter le résultat d’une situation.'
            ],
            [
              'But',
              'pour / afin de + infinitif ; pour que / afin que + subjonctif',
              'Indiquer l’objectif d’une action.'
            ],
            [
              'Opposition',
              'mais, alors que, tandis que, en revanche',
              'Mettre en contraste des informations ou des situations.'
            ],
            [
              'Concession',
              'bien que / quoique + subjonctif ; même si + indicatif ; malgré + nom',
              'Reconnaître un obstacle ou un fait contraire sans modifier la conclusion principale.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Pour exprimer la cause, parce que présente une raison réelle ou logique, tandis que puisque introduit une explication considérée comme connue ou évidente. ' +
          'Comme peut également introduire une cause, généralement en début de phrase. ' +
          'Lorsque la cause est exprimée par un nom, utilisez à cause de, généralement associé à des résultats défavorables (mais il peut aussi être neutre), grâce à, associé à des résultats favorables, ou en raison de, qui est plus neutre et plus formel.'
      },
      {
        type: 'paragraph',
        text:
          'Pour exprimer une conséquence, donc, ainsi et par conséquent relient une conclusion à ce qui a été présenté précédemment. ' +
          'Si bien que introduit une proposition qui présente le résultat. ' +
          'Attention à la construction de sorte que : avec l’indicatif, elle présente une conséquence réalisée ; avec le subjonctif, elle peut exprimer un but ou un résultat recherché. ' +
          'Cette différence dépend du sens de la phrase.'
      },
      {
        type: 'paragraph',
        text:
          'Pour exprimer le but, le choix dépend du sujet des deux actions. Lorsque le sujet est le même, utilisez pour ou afin de suivi de l’infinitif. ' +
          'L’OQLF réserve afin de et afin que à la langue soutenue et à l’intention d’une personne ; pour un fait sans intention, utilisez pour : « Il faut mille millilitres pour faire un litre ». ' +
          'Lorsque les sujets sont différents, utilisez pour que ou afin que suivi du subjonctif. ' +
          'Pour exprimer l’opposition, alors que et tandis que sont normalement suivis de l’indicatif. ' +
          'Avec alors que, on met une virgule devant pour l’opposition, mais pas pour la simultanéité : « Anaïs jouait avec ses poupées alors que ses parents préparaient le repas ». ' +
          'Pour exprimer la concession, bien que est généralement suivi du subjonctif et quoique l’est couramment, tandis que même si est suivi de l’indicatif. ' +
          'L’expression malgré est suivie d’un nom ou d’un groupe nominal.'
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'paragraph',
        text:
          'Comme le budget a été réduit, la ville a reporté les travaux de rénovation de la bibliothèque. ' +
          'Puisque la consultation publique est terminée, le comité peut maintenant annoncer les résultats. ' +
          'Les travaux ont pris du retard, si bien que la bibliothèque est restée fermée une journée de plus. ' +
          'La municipalité publiera le calendrier en ligne afin que tous les résidents puissent consulter les nouvelles dates. ' +
          'Certains habitants souhaitent davantage de stationnements, alors que d’autres privilégient le transport collectif. ' +
          'Bien que le projet entraîne des dépenses supplémentaires, le conseil municipal a décidé de le maintenir.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne traduisez pas les connecteurs littéralement',
        text:
          'Trois confusions sont particulièrement importantes. ' +
          'Premièrement, pour + infinitif n’est pas la même construction que pour que + subjonctif. ' +
          'Deuxièmement, toutes les expressions de concession ne demandent pas le subjonctif : même si se construit avec l’indicatif, tandis que bien que demande généralement le subjonctif. ' +
          'Troisièmement, ne confondez pas à cause de et grâce à : la première expression présente généralement une cause défavorable, tandis que la seconde indique un résultat favorable. ' +
          'Rappelez-vous également que malgré doit être suivi d’un nom, et non directement d’un verbe conjugué.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Construisez vos arguments avec des relations logiques variées',
        text:
          'Au TCF Canada, l’expression écrite comprend 3 exercices (60 minutes) et l’expression orale comprend 3 exercices (12 minutes, dont 2 minutes de préparation). ' +
          'Au TEF Canada, l’expression écrite et l’expression orale font aussi partie des épreuves obligatoires. ' +
          'Pendant vos exercices, essayez de présenter une opinion, d’en expliquer la cause, d’en développer une conséquence et de reconnaître une éventuelle objection. ' +
          'Variez les connecteurs sans sacrifier la précision grammaticale.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Usito confirme la liste des connecteurs par relation logique. L’OQLF confirme parce que comme cause objective et puisque comme explication évidente, grâce à pour un résultat heureux et à cause de pour un résultat généralement malheureux, ' +
          'les nuances de pour, afin de, pour que et afin que, bien que avec le subjonctif, de sorte que avec l’indicatif ou le subjonctif, et alors que avec l’indicatif et la règle de la virgule. ' +
          'Le FEI et Le français des affaires confirment les épreuves d’expression écrite et orale. ' +
          'Ne sont pas sourcés : la règle du même sujet avec l’infinitif, même si avec l’indicatif, malgré avec un nom, l’emploi de comme en début de phrase, les exemples et la démarche proposée pour argumenter. ' +
          'Cette démarche est un conseil de préparation, et non une règle officielle des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Connecteurs argumentatifs, spatiaux et temporels — Usito, Université de Sherbrooke',
      url: 'https://sanction.usito.usherbrooke.ca/articles/aides_%C3%A0_la_r%C3%A9daction/ConnecteursArgumentatifsSpatiauxEtTemporels'
    },
    {
      title: 'Emploi de parce que et de puisque — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23501/la-syntaxe/les-conjonctions/emploi-de-parce-que-et-de-puisque'
    },
    {
      title: 'Différence entre grâce à et à cause de — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22315/le-vocabulaire/nuances-semantiques/difference-entre-grace-a-et-a-cause-de'
    },
    {
      title: 'Différence entre afin de, pour, afin que et pour que — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24713/le-vocabulaire/nuances-semantiques/difference-entre-afin-de-pour-afin-que-et-pour-que'
    },
    {
      title: 'Subjonctif ou indicatif après les subordonnants composés — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24238/la-grammaire/le-verbe/modes/subjonctif/subjonctif-ou-indicatif-apres-les-subordonnants-composes'
    },
    {
      title: 'Liste de charnières — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/25159/la-redaction-et-la-communication/organisation-textuelle/liste-de-charnieres'
    },
    {
      title: 'Virgule avec alors que : usages et emplois — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24821/la-ponctuation/virgule/la-virgule-avec-alors-que'
    },
    {
      title: 'TCF Canada — Présentation des épreuves et compétences évaluées — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
