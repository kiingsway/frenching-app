import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-canada',

  pt: {
    title: 'Vida no Canadá: clima, inverno e comunidades francófonas',
    summary:
      'Aprenda vocabulário e expressões para conversar sobre o clima canadense, as estações do ano, o inverno e os desafios da vida cotidiana. ' +
      'Conheça também o bilinguismo oficial do Canadá, as diferenças entre as províncias e a presença de comunidades francófonas fora de Quebec.',
    blocks: [
      { type: 'heading', text: '1. O clima e as estações do ano no Canadá' },
      {
        type: 'paragraph',
        text:
          'O Canadá apresenta grandes diferenças climáticas entre suas regiões. ' +
          'O inverno pode ser rigoroso em diversas províncias, mas as temperaturas, a quantidade de neve e a duração da estação variam bastante. ' +
          'Na costa do Pacífico, por exemplo, a chuva é mais frequente do que a neve durante o inverno, enquanto outras regiões enfrentam condições mais propícias a fortes nevascas e tempestades.'
      },
      {
        type: 'table',
        headers: ['Francês', 'Significado', 'Contexto'],
        rows: [
            [
              '[[le printemps|a primavera]]',
              'Primavera',
              'Março a maio, aproximadamente.'
            ],
            [
              '[[l’été|o verão]]',
              'Verão',
              'Junho a agosto, aproximadamente.'
            ],
            [
              '[[l’automne|o outono]]',
              'Outono',
              'Setembro a novembro, aproximadamente.'
            ],
            [
              '[[l’hiver|o inverno]]',
              'Inverno',
              'De dezembro a fevereiro, aproximadamente.'
            ],
            [
              '[[une vague de froid|uma onda de frio]]',
              'Período de temperaturas muito baixas',
              'Condições extremas.'
            ],
            [
              '[[une chute de neige|uma queda de neve]]',
              'Nevada',
              'Precipitação de neve.'
            ],
            [
              '[[le verglas|a camada de gelo da chuva congelante]]',
              'Camada de gelo sobre ruas e calçadas, formada por chuva congelante',
              'Risco de escorregões e acidentes.'
            ],
            [
              '[[le refroidissement éolien|a sensação térmica causada pelo vento]]',
              'Sensação de frio intensificada pelo vento',
              'Condições meteorológicas.'
            ],
            [
              '[[le déneigement|a remoção da neve]]',
              'Retirada da neve de ruas e calçadas',
              'Manutenção durante o inverno.'
            ]
        ]
      },
      { type: 'heading', text: '2. Vocabulário para falar sobre o inverno' },
      {
        type: 'paragraph',
        text:
          'Durante o inverno, é comum conversar sobre temperatura, condições das estradas, roupas adequadas e mudanças na rotina. ' +
          'Algumas expressões são especialmente úteis para descrever o clima e explicar como as condições meteorológicas afetam o cotidiano.'
      },
      {
        type: 'list',
        items: [
          '[[Il fait très froid aujourd’hui.|Está muito frio hoje.]]',
          '[[La température est descendue à moins quinze degrés.|A temperatura caiu para quinze graus negativos.]]',
          '[[Il neige depuis ce matin.|Está nevando desde esta manhã.]]',
          '[[Les routes sont glissantes à cause du verglas.|As estradas estão escorregadias por causa do gelo.]]',
          '[[Il faut déneiger l’entrée de la maison.|É preciso retirar a neve da entrada da casa.]]',
          '[[Je porte un manteau chaud, des bottes d’hiver et une tuque.|Estou usando um casaco quente, botas de inverno e um gorro.]]',
          '[[Les journées sont plus courtes en hiver.|Os dias são mais curtos no inverno.]]',
          '[[Le vent accentue la sensation de froid.|O vento aumenta a sensação de frio.]]'
        ]
      },
      { type: 'heading', text: '3. Bilinguismo e línguas oficiais do Canadá' },
      {
        type: 'paragraph',
        text:
          'O Canadá possui duas línguas oficiais no âmbito federal: o francês e o inglês. ' +
          'Isso não significa que todas as províncias sejam oficialmente bilíngues ou que os serviços estejam disponíveis nas duas línguas em todas as regiões. ' +
          'O Novo Brunswick é a única província oficialmente bilíngue. Quebec possui o francês como sua única língua oficial e como língua comum da sociedade.'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado', 'Uso'],
        rows: [
            [
              '[[les langues officielles|as línguas oficiais]]',
              'Francês e inglês',
              'Línguas oficiais federais.'
            ],
            [
              '[[le bilinguisme|o bilinguismo]]',
              'Uso de duas línguas',
              'Capacidade ou realidade de utilizar dois idiomas.'
            ],
            [
              '[[une communauté francophone|uma comunidade francófona]]',
              'Comunidade de língua francesa',
              'Grupo de pessoas que vivem em francês.'
            ],
            [
              '[[une minorité francophone|uma minoria francófona]]',
              'Minoria de língua francesa',
              'Comunidade cuja língua é minoritária na região.'
            ],
            [
              '[[les services en français|os serviços em francês]]',
              'Atendimento em francês',
              'Serviços públicos ou comunitários.'
            ],
            [
              '[[l’immersion française|a imersão em francês]]',
              'Ensino por imersão em francês',
              'Aprendizagem em ambiente francófono.'
            ],
            [
              '[[une école de langue française|uma escola de língua francesa]]',
              'Escola que oferece ensino em francês',
              'Educação francófona.'
            ],
            [
              '[[un organisme communautaire|uma organização comunitária]]',
              'Organização local',
              'Apoio e integração da comunidade.'
            ]
        ]
      },
      { type: 'heading', text: '4. Comunidades francófonas fora de Quebec' },
      {
        type: 'paragraph',
        text:
          'A francofonia canadense não está concentrada exclusivamente em Quebec. ' +
          'Segundo dados do Censo de 2021, aproximadamente 992 mil pessoas fora de Quebec tinham o francês como primeira língua oficial falada. ' +
          'Essas comunidades possuem histórias, tradições e características regionais próprias. ' +
          'A disponibilidade de serviços em francês e a presença da língua no ambiente de trabalho variam conforme a localidade; em muitas dessas comunidades, o inglês continua sendo a principal língua de trabalho.'
      },
      {
        type: 'list',
        items: [
          'Ontário: [[les Franco-Ontariens|os franco-ontarianos]] formam uma comunidade importante, presente em localidades como Cornwall, Sudbury, Hawkesbury e London.',
          'Novo Brunswick: possui uma expressiva população francófona e comunidades [[acadiennes|acadianas]], especialmente em diferentes regiões do norte e do leste da província.',
          'Nova Escócia: possui comunidades [[acadiennes|acadianas]], incluindo Clare e Chéticamp.',
          'Ilha do Príncipe Eduardo: possui comunidades francófonas, como a região de Évangéline, ligadas à história acadiana.',
          'Manitoba: possui comunidades francófonas, incluindo a região de Red River.',
          'Outras províncias e territórios, como Alberta, Saskatchewan, Colúmbia Britânica e Yukon, também possuem comunidades francófonas.'
        ]
      },
      { type: 'heading', text: '5. Exemplo de apresentação sobre a vida no Canadá' },
      {
        type: 'paragraph',
        text:
          '[[Je vis à Toronto, en Ontario.|Moro em Toronto, em Ontário.]] ' +
          '[[En hiver, les températures peuvent descendre sous zéro et il faut prévoir un manteau chaud, des bottes et des vêtements superposés.|No inverno, as temperaturas podem ficar abaixo de zero e é preciso providenciar um casaco quente, botas e roupas em camadas.]] ' +
          '[[Le Canada compte des communautés francophones dans plusieurs provinces, même si l’anglais est souvent la langue de travail hors Québec.|O Canadá tem comunidades francófonas em várias províncias, embora o inglês seja frequentemente a língua de trabalho fora de Quebec.]] ' +
          '[[Je trouve important de préserver ces communautés, car elles contribuent à la diversité culturelle du pays.|Considero importante preservar essas comunidades, pois elas contribuem para a diversidade cultural do país.]]'
      },
      { type: 'heading', text: '6. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda bilinguismo oficial com uso cotidiano das línguas',
        text:
          'O fato de o Canadá possuir duas línguas oficiais no âmbito federal não significa que toda a população seja bilíngue ou que todos os serviços provinciais funcionem em francês e inglês. ' +
          'Também não confunda a realidade de Quebec com a do Novo Brunswick. ' +
          'Em Quebec, o francês é a única língua oficial; o Novo Brunswick é a única província oficialmente bilíngue. ' +
          'Para descrever uma situação regional, seja específico e evite generalizações.'
      },
      {
        type: 'list',
        items: [
          'Não confunda [[le verglas|o gelo na superfície]] com [[la neige|a neve]]. São fenômenos diferentes e oferecem riscos distintos.',
          'Não traduza literalmente [[avoir froid|sentir frio]] como uma construção com ser ou estar. A expressão correta é [[J’ai froid.|Estou com frio.]]',
          'No hemisfério norte as estações são invertidas em relação ao Brasil: o [[l’hiver|o inverno]] vai, aproximadamente, de dezembro a fevereiro e o [[l’été|o verão]], de junho a agosto.',
          'No Canadá, o gorro de inverno é [[une tuque|um gorro de inverno]]; na França, a palavra usada é [[un bonnet|um gorro]].',
          'Não utilize [[francophone|francófono]] como sinônimo de alguém necessariamente bilíngue. Uma pessoa pode ser francófona sem falar inglês.',
          'Não afirme que todos os habitantes de New Brunswick falam francês ou que todos os habitantes de Quebec falam exclusivamente francês.',
          'Não confunda [[les Franco-Ontariens|os franco-ontarianos]] com [[les Acadiens|os acadianos]]. São identidades históricas e culturais diferentes.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Prepare-se para descrever condições climáticas, comparar regiões, falar sobre adaptação ao inverno e apresentar aspectos culturais e linguísticos do Canadá. ' +
          'Na compreensão oral, reconheça expressões relacionadas a temperaturas, alertas meteorológicos e serviços comunitários. ' +
          'Na expressão oral e escrita, pratique comparar vantagens e dificuldades de viver em diferentes regiões e explicar a importância das comunidades francófonas. ' +
          'Para buscar o nível B2, desenvolva opiniões com exemplos concretos e evite generalizações sobre a sociedade canadense.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do governo do Canadá listadas abrem. A de estatísticas das línguas oficiais confirma, com a tabela do Censo de 2021, que cerca de 992 mil pessoas fora de Quebec tinham o francês como primeira língua oficial falada (8 066 633 no país, menos 7 074 328 em Quebec) e que 30,3% da população do Novo Brunswick é francófona. ' +
          'A de comunidades francófonas confirma que, nessas comunidades fora de Quebec, a língua de trabalho costuma ser o inglês. A de perigos do frio cita chuva congelante, sensação térmica causada pelo vento, neve e nevascas. ' +
          'Nenhuma dessas fontes confirma: as localidades citadas (Cornwall, Sudbury, Hawkesbury, London, Clare, Chéticamp, Évangéline, Red River); que o Novo Brunswick é a única província oficialmente bilíngue e que o francês é a única língua oficial de Quebec; as épocas aproximadas das estações; a chuva em vez de neve na costa do Pacífico; as formas do vocabulário do inverno e a diferença entre tuque e bonnet. ' +
          'O texto-modelo e as recomendações de preparação para o TEF Canada e o TCF Canada, inclusive a referência ao nível B2, são sugestões de preparação, não regras das provas.'
      }
    ]
  },

  fr: {
    title: 'La vie au Canada : climat, hiver, bilinguisme et communautés francophones',
    summary:
      'Apprenez le vocabulaire et les expressions nécessaires pour parler du climat canadien, des saisons, de l’hiver et des défis de la vie quotidienne. ' +
      'Découvrez également le bilinguisme officiel du Canada, les différences entre les provinces et la présence de communautés francophones à l’extérieur du Québec.',
    blocks: [
      { type: 'heading', text: '1. Le climat et les saisons au Canada' },
      {
        type: 'paragraph',
        text:
          'Le Canada présente de grandes différences climatiques d’une région à l’autre. ' +
          'L’hiver peut être rigoureux dans plusieurs provinces, mais les températures, les quantités de neige et la durée de la saison varient considérablement. ' +
          'Sur la côte du Pacifique, par exemple, la pluie est plus fréquente que la neige en hiver, tandis que d’autres régions connaissent des conditions plus propices aux fortes chutes de neige et aux tempêtes.'
      },
      {
        type: 'table',
        headers: ['En français', 'Signification', 'Contexte'],
        rows: [
            [
              'le printemps',
              'Saison du printemps',
              'De mars à mai, approximativement.'
            ],
            [
              'l’été',
              'Saison estivale',
              'De juin à août, approximativement.'
            ],
            [
              'l’automne',
              'Saison automnale',
              'De septembre à novembre, approximativement.'
            ],
            [
              'l’hiver',
              'Saison hivernale',
              'De décembre à février, approximativement.'
            ],
            [
              'une vague de froid',
              'Période de températures très basses',
              'Conditions extrêmes.'
            ],
            [
              'une chute de neige',
              'Précipitation sous forme de neige',
              'Chute de neige.'
            ],
            [
              'le verglas',
              'Couche de glace sur les rues et les trottoirs',
              'Risque de glissades et d’accidents.'
            ],
            [
              'le refroidissement éolien',
              'Sensation de froid accentuée par le vent',
              'Conditions météorologiques.'
            ],
            [
              'le déneigement',
              'Enlèvement de la neige',
              'Entretien pendant l’hiver.'
            ]
        ]
      },
      { type: 'heading', text: '2. Le vocabulaire pour parler de l’hiver' },
      {
        type: 'paragraph',
        text:
          'Pendant l’hiver, il est courant de parler de la température, de l’état des routes, des vêtements appropriés et des changements dans la routine. ' +
          'Certaines expressions sont particulièrement utiles pour décrire la météo et expliquer comment les conditions météorologiques influencent la vie quotidienne.'
      },
      {
        type: 'list',
        items: [
          'Il fait très froid aujourd’hui.',
          'La température est descendue à moins quinze degrés.',
          'Il neige depuis ce matin.',
          'Les routes sont glissantes à cause du verglas.',
          'Il faut déneiger l’entrée de la maison.',
          'Je porte un manteau chaud, des bottes d’hiver et une tuque.',
          'Les journées sont plus courtes en hiver.',
          'Le vent accentue la sensation de froid.'
        ]
      },
      { type: 'heading', text: '3. Le bilinguisme et les langues officielles du Canada' },
      {
        type: 'paragraph',
        text:
          'Le Canada possède deux langues officielles au niveau fédéral : le français et l’anglais. ' +
          'Cela ne signifie pas que toutes les provinces sont officiellement bilingues ni que les services sont offerts dans les deux langues partout. ' +
          'Le Nouveau-Brunswick est la seule province officiellement bilingue. Le Québec a le français comme seule langue officielle et comme langue commune de la société.'
      },
      {
        type: 'table',
        headers: ['Expression en français', 'Signification', 'Utilisation'],
        rows: [
            [
              'les langues officielles',
              'Le français et l’anglais',
              'Langues officielles fédérales.'
            ],
            [
              'le bilinguisme',
              'L’utilisation de deux langues',
              'Capacité ou réalité d’utiliser deux langues.'
            ],
            [
              'une communauté francophone',
              'Une communauté de langue française',
              'Groupe de personnes qui vivent en français.'
            ],
            [
              'une minorité francophone',
              'Une minorité de langue française',
              'Communauté dont la langue est minoritaire dans la région.'
            ],
            [
              'les services en français',
              'Les services offerts en français',
              'Services publics ou communautaires.'
            ],
            [
              'l’immersion française',
              'L’enseignement par immersion en français',
              'Apprentissage dans un environnement francophone.'
            ],
            [
              'une école de langue française',
              'Une école qui offre un enseignement en français',
              'Éducation francophone.'
            ],
            [
              'un organisme communautaire',
              'Une organisation locale',
              'Soutien et intégration de la communauté.'
            ]
        ]
      },
      { type: 'heading', text: '4. Les communautés francophones à l’extérieur du Québec' },
      {
        type: 'paragraph',
        text:
          'La francophonie canadienne ne se limite pas au Québec. ' +
          'Selon les données du recensement de 2021, environ 992 000 personnes vivant à l’extérieur du Québec avaient le français comme première langue officielle parlée. ' +
          'Ces communautés possèdent leurs propres histoires, traditions et caractéristiques régionales. ' +
          'La disponibilité des services en français et la présence de la langue dans le milieu de travail varient selon la localité ; dans plusieurs de ces communautés, l’anglais demeure la principale langue de travail.'
      },
      {
        type: 'list',
        items: [
          'Ontario : les Franco-Ontariens forment une communauté importante, présente dans des localités comme Cornwall, Sudbury, Hawkesbury et London.',
          'Nouveau-Brunswick : la province compte une importante population francophone et des communautés acadiennes, particulièrement dans différentes régions du nord et de l’est de la province.',
          'Nouvelle-Écosse : on y trouve des communautés acadiennes, notamment dans les régions de Clare et de Chéticamp.',
          'Île-du-Prince-Édouard : on y trouve des communautés francophones, comme la région Évangéline, liées à l’histoire acadienne.',
          'Manitoba : cette province possède des communautés francophones, notamment dans la région de la rivière Rouge.',
          'D’autres provinces et territoires, comme l’Alberta, la Saskatchewan, la Colombie-Britannique et le Yukon, possèdent également des communautés francophones.'
        ]
      },
      { type: 'heading', text: '5. Exemple de présentation sur la vie au Canada' },
      {
        type: 'paragraph',
        text:
          'Je vis à Toronto, en Ontario. ' +
          'En hiver, les températures peuvent descendre sous zéro et il faut prévoir un manteau chaud, des bottes et des vêtements superposés. ' +
          'Le Canada compte des communautés francophones dans plusieurs provinces, même si l’anglais est souvent la langue de travail hors Québec. ' +
          'Je trouve important de préserver ces communautés, car elles contribuent à la diversité culturelle du pays.'
      },
      { type: 'heading', text: '6. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas le bilinguisme officiel et l’usage quotidien des langues',
        text:
          'Le fait que le Canada possède deux langues officielles au niveau fédéral ne signifie pas que toute la population est bilingue ni que tous les services provinciaux fonctionnent en français et en anglais. ' +
          'Ne confondez pas non plus la réalité du Québec avec celle du Nouveau-Brunswick. ' +
          'Au Québec, le français est la seule langue officielle ; le Nouveau-Brunswick est la seule province officiellement bilingue. ' +
          'Pour décrire une situation régionale, soyez précis et évitez les généralisations.'
      },
      {
        type: 'list',
        items: [
          'Ne confondez pas le verglas et la neige. Ce sont des phénomènes différents qui présentent des risques distincts.',
          'Ne traduisez pas littéralement l’expression avoir froid avec une construction utilisant être. La forme correcte est « J’ai froid ».',
          'Dans l’hémisphère nord, les saisons sont inversées par rapport au Brésil : l’hiver va approximativement de décembre à février et l’été, de juin à août.',
          'Au Canada, le bonnet d’hiver se dit une tuque ; en France, on dit un bonnet.',
          'N’utilisez pas francophone comme synonyme de personne nécessairement bilingue. Une personne peut être francophone sans parler anglais.',
          'N’affirmez pas que tous les habitants du Nouveau-Brunswick parlent français ou que tous les habitants du Québec parlent exclusivement français.',
          'Ne confondez pas les Franco-Ontariens et les Acadiens. Ce sont des identités historiques et culturelles différentes.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Préparez-vous à décrire les conditions météorologiques, à comparer des régions, à parler de l’adaptation à l’hiver et à présenter certains aspects culturels et linguistiques du Canada. ' +
          'En compréhension orale, apprenez à reconnaître les expressions liées aux températures, aux alertes météorologiques et aux services communautaires. ' +
          'À l’expression orale et écrite, entraînez-vous à comparer les avantages et les difficultés de la vie dans différentes régions et à expliquer l’importance des communautés francophones. ' +
          'Pour viser le niveau B2, développez vos opinions à l’aide d’exemples concrets et évitez les généralisations sur la société canadienne.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages du gouvernement du Canada indiquées s’ouvrent. Celle des statistiques sur les langues officielles confirme, avec le tableau du recensement de 2021, qu’environ 992 000 personnes à l’extérieur du Québec avaient le français comme première langue officielle parlée (8 066 633 au pays, moins 7 074 328 au Québec) et que 30,3 % de la population du Nouveau-Brunswick est francophone. ' +
          'Celle sur les communautés francophones confirme que, dans ces communautés hors Québec, la langue de travail est généralement l’anglais. Celle sur les dangers du froid mentionne la pluie verglaçante, le refroidissement éolien, la neige et les blizzards. ' +
          'Aucune de ces sources ne confirme : les localités citées (Cornwall, Sudbury, Hawkesbury, London, Clare, Chéticamp, Évangéline, rivière Rouge) ; que le Nouveau-Brunswick est la seule province officiellement bilingue et que le français est la seule langue officielle du Québec ; les périodes approximatives des saisons ; la pluie plutôt que la neige sur la côte du Pacifique ; les formes du vocabulaire de l’hiver et la différence entre tuque et bonnet. ' +
          'Le texte modèle et les recommandations de préparation au TEF Canada et au TCF Canada, y compris la référence au niveau B2, sont des suggestions de préparation, pas des règles des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Gouvernement du Canada – Risques météorologiques pendant la saison froide',
      url: 'https://www.canada.ca/en/environment-climate-change/services/seasonal-weather-hazards/cold-season-weather-hazards.html'
    },
    {
      title: 'Gouvernement du Canada – Statistiques sur les langues officielles au Canada',
      url: 'https://www.canada.ca/en/canadian-heritage/services/official-languages-bilingualism/publications/statistics.html'
    },
    {
      title: 'Gouvernement du Canada – Choisir une communauté francophone à l’extérieur du Québec',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/settle-canada/francophone-communities.html'
    },
    {
      title: 'Gouvernement du Canada – Choisir une communauté accueillante offrant des services en français',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/campaigns/francophone-immigration-outside-quebec/welcome.html'
    },
    {
      title: 'Gouvernement du Canada – La Francophonie au Canada',
      url: 'https://www.canada.ca/en/canadian-heritage/campaigns/month-francophonie/francophonie-canada.html'
    }
  ]
}

export default content
