import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-tcf-3',

  pt: {
    title: 'TCF – Tarefa 3: comparar opiniões e apresentar seu ponto de vista',
    summary:
      'Aprenda a analisar dois documentos que apresentam opiniões diferentes sobre um tema social, identificar seus argumentos e comparar seus pontos de vista. ' +
      'Você vai praticar a reformulação de ideias, a apresentação de uma opinião pessoal e a construção de uma conclusão coerente, respeitando o limite de palavras da Tarefa 3 do TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. O que a tarefa exige?' },
      {
        type: 'paragraph',
        text:
          'Na [[Tâche 3|Tarefa 3]] ' +
          'da expressão escrita do TCF Canada, você deve escrever um texto que compare dois pontos de vista sobre uma questão social, apresentados em dois documentos diferentes. ' +
          'Depois de explicar as posições dos autores, você precisa apresentar sua própria opinião sobre o assunto. ' +
          'O texto pode ser destinado a um jornal, site, colega ou superior hierárquico, conforme o enunciado. A resposta deve ter entre 120 e 180 palavras. ' +
          'Não basta resumir os dois documentos separadamente: é necessário mostrar como as opiniões se relacionam e desenvolver um posicionamento pessoal com justificativas.'
      },
      { type: 'heading', text: '2. Como organizar a comparação' },
      {
        type: 'list',
        items: [
          'Leia os dois documentos e identifique a ideia principal de cada um. Descubra qual posição cada autor defende.',
          'Selecione os argumentos mais importantes. Não tente reproduzir todos os detalhes dos documentos.',
          'Identifique semelhanças e diferenças. Os autores concordam em algum ponto? Apresentam soluções diferentes? Destacam consequências opostas?',
          'Reformule as informações com suas próprias palavras. Evite copiar frases inteiras dos documentos.',
          'Apresente sua opinião pessoal de maneira explícita, sem simplesmente repetir a posição de um dos autores.',
          'Justifique sua posição com argumentos e exemplos relevantes e finalize com uma conclusão coerente.',
          
            'Utilize conectores como [[d’une part|por um lado]], [[d’autre part|por outro lado]], [[tandis que|enquanto]], [[cependant|entretanto]], [[en revanche|em contrapartida]] ' +
            'e [[à mon avis|na minha opinião]].'
        ]
      },
      { type: 'heading', text: '3. Exemplo prático: dois pontos de vista sobre o teletrabalho' },
      { type: 'paragraph', text: 'Documento 1: opinião favorável ao teletrabalho.' },
      {
        type: 'paragraph',
        text:
          '[[Le télétravail offre une plus grande souplesse aux employés.|O teletrabalho oferece maior flexibilidade aos funcionários.]] ' +
          '[[En réduisant les déplacements quotidiens, il leur permet de consacrer davantage de temps à leur famille et à leurs activités personnelles.|Ao reduzir os deslocamentos diários, permite que eles dediquem mais tempo à família e às atividades pessoais.]] ' +
          '[[Plusieurs entreprises constatent également que leurs équipes peuvent se concentrer plus facilement sur certaines tâches à distance.|Várias empresas também constatam que suas equipes conseguem se concentrar mais facilmente em determinadas tarefas à distância.]] ' +
          '[[Pour ces raisons, maintenir la possibilité de travailler de la maison constitue un avantage important pour les salariés.|Por essas razões, manter a possibilidade de trabalhar de casa representa uma vantagem importante para os trabalhadores.]]'
      },
      { type: 'paragraph', text: 'Documento 2: opinião que destaca os problemas do teletrabalho.' },
      {
        type: 'paragraph',
        text:
          '[[Le travail à distance comporte toutefois des limites.|O trabalho remoto, entretanto, apresenta limitações.]] ' +
          '[[Les échanges spontanés entre collègues deviennent moins fréquents, ce qui peut ralentir la résolution de certains problèmes.|As conversas espontâneas entre colegas se tornam menos frequentes, o que pode atrasar a resolução de determinados problemas.]] ' +
          '[[Les nouveaux employés risquent aussi de se sentir isolés et d’avoir plus de difficulté à s’intégrer à leur équipe.|Os novos funcionários também correm o risco de se sentirem isolados e terem mais dificuldade para se integrar à equipe.]] ' +
          '[[Une présence régulière au bureau favoriserait donc la collaboration, la formation et le sentiment d’appartenance.|Uma presença regular no escritório favoreceria, portanto, a colaboração, a formação e o sentimento de pertencimento.]]'
      },
      { type: 'heading', text: '4. Exemplo de resposta: comparação e opinião pessoal' },
      {
        type: 'paragraph',
        text:
          '[[La question du télétravail suscite des avis partagés.|A questão do teletrabalho gera opiniões divergentes.]] ' +
          '[[Le premier document souligne ses avantages : la réduction des déplacements, une meilleure conciliation entre vie professionnelle et vie personnelle et une concentration accrue.|O primeiro documento destaca suas vantagens: a redução dos deslocamentos, uma melhor conciliação entre a vida profissional e a vida pessoal e uma maior capacidade de concentração.]] ' +
          '[[Le second insiste plutôt sur ses limites, notamment l’isolement des employés, la communication moins spontanée et l’intégration des nouvelles recrues.|O segundo enfatiza suas limitações, especialmente o isolamento dos funcionários, a comunicação menos espontânea e a integração dos novos colaboradores.]] ' +
          '[[À mon avis, le télétravail devrait être maintenu, mais dans un cadre hybride.|Na minha opinião, o teletrabalho deveria ser mantido, mas dentro de um modelo híbrido.]] ' +
          '[[Il permet de gagner du temps et offre une certaine souplesse, particulièrement aux personnes qui habitent loin de leur lieu de travail.|Ele permite economizar tempo e oferece certa flexibilidade, principalmente às pessoas que moram longe do local de trabalho.]] ' +
          '[[Cependant, la présence au bureau reste utile pour les échanges rapides, la formation et les projets collectifs.|Entretanto, a presença no escritório continua sendo útil para conversas rápidas, treinamentos e projetos coletivos.]] ' +
          '[[Les employeurs pourraient donc prévoir quelques journées communes en personne tout en laissant aux équipes le choix de travailler à distance le reste de la semaine.|Os empregadores poderiam, portanto, estabelecer alguns dias de trabalho presencial em comum, permitindo que as equipes escolhessem trabalhar remotamente no restante da semana.]] ' +
          '[[Cette formule me semble être un bon compromis.|Esse modelo me parece um bom compromisso.]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com o verbo [[prétendre|alegar]]',
        text:
          'Para apresentar a posição de um autor, muitos brasileiros usam [[prétendre|alegar]] como se fosse “pretender”. Em francês, [[prétendre que|alegar que]] ' +
          'significa afirmar ou sustentar algo, e não ter a intenção de fazer algo. ' +
          'Por exemplo: [[L’auteur prétend que le télétravail est plus efficace.|O autor afirma que o teletrabalho é mais eficaz.]] ' +
          'Para falar de uma intenção, use [[avoir l’intention de|ter a intenção de]]. ' +
          'Outro erro frequente é apresentar um resumo completo do documento 1, depois outro do documento 2 e terminar com uma opinião muito curta: a tarefa exige comparar os pontos de vista, mostrando as relações entre eles.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que a prova realmente cobra',
        text:
          'Segundo o material oficial de France Éducation international e a Universidade de Sherbrooke, a Tarefa 3 exige entre 120 e 180 palavras, com a comparação de dois pontos de vista sobre um fato social e a sua opinião sobre o tema. ' +
          'Não copie os documentos: demonstre capacidade de reformulação, utilizando sinônimos e estruturas diferentes. ' +
          'Confira se sua opinião está claramente identificada e se os argumentos realmente respondem ao tema. ' +
          'Como sugestão prática, e não como regra da prova, reserve cerca de um terço do texto para apresentar e comparar os documentos e o restante para desenvolver sua opinião e concluir. ' +
          'Ao revisar, verifique a contagem de palavras, a concordância, os tempos verbais, os conectores e a pontuação.'
      }
    ]
  },

  fr: {
    title: 'TCF – Tâche 3 : comparer deux documents et donner son avis',
    summary:
      'Apprenez à analyser deux documents présentant des opinions différentes sur un sujet de société, à identifier leurs arguments et à comparer leurs points de vue. ' +
      'Vous pratiquerez la reformulation des idées, la présentation d’une opinion personnelle et la construction d’une conclusion cohérente, tout en respectant le nombre de mots exigé dans la tâche 3 du TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. Que demande cette tâche ?' },
      {
        type: 'paragraph',
        text:
          'Dans la tâche 3 de l’expression écrite du TCF Canada, vous devez rédiger un texte qui compare deux points de vue sur un fait de société, présentés dans deux documents différents. ' +
          'Après avoir expliqué les positions des auteurs, vous devez donner votre propre avis sur le sujet. ' +
          'Le texte peut être destiné à un journal, à un site Internet, à un collègue ou à un supérieur hiérarchique, selon la consigne. ' +
          'Votre réponse doit compter entre 120 et 180 mots. ' +
          'Il ne suffit pas de résumer les deux documents séparément : vous devez montrer les liens entre les opinions et développer votre position personnelle en la justifiant.'
      },
      { type: 'heading', text: '2. Comment organiser la comparaison' },
      {
        type: 'list',
        items: [
          'Lisez les deux documents et identifiez l’idée principale de chacun. Déterminez la position défendue par chaque auteur.',
          'Sélectionnez les arguments les plus importants. N’essayez pas de reprendre tous les détails des documents.',
          
            'Repérez les ressemblances et les différences. Les auteurs sont-ils d’accord sur certains points ? Proposent-ils des solutions différentes ? ' +
            'Soulignent-ils des conséquences opposées ?',
          'Reformulez les informations avec vos propres mots. Évitez de recopier des phrases entières des documents.',
          'Présentez clairement votre opinion personnelle, sans simplement reprendre la position de l’un des auteurs.',
          'Justifiez votre position à l’aide d’arguments et d’exemples pertinents, puis terminez par une conclusion cohérente.',
          'Utilisez des connecteurs comme « d’une part », « d’autre part », « tandis que », « cependant », « en revanche » et « à mon avis ».'
        ]
      },
      { type: 'heading', text: '3. Exemple pratique : deux points de vue sur le télétravail' },
      { type: 'paragraph', text: 'Document 1 : un point de vue favorable au télétravail.' },
      {
        type: 'paragraph',
        text:
          'Le télétravail offre une plus grande souplesse aux employés. ' +
          'En réduisant les déplacements quotidiens, il leur permet de consacrer davantage de temps à leur famille et à leurs activités personnelles. ' +
          'Plusieurs entreprises constatent également que leurs équipes peuvent se concentrer plus facilement sur certaines tâches à distance. ' +
          'Pour ces raisons, maintenir la possibilité de travailler de la maison constitue un avantage important pour les salariés.'
      },
      { type: 'paragraph', text: 'Document 2 : un point de vue qui souligne les inconvénients du télétravail.' },
      {
        type: 'paragraph',
        text:
          'Le travail à distance comporte toutefois des limites. ' +
          'Les échanges spontanés entre collègues deviennent moins fréquents, ce qui peut ralentir la résolution de certains problèmes. ' +
          'Les nouveaux employés risquent aussi de se sentir isolés et d’avoir plus de difficulté à s’intégrer à leur équipe. ' +
          'Une présence régulière au bureau favoriserait donc la collaboration, la formation et le sentiment d’appartenance.'
      },
      { type: 'heading', text: '4. Exemple de réponse : comparaison et opinion personnelle' },
      {
        type: 'paragraph',
        text:
          'La question du télétravail suscite des avis partagés. ' +
          'Le premier document souligne ses avantages : la réduction des déplacements, une meilleure conciliation entre vie professionnelle et vie personnelle et une concentration accrue. ' +
          'Le second insiste plutôt sur ses limites, notamment l’isolement des employés, la communication moins spontanée et l’intégration des nouvelles recrues. ' +
          'À mon avis, le télétravail devrait être maintenu, mais dans un cadre hybride. ' +
          'Il permet de gagner du temps et offre une certaine souplesse, particulièrement aux personnes qui habitent loin de leur lieu de travail. ' +
          'Cependant, la présence au bureau reste utile pour les échanges rapides, la formation et les projets collectifs. ' +
          'Les employeurs pourraient donc prévoir quelques journées communes en personne tout en laissant aux équipes le choix de travailler à distance le reste de la semaine. ' +
          'Cette formule me semble être un bon compromis.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au verbe prétendre',
        text:
          'Pour présenter la position d’un auteur, beaucoup de lusophones emploient « prétendre » comme s’il signifiait « pretender » en portugais. ' +
          'En français, « prétendre que » veut dire affirmer ou soutenir quelque chose, et non avoir l’intention de le faire. ' +
          'Par exemple : « L’auteur prétend que le télétravail est plus efficace. » Pour parler d’une intention, utilisez « avoir l’intention de ». ' +
          'Une autre erreur fréquente consiste à résumer entièrement le document 1, puis le document 2, avant de terminer par une opinion trop courte : la tâche exige de comparer les points de vue en montrant les relations entre eux.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que l’examen évalue réellement',
        text:
          'Selon le matériel officiel de France Éducation international et de l’Université de Sherbrooke, la tâche 3 exige entre 120 et 180 mots, avec la comparaison de deux points de vue sur un fait de société et votre avis sur le thème. ' +
          'Ne recopiez pas les documents : montrez votre capacité à reformuler les idées en utilisant des synonymes et des structures différentes. ' +
          'Vérifiez que votre opinion est clairement identifiable et que vos arguments répondent réellement au sujet. ' +
          'À titre de suggestion pratique, et non de règle de l’examen, consacrez environ un tiers du texte à la présentation et à la comparaison des documents, puis le reste au développement de votre opinion et à la conclusion. ' +
          'Lors de la relecture, contrôlez le nombre de mots, les accords, les temps verbaux, les connecteurs et la ponctuation.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'TCF Canada – Présentation des épreuves – France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
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
