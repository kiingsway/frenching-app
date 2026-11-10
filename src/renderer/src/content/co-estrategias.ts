import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-estrategias',

  pt: {
    title: 'Estratégias: antecipar, palavras-chave e inferência',
    summary:
      'Na compreensão oral cada áudio toca uma única vez e não há como voltar. Por isso a estratégia começa antes do áudio: ' +
      'ler as perguntas, antecipar o tipo de resposta e, durante a escuta, procurar as palavras-chave e deduzir o que não foi dito diretamente.',
    blocks: [
      { type: 'heading', text: 'Antes do áudio: antecipar' },
      {
        type: 'list',
        items: [
          'Leia a pergunta e as quatro alternativas durante o tempo de leitura.',
          'Identifique o que é pedido: um lugar, um número, uma pessoa, uma opinião, uma intenção.',
          'Imagine a situação: uma pergunta que fala em "[[vol|voo]]" e "[[porte|portão]]" já indica um aeroporto.',
          'Repare no que diferencia as alternativas: se todas falam de horários, a resposta depende de um número.'
        ]
      },

      { type: 'heading', text: 'Durante o áudio: palavras-chave' },
      {
        type: 'paragraph',
        text:
          'Não tente entender cada palavra. Concentre-se nas que carregam sentido (substantivos, verbos, números, negações) ' +
          'e nos conectores que mudam a direção da frase: [[mais|mas]], [[pourtant|no entanto]], [[finalement|no fim]]. Quando perder uma frase, não pare: siga o áudio e retome o fio.'
      },

      { type: 'heading', text: 'Inferência: deduzir o implícito' },
      {
        type: 'paragraph',
        text:
          'Muitas perguntas cobram algo que não é dito com todas as letras: o lugar, a relação entre as pessoas, o sentimento de quem fala. Use os indícios.'
      },
      {
        type: 'table',
        headers: ['Pergunta', 'Indícios no áudio'],
        rows: [
          [
            'Onde estão?',
            'Ruídos de fundo e vocabulário: [[ordonnance|receita médica]], [[quai|plataforma]], [[addition|conta]]'
          ],
          [
            'Qual é a relação entre eles?',
            '[[Tu|você, informal]] ou [[vous|o senhor, a senhora]], o tom, as fórmulas de cortesia'
          ],
          [
            'Como a pessoa se sente?',
            'Entonação, ritmo, exclamações como "[[Enfin !|Até que enfim!]]", "[[Encore ?|De novo?]]", "[[Tant mieux|Ainda bem]]"'
          ],
          ['O que vai acontecer depois?', 'Verbos no futuro e o que foi combinado no fim do diálogo']
        ]
      },

      { type: 'heading', text: 'Depois do áudio: decidir rápido' },
      {
        type: 'list',
        items: [
          'Responda logo depois de ouvir, enquanto a lembrança está fresca.',
          'Elimine as alternativas impossíveis e escolha entre as que sobraram.',
          'Nunca deixe em branco: resposta errada vale zero, igual à resposta vazia.',
          'Esqueça o áudio anterior e leia a próxima pergunta.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'A armadilha da palavra repetida',
        text:
          'Se uma alternativa repete exatamente uma palavra que você ouviu, desconfie. ' +
          'A alternativa certa costuma dizer a mesma coisa com outras palavras (paráfrase).'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'Faça exercícios em condições de prova: uma escuta só, sem pausar. Depois ouça de novo com a transcrição e descubra por que errou: ' +
          'não reconheceu a palavra, não entendeu a ideia ou caiu numa armadilha.'
      }
    ]
  },

  fr: {
    title: 'Stratégies : anticiper, repérer les mots-clés et faire des inférences',
    summary:
      'En compréhension orale, chaque document n’est diffusé qu’une fois et on ne peut pas revenir en arrière. La stratégie commence donc avant l’écoute : ' +
      'lire les questions, anticiper le type de réponse puis, pendant l’écoute, repérer les mots-clés et déduire ce qui n’est pas dit directement.',
    blocks: [
      { type: 'heading', text: 'Avant l’écoute : anticiper' },
      {
        type: 'list',
        items: [
          'Lisez la question et les quatre réponses pendant le temps de lecture.',
          'Repérez ce qui est demandé : un lieu, un nombre, une personne, une opinion, une intention.',
          'Imaginez la situation : une question qui parle de « vol » et de « porte » indique déjà un aéroport.',
          'Observez ce qui distingue les réponses : si elles parlent toutes d’horaires, la réponse dépend d’un nombre.'
        ]
      },

      { type: 'heading', text: 'Pendant l’écoute : les mots-clés' },
      {
        type: 'paragraph',
        text:
          'N’essayez pas de comprendre chaque mot. Concentrez-vous sur ceux qui portent le sens (noms, verbes, nombres, négations) ' +
          'et sur les connecteurs qui changent la direction de la phrase (mais, pourtant, finalement). Si vous perdez une phrase, ne vous arrêtez pas : suivez l’audio et reprenez le fil.'
      },

      { type: 'heading', text: 'L’inférence : déduire l’implicite' },
      {
        type: 'paragraph',
        text:
          'Beaucoup de questions portent sur ce qui n’est pas dit clairement : le lieu, la relation entre les personnes, ce que ressent la personne qui parle. Servez-vous des indices.'
      },
      {
        type: 'table',
        headers: ['Question', 'Indices dans l’audio'],
        rows: [
          ['Où sont-ils ?', 'Les bruits de fond et le vocabulaire (ordonnance, quai, addition)'],
          ['Quelle est leur relation ?', 'Tu ou vous, le ton, les formules de politesse'],
          ['Que ressent la personne ?', 'L’intonation, le débit, des exclamations comme « Enfin ! », « Encore ? », « Tant mieux »'],
          ['Que va-t-il se passer ensuite ?', 'Les verbes au futur et ce qui a été convenu à la fin du dialogue']
        ]
      },

      { type: 'heading', text: 'Après l’écoute : décider vite' },
      {
        type: 'list',
        items: [
          'Répondez juste après l’écoute, tant que le souvenir est frais.',
          'Éliminez les réponses impossibles et choisissez parmi celles qui restent.',
          'Ne laissez jamais de réponse vide : une mauvaise réponse vaut zéro, comme une réponse vide.',
          'Oubliez le document précédent et lisez la question suivante.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Le piège du mot répété',
        text:
          'Si une réponse reprend exactement un mot que vous avez entendu, méfiez-vous. ' +
          'La bonne réponse dit souvent la même chose avec d’autres mots (une paraphrase).'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Faites des exercices dans les conditions de l’examen : une seule écoute, sans pause. Réécoutez ensuite avec la transcription et trouvez pourquoi vous vous êtes trompé : ' +
          'vous n’avez pas reconnu le mot, pas compris l’idée, ou vous êtes tombé dans un piège.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Open Exam Prep – TEF Canada Listening: structure and question types',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/listening-comprehension/listening-overview'
    },
    {
      title: 'Université de Sherbrooke – TCF : compréhension orale',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-orale'
    },
    {
      title: 'Le français des affaires – TEF Canada : présentation des épreuves',
      url: 'https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'RFI – Le français facile (exercices de compréhension orale du TCF)',
      url: 'https://francaisfacile.rfi.fr/fr/'
    }
  ]
}

export default content
