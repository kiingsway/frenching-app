import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'prova-formato',

  pt: {
    title: 'Formato e tempo de cada prova',
    summary:
      'Saber exatamente quanto tempo você tem e como cada prova funciona evita surpresas no dia. ' +
      'Esta página detalha as quatro provas do TEF Canada e do TCF Canada e sugere como dividir o tempo.',
    blocks: [
      { type: 'heading', text: 'Visão geral' },
      {
        type: 'table',
        headers: ['Prova', 'TEF Canada', 'TCF Canada', 'Como é feita'],
        rows: [
          ['Compreensão oral', '40 questões · 40 min', '39 questões · 35 min', 'Coletiva, múltipla escolha, geralmente no computador'],
          ['Compreensão escrita', '40 questões · 60 min', '39 questões · 60 min', 'Coletiva, múltipla escolha, geralmente no computador'],
          ['Expressão escrita', '2 seções · 60 min', '3 tarefas · 60 min', 'Coletiva, redação'],
          ['Expressão oral', '2 seções · cerca de 15 min', '3 tarefas · 12 min', 'Individual, com um examinador']
        ]
      },
      {
        type: 'paragraph',
        text:
          'As provas coletivas costumam acontecer em sequência no mesmo dia; a oral pode ser marcada para outro horário. ' +
          'O total fica em torno de 2h55 no TEF e 2h47 no TCF, sem contar intervalos e chamada.'
      },

      { type: 'heading', text: 'Compreensão oral' },
      {
        type: 'list',
        items: [
          'Você ouve gravações: anúncios, conversas, entrevistas de rádio e debates, do mais fácil para o mais difícil.',
          'Em geral cada áudio toca uma única vez. Leia as perguntas e alternativas antes de o áudio começar.',
          'O ritmo é ditado pelos áudios: não dá para voltar nem pausar.',
          'TEF: 40 questões em 40 minutos. TCF: 39 questões em 35 minutos.'
        ]
      },

      { type: 'heading', text: 'Compreensão escrita' },
      {
        type: 'list',
        items: [
          'Textos curtos do dia a dia no começo (avisos, anúncios, e-mails) e textos longos e argumentativos no final.',
          'Você controla o próprio tempo: cerca de 1 minuto e meio por questão nos dois exames.',
          'As últimas questões são as mais difíceis e demoradas. Não gaste tempo demais nas primeiras.'
        ]
      },

      { type: 'heading', text: 'Expressão escrita' },
      {
        type: 'table',
        headers: ['Tarefa', 'O que fazer', 'Tamanho', 'Tempo sugerido'],
        rows: [
          [
            'TEF – Seção A',
            'Continuar uma notícia do tipo [[fait divers|notícia curta sobre um acontecimento do dia a dia, como um acidente, um crime ou uma curiosidade]] a partir do começo dado',
            'Mínimo de 80 palavras',
            '25 min'
          ],
          ['TEF – Seção B', 'Texto ou carta defendendo um ponto de vista', 'Mínimo de 200 palavras', '35 min'],
          ['TCF – Tarefa 1', 'Mensagem curta: convite, pedido, informação', '60 a 120 palavras', '10 a 15 min'],
          ['TCF – Tarefa 2', 'Artigo ou relato de experiência', '120 a 150 palavras', '15 a 20 min'],
          ['TCF – Tarefa 3', 'Comparar dois documentos e dar sua opinião', '120 a 180 palavras', '25 a 30 min']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Reserve tempo para revisar',
        text:
          'Deixe de 3 a 5 minutos no final para reler: concordâncias, acentos e o número de palavras. ' +
          'No TCF, respeite as faixas de palavras; ficar muito abaixo ou muito acima pode prejudicar a nota da tarefa.'
      },

      { type: 'heading', text: 'Expressão oral' },
      {
        type: 'table',
        headers: ['Tarefa', 'O que fazer', 'Duração'],
        rows: [
          ['TEF – Seção A', 'A partir de um anúncio, fazer perguntas ao examinador para obter informações (como numa ligação)', 'cerca de 5 min'],
          ['TEF – Seção B', 'Apresentar algo de um anúncio e convencer o examinador, que faz o papel de um amigo cético', 'cerca de 10 min'],
          ['TCF – Tarefa 1', 'Entrevista dirigida: falar de você, sua rotina, trabalho e projetos', '2 min, sem preparação'],
          ['TCF – Tarefa 2', 'Interação: role-play em que você pede informações ao examinador', '5 min 30, com 2 min de preparação'],
          ['TCF – Tarefa 3', 'Expressar e defender um ponto de vista sobre um tema', '4 min 30']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O examinador não é seu adversário',
        text:
          'Nas tarefas de interação, ele faz o papel combinado. Se não entender, peça para repetir ("[[Pourriez-vous répéter, s’il vous plaît ?|O senhor poderia repetir, por favor?]]"): ' +
          'isso faz parte de uma comunicação natural e não tira pontos.'
      },

      { type: 'heading', text: 'No dia da prova' },
      {
        type: 'list',
        items: [
          'Leve o documento de identidade usado na inscrição; sem ele você não faz a prova.',
          'Chegue com antecedência: atrasados normalmente não entram depois do início das provas coletivas.',
          'Celulares e relógios ficam guardados durante toda a prova.',
          'Use o tempo de cada prova até o fim: não há vantagem em terminar antes.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Regras de chegada, documentos e materiais permitidos variam de centro para centro. Confira o e-mail de convocação e o site do seu centro antes do dia.'
      }
    ]
  },

  fr: {
    title: 'Format et durée de chaque épreuve',
    summary:
      'Savoir exactement de combien de temps vous disposez et comment fonctionne chaque épreuve évite les surprises le jour J. ' +
      'Cette page détaille les quatre épreuves du TEF Canada et du TCF Canada et propose une répartition du temps.',
    blocks: [
      { type: 'heading', text: 'Vue d’ensemble' },
      {
        type: 'table',
        headers: ['Épreuve', 'TEF Canada', 'TCF Canada', 'Déroulement'],
        rows: [
          ['Compréhension orale', '40 questions · 40 min', '39 questions · 35 min', 'Collective, QCM, généralement sur ordinateur'],
          ['Compréhension écrite', '40 questions · 60 min', '39 questions · 60 min', 'Collective, QCM, généralement sur ordinateur'],
          ['Expression écrite', '2 sections · 60 min', '3 tâches · 60 min', 'Collective, rédaction'],
          ['Expression orale', '2 sections · environ 15 min', '3 tâches · 12 min', 'Individuelle, avec un examinateur']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Les épreuves collectives se suivent généralement le même jour ; l’oral peut être programmé à un autre moment. ' +
          'Le total est d’environ 2 h 55 pour le TEF et 2 h 47 pour le TCF, sans compter les pauses et l’appel.'
      },

      { type: 'heading', text: 'Compréhension orale' },
      {
        type: 'list',
        items: [
          'Vous écoutez des enregistrements : annonces, conversations, interviews radio et débats, du plus facile au plus difficile.',
          'En général, chaque document n’est diffusé qu’une seule fois. Lisez les questions et les réponses avant le début de l’audio.',
          'Le rythme est imposé par les enregistrements : impossible de revenir en arrière ou de faire une pause.',
          'TEF : 40 questions en 40 minutes. TCF : 39 questions en 35 minutes.'
        ]
      },

      { type: 'heading', text: 'Compréhension écrite' },
      {
        type: 'list',
        items: [
          'Des textes courts de la vie quotidienne au début (avis, annonces, courriels) et des textes longs et argumentatifs à la fin.',
          'Vous gérez votre temps : environ une minute et demie par question dans les deux examens.',
          'Les dernières questions sont les plus difficiles et les plus longues. Ne vous attardez pas trop sur les premières.'
        ]
      },

      { type: 'heading', text: 'Expression écrite' },
      {
        type: 'table',
        headers: ['Tâche', 'Ce qu’il faut faire', 'Longueur', 'Temps conseillé'],
        rows: [
          ['TEF – Section A', 'Rédiger la suite d’un fait divers à partir du début donné', '80 mots minimum', '25 min'],
          ['TEF – Section B', 'Texte ou lettre défendant un point de vue', '200 mots minimum', '35 min'],
          ['TCF – Tâche 1', 'Message court : invitation, demande, information', '60 à 120 mots', '10 à 15 min'],
          ['TCF – Tâche 2', 'Article ou récit d’expérience', '120 à 150 mots', '15 à 20 min'],
          ['TCF – Tâche 3', 'Comparer deux documents et donner son opinion', '120 à 180 mots', '25 à 30 min']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Gardez du temps pour relire',
        text:
          'Prévoyez 3 à 5 minutes à la fin pour relire : accords, accents et nombre de mots. ' +
          'Au TCF, respectez les fourchettes de mots ; être très en dessous ou très au-dessus peut pénaliser la note de la tâche.'
      },

      { type: 'heading', text: 'Expression orale' },
      {
        type: 'table',
        headers: ['Tâche', 'Ce qu’il faut faire', 'Durée'],
        rows: [
          ['TEF – Section A', 'À partir d’une annonce, poser des questions à l’examinateur pour obtenir des informations (comme au téléphone)', 'environ 5 min'],
          ['TEF – Section B', 'Présenter une annonce et convaincre l’examinateur, qui joue le rôle d’un ami sceptique', 'environ 10 min'],
          ['TCF – Tâche 1', 'Entretien dirigé : parler de vous, de votre quotidien, de votre travail et de vos projets', '2 min, sans préparation'],
          ['TCF – Tâche 2', 'Exercice en interaction : jeu de rôle où vous demandez des informations à l’examinateur', '5 min 30, dont 2 min de préparation'],
          ['TCF – Tâche 3', 'Exprimer et défendre un point de vue sur un sujet', '4 min 30']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'L’examinateur n’est pas votre adversaire',
        text:
          'Dans les tâches d’interaction, il joue le rôle prévu. Si vous ne comprenez pas, demandez-lui de répéter (« Pourriez-vous répéter, s’il vous plaît ? ») : ' +
          'cela fait partie d’une communication naturelle et ne fait pas perdre de points.'
      },

      { type: 'heading', text: 'Le jour de l’examen' },
      {
        type: 'list',
        items: [
          'Apportez la pièce d’identité utilisée lors de l’inscription ; sans elle, vous ne pourrez pas passer l’examen.',
          'Arrivez en avance : les retardataires ne sont généralement pas admis après le début des épreuves collectives.',
          'Téléphones et montres restent rangés pendant toute la durée de l’examen.',
          'Utilisez le temps de chaque épreuve jusqu’au bout : finir plus tôt n’apporte aucun avantage.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Les règles d’arrivée, les documents et le matériel autorisé varient selon les centres. Vérifiez votre convocation et le site de votre centre avant le jour J.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'France Éducation international – TCF Canada',
      url: 'https://www.france-education-international.fr/test/tcf-canada?langue=fr'
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
      title: 'Penvo – TCF Canada Format Guide',
      url: 'https://getpenvo.com/blog/tcf-canada-format-guide'
    },
    {
      title: 'Language Next – TEF & TCF Canada Exam Day: 2026 Rules',
      url: 'https://www.languagenext.com/blog/tef-tcf-canada-exam-day/'
    },
    {
      title: 'Flexilingo – TCF Canada expression écrite : les 3 tâches',
      url: 'https://www.flexilingo.com/fr/blog/tcf-canada-expression-ecrite-taches'
    }
  ]
}

export default content
