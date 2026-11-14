import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-artigos',

  pt: {
    title: 'Artigos definidos, indefinidos e partitivos',
    summary:
      'Em francês quase todo substantivo vem com um artigo, mesmo quando em português não usamos nenhum. ' +
      'Há três famílias: o definido ([[le|o]], [[la|a]], [[les|os / as]]), o indefinido ([[un|um]], [[une|uma]], [[des|uns / umas]]) e o partitivo ([[du|um pouco de]], [[de la|um pouco de]], [[des|uns / umas]]), que não existe em português. [1] ' +
      'Saber qual usar, e quando ele vira [[de|de]], é uma das coisas mais cobradas nas questões de gramática.',
    blocks: [
      { type: 'heading', text: 'As três famílias' },
      {
        type: 'table',
        headers: ['Artigo', 'Masculino', 'Feminino', 'Antes de vogal ou h mudo', 'Plural'],
        rows: [
          ['Definido [1]', '[[le|o]]', '[[la|a]]', '[[l’|o / a]]', '[[les|os / as]]'],
          ['Indefinido', '[[un|um]]', '[[une|uma]]', '[[un|um]] / [[une|uma]]', '[[des|uns / umas]]'],
          ['Partitivo', '[[du|um pouco de]]', '[[de la|um pouco de]]', '[[de l’|um pouco de]]', '[[des|uns / umas]]']
        ]
      },

      { type: 'heading', text: 'Definido: o que é conhecido ou geral' },
      {
        type: 'list',
        items: [
          'Algo específico, que os dois já conhecem: [[Le train de 8 h est en retard.|O trem das 8 h está atrasado.]] [2]',
          'Algo em geral, uma categoria inteira: [[Les Canadiens aiment le hockey.|Os canadenses gostam de hóquei.]] [2]',
          'Depois de verbos de gosto ([[aimer|gostar]], [[adorer|adorar]], [[préférer|preferir]], [[détester|detestar]]): [[J’aime le café.|Gosto de café.]] [1]',
          'Com dias da semana, indica hábito: [[Le lundi, je travaille à la maison.|Às segundas, trabalho em casa.]] [2]',
          'Com países, continentes e línguas: [[la France|a França]], [[le Québec|o Québec]], [[le français|o francês]]. [2] Depois de [[parler|falar]], o artigo da língua é opcional: [[Je parle français.|Falo francês.]] [2]'
        ]
      },

      { type: 'heading', text: 'Indefinido: algo que se pode contar' },
      {
        type: 'paragraph',
        text:
          '[[Un|um]] e [[une|uma]] apresentam algo novo na conversa ou uma unidade entre várias: [[J’ai un rendez-vous à 15 h.|Tenho um compromisso às 15 h.]] [3] ' +
          'No plural, [[des|uns / umas]] é obrigatório, enquanto o português simplesmente omite o artigo: [[J’ai des amis à Montréal.|Tenho amigos em Montreal.]]'
      },

      { type: 'heading', text: 'Partitivo: uma parte de algo que não se conta' },
      {
        type: 'paragraph',
        text:
          'O partitivo indica uma quantidade indeterminada de algo que não se conta (comida, bebida, matéria, qualidades). ' +
          'Em português não usamos artigo nenhum, mas em francês ele é obrigatório: [[Je bois du café le matin.|Bebo café de manhã.]] ' +
          '[[Il faut de la patience.|É preciso paciência.]] [[On a acheté de l’eau.|Compramos água.]] [4]'
      },
      {
        type: 'table',
        headers: ['Frase', 'Sentido'],
        rows: [
          ['[[J’aime le fromage.|Gosto de queijo.]]', 'Gosto de queijo (em geral) [1]'],
          ['[[Je mange du fromage.|Como queijo.]]', 'Como queijo (um pouco, uma quantidade qualquer) [1]'],
          ['[[J’ai acheté un fromage.|Comprei um queijo.]]', 'Comprei um queijo (uma peça inteira) [3]'],
          ['[[Le fromage est sur la table.|O queijo está na mesa.]]', 'O queijo (aquele que já conhecemos) está na mesa [2]']
        ]
      },

      { type: 'heading', text: 'Quando o artigo vira [[de|de]]' },
      {
        type: 'list',
        items: [
          'Depois da negação, [[un|um]], [[une|uma]], [[des|uns / umas]], [[du|um pouco de]], [[de la|um pouco de]] e [[de l’|um pouco de]] normalmente viram [[de|de]] (ou [[d’|de]]): [[Je n’ai pas de voiture.|Não tenho carro.]] [[Il ne boit pas d’alcool.|Ele não bebe álcool.]] [5]',
          'O definido não muda na negação: [[Je n’aime pas le café.|Não gosto de café.]] Continua [[le|o]], porque é gosto em geral. [2]',
          'Com [[être|ser / estar]], o artigo também não muda: [[Ce n’est pas un problème.|Não é um problema.]] [[Ce n’est pas du sucre, c’est du sel.|Não é açúcar, é sal.]]',
          'Depois de expressões de quantidade, usa-se só [[de|de]]: [[beaucoup de travail|muito trabalho]], [[un peu de sucre|um pouco de açúcar]], [[trop de bruit|barulho demais]], [[assez de temps|tempo suficiente]], [[un kilo de pommes|um quilo de maçãs]], [[une bouteille d’eau|uma garrafa de água]]. [3] [4]',
          'Exceções a decorar: [[la plupart des gens|a maioria das pessoas]] e [[bien des fois|muitas vezes]] (aqui fica [[des|des]]).',
          'No plural, [[des|des]] vira [[de|de]] antes de um adjetivo que vem antes do substantivo: [[de bonnes idées|boas ideias]], [[de nouveaux collègues|novos colegas]]. [5]'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'O erro mais comum de quem fala português',
        text:
          'Esquecer o artigo onde o português não usa: [[Je bois café|Bebo café (errado)]] ou [[J’ai amis|Tenho amigos (errado)]] estão errados. ' +
          'O certo é [[Je bois du café|Bebo café]] e [[J’ai des amis|Tenho amigos]]. Outro erro frequente é manter o partitivo na negação: o certo é [[Je n’ai pas d’argent.|Não tenho dinheiro.]] ' +
          'nunca [[pas de l’argent|não do dinheiro (errado)]]. [5]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'As questões de múltipla escolha adoram três armadilhas: negação + [[de|de]] ([[pas de|nenhum]]), quantidade + [[de|de]] ([[beaucoup de|muito]]) e gosto × consumo ' +
          '([[J’adore le chocolat.|Adoro chocolate.]] mas [[Je mange du chocolat.|Como chocolate.]]) Quando aparecerem [[du|um pouco de]], [[de la|um pouco de]], [[des|uns / umas]] e [[de|de]] como alternativas, procure primeiro uma negação ou uma palavra de quantidade na frase.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'Não aparecem nas fontes desta página: que o partitivo não existe em português e que o português omite o artigo (as fontes comparam com o inglês), que o [[des|des]] do plural é obrigatório, que o artigo não muda depois de [[être|ser / estar]], as exceções [[la plupart des|a maioria dos]] e [[bien des|muitos]], os exemplos com [[un kilo de|um quilo de]], [[trop de|demais]] e [[assez de|suficiente]] e o que as questões de múltipla escolha costumam cobrar. ' +
          'Os erros típicos de quem fala português são observação de ensino, não regra da prova.'
      }
    ]
  },

  fr: {
    title: 'Les articles définis, indéfinis et partitifs',
    summary:
      'En français, presque tous les noms sont précédés d’un article, même quand le portugais n’en utilise pas. ' +
      'Il y a trois familles : l’article défini (le, la, les), l’article indéfini (un, une, des) et l’article partitif (du, de la, des), qui n’existe pas en portugais. [1] ' +
      'Savoir lequel choisir, et quand il devient « de », fait partie des points de grammaire les plus évalués.',
    blocks: [
      { type: 'heading', text: 'Les trois familles' },
      {
        type: 'table',
        headers: ['Article', 'Masculin', 'Féminin', 'Devant une voyelle ou un h muet', 'Pluriel'],
        rows: [
          ['Défini [1]', 'le', 'la', 'l’', 'les'],
          ['Indéfini', 'un', 'une', 'un / une', 'des'],
          ['Partitif', 'du', 'de la', 'de l’', 'des']
        ]
      },

      { type: 'heading', text: 'L’article défini : ce qui est connu ou général' },
      {
        type: 'list',
        items: [
          'Une chose précise, que les deux personnes connaissent : Le train de 8 h est en retard. [2]',
          'Une chose en général, une catégorie entière : Les Canadiens aiment le hockey. [2]',
          'Après les verbes de goût (aimer, adorer, préférer, détester) : J’aime le café. [1]',
          'Avec les jours de la semaine, il exprime une habitude : Le lundi, je travaille à la maison. [2]',
          'Avec les pays, les continents et les langues : la France, le Québec, le français. [2] Après parler, l’article de la langue est facultatif : Je parle français. [2]'
        ]
      },

      { type: 'heading', text: 'L’article indéfini : ce qui se compte' },
      {
        type: 'paragraph',
        text:
          'Un et une présentent quelque chose de nouveau dans la conversation, ou une unité parmi d’autres : J’ai un rendez-vous à 15 h. [3] ' +
          'Au pluriel, des est obligatoire, alors que le portugais supprime simplement l’article : J’ai des amis à Montréal.'
      },

      { type: 'heading', text: 'L’article partitif : une partie de ce qui ne se compte pas' },
      {
        type: 'paragraph',
        text:
          'Le partitif indique une quantité indéterminée de quelque chose qu’on ne compte pas (nourriture, boissons, matières, qualités). ' +
          'Le portugais n’utilise aucun article, mais en français il est obligatoire : Je bois du café le matin. ' +
          'Il faut de la patience. On a acheté de l’eau. [4]'
      },
      {
        type: 'table',
        headers: ['Phrase', 'Sens'],
        rows: [
          ['J’aime le fromage.', 'Le fromage en général [1]'],
          ['Je mange du fromage.', 'Une certaine quantité de fromage [1]'],
          ['J’ai acheté un fromage.', 'Un fromage entier [3]'],
          ['Le fromage est sur la table.', 'Le fromage dont on a déjà parlé [2]']
        ]
      },

      { type: 'heading', text: 'Quand l’article devient « de »' },
      {
        type: 'list',
        items: [
          'Après une négation, un, une, des, du, de la et de l’ deviennent normalement de (ou d’) : Je n’ai pas de voiture. Il ne boit pas d’alcool. [5]',
          'L’article défini ne change pas à la forme négative : Je n’aime pas le café. [2]',
          'Avec être, l’article ne change pas non plus : Ce n’est pas un problème. Ce n’est pas du sucre, c’est du sel.',
          'Après une expression de quantité, on utilise seulement de : beaucoup de travail, un peu de sucre, trop de bruit, assez de temps, un kilo de pommes, une bouteille d’eau. [3] [4]',
          'Exceptions à retenir : la plupart des gens, bien des fois (ici, on garde des).',
          'Au pluriel, des devient de devant un adjectif placé avant le nom : de bonnes idées, de nouveaux collègues. [5]'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'L’erreur la plus fréquente des lusophones',
        text:
          'Oublier l’article là où le portugais n’en met pas : « Je bois café » ou « J’ai amis » sont incorrects. ' +
          'On dit Je bois du café et J’ai des amis. Autre erreur fréquente : garder le partitif après une négation. On dit Je n’ai pas d’argent, jamais « pas de l’argent ». [5]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'À l’examen',
        text:
          'Les questions à choix multiple aiment trois pièges : négation + de (pas de), quantité + de (beaucoup de) et goût ou consommation ' +
          '(J’adore le chocolat, mais Je mange du chocolat). Quand du, de la, des et de sont proposés, cherchez d’abord une négation ou un mot de quantité dans la phrase.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'N’apparaissent pas dans les sources de cette fiche : l’absence du partitif en portugais et l’omission de l’article dans cette langue (les sources comparent avec l’anglais), le caractère obligatoire de des au pluriel, l’article inchangé après être, les exceptions la plupart des et bien des, les exemples avec un kilo de, trop de et assez de, et ce que les questions à choix multiple évaluent d’habitude. ' +
          'Les erreurs typiques des lusophones sont des observations pédagogiques, pas des règles de l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  // A ordem é fixa: o texto cita cada fonte pelo número da posição ([1], [2]…). Ao mudar, atualize os [n].
  sources: [
    {
      title: 'Lawless French – Article Comparison',
      url: 'https://www.lawlessfrench.com/grammar/article-comparison/'
    },
    {
      title: 'Lawless French – Definite Article: le, la, l’, les',
      url: 'https://www.lawlessfrench.com/grammar/definite-article/'
    },
    {
      title: 'Lawless French – Indefinite Article: un, une, des',
      url: 'https://www.lawlessfrench.com/grammar/indefinite-article/'
    },
    {
      title: 'Lawless French – Partitive Article: du, de la, de l’, des',
      url: 'https://www.lawlessfrench.com/grammar/partitive-article/'
    },
    {
      title: 'Lawless French – Indefinite and Partitive Articles Reduced to De',
      url: 'https://www.lawlessfrench.com/grammar/de-vs-du-de-la-des-articles/'
    }
  ]
}

export default content
