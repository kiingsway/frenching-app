import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-genero',

  pt: {
    title: 'Gênero e número de substantivos e adjetivos',
    summary:
      'Todo substantivo francês é masculino ou feminino, e o gênero nem sempre é o mesmo do português. ' +
      'O adjetivo concorda com o substantivo em gênero e número. A terminação da palavra ajuda a adivinhar o gênero, ' +
      'e o plural quase nunca se ouve: quem mostra o número na fala é o artigo.',
    blocks: [
      { type: 'heading', text: 'O gênero dos substantivos' },
      {
        type: 'paragraph',
        text:
          'Aprenda cada substantivo junto com o artigo (le ou la), e não a palavra sozinha. ' +
          'Muitos substantivos têm gênero diferente do português, e esses são os que mais causam erro.'
      },
      {
        type: 'table',
        headers: ['Francês', 'Português', 'Gênero em francês'],
        rows: [
          ['le voyage', 'a viagem', 'masculino'],
          ['le message', 'a mensagem', 'masculino'],
          ['le choix', 'a escolha', 'masculino'],
          ['l’arbre', 'a árvore', 'masculino'],
          ['le pont', 'a ponte', 'masculino'],
          ['la dent', 'o dente', 'feminino'],
          ['la mer', 'o mar', 'feminino'],
          ['la méthode', 'o método', 'feminino'],
          ['la planète', 'o planeta', 'feminino']
        ]
      },

      { type: 'heading', text: 'Terminações que indicam o gênero' },
      {
        type: 'table',
        headers: ['Terminação', 'Gênero', 'Exemplos', 'Exceções comuns'],
        rows: [
          ['-age', 'masculino', 'le fromage, le garage', 'la page, la plage, l’image, la cage'],
          ['-ment', 'masculino', 'le logement, le gouvernement', 'nenhuma'],
          ['-eau', 'masculino', 'le bureau, le bateau', 'l’eau, la peau'],
          ['-isme', 'masculino', 'le tourisme, le racisme', 'nenhuma'],
          ['-tion, -sion', 'feminino', 'la nation, la décision', 'nenhuma'],
          ['-té', 'feminino', 'la société, la santé', 'l’été, le côté'],
          ['-ure', 'feminino', 'la voiture, la culture', 'nenhuma'],
          ['-ence, -ance', 'feminino', 'la confiance, la différence', 'le silence'],
          ['-ée', 'feminino', 'l’année, la journée', 'le musée, le lycée']
        ]
      },

      { type: 'heading', text: 'O feminino de pessoas e adjetivos' },
      {
        type: 'paragraph',
        text:
          'A regra geral é acrescentar -e: un ami, une amie; grand, grande. Quando a palavra já termina em -e, ela não muda: jeune, facile, un ou une collègue. ' +
          'Muitas terminações mudam de forma no feminino.'
      },
      {
        type: 'table',
        headers: ['Masculino', 'Feminino', 'Exemplos'],
        rows: [
          ['-er', '-ère', 'boulanger → boulangère, cher → chère'],
          ['-eux', '-euse', 'heureux → heureuse, sérieux → sérieuse'],
          ['-if', '-ive', 'sportif → sportive, actif → active'],
          ['-en, -on', '-enne, -onne', 'canadien → canadienne, bon → bonne'],
          ['-teur', '-trice ou -teuse', 'acteur → actrice, menteur → menteuse'],
          ['-el, -et', '-elle, -ette', 'naturel → naturelle, muet → muette']
        ]
      },
      {
        type: 'list',
        items: [
          'Femininos irregulares a decorar: beau → belle, nouveau → nouvelle, vieux → vieille, blanc → blanche, long → longue, frais → fraîche, fou → folle.',
          'Na fala, o -e do feminino costuma fazer a consoante final aparecer: petit (sem t) e petite (com t), grand e grande.'
        ]
      },

      { type: 'heading', text: 'O plural' },
      {
        type: 'table',
        headers: ['Regra', 'Exemplos'],
        rows: [
          ['Regra geral: + s', 'un livre → des livres, intéressant → intéressants'],
          [
            'Terminado em -s, -x ou -z: não muda',
            'le prix → les prix, le nez → les nez, heureux → heureux'
          ],
          ['-eau, -eu: + x', 'le bateau → les bateaux, le jeu → les jeux (exceções: pneus, bleus)'],
          [
            '-al: -aux',
            'le journal → les journaux, national → nationaux (exceções: festivals, finals)'
          ],
          [
            '-ail: -aux em algumas palavras',
            'le travail → les travaux (mas le détail → les détails)'
          ],
          [
            '-ou: + s, menos sete palavras em -oux',
            'bijou, caillou, chou, genou, hibou, joujou, pou → bijoux, genoux…'
          ],
          ['Irregulares', 'l’œil → les yeux, monsieur → messieurs, madame → mesdames']
        ]
      },

      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova: o plural se ouve no artigo',
        text:
          'O -s e o -x do plural não se pronunciam: livre e livres soam iguais. Na compreensão oral, quem indica o número é o artigo ou o determinante ' +
          '(le livre × les livres, son ami × ses amis) e a liaison (les‿enfants). Preste atenção nessas palavras pequenas.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confie no gênero do português',
        text:
          'Escrever "la voyage" ou "le mer" é um erro típico de quem pensa em português. Na dúvida, procure no dicionário e anote o substantivo sempre com o artigo. ' +
          'Lembre que o adjetivo também muda: une décision importante, des voyages intéressants.'
      }
    ]
  },

  fr: {
    title: 'Le genre et le nombre des noms et des adjectifs',
    summary:
      'Chaque nom français est masculin ou féminin, et le genre n’est pas toujours le même qu’en portugais. ' +
      'L’adjectif s’accorde en genre et en nombre avec le nom. La terminaison du mot aide à deviner le genre, ' +
      'et le pluriel ne s’entend presque jamais : à l’oral, c’est l’article qui indique le nombre.',
    blocks: [
      { type: 'heading', text: 'Le genre des noms' },
      {
        type: 'paragraph',
        text:
          'Apprenez chaque nom avec son article (le ou la), jamais le mot seul. ' +
          'Beaucoup de noms n’ont pas le même genre qu’en portugais, et ce sont eux qui causent le plus d’erreurs.'
      },
      {
        type: 'table',
        headers: ['Français', 'Portugais', 'Genre en français'],
        rows: [
          ['le voyage', 'a viagem', 'masculin'],
          ['le message', 'a mensagem', 'masculin'],
          ['le choix', 'a escolha', 'masculin'],
          ['l’arbre', 'a árvore', 'masculin'],
          ['le pont', 'a ponte', 'masculin'],
          ['la dent', 'o dente', 'féminin'],
          ['la mer', 'o mar', 'féminin'],
          ['la méthode', 'o método', 'féminin'],
          ['la planète', 'o planeta', 'féminin']
        ]
      },

      { type: 'heading', text: 'Les terminaisons qui indiquent le genre' },
      {
        type: 'table',
        headers: ['Terminaison', 'Genre', 'Exemples', 'Exceptions courantes'],
        rows: [
          ['-age', 'masculin', 'le fromage, le garage', 'la page, la plage, l’image, la cage'],
          ['-ment', 'masculin', 'le logement, le gouvernement', 'aucune'],
          ['-eau', 'masculin', 'le bureau, le bateau', 'l’eau, la peau'],
          ['-isme', 'masculin', 'le tourisme, le racisme', 'aucune'],
          ['-tion, -sion', 'féminin', 'la nation, la décision', 'aucune'],
          ['-té', 'féminin', 'la société, la santé', 'l’été, le côté'],
          ['-ure', 'féminin', 'la voiture, la culture', 'aucune'],
          ['-ence, -ance', 'féminin', 'la confiance, la différence', 'le silence'],
          ['-ée', 'féminin', 'l’année, la journée', 'le musée, le lycée']
        ]
      },

      { type: 'heading', text: 'Le féminin des personnes et des adjectifs' },
      {
        type: 'paragraph',
        text:
          'La règle générale consiste à ajouter un -e : un ami, une amie ; grand, grande. Quand le mot se termine déjà par -e, il ne change pas : jeune, facile, un ou une collègue. ' +
          'Beaucoup de terminaisons changent au féminin.'
      },
      {
        type: 'table',
        headers: ['Masculin', 'Féminin', 'Exemples'],
        rows: [
          ['-er', '-ère', 'boulanger → boulangère, cher → chère'],
          ['-eux', '-euse', 'heureux → heureuse, sérieux → sérieuse'],
          ['-if', '-ive', 'sportif → sportive, actif → active'],
          ['-en, -on', '-enne, -onne', 'canadien → canadienne, bon → bonne'],
          ['-teur', '-trice ou -teuse', 'acteur → actrice, menteur → menteuse'],
          ['-el, -et', '-elle, -ette', 'naturel → naturelle, muet → muette']
        ]
      },
      {
        type: 'list',
        items: [
          'Féminins irréguliers à retenir : beau → belle, nouveau → nouvelle, vieux → vieille, blanc → blanche, long → longue, frais → fraîche, fou → folle.',
          'À l’oral, le -e du féminin fait souvent entendre la consonne finale : petit (sans t) et petite (avec t), grand et grande.'
        ]
      },

      { type: 'heading', text: 'Le pluriel' },
      {
        type: 'table',
        headers: ['Règle', 'Exemples'],
        rows: [
          ['Règle générale : + s', 'un livre → des livres, intéressant → intéressants'],
          [
            'Terminé par -s, -x ou -z : pas de changement',
            'le prix → les prix, le nez → les nez, heureux → heureux'
          ],
          [
            '-eau, -eu : + x',
            'le bateau → les bateaux, le jeu → les jeux (exceptions : pneus, bleus)'
          ],
          [
            '-al : -aux',
            'le journal → les journaux, national → nationaux (exceptions : festivals, finals)'
          ],
          [
            '-ail : -aux pour quelques mots',
            'le travail → les travaux (mais le détail → les détails)'
          ],
          [
            '-ou : + s, sauf sept mots en -oux',
            'bijou, caillou, chou, genou, hibou, joujou, pou → bijoux, genoux…'
          ],
          ['Irréguliers', 'l’œil → les yeux, monsieur → messieurs, madame → mesdames']
        ]
      },

      {
        type: 'callout',
        tone: 'tip',
        title: 'À l’examen : le pluriel s’entend dans l’article',
        text:
          'Le -s et le -x du pluriel ne se prononcent pas : livre et livres se prononcent de la même façon. En compréhension orale, c’est l’article ou le déterminant ' +
          'qui indique le nombre (le livre ou les livres, son ami ou ses amis), ainsi que la liaison (les‿enfants). Soyez attentif à ces petits mots.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne vous fiez pas au genre portugais',
        text:
          'Écrire « la voyage » ou « le mer » est une erreur typique quand on pense en portugais. En cas de doute, vérifiez dans le dictionnaire et notez toujours le nom avec son article. ' +
          'N’oubliez pas que l’adjectif change aussi : une décision importante, des voyages intéressants.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Lawless French – Gender of French Nouns',
      url: 'https://www.lawlessfrench.com/grammar/gender/'
    },
    {
      title: 'Lawless French – Masculine Noun Endings',
      url: 'https://www.lawlessfrench.com/grammar/masculine-noun-endings/'
    },
    {
      title: 'Lawless French – Feminine Noun Endings',
      url: 'https://www.lawlessfrench.com/grammar/feminine-noun-endings/'
    },
    {
      title: 'Lawless French – Regular Feminine and Plural Nouns',
      url: 'https://www.lawlessfrench.com/grammar/nouns-regular-feminines-and-plurals/'
    },
    {
      title: 'Lawless French – Nouns and Adjectives: Irregular Plurals',
      url: 'https://www.lawlessfrench.com/grammar/nouns-and-adjectives-irregular-plurals/'
    },
    {
      title: 'Kwiziq French – Gramática por tema e nível',
      url: 'https://french.kwiziq.com/revision/grammar'
    }
  ]
}

export default content
