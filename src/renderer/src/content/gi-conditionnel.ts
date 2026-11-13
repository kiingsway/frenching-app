import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-conditionnel',

  pt: {
    title: 'Conditionnel présent: polidez e hipótese',
    summary:
      'Aprenda a formar o [[conditionnel présent|condicional presente]] ' +
      'e utilizá-lo para fazer pedidos educados, expressar desejos, dar conselhos e formular hipóteses. Entenda a estrutura com [[si|se]] e [[imparfait|imperfeito]] ' +
      'e evite erros frequentes de brasileiros, especialmente o uso inadequado do condicional depois de [[si|se]].',
    blocks: [
      { type: 'heading', text: '1. Formação do condicional presente' },
      {
        type: 'paragraph',
        text:
          'O [[conditionnel présent|condicional presente]] ' +
          'utiliza o mesmo radical do [[futur simple|futuro simples]], acrescido das terminações do [[imparfait|imperfeito]]: -ais, -ais, -ait, -ions, -iez e -aient. ' +
          'Nos verbos terminados em -re, retira-se o e final do infinitivo antes de acrescentar a terminação.'
      },
      {
        type: 'table',
        headers: ['Pessoa', 'Terminação', '[[Parler|falar]]'],
        rows: [
          ['[[Je|Eu]]', '-ais', '[[Je parlerais|Eu falaria]]'],
          ['[[Tu|Você]]', '-ais', '[[Tu parlerais|Você falaria]]'],
          ['[[Il / Elle|Ele / Ela]]', '-ait', '[[Il parlerait|Ele falaria]]'],
          ['[[Nous|Nós]]', '-ions', '[[Nous parlerions|Nós falaríamos]]'],
          ['[[Vous|Vocês / O senhor / A senhora]]', '-iez', '[[Vous parleriez|Vocês falariam]]'],
          ['[[Ils / Elles|Eles / Elas]]', '-aient', '[[Ils parleraient|Eles falariam]]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Alguns verbos apresentam radicais irregulares, geralmente os mesmos utilizados no futuro simples. Memorize especialmente: [[être|ser / estar]] ' +
          '→ ser- ([[je serais|eu seria]]); [[avoir|ter]] → aur- ([[j’aurais|eu teria]]); [[aller|ir]] → ir- ([[j’irais|eu iria]]); [[faire|fazer]] ' +
          '→ fer- ([[je ferais|eu faria]]); [[pouvoir|poder]] → pourr- ([[je pourrais|eu poderia]]); [[vouloir|querer]] ' +
          '→ voudr- ([[je voudrais|eu gostaria]]); [[devoir|dever]] → devr- ([[je devrais|eu deveria]]); [[venir|vir]] → viendr- ([[je viendrais|eu viria]]).'
      },
      { type: 'heading', text: '2. Principais utilizações' },
      {
        type: 'paragraph',
        text:
          'Polidez: o condicional torna pedidos, perguntas e solicitações menos diretos. É especialmente útil em situações profissionais, administrativas e cotidianas. ' +
          'Na comunicação canadense, você pode utilizá-lo ao solicitar informações, marcar um horário ou pedir um documento por [[courriel|e-mail]].'
      },
      {
        type: 'list',
        items: [
          '[[Je voudrais prendre un rendez-vous pour lundi.|Eu gostaria de marcar um horário para segunda-feira.]]',
          '[[Pourriez-vous m’envoyer le formulaire par courriel ?|Você poderia me enviar o formulário por e-mail?]]',
          '[[J’aimerais obtenir des renseignements sur le logement.|Eu gostaria de obter informações sobre moradia.]]',
          '[[À ta place, je demanderais une confirmation par écrit.|No seu lugar, eu pediria uma confirmação por escrito.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Desejos e hipóteses: o condicional também expressa vontades, situações imaginárias e consequências que dependem de uma condição. ' +
          'Uma estrutura muito importante é [[si + imparfait, conditionnel présent|se + imperfeito, condicional presente]]. ' +
          'A primeira parte apresenta a condição e a segunda apresenta o resultado possível no presente ou no futuro.'
      },
      {
        type: 'list',
        items: [
          '[[J’aimerais améliorer mon français.|Eu gostaria de melhorar meu francês.]]',
          '[[Si j’avais plus de temps, je suivrais un cours de français.|Se eu tivesse mais tempo, faria um curso de francês.]]',
          '[[Si le logement était moins cher, nous déménagerions à Québec.|Se a moradia fosse mais barata, nós nos mudaríamos para Quebec.]]',
          '[[Si je pouvais choisir, je travaillerais à Montréal.|Se eu pudesse escolher, trabalharia em Montreal.]]',
          'Incerteza, muito comum em notícias: [[Selon la rumeur, le président annoncerait la fusion demain.|Segundo o boato, o presidente anunciaria a fusão amanhã.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não use o condicional depois de si para expressar uma condição',
        text:
          'Um erro comum é usar o condicional na parte com si, como em [[Si j’aurais le temps, je viendrais|Se eu teria tempo, viria (errado)]]. ' +
          'A construção correta é [[Si j’avais le temps, je viendrais.|Se eu tivesse tempo, viria.]] Quando [[si|se]] ' +
          'introduz uma condição hipotética, utiliza-se o [[imparfait|imperfeito]] na condição e o [[conditionnel présent|condicional presente]] na consequência. ' +
          'No português falado, também é comum usar o imperfeito na consequência ("se eu tivesse tempo, eu vinha"); em francês, a consequência fica no condicional. ' +
          'Atenção: isso não significa que o condicional nunca possa aparecer depois de [[si|se]]. Ele pode aparecer quando [[si|se]] ' +
          'introduz uma pergunta indireta, como em [[Je voudrais savoir si vous seriez disponible.|Eu gostaria de saber se você estaria disponível.]]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Ao interpretar uma frase, identifique a intenção do falante: um pedido educado, um desejo, um conselho ou uma hipótese. ' +
          'Nas construções com [[si|se]], identifique primeiro a condição e depois a consequência. ' +
          'Pratique especialmente os verbos irregulares [[être|ser / estar]], [[avoir|ter]], [[pouvoir|poder]] ' +
          'e [[vouloir|querer]], que aparecem com frequência em situações de comunicação cotidiana. ' +
          'Na produção escrita e oral, prefira estruturas como [[Je voudrais...|Eu gostaria...]] e [[Pourriez-vous... ?|Você poderia...?]] ' +
          'quando precisar formular solicitações com cortesia.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As quatro páginas do OQLF listadas abrem e confirmam: as terminações do conditionnel (-rais, -rais, -rait, -rions, -riez, -raient) e os radicais de aller, avoir, être, faire, pouvoir, savoir, tenir, venir e voir; ' +
          'os usos de polidez (Pourriez-vous…, Je souhaiterais…) e de incerteza; a construção si + imparfait → conditionnel présent; e que depois de si de condição não se usa o conditionnel, mas ele é possível em pergunta indireta. ' +
          'Os radicais de vouloir e devoir não aparecem na tabela do OQLF. ' +
          'Nenhuma fonte confirma as recomendações para o TEF Canada e o TCF Canada (como preferir Je voudrais… e Pourriez-vous… ?) nem a afirmação de que o uso do imperfeito na consequência é comum no português falado: são conselhos de preparação, não regras das provas.'
      }
    ]
  },

  fr: {
    title: 'Conditionnel présent : politesse et hypothèse',
    summary:
      'Apprenez à former le conditionnel présent et à l’utiliser pour faire des demandes polies, exprimer des souhaits, donner des conseils et formuler des hypothèses. ' +
      'Comprenez la structure avec si et l’imparfait, et évitez les erreurs fréquentes, notamment l’emploi incorrect du conditionnel après si dans une proposition de condition.',
    blocks: [
      { type: 'heading', text: '1. Formation du conditionnel présent' },
      {
        type: 'paragraph',
        text:
          'Le conditionnel présent utilise le même radical que le futur simple, auquel on ajoute les terminaisons de l’imparfait : -ais, -ais, -ait, -ions, -iez et -aient. ' +
          'Pour les verbes qui se terminent en -re, on enlève le e final de l’infinitif avant d’ajouter la terminaison.'
      },
      {
        type: 'table',
        headers: ['Personne', 'Terminaison', 'Parler'],
        rows: [
            [
              'Je',
              '-ais',
              'Je parlerais'
            ],
            [
              'Tu',
              '-ais',
              'Tu parlerais'
            ],
            [
              'Il / Elle',
              '-ait',
              'Il parlerait'
            ],
            [
              'Nous',
              '-ions',
              'Nous parlerions'
            ],
            [
              'Vous',
              '-iez',
              'Vous parleriez'
            ],
            [
              'Ils / Elles',
              '-aient',
              'Ils parleraient'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Certains verbes ont des radicaux irréguliers, généralement les mêmes qu’au futur simple. ' +
          'Il est particulièrement utile de mémoriser les suivants : être → ser- (je serais) ; avoir → aur- (j’aurais) ; aller → ir- (j’irais) ; faire → fer- (je ferais) ; pouvoir → pourr- (je pourrais) ; vouloir → voudr- (je voudrais) ; devoir → devr- (je devrais) ; venir → viendr- (je viendrais).'
      },
      { type: 'heading', text: '2. Principales utilisations' },
      {
        type: 'paragraph',
        text:
          'Politesse : le conditionnel permet de formuler des demandes, des questions et des requêtes de manière moins directe. ' +
          'Il est particulièrement utile dans les situations professionnelles, administratives et quotidiennes. ' +
          'Dans la communication au Canada, on peut l’utiliser pour demander des renseignements, prendre un rendez-vous ou solliciter un document par courriel.'
      },
      {
        type: 'list',
        items: [
          'Je voudrais prendre un rendez-vous pour lundi.',
          'Pourriez-vous m’envoyer le formulaire par courriel ?',
          'J’aimerais obtenir des renseignements sur le logement.',
          'À ta place, je demanderais une confirmation par écrit.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Souhaits et hypothèses : le conditionnel exprime également des souhaits, des situations imaginaires et des conséquences qui dépendent d’une condition. ' +
          'Une structure très importante est si + imparfait, conditionnel présent. ' +
          'La première proposition présente la condition et la seconde exprime le résultat possible dans le présent ou dans l’avenir.'
      },
      {
        type: 'list',
        items: [
          'J’aimerais améliorer mon français.',
          'Si j’avais plus de temps, je suivrais un cours de français.',
          'Si le logement était moins cher, nous déménagerions à Québec.',
          'Si je pouvais choisir, je travaillerais à Montréal.',
          'Incertitude, très courante dans la presse : Selon la rumeur, le président annoncerait la fusion demain.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne pas employer le conditionnel après si pour exprimer une condition',
        text:
          'Une erreur fréquente consiste à utiliser le conditionnel dans la proposition en si, comme dans « Si j’aurais le temps, je viendrais ». La construction correcte est « Si j’avais le temps, je viendrais ». ' +
          'Lorsque si introduit une hypothèse conditionnelle, on utilise l’imparfait dans la proposition de condition et le conditionnel présent dans la proposition principale. ' +
          'En portugais parlé, on emploie aussi souvent l’imparfait dans la conséquence (« se eu tivesse tempo, eu vinha ») ; en français, la conséquence reste au conditionnel. ' +
          'Attention : cela ne signifie pas que le conditionnel ne peut jamais apparaître après si. ' +
          'Il peut être utilisé lorsque si introduit une interrogation indirecte, comme dans « Je voudrais savoir si vous seriez disponible ».'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Pour interpréter une phrase, identifiez l’intention du locuteur : une demande polie, un souhait, un conseil ou une hypothèse. ' +
          'Dans les constructions avec si, identifiez d’abord la condition, puis sa conséquence. ' +
          'Entraînez-vous particulièrement avec les verbes irréguliers être, avoir, pouvoir et vouloir, qui sont fréquents dans les situations de communication quotidienne. ' +
          'Dans vos productions écrites et orales, privilégiez des structures comme « Je voudrais… » et « Pourriez-vous… ? ' +
          '» lorsque vous devez formuler des demandes avec courtoisie.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les quatre pages de l’OQLF indiquées s’ouvrent et confirment : les terminaisons du conditionnel (-rais, -rais, -rait, -rions, -riez, -raient) et les radicaux de aller, avoir, être, faire, pouvoir, savoir, tenir, venir et voir ; ' +
          'les emplois de politesse (Pourriez-vous…, Je souhaiterais…) et d’incertitude ; la construction si + imparfait → conditionnel présent ; et le fait qu’après si de condition on n’emploie pas le conditionnel, mais qu’il est possible dans une interrogation indirecte. ' +
          'Les radicaux de vouloir et devoir ne figurent pas dans le tableau de l’OQLF. ' +
          'Aucune source ne confirme les recommandations pour le TEF Canada et le TCF Canada (comme privilégier Je voudrais… et Pourriez-vous… ?) ni l’affirmation selon laquelle l’imparfait dans la conséquence est courant en portugais parlé : ce sont des conseils de préparation, pas des règles des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le conditionnel : formes et conjugaison — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24137/la-grammaire/le-verbe/conjugaison/formes-du-conditionnel'
    },
    {
      title: 'Conditionnel : valeur modale — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24148/la-grammaire/le-verbe/temps-grammaticaux/conditionnel/valeur-modale-du-conditionnel'
    },
    {
      title: 'Conditionnel : emploi dans les phrases hypothétiques — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24140/la-grammaire/le-verbe/temps-grammaticaux/conditionnel/conditionnel-dans-les-phrases-hypothetiques'
    },
    {
      title: 'Phrase introduite par SI : mode verbal — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21324/la-grammaire/le-verbe/modes/concordance-des-temps/mode-verbal-apres-si'
    }
  ]
}

export default content
