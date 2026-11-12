import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-futur-proche',

  pt: {
    title: 'Futur proche e passé récent',
    summary:
      'Duas construções simples e muito usadas na fala: [[aller|ir]] + infinitivo para o que vai acontecer ("vou viajar") e [[venir de|vir de]] + infinitivo para o que acabou de acontecer ("acabei de chegar"). ' +
      'Basta conjugar [[aller|ir]] ou [[venir|vir]] no [[présent|presente]].',
    blocks: [
      { type: 'heading', text: 'Futur proche: aller + infinitivo' },
      {
        type: 'paragraph',
        text:
          '[[Aller|ir]] no [[présent|presente]] seguido do verbo no infinitivo: [[Je vais partir.|Vou partir.]] [[Tu vas adorer.|Você vai adorar.]] [[Ils vont déménager en juillet.|Eles vão se mudar em julho.]] ' +
          'É a forma mais comum de falar do futuro no dia a dia, como o nosso "vou fazer".'
      },
      {
        type: 'table',
        headers: ['Pessoa', 'Futur proche', 'Passé récent'],
        rows: [
          ['[[je|eu]]', '[[je vais travailler|vou trabalhar]]', '[[je viens de travailler|acabei de trabalhar]]'],
          ['[[tu|você]]', '[[tu vas travailler|você vai trabalhar]]', '[[tu viens de travailler|você acabou de trabalhar]]'],
          ['[[il|ele]], [[elle|ela]], [[on|a gente]]', '[[il va travailler|ele vai trabalhar]]', '[[il vient de travailler|ele acabou de trabalhar]]'],
          ['[[nous|nós]]', '[[nous allons travailler|vamos trabalhar]]', '[[nous venons de travailler|acabamos de trabalhar]]'],
          ['[[vous|vocês]]', '[[vous allez travailler|vocês vão trabalhar]]', '[[vous venez de travailler|vocês acabaram de trabalhar]]'],
          ['[[ils|eles]], [[elles|elas]]', '[[ils vont travailler|eles vão trabalhar]]', '[[ils viennent de travailler|eles acabaram de trabalhar]]']
        ]
      },
      {
        type: 'list',
        items: [
          'A negação cerca [[aller|ir]]: [[Je ne vais pas partir.|Não vou partir.]]',
          'Os pronomes ficam antes do infinitivo: [[Je vais le faire.|Vou fazer isso.]] [[Nous allons vous appeler.|Vamos ligar para vocês.]]',
          'Futur proche × futur simple: os dois falam do futuro, mas o [[futur proche|futuro próximo]] soa mais próximo e certo ([[Il va pleuvoir.|Vai chover.]]), e o [[futur simple|futuro simples]] é mais neutro e frequente na escrita ([[Il pleuvra demain.|Choverá amanhã.]]).'
        ]
      },

      { type: 'heading', text: 'Passé récent: venir de + infinitivo' },
      {
        type: 'paragraph',
        text:
          '[[Venir|vir]] no [[présent|presente]] + [[de|de]] + infinitivo indica uma ação que acabou de acontecer: [[Je viens d’arriver.|Acabei de chegar.]] [[Elle vient de signer le contrat.|Ela acabou de assinar o contrato.]] ' +
          'Antes de vogal, [[de|de]] vira [[d’|de]]. Os pronomes ficam antes do infinitivo: [[Je viens de le voir.|Acabei de vê-lo.]]'
      },

      { type: 'heading', text: 'As mesmas construções no passado' },
      {
        type: 'list',
        items: [
          '[[Aller|ir]] no [[imparfait|pretérito imperfeito]] = "ia fazer": [[J’allais sortir quand il a appelé.|Eu ia sair quando ele ligou.]]',
          '[[Venir de|vir de]] no [[imparfait|pretérito imperfeito]] = "tinha acabado de": [[Nous venions d’arriver quand le cours a commencé.|Tínhamos acabado de chegar quando a aula começou.]]'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Venir de nem sempre é passé récent',
        text:
          '[[Je viens de Montréal|Venho de Montreal]] fala de origem, com um lugar depois de [[de|de]]. [[Je viens de manger|Acabei de comer]] tem um infinitivo depois de [[de|de]]. ' +
          'Cuidado também com [[aller|ir]] como verbo principal: [[Je vais au bureau.|Vou ao escritório.]] já fala de um deslocamento. ' +
          'O futur proche com o mesmo verbo ([[Je vais aller au bureau.|Vou ir ao escritório.]]) é correto, mas só vale a pena quando você quer marcar o futuro.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'Na produção oral, o [[futur proche|futuro próximo]] é perfeito para falar de planos ([[Je vais m’installer au Québec.|Vou me instalar no Québec.]]), e o [[passé récent|passado recente]] para situar acontecimentos recentes. ' +
          'Na compreensão oral, atenção a [[vient de|acabou de]]: indica que algo já aconteceu, não que vai acontecer.'
      }
    ]
  },

  fr: {
    title: 'Le futur proche et le passé récent',
    summary:
      'Deux constructions simples et très utilisées à l’oral : aller + infinitif pour ce qui va se passer et venir de + infinitif pour ce qui vient de se passer. ' +
      'Il suffit de conjuguer aller ou venir au présent.',
    blocks: [
      { type: 'heading', text: 'Le futur proche : aller + infinitif' },
      {
        type: 'paragraph',
        text:
          'Aller au présent suivi du verbe à l’infinitif : Je vais partir. Tu vas adorer. Ils vont déménager en juillet. ' +
          'C’est la façon la plus courante de parler du futur dans la vie de tous les jours.'
      },
      {
        type: 'table',
        headers: ['Personne', 'Futur proche', 'Passé récent'],
        rows: [
          ['je', 'je vais travailler', 'je viens de travailler'],
          ['tu', 'tu vas travailler', 'tu viens de travailler'],
          ['il, elle, on', 'il va travailler', 'il vient de travailler'],
          ['nous', 'nous allons travailler', 'nous venons de travailler'],
          ['vous', 'vous allez travailler', 'vous venez de travailler'],
          ['ils, elles', 'ils vont travailler', 'ils viennent de travailler']
        ]
      },
      {
        type: 'list',
        items: [
          'La négation entoure aller : Je ne vais pas partir.',
          'Les pronoms se placent devant l’infinitif : Je vais le faire. Nous allons vous appeler.',
          'Futur proche ou futur simple : les deux parlent du futur, mais le futur proche paraît plus proche et plus certain (Il va pleuvoir), et le futur simple est plus neutre et plus fréquent à l’écrit (Il pleuvra demain).'
        ]
      },

      { type: 'heading', text: 'Le passé récent : venir de + infinitif' },
      {
        type: 'paragraph',
        text:
          'Venir au présent + de + infinitif indique une action qui vient d’avoir lieu : Je viens d’arriver. Elle vient de signer le contrat. ' +
          'Devant une voyelle, de devient d’. Les pronoms se placent devant l’infinitif : Je viens de le voir.'
      },

      { type: 'heading', text: 'Les mêmes constructions au passé' },
      {
        type: 'list',
        items: [
          'Aller à l’imparfait exprime une action sur le point de se produire : J’allais sortir quand il a appelé.',
          'Venir de à l’imparfait exprime une action qui venait d’avoir lieu : Nous venions d’arriver quand le cours a commencé.'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Venir de n’est pas toujours le passé récent',
        text:
          'Je viens de Montréal parle de l’origine, avec un lieu après de. Je viens de manger a un infinitif après de. ' +
          'Attention aussi à aller comme verbe principal : Je vais au bureau indique déjà un déplacement. ' +
          'Le futur proche avec le même verbe (Je vais aller au bureau) est correct, mais il ne vaut la peine que si l’on veut marquer le futur.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'À l’examen',
        text:
          'En expression orale, le futur proche est parfait pour parler de vos projets (Je vais m’installer au Québec), et le passé récent pour situer des événements récents. ' +
          'En compréhension orale, attention à vient de : l’action a déjà eu lieu, elle n’est pas à venir.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Lawless French – Aller: Near Future',
      url: 'https://www.lawlessfrench.com/grammar/aller-near-future/'
    },
    {
      title: 'Lawless French – Venir de: Recent Past',
      url: 'https://www.lawlessfrench.com/grammar/venir-recent-past/'
    },
    {
      title: 'Le Conjugueur (Le Figaro) – conjugação de qualquer verbo',
      url: 'https://leconjugueur.lefigaro.fr/'
    },
    {
      title: 'Kwiziq French – Gramática por tema e nível',
      url: 'https://french.kwiziq.com/revision/grammar'
    }
  ]
}

export default content
