import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-interrogacao',

  pt: {
    title: 'Interrogação',
    summary:
      'Há três jeitos de fazer uma pergunta em francês, do mais informal ao mais formal: a entonação, [[est-ce que|marca de pergunta]] e a inversão. ' +
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
            '[[Vous avez des places ?|Vocês têm lugares?]]'
          ],
          [
            'Neutro (fala e escrita)',
            '[[Est-ce que|marca de pergunta]] + frase afirmativa',
            '[[Est-ce que vous avez des places ?|Vocês têm lugares?]]'
          ],
          [
            'Formal (escrita, pedidos educados)',
            'Verbo e pronome invertidos, com hífen',
            '[[Avez-vous des places ?|Vocês têm lugares?]]'
          ]
        ]
      },

      { type: 'heading', text: 'Como fazer a inversão' },
      {
        type: 'list',
        items: [
          'O pronome sujeito vai depois do verbo, ligado por hífen: [[Parlez-vous français ?|Você fala francês?]]',
          'Se o verbo termina em vogal e o pronome é [[il|ele]], [[elle|ela]] ou [[on|a gente]], entra um -t- para facilitar a pronúncia: [[Parle-t-il anglais ?|Ele fala inglês?]] [[A-t-elle fini ?|Ela terminou?]]',
          'Com um substantivo como sujeito, ele fica na frente e o pronome é repetido depois do verbo: [[Votre fils parle-t-il français ?|Seu filho fala francês?]]',
          'Nos tempos compostos, inverte-se o auxiliar: [[Avez-vous reçu mon courriel ?|Você recebeu meu e-mail?]]',
          'Com [[je|eu]], a inversão quase não se usa (só em formas fixas como [[Puis-je… ?|Posso…?]]). Prefira [[est-ce que|marca de pergunta]].'
        ]
      },

      { type: 'heading', text: 'As palavras interrogativas' },
      {
        type: 'table',
        headers: ['Palavra', 'Sentido', 'Exemplo'],
        rows: [
          ['[[qui|quem]]', 'quem', '[[Qui est le responsable ?|Quem é o responsável?]]'],
          ['[[que|o que]], [[qu’est-ce que|o que]]', 'o que (objeto)', '[[Qu’est-ce que vous cherchez ?|O que você procura?]]'],
          ['[[qu’est-ce qui|o que]]', 'o que (sujeito)', '[[Qu’est-ce qui se passe ?|O que está acontecendo?]]'],
          ['[[où|onde]]', 'onde', '[[Où est la gare ?|Onde fica a estação?]]'],
          ['[[quand|quando]]', 'quando', '[[Quand commence le cours ?|Quando começa a aula?]]'],
          ['[[comment|como]]', 'como', '[[Comment est-ce qu’on s’inscrit ?|Como a gente se inscreve?]]'],
          ['[[pourquoi|por que]]', 'por que', '[[Pourquoi le magasin est-il fermé ?|Por que a loja está fechada?]]'],
          ['[[combien (de)|quanto(s)]]', 'quanto, quantos', '[[Combien de temps faut-il ?|Quanto tempo é preciso?]]'],
          [
            '[[quel|qual]], [[quelle|qual]], [[quels|quais]], [[quelles|quais]]',
            'qual, quais (concorda com o substantivo)',
            '[[Quelle est votre adresse ?|Qual é o seu endereço?]]'
          ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'No registro informal, a palavra interrogativa pode ficar no fim: [[Tu vas où ?|Você vai aonde?]] [[C’est combien ?|Quanto custa?]] ' +
          'Na escrita, use [[est-ce que|marca de pergunta]] ou a inversão: [[Où est-ce que tu vas ?|Aonde você vai?]] [[Où vas-tu ?|Aonde você vai?]]'
      },

      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova: a tarefa de pedir informações',
        text:
          'Na produção oral do TEF, uma das tarefas é ligar para alguém e fazer perguntas sobre um anúncio. Trate a pessoa por [[vous|o senhor / a senhora / vocês]], ' +
          'varie as estruturas ([[est-ce que|marca de pergunta]], inversão, [[quel|qual]], [[combien|quanto]]) e comece com uma fórmula educada: [[Je voudrais savoir si…|Gostaria de saber se…]], [[Pourriez-vous me dire… ?|Poderia me dizer…?]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: '[[Quel|qual]] concorda; [[qu’est-ce que|o que]] não',
        text:
          '[[Quel|qual]] muda com o substantivo: [[Quel jour ?|Que dia?]] [[Quelle heure ?|Que horas?]] [[Quels documents ?|Quais documentos?]] [[Quelles options ?|Quais opções?]] ' +
          'E não traduza "o que é" por [[quoi est|o que é (errado)]]: diga [[Qu’est-ce que c’est ?|O que é isso?]]'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As regras de formação das perguntas (entonação, est-ce que, inversão, palavras interrogativas) vêm das páginas do Lawless French listadas. ' +
          'A página da TEF Canada listada só apresenta as provas obrigatórias: nada nela confirma que uma das tarefas da expressão oral é ligar para alguém sobre um anúncio. ' +
          'Também não têm fonte oficial: que escolher o registro certo "conta pontos" na produção oral; o tratamento por vous ser esperado nessa tarefa; e que variar as estruturas e começar com uma fórmula educada seja avaliado. ' +
          'Trate esses pontos como conselho de preparação, não como regra da prova.'
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
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les règles de formation des questions (intonation, est-ce que, inversion, mots interrogatifs) viennent des pages de Lawless French indiquées. ' +
          'La page du TEF Canada indiquée présente seulement les épreuves obligatoires : rien n’y confirme qu’une des tâches de l’expression orale consiste à appeler quelqu’un au sujet d’une annonce. ' +
          'N’ont pas non plus de source officielle : le fait que choisir le bon registre « rapporte des points » à l’oral ; le vouvoiement attendu dans cette tâche ; et l’évaluation de la variété des structures et d’une formule polie au début. ' +
          'Ces points sont des conseils de préparation, pas des règles de l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

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
