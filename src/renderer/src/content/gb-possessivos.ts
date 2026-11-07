import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-possessivos',

  pt: {
    title: 'Possessivos e demonstrativos',
    summary:
      'Os possessivos (mon, ma, mes…) concordam com a coisa possuída, não com o dono, e por isso son livre pode ser "o livro dele" ou "o livro dela". ' +
      'Os demonstrativos (ce, cet, cette, ces) apontam para algo, e os pronomes (le mien, celui-ci) evitam repetir o substantivo.',
    blocks: [
      { type: 'heading', text: 'Adjetivos possessivos' },
      {
        type: 'table',
        headers: ['Dono', 'Masculino', 'Feminino', 'Plural'],
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
          'O gênero é o da coisa possuída: sa voiture é o carro dele ou dela, porque voiture é feminino.',
          'Para deixar claro quem é o dono, acrescente à lui ou à elle: C’est sa voiture à elle.',
          'Antes de um substantivo feminino que começa por vogal ou h mudo, ma, ta e sa viram mon, ton e son: mon amie, ton école, son histoire.',
          'Leur (um objeto de várias pessoas) e leurs (vários objetos): leur maison, leurs enfants.'
        ]
      },

      { type: 'heading', text: 'Pronomes possessivos' },
      {
        type: 'table',
        headers: ['Dono', 'Masculino', 'Feminino', 'Plural masculino', 'Plural feminino'],
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
        text: 'Eles substituem o substantivo: Ma voiture est rouge ; la tienne est noire. Para dizer de quem é algo, a forma mais comum é être à: Ce sac est à moi.'
      },

      { type: 'heading', text: 'Adjetivos demonstrativos' },
      {
        type: 'list',
        items: [
          'Ce + masculino: ce bureau, ce matin.',
          'Cet + masculino que começa por vogal ou h mudo: cet appartement, cet homme.',
          'Cette + feminino: cette semaine, cette entreprise.',
          'Ces + plural: ces documents, ces questions.',
          'Para distinguir perto de longe, acrescente -ci ou -là: ce livre-ci, ce livre-là. Na fala, -là é o mais usado.'
        ]
      },

      { type: 'heading', text: 'Pronomes demonstrativos' },
      {
        type: 'paragraph',
        text:
          'Celui (masculino), celle (feminino), ceux (plural masculino) e celles (plural feminino) substituem um substantivo e sempre vêm acompanhados: ' +
          'de -ci ou -là (Je prends celui-ci), de de (Ce n’est pas mon manteau, c’est celui de Paul) ou de qui e que (Ceux qui arrivent en retard attendent).'
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Son e sa não indicam o dono',
        text:
          'Quem fala português tende a usar son para "dele" e sa para "dela". Errado: son passeport é o passaporte dele ou dela, ' +
          'e sa famille é a família dele ou dela. Olhe sempre para o gênero do objeto.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'As questões costumam testar cet antes de vogal (cet hiver, cet été), mon antes de feminino com vogal (mon adresse) e leur × leurs. ' +
          'Nos textos formais, votre e vos aparecem o tempo todo: votre demande, vos documents.'
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
          'Les lusophones ont tendance à utiliser son pour un homme et sa pour une femme. C’est faux : son passeport appartient à un homme ou à une femme, ' +
          'et sa famille aussi. Regardez toujours le genre de l’objet.'
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

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

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
