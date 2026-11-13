import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-demonstrativos',

  pt: {
    title: 'Pronomes demonstrativos e possessivos: celui, ce qui, ce que e le mien',
    summary:
      'Aprenda a substituir substantivos e identificar elementos sem repetir informações em francês. ' +
      'Conheça os pronomes demonstrativos celui, celle, ceux e celles, a diferença entre ce qui e ce que e as formas possessivas como le mien, la mienne e les miens.',
    blocks: [
      { type: 'heading', text: '1. Pronomes demonstrativos: celui, celle, ceux e celles' },
      {
        type: 'paragraph',
        text:
          'Os pronomes demonstrativos substituem um substantivo já mencionado ou identificado pelo contexto. ' +
          'Em português, podem equivaler a aquele, aquela, aqueles, aquelas ou simplesmente o, a, os e as. ' +
          'Diferentemente dos determinantes demonstrativos [[ce|este / esse]], [[cet|este / esse]], [[cette|esta / essa]] ' +
          'e [[ces|estes / esses]], que acompanham um substantivo, os pronomes demonstrativos ocupam o lugar do próprio substantivo.'
      },
      {
        type: 'table',
        headers: ['Pronome', 'Gênero e número', 'Exemplo'],
        rows: [
          ['[[celui|aquele / o]]', 'Masculino singular', '[[Celui de Marc est neuf.|O de Marc é novo.]]'],
          ['[[celle|aquela / a]]', 'Feminino singular', '[[Celle de Julie est plus grande.|A de Julie é maior.]]'],
          ['[[ceux|aqueles / os]]', 'Masculino plural', '[[Ceux de mes voisins sont propres.|Os dos meus vizinhos estão limpos.]]'],
          ['[[celles|aquelas / as]]', 'Feminino plural', '[[Celles de cette agence sont disponibles.|As daquela agência estão disponíveis.]]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Os pronomes demonstrativos simples geralmente são acompanhados de uma expressão que completa sua identificação: [[celui de Marie|o de Marie]], [[celle qui travaille ici|aquela que trabalha aqui]] ' +
          'ou [[ceux que nous avons choisis|aqueles que escolhemos]]. Também podem receber -ci ou -là para distinguir elementos: [[celui-ci|este aqui]] ' +
          'e [[celui-là|aquele ali]].'
      },
      { type: 'heading', text: '2. Ce qui e ce que: qual é a diferença?' },
      {
        type: 'paragraph',
        text:
          'As expressões [[ce qui|o que / aquilo que]] e [[ce que|o que / aquilo que]] retomam uma ideia ou representam algo que ainda não foi especificado. ' +
          'A escolha depende da função gramatical do elemento dentro da oração seguinte. Utilize [[ce qui|o que (sujeito)]] quando esse elemento for o sujeito do verbo. ' +
          'Utilize [[ce que|o que (complemento direto)]] quando for o complemento direto do verbo.'
      },
      {
        type: 'table',
        headers: ['Construção', 'Função', 'Exemplo'],
        rows: [
            [
              '[[Ce qui|o que (sujeito)]]',
              'Sujeito do verbo seguinte.',
              '[[Ce qui me plaît, c’est le quartier.|O que me agrada é o bairro.]]'
            ],
            [
              '[[Ce que|o que (complemento direto)]]',
              'Complemento direto do verbo seguinte.',
              '[[Je préfère ce que tu proposes.|Prefiro o que você propõe.]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Uma maneira prática de identificar a diferença é observar a estrutura da oração. ' +
          'Em [[Ce qui m’intéresse|O que me interessa]], o elemento retomado pratica a ação de interessar, por isso utilizamos [[qui|que (sujeito)]]. ' +
          'Em [[Ce que je recherche|O que procuro]], o elemento é aquilo que recebe a ação de procurar, por isso utilizamos [[que|que (complemento)]]. ' +
          'Em perguntas indiretas também se usam [[ce que|o que (complemento direto)]] e [[ce qui|o que (sujeito)]]: [[Dis-moi ce qui te rendrait heureux.|Diga-me o que te deixaria feliz.]] ' +
          'Nesse caso, evite [[qu’est-ce que|o que (pergunta direta)]] e [[qu’est-ce qui|o que (pergunta direta)]], próprios da pergunta direta.'
      },
      { type: 'heading', text: '3. Pronomes possessivos: le mien, la mienne e outros' },
      {
        type: 'paragraph',
        text:
          'Os pronomes possessivos substituem um substantivo para indicar a quem ele pertence. ' +
          'Em português, equivalem a o meu, a minha, os meus, as minhas e suas respectivas formas para outras pessoas. ' +
          'São formados por um artigo definido seguido de uma forma possessiva. ' +
          'A concordância acontece com o substantivo substituído, considerando seu gênero e número, e não com o gênero de quem possui o objeto.'
      },
      {
        type: 'table',
        headers: ['Substantivo substituído', 'Eu', 'Você', 'Ele / Ela', 'Nós', 'Vocês', 'Eles / Elas'],
        rows: [
            [
              'Masculino singular',
              '[[le mien|o meu]]',
              '[[le tien|o seu]]',
              '[[le sien|o dele / dela]]',
              '[[le nôtre|o nosso]]',
              '[[le vôtre|o de vocês]]',
              '[[le leur|o deles / delas]]'
            ],
            [
              'Feminino singular',
              '[[la mienne|a minha]]',
              '[[la tienne|a sua]]',
              '[[la sienne|a dele / dela]]',
              '[[la nôtre|a nossa]]',
              '[[la vôtre|a de vocês]]',
              '[[la leur|a deles / delas]]'
            ],
            [
              'Masculino plural',
              '[[les miens|os meus]]',
              '[[les tiens|os seus]]',
              '[[les siens|os dele / dela]]',
              '[[les nôtres|os nossos]]',
              '[[les vôtres|os de vocês]]',
              '[[les leurs|os deles / delas]]'
            ],
            [
              'Feminino plural',
              '[[les miennes|as minhas]]',
              '[[les tiennes|as suas]]',
              '[[les siennes|as dele / dela]]',
              '[[les nôtres|as nossas]]',
              '[[les vôtres|as de vocês]]',
              '[[les leurs|as deles / delas]]'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[Ce dossier-ci est plus complet que celui de Marc.|Este processo aqui está mais completo do que o de Marc.]]',
          '[[Parmi ces logements, celui qui donne sur le parc est plus cher.|Entre essas moradias, aquela que dá para o parque é mais cara.]]',
          '[[Ce qui m’intéresse, c’est le programme de formation.|O que me interessa é o programa de formação.]]',
          '[[Je ne comprends pas ce que le propriétaire demande.|Não entendo o que o proprietário está solicitando.]]',
          '[[Mon horaire change chaque semaine, mais le tien reste stable.|Meu horário muda toda semana, mas o seu continua estável.]]',
          '[[La voiture de Paul est plus récente que la mienne.|O carro de Paul é mais novo que o meu.]]',
          '[[Ces clés sont les miennes, pas celles de l’agence.|Estas chaves são minhas, não as da imobiliária.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não confunda ce qui com ce que',
        text:
          'Em português, as duas construções geralmente são traduzidas como o que. Em francês, a função gramatical determina a escolha. ' +
          'Compare [[Ce qui se passe est important.|O que está acontecendo é importante.]] e [[Je comprends ce que tu expliques.|Entendo o que você explica.]] ' +
          'No primeiro exemplo, o elemento retomado é sujeito de [[se passe|acontece]]. No segundo, é complemento direto de [[expliques|explica]]. ' +
          'Outro erro frequente é esquecer que os possessivos concordam com o objeto substituído: [[La voiture est la mienne.|O carro é meu.]], mesmo que o proprietário seja um homem. ' +
          'Não utilize [[le mienne|o minha (errado)]] nem escolha o gênero pelo proprietário.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Nas atividades de compreensão, observe se o pronome retoma um substantivo específico ou uma ideia inteira. ' +
          'Para escolher entre [[celui|aquele / o]], [[celle|aquela / a]], [[ce qui|o que, como sujeito]] ' +
          'e [[ce que|o que, como complemento]], identifique a função e o antecedente. ' +
          'Na produção escrita e oral, utilize os pronomes demonstrativos e possessivos para evitar repetições e comparar informações. ' +
          'Pratique especialmente a diferença entre [[ce qui|o que como sujeito]] e [[ce que|o que como complemento]], além da concordância de [[le mien|o meu]] ' +
          'e suas variações com o substantivo substituído.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O OQLF confirma [[celui|aquele / o]], [[celle|aquela / a]], [[ceux|aqueles / os]] e [[celles|aquelas / as]] como pronomes demonstrativos, seguidos de um complemento com preposição ou de uma oração relativa, ou de -ci e -là. ' +
          'Confirma também que os pronomes possessivos são formados por um determinante definido e um adjetivo como [[mien|meu]] e concordam em gênero e número com o elemento que representam, e que [[ce que|o que (complemento direto)]] e [[ce qui|o que (sujeito)]] são usados em perguntas indiretas, sem [[qu’est-ce que|o que (pergunta direta)]]. ' +
          'O Larousse confirma [[ce|isso / aquilo]] como antecedente de um pronome relativo. ' +
          'Não têm fonte: a regra de que [[ce qui|o que (sujeito)]] é sujeito e [[ce que|o que (complemento direto)]] é complemento direto, as tabelas de formas, os exemplos e a dica para a prova. ' +
          'Esses pontos são material didático, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Les pronoms démonstratifs et possessifs : celui, ce qui, ce que et le mien',
    summary:
      'Apprenez à remplacer des noms et à identifier des éléments sans répéter les mêmes informations en français. ' +
      'Découvrez les pronoms démonstratifs celui, celle, ceux et celles, la différence entre ce qui et ce que, ainsi que les formes possessives comme le mien, la mienne et les miens.',
    blocks: [
      { type: 'heading', text: '1. Les pronoms démonstratifs : celui, celle, ceux et celles' },
      {
        type: 'paragraph',
        text:
          'Les pronoms démonstratifs remplacent un nom déjà mentionné ou identifiable grâce au contexte. ' +
          'Ils permettent de désigner une personne ou une chose sans répéter le nom. ' +
          'Contrairement aux déterminants démonstratifs ce, cet, cette et ces, qui accompagnent un nom, les pronoms démonstratifs prennent la place du nom lui-même.'
      },
      {
        type: 'table',
        headers: ['Pronom', 'Genre et nombre', 'Exemple'],
        rows: [
          ['celui', 'Masculin singulier', 'Celui de Marc est neuf.'],
          ['celle', 'Féminin singulier', 'Celle de Julie est plus grande.'],
          ['ceux', 'Masculin pluriel', 'Ceux de mes voisins sont propres.'],
          ['celles', 'Féminin pluriel', 'Celles de cette agence sont disponibles.']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Les pronoms démonstratifs simples sont généralement accompagnés d’une expression qui permet de préciser leur référent : celui de Marie, celle qui travaille ici ou ceux que nous avons choisis. ' +
          'Ils peuvent également être suivis de -ci ou de -là pour distinguer plusieurs éléments : celui-ci et celui-là.'
      },
      { type: 'heading', text: '2. Ce qui et ce que : quelle différence ?' },
      {
        type: 'paragraph',
        text:
          'Les expressions ce qui et ce que reprennent une idée ou représentent quelque chose qui n’a pas encore été précisé. ' +
          'Le choix dépend de la fonction grammaticale de l’élément dans la proposition qui suit. Utilisez ce qui lorsque cet élément est le sujet du verbe. ' +
          'Utilisez ce que lorsqu’il est le complément direct du verbe.'
      },
      {
        type: 'table',
        headers: ['Construction', 'Fonction', 'Exemple'],
        rows: [
            [
              'Ce qui',
              'Sujet du verbe suivant.',
              'Ce qui me plaît, c’est le quartier.'
            ],
            [
              'Ce que',
              'Complément direct du verbe suivant.',
              'Je préfère ce que tu proposes.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Une façon pratique de faire la distinction consiste à observer la structure de la proposition. ' +
          'Dans « Ce qui m’intéresse », l’élément repris est le sujet du verbe intéresser. ' +
          'Dans « Ce que je recherche », l’élément est le complément direct du verbe rechercher. ' +
          'Dans une interrogation indirecte, on emploie aussi ce que et ce qui : « Dis-moi ce qui te rendrait heureux. » ' +
          'Dans ce cas, évitez qu’est-ce que et qu’est-ce qui, propres à l’interrogation directe.'
      },
      { type: 'heading', text: '3. Les pronoms possessifs : le mien, la mienne et les autres formes' },
      {
        type: 'paragraph',
        text:
          'Les pronoms possessifs remplacent un nom pour indiquer à qui appartient une chose. Ils sont formés d’un article défini suivi d’une forme possessive. ' +
          'Ils s’accordent en genre et en nombre avec le nom remplacé, et non avec le genre de la personne qui possède l’objet.'
      },
      {
        type: 'table',
        headers: ['Nom remplacé', 'Je', 'Tu', 'Il / Elle', 'Nous', 'Vous', 'Ils / Elles'],
        rows: [
            [
              'Masculin singulier',
              'le mien',
              'le tien',
              'le sien',
              'le nôtre',
              'le vôtre',
              'le leur'
            ],
            [
              'Féminin singulier',
              'la mienne',
              'la tienne',
              'la sienne',
              'la nôtre',
              'la vôtre',
              'la leur'
            ],
            [
              'Masculin pluriel',
              'les miens',
              'les tiens',
              'les siens',
              'les nôtres',
              'les vôtres',
              'les leurs'
            ],
            [
              'Féminin pluriel',
              'les miennes',
              'les tiennes',
              'les siennes',
              'les nôtres',
              'les vôtres',
              'les leurs'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemples en contexte' },
      {
        type: 'list',
        items: [
          'Ce dossier-ci est plus complet que celui de Marc.',
          'Parmi ces logements, celui qui donne sur le parc est plus cher.',
          'Ce qui m’intéresse, c’est le programme de formation.',
          'Je ne comprends pas ce que le propriétaire demande.',
          'Mon horaire change chaque semaine, mais le tien reste stable.',
          'La voiture de Paul est plus récente que la mienne.',
          'Ces clés sont les miennes, pas celles de l’agence.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne confondez pas ce qui et ce que',
        text:
          'En portugais, les deux constructions se traduisent généralement par la même expression. En français, la fonction grammaticale détermine le choix. ' +
          'Comparez « Ce qui se passe est important » et « Je comprends ce que tu expliques ». Dans le premier exemple, l’élément repris est le sujet du verbe se passer. ' +
          'Dans le deuxième, il est le complément direct du verbe expliquer. ' +
          'Une autre erreur fréquente consiste à oublier que les possessifs s’accordent avec l’objet remplacé : « La voiture est la mienne », même si le propriétaire est un homme. ' +
          'Il ne faut pas choisir le genre en fonction du possesseur.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les activités de compréhension, observez si le pronom reprend un nom précis ou une idée entière. ' +
          'Pour choisir entre celui, celle, ce qui et ce que, identifiez la fonction grammaticale et l’antécédent. ' +
          'Dans vos productions écrites et orales, utilisez les pronoms démonstratifs et possessifs pour éviter les répétitions et comparer des informations. ' +
          'Entraînez-vous particulièrement à distinguer ce qui, sujet, de ce que, complément, ainsi qu’à accorder le mien et ses différentes formes avec le nom remplacé.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme celui, celle, ceux et celles comme pronoms démonstratifs, suivis d’un complément prépositionnel ou d’une relative, ou de -ci et -là. ' +
          'Il confirme aussi que les pronoms possessifs sont formés d’un déterminant défini et d’un adjectif comme mien et s’accordent en genre et en nombre avec l’élément représenté, et que ce que et ce qui s’emploient dans l’interrogation indirecte, sans qu’est-ce que. ' +
          'Larousse confirme ce comme antécédent d’un pronom relatif. ' +
          'Ne sont pas sourcés : la règle selon laquelle ce qui est sujet et ce que complément direct, les tableaux de formes, les exemples et le conseil pour l’examen. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Pronom démonstratif — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26559761/pronom-demonstratif'
    },
    {
      title: 'Pronom possessif — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26559853/pronom-possessif'
    },
    {
      title: 'Ce que et qu’est-ce que : interrogation indirecte et directe — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23281/la-syntaxe/linterrogation/formules-interrogatives-ce-que-et-quest-ce-que'
    },
    {
      title: 'Définitions de ce — Larousse',
      url: 'https://www.larousse.fr/dictionnaires/francais/ce/13946'
    }
  ]
}

export default content
