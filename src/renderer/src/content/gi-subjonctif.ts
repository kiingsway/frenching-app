import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-subjonctif',

  pt: {
    title: 'Presente do subjuntivo: vontade, sentimentos, obrigação e dúvida',
    summary:
      'Aprenda quando utilizar o presente do subjuntivo para expressar desejos, sentimentos, necessidades e incertezas. ' +
      'Domine sua formação, os principais verbos irregulares e as diferenças em relação ao indicativo, evitando erros comuns de brasileiros.',
    blocks: [
      { type: 'heading', text: 'Formação do presente do subjuntivo' },
      {
        type: 'paragraph',
        text:
          'O [[subjonctif présent|presente do subjuntivo]] ' +
          'é utilizado principalmente em orações subordinadas para expressar algo desejado, necessário, incerto ou relacionado a um sentimento. ' +
          'Para a maioria dos verbos, sua formação utiliza a base da terceira pessoa do plural do presente do indicativo, retirando a terminação -ent e acrescentando as terminações -e, -es, -e, -ions, -iez e -ent. ' +
          'Exemplo: [[ils parlent → que je parle|eles falam → que eu fale]].'
      },
      {
        type: 'table',
        headers: ['Verbo', 'Formas do subjuntivo'],
        rows: [
            [
              '[[être|ser / estar]]',
              '[[que je sois / que nous soyons|que eu seja / que nós sejamos]]'
            ],
            [
              '[[avoir|ter]]',
              '[[que j’aie / que nous ayons|que eu tenha / que nós tenhamos]]'
            ],
            [
              '[[aller|ir]]',
              '[[que j’aille|que eu vá]]'
            ],
            [
              '[[faire|fazer]]',
              '[[que je fasse|que eu faça]]'
            ],
            [
              '[[pouvoir|poder]]',
              '[[que je puisse|que eu possa]]'
            ],
            [
              '[[savoir|saber]]',
              '[[que je sache|que eu saiba]]'
            ],
            [
              '[[vouloir|querer]]',
              '[[que je veuille|que eu queira]]'
            ],
            [
              '[[venir|vir]]',
              '[[que je vienne / que nous venions|que eu venha / que nós venhamos]]'
            ]
        ]
      },
      { type: 'heading', text: 'Quando utilizar o subjuntivo' },
      {
        type: 'table',
        headers: ['Situação', 'Expressões frequentes', 'Significado'],
        rows: [
            [
              'Vontade e desejo',
              '[[vouloir que, souhaiter que, désirer que|querer que, desejar que, ter o desejo de que]]',
              'Expressam uma vontade ou um resultado desejado.'
            ],
            [
              'Sentimentos',
              '[[être heureux que, regretter que, craindre que|estar feliz que, lamentar que, temer que]]',
              'Expressam uma reação emocional a uma situação.'
            ],
            [
              'Obrigação e necessidade',
              '[[il faut que, il est nécessaire que, il est important que|é preciso que, é necessário que, é importante que]]',
              'Expressam uma exigência ou necessidade.'
            ],
            [
              'Dúvida e incerteza',
              '[[douter que, ne pas croire que, il est possible que|duvidar que, não acreditar que, é possível que]]',
              'Apresentam algo como incerto ou apenas possível.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Na maioria dessas construções, o subjuntivo aparece depois de [[que|que]] ou [[qu’|que, antes de vogal]]. ' +
          'Entretanto, nem toda oração introduzida por [[que|que]] utiliza esse modo verbal. Verbos de opinião na afirmativa, como [[penser que|pensar que]] ' +
          'e [[croire que|acreditar que]], normalmente são seguidos do indicativo. ' +
          'Também é importante lembrar que [[espérer que|esperar que]], na forma afirmativa, normalmente utiliza o indicativo, enquanto [[souhaiter que|desejar que]] ' +
          'exige o subjuntivo.'
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'paragraph',
        text:
          '[[Le directeur veut que chaque employé suive la formation sur la sécurité.|O diretor quer que cada funcionário faça o treinamento de segurança.]] ' +
          '[[Il faut que les demandes soient envoyées avant vendredi.|É necessário que os pedidos sejam enviados antes de sexta-feira.]] ' +
          '[[Je suis contente que ma sœur puisse participer à la réunion à Montréal.|Estou feliz que minha irmã possa participar da reunião em Montreal.]] ' +
          '[[Nous doutons que le service soit ouvert pendant la fin de semaine.|Duvidamos que o serviço esteja aberto durante o fim de semana.]] ' +
          '[[Je ne crois pas que cette solution réponde aux besoins des résidents.|Não acredito que essa solução atenda às necessidades dos moradores.]] ' +
          '[[J’espère que tu trouveras un emploi rapidement.|Espero que você encontre um emprego rapidamente.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com espérer e com a tradução literal',
        text:
          'Um erro frequente é reproduzir diretamente o subjuntivo português depois do verbo [[espérer|esperar]]. ' +
          'Na afirmativa, a construção normalmente utiliza o indicativo: [[J’espère que tu viendras.|Espero que você venha.]] ' +
          'Não confunda com [[Je souhaite que tu viennes.|Desejo que você venha.]], que utiliza o subjuntivo. ' +
          'Outro erro é esquecer que alguns verbos possuem radicais irregulares ou diferentes entre as formas singulares e as formas de [[nous|nós]] e [[vous|vocês]]. ' +
          'Por isso, não basta memorizar somente as terminações.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Aplique o subjuntivo em situações reais',
        text:
          'No TCF Canada, a expressão escrita tem 3 exercícios (60 minutos) e a expressão oral tem 3 exercícios (12 minutos, dos quais 2 de preparação). ' +
          'No TEF Canada, a expressão escrita e a expressão oral também são provas obrigatórias. ' +
          'Treine construções que expressem desejos, recomendações, preocupações e necessidades. ' +
          'Em vez de apenas memorizar os verbos, pratique frases completas e revise se o modo verbal corresponde ao sentido da mensagem.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam a formação do presente do subjuntivo (terminações e radicais irregulares de [[aller|ir]], [[faire|fazer]], [[pouvoir|poder]], [[savoir|saber]], [[venir|vir]] e [[vouloir|querer]]), ' +
          'o subjuntivo depois de verbos de vontade, sentimento e opinião ou julgamento, e depois de [[douter|duvidar]], e que [[ne pas penser que|não pensar que]] leva o subjuntivo. ' +
          'O FEI e o Le français des affaires confirmam as provas de expressão escrita e oral do TCF Canada e do TEF Canada. ' +
          'Não têm fonte aberta: o indicativo depois de [[espérer que|esperar que]] na afirmativa, o indicativo depois de [[penser que|pensar que]] e [[croire que|acreditar que]] na afirmativa, os exemplos e o conselho de treino. ' +
          'A página do Portail linguistique du Canada sobre [[espérer|esperar]] não pôde ser aberta e não foi usada. ' +
          'Esses pontos são material didático, não regra oficial nem exigência das provas.'
      }
    ]
  },

  fr: {
    title: 'Le subjonctif présent : volonté, sentiments, obligation et doute',
    summary:
      'Apprenez quand utiliser le subjonctif présent pour exprimer des souhaits, des sentiments, des nécessités et des incertitudes. ' +
      'Maîtrisez sa formation, les principaux verbes irréguliers et les différences avec l’indicatif afin d’éviter les erreurs fréquentes.',
    blocks: [
      { type: 'heading', text: 'Formation du subjonctif présent' },
      {
        type: 'paragraph',
        text:
          'Le subjonctif présent est principalement utilisé dans les propositions subordonnées pour exprimer quelque chose de souhaité, de nécessaire, d’incertain ou lié à un sentiment. ' +
          'Pour la majorité des verbes, sa formation utilise le radical de la troisième personne du pluriel du présent de l’indicatif, auquel on enlève la terminaison -ent avant d’ajouter les terminaisons -e, -es, -e, -ions, -iez et -ent. ' +
          'Exemple : ils parlent → que je parle.'
      },
      {
        type: 'table',
        headers: ['Verbe', 'Formes du subjonctif'],
        rows: [
            [
              'être',
              'que je sois / que nous soyons'
            ],
            [
              'avoir',
              'que j’aie / que nous ayons'
            ],
            [
              'aller',
              'que j’aille'
            ],
            [
              'faire',
              'que je fasse'
            ],
            [
              'pouvoir',
              'que je puisse'
            ],
            [
              'savoir',
              'que je sache'
            ],
            [
              'vouloir',
              'que je veuille'
            ],
            [
              'venir',
              'que je vienne / que nous venions'
            ]
        ]
      },
      { type: 'heading', text: 'Quand utiliser le subjonctif' },
      {
        type: 'table',
        headers: ['Situation', 'Expressions fréquentes', 'Signification'],
        rows: [
            [
              'Volonté et souhait',
              'vouloir que, souhaiter que, désirer que',
              'Exprimer une volonté ou un résultat souhaité.'
            ],
            [
              'Sentiments',
              'être heureux que, regretter que, craindre que',
              'Exprimer une réaction émotionnelle à une situation.'
            ],
            [
              'Obligation et nécessité',
              'il faut que, il est nécessaire que, il est important que',
              'Exprimer une exigence ou une nécessité.'
            ],
            [
              'Doute et incertitude',
              'douter que, ne pas croire que, il est possible que',
              'Présenter quelque chose comme incertain ou simplement possible.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Dans la majorité de ces constructions, le subjonctif apparaît après que ou qu’ devant une voyelle. ' +
          'Cependant, toutes les propositions introduites par que ne nécessitent pas ce mode verbal. ' +
          'Les verbes d’opinion à la forme affirmative, comme penser que et croire que, sont normalement suivis de l’indicatif. ' +
          'Il est également important de retenir que espérer que, à la forme affirmative, est normalement suivi de l’indicatif, tandis que souhaiter que demande le subjonctif.'
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'paragraph',
        text:
          'Le directeur veut que chaque employé suive la formation sur la sécurité. Il faut que les demandes soient envoyées avant vendredi. ' +
          'Je suis contente que ma sœur puisse participer à la réunion à Montréal. Nous doutons que le service soit ouvert pendant la fin de semaine. ' +
          'Je ne crois pas que cette solution réponde aux besoins des résidents. J’espère que tu trouveras un emploi rapidement.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à espérer et à la traduction littérale',
        text:
          'Une erreur fréquente consiste à reproduire directement le subjonctif portugais après le verbe espérer. ' +
          'À la forme affirmative, cette construction utilise normalement l’indicatif : J’espère que tu viendras. ' +
          'Ne confondez pas cette phrase avec Je souhaite que tu viennes, qui utilise le subjonctif. ' +
          'Une autre erreur consiste à oublier que certains verbes ont des radicaux irréguliers ou différents entre les formes du singulier et celles de nous et vous. ' +
          'Il ne suffit donc pas de mémoriser uniquement les terminaisons.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Utilisez le subjonctif dans des situations réelles',
        text:
          'Au TCF Canada, l’expression écrite comprend 3 exercices (60 minutes) et l’expression orale comprend 3 exercices (12 minutes, dont 2 minutes de préparation). ' +
          'Au TEF Canada, l’expression écrite et l’expression orale font aussi partie des épreuves obligatoires. ' +
          'Entraînez-vous à construire des phrases qui expriment des souhaits, des recommandations, des préoccupations et des nécessités. ' +
          'Au lieu de simplement mémoriser les verbes, pratiquez des phrases complètes et vérifiez si le mode verbal correspond au sens du message.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment la formation du subjonctif présent (terminaisons et radicaux irréguliers de aller, faire, pouvoir, savoir, venir et vouloir), ' +
          'le subjonctif après les verbes de volonté, de sentiment et d’opinion ou de jugement, et après douter, et que ne pas penser que entraîne le subjonctif. ' +
          'Le FEI et Le français des affaires confirment les épreuves d’expression écrite et orale du TCF Canada et du TEF Canada. ' +
          'Ne sont pas sourcés : l’indicatif après espérer que à la forme affirmative, l’indicatif après penser que et croire que à la forme affirmative, les exemples et le conseil d’entraînement. ' +
          'La page du Portail linguistique du Canada sur espérer n’a pas pu être ouverte et n’a pas été utilisée. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une exigence des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le subjonctif : formes et conjugaison — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24237/la-grammaire/le-verbe/conjugaison/formes-du-subjonctif'
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
