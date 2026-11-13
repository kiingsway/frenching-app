import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-futur-simple',

  pt: {
    title: 'Futur simple: o futuro simples em francês',
    summary:
      'Aprenda a formar e utilizar o futuro simples para falar de planos, previsões, promessas e acontecimentos futuros. ' +
      'Domine as terminações regulares, os principais radicais irregulares e a construção de frases condicionais com si.',
    blocks: [
      { type: 'heading', text: '1. Como formar o futur simple' },
      {
        type: 'paragraph',
        text:
          'O [[futur simple|futuro simples]] é utilizado para falar de acontecimentos que ainda vão ocorrer. ' +
          'Sua formação geralmente consiste em utilizar o infinitivo do verbo como radical e acrescentar as terminações -ai, -as, -a, -ons, -ez, -ont. ' +
          'Nos verbos terminados em -er e -ir, conserva-se o infinitivo completo. Nos verbos terminados em -re, retira-se o e final antes de acrescentar as terminações.'
      },
      {
        type: 'table',
        headers: ['Pessoa', '[[Parler|falar]]', '[[Finir|terminar]]', '[[Vendre|vender]]'],
        rows: [
            [
              'Eu',
              '[[Je parlerai|Eu falarei]]',
              '[[Je finirai|Eu terminarei]]',
              '[[Je vendrai|Eu venderei]]'
            ],
            [
              'Você',
              '[[Tu parleras|Você falará]]',
              '[[Tu finiras|Você terminará]]',
              '[[Tu vendras|Você venderá]]'
            ],
            [
              'Ele / Ela',
              '[[Il / Elle parlera|Ele / Ela falará]]',
              '[[Il / Elle finira|Ele / Ela terminará]]',
              '[[Il / Elle vendra|Ele / Ela venderá]]'
            ],
            [
              'Nós',
              '[[Nous parlerons|Nós falaremos]]',
              '[[Nous finirons|Nós terminaremos]]',
              '[[Nous vendrons|Nós venderemos]]'
            ],
            [
              'Vocês',
              '[[Vous parlerez|Vocês falarão]]',
              '[[Vous finirez|Vocês terminarão]]',
              '[[Vous vendrez|Vocês venderão]]'
            ],
            [
              'Eles / Elas',
              '[[Ils / Elles parleront|Eles / Elas falarão]]',
              '[[Ils / Elles finiront|Eles / Elas terminarão]]',
              '[[Ils / Elles vendront|Eles / Elas venderão]]'
            ]
        ]
      },
      { type: 'heading', text: '2. Os principais verbos irregulares' },
      {
        type: 'paragraph',
        text:
          'Alguns verbos não utilizam o infinitivo completo como radical. Eles apresentam formas especiais que precisam ser memorizadas. ' +
          'As terminações continuam sendo as mesmas do futuro simples regular.'
      },
      {
        type: 'table',
        headers: ['Infinitivo', 'Radical do futuro', 'Exemplo'],
        rows: [
            [
              '[[être|ser / estar]]',
              'ser-',
              '[[Je serai|Eu serei / estarei]]'
            ],
            [
              '[[avoir|ter]]',
              'aur-',
              '[[J’aurai|Eu terei]]'
            ],
            [
              '[[aller|ir]]',
              'ir-',
              '[[J’irai|Eu irei]]'
            ],
            [
              '[[faire|fazer]]',
              'fer-',
              '[[Je ferai|Eu farei]]'
            ],
            [
              '[[pouvoir|poder]]',
              'pourr-',
              '[[Je pourrai|Eu poderei]]'
            ],
            [
              '[[vouloir|querer]]',
              'voudr-',
              '[[Je voudrai|Eu quererei]]'
            ],
            [
              '[[devoir|dever]]',
              'devr-',
              '[[Je devrai|Eu deverei]]'
            ],
            [
              '[[savoir|saber]]',
              'saur-',
              '[[Je saurai|Eu saberei]]'
            ],
            [
              '[[venir|vir]]',
              'viendr-',
              '[[Je viendrai|Eu virei]]'
            ],
            [
              '[[voir|ver]]',
              'verr-',
              '[[Je verrai|Eu verei]]'
            ],
            [
              '[[envoyer|enviar]]',
              'enverr-',
              '[[J’enverrai|Eu enviarei]]'
            ],
            [
              '[[tenir|segurar / manter]]',
              'tiendr-',
              '[[Je tiendrai|Eu segurarei / manterei]]'
            ]
        ]
      },
      { type: 'heading', text: '3. Quando utilizar o futuro simples' },
      {
        type: 'paragraph',
        text:
          'O futuro simples pode expressar previsões, intenções, promessas e acontecimentos planejados ou esperados. ' +
          'É frequentemente acompanhado de expressões temporais como [[demain|amanhã]], [[bientôt|em breve]], [[la semaine prochaine|na próxima semana]], [[l’année prochaine|no próximo ano]] ' +
          'e [[dans quelques années|daqui a alguns anos]].'
      },
      {
        type: 'list',
        items: [
          'Previsão: [[Il fera froid demain.|Fará frio amanhã.]]',
          'Plano futuro: [[Je chercherai un nouvel emploi l’année prochaine.|Procurarei um novo emprego no próximo ano.]]',
          'Promessa: [[Je vous enverrai le courriel ce soir.|Enviarei o e-mail esta noite.]]',
          'Acontecimento futuro: [[Le magasin ouvrira à 9 h.|A loja abrirá às 9h.]]',
          'Previsão pessoal: [[Je pense que cette formation sera très utile.|Acho que esse curso será muito útil.]]',
          'Consequência de uma condição: [[Si tu étudies régulièrement, tu réussiras l’examen.|Se você estudar regularmente, passará na prova.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Exemplo em contexto: uma pessoa está planejando sua carreira em Toronto. ' +
          '[[L’année prochaine, je suivrai une formation professionnelle à Toronto.|No próximo ano, farei uma formação profissional em Toronto.]] ' +
          '[[Je développerai mes compétences et je rencontrerai de nouveaux collègues.|Desenvolverei minhas habilidades e conhecerei novos colegas.]] ' +
          '[[Si tout se passe bien, je trouverai un emploi dans mon domaine.|Se tudo correr bem, encontrarei um emprego na minha área.]]'
      },
      { type: 'heading', text: '4. Futur simple × futur proche' },
      {
        type: 'paragraph',
        text:
          'O [[futur proche|futuro próximo]] é formado pelo presente do verbo [[aller|ir]] seguido de um infinitivo. ' +
          'É muito utilizado para falar de intenções, planos e acontecimentos que parecem próximos ou já estão previstos. O [[futur simple|futuro simples]] ' +
          'também expressa acontecimentos futuros, mas aparece frequentemente em previsões, promessas, projeções e registros mais formais. ' +
          'Os dois tempos podem ser utilizados em contextos semelhantes, dependendo da perspectiva do falante.'
      },
      {
        type: 'table',
        headers: ['Futuro próximo', 'Futuro simples', 'Observação'],
        rows: [
            [
              '[[Je vais déménager le mois prochain.|Vou me mudar no próximo mês.]]',
              '[[Je déménagerai le mois prochain.|Mudarei no próximo mês.]]',
              'As duas frases expressam um acontecimento futuro.'
            ],
            [
              '[[Il va pleuvoir.|Vai chover.]]',
              '[[Il pleuvra demain.|Choverá amanhã.]]',
              'A primeira apresenta uma previsão ou intenção mais imediata; a segunda apresenta uma previsão futura.'
            ]
        ]
      },
      { type: 'heading', text: '5. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com o uso de si nas frases condicionais',
        text:
          'Um erro comum é utilizar o futuro logo depois de [[si|se]] em uma condição. Em francês, quando [[si|se]] ' +
          'introduz uma condição possível, utiliza-se o presente nessa oração e o futuro na oração principal. ' +
          'O correto é [[Si j’ai le temps, je viendrai.|Se eu tiver tempo, irei.]] e não [[Si j’aurai le temps, je viendrai|Se eu terei tempo, irei (errado)]]. ' +
          'Atenção: com [[quand|quando]], uma referência a um acontecimento futuro pode utilizar o futuro nas duas orações: [[Quand tu arriveras, nous commencerons.|Quando você chegar, começaremos.]]'
      },
      {
        type: 'list',
        items: [
          'Não confunda [[je parlerai|eu falarei]] com [[je parlerais|eu falaria]]. O primeiro está no futuro simples e o segundo no condicional presente.',
          'Não mantenha o e final dos verbos terminados em -re. O correto é [[je vendrai|eu venderei]], e não [[je vendreai|eu venderei (errado)]].',
          'Não utilize as terminações do presente para formar o futuro. Compare [[je parle|eu falo]] com [[je parlerai|eu falarei]].',
            'Memorize os radicais irregulares. Por exemplo, [[être|ser / estar]] ' +
            'forma [[je serai|eu serei / estarei]], e não uma forma construída a partir de seu infinitivo regular.',
          'Atenção à grafia de alguns verbos em -er: [[acheter|comprar]] forma [[j’achèterai|eu comprarei]] (com è) e [[appeler|chamar]] forma [[j’appellerai|eu chamarei]] (com ll). A página sobre verbos com mudança de grafia trata desse assunto.',
          'Não pense que o futuro simples serve apenas para acontecimentos distantes. Ele também pode expressar acontecimentos próximos, dependendo do contexto.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique a formação do futuro simples com verbos regulares e irregulares, especialmente em situações relacionadas a trabalho, estudos, projetos pessoais e mudanças de vida. ' +
          'Na expressão escrita, utilize esse tempo para apresentar previsões, consequências e planos de maneira organizada. ' +
          'Na expressão oral e na compreensão, reconheça as terminações e os radicais irregulares. ' +
          'Para buscar o nível B2, domine também as estruturas condicionais com [[si|se]] e a diferença entre [[futur simple|futuro simples]] ' +
          'e [[futur proche|futuro próximo]].'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A página do OQLF sobre as formas do futur simple confirma as terminações (-rai, -ras, -ra, -rons, -rez, -ront), os verbos em -re sem o e final (apprendrai) e os radicais de aller, avoir, être, faire, pouvoir, savoir, tenir, venir e voir. ' +
          'A página do OQLF sobre os empregos confirma o futuro para ações e estados por vir, com marcadores como demain e la semaine prochaine. ' +
          'A página do Usito abre, mas só o título foi conferido. ' +
          'Nenhuma fonte aberta confirma: os radicais de vouloir, devoir e envoyer; a regra do si seguido de presente e a de quand seguido de futuro; a comparação com o futur proche; e as recomendações de aplicação ao TEF Canada e ao TCF Canada, inclusive a referência ao nível B2. São sugestões de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'Le futur simple',
    summary:
      'Apprenez à former et à utiliser le futur simple pour parler de projets, de prévisions, de promesses et d’événements à venir. ' +
      'Maîtrisez les terminaisons régulières, les principaux radicaux irréguliers et la construction de phrases conditionnelles avec si.',
    blocks: [
      { type: 'heading', text: '1. Comment former le futur simple' },
      {
        type: 'paragraph',
        text:
          'Le futur simple sert à parler d’événements qui ne se sont pas encore produits. ' +
          'Sa formation consiste généralement à utiliser l’infinitif du verbe comme radical et à ajouter les terminaisons -ai, -as, -a, -ons, -ez et -ont. ' +
          'Pour les verbes réguliers en -er et en -ir, on conserve l’infinitif complet. Pour les verbes en -re, on supprime le e final avant d’ajouter les terminaisons.'
      },
      {
        type: 'table',
        headers: ['Personne', 'Parler', 'Finir', 'Vendre'],
        rows: [
            [
              'Je',
              'Je parlerai',
              'Je finirai',
              'Je vendrai'
            ],
            [
              'Tu',
              'Tu parleras',
              'Tu finiras',
              'Tu vendras'
            ],
            [
              'Il / Elle',
              'Il / Elle parlera',
              'Il / Elle finira',
              'Il / Elle vendra'
            ],
            [
              'Nous',
              'Nous parlerons',
              'Nous finirons',
              'Nous vendrons'
            ],
            [
              'Vous',
              'Vous parlerez',
              'Vous finirez',
              'Vous vendrez'
            ],
            [
              'Ils / Elles',
              'Ils / Elles parleront',
              'Ils / Elles finiront',
              'Ils / Elles vendront'
            ]
        ]
      },
      { type: 'heading', text: '2. Les principaux verbes irréguliers' },
      {
        type: 'paragraph',
        text:
          'Certains verbes n’utilisent pas l’infinitif complet comme radical. Ils présentent des formes particulières qu’il faut mémoriser. ' +
          'Les terminaisons restent les mêmes que celles du futur simple régulier.'
      },
      {
        type: 'table',
        headers: ['Infinitif', 'Radical du futur', 'Exemple'],
        rows: [
            [
              'être',
              'ser-',
              'Je serai'
            ],
            [
              'avoir',
              'aur-',
              'J’aurai'
            ],
            [
              'aller',
              'ir-',
              'J’irai'
            ],
            [
              'faire',
              'fer-',
              'Je ferai'
            ],
            [
              'pouvoir',
              'pourr-',
              'Je pourrai'
            ],
            [
              'vouloir',
              'voudr-',
              'Je voudrai'
            ],
            [
              'devoir',
              'devr-',
              'Je devrai'
            ],
            [
              'savoir',
              'saur-',
              'Je saurai'
            ],
            [
              'venir',
              'viendr-',
              'Je viendrai'
            ],
            [
              'voir',
              'verr-',
              'Je verrai'
            ],
            [
              'envoyer',
              'enverr-',
              'J’enverrai'
            ],
            [
              'tenir',
              'tiendr-',
              'Je tiendrai'
            ]
        ]
      },
      { type: 'heading', text: '3. Quand utiliser le futur simple ?' },
      {
        type: 'paragraph',
        text:
          'Le futur simple peut exprimer des prévisions, des intentions, des promesses et des événements planifiés ou attendus. ' +
          'Il est souvent accompagné d’expressions temporelles comme demain, bientôt, la semaine prochaine, l’année prochaine et dans quelques années.'
      },
      {
        type: 'list',
        items: [
          'Prévision : « Il fera froid demain. »',
          'Projet futur : « Je chercherai un nouvel emploi l’année prochaine. »',
          'Promesse : « Je vous enverrai le courriel ce soir. »',
          'Événement futur : « Le magasin ouvrira à 9 h. »',
          'Prévision personnelle : « Je pense que cette formation sera très utile. »',
          'Conséquence d’une condition : « Si tu étudies régulièrement, tu réussiras l’examen. »'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Exemple dans un contexte concret : une personne planifie sa carrière à Toronto. L’année prochaine, je suivrai une formation professionnelle à Toronto. ' +
          'Je développerai mes compétences et je rencontrerai de nouveaux collègues. Si tout se passe bien, je trouverai un emploi dans mon domaine.'
      },
      { type: 'heading', text: '4. Futur simple ou futur proche ?' },
      {
        type: 'paragraph',
        text:
          'Le futur proche se forme avec le présent du verbe aller suivi d’un infinitif. ' +
          'Il est très utilisé pour parler d’intentions, de projets et d’événements qui semblent proches ou déjà prévus. ' +
          'Le futur simple exprime également des événements à venir, mais apparaît fréquemment dans les prévisions, les promesses, les projections et les registres plus formels. ' +
          'Les deux temps peuvent être utilisés dans des contextes similaires, selon le point de vue du locuteur.'
      },
      {
        type: 'table',
        headers: ['Futur proche', 'Futur simple', 'Remarque'],
        rows: [
            [
              'Je vais déménager le mois prochain.',
              'Je déménagerai le mois prochain.',
              'Les deux phrases expriment un événement futur.'
            ],
            [
              'Il va pleuvoir.',
              'Il pleuvra demain.',
              'La première présente une prévision plus immédiate ; la deuxième présente une prévision future.'
            ]
        ]
      },
      { type: 'heading', text: '5. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à l’emploi de si dans les phrases conditionnelles',
        text:
          'Une erreur fréquente consiste à utiliser le futur immédiatement après si dans une condition. ' +
          'En français, lorsque si introduit une condition possible, on utilise le présent dans cette proposition et le futur dans la proposition principale. ' +
          'La forme correcte est « Si j’ai le temps, je viendrai », et non « Si j’aurai le temps, je viendrai ». ' +
          'Attention : avec quand, une référence à un événement futur peut utiliser le futur dans les deux propositions : « Quand tu arriveras, nous commencerons ».'
      },
      {
        type: 'list',
        items: [
          'Ne confondez pas « je parlerai » et « je parlerais ». Le premier est au futur simple et le deuxième au conditionnel présent.',
          'Ne conservez pas le e final des verbes terminés en -re. La forme correcte est « je vendrai », et non « je vendreai ».',
          'N’utilisez pas les terminaisons du présent pour former le futur. Comparez « je parle » et « je parlerai ».',
          'Mémorisez les radicaux irréguliers. Par exemple, être donne « je serai », et non une forme construite à partir de son infinitif régulier.',
          'Faites attention à l’orthographe de certains verbes en -er : acheter donne j’achèterai (avec è) et appeler donne j’appellerai (avec ll). La page sur les verbes à modification orthographique traite de ce sujet.',
          'Ne pensez pas que le futur simple sert uniquement à exprimer des événements lointains. Il peut également exprimer des événements proches, selon le contexte.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous à former le futur simple avec des verbes réguliers et irréguliers, particulièrement dans des situations liées au travail, aux études, aux projets personnels et aux changements de vie. ' +
          'À l’expression écrite, utilisez ce temps pour présenter des prévisions, des conséquences et des projets de manière structurée. ' +
          'À l’expression orale et en compréhension, reconnaissez les terminaisons et les radicaux irréguliers. ' +
          'Pour viser le niveau B2, maîtrisez également les structures conditionnelles avec si et la différence entre le futur simple et le futur proche.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La page de l’OQLF sur les formes du futur simple confirme les terminaisons (-rai, -ras, -ra, -rons, -rez, -ront), les verbes en -re sans e final (apprendrai) et les radicaux de aller, avoir, être, faire, pouvoir, savoir, tenir, venir et voir. ' +
          'La page de l’OQLF sur les emplois confirme le futur pour des actions et des états à venir, avec des marqueurs comme demain et la semaine prochaine. ' +
          'La page d’Usito s’ouvre, mais seul le titre a été vérifié. ' +
          'Aucune source ouverte ne confirme : les radicaux de vouloir, devoir et envoyer ; la règle de si suivi du présent et celle de quand suivi du futur ; la comparaison avec le futur proche ; ni les recommandations d’application au TEF Canada et au TCF Canada, y compris la référence au niveau B2. Ce sont des suggestions de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – Formes du futur simple',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24655/la-grammaire/le-verbe/conjugaison/formes-du-futur-simple'
    },
    {
      title: 'OQLF – Le futur simple : emplois et valeurs',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24127/la-grammaire/le-verbe/temps-grammaticaux/futur/le-futur-simple'
    },
    {
      title: 'Usito – Régularités des terminaisons verbales au futur simple',
      url: 'https://examen-francais-quebec.usito.usherbrooke.ca/articles/aides_%C3%A0_la_r%C3%A9daction/ConjugaisonR%C3%A9gularit%C3%A9sDesTerminaisonsVerbalesAuxTempsSimples'
    }
  ]
}

export default content
