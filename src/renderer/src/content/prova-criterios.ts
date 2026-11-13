import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'prova-criterios',

  pt: {
    title: 'Critérios de correção das provas de produção',
    summary:
      'Nas provas de expressão oral e escrita não existe "resposta certa": examinadores avaliam o seu texto e a sua fala por critérios fixos. ' +
      'Conhecer esses critérios mostra onde os pontos realmente estão.',
    blocks: [
      { type: 'heading', text: 'Como a correção funciona' },
      {
        type: 'list',
        items: [
          'TEF Canada: cada critério é avaliado num nível de referência e o conjunto vira uma pontuação da prova, depois convertida em NCLC. [2]',
          'TCF Canada: cada prova de expressão recebe uma nota de 0 a 20, convertida em NCLC. [5] [6] Os materiais de preparação informam que a correção é feita por dois corretores independentes. [5] [8]',
          'Nos dois exames, as grades completas não são publicadas, mas os critérios principais são conhecidos e se repetem. [7]'
        ]
      },

      { type: 'heading', text: 'Os critérios, em quatro grupos' },
      {
        type: 'table',
        headers: ['Critério', 'O que o corretor observa'],
        rows: [
          ['Realização da tarefa', 'Você fez o que foi pedido? Respeitou o tipo de texto, o destinatário, o registro (tu/vous) e o número de palavras? [2] [6] [7]'],
          ['Coerência e coesão', 'As ideias seguem uma ordem lógica? Há parágrafos, conectores e uma conclusão? [3] [6] [7]'],
          ['Vocabulário', 'O vocabulário é variado e preciso, ou você repete as mesmas palavras? [1] [6] [7]'],
          ['Gramática', 'As estruturas são variadas e corretas: tempos verbais, concordâncias, frases complexas? [1] [6]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Na expressão oral entram também a pronúncia, a fluidez (falar sem pausas longas) e a interação: reagir ao que o examinador diz em vez de recitar um texto decorado. [1] [2] [4]'
      },

      { type: 'heading', text: 'Critérios específicos de cada tarefa' },
      {
        type: 'table',
        headers: ['Tarefa', 'O que pesa mais'],
        rows: [
          ['TEF – EO Seção A', 'Fazer perguntas variadas e pertinentes, cobrindo os pontos do anúncio, e reagir às respostas [1] [2]'],
          ['TEF – EO Seção B', 'Argumentar: apresentar vantagens, responder às objeções e insistir de forma convincente [2]'],
          ['TEF – EE Seção A', 'Continuar a história de forma coerente com o começo, no estilo de notícia [3]'],
          ['TEF – EE Seção B', 'Defender uma posição clara com argumentos e exemplos organizados [3]'],
          ['TCF – EE Tarefas 1 a 3', 'Cumprir a função de cada texto (informar, relatar, comparar e opinar) dentro da faixa de palavras [6] [7]'],
          ['TCF – EO Tarefas 2 e 3', 'Na 2, conduzir a interação com perguntas; na 3, defender uma opinião com argumentos [5] [7]']
        ]
      },

      { type: 'heading', text: 'O que costuma tirar pontos' },
      {
        type: 'list',
        items: [
          'Fugir do tema ou responder só parte da tarefa. [5] [6] [7]',
          'Texto curto demais (ou, no TCF, muito acima da faixa de palavras). [6] [7]',
          'Registro errado: tratar por "tu" quem deveria ser "vous", ou o contrário.',
          'Repetir as mesmas palavras e estruturas ("[[c’est bien|é bom]]", "[[c’est intéressant|é interessante]]") do começo ao fim. [1]',
          'Frases soltas, sem conectores nem organização em parágrafos. [3] [6]',
          'Na fala: monólogo decorado que ignora o examinador, silêncios longos.'
        ]
      },

      { type: 'heading', text: 'O que mostra um nível B2 (NCLC 7)' },
      {
        type: 'list',
        items: [
          'Texto organizado em parágrafos, com introdução e conclusão. [3] [5]',
          'Conectores variados: [[cependant|no entanto]], [[en revanche|em compensação]], [[par conséquent|por consequência]], [[d’ailleurs|aliás]], [[bien que|embora]]… [3]',
          'Opinião clara, sustentada por argumentos e exemplos concretos. [3] [7]',
          'Mistura de tempos verbais bem usados: presente, passé composé, imparfait, futuro, condicional.',
          'Algumas estruturas complexas: relativos ([[dont|do qual, cujo]], [[lequel|o qual]]), subjuntivo depois de [[il faut que|é preciso que]] e [[bien que|embora]], hipóteses com [[si|se]].',
          'Erros pontuais são aceitáveis, desde que não atrapalhem a compreensão.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como usar isso nos treinos',
        text:
          'Depois de cada redação ou gravação, passe pela tabela de critérios como uma checklist. ' +
          'Dê uma nota de 1 a 5 em cada critério e foque o próximo treino no mais fraco.'
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'As grades oficiais completas não são públicas. Esta página resume os critérios divulgados pelos organizadores e por centros de preparação.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'Não aparecem nas fontes desta página: que as grades oficiais completas não são publicadas; que o registro errado, o monólogo decorado e os silêncios longos tiram pontos; ' +
          'e, na lista do nível B2, os tempos verbais, as estruturas complexas e os erros aceitáveis. ' +
          'A nota de 1 a 5 por critério nos treinos é conselho de preparação. Só a página do TCF Canada da France Éducation international é oficial; as outras fontes são cursos de preparação.'
      }
    ]
  },

  fr: {
    title: 'Critères d’évaluation des épreuves d’expression',
    summary:
      'Aux épreuves d’expression orale et écrite, il n’y a pas de « bonne réponse » : des examinateurs évaluent votre texte et votre prise de parole selon des critères fixes. ' +
      'Connaître ces critères montre où se trouvent vraiment les points.',
    blocks: [
      { type: 'heading', text: 'Comment se fait la correction' },
      {
        type: 'list',
        items: [
          'TEF Canada : chaque critère est évalué à un niveau de référence et l’ensemble donne un score pour l’épreuve, ensuite converti en NCLC. [2]',
          'TCF Canada : chaque épreuve d’expression reçoit une note de 0 à 20, convertie en NCLC. [5] [6] Selon les supports de préparation, la correction est faite par deux correcteurs indépendants. [5] [8]',
          'Dans les deux examens, les grilles complètes ne sont pas publiées, mais les principaux critères sont connus et reviennent toujours. [7]'
        ]
      },

      { type: 'heading', text: 'Les critères, en quatre groupes' },
      {
        type: 'table',
        headers: ['Critère', 'Ce que le correcteur observe'],
        rows: [
          ['Réalisation de la tâche', 'Avez-vous fait ce qui était demandé ? Respecté le type de texte, le destinataire, le registre (tu/vous) et le nombre de mots ? [2] [6] [7]'],
          ['Cohérence et cohésion', 'Les idées suivent-elles un ordre logique ? Y a-t-il des paragraphes, des connecteurs et une conclusion ? [3] [6] [7]'],
          ['Lexique', 'Le vocabulaire est-il varié et précis, ou répétez-vous les mêmes mots ? [1] [6] [7]'],
          ['Grammaire', 'Les structures sont-elles variées et correctes : temps verbaux, accords, phrases complexes ? [1] [6]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'À l’oral s’ajoutent la prononciation, l’aisance (parler sans longues pauses) et l’interaction : réagir à ce que dit l’examinateur au lieu de réciter un texte appris par cœur. [1] [2] [4]'
      },

      { type: 'heading', text: 'Critères propres à chaque tâche' },
      {
        type: 'table',
        headers: ['Tâche', 'Ce qui compte le plus'],
        rows: [
          ['TEF – EO Section A', 'Poser des questions variées et pertinentes, couvrant les points de l’annonce, et réagir aux réponses [1] [2]'],
          ['TEF – EO Section B', 'Argumenter : présenter les avantages, répondre aux objections et insister de façon convaincante [2]'],
          ['TEF – EE Section A', 'Poursuivre l’histoire de façon cohérente avec le début, dans le style d’un article [3]'],
          ['TEF – EE Section B', 'Défendre une position claire avec des arguments et des exemples organisés [3]'],
          ['TCF – EE Tâches 1 à 3', 'Remplir la fonction de chaque texte (informer, raconter, comparer et donner son avis) dans la fourchette de mots [6] [7]'],
          ['TCF – EO Tâches 2 et 3', 'En 2, mener l’interaction par des questions ; en 3, défendre une opinion avec des arguments [5] [7]']
        ]
      },

      { type: 'heading', text: 'Ce qui fait souvent perdre des points' },
      {
        type: 'list',
        items: [
          'Sortir du sujet ou ne traiter qu’une partie de la tâche. [5] [6] [7]',
          'Texte trop court (ou, au TCF, nettement au-dessus de la fourchette de mots). [6] [7]',
          'Mauvais registre : tutoyer quelqu’un qu’il fallait vouvoyer, ou l’inverse.',
          'Répéter les mêmes mots et structures (« c’est bien », « c’est intéressant ») du début à la fin. [1]',
          'Phrases juxtaposées, sans connecteurs ni organisation en paragraphes. [3] [6]',
          'À l’oral : monologue appris par cœur qui ignore l’examinateur, longs silences.'
        ]
      },

      { type: 'heading', text: 'Ce qui montre un niveau B2 (NCLC 7)' },
      {
        type: 'list',
        items: [
          'Texte organisé en paragraphes, avec une introduction et une conclusion. [3] [5]',
          'Connecteurs variés : cependant, en revanche, par conséquent, d’ailleurs, bien que… [3]',
          'Opinion claire, appuyée par des arguments et des exemples concrets. [3] [7]',
          'Temps verbaux variés et bien employés : présent, passé composé, imparfait, futur, conditionnel.',
          'Quelques structures complexes : relatifs (dont, lequel), subjonctif après il faut que et bien que, hypothèses avec si.',
          'Quelques erreurs sont acceptables tant qu’elles ne gênent pas la compréhension.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment l’utiliser à l’entraînement',
        text:
          'Après chaque rédaction ou enregistrement, reprenez le tableau des critères comme une liste de vérification. ' +
          'Donnez une note de 1 à 5 à chaque critère et concentrez le prochain entraînement sur le plus faible.'
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Les grilles officielles complètes ne sont pas publiques. Cette page résume les critères diffusés par les organismes et par des centres de préparation.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'N’apparaissent pas dans les sources de cette fiche : le fait que les grilles officielles complètes ne sont pas publiées ; le fait qu’un mauvais registre, un monologue appris par cœur et de longs silences font perdre des points ; ' +
          'et, dans la liste du niveau B2, les temps verbaux, les structures complexes et les erreurs acceptables. ' +
          'La note de 1 à 5 par critère à l’entraînement est un conseil de préparation. Seule la page du TCF Canada de France Éducation international est officielle ; les autres sources sont des cours de préparation.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  // A ordem é fixa: o texto cita cada fonte pelo número da posição ([1], [2]…)
  sources: [
    {
      title: 'French Circles – TEF : critères d’évaluation de l’expression orale',
      url: 'https://www.frenchcircles.ca/tef-criteres-devaluation-expression-orale/'
    },
    {
      title: 'ATF Montréal – Expression orale TEF Canada et TEFAQ : le guide',
      url: 'https://atfmontreal.ca/2024/11/11/expression-orale-tef-canada-et-tefaq-tous-les-details/'
    },
    {
      title: 'TEF Canada Online – Maîtriser l’expression écrite au TEF Canada',
      url: 'https://tefcanadaonline.com/maitriser-lexpression-ecrite-au-tef-canada-votre-guide-complet-pour-une-redaction-impeccable/'
    },
    {
      title: 'Formation TCF Canada – Décryptage des critères d’évaluation du TCF Canada',
      url: 'https://www.formation-tcfcanada.com/tcf-canada-decryptage-criteres-evaluation'
    },
    {
      title: 'TCFcad – Grille d’évaluation du TCF Canada : expression écrite et orale',
      url: 'https://tcfcad.com/blog/grille-evaluation-expression-tcf-canada.html'
    },
    {
      title: 'Mon TCF Canada – Expression écrite : tâches, nombre de mots et notation',
      url: 'https://montcfcanada.com/expression-ecrite-tcf-canada'
    },
    {
      title: 'France Éducation international – TCF Canada',
      url: 'https://www.france-education-international.fr/test/tcf-canada?langue=fr'
    },
    {
      title: 'Le français des affaires – Manuel du candidat au e-TEF Canada (2018, ancien format)',
      url: 'https://www.festivalff.cz/files/files/manuel_e-tef_canada(1).pdf'
    }
  ]
}

export default content
