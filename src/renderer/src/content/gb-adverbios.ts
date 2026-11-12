import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-adverbios',

  pt: {
    title: 'Advérbios em -ment: formação e posição na frase',
    summary:
      'Aprenda a transformar adjetivos em advérbios utilizando o sufixo -ment e conheça suas principais exceções ortográficas. ' +
      'Entenda também onde posicionar os advérbios em frases simples, tempos compostos e construções com adjetivos, utilizando exemplos naturais do francês canadense.',
    blocks: [
      { type: 'heading', text: '1. O que são advérbios em -ment?' },
      {
        type: 'paragraph',
        text:
          'Os advérbios são palavras geralmente invariáveis que modificam verbos, adjetivos, outros advérbios ou até uma frase inteira. ' +
          'Muitos advérbios de modo em francês são formados a partir de adjetivos com o acréscimo do sufixo [[-ment|-mente]]. ' +
          'Em português, podemos fazer uma comparação com palavras como rapidamente, lentamente e cuidadosamente. ' +
          'Entretanto, a formação francesa possui regras próprias e nem sempre consiste em acrescentar o sufixo diretamente ao adjetivo masculino.'
      },
      { type: 'heading', text: '2. Como formar os advérbios em -ment' },
      {
        type: 'paragraph',
        text:
          'A regra mais comum é utilizar a forma feminina do adjetivo e acrescentar [[-ment|-mente]]. ' +
          'Quando o adjetivo termina em vogal, como -é, -i, -u ou -ai, geralmente utilizamos a forma masculina. ' +
          'Já os adjetivos terminados em -ant e -ent apresentam mudanças específicas: passam a terminar em -amment e -emment, respectivamente. ' +
          'Uma exceção frequente é [[lent|lento]], que segue a regra do feminino: [[lentement|lentamente]].'
      },
      {
        type: 'table',
        headers: ['Adjetivo masculino', 'Adjetivo feminino', 'Advérbio', 'Regra'],
        rows: [
            [
              '[[lent|lento]]',
              '[[lente|lenta]]',
              '[[lentement|lentamente]]',
              'Feminino + -ment'
            ],
            [
              '[[heureux|feliz]]',
              '[[heureuse|feliz]]',
              '[[heureusement|felizmente]]',
              'Feminino + -ment'
            ],
            [
              '[[précis|preciso]]',
              '[[précise|precisa]]',
              '[[précisément|precisamente]]',
              'Feminino + -ment, com acento agudo no e final'
            ],
            [
              '[[vrai|verdadeiro]]',
              '[[vraie|verdadeira]]',
              '[[vraiment|realmente]]',
              'Masculino + -ment'
            ],
            [
              '[[absolu|absoluto]]',
              '[[absolue|absoluta]]',
              '[[absolument|absolutamente]]',
              'Masculino + -ment'
            ],
            [
              '[[constant|constante]]',
              '[[constante|constante]]',
              '[[constamment|constantemente]]',
              '-ant → -amment'
            ],
            [
              '[[prudent|prudente]]',
              '[[prudente|prudente]]',
              '[[prudemment|prudentemente]]',
              '-ent → -emment'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Existem também algumas formações irregulares que precisam ser memorizadas. Por exemplo: [[bref|breve]] forma [[brièvement|brevemente]], e [[gentil|gentil]] ' +
          'forma [[gentiment|gentilmente]]. A grafia de alguns advérbios também admite variantes conforme as retificações ortográficas de 1990.'
      },
      { type: 'heading', text: '3. Onde posicionar os advérbios na frase' },
      {
        type: 'paragraph',
        text:
          'A posição depende da estrutura verbal e da palavra que o advérbio modifica. ' +
          'Em frases com tempos simples, os advérbios de modo geralmente aparecem depois do verbo conjugado. ' +
          'Nos tempos compostos, muitos advérbios curtos aparecem entre o auxiliar e o particípio passado, enquanto diversos advérbios de modo terminados em -ment ficam depois do particípio.'
      },
      {
        type: 'table',
        headers: ['Situação', 'Posição habitual', 'Exemplo'],
        rows: [
            [
              'Verbo em tempo simples',
              'Depois do verbo conjugado.',
              '[[Elle répond rapidement.|Ela responde rapidamente.]]'
            ],
            [
              'Tempo composto com advérbio curto',
              'Entre o auxiliar e o particípio.',
              '[[Nous avons déjà reçu votre courriel.|Já recebemos seu e-mail.]]'
            ],
            [
              'Tempo composto com advérbio de modo',
              'Frequentemente depois do particípio.',
              '[[Elle a expliqué la situation clairement.|Ela explicou a situação claramente.]]'
            ],
            [
              'Advérbio modificando adjetivo',
              'Antes do adjetivo.',
              '[[Ce rapport est particulièrement utile.|Este relatório é particularmente útil.]]'
            ],
            [
              'Advérbio modificando outro advérbio',
              'Antes do outro advérbio.',
              '[[Il travaille très rapidement.|Ele trabalha muito rapidamente.]]'
            ],
            [
              'Advérbio de frase',
              'Frequentemente no início da frase.',
              '[[Heureusement, tout s’est bien passé.|Felizmente, tudo correu bem.]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Observe um exemplo em contexto profissional: [[Une collègue prépare un rapport pour son équipe.|Uma colega prepara um relatório para sua equipe.]] ' +
          '[[Elle vérifie soigneusement les données, puis elle envoie rapidement le document à son gestionnaire.|Ela verifica cuidadosamente os dados e depois envia rapidamente o documento ao seu gerente.]] ' +
          'A posição dos advérbios pode variar conforme o tipo, o significado e a ênfase desejada.'
      },
      { type: 'heading', text: '4. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não acrescente -ment mecanicamente ao adjetivo masculino',
        text:
          'Um erro frequente é tentar formar todos os advérbios diretamente a partir do masculino. Por exemplo, [[lentment|lentamente (errado)]] ' +
          'não é a grafia de lentamente: o correto é [[lentement|lentamente]], formado a partir de [[lente|lenta]]. Da mesma forma, [[heureuxment|felizmente (errado)]] ' +
          'deve ser substituído por [[heureusement|felizmente]]. Também não confunda [[prudemment|prudentemente]] ' +
          'com uma forma terminada em -amment: o adjetivo [[prudent|prudente]] termina em -ent e, por isso, forma [[prudemment|prudentemente]].'
      },
      {
        type: 'list',
        items: [
            'Não confunda advérbios em -ment com adjetivos. [[Une réponse rapide|Uma resposta rápida]] ' +
            'utiliza um adjetivo, enquanto [[Elle répond rapidement.|Ela responde rapidamente.]] utiliza um advérbio.',
            'Não acrescente -e ao advérbio para concordar com uma palavra feminina. [[Les employées travaillent efficacement.|As funcionárias trabalham eficazmente.]] ' +
            'O advérbio permanece invariável.',
            'Não confunda [[-amment|terminação derivada de -ant]] com [[-emment|terminação derivada de -ent]]. Compare [[constamment|constantemente]] ' +
            'e [[prudemment|prudentemente]].',
            'Não coloque automaticamente todos os advérbios depois do particípio nos tempos compostos. [[Elle a déjà répondu.|Ela já respondeu.]] ' +
            'mostra que o advérbio curto pode ficar entre o auxiliar e o particípio.',
            'Não confunda a posição de um advérbio que modifica um adjetivo com a posição daquele que modifica um verbo: [[très important|muito importante]] ' +
            'e [[parler clairement|falar claramente]].',
          'Não suponha que todos os advérbios de modo terminados em -ment tenham uma única posição possível. O contexto e a ênfase também influenciam sua colocação.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique a formação dos advérbios a partir de adjetivos, especialmente os grupos -ant, -ent e as formas que utilizam a terminação feminina. ' +
          'Na expressão escrita, utilize advérbios variados para explicar como uma ação acontece e desenvolver argumentos com maior precisão. ' +
          'Na compreensão oral, identifique os advérbios que modificam verbos, adjetivos e frases inteiras. ' +
          'Para buscar o nível B2, domine também sua posição nos tempos compostos e evite repetições de palavras como [[très|muito]] e [[bien|bem]].'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A página do OQLF sobre a formação dos advérbios em -ment confirma: feminino + -ment, o acento agudo em précisément, o masculino nos adjetivos em -ai, -é, -i e -u, as terminações -emment e -amment e a irregularidade de bref (brièvement). ' +
          'A página do Lawless French sobre a posição geral confirma que, nos tempos simples, o advérbio vem logo depois do verbo. ' +
          'As outras três páginas listadas (OQLF sobre o modificador e sobre o advérbio, Lawless French sobre os tempos compostos) abrem, mas só os títulos foram conferidos. ' +
          'Nenhuma fonte aberta confirma: gentil → gentiment, a posição de advérbios de modo depois do particípio e de advérbios de frase no início, e a invariabilidade do advérbio. ' +
          'Também não há fonte para as recomendações de treinamento para o TEF Canada e o TCF Canada, nem para a referência ao nível B2: são orientações de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'Les adverbes en -ment : formation et place dans la phrase',
    summary:
      'Apprenez à transformer des adjectifs en adverbes à l’aide du suffixe -ment et découvrez les principales exceptions orthographiques. ' +
      'Comprenez également où placer les adverbes dans les phrases simples, les temps composés et les constructions avec des adjectifs, à partir d’exemples naturels du français canadien.',
    blocks: [
      { type: 'heading', text: '1. Que sont les adverbes en -ment ?' },
      {
        type: 'paragraph',
        text:
          'Les adverbes sont des mots généralement invariables qui modifient les verbes, les adjectifs, les autres adverbes ou même une phrase entière. ' +
          'De nombreux adverbes de manière en français sont formés à partir d’adjectifs auxquels on ajoute le suffixe -ment. ' +
          'On peut comparer cette formation à celle des mots rapidement, lentement et soigneusement en portugais. ' +
          'Cependant, la formation française possède ses propres règles et ne consiste pas toujours à ajouter le suffixe directement à l’adjectif masculin.'
      },
      { type: 'heading', text: '2. Comment former les adverbes en -ment' },
      {
        type: 'paragraph',
        text:
          'La règle la plus courante consiste à utiliser la forme féminine de l’adjectif et à ajouter -ment. ' +
          'Lorsque l’adjectif se termine par une voyelle, comme -é, -i, -u ou -ai, on utilise généralement la forme masculine. ' +
          'Les adjectifs terminés par -ant et -ent présentent des modifications particulières : ils deviennent respectivement -amment et -emment. ' +
          'Une exception fréquente est lent, qui suit la règle du féminin : lentement.'
      },
      {
        type: 'table',
        headers: ['Adjectif masculin', 'Adjectif féminin', 'Adverbe', 'Règle'],
        rows: [
            [
              'lent',
              'lente',
              'lentement',
              'Féminin + -ment'
            ],
            [
              'heureux',
              'heureuse',
              'heureusement',
              'Féminin + -ment'
            ],
            [
              'précis',
              'précise',
              'précisément',
              'Féminin + -ment, avec un accent aigu sur le e final'
            ],
            [
              'vrai',
              'vraie',
              'vraiment',
              'Masculin + -ment'
            ],
            [
              'absolu',
              'absolue',
              'absolument',
              'Masculin + -ment'
            ],
            [
              'constant',
              'constante',
              'constamment',
              '-ant → -amment'
            ],
            [
              'prudent',
              'prudente',
              'prudemment',
              '-ent → -emment'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Il existe également quelques formations irrégulières qu’il faut mémoriser. Par exemple : bref forme brièvement, et gentil forme gentiment. ' +
          'L’orthographe de certains adverbes admet aussi des variantes conformément aux rectifications orthographiques de 1990.'
      },
      { type: 'heading', text: '3. Où placer les adverbes dans la phrase ?' },
      {
        type: 'paragraph',
        text:
          'La position dépend de la structure verbale et du mot que l’adverbe modifie. ' +
          'Dans les phrases au temps simple, les adverbes de manière se placent généralement après le verbe conjugué. ' +
          'Aux temps composés, de nombreux adverbes courts se placent entre l’auxiliaire et le participe passé, tandis que plusieurs adverbes de manière en -ment se trouvent après le participe.'
      },
      {
        type: 'table',
        headers: ['Situation', 'Position habituelle', 'Exemple'],
        rows: [
            [
              'Verbe à un temps simple',
              'Après le verbe conjugué.',
              'Elle répond rapidement.'
            ],
            [
              'Temps composé avec un adverbe court',
              'Entre l’auxiliaire et le participe.',
              'Nous avons déjà reçu votre courriel.'
            ],
            [
              'Temps composé avec un adverbe de manière',
              'Souvent après le participe.',
              'Elle a expliqué la situation clairement.'
            ],
            [
              'Adverbe modifiant un adjectif',
              'Devant l’adjectif.',
              'Ce rapport est particulièrement utile.'
            ],
            [
              'Adverbe modifiant un autre adverbe',
              'Devant l’autre adverbe.',
              'Il travaille très rapidement.'
            ],
            [
              'Adverbe de phrase',
              'Souvent au début de la phrase.',
              'Heureusement, tout s’est bien passé.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Observez un exemple dans un contexte professionnel : une collègue prépare un rapport pour son équipe. ' +
          'Elle vérifie soigneusement les données, puis elle envoie rapidement le document à son gestionnaire. ' +
          'La position des adverbes peut varier selon leur type, leur sens et l’accent que l’on souhaite mettre sur l’information.'
      },
      { type: 'heading', text: '4. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'N’ajoutez pas mécaniquement -ment à l’adjectif masculin',
        text:
          'Une erreur fréquente consiste à essayer de former tous les adverbes directement à partir du masculin. ' +
          'Par exemple, « lentment » n’est pas l’orthographe de lentement : la forme correcte est « lentement », formée à partir de « lente ». ' +
          'De même, « heureuxment » doit être remplacé par « heureusement ». ' +
          'Ne confondez pas non plus « prudemment » avec une forme terminée en -amment : l’adjectif prudent se termine par -ent et forme donc prudemment.'
      },
      {
        type: 'list',
        items: [
          'Ne confondez pas les adverbes en -ment et les adjectifs. « Une réponse rapide » contient un adjectif, tandis que « Elle répond rapidement » contient un adverbe.',
          'N’ajoutez pas de -e à un adverbe pour l’accorder avec un nom féminin. « Les employées travaillent efficacement » : l’adverbe reste invariable.',
          'Ne confondez pas -amment, une terminaison dérivée de -ant, et -emment, une terminaison dérivée de -ent. Comparez constamment et prudemment.',
            'Ne placez pas automatiquement tous les adverbes après le participe dans les temps composés. ' +
            '« Elle a déjà répondu » montre qu’un adverbe court peut se placer entre l’auxiliaire et le participe.',
          'Ne confondez pas la position d’un adverbe qui modifie un adjectif avec celle d’un adverbe qui modifie un verbe : « très important » et « parler clairement ».',
          'Ne supposez pas que tous les adverbes de manière en -ment ont une seule position possible. Le contexte et l’accentuation influencent également leur placement.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous à former des adverbes à partir d’adjectifs, particulièrement les groupes en -ant et -ent ainsi que les formes construites à partir du féminin. ' +
          'En expression écrite, utilisez des adverbes variés pour expliquer comment une action se déroule et développer vos arguments avec plus de précision. ' +
          'En compréhension orale, identifiez les adverbes qui modifient les verbes, les adjectifs et les phrases entières. ' +
          'Pour viser le niveau B2, maîtrisez également leur position dans les temps composés et évitez les répétitions de mots comme très et bien.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La page de l’OQLF sur la formation des adverbes en -ment confirme : féminin + -ment, l’accent aigu dans précisément, le masculin pour les adjectifs en -ai, -é, -i et -u, les terminaisons -emment et -amment et l’irrégularité de bref (brièvement). ' +
          'La page de Lawless French sur la position générale confirme que, aux temps simples, l’adverbe se place juste après le verbe. ' +
          'Les trois autres pages indiquées (OQLF sur le modificateur et sur l’adverbe, Lawless French sur les temps composés) s’ouvrent, mais seuls les titres ont été vérifiés. ' +
          'Aucune source ouverte ne confirme : gentil → gentiment, la place des adverbes de manière après le participe et des adverbes de phrase en début de phrase, ni l’invariabilité de l’adverbe. ' +
          'Il n’y a pas non plus de source pour les recommandations d’entraînement pour le TEF Canada et le TCF Canada, ni pour la référence au niveau B2 : ce sont des conseils de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – Formation des adverbes en -ment',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21700/lorthographe/cas-particuliers-lies-a-lorthographe/formation-des-adverbes-en-ment'
    },
    {
      title: 'OQLF – Le modificateur : mode d’emploi',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24288/la-grammaire/la-grammaire-actuelle/les-fonctions-et-roles-syntaxiques/le-modificateur'
    },
    {
      title: 'OQLF – L’adverbe et le groupe adverbial',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24328/la-grammaire/la-grammaire-actuelle/les-classes-de-mots-et-les-groupes/ladverbe-et-le-groupe-adverbial'
    },
    {
      title: 'Lawless French – Position des adverbes avec les temps composés',
      url: 'https://progress.lawlessfrench.com/revision/grammar/where-to-place-adverbs-with-verbs-in-compound-tenses'
    },
    {
      title: 'Lawless French – Position générale des adverbes',
      url: 'https://progress.lawlessfrench.com/revision/grammar/where-to-place-adverbs-usually-position-of-adverbs'
    }
  ]
}

export default content
