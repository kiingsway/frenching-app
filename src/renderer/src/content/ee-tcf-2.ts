import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-tcf-2',

  pt: {
    title: 'TCF – Tarefa 2: escrever artigos e relatos de experiência',
    summary:
      'Aprenda a escrever artigos, publicações para blogs, mensagens em fóruns e relatos de experiências em francês. ' +
      'Você vai praticar a narração de acontecimentos, a apresentação de opiniões e comentários, a organização cronológica e a adequação do texto ao objetivo solicitado pela prova.',
    blocks: [
      { type: 'heading', text: '1. O que a tarefa exige?' },
      {
        type: 'paragraph',
        text:
          'Na [[Tâche 2|Tarefa 2]] da expressão escrita do TCF Canada, você deve redigir um [[article, un courrier ou une note|artigo, uma correspondência ou uma nota]] ' +
          'destinado a vários leitores. O objetivo é apresentar um [[compte rendu d’expérience|relato de experiência]] ' +
          'ou uma narrativa, acompanhada de comentários, opiniões ou argumentos. ' +
          'Dependendo do enunciado, você pode precisar compartilhar uma experiência positiva, denunciar um problema, reivindicar uma melhoria, incentivar outras pessoas ou tentar resolver um conflito. ' +
          'O texto deve ter entre 120 e 150 palavras. ' +
          'Diferentemente da Tarefa 3, não se trata de comparar dois documentos com opiniões diferentes: aqui, você desenvolve seu próprio relato e o relaciona ao objetivo solicitado.'
      },
      { type: 'heading', text: '2. Como organizar seu texto' },
      {
        type: 'list',
        items: [
          'Título ou abertura: apresente o assunto de maneira interessante, principalmente quando o enunciado pedir um artigo para um blog, fórum ou jornal.',
          'Contextualização: explique quando e onde aconteceu a experiência e quem participou.',
          'Relato: descreva os acontecimentos em ordem cronológica, acrescentando detalhes relevantes.',
          'Comentário pessoal: explique como você se sentiu, o que aprendeu ou o que achou da experiência.',
          'Objetivo: apresente sua reivindicação, recomendação, crítica ou convite, conforme o enunciado.',
          'Conclusão: encerre com uma reflexão, uma proposta de melhoria ou um incentivo à participação.'
        ]
      },
      { type: 'heading', text: '3. Expressões úteis para desenvolver o relato' },
      {
        type: 'table',
        headers: ['Função', 'Expressões em francês', 'Como utilizar'],
        rows: [
            [
              'Introduzir o assunto',
              '[[La semaine dernière...|Na semana passada...]], [[Récemment...|Recentemente...]]',
              'Situar a experiência no tempo.'
            ],
            [
              'Organizar acontecimentos',
              '[[Tout d’abord|Primeiramente]], [[ensuite|em seguida]], [[puis|depois]]',
              'Construir uma sequência cronológica.'
            ],
            [
              'Acrescentar detalhes',
              '[[En plus|Além disso]], [[par ailleurs|além do mais]], [[de plus|além disso]]',
              'Adicionar informações relevantes.'
            ],
            [
              'Expressar opinião',
              '[[À mon avis|Na minha opinião]], [[je trouve que|considero que]], [[selon moi|segundo meu ponto de vista]]',
              'Apresentar uma avaliação pessoal.'
            ],
            [
              'Descrever sentimentos',
              '[[J’ai été ravi de...|Fiquei muito feliz com...]], [[j’ai été déçu par...|Fiquei decepcionado com...]]',
              'Demonstrar uma reação pessoal.'
            ],
            [
              'Apresentar oposição',
              '[[Cependant|Entretanto]], [[toutefois|todavia]], [[malgré cela|apesar disso]]',
              'Introduzir uma ressalva ou dificuldade.'
            ],
            [
              'Recomendar',
              '[[Je recommande vivement cette expérience.|Recomendo muito essa experiência.]]',
              'Incentivar outras pessoas.'
            ],
            [
              'Concluir',
              '[[En conclusion|Em conclusão]], [[pour toutes ces raisons|por todas essas razões]]',
              'Encerrar o relato e reforçar a mensagem.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemplo prático: tema e enunciado' },
      { type: 'paragraph', text: 'Tema fictício: participação em uma atividade comunitária de limpeza do bairro.' },
      {
        type: 'paragraph',
        text:
          '[[La fin de semaine dernière, vous avez participé à une activité de nettoyage organisée dans votre quartier.|No último fim de semana, você participou de uma atividade de limpeza organizada no seu bairro.]] ' +
          '[[Rédigez un article pour le blogue de votre association.|Escreva um artigo para o blog da sua associação.]] ' +
          '[[Racontez votre expérience, expliquez ce que cette activité vous a apporté et encouragez les habitants à participer à la prochaine édition.|Conte sua experiência, explique o que essa atividade proporcionou a você e incentive os moradores a participar da próxima edição.]]'
      },
      { type: 'paragraph', text: 'Título do exemplo: [[Une matinée utile pour notre quartier|Uma manhã produtiva para nosso bairro]]' },
      {
        type: 'paragraph',
        text:
          '[[Samedi dernier, j’ai participé à une opération de nettoyage organisée par notre association près du parc Jarry.|No último sábado, participei de uma operação de limpeza organizada pela nossa associação perto do parque Jarry.]] ' +
          '[[Une vingtaine de résidents se sont retrouvés à 9 h pour ramasser les déchets dans les espaces verts et le long des pistes cyclables.|Cerca de vinte moradores se reuniram às 9h para recolher o lixo nas áreas verdes e ao longo das ciclovias.]] ' +
          '[[L’ambiance était conviviale : certains distribuaient des sacs, tandis que d’autres triaient les matières recyclables.|O ambiente era agradável: alguns distribuíam sacos, enquanto outros separavam os materiais recicláveis.]] ' +
          '[[En trois heures, nous avons rempli plusieurs dizaines de sacs et dégagé les abords du terrain de jeu.|Em três horas, enchemos várias dezenas de sacos e limpamos os arredores do parquinho.]] ' +
          '[[Cette expérience m’a fait comprendre que la propreté du quartier dépend aussi de nos gestes quotidiens.|Essa experiência me fez compreender que a limpeza do bairro também depende das nossas atitudes cotidianas.]] ' +
          '[[Même si l’activité demande un peu d’effort, elle permet de rencontrer ses voisins et d’agir concrètement pour l’environnement.|Mesmo que a atividade exija um pouco de esforço, ela permite conhecer os vizinhos e agir concretamente em favor do meio ambiente.]] ' +
          '[[Je recommande donc cette initiative à tous les habitants.|Portanto, recomendo essa iniciativa a todos os moradores.]] ' +
          '[[La prochaine édition aura lieu en juin ; venez nombreux et invitez vos proches !|A próxima edição acontecerá em junho; participem e convidem seus amigos e familiares!]]'
      },
      { type: 'heading', text: '5. Armadilhas comuns para brasileiros' },
      {
        type: 'list',
        items: [
          'Narrar a experiência sem apresentar comentários ou opiniões. A tarefa exige mais do que simplesmente contar o que aconteceu.',
          'Esquecer o objetivo da publicação. Se o enunciado pede para reivindicar uma melhoria, você precisa formular claramente o que deve ser mudado.',
          'Utilizar linguagem excessivamente informal em um texto destinado a uma associação, instituição ou público desconhecido.',
          'Repetir informações ou acrescentar detalhes que não contribuem para o objetivo da mensagem. O limite de palavras exige seleção e organização.',
          'Confundir a Tarefa 2 com a Tarefa 3. Na Tarefa 3, você compara dois pontos de vista apresentados em documentos e depois apresenta sua opinião.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com o verbo [[participer|participar]]',
        text:
          'Um erro frequente de brasileiros é usar a preposição de depois de [[participer|participar]], seguindo a estrutura do português. ' +
          'Em francês, a construção correta é [[participer à une activité|participar de uma atividade]], e não [[participer d’une activité|forma errada: participar de uma atividade]]. ' +
          'Por exemplo: [[J’ai participé à une activité communautaire.|Participei de uma atividade comunitária.]]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que a prova realmente cobra',
        text:
          'Segundo o material oficial de France Éducation international e a Universidade de Sherbrooke, a Tarefa 2 exige entre 120 e 150 palavras. ' +
          'Você precisa produzir um relato ou uma narrativa acompanhado de comentários, opiniões ou argumentos, respeitando o objetivo da situação. ' +
          'Uma experiência bem narrada não é suficiente se você esquecer de apresentar sua avaliação ou reivindicação. ' +
          'Planeje o texto, distribua espaço entre os acontecimentos e seus comentários e confira se a conclusão atende ao objetivo do enunciado. ' +
          'Não copie frases inteiras da instrução. Revise a conjugação dos verbos no passado, os conectores, os acordos, os acentos e a contagem de palavras.'
      }
    ]
  },

  fr: {
    title: 'TCF – Tâche 2 : rédiger un article ou un récit d’expérience',
    summary:
      'Apprenez à rédiger des articles, des publications de blogue, des messages de forum et des récits d’expérience en français. ' +
      'Vous pratiquerez la narration d’événements, la présentation d’opinions et de commentaires, l’organisation chronologique et l’adaptation du texte à l’objectif demandé dans l’épreuve.',
    blocks: [
      { type: 'heading', text: '1. Que demande cette tâche ?' },
      {
        type: 'paragraph',
        text:
          'Dans la tâche 2 de l’expression écrite du TCF Canada, vous devez rédiger un article, un courrier ou une note destinée à plusieurs lecteurs. ' +
          'L’objectif est de présenter un compte rendu d’expérience ou un récit accompagné de commentaires, d’opinions ou d’arguments. ' +
          'Selon la consigne, vous pouvez devoir partager une expérience positive, dénoncer un problème, revendiquer une amélioration, encourager d’autres personnes ou essayer de résoudre un conflit. ' +
          'Votre texte doit compter entre 120 et 150 mots. ' +
          'Contrairement à la tâche 3, il ne s’agit pas de comparer deux documents présentant des opinions différentes : ici, vous développez votre propre récit et vous le reliez à l’objectif demandé.'
      },
      { type: 'heading', text: '2. Comment organiser votre texte' },
      {
        type: 'list',
        items: [
          'Titre ou introduction : présentez le sujet de manière intéressante, surtout lorsque la consigne demande un article pour un blogue, un forum ou un journal.',
          'Mise en contexte : expliquez quand et où l’expérience a eu lieu et qui y a participé.',
          'Récit : décrivez les événements dans l’ordre chronologique en ajoutant des détails pertinents.',
          'Commentaire personnel : expliquez ce que vous avez ressenti, ce que vous avez appris ou ce que vous avez pensé de cette expérience.',
          'Objectif : présentez votre revendication, votre recommandation, votre critique ou votre invitation, selon la consigne.',
          'Conclusion : terminez par une réflexion, une proposition d’amélioration ou un encouragement à participer.'
        ]
      },
      { type: 'heading', text: '3. Expressions utiles pour développer votre récit' },
      {
        type: 'table',
        headers: ['Fonction', 'Expressions en français', 'Utilisation'],
        rows: [
            [
              'Introduire le sujet',
              'La semaine dernière..., Récemment...',
              'Situer l’expérience dans le temps.'
            ],
            [
              'Organiser les événements',
              'Tout d’abord, ensuite, puis',
              'Construire une séquence chronologique.'
            ],
            [
              'Ajouter des détails',
              'En plus, par ailleurs, de plus',
              'Ajouter des informations pertinentes.'
            ],
            [
              'Exprimer son opinion',
              'À mon avis, je trouve que, selon moi',
              'Présenter une évaluation personnelle.'
            ],
            [
              'Décrire ses sentiments',
              'J’ai été ravi de..., j’ai été déçu par...',
              'Exprimer une réaction personnelle.'
            ],
            [
              'Présenter une opposition',
              'Cependant, toutefois, malgré cela',
              'Introduire une réserve ou une difficulté.'
            ],
            [
              'Recommander',
              'Je recommande vivement cette expérience.',
              'Encourager d’autres personnes.'
            ],
            [
              'Conclure',
              'En conclusion, pour toutes ces raisons',
              'Terminer le récit et renforcer le message.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemple pratique : sujet et consigne' },
      { type: 'paragraph', text: 'Sujet fictif : participation à une activité communautaire de nettoyage du quartier.' },
      {
        type: 'paragraph',
        text:
          'La fin de semaine dernière, vous avez participé à une activité de nettoyage organisée dans votre quartier. ' +
          'Rédigez un article pour le blogue de votre association. ' +
          'Racontez votre expérience, expliquez ce que cette activité vous a apporté et encouragez les habitants à participer à la prochaine édition.'
      },
      { type: 'paragraph', text: 'Titre de l’exemple : Une matinée utile pour notre quartier' },
      {
        type: 'paragraph',
        text:
          'Samedi dernier, j’ai participé à une opération de nettoyage organisée par notre association près du parc Jarry. ' +
          'Une vingtaine de résidents se sont retrouvés à 9 h pour ramasser les déchets dans les espaces verts et le long des pistes cyclables. ' +
          'L’ambiance était conviviale : certains distribuaient des sacs, tandis que d’autres triaient les matières recyclables. ' +
          'En trois heures, nous avons rempli plusieurs dizaines de sacs et dégagé les abords du terrain de jeu. ' +
          'Cette expérience m’a fait comprendre que la propreté du quartier dépend aussi de nos gestes quotidiens. ' +
          'Même si l’activité demande un peu d’effort, elle permet de rencontrer ses voisins et d’agir concrètement pour l’environnement. ' +
          'Je recommande donc cette initiative à tous les habitants. La prochaine édition aura lieu en juin ; venez nombreux et invitez vos proches !'
      },
      { type: 'heading', text: '5. Pièges fréquents pour les lusophones' },
      {
        type: 'list',
        items: [
          'Raconter l’expérience sans présenter de commentaires ou d’opinions. La tâche exige davantage qu’un simple récit des événements.',
          'Oublier l’objectif de la publication. Si la consigne demande de revendiquer une amélioration, vous devez expliquer clairement ce qui devrait changer.',
          'Utiliser un langage excessivement familier dans un texte destiné à une association, à une institution ou à un public inconnu.',
          
            'Répéter des informations ou ajouter des détails qui ne contribuent pas à l’objectif du message. ' +
            'La limite de mots exige une sélection et une organisation des idées.',
          'Confondre la tâche 2 et la tâche 3. Dans la tâche 3, vous comparez deux points de vue présentés dans des documents avant de donner votre opinion.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au verbe participer',
        text:
          'Une erreur fréquente chez les lusophones consiste à utiliser la préposition de après participer, en suivant la structure du portugais. ' +
          'En français, la construction correcte est « participer à une activité », et non « participer d’une activité ». ' +
          'Par exemple : « J’ai participé à une activité communautaire. »'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que l’examen évalue réellement',
        text:
          'Selon le matériel officiel de France Éducation international et de l’Université de Sherbrooke, la tâche 2 exige entre 120 et 150 mots. ' +
          'Vous devez produire un compte rendu ou un récit accompagné de commentaires, d’opinions ou d’arguments, tout en respectant l’objectif de la situation. ' +
          'Un récit bien développé ne suffit pas si vous oubliez de présenter votre évaluation ou votre revendication. ' +
          'Planifiez votre texte, répartissez l’espace entre les événements et vos commentaires, puis vérifiez que la conclusion répond à l’objectif de la consigne. ' +
          'Ne recopiez pas des phrases entières de l’énoncé. Relisez les conjugaisons au passé, les connecteurs, les accords, les accents et le nombre de mots.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Exemple d’épreuve d’expression écrite TCF TP, Québec et Canada – France Éducation international',
      url: 'https://www.france-education-international.fr/document/tcf-tp-qc-ca-exemple-epreuve-ee'
    },
    {
      title: 'Expression écrite du TCF – Centre de langues de l’Université de Sherbrooke',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/expression-ecrite'
    }
  ]
}

export default content
