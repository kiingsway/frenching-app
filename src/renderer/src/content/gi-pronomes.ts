import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-pronomes',

  pt: {
    title: 'Pronomes COD e COI, y e en: posição e ordem dos pronomes duplos',
    summary:
      'Você vai aprender a identificar e substituir complementos diretos e indiretos pelos pronomes correspondentes, além de compreender os usos de y e en. ' +
      'Também vai estudar a ordem dos pronomes quando dois deles aparecem juntos, sua posição em relação ao verbo e as particularidades do imperativo.',
    blocks: [
      { type: 'heading', text: 'Identifique o que o pronome substitui' },
      {
        type: 'paragraph',
        text:
          'Os pronomes [[COD|objeto direto]] e [[COI|objeto indireto]] substituem complementos do verbo. ' +
          'O COD aparece sem preposição, enquanto o COI depende de uma preposição exigida pelo verbo, frequentemente à. Compare: [[J’écoute le professeur. ' +
          '→ Je l’écoute.|Escuto o professor. → Eu o escuto.]] [[Je parle à la conseillère. → Je lui parle.|Falo com a orientadora. → Falo com ela.]] ' +
          'As formas me, te, nous e vous podem funcionar tanto como COD quanto como COI, dependendo da construção do verbo.'
      },
      {
        type: 'table',
        headers: ['Pronome ou grupo', 'O que substitui', 'Exemplo'],
        rows: [
            [
              '[[le, la, les|o, a, os, as]]',
              'Complemento direto, sem preposição.',
              '[[Je les connais.|Eu os conheço.]]'
            ],
            [
              '[[lui, leur|a ele/ela, a eles/elas]]',
              'Complemento indireto de pessoa, frequentemente introduzido por à.',
              '[[Je leur téléphone.|Telefono para eles.]]'
            ],
            [
              '[[y|lá / nisso]]',
              'Um lugar ou um complemento de coisa introduzido por uma preposição como à, dans ou sur.',
              '[[J’y vais.|Vou para lá.]]'
            ],
            [
              '[[en|disso / deles / alguns]]',
              'Um complemento introduzido por de ou uma expressão de quantidade.',
              '[[J’en ai trois.|Tenho três deles.]]'
            ]
        ]
      },
      { type: 'heading', text: 'Posição e ordem dos pronomes duplos' },
      {
        type: 'paragraph',
        text:
          'Nas frases afirmativas e negativas comuns, os pronomes ficam antes do verbo conjugado. Nos tempos compostos, ficam antes do auxiliar. ' +
          'Quando complementam um infinitivo, ficam antes desse infinitivo. A ordem habitual é: [[me, te, se, nous, vous|me, te, se, nos, vos]] ' +
          '→ [[le, la, les|o, a, os, as]] → [[lui, leur|a ele/ela, a eles/elas]] → [[y|lá / nisso]] → [[en|disso / alguns]].'
      },
      {
        type: 'list',
        items: [
          '[[Je te le donne.|Eu dou isso a você.]]',
          '[[Je le lui donne.|Eu dou isso a ele ou a ela.]]',
          '[[Je lui en parle.|Converso sobre isso com ele ou ela.]]',
          '[[Je vais vous y conduire.|Vou levar vocês até lá.]]',
          '[[Il y en a trois.|Há três deles.]]',
          '[[Je ne le lui donne pas.|Não dou isso a ele ou a ela.]]'
        ]
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'paragraph',
        text:
          'No imperativo afirmativo, a ordem habitual muda: os pronomes aparecem depois do verbo, ligados por hífen. Compare: [[Donne-le-moi.|Dê isso para mim.]] ' +
          'Com [[en|disso]], o pronome também vem logo depois do verbo, com hífen: [[Prenez-en davantage.|Peguem mais.]] Na forma negativa, os pronomes voltam para antes do verbo: [[Ne me le donne pas.|Não me dê isso.]] Outra distinção importante: [[y|lá / nisso]] ' +
          'não costuma substituir uma pessoa introduzida por à no francês padrão; nesse caso, utilize lui ou leur. Já [[en|disso]] ' +
          'pode substituir um complemento introduzido por de. Por exemplo: [[Je parle à Marc de ce problème. → Je lui en parle.|Falo com Marc sobre esse problema. ' +
          '→ Converso sobre isso com ele.]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não escolha o pronome apenas pela tradução',
        text:
          'Um erro frequente é traduzir diretamente os pronomes para o português e escolher a forma francesa sem observar a regência do verbo. ' +
          'Compare [[Je le regarde.|Eu olho para ele.]] e [[Je lui parle.|Eu converso com ele.]] ' +
          'Em francês, regarder quelqu’un não exige preposição, enquanto parler à quelqu’un exige à. Também não confunda [[y|lá / nisso]] ' +
          'com [[en|disso]]: o primeiro pode retomar um lugar ou uma ideia introduzida por à, enquanto o segundo retoma principalmente complementos introduzidos por de.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Nos exercícios de compreensão e produção, identifique primeiro o verbo e os complementos que ele exige. ' +
          'Depois, determine se cada complemento é direto, indireto, introduzido por à ou introduzido por de. ' +
          'Ao substituir dois complementos, aplique a ordem habitual dos pronomes e confira sua posição em relação ao verbo. ' +
          'Pratique especialmente as combinações [[te le|isso a você]], [[le lui|isso a ele/ela]] e [[lui en|disso a ele/ela]].'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam a tabela dos pronomes complementos, o uso de [[en|disso]] para um complemento introduzido por [[de|de]], a posição dos pronomes no imperativo afirmativo (complemento direto primeiro, depois o indireto, com hífen) e [[en|disso]] ligado ao verbo por hífen. ' +
          'Não têm fonte aberta: a ordem dos pronomes duplos antes do verbo, a posição nos tempos compostos e com infinitivo, o uso de [[y|lá / nisso]] e o fato de [[y|lá / nisso]] não substituir pessoa, os exemplos e a dica para a prova. ' +
          'As páginas da Universidade Concordia citadas no JSON original não puderam ser abertas e não foram usadas. ' +
          'Esses pontos são material didático, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Les pronoms COD et COI, y et en : position et ordre des doubles pronoms',
    summary:
      'Vous apprendrez à reconnaître et à remplacer les compléments directs et indirects par les pronoms correspondants, ainsi qu’à comprendre les emplois de y et de en. ' +
      'Vous étudierez également l’ordre des pronoms lorsqu’ils apparaissent deux ensemble, leur position par rapport au verbe et les particularités de l’impératif.',
    blocks: [
      { type: 'heading', text: 'Identifier ce que le pronom remplace' },
      {
        type: 'paragraph',
        text:
          'Les pronoms COD et COI remplacent des compléments du verbe. ' +
          'Le COD se construit sans préposition, tandis que le COI dépend d’une préposition exigée par le verbe, souvent à. Comparez : « J’écoute le professeur. ' +
          '→ Je l’écoute. » « Je parle à la conseillère. → Je lui parle. ' +
          '» Les formes me, te, nous et vous peuvent fonctionner comme COD ou comme COI, selon la construction du verbe.'
      },
      {
        type: 'table',
        headers: ['Pronom ou groupe', 'Ce qu’il remplace', 'Exemple'],
        rows: [
            [
              'le, la, les',
              'Un complément direct, sans préposition.',
              'Je les connais.'
            ],
            [
              'lui, leur',
              'Un complément indirect de personne, souvent introduit par à.',
              'Je leur téléphone.'
            ],
            [
              'y',
              'Un lieu ou un complément de chose introduit par une préposition comme à, dans ou sur.',
              'J’y vais.'
            ],
            [
              'en',
              'Un complément introduit par de ou une expression de quantité.',
              'J’en ai trois.'
            ]
        ]
      },
      { type: 'heading', text: 'Position et ordre des doubles pronoms' },
      {
        type: 'paragraph',
        text:
          'Dans les phrases affirmatives et négatives ordinaires, les pronoms se placent avant le verbe conjugué. Aux temps composés, ils se placent avant l’auxiliaire. ' +
          'Lorsqu’ils complètent un infinitif, ils se placent devant cet infinitif. L’ordre habituel est : me, te, se, nous, vous → le, la, les → lui, leur → y → en.'
      },
      {
        type: 'list',
        items: [
          'Je te le donne.',
          'Je le lui donne.',
          'Je lui en parle.',
          'Je vais vous y conduire.',
          'Il y en a trois.',
          'Je ne le lui donne pas.'
        ]
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'paragraph',
        text:
          'À l’impératif affirmatif, l’ordre habituel change : les pronoms se placent après le verbe et sont reliés par un trait d’union. Comparez : « Donne-le-moi. ' +
          '» Avec en, le pronom suit aussi immédiatement le verbe, avec un trait d’union : « Prenez-en davantage ». À la forme négative, les pronoms reviennent avant le verbe : « Ne me le donne pas. ' +
          '» Une autre distinction importante : y ne remplace généralement pas une personne introduite par à en français standard ; dans ce cas, utilisez lui ou leur. ' +
          'En revanche, en peut remplacer un complément introduit par de. Par exemple : « Je parle à Marc de ce problème. → Je lui en parle. »'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne choisissez pas le pronom uniquement par traduction',
        text:
          'Une erreur fréquente consiste à traduire directement les pronoms en portugais et à choisir la forme française sans tenir compte de la construction du verbe. ' +
          'Comparez « Je le regarde. » et « Je lui parle. ' +
          '» En français, regarder quelqu’un ne demande pas de préposition, tandis que parler à quelqu’un exige la préposition à. ' +
          'Ne confondez pas non plus y et en : le premier peut reprendre un lieu ou une idée introduite par à, tandis que le second reprend principalement des compléments introduits par de.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les exercices de compréhension et de production, identifiez d’abord le verbe et les compléments qu’il exige. ' +
          'Déterminez ensuite si chaque complément est direct, indirect, introduit par à ou introduit par de. ' +
          'Lorsque vous remplacez deux compléments, appliquez l’ordre habituel des pronoms et vérifiez leur position par rapport au verbe. ' +
          'Entraînez-vous particulièrement avec les combinaisons te le, le lui et lui en.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment le tableau des pronoms compléments, l’emploi de en pour un complément introduit par de, la place des pronoms à l’impératif affirmatif (complément direct d’abord, puis indirect, avec trait d’union) et en relié au verbe par un trait d’union. ' +
          'Ne sont pas sourcés : l’ordre des doubles pronoms devant le verbe, la place aux temps composés et avec l’infinitif, l’emploi de y et le fait que y ne remplace pas une personne, les exemples et le conseil pour l’examen. ' +
          'Les pages de l’Université Concordia citées dans le JSON d’origine n’ont pas pu être ouvertes et n’ont pas été utilisées. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'La reprise ou l’omission du pronom personnel complément — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24134/la-grammaire/les-pronoms/pronoms-personnels/la-reprise-ou-lomission-du-pronom-personnel-complement'
    },
    {
      title: 'Le pronom personnel en — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23513/la-grammaire/les-pronoms/pronoms-personnels/le-pronom-personnel-en'
    },
    {
      title: 'Pronoms personnels employés avec un verbe à l’impératif — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24206/la-grammaire/les-pronoms/pronoms-personnels/pronoms-personnels-employes-avec-un-verbe-a-limperatif'
    }
  ]
}

export default content
