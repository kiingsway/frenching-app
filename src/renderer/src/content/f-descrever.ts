import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-descrever',

  pt: {
    title: 'Como descrever pessoas, lugares e objetos em francês',
    summary:
      'Aprenda a descrever características físicas, personalidade, aparência, localização, ambientes e propriedades de objetos utilizando adjetivos e estruturas comuns do francês. ' +
      'Desenvolva descrições mais completas, naturais e organizadas, prestando atenção à concordância e à posição dos adjetivos.',
    blocks: [
      { type: 'heading', text: '1. Estrutura básica de uma descrição' },
      {
        type: 'paragraph',
        text:
          'Para descrever uma pessoa, um lugar ou um objeto, você pode utilizar diferentes estruturas. O verbo [[être|ser / estar]] ' +
          'apresenta características, [[avoir|ter]] indica características ou elementos que alguém possui, [[porter|usar / vestir]] ' +
          'descreve roupas e acessórios, e [[sembler|parecer]] expressa uma impressão ou percepção. ' +
          'Combine essas estruturas com adjetivos para construir descrições mais detalhadas.'
      },
      {
        type: 'table',
        headers: ['Estrutura', 'Exemplo', 'Uso'],
        rows: [
          [
            '[[être|ser / estar]] + adjetivo',
            '[[Il est grand.|Ele é alto.]]',
            'Característica física'
          ],
          [
            '[[avoir|ter]] + substantivo',
            '[[Elle a les cheveux longs.|Ela tem cabelos compridos.]]',
            'Aparência física'
          ],
          [
            '[[porter|usar / vestir]] + substantivo',
            '[[Il porte des lunettes.|Ele usa óculos.]]',
            'Roupas e acessórios'
          ],
          [
            '[[sembler|parecer]] + adjetivo',
            '[[Elle semble sympathique.|Ela parece simpática.]]',
            'Impressão pessoal'
          ],
          [
            '[[être|ser / estar]] + adjetivo',
            '[[Le quartier est calme.|O bairro é tranquilo.]]',
            'Característica de um lugar'
          ],
          [
            '[[être|ser / estar]] + adjetivo',
            '[[Cet objet est fragile.|Este objeto é frágil.]]',
            'Propriedade de um objeto'
          ]
        ]
      },
      { type: 'heading', text: '2. Descrever pessoas: aparência e personalidade' },
      {
        type: 'paragraph',
        text:
          'Para descrever alguém, combine características físicas, personalidade, idade aproximada, roupas e comportamento. ' +
          'Evite apresentar apenas uma característica: acrescente detalhes que ajudem o interlocutor a imaginar a pessoa. ' +
          'Os adjetivos devem concordar em gênero e número com o substantivo ou sujeito que caracterizam.'
      },
      {
        type: 'table',
        headers: ['Francês', 'Categoria'],
        rows: [
          ['[[grand / grande|alto / alta]]', 'Característica física: altura'],
          ['[[mince|magro / magra]]', 'Característica física: constituição'],
          ['[[âgé / âgée|idoso / idosa]]', 'Característica física: idade'],
          ['[[souriant / souriante|sorridente]]', 'Aparência: expressão'],
          ['[[brun / brune|castanho / castanha]]', 'Aparência: cor do cabelo'],
          ['[[réservé / réservée|reservado / reservada]]', 'Personalidade: comportamento'],
          ['[[généreux / généreuse|generoso / generosa]]', 'Personalidade: generosidade'],
          ['[[dynamique|dinâmico / dinâmica]]', 'Personalidade: energia'],
          ['[[fiable|confiável]]', 'Personalidade: confiança'],
          ['[[sociable|sociável]]', 'Personalidade: sociabilidade']
        ]
      },
      { type: 'paragraph', text: 'Exemplos de descrições de pessoas:' },
      {
        type: 'paragraph',
        text:
          '[[Mon collègue est grand, mince et toujours souriant.|Meu colega é alto, magro e está sempre sorrindo.]] ' +
          '[[Il a les cheveux bruns et les yeux verts.|Ele tem cabelos castanhos e olhos verdes.]] ' +
          '[[Il est sociable, généreux et très fiable.|Ele é sociável, generoso e muito confiável.]] ' +
          '[[Il porte souvent des vêtements simples et confortables.|Ele costuma usar roupas simples e confortáveis.]]'
      },
      { type: 'heading', text: '3. Descrever lugares e ambientes' },
      {
        type: 'paragraph',
        text:
          'Para descrever um lugar, apresente sua localização, tamanho, ambiente, características e serviços disponíveis nas proximidades. ' +
          'No Canadá, esse vocabulário é especialmente útil para falar sobre bairros, moradias, cidades e locais de trabalho.'
      },
      {
        type: 'table',
        headers: ['Francês', 'Contexto'],
        rows: [
          ['[[un quartier calme|um bairro tranquilo]]', 'Ambiente'],
          ['[[un quartier animé|um bairro movimentado]]', 'Ambiente'],
          ['[[un endroit spacieux|um lugar espaçoso]]', 'Tamanho'],
          ['[[un logement bien situé|uma moradia bem localizada]]', 'Localização'],
          ['[[une rue bruyante|uma rua barulhenta]]', 'Ambiente'],
          ['[[un parc verdoyant|um parque arborizado]]', 'Paisagem'],
          ['[[à proximité du métro|perto do metrô]]', 'Localização'],
          ['[[au centre-ville|no centro da cidade]]', 'Localização'],
          ['[[une vue magnifique|uma vista magnífica]]', 'Paisagem'],
          ['[[les commerces de proximité|o comércio local]]', 'Infraestrutura']
        ]
      },
      { type: 'paragraph', text: 'Exemplo de descrição de um lugar:' },
      {
        type: 'paragraph',
        text:
          '[[J’habite dans un quartier calme de Toronto.|Moro em um bairro tranquilo de Toronto.]] ' +
          '[[Il y a plusieurs parcs et commerces de proximité dans le secteur.|Há vários parques e estabelecimentos comerciais nas proximidades.]] ' +
          '[[Le quartier est bien desservi par les transports en commun.|O bairro é bem atendido pelo transporte público.]] ' +
          '[[C’est un endroit agréable où il fait bon vivre.|É um lugar agradável onde é bom viver.]]'
      },
      { type: 'heading', text: '4. Descrever objetos: características e materiais' },
      {
        type: 'paragraph',
        text:
          'Para apresentar um objeto, informe seu tamanho, formato, cor, material, estado de conservação e finalidade. ' +
          'Você pode utilizar adjetivos ou construções com [[être fait de|ser feito de]] e [[servir à|servir para]]. ' +
          'Essas estruturas são úteis para descrever produtos, móveis, equipamentos e itens pessoais.'
      },
      {
        type: 'table',
        headers: ['Francês', 'Categoria'],
        rows: [
          ['[[léger / légère|leve]]', 'Característica: peso'],
          ['[[lourd / lourde|pesado / pesada]]', 'Característica: peso'],
          ['[[solide|sólido / resistente]]', 'Qualidade: resistência'],
          ['[[fragile|frágil]]', 'Qualidade: fragilidade'],
          ['[[pratique|prático]]', 'Funcionalidade'],
          ['[[neuf / neuve|novo / nova]]', 'Estado'],
          ['[[en bois|de madeira]]', 'Material'],
          ['[[en métal|de metal]]', 'Material'],
          ['[[en verre|de vidro]]', 'Material'],
          ['[[en plastique|de plástico]]', 'Material']
        ]
      },
      { type: 'paragraph', text: 'Exemplos de descrição de objetos:' },
      {
        type: 'paragraph',
        text:
          '[[Cette table est en bois et possède quatre pieds.|Esta mesa é de madeira e possui quatro pés.]] ' +
          '[[Ce téléphone est léger, mais son écran est fragile.|Este celular é leve, mas sua tela é frágil.]] ' +
          '[[Cet appareil sert à mesurer la température.|Este aparelho serve para medir a temperatura.]]'
      },
      { type: 'heading', text: '5. Posição dos adjetivos na frase' },
      {
        type: 'paragraph',
        text:
          'Em francês, muitos adjetivos aparecem depois do substantivo, mas alguns adjetivos comuns são colocados antes. ' +
          'A posição pode influenciar a naturalidade da expressão e, em alguns casos, o significado. ' +
          'Independentemente da posição, o adjetivo normalmente concorda em gênero e número com o substantivo que caracteriza.'
      },
      {
        type: 'table',
        headers: ['Posição', 'Exemplo', 'Uso'],
        rows: [
          ['Antes do substantivo', '[[Un petit appartement.|Um apartamento pequeno.]]', 'Tamanho'],
          ['Antes do substantivo', '[[Une belle maison.|Uma casa bonita.]]', 'Aparência'],
          ['Antes do substantivo', '[[Un vieux bâtiment.|Um prédio antigo.]]', 'Idade'],
          ['Depois do substantivo', '[[Une rue tranquille.|Uma rua tranquila.]]', 'Característica'],
          ['Depois do substantivo', '[[Un objet pratique.|Um objeto prático.]]', 'Funcionalidade'],
          ['Depois do substantivo', '[[Une personne généreuse.|Uma pessoa generosa.]]', 'Personalidade']
        ]
      },
      { type: 'heading', text: '6. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a concordância e com o verbo escolhido',
        text:
          'O erro mais comum é esquecer a concordância, porque em francês o -s do plural quase nunca se ouve. ' +
          'Diga [[Une femme intelligente.|Uma mulher inteligente.]] e [[Des hommes intelligents.|Homens inteligentes.]] ' +
          'Outro erro é escolher o verbo errado: traços de personalidade levam [[être|ser / estar]], como em [[Elle est sympathique.|Ela é simpática.]] ' +
          'Já cabelos e olhos levam [[avoir|ter]] com artigo definido, como em [[Elle a les cheveux longs.|Ela tem cabelos compridos.]]'
      },
      {
        type: 'list',
        items: [
          'Não confunda características físicas com personalidade. [[Il est grand.|Ele é alto.]] descreve a aparência; [[Il est généreux.|Ele é generoso.]] descreve a personalidade.',
          'Não esqueça o feminino: [[un homme réservé|um homem reservado]] e [[une femme réservée|uma mulher reservada]].',
          'Não esqueça o plural: [[des maisons anciennes|casas antigas]] e [[des objets fragiles|objetos frágeis]].',
          'Não coloque todos os adjetivos depois do substantivo. Compare [[un petit appartement|um apartamento pequeno]] e [[un appartement spacieux|um apartamento espaçoso]].',
          'Atenção: alguns adjetivos mudam de sentido conforme a posição. Compare [[un grand homme|um grande homem]] e [[un homme grand|um homem alto]], ou [[un ancien collègue|um ex-colega]] e [[un bâtiment ancien|um prédio antigo]].',
          'Evite descrições excessivamente genéricas. Em vez de dizer apenas [[C’est un bel endroit.|É um lugar bonito.]], acrescente informações sobre localização, ambiente e características.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique descrições completas de pessoas, moradias, bairros, cidades, objetos e situações cotidianas. ' +
          'Na expressão oral, organize sua descrição começando pelas características principais e acrescentando detalhes e impressões pessoais. ' +
          'Na expressão escrita, preste atenção à concordância dos adjetivos e à posição natural das palavras. ' +
          'Para buscar o nível B2, vá além de uma lista de características: compare elementos, justifique suas impressões e explique por que determinado lugar, pessoa ou objeto se destaca.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam que o adjetivo concorda em gênero e número com o substantivo ou o sujeito, que pode vir antes ou depois do substantivo conforme o caso, ' +
          'e que verbos como [[être|ser / estar]] e [[sembler|parecer]] ligam o adjetivo ao sujeito. ' +
          'Não têm fonte as listas de vocabulário, a divisão dos adjetivos entre antes e depois do substantivo, os exemplos de mudança de sentido, ' +
          'as construções com [[avoir|ter]], [[porter|usar / vestir]], [[être fait de|ser feito de]] e [[servir à|servir para]], e os conselhos para a prova, incluindo o nível B2. ' +
          'Esses pontos são material didático, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Décrire des personnes, des lieux et des objets',
    summary:
      'Apprenez à décrire les caractéristiques physiques, la personnalité, l’apparence, la localisation, les environnements et les propriétés des objets à l’aide d’adjectifs et de structures courantes en français. ' +
      'Développez des descriptions plus détaillées, naturelles et structurées, en faisant attention aux accords et à la position des adjectifs.',
    blocks: [
      { type: 'heading', text: '1. La structure de base d’une description' },
      {
        type: 'paragraph',
        text:
          'Pour décrire une personne, un lieu ou un objet, vous pouvez utiliser différentes structures. ' +
          'Le verbe être présente des caractéristiques, avoir indique des caractéristiques ou des éléments que quelqu’un possède, porter décrit les vêtements et les accessoires, et sembler exprime une impression ou une perception. ' +
          'Combinez ces structures avec des adjectifs pour construire des descriptions plus détaillées.'
      },
      {
        type: 'table',
        headers: ['Structure', 'Exemple', 'Utilisation'],
        rows: [
          ['être + adjectif', 'Il est grand.', 'Caractéristique physique'],
          ['avoir + nom', 'Elle a les cheveux longs.', 'Apparence physique'],
          ['porter + nom', 'Il porte des lunettes.', 'Vêtements et accessoires'],
          ['sembler + adjectif', 'Elle semble sympathique.', 'Impression personnelle'],
          ['être + adjectif', 'Le quartier est calme.', 'Caractéristique d’un lieu'],
          ['être + adjectif', 'Cet objet est fragile.', 'Propriété d’un objet']
        ]
      },
      { type: 'heading', text: '2. Décrire les personnes : apparence et personnalité' },
      {
        type: 'paragraph',
        text:
          'Pour décrire quelqu’un, combinez les caractéristiques physiques, la personnalité, l’âge approximatif, les vêtements et le comportement. ' +
          'Évitez de présenter une seule caractéristique : ajoutez des détails qui permettent à votre interlocuteur d’imaginer la personne. ' +
          'Les adjectifs doivent s’accorder en genre et en nombre avec le nom ou le sujet qu’ils caractérisent.'
      },
      {
        type: 'table',
        headers: ['En français', 'Catégorie'],
        rows: [
          ['grand / grande', 'Caractéristique physique : taille'],
          ['mince', 'Caractéristique physique : silhouette'],
          ['âgé / âgée', 'Caractéristique physique : âge'],
          ['souriant / souriante', 'Apparence : expression'],
          ['brun / brune', 'Apparence : couleur des cheveux'],
          ['réservé / réservée', 'Personnalité : comportement'],
          ['généreux / généreuse', 'Personnalité : générosité'],
          ['dynamique', 'Personnalité : énergie'],
          ['fiable', 'Personnalité : confiance'],
          ['sociable', 'Personnalité : sociabilité']
        ]
      },
      { type: 'paragraph', text: 'Exemples de descriptions de personnes :' },
      {
        type: 'paragraph',
        text:
          'Mon collègue est grand, mince et toujours souriant. Il a les cheveux bruns et les yeux verts. ' +
          'Il est sociable, généreux et très fiable. Il porte souvent des vêtements simples et confortables.'
      },
      { type: 'heading', text: '3. Décrire des lieux et des environnements' },
      {
        type: 'paragraph',
        text:
          'Pour décrire un lieu, présentez son emplacement, sa taille, son ambiance, ses caractéristiques et les services disponibles à proximité. ' +
          'Au Canada, ce vocabulaire est particulièrement utile pour parler des quartiers, des logements, des villes et des lieux de travail.'
      },
      {
        type: 'table',
        headers: ['En français', 'Contexte'],
        rows: [
          ['un quartier calme', 'Ambiance'],
          ['un quartier animé', 'Ambiance'],
          ['un endroit spacieux', 'Taille'],
          ['un logement bien situé', 'Localisation'],
          ['une rue bruyante', 'Ambiance'],
          ['un parc verdoyant', 'Paysage'],
          ['à proximité du métro', 'Localisation'],
          ['au centre-ville', 'Localisation'],
          ['une vue magnifique', 'Paysage'],
          ['les commerces de proximité', 'Infrastructures']
        ]
      },
      { type: 'paragraph', text: 'Exemple de description d’un lieu :' },
      {
        type: 'paragraph',
        text:
          'J’habite dans un quartier calme de Toronto. Il y a plusieurs parcs et commerces de proximité dans le secteur. ' +
          'Le quartier est bien desservi par les transports en commun. C’est un endroit agréable où il fait bon vivre.'
      },
      { type: 'heading', text: '4. Décrire des objets : caractéristiques et matériaux' },
      {
        type: 'paragraph',
        text:
          'Pour présenter un objet, indiquez sa taille, sa forme, sa couleur, son matériau, son état et son utilité. ' +
          'Vous pouvez utiliser des adjectifs ou des constructions avec être fait de et servir à. ' +
          'Ces structures sont utiles pour décrire des produits, des meubles, des appareils et des objets personnels.'
      },
      {
        type: 'table',
        headers: ['En français', 'Catégorie'],
        rows: [
          ['léger / légère', 'Caractéristique : poids'],
          ['lourd / lourde', 'Caractéristique : poids'],
          ['solide', 'Qualité : résistance'],
          ['fragile', 'Qualité : fragilité'],
          ['pratique', 'Fonctionnalité'],
          ['neuf / neuve', 'État'],
          ['en bois', 'Matériau'],
          ['en métal', 'Matériau'],
          ['en verre', 'Matériau'],
          ['en plastique', 'Matériau']
        ]
      },
      { type: 'paragraph', text: 'Exemples de descriptions d’objets :' },
      {
        type: 'paragraph',
        text:
          'Cette table est en bois et possède quatre pieds. Ce téléphone est léger, mais son écran est fragile. ' +
          'Cet appareil sert à mesurer la température.'
      },
      { type: 'heading', text: '5. La position des adjectifs dans la phrase' },
      {
        type: 'paragraph',
        text:
          'En français, de nombreux adjectifs se placent après le nom, mais certains adjectifs courants se placent avant. ' +
          'Leur position peut influencer le naturel de l’expression et, dans certains cas, le sens. ' +
          'Quelle que soit leur position, les adjectifs s’accordent généralement en genre et en nombre avec le nom qu’ils caractérisent.'
      },
      {
        type: 'table',
        headers: ['Position', 'Exemple', 'Utilisation'],
        rows: [
          ['Avant le nom', 'Un petit appartement.', 'Taille'],
          ['Avant le nom', 'Une belle maison.', 'Apparence'],
          ['Avant le nom', 'Un vieux bâtiment.', 'Âge'],
          ['Après le nom', 'Une rue tranquille.', 'Caractéristique'],
          ['Après le nom', 'Un objet pratique.', 'Fonctionnalité'],
          ['Après le nom', 'Une personne généreuse.', 'Personnalité']
        ]
      },
      { type: 'heading', text: '6. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à l’accord et au choix du verbe',
        text:
          'L’erreur la plus fréquente est d’oublier l’accord, car en français le -s du pluriel ne s’entend presque jamais. ' +
          'Dites « Une femme intelligente » et « Des hommes intelligents ». ' +
          'Une autre erreur est de choisir le mauvais verbe : les traits de personnalité s’expriment avec être, comme dans « Elle est sympathique ». ' +
          'Les cheveux et les yeux s’expriment avec avoir et l’article défini, comme dans « Elle a les cheveux longs ».'
      },
      {
        type: 'list',
        items: [
          'Ne confondez pas les caractéristiques physiques et la personnalité. « Il est grand » décrit l’apparence ; « Il est généreux » décrit la personnalité.',
          'N’oubliez pas le féminin : « un homme réservé » et « une femme réservée ».',
          'N’oubliez pas le pluriel : « des maisons anciennes » et « des objets fragiles ».',
          'Ne placez pas tous les adjectifs après le nom. Comparez « un petit appartement » et « un appartement spacieux ».',
          'Attention : certains adjectifs changent de sens selon leur position. Comparez « un grand homme » et « un homme grand », ou « un ancien collègue » et « un bâtiment ancien ».',
          'Évitez les descriptions trop générales. Au lieu de dire simplement « C’est un bel endroit », ajoutez des informations sur la localisation, l’ambiance et les caractéristiques.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous à produire des descriptions complètes de personnes, de logements, de quartiers, de villes, d’objets et de situations quotidiennes. ' +
          'À l’expression orale, organisez votre description en commençant par les caractéristiques principales, puis ajoutez des détails et des impressions personnelles. ' +
          'À l’expression écrite, faites attention à l’accord des adjectifs et à la position naturelle des mots. ' +
          'Pour viser le niveau B2, allez au-delà d’une simple liste de caractéristiques : comparez des éléments, justifiez vos impressions et expliquez pourquoi une personne, un lieu ou un objet se distingue.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment que l’adjectif s’accorde en genre et en nombre avec le nom ou le sujet, qu’il peut se placer avant ou après le nom selon le cas, ' +
          'et que des verbes comme être et sembler relient l’adjectif au sujet. ' +
          'Ne sont pas sourcés : les listes de vocabulaire, la répartition des adjectifs entre avant et après le nom, les exemples de changement de sens, ' +
          'les constructions avec avoir, porter, être fait de et servir à, et les conseils pour l’examen, y compris le niveau B2. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – L’adjectif et le groupe adjectival : mode d’emploi',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/index.php?id=24304'
    },
    {
      title: 'OQLF – Accord de l’adjectif attribut du sujet',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23495/la-grammaire/ladjectif/accord-de-ladjectif/accord-de-ladjectif-attribut/accord-de-ladjectif-attribut-du-sujet'
    },
    {
      title: 'OQLF – Les donneurs et les receveurs d’accord',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24307/la-grammaire/la-grammaire-actuelle/les-classes-de-mots-et-les-groupes/les-donneurs-daccord-et-les-receveurs-daccord'
    }
  ]
}

export default content
