import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-possessivos',

  pt: {
    title: 'Possessivos e demonstrativos',
    summary:
      'Os possessivos ([[mon|meu]], [[ma|minha]], [[mes|meus / minhas]]…) concordam com a coisa possuída, não com o dono, e por isso [[son livre|o livro dele / dela]] pode ser "o livro dele" ou "o livro dela". ' +
      'Os demonstrativos ([[ce|este / esse]], [[cet|este / esse]], [[cette|esta / essa]], [[ces|estes / esses]]) apontam para algo, e os pronomes ([[le mien|o meu]], [[celui-ci|este]]) evitam repetir o substantivo.',
    blocks: [
      { type: 'heading', text: 'Adjetivos possessivos' },
      {
        type: 'table',
        headers: ['Dono', 'Masculino', 'Feminino', 'Plural'],
        rows: [
          ['[[je|eu]]', '[[mon|meu]]', '[[ma|minha]]', '[[mes|meus / minhas]]'],
          ['[[tu|tu]]', '[[ton|teu]]', '[[ta|tua]]', '[[tes|teus / tuas]]'],
          ['[[il|ele]], [[elle|ela]]', '[[son|dele / dela]]', '[[sa|dele / dela]]', '[[ses|dele / dela]]'],
          ['[[nous|nós]]', '[[notre|nosso]]', '[[notre|nossa]]', '[[nos|nossos / nossas]]'],
          ['[[vous|vocês]]', '[[votre|seu / de vocês]]', '[[votre|sua / de vocês]]', '[[vos|seus / suas]]'],
          ['[[ils|eles]], [[elles|elas]]', '[[leur|deles / delas]]', '[[leur|deles / delas]]', '[[leurs|deles / delas]]']
        ]
      },
      {
        type: 'list',
        items: [
          'O gênero é o da coisa possuída: [[sa voiture|o carro dele / dela]] é o carro dele ou dela, porque [[voiture|carro]] é feminino.',
          'Para deixar claro quem é o dono, acrescente [[à lui|dele]] ou [[à elle|dela]]: [[C’est sa voiture à elle.|É o carro dela.]]',
          'Antes de um substantivo feminino que começa por vogal ou h mudo, [[ma|minha]], [[ta|tua]] e [[sa|dela]] viram [[mon|meu]], [[ton|teu]] e [[son|dele]]: [[mon amie|minha amiga]], [[ton école|tua escola]], [[son histoire|a história dele / dela]].',
          '[[Leur|deles / delas]] (um objeto de várias pessoas) e [[leurs|deles / delas]] (vários objetos): [[leur maison|a casa deles]], [[leurs enfants|os filhos deles]].'
        ]
      },

      { type: 'heading', text: 'Pronomes possessivos' },
      {
        type: 'table',
        headers: ['Dono', 'Masculino', 'Feminino', 'Plural masculino', 'Plural feminino'],
        rows: [
          ['[[je|eu]]', '[[le mien|o meu]]', '[[la mienne|a minha]]', '[[les miens|os meus]]', '[[les miennes|as minhas]]'],
          ['[[tu|tu]]', '[[le tien|o teu]]', '[[la tienne|a tua]]', '[[les tiens|os teus]]', '[[les tiennes|as tuas]]'],
          ['[[il|ele]], [[elle|ela]]', '[[le sien|o dele / dela]]', '[[la sienne|a dele / dela]]', '[[les siens|os dele / dela]]', '[[les siennes|as dele / dela]]'],
          ['[[nous|nós]]', '[[le nôtre|o nosso]]', '[[la nôtre|a nossa]]', '[[les nôtres|os nossos]]', '[[les nôtres|as nossas]]'],
          ['[[vous|vocês]]', '[[le vôtre|o de vocês]]', '[[la vôtre|a de vocês]]', '[[les vôtres|os de vocês]]', '[[les vôtres|as de vocês]]'],
          ['[[ils|eles]], [[elles|elas]]', '[[le leur|o deles / delas]]', '[[la leur|a deles / delas]]', '[[les leurs|os deles / delas]]', '[[les leurs|as deles / delas]]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Eles substituem o substantivo: [[Ma voiture est rouge ; la tienne est noire.|Meu carro é vermelho; o teu é preto.]] ' +
          'Para dizer de quem é algo, a forma mais comum é [[être à|ser de]]: [[Ce sac est à moi.|Esta bolsa é minha.]]'
      },

      { type: 'heading', text: 'Adjetivos demonstrativos' },
      {
        type: 'list',
        items: [
          '[[Ce|este / esse]] + masculino: [[ce bureau|este escritório]], [[ce matin|esta manhã]].',
          '[[Cet|este / esse]] + masculino que começa por vogal ou h mudo: [[cet appartement|este apartamento]], [[cet homme|este homem]].',
          '[[Cette|esta / essa]] + feminino: [[cette semaine|esta semana]], [[cette entreprise|esta empresa]].',
          '[[Ces|estes / esses]] + plural: [[ces documents|estes documentos]], [[ces questions|estas perguntas]].',
          'Para distinguir perto de longe, acrescente [[-ci|aqui]] ou [[-là|ali]]: [[ce livre-ci|este livro aqui]], [[ce livre-là|aquele livro]]. Na fala, [[-là|ali]] é o mais usado.'
        ]
      },

      { type: 'heading', text: 'Pronomes demonstrativos' },
      {
        type: 'paragraph',
        text:
          '[[Celui|aquele]] (masculino), [[celle|aquela]] (feminino), [[ceux|aqueles]] (plural masculino) e [[celles|aquelas]] (plural feminino) substituem um substantivo e sempre vêm acompanhados: ' +
          'de [[-ci|aqui]] ou [[-là|ali]] ([[Je prends celui-ci.|Vou levar este.]]), de [[de|de]] ([[Ce n’est pas mon manteau, c’est celui de Paul.|Não é o meu casaco, é o do Paul.]]) ' +
          'ou de [[qui|que]] e [[que|que]] ([[Ceux qui arrivent en retard attendent.|Quem chega atrasado espera.]]).'
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Son e sa não indicam o dono',
        text:
          'Em português, "dele" e "dela" mudam conforme o dono. Em francês, [[son|dele / dela]], [[sa|dele / dela]] e [[ses|dele / dela]] mudam conforme o gênero e o número da coisa possuída. ' +
          'Assim, [[son passeport|o passaporte dele / dela]] pode ser o passaporte dele ou dela, ' +
          'e [[sa famille|a família dele / dela]] pode ser a família dele ou dela. Olhe sempre para o gênero do objeto.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'As questões costumam testar [[cet|este / esse]] antes de vogal ([[cet hiver|este inverno]], [[cet été|este verão]]), [[mon|meu]] antes de feminino com vogal ([[mon adresse|meu endereço]]) e [[leur|deles]] × [[leurs|deles]]. ' +
          'Nos textos formais, [[votre|seu]] e [[vos|seus]] aparecem o tempo todo: [[votre demande|sua solicitação]], [[vos documents|seus documentos]].'
      }
    ]
  },

  fr: {
    title: 'Les possessifs et les démonstratifs',
    summary:
      'Les possessifs (mon, ma, mes…) s’accordent avec la chose possédée, pas avec le possesseur ; son livre peut donc être le livre d’un homme ou d’une femme. ' +
      'Les démonstratifs (ce, cet, cette, ces) désignent quelque chose, et les pronoms (le mien, celui-ci) évitent de répéter le nom.',
    blocks: [
      { type: 'heading', text: 'Les adjectifs possessifs' },
      {
        type: 'table',
        headers: ['Possesseur', 'Masculin', 'Féminin', 'Pluriel'],
        rows: [
          ['je', 'mon', 'ma', 'mes'],
          ['tu', 'ton', 'ta', 'tes'],
          ['il, elle', 'son', 'sa', 'ses'],
          ['nous', 'notre', 'notre', 'nos'],
          ['vous', 'votre', 'votre', 'vos'],
          ['ils, elles', 'leur', 'leur', 'leurs']
        ]
      },
      {
        type: 'list',
        items: [
          'Le genre est celui de la chose possédée : sa voiture est la voiture d’un homme ou d’une femme, parce que voiture est féminin.',
          'Pour préciser le possesseur, on ajoute à lui ou à elle : C’est sa voiture à elle.',
          'Devant un nom féminin qui commence par une voyelle ou un h muet, ma, ta et sa deviennent mon, ton et son : mon amie, ton école, son histoire.',
          'Leur (un objet de plusieurs personnes) et leurs (plusieurs objets) : leur maison, leurs enfants.'
        ]
      },

      { type: 'heading', text: 'Les pronoms possessifs' },
      {
        type: 'table',
        headers: ['Possesseur', 'Masculin', 'Féminin', 'Masculin pluriel', 'Féminin pluriel'],
        rows: [
          ['je', 'le mien', 'la mienne', 'les miens', 'les miennes'],
          ['tu', 'le tien', 'la tienne', 'les tiens', 'les tiennes'],
          ['il, elle', 'le sien', 'la sienne', 'les siens', 'les siennes'],
          ['nous', 'le nôtre', 'la nôtre', 'les nôtres', 'les nôtres'],
          ['vous', 'le vôtre', 'la vôtre', 'les vôtres', 'les vôtres'],
          ['ils, elles', 'le leur', 'la leur', 'les leurs', 'les leurs']
        ]
      },
      {
        type: 'paragraph',
        text: 'Ils remplacent le nom : Ma voiture est rouge ; la tienne est noire. Pour dire à qui appartient une chose, la forme la plus courante est être à : Ce sac est à moi.'
      },

      { type: 'heading', text: 'Les adjectifs démonstratifs' },
      {
        type: 'list',
        items: [
          'Ce + nom masculin : ce bureau, ce matin.',
          'Cet + nom masculin qui commence par une voyelle ou un h muet : cet appartement, cet homme.',
          'Cette + nom féminin : cette semaine, cette entreprise.',
          'Ces + nom pluriel : ces documents, ces questions.',
          'Pour distinguer ce qui est proche de ce qui est loin, on ajoute -ci ou -là : ce livre-ci, ce livre-là. À l’oral, -là est le plus fréquent.'
        ]
      },

      { type: 'heading', text: 'Les pronoms démonstratifs' },
      {
        type: 'paragraph',
        text:
          'Celui (masculin), celle (féminin), ceux (masculin pluriel) et celles (féminin pluriel) remplacent un nom et sont toujours accompagnés : ' +
          'de -ci ou -là (Je prends celui-ci), de de (Ce n’est pas mon manteau, c’est celui de Paul) ou de qui et que (Ceux qui arrivent en retard attendent).'
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Son et sa n’indiquent pas le possesseur',
        text:
          'En portugais, « dele » et « dela » changent selon le possesseur. En français, son, sa et ses changent selon le genre et le nombre de la chose possédée. ' +
          'Ainsi, son passeport peut être le passeport d’un homme ou d’une femme, ' +
          'et sa famille peut être la famille d’un homme ou d’une femme. Regardez toujours le genre de l’objet.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'À l’examen',
        text:
          'Les questions évaluent souvent cet devant une voyelle (cet hiver, cet été), mon devant un nom féminin qui commence par une voyelle (mon adresse) et leur ou leurs. ' +
          'Dans les textes formels, votre et vos reviennent sans cesse : votre demande, vos documents.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Lawless French – Possessive Adjectives',
      url: 'https://www.lawlessfrench.com/grammar/possessive-adjectives/'
    },
    {
      title: 'Lawless French – Possessive Pronouns',
      url: 'https://www.lawlessfrench.com/grammar/possessive-pronouns/'
    },
    {
      title: 'Lawless French – Demonstrative Adjectives',
      url: 'https://www.lawlessfrench.com/grammar/demonstrative-adjectives/'
    },
    {
      title: 'Lawless French – Demonstrative Pronouns',
      url: 'https://www.lawlessfrench.com/grammar/demonstrative-pronouns/'
    },
    {
      title: 'Kwiziq French – Gramática por tema e nível',
      url: 'https://french.kwiziq.com/revision/grammar'
    }
  ]
}

export default content
