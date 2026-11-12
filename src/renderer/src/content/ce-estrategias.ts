import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ce-estrategias',

  pt: {
    title: 'Estratégias de compreensão escrita: leitura dinâmica, ideia principal e paráfrases',
    summary:
      'Aprenda a ler textos em francês de maneira estratégica, sem precisar traduzir cada palavra. ' +
      'Você vai desenvolver técnicas de leitura global e busca de informações específicas, identificar a ideia principal e a intenção do autor, além de reconhecer sinônimos e paráfrases que aparecem nas alternativas das provas TEF Canada e TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. Leia com estratégia, não palavra por palavra' },
      {
        type: 'paragraph',
        text:
          'Na compreensão escrita, entender um texto não significa conhecer todas as palavras. ' +
          'Muitas questões podem ser resolvidas identificando a estrutura, o contexto e as informações mais importantes. ' +
          'Duas técnicas fundamentais são o [[survol du texte|leitura rápida para obter uma visão geral do texto]], também chamado de skimming, e o [[repérage|busca direcionada de informações específicas]], conhecido como scanning. ' +
          'A primeira ajuda a entender o assunto geral; a segunda permite encontrar rapidamente uma informação determinada. ' +
          'Saber quando utilizar cada técnica economiza tempo e melhora sua interpretação.'
      },

      { type: 'heading', text: '2. Skimming e scanning: quando utilizar cada técnica' },
      {
        type: 'table',
        headers: ['Técnica', 'Objetivo', 'Como aplicar'],
        rows: [
          [
            'Skimming — [[lecture globale|leitura global]]',
            'Identificar o assunto e a ideia geral do texto.',
            'Leia o título, os subtítulos, a introdução, a conclusão e as primeiras frases dos parágrafos. Observe palavras repetidas e a organização do conteúdo.'
          ],
          [
            'Scanning — [[repérage ciblé|busca direcionada]]',
            'Encontrar uma informação específica sem ler tudo detalhadamente.',
            'Procure nomes, datas, horários, valores, locais, números e palavras relacionadas à pergunta.'
          ],
          [
            '[[Lecture approfondie|Leitura aprofundada]]',
            'Compreender detalhes, relações entre ideias e informações implícitas.',
            'Leia novamente o trecho relevante, observe conectores, negações, pronomes e relações de causa e consequência.'
          ]
        ]
      },

      { type: 'heading', text: '3. Exemplo prático: aplicando as técnicas' },
      {
        type: 'paragraph',
        text: 'Leia rapidamente o texto fictício abaixo, inspirado em comunicados e notícias municipais do Québec.'
      },
      {
        type: 'paragraph',
        text:
          '[[La Ville de Gatineau lancera en mai un service de vélos en libre-service. Les résidents pourront emprunter un vélo gratuitement pendant les deux premières heures. ' +
          'Selon la municipalité, cette initiative vise à faciliter les déplacements courts et à réduire la circulation au centre-ville. ' +
          'Les stations seront installées près des bibliothèques et des principaux arrêts d’autobus. Les modalités d’inscription seront annoncées au printemps.|' +
          'A cidade de Gatineau lançará em maio um serviço de bicicletas compartilhadas. Os moradores poderão pegar uma bicicleta gratuitamente durante as duas primeiras horas. ' +
          'Segundo a prefeitura, essa iniciativa busca facilitar os deslocamentos curtos e reduzir o trânsito no centro da cidade. ' +
          'As estações serão instaladas perto das bibliotecas e dos principais pontos de ônibus. As condições de inscrição serão anunciadas na primavera.]]'
      },
      {
        type: 'paragraph',
        text: 'Aplicando o skimming: o texto trata de um novo serviço municipal de bicicletas compartilhadas. Não é necessário compreender todos os detalhes para identificar o assunto.'
      },
      {
        type: 'paragraph',
        text:
          'Aplicando o scanning: se a pergunta pedir quando o serviço começará, procure a informação [[en mai|em maio]]. ' +
          'Se perguntar quanto tempo o empréstimo será gratuito, procure [[pendant les deux premières heures|durante as duas primeiras horas]].'
      },

      { type: 'heading', text: '4. Identifique a ideia principal e a intenção do autor' },
      {
        type: 'paragraph',
        text:
          'A ideia principal é a mensagem mais importante que o texto transmite. Ela responde à pergunta: sobre o que o texto realmente fala? ' +
          'Já a intenção do autor representa o motivo pelo qual o texto foi escrito. Um mesmo assunto pode ser apresentado com objetivos diferentes: informar, convencer, criticar ou alertar. ' +
          'Não confunda o assunto com a mensagem central nem com a opinião do autor.'
      },
      {
        type: 'table',
        headers: ['Intenção', 'Expressões em francês', 'O que o autor pretende'],
        rows: [
          [
            'Informar',
            '[[informer, présenter des faits, annoncer|informar, apresentar fatos, anunciar]]',
            'Transmitir informações de maneira objetiva.'
          ],
          [
            'Convencer',
            '[[convaincre, persuader, inciter à|convencer, persuadir, incentivar a]]',
            'Influenciar uma decisão ou comportamento.'
          ],
          [
            'Criticar',
            '[[critiquer, remettre en question|criticar, questionar]]',
            'Apontar problemas ou aspectos negativos.'
          ],
          [
            'Alertar',
            '[[avertir, mettre en garde, sensibiliser|avisar, alertar, conscientizar]]',
            'Chamar atenção para um risco ou problema.'
          ],
          [
            'Explicar',
            '[[expliquer, décrire, clarifier|explicar, descrever, esclarecer]]',
            'Tornar um assunto mais compreensível.'
          ],
          [
            'Entreter',
            '[[divertir, amuser, raconter|entreter, divertir, contar]]',
            'Proporcionar interesse ou entretenimento ao leitor.'
          ]
        ]
      },

      { type: 'heading', text: '5. Reconheça sinônimos e paráfrases' },
      {
        type: 'paragraph',
        text:
          'Nas provas, a resposta correta frequentemente apresenta a mesma informação do texto original, mas utiliza palavras diferentes. ' +
          'Isso é uma paráfrase: uma maneira alternativa de expressar a mesma ideia sem alterar seu sentido essencial. ' +
          'Não espere encontrar exatamente as mesmas palavras na pergunta e no texto. Aprenda a reconhecer equivalências de vocabulário e de estrutura.'
      },
      {
        type: 'table',
        headers: ['Expressão original', 'Sinônimo ou paráfrase', 'Significado'],
        rows: [
          ['[[augmenter|aumentar]]', '[[accroître|ampliar]]', 'Elevar a quantidade ou intensidade.'],
          ['[[réduire|reduzir]]', '[[diminuer|diminuir]]', 'Tornar algo menor.'],
          ['[[commencer|começar]]', '[[débuter|iniciar]]', 'Dar início a alguma coisa.'],
          ['[[gratuit|gratuito]]', '[[sans frais|sem custos]]', 'Algo que não exige pagamento.'],
          [
            '[[les résidents|os moradores]]',
            '[[les habitants|os habitantes]]',
            'Pessoas que vivem em determinado local.'
          ],
          [
            '[[être disponible|estar disponível]]',
            '[[être offert|ser oferecido]]',
            'Indicar que um serviço pode ser utilizado ou obtido.'
          ],
          [
            '[[en raison de|devido a]]',
            '[[à cause de|por causa de]]',
            'Apresentar uma relação de causa.'
          ],
          [
            '[[afin de|a fim de]]',
            '[[dans le but de|com o objetivo de]]',
            'Expressar finalidade ou objetivo.'
          ],
          [
            '[[ne pas avoir le droit de|não ter o direito de]]',
            '[[être interdit de|ser proibido de]]',
            'Expressar uma proibição.'
          ]
        ]
      },

      { type: 'heading', text: '6. Armadilhas comuns na interpretação' },
      {
        type: 'list',
        items: [
          'Confundir assunto com ideia principal: um texto pode falar sobre transporte público, mas sua mensagem principal pode ser a necessidade de ampliar o serviço em determinada região.',
          'Confundir intenção com opinião: um texto que apresenta dados sobre poluição pode ter como objetivo informar, mesmo que o assunto seja controverso.',
          'Escolher uma alternativa porque contém palavras idênticas às do texto. A resposta pode utilizar sinônimos, enquanto uma alternativa com palavras semelhantes pode apresentar uma interpretação incorreta.',
          'Ignorar palavras negativas e restrições: [[ne...pas|não]], [[sauf|exceto]], [[uniquement|somente]] e [[à moins que|a menos que]] podem alterar completamente o sentido.',
          'Confundir uma hipótese com uma afirmação: expressões como [[il semblerait que|parece que]] e [[il est possible que|é possível que]] não apresentam necessariamente fatos confirmados.',
          'Deduzir informações com base no conhecimento pessoal. A resposta precisa ser sustentada pelo texto, mesmo quando você conhece o assunto.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com os falsos cognatos',
        text:
          'Brasileiros frequentemente confiam demais nas palavras parecidas com o português. ' +
          'Por exemplo, [[demander|pedir ou perguntar]] não corresponde a demandar, no sentido de exigir: em [[Il demande une réduction.|Ele pede um desconto.]], a pessoa apenas faz um pedido. ' +
          'Já [[éventuellement|possivelmente ou caso necessário]] não significa simplesmente eventualmente, no sentido de algo que acontece ocasionalmente. ' +
          'Não escolha uma resposta apenas porque uma palavra francesa parece familiar. Analise o contexto e a frase completa.'
      },

      { type: 'heading', text: '7. Estratégia para o TEF Canada e o TCF Canada' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Use uma sequência de leitura em três etapas',
        text:
          'Primeiro: visão geral. Observe o título, a estrutura e as primeiras frases para descobrir o assunto e a intenção do autor. ' +
          'Segundo: busca direcionada. Leia a pergunta e procure palavras-chave, datas, números e ideias equivalentes no texto. ' +
          'Terceiro: confirmação. Volte ao trecho relevante e compare o sentido completo com as alternativas, verificando negações, condições e exceções. ' +
          'Nos dois exames, a compreensão escrita utiliza questões de múltipla escolha. No TEF Canada, são 40 questões em 60 minutos; no TCF Canada, são 39 questões em 60 minutos. ' +
          'Gerencie o tempo e não permaneça preso a uma questão difícil. ' +
          'Para alcançar NCLC 7, pratique especialmente a identificação de ideias implícitas, relações entre argumentos e paráfrases menos óbvias.'
      }
    ]
  },

  fr: {
    title: 'Stratégies de compréhension écrite : lecture rapide, idée principale et reformulation',
    summary:
      'Apprenez à lire des textes en français de manière stratégique, sans devoir traduire chaque mot. ' +
      'Vous développerez des techniques de lecture globale et de recherche d’informations précises, apprendrez à identifier l’idée principale et l’intention de l’auteur, et reconnaîtrez les synonymes et les reformulations présents dans les choix de réponse du TEF Canada et du TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. Lisez avec méthode plutôt que mot à mot' },
      {
        type: 'paragraph',
        text:
          'En compréhension écrite, comprendre un texte ne signifie pas connaître tous les mots. ' +
          'Plusieurs questions peuvent être résolues en repérant la structure, le contexte et les informations essentielles. ' +
          'Deux techniques fondamentales sont la lecture globale, aussi appelée skimming, et le repérage ciblé, connu sous le nom de scanning. ' +
          'La première permet de comprendre le sujet général ; la seconde sert à trouver rapidement une information précise. ' +
          'Savoir quand utiliser chaque technique permet de gagner du temps et d’améliorer sa compréhension.'
      },

      { type: 'heading', text: '2. Skimming et scanning : quand utiliser chaque technique' },
      {
        type: 'table',
        headers: ['Technique', 'Objectif', 'Comment l’appliquer'],
        rows: [
          [
            'Skimming — lecture globale',
            'Identifier le sujet et l’idée générale du texte.',
            'Lisez le titre, les sous-titres, l’introduction, la conclusion et les premières phrases des paragraphes. Observez les mots répétés et l’organisation du contenu.'
          ],
          [
            'Scanning — repérage ciblé',
            'Trouver une information précise sans lire tout le texte en détail.',
            'Cherchez les noms, les dates, les heures, les montants, les lieux, les chiffres et les mots associés à la question.'
          ],
          [
            'Lecture approfondie',
            'Comprendre les détails, les liens entre les idées et les informations implicites.',
            'Relisez le passage pertinent et observez les connecteurs, les négations, les pronoms ainsi que les relations de cause à effet.'
          ]
        ]
      },

      { type: 'heading', text: '3. Exemple pratique : appliquer les deux techniques' },
      {
        type: 'paragraph',
        text: 'Lisez rapidement le texte fictif ci-dessous, inspiré des communications et des nouvelles municipales au Québec.'
      },
      {
        type: 'paragraph',
        text:
          'La Ville de Gatineau lancera en mai un service de vélos en libre-service. Les résidents pourront emprunter un vélo gratuitement pendant les deux premières heures. ' +
          'Selon la municipalité, cette initiative vise à faciliter les déplacements courts et à réduire la circulation au centre-ville. ' +
          'Les stations seront installées près des bibliothèques et des principaux arrêts d’autobus. Les modalités d’inscription seront annoncées au printemps.'
      },
      {
        type: 'paragraph',
        text: 'Application du skimming : le texte porte sur un nouveau service municipal de vélos en libre-service. Il n’est pas nécessaire de comprendre chaque détail pour identifier le sujet.'
      },
      {
        type: 'paragraph',
        text:
          'Application du scanning : si la question demande quand le service sera lancé, cherchez l’information « en mai ». ' +
          'Si elle demande pendant combien de temps le service sera gratuit, repérez « pendant les deux premières heures ».'
      },

      { type: 'heading', text: '4. Identifier l’idée principale et l’intention de l’auteur' },
      {
        type: 'paragraph',
        text:
          'L’idée principale est le message le plus important transmis par le texte. Elle répond à la question : de quoi parle réellement le texte ? ' +
          'L’intention de l’auteur représente plutôt la raison pour laquelle le texte a été écrit. ' +
          'Un même sujet peut être présenté dans différents buts : informer, convaincre, critiquer ou avertir. Ne confondez pas le sujet, le message central et l’opinion de l’auteur.'
      },
      {
        type: 'table',
        headers: ['Intention', 'Expressions associées', 'Ce que l’auteur cherche à faire'],
        rows: [
          [
            'Informer',
            'informer, présenter des faits, annoncer',
            'Transmettre des informations de manière objective.'
          ],
          [
            'Convaincre',
            'convaincre, persuader, inciter à',
            'Influencer une décision ou un comportement.'
          ],
          [
            'Critiquer',
            'critiquer, remettre en question',
            'Souligner des problèmes ou des aspects négatifs.'
          ],
          [
            'Avertir',
            'avertir, mettre en garde, sensibiliser',
            'Attirer l’attention sur un risque ou un problème.'
          ],
          ['Expliquer', 'expliquer, décrire, clarifier', 'Rendre un sujet plus compréhensible.'],
          ['Divertir', 'divertir, amuser, raconter', 'Susciter l’intérêt ou distraire le lecteur.']
        ]
      },

      { type: 'heading', text: '5. Reconnaître les synonymes et les reformulations' },
      {
        type: 'paragraph',
        text:
          'Dans les épreuves, la bonne réponse reprend souvent la même information que le texte original, mais avec des mots différents. ' +
          'C’est ce qu’on appelle une reformulation : une autre manière d’exprimer la même idée sans en modifier le sens essentiel. ' +
          'Ne vous attendez pas à retrouver exactement les mêmes mots dans la question et dans le texte. Apprenez à reconnaître les équivalences de vocabulaire et de structure.'
      },
      {
        type: 'table',
        headers: ['Expression initiale', 'Synonyme ou reformulation', 'Signification'],
        rows: [
          ['augmenter', 'accroître', 'Élever une quantité ou une intensité.'],
          ['réduire', 'diminuer', 'Rendre quelque chose moins important ou moins grand.'],
          ['commencer', 'débuter', 'Donner le départ à quelque chose.'],
          ['gratuit', 'sans frais', 'Quelque chose qui ne nécessite aucun paiement.'],
          ['les résidents', 'les habitants', 'Les personnes qui vivent dans un endroit donné.'],
          ['être disponible', 'être offert', 'Indiquer qu’un service peut être utilisé ou obtenu.'],
          ['en raison de', 'à cause de', 'Présenter un rapport de cause.'],
          ['afin de', 'dans le but de', 'Exprimer une finalité ou un objectif.'],
          ['ne pas avoir le droit de', 'être interdit de', 'Exprimer une interdiction.']
        ]
      },

      { type: 'heading', text: '6. Pièges fréquents dans la compréhension' },
      {
        type: 'list',
        items: [
          'Confondre le sujet et l’idée principale : un texte peut porter sur les transports en commun, mais son message central peut être la nécessité d’améliorer le service dans une région précise.',
          'Confondre l’intention et l’opinion : un texte qui présente des données sur la pollution peut avoir pour objectif d’informer, même si le sujet est controversé.',
          'Choisir une réponse parce qu’elle contient les mêmes mots que le texte. La bonne réponse peut utiliser des synonymes, tandis qu’une autre proposition peut reprendre des mots similaires tout en donnant une interprétation incorrecte.',
          'Ignorer les négations et les restrictions : « ne... pas », « sauf », « uniquement » et « à moins que » peuvent complètement modifier le sens.',
          'Confondre une hypothèse avec une affirmation : des expressions comme « il semblerait que » et « il est possible que » ne présentent pas nécessairement des faits confirmés.',
          'Déduire des informations à partir de ses connaissances personnelles. La réponse doit être justifiée par le texte, même lorsque vous connaissez déjà le sujet.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux faux amis',
        text:
          'Les lusophones font parfois trop confiance aux mots qui ressemblent au portugais. ' +
          'Par exemple, « demander » ne correspond pas à « demandar » en portugais, au sens d’exiger : dans « Il demande une réduction. », la personne fait simplement une demande. ' +
          'Quant à « éventuellement », il signifie « possiblement » ou « le cas échéant », et pas simplement « de temps en temps ». ' +
          'Ne choisissez jamais une réponse uniquement parce qu’un mot français vous semble familier. Analysez le contexte et la phrase complète.'
      },

      { type: 'heading', text: '7. Stratégie pour le TEF Canada et le TCF Canada' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Suivez une méthode de lecture en trois étapes',
        text:
          'Première étape : la vue d’ensemble. Observez le titre, la structure et les premières phrases pour identifier le sujet et l’intention de l’auteur. ' +
          'Deuxième étape : la recherche ciblée. Lisez la question et cherchez les mots-clés, les dates, les chiffres et les idées équivalentes dans le texte. ' +
          'Troisième étape : la vérification. Revenez au passage pertinent et comparez son sens complet avec les choix de réponse en vérifiant les négations, les conditions et les exceptions. ' +
          'Les deux examens comportent des questions de compréhension écrite à choix multiples. Le TEF Canada comporte 40 questions en 60 minutes ; le TCF Canada en comporte 39 en 60 minutes. ' +
          'Gérez votre temps et ne restez pas bloqué sur une question difficile. ' +
          'Pour atteindre le NCLC 7, entraînez-vous particulièrement à identifier les idées implicites, les liens entre les arguments et les reformulations moins évidentes.'
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
      title: 'TEF Canada – Présentation des épreuves – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'TCF Canada – France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'Identifier l’idée principale implicite d’un paragraphe – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/identifier-l-idee-principale-implicite-f1671'
    },
    {
      title: 'Trucs pour faire le résumé d’un texte courant – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/trucs-pour-l-ecriture-d-un-resume-d-un-texte-co-f1396'
    }
  ]
}

export default content
