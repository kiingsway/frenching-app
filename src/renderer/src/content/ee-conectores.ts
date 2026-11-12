import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-conectores',

  pt: {
    title: 'Conectores lógicos: como conectar ideias e construir textos coerentes',
    summary:
      'Aprenda a utilizar conectores em francês para estabelecer relações de causa, consequência, oposição, concessão, adição e conclusão. ' +
      'Você vai compreender as diferenças de significado, as estruturas gramaticais que acompanham cada conector e como utilizá-los naturalmente para construir textos mais coesos e argumentações de nível B2.',
    blocks: [
      { type: 'heading', text: '1. O que são conectores lógicos?' },
      {
        type: 'paragraph',
        text:
          'Os [[connecteurs logiques|conectores lógicos]], também chamados de [[marqueurs de relation|marcadores de relação]], ' +
          'termo que o Office québécois de la langue française usa ao lado de [[connecteur|conector]], são palavras ou expressões que estabelecem relações entre frases e ideias. ' +
          'Eles ajudam o leitor a compreender se uma informação explica outra, apresenta uma consequência, acrescenta um argumento ou introduz uma oposição. ' +
          'Um texto pode ter frases gramaticalmente corretas e ainda assim parecer desorganizado quando essas relações não estão claras. ' +
          'O objetivo não é utilizar o maior número possível de conectores, mas escolher aqueles que representam corretamente a relação entre as ideias.'
      },
      { type: 'heading', text: '2. Os seis grupos fundamentais' },
      {
        type: 'table',
        headers: ['Relação lógica', 'Conectores em francês', 'Função'],
        rows: [
            [
              'Causa',
              '[[parce que|porque]], [[car|pois]], [[puisque|já que]], [[étant donné que|considerando que]], [[grâce à|graças a]], [[à cause de|por causa de]]',
              'Explicar o motivo de um acontecimento ou situação.'
            ],
            [
              'Consequência',
              '[[donc|portanto]], [[par conséquent|consequentemente]], [[ainsi|assim]], [[c’est pourquoi|é por isso que]], [[de sorte que|de modo que]]',
              'Apresentar o resultado de uma ação ou situação.'
            ],
            [
              'Oposição',
              '[[mais|mas]], [[cependant|entretanto]], [[toutefois|todavia]], [[en revanche|em contrapartida]], [[par contre|por outro lado]]',
              'Apresentar duas ideias diferentes ou contrastantes.'
            ],
            [
              'Concessão',
              '[[bien que|embora]], [[même si|mesmo que]], [[malgré|apesar de]], [[certes|certamente ou é verdade que]], [[néanmoins|não obstante]]',
              'Reconhecer uma dificuldade ou ideia contrária sem abandonar a afirmação principal.'
            ],
            [
              'Adição',
              '[[de plus|além disso]], [[en outre|ademais]], [[également|igualmente]], [[par ailleurs|além disso ou por outro lado]], [[de même|da mesma forma]]',
              'Acrescentar informações ou novos argumentos.'
            ],
            [
              'Conclusão',
              '[[en conclusion|em conclusão]], [[en somme|em resumo]], [[pour conclure|para concluir]], [[en définitive|no fim das contas]], [[bref|em poucas palavras]]',
              'Resumir o raciocínio e apresentar o resultado final.'
            ]
        ]
      },
      { type: 'heading', text: '3. Atenção às estruturas gramaticais' },
      {
        type: 'paragraph',
        text:
          'Não basta conhecer o significado dos conectores: é necessário saber como construir a frase depois deles. ' +
          'Alguns são acompanhados de uma oração com verbo conjugado, enquanto outros exigem um substantivo ou uma construção específica. ' +
          'Essas diferenças são importantes para evitar erros gramaticais.'
      },
      {
        type: 'table',
        headers: ['Conector', 'Estrutura', 'Exemplo em francês'],
        rows: [
            [
              '[[Parce que|Porque]]',
              'Conector + sujeito + verbo conjugado.',
              '[[Je reste chez moi parce qu’il pleut.|Fico em casa porque está chovendo.]]'
            ],
            [
              '[[Grâce à|Graças a]]',
              'Conector + substantivo ou pronome.',
              '[[Grâce à son aide, nous avons terminé le projet.|Graças à sua ajuda, terminamos o projeto.]]'
            ],
            [
              '[[À cause de|Por causa de]]',
              'Conector + substantivo ou pronome.',
              '[[Le match a été annulé à cause de la pluie.|A partida foi cancelada por causa da chuva.]]'
            ],
            [
              '[[Donc|Portanto]]',
              'Conector de consequência entre duas ideias.',
              '[[Il est tard, donc nous devons partir.|Está tarde, portanto precisamos ir embora.]]'
            ],
            [
              '[[Bien que|Embora]]',
              'Conector + sujeito + verbo no subjuntivo.',
              '[[Bien qu’il soit fatigué, il continue à travailler.|Embora esteja cansado, ele continua trabalhando.]]'
            ],
            [
              '[[Même si|Mesmo que]]',
              'Conector + sujeito + verbo no indicativo.',
              '[[Même s’il pleut, nous irons au parc.|Mesmo que chova, iremos ao parque.]]'
            ],
            [
              '[[Malgré|Apesar de]]',
              'Conector + substantivo ou pronome.',
              '[[Malgré la pluie, nous sommes sortis.|Apesar da chuva, saímos.]]'
            ],
            [
              '[[De plus|Além disso]]',
              'Conector de adição, geralmente no início de uma nova frase.',
              '[[Le logement est spacieux.|O imóvel é espaçoso.]] [[De plus, il est bien situé.|Além disso, está bem localizado.]]'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemplo prático: construindo um parágrafo coerente' },
      { type: 'paragraph', text: 'Tema: defender a melhoria do transporte público em Montreal.' },
      {
        type: 'paragraph',
        text:
          '[[La Ville devrait améliorer son réseau de transport en commun parce que de nombreux résidents dépendent de l’autobus et du métro.|A cidade deveria melhorar sua rede de transporte público porque muitos moradores dependem do ônibus e do metrô.]] ' +
          '[[De plus, un service plus fréquent permettrait de réduire le temps d’attente aux heures de pointe.|Além disso, um serviço mais frequente permitiria reduzir o tempo de espera nos horários de pico.]] ' +
          '[[Certes, l’amélioration du réseau représente un investissement important.|É verdade que a melhoria da rede representa um investimento importante.]] ' +
          '[[Cependant, les avantages pourraient être considérables pour les usagers.|Entretanto, os benefícios poderiam ser consideráveis para os usuários.]] ' +
          '[[Même si certains travaux perturbent temporairement la circulation, ils peuvent améliorer la qualité du service à long terme.|Mesmo que algumas obras perturbem temporariamente o trânsito, elas podem melhorar a qualidade do serviço a longo prazo.]] ' +
          '[[Par conséquent, la municipalité devrait accorder davantage de ressources à ce secteur.|Consequentemente, a prefeitura deveria destinar mais recursos a esse setor.]] ' +
          '[[En somme, un réseau efficace profite à l’ensemble de la population.|Em resumo, uma rede eficiente beneficia toda a população.]]'
      },
      { type: 'heading', text: '5. Diferenças importantes entre conectores semelhantes' },
      {
        type: 'list',
        items: [
            '[[Parce que|Porque]] e [[car|pois]] expressam causa, mas apresentam construções diferentes. [[Parce que|Porque]] ' +
            'introduz uma oração subordinada, enquanto [[car|pois]] conecta duas proposições independentes.',
            '[[Grâce à|Graças a]] geralmente apresenta uma causa favorável ou positiva. [[À cause de|Por causa de]] ' +
            'é frequentemente utilizado para apresentar uma causa negativa ou indesejada.',
            '[[Mais|Mas]] e [[cependant|entretanto]] indicam oposição. [[Cependant|Entretanto]] é muito utilizado como conector entre frases, enquanto [[mais|mas]] ' +
            'também conecta diretamente elementos dentro da mesma frase.',
          '[[Bien que|Embora]] exige o subjuntivo. [[Même si|Mesmo que]] utiliza o indicativo, inclusive quando se refere a uma situação hipotética.',
          '[[Malgré|Apesar de]] é seguido normalmente por um substantivo ou pronome. Para utilizar uma oração com verbo conjugado, prefira [[bien que|embora]].',
          '[[Donc|Portanto]] apresenta uma consequência. [[En effet|De fato]] geralmente introduz uma explicação ou justificativa, e não uma consequência.',
          '[[En outre|Ademais]] e [[de plus|além disso]] acrescentam informações. [[En revanche|em contrapartida]] apresenta uma oposição ou contraste.'
        ]
      },
      { type: 'heading', text: '6. Armadilhas comuns para brasileiros' },
      {
        type: 'list',
        items: [
            'Utilizar [[malgré que|apesar de que]] automaticamente depois de aprender [[malgré|apesar de]]. ' +
            'Na escrita formal, prefira [[malgré la situation|apesar da situação]] ou [[bien que la situation soit difficile|embora a situação seja difícil]].',
          'Utilizar o indicativo depois de [[bien que|embora]]. O correto é o subjuntivo: [[Bien qu’il soit malade...|Embora esteja doente...]].',
          'Repetir [[donc|portanto]] em praticamente todas as frases. Varie os conectores de consequência conforme o contexto.',
            'Utilizar [[à cause de|por causa de]] e [[grâce à|graças a]] como se fossem sempre intercambiáveis. ' +
            'A escolha depende da relação de sentido que você deseja transmitir.',
            'Colocar conectores sem relação lógica com as ideias. ' +
            'Uma frase iniciada por um conector de oposição precisa apresentar uma ideia que realmente contraste com a anterior.',
            'Utilizar conectores informais em uma redação formal. Em textos de prova, prefira opções como [[cependant|entretanto]], [[néanmoins|não obstante]] ' +
            'e [[par conséquent|consequentemente]].'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com pourtant e portanto',
        text:
          'Um falso cognato importante é [[pourtant|entretanto ou no entanto]]. ' +
          'Apesar da semelhança visual com portanto, essa palavra francesa expressa oposição, e não consequência. Para dizer portanto, utilize [[donc|portanto]] ' +
          'ou [[par conséquent|consequentemente]]. ' +
          'Compare: [[Il était fatigué, pourtant il a continué à travailler.|Ele estava cansado, entretanto continuou trabalhando.]] ' +
          'e [[Il était fatigué, donc il est rentré chez lui.|Ele estava cansado, portanto voltou para casa.]]. ' +
          'Confundir essas palavras pode inverter completamente a relação lógica de uma frase.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que o avaliador espera no nível B2',
        text:
          'No TEF Canada e no TCF Canada, a utilização dos conectores deve demonstrar que você consegue organizar e relacionar ideias de maneira clara. ' +
          'Não basta inserir expressões sofisticadas: é necessário utilizar a construção gramatical correta e transmitir a relação lógica pretendida. ' +
          'Em textos argumentativos, pratique especialmente a combinação de causa, consequência, oposição e concessão. ' +
          'Uma estratégia eficiente é revisar cada conector perguntando: a relação entre essas duas ideias realmente corresponde ao significado dessa expressão? ' +
          'Confira também se [[bien que|embora]] está acompanhado do subjuntivo, se [[malgré|apesar de]] ' +
          'está seguido de uma construção adequada e se a pontuação está correta. Priorize variedade, precisão e naturalidade, não a quantidade de conectores.'
      }
    ]
  },

  fr: {
    title: 'Les connecteurs logiques : cause, conséquence, opposition, concession, addition et conclusion',
    summary:
      'Apprenez à utiliser les connecteurs en français pour établir des relations de cause, de conséquence, d’opposition, de concession, d’addition et de conclusion. ' +
      'Vous comprendrez les différences de sens, les structures grammaticales qui accompagnent chaque connecteur et la manière de les employer naturellement pour construire des textes plus cohérents et atteindre le niveau B2.',
    blocks: [
      { type: 'heading', text: '1. Que sont les connecteurs logiques ?' },
      {
        type: 'paragraph',
        text:
          'Les connecteurs logiques, également appelés marqueurs de relation, terme que l’Office québécois de la langue française emploie à côté de connecteur, sont des mots ou des expressions qui établissent des relations entre des phrases et des idées. ' +
          'Ils permettent au lecteur de comprendre si une information explique une autre, présente une conséquence, ajoute un argument ou introduit une opposition. ' +
          'Un texte peut contenir des phrases grammaticalement correctes tout en paraissant désorganisé lorsque ces relations ne sont pas claires. ' +
          'L’objectif n’est pas d’utiliser le plus grand nombre possible de connecteurs, mais de choisir ceux qui représentent correctement le lien entre les idées.'
      },
      { type: 'heading', text: '2. Les six catégories fondamentales' },
      {
        type: 'table',
        headers: ['Relation logique', 'Connecteurs en français', 'Fonction'],
        rows: [
            [
              'Cause',
              'parce que, car, puisque, étant donné que, grâce à, à cause de',
              'Expliquer la raison d’un événement ou d’une situation.'
            ],
            [
              'Conséquence',
              'donc, par conséquent, ainsi, c’est pourquoi, de sorte que',
              'Présenter le résultat d’une action ou d’une situation.'
            ],
            [
              'Opposition',
              'mais, cependant, toutefois, en revanche, par contre',
              'Présenter deux idées différentes ou contrastées.'
            ],
            [
              'Concession',
              'bien que, même si, malgré, certes, néanmoins',
              'Reconnaître une difficulté ou une idée contraire sans abandonner l’affirmation principale.'
            ],
            [
              'Addition',
              'de plus, en outre, également, par ailleurs, de même',
              'Ajouter des informations ou de nouveaux arguments.'
            ],
            [
              'Conclusion',
              'en conclusion, en somme, pour conclure, en définitive, bref',
              'Résumer le raisonnement et présenter le résultat final.'
            ]
        ]
      },
      { type: 'heading', text: '3. Attention aux structures grammaticales' },
      {
        type: 'paragraph',
        text:
          'Il ne suffit pas de connaître la signification des connecteurs : il faut également savoir construire la phrase qui les suit. ' +
          'Certains sont accompagnés d’une proposition avec un verbe conjugué, tandis que d’autres exigent un nom ou une construction particulière. ' +
          'Ces différences sont importantes pour éviter les erreurs grammaticales.'
      },
      {
        type: 'table',
        headers: ['Connecteur', 'Structure', 'Exemple en français'],
        rows: [
            [
              'Parce que',
              'Connecteur + sujet + verbe conjugué.',
              'Je reste chez moi parce qu’il pleut.'
            ],
            [
              'Grâce à',
              'Connecteur + nom ou pronom.',
              'Grâce à son aide, nous avons terminé le projet.'
            ],
            [
              'À cause de',
              'Connecteur + nom ou pronom.',
              'Le match a été annulé à cause de la pluie.'
            ],
            [
              'Donc',
              'Connecteur de conséquence entre deux idées.',
              'Il est tard, donc nous devons partir.'
            ],
            [
              'Bien que',
              'Connecteur + sujet + verbe au subjonctif.',
              'Bien qu’il soit fatigué, il continue à travailler.'
            ],
            [
              'Même si',
              'Connecteur + sujet + verbe à l’indicatif.',
              'Même s’il pleut, nous irons au parc.'
            ],
            [
              'Malgré',
              'Connecteur + nom ou pronom.',
              'Malgré la pluie, nous sommes sortis.'
            ],
            [
              'De plus',
              'Connecteur d’addition, généralement placé au début d’une nouvelle phrase.',
              'Le logement est spacieux. De plus, il est bien situé.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemple pratique : construire un paragraphe cohérent' },
      { type: 'paragraph', text: 'Sujet : défendre l’amélioration des transports en commun à Montréal.' },
      {
        type: 'paragraph',
        text:
          'La Ville devrait améliorer son réseau de transport en commun parce que de nombreux résidents dépendent de l’autobus et du métro. ' +
          'De plus, un service plus fréquent permettrait de réduire le temps d’attente aux heures de pointe. ' +
          'Certes, l’amélioration du réseau représente un investissement important. Cependant, les avantages pourraient être considérables pour les usagers. ' +
          'Même si certains travaux perturbent temporairement la circulation, ils peuvent améliorer la qualité du service à long terme. ' +
          'Par conséquent, la municipalité devrait accorder davantage de ressources à ce secteur. En somme, un réseau efficace profite à l’ensemble de la population.'
      },
      { type: 'heading', text: '5. Différences importantes entre les connecteurs' },
      {
        type: 'list',
        items: [
            'Parce que et car expriment tous deux la cause, mais leurs constructions sont différentes. ' +
            'Parce que introduit une proposition subordonnée, tandis que car relie deux propositions indépendantes.',
          'Grâce à présente généralement une cause favorable ou positive. À cause de est fréquemment utilisé pour présenter une cause négative ou indésirable.',
            'Mais et cependant expriment une opposition. ' +
            'Cependant est souvent employé comme connecteur entre deux phrases, tandis que mais peut également relier directement des éléments dans une même phrase.',
          'Bien que exige le subjonctif. Même si utilise l’indicatif, y compris lorsqu’il s’agit d’une situation hypothétique.',
          'Malgré est normalement suivi d’un nom ou d’un pronom. Pour utiliser une proposition avec un verbe conjugué, préférez bien que.',
          'Donc présente une conséquence. En effet introduit généralement une explication ou une justification, et non une conséquence.',
          'En outre et de plus ajoutent des informations. En revanche présente une opposition ou un contraste.'
        ]
      },
      { type: 'heading', text: '6. Pièges fréquents pour les lusophones' },
      {
        type: 'list',
        items: [
            'Utiliser automatiquement « malgré que » après avoir appris « malgré ». ' +
            'Dans un texte formel, préférez « malgré la situation » ou « bien que la situation soit difficile ».',
          'Utiliser l’indicatif après « bien que ». La forme correcte exige le subjonctif : « Bien qu’il soit malade... ».',
          'Répéter « donc » dans presque toutes les phrases. Variez les connecteurs de conséquence selon le contexte.',
          'Utiliser « à cause de » et « grâce à » comme s’ils étaient toujours interchangeables. Le choix dépend de la relation de sens que vous souhaitez exprimer.',
            'Placer des connecteurs sans relation logique avec les idées. ' +
            'Une phrase qui commence par un connecteur d’opposition doit présenter une idée qui contraste réellement avec la précédente.',
            'Utiliser des connecteurs familiers dans une rédaction formelle. ' +
            'Dans les textes d’examen, privilégiez des expressions comme « cependant », « néanmoins » et « par conséquent ».'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à pourtant et portanto',
        text:
          'Un faux ami important est « pourtant ». ' +
          'Malgré sa ressemblance visuelle avec le mot portugais « portanto », cette expression française indique une opposition et non une conséquence. ' +
          'Pour exprimer l’idée de « portanto », utilisez « donc » ou « par conséquent ». Comparez : « Il était fatigué, pourtant il a continué à travailler. ' +
          '» et « Il était fatigué, donc il est rentré chez lui. ». Confondre ces mots peut complètement inverser la relation logique d’une phrase.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que le correcteur attend au niveau B2',
        text:
          'Au TEF Canada et au TCF Canada, l’utilisation des connecteurs doit démontrer que vous savez organiser et relier les idées de manière claire. ' +
          'Il ne suffit pas d’insérer des expressions complexes : vous devez employer la bonne construction grammaticale et transmettre la relation logique souhaitée. ' +
          'Dans les textes argumentatifs, entraînez-vous particulièrement à combiner la cause, la conséquence, l’opposition et la concession. ' +
          'Une méthode efficace consiste à relire chaque connecteur en vous demandant : la relation entre ces deux idées correspond-elle réellement au sens de cette expression ? ' +
          'Vérifiez également que « bien que » est accompagné du subjonctif, que « malgré » est suivi d’une construction appropriée et que la ponctuation est correcte. ' +
          'Privilégiez la variété, la précision et le naturel plutôt que la quantité de connecteurs.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Marqueur de relation – Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26559642/marqueur-de-relation'
    },
    {
      title: 'Les marqueurs de relation – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/les-marqueurs-de-relation-f1032'
    },
    {
      title: 'Le coordonnant : mode d’emploi – Banque de dépannage linguistique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24301/la-grammaire/la-grammaire-actuelle/les-fonctions-et-roles-syntaxiques/le-coordonnant'
    }
  ]
}

export default content
