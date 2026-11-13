import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-comparativo',

  pt: {
    title: 'Comparativo e superlativo',
    summary:
      'Aprenda a comparar pessoas, objetos, quantidades e ações em francês, expressando superioridade, igualdade e inferioridade. ' +
      'Entenda também como formar o superlativo e utilizar corretamente as formas irregulares meilleur e mieux.',
    blocks: [
      { type: 'heading', text: '1. Comparativo: superioridade, igualdade e inferioridade' },
      {
        type: 'paragraph',
        text:
          'O comparativo permite estabelecer uma comparação entre dois elementos. ' +
          'Em francês, a construção depende do que está sendo comparado: adjetivo, advérbio, substantivo ou verbo. ' +
          'Existem três possibilidades: superioridade, igualdade e inferioridade.'
      },
      {
        type: 'table',
        headers: ['Tipo de comparação', 'Estrutura'],
        rows: [
          ['Superioridade com adjetivo ou advérbio', '[[plus + adjectif / adverbe + que|mais + adjetivo / advérbio + que]]'],
          ['Igualdade com adjetivo ou advérbio', '[[aussi + adjectif / adverbe + que|tão + adjetivo / advérbio + quanto]]'],
          ['Inferioridade com adjetivo ou advérbio', '[[moins + adjectif / adverbe + que|menos + adjetivo / advérbio + que]]'],
          ['Superioridade com substantivo', '[[plus de + nom + que|mais + substantivo + do que]]'],
          ['Igualdade com substantivo', '[[autant de + nom + que|tanto / tantos + substantivo + quanto]]'],
          ['Inferioridade com substantivo', '[[moins de + nom + que|menos + substantivo + do que]]'],
          ['Superioridade com verbo', '[[verbe + plus que|verbo + mais do que]]'],
          ['Igualdade com verbo', '[[verbe + autant que|verbo + tanto quanto]]'],
          ['Inferioridade com verbo', '[[verbe + moins que|verbo + menos do que]]']
        ]
      },
      { type: 'heading', text: '2. Superlativo: o mais e o menos' },
      {
        type: 'paragraph',
        text:
          'O superlativo relativo destaca um elemento em relação a um grupo. Para expressar superioridade, utiliza-se [[le, la, les + plus|o, a, os, as + mais]]. ' +
          'Para inferioridade, utiliza-se [[le, la, les + moins|o, a, os, as + menos]]. O artigo e o adjetivo concordam com o substantivo. ' +
          'A posição do superlativo depende da posição habitual do adjetivo na frase.'
      },
      {
        type: 'table',
        headers: ['Estrutura', 'Exemplo'],
        rows: [
          ['Superlativo de superioridade', '[[C’est le quartier le plus calme de la ville.|Este é o bairro mais tranquilo da cidade.]]'],
          ['Superlativo de inferioridade', '[[C’est la solution la moins coûteuse.|Esta é a solução menos cara.]]'],
          ['Superlativo com advérbio', '[[C’est elle qui travaille le plus rapidement.|É ela quem trabalha mais rapidamente.]]'],
          ['Superlativo com substantivo', '[[C’est cette entreprise qui offre le plus de possibilités.|É esta empresa que oferece mais oportunidades.]]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Existe também o superlativo absoluto, que intensifica uma característica sem comparar diretamente com outros elementos. ' +
          'Ele pode ser formado com palavras como [[très|muito]] e [[extrêmement|extremamente]]. ' +
          'Por exemplo: [[Ce logement est très confortable.|Esta moradia é muito confortável.]]'
      },
      { type: 'heading', text: '3. Formas irregulares: bon e bien' },
      {
        type: 'paragraph',
        text:
          'Dois casos muito importantes não seguem a construção regular com [[plus|mais]]. O adjetivo [[bon|bom]] utiliza [[meilleur|melhor]] ' +
          'no comparativo e [[le meilleur|o melhor]] no superlativo. O advérbio [[bien|bem]] utiliza [[mieux|melhor]] ' +
          'no comparativo e [[le mieux|o melhor / da melhor maneira]] no superlativo. A diferença principal é gramatical: [[meilleur|melhor]] ' +
          'acompanha um substantivo, enquanto [[mieux|melhor]] modifica um verbo ou uma ação. ' +
          'Para a inferioridade, use [[moins bon|menos bom]] e [[moins bien|menos bem]]; [[plus bon|mais bom]] é incorreto.'
      },
      {
        type: 'table',
        headers: ['Forma original', 'Comparativo', 'Superlativo'],
        rows: [
            [
              '[[bon|bom]]',
              '[[meilleur|melhor]]',
              '[[le meilleur|o melhor]]'
            ],
            [
              '[[bonne|boa]]',
              '[[meilleure|melhor]]',
              '[[la meilleure|a melhor]]'
            ],
            [
              '[[bons|bons (plural)]]',
              '[[meilleurs|melhores]]',
              '[[les meilleurs|os melhores]]'
            ],
            [
              '[[bonnes|boas]]',
              '[[meilleures|melhores]]',
              '[[les meilleures|as melhores]]'
            ],
            [
              '[[bien|bem]]',
              '[[mieux|melhor]]',
              '[[le mieux|o melhor / da melhor maneira]]'
            ],
            [
              '[[bon / bien|bom / bem]] (inferioridade)',
              '[[moins bon / moins bien|menos bom / menos bem]]',
              '[[le moins bon / le moins bien|o menos bom / o menos bem]]'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[Ce logement est plus grand que celui que nous avions avant.|Esta moradia é maior do que aquela que tínhamos antes.]]',
          '[[Le trajet en autobus est aussi rapide que le trajet en métro.|O trajeto de ônibus é tão rápido quanto o trajeto de metrô.]]',
          '[[Ce quartier est moins cher que le centre-ville.|Este bairro é menos caro que o centro da cidade.]]',
          '[[Nous avons autant de demandes que l’année dernière.|Temos tantas solicitações quanto no ano passado.]]',
          '[[Marie travaille plus que son collègue.|Marie trabalha mais do que seu colega.]]',
          '[[C’est la solution la moins coûteuse.|Esta é a solução menos cara.]]',
          '[[C’est le service qui répond le plus rapidement.|É o serviço que responde mais rapidamente.]]',
          '[[Ce résultat est meilleur que le précédent.|Este resultado é melhor que o anterior.]]',
          '[[Elle écrit mieux que moi.|Ela escreve melhor do que eu.]]',
          '[[C’est le meilleur film que nous ayons vu ces derniers mois.|É o melhor filme que vimos nos últimos meses.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não confunda meilleur e mieux',
        text:
          'Um erro frequente é traduzir “melhor” sempre da mesma maneira ou juntar [[plus|mais]] a [[meilleur|melhor]]. ' +
          'O OQLF considera [[plus meilleur|mais melhor (errado)]] um pleonasmo e [[plus bon|mais bom (errado)]] uma forma incorreta: diga [[meilleur|melhor]]. ' +
          'Utilize [[meilleur|melhor]] quando estiver qualificando um substantivo: [[Ce restaurant propose un meilleur menu.|Este restaurante oferece um cardápio melhor.]] ' +
          'Utilize [[mieux|melhor]] quando estiver modificando um verbo: [[Ce restaurant cuisine mieux.|Este restaurante cozinha melhor.]] ' +
          'Lembre-se também de que [[aussi bon que|tão bom quanto]] e [[aussi bien que|tão bem quanto]] são construções diferentes.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Nas atividades de compreensão, identifique primeiro o elemento comparado: qualidade, maneira de realizar uma ação ou quantidade. ' +
          'Isso ajuda a escolher entre [[plus|mais]], [[aussi|tão]], [[autant de|tanto / tantos]] e [[moins|menos]]. ' +
          'Na produção escrita e oral, utilize comparativos para justificar opiniões e superlativos para destacar características. ' +
          'Pratique especialmente as formas irregulares [[meilleur|melhor]] e [[mieux|melhor]], além da concordância de [[meilleur|melhor]] com o substantivo. ' +
          'Essas estruturas ajudam a elaborar comparações mais precisas e argumentos mais desenvolvidos.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O TV5Monde confirma o comparativo com substantivo, adjetivo e advérbio, o superlativo com adjetivo e as formas [[meilleur|melhor]], [[mieux|melhor]], [[moins bon|menos bom]] e [[moins bien|menos bem]]. ' +
          'O OQLF confirma que [[plus meilleur|mais melhor (errado)]] é pleonasmo, que [[plus bon|mais bom (errado)]] é incorreto e a construção de [[le meilleur|o melhor]] com subjuntivo. O Larousse confirma [[mieux|melhor]] como advérbio de [[bien|bem]]. ' +
          'Não têm fonte: o comparativo com verbo, o superlativo com advérbio e com substantivo, o superlativo absoluto com [[très|muito]] e [[extrêmement|extremamente]], os exemplos e os conselhos para a prova. ' +
          'Esses pontos são material didático, não regra oficial. As páginas consultadas não indicam frequência dessas estruturas no TEF Canada ou no TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Le comparatif et le superlatif',
    summary:
      'Apprenez à comparer des personnes, des objets, des quantités et des actions en français, en exprimant la supériorité, l’égalité et l’infériorité. ' +
      'Découvrez également comment former le superlatif et utiliser correctement les formes irrégulières meilleur et mieux.',
    blocks: [
      { type: 'heading', text: '1. Le comparatif : supériorité, égalité et infériorité' },
      {
        type: 'paragraph',
        text:
          'Le comparatif permet d’établir une comparaison entre deux éléments. ' +
          'En français, la construction dépend de ce que l’on compare : un adjectif, un adverbe, un nom ou un verbe. ' +
          'Il existe trois possibilités : la supériorité, l’égalité et l’infériorité.'
      },
      {
        type: 'table',
        headers: ['Type de comparaison', 'Structure'],
        rows: [
          ['Supériorité avec un adjectif ou un adverbe', 'plus + adjectif / adverbe + que'],
          ['Égalité avec un adjectif ou un adverbe', 'aussi + adjectif / adverbe + que'],
          ['Infériorité avec un adjectif ou un adverbe', 'moins + adjectif / adverbe + que'],
          ['Supériorité avec un nom', 'plus de + nom + que'],
          ['Égalité avec un nom', 'autant de + nom + que'],
          ['Infériorité avec un nom', 'moins de + nom + que'],
          ['Supériorité avec un verbe', 'verbe + plus que'],
          ['Égalité avec un verbe', 'verbe + autant que'],
          ['Infériorité avec un verbe', 'verbe + moins que']
        ]
      },
      { type: 'heading', text: '2. Le superlatif : le plus et le moins' },
      {
        type: 'paragraph',
        text:
          'Le superlatif relatif met un élément en évidence par rapport à un groupe. Pour exprimer la supériorité, on utilise le, la ou les + plus. ' +
          'Pour exprimer l’infériorité, on utilise le, la ou les + moins. L’article et l’adjectif s’accordent avec le nom. ' +
          'La position du superlatif dépend de la place habituelle de l’adjectif dans la phrase.'
      },
      {
        type: 'table',
        headers: ['Structure', 'Exemple'],
        rows: [
          ['Superlatif de supériorité', 'C’est le quartier le plus calme de la ville.'],
          ['Superlatif d’infériorité', 'C’est la solution la moins coûteuse.'],
          ['Superlatif avec un adverbe', 'C’est elle qui travaille le plus rapidement.'],
          ['Superlatif avec un nom', 'C’est cette entreprise qui offre le plus de possibilités.']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Il existe également le superlatif absolu, qui intensifie une caractéristique sans établir de comparaison directe avec d’autres éléments. ' +
          'Il peut être formé avec des mots comme très et extrêmement. Par exemple : « Ce logement est très confortable. »'
      },
      { type: 'heading', text: '3. Les formes irrégulières : bon et bien' },
      {
        type: 'paragraph',
        text:
          'Deux cas importants ne suivent pas la construction régulière avec plus. L’adjectif bon utilise meilleur au comparatif et le meilleur au superlatif. ' +
          'L’adverbe bien utilise mieux au comparatif et le mieux au superlatif. ' +
          'La principale différence est grammaticale : meilleur accompagne un nom, tandis que mieux modifie un verbe ou une action. ' +
          'Pour l’infériorité, on emploie moins bon et moins bien ; plus bon est incorrect.'
      },
      {
        type: 'table',
        headers: ['Forme originale', 'Comparatif', 'Superlatif'],
        rows: [
            [
              'bon',
              'meilleur',
              'le meilleur'
            ],
            [
              'bonne',
              'meilleure',
              'la meilleure'
            ],
            [
              'bons',
              'meilleurs',
              'les meilleurs'
            ],
            [
              'bonnes',
              'meilleures',
              'les meilleures'
            ],
            [
              'bien',
              'mieux',
              'le mieux'
            ],
            [
              'bon / bien (infériorité)',
              'moins bon / moins bien',
              'le moins bon / le moins bien'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemples en contexte' },
      {
        type: 'list',
        items: [
          'Ce logement est plus grand que celui que nous avions avant.',
          'Le trajet en autobus est aussi rapide que le trajet en métro.',
          'Ce quartier est moins cher que le centre-ville.',
          'Nous avons autant de demandes que l’année dernière.',
          'Marie travaille plus que son collègue.',
          'C’est la solution la moins coûteuse.',
          'C’est le service qui répond le plus rapidement.',
          'Ce résultat est meilleur que le précédent.',
          'Elle écrit mieux que moi.',
          'C’est le meilleur film que nous ayons vu ces derniers mois.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne confondez pas meilleur et mieux',
        text:
          'Une erreur fréquente consiste à traduire « melhor » toujours de la même manière ou à ajouter plus devant meilleur. ' +
          'L’OQLF considère « plus meilleur » comme un pléonasme et « plus bon » comme une forme incorrecte : dites meilleur. ' +
          'Utilisez meilleur pour qualifier un nom : « Ce restaurant propose un meilleur menu ». ' +
          'Utilisez mieux pour modifier un verbe : « Ce restaurant cuisine mieux ». ' +
          'N’oubliez pas non plus que « aussi bon que » et « aussi bien que » sont deux constructions différentes.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les activités de compréhension, identifiez d’abord l’élément comparé : une qualité, une manière d’effectuer une action ou une quantité. ' +
          'Cela vous aidera à choisir entre plus, aussi, autant de et moins. ' +
          'Dans vos productions écrites et orales, utilisez les comparatifs pour justifier vos opinions et les superlatifs pour mettre certaines caractéristiques en évidence. ' +
          'Entraînez-vous particulièrement avec les formes irrégulières meilleur et mieux, ainsi qu’avec l’accord de meilleur. ' +
          'Ces structures permettent de construire des comparaisons plus précises et des arguments plus développés.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'TV5Monde confirme le comparatif avec un nom, un adjectif et un adverbe, le superlatif avec un adjectif et les formes meilleur, mieux, moins bon et moins bien. ' +
          'L’OQLF confirme que « plus meilleur » est un pléonasme, que « plus bon » est incorrect et la construction de le meilleur avec le subjonctif. Larousse confirme mieux comme adverbe de bien. ' +
          'Ne sont pas sourcés : le comparatif avec un verbe, le superlatif avec un adverbe et avec un nom, le superlatif absolu avec très et extrêmement, les exemples et les conseils pour l’examen. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle. Les pages consultées n’indiquent aucune fréquence de ces structures au TEF Canada ou au TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Grammaire : Le comparatif et le superlatif — TV5Monde',
      url: 'https://apprendre.tv5monde.com/fr/aides/grammaire-le-comparatif-et-le-superlatif'
    },
    {
      title: 'Plus meilleur : emploi des adjectifs comparatifs et pléonasme — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22114/le-vocabulaire/pleonasmes/le-pleonasme-plus-meilleur-et-lemploi-des-adjectifs-comparatifs'
    },
    {
      title: 'Définitions et difficultés de mieux — Larousse',
      url: 'https://www.larousse.fr/dictionnaires/francais/mieux/51376'
    }
  ]
}

export default content
