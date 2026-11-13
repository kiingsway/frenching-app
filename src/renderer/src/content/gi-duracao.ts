import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-duracao',

  pt: {
    title: 'Preposições de duração: depuis, pendant, pour, en e dans',
    summary:
      'Você vai aprender a diferenciar cinco preposições usadas para expressar duração, tempo necessário e prazo até um acontecimento. ' +
      'Também verá como distinguir construções que podem ter a mesma tradução em português, mas expressam relações temporais diferentes em francês.',
    blocks: [
      { type: 'heading', text: 'Entenda a diferença de perspectiva' },
      {
        type: 'paragraph',
        text:
          'A escolha da preposição depende da relação entre a duração e o momento de referência. ' +
          'Não traduza automaticamente as palavras há, por ou em: observe se a ação continua, se o período é considerado como um todo, se a duração é prevista, quanto tempo uma tarefa leva ou quanto falta para um acontecimento.'
      },
      {
        type: 'table',
        headers: ['Preposição', 'Quando usar', 'Ideia principal'],
        rows: [
            [
              '[[depuis|há / desde]]',
              'Uma ação ou situação começou anteriormente e continua no momento de referência.',
              'Duração em andamento.'
            ],
            [
              '[[pendant|durante]]',
              'Uma ação acontece durante um intervalo de tempo considerado como um todo.',
              'Duração delimitada.'
            ],
            [
              '[[pour|por]]',
              'Indica uma duração prevista, especialmente em construções com verbos de partida, como viajar ou partir.',
              'Duração planejada.'
            ],
            [
              '[[en|em]]',
              'Indica quanto tempo é necessário para realizar ou concluir uma atividade.',
              'Tempo necessário.'
            ],
            [
              '[[dans|daqui a]]',
              'Indica quanto tempo vai passar antes que um acontecimento ocorra.',
              'Prazo até um acontecimento.'
            ]
        ]
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[Je travaille à Toronto depuis 2024.|Trabalho em Toronto desde 2024.]]',
          '[[J’ai habité à Toronto pendant deux ans.|Morei em Toronto durante dois anos.]]',
          '[[Mon frère est parti pour deux semaines à Québec.|Meu irmão viajou para Quebec por duas semanas.]]',
          '[[J’ai rempli le formulaire en dix minutes.|Preenchi o formulário em dez minutos.]]',
          '[[L’autobus arrivera dans dix minutes.|O ônibus chegará daqui a dez minutos.]]',
          '[[Quand le technicien est arrivé, j’attendais depuis vingt minutes.|Quando o técnico chegou, eu estava esperando havia vinte minutos.]]'
        ]
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'paragraph',
        text:
          'A principal diferença entre [[depuis|há / desde]] e [[pendant|durante]] está na continuidade. ' +
          'Compare: [[Je travaille ici depuis deux ans.|Trabalho aqui há dois anos.]] A pessoa começou a trabalhar há dois anos e continua trabalhando. ' +
          'Já em [[J’ai travaillé ici pendant deux ans.|Trabalhei aqui durante dois anos.]], o período de trabalho é apresentado como uma duração delimitada.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda en e dans',
        text:
          'É comum confundir [[en|em]] e [[dans|daqui a]], porque ambas podem ser traduzidas por “em”. ' +
          '[[Je vais terminer le rapport en deux heures.|Vou concluir o relatório em duas horas.]] indica o tempo necessário para concluir a tarefa. ' +
          'Já [[La réunion commencera dans deux heures.|A reunião começará daqui a duas horas.]] indica quanto tempo falta para o início do evento. ' +
          'Outro cuidado é com “há”: para uma situação que continua, use [[depuis|há / desde]], como em [[Je travaille ici depuis deux ans.|Trabalho aqui há dois anos.]] ' +
          'Para um fato passado e terminado, use [[il y a|há (atrás)]], como em [[Je suis arrivé il y a deux ans.|Cheguei há dois anos.]] ' +
          'Por fim, [[pour|por]] indica uma duração prevista e não serve para durações presentes ou passadas. Com [[partir|partir]], use [[pour|por]] e evite [[pendant|durante]]: ' +
          '[[Mon frère est parti pour deux semaines à Cuba.|Meu irmão viajou por duas semanas a Cuba.]]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Em exercícios de compreensão escrita e oral, identifique primeiro a relação temporal apresentada pelo contexto. ' +
          'Pergunte se a ação ainda está acontecendo, se o intervalo é considerado como um todo, se existe uma duração planejada, quanto tempo uma tarefa leva ou quando um evento vai ocorrer. ' +
          'Essa análise ajuda a escolher a preposição correta e também evita erros na produção escrita e oral.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O OQLF confirma [[depuis|há / desde]] para o início de uma ação ou estado que dura e a construção de [[partir|partir]] com [[pour|por]] para a duração, evitando [[pendant|durante]]. ' +
          'O Lawless French confirma [[dans|daqui a]] como o prazo antes de um acontecimento, [[en|em]] como o tempo que algo leva, [[pendant|durante]] como duração total e [[pour|por]] como duração futura. ' +
          'Não têm fonte: a oposição entre [[depuis|há / desde]] e [[il y a|há (atrás)]], os exemplos e a dica para a prova. ' +
          'Essa dica é conselho de preparação, não regra oficial. A página do Portail linguistique du Canada sobre [[durant|durante]] e [[pendant|durante]] não pôde ser aberta e não foi usada. ' +
          'As páginas consultadas não indicam se essas preposições são cobradas em alguma questão do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Les prépositions de durée : depuis, pendant, pour, en et dans',
    summary:
      'Vous apprendrez à distinguer cinq prépositions utilisées pour exprimer une durée, le temps nécessaire à une activité et le délai avant un événement. ' +
      'Vous verrez également comment différencier des constructions qui peuvent avoir la même traduction en portugais, mais qui expriment des relations temporelles différentes en français.',
    blocks: [
      { type: 'heading', text: 'Comprendre les différentes perspectives temporelles' },
      {
        type: 'paragraph',
        text:
          'Le choix de la préposition dépend de la relation entre la durée et le moment de référence. ' +
          'Il ne suffit pas de traduire directement les mots portugais correspondant à depuis, pendant ou dans : il faut déterminer si l’action continue, si la période est considérée dans son ensemble, si la durée est prévue, combien de temps une activité nécessite ou combien de temps il reste avant un événement.'
      },
      {
        type: 'table',
        headers: ['Préposition', 'Quand l’utiliser', 'Idée principale'],
        rows: [
            [
              'depuis',
              'Une action ou une situation a commencé auparavant et continue au moment de référence.',
              'Durée en cours.'
            ],
            [
              'pendant',
              'Une action se déroule pendant un intervalle de temps considéré dans son ensemble.',
              'Durée délimitée.'
            ],
            [
              'pour',
              'Exprime une durée prévue, notamment dans les constructions avec des verbes de départ comme partir ou voyager.',
              'Durée planifiée.'
            ],
            [
              'en',
              'Indique le temps nécessaire pour réaliser ou terminer une activité.',
              'Temps nécessaire.'
            ],
            [
              'dans',
              'Indique le temps qui s’écoulera avant qu’un événement se produise.',
              'Délai avant un événement.'
            ]
        ]
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'list',
        items: [
          'Je travaille à Toronto depuis 2024.',
          'J’ai habité à Toronto pendant deux ans.',
          'Mon frère est parti pour deux semaines à Québec.',
          'J’ai rempli le formulaire en dix minutes.',
          'L’autobus arrivera dans dix minutes.',
          'Quand le technicien est arrivé, j’attendais depuis vingt minutes.'
        ]
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'paragraph',
        text:
          'La principale différence entre depuis et pendant concerne la continuité. Comparez : « Je travaille ici depuis deux ans. ' +
          '» La personne a commencé à travailler il y a deux ans et travaille toujours au même endroit. ' +
          'En revanche, dans « J’ai travaillé ici pendant deux ans », la période de travail est présentée comme une durée délimitée.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas en et dans',
        text:
          'Il est courant de confondre en et dans, parce que les deux peuvent être traduits par em. ' +
          '« Je vais terminer le rapport en deux heures » indique le temps nécessaire pour terminer le travail. ' +
          'En revanche, « La réunion commencera dans deux heures » indique le temps qui reste avant le début de l’événement. ' +
          'Attention aussi à « há » : pour une situation qui continue, utilisez depuis, comme dans « Je travaille ici depuis deux ans ». ' +
          'Pour un fait passé et terminé, utilisez il y a, comme dans « Je suis arrivé il y a deux ans ». ' +
          'Enfin, pour exprime une durée prévue et ne s’emploie pas pour une durée présente ou passée. Avec partir, employez pour et évitez pendant : « Mon frère est parti pour deux semaines à Cuba ».'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les exercices de compréhension écrite et orale, identifiez d’abord la relation temporelle exprimée par le contexte. ' +
          'Demandez-vous si l’action est toujours en cours, si l’intervalle est considéré dans son ensemble, si une durée est prévue, combien de temps une activité nécessite ou quand un événement va se produire. ' +
          'Cette analyse vous aidera à choisir la bonne préposition et à éviter des erreurs dans vos productions écrites et orales.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme depuis pour le début d’une action ou d’un état qui dure, et la construction de partir avec pour pour la durée, en évitant pendant. ' +
          'Lawless French confirme dans comme délai avant un événement, en comme temps nécessaire, pendant comme durée totale et pour comme durée future. ' +
          'Ne sont pas sourcés : l’opposition entre depuis et il y a, les exemples et le conseil pour l’examen. ' +
          'Ce conseil est une recommandation de préparation, et non une règle officielle. La page du Portail linguistique du Canada sur durant et pendant n’a pas pu être ouverte et n’a pas été utilisée. ' +
          'Les pages consultées ne précisent pas si ces prépositions sont évaluées dans une question du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'La préposition depuis — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21188/la-syntaxe/les-prepositions/preposition-devant-un-nom/preposition-depuis'
    },
    {
      title: 'Partir et ses compléments — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23904/la-syntaxe/le-complement-du-verbe/partir-et-ses-complements'
    },
    {
      title: 'French Prepositions of Time — Lawless French',
      url: 'https://www.lawlessfrench.com/grammar/prepositions-of-time/'
    }
  ]
}

export default content
