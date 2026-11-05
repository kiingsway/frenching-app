import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-palestras',

  pt: {
    title: 'Apresentações e palestras de nível mais abstrato',
    summary:
      'No fim da prova (níveis C1 e C2) aparecem conferências, exposições e discussões sobre temas abstratos: ciência, sociedade, economia, filosofia. ' +
      'O vocabulário é mais técnico e as ideias vêm encadeadas. Entender a estrutura da fala ajuda mais do que conhecer cada palavra.',
    blocks: [
      { type: 'heading', text: 'Siga o plano da fala' },
      {
        type: 'paragraph',
        text:
          'Palestras costumam anunciar o próprio plano. Quem reconhece os marcadores de estrutura sabe em que parte está e o que vem depois, ' +
          'mesmo quando perde algumas frases.'
      },
      {
        type: 'table',
        headers: ['Função', 'Marcadores'],
        rows: [
          ['Anunciar o plano', 'Dans un premier temps… · Je commencerai par… · Nous verrons ensuite…'],
          ['Passar à ideia seguinte', 'Passons maintenant à… · Par ailleurs… · D’autre part…'],
          ['Dar um exemplo', 'Prenons l’exemple de… · C’est le cas de… · Notamment…'],
          ['Reformular', 'Autrement dit… · C’est-à-dire… · En d’autres termes…'],
          ['Concluir', 'En somme… · Pour conclure… · Retenons que…']
        ]
      },

      { type: 'heading', text: 'Ideia principal e detalhes' },
      {
        type: 'list',
        items: [
          'A tese costuma aparecer no início e ser retomada na conclusão.',
          'Exemplos e números servem para sustentar a tese: as perguntas raramente cobram o exemplo em si, e sim o que ele demonstra.',
          'Reformulações (autrement dit, c’est-à-dire) são uma segunda chance de entender uma ideia difícil.',
          'Nuances importam: "il semblerait que" (parece que) não é o mesmo que "il est prouvé que" (está provado que).'
        ]
      },

      { type: 'heading', text: 'Vocabulário abstrato frequente' },
      {
        type: 'list',
        items: [
          'Pensamento: une hypothèse, un enjeu (o que está em jogo), un constat (uma constatação), une démarche (uma abordagem).',
          'Mudança: une évolution, une mutation (transformação profunda), un phénomène, une tendance.',
          'Relações: découler de (resultar de), relever de (ser da alçada de), mettre en évidence (evidenciar), remettre en cause (questionar).'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'Escolha conferências curtas e podcasts de divulgação científica, como os da France Culture ou da Radio-Canada. ' +
          'Ao final, tente resumir em duas frases: qual é a tese e qual é o argumento principal.'
      }
    ]
  },

  fr: {
    title: 'Exposés et conférences de niveau plus abstrait',
    summary:
      'À la fin de l’épreuve (niveaux C1 et C2), on entend des conférences, des exposés et des discussions sur des sujets abstraits : sciences, société, économie, philosophie. ' +
      'Le vocabulaire est plus technique et les idées s’enchaînent. Comprendre la structure du discours aide davantage que connaître chaque mot.',
    blocks: [
      { type: 'heading', text: 'Suivez le plan du discours' },
      {
        type: 'paragraph',
        text:
          'Les conférenciers annoncent souvent leur plan. Si vous reconnaissez les marqueurs de structure, vous savez où vous en êtes et ce qui va suivre, ' +
          'même quand vous perdez quelques phrases.'
      },
      {
        type: 'table',
        headers: ['Fonction', 'Marqueurs'],
        rows: [
          ['Annoncer le plan', 'Dans un premier temps… · Je commencerai par… · Nous verrons ensuite…'],
          ['Passer à l’idée suivante', 'Passons maintenant à… · Par ailleurs… · D’autre part…'],
          ['Donner un exemple', 'Prenons l’exemple de… · C’est le cas de… · Notamment…'],
          ['Reformuler', 'Autrement dit… · C’est-à-dire… · En d’autres termes…'],
          ['Conclure', 'En somme… · Pour conclure… · Retenons que…']
        ]
      },

      { type: 'heading', text: 'Idée principale et détails' },
      {
        type: 'list',
        items: [
          'La thèse apparaît souvent au début et elle est reprise dans la conclusion.',
          'Les exemples et les chiffres servent à appuyer la thèse : les questions portent rarement sur l’exemple lui-même, mais sur ce qu’il démontre.',
          'Les reformulations (autrement dit, c’est-à-dire) sont une deuxième chance de comprendre une idée difficile.',
          'Les nuances comptent : « il semblerait que » n’est pas la même chose que « il est prouvé que ».'
        ]
      },

      { type: 'heading', text: 'Vocabulaire abstrait fréquent' },
      {
        type: 'list',
        items: [
          'La réflexion : une hypothèse, un enjeu, un constat, une démarche.',
          'Le changement : une évolution, une mutation, un phénomène, une tendance.',
          'Les relations : découler de, relever de, mettre en évidence, remettre en cause.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Choisissez des conférences courtes et des podcasts de vulgarisation scientifique, comme ceux de France Culture ou de Radio-Canada. ' +
          'À la fin, essayez de résumer en deux phrases : quelle est la thèse, et quel est l’argument principal.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Open Exam Prep – TCF Canada: format and structure (progression des niveaux)',
      url: 'https://open-exam-prep.com/study-guides/tcf-canada/introduction-logistics/tcf-canada-format-structure'
    },
    {
      title: 'Université de Sherbrooke – TCF : compréhension orale',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-orale'
    },
    {
      title: 'Open Exam Prep – TEF Canada Listening: structure and question types',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/listening-comprehension/listening-overview'
    }
  ]
}

export default content
