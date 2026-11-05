import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'prova-cecr',

  pt: {
    title: 'Correspondência NCLC ↔ CECR',
    summary:
      'Quase todo material de francês (livros, cursos, aplicativos) se organiza pelos níveis do CECR: A1, A2, B1, B2, C1 e C2. ' +
      'O IRCC, porém, só fala em NCLC. Entender como as duas escalas se relacionam ajuda a escolher material e a saber quanto falta.',
    blocks: [
      { type: 'heading', text: 'O que é o CECR' },
      {
        type: 'paragraph',
        text:
          'O CECR (Cadre européen commun de référence pour les langues; em inglês, CEFR) é a escala europeia de proficiência em línguas, criada pelo Conselho da Europa. ' +
          'Tem 6 níveis em 3 grupos: usuário básico (A1, A2), independente (B1, B2) e proficiente (C1, C2).'
      },
      {
        type: 'table',
        headers: ['Nível', 'Em termos práticos'],
        rows: [
          ['A1', 'Frases muito simples sobre si e necessidades imediatas'],
          ['A2', 'Situações rotineiras: compras, família, trabalho, direções'],
          ['B1', 'Se vira em viagens, conta experiências e justifica opiniões de forma simples'],
          ['B2', 'Entende textos complexos, conversa com naturalidade e defende um ponto de vista com argumentos'],
          ['C1', 'Usa a língua com flexibilidade em contextos profissionais e acadêmicos'],
          ['C2', 'Compreende praticamente tudo e se expressa com precisão e nuance']
        ]
      },

      { type: 'heading', text: 'Como NCLC e CECR se relacionam' },
      {
        type: 'paragraph',
        text:
          'Não existe tabela oficial do IRCC ligando NCLC e CECR. O que circula são correspondências aproximadas. ' +
          'Um estudo encomendado pelo próprio Centro dos NCLC (North e Piccardo, 2019) chegou a uma conclusão um pouco mais exigente do que a versão popular.'
      },
      {
        type: 'table',
        headers: ['NCLC', 'Correspondência popular', 'Estudo do Centro dos NCLC (2019)'],
        rows: [
          ['1–2', 'A1', '—'],
          ['3–4', 'A2', '—'],
          ['5–6', 'B1', '—'],
          ['7', 'B2', 'B1+, com alguns elementos de B2'],
          ['8', 'B2', 'B2 pleno'],
          ['9–10', 'C1', 'B2+'],
          ['11–12', 'C1–C2', '—']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: '"NCLC 7 = B2" é uma aproximação',
        text:
          'Segundo o estudo, o NCLC 7 fica na fronteira entre B1+ e B2. Na prática, isso é uma boa notícia: um B2 bem consolidado ' +
          'costuma garantir o NCLC 7 com folga e frequentemente chega ao NCLC 8.'
      },

      { type: 'heading', text: 'Para que isso serve no seu estudo' },
      {
        type: 'list',
        items: [
          'Escolher material: procure livros e cursos de nível B1 e B2; é aí que está o conteúdo do NCLC 7.',
          'Medir o progresso: testes de nível gratuitos costumam dar o resultado em CECR.',
          'Planejar a meta: mirar um B2 sólido nas 4 habilidades é a forma mais segura de chegar ao NCLC 7.',
          'Saber o que não serve: diplomas como DELF e DALF usam o CECR, mas não são aceitos pelo IRCC para a residência permanente. Só TEF Canada e TCF Canada valem.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica',
        text:
          'Nesta lista de estudos, os tópicos de gramática estão marcados por nível (A1–A2, B1, B2–C1). ' +
          'Para o NCLC 7, a base e o intermediário precisam estar firmes; do avançado, priorize o que aparece na escrita e na fala argumentativa.'
      }
    ]
  },

  fr: {
    title: 'Correspondance NCLC ↔ CECR',
    summary:
      'Presque tout le matériel de français (manuels, cours, applications) est organisé selon les niveaux du CECR : A1, A2, B1, B2, C1 et C2. ' +
      'IRCC, lui, ne parle que de NCLC. Comprendre le lien entre les deux échelles aide à choisir son matériel et à savoir ce qu’il reste à faire.',
    blocks: [
      { type: 'heading', text: 'Qu’est-ce que le CECR ?' },
      {
        type: 'paragraph',
        text:
          'Le CECR (Cadre européen commun de référence pour les langues) est l’échelle européenne de compétence en langues, créée par le Conseil de l’Europe. ' +
          'Il compte 6 niveaux en 3 groupes : utilisateur élémentaire (A1, A2), indépendant (B1, B2) et expérimenté (C1, C2).'
      },
      {
        type: 'table',
        headers: ['Niveau', 'Concrètement'],
        rows: [
          ['A1', 'Phrases très simples sur soi et ses besoins immédiats'],
          ['A2', 'Situations de routine : achats, famille, travail, itinéraires'],
          ['B1', 'Se débrouille en voyage, raconte des expériences et justifie simplement ses opinions'],
          ['B2', 'Comprend des textes complexes, converse avec aisance et défend un point de vue avec des arguments'],
          ['C1', 'Utilise la langue avec souplesse dans des contextes professionnels et universitaires'],
          ['C2', 'Comprend pratiquement tout et s’exprime avec précision et nuance']
        ]
      },

      { type: 'heading', text: 'Le lien entre NCLC et CECR' },
      {
        type: 'paragraph',
        text:
          'Il n’existe pas de grille officielle d’IRCC reliant le NCLC au CECR. Ce qui circule, ce sont des correspondances approximatives. ' +
          'Une étude commandée par le Centre des NCLC lui-même (North et Piccardo, 2019) arrive à une conclusion un peu plus exigeante que la version populaire.'
      },
      {
        type: 'table',
        headers: ['NCLC', 'Correspondance populaire', 'Étude du Centre des NCLC (2019)'],
        rows: [
          ['1–2', 'A1', '—'],
          ['3–4', 'A2', '—'],
          ['5–6', 'B1', '—'],
          ['7', 'B2', 'B1+, avec quelques éléments de B2'],
          ['8', 'B2', 'B2 complet'],
          ['9–10', 'C1', 'B2+'],
          ['11–12', 'C1–C2', '—']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: '« NCLC 7 = B2 » est une approximation',
        text:
          'Selon l’étude, le NCLC 7 se situe à la frontière entre B1+ et B2. En pratique, c’est une bonne nouvelle : un B2 bien consolidé ' +
          'assure généralement le NCLC 7 avec une marge et atteint souvent le NCLC 8.'
      },

      { type: 'heading', text: 'À quoi cela sert dans vos études' },
      {
        type: 'list',
        items: [
          'Choisir son matériel : cherchez des manuels et des cours de niveau B1 et B2 ; c’est là que se trouve le contenu du NCLC 7.',
          'Mesurer ses progrès : les tests de niveau gratuits donnent souvent le résultat en CECR.',
          'Fixer son objectif : viser un B2 solide dans les 4 compétences est le moyen le plus sûr d’atteindre le NCLC 7.',
          'Savoir ce qui ne compte pas : les diplômes DELF et DALF utilisent le CECR, mais IRCC ne les accepte pas pour la résidence permanente. Seuls le TEF Canada et le TCF Canada sont valables.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil',
        text:
          'Dans cette liste d’études, les sujets de grammaire sont classés par niveau (A1–A2, B1, B2–C1). ' +
          'Pour le NCLC 7, la base et l’intermédiaire doivent être solides ; dans l’avancé, donnez la priorité à ce qui sert à l’écrit et à l’oral argumentatifs.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Conseil de l’Europe – Cadre européen commun de référence pour les langues (CECR)',
      url: 'https://www.coe.int/fr/web/common-european-framework-reference-languages'
    },
    {
      title: 'North & Piccardo (2019) – Aligning the CLB to the CEFR (Centre for Canadian Language Benchmarks)',
      url: 'https://www.academia.edu/41360981/North_B_and_Piccardo_E_2019_Aligning_the_Canadian_Language_Benchmarks_CLB_to_the_Common_European_Framework_of_Reference_CEFR_Research_report_Ottawa_Centre_for_Canadian_Language_Benchmarks'
    },
    {
      title: 'IRCC – Express Entry: Language test results (testes aceitos)',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html'
    },
    {
      title: 'Folny (2020) – Adossement du TCF aux NCLC et au CECRL (Canadian Journal of Applied Linguistics)',
      url: 'https://journals.lib.unb.ca/index.php/CJAL/article/view/30437'
    },
    {
      title: 'French for PR – CEFR Levels Explained',
      url: 'https://frenchforpr.com/cefr-levels-explained/'
    }
  ]
}

export default content
