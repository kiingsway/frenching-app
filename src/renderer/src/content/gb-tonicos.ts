import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-tonicos',

  pt: {
    title: 'Pronomes tônicos e diferença entre on e nous',
    summary:
      'Aprenda a utilizar os pronomes tônicos para enfatizar pessoas, responder isoladamente, completar preposições e fazer comparações. ' +
      'Entenda também a diferença entre on e nous, especialmente o uso frequente de on no francês falado no Québec e suas regras de conjugação e concordância.',
    blocks: [
      { type: 'heading', text: '1. O que são pronomes tônicos' },
      {
        type: 'paragraph',
        text:
          'Os pronomes tônicos, também chamados de pronomes disjuntos, são utilizados para dar ênfase, responder sem repetir uma frase inteira, acompanhar preposições e estabelecer comparações. ' +
          'Diferentemente dos pronomes sujeitos, eles podem aparecer isoladamente ou separados do verbo. Observe as formas correspondentes aos pronomes pessoais.'
      },
      {
        type: 'table',
        headers: ['Pronome sujeito', 'Pronome tônico', 'Uso'],
        rows: [
            [
              '[[Je|Eu]]',
              '[[moi|mim / eu]]',
              'Primeira pessoa do singular.'
            ],
            [
              '[[Tu|Tu / você]]',
              '[[toi|ti / você]]',
              'Segunda pessoa do singular informal.'
            ],
            [
              '[[Il|Ele]]',
              '[[lui|ele]]',
              'Terceira pessoa masculina do singular.'
            ],
            [
              '[[Elle|Ela]]',
              '[[elle|ela]]',
              'Terceira pessoa feminina do singular.'
            ],
            [
              '[[Nous|Nós]]',
              '[[nous|nós]]',
              'Primeira pessoa do plural.'
            ],
            [
              '[[Vous|Vocês / senhor(a)]]',
              '[[vous|vocês / o senhor / a senhora]]',
              'Segunda pessoa do plural ou tratamento formal.'
            ],
            [
              '[[Ils|Eles]]',
              '[[eux|eles]]',
              'Terceira pessoa masculina ou grupo misto no plural.'
            ],
            [
              '[[Elles|Elas]]',
              '[[elles|elas]]',
              'Terceira pessoa feminina do plural.'
            ],
            [
              'Sem equivalente direto',
              '[[soi|si / si mesmo]]',
              'Referência a uma pessoa indeterminada ou genérica.'
            ]
        ]
      },
      { type: 'heading', text: '2. Quando utilizar os pronomes tônicos' },
      {
        type: 'list',
        items: [
          'Ênfase ou destaque: [[Moi, je préfère travailler le matin.|Eu, prefiro trabalhar de manhã.]]',
          'Depois de preposições: [[Ce cadeau est pour toi.|Este presente é para você.]]',
          'Depois do verbo ser, na identificação: [[C’est lui !|É ele!]]',
          'Em respostas isoladas: [[Qui veut participer ?|Quem quer participar?]] [[Moi !|Eu!]]',
          'Em comparações: [[Elle est plus grande que moi.|Ela é mais alta do que eu.]]',
          'Para indicar companhia: [[Je vais au cinéma avec eux.|Vou ao cinema com eles.]]',
          'Para expressar uma referência genérica: [[Il faut avoir confiance en soi.|É preciso ter confiança em si mesmo.]]',
          'Para expressar concordância com outra pessoa: [[Moi aussi !|Eu também!]] e [[Moi non plus !|Eu também não!]]'
        ]
      },
      { type: 'heading', text: '3. On × nous: qual é a diferença?' },
      {
        type: 'paragraph',
        text:
          'Ambos podem significar nós, mas são utilizados de maneiras diferentes. [[Nous|Nós]] ' +
          'é o pronome sujeito da primeira pessoa do plural e exige o verbo conjugado nessa pessoa. [[On|Nós / a gente / as pessoas]] ' +
          'é gramaticalmente um pronome da terceira pessoa do singular e pode indicar um grupo específico, como nós, ou pessoas de maneira geral.'
      },
      {
        type: 'table',
        headers: ['Com nous', 'Com on', 'Observação'],
        rows: [
            [
              '[[Nous travaillons à Toronto.|Nós trabalhamos em Toronto.]]',
              '[[On travaille à Toronto.|A gente trabalha em Toronto.]]',
              'As duas formas podem se referir ao mesmo grupo.'
            ],
            [
              '[[Nous allons au travail en métro.|Nós vamos ao trabalho de metrô.]]',
              '[[On va au travail en métro.|A gente vai ao trabalho de metrô.]]',
              'O verbo muda conforme o pronome.'
            ],
            [
              '[[Nous sommes fatigués.|Estamos cansados.]]',
              '[[On est fatigués.|A gente está cansado / estamos cansados.]]',
              'A concordância pode acompanhar o grupo identificado.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'No francês falado no Québec, [[on|a gente / nós]] é muito frequente em conversas cotidianas para substituir [[nous|nós]]. Já [[nous|nós]] ' +
          'é especialmente comum na escrita formal e em situações mais cuidadosas. ' +
          'Também é possível utilizar os dois na mesma frase para dar ênfase: [[Nous, on préfère rester à la maison.|Nós preferimos ficar em casa.]]'
      },
      { type: 'heading', text: '4. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção à conjugação de on',
        text:
          'Mesmo quando significa nós, [[on|a gente / nós]] exige sempre o verbo na terceira pessoa do singular. ' +
          'Portanto, diga [[On travaille beaucoup.|A gente trabalha muito.]], e não uma construção com o verbo conjugado como em [[nous travaillons|nós trabalhamos]]. ' +
          'Outro cuidado: quando [[on|nós]] ' +
          'representa um grupo específico, o adjetivo ou particípio passado pode concordar com o gênero e o número desse grupo: [[Mon frère et moi, on est arrivés tôt.|Meu irmão e eu chegamos cedo.]]'
      },
      {
        type: 'list',
        items: [
            'Não confunda [[moi|mim / eu]] com [[me|me]]. O primeiro é tônico; o segundo é um pronome complemento ligado ao verbo. ' +
            'Compare [[Elle parle de moi.|Ela fala de mim.]] e [[Elle me parle.|Ela fala comigo.]]',
          'Não utilize [[eux|eles]] para um grupo exclusivamente feminino. Nesse caso, utilize [[elles|elas]].',
          'Não confunda [[Nous|Nós]] com [[On|A gente]]. O primeiro exige o verbo na primeira pessoa do plural; o segundo exige a terceira pessoa do singular.',
            'Não utilize automaticamente [[soi|si mesmo]] para falar de uma pessoa específica. ' +
            'Para uma pessoa identificada, utilize a forma correspondente, como [[elle|ela]] ou [[lui|ele]].',
            'Não considere [[on|a gente]] necessariamente informal em todos os contextos. ' +
            'Seu uso impessoal é perfeitamente normal em diferentes registros; a substituição de [[nous|nós]] por [[on|a gente]] ' +
            'para falar de um grupo específico é especialmente frequente na língua falada.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique a substituição de pronomes sujeitos por pronomes tônicos, especialmente depois de preposições e em comparações. ' +
          'Treine também a alternância entre [[on|a gente / nós]] e [[nous|nós]], prestando atenção à conjugação verbal e à concordância. ' +
          'Na expressão oral, reconheça as construções naturais do francês canadense; na expressão escrita, saiba escolher entre as formas mais familiares e as mais formais conforme o contexto.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As duas páginas do OQLF listadas sobre o pronome disjunto e sobre on confirmam: o pronome tônico (disjunto) usado para pôr em destaque o pronome sujeito ou complemento (Moi, j’aime…); ' +
          'a concordância do adjetivo e do particípio com on, que varia conforme o referente seja determinado ou não (Mon ami et moi, on s’est disputés); ' +
          'e que on para pessoas bem definidas é frequente na fala familiar, enquanto na escrita cuidada se prefere nous. ' +
          'Nenhuma fonte aberta confirma: os usos do pronome tônico depois de preposição, em comparação, depois de c’est e em respostas isoladas, o soi, nem que on seja especialmente frequente no francês do Québec. ' +
          'Também não há fonte para as recomendações de preparação para o TEF Canada e o TCF Canada: são orientações de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'Les pronoms toniques (moi, toi, lui…) et la différence entre on et nous',
    summary:
      'Apprenez à utiliser les pronoms toniques pour mettre en évidence des personnes, répondre sans reprendre une phrase entière, compléter des prépositions et établir des comparaisons. ' +
      'Découvrez également la différence entre on et nous, notamment l’utilisation fréquente de on dans le français parlé au Québec et les règles de conjugaison et d’accord qui s’y rapportent.',
    blocks: [
      { type: 'heading', text: '1. Que sont les pronoms toniques ?' },
      {
        type: 'paragraph',
        text:
          'Les pronoms toniques, également appelés pronoms disjoints, servent à mettre en évidence une personne, à répondre sans répéter une phrase entière, à accompagner des prépositions et à établir des comparaisons. ' +
          'Contrairement aux pronoms sujets, ils peuvent être employés seuls ou séparément du verbe. Observez les formes correspondant aux pronoms personnels.'
      },
      {
        type: 'table',
        headers: ['Pronom sujet', 'Pronom tonique', 'Utilisation'],
        rows: [
            [
              'Je',
              'moi',
              'Première personne du singulier.'
            ],
            [
              'Tu',
              'toi',
              'Deuxième personne du singulier.'
            ],
            [
              'Il',
              'lui',
              'Troisième personne masculine du singulier.'
            ],
            [
              'Elle',
              'elle',
              'Troisième personne féminine du singulier.'
            ],
            [
              'Nous',
              'nous',
              'Première personne du pluriel.'
            ],
            [
              'Vous',
              'vous',
              'Deuxième personne du pluriel ou forme de politesse.'
            ],
            [
              'Ils',
              'eux',
              'Troisième personne masculine ou groupe mixte au pluriel.'
            ],
            [
              'Elles',
              'elles',
              'Troisième personne féminine du pluriel.'
            ],
            [
              'Sans équivalent direct',
              'soi',
              'Référence à une personne indéterminée ou générale.'
            ]
        ]
      },
      { type: 'heading', text: '2. Quand utiliser les pronoms toniques ?' },
      {
        type: 'list',
        items: [
          'Pour mettre une personne en évidence : « Moi, je préfère travailler le matin. »',
          'Après une préposition : « Ce cadeau est pour toi. »',
          'Après le présentatif c’est pour identifier quelqu’un : « C’est lui ! »',
          'Dans une réponse isolée : « Qui veut participer ? Moi ! »',
          'Dans une comparaison : « Elle est plus grande que moi. »',
          'Pour indiquer la compagnie : « Je vais au cinéma avec eux. »',
          'Pour exprimer une référence générale : « Il faut avoir confiance en soi. »',
          'Pour exprimer son accord avec quelqu’un : « Moi aussi ! » et « Moi non plus ! »'
        ]
      },
      { type: 'heading', text: '3. On ou nous : quelle différence ?' },
      {
        type: 'paragraph',
        text:
          'Les deux pronoms peuvent signifier nous, mais ils ne s’emploient pas exactement de la même façon. ' +
          'Nous est le pronom sujet de la première personne du pluriel et exige un verbe conjugué à cette personne. ' +
          'On est grammaticalement un pronom de la troisième personne du singulier et peut désigner un groupe précis, comme nous, ou des personnes en général.'
      },
      {
        type: 'table',
        headers: ['Avec nous', 'Avec on', 'Sens'],
        rows: [
            [
              'Nous travaillons à Toronto.',
              'On travaille à Toronto.',
              'Les deux formes peuvent désigner le même groupe.'
            ],
            [
              'Nous allons au travail en métro.',
              'On va au travail en métro.',
              'Le verbe change selon le pronom.'
            ],
            [
              'Nous sommes fatigués.',
              'On est fatigués.',
              'L’accord peut correspondre au groupe désigné.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Dans le français parlé au Québec, on est très fréquent dans les conversations quotidiennes pour remplacer nous. ' +
          'Nous est notamment courant à l’écrit formel et dans les situations plus soignées. ' +
          'Il est également possible d’utiliser les deux formes dans la même phrase pour insister : « Nous, on préfère rester à la maison. »'
      },
      { type: 'heading', text: '4. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à la conjugaison de on',
        text:
          'Même lorsqu’il signifie nous, on exige toujours un verbe à la troisième personne du singulier. ' +
          'Il faut donc dire « On travaille beaucoup », et non utiliser une conjugaison de la première personne du pluriel comme dans « nous travaillons ». ' +
          'Autre point important : lorsque on représente un groupe précis, l’adjectif ou le participe passé peut s’accorder en genre et en nombre avec ce groupe : « Mon frère et moi, on est arrivés tôt. ' +
          '»'
      },
      {
        type: 'list',
        items: [
            'Ne confondez pas « moi » et « me ». Le premier est un pronom tonique ; le second est un pronom complément lié au verbe. ' +
            'Comparez « Elle parle de moi » et « Elle me parle ».',
          'N’utilisez pas « eux » pour désigner un groupe exclusivement féminin. Dans ce cas, utilisez « elles ».',
          'Ne confondez pas « nous » et « on ». Le premier exige un verbe à la première personne du pluriel ; le second exige la troisième personne du singulier.',
            'N’utilisez pas automatiquement « soi » pour parler d’une personne précise. ' +
            'Pour une personne identifiée, utilisez la forme correspondante, comme « elle » ou « lui ».',
            'Ne considérez pas « on » comme nécessairement familier dans tous les contextes. ' +
            'Son emploi impersonnel est parfaitement normal dans différents registres ; le remplacement de « nous » par « on » pour désigner un groupe précis est particulièrement fréquent à l’oral.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous à remplacer les pronoms sujets par des pronoms toniques, notamment après les prépositions et dans les comparaisons. ' +
          'Pratiquez également l’alternance entre on et nous en faisant attention à la conjugaison des verbes et aux accords. ' +
          'À l’expression orale, reconnaissez les constructions naturelles du français canadien ; à l’expression écrite, apprenez à choisir entre les formes plus familières et les formes plus soutenues selon le contexte.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les deux pages de l’OQLF indiquées sur le pronom disjoint et sur on confirment : le pronom tonique (disjoint) employé pour mettre en évidence le pronom sujet ou complément (Moi, j’aime…) ; ' +
          'l’accord de l’adjectif et du participe avec on, qui varie selon que le référent est déterminé ou non (Mon ami et moi, on s’est disputés) ; ' +
          'et le fait que on pour des personnes bien définies est fréquent à l’oral familier, alors que l’écrit soigné préfère nous. ' +
          'Aucune source ouverte ne confirme : les emplois du pronom tonique après une préposition, dans une comparaison, après c’est et dans une réponse isolée, soi, ni le fait que on soit particulièrement fréquent dans le français du Québec. ' +
          'Il n’y a pas non plus de source pour les recommandations de préparation au TEF Canada et au TCF Canada : ce sont des conseils de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – Pronome disjunto e destaque',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23406/la-grammaire/les-pronoms/pronoms-personnels/pronom-disjoint-et-mise-en-evidence'
    },
    {
      title: 'OQLF – Concordância do adjetivo com o pronome on',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21708/la-grammaire/ladjectif/accord-de-ladjectif/accord-de-ladjectif-qui-qualifie-un-pronom-personnel/accord-de-ladjectif-avec-le-pronom-on'
    }
  ]
}

export default content
