import type { FlashcardDeckDraft } from './types'

// Dar opinião e argumentar: expressões para a tarefa de opinião da produção escrita
// e para o debate da produção oral (seção B do TEF, tarefa 3 do TCF).
const deck: FlashcardDeckDraft = {
  id: 'opiniao',
  title: 'Dar opinião e argumentar',
  description: 'Para defender um ponto de vista, conceder, contra-argumentar e concluir.',
  sources: [
    {
      title: 'Vitrine linguistique (OQLF) – Banque de dépannage linguistique',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/'
    },
    { title: 'TV5Monde – Apprendre le français', url: 'https://apprendre.tv5monde.com/' },
    { title: 'Dictionnaire Le Robert', url: 'https://dictionnaire.lerobert.com/' }
  ],
  cards: [
    {
      fr: 'il me semble que',
      pt: 'parece-me que, tenho a impressão de que',
      example: {
        fr: 'Il me semble que cette mesure est injuste.',
        pt: 'Parece-me que essa medida é injusta.'
      },
      note: '+ indicativo. Já "il semble que" (sem "me") pede, em geral, o subjuntivo.'
    },
    {
      fr: 'je suis convaincu que',
      pt: 'estou convencido de que',
      example: {
        fr: 'Je suis convaincu que le télétravail améliore la qualité de vie.',
        pt: 'Estou convencido de que o teletrabalho melhora a qualidade de vida.'
      },
      note: '+ indicativo. No feminino: convaincue (mesma pronúncia). Na negativa (je ne suis pas convaincu que), + subjuntivo.'
    },
    {
      fr: 'force est de constater que',
      pt: 'é forçoso constatar que, temos de reconhecer que',
      example: {
        fr: 'Force est de constater que les loyers ont beaucoup augmenté.',
        pt: 'Temos de reconhecer que os aluguéis subiram muito.'
      },
      note: 'Registro formal: dá peso a um fato incontestável. + indicativo.'
    },
    {
      fr: 'd’un côté…, de l’autre…',
      pt: 'por um lado…, por outro…',
      example: {
        fr: 'D’un côté, la ville offre des emplois ; de l’autre, la vie y coûte cher.',
        pt: 'Por um lado, a cidade oferece empregos; por outro, a vida lá é cara.'
      },
      note: 'Também: d’une part…, d’autre part…'
    },
    {
      fr: 'à mon avis',
      pt: 'na minha opinião',
      example: {
        fr: 'À mon avis, il faudrait investir davantage dans les transports en commun.',
        pt: 'Na minha opinião, seria preciso investir mais no transporte público.'
      },
      note: 'Variante: selon moi. Evite "dans mon opinion", decalque do inglês/português.'
    },
    {
      fr: 'en ce qui me concerne',
      pt: 'no que me diz respeito, quanto a mim',
      example: {
        fr: 'En ce qui me concerne, je préfère vivre en région.',
        pt: 'No que me diz respeito, prefiro viver no interior.'
      }
    },
    {
      fr: 'je doute que',
      pt: 'duvido que',
      example: {
        fr: 'Je doute que cette solution soit efficace.',
        pt: 'Duvido que essa solução seja eficaz.'
      },
      note: 'Sempre + subjuntivo (soit, puisse, fasse…).'
    },
    {
      fr: 'on pourrait objecter que',
      pt: 'alguém poderia objetar que',
      example: {
        fr: 'On pourrait objecter que cette mesure coûte trop cher.',
        pt: 'Alguém poderia objetar que essa medida custa caro demais.'
      },
      note: 'Antecipa o argumento contrário para depois refutá-lo: muito valorizado na argumentação.'
    },
    {
      fr: 'je partage votre avis',
      pt: 'compartilho da sua opinião, concordo com você',
      example: {
        fr: 'Je partage votre avis sur ce point.',
        pt: 'Concordo com você nesse ponto.'
      },
      note: 'Com quem você trata por tu: je partage ton avis.'
    },
    {
      fr: 'je ne suis pas du tout d’accord',
      pt: 'não concordo de jeito nenhum',
      example: {
        fr: 'Je ne suis pas du tout d’accord avec cette idée.',
        pt: 'Não concordo de jeito nenhum com essa ideia.'
      },
      note: 'Mais suave: je ne suis pas tout à fait d’accord (não concordo totalmente).'
    },
    {
      fr: 'certes…, mais…',
      pt: 'é verdade que…, mas…; sem dúvida…, mas…',
      example: {
        fr: 'Certes, ce métier est exigeant, mais il est passionnant.',
        pt: 'É verdade que essa profissão é exigente, mas é apaixonante.'
      },
      note: 'Concessão: reconhece um ponto antes de defender o seu.'
    },
    {
      fr: 'en définitive',
      pt: 'em suma, afinal de contas',
      example: {
        fr: 'En définitive, les avantages l’emportent sur les inconvénients.',
        pt: 'Em suma, as vantagens superam as desvantagens.'
      },
      note: 'Para concluir. Também: en conclusion, pour conclure, somme toute.'
    },
    {
      fr: 'il est indéniable que',
      pt: 'é inegável que',
      example: {
        fr: 'Il est indéniable que le climat est en train de changer.',
        pt: 'É inegável que o clima está mudando.'
      },
      note: '+ indicativo.'
    },
    {
      fr: 'prenons l’exemple de',
      pt: 'tomemos o exemplo de',
      example: {
        fr: 'Prenons l’exemple du Canada : l’immigration y joue un rôle essentiel.',
        pt: 'Tomemos o exemplo do Canadá: a imigração tem ali um papel essencial.'
      },
      note: 'Para ilustrar um argumento. Contrações: l’exemple du, l’exemple des.'
    },
    {
      fr: 'j’estime que',
      pt: 'considero que, julgo que',
      example: {
        fr: 'J’estime que chacun a droit à un logement décent.',
        pt: 'Considero que todos têm direito a uma moradia digna.'
      },
      note: 'Mais formal que je pense que. + indicativo.'
    },
    {
      fr: 'il vaudrait mieux',
      pt: 'seria melhor',
      example: {
        fr: 'Il vaudrait mieux limiter la circulation au centre-ville.',
        pt: 'Seria melhor limitar o trânsito no centro da cidade.'
      },
      note: '+ infinitivo, ou que + subjuntivo (il vaudrait mieux que tu partes).'
    }
  ]
}

export default deck
