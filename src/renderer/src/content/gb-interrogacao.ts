import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-interrogacao',

  pt: {
    title: 'Interrogação',
    summary:
      'Há três jeitos de fazer uma pergunta em francês, do mais informal ao mais formal: a entonação, est-ce que e a inversão. ' +
      'Saber escolher o registro certo conta pontos na produção oral, principalmente quando a tarefa é pedir informações.',
    blocks: [
      { type: 'heading', text: 'Os três registros' },
      {
        type: 'table',
        headers: ['Registro', 'Como se forma', 'Exemplo'],
        rows: [
          [
            'Informal (fala)',
            'Frase afirmativa com a voz subindo no fim',
            'Vous avez des places ?'
          ],
          [
            'Neutro (fala e escrita)',
            'Est-ce que + frase afirmativa',
            'Est-ce que vous avez des places ?'
          ],
          [
            'Formal (escrita, pedidos educados)',
            'Verbo e pronome invertidos, com hífen',
            'Avez-vous des places ?'
          ]
        ]
      },

      { type: 'heading', text: 'Como fazer a inversão' },
      {
        type: 'list',
        items: [
          'O pronome sujeito vai depois do verbo, ligado por hífen: Parlez-vous français ?',
          'Se o verbo termina em vogal e o pronome é il, elle ou on, entra um -t- para facilitar a pronúncia: Parle-t-il anglais ? A-t-elle fini ?',
          'Com um substantivo como sujeito, ele fica na frente e o pronome é repetido depois do verbo: Votre fils parle-t-il français ?',
          'Nos tempos compostos, inverte-se o auxiliar: Avez-vous reçu mon courriel ?',
          'Com je, a inversão quase não se usa (só em formas fixas como Puis-je… ?). Prefira est-ce que.'
        ]
      },

      { type: 'heading', text: 'As palavras interrogativas' },
      {
        type: 'table',
        headers: ['Palavra', 'Sentido', 'Exemplo'],
        rows: [
          ['qui', 'quem', 'Qui est le responsable ?'],
          ['que, qu’est-ce que', 'o que (objeto)', 'Qu’est-ce que vous cherchez ?'],
          ['qu’est-ce qui', 'o que (sujeito)', 'Qu’est-ce qui se passe ?'],
          ['où', 'onde', 'Où est la gare ?'],
          ['quand', 'quando', 'Quand commence le cours ?'],
          ['comment', 'como', 'Comment est-ce qu’on s’inscrit ?'],
          ['pourquoi', 'por que', 'Pourquoi le magasin est-il fermé ?'],
          ['combien (de)', 'quanto, quantos', 'Combien de temps faut-il ?'],
          [
            'quel, quelle, quels, quelles',
            'qual, quais (concorda com o substantivo)',
            'Quelle est votre adresse ?'
          ]
        ]
      },
      {
        type: 'paragraph',
        text: 'No registro informal, a palavra interrogativa pode ficar no fim: Tu vas où ? C’est combien ? Na escrita, use est-ce que ou a inversão: Où est-ce que tu vas ? Où vas-tu ?'
      },

      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova: a tarefa de pedir informações',
        text:
          'Na produção oral do TEF, uma das tarefas é ligar para alguém e fazer perguntas sobre um anúncio. Trate a pessoa por vous, ' +
          'varie as estruturas (est-ce que, inversão, quel, combien) e comece com uma fórmula educada: Je voudrais savoir si…, Pourriez-vous me dire… ?'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Quel concorda; qu’est-ce que não',
        text:
          'Quel muda com o substantivo: Quel jour ?, Quelle heure ?, Quels documents ?, Quelles options ? ' +
          'E não traduza "o que é" por "quoi est": diga Qu’est-ce que c’est ? (o que é isso?).'
      }
    ]
  },

  fr: {
    title: 'L’interrogation',
    summary:
      'Il existe trois façons de poser une question en français, de la plus familière à la plus formelle : l’intonation, est-ce que et l’inversion. ' +
      'Savoir choisir le bon registre rapporte des points en expression orale, surtout quand la tâche consiste à demander des informations.',
    blocks: [
      { type: 'heading', text: 'Les trois registres' },
      {
        type: 'table',
        headers: ['Registre', 'Formation', 'Exemple'],
        rows: [
          [
            'Familier (à l’oral)',
            'Phrase affirmative avec une intonation montante',
            'Vous avez des places ?'
          ],
          [
            'Courant (à l’oral et à l’écrit)',
            'Est-ce que + phrase affirmative',
            'Est-ce que vous avez des places ?'
          ],
          [
            'Soutenu (à l’écrit, demandes polies)',
            'Verbe et pronom inversés, avec un trait d’union',
            'Avez-vous des places ?'
          ]
        ]
      },

      { type: 'heading', text: 'Comment faire l’inversion' },
      {
        type: 'list',
        items: [
          'Le pronom sujet se place après le verbe, relié par un trait d’union : Parlez-vous français ?',
          'Si le verbe se termine par une voyelle et que le pronom est il, elle ou on, on ajoute un -t- pour faciliter la prononciation : Parle-t-il anglais ? A-t-elle fini ?',
          'Avec un nom comme sujet, il reste devant et on reprend le pronom après le verbe : Votre fils parle-t-il français ?',
          'Aux temps composés, on inverse l’auxiliaire : Avez-vous reçu mon courriel ?',
          'Avec je, l’inversion ne s’utilise presque pas (seulement dans des formes figées comme Puis-je… ?). Préférez est-ce que.'
        ]
      },

      { type: 'heading', text: 'Les mots interrogatifs' },
      {
        type: 'table',
        headers: ['Mot', 'Ce qu’on demande', 'Exemple'],
        rows: [
          ['qui', 'une personne', 'Qui est le responsable ?'],
          ['que, qu’est-ce que', 'une chose (complément)', 'Qu’est-ce que vous cherchez ?'],
          ['qu’est-ce qui', 'une chose (sujet)', 'Qu’est-ce qui se passe ?'],
          ['où', 'un lieu', 'Où est la gare ?'],
          ['quand', 'un moment', 'Quand commence le cours ?'],
          ['comment', 'une manière', 'Comment est-ce qu’on s’inscrit ?'],
          ['pourquoi', 'une raison', 'Pourquoi le magasin est-il fermé ?'],
          ['combien (de)', 'une quantité, un prix', 'Combien de temps faut-il ?'],
          [
            'quel, quelle, quels, quelles',
            'un choix (s’accorde avec le nom)',
            'Quelle est votre adresse ?'
          ]
        ]
      },
      {
        type: 'paragraph',
        text: 'Dans le registre familier, le mot interrogatif peut se placer à la fin : Tu vas où ? C’est combien ? À l’écrit, utilisez est-ce que ou l’inversion : Où est-ce que tu vas ? Où vas-tu ?'
      },

      {
        type: 'callout',
        tone: 'tip',
        title: 'À l’examen : la tâche où l’on demande des informations',
        text:
          'En expression orale au TEF, une des tâches consiste à appeler quelqu’un pour poser des questions sur une annonce. Vouvoyez la personne, ' +
          'variez les structures (est-ce que, inversion, quel, combien) et commencez par une formule polie : Je voudrais savoir si…, Pourriez-vous me dire… ?'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Quel s’accorde, qu’est-ce que ne change pas',
        text:
          'Quel change avec le nom : Quel jour ?, Quelle heure ?, Quels documents ?, Quelles options ? ' +
          'Et pour demander ce qu’est une chose, on dit Qu’est-ce que c’est ?, jamais « quoi est ».'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Lawless French – Questions',
      url: 'https://www.lawlessfrench.com/grammar/questions/'
    },
    {
      title: 'Lawless French – Inversion',
      url: 'https://www.lawlessfrench.com/grammar/inversion/'
    },
    {
      title: 'Lawless French – Est-ce que',
      url: 'https://www.lawlessfrench.com/expressions/est-ce-que/'
    },
    {
      title: 'Lawless French – Interrogative Adverbs',
      url: 'https://www.lawlessfrench.com/grammar/interrogative-adverbs/'
    },
    {
      title: 'Lawless French – Interrogative Adjectives',
      url: 'https://www.lawlessfrench.com/grammar/interrogative-adjectives/'
    },
    {
      title: 'Le français des affaires – TEF Canada : présentation des épreuves',
      url: 'https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
