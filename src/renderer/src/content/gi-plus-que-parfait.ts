import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-plus-que-parfait',

  pt: {
    title: 'O plus-que-parfait (mais-que-perfeito): o passado anterior a outro passado',
    summary:
      'Você vai aprender a formar o mais-que-perfeito e a identificar quando utilizá-lo. ' +
      'Também verá como expressar uma ação anterior a outra no passado e como evitar erros em hipóteses passadas.',
    blocks: [
      { type: 'heading', text: 'Formação' },
      {
        type: 'paragraph',
        text:
          'O [[plus-que-parfait|mais-que-perfeito]] é formado pelo auxiliar [[avoir|ter]] ou [[être|ser / estar]] ' +
          'no [[imparfait|imperfeito]], seguido do [[participe passé|particípio passado]] do verbo principal. ' +
          'A escolha do auxiliar segue os mesmos critérios utilizados no [[passé composé|passado composto]].'
      },
      {
        type: 'table',
        headers: ['Pessoa', 'Com avoir', 'Com être'],
        rows: [
            [
              '[[Je|eu]]',
              '[[j’avais terminé|eu tinha terminado]]',
              '[[j’étais arrivé|eu tinha chegado]]'
            ],
            [
              '[[Elle|ela]]',
              '[[elle avait réservé|ela tinha reservado]]',
              '[[elle était arrivée|ela tinha chegado]]'
            ],
            [
              '[[Nous|nós]]',
              '[[nous avions reçu|nós tínhamos recebido]]',
              '[[nous étions partis|nós tínhamos saído]]'
            ]
        ]
      },
      { type: 'heading', text: 'Quando usar' },
      {
        type: 'paragraph',
        text:
          'Use o [[plus-que-parfait|mais-que-perfeito]] para indicar uma ação que aconteceu antes de outra ação passada. ' +
          'A ação mais antiga fica no mais-que-perfeito, enquanto a ação posterior geralmente aparece no [[passé composé|passado composto]] ' +
          'ou no [[imparfait|imperfeito]]. A ordem das orações pode mudar sem alterar a cronologia dos acontecimentos.'
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[Quand l’autobus est arrivé, nous avions déjà acheté les billets.|Quando o ônibus chegou, nós já tínhamos comprado as passagens.]]',
          '[[Mélanie a reconnu le quartier parce qu’elle y avait habité pendant deux ans.|Mélanie reconheceu o bairro porque tinha morado ali durante dois anos.]]',
          '[[Si j’avais su que le bureau était fermé, j’aurais envoyé le document par courriel.|Se eu tivesse sabido que o escritório estava fechado, teria enviado o documento por e-mail.]]'
        ]
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com as hipóteses passadas',
        text:
          'Um erro frequente, apontado pelo OQLF, é colocar o condicional logo depois de [[si|se]], porque os dois fatos são hipotéticos. ' +
          'Não diga [[Si j’aurais su...|Se eu teria sabido... (errado)]]: depois de [[si|se]] vem o [[plus-que-parfait|mais-que-perfeito]], e a consequência fica no condicional passado: ' +
          '[[Si j’avais su..., j’aurais...|Se eu tivesse sabido..., teria...]] ' +
          'Outro deslize comum é usar o [[imparfait|imperfeito]] numa hipótese sobre o passado, como em [[Si je savais que le bureau était fermé, j’aurais envoyé le document.|Se eu soubesse que o escritório estava fechado, teria enviado o documento. (errado para o passado)]]'
      },
      {
        type: 'paragraph',
        text:
          'Não escolha o auxiliar apenas pela tradução em português. O verbo [[partir|partir]] é conjugado com [[être|ser / estar]] ' +
          'nos tempos compostos, enquanto [[terminer|terminar]] ' +
          'utiliza [[avoir|ter]]: [[elle était partie|ela tinha partido]], mas [[elle avait terminé|ela tinha terminado]]. ' +
          'Com o auxiliar être, o particípio passado concorda com o sujeito, seguindo as regras dos tempos compostos.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Ao ler ou ouvir um relato no passado, localize os acontecimentos e identifique qual ocorreu primeiro. ' +
          'Para expressar essa anterioridade, utilize o [[plus-que-parfait|mais-que-perfeito]] na ação mais antiga. ' +
          'Confira também se o auxiliar e o particípio passado estão corretamente formados.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam que as formas compostas são formadas com [[avoir|ter]] ou [[être|ser / estar]] mais o particípio passado e expressam anterioridade, ' +
          'que o [[plus-que-parfait|mais-que-perfeito]] corresponde ao [[imparfait|imperfeito]] composto, que depois de [[si|se]] com o [[plus-que-parfait|mais-que-perfeito]] a consequência fica no condicional passado e que o condicional logo depois de [[si|se]] condicional é erro. ' +
          'O guia de gramática da Escola da função pública do Canadá (Grammaire d’appoint, nível C, capítulo sobre os tempos do passado) confirma que o [[plus-que-parfait|mais-que-perfeito]] é formado com o [[imparfait|imperfeito]] de [[avoir|ter]] ou [[être|ser / estar]] mais o particípio passado, que o auxiliar segue os mesmos critérios do [[passé composé|passado composto]], que a maioria dos verbos usa [[avoir|ter]] e que [[partir|partir]] está entre os verbos com [[être|ser / estar]]. Também confirma que ele indica a ação que precedeu a outra e que, numa hipótese passada, designa a condição ([[Si j’avais su qu’il était absent, j’aurais reporté la rencontre.|Se eu tivesse sabido que ele estava ausente, teria adiado a reunião.]]). ' +
          'Não têm fonte: o erro de usar o [[imparfait|imperfeito]] em hipóteses sobre o passado, a concordância do particípio com [[être|ser / estar]], os exemplos e a dica para a prova. ' +
          'Essa dica é conselho de preparação, não regra oficial. As páginas consultadas não indicam se o [[plus-que-parfait|mais-que-perfeito]] é exigido em alguma questão do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Le plus-que-parfait : situer un fait avant un autre fait passé',
    summary:
      'Vous apprendrez à former le plus-que-parfait et à reconnaître les situations dans lesquelles il faut l’utiliser. ' +
      'Vous verrez comment exprimer une action antérieure à une autre action passée et comment éviter les erreurs dans les hypothèses portant sur le passé.',
    blocks: [
      { type: 'heading', text: 'Formation' },
      {
        type: 'paragraph',
        text:
          'Le plus-que-parfait se forme avec l’auxiliaire avoir ou être à l’imparfait, suivi du participe passé du verbe principal. ' +
          'Le choix de l’auxiliaire suit les mêmes critères qu’au passé composé.'
      },
      {
        type: 'table',
        headers: ['Personne', 'Avec avoir', 'Avec être'],
        rows: [
            [
              'Je',
              'j’avais terminé',
              'j’étais arrivé'
            ],
            [
              'Elle',
              'elle avait réservé',
              'elle était arrivée'
            ],
            [
              'Nous',
              'nous avions reçu',
              'nous étions partis'
            ]
        ]
      },
      { type: 'heading', text: 'Emploi' },
      {
        type: 'paragraph',
        text:
          'On utilise le plus-que-parfait pour indiquer une action qui a eu lieu avant une autre action passée. ' +
          'L’action la plus ancienne se met au plus-que-parfait, tandis que l’action postérieure apparaît généralement au passé composé ou à l’imparfait. ' +
          'L’ordre des propositions peut changer sans modifier la chronologie des événements.'
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'list',
        items: [
          'Quand l’autobus est arrivé, nous avions déjà acheté les billets.',
          'Mélanie a reconnu le quartier parce qu’elle y avait habité pendant deux ans.',
          'Si j’avais su que le bureau était fermé, j’aurais envoyé le document par courriel.'
        ]
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux hypothèses passées',
        text:
          'Une erreur fréquente, signalée par l’OQLF, consiste à employer le conditionnel juste après si, car les deux faits sont hypothétiques. ' +
          'N’écrivez pas « Si j’aurais su… » : après si, on emploie le plus-que-parfait, et la conséquence se met au conditionnel passé : « Si j’avais su…, j’aurais… ». ' +
          'Une autre erreur courante est d’employer l’imparfait pour une hypothèse sur le passé, comme dans « Si je savais que le bureau était fermé, j’aurais envoyé le document ».'
      },
      {
        type: 'paragraph',
        text:
          'Ne choisissez pas l’auxiliaire uniquement en traduisant depuis le portugais. ' +
          'Le verbe partir se conjugue avec être aux temps composés, tandis que terminer se conjugue avec avoir : elle était partie, mais elle avait terminé. ' +
          'Avec l’auxiliaire être, le participe passé s’accorde avec le sujet, selon les règles des temps composés.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Lorsque vous lisez ou écoutez un récit au passé, repérez les événements et déterminez lequel s’est produit en premier. ' +
          'Pour exprimer cette antériorité, utilisez le plus-que-parfait pour l’action la plus ancienne. ' +
          'Vérifiez également que l’auxiliaire et le participe passé sont correctement formés.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment que les formes composées se forment avec avoir ou être et le participe passé et expriment l’antériorité, ' +
          'que le plus-que-parfait est l’imparfait composé, qu’après si suivi du plus-que-parfait la conséquence se met au conditionnel passé et que le conditionnel juste après si de condition est une erreur. ' +
          'Le guide de grammaire de l’École de la fonction publique du Canada (Grammaire d’appoint, niveau C, chapitre sur les temps du passé) confirme que le plus-que-parfait se forme avec l’imparfait de avoir ou être et le participe passé, que le choix de l’auxiliaire suit les mêmes critères que le passé composé, que la majorité des verbes se conjuguent avec avoir et que partir fait partie des verbes conjugués avec être. Il confirme aussi qu’il indique l’action qui a précédé l’autre et que, dans une hypothèse passée, il désigne la condition (Si j’avais su qu’il était absent, j’aurais reporté la rencontre.). ' +
          'Ne sont pas sourcés : l’erreur d’employer l’imparfait pour une hypothèse sur le passé, l’accord du participe avec être, les exemples et le conseil pour l’examen. ' +
          'Ce conseil est une recommandation de préparation, et non une règle officielle. Les pages consultées ne précisent pas si le plus-que-parfait est exigé dans une question du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Grammaire d’appoint, niveau C : cahier d’autoapprentissage (chapitre 1, Les temps du passé) — École de la fonction publique du Canada',
      url: 'https://publications.gc.ca/collections/collection_2020/efpc-csps/SC102-1-15-2007-fra.pdf'
    },
    {
      title: 'Office québécois de la langue française — Temps simples et temps composés : distinction',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24658/la-grammaire/le-verbe/temps-grammaticaux/temps-simples-et-temps-composes'
    },
    {
      title: 'Office québécois de la langue française — Conditionnel dans les phrases hypothétiques',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24140/la-grammaire/le-verbe/temps-grammaticaux/conditionnel/conditionnel-dans-les-phrases-hypothetiques'
    }
  ]
}

export default content
