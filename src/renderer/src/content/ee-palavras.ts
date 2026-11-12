import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-palavras',

  pt: {
    title: 'Contagem de palavras: respeitar os limites do TEF Canada e do TCF Canada',
    summary:
      'Aprenda a contar palavras corretamente em francês e a controlar o tamanho dos seus textos durante a prova. ' +
      'Você vai conhecer os limites específicos de cada tarefa, entender como palavras com apóstrofos e hífens são contabilizadas e desenvolver estratégias para escrever dentro do intervalo exigido sem prejudicar a qualidade da resposta.',
    blocks: [
      { type: 'heading', text: '1. Por que a contagem de palavras é importante?' },
      {
        type: 'paragraph',
        text:
          'No TEF Canada e no TCF Canada, respeitar a quantidade de palavras solicitada faz parte das exigências da expressão escrita. ' +
          'Um texto muito curto pode deixar informações importantes de fora, enquanto um texto excessivamente longo aumenta o risco de erros gramaticais, repetições e falta de organização. ' +
          'Antes de começar a escrever, identifique o limite mínimo e máximo da tarefa. ' +
          'Planeje o tamanho de cada parte e reserve alguns minutos para verificar a quantidade de palavras antes de entregar.'
      },
      { type: 'heading', text: '2. Conheça os limites de cada exame' },
      {
        type: 'table',
        headers: ['Exame', 'Tarefa', 'Mínimo', 'Máximo'],
        rows: [
            [
              'TEF Canada',
              'Seção A: continuação de notícia',
              '80 palavras',
              'Não indicado na página oficial de apresentação.'
            ],
            [
              'TEF Canada',
              'Seção B: texto argumentativo',
              '200 palavras',
              'Não indicado na página oficial de apresentação.'
            ],
            [
              'TCF Canada',
              '[[Tâche 1|Tarefa 1: mensagem curta]]',
              '60 palavras',
              '120 palavras'
            ],
            [
              'TCF Canada',
              '[[Tâche 2|Tarefa 2: relato ou artigo]]',
              '120 palavras',
              '150 palavras'
            ],
            [
              'TCF Canada',
              '[[Tâche 3|Tarefa 3: comparação e opinião]]',
              '120 palavras',
              '180 palavras'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Atenção à diferença entre os exames: o TEF Canada apresenta mínimos de palavras para suas duas seções de expressão escrita. ' +
          'Já o TCF Canada estabelece limites mínimos e máximos para cada uma das três tarefas. Não transfira os limites de um exame para o outro.'
      },
      { type: 'heading', text: '3. Como contar palavras em francês?' },
      {
        type: 'paragraph',
        text:
          'No exemplo oficial de prova divulgado por France Éducation international, uma palavra é definida como um conjunto de sinais situado entre dois espaços. ' +
          'Isso significa que uma expressão com hífen pode contar como apenas uma palavra, desde que não exista espaço separando suas partes.'
      },
      {
        type: 'table',
        headers: ['Exemplo em francês', 'Quantidade', 'Explicação'],
        rows: [
            [
              '[[Un bon sujet|Um bom assunto]]',
              '3 palavras',
              'Cada grupo separado por espaços conta como uma palavra.'
            ],
            [
              '[[C’est-à-dire|Isto é]]',
              '1 palavra',
              'As partes ligadas por hífens formam um único grupo.'
            ],
            [
              '[[l’examen|o exame]]',
              '1 palavra',
              'O apóstrofo não separa o grupo em duas palavras.'
            ],
            [
              '[[qu’il arrive|que ele chegue]]',
              '2 palavras',
              'O espaço separa os dois grupos.'
            ],
            [
              '[[parce qu’il arrive|porque ele chega]]',
              '3 palavras',
              'A expressão contém três grupos separados por espaços.'
            ],
            [
              '[[aujourd’hui|hoje]]',
              '1 palavra',
              'O apóstrofo dentro do grupo não cria uma palavra adicional.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemplo prático de contagem' },
      {
        type: 'paragraph',
        text: 'Observe este pequeno trecho e a separação das palavras segundo a convenção apresentada no exemplo oficial do TCF.'
      },
      {
        type: 'paragraph',
        text:
          '[[Samedi dernier, j’ai participé à une activité de nettoyage dans mon quartier.|No último sábado, participei de uma atividade de limpeza no meu bairro.]] ' +
          '[[Nous avons ramassé les déchets près du parc et discuté avec les voisins.|Recolhemos o lixo perto do parque e conversamos com os vizinhos.]]'
      },
      {
        type: 'paragraph',
        text:
          'Contagem: a primeira frase possui 12 palavras e a segunda possui 13 palavras. O trecho completo possui 25 palavras. ' +
          'Observe que expressões com apóstrofos, como [[j’ai|eu tenho; também o auxiliar do passado composto]], são contabilizadas como um único grupo.'
      },
      { type: 'heading', text: '5. Como planejar o tamanho do texto' },
      {
        type: 'table',
        headers: ['Tarefa', 'Faixa oficial', 'Meta de treino sugerida'],
        rows: [
            [
              'TCF – Tarefa 1',
              '60 a 120 palavras',
              '80 a 100 palavras'
            ],
            [
              'TCF – Tarefa 2',
              '120 a 150 palavras',
              '130 a 140 palavras'
            ],
            [
              'TCF – Tarefa 3',
              '120 a 180 palavras',
              '145 a 165 palavras'
            ],
            [
              'TEF – Seção A',
              'Mínimo de 80 palavras',
              'Escrever com uma margem confortável acima do mínimo.'
            ],
            [
              'TEF – Seção B',
              'Mínimo de 200 palavras',
              'Desenvolver os argumentos com profundidade, sem acrescentar conteúdo desnecessário.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'As metas de treino sugeridas não são limites oficiais adicionais. Elas servem para ajudar você a evitar respostas muito próximas dos extremos. ' +
          'No TCF, trabalhar próximo ao centro do intervalo oferece uma margem para pequenos ajustes. ' +
          'No TEF, concentre-se em ultrapassar o mínimo com segurança e desenvolver todas as ideias exigidas pela tarefa.'
      },
      {
        type: 'paragraph',
        text:
          'No exemplo oficial de prova do TCF (2022), a Tarefa 3 divide o texto em duas partes: de 40 a 60 palavras para apresentar as duas opiniões com suas próprias palavras e de 80 a 120 palavras para dar sua posição. ' +
          'O mesmo documento avisa que a produção pode receber o resultado “A1 não atingido” se o número de palavras de cada tarefa não for respeitado, se o texto estiver fora do assunto ou se alguma tarefa não for feita.'
      },
      { type: 'heading', text: '6. Armadilhas comuns na contagem' },
      {
        type: 'list',
        items: [
          'Contar palavras em português antes de traduzir. A estrutura e o tamanho das frases podem mudar em francês, por isso a contagem deve ser feita no texto final.',
          'Escrever muito abaixo do mínimo e tentar compensar com frases longas e repetitivas no final.',
          'Ultrapassar o máximo do TCF por acrescentar uma conclusão desnecessariamente extensa ou repetir argumentos.',
          'Contar cada parte de uma palavra com hífen como uma palavra independente, contrariando o exemplo oficial [[C’est-à-dire|Isto é]].',
          'Esquecer de conferir a contagem depois de editar. Acrescentar ou remover uma frase modifica o total.',
          'Confundir quantidade com qualidade. Atingir o número exigido não garante que o texto tenha respondido corretamente ao enunciado.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda os limites dos dois exames',
        text:
          'Um erro importante é utilizar automaticamente o intervalo de 120 a 180 palavras da terceira tarefa do TCF para escrever a Seção B do TEF. ' +
          'A Seção B do TEF exige pelo menos 200 palavras. Outro erro é acreditar que atingir exatamente o mínimo garante uma boa resposta. ' +
          'Um texto com 120 palavras no TCF Tarefa 2 ainda precisa apresentar o relato, os comentários e o objetivo solicitados. ' +
          'A quantidade correta é apenas uma das condições para uma resposta adequada.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Crie uma rotina de controle antes de entregar',
        text:
          'Utilize uma sequência simples: identifique o intervalo oficial, planeje quantas palavras utilizará em cada parte, escreva o texto completo e confira a contagem. ' +
          'No TCF, lembre-se de que o manual oficial considera um grupo de sinais entre dois espaços como uma palavra e apresenta C’est-à-dire como exemplo de uma única unidade. ' +
          'Reserve tempo para revisar a produção depois da contagem. ' +
          'Verifique se todos os pontos do enunciado foram respondidos, se existem repetições e se a conclusão realmente acrescenta algo ao texto. ' +
          'No TEF, confira principalmente se ultrapassou os mínimos de cada seção. Desenvolva o conteúdo necessário sem escrever apenas para aumentar o número de palavras.'
      }
    ]
  },

  fr: {
    title: 'Le décompte des mots : respecter les limites du TEF Canada et du TCF Canada',
    summary:
      'Apprenez à compter correctement les mots en français et à contrôler la longueur de vos textes pendant l’examen. ' +
      'Vous découvrirez les limites propres à chaque tâche, comprendrez comment les mots comportant des apostrophes et des traits d’union sont comptabilisés et développerez des stratégies pour respecter le nombre de mots demandé sans nuire à la qualité de votre réponse.',
    blocks: [
      { type: 'heading', text: '1. Pourquoi le nombre de mots est-il important ?' },
      {
        type: 'paragraph',
        text:
          'Au TEF Canada et au TCF Canada, respecter le nombre de mots demandé fait partie des exigences de l’expression écrite. ' +
          'Un texte trop court risque de ne pas présenter toutes les informations importantes, tandis qu’un texte excessivement long augmente les risques d’erreurs grammaticales, de répétitions et de manque d’organisation. ' +
          'Avant de commencer à rédiger, identifiez le nombre minimum et maximum de mots autorisé pour la tâche. ' +
          'Planifiez la longueur de chaque partie et réservez quelques minutes pour vérifier le nombre de mots avant de remettre votre copie.'
      },
      { type: 'heading', text: '2. Connaître les limites de chaque examen' },
      {
        type: 'table',
        headers: ['Examen', 'Tâche', 'Minimum', 'Maximum'],
        rows: [
            [
              'TEF Canada',
              'Section A : suite d’un article',
              '80 mots',
              'Non indiqué sur la page officielle de présentation.'
            ],
            [
              'TEF Canada',
              'Section B : texte argumentatif',
              '200 mots',
              'Non indiqué sur la page officielle de présentation.'
            ],
            [
              'TCF Canada',
              'Tâche 1 : message court',
              '60 mots',
              '120 mots'
            ],
            [
              'TCF Canada',
              'Tâche 2 : récit ou article',
              '120 mots',
              '150 mots'
            ],
            [
              'TCF Canada',
              'Tâche 3 : comparaison et opinion',
              '120 mots',
              '180 mots'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Attention à la différence entre les deux examens : le TEF Canada indique des nombres minimums de mots pour ses deux sections d’expression écrite. ' +
          'Le TCF Canada établit quant à lui des limites minimales et maximales pour chacune des trois tâches. Ne transposez pas les limites d’un examen à l’autre.'
      },
      { type: 'heading', text: '3. Comment compter les mots en français ?' },
      {
        type: 'paragraph',
        text:
          'Dans l’exemple officiel d’épreuve publié par France Éducation international, un mot est défini comme un ensemble de signes placé entre deux espaces. ' +
          'Cela signifie qu’une expression avec un trait d’union peut compter comme un seul mot, à condition qu’aucun espace ne sépare ses différentes parties.'
      },
      {
        type: 'table',
        headers: ['Exemple en français', 'Nombre de mots', 'Explication'],
        rows: [
            [
              'Un bon sujet',
              '3 mots',
              'Chaque groupe séparé par des espaces compte comme un mot.'
            ],
            [
              'C’est-à-dire',
              '1 mot',
              'Les éléments reliés par des traits d’union forment un seul groupe.'
            ],
            [
              'l’examen',
              '1 mot',
              'L’apostrophe ne sépare pas le groupe en deux mots.'
            ],
            [
              'qu’il arrive',
              '2 mots',
              'L’espace sépare les deux groupes.'
            ],
            [
              'parce qu’il arrive',
              '3 mots',
              'L’expression contient trois groupes séparés par des espaces.'
            ],
            [
              'aujourd’hui',
              '1 mot',
              'L’apostrophe à l’intérieur du groupe ne crée pas un mot supplémentaire.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemple pratique de décompte' },
      {
        type: 'paragraph',
        text: 'Observez ce court extrait et la séparation des mots selon la convention présentée dans l’exemple officiel du TCF.'
      },
      {
        type: 'paragraph',
        text: 'Samedi dernier, j’ai participé à une activité de nettoyage dans mon quartier. Nous avons ramassé les déchets près du parc et discuté avec les voisins.'
      },
      {
        type: 'paragraph',
        text:
          'Décompte : la première phrase contient 12 mots et la deuxième en contient 13. L’extrait complet compte donc 25 mots. ' +
          'Notez que les expressions avec une apostrophe, comme « j’ai », sont comptées comme un seul groupe.'
      },
      { type: 'heading', text: '5. Comment planifier la longueur du texte' },
      {
        type: 'table',
        headers: ['Tâche', 'Limite officielle', 'Objectif d’entraînement suggéré'],
        rows: [
            [
              'TCF – Tâche 1',
              '60 à 120 mots',
              '80 à 100 mots'
            ],
            [
              'TCF – Tâche 2',
              '120 à 150 mots',
              '130 à 140 mots'
            ],
            [
              'TCF – Tâche 3',
              '120 à 180 mots',
              '145 à 165 mots'
            ],
            [
              'TEF – Section A',
              '80 mots minimum',
              'Rédiger avec une marge suffisante au-dessus du minimum.'
            ],
            [
              'TEF – Section B',
              '200 mots minimum',
              'Développer les arguments en profondeur sans ajouter du contenu inutile.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Les objectifs d’entraînement suggérés ne constituent pas des limites officielles supplémentaires. Ils servent à éviter les réponses trop proches des extrêmes. ' +
          'Au TCF, travailler près du milieu de l’intervalle laisse une marge pour effectuer de petites modifications. ' +
          'Au TEF, concentrez-vous sur le respect du minimum avec une marge suffisante et sur le développement de toutes les idées demandées.'
      },
      {
        type: 'paragraph',
        text:
          'Dans l’exemple officiel d’épreuve du TCF (2022), la tâche 3 comporte deux parties : de 40 à 60 mots pour présenter les deux opinions avec ses propres mots et de 80 à 120 mots pour donner sa position. ' +
          'Le même document prévient que la production peut obtenir le résultat « A1 non atteint » si le nombre de mots demandé pour chaque tâche n’est pas respecté, si le texte est hors sujet ou si une tâche n’est pas réalisée.'
      },
      { type: 'heading', text: '6. Pièges fréquents dans le décompte' },
      {
        type: 'list',
        items: [
            'Compter les mots en portugais avant de traduire. ' +
            'La structure et la longueur des phrases peuvent changer en français, le décompte doit donc être effectué sur le texte final.',
          'Écrire beaucoup moins que le minimum et essayer de compenser avec des phrases longues et répétitives à la fin.',
          'Dépasser le maximum du TCF en ajoutant une conclusion inutilement longue ou en répétant des arguments.',
          'Compter chaque partie d’un mot avec trait d’union comme un mot indépendant, contrairement à l’exemple officiel « C’est-à-dire ».',
          'Oublier de vérifier le décompte après une modification. Ajouter ou supprimer une phrase change le nombre total de mots.',
          'Confondre quantité et qualité. Atteindre le nombre demandé ne garantit pas que le texte répond correctement à la consigne.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas les limites des deux examens',
        text:
          'Une erreur importante consiste à utiliser automatiquement l’intervalle de 120 à 180 mots de la troisième tâche du TCF pour rédiger la section B du TEF. ' +
          'La section B du TEF exige au moins 200 mots. Une autre erreur consiste à croire que respecter exactement le minimum garantit une bonne réponse. ' +
          'Un texte de 120 mots à la tâche 2 du TCF doit tout de même présenter le récit, les commentaires et l’objectif demandés. ' +
          'Le respect du nombre de mots n’est qu’une des conditions d’une réponse adéquate.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Adoptez une routine de vérification avant de remettre votre texte',
        text:
          'Suivez une méthode simple : identifiez l’intervalle officiel, planifiez le nombre de mots de chaque partie, rédigez votre texte complet et vérifiez le décompte. ' +
          'Au TCF, rappelez-vous que le manuel officiel considère comme un mot chaque ensemble de signes placé entre deux espaces et donne C’est-à-dire comme exemple d’une seule unité. ' +
          'Réservez du temps pour relire votre production après le décompte. ' +
          'Vérifiez que tous les points de la consigne ont été traités, qu’il n’y a pas de répétitions et que la conclusion apporte réellement quelque chose au texte. ' +
          'Au TEF, vérifiez surtout que vous avez dépassé les minimums de chaque section. ' +
          'Développez les idées nécessaires sans écrire uniquement pour augmenter le nombre de mots.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Exemple d’épreuve d’expression écrite du TCF TP, Québec et Canada – France Éducation international',
      url: 'https://www.france-education-international.fr/document/tcf-tp-qc-ca-exemple-epreuve-ee'
    },
    {
      title: 'TCF Canada – Présentation des épreuves – France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada – Présentation des épreuves – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
