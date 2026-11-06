import type { FlashcardDeckDraft } from './types'

// Conectores e articuladores: amarram as ideias na produção escrita e oral.
// Usá-los com variedade e precisão é um dos critérios de coerência do NCLC 7.
const deck: FlashcardDeckDraft = {
  id: 'conectores',
  title: 'Conectores e articuladores',
  description: 'Para ligar ideias na produção escrita e oral: oposição, causa, consequência…',
  sources: [
    {
      title: 'Vitrine linguistique (OQLF) – Banque de dépannage linguistique',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/'
    },
    { title: 'Dictionnaire Le Robert', url: 'https://dictionnaire.lerobert.com/' },
    { title: 'Lawless French – Conjunctions', url: 'https://www.lawlessfrench.com/grammar/' }
  ],
  cards: [
    {
      fr: 'néanmoins',
      pt: 'no entanto, contudo',
      example: {
        fr: 'Le projet coûte cher ; néanmoins, il reste nécessaire.',
        pt: 'O projeto custa caro; no entanto, continua sendo necessário.'
      },
      note: 'Oposição/concessão, registro formal. Sinônimos: cependant, toutefois.'
    },
    {
      fr: 'en revanche',
      pt: 'por outro lado, em compensação',
      example: {
        fr: 'Le loyer est élevé à Montréal. En revanche, les transports sont efficaces.',
        pt: 'O aluguel é alto em Montreal. Em compensação, o transporte é eficiente.'
      },
      note: 'Contrasta dois fatos (um negativo, outro positivo, ou vice-versa).'
    },
    {
      fr: 'd’ailleurs',
      pt: 'aliás, além disso',
      example: {
        fr: 'Je préfère prendre le train ; d’ailleurs, c’est moins cher.',
        pt: 'Prefiro pegar o trem; aliás, é mais barato.'
      },
      note: 'Acrescenta um argumento que reforça o que foi dito.'
    },
    {
      fr: 'pour autant',
      pt: 'nem por isso',
      example: {
        fr: 'Elle est fatiguée, mais elle n’abandonne pas pour autant.',
        pt: 'Ela está cansada, mas nem por isso desiste.'
      },
      note: 'Quase sempre numa frase negativa: ne… pas pour autant.'
    },
    {
      fr: 'en outre',
      pt: 'além disso',
      example: {
        fr: 'Ce logement est bien situé. En outre, il est très lumineux.',
        pt: 'Esta moradia é bem localizada. Além disso, é muito iluminada.'
      },
      note: 'Registro formal, ótimo na produção escrita. Sinônimos: de plus, par ailleurs.'
    },
    {
      fr: 'cependant',
      pt: 'porém, entretanto',
      example: {
        fr: 'L’idée est intéressante ; cependant, elle est difficile à appliquer.',
        pt: 'A ideia é interessante; porém, é difícil de aplicar.'
      }
    },
    {
      fr: 'par conséquent',
      pt: 'por conseguinte, consequentemente',
      example: {
        fr: 'Les prix augmentent ; par conséquent, les familles consomment moins.',
        pt: 'Os preços sobem; consequentemente, as famílias consomem menos.'
      },
      note: 'Introduz uma consequência. Sinônimos: donc, c’est pourquoi, ainsi.'
    },
    {
      fr: 'or',
      pt: 'ora, acontece que',
      example: {
        fr: 'Il voulait partir en voyage ; or, il n’avait plus d’argent.',
        pt: 'Ele queria viajar; acontece que não tinha mais dinheiro.'
      },
      note: 'Introduz um fato novo que muda o rumo do raciocínio. Não confunda com ou (= ou).'
    },
    {
      fr: 'bien que',
      pt: 'embora',
      example: {
        fr: 'Bien qu’il pleuve, nous sortirons.',
        pt: 'Embora esteja chovendo, vamos sair.'
      },
      note: 'Sempre + subjuntivo (qu’il pleuve, qu’elle soit…).'
    },
    {
      fr: 'alors que',
      pt: 'enquanto, ao passo que',
      example: {
        fr: 'Il dépense beaucoup, alors que son frère économise.',
        pt: 'Ele gasta muito, ao passo que o irmão economiza.'
      },
      note: 'Contraste entre dois fatos simultâneos. + indicativo.'
    },
    {
      fr: 'au lieu de',
      pt: 'em vez de',
      example: {
        fr: 'Au lieu de te plaindre, propose une solution.',
        pt: 'Em vez de reclamar, proponha uma solução.'
      },
      note: '+ infinitivo ou + substantivo (au lieu du train).'
    },
    {
      fr: 'c’est pourquoi',
      pt: 'é por isso que',
      example: {
        fr: 'Je veux travailler au Québec ; c’est pourquoi j’apprends le français.',
        pt: 'Quero trabalhar no Québec; é por isso que estou aprendendo francês.'
      }
    },
    {
      fr: 'grâce à',
      pt: 'graças a',
      example: {
        fr: 'Grâce à ce programme, j’ai trouvé un emploi.',
        pt: 'Graças a este programa, encontrei um emprego.'
      },
      note: 'Causa com resultado positivo. Para causa negativa, use à cause de.'
    },
    {
      fr: 'à cause de',
      pt: 'por causa de',
      example: {
        fr: 'Le vol a été annulé à cause de la tempête.',
        pt: 'O voo foi cancelado por causa da tempestade.'
      },
      note: 'Causa com resultado negativo ou neutro. + substantivo (à cause du, à cause des).'
    },
    {
      fr: 'afin de',
      pt: 'a fim de, para',
      example: {
        fr: 'Il économise afin d’acheter une maison.',
        pt: 'Ele economiza a fim de comprar uma casa.'
      },
      note: 'Finalidade: afin de + infinitivo; afin que + subjuntivo.'
    },
    {
      fr: 'quant à',
      pt: 'quanto a',
      example: {
        fr: 'Quant à moi, je préfère vivre à la campagne.',
        pt: 'Quanto a mim, prefiro viver no campo.'
      },
      note: 'Contrações: quant au, quant aux.'
    },
    {
      fr: 'en effet',
      pt: 'de fato, com efeito',
      example: {
        fr: 'Il faut réserver tôt. En effet, les places sont limitées.',
        pt: 'É preciso reservar cedo. De fato, as vagas são limitadas.'
      },
      note: 'Confirma ou justifica o que acabou de ser dito.'
    }
  ]
}

export default deck
