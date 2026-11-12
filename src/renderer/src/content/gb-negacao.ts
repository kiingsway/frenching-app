import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-negacao',

  pt: {
    title: 'Negação: ne… pas, jamais, rien, personne, plus',
    summary:
      'A negação francesa tem duas partes que cercam o verbo conjugado: [[ne|não]] antes e [[pas|não]] (ou [[jamais|nunca]], [[rien|nada]], [[personne|ninguém]], [[plus|não mais]]…) depois. ' +
      'Na fala informal o [[ne|não]] quase some, mas na escrita ele é obrigatório. E, ao contrário do português, não se juntam duas negações.',
    blocks: [
      { type: 'heading', text: 'A estrutura básica' },
      {
        type: 'list',
        items: [
          '[[Ne|não]] e [[pas|não]] cercam o verbo conjugado: [[Je ne travaille pas le lundi.|Não trabalho às segundas.]]',
          'Antes de vogal ou h mudo, [[ne|não]] vira [[n’|não]]: [[Il n’habite pas ici.|Ele não mora aqui.]]',
          'Os pronomes ficam dentro da negação: [[Je ne le connais pas.|Não o conheço.]]',
          'Nos tempos compostos, a negação cerca o auxiliar: [[Je n’ai pas compris.|Não entendi.]]',
          'Com infinitivo, [[ne pas|não]] vem junto, antes dele: [[Il m’a demandé de ne pas fumer.|Ele me pediu para não fumar.]]'
        ]
      },

      { type: 'heading', text: 'As outras negações' },
      {
        type: 'table',
        headers: ['Negação', 'Sentido', 'Exemplo'],
        rows: [
          ['[[ne… jamais|nunca]]', 'nunca', '[[Je ne bois jamais de café.|Nunca bebo café.]]'],
          ['[[ne… plus|não mais]]', 'não… mais', '[[Elle ne travaille plus ici.|Ela não trabalha mais aqui.]]'],
          ['[[ne… rien|nada]]', 'nada', '[[Je ne comprends rien.|Não entendo nada.]]'],
          ['[[ne… personne|ninguém]]', 'ninguém', '[[Je ne connais personne.|Não conheço ninguém.]]'],
          ['[[ne… pas encore|ainda não]]', 'ainda não', '[[Il n’est pas encore arrivé.|Ele ainda não chegou.]]'],
          ['[[ne… aucun|nenhum]], [[ne… aucune|nenhuma]]', 'nenhum, nenhuma', '[[Je n’ai aucune idée.|Não tenho nenhuma ideia.]]'],
          ['[[ne… ni… ni|nem… nem]]', 'nem… nem', '[[Je ne bois ni thé ni café.|Não bebo nem chá nem café.]]'],
          ['[[ne… que|só]]', 'só, apenas (não é negação)', '[[Je n’ai que dix dollars.|Só tenho dez dólares.]]']
        ]
      },

      { type: 'heading', text: 'Detalhes que costumam gerar erro' },
      {
        type: 'list',
        items: [
          '[[Personne|ninguém]] e [[rien|nada]] podem ser sujeito, e aí vêm primeiro: [[Personne n’est venu.|Ninguém veio.]] [[Rien ne change.|Nada muda.]]',
          'No [[passé composé|pretérito perfeito composto]], [[rien|nada]] fica antes do particípio e [[personne|ninguém]] vai depois: [[Je n’ai rien vu.|Não vi nada.]] [[Je n’ai vu personne.|Não vi ninguém.]]',
          'Depois da negação, [[un|um]], [[une|uma]], [[des|uns / umas]] e o partitivo viram [[de|de]]: [[Je n’ai pas de voiture.|Não tenho carro.]]',
          'Para responder "sim" a uma pergunta negativa, use [[si|sim]]: — [[Tu ne viens pas ?|Você não vem?]] — [[Si, je viens !|Sim, eu venho!]]'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Não junte duas negações',
        text:
          'Em português dizemos "não vi ninguém" e "não fiz nada". Em francês, [[personne|ninguém]] e [[rien|nada]] já substituem o [[pas|não]]: [[Je n’ai vu personne|Não vi ninguém]], [[Je n’ai rien fait|Não fiz nada]]. ' +
          '[[Je n’ai pas vu personne|Não vi ninguém (errado)]] está errado.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na compreensão oral',
        text:
          'Na fala do dia a dia o [[ne|não]] desaparece: [[J’sais pas|Não sei]], [[C’est pas grave|Não é grave]], [[Il y a personne|Não tem ninguém]]. Reconheça essas formas ao ouvir, ' +
          'mas use sempre o [[ne|não]] na produção escrita e, de preferência, também na produção oral da prova.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'Nenhuma fonte oficial da prova confirma que esses detalhes de negação são cobrados, nem em quais tarefas. ' +
          'Também não há fonte para a recomendação de usar sempre o ne na produção oral. ' +
          'Trate esses pontos como conselho de preparação, não como regra da prova.'
      }
    ]
  },

  fr: {
    title: 'La négation : ne… pas, jamais, rien, personne, plus',
    summary:
      'La négation française a deux parties qui entourent le verbe conjugué : ne avant, et pas (ou jamais, rien, personne, plus…) après. ' +
      'À l’oral familier, le ne disparaît presque, mais à l’écrit il est obligatoire. Et, contrairement au portugais, on ne combine pas deux négations.',
    blocks: [
      { type: 'heading', text: 'La structure de base' },
      {
        type: 'list',
        items: [
          'Ne et pas entourent le verbe conjugué : Je ne travaille pas le lundi.',
          'Devant une voyelle ou un h muet, ne devient n’ : Il n’habite pas ici.',
          'Les pronoms restent à l’intérieur de la négation : Je ne le connais pas.',
          'Aux temps composés, la négation entoure l’auxiliaire : Je n’ai pas compris.',
          'Avec un infinitif, ne pas se place ensemble, devant lui : Il m’a demandé de ne pas fumer.'
        ]
      },

      { type: 'heading', text: 'Les autres négations' },
      {
        type: 'table',
        headers: ['Négation', 'Sens', 'Exemple'],
        rows: [
          ['ne… jamais', 'à aucun moment', 'Je ne bois jamais de café.'],
          ['ne… plus', 'cela a cessé', 'Elle ne travaille plus ici.'],
          ['ne… rien', 'aucune chose', 'Je ne comprends rien.'],
          ['ne… personne', 'aucune personne', 'Je ne connais personne.'],
          ['ne… pas encore', 'pas jusqu’à maintenant', 'Il n’est pas encore arrivé.'],
          ['ne… aucun, aucune', 'pas un seul', 'Je n’ai aucune idée.'],
          ['ne… ni… ni', 'ni l’un ni l’autre', 'Je ne bois ni thé ni café.'],
          ['ne… que', 'seulement (ce n’est pas une négation)', 'Je n’ai que dix dollars.']
        ]
      },

      { type: 'heading', text: 'Les détails qui causent des erreurs' },
      {
        type: 'list',
        items: [
          'Personne et rien peuvent être sujets ; ils se placent alors en premier : Personne n’est venu. Rien ne change.',
          'Au passé composé, rien se place avant le participe et personne après : Je n’ai rien vu. Je n’ai vu personne.',
          'Après la négation, un, une, des et le partitif deviennent de : Je n’ai pas de voiture.',
          'Pour répondre « oui » à une question négative, on utilise si : — Tu ne viens pas ? — Si, je viens !'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne combinez pas deux négations',
        text:
          'En portugais, on dit « não vi ninguém » et « não fiz nada ». En français, personne et rien remplacent déjà pas : Je n’ai vu personne, Je n’ai rien fait. ' +
          '« Je n’ai pas vu personne » est incorrect.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'En compréhension orale',
        text:
          'Dans la langue de tous les jours, le ne disparaît : J’sais pas, C’est pas grave, Il y a personne. Reconnaissez ces formes à l’écoute, ' +
          'mais utilisez toujours le ne en expression écrite et, de préférence, aussi en expression orale à l’examen.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Aucune source officielle de l’épreuve ne confirme que ces détails de la négation sont évalués, ni dans quelles tâches. ' +
          'Il n’y a pas non plus de source pour la recommandation d’utiliser toujours le ne en expression orale. ' +
          'Ces points sont des conseils de préparation, pas des règles de l’épreuve.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Lawless French – Negative Adverbs',
      url: 'https://www.lawlessfrench.com/grammar/negative-adverbs/'
    },
    {
      title: 'Lawless French – Negative Pronouns',
      url: 'https://www.lawlessfrench.com/grammar/negative-pronouns/'
    },
    {
      title: 'Lawless French – Informal Negation',
      url: 'https://www.lawlessfrench.com/grammar/informal-negation/'
    },
    {
      title: 'Lawless French – Negative de',
      url: 'https://www.lawlessfrench.com/grammar/negative-de/'
    },
    {
      title: 'Kwiziq French – Gramática por tema e nível',
      url: 'https://french.kwiziq.com/revision/grammar'
    }
  ]
}

export default content
