import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-alimentacao',

  pt: {
    title: 'Alimentação e gastronomia',
    summary:
      'Aprenda a falar sobre alimentos, refeições, hábitos alimentares, preparo de pratos e experiências gastronômicas em francês. ' +
      'Conheça as particularidades dos nomes das refeições no Québec, vocabulário de restaurantes e expressões para fazer pedidos, descrever sabores e informar restrições alimentares.',
    blocks: [
      { type: 'heading', text: 'Alimentos e categorias' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre alimentação, é importante conhecer as principais categorias de alimentos: [[les fruits|as frutas]], [[les légumes|os legumes e as verduras]], [[les produits laitiers|os produtos lácteos]], [[la viande|a carne]], [[le poisson|o peixe]], [[les céréales|os cereais]] ' +
          'e [[les légumineuses|as leguminosas]]. ' +
          'Outros termos frequentes são [[le pain|o pão]], [[le fromage|o queijo]], [[les œufs|os ovos]], [[le lait|o leite]], [[le beurre|a manteiga]], [[le riz|o arroz]], [[les pâtes alimentaires|as massas]] ' +
          'e [[les épices|as especiarias]]. ' +
          'Para descrever os hábitos alimentares, utilize [[une alimentation équilibrée|uma alimentação equilibrada]], [[les aliments frais|os alimentos frescos]], [[les produits biologiques|os produtos orgânicos]] ' +
          'e [[les produits locaux|os produtos locais]].'
      },
      { type: 'heading', text: 'As refeições no Québec e na França' },
      {
        type: 'table',
        headers: ['Momento', 'Francês do Québec', 'Francês da França'],
        rows: [
            [
              'Manhã',
              '[[le déjeuner|café da manhã]]',
              '[[le petit-déjeuner|café da manhã]]'
            ],
            [
              'Meio-dia',
              '[[le dîner|almoço]]',
              '[[le déjeuner|almoço]]'
            ],
            [
              'Noite',
              '[[le souper|jantar]]',
              '[[le dîner|jantar]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Essa diferença é especialmente importante no Canadá. No Québec, normalmente se utiliza [[déjeuner|café da manhã]], [[dîner|almoço]] e [[souper|jantar]]. ' +
          'Na França, a sequência habitual é [[petit-déjeuner|café da manhã]], [[déjeuner|almoço]] e [[dîner|jantar]]. ' +
          'Para falar de outras refeições e ocasiões, utilize [[un repas|uma refeição]], [[une collation|um lanche]], [[un goûter|um lanche da tarde, especialmente para crianças]] ' +
          'e [[un repas-partage|uma refeição compartilhada, em que cada pessoa leva um prato]].'
      },
      {
        type: 'paragraph',
        text:
          'Na cozinha, alguns verbos essenciais são [[préparer|preparar]], [[cuisiner|cozinhar]], [[faire cuire|cozinhar / levar ao fogo]], [[faire bouillir|ferver]], [[faire frire|fritar]], [[faire griller|grelhar]], [[assaisonner|temperar]] ' +
          'e [[mélanger|misturar]]. ' +
          'Para descrever sabores e texturas, utilize [[sucré|doce]], [[salé|salgado]], [[amer|amargo]], [[acide|ácido]], [[épicé|picante / temperado]], [[croquant|crocante]], [[crémeux|cremoso]] ' +
          'e [[tendre|macio]].'
      },
      {
        type: 'paragraph',
        text:
          'A gastronomia também faz parte da identidade cultural do Québec. ' +
          'Um prato bastante conhecido é [[la poutine|a poutine]], preparada com batatas fritas, queijo em grãos e molho quente. O OQLF avisa para não confundi-la com o prato acadiano [[poutine râpée|poutine râpée]]. ' +
          'Outro termo regional é [[un casse-croûte|um pequeno restaurante de refeições rápidas]], geralmente especializado em pratos simples servidos no balcão ou para levar. ' +
          'Para falar de compras e restaurantes, conheça também [[faire l’épicerie|fazer compras de supermercado]], [[la liste d’épicerie|a lista de compras]], [[commander un plat|pedir um prato]], [[les ingrédients|os ingredientes]] ' +
          'e [[les spécialités régionales|as especialidades regionais]].'
      },
      { type: 'heading', text: 'Exemplo em contexto: em um restaurante' },
      {
        type: 'paragraph',
        text:
          '[[Bonjour, avez-vous une table pour deux ?|Olá, vocês têm uma mesa para duas pessoas?]] ' +
          '[[Nous aimerions consulter le menu, s’il vous plaît.|Gostaríamos de consultar o cardápio, por favor.]] ' +
          '[[Est-ce que la poutine contient des ingrédients d’origine animale autres que le fromage ?|A poutine contém ingredientes de origem animal além do queijo?]] ' +
          '[[Je suis allergique aux arachides, pourriez-vous vérifier les ingrédients ?|Sou alérgico a amendoim, poderia verificar os ingredientes?]] ' +
          '[[Je vais prendre le poisson grillé avec des légumes, et une soupe en entrée.|Vou pedir o peixe grelhado com legumes e uma sopa de entrada.]] ' +
          '[[Pourriez-vous nous apporter l’addition, s’il vous plaît ?|Poderiam trazer a conta, por favor?]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com os nomes das refeições e as expressões de fome',
        text:
          'Não confunda [[dîner|almoço no Québec]] com [[dîner|jantar na França]]. O significado depende da variedade regional do francês. ' +
          'Outro erro possível é traduzir literalmente estou com fome e escrever [[Je suis faim.|Estou fome.]] ' +
          'A construção correta é [[J’ai faim.|Estou com fome.]] Da mesma maneira, diga [[J’ai soif.|Estou com sede.]], e não utilize o verbo ser ou estar. ' +
          'Também diferencie [[une assiette|um prato, no sentido de recipiente]] de [[un plat|um prato preparado / uma refeição]]. ' +
          'Para expressar uma restrição alimentar, prefira [[Je suis allergique à…|Sou alérgico a…]] ou [[Je ne mange pas de…|Não como…]].'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Descreva hábitos, preferências e experiências gastronômicas',
        text:
          'No TCF Canada, a compreensão oral tem 39 questões em 35 minutos e a expressão oral dura 12 minutos (2 de preparação); no TEF Canada, a compreensão e a expressão oral também são obrigatórias. ' +
          'Na expressão oral e escrita, pratique descrever seus hábitos alimentares, comparar restaurantes, explicar uma receita, justificar preferências e discutir alimentação saudável. ' +
          'Organize suas respostas mencionando os ingredientes, o modo de preparo, o sabor e suas razões para escolher determinado alimento. ' +
          'Também saiba perguntar sobre alergias, ingredientes e opções disponíveis, utilizando um tom educado e natural.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O Usito confirma [[déjeuner|café da manhã]], [[dîner|almoço]] e [[souper|jantar]] como usos do Québec. O OQLF confirma [[poutine|poutine]] (batatas fritas, queijo em grãos e molho quente) e [[casse-croûte|restaurante de refeições rápidas]] como termo do Québec e do Canadá. ' +
          'Os sites do Governo do Québec sobre alergias alimentares existem e tratam de alérgenos e da gestão por comerciantes. O FEI e o Le français des affaires confirmam as provas orais. ' +
          'Não têm fonte confirmada: os verbos de cozinha, os adjetivos de sabor, [[une collation|um lanche]], [[un goûter|um lanche da tarde]], [[un repas-partage|uma refeição compartilhada]], os diálogos e a dica de treino. ' +
          'Esses pontos são recursos pedagógicos, não regras oficiais das provas.'
      }
    ]
  },

  fr: {
    title: 'L’alimentation et la gastronomie',
    summary:
      'Apprenez à parler des aliments, des repas, des habitudes alimentaires, de la préparation des plats et des expériences gastronomiques en français. ' +
      'Découvrez les particularités des noms des repas au Québec, le vocabulaire des restaurants et les expressions utiles pour commander, décrire des saveurs et signaler des restrictions alimentaires.',
    blocks: [
      { type: 'heading', text: 'Les aliments et les catégories' },
      {
        type: 'paragraph',
        text:
          'Pour parler d’alimentation, il est important de connaître les principales catégories d’aliments : les fruits, les légumes, les produits laitiers, la viande, le poisson, les céréales et les légumineuses. ' +
          'Parmi les autres termes fréquents, on trouve le pain, le fromage, les œufs, le lait, le beurre, le riz, les pâtes alimentaires et les épices. ' +
          'Pour décrire les habitudes alimentaires, utilisez une alimentation équilibrée, les aliments frais, les produits biologiques et les produits locaux.'
      },
      { type: 'heading', text: 'Les repas au Québec et en France' },
      {
        type: 'table',
        headers: ['Moment', 'Français du Québec', 'Français de France'],
        rows: [
            [
              'Matin',
              'le déjeuner',
              'le petit-déjeuner'
            ],
            [
              'Midi',
              'le dîner',
              'le déjeuner'
            ],
            [
              'Soir',
              'le souper',
              'le dîner'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Cette différence est particulièrement importante au Canada. ' +
          'Au Québec, on utilise normalement déjeuner pour le repas du matin, dîner pour le repas du midi et souper pour le repas du soir. ' +
          'En France, la séquence habituelle est petit-déjeuner, déjeuner et dîner. ' +
          'Pour parler des autres repas et des différentes occasions, utilisez un repas, une collation, un goûter et un repas-partage.'
      },
      {
        type: 'paragraph',
        text:
          'En cuisine, certains verbes essentiels sont préparer, cuisiner, faire cuire, faire bouillir, faire frire, faire griller, assaisonner et mélanger. ' +
          'Pour décrire les saveurs et les textures, utilisez sucré, salé, amer, acide, épicé, croquant, crémeux et tendre.'
      },
      {
        type: 'paragraph',
        text:
          'La gastronomie fait également partie de l’identité culturelle du Québec. ' +
          'Un plat bien connu est la poutine, préparée avec des frites, du fromage en grains et de la sauce chaude. ' +
          'Un autre terme régional est un casse-croûte, un petit restaurant généralement spécialisé dans les repas rapides et les plats simples servis au comptoir ou à emporter. ' +
          'Pour parler des achats et des restaurants, apprenez également faire l’épicerie, la liste d’épicerie, commander un plat, les ingrédients et les spécialités régionales.'
      },
      { type: 'heading', text: 'Exemple en contexte : au restaurant' },
      {
        type: 'paragraph',
        text:
          'Bonjour, avez-vous une table pour deux ? Nous aimerions consulter le menu, s’il vous plaît. ' +
          'Est-ce que la poutine contient des ingrédients d’origine animale autres que le fromage ? ' +
          'Je suis allergique aux arachides, pourriez-vous vérifier les ingrédients ? Je vais prendre le poisson grillé avec des légumes, et une soupe en entrée. ' +
          'Pourriez-vous nous apporter l’addition, s’il vous plaît ?'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux noms des repas et aux expressions de faim',
        text:
          'Ne confondez pas dîner, qui désigne le repas du midi au Québec, avec dîner, qui désigne le repas du soir en France. ' +
          'Le sens dépend de la variété régionale du français. ' +
          'Une autre erreur fréquente chez les lusophones consiste à traduire littéralement estou com fome et à écrire Je suis faim. ' +
          'La construction correcte est J’ai faim. De la même manière, dites J’ai soif, et n’utilisez pas le verbe être. ' +
          'Faites également la différence entre une assiette, qui désigne le récipient, et un plat, qui désigne une préparation culinaire ou un repas. ' +
          'Pour signaler une restriction alimentaire, préférez Je suis allergique à… ou Je ne mange pas de…'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Décrivez vos habitudes, vos préférences et vos expériences culinaires',
        text:
          'Au TCF Canada, la compréhension orale comprend 39 questions en 35 minutes et l’expression orale dure 12 minutes (dont 2 de préparation) ; au TEF Canada, la compréhension et l’expression orales sont aussi obligatoires. ' +
          'En expression orale et écrite, entraînez-vous à décrire vos habitudes alimentaires, à comparer des restaurants, à expliquer une recette, à justifier vos préférences et à discuter de l’alimentation équilibrée. ' +
          'Organisez vos réponses en mentionnant les ingrédients, le mode de préparation, le goût et les raisons de choisir un aliment particulier. ' +
          'Apprenez également à poser des questions sur les allergies, les ingrédients et les options disponibles, en utilisant un ton poli et naturel.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Usito confirme déjeuner, dîner et souper comme usages du Québec. L’OQLF confirme poutine (pommes de terre frites, fromage en grains et sauce chaude) et casse-croûte comme terme du Québec et du Canada. ' +
          'Les sites du gouvernement du Québec sur les allergies alimentaires existent et portent sur les allergènes et la gestion par les commerçants. Le FEI et Le français des affaires confirment les épreuves orales. ' +
          'Ne sont pas confirmés par une source : les verbes de cuisine, les adjectifs de goût, collation, goûter, repas-partage, les dialogues et le conseil d’entraînement. ' +
          'Ces points sont des ressources pédagogiques et non des règles officielles des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Déjeuner — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/d%C3%A9jeuner_2/lexies'
    },
    {
      title: 'Dîner — Usito, Université de Sherbrooke',
      url: 'https://examen-francais-quebec.usito.usherbrooke.ca/d%C3%A9finitions/d%C3%AEner_1'
    },
    {
      title: 'Souper — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/souper_1/lexies'
    },
    {
      title: 'Poutine — Grand dictionnaire terminologique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8361736/poutine'
    },
    {
      title: 'Casse-croûte — Grand dictionnaire terminologique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/2298340/casse-croute'
    },
    {
      title: 'Allergies alimentaires — Gouvernement du Québec',
      url: 'https://www.quebec.ca/sante/alimentation/allergies-alimentaires'
    },
    {
      title: 'Gestion des allergies alimentaires par l’industrie et les commerçants — Gouvernement du Québec',
      url: 'https://www.quebec.ca/sante/alimentation/allergies-alimentaires/gestion-allergies-alimentaires-industrie-commercants'
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
