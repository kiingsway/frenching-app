import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-ambiente',

  pt: {
    title: 'Meio ambiente: clima, reciclagem, energia e desenvolvimento sustentável',
    summary:
      'Você vai aprender o vocabulário francês relacionado às mudanças climáticas, à poluição, à reciclagem, às fontes de energia e ao desenvolvimento sustentável. ' +
      'Também vai praticar como descrever problemas ambientais, discutir suas consequências e apresentar soluções em situações cotidianas e debates.',
    blocks: [
      { type: 'heading', text: 'Clima e fenômenos ambientais' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre o meio ambiente, é importante distinguir [[la météo|o tempo atmosférico]] de [[le climat|o clima]]. ' +
          'O primeiro se refere às condições atmosféricas em determinado momento e lugar, enquanto o segundo descreve os padrões meteorológicos observados durante longos períodos. ' +
          'Outros termos importantes permitem discutir as mudanças ambientais e suas consequências.'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado'],
        rows: [
            [
              '[[les changements climatiques|As mudanças climáticas]]',
              'Alterações nos padrões do clima.'
            ],
            [
              '[[le réchauffement planétaire|O aquecimento do planeta]]',
              'Aumento da temperatura média da superfície terrestre.'
            ],
            [
              '[[les gaz à effet de serre (GES)|Os gases de efeito estufa (GEE)]]',
              'Gases atmosféricos que absorvem e reemitem radiação infravermelha.'
            ],
            [
              '[[les émissions de gaz à effet de serre|As emissões de gases de efeito estufa]]',
              'Liberação desses gases na atmosfera.'
            ],
            [
              '[[l’empreinte de carbone|A pegada de carbono]]',
              'Quantidade de emissões de gases de efeito estufa associadas a atividades humanas.'
            ],
            [
              '[[une canicule|Uma onda de calor intensa]]',
              'Período de calor excepcionalmente elevado.'
            ],
            [
              '[[une sécheresse|Uma seca]]',
              'Período prolongado de falta ou redução significativa das precipitações.'
            ],
            [
              '[[une inondation|Uma inundação]]',
              'Transbordamento de água sobre áreas normalmente secas.'
            ],
            [
              '[[la pollution de l’air|A poluição do ar]]',
              'Contaminação do ar por substâncias poluentes.'
            ],
            [
              '[[la biodiversité|A biodiversidade]]',
              'Variedade de organismos vivos e ecossistemas.'
            ]
        ]
      },
      { type: 'heading', text: 'Reciclagem, resíduos e consumo responsável' },
      {
        type: 'paragraph',
        text:
          'O vocabulário ambiental também envolve a maneira como produzimos, separamos, reutilizamos e descartamos materiais. No Québec, o princípio dos [[3RV-E|3RV-E]] ' +
          'estabelece uma ordem de prioridade: redução, reutilização, reciclagem, valorização e eliminação dos resíduos.'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado'],
        rows: [
            [
              '[[les matières résiduelles|Os materiais residuais / resíduos]]',
              'Materiais ou objetos descartados ou destinados ao descarte.'
            ],
            [
              '[[la réduction à la source|A redução na origem]]',
              'Diminuir a quantidade de resíduos produzidos.'
            ],
            [
              '[[le réemploi|A reutilização / o reuso]]',
              'Utilizar novamente um objeto, prolongando sua vida útil.'
            ],
            [
              '[[le recyclage|A reciclagem]]',
              'Transformar materiais recuperados em matéria-prima para novos produtos.'
            ],
            [
              '[[le tri des matières|A separação dos materiais]]',
              'Separar os resíduos conforme suas características.'
            ],
            [
              '[[la collecte sélective|A coleta seletiva]]',
              'Coleta organizada de materiais separados para recuperação.'
            ],
            [
              '[[le compostage|A compostagem]]',
              'Processo de transformação de materiais orgânicos em composto.'
            ],
            [
              '[[la valorisation des matières résiduelles|O aproveitamento dos resíduos]]',
              'Dar uma nova utilidade aos materiais, inclusive por valorização energética.'
            ],
            [
              '[[l’élimination des déchets|A destinação final dos resíduos]]',
              'Etapa final de gestão dos materiais que não serão recuperados.'
            ],
            [
              '[[la surconsommation|O consumo excessivo]]',
              'Consumo de bens e recursos acima das necessidades.'
            ]
        ]
      },
      { type: 'heading', text: 'Energia e desenvolvimento sustentável' },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado'],
        rows: [
            [
              '[[une énergie renouvelable|Uma energia renovável]]',
              'Energia obtida de fontes naturais que se renovam.'
            ],
            [
              '[[une énergie non renouvelable|Uma energia não renovável]]',
              'Energia proveniente de recursos limitados.'
            ],
            [
              '[[l’énergie solaire|A energia solar]]',
              'Energia obtida a partir da radiação solar.'
            ],
            [
              '[[l’énergie éolienne|A energia eólica]]',
              'Energia produzida a partir do vento.'
            ],
            [
              '[[l’énergie hydroélectrique|A energia hidrelétrica]]',
              'Eletricidade produzida utilizando a força da água.'
            ],
            [
              '[[les combustibles fossiles|Os combustíveis fósseis]]',
              'Carvão, petróleo e gás natural.'
            ],
            [
              '[[l’efficacité énergétique|A eficiência energética]]',
              'Utilização eficiente da energia para realizar determinada atividade.'
            ],
            [
              '[[la consommation d’énergie|O consumo de energia]]',
              'Quantidade de energia utilizada.'
            ],
            [
              '[[le développement durable|O desenvolvimento sustentável]]',
              'Desenvolvimento que considera as dimensões ambiental, social e econômica sem comprometer as gerações futuras.'
            ],
            [
              '[[la protection de l’environnement|A proteção do meio ambiente]]',
              'Ações destinadas a preservar os recursos naturais e os ecossistemas.'
            ]
        ]
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[Les changements climatiques augmentent les risques de canicules, de sécheresses et d’inondations.|As mudanças climáticas aumentam os riscos de ondas de calor, secas e inundações.]]',
          '[[Dans notre immeuble, nous séparons les matières recyclables des matières organiques.|No nosso prédio, separamos os materiais recicláveis dos materiais orgânicos.]]',
          '[[Le réemploi permet de prolonger la durée d’utilisation des objets avant leur recyclage.|A reutilização permite prolongar a vida útil dos objetos antes de sua reciclagem.]]',
          '[[L’énergie solaire et l’énergie éolienne sont des sources d’énergie renouvelable.|A energia solar e a energia eólica são fontes de energia renovável.]]',
          '[[Une politique de développement durable doit tenir compte des dimensions environnementale, sociale et économique.|Uma política de desenvolvimento sustentável deve levar em conta as dimensões ambiental, social e econômica.]]',
          '[[Les transports en commun peuvent contribuer à réduire les émissions liées aux déplacements.|O transporte público pode contribuir para reduzir as emissões relacionadas aos deslocamentos.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda reutilização com reciclagem',
        text:
          'Um erro comum é tratar [[le réemploi|o reuso]] e [[le recyclage|a reciclagem]] como sinônimos. ' +
          'No reuso, o objeto é utilizado novamente, geralmente sem transformação. ' +
          'Na reciclagem, o material passa por um processo de transformação para servir de matéria-prima para outro produto. ' +
          'Também não confunda [[la météo|o tempo atmosférico]] ' +
          'com [[le climat|o clima]]: uma tempestade é um fenômeno meteorológico, enquanto as mudanças climáticas envolvem alterações nos padrões de longo prazo.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na compreensão e na produção oral e escrita, pratique discutir problemas ambientais, explicar suas consequências e apresentar propostas de melhoria. ' +
          'Uma estrutura útil é identificar o problema, explicar suas causas, apresentar exemplos e sugerir soluções individuais, comunitárias ou governamentais. ' +
          'Treine também comparar fontes de energia, discutir os benefícios e limites da reciclagem e defender opiniões sobre o desenvolvimento sustentável. ' +
          'Utilize conectores como [[tout d’abord|primeiramente]], [[en revanche|em contrapartida]], [[par conséquent|consequentemente]] e [[à long terme|a longo prazo]].'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O OQLF tem fichas para [[climat|clima]], [[changement climatique|mudança climática]], [[réchauffement planétaire|aquecimento global]], [[énergie renouvelable|energia renovável]], [[principe des 3RV-E|princípio dos 3RV-E]], [[recyclage|reciclagem]], [[gaz à effet de serre|gás de efeito estufa]], [[empreinte de carbone|pegada de carbono]], [[développement durable|desenvolvimento sustentável]] e [[canicule|onda de calor]], que definem esses termos. ' +
          'Não têm fonte confirmada: a distinção entre [[réemploi|reuso]] e [[recyclage|reciclagem]] como explicada, o contraste entre [[météo|tempo]] e [[climat|clima]], as listas de vocabulário, os exemplos e a dica de treino. ' +
          'Essa dica é conselho de preparação, não regra oficial. As páginas consultadas não indicam que esses assuntos apareçam em questões do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Environnement : climat, recyclage, énergie et développement durable',
    summary:
      'Vous apprendrez le vocabulaire français lié aux changements climatiques, à la pollution, au recyclage, aux sources d’énergie et au développement durable. ' +
      'Vous pratiquerez également la description des problèmes environnementaux, l’explication de leurs conséquences et la présentation de solutions dans des situations quotidiennes et des débats.',
    blocks: [
      { type: 'heading', text: 'Climat et phénomènes environnementaux' },
      {
        type: 'paragraph',
        text:
          'Pour parler d’environnement, il est important de distinguer la météo du climat. ' +
          'La première fait référence aux conditions atmosphériques à un moment et dans un lieu précis, tandis que le second décrit les tendances météorologiques observées sur de longues périodes. ' +
          'D’autres termes importants permettent de discuter des changements environnementaux et de leurs conséquences.'
      },
      {
        type: 'table',
        headers: ['Expression en français', 'Définition et explication'],
        rows: [
            [
              'Les changements climatiques',
              'Modifications des tendances du climat.'
            ],
            [
              'Le réchauffement planétaire',
              'Augmentation de la température moyenne à la surface de la Terre.'
            ],
            [
              'Les gaz à effet de serre (GES)',
              'Gaz atmosphériques qui absorbent et réémettent le rayonnement infrarouge.'
            ],
            [
              'Les émissions de gaz à effet de serre',
              'Libération de ces gaz dans l’atmosphère.'
            ],
            [
              'L’empreinte de carbone',
              'Quantité d’émissions de gaz à effet de serre associées aux activités humaines.'
            ],
            [
              'Une canicule',
              'Période de chaleur exceptionnellement élevée.'
            ],
            [
              'Une sécheresse',
              'Période prolongée d’absence ou de diminution importante des précipitations.'
            ],
            [
              'Une inondation',
              'Débordement d’eau sur des terrains habituellement secs.'
            ],
            [
              'La pollution de l’air',
              'Contamination de l’air par des substances polluantes.'
            ],
            [
              'La biodiversité',
              'Diversité des organismes vivants et des écosystèmes.'
            ]
        ]
      },
      { type: 'heading', text: 'Recyclage, matières résiduelles et consommation responsable' },
      {
        type: 'paragraph',
        text:
          'Le vocabulaire environnemental concerne également la manière dont nous produisons, trions, réutilisons et éliminons les matières. ' +
          'Au Québec, le principe des 3RV-E établit un ordre de priorité : réduction, réemploi, recyclage, valorisation et élimination des matières résiduelles.'
      },
      {
        type: 'table',
        headers: ['Expression en français', 'Définition et explication'],
        rows: [
            [
              'Les matières résiduelles',
              'Matières ou objets qui sont abandonnés ou destinés à l’être.'
            ],
            [
              'La réduction à la source',
              'Diminuer la quantité de matières résiduelles produites.'
            ],
            [
              'Le réemploi',
              'Utiliser de nouveau un objet afin de prolonger sa durée de vie.'
            ],
            [
              'Le recyclage',
              'Transformer des matières récupérées pour les utiliser comme matières premières dans de nouveaux produits.'
            ],
            [
              'Le tri des matières',
              'Séparer les matières résiduelles selon leurs caractéristiques.'
            ],
            [
              'La collecte sélective',
              'Collecte organisée des matières séparées en vue de leur récupération.'
            ],
            [
              'Le compostage',
              'Processus de transformation des matières organiques en compost.'
            ],
            [
              'La valorisation des matières résiduelles',
              'Donner une nouvelle utilité aux matières, notamment par la valorisation énergétique.'
            ],
            [
              'L’élimination des déchets',
              'Étape finale de gestion des matières qui ne seront pas récupérées.'
            ],
            [
              'La surconsommation',
              'Consommation excessive de biens et de ressources.'
            ]
        ]
      },
      { type: 'heading', text: 'Énergie et développement durable' },
      {
        type: 'table',
        headers: ['Expression en français', 'Définition et explication'],
        rows: [
            [
              'Une énergie renouvelable',
              'Énergie issue de sources naturelles qui se renouvellent.'
            ],
            [
              'Une énergie non renouvelable',
              'Énergie provenant de ressources limitées.'
            ],
            [
              'L’énergie solaire',
              'Énergie obtenue à partir du rayonnement solaire.'
            ],
            [
              'L’énergie éolienne',
              'Énergie produite à partir du vent.'
            ],
            [
              'L’énergie hydroélectrique',
              'Électricité produite à partir de la force de l’eau.'
            ],
            [
              'Les combustibles fossiles',
              'Charbon, pétrole et gaz naturel.'
            ],
            [
              'L’efficacité énergétique',
              'Utilisation efficace de l’énergie pour réaliser une activité donnée.'
            ],
            [
              'La consommation d’énergie',
              'Quantité d’énergie utilisée.'
            ],
            [
              'Le développement durable',
              'Développement qui tient compte des dimensions environnementale, sociale et économique sans compromettre les générations futures.'
            ],
            [
              'La protection de l’environnement',
              'Actions destinées à préserver les ressources naturelles et les écosystèmes.'
            ]
        ]
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'list',
        items: [
          'Les changements climatiques augmentent les risques de canicules, de sécheresses et d’inondations.',
          'Dans notre immeuble, nous séparons les matières recyclables des matières organiques.',
          'Le réemploi permet de prolonger la durée d’utilisation des objets avant leur recyclage.',
          'L’énergie solaire et l’énergie éolienne sont des sources d’énergie renouvelable.',
          'Une politique de développement durable doit tenir compte des dimensions environnementale, sociale et économique.',
          'Les transports en commun peuvent contribuer à réduire les émissions liées aux déplacements.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas le réemploi et le recyclage',
        text:
          'Une erreur fréquente consiste à traiter le réemploi et le recyclage comme des synonymes. ' +
          'Dans le réemploi, l’objet est utilisé de nouveau, généralement sans transformation. ' +
          'Dans le recyclage, la matière subit un processus de transformation afin de servir de matière première à un autre produit. ' +
          'Ne confondez pas non plus la météo et le climat : une tempête est un phénomène météorologique, tandis que les changements climatiques concernent des modifications des tendances à long terme.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'En compréhension et en production orales et écrites, entraînez-vous à discuter des problèmes environnementaux, à expliquer leurs conséquences et à présenter des propositions d’amélioration. ' +
          'Une structure utile consiste à identifier le problème, à expliquer ses causes, à présenter des exemples et à proposer des solutions individuelles, communautaires ou gouvernementales. ' +
          'Entraînez-vous également à comparer les sources d’énergie, à discuter des avantages et des limites du recyclage et à défendre vos opinions sur le développement durable. ' +
          'Utilisez des connecteurs comme tout d’abord, en revanche, par conséquent et à long terme.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF a des fiches pour climat, changement climatique, réchauffement planétaire, énergie renouvelable, principe des 3RV-E, recyclage, gaz à effet de serre, empreinte de carbone, développement durable et canicule, qui définissent ces termes. ' +
          'Ne sont pas confirmés par une source : la distinction entre réemploi et recyclage telle qu’expliquée, le contraste entre météo et climat, les listes de vocabulaire, les exemples et le conseil d’entraînement. ' +
          'Ce conseil est une recommandation de préparation et non une règle officielle. Les pages consultées n’indiquent pas que ces sujets apparaissent dans des questions du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF — Ficha terminológica sobre [[climat|clima]]',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/17029837/climat'
    },
    {
      title: 'OQLF — Ficha terminológica sobre [[changement climatique|mudança climática]]',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26513063/changement-climatique'
    },
    {
      title: 'OQLF — Ficha terminológica sobre [[réchauffement planétaire|aquecimento do planeta]]',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8350888/rechauffement-planetaire'
    },
    {
      title: 'OQLF — Ficha terminológica sobre [[énergie renouvelable|energia renovável]]',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8357810/energie-renouvelable'
    },
    {
      title: 'OQLF — Princípio dos 3RV-E',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26503191/principe-des-3rv-e'
    },
    {
      title: 'OQLF — Ficha terminológica sobre [[recyclage|reciclagem]]',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8367921/recyclage'
    },
    {
      title: 'OQLF — Ficha terminológica sobre [[gaz à effet de serre|gás de efeito estufa]]',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8356147/gaz-a-effet-de-serre'
    },
    {
      title: 'OQLF — Ficha terminológica sobre [[empreinte de carbone|pegada de carbono]]',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26505089/empreinte-de-carbone'
    },
    {
      title: 'OQLF — Ficha terminológica sobre [[développement durable|desenvolvimento sustentável]]',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/2067322/developpement-durable'
    },
    {
      title: 'OQLF — Ficha terminológica sobre [[canicule|onda de calor intensa]]',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26542278/canicule'
    }
  ]
}

export default content
