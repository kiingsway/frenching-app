import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-tcf-2',

  pt: {
    title: 'TCF – Tarefa 2: interação e obtenção de informações',
    summary:
      'Aprenda a participar de uma conversa simulada para obter informações, esclarecer dúvidas, comparar opções e expressar suas preferências. ' +
      'Pratique perguntas naturais e educadas, pedidos de esclarecimento e estratégias para manter uma interação espontânea, buscando o nível B2.',
    blocks: [
      { type: 'heading', text: '1. Como funciona a tarefa' },
      {
        type: 'paragraph',
        text:
          'A segunda tarefa da expressão oral do TCF Canada consiste em uma interação baseada em uma situação cotidiana. ' +
          'Você recebe um cenário, tem 2 minutos para se preparar e depois conversa com o examinador durante 3 minutos e 30 segundos. ' +
          'O tempo total da tarefa, incluindo a preparação, é de 5 minutos e 30 segundos.'
      },
      {
        type: 'paragraph',
        text:
          'O examinador assume um papel dado pelo enunciado, por exemplo, quem dirige uma associação ou quem procura alguém para cuidar do gato. ' +
          'Você fala primeiro e conduz a conversa: sua missão é fazer perguntas para obter as informações pedidas. ' +
          'Você pode pedir mais detalhes ou pedir que uma informação seja repetida.'
      },
      { type: 'heading', text: '2. Estratégia para conduzir a conversa' },
      {
        type: 'list',
        items: [
          'Apresente sua necessidade: [[Bonjour, je voudrais obtenir des renseignements sur vos services.|Olá, gostaria de obter informações sobre seus serviços.]]',
          'Faça perguntas específicas: [[Quels sont les horaires disponibles ?|Quais são os horários disponíveis?]]',
          'Peça detalhes adicionais: [[Pourriez-vous me donner plus de précisions ?|Poderia me dar mais detalhes?]]',
          'Compare as possibilidades: [[Quelle est la différence entre ces deux options ?|Qual é a diferença entre essas duas opções?]]',
          'Expresse sua preferência e justifique: [[Je préférerais la deuxième option parce qu’elle est plus pratique pour moi.|Eu preferiria a segunda opção porque ela é mais prática para mim.]]',
            'Confirme as informações e encerre: [[Parfait, merci pour ces renseignements.|Perfeito, obrigado pelas informações.]] ' +
            '[[Je vais y réfléchir.|Vou pensar a respeito.]]'
        ]
      },
      { type: 'heading', text: '3. Exemplo prático de interação' },
      {
        type: 'paragraph',
        text:
          'Situação: você mora em Toronto e deseja fazer um curso de culinária em um centro comunitário. ' +
          'Você conversa com um funcionário para descobrir os horários, os preços, os requisitos e as condições de inscrição. ' +
          'Seu objetivo é encontrar uma opção adequada à sua rotina.'
      },
      {
        type: 'paragraph',
        text:
          'Candidato: [[Bonjour, je voudrais obtenir des renseignements sur les cours de cuisine proposés par votre centre.|Olá, gostaria de obter informações sobre os cursos de culinária oferecidos pelo seu centro.]] ' +
          'Interlocutor: [[Bien sûr.|Claro.]] [[Quel type de cours recherchez-vous ?|Que tipo de curso você está procurando?]] ' +
          'Candidato: [[Je cherche un cours pour débutants, de préférence la fin de semaine.|Estou procurando um curso para iniciantes, de preferência no fim de semana.]] ' +
          '[[Pourriez-vous me préciser les horaires et les frais d’inscription ?|Poderia me informar os horários e as taxas de inscrição?]] ' +
          'Interlocutor: [[Nous proposons un cours le samedi matin.|Oferecemos um curso aos sábados de manhã.]] ' +
          '[[Les frais sont de 80 dollars pour quatre séances.|As taxas são de 80 dólares para quatro aulas.]] ' +
          'Candidato: [[Est-ce que le matériel est compris dans le prix ?|O material está incluído no preço?]] ' +
          '[[Est-il possible de s’inscrire en ligne ?|É possível fazer a inscrição pela internet?]] ' +
          'Interlocutor: [[Oui, vous pouvez remplir le formulaire sur notre site.|Sim, você pode preencher o formulário em nosso site.]] Candidato: [[Parfait.|Perfeito.]] ' +
          '[[Je vais consulter les dates et vous confirmer mon choix par courriel.|Vou consultar as datas e confirmar minha escolha por e-mail.]]'
      },
      { type: 'heading', text: '4. Perguntas úteis para diferentes situações' },
      {
        type: 'table',
        headers: ['Objetivo', 'Expressão em francês', 'Utilização'],
        rows: [
            [
              'Solicitar informações',
              '[[Pourriez-vous m’expliquer comment cela fonctionne ?|Poderia me explicar como isso funciona?]]',
              'Pedir uma explicação.'
            ],
            [
              'Perguntar sobre preços',
              '[[Combien coûte ce service ?|Quanto custa esse serviço?]]',
              'Descobrir o valor.'
            ],
            [
              'Verificar disponibilidade',
              '[[Est-ce qu’il reste des places disponibles ?|Ainda há vagas disponíveis?]]',
              'Consultar vagas.'
            ],
            [
              'Perguntar sobre requisitos',
              '[[Quels documents dois-je apporter ?|Quais documentos devo levar?]]',
              'Descobrir o que é necessário.'
            ],
            [
              'Solicitar repetição',
              '[[Pourriez-vous répéter, s’il vous plaît ?|Poderia repetir, por favor?]]',
              'Pedir que a informação seja repetida.'
            ],
            [
              'Expressar preferência',
              '[[Je préférerais cette option, si possible.|Eu preferiria esta opção, se possível.]]',
              'Indicar uma escolha.'
            ]
        ]
      },
      { type: 'heading', text: '5. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com traduções literais e perguntas indiretas',
        text:
          'Em português, é comum dizer perguntar pelos horários. Evite reproduzir essa estrutura com [[demander pour les horaires|perguntar pelos horários]] em francês. ' +
          'Prefira [[demander des renseignements sur les horaires|pedir informações sobre os horários]] ' +
          'ou [[poser une question sur les horaires|fazer uma pergunta sobre os horários]]. ' +
          'Outro erro frequente ocorre nas perguntas indiretas: depois de [[Pouvez-vous me dire|Você pode me dizer]], não utilize [[est-ce que|será que]] ' +
          'para introduzir a pergunta. Diga [[Pouvez-vous me dire où se trouve la salle ?|Você pode me dizer onde fica a sala?]].'
      },
      {
        type: 'list',
        items: [
          'Evite perguntas excessivamente diretas em situações formais. Prefira [[Pourriez-vous me renseigner ?|Poderia me informar?]] em vez de [[Dites-moi.|Diga-me.]]',
          'Não faça perguntas sem relação com o objetivo do cenário. Priorize informações que ajudem você a tomar uma decisão.',
          'Não interrompa o interlocutor antes de ele terminar de fornecer uma informação.',
          'Não fique preso a uma pergunta que não foi compreendida. Utilize [[Je n’ai pas bien compris.|Não compreendi muito bem.]]'
        ]
      },
      { type: 'heading', text: '6. Preparação e avaliação na prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Use os 2 minutos de preparação para organizar suas perguntas',
        text:
          'A prova avalia sua capacidade de obter informações em uma situação cotidiana, expressar necessidades e preferências, interagir e solicitar esclarecimentos. ' +
          'Também são considerados o vocabulário, a gramática, a fluidez, a coerência e a adequação ao contexto social. ' +
          'Para buscar um desempenho B2, não basta formular perguntas simples: demonstre que consegue reagir às respostas, fazer perguntas complementares, comparar possibilidades e justificar suas escolhas.'
      },
      {
        type: 'list',
        items: [
          'Identifique seu objetivo principal e o papel que você deverá representar.',
          'Anote na folha fornecida (não no enunciado) de quatro a seis informações que precisa descobrir, como preço, horário, localização, condições e disponibilidade.',
          'Prepare perguntas abertas e fechadas, variando as estruturas interrogativas.',
          'Pense em pelo menos duas preferências e em uma justificativa para cada uma.',
          'Treine situações diferentes: alugar um apartamento, reservar um serviço, escolher um curso, organizar uma viagem ou obter informações sobre uma atividade.',
          'Não tente seguir um roteiro rígido. A conversa deve evoluir de acordo com as respostas do examinador.'
        ]
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O site oficial e o exemplo oficial de prova (PDF) confirmam: 5 minutos e 30 segundos, dos quais 2 minutos de preparação e 3 minutos e 30 segundos de conversa; ' +
          'o objetivo de obter informações numa situação da vida cotidiana; o examinador com um papel dado pelo enunciado; você falar primeiro e conduzir a conversa; ' +
          'poder pedir mais detalhes ou repetição; poder tomar notas na folha fornecida durante a preparação. ' +
          'Nenhuma fonte confirma isto: os critérios citados (vocabulário, gramática, fluidez, coerência, adequação ao contexto social); a referência ao nível B2; ' +
          'a ideia de que a prova pede perguntas complementares e comparação de opções; e os cenários de treino sugeridos. ' +
          'O exemplo do curso de culinária, as frases-modelo e as dicas de preparação (como levantar de quatro a seis informações) são sugestões de preparação, não regras da prova.'
      }
    ]
  },

  fr: {
    title: 'TCF – Tâche 2 : interaction et obtention de renseignements',
    summary:
      'Apprenez à participer à une conversation simulée pour obtenir des renseignements, clarifier certains points, comparer des options et exprimer vos préférences. ' +
      'Entraînez-vous à formuler des questions naturelles et polies, à demander des précisions et à maintenir une interaction spontanée dans le but d’atteindre le niveau B2.',
    blocks: [
      { type: 'heading', text: '1. Comment fonctionne cette tâche' },
      {
        type: 'paragraph',
        text:
          'La deuxième tâche de l’expression orale du TCF Canada consiste en une interaction basée sur une situation de la vie quotidienne. ' +
          'Vous recevez un scénario, disposez de deux minutes pour vous préparer, puis vous échangez avec l’examinateur pendant trois minutes et trente secondes. ' +
          'La durée totale de cette tâche, préparation comprise, est de cinq minutes et trente secondes.'
      },
      {
        type: 'paragraph',
        text:
          'L’examinateur joue un rôle donné par le sujet, par exemple la personne qui dirige une association ou celle qui cherche quelqu’un pour garder son chat. ' +
          'Vous parlez en premier et vous conduisez la conversation : votre mission consiste à poser des questions pour obtenir les informations demandées. ' +
          'Vous pouvez demander plus de précisions ou faire répéter une information.'
      },
      { type: 'heading', text: '2. Stratégie pour mener la conversation' },
      {
        type: 'list',
        items: [
          'Présentez votre besoin : « Bonjour, je voudrais obtenir des renseignements sur vos services. »',
          'Posez des questions précises : « Quels sont les horaires disponibles ? »',
          'Demandez des précisions supplémentaires : « Pourriez-vous me donner plus de précisions ? »',
          'Comparez les possibilités : « Quelle est la différence entre ces deux options ? »',
          'Exprimez votre préférence et justifiez-la : « Je préférerais la deuxième option parce qu’elle est plus pratique pour moi. »',
          'Confirmez les renseignements et terminez l’échange : « Parfait, merci pour ces renseignements. Je vais y réfléchir. »'
        ]
      },
      { type: 'heading', text: '3. Exemple concret d’interaction' },
      {
        type: 'paragraph',
        text:
          'Situation : vous habitez à Toronto et vous souhaitez suivre un cours de cuisine dans un centre communautaire. ' +
          'Vous discutez avec un employé pour connaître les horaires, les tarifs, les conditions et les modalités d’inscription. ' +
          'Votre objectif est de trouver une formule adaptée à votre emploi du temps.'
      },
      {
        type: 'paragraph',
        text:
          'Candidat : Bonjour, je voudrais obtenir des renseignements sur les cours de cuisine proposés par votre centre. Interlocuteur : Bien sûr. ' +
          'Quel type de cours recherchez-vous ? Candidat : Je cherche un cours pour débutants, de préférence la fin de semaine. ' +
          'Pourriez-vous me préciser les horaires et les frais d’inscription ? Interlocuteur : Nous proposons un cours le samedi matin. ' +
          'Les frais sont de 80 dollars pour quatre séances. Candidat : Est-ce que le matériel est compris dans le prix ? Est-il possible de s’inscrire en ligne ? ' +
          'Interlocuteur : Oui, vous pouvez remplir le formulaire sur notre site. Candidat : Parfait. Je vais consulter les dates et vous confirmer mon choix par courriel.'
      },
      { type: 'heading', text: '4. Questions utiles dans différentes situations' },
      {
        type: 'table',
        headers: ['Objectif', 'Expression en français', 'Utilisation'],
        rows: [
            [
              'Demander des renseignements',
              'Pourriez-vous m’expliquer comment cela fonctionne ?',
              'Obtenir une explication.'
            ],
            [
              'Demander un tarif',
              'Combien coûte ce service ?',
              'Connaître le prix.'
            ],
            [
              'Vérifier les disponibilités',
              'Est-ce qu’il reste des places disponibles ?',
              'Vérifier les places restantes.'
            ],
            [
              'Demander les conditions',
              'Quels documents dois-je apporter ?',
              'Connaître les documents nécessaires.'
            ],
            [
              'Demander de répéter',
              'Pourriez-vous répéter, s’il vous plaît ?',
              'Faire répéter un renseignement.'
            ],
            [
              'Exprimer une préférence',
              'Je préférerais cette option, si possible.',
              'Indiquer son choix.'
            ]
        ]
      },
      { type: 'heading', text: '5. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux traductions littérales et aux questions indirectes',
        text:
          'En portugais, on utilise couramment une construction équivalente à demander après les horaires. ' +
          'Évitez de traduire cette expression par « demander pour les horaires » en français. ' +
          'Préférez « demander des renseignements sur les horaires » ou « poser une question sur les horaires ». ' +
          'Une autre erreur fréquente concerne les questions indirectes : après « Pouvez-vous me dire », n’utilisez pas « est-ce que » pour introduire la question. ' +
          'Dites plutôt « Pouvez-vous me dire où se trouve la salle ? ».'
      },
      {
        type: 'list',
        items: [
          'Évitez les questions trop directes dans les situations formelles. Préférez « Pourriez-vous me renseigner ? » à « Dites-moi. »',
          'Ne posez pas de questions sans rapport avec l’objectif du scénario. Privilégiez les renseignements qui vous aideront à prendre une décision.',
          'N’interrompez pas votre interlocuteur avant qu’il ait terminé de vous donner une information.',
          'Ne restez pas bloqué sur une question que vous n’avez pas comprise. Utilisez « Je n’ai pas bien compris. »'
        ]
      },
      { type: 'heading', text: '6. Préparation et évaluation de l’épreuve' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Utilisez les deux minutes de préparation pour organiser vos questions',
        text:
          'L’épreuve évalue votre capacité à obtenir des renseignements dans une situation de la vie quotidienne, à exprimer des besoins et des préférences, à interagir et à demander des précisions. ' +
          'Le vocabulaire, la grammaire, l’aisance, la cohérence et l’adaptation au contexte social sont également pris en compte. ' +
          'Pour viser le niveau B2, il ne suffit pas de formuler des questions simples : montrez que vous savez réagir aux réponses, poser des questions complémentaires, comparer différentes possibilités et justifier vos choix.'
      },
      {
        type: 'list',
        items: [
          'Identifiez votre objectif principal et le rôle que vous devrez jouer.',
          'Notez sur la feuille fournie (pas sur le sujet) quatre à six informations à obtenir, par exemple le prix, les horaires, l’emplacement, les conditions et les disponibilités.',
          'Préparez des questions ouvertes et fermées en variant les structures interrogatives.',
          'Pensez à au moins deux préférences et à une justification pour chacune.',
          'Entraînez-vous à différentes situations : louer un appartement, réserver un service, choisir un cours, organiser un voyage ou obtenir des renseignements sur une activité.',
          'N’essayez pas de suivre un scénario rigide. La conversation doit évoluer en fonction des réponses de l’examinateur.'
        ]
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Le site officiel et l’exemple officiel d’épreuve (PDF) confirment : 5 minutes 30 dont 2 minutes de préparation et 3 minutes 30 d’échange ; ' +
          'l’objectif d’obtenir des informations dans une situation de la vie quotidienne ; l’examinateur qui joue un rôle donné par le sujet ; le candidat qui parle en premier et conduit la conversation ; ' +
          'la possibilité de demander des précisions ou de faire répéter ; la possibilité de prendre des notes sur la feuille fournie pendant la préparation. ' +
          'Aucune source ne confirme ceci : les critères cités (vocabulaire, grammaire, aisance, cohérence, adaptation au contexte social) ; la référence au niveau B2 ; ' +
          'l’idée que l’épreuve demande des questions complémentaires et la comparaison d’options ; et les situations d’entraînement proposées. ' +
          'L’exemple du cours de cuisine, les phrases modèles et les conseils de préparation (comme repérer quatre à six informations) sont des suggestions, pas des règles de l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'TCF Canada – Apresentação oficial das provas e da expressão oral',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'Avaliação das provas do TCF – France Éducation international',
      url: 'https://france-education-international.fr/en/node/197'
    },
    {
      title: 'TCF TP / Canada / Québec – Exemplo de prova de expressão oral (PDF) – France Éducation international',
      url: 'https://www.france-education-international.fr/document/tcf-tp-qc-ca-exemple-epreuve-eo'
    },
    {
      title: 'Exemplos oficiais de provas do TCF – France Éducation international',
      url: 'https://www.france-education-international.fr/test/exemples-epreuves-tcf'
    }
  ]
}

export default content
