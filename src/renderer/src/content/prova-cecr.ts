import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'prova-cecr',

  pt: {
    title: 'Correspondência NCLC ↔ CECR',
    summary:
      'Quase todo material de francês (livros, cursos, aplicativos) se organiza pelos níveis do CECR: A1, A2, B1, B2, C1 e C2. ' +
      'O IRCC, porém, só fala em NCLC. [1] Entender como as duas escalas se relacionam ajuda a escolher material e a saber quanto falta.',
    blocks: [
      { type: 'heading', text: 'O que é o CECR' },
      {
        type: 'paragraph',
        text:
          'O CECR ([[Cadre européen commun de référence pour les langues|Quadro Europeu Comum de Referência para as Línguas]]; em inglês, CEFR) é a escala europeia de proficiência em línguas, criada pelo Conselho da Europa. [2] ' +
          'Tem 6 níveis em 3 grupos: usuário básico (A1, A2), independente (B1, B2) e proficiente (C1, C2). [2]'
      },
      {
        type: 'table',
        headers: ['Nível', 'Em termos práticos'],
        rows: [
          ['A1', 'Frases muito simples sobre si e necessidades imediatas [2]'],
          ['A2', 'Situações rotineiras: compras, família, trabalho, direções [2]'],
          ['B1', 'Se vira em viagens, conta experiências e justifica opiniões de forma simples [2]'],
          ['B2', 'Entende textos complexos, conversa com naturalidade e defende um ponto de vista com argumentos [2]'],
          ['C1', 'Usa a língua com flexibilidade em contextos profissionais e acadêmicos [2]'],
          ['C2', 'Compreende praticamente tudo e se expressa com precisão e nuance [2]']
        ]
      },

      { type: 'heading', text: 'Como NCLC e CECR se relacionam' },
      {
        type: 'paragraph',
        text:
          'Não existe tabela oficial do IRCC ligando NCLC e CECR. O que circula são correspondências aproximadas. [3] ' +
          'Um estudo encomendado pelo próprio Centro dos NCLC (North e Piccardo) chegou a uma conclusão um pouco mais exigente do que a versão popular. [4] ' +
          'Já o FEI, que organiza o TCF, publicou o alinhamento que usa para interpretar as notas de expressão oral e escrita do TCF, mais próximo da versão popular do que o estudo. [5]'
      },
      {
        type: 'table',
        headers: ['NCLC', 'Correspondência popular', 'Estudo do Centro dos NCLC', 'Alinhamento do FEI para o TCF'],
        rows: [
          ['1–2', 'A1 [3]', 'A1 [4]', 'A1 (NCLC 1) e A2 (NCLC 2) [5]'],
          ['3–4', 'A2 [3]', 'A2 [4]', 'A2 [5]'],
          ['5–6', 'B1 [3]', 'B1 [4]', 'B1 [5]'],
          ['7', 'B2 [3]', 'B1+, com alguns elementos de B2 [4]', 'B2 [5]'],
          ['8', 'B2 [3]', 'B2 pleno [4]', 'B2 [5]'],
          ['9–10', 'C1 [3]', 'B2+ [4]', 'C1 [5]'],
          ['11–12', 'C1–C2', 'C1 (NCLC 11) e C2 (NCLC 12) [4]', 'C2 [5]']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: '"NCLC 7 = B2" é uma aproximação',
        text:
          'Segundo o estudo, o NCLC 7 fica na fronteira entre B1+ e B2, e o NCLC 8 corresponde ao B2. [4] Para o TCF, o FEI associa o NCLC 7 e o NCLC 8 ao B2. [5] Na prática, isso é uma boa notícia: um B2 bem consolidado ' +
          'costuma garantir o NCLC 7 com folga e frequentemente chega ao NCLC 8.'
      },

      { type: 'heading', text: 'Para que isso serve no seu estudo' },
      {
        type: 'list',
        items: [
          'Escolher material: procure livros e cursos de nível B1 e B2; é aí que está o conteúdo do NCLC 7.',
          'Medir o progresso: testes de nível gratuitos costumam dar o resultado em CECR.',
          'Planejar a meta: mirar um B2 sólido nas 4 habilidades é a forma mais segura de chegar ao NCLC 7.',
          'Saber o que não serve: diplomas como DELF e DALF usam o CECR, mas não são aceitos pelo IRCC para a residência permanente. Só TEF Canada e TCF Canada valem. [1] [3]'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica',
        text:
          'Nesta lista de estudos, os tópicos de gramática estão marcados por nível (A1–A2, B1, B2–C1). ' +
          'Para o NCLC 7, a base e o intermediário precisam estar firmes; do avançado, priorize o que aparece na escrita e na fala argumentativa.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'Não aparecem nas fontes desta página: que não existe tabela oficial do IRCC ligando NCLC e CECR e a correspondência popular de NCLC 11–12 com C1–C2. ' +
          'As dicas sobre material e metas são conselho de preparação.'
      }
    ]
  },

  fr: {
    title: 'Correspondance NCLC ↔ CECR',
    summary:
      'Presque tout le matériel de français (manuels, cours, applications) est organisé selon les niveaux du CECR : A1, A2, B1, B2, C1 et C2. ' +
      'IRCC, lui, ne parle que de NCLC. [1] Comprendre le lien entre les deux échelles aide à choisir son matériel et à savoir ce qu’il reste à faire.',
    blocks: [
      { type: 'heading', text: 'Qu’est-ce que le CECR ?' },
      {
        type: 'paragraph',
        text:
          'Le CECR (Cadre européen commun de référence pour les langues) est l’échelle européenne de compétence en langues, créée par le Conseil de l’Europe. [2] ' +
          'Il compte 6 niveaux en 3 groupes : utilisateur élémentaire (A1, A2), indépendant (B1, B2) et expérimenté (C1, C2). [2]'
      },
      {
        type: 'table',
        headers: ['Niveau', 'Concrètement'],
        rows: [
          ['A1', 'Phrases très simples sur soi et ses besoins immédiats [2]'],
          ['A2', 'Situations de routine : achats, famille, travail, itinéraires [2]'],
          ['B1', 'Se débrouille en voyage, raconte des expériences et justifie simplement ses opinions [2]'],
          ['B2', 'Comprend des textes complexes, converse avec aisance et défend un point de vue avec des arguments [2]'],
          ['C1', 'Utilise la langue avec souplesse dans des contextes professionnels et universitaires [2]'],
          ['C2', 'Comprend pratiquement tout et s’exprime avec précision et nuance [2]']
        ]
      },

      { type: 'heading', text: 'Le lien entre NCLC et CECR' },
      {
        type: 'paragraph',
        text:
          'Il n’existe pas de grille officielle d’IRCC reliant le NCLC au CECR. Ce qui circule, ce sont des correspondances approximatives. [3] ' +
          'Une étude commandée par le Centre des NCLC lui-même (North et Piccardo) arrive à une conclusion un peu plus exigeante que la version populaire. [4] ' +
          'Quant à France Éducation international, qui conçoit le TCF, elle a publié la correspondance qu’elle utilise pour interpréter les notes d’expression orale et écrite du TCF, plus proche de la version populaire que l’étude. [5]'
      },
      {
        type: 'table',
        headers: ['NCLC', 'Correspondance populaire', 'Étude du Centre des NCLC', 'Correspondance de FEI pour le TCF'],
        rows: [
          ['1–2', 'A1 [3]', 'A1 [4]', 'A1 (NCLC 1) et A2 (NCLC 2) [5]'],
          ['3–4', 'A2 [3]', 'A2 [4]', 'A2 [5]'],
          ['5–6', 'B1 [3]', 'B1 [4]', 'B1 [5]'],
          ['7', 'B2 [3]', 'B1+, avec quelques éléments de B2 [4]', 'B2 [5]'],
          ['8', 'B2 [3]', 'B2 complet [4]', 'B2 [5]'],
          ['9–10', 'C1 [3]', 'B2+ [4]', 'C1 [5]'],
          ['11–12', 'C1–C2', 'C1 (NCLC 11) et C2 (NCLC 12) [4]', 'C2 [5]']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: '« NCLC 7 = B2 » est une approximation',
        text:
          'Selon l’étude, le NCLC 7 se situe à la frontière entre B1+ et B2, et le NCLC 8 correspond au B2. [4] Pour le TCF, FEI associe le NCLC 7 et le NCLC 8 au B2. [5] En pratique, c’est une bonne nouvelle : un B2 bien consolidé ' +
          'assure généralement le NCLC 7 avec une marge et atteint souvent le NCLC 8.'
      },

      { type: 'heading', text: 'À quoi cela sert dans vos études' },
      {
        type: 'list',
        items: [
          'Choisir son matériel : cherchez des manuels et des cours de niveau B1 et B2 ; c’est là que se trouve le contenu du NCLC 7.',
          'Mesurer ses progrès : les tests de niveau gratuits donnent souvent le résultat en CECR.',
          'Fixer son objectif : viser un B2 solide dans les 4 compétences est le moyen le plus sûr d’atteindre le NCLC 7.',
          'Savoir ce qui ne compte pas : les diplômes DELF et DALF utilisent le CECR, mais IRCC ne les accepte pas pour la résidence permanente. Seuls le TEF Canada et le TCF Canada sont valables. [1] [3]'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil',
        text:
          'Dans cette liste d’études, les sujets de grammaire sont classés par niveau (A1–A2, B1, B2–C1). ' +
          'Pour le NCLC 7, la base et l’intermédiaire doivent être solides ; dans l’avancé, donnez la priorité à ce qui sert à l’écrit et à l’oral argumentatifs.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'N’apparaissent pas dans les sources de cette fiche : l’absence de grille officielle d’IRCC reliant le NCLC au CECR et la correspondance populaire du NCLC 11–12 avec C1–C2. ' +
          'Les conseils sur le matériel et les objectifs sont des conseils de préparation.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  // Ordem de aparecimento no texto: o texto cita cada fonte pelo número da posição ([1], [2]…)
  sources: [
    {
      title: 'IRCC – Express Entry: Language test results (testes aceitos)',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html'
    },
    {
      title: 'Conseil de l’Europe – CECR, échelle globale (niveaux communs de compétences)',
      url: 'https://www.coe.int/fr/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale'
    },
    {
      title: 'French for PR – CEFR Levels Explained',
      url: 'https://frenchforpr.com/cefr-levels-explained/'
    },
    {
      title: 'North & Piccardo – Aligning the CLB and CEFR (rapport de recherche, Centre for Canadian Language Benchmarks, décembre 2018, publié en 2019)',
      url: 'https://www.language.ca/wp-content/uploads/2019/01/Aligning-the-CLB-and-CEFR.pdf'
    },
    {
      title: 'Folny (2020) – Adossement du TCF aux NCLC et au CECRL (Canadian Journal of Applied Linguistics)',
      url: 'https://journals.lib.unb.ca/index.php/CJAL/article/view/30437'
    }
  ]
}

export default content
