import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-opiniao',

  pt: {
    title: 'Expressar e justificar uma opinião',
    summary:
      'Aprenda a apresentar opiniões pessoais, defender pontos de vista e justificar suas ideias com argumentos claros e exemplos concretos. ' +
      'Domine expressões de concordância, discordância, ressalva e conclusão para desenvolver uma argumentação organizada e natural em francês.',
    blocks: [
      { type: 'heading', text: 'Como apresentar e desenvolver uma opinião' },
      {
        type: 'paragraph',
        text:
          'Para expressar uma opinião de maneira convincente, não basta dizer o que você pensa. ' +
          'Apresente seu ponto de vista, explique os motivos, desenvolva pelo menos um argumento com um exemplo e finalize com uma conclusão coerente. ' +
          'Em discussões mais complexas, considere também um ponto de vista contrário e explique por que sua posição continua sendo válida. ' +
          'Essa organização ajuda a produzir respostas claras tanto na fala quanto na escrita.'
      },
      {
        type: 'table',
        headers: ['Objetivo', 'Expressões em francês', 'Função'],
        rows: [
            [
              'Apresentar opinião',
              '[[À mon avis,…|Na minha opinião,…]] / [[Selon moi,…|Segundo minha opinião,…]] / [[Personnellement,…|Pessoalmente,…]]',
              'Introduzir seu ponto de vista.'
            ],
            [
              'Defender uma posição',
              '[[Je pense que…|Acho que…]] / [[Je considère que…|Considero que…]] / [[Je suis convaincu que…|Estou convencido de que…]]',
              'Apresentar uma opinião com diferentes graus de convicção.'
            ],
            [
              'Justificar uma ideia',
              '[[Parce que…|Porque…]] / [[En effet,…|De fato,…]] / [[Cela s’explique par…|Isso se explica por…]]',
              'Explicar os motivos da opinião.'
            ],
            [
              'Apresentar exemplos',
              '[[Par exemple,…|Por exemplo,…]] / [[Prenons le cas de…|Vejamos o caso de…]]',
              'Tornar o argumento mais concreto.'
            ],
            [
              'Concordar',
              '[[Je suis tout à fait d’accord avec…|Concordo plenamente com…]] / [[Je partage cet avis.|Compartilho dessa opinião.]]',
              'Demonstrar concordância.'
            ],
            [
              'Discordar',
              '[[Je ne partage pas ce point de vue.|Não compartilho desse ponto de vista.]] / [[Je ne suis pas de cet avis.|Não tenho essa opinião.]]',
              'Expressar discordância educadamente.'
            ],
            [
              'Introduzir ressalvas',
              '[[Certes,… cependant…|Certamente…, no entanto…]] / [[Il faut toutefois reconnaître que…|É preciso, entretanto, reconhecer que…]]',
              'Reconhecer limitações e apresentar contrapontos.'
            ],
            [
              'Concluir',
              '[[En conclusion,…|Em conclusão,…]] / [[Pour toutes ces raisons,…|Por todas essas razões,…]]',
              'Reforçar a posição e encerrar o raciocínio.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Organize seus argumentos utilizando conectores variados. Para acrescentar informações, empregue [[de plus|além disso]], [[en outre|ademais]] ' +
          'e [[par ailleurs|além disso / por outro lado]]. Para apresentar uma oposição, utilize [[cependant|entretanto]], [[toutefois|contudo]] ' +
          'e [[en revanche|em contrapartida]]. Para indicar consequências, prefira [[donc|portanto]], [[ainsi|assim]] e [[par conséquent|consequentemente]]. ' +
          'Evite repetir constantemente [[parce que|porque]] e [[mais|mas]]: varie as estruturas de acordo com a relação entre as ideias.'
      },
      { type: 'heading', text: 'Exemplo de opinião desenvolvida' },
      {
        type: 'paragraph',
        text:
          '[[À mon avis, les villes devraient investir davantage dans les transports en commun.|Na minha opinião, as cidades deveriam investir mais no transporte público.]] ' +
          '[[Je suis favorable à cette mesure, car elle pourrait réduire les embouteillages et faciliter les déplacements quotidiens.|Sou favorável a essa medida, pois ela poderia reduzir os congestionamentos e facilitar os deslocamentos diários.]] ' +
          '[[Par exemple, à Toronto, un réseau de transport collectif plus accessible permettrait à davantage de personnes de se déplacer sans voiture.|Por exemplo, em Toronto, uma rede de transporte público mais acessível permitiria que mais pessoas se deslocassem sem carro.]] ' +
          '[[Certes, ces améliorations nécessitent des investissements importants, mais elles pourraient également améliorer la qualité de vie des résidents.|Certamente, essas melhorias exigem investimentos importantes, mas também poderiam melhorar a qualidade de vida dos moradores.]] ' +
          '[[Pour toutes ces raisons, je considère que le développement des transports collectifs devrait être une priorité municipale.|Por todas essas razões, considero que o desenvolvimento do transporte público deveria ser uma prioridade municipal.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com as construções depois de expressar uma opinião',
        text:
          'Um erro comum de brasileiros é acrescentar [[que|que]] diretamente depois de [[à mon avis|na minha opinião]]. ' +
          'A construção natural é [[À mon avis, cette solution est efficace.|Na minha opinião, essa solução é eficaz.]], sem [[que|que]]. ' +
          'Outro cuidado: [[Je pense que|Acho que]] normalmente é seguido do indicativo na afirmativa, não do subjuntivo. ' +
          'Exemplo: [[Je pense que cette mesure est nécessaire.|Acho que essa medida é necessária.]] Também não confunda [[être d’accord avec|concordar com]] ' +
          'com uma construção usando [[de|de]]: diga [[Je suis d’accord avec cette proposition.|Concordo com essa proposta.]]'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Defenda sua opinião com argumentos e exemplos',
        text:
          'No TEF Canada, a seção B da produção escrita exige expressar e justificar um ponto de vista, enquanto a seção B da expressão oral consiste em argumentar para convencer o interlocutor. ' +
          'No TCF Canada, a terceira tarefa oral avalia a capacidade de apresentar espontaneamente um ponto de vista de maneira contínua e convincente. ' +
          'Na produção escrita, a terceira tarefa envolve comparar dois pontos de vista apresentados em documentos e expressar sua própria opinião. ' +
          'Pratique desenvolver argumentos completos, explicar suas razões, apresentar exemplos e reconhecer opiniões contrárias. ' +
          'Não se limite a enumerar vantagens e desvantagens: mostre como cada argumento sustenta sua posição.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A lista de charneiras da OQLF confirma, para introduzir uma opinião, [[à mon avis|na minha opinião]], [[selon moi|segundo meu ponto de vista]], [[personnellement|pessoalmente]], [[pour ma part|quanto a mim]] e [[il me semble|parece-me]]; para justificar e exemplificar, [[car|pois]], [[parce que|porque]], [[en effet|de fato]] e [[par exemple|por exemplo]]; para acrescentar, [[de plus|além disso]], [[en outre|ademais]] e [[par ailleurs|além disso]]; para opor, [[cependant|entretanto]], [[toutefois|contudo]], [[en revanche|em contrapartida]] e [[certes|certamente]]; para as consequências, [[donc|portanto]], [[ainsi|assim]] e [[par conséquent|consequentemente]]; e, para concluir, [[en conclusion|em conclusão]] e [[pour conclure|para concluir]]. ' +
          'Não têm fonte: [[Je pense que|Acho que]], [[Je considère que|Considero que]] e [[Je suis convaincu que|Estou convencido de que]], [[Cela s’explique par|Isso se explica por]], [[Prenons le cas de|Vejamos o caso de]], [[Il faut toutefois reconnaître que|É preciso, entretanto, reconhecer que]], as expressões de concordância e discordância da tabela, o aviso sobre [[à mon avis|na minha opinião]] com [[que|que]] e sobre [[être d’accord avec|concordar com]], o exemplo desenvolvido e a sequência sugerida. ' +
          'O manual do examinador do TCF confirma a tarefa 3 oral (4 minutos e 30, tomar posição de forma convincente), o manual do candidato confirma a tarefa 3 escrita (comparar dois pontos de vista, 120 a 180 palavras), e os PDFs de exemplos do TEF confirmam a seção B oral (convencer um amigo) e a seção B escrita (carta ao jornal, 200 palavras, ao menos 3 argumentos). ' +
          'Entretanto, nenhuma dessas fontes exige o emprego de conectores específicos ou determina que a estrutura apresentada seja obrigatória para alcançar NCLC 7. ' +
          'A organização dos argumentos, a quantidade de exemplos e a sequência sugerida são conselhos de preparação, não regras oficiais das provas.'
      }
    ]
  },

  fr: {
    title: 'Exprimer et justifier son opinion',
    summary:
      'Apprenez à présenter vos opinions personnelles, à défendre vos points de vue et à justifier vos idées avec des arguments clairs et des exemples concrets. ' +
      'Maîtrisez les expressions d’accord, de désaccord, de réserve et de conclusion afin de développer une argumentation organisée et naturelle en français.',
    blocks: [
      { type: 'heading', text: 'Comment présenter et développer une opinion' },
      {
        type: 'paragraph',
        text:
          'Pour exprimer une opinion de manière convaincante, il ne suffit pas de dire ce que vous pensez. ' +
          'Présentez votre point de vue, expliquez vos raisons, développez au moins un argument à l’aide d’un exemple et terminez par une conclusion cohérente. ' +
          'Dans les discussions plus complexes, prenez également en considération un point de vue contraire et expliquez pourquoi votre position reste valable. ' +
          'Cette organisation permet de produire des réponses claires, aussi bien à l’oral qu’à l’écrit.'
      },
      {
        type: 'table',
        headers: ['Objectif', 'Expressions utiles', 'Fonction'],
        rows: [
            [
              'Présenter son opinion',
              'À mon avis,… / Selon moi,… / Personnellement,…',
              'Introduire son point de vue.'
            ],
            [
              'Défendre une position',
              'Je pense que… / Je considère que… / Je suis convaincu que…',
              'Présenter une opinion avec différents degrés de conviction.'
            ],
            [
              'Justifier une idée',
              'Parce que… / En effet,… / Cela s’explique par…',
              'Expliquer les raisons de son opinion.'
            ],
            [
              'Présenter des exemples',
              'Par exemple,… / Prenons le cas de…',
              'Rendre l’argument plus concret.'
            ],
            [
              'Être d’accord',
              'Je suis tout à fait d’accord avec… / Je partage cet avis.',
              'Exprimer son accord.'
            ],
            [
              'Exprimer son désaccord',
              'Je ne partage pas ce point de vue. / Je ne suis pas de cet avis.',
              'Exprimer poliment son désaccord.'
            ],
            [
              'Introduire des réserves',
              'Certes,… cependant… / Il faut toutefois reconnaître que…',
              'Reconnaître certaines limites et présenter des contre-arguments.'
            ],
            [
              'Conclure',
              'En conclusion,… / Pour toutes ces raisons,…',
              'Renforcer sa position et terminer son raisonnement.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Organisez vos arguments en utilisant des connecteurs variés. Pour ajouter des informations, employez de plus, en outre et par ailleurs. ' +
          'Pour présenter une opposition, utilisez cependant, toutefois et en revanche. Pour indiquer des conséquences, privilégiez donc, ainsi et par conséquent. ' +
          'Évitez de répéter constamment parce que et mais : variez les constructions selon la relation entre les idées.'
      },
      { type: 'heading', text: 'Exemple d’opinion développée' },
      {
        type: 'paragraph',
        text:
          'À mon avis, les villes devraient investir davantage dans les transports en commun. ' +
          'Je suis favorable à cette mesure, car elle pourrait réduire les embouteillages et faciliter les déplacements quotidiens. ' +
          'Par exemple, à Toronto, un réseau de transport collectif plus accessible permettrait à davantage de personnes de se déplacer sans voiture. ' +
          'Certes, ces améliorations nécessitent des investissements importants, mais elles pourraient également améliorer la qualité de vie des résidents. ' +
          'Pour toutes ces raisons, je considère que le développement des transports collectifs devrait être une priorité municipale.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux constructions après les expressions d’opinion',
        text:
          'Une erreur fréquente chez les lusophones consiste à ajouter que directement après à mon avis. ' +
          'La construction naturelle est À mon avis, cette solution est efficace, sans que. ' +
          'Autre précaution : Je pense que est normalement suivi de l’indicatif à la forme affirmative, et non du subjonctif. ' +
          'Exemple : Je pense que cette mesure est nécessaire. ' +
          'Ne confondez pas non plus être d’accord avec et une construction avec de : dites Je suis d’accord avec cette proposition.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Défendez votre opinion avec des arguments et des exemples',
        text:
          'Au TEF Canada, la section B de l’expression écrite demande d’exprimer et de justifier un point de vue, tandis que la section B de l’expression orale consiste à argumenter pour convaincre l’interlocuteur. ' +
          'Au TCF Canada, la troisième tâche orale évalue la capacité à présenter spontanément un point de vue de manière continue et convaincante. ' +
          'En expression écrite, la troisième tâche consiste à comparer deux points de vue présentés dans des documents et à exprimer sa propre opinion. ' +
          'Entraînez-vous à développer des arguments complets, à expliquer vos raisons, à présenter des exemples et à reconnaître les opinions contraires. ' +
          'Ne vous contentez pas d’énumérer des avantages et des inconvénients : montrez comment chaque argument soutient votre position.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La liste de charnières de l’OQLF confirme, pour introduire une opinion, à mon avis, selon moi, personnellement, pour ma part et il me semble ; pour justifier et illustrer, car, parce que, en effet et par exemple ; pour ajouter, de plus, en outre et par ailleurs ; pour opposer, cependant, toutefois, en revanche et certes ; pour les conséquences, donc, ainsi et par conséquent ; et, pour conclure, en conclusion et pour conclure. ' +
          'Ne sont pas sourcés : Je pense que, Je considère que et Je suis convaincu que, Cela s’explique par, Prenons le cas de, Il faut toutefois reconnaître que, les expressions d’accord et de désaccord du tableau, l’avertissement sur à mon avis avec que et sur être d’accord avec, l’exemple développé et l’ordre suggéré. ' +
          'Le manuel de l’examinateur du TCF confirme la tâche 3 orale (4 minutes 30, prendre position de façon convaincante), le manuel du candidat confirme la tâche 3 écrite (comparer deux points de vue, 120 à 180 mots), et les PDF d’exemples du TEF confirment la section B orale (convaincre un(e) ami(e)) et la section B écrite (lettre au journal, 200 mots, au moins 3 arguments). ' +
          'Cependant, aucune de ces sources n’exige l’emploi de connecteurs précis ni ne détermine que la structure proposée soit obligatoire pour atteindre le NCLC 7. ' +
          'L’organisation des arguments, le nombre d’exemples et l’ordre suggéré constituent des conseils de préparation et non des règles officielles des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Manuel de l’examinateur du TCF, version Q, décembre 2025 — France Éducation international',
      url: 'https://www.france-education-international.fr/document/manuel-examinateur-tcf'
    },
    {
      title: 'Manuel du candidat au TCF, version Q — France Éducation international',
      url: 'https://france-education-international.fr/document/manuelcandidattoutes20dc3a9clinaisonsi'
    },
    {
      title: 'Expression orale : exemples de sujets — Le français des affaires (TEF Canada)',
      url: 'https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2024/10/tef-exemples-epreuve-eo.pdf'
    },
    {
      title: 'Expression écrite : exemples de sujets — Le français des affaires (TEF Canada)',
      url: 'https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2024/10/tef-exemples-epreuve-ee.pdf'
    },
    {
      title: 'Liste de charnières — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/25159/la-redaction-et-la-communication/organisation-textuelle/liste-de-charnieres'
    },
    {
      title: 'TCF Canada — Présentation des épreuves et compétences évaluées — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'Se préparer à l’épreuve d’expression orale du TEF — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-dexpression-orale-du-tef/'
    }
  ]
}

export default content
