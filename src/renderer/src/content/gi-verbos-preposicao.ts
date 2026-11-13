import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-verbos-preposicao',

  pt: {
    title: 'Verbos com preposição fixa: penser à / penser de, manquer à e plaire à',
    summary:
      'Você vai aprender como três verbos franceses exigem preposições específicas e como essas preposições podem mudar o significado da frase. ' +
      'Também vai entender a lógica de construção de cada verbo, a posição dos complementos e os erros de tradução mais comuns entre falantes de português.',
    blocks: [
      { type: 'heading', text: 'Por que as preposições são importantes' },
      {
        type: 'paragraph',
        text:
          'Em francês, muitos verbos exigem uma preposição específica antes do complemento. Essa construção nem sempre corresponde à utilizada em português. ' +
          'Além disso, trocar a preposição pode alterar o significado do verbo. ' +
          'Por isso, memorize cada verbo junto com sua preposição e observe quem pratica ou recebe a ação.'
      },
      {
        type: 'table',
        headers: ['Construção', 'Significado', 'Exemplo'],
        rows: [
            [
              '[[penser à + nom|pensar em + substantivo]]',
              'Pensar em alguém ou alguma coisa; ter algo em mente.',
              '[[Je pense à mon travail.|Estou pensando no meu trabalho.]]'
            ],
            [
              '[[penser de + nom|ter opinião sobre + substantivo]]',
              'Ter ou expressar uma opinião sobre alguém ou alguma coisa.',
              '[[Que penses-tu de cette idée ?|O que você acha desta ideia?]]'
            ],
            [
              '[[manquer à + personne|fazer falta a + pessoa]]',
              'Fazer falta a alguém; ser uma pessoa ou coisa cuja ausência é sentida.',
              '[[Tu me manques.|Sinto sua falta.]]'
            ],
            [
              '[[manquer de + nom|faltar + substantivo]]',
              'Não ter algo em quantidade suficiente; estar com falta de alguma coisa.',
              '[[Nous manquons de temps.|Estamos com falta de tempo.]]'
            ],
            [
              '[[plaire à + personne|agradar a + pessoa]]',
              'Agradar a alguém; ser algo de que uma pessoa gosta.',
              '[[Ce livre me plaît.|Gosto deste livro.]]'
            ]
        ]
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[Je pense à mon rendez-vous de demain.|Estou pensando no meu compromisso de amanhã.]]',
          '[[Je pense à envoyer le courriel avant la fin de semaine.|Estou pensando em enviar o e-mail antes do fim de semana.]]',
          '[[Que penses-tu de cette proposition ?|O que você acha desta proposta?]]',
          '[[Qu’en pensez-vous ?|O que vocês acham disso?]]',
          '[[Mes enfants me manquent quand je suis en déplacement.|Sinto falta dos meus filhos quando estou viajando.]]',
          '[[Je manque à mes amis depuis mon déménagement à Toronto.|Meus amigos sentem minha falta desde que me mudei para Toronto.]]',
          '[[Ce film me plaît, mais les autres films de la série ne me plaisent pas.|Gosto deste filme, mas não gosto dos outros filmes da série.]]',
          '[[Cette nouvelle proposition plaît aux résidents.|Esta nova proposta agrada aos moradores.]]'
        ]
      },
      { type: 'heading', text: 'Substituição por pronomes' },
      {
        type: 'paragraph',
        text:
          'A preposição também influencia a escolha do pronome que substitui o complemento. ' +
          'Com [[penser à|pensar em]], um objeto ou uma ideia pode ser substituído por [[y|nisso]], enquanto uma pessoa normalmente exige um pronome tônico: [[Je pense à ce projet. ' +
          '→ J’y pense.|Penso neste projeto. → Penso nisso.]] [[Je pense à Marie. → Je pense à elle.|Penso em Marie. → Penso nela.]] ' +
          'Com [[penser de|ter uma opinião sobre]], o pronome [[en|disso]] pode substituir o complemento: [[Que penses-tu de ce livre ? ' +
          '→ Qu’en penses-tu ?|O que você acha deste livro? → O que você acha dele?]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a inversão em manquer',
        text:
          'Um erro frequente é traduzir literalmente “sentir falta de” e inverter a estrutura francesa, sob a influência do inglês “I miss you”. ' +
          'O OQLF considera [[Je te manque.|Sinto sua falta. (errado)]] incorreto e capaz de causar contrassentidos. ' +
          'Em francês, a pessoa ausente é o sujeito de [[manquer|fazer falta]] e quem sente a ausência é o complemento: [[Tu me manques.|Sinto sua falta.]] ' +
          'Portanto, [[Mes amis me manquent.|Sinto falta dos meus amigos.]] significa que você sente falta deles. ' +
          'Já [[Je manque à mes amis.|Meus amigos sentem minha falta.]] significa que eles sentem sua ausência. ' +
          'Atenção: [[Je vous ai manqué.|Não consegui encontrar você.]] é correto e significa que não se conseguiu encontrar a pessoa. ' +
          'Também não confunda [[plaire|agradar]] com [[aimer|gostar de]]: em [[Cette idée me plaît.|Gosto desta ideia.]], quem determina a concordância do verbo é [[cette idée|esta ideia]], não a pessoa que gosta.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Nos exercícios de compreensão e produção, observe a preposição exigida pelo verbo e a função de cada complemento. ' +
          'Pratique especialmente a diferença entre [[penser à|pensar em]] ' +
          'e [[penser de|ter uma opinião sobre]], a inversão de sujeito e complemento em [[manquer à|fazer falta a]] e a concordância de [[plaire à|agradar a]]. ' +
          'Memorize exemplos completos em vez de estudar apenas o significado isolado dos verbos.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O OQLF confirma [[manquer de|faltar]] com substantivo, [[manquer à|fazer falta a]] no sentido de “ser sentido como ausente” e o erro de [[Je te manque.|Sinto sua falta. (errado)]]. ' +
          'O Lawless French confirma [[penser à|pensar em]] e [[penser de|ter opinião sobre]], com [[y|nisso]] e [[en|disso]], e o Progress with Lawless French confirma que o verbo [[plaire|agradar]] concorda com a coisa de que se gosta. ' +
          'Não têm fonte: o uso do pronome tônico com pessoas depois de [[penser à|pensar em]], os exemplos e a dica para a prova. ' +
          'Esses pontos são material didático, não regra oficial. As páginas consultadas não indicam se esses verbos são exigidos em alguma questão do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Les verbes à préposition fixe : penser à / penser de, manquer à et plaire à',
    summary:
      'Vous apprendrez comment trois verbes français exigent des prépositions particulières et comment ces prépositions peuvent modifier le sens de la phrase. ' +
      'Vous comprendrez également la construction de chaque verbe, la position des compléments et les erreurs de traduction les plus fréquentes chez les personnes lusophones.',
    blocks: [
      { type: 'heading', text: 'Pourquoi les prépositions sont-elles importantes ?' },
      {
        type: 'paragraph',
        text:
          'En français, de nombreux verbes exigent une préposition particulière devant leur complément. ' +
          'Cette construction ne correspond pas toujours à celle utilisée en portugais. De plus, changer la préposition peut modifier le sens du verbe. ' +
          'Il faut donc mémoriser chaque verbe avec sa préposition et observer qui accomplit l’action ou qui la reçoit.'
      },
      {
        type: 'table',
        headers: ['Construction', 'Signification', 'Exemple'],
        rows: [
            [
              'penser à + nom',
              'Avoir quelqu’un ou quelque chose à l’esprit ; songer à quelque chose.',
              'Je pense à mon travail.'
            ],
            [
              'penser de + nom',
              'Avoir ou exprimer une opinion sur quelqu’un ou quelque chose.',
              'Que penses-tu de cette idée ?'
            ],
            [
              'manquer à + personne',
              'Être regretté par quelqu’un ; être une personne ou une chose dont l’absence se fait sentir.',
              'Tu me manques.'
            ],
            [
              'manquer de + nom',
              'Ne pas avoir quelque chose en quantité suffisante ; être privé de quelque chose.',
              'Nous manquons de temps.'
            ],
            [
              'plaire à + personne',
              'Être agréable à quelqu’un ; être quelque chose que cette personne apprécie.',
              'Ce livre me plaît.'
            ]
        ]
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'list',
        items: [
          'Je pense à mon rendez-vous de demain.',
          'Je pense à envoyer le courriel avant la fin de semaine.',
          'Que penses-tu de cette proposition ?',
          'Qu’en pensez-vous ?',
          'Mes enfants me manquent quand je suis en déplacement.',
          'Je manque à mes amis depuis mon déménagement à Toronto.',
          'Ce film me plaît, mais les autres films de la série ne me plaisent pas.',
          'Cette nouvelle proposition plaît aux résidents.'
        ]
      },
      { type: 'heading', text: 'Remplacement par des pronoms' },
      {
        type: 'paragraph',
        text:
          'La préposition influence également le choix du pronom qui remplace le complément. ' +
          'Avec penser à, un objet ou une idée peut être remplacé par y, tandis qu’une personne demande généralement un pronom tonique : « Je pense à ce projet. ' +
          '→ J’y pense. » « Je pense à Marie. → Je pense à elle. » Avec penser de, le pronom en peut remplacer le complément : « Que penses-tu de ce livre ? ' +
          '→ Qu’en penses-tu ? »'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à l’inversion avec manquer',
        text:
          'Une erreur fréquente consiste à traduire littéralement « sentir falta de » et à inverser la construction française, sous l’influence de l’anglais « I miss you ». ' +
          'L’OQLF juge « Je te manque » incorrect, car il peut conduire à des contresens. ' +
          'En français, la personne absente est le sujet de manquer et celle qui ressent l’absence est le complément : « Tu me manques ». ' +
          'Ainsi, « Mes amis me manquent » signifie que vous ressentez leur absence. En revanche, « Je manque à mes amis » signifie que vos amis ressentent votre absence. ' +
          'Attention : « Je vous ai manqué » est correct et signifie qu’on n’a pas réussi à rencontrer la personne. ' +
          'Ne confondez pas non plus plaire avec aimer : dans « Cette idée me plaît », c’est cette idée qui détermine l’accord du verbe, et non la personne qui l’apprécie.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les exercices de compréhension et de production, observez la préposition exigée par le verbe et la fonction de chaque complément. ' +
          'Entraînez-vous particulièrement à distinguer penser à et penser de, à comprendre l’inversion du sujet et du complément avec manquer à et à accorder correctement le verbe plaire à. ' +
          'Mémorisez des exemples complets plutôt que d’étudier uniquement le sens isolé des verbes.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme manquer de avec un nom, manquer à au sens d’« être regretté par » et l’erreur « Je te manque ». ' +
          'Lawless French confirme penser à et penser de, avec y et en, et Progress with Lawless French confirme que le verbe plaire s’accorde avec la chose appréciée. ' +
          'Ne sont pas sourcés : l’emploi du pronom tonique avec une personne après penser à, les exemples et le conseil pour l’examen. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle. Les pages consultées ne précisent pas si ces verbes sont exigés dans une question du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF — Prépositions à employer après le verbe manquer',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24314/la-syntaxe/les-prepositions/preposition-apres-un-verbe/prepositions-a-employer-apres-le-verbe-manquer'
    },
    {
      title: 'OQLF — Je te manque ou tu me manques : la syntaxe correcte',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22719/les-emprunts-a-langlais/emprunts-syntaxiques/emploi-deconseille-de-je-te-manque-a-la-place-de-tu-me-manques'
    },
    {
      title: 'Lawless French — Penser : penser à et penser de',
      url: 'https://lawlessfrench.com/grammar/penser-lesson/'
    },
    {
      title: 'Progress with Lawless French — Expressing liking with the verb plaire',
      url: 'https://progress.lawlessfrench.com/revision/grammar/how-to-use-plaire-to-express-liking-something-someone'
    }
  ]
}

export default content
