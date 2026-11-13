import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-cumprimentar',

  pt: {
    title: 'Cumprimentar, apresentar-se e despedir-se: formal e informal',
    summary:
      'Aprenda a cumprimentar pessoas, apresentar-se, perguntar o nome de alguém e encerrar uma conversa em francês. ' +
      'Conheça as diferenças entre situações formais e informais, incluindo o uso de tu e vous e algumas particularidades do francês canadense.',
    blocks: [
      { type: 'heading', text: '1. Cumprimentar: escolher a expressão adequada' },
      {
        type: 'paragraph',
        text:
          'As principais saudações variam conforme o momento do dia e o grau de familiaridade com a pessoa. [[Bonjour|Olá / bom dia]] ' +
          'é a forma mais comum e neutra durante o dia. [[Bonsoir|Boa noite]] é utilizado à noite, tanto ao encontrar alguém quanto ao se despedir. ' +
          '[[Salut|Oi]] e [[allô|alô / oi]] são mais familiares e podem ser usados de dia ou de noite.'
      },
      {
        type: 'table',
        headers: ['Expressão', 'Contexto'],
        rows: [
          ['[[Bonjour|Olá / bom dia]]', 'Neutro ou formal; situações cotidianas e profissionais.'],
          ['[[Bonsoir|Boa noite]]', 'Neutro ou formal; à noite, ao chegar ou ao sair.'],
          ['[[Salut|Oi]]', 'Informal; amigos, colegas e pessoas próximas.'],
          ['[[Allô|Alô / oi]]', 'Familiar; também utilizado em cumprimentos informais.']
        ]
      },
      { type: 'heading', text: '2. Apresentar-se e conhecer alguém' },
      {
        type: 'paragraph',
        text:
          'Para apresentar-se, você pode informar seu nome, sua origem, onde mora e sua profissão. Em situações formais, prefira utilizar [[vous|você formal]] ' +
          'e construções mais completas. Em situações informais, [[tu|você informal]] e expressões mais curtas são naturais. No Québec, o uso de [[tu|você informal]] ' +
          'logo no primeiro encontro é mais frequente do que em algumas outras regiões francófonas, mas começar com [[vous|você formal]] ' +
          'continua sendo uma escolha prudente quando você não conhece o interlocutor.'
      },
      {
        type: 'list',
        items: [
          '[[Bonjour, je m’appelle Ana Ribeiro.|Olá, meu nome é Ana Ribeiro.]]',
          '[[Je viens du Brésil et j’habite à Toronto.|Venho do Brasil e moro em Toronto.]]',
          '[[Je travaille dans la restauration.|Trabalho no setor de alimentação.]]',
          '[[Et vous, comment vous appelez-vous ?|E você, como se chama?]]',
          '[[Enchantée de faire votre connaissance.|Prazer em conhecê-lo(a). (dito por uma mulher)]]',
          '[[Salut, moi, c’est Lucas.|Oi, eu sou o Lucas.]]',
          '[[Et toi, comment tu t’appelles ?|E você, como se chama?]]',
          '[[Ravi de te rencontrer !|Prazer em conhecer você!]]'
        ]
      },
      { type: 'heading', text: '3. Despedir-se e encerrar uma conversa' },
      {
        type: 'paragraph',
        text:
          'As despedidas também variam conforme o contexto. [[Au revoir|Tchau / até logo]] é a opção neutra e adequada em situações formais e informais. ' +
          '[[Bonne journée|Tenha um bom dia]] e [[Bonne soirée|Tenha uma boa noite]] são expressões de desejo utilizadas para encerrar uma conversa, não para iniciá-la.'
      },
      {
        type: 'table',
        headers: ['Expressão', 'Utilização'],
        rows: [
          ['[[Au revoir|Tchau / até logo]]', 'Despedida neutra ou formal.'],
          ['[[Bonne journée !|Tenha um bom dia!]]', 'Despedida durante o dia.'],
          ['[[Bonne soirée !|Tenha uma boa noite!]]', 'Despedida no período da noite.'],
          ['[[À bientôt !|Até breve!]]', 'Quando espera encontrar a pessoa novamente.'],
          ['[[À demain !|Até amanhã!]]', 'Quando haverá um próximo encontro no dia seguinte.'],
          ['[[À la prochaine !|Até a próxima!]]', 'Despedida informal ou neutra.'],
          ['[[Salut !|Tchau!]]', 'Despedida informal.'],
          ['[[Bonjour !|Tchau! (no Québec)]]', 'No Québec, despedida familiar durante o dia; em contexto oficial, prefira au revoir.']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com bon matin, bonjour na despedida e salut',
        text:
          'No Québec, [[bon matin|bom dia]] é usado na fala espontânea, mas pertence ao registro familiar e não equivale a [[bonjour|olá / bom dia]]. ' +
          'Em textos escritos, em contexto profissional e em situações orais oficiais, prefira [[bonjour|olá / bom dia]]. ' +
          'Atenção também ao contrário: no Québec, [[bonjour|olá / bom dia]] pode ser dito ao se despedir durante o dia, mas esse uso é familiar. ' +
          'Ao encerrar uma ligação profissional, por exemplo, diga [[au revoir|tchau / até logo]]. ' +
          'Por fim, não use [[salut|oi]] com desconhecidos nem em situações formais, e prefira [[vous|você formal]] no primeiro contato, ' +
          'até que a outra pessoa proponha o [[tu|você informal]].'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'No TCF Canada, a expressão oral é individual, presencial com um examinador, com 3 exercícios e 12 minutos, dos quais 2 são de preparação. ' +
          'O TEF Canada também inclui a expressão oral entre as provas obrigatórias. ' +
          'Pratique apresentações naturais, respostas sobre sua origem, residência, estudos e profissão, além de despedidas adequadas ao contexto. ' +
          'Não decore apenas um discurso: treine responder espontaneamente e adaptar o nível de formalidade à situação.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam [[bonjour|olá / bom dia]] e [[bonsoir|boa noite]] como saudações neutras, [[salut|oi]] e [[allô|alô / oi]] como mais familiares, ' +
          '[[bonne journée|tenha um bom dia]] e [[bonne soirée|tenha uma boa noite]] como fórmulas de despedida, [[bon matin|bom dia]] como familiar e desaconselhado em contexto escrito, profissional ou oficial, ' +
          'o uso familiar de [[bonjour|olá / bom dia]] como despedida no Québec e a escolha entre [[tu|você informal]] e [[vous|você formal]], incluindo a prudência de começar com [[vous|você formal]]. ' +
          'A página do FEI confirma o formato da expressão oral do TCF Canada, e a do Le français des affaires lista a expressão oral entre as provas obrigatórias do TEF Canada. ' +
          'Não têm fonte: os exemplos de apresentação, o uso de [[salut|oi]] como despedida e os conselhos de treino, incluindo adaptar a formalidade à situação. ' +
          'Esses pontos são material didático, não regra oficial. As páginas consultadas não exigem saudação, ordem de apresentação ou despedida específica nas provas.'
      }
    ]
  },

  fr: {
    title: 'Saluer, se présenter et prendre congé : formel et informel',
    summary:
      'Apprenez à saluer des personnes, à vous présenter, à demander le nom de quelqu’un et à terminer une conversation en français. ' +
      'Découvrez les différences entre les situations formelles et informelles, notamment l’emploi de tu et de vous, ainsi que certaines particularités du français canadien.',
    blocks: [
      { type: 'heading', text: '1. Saluer : choisir la formule appropriée' },
      {
        type: 'paragraph',
        text:
          'Les principales formules de salutation varient selon le moment de la journée et le degré de familiarité avec la personne. ' +
          'Bonjour est la formule la plus courante et la plus neutre pendant la journée. Bonsoir s’utilise en soirée, aussi bien pour rencontrer quelqu’un que pour le quitter. ' +
          'Salut et allô sont plus familiers et s’emploient le jour comme le soir.'
      },
      {
        type: 'table',
        headers: ['Expression', 'Contexte'],
        rows: [
          ['Bonjour', 'Neutre ou formel ; situations quotidiennes et professionnelles.'],
          ['Bonsoir', 'Neutre ou formel ; en soirée, à l’arrivée ou au départ.'],
          ['Salut', 'Familier ; amis, collègues et personnes proches.'],
          ['Allô', 'Familier ; également utilisé dans les salutations informelles.']
        ]
      },
      { type: 'heading', text: '2. Se présenter et faire connaissance' },
      {
        type: 'paragraph',
        text:
          'Pour vous présenter, vous pouvez donner votre nom, votre origine, votre lieu de résidence et votre profession. ' +
          'Dans les situations formelles, privilégiez vous et des formulations plus complètes. ' +
          'Dans les situations informelles, tu et des expressions plus courtes sont naturels. ' +
          'Au Québec, l’emploi de tu dès la première rencontre est plus fréquent que dans certaines autres régions francophones, mais commencer par vous reste un choix prudent lorsque vous ne connaissez pas votre interlocuteur.'
      },
      {
        type: 'list',
        items: [
          'Bonjour, je m’appelle Ana Ribeiro.',
          'Je viens du Brésil et j’habite à Toronto.',
          'Je travaille dans la restauration.',
          'Et vous, comment vous appelez-vous ?',
          'Enchantée de faire votre connaissance. (dit par une femme)',
          'Salut, moi, c’est Lucas.',
          'Et toi, comment tu t’appelles ?',
          'Ravi de te rencontrer !'
        ]
      },
      { type: 'heading', text: '3. Prendre congé et terminer une conversation' },
      {
        type: 'paragraph',
        text:
          'Les formules de départ varient également selon le contexte. Au revoir est une formule neutre qui convient aux situations formelles et informelles. ' +
          'Bonne journée et bonne soirée sont des formules de souhait utilisées pour terminer une conversation, et non pour la commencer.'
      },
      {
        type: 'table',
        headers: ['Expression', 'Utilisation'],
        rows: [
          ['Au revoir', 'Prise de congé neutre ou formelle.'],
          ['Bonne journée !', 'Formule de départ pendant la journée.'],
          ['Bonne soirée !', 'Formule de départ en soirée.'],
          ['À bientôt !', 'Lorsqu’on prévoit de revoir la personne.'],
          ['À demain !', 'Lorsqu’on prévoit de revoir la personne le lendemain.'],
          ['À la prochaine !', 'Prise de congé familière ou neutre.'],
          ['Salut !', 'Prise de congé informelle.'],
          ['Bonjour !', 'Au Québec, prise de congé familière pendant la journée ; en contexte officiel, privilégiez au revoir.']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à bon matin, à bonjour pour prendre congé et à salut',
        text:
          'Au Québec, bon matin s’emploie à l’oral spontané, mais appartient au registre familier et n’équivaut pas à bonjour. ' +
          'Dans les textes écrits, en contexte professionnel et dans les situations orales officielles, privilégiez bonjour. ' +
          'Attention aussi à l’inverse : au Québec, bonjour peut se dire en quittant quelqu’un pendant la journée, mais cet emploi est familier. ' +
          'Pour conclure un appel professionnel, par exemple, dites au revoir. ' +
          'Enfin, n’utilisez pas salut avec des inconnus ni dans les situations formelles, et privilégiez le vouvoiement lors d’un premier contact, jusqu’à ce que l’autre personne propose le tutoiement.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Au TCF Canada, l’expression orale est une épreuve individuelle en face à face avec un examinateur, composée de 3 exercices et d’une durée de 12 minutes, dont 2 minutes de préparation. ' +
          'Le TEF Canada comprend aussi l’expression orale parmi ses épreuves obligatoires. ' +
          'Entraînez-vous à faire des présentations naturelles et à répondre aux questions sur votre origine, votre résidence, vos études et votre profession, ainsi qu’à prendre congé de manière appropriée. ' +
          'Ne mémorisez pas uniquement un discours : apprenez à répondre spontanément et à adapter votre niveau de langue à la situation.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment bonjour et bonsoir comme salutations neutres, salut et allô comme plus familiers, ' +
          'bonne journée et bonne soirée comme formules de départ, bon matin comme familier et déconseillé en contexte écrit, professionnel ou officiel, ' +
          'l’emploi familier de bonjour pour prendre congé au Québec et le choix entre tu et vous, y compris la prudence de commencer par vous. ' +
          'La page du FEI confirme le format de l’expression orale du TCF Canada, et celle du Français des affaires place l’expression orale parmi les épreuves obligatoires du TEF Canada. ' +
          'Ne sont pas sourcés : les exemples de présentation, l’emploi de salut pour prendre congé et les conseils d’entraînement, y compris l’adaptation du niveau de formalité à la situation. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle. Les pages consultées n’exigent aucune salutation, aucun ordre de présentation ni aucune formule de départ précise aux examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Contextes d’emploi du vouvoiement et du tutoiement — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/25140/la-redaction-et-la-communication/protocole-et-activites-publiques/contextes-demploi-du-vouvoiement-et-du-tutoiement'
    },
    {
      title: 'Bon matin : emploi comme formule de salutation et de souhait — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22656/les-emprunts-a-langlais/emprunts-morphologiques/emploi-de-bon-matin'
    },
    {
      title: 'La formule de salutation bonjour employée au sens de au revoir — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/25384/banque-de-depannage-linguistique/le-vocabulaire/usages-au-quebec-et-en-francophonie/la-formule-de-salutation-bonjour-employee-au-sens-de-au-revoir'
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
