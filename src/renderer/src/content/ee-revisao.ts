import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-revisao',

  pt: {
    title: 'Revisão final: concordância, acentuação e ortografia em francês',
    summary:
      'Revise os principais pontos gramaticais e ortográficos que influenciam a qualidade da expressão escrita em francês. ' +
      'Você vai praticar a concordância de gênero e número, a conjugação verbal, os particípios passados, os acentos, os homófonos e os erros frequentes de ortografia, desenvolvendo uma rotina de revisão adequada ao nível B2.',
    blocks: [
      { type: 'heading', text: '1. Por que revisar antes de entregar?' },
      {
        type: 'paragraph',
        text:
          'Uma boa redação não depende apenas de ideias interessantes e vocabulário variado. ' +
          'Pequenos erros de concordância, acentuação ou ortografia podem comprometer a clareza e a qualidade do texto. ' +
          'Antes de entregar uma produção escrita, revise os elementos básicos: os substantivos, os artigos, os adjetivos, os verbos, os particípios passados e os sinais gráficos. ' +
          'Uma revisão organizada permite identificar erros que passam despercebidos durante a escrita.'
      },
      { type: 'heading', text: '2. Concordância de gênero e número' },
      {
        type: 'paragraph',
        text:
          'Em francês, os artigos e adjetivos geralmente concordam em gênero e número com o substantivo ao qual estão relacionados. ' +
          'O masculino e o feminino, assim como o singular e o plural, precisam estar corretamente representados. ' +
          'Diferentemente do português, algumas formas femininas e plurais possuem alterações na pronúncia, enquanto outras mantêm a mesma pronúncia e mudam apenas na escrita.'
      },
      {
        type: 'table',
        headers: ['Regra', 'Exemplo em francês', 'Explicação'],
        rows: [
            [
              'Masculino singular',
              '[[Un appartement spacieux.|Um apartamento espaçoso.]]',
              'Artigo e adjetivo no masculino singular.'
            ],
            [
              'Feminino singular',
              '[[Une maison spacieuse.|Uma casa espaçosa.]]',
              'Artigo e adjetivo no feminino singular.'
            ],
            [
              'Masculino plural',
              '[[Des appartements spacieux.|Apartamentos espaçosos.]]',
              'Substantivo e adjetivo no plural.'
            ],
            [
              'Feminino plural',
              '[[Des maisons spacieuses.|Casas espaçosas.]]',
              'Substantivo e adjetivo no feminino plural.'
            ],
            [
              'Verbo com sujeito plural',
              '[[Les étudiants travaillent ensemble.|Os estudantes trabalham juntos.]]',
              'O verbo concorda com o sujeito plural.'
            ],
            [
              'Sujeito composto',
              '[[Marie et Lucas sont arrivés tôt.|Marie e Lucas chegaram cedo.]]',
              'Dois sujeitos ligados por et normalmente exigem verbo no plural.'
            ]
        ]
      },
      { type: 'heading', text: '3. Concordância do particípio passado' },
      {
        type: 'paragraph',
        text:
          'O particípio passado exige atenção especial, principalmente nos tempos compostos. Com o auxiliar être, a regra geral é concordar com o sujeito. ' +
          'Com o auxiliar avoir, não existe concordância com o sujeito: o particípio concorda com o complemento direto quando ele aparece antes do verbo. ' +
          'Essa distinção é especialmente importante em textos narrativos e relatos de experiências.'
      },
      {
        type: 'table',
        headers: ['Regra', 'Exemplo em francês', 'Explicação'],
        rows: [
            [
              'Être: masculino singular',
              '[[Il est arrivé.|Ele chegou.]]',
              'Particípio no masculino singular.'
            ],
            [
              'Être: feminino singular',
              '[[Elle est arrivée.|Ela chegou.]]',
              'Particípio no feminino singular.'
            ],
            [
              'Être: plural feminino',
              '[[Elles sont arrivées.|Elas chegaram.]]',
              'Particípio no feminino plural.'
            ],
            [
              'Avoir: complemento depois do verbo',
              '[[J’ai acheté une voiture.|Comprei um carro.]]',
              'O particípio permanece invariável porque o complemento direto aparece depois do verbo.'
            ],
            [
              'Avoir: complemento antes do verbo',
              '[[Les lettres que j’ai écrites.|As cartas que escrevi.]]',
              'O particípio concorda com o complemento direto feminino plural que aparece antes.'
            ]
        ]
      },
      { type: 'heading', text: '4. Acentos e diferenças de significado' },
      {
        type: 'paragraph',
        text:
          'Os acentos fazem parte da ortografia francesa e não devem ser ignorados. ' +
          'Os principais sinais são o [[accent aigu|acento agudo]], o [[accent grave|acento grave]], o [[accent circonflexe|acento circunflexo]] e o [[tréma|trema]]. ' +
          'Eles podem indicar diferenças de pronúncia, distinguir palavras ou diferenciar funções gramaticais. ' +
          'Atenção: as letras maiúsculas também devem conservar os acentos quando necessário.'
      },
      {
        type: 'table',
        headers: ['Formas', 'Diferença', 'Exemplo'],
        rows: [
            [
              '[[a / à|a / à]]',
              'A é uma forma do verbo avoir; à é uma preposição.',
              '[[Il a répondu à la question.|Ele respondeu à pergunta.]]'
            ],
            [
              '[[ou / où|ou / onde]]',
              'Ou indica alternativa; où indica lugar ou tempo.',
              '[[Tu préfères le café ou le thé ?|Você prefere café ou chá?]] [[Où habites-tu ?|Onde você mora?]]'
            ],
            [
              '[[son / sont|seu / são ou estão]]',
              'Son é um possessivo; sont é uma forma do verbo être.',
              '[[Son collègue et ses amis sont ici.|O colega dele e seus amigos estão aqui.]]'
            ],
            [
              '[[é / er|é / ar]]',
              'É pode ser particípio passado; er geralmente indica infinitivo dos verbos do primeiro grupo.',
              '[[J’ai terminé mon travail et je vais rentrer.|Terminei meu trabalho e vou voltar para casa.]]'
            ],
            [
              '[[a / â|a / â]]',
              'O circunflexo pode distinguir palavras de significado diferente.',
              '[[La tache est sur la manche.|A mancha está na manga.]] [[La tâche est difficile.|A tarefa é difícil.]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Acentuação nas maiúsculas: não retire os acentos apenas porque uma palavra está escrita em letras maiúsculas. ' +
          'Por exemplo, [[ÉCOLE|ESCOLA]], [[À MONTRÉAL|EM MONTREAL]] e [[ÉTUDIANT|ESTUDANTE]] devem conservar os sinais gráficos correspondentes.'
      },
      { type: 'heading', text: '5. Ortografia e erros que merecem atenção' },
      {
        type: 'list',
        items: [
            'Apóstrofos: não esqueça o apóstrofo quando há elisão, como em [[l’école|a escola]], [[j’ai|eu tenho]] ' +
            'e [[s’il vous plaît|por favor]]. O apóstrofo indica que uma vogal foi suprimida.',
            'Consoantes dobradas: confira palavras como [[appeler|chamar]], [[addition|adição]] e [[professionnel|profissional]]. ' +
            'A duplicação das letras faz parte da grafia correta.',
          'Terminações verbais: diferencie [[-er|terminação de infinitivo]] e [[-é|terminação de particípio passado]], especialmente em frases com auxiliares.',
          'Feminino e plural: não esqueça as terminações escritas em adjetivos e substantivos, mesmo quando a pronúncia não muda.',
          'Palavras homófonas: confira se palavras com pronúncia semelhante estão sendo utilizadas com a grafia e a função gramatical corretas.',
          'Acentos e cedilha: revise palavras como [[français|francês]], [[garçon|garoto]], [[électricité|eletricidade]] e [[événement|acontecimento]].'
        ]
      },
      { type: 'heading', text: '6. Armadilhas comuns para brasileiros' },
      {
        type: 'list',
        items: [
          'Deixar de marcar o feminino porque o adjetivo parece igual ao masculino na pronúncia. A diferença pode existir somente na escrita.',
          'Conjugar o verbo no singular porque o substantivo mais próximo está no singular, ignorando um sujeito composto.',
          'Fazer concordância automática do particípio passado com o sujeito depois de avoir. A regra geral depende da posição do complemento direto.',
          'Confundir [[a|forma do verbo ter]] com [[à|preposição]], ou [[ou|ou]] com [[où|onde]].',
          'Esquecer os acentos nas letras maiúsculas, especialmente em títulos e nomes de lugares.',
          'Revisar apenas os erros de vocabulário e ignorar a estrutura gramatical das frases.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confie apenas na semelhança com o português',
        text:
          'O português pode induzir você a utilizar estruturas que parecem corretas, mas não correspondem às regras francesas. ' +
          'Por exemplo, [[Les informations que j’ai reçues.|As informações que recebi.]] ' +
          'exige o feminino plural no particípio porque o complemento direto aparece antes do verbo. ' +
          'Já em [[J’ai reçu les informations.|Recebi as informações.]], o particípio permanece invariável. Também não confunda [[demander|pedir ou perguntar]] ' +
          'com demandar, nem [[attendre|esperar]] com atender. Revise a função gramatical e o significado de cada palavra dentro da frase.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Checklist final antes de entregar sua redação',
        text:
          'Faça uma revisão em etapas. Primeiro, confira os substantivos, os artigos e os adjetivos, verificando gênero e número. ' +
          'Depois, analise os sujeitos e as conjugações verbais. Em seguida, confira os auxiliares être e avoir e a concordância dos particípios passados. ' +
          'Por último, procure erros de acentuação, apóstrofos, letras dobradas, homófonos e pontuação. ' +
          'Não altere uma frase correta apenas porque ela parece diferente do português. ' +
          'No TEF Canada e no TCF Canada, a precisão gramatical, a ortografia, a clareza e a coerência contribuem para a qualidade da produção escrita. ' +
          'Desenvolva o hábito de revisar cada texto com esse procedimento até que ele se torne automático.'
      }
    ]
  },

  fr: {
    title: 'Révision : accords, accents et orthographe',
    summary:
      'Révisez les principaux points grammaticaux et orthographiques qui influencent la qualité de l’expression écrite en français. ' +
      'Vous pratiquerez les accords en genre et en nombre, la conjugaison, les participes passés, les accents, les homophones et les erreurs orthographiques fréquentes afin de développer une méthode de relecture adaptée au niveau B2.',
    blocks: [
      { type: 'heading', text: '1. Pourquoi relire avant de remettre son texte ?' },
      {
        type: 'paragraph',
        text:
          'Une bonne rédaction ne dépend pas uniquement d’idées intéressantes et d’un vocabulaire varié. ' +
          'De petites erreurs d’accord, d’accentuation ou d’orthographe peuvent nuire à la clarté et à la qualité du texte. ' +
          'Avant de remettre une production écrite, révisez les éléments fondamentaux : les noms, les articles, les adjectifs, les verbes, les participes passés et les signes graphiques. ' +
          'Une relecture organisée permet de repérer des erreurs qui passent inaperçues pendant la rédaction.'
      },
      { type: 'heading', text: '2. Les accords en genre et en nombre' },
      {
        type: 'paragraph',
        text:
          'En français, les articles et les adjectifs s’accordent généralement en genre et en nombre avec le nom auquel ils se rapportent. ' +
          'Le masculin et le féminin, ainsi que le singulier et le pluriel, doivent être correctement représentés. ' +
          'Contrairement au portugais, certaines formes féminines et plurielles présentent des changements de prononciation, tandis que d’autres conservent la même prononciation et changent uniquement à l’écrit.'
      },
      {
        type: 'table',
        headers: ['Règle', 'Exemple en français', 'Explication'],
        rows: [
            [
              'Masculin singulier',
              'Un appartement spacieux.',
              'Article et adjectif au masculin singulier.'
            ],
            [
              'Féminin singulier',
              'Une maison spacieuse.',
              'Article et adjectif au féminin singulier.'
            ],
            [
              'Masculin pluriel',
              'Des appartements spacieux.',
              'Nom et adjectif au pluriel.'
            ],
            [
              'Féminin pluriel',
              'Des maisons spacieuses.',
              'Nom et adjectif au féminin pluriel.'
            ],
            [
              'Verbe avec un sujet pluriel',
              'Les étudiants travaillent ensemble.',
              'Le verbe s’accorde avec le sujet pluriel.'
            ],
            [
              'Sujet composé',
              'Marie et Lucas sont arrivés tôt.',
              'Deux sujets reliés par et exigent normalement un verbe au pluriel.'
            ]
        ]
      },
      { type: 'heading', text: '3. L’accord du participe passé' },
      {
        type: 'paragraph',
        text:
          'Le participe passé demande une attention particulière, surtout dans les temps composés. ' +
          'Avec l’auxiliaire être, la règle générale consiste à accorder le participe avec le sujet. ' +
          'Avec l’auxiliaire avoir, il n’y a pas d’accord avec le sujet : le participe s’accorde avec le complément direct lorsque celui-ci est placé avant le verbe. ' +
          'Cette distinction est particulièrement importante dans les récits et les comptes rendus d’expérience.'
      },
      {
        type: 'table',
        headers: ['Règle', 'Exemple en français', 'Explication'],
        rows: [
            [
              'Être : masculin singulier',
              'Il est arrivé.',
              'Participe au masculin singulier.'
            ],
            [
              'Être : féminin singulier',
              'Elle est arrivée.',
              'Participe au féminin singulier.'
            ],
            [
              'Être : féminin pluriel',
              'Elles sont arrivées.',
              'Participe au féminin pluriel.'
            ],
            [
              'Avoir : complément après le verbe',
              'J’ai acheté une voiture.',
              'Le participe reste invariable parce que le complément direct est placé après le verbe.'
            ],
            [
              'Avoir : complément avant le verbe',
              'Les lettres que j’ai écrites.',
              'Le participe s’accorde avec le complément direct féminin pluriel placé avant le verbe.'
            ]
        ]
      },
      { type: 'heading', text: '4. Les accents et les différences de sens' },
      {
        type: 'paragraph',
        text:
          'Les accents font partie intégrante de l’orthographe française et ne doivent pas être négligés. ' +
          'Les principaux signes sont l’accent aigu, l’accent grave, l’accent circonflexe et le tréma. ' +
          'Ils peuvent indiquer des différences de prononciation, distinguer des mots ou différencier des fonctions grammaticales. ' +
          'Attention : les lettres majuscules doivent également conserver leurs accents lorsque cela est nécessaire.'
      },
      {
        type: 'table',
        headers: ['Formes', 'Différence', 'Exemple'],
        rows: [
            [
              'a / à',
              'A est une forme du verbe avoir ; à est une préposition.',
              'Il a répondu à la question.'
            ],
            [
              'ou / où',
              'Ou indique une alternative ; où indique un lieu ou un moment.',
              'Tu préfères le café ou le thé ? Où habites-tu ?'
            ],
            [
              'son / sont',
              'Son est un déterminant possessif ; sont est une forme du verbe être.',
              'Son collègue et ses amis sont ici.'
            ],
            [
              'é / er',
              'É peut être un participe passé ; er indique généralement l’infinitif des verbes du premier groupe.',
              'J’ai terminé mon travail et je vais rentrer.'
            ],
            [
              'a / â',
              'L’accent circonflexe peut distinguer des mots de sens différent.',
              'La tache est sur la manche. La tâche est difficile.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Les accents sur les majuscules : ne supprimez pas les accents simplement parce qu’un mot est écrit en lettres majuscules. ' +
          'Par exemple, ÉCOLE, À MONTRÉAL et ÉTUDIANT doivent conserver leurs signes graphiques.'
      },
      { type: 'heading', text: '5. Orthographe et erreurs à surveiller' },
      {
        type: 'list',
        items: [
          'Apostrophes : n’oubliez pas l’apostrophe lorsqu’il y a élision, comme dans l’école, j’ai et s’il vous plaît. L’apostrophe indique qu’une voyelle a été supprimée.',
          'Consonnes doubles : vérifiez des mots comme appeler, addition et professionnel. Le doublement des lettres fait partie de l’orthographe correcte.',
          'Terminaisons verbales : distinguez -er, terminaison de l’infinitif, et -é, terminaison du participe passé, particulièrement dans les phrases avec un auxiliaire.',
          'Féminin et pluriel : n’oubliez pas les terminaisons écrites des adjectifs et des noms, même lorsque la prononciation ne change pas.',
          'Homophones : vérifiez que les mots de prononciation similaire sont employés avec la bonne orthographe et la bonne fonction grammaticale.',
          'Accents et cédille : révisez des mots comme français, garçon, électricité et événement.'
        ]
      },
      { type: 'heading', text: '6. Pièges fréquents pour les lusophones' },
      {
        type: 'list',
        items: [
          'Oublier la marque du féminin parce que l’adjectif semble identique au masculin à l’oral. La différence peut exister uniquement à l’écrit.',
          'Conjuguer le verbe au singulier parce que le nom le plus proche est au singulier, sans tenir compte d’un sujet composé.',
          'Accorder automatiquement le participe passé avec le sujet après avoir. La règle générale dépend de la position du complément direct.',
          'Confondre a et à, ou ou et où.',
          'Oublier les accents sur les lettres majuscules, notamment dans les titres et les noms de lieux.',
          'Ne vérifier que les erreurs de vocabulaire et négliger la structure grammaticale des phrases.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne vous fiez pas uniquement aux ressemblances avec le portugais',
        text:
          'Le portugais peut vous inciter à utiliser des constructions qui semblent correctes, mais qui ne respectent pas les règles du français. ' +
          'Par exemple, « Les informations que j’ai reçues. » exige le féminin pluriel dans le participe parce que le complément direct est placé avant le verbe. ' +
          'En revanche, dans « J’ai reçu les informations. », le participe reste invariable. ' +
          'Ne confondez pas non plus « demander », qui signifie solliciter ou poser une question, avec le verbe portugais demandar, ni « attendre », qui signifie patienter, avec atender. ' +
          'Vérifiez la fonction grammaticale et le sens de chaque mot dans la phrase.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Liste de vérification avant de remettre votre rédaction',
        text:
          'Procédez par étapes. Commencez par vérifier les noms, les articles et les adjectifs en contrôlant le genre et le nombre. ' +
          'Examinez ensuite les sujets et les conjugaisons verbales. Vérifiez les auxiliaires être et avoir ainsi que les accords des participes passés. ' +
          'Enfin, recherchez les erreurs d’accentuation, d’apostrophe, de consonnes doubles, d’homophones et de ponctuation. ' +
          'Ne modifiez pas une phrase correcte simplement parce qu’elle semble différente du portugais. ' +
          'Au TEF Canada et au TCF Canada, la précision grammaticale, l’orthographe, la clarté et la cohérence contribuent à la qualité de la production écrite. ' +
          'Prenez l’habitude de relire chaque texte selon cette méthode jusqu’à ce qu’elle devienne automatique.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Accord du participe passé employé avec l’auxiliaire être – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21547/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-etre/accord-du-participe-passe-employe-avec-lauxiliaire-etre'
    },
    {
      title: 'Accord du participe passé employé avec l’auxiliaire avoir – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21546/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-avoir/accord-du-participe-passe-employe-avec-lauxiliaire-avoir'
    },
    {
      title: 'Les homophones a et à – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22599/la-grammaire/les-homophones-grammaticaux/les-homophones-a-et-a'
    },
    {
      title: 'Les homophones lexicaux et grammaticaux – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22645/lorthographe/homophones-lexicaux/les-homophones-lexicaux-et-grammaticaux'
    },
    {
      title: 'Accents, trémas et cédilles aux lettres majuscules – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21438/la-typographie/majuscules/regles-generales-demploi-de-la-majuscule/accents-tremas-et-cedilles-aux-lettres-majuscules'
    },
    {
      title: 'Le pluriel des adjectifs – Alloprof',
      url: 'https://www.alloprof.qc.ca/fr/eleves/bv/francais/le-pluriel-des-adjectifs-f1502'
    }
  ]
}

export default content
