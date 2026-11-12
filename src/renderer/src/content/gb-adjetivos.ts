import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-adjetivos',

  pt: {
    title: 'Posição e concordância dos adjetivos',
    summary:
      'O adjetivo concorda em gênero e número com o substantivo e, na maioria das vezes, vem depois dele, como em português. ' +
      'Um grupo pequeno de adjetivos muito comuns vem antes, e alguns mudam de sentido conforme a posição.',
    blocks: [
      { type: 'heading', text: 'A concordância' },
      {
        type: 'paragraph',
        text:
          'O adjetivo assume o gênero e o número do substantivo: [[un appartement moderne|um apartamento moderno]], [[une maison moderne|uma casa moderna]], [[des quartiers modernes|bairros modernos]]. ' +
          'Quando qualifica um substantivo masculino e um feminino ao mesmo tempo, fica no masculino plural: [[un pantalon et une chemise blancs|uma calça e uma camisa brancas]].'
      },
      {
        type: 'paragraph',
        text: 'As regras para formar o feminino e o plural ([[heureux|feliz]] → [[heureuse|feliz]], [[national|nacional]] → [[nationaux|nacionais]]) estão na página "Gênero e número de substantivos e adjetivos".'
      },

      { type: 'heading', text: 'Depois do substantivo: a regra geral' },
      {
        type: 'list',
        items: [
          'Cores: [[une voiture rouge|um carro vermelho]], [[des yeux bleus|olhos azuis]].',
          'Nacionalidades e religiões: [[un étudiant brésilien|um estudante brasileiro]], [[la cuisine québécoise|a culinária québécoise]].',
          'Formas e características físicas: [[une table ronde|uma mesa redonda]], [[un ton sec|um tom seco]].',
          'Particípios usados como adjetivo: [[une porte fermée|uma porta fechada]], [[un document signé|um documento assinado]].',
          'Adjetivos longos ou técnicos: [[un projet important|um projeto importante]], [[une solution économique|uma solução econômica]].'
        ]
      },

      { type: 'heading', text: 'Antes do substantivo: beleza, idade, bondade e tamanho' },
      {
        type: 'table',
        headers: ['Grupo', 'Adjetivos', 'Exemplo'],
        rows: [
          ['Beleza', '[[beau|bonito]], [[joli|bonito]]', '[[un joli quartier|um bairro bonito]]'],
          ['Idade', '[[jeune|jovem]], [[vieux|velho]], [[nouveau|novo]]', '[[une nouvelle voiture|um carro novo]]'],
          ['Bondade', '[[bon|bom]], [[mauvais|ruim]], [[gentil|gentil]]', '[[une bonne idée|uma boa ideia]]'],
          ['Tamanho', '[[grand|grande]], [[petit|pequeno]], [[gros|grosso]], [[long|longo]]', '[[un petit appartement|um apartamento pequeno]]'],
          ['Outros comuns', '[[autre|outro]], [[même|mesmo]], [[premier|primeiro]], [[dernier|último]]', '[[une autre fois|outra vez]]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Antes de um substantivo masculino que começa por vogal ou h mudo, [[beau|bonito]], [[nouveau|novo]] e [[vieux|velho]] viram [[bel|bonito]], [[nouvel|novo]] e [[vieil|velho]]: ' +
          '[[un bel homme|um homem bonito]], [[un nouvel appartement|um apartamento novo]], [[un vieil ami|um velho amigo]].'
      },

      { type: 'heading', text: 'Adjetivos que mudam de sentido' },
      {
        type: 'table',
        headers: ['Antes', 'Depois'],
        rows: [
          ['[[un ancien collègue|um ex-colega]]', '[[une maison ancienne|uma casa antiga]]'],
          ['[[un grand homme|um grande homem]]', '[[un homme grand|um homem alto]]'],
          ['[[mon cher ami|meu querido amigo]]', '[[un loyer cher|um aluguel caro]]'],
          ['[[ma propre voiture|meu próprio carro]]', '[[une voiture propre|um carro limpo]]'],
          ['[[un seul enfant|um único filho]]', '[[un enfant seul|uma criança sozinha]]'],
          ['[[la dernière semaine|a última semana de uma série]]', '[[la semaine dernière|a semana passada]]']
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com o plural antes do substantivo',
        text:
          'Na escrita cuidada, [[des|des]] vira [[de|de]] quando o adjetivo vem antes do substantivo: [[de nouveaux collègues|novos colegas]], [[de bonnes nouvelles|boas notícias]]. ' +
          'Na fala, muita gente diz [[des|des]], mas na produção escrita da prova prefira [[de|de]].'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'Na produção escrita, adjetivos bem colocados e bem concordados mostram domínio da língua. Revise o texto no fim procurando ' +
          'só as concordâncias: cada adjetivo está no mesmo gênero e número do substantivo?'
      }
    ]
  },

  fr: {
    title: 'La place et l’accord des adjectifs',
    summary:
      'L’adjectif s’accorde en genre et en nombre avec le nom et, la plupart du temps, il se place après lui, comme en portugais. ' +
      'Un petit groupe d’adjectifs très courants se place avant, et certains changent de sens selon leur place.',
    blocks: [
      { type: 'heading', text: 'L’accord' },
      {
        type: 'paragraph',
        text:
          'L’adjectif prend le genre et le nombre du nom : un appartement moderne, une maison moderne, des quartiers modernes. ' +
          'Quand il qualifie à la fois un nom masculin et un nom féminin, il se met au masculin pluriel : un pantalon et une chemise blancs.'
      },
      {
        type: 'paragraph',
        text: 'Les règles du féminin et du pluriel (heureux → heureuse, national → nationaux) se trouvent dans la page « Le genre et le nombre des noms et des adjectifs ».'
      },

      { type: 'heading', text: 'Après le nom : la règle générale' },
      {
        type: 'list',
        items: [
          'Les couleurs : une voiture rouge, des yeux bleus.',
          'Les nationalités et les religions : un étudiant brésilien, la cuisine québécoise.',
          'Les formes et les caractéristiques physiques : une table ronde, un ton sec.',
          'Les participes employés comme adjectifs : une porte fermée, un document signé.',
          'Les adjectifs longs ou techniques : un projet important, une solution économique.'
        ]
      },

      { type: 'heading', text: 'Avant le nom : la beauté, l’âge, la bonté et la taille' },
      {
        type: 'table',
        headers: ['Groupe', 'Adjectifs', 'Exemple'],
        rows: [
          ['La beauté', 'beau, joli', 'un joli quartier'],
          ['L’âge', 'jeune, vieux, nouveau', 'une nouvelle voiture'],
          ['La bonté', 'bon, mauvais, gentil', 'une bonne idée'],
          ['La taille', 'grand, petit, gros, long', 'un petit appartement'],
          ['Autres adjectifs courants', 'autre, même, premier, dernier', 'une autre fois']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Devant un nom masculin qui commence par une voyelle ou un h muet, beau, nouveau et vieux deviennent bel, nouvel et vieil : ' +
          'un bel homme, un nouvel appartement, un vieil ami.'
      },

      { type: 'heading', text: 'Les adjectifs qui changent de sens' },
      {
        type: 'table',
        headers: ['Avant', 'Après'],
        rows: [
          [
            'un ancien collègue (une personne qui était collègue)',
            'une maison ancienne (une maison vieille)'
          ],
          ['un grand homme (un homme important)', 'un homme grand (un homme de grande taille)'],
          ['mon cher ami (un ami aimé)', 'un loyer cher (un loyer coûteux)'],
          [
            'ma propre voiture (la voiture qui est à moi)',
            'une voiture propre (une voiture nettoyée)'
          ],
          ['un seul enfant (un unique enfant)', 'un enfant seul (un enfant sans personne)'],
          [
            'la dernière semaine (la dernière d’une série)',
            'la semaine dernière (la semaine passée)'
          ]
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au pluriel devant le nom',
        text:
          'À l’écrit soigné, des devient de quand l’adjectif est placé avant le nom : de nouveaux collègues, de bonnes nouvelles. ' +
          'À l’oral, beaucoup de gens disent des, mais dans l’expression écrite de l’examen, préférez de.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'À l’examen',
        text:
          'En expression écrite, des adjectifs bien placés et bien accordés montrent une bonne maîtrise de la langue. Relisez votre texte à la fin en cherchant ' +
          'seulement les accords : chaque adjectif a-t-il le même genre et le même nombre que son nom ?'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Lawless French – Adjective Position',
      url: 'https://www.lawlessfrench.com/grammar/adjective-position/'
    },
    {
      title: 'Lawless French – Adjectives',
      url: 'https://www.lawlessfrench.com/grammar/adjectives/'
    },
    {
      title: 'Lawless French – Agreement',
      url: 'https://www.lawlessfrench.com/grammar/agreement/'
    },
    {
      title: 'Lawless French – Des + Adjective',
      url: 'https://www.lawlessfrench.com/grammar/des-plus-adjective/'
    },
    {
      title: 'Kwiziq French – Gramática por tema e nível',
      url: 'https://french.kwiziq.com/revision/grammar'
    }
  ]
}

export default content
