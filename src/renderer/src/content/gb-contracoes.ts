import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-contracoes',

  pt: {
    title: 'Contrações e artigos com países e continentes',
    summary:
      'Aprenda a formar as contrações com as preposições à e de e os artigos definidos, utilizando au, aux, du e des. ' +
      'Entenda também como escolher as preposições corretas para indicar destino, localização e origem de países e continentes, com exemplos do Canadá.',
    blocks: [
      { type: 'heading', text: '1. Como funcionam as contrações' },
      {
        type: 'paragraph',
        text:
          'Em francês, as preposições [[à|a]] e [[de|de]] se contraem obrigatoriamente quando aparecem antes dos artigos definidos [[le|o]] e [[les|os / as]]. ' +
          'Essas combinações formam quatro palavras: [[au|ao]], [[aux|aos / às]], [[du|do]] e [[des|dos / das]]. As contrações não acontecem com os artigos [[la|a]] ' +
          'e [[l’|o / a]], que permanecem separados da preposição.'
      },
      {
        type: 'table',
        headers: ['Combinação', 'Forma em francês', 'Explicação'],
        rows: [
            [
              'à + le',
              '[[au|ao / no]]',
              'Contração obrigatória: a + o.'
            ],
            [
              'à + les',
              '[[aux|aos / às / nos]]',
              'Contração obrigatória: a + os / as.'
            ],
            [
              'de + le',
              '[[du|do]]',
              'Contração obrigatória: de + o.'
            ],
            [
              'de + les',
              '[[des|dos / das]]',
              'Contração obrigatória: de + os / as.'
            ],
            [
              'à + la',
              '[[à la|à / na]]',
              'Não ocorre contração.'
            ],
            [
              'de + la',
              '[[de la|da]]',
              'Não ocorre contração.'
            ],
            [
              'à + l’',
              '[[à l’|ao / à / no / na]]',
              'Não ocorre contração; utiliza-se a forma elidida.'
            ],
            [
              'de + l’',
              '[[de l’|do / da]]',
              'Não ocorre contração; utiliza-se a forma elidida.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Atenção: [[du|do]] e [[des|dos / das]] também podem aparecer como artigos partitivos ou indefinidos, sem representar uma contração. ' +
          'Compare [[Je reviens du Canada.|Estou voltando do Canadá.]] com [[Je bois du café.|Estou tomando café.]] No primeiro exemplo, [[du|do]] ' +
          'resulta de [[de + le|de + o]]. No segundo, indica uma quantidade indeterminada de café. ' +
          'Da mesma forma, [[Je reviens des États-Unis.|Estou voltando dos Estados Unidos.]] ' +
          'contém uma contração, enquanto [[J’achète des pommes.|Estou comprando maçãs.]] apresenta um artigo indefinido plural.'
      },
      { type: 'heading', text: '2. Artigos e preposições com países e continentes' },
      {
        type: 'paragraph',
        text:
          'Os nomes de países geralmente possuem um artigo definido quando aparecem como sujeito ou complemento: [[le Canada|o Canadá]], [[la France|a França]] ' +
          'e [[les États-Unis|os Estados Unidos]]. Os continentes também normalmente aparecem com artigo: [[l’Europe|a Europa]], [[l’Afrique|a África]] ' +
          'e [[l’Asie|a Ásia]]. Entretanto, quando indicamos localização ou destino, utilizamos preposições específicas, geralmente sem repetir o artigo.'
      },
      {
        type: 'table',
        headers: ['País ou continente', 'Artigo', 'Destino ou localização', 'Origem'],
        rows: [
            [
              'Canadá',
              '[[le Canada|o Canadá]]',
              '[[au Canada|no Canadá]]',
              '[[du Canada|do Canadá]]'
            ],
            [
              'França',
              '[[la France|a França]]',
              '[[en France|na França]]',
              '[[de France|da França]]'
            ],
            [
              'Estados Unidos',
              '[[les États-Unis|os Estados Unidos]]',
              '[[aux États-Unis|nos Estados Unidos]]',
              '[[des États-Unis|dos Estados Unidos]]'
            ],
            [
              'Irã',
              '[[l’Iran|o Irã]]',
              '[[en Iran|no Irã]]',
              '[[d’Iran|do Irã]]'
            ],
            [
              'Europa',
              '[[l’Europe|a Europa]]',
              '[[en Europe|na Europa]]',
              '[[d’Europe|da Europa]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Para os continentes, utilize normalmente [[en|em]] para indicar localização ou destino e [[de|de]] ou [[d’|de]] ' +
          'para indicar origem: [[en Asie|na Ásia]], [[en Afrique|na África]], [[d’Asie|da Ásia]] e [[d’Afrique|da África]]. ' +
          'Quando o continente aparece como sujeito ou complemento nominal, mantenha o artigo: [[L’Europe est un continent.|A Europa é um continente.]] ' +
          '[[Le Canada fait partie de l’Amérique du Nord.|O Canadá faz parte da América do Norte.]]'
      },
      { type: 'heading', text: '3. Como escolher a preposição correta' },
      {
        type: 'list',
        items: [
            'País feminino: utilize [[en|em]] para destino ou localização e [[de|de]] para origem. Exemplo: [[Je vais en France.|Vou para a França.]] ' +
            '/ [[Je viens de France.|Venho da França.]]',
            'País masculino iniciado por consoante: utilize [[au|no]] para destino ou localização e [[du|do]] para origem. ' +
            'Exemplo: [[Je vais au Brésil.|Vou para o Brasil.]] / [[Je viens du Brésil.|Venho do Brasil.]]',
            'País masculino iniciado por vogal ou h mudo: utilize [[en|em]] para destino ou localização e [[d’|de]] para origem. ' +
            'Exemplo: [[Je vais en Iran.|Vou para o Irã.]] / [[Je viens d’Iran.|Venho do Irã.]]',
            'País com nome no plural: utilize [[aux|nos / nas]] para destino ou localização e [[des|dos / das]] para origem. ' +
            'Exemplo: [[Je vais aux États-Unis.|Vou para os Estados Unidos.]] / [[Je viens des États-Unis.|Venho dos Estados Unidos.]]',
          'País sem artigo: alguns nomes, como Cuba, não utilizam artigo. Exemplo: [[Je vais à Cuba.|Vou a Cuba.]] / [[Je viens de Cuba.|Venho de Cuba.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não escolha a preposição apenas pelo gênero',
        text:
          'Um erro comum é acreditar que todo país masculino exige [[au|no]]. A regra também considera a letra inicial: [[l’Iran|o Irã]] ' +
          'é masculino, mas utilizamos [[en Iran|no Irã]], porque começa com vogal. Outro cuidado: não coloque o artigo novamente depois de [[en|em]]. ' +
          'O correto é [[en France|na França]], e não [[en la France|em a França]].'
      },
      {
        type: 'paragraph',
        text:
          'Exemplos no contexto canadense: [[J’habite au Canada, au Québec.|Moro no Canadá, em Quebec.]] [[Ma sœur habite en Ontario.|Minha irmã mora em Ontário.]] ' +
          '[[Nous revenons du Québec.|Estamos voltando de Quebec.]] [[Ils arrivent des États-Unis.|Eles estão chegando dos Estados Unidos.]] ' +
          'Observe que as preposições também variam conforme o nome da província ou do território.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique especialmente a diferença entre destino, localização e origem. ' +
          'Memorize os exemplos mais frequentes, mas procure entender a lógica do gênero, do número e da letra inicial dos nomes geográficos. ' +
          'Para alcançar maior precisão no nível B2, também saiba distinguir as contrações [[du|do]] e [[des|dos / das]] dos artigos partitivos e indefinidos. ' +
          'Treine essas estruturas em frases completas, tanto na expressão oral quanto na escrita.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A página do OQLF sobre a omissão do determinante confirma que os nomes de países e continentes levam em geral o artigo definido, que alguns países não levam (como Cuba), ' +
          'e que, para indicar origem com de, o artigo some diante de país feminino singular ou masculino começado por vogal (de France, d’Iran, d’Europe) e se mantém diante de masculino começado por consoante e de plural (du Canada, des États-Unis). ' +
          'As quatro páginas do Portal linguistique du Canada listadas não puderam ser abertas por causa de uma verificação de segurança do site: as regras de en, au e aux para destino e localização e a explicação das contrações não foram confirmadas por elas. ' +
          'Nenhuma fonte confirma as recomendações de estudo para o TEF Canada e o TCF Canada, nem a referência ao nível B2: são orientações de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'Les articles contractés et les articles devant les pays et les continents',
    summary:
      'Apprenez à former les contractions avec les prépositions à et de et les articles définis, en utilisant au, aux, du et des. ' +
      'Découvrez également comment choisir les prépositions appropriées pour indiquer la destination, la localisation et l’origine des pays et des continents, avec des exemples du Canada.',
    blocks: [
      { type: 'heading', text: '1. Comment fonctionnent les contractions' },
      {
        type: 'paragraph',
        text:
          'En français, les prépositions à et de se contractent obligatoirement lorsqu’elles sont suivies des articles définis le et les. ' +
          'Ces combinaisons donnent quatre formes : au, aux, du et des. Il n’y a pas de contraction avec les articles la et l’, qui restent séparés de la préposition.'
      },
      {
        type: 'table',
        headers: ['Combinaison', 'Forme en français', 'Explication'],
        rows: [
            [
              'à + le',
              'au',
              'Contraction obligatoire.'
            ],
            [
              'à + les',
              'aux',
              'Contraction obligatoire.'
            ],
            [
              'de + le',
              'du',
              'Contraction obligatoire.'
            ],
            [
              'de + les',
              'des',
              'Contraction obligatoire.'
            ],
            [
              'à + la',
              'à la',
              'Aucune contraction.'
            ],
            [
              'de + la',
              'de la',
              'Aucune contraction.'
            ],
            [
              'à + l’',
              'à l’',
              'Aucune contraction ; on utilise la forme élidée.'
            ],
            [
              'de + l’',
              'de l’',
              'Aucune contraction ; on utilise la forme élidée.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Attention : du et des peuvent également être des articles partitifs ou indéfinis, sans représenter une contraction. ' +
          'Comparez « Je reviens du Canada » et « Je bois du café ». Dans le premier exemple, du résulte de de + le. ' +
          'Dans le deuxième, il indique une quantité indéterminée de café. ' +
          'De la même façon, « Je reviens des États-Unis » contient une contraction, tandis que « J’achète des pommes » présente un article indéfini pluriel.'
      },
      { type: 'heading', text: '2. Articles et prépositions devant les pays et les continents' },
      {
        type: 'paragraph',
        text:
          'Les noms de pays sont généralement accompagnés d’un article défini lorsqu’ils sont employés comme sujets ou comme compléments : le Canada, la France et les États-Unis. ' +
          'Les continents sont également généralement précédés d’un article : l’Europe, l’Afrique et l’Asie. ' +
          'Cependant, pour indiquer une destination ou une localisation, on utilise des prépositions particulières, généralement sans répéter l’article.'
      },
      {
        type: 'table',
        headers: ['Pays ou continent', 'Article', 'Destination ou localisation', 'Origine'],
        rows: [
            [
              'Canada',
              'le Canada',
              'au Canada',
              'du Canada'
            ],
            [
              'France',
              'la France',
              'en France',
              'de France'
            ],
            [
              'États-Unis',
              'les États-Unis',
              'aux États-Unis',
              'des États-Unis'
            ],
            [
              'Iran',
              'l’Iran',
              'en Iran',
              'd’Iran'
            ],
            [
              'Europe',
              'l’Europe',
              'en Europe',
              'd’Europe'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Pour les continents, on utilise généralement en pour indiquer une destination ou une localisation et de ou d’ pour indiquer l’origine : en Asie, en Afrique, d’Asie et d’Afrique. ' +
          'Lorsque le continent est employé comme sujet ou comme complément nominal, on conserve l’article : « L’Europe est un continent. ' +
          '» « Le Canada fait partie de l’Amérique du Nord. »'
      },
      { type: 'heading', text: '3. Comment choisir la bonne préposition' },
      {
        type: 'list',
        items: [
          'Pays féminin : utilisez en pour la destination ou la localisation et de pour l’origine. Exemple : « Je vais en France. » / « Je viens de France. »',
            'Pays masculin commençant par une consonne : utilisez au pour la destination ou la localisation et du pour l’origine. Exemple : « Je vais au Brésil. ' +
            '» / « Je viens du Brésil. »',
            'Pays masculin commençant par une voyelle ou un h muet : utilisez en pour la destination ou la localisation et d’ pour l’origine. Exemple : « Je vais en Iran. ' +
            '» / « Je viens d’Iran. »',
            'Pays dont le nom est au pluriel : utilisez aux pour la destination ou la localisation et des pour l’origine. Exemple : « Je vais aux États-Unis. ' +
            '» / « Je viens des États-Unis. »',
          'Pays sans article : certains noms, comme Cuba, ne prennent pas d’article. Exemple : « Je vais à Cuba. » / « Je viens de Cuba. »'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne choisissez pas la préposition uniquement selon le genre',
        text:
          'Une erreur fréquente consiste à croire que tous les pays masculins exigent au. ' +
          'La règle tient également compte de la lettre initiale : l’Iran est masculin, mais on utilise en Iran parce que le nom commence par une voyelle. ' +
          'Autre précaution : n’ajoutez pas un article après en. La forme correcte est « en France », et non « en la France ».'
      },
      {
        type: 'paragraph',
        text:
          'Exemples dans le contexte canadien : « J’habite au Canada, au Québec. » « Ma sœur habite en Ontario. » « Nous revenons du Québec. ' +
          '» « Ils arrivent des États-Unis. » Observez que les prépositions varient également selon le nom de la province ou du territoire.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous particulièrement à distinguer la destination, la localisation et l’origine. ' +
          'Mémorisez les exemples les plus fréquents, mais cherchez à comprendre la logique du genre, du nombre et de la lettre initiale des noms géographiques. ' +
          'Pour atteindre une meilleure précision au niveau B2, apprenez également à distinguer les contractions du et des des articles partitifs et indéfinis. ' +
          'Entraînez-vous avec des phrases complètes, à l’expression orale comme à l’expression écrite.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La page de l’OQLF sur l’omission du déterminant confirme que les noms de pays et de continents sont généralement précédés de l’article défini, que certains pays n’en prennent pas (comme Cuba), ' +
          'et que, pour marquer l’origine avec de, l’article disparaît devant un pays féminin singulier ou masculin commençant par une voyelle (de France, d’Iran, d’Europe) et se maintient devant un masculin commençant par une consonne et un pluriel (du Canada, des États-Unis). ' +
          'Les quatre pages du Portail linguistique du Canada indiquées n’ont pas pu être ouvertes à cause d’une vérification de sécurité du site : les règles de en, au et aux pour la destination et la localisation et l’explication des contractions ne sont donc pas confirmées par elles. ' +
          'Aucune source ne confirme les recommandations d’étude pour le TEF Canada et le TCF Canada, ni la référence au niveau B2 : ce sont des conseils de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Portail linguistique du Canada – Préposition : à et formes contractées au et aux',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/prepositions-a'
    },
    {
      title: 'Portail linguistique du Canada – Préposition : de et formes contractées du et des',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/preposition-de'
    },
    {
      title: 'Portail linguistique du Canada – Pays : choix des prépositions',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/pays-preposition'
    },
    {
      title: 'Portail linguistique du Canada – Liste des noms de pays : articles, genres et prépositions',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/liste-des-noms-de-pays'
    },
    {
      title: 'Office québécois de la langue française – Omission du déterminant devant un nom de pays et de continent',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23517/la-grammaire/les-determinants/determinants-definis/omission-du-determinant-devant-un-nom-de-pays'
    }
  ]
}

export default content
