import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'prova-tef-tcf',

  pt: {
    title: 'Diferenças entre TEF Canada e TCF Canada',
    summary:
      'O IRCC aceita dois exames de francês para a residência permanente: o TEF Canada e o TCF Canada. ' +
      'Os dois avaliam as mesmas 4 habilidades e qualquer um serve, mas o formato das provas é bem diferente.',
    blocks: [
      { type: 'heading', text: 'O que os dois têm em comum' },
      {
        type: 'list',
        items: [
          'São aceitos pelo IRCC para Express Entry e outros programas de imigração.',
          'Avaliam 4 habilidades: compreensão oral, compreensão escrita, expressão oral e expressão escrita. Para a residência permanente, as 4 são obrigatórias.',
          'O resultado é convertido em níveis NCLC (de 1 a 12), que é o que conta no seu perfil.',
          'O resultado vale por 2 anos a partir da data da prova.',
          'Compreensão oral e escrita são de múltipla escolha; expressão oral é feita com um examinador.'
        ]
      },

      { type: 'heading', text: 'Quem aplica' },
      {
        type: 'table',
        headers: ['', 'TEF Canada', 'TCF Canada'],
        rows: [
          [
            'Nome',
            '[[Test d’évaluation de français|Teste de avaliação de francês]]',
            '[[Test de connaissance du français|Teste de conhecimento do francês]]'
          ],
          [
            'Organização',
            '[[Le français des affaires|nome da organização; ao pé da letra, "o francês dos negócios"]] (Câmara de Comércio de Paris Île-de-France)',
            'France Éducation international (Ministério da Educação da França)'
          ],
          [
            'Onde fazer',
            'Centros credenciados (Alliances Françaises e outros)',
            'Centros credenciados (Alliances Françaises e outros)'
          ]
        ]
      },

      { type: 'heading', text: 'Formato de cada prova' },
      {
        type: 'table',
        headers: ['Prova', 'TEF Canada', 'TCF Canada'],
        rows: [
          ['Compreensão oral', '40 questões · 40 min', '39 questões · 35 min'],
          ['Compreensão escrita', '40 questões · 60 min', '39 questões · 60 min'],
          ['Expressão escrita', '2 seções · 60 min', '3 tarefas · 60 min'],
          ['Expressão oral', '2 seções · cerca de 15 min', '3 tarefas · 12 min'],
          ['Duração total', 'cerca de 2h55', 'cerca de 2h47']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção a materiais antigos',
        text:
          'Em dezembro de 2023 o TEF Canada reduziu as compreensões para 40 questões cada (antes eram 60 na oral e 50 na escrita). ' +
          'Apostilas e simulados mais antigos ainda usam o formato anterior.'
      },

      { type: 'heading', text: 'Expressão escrita: as tarefas' },
      {
        type: 'table',
        headers: ['', 'TEF Canada', 'TCF Canada'],
        rows: [
          [
            'Tarefa 1',
            'Seção A: continuar uma notícia do tipo [[fait divers|notícia curta sobre um acontecimento do dia a dia, como um acidente, um crime ou uma curiosidade]] a partir do começo dado. Mínimo de 80 palavras.',
            'Mensagem curta (convite, pedido, informação). 60 a 120 palavras.'
          ],
          [
            'Tarefa 2',
            'Seção B: carta ou texto defendendo um ponto de vista com argumentos. Mínimo de 200 palavras.',
            'Artigo ou relato de experiência (blog, fórum, jornal). 120 a 150 palavras.'
          ],
          ['Tarefa 3', '—', 'Comparar dois documentos curtos e dar sua opinião. 120 a 180 palavras.']
        ]
      },

      { type: 'heading', text: 'Expressão oral: as tarefas' },
      {
        type: 'table',
        headers: ['', 'TEF Canada', 'TCF Canada'],
        rows: [
          [
            'Tarefa 1',
            'Seção A (cerca de 5 min): a partir de um anúncio, você faz perguntas ao examinador para obter informações, como numa ligação.',
            'Entrevista dirigida (2 min, sem preparação): falar de você, sua rotina, trabalho e projetos.'
          ],
          [
            'Tarefa 2',
            'Seção B (cerca de 10 min): apresentar algo de um anúncio e convencer o examinador, que faz o papel de um amigo cético.',
            'Interação (5 min 30, com 2 min de preparação): role-play em que você pede informações ao examinador.'
          ],
          ['Tarefa 3', '—', 'Ponto de vista (4 min 30): expressar e defender sua opinião sobre um tema.']
        ]
      },

      { type: 'heading', text: 'Como a nota é dada' },
      {
        type: 'list',
        items: [
          'TEF Canada: cada prova recebe uma pontuação própria, depois convertida em NCLC.',
          'TCF Canada: compreensões recebem nota de 100 a 699; expressões recebem nota de 0 a 20. Cada uma é convertida em NCLC.',
          'Nos dois, cada habilidade tem seu próprio NCLC. Para a categoria de francês do Express Entry, você precisa de NCLC 7 em todas.'
        ]
      },

      { type: 'heading', text: 'Qual escolher?' },
      {
        type: 'table',
        headers: ['Se você…', 'Tende a ir melhor no'],
        rows: [
          ['Prefere textos longos e argumentar com calma', 'TEF (uma redação longa de 200+ palavras)'],
          ['Prefere textos curtos e variados', 'TCF (três textos menores)'],
          ['Se sente bem em conversas mais longas e persuasivas', 'TEF (seção B de convencer)'],
          ['Prefere falas curtas e mais diretas', 'TCF (três tarefas curtas)'],
          ['Quer menos questões nas compreensões', 'TCF (39 em vez de 40, e 35 min na oral)']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica',
        text:
          'Faça um simulado de cada um antes de escolher. O conteúdo estudado é o mesmo; o que muda é o formato das tarefas, ' +
          'e é nele que você vai treinar a estratégia nas últimas semanas.'
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Preços, datas, regras para refazer a prova e detalhes do formato mudam. Confirme sempre no site oficial do exame e do IRCC antes de se inscrever.'
      }
    ]
  },

  fr: {
    title: 'Différences entre le TEF Canada et le TCF Canada',
    summary:
      'IRCC accepte deux examens de français pour la résidence permanente : le TEF Canada et le TCF Canada. ' +
      'Les deux évaluent les mêmes 4 compétences et l’un ou l’autre convient, mais le format des épreuves est très différent.',
    blocks: [
      { type: 'heading', text: 'Ce qu’ils ont en commun' },
      {
        type: 'list',
        items: [
          'Ils sont acceptés par IRCC pour Entrée express et les autres programmes d’immigration.',
          'Ils évaluent 4 compétences : compréhension orale, compréhension écrite, expression orale et expression écrite. Pour la résidence permanente, les 4 sont obligatoires.',
          'Le résultat est converti en niveaux NCLC (de 1 à 12) : c’est ce qui compte dans votre profil.',
          'Le résultat est valable 2 ans à partir de la date de l’examen.',
          'Les compréhensions orale et écrite sont des QCM ; l’expression orale se passe face à un examinateur.'
        ]
      },

      { type: 'heading', text: 'Qui organise l’examen' },
      {
        type: 'table',
        headers: ['', 'TEF Canada', 'TCF Canada'],
        rows: [
          ['Nom', 'Test d’évaluation de français', 'Test de connaissance du français'],
          [
            'Organisme',
            'Le français des affaires (Chambre de commerce et d’industrie de Paris Île-de-France)',
            'France Éducation international (ministère de l’Éducation nationale)'
          ],
          [
            'Où le passer',
            'Centres agréés (Alliances Françaises et autres)',
            'Centres agréés (Alliances Françaises et autres)'
          ]
        ]
      },

      { type: 'heading', text: 'Format de chaque épreuve' },
      {
        type: 'table',
        headers: ['Épreuve', 'TEF Canada', 'TCF Canada'],
        rows: [
          ['Compréhension orale', '40 questions · 40 min', '39 questions · 35 min'],
          ['Compréhension écrite', '40 questions · 60 min', '39 questions · 60 min'],
          ['Expression écrite', '2 sections · 60 min', '3 tâches · 60 min'],
          ['Expression orale', '2 sections · environ 15 min', '3 tâches · 12 min'],
          ['Durée totale', 'environ 2 h 55', 'environ 2 h 47']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux anciens supports',
        text:
          'En décembre 2023, le TEF Canada a réduit les compréhensions à 40 questions chacune (avant : 60 à l’oral et 50 à l’écrit). ' +
          'Les manuels et examens blancs plus anciens utilisent encore l’ancien format.'
      },

      { type: 'heading', text: 'Expression écrite : les tâches' },
      {
        type: 'table',
        headers: ['', 'TEF Canada', 'TCF Canada'],
        rows: [
          [
            'Tâche 1',
            'Section A : rédiger la suite d’un fait divers à partir du début donné. 80 mots minimum.',
            'Message court (invitation, demande, information). 60 à 120 mots.'
          ],
          [
            'Tâche 2',
            'Section B : lettre ou texte défendant un point de vue avec des arguments. 200 mots minimum.',
            'Article ou récit d’expérience (blog, forum, journal). 120 à 150 mots.'
          ],
          ['Tâche 3', '—', 'Comparer deux documents courts et donner son opinion. 120 à 180 mots.']
        ]
      },

      { type: 'heading', text: 'Expression orale : les tâches' },
      {
        type: 'table',
        headers: ['', 'TEF Canada', 'TCF Canada'],
        rows: [
          [
            'Tâche 1',
            'Section A (environ 5 min) : à partir d’une annonce, vous posez des questions à l’examinateur pour obtenir des informations, comme au téléphone.',
            'Entretien dirigé (2 min, sans préparation) : parler de vous, de votre quotidien, de votre travail et de vos projets.'
          ],
          [
            'Tâche 2',
            'Section B (environ 10 min) : présenter une annonce et convaincre l’examinateur, qui joue le rôle d’un ami sceptique.',
            'Exercice en interaction (5 min 30, dont 2 min de préparation) : jeu de rôle où vous demandez des informations à l’examinateur.'
          ],
          ['Tâche 3', '—', 'Expression d’un point de vue (4 min 30) : exprimer et défendre votre opinion sur un sujet.']
        ]
      },

      { type: 'heading', text: 'Comment la note est attribuée' },
      {
        type: 'list',
        items: [
          'TEF Canada : chaque épreuve reçoit son propre score, ensuite converti en NCLC.',
          'TCF Canada : les compréhensions sont notées de 100 à 699 ; les expressions de 0 à 20. Chaque note est convertie en NCLC.',
          'Dans les deux cas, chaque compétence a son propre NCLC. Pour la catégorie francophone d’Entrée express, il faut le NCLC 7 dans toutes.'
        ]
      },

      { type: 'heading', text: 'Lequel choisir ?' },
      {
        type: 'table',
        headers: ['Si vous…', 'Vous réussirez sans doute mieux au'],
        rows: [
          ['Préférez les textes longs et argumenter calmement', 'TEF (une longue rédaction de 200 mots et plus)'],
          ['Préférez des textes courts et variés', 'TCF (trois textes plus courts)'],
          ['Êtes à l’aise dans des conversations longues et persuasives', 'TEF (section B : convaincre)'],
          ['Préférez des prises de parole courtes et directes', 'TCF (trois tâches courtes)'],
          ['Voulez moins de questions dans les compréhensions', 'TCF (39 au lieu de 40, et 35 min à l’oral)']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil',
        text:
          'Faites un examen blanc de chacun avant de choisir. Le contenu à étudier est le même ; ce qui change, c’est le format des tâches, ' +
          'et c’est sur lui que vous travaillerez la stratégie pendant les dernières semaines.'
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Les tarifs, les dates, les règles pour repasser l’examen et les détails du format changent. Vérifiez toujours sur le site officiel de l’examen et d’IRCC avant de vous inscrire.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'France Éducation international – TCF Canada',
      url: 'https://www.france-education-international.fr/test/tcf-canada?langue=fr'
    },
    {
      title: 'IRCC – Express Entry for French-speaking skilled workers',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/eligibility/francophone-immigration-express-entry.html'
    },
    {
      title: 'Le français des affaires – Livret du responsable TEF 2025',
      url: 'https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2025/10/2025-livret-du-responsable-tef.pdf'
    },
    {
      title: 'NCLC French – TEF Canada Exam Format 2026',
      url: 'https://nclcfrench.com/tef-canada-exam-format'
    },
    {
      title: 'TCF TEF Prep – TEF Canada Format Changes 2026',
      url: 'https://www.tcftefprep.com/blog/tef-canada-exam-format-changes-2026'
    },
    {
      title: 'Focus Frame French – TCF Canada',
      url: 'https://www.focusframefrench.ca/tcf-canada/'
    },
    {
      title: 'L’Alliance New York – TCF Canada',
      url: 'https://lallianceny.org/exams/tcf-canada/'
    },
    {
      title: 'Penvo – TCF Canada Format Guide',
      url: 'https://getpenvo.com/blog/tcf-canada-format-guide'
    }
  ]
}

export default content
