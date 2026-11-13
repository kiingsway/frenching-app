import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-indicativo-subjuntivo',

  pt: {
    title: 'Indicativo ou subjuntivo depois de penser que, croire que e trouver que',
    summary:
      'Você vai aprender quando utilizar o indicativo e o subjuntivo depois de três verbos que expressam opinião: penser, croire e trouver. ' +
      'Também vai entender por que a forma negativa leva ao subjuntivo e em que casos o indicativo depois de uma negação, comum na fala, é admitido.',
    blocks: [
      { type: 'heading', text: 'A regra geral: opinião afirmativa e negativa' },
      {
        type: 'paragraph',
        text:
          'Os verbos [[penser|pensar]], [[croire|acreditar]] e [[trouver|achar]] podem introduzir uma opinião por meio de [[que|que]]. ' +
          'Na forma afirmativa, quando o falante apresenta uma opinião como verdadeira ou provável, utiliza-se normalmente o [[indicatif|indicativo]]. ' +
          'Na forma negativa, utiliza-se o [[subjonctif|subjuntivo]]. O mesmo vale para [[savoir que|saber que]] e [[prétendre que|alegar que]].'
      },
      {
        type: 'table',
        headers: ['Construção', 'Modo verbal', 'Exemplo'],
        rows: [
            [
              '[[Je pense que|Eu penso que]]',
              'Indicativo',
              '[[Je pense que cette solution est efficace.|Acho que esta solução é eficaz.]]'
            ],
            [
              '[[Je crois que|Eu acredito que]]',
              'Indicativo',
              '[[Je crois que le projet réussira.|Acredito que o projeto terá sucesso.]]'
            ],
            [
              '[[Je trouve que|Eu acho que]]',
              'Indicativo',
              '[[Je trouve que ce service est pratique.|Acho que este serviço é prático.]]'
            ],
            [
              '[[Je ne pense pas que|Eu não acho que]]',
              'Subjuntivo',
              '[[Je ne pense pas que ce soit nécessaire.|Não acho que isso seja necessário.]]'
            ],
            [
              '[[Je ne crois pas que|Eu não acredito que]]',
              'Subjuntivo',
              '[[Je ne crois pas qu’il ait raison.|Não acredito que ele esteja certo.]]'
            ],
            [
              '[[Je ne trouve pas que|Eu não acho que]]',
              'Subjuntivo',
              '[[Je ne trouve pas que cette décision soit juste.|Não acho que essa decisão seja justa.]]'
            ]
        ]
      },
      { type: 'heading', text: 'O que dizer na forma negativa' },
      {
        type: 'paragraph',
        text:
          'Na fala, é comum ouvir o indicativo depois de uma negação, como em [[Je ne pense pas que c’est nécessaire.|Não acho que é necessário. (evite)]] ' +
          'O Lawless French observa que muitas pessoas cometem esse erro e que isso não é motivo para imitá-lo. ' +
          'Há uma nuance: o guia da Escola da função pública do Canadá admite o indicativo, na fala, depois de [[je ne pense pas que|eu não acho que]], [[je ne crois pas que|eu não acredito que]] e [[je ne trouve pas que|eu não acho que]] quando a opinião se apoia em fatos ([[J’ai vu Sean hier et il était malade. Je ne pense pas qu’il sera là ce midi.|Vi o Sean ontem e ele estava doente. Acho que ele não estará aqui ao meio-dia.]]); quando a opinião se apoia só em impressões, usa-se o subjuntivo. O CCDMD (Amélioration du français) confirma que, depois de [[je ne crois pas|eu não acredito]] e [[je ne pense pas|eu não acho]], o indicativo e o subjuntivo são ambos possíveis: indicativo quando o fato é visto como verdadeiro ou provável ([[Je ne pense pas qu’il fera aussi chaud demain.|Não acho que fará tanto calor amanhã.]]), subjuntivo quando é apenas imaginado ([[Je ne pense pas qu’il soit nécessaire d’y aller.|Não acho que seja necessário ir.]]). O mesmo vale para as perguntas com [[croyez-vous|você acredita]] e [[pensez-vous|você pensa]]. Na dúvida, prefira o subjuntivo. ' +
          'Diga [[Je ne pense pas que ce soit nécessaire.|Não acho que isso seja necessário.]] ' +
          'Compare com a forma afirmativa, que leva ao indicativo: [[Je pense que c’est génial.|Acho que é genial.]]'
      },
      { type: 'heading', text: 'Exemplos e situações especiais' },
      {
        type: 'list',
        items: [
          '[[Nous pensons que cette proposition mérite d’être étudiée.|Achamos que esta proposta merece ser estudada.]]',
          '[[Je ne crois pas que le directeur puisse accepter cette demande.|Não acredito que o diretor possa aceitar esta solicitação.]]',
          '[[Elle ne trouve pas que les horaires soient suffisamment flexibles.|Ela não acha que os horários sejam suficientemente flexíveis.]]',
          '[[Tu crois qu’il est disponible demain ?|Você acredita que ele está disponível amanhã?]]',
          '[[Crois-tu qu’il soit disponible demain ?|Você acredita que ele esteja disponível amanhã?]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Nas perguntas, a escolha também depende da intenção. ' +
          'Uma pergunta que procura confirmar uma informação pode aparecer com indicativo, especialmente na conversa cotidiana. ' +
          'Quando a pergunta expressa dúvida, o subjuntivo é uma escolha natural, particularmente com a inversão do sujeito e do verbo.'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não transforme a regra em uma troca automática',
        text:
          'Um erro comum é acreditar que todos os verbos seguidos de [[que|que]] exigem indicativo. ' +
          'A regra prática é: opinião afirmativa leva ao indicativo; opinião negativa leva ao subjuntivo. ' +
          'Também não confunda [[Je trouve que ce projet est intéressant.|Acho que este projeto é interessante.]] ' +
          'com [[Je trouve étrange que ce projet soit refusé.|Acho estranho que este projeto seja recusado.]] ' +
          'No segundo exemplo, o subjuntivo é provocado pelo julgamento expresso por [[étrange|estranho]], não pela negação de [[trouver|achar]]: o OQLF confirma o subjuntivo depois de verbos de julgamento.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Em exercícios de gramática e na produção escrita ou oral, identifique primeiro se a frase é afirmativa ou negativa. ' +
          'Pratique principalmente as combinações [[penser que + indicatif|pensar que + indicativo]], [[ne pas penser que + subjonctif|não pensar que + subjuntivo]], [[croire que + indicatif|acreditar que + indicativo]] ' +
          'e [[ne pas croire que + subjonctif|não acreditar que + subjuntivo]]. ' +
          'No TCF Canada, a expressão escrita tem 3 exercícios (60 minutos) e a expressão oral tem 3 exercícios (12 minutos, dos quais 2 de preparação). No TEF Canada, as duas também são provas obrigatórias.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O Lawless French confirma o indicativo depois de [[penser|pensar]], [[trouver|achar]], [[savoir|saber]], [[croire|acreditar]] e [[prétendre|alegar]] na afirmativa, o subjuntivo na negativa e que o indicativo depois de negação é um erro frequente. ' +
          'O OQLF confirma o subjuntivo depois de verbos de julgamento, como [[Je trouve étrange qu’il parte si tôt.|Acho estranho que ele parta tão cedo.]], e depois de [[ne pas penser que|não pensar que]]. ' +
          'O FEI e o Le français des affaires confirmam as provas de expressão escrita e oral. ' +
          'Não têm fonte: os exemplos e a dica de treino. ' +
          'O guia da Escola da função pública do Canadá (Grammaire d’appoint, nível C, capítulo sobre o subjuntivo) lista [[je ne pense pas que|eu não acho que]], [[je ne crois pas que|eu não acredito que]] e [[je ne trouve pas que|eu não acho que]] entre as expressões seguidas de subjuntivo, com a ressalva do indicativo na fala quando a opinião se apoia em fatos. ' +
          'O CCDMD (L’emploi du mode dans la subordonnée complétive) confirma o uso facultativo do indicativo ou do subjuntivo depois de [[je ne crois pas|eu não acredito]] e [[je ne pense pas|eu não acho]] e nas perguntas com [[croyez-vous|você acredita]] e [[pensez-vous|você pensa]]; por isso, chamar o indicativo depois de negação de “erro”, como faz o Lawless French, é uma simplificação. O Larousse (verbetes [[croire|acreditar]] e [[trouver|achar]]) confirma apenas os usos afirmativos com opinião e indicativo: [[Je crois qu’il est intelligent.|Acredito que ele é inteligente.]], [[Je crois bien qu’il va pleuvoir.|Acredito que vai chover.]] e [[Vraiment, je trouve que tu exagères.|Sinceramente, acho que você exagera.]]. Os verbetes não tratam da negação nem do subjuntivo. ' +
          'Essa dica é conselho de preparação, não regra oficial nem exigência das provas.'
      }
    ]
  },

  fr: {
    title: 'Indicatif ou subjonctif après penser que, croire que et trouver que',
    summary:
      'Vous apprendrez quand employer l’indicatif et le subjonctif après trois verbes qui expriment une opinion : penser, croire et trouver. ' +
      'Vous comprendrez également pourquoi la forme négative entraîne le subjonctif et dans quels cas l’indicatif après une négation, fréquent à l’oral, est admis.',
    blocks: [
      { type: 'heading', text: 'La règle générale : opinion affirmative et négative' },
      {
        type: 'paragraph',
        text:
          'Les verbes penser, croire et trouver peuvent introduire une opinion au moyen de que. ' +
          'À la forme affirmative, lorsque le locuteur présente une opinion comme vraie ou probable, on utilise généralement l’indicatif. ' +
          'À la forme négative, on utilise le subjonctif. Il en va de même pour savoir que et prétendre que.'
      },
      {
        type: 'table',
        headers: ['Construction', 'Mode verbal', 'Exemple'],
        rows: [
            [
              'Je pense que',
              'Indicatif',
              'Je pense que cette solution est efficace.'
            ],
            [
              'Je crois que',
              'Indicatif',
              'Je crois que le projet réussira.'
            ],
            [
              'Je trouve que',
              'Indicatif',
              'Je trouve que ce service est pratique.'
            ],
            [
              'Je ne pense pas que',
              'Subjonctif',
              'Je ne pense pas que ce soit nécessaire.'
            ],
            [
              'Je ne crois pas que',
              'Subjonctif',
              'Je ne crois pas qu’il ait raison.'
            ],
            [
              'Je ne trouve pas que',
              'Subjonctif',
              'Je ne trouve pas que cette décision soit juste.'
            ]
        ]
      },
      { type: 'heading', text: 'Que dire à la forme négative' },
      {
        type: 'paragraph',
        text:
          'À l’oral, on entend souvent l’indicatif après une négation, comme dans « Je ne pense pas que c’est nécessaire ». ' +
          'Lawless French observe que beaucoup de personnes commettent cette erreur et que ce n’est pas une raison pour l’imiter. ' +
          'Il y a toutefois une nuance : le guide de l’École de la fonction publique du Canada admet l’indicatif, à l’oral, après je ne pense pas que, je ne crois pas que et je ne trouve pas que lorsque l’opinion s’appuie sur des faits (J’ai vu Sean hier et il était malade. Je ne pense pas qu’il sera là ce midi.) ; lorsqu’elle ne s’appuie que sur des impressions, on emploie le subjonctif. Le CCDMD (Amélioration du français) confirme qu’après je ne crois pas et je ne pense pas, l’indicatif et le subjonctif sont tous deux possibles : l’indicatif quand le fait est considéré comme vrai ou probable (Je ne pense pas qu’il fera aussi chaud demain.), le subjonctif quand il n’est qu’imaginé (Je ne pense pas qu’il soit nécessaire d’y aller.). Il en va de même pour les questions avec croyez-vous et pensez-vous. Dans le doute, privilégiez le subjonctif. ' +
          'Dites « Je ne pense pas que ce soit nécessaire ». ' +
          'Comparez avec la forme affirmative, qui entraîne l’indicatif : « Je pense que c’est génial ».'
      },
      { type: 'heading', text: 'Exemples et situations particulières' },
      {
        type: 'list',
        items: [
          'Nous pensons que cette proposition mérite d’être étudiée.',
          'Je ne crois pas que le directeur puisse accepter cette demande.',
          'Elle ne trouve pas que les horaires soient suffisamment flexibles.',
          'Tu crois qu’il est disponible demain ?',
          'Crois-tu qu’il soit disponible demain ?'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Dans les questions, le choix dépend également de l’intention. ' +
          'Une question qui cherche à confirmer une information peut être construite avec l’indicatif, particulièrement dans la conversation quotidienne. ' +
          'Lorsque la question exprime un doute, le subjonctif constitue un choix naturel, notamment avec l’inversion du sujet et du verbe.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne transformez pas la règle en changement automatique',
        text:
          'Une erreur fréquente consiste à croire que tous les verbes suivis de que exigent l’indicatif. ' +
          'La règle pratique est la suivante : une opinion affirmative entraîne l’indicatif ; une opinion négative entraîne le subjonctif. ' +
          'Ne confondez pas non plus « Je trouve que ce projet est intéressant » et « Je trouve étrange que ce projet soit refusé ». ' +
          'Dans le deuxième exemple, le subjonctif est commandé par le jugement exprimé par étrange, et non par la négation de trouver : l’OQLF confirme le subjonctif après les verbes de jugement.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les exercices de grammaire et en production écrite ou orale, déterminez d’abord si la phrase est affirmative ou négative. ' +
          'Entraînez-vous particulièrement aux constructions penser que + indicatif, ne pas penser que + subjonctif, croire que + indicatif et ne pas croire que + subjonctif. ' +
          'Au TCF Canada, l’expression écrite comprend 3 exercices (60 minutes) et l’expression orale comprend 3 exercices (12 minutes, dont 2 minutes de préparation). Au TEF Canada, les deux font aussi partie des épreuves obligatoires.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Lawless French confirme l’indicatif après penser, trouver, savoir, croire et prétendre à la forme affirmative, le subjonctif à la forme négative et que l’indicatif après une négation est une erreur fréquente. ' +
          'L’OQLF confirme le subjonctif après les verbes de jugement, comme « Je trouve étrange qu’il parte si tôt », et après ne pas penser que. ' +
          'Le FEI et Le français des affaires confirment les épreuves d’expression écrite et orale. ' +
          'Ne sont pas sourcés : les exemples et le conseil d’entraînement. ' +
          'Le guide de l’École de la fonction publique du Canada (Grammaire d’appoint, niveau C, chapitre sur le subjonctif) range je ne pense pas que, je ne crois pas que et je ne trouve pas que parmi les expressions suivies du subjonctif, avec la réserve de l’indicatif à l’oral quand l’opinion s’appuie sur des faits. ' +
          'Le CCDMD (L’emploi du mode dans la subordonnée complétive) confirme l’emploi facultatif de l’indicatif ou du subjonctif après je ne crois pas et je ne pense pas et dans les questions avec croyez-vous et pensez-vous ; qualifier d’« erreur » l’indicatif après une négation, comme le fait Lawless French, est donc une simplification. Larousse (articles croire et trouver) confirme seulement les emplois affirmatifs d’opinion avec l’indicatif : Je crois qu’il est intelligent., Je crois bien qu’il va pleuvoir. et Vraiment, je trouve que tu exagères.. Les articles ne traitent ni de la négation ni du subjonctif. ' +
          'Ce conseil est une recommandation de préparation, et non une règle officielle ni une exigence des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'croire — Dictionnaire de français Larousse',
      url: 'https://www.larousse.fr/dictionnaires/francais/croire/20610'
    },
    {
      title: 'trouver — Dictionnaire de français Larousse',
      url: 'https://www.larousse.fr/dictionnaires/francais/trouver/80032'
    },
    {
      title: 'L’emploi du mode dans la subordonnée complétive — Centre collégial de développement de matériel didactique (CCDMD)',
      url: 'https://ameliofrancais.ccdmd.qc.ca/storage/amelioration-du-francais/ressources/1697833339-04Concordance_V2.pdf'
    },
    {
      title: 'Grammaire d’appoint, niveau C : cahier d’autoapprentissage (chapitre 8, Subjonctif) — École de la fonction publique du Canada',
      url: 'https://publications.gc.ca/collections/collection_2020/efpc-csps/SC102-1-15-2007-fra.pdf'
    },
    {
      title: 'Verbs of opinion + subjunctive mood — Progress with Lawless French',
      url: 'https://progress.lawlessfrench.com/revision/grammar/when-expressing-opinions-with-penser-trouver-savoir-croire-pretendre-que-use-the-subjonctif-with-negative-opinions'
    },
    {
      title: 'Subjonctif après certains verbes — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24253/la-grammaire/le-verbe/modes/subjonctif/subjonctif-apres-certains-verbes'
    },
    {
      title: 'Généralités sur le subjonctif — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24236/la-grammaire/le-verbe/modes/subjonctif/generalites-sur-le-subjonctif'
    },
    {
      title: 'TCF Canada — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
