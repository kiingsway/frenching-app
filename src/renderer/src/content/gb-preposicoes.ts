import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-preposicoes',

  pt: {
    title: 'Preposições de lugar e tempo (à, en, au, chez, depuis, pendant, il y a)',
    summary:
      'As preposições de lugar dependem do tipo de lugar: cidade, país masculino ou feminino, casa de alguém, meio de transporte. ' +
      'As de tempo são a maior armadilha para quem fala português, porque o nosso "há" pode virar depuis, il y a ou pendant.',
    blocks: [
      { type: 'heading', text: 'Cidades, países e províncias' },
      {
        type: 'table',
        headers: ['Lugar', 'Estar em, ir para', 'Vir de'],
        rows: [
          ['Cidade', 'à Montréal, à Paris', 'de Montréal, de Paris'],
          [
            'País ou continente feminino (quase todos terminam em -e)',
            'en France, en Amérique',
            'de France, d’Amérique'
          ],
          ['País masculino', 'au Canada, au Brésil, au Japon', 'du Canada, du Brésil'],
          ['País masculino que começa por vogal', 'en Iran, en Ontario', 'd’Iran, de l’Ontario'],
          ['País no plural', 'aux États-Unis, aux Pays-Bas', 'des États-Unis'],
          [
            'Províncias do Canadá',
            'au Québec, au Manitoba, en Alberta, en Colombie-Britannique',
            'du Québec, de l’Alberta'
          ]
        ]
      },

      { type: 'heading', text: 'Outros lugares' },
      {
        type: 'list',
        items: [
          'Chez + pessoa ou profissional: chez moi, chez mes parents, chez le dentiste.',
          'Dans + um lugar fechado ou com artigo: dans la cuisine, dans le bureau du directeur.',
          'À + um lugar público ou um endereço: au travail, à la banque, à l’hôpital, au 25 rue Sherbrooke.',
          'Transportes: en voiture, en train, en avion, en métro (dentro do veículo), mas à pied e à vélo.'
        ]
      },

      { type: 'heading', text: 'Preposições de tempo' },
      {
        type: 'table',
        headers: ['Preposição', 'Uso', 'Exemplo'],
        rows: [
          ['à', 'hora exata', 'Le rendez-vous est à 14 h.'],
          [
            'en',
            'mês, ano, estação (exceto a primavera)',
            'en mai, en 2026, en hiver, au printemps'
          ],
          ['le', 'data (sem preposição)', 'Je pars le 3 juin.'],
          [
            'depuis',
            'desde quando ou há quanto tempo algo continua',
            'Je suis ici depuis 2024 / depuis deux ans.'
          ],
          ['il y a', 'há (tempo passado, ação terminada)', 'Je suis arrivé il y a deux ans.'],
          ['pendant', 'durante (duração completa)', 'J’ai travaillé là pendant cinq ans.'],
          ['pour', 'duração prevista', 'Je pars pour une semaine.'],
          ['en', 'tempo gasto para fazer algo', 'J’ai lu le livre en deux jours.'],
          ['dans', 'daqui a (futuro)', 'Le train part dans dix minutes.']
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'O "há" do português tem três traduções',
        text:
          '"Moro aqui há dois anos" (ainda moro): J’habite ici depuis deux ans, com o verbo no présent. ' +
          '"Cheguei há dois anos" (ação terminada): Je suis arrivé il y a deux ans. ' +
          '"Morei lá durante dois anos" (período fechado): J’ai habité là pendant deux ans.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Na prova',
        text:
          'Os textos e áudios sobre imigração estão cheios de au Canada, au Québec, en Ontario e depuis + présent. ' +
          'Nas questões de gramática, identifique primeiro o gênero do país e se a ação ainda continua.'
      }
    ]
  },

  fr: {
    title: 'Les prépositions de lieu et de temps (à, en, au, chez, depuis, pendant, il y a)',
    summary:
      'Les prépositions de lieu dépendent du type de lieu : une ville, un pays masculin ou féminin, la maison de quelqu’un, un moyen de transport. ' +
      'Les prépositions de temps sont le plus grand piège pour les lusophones, parce que le « há » portugais peut se traduire par depuis, il y a ou pendant.',
    blocks: [
      { type: 'heading', text: 'Les villes, les pays et les provinces' },
      {
        type: 'table',
        headers: ['Lieu', 'Être à, aller à', 'Venir de'],
        rows: [
          ['Une ville', 'à Montréal, à Paris', 'de Montréal, de Paris'],
          [
            'Un pays ou un continent féminin (presque tous se terminent par -e)',
            'en France, en Amérique',
            'de France, d’Amérique'
          ],
          ['Un pays masculin', 'au Canada, au Brésil, au Japon', 'du Canada, du Brésil'],
          [
            'Un pays masculin qui commence par une voyelle',
            'en Iran, en Ontario',
            'd’Iran, de l’Ontario'
          ],
          ['Un pays au pluriel', 'aux États-Unis, aux Pays-Bas', 'des États-Unis'],
          [
            'Les provinces canadiennes',
            'au Québec, au Manitoba, en Alberta, en Colombie-Britannique',
            'du Québec, de l’Alberta'
          ]
        ]
      },

      { type: 'heading', text: 'Les autres lieux' },
      {
        type: 'list',
        items: [
          'Chez + une personne ou un professionnel : chez moi, chez mes parents, chez le dentiste.',
          'Dans + un lieu fermé ou précédé d’un article : dans la cuisine, dans le bureau du directeur.',
          'À + un lieu public ou une adresse : au travail, à la banque, à l’hôpital, au 25 rue Sherbrooke.',
          'Les transports : en voiture, en train, en avion, en métro (à l’intérieur du véhicule), mais à pied et à vélo.'
        ]
      },

      { type: 'heading', text: 'Les prépositions de temps' },
      {
        type: 'table',
        headers: ['Préposition', 'Emploi', 'Exemple'],
        rows: [
          ['à', 'une heure précise', 'Le rendez-vous est à 14 h.'],
          [
            'en',
            'un mois, une année, une saison (sauf le printemps)',
            'en mai, en 2026, en hiver, au printemps'
          ],
          ['le', 'une date (sans préposition)', 'Je pars le 3 juin.'],
          [
            'depuis',
            'le point de départ ou la durée d’une action qui continue',
            'Je suis ici depuis 2024 / depuis deux ans.'
          ],
          ['il y a', 'un moment dans le passé, action terminée', 'Je suis arrivé il y a deux ans.'],
          ['pendant', 'une durée complète', 'J’ai travaillé là pendant cinq ans.'],
          ['pour', 'une durée prévue', 'Je pars pour une semaine.'],
          ['en', 'le temps nécessaire pour faire quelque chose', 'J’ai lu le livre en deux jours.'],
          [
            'dans',
            'un moment dans le futur, à partir de maintenant',
            'Le train part dans dix minutes.'
          ]
        ]
      },

      {
        type: 'callout',
        tone: 'warning',
        title: 'Le « há » portugais a trois traductions',
        text:
          'Une action qui continue : J’habite ici depuis deux ans, avec le verbe au présent. ' +
          'Une action terminée : Je suis arrivé il y a deux ans. ' +
          'Une période fermée : J’ai habité là pendant deux ans.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'À l’examen',
        text:
          'Les textes et les documents audio sur l’immigration sont pleins de au Canada, au Québec, en Ontario et depuis + présent. ' +
          'Dans les questions de grammaire, repérez d’abord le genre du pays et si l’action continue encore.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Lawless French – Prepositions with Continents and Countries',
      url: 'https://www.lawlessfrench.com/grammar/geographical-prepositions-continents-countries/'
    },
    {
      title: 'Lawless French – Geographical Prepositions',
      url: 'https://www.lawlessfrench.com/grammar/geographical-prepositions/'
    },
    { title: 'Lawless French – Chez', url: 'https://www.lawlessfrench.com/grammar/chez/' },
    { title: 'Lawless French – Il y a', url: 'https://www.lawlessfrench.com/grammar/il-y-a/' },
    {
      title: 'Lawless French – Depuis que',
      url: 'https://www.lawlessfrench.com/grammar/depuis-que/'
    },
    { title: 'Lawless French – En', url: 'https://www.lawlessfrench.com/grammar/en-preposition/' }
  ]
}

export default content
