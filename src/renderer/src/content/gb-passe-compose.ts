import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-passe-compose',

  pt: {
    title: 'Passé composé: avoir ou être e a concordância do particípio',
    summary:
      'O passé composé é o passado das ações concluídas, o equivalente do nosso pretérito perfeito ("fiz", "cheguei"). ' +
      'Forma-se com avoir ou être no présent mais o particípio. A escolha do auxiliar e a concordância do particípio são os pontos mais cobrados.',
    blocks: [
      { type: 'heading', text: 'A formação' },
      {
        type: 'paragraph',
        text:
          'Auxiliar no présent + particípio passado: J’ai travaillé. Elle est partie. ' +
          'Os particípios regulares terminam em -é para os verbos em -er (parler → parlé), -i para os em -ir (finir → fini) e -u para os em -re (attendre → attendu).'
      },
      {
        type: 'table',
        headers: ['Infinitivo', 'Particípio', 'Infinitivo', 'Particípio'],
        rows: [
          ['être', 'été', 'avoir', 'eu'],
          ['faire', 'fait', 'prendre', 'pris'],
          ['mettre', 'mis', 'dire', 'dit'],
          ['écrire', 'écrit', 'voir', 'vu'],
          ['pouvoir', 'pu', 'vouloir', 'voulu'],
          ['devoir', 'dû', 'savoir', 'su'],
          ['lire', 'lu', 'boire', 'bu'],
          ['venir', 'venu', 'ouvrir', 'ouvert'],
          ['recevoir', 'reçu', 'connaître', 'connu'],
          ['naître', 'né', 'mourir', 'mort']
        ]
      },

      { type: 'heading', text: 'Avoir ou être?' },
      {
        type: 'paragraph',
        text: 'A grande maioria dos verbos usa avoir. Usam être cerca de quinze verbos de movimento ou mudança de estado e todos os verbos pronominais.'
      },
      {
        type: 'list',
        items: [
          'Movimento e mudança: aller, venir, arriver, partir, entrer, sortir, monter, descendre, tomber, rester, retourner, passer, naître, mourir, devenir, revenir, rentrer.',
          'Todos os pronominais: je me suis levé, elle s’est inscrite, nous nous sommes rencontrés.',
          'Sortir, monter, descendre, rentrer, retourner e passer usam avoir quando têm complemento direto: Je suis sorti hier soir, mas J’ai sorti les poubelles.'
        ]
      },

      { type: 'heading', text: 'A concordância do particípio' },
      {
        type: 'list',
        items: [
          'Com être, o particípio concorda com o sujeito, como um adjetivo: Elle est arrivée. Ils sont partis. Nous (duas mulheres) sommes allées.',
          'Com avoir, o particípio não concorda com o sujeito: Elles ont travaillé.',
          'Com avoir, ele concorda com o complemento direto quando este vem antes do verbo: La lettre que j’ai écrite. Ces photos, je les ai prises hier.'
        ]
      },

      { type: 'heading', text: 'Negação e advérbios' },
      {
        type: 'paragraph',
        text: 'A negação cerca o auxiliar: Je n’ai pas fini. Advérbios curtos ficam entre o auxiliar e o particípio: J’ai déjà mangé, Il a bien dormi, Nous avons beaucoup travaillé.'
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Não é o "tenho feito" do português',
        text:
          'J’ai fait quer dizer "fiz", uma ação concluída, e não "tenho feito". E uma ação que continua até hoje não vai para o passé composé: ' +
          '"trabalho aqui há três anos" é Je travaille ici depuis trois ans.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'Na produção escrita e oral você vai contar experiências. Alterne o passé composé (o que aconteceu) com o imparfait (o cenário, as descrições), ' +
          'que tem uma página própria. E confira a concordância com être: elle est venue, elles sont restées.'
      }
    ]
  },

  fr: {
    title: 'Le passé composé : avoir ou être et l’accord du participe',
    summary:
      'Le passé composé est le temps des actions terminées dans le passé, l’équivalent du « pretérito perfeito » portugais. ' +
      'On le forme avec avoir ou être au présent suivi du participe passé. Le choix de l’auxiliaire et l’accord du participe sont les points les plus évalués.',
    blocks: [
      { type: 'heading', text: 'La formation' },
      {
        type: 'paragraph',
        text:
          'Auxiliaire au présent + participe passé : J’ai travaillé. Elle est partie. ' +
          'Les participes réguliers se terminent par -é pour les verbes en -er (parler → parlé), par -i pour les verbes en -ir (finir → fini) et par -u pour les verbes en -re (attendre → attendu).'
      },
      {
        type: 'table',
        headers: ['Infinitif', 'Participe', 'Infinitif', 'Participe'],
        rows: [
          ['être', 'été', 'avoir', 'eu'],
          ['faire', 'fait', 'prendre', 'pris'],
          ['mettre', 'mis', 'dire', 'dit'],
          ['écrire', 'écrit', 'voir', 'vu'],
          ['pouvoir', 'pu', 'vouloir', 'voulu'],
          ['devoir', 'dû', 'savoir', 'su'],
          ['lire', 'lu', 'boire', 'bu'],
          ['venir', 'venu', 'ouvrir', 'ouvert'],
          ['recevoir', 'reçu', 'connaître', 'connu'],
          ['naître', 'né', 'mourir', 'mort']
        ]
      },

      { type: 'heading', text: 'Avoir ou être ?' },
      {
        type: 'paragraph',
        text: 'La grande majorité des verbes se conjuguent avec avoir. Une quinzaine de verbes de mouvement ou de changement d’état et tous les verbes pronominaux se conjuguent avec être.'
      },
      {
        type: 'list',
        items: [
          'Mouvement et changement : aller, venir, arriver, partir, entrer, sortir, monter, descendre, tomber, rester, retourner, passer, naître, mourir, devenir, revenir, rentrer.',
          'Tous les verbes pronominaux : je me suis levé, elle s’est inscrite, nous nous sommes rencontrés.',
          'Sortir, monter, descendre, rentrer, retourner et passer se conjuguent avec avoir quand ils ont un complément d’objet direct : Je suis sorti hier soir, mais J’ai sorti les poubelles.'
        ]
      },

      { type: 'heading', text: 'L’accord du participe' },
      {
        type: 'list',
        items: [
          'Avec être, le participe s’accorde avec le sujet, comme un adjectif : Elle est arrivée. Ils sont partis. Nous (deux femmes) sommes allées.',
          'Avec avoir, le participe ne s’accorde pas avec le sujet : Elles ont travaillé.',
          'Avec avoir, il s’accorde avec le complément d’objet direct quand celui-ci est placé avant le verbe : La lettre que j’ai écrite. Ces photos, je les ai prises hier.'
        ]
      },

      { type: 'heading', text: 'La négation et les adverbes' },
      {
        type: 'paragraph',
        text: 'La négation entoure l’auxiliaire : Je n’ai pas fini. Les adverbes courts se placent entre l’auxiliaire et le participe : J’ai déjà mangé, Il a bien dormi, Nous avons beaucoup travaillé.'
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Ce n’est pas le « tenho feito » portugais',
        text:
          'J’ai fait exprime une action terminée, et non une action répétée jusqu’à aujourd’hui. Une action qui continue encore ne se met pas au passé composé : ' +
          'on dit Je travaille ici depuis trois ans.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'À l’examen',
        text:
          'En expression écrite et orale, vous raconterez des expériences. Alternez le passé composé (ce qui s’est passé) et l’imparfait (le décor, les descriptions), ' +
          'qui a sa propre page. Et vérifiez l’accord avec être : elle est venue, elles sont restées.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Lawless French – Passé composé',
      url: 'https://www.lawlessfrench.com/grammar/passe-compose/'
    },
    {
      title: 'Lawless French – Passé composé Conjugations',
      url: 'https://www.lawlessfrench.com/grammar/passe-compose-conjugations/'
    },
    {
      title: 'Lawless French – Past Participle',
      url: 'https://www.lawlessfrench.com/grammar/past-participle/'
    },
    {
      title: 'Lawless French – Agreement with Direct Objects',
      url: 'https://www.lawlessfrench.com/grammar/agreement-with-direct-objects/'
    },
    {
      title: 'Le Conjugueur (Le Figaro) – conjugação de qualquer verbo',
      url: 'https://leconjugueur.lefigaro.fr/'
    }
  ]
}

export default content
