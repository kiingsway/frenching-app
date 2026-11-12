import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-passe-compose',

  pt: {
    title: 'Passé composé: avoir ou être e a concordância do particípio',
    summary:
      'O [[passé composé|pretérito perfeito composto]] é o passado das ações concluídas, o equivalente do nosso pretérito perfeito ("fiz", "cheguei"). ' +
      'Forma-se com [[avoir|ter]] ou [[être|ser]] no [[présent|presente]] mais o particípio. A escolha do auxiliar e a concordância do particípio são os pontos mais cobrados.',
    blocks: [
      { type: 'heading', text: 'A formação' },
      {
        type: 'paragraph',
        text:
          'Auxiliar no [[présent|presente]] + particípio passado: [[J’ai travaillé.|Eu trabalhei.]] [[Elle est partie.|Ela partiu.]] ' +
          'Os particípios regulares terminam em -é para os verbos em -er ([[parler|falar]] → [[parlé|falado]]), -i para os em -ir ([[finir|terminar]] → [[fini|terminado]]) e -u para os em -re ([[attendre|esperar]] → [[attendu|esperado]]).'
      },
      {
        type: 'table',
        headers: ['Infinitivo', 'Particípio', 'Infinitivo', 'Particípio'],
        rows: [
          ['[[être|ser]]', '[[été|sido]]', '[[avoir|ter]]', '[[eu|tido]]'],
          ['[[faire|fazer]]', '[[fait|feito]]', '[[prendre|pegar]]', '[[pris|pegado]]'],
          ['[[mettre|colocar]]', '[[mis|colocado]]', '[[dire|dizer]]', '[[dit|dito]]'],
          ['[[écrire|escrever]]', '[[écrit|escrito]]', '[[voir|ver]]', '[[vu|visto]]'],
          ['[[pouvoir|poder]]', '[[pu|podido]]', '[[vouloir|querer]]', '[[voulu|querido]]'],
          ['[[devoir|dever]]', '[[dû|devido]]', '[[savoir|saber]]', '[[su|sabido]]'],
          ['[[lire|ler]]', '[[lu|lido]]', '[[boire|beber]]', '[[bu|bebido]]'],
          ['[[venir|vir]]', '[[venu|vindo]]', '[[ouvrir|abrir]]', '[[ouvert|aberto]]'],
          ['[[recevoir|receber]]', '[[reçu|recebido]]', '[[connaître|conhecer]]', '[[connu|conhecido]]'],
          ['[[naître|nascer]]', '[[né|nascido]]', '[[mourir|morrer]]', '[[mort|morto]]']
        ]
      },

      { type: 'heading', text: '[[Avoir ou être ?|Ter ou ser?]]' },
      {
        type: 'paragraph',
        text: 'A grande maioria dos verbos usa [[avoir|ter]]. Usam [[être|ser]] cerca de dezessete verbos de movimento ou mudança de estado e todos os verbos pronominais.'
      },
      {
        type: 'list',
        items: [
          'Movimento e mudança: [[aller|ir]], [[venir|vir]], [[arriver|chegar]], [[partir|partir]], [[entrer|entrar]], [[sortir|sair]], [[monter|subir]], [[descendre|descer]], [[tomber|cair]], [[rester|ficar]], [[retourner|voltar]], [[passer|passar]], [[naître|nascer]], [[mourir|morrer]], [[devenir|tornar-se]], [[revenir|voltar]], [[rentrer|voltar para casa]].',
          'Todos os pronominais: [[je me suis levé|eu me levantei]], [[elle s’est inscrite|ela se inscreveu]], [[nous nous sommes rencontrés|nós nos encontramos]].',
          '[[Sortir|sair]], [[monter|subir]], [[descendre|descer]], [[rentrer|voltar para casa]], [[retourner|voltar]] e [[passer|passar]] usam [[avoir|ter]] quando têm complemento direto: [[Je suis sorti hier soir.|Saí ontem à noite.]] mas [[J’ai sorti les poubelles.|Levei o lixo para fora.]]'
        ]
      },

      { type: 'heading', text: 'A concordância do particípio' },
      {
        type: 'list',
        items: [
          'Com [[être|ser]], o particípio concorda com o sujeito, como um adjetivo: [[Elle est arrivée.|Ela chegou.]] [[Ils sont partis.|Eles partiram.]] [[Nous sommes allées.|Nós fomos.]] (nós, duas mulheres)',
          'Com [[avoir|ter]], o particípio não concorda com o sujeito: [[Elles ont travaillé.|Elas trabalharam.]]',
          'Com [[avoir|ter]], ele concorda com o complemento direto quando este vem antes do verbo: [[La lettre que j’ai écrite.|A carta que escrevi.]] [[Ces photos, je les ai prises hier.|Essas fotos, tirei ontem.]]'
        ]
      },

      { type: 'heading', text: 'Negação e advérbios' },
      {
        type: 'paragraph',
        text:
          'A negação cerca o auxiliar: [[Je n’ai pas fini.|Não terminei.]] ' +
          'Advérbios curtos ficam entre o auxiliar e o particípio: [[J’ai déjà mangé.|Já comi.]] [[Il a bien dormi.|Ele dormiu bem.]] [[Nous avons beaucoup travaillé.|Trabalhamos muito.]]'
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Não é o "tenho feito" do português',
        text:
          '[[J’ai fait|Fiz]] quer dizer "fiz", uma ação concluída, e não "tenho feito". E uma ação que continua até hoje não vai para o [[passé composé|pretérito perfeito composto]]: ' +
          '"trabalho aqui há três anos" é [[Je travaille ici depuis trois ans.|Trabalho aqui há três anos.]]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'Na produção escrita e oral você vai contar experiências. Alterne o [[passé composé|pretérito perfeito composto]] (o que aconteceu) com o [[imparfait|pretérito imperfeito]] (o cenário, as descrições), ' +
          'que tem uma página própria. E confira a concordância com [[être|ser]]: [[elle est venue|ela veio]], [[elles sont restées|elas ficaram]].'
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
        text: 'La grande majorité des verbes se conjuguent avec avoir. Dix-sept verbes de mouvement ou de changement d’état et tous les verbes pronominaux se conjuguent avec être.'
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

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

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
