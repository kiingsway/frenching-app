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
          ['Compreensão oral', '40 questões · 40 min [2]', '39 questões · 35 min [1]', 'Coletiva, múltipla escolha (no TCF, no papel ou no computador, conforme o centro) [1] [2]'],
          ['Compreensão escrita', '40 questões · 60 min [2]', '39 questões · 60 min [1]', 'Coletiva, múltipla escolha (no TCF, no papel ou no computador, conforme o centro) [1] [2]'],
          ['Expressão escrita', '2 seções · 60 min [2]', '3 tarefas · 60 min [1]', 'Coletiva, redação [1] [2]'],
          ['Expressão oral', '2 seções · cerca de 15 min [2]', '3 tarefas · 12 min [1]', 'Individual, com um examinador [1] [2]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'As provas coletivas costumam acontecer em sequência no mesmo dia; a oral pode ser marcada para outro horário. [5] ' +
          'O total fica em torno de 2h55 no TEF e 2h47 no TCF, sem contar intervalos e chamada. [3] [1]'
      },

      { type: 'heading', text: 'Compreensão oral' },
      {
        type: 'list',
        items: [
          'Você ouve gravações: anúncios, conversas, entrevistas de rádio e debates, do mais fácil para o mais difícil. [1] [3]',
          'Em geral cada áudio toca uma única vez. [1] [3] No TEF, há pausas na gravação para ler as perguntas; no TCF, a pergunta vem depois do áudio. [7] [1]',
          'O ritmo é ditado pelos áudios: não dá para voltar nem pausar. [3] [7]',
          'TEF: 40 questões em 40 minutos. TCF: 39 questões em 35 minutos. [2] [1]'
        ]
      },

      { type: 'heading', text: 'Compreensão escrita' },
      {
        type: 'list',
        items: [
          'Textos curtos do dia a dia no começo (avisos, anúncios, e-mails) e textos longos e argumentativos no final. [1] [3]',
          'Você controla o próprio tempo: cerca de 1 minuto e meio por questão nos dois exames. [9]',
          'As últimas questões são as mais difíceis e demoradas. Não gaste tempo demais nas primeiras. [1]'
        ]
      },

      { type: 'heading', text: 'Expressão escrita' },
      {
        type: 'table',
        headers: ['Tarefa', 'O que fazer', 'Tamanho', 'Tempo sugerido'],
        rows: [
          [
            'TEF – Seção A',
            'Continuar uma notícia do tipo [[fait divers|notícia curta sobre um acontecimento do dia a dia, como um acidente, um crime ou uma curiosidade]] a partir do começo dado [3] [7]',
            'Mínimo de 80 palavras [3] [7]',
            '25 min [3] [8]'
          ],
          ['TEF – Seção B', 'Texto ou carta defendendo um ponto de vista [3] [7]', 'Mínimo de 200 palavras [3] [7]', '35 min [3] [8]'],
          ['TCF – Tarefa 1', 'Mensagem para descrever, contar ou explicar algo a um ou mais destinatários [1]', '60 a 120 palavras [1] [6]', '10 a 15 min [6]'],
          ['TCF – Tarefa 2', 'Artigo, carta ou nota relatando uma experiência, com comentários e opiniões [1]', '120 a 150 palavras [1] [6]', '15 a 20 min [6]'],
          ['TCF – Tarefa 3', 'Comparar dois documentos e dar sua opinião [1]', '120 a 180 palavras [1] [6]', '25 a 30 min [6]']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Reserve tempo para revisar',
        text:
          'Deixe de 3 a 5 minutos no final para reler: concordâncias, acentos e o número de palavras. [6] ' +
          'No TCF, respeite as faixas de palavras; ficar muito abaixo ou muito acima pode prejudicar a nota da tarefa. [1] [6]'
      },

      { type: 'heading', text: 'Expressão oral' },
      {
        type: 'table',
        headers: ['Tarefa', 'O que fazer', 'Duração'],
        rows: [
          ['TEF – Seção A', 'A partir de um anúncio, fazer perguntas ao examinador para obter informações (como numa ligação) [3] [7]', 'cerca de 5 min [7]'],
          ['TEF – Seção B', 'Apresentar algo de um anúncio e convencer o examinador, que faz o papel de um amigo cético [3] [7]', 'cerca de 10 min [7]'],
          ['TCF – Tarefa 1', 'Entrevista dirigida: falar de você, sua rotina, trabalho e projetos [1]', '2 min, sem preparação [1]'],
          ['TCF – Tarefa 2', 'Interação: role-play em que você pede informações ao examinador [1]', '5 min 30, com 2 min de preparação [1]'],
          ['TCF – Tarefa 3', 'Expressar e defender um ponto de vista sobre um tema [1]', '4 min 30 [1]']
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
          'Leve o documento de identidade usado na inscrição; sem ele você não faz a prova. [2] [5]',
          'Chegue com antecedência: atrasados normalmente não entram depois do início das provas coletivas. [2] [5]',
          'Celulares e relógios ficam guardados durante toda a prova. [2] [5]',
          'Use o tempo de cada prova até o fim: não há vantagem em terminar antes.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Regras de chegada, documentos e materiais permitidos variam de centro para centro. [1] [5] Confira o e-mail de convocação e o site do seu centro antes do dia.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'Não aparecem nas fontes: que pedir para o examinador repetir não tira pontos, que não há vantagem em terminar uma prova antes e o tempo de intervalos e chamada. ' +
          'Os tempos sugeridos para cada tarefa escrita vêm de cursos de preparação: são conselho, não regra da prova.'
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
          ['Compréhension orale', '40 questions · 40 min [2]', '39 questions · 35 min [1]', 'Collective, QCM (au TCF, sur papier ou sur ordinateur, selon le centre) [1] [2]'],
          ['Compréhension écrite', '40 questions · 60 min [2]', '39 questions · 60 min [1]', 'Collective, QCM (au TCF, sur papier ou sur ordinateur, selon le centre) [1] [2]'],
          ['Expression écrite', '2 sections · 60 min [2]', '3 tâches · 60 min [1]', 'Collective, rédaction [1] [2]'],
          ['Expression orale', '2 sections · environ 15 min [2]', '3 tâches · 12 min [1]', 'Individuelle, avec un examinateur [1] [2]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Les épreuves collectives se suivent généralement le même jour ; l’oral peut être programmé à un autre moment. [5] ' +
          'Le total est d’environ 2 h 55 pour le TEF et 2 h 47 pour le TCF, sans compter les pauses et l’appel. [3] [1]'
      },

      { type: 'heading', text: 'Compréhension orale' },
      {
        type: 'list',
        items: [
          'Vous écoutez des enregistrements : annonces, conversations, interviews radio et débats, du plus facile au plus difficile. [1] [3]',
          'En général, chaque document n’est diffusé qu’une seule fois. [1] [3] Au TEF, des pauses sont prévues pour lire les questions ; au TCF, la question est posée après l’écoute. [7] [1]',
          'Le rythme est imposé par les enregistrements : impossible de revenir en arrière ou de faire une pause. [3] [7]',
          'TEF : 40 questions en 40 minutes. TCF : 39 questions en 35 minutes. [2] [1]'
        ]
      },

      { type: 'heading', text: 'Compréhension écrite' },
      {
        type: 'list',
        items: [
          'Des textes courts de la vie quotidienne au début (avis, annonces, courriels) et des textes longs et argumentatifs à la fin. [1] [3]',
          'Vous gérez votre temps : environ une minute et demie par question dans les deux examens. [9]',
          'Les dernières questions sont les plus difficiles et les plus longues. Ne vous attardez pas trop sur les premières. [1]'
        ]
      },

      { type: 'heading', text: 'Expression écrite' },
      {
        type: 'table',
        headers: ['Tâche', 'Ce qu’il faut faire', 'Longueur', 'Temps conseillé'],
        rows: [
          ['TEF – Section A', 'Rédiger la suite d’un fait divers à partir du début donné [3] [7]', '80 mots minimum [3] [7]', '25 min [3] [8]'],
          ['TEF – Section B', 'Texte ou lettre défendant un point de vue [3] [7]', '200 mots minimum [3] [7]', '35 min [3] [8]'],
          ['TCF – Tâche 1', 'Message pour décrire, raconter ou expliquer, adressé à un ou plusieurs destinataires [1]', '60 à 120 mots [1] [6]', '10 à 15 min [6]'],
          ['TCF – Tâche 2', 'Article, courrier ou note qui rend compte d’une expérience, avec des commentaires et des opinions [1]', '120 à 150 mots [1] [6]', '15 à 20 min [6]'],
          ['TCF – Tâche 3', 'Comparer deux documents et donner son opinion [1]', '120 à 180 mots [1] [6]', '25 à 30 min [6]']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Gardez du temps pour relire',
        text:
          'Prévoyez 3 à 5 minutes à la fin pour relire : accords, accents et nombre de mots. [6] ' +
          'Au TCF, respectez les fourchettes de mots ; être très en dessous ou très au-dessus peut pénaliser la note de la tâche. [1] [6]'
      },

      { type: 'heading', text: 'Expression orale' },
      {
        type: 'table',
        headers: ['Tâche', 'Ce qu’il faut faire', 'Durée'],
        rows: [
          ['TEF – Section A', 'À partir d’une annonce, poser des questions à l’examinateur pour obtenir des informations (comme au téléphone) [3] [7]', 'environ 5 min [7]'],
          ['TEF – Section B', 'Présenter une annonce et convaincre l’examinateur, qui joue le rôle d’un ami sceptique [3] [7]', 'environ 10 min [7]'],
          ['TCF – Tâche 1', 'Entretien dirigé : parler de vous, de votre quotidien, de votre travail et de vos projets [1]', '2 min, sans préparation [1]'],
          ['TCF – Tâche 2', 'Exercice en interaction : jeu de rôle où vous demandez des informations à l’examinateur [1]', '5 min 30, dont 2 min de préparation [1]'],
          ['TCF – Tâche 3', 'Exprimer et défendre un point de vue sur un sujet [1]', '4 min 30 [1]']
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
          'Apportez la pièce d’identité utilisée lors de l’inscription ; sans elle, vous ne pourrez pas passer l’examen. [2] [5]',
          'Arrivez en avance : les retardataires ne sont généralement pas admis après le début des épreuves collectives. [2] [5]',
          'Téléphones et montres restent rangés pendant toute la durée de l’examen. [2] [5]',
          'Utilisez le temps de chaque épreuve jusqu’au bout : finir plus tôt n’apporte aucun avantage.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Les règles d’arrivée, les documents et le matériel autorisé varient selon les centres. [1] [5] Vérifiez votre convocation et le site de votre centre avant le jour J.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'N’apparaissent pas dans les sources : le fait que demander à l’examinateur de répéter ne fait pas perdre de points, l’absence d’avantage à finir une épreuve plus tôt et la durée des pauses et de l’appel. ' +
          'Les temps conseillés pour chaque tâche écrite viennent de cours de préparation : ce sont des conseils, pas des règles de l’examen.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  // A ordem é fixa: o texto cita cada fonte pelo número da posição ([1], [2]…)
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
    },
    {
      title: 'Le français des affaires – Manuel du candidat au e-TEF Canada (2018, ancien format)',
      url: 'https://www.festivalff.cz/files/files/manuel_e-tef_canada(1).pdf'
    },
    {
      title: 'TCF TEF Prep – TEF Canada Format Changes 2026',
      url: 'https://www.tcftefprep.com/blog/tef-canada-exam-format-changes-2026'
    },
    {
      title: 'Language Next – TEF Canada Reading 2026 Test Guide',
      url: 'https://www.languagenext.com/blog/tef-canada-reading/'
    }
  ]
}

export default content
