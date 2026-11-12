import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-grafia',

  pt: {
    title: 'Verbos com mudanças de grafia: -cer, -ger, -eler e -eter',
    summary:
      'Aprenda a conjugar verbos franceses que modificam sua grafia para preservar a pronúncia ou acompanhar determinadas terminações verbais. ' +
      'Entenda o uso da cedilha, a inclusão da letra e, a duplicação de consoantes e o acento grave (è).',
    blocks: [
      { type: 'heading', text: '1. Por que alguns verbos mudam de grafia?' },
      {
        type: 'paragraph',
        text:
          'Alguns verbos franceses apresentam alterações na escrita durante a conjugação. ' +
          'Essas mudanças geralmente servem para preservar o som original do verbo ou representar corretamente a pronúncia de uma vogal. ' +
          'Os casos mais importantes deste tópico envolvem os verbos terminados em [[-cer|-cer]], [[-ger|-ger]], [[-eler|-eler]] e [[-eter|-eter]].'
      },
      { type: 'heading', text: '2. Verbos terminados em -cer: uso da cedilha' },
      {
        type: 'paragraph',
        text:
          'Nos verbos terminados em [[-cer|-cer]], acrescentamos a cedilha ao c quando ele aparece antes de o ou a, para preservar o som de s. ' +
          'No presente do indicativo, isso acontece principalmente na primeira pessoa do plural, antes da terminação -ons. Compare [[commencer|começar]] ' +
          'e suas formas conjugadas.'
      },
      {
        type: 'table',
        headers: ['Tempo e pessoa', 'Forma conjugada'],
        rows: [
            [
              'Presente: eu',
              '[[Je commence|Eu começo]]'
            ],
            [
              'Presente: nós',
              '[[Nous commençons|Nós começamos]]'
            ],
            [
              'Imperfeito: eu',
              '[[Je commençais|Eu começava]]'
            ],
            [
              'Imperfeito: nós',
              '[[Nous commencions|Nós começávamos]]'
            ],
            [
              'Futuro: eu',
              '[[Je commencerai|Eu começarei]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Observe que a cedilha não é necessária antes de e ou i, pois essas vogais já preservam o som de s do c. ' +
          'Por isso, escrevemos [[je commence|eu começo]], mas [[nous commençons|nós começamos]] e [[nous commencions|nós começávamos]].'
      },
      { type: 'heading', text: '3. Verbos terminados em -ger: inclusão da letra e' },
      {
        type: 'paragraph',
        text:
          'Nos verbos terminados em [[-ger|-ger]], acrescentamos um e depois do g antes de o ou a, quando necessário, para preservar o som de j. ' +
          'No presente, a mudança aparece na primeira pessoa do plural. No imperfeito, aparece nas formas cujas terminações começam com a.'
      },
      {
        type: 'table',
        headers: ['Tempo e pessoa', 'Forma conjugada'],
        rows: [
            [
              'Presente: eu',
              '[[Je mange|Eu como]]'
            ],
            [
              'Presente: nós',
              '[[Nous mangeons|Nós comemos]]'
            ],
            [
              'Imperfeito: eu',
              '[[Je mangeais|Eu comia]]'
            ],
            [
              'Imperfeito: nós',
              '[[Nous mangions|Nós comíamos]]'
            ],
            [
              'Futuro: eu',
              '[[Je mangerai|Eu comerei]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Atenção: a letra e não precisa ser acrescentada antes de i, porque o g já mantém o som de j nessa posição. ' +
          'Por isso, escrevemos [[nous mangeons|nós comemos]], mas [[nous mangions|nós comíamos]].'
      },
      { type: 'heading', text: '4. Verbos terminados em -eler e -eter: duplicação ou acento grave' },
      {
        type: 'paragraph',
        text:
          'Alguns verbos terminados em [[-eler|-eler]] e [[-eter|-eter]] modificam a consoante ou o acento do radical em determinadas formas conjugadas. ' +
          'Existem dois padrões principais: a duplicação da consoante l ou t e a substituição do e por è, mantendo apenas uma consoante. A escolha depende do verbo. ' +
          'Algumas formas também apresentam variantes aceitas pelas retificações ortográficas de 1990.'
      },
      {
        type: 'table',
        headers: ['Infinitivo', 'Padrão', 'Eu no presente', 'Nós no presente'],
        rows: [
            [
              '[[appeler|chamar]]',
              'Duplicação de l',
              '[[J’appelle|Eu chamo]]',
              '[[Nous appelons|Nós chamamos]]'
            ],
            [
              '[[jeter|jogar / lançar]]',
              'Duplicação de t',
              '[[Je jette|Eu jogo / lanço]]',
              '[[Nous jetons|Nós jogamos / lançamos]]'
            ],
            [
              '[[acheter|comprar]]',
              'Acento grave è',
              '[[J’achète|Eu compro]]',
              '[[Nous achetons|Nós compramos]]'
            ],
            [
              '[[geler|congelar]]',
              'Acento grave è',
              '[[Je gèle|Eu congelo]]',
              '[[Nous gelons|Nós congelamos]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Essas alterações também aparecem em outras formas, como o futuro e o condicional: [[j’appellerai|eu chamarei]], [[je jetterai|eu jogarei]], [[j’achèterai|eu comprarei]] ' +
          'e [[je gèlerais|eu congelaria]]. ' +
          'Para alguns outros verbos da mesma terminação, podem existir duas grafias reconhecidas: por exemplo, [[je ruisselle|eu escorro]] e [[je ruissèle|eu escorro]]. ' +
          'O importante é conhecer o modelo de conjugação de cada verbo.'
      },
      { type: 'heading', text: '5. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não aplique uma única regra a todos os verbos',
        text:
          'Um erro frequente é acreditar que todos os verbos terminados em [[-eler|-eler]] duplicam o l ou que todos os terminados em [[-eter|-eter]] duplicam o t. ' +
          'Isso não é verdade. Compare [[j’appelle|eu chamo]] com [[j’achète|eu compro]]. Outro cuidado é não esquecer a cedilha em [[nous commençons|nós começamos]] ' +
          'nem o e em [[nous mangeons|nós comemos]]. Essas alterações são necessárias para preservar a pronúncia correta.'
      },
      {
        type: 'list',
        items: [
          'Não escreva [[nous commencons|nós começamos (errado)]]: o correto é [[nous commençons|nós começamos]].',
          'Não escreva [[nous mangons|nós comemos (errado)]]: o correto é [[nous mangeons|nós comemos]].',
          'Não confunda [[j’appelle|eu chamo]] com [[j’appele|eu chamo (errado)]]. O verbo [[appeler|chamar]] duplica o l.',
          'Não confunda [[j’achète|eu compro]] com [[j’achette|eu compro (errado)]]. O verbo [[acheter|comprar]] utiliza è e um único t.',
          'Não acrescente automaticamente cedilha ou letra e antes de qualquer vogal. Observe a pronúncia e a terminação verbal.',
          'Consulte a conjugação de verbos menos frequentes em caso de dúvida, principalmente os terminados em -eler e -eter, que podem apresentar variantes ortográficas.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Treine principalmente a conjugação no presente, no imperfeito e no futuro. Na expressão escrita, observe as mudanças de grafia para evitar erros ortográficos. ' +
          'Na compreensão oral, associe a forma pronunciada à sua escrita correta. ' +
          'Para ampliar seu domínio gramatical no nível B2, pratique também verbos como [[commencer|começar]], [[manger|comer]], [[appeler|chamar]], [[jeter|lançar]], [[acheter|comprar]] ' +
          'e [[geler|congelar]] em frases completas.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF listadas confirmam: a cedilha nos verbos em -cer e o e nos verbos em -ger na 1ª pessoa do plural do presente (nous commençons, nous mangeons); ' +
          'a dobra do l ou do t nos verbos em -eler e -eter (ruisseler, hoqueter), com a possibilidade de escrever com è segundo as retificações de 1990; e que appeler, jeter e seus derivados mantêm a conjugação tradicional. ' +
          'Da página do OQLF sobre o imperfeito só foi conferido o título nesta página. ' +
          'Nenhuma fonte confirma as recomendações de estudo para o TEF Canada e o TCF Canada, nem a referência ao nível B2: são orientações de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'Les verbes à modification orthographique : -cer, -ger, -eler et -eter',
    summary:
      'Apprenez à conjuguer les verbes français qui modifient leur orthographe afin de préserver leur prononciation ou de s’adapter à certaines terminaisons verbales. ' +
      'Découvrez l’utilisation de la cédille, l’ajout de la lettre e, le redoublement des consonnes et l’accent grave (è).',
    blocks: [
      { type: 'heading', text: '1. Pourquoi certains verbes changent-ils d’orthographe ?' },
      {
        type: 'paragraph',
        text:
          'Certains verbes français présentent des modifications orthographiques lors de leur conjugaison. ' +
          'Ces changements servent généralement à préserver le son d’origine du verbe ou à représenter correctement la prononciation d’une voyelle. ' +
          'Les cas les plus importants de cette leçon concernent les verbes terminés en -cer, -ger, -eler et -eter.'
      },
      { type: 'heading', text: '2. Les verbes en -cer : l’utilisation de la cédille' },
      {
        type: 'paragraph',
        text:
          'Dans les verbes terminés en -cer, on ajoute une cédille au c lorsqu’il se trouve devant o ou a, afin de conserver le son s. ' +
          'Au présent de l’indicatif, ce changement apparaît principalement à la première personne du pluriel, devant la terminaison -ons. ' +
          'Observez le verbe commencer et ses formes conjuguées.'
      },
      {
        type: 'table',
        headers: ['Temps et personne', 'Forme conjuguée'],
        rows: [
            [
              'Présent : je',
              'Je commence'
            ],
            [
              'Présent : nous',
              'Nous commençons'
            ],
            [
              'Imparfait : je',
              'Je commençais'
            ],
            [
              'Imparfait : nous',
              'Nous commencions'
            ],
            [
              'Futur : je',
              'Je commencerai'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Remarquez que la cédille n’est pas nécessaire devant e ou i, puisque ces voyelles conservent déjà le son s du c. ' +
          'On écrit donc « je commence », mais « nous commençons » et « nous commencions ».'
      },
      { type: 'heading', text: '3. Les verbes en -ger : l’ajout de la lettre e' },
      {
        type: 'paragraph',
        text:
          'Dans les verbes terminés en -ger, on ajoute un e après le g devant o ou a, lorsque cela est nécessaire, afin de conserver le son j. ' +
          'Au présent, ce changement apparaît à la première personne du pluriel. À l’imparfait, il apparaît dans les formes dont les terminaisons commencent par a.'
      },
      {
        type: 'table',
        headers: ['Temps et personne', 'Forme conjuguée'],
        rows: [
            [
              'Présent : je',
              'Je mange'
            ],
            [
              'Présent : nous',
              'Nous mangeons'
            ],
            [
              'Imparfait : je',
              'Je mangeais'
            ],
            [
              'Imparfait : nous',
              'Nous mangions'
            ],
            [
              'Futur : je',
              'Je mangerai'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Attention : la lettre e n’a pas besoin d’être ajoutée devant i, puisque le g conserve déjà le son j dans cette position. ' +
          'On écrit donc « nous mangeons », mais « nous mangions ».'
      },
      { type: 'heading', text: '4. Les verbes en -eler et -eter : redoublement ou accent grave' },
      {
        type: 'paragraph',
        text:
          'Certains verbes terminés en -eler et -eter modifient leur consonne ou l’accent de leur radical dans certaines formes conjuguées. ' +
          'Il existe deux principaux modèles : le redoublement de la consonne l ou t et le remplacement du e par è, avec une seule consonne. Le choix dépend du verbe. ' +
          'Certaines formes présentent également des variantes admises par les rectifications orthographiques de 1990.'
      },
      {
        type: 'table',
        headers: ['Infinitif', 'Modèle', 'Au présent : je', 'Au présent : nous'],
        rows: [
            [
              'appeler',
              'Redoublement du l',
              'J’appelle',
              'Nous appelons'
            ],
            [
              'jeter',
              'Redoublement du t',
              'Je jette',
              'Nous jetons'
            ],
            [
              'acheter',
              'Accent grave è',
              'J’achète',
              'Nous achetons'
            ],
            [
              'geler',
              'Accent grave è',
              'Je gèle',
              'Nous gelons'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Ces modifications apparaissent également dans d’autres formes, comme le futur et le conditionnel : j’appellerai, je jetterai, j’achèterai et je gèlerais. ' +
          'Pour certains autres verbes du même type, deux graphies reconnues peuvent exister : par exemple, je ruisselle et je ruissèle. ' +
          'L’essentiel est de connaître le modèle de conjugaison de chaque verbe.'
      },
      { type: 'heading', text: '5. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'N’appliquez pas une seule règle à tous les verbes',
        text:
          'Une erreur fréquente consiste à croire que tous les verbes terminés en -eler redoublent le l ou que tous ceux terminés en -eter redoublent le t. ' +
          'Ce n’est pas vrai. Comparez « j’appelle » et « j’achète ». Le verbe appeler redouble le l, tandis que le verbe acheter utilise è et un seul t. ' +
          'Attention également à ne pas oublier la cédille dans « nous commençons » ni le e dans « nous mangeons ». ' +
          'Ces modifications sont nécessaires pour conserver la bonne prononciation.'
      },
      {
        type: 'list',
        items: [
          'N’écrivez pas « nous commencons » : la forme correcte est « nous commençons ».',
          'N’écrivez pas « nous mangons » : la forme correcte est « nous mangeons ».',
          'Ne confondez pas « j’appelle » et « j’appele ». Le verbe appeler redouble le l.',
          'Ne confondez pas « j’achète » et « j’achette ». Le verbe acheter utilise è et un seul t.',
          'N’ajoutez pas automatiquement une cédille ou un e devant n’importe quelle voyelle. Observez la prononciation et la terminaison verbale.',
          'Consultez la conjugaison des verbes moins fréquents en cas de doute, notamment ceux qui se terminent en -eler et -eter, car ils peuvent présenter des variantes orthographiques.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous principalement à conjuguer ces verbes au présent, à l’imparfait et au futur. ' +
          'En expression écrite, faites attention aux changements orthographiques afin d’éviter les erreurs. ' +
          'En compréhension orale, associez la forme prononcée à son orthographe correcte. ' +
          'Pour développer votre maîtrise grammaticale au niveau B2, pratiquez également des verbes comme commencer, manger, appeler, jeter, acheter et geler dans des phrases complètes.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF indiquées confirment : la cédille des verbes en -cer et le e des verbes en -ger à la 1re personne du pluriel du présent (nous commençons, nous mangeons) ; ' +
          'le redoublement du l ou du t des verbes en -eler et -eter (ruisseler, hoqueter), avec la possibilité de les écrire avec è selon les rectifications de 1990 ; et le fait que appeler, jeter et leurs dérivés gardent leur conjugaison traditionnelle. ' +
          'De la page de l’OQLF sur l’imparfait, seul le titre a été vérifié ici. ' +
          'Aucune source ne confirme les recommandations d’étude pour le TEF Canada et le TCF Canada, ni la référence au niveau B2 : ce sont des conseils de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – Le présent de l’indicatif : radical des verbes réguliers',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24212/la-grammaire/le-verbe/conjugaison/radical-des-verbes-reguliers-au-present-de-lindicatif'
    },
    {
      title: 'OQLF – L’imparfait : formes et conjugaison',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24195/la-grammaire/le-verbe/conjugaison/formes-de-limparfait'
    },
    {
      title: 'OQLF – Rectifications liées à la conjugaison des verbes en -eler et en -eter',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23169/lorthographe/rectifications-de-lorthographe/rectifications-liees-aux-consonnes-doubles/rectifications-liees-a-la-conjugaison-des-verbes-en-eler-et-en-eter'
    }
  ]
}

export default content
