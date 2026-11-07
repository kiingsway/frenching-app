import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-negacao',

  pt: {
    title: 'Negação: ne… pas, jamais, rien, personne, plus',
    summary:
      'A negação francesa tem duas partes que cercam o verbo conjugado: ne antes e pas (ou jamais, rien, personne, plus…) depois. ' +
      'Na fala informal o ne quase some, mas na escrita ele é obrigatório. E, ao contrário do português, não se juntam duas negações.',
    blocks: [
      { type: 'heading', text: 'A estrutura básica' },
      {
        type: 'list',
        items: [
          'Ne e pas cercam o verbo conjugado: Je ne travaille pas le lundi.',
          'Antes de vogal ou h mudo, ne vira n’: Il n’habite pas ici.',
          'Os pronomes ficam dentro da negação: Je ne le connais pas.',
          'Nos tempos compostos, a negação cerca o auxiliar: Je n’ai pas compris.',
          'Com infinitivo, ne pas vem junto, antes dele: Il m’a demandé de ne pas fumer.'
        ]
      },

      { type: 'heading', text: 'As outras negações' },
      {
        type: 'table',
        headers: ['Negação', 'Sentido', 'Exemplo'],
        rows: [
          ['ne… jamais', 'nunca', 'Je ne bois jamais de café.'],
          ['ne… plus', 'não… mais', 'Elle ne travaille plus ici.'],
          ['ne… rien', 'nada', 'Je ne comprends rien.'],
          ['ne… personne', 'ninguém', 'Je ne connais personne.'],
          ['ne… pas encore', 'ainda não', 'Il n’est pas encore arrivé.'],
          ['ne… aucun, aucune', 'nenhum, nenhuma', 'Je n’ai aucune idée.'],
          ['ne… ni… ni', 'nem… nem', 'Je ne bois ni thé ni café.'],
          ['ne… que', 'só, apenas (não é negação)', 'Je n’ai que dix dollars.']
        ]
      },

      { type: 'heading', text: 'Detalhes que a prova cobra' },
      {
        type: 'list',
        items: [
          'Personne e rien podem ser sujeito, e aí vêm primeiro: Personne n’est venu. Rien ne change.',
          'No passé composé, rien fica antes do particípio e personne vai depois: Je n’ai rien vu. Je n’ai vu personne.',
          'Depois da negação, un, une, des e o partitivo viram de: Je n’ai pas de voiture.',
          'Para responder "sim" a uma pergunta negativa, use si: — Tu ne viens pas ? — Si, je viens !'
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Não junte duas negações',
        text:
          'Em português dizemos "não vi ninguém" e "não fiz nada". Em francês, personne e rien já substituem o pas: Je n’ai vu personne, Je n’ai rien fait. ' +
          '"Je n’ai pas vu personne" está errado.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na compreensão oral',
        text:
          'Na fala do dia a dia o ne desaparece: J’sais pas, C’est pas grave, Il y a personne. Reconheça essas formas ao ouvir, ' +
          'mas use sempre o ne na produção escrita e, de preferência, também na produção oral da prova.'
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

      { type: 'heading', text: 'Les détails évalués à l’examen' },
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
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

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
