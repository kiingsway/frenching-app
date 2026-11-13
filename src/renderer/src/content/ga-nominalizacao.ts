import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-nominalizacao',

  pt: {
    title: 'Nominalização: transformar verbos e adjetivos em substantivos',
    summary:
      'Aprenda a transformar verbos e adjetivos em substantivos para construir frases mais concisas e desenvolver uma escrita mais elaborada em francês. ' +
      'Conheça os principais padrões de formação, as mudanças na estrutura da frase e o uso da nominalização em textos formais, relatórios e argumentações.',
    blocks: [
      { type: 'heading', text: '1. O que é nominalização?' },
      {
        type: 'paragraph',
        text:
          'A nominalização consiste em transformar um verbo, um adjetivo ou até mesmo uma frase inteira em um substantivo ou grupo nominal. ' +
          'Em vez de apresentar diretamente uma ação ou característica, você passa a expressar essa informação por meio de um nome. ' +
          'Esse recurso permite condensar informações e é especialmente útil em textos administrativos, relatórios, notícias e argumentações mais elaboradas.'
      },
      { type: 'heading', text: '2. Formação de substantivos' },
      {
        type: 'paragraph',
        text:
          'Muitos substantivos são formados pela adição de sufixos à base de um verbo ou adjetivo. ' +
          'Entre as terminações frequentes estão -tion / -ation, -ment, -age e -ure ' +
          'para alguns substantivos derivados de verbos, e -ité, -ence e -té para alguns substantivos derivados de adjetivos. ' +
          'Entretanto, esses padrões não são fórmulas universais: algumas palavras apresentam alterações no radical ou formações menos previsíveis.'
      },
      {
        type: 'table',
        headers: ['Base', 'Transformação'],
        rows: [
          ['Verbo', '[[décider → décision|decidir → decisão]]'],
          ['Verbo', '[[organiser → organisation|organizar → organização]]'],
          ['Verbo', '[[développer → développement|desenvolver → desenvolvimento]]'],
          ['Verbo', '[[fermer → fermeture|fechar → fechamento]]'],
          ['Verbo', '[[nettoyer → nettoyage|limpar → limpeza]]'],
          ['Adjetivo', '[[disponible → disponibilité|disponível → disponibilidade]]'],
          ['Adjetivo', '[[absent → absence|ausente → ausência]]'],
          ['Adjetivo', '[[patient → patience|paciente → paciência]]'],
          ['Adjetivo', '[[beau → beauté|belo → beleza]]']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Atenção ao gênero: quando uma palavra se transforma em substantivo, ela passa a ter gênero próprio. ' +
          'Não deduza automaticamente se é masculino ou feminino pelo gênero da palavra original ou apenas pelo sufixo. ' +
          'Memorize o substantivo acompanhado de seu artigo, por exemplo: [[la décision|a decisão]], [[le développement|o desenvolvimento]], [[la fermeture|o fechamento]] ' +
          'e [[la disponibilité|a disponibilidade]].'
      },
      { type: 'heading', text: '3. Transformar frases verbais em grupos nominais' },
      {
        type: 'paragraph',
        text:
          'A nominalização também permite transformar uma frase organizada em torno de um verbo em um grupo nominal. ' +
          'Nessa transformação, o verbo principal dá lugar a um substantivo, e os outros elementos são reorganizados para manter a informação. ' +
          'O agente da ação e seus complementos podem aparecer ligados ao substantivo por preposições como [[de|de]], [[à|a / para]] e [[par|por]], conforme a construção.'
      },
      {
        type: 'list',
        items: [
            '[[La municipalité a fermé le centre communautaire.|A prefeitura fechou o centro comunitário.]] ' +
            '→ [[La fermeture du centre communautaire par la municipalité.|O fechamento do centro comunitário pela prefeitura.]]',
            '[[Les résidents participent à la consultation.|Os moradores participam da consulta.]] ' +
            '→ [[La participation des résidents à la consultation.|A participação dos moradores na consulta.]]',
            '[[Les loyers augmentent dans ce quartier.|Os aluguéis estão aumentando neste bairro.]] ' +
            '→ [[L’augmentation des loyers dans ce quartier.|O aumento dos aluguéis neste bairro.]]',
            '[[Le service est disponible pour les nouveaux résidents.|O serviço está disponível para os novos moradores.]] ' +
            '→ [[La disponibilité du service pour les nouveaux résidents.|A disponibilidade do serviço para os novos moradores.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Observe que a nominalização pode retirar informações explícitas sobre tempo e pessoa. ' +
          'Por exemplo, [[Les résidents participent à la consultation.|Os moradores participam da consulta.]] ' +
          'apresenta uma ação no presente, enquanto [[La participation des résidents à la consultation.|A participação dos moradores na consulta.]] ' +
          'apresenta o acontecimento como um conceito, sem indicar diretamente quando ocorreu.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não transforme toda frase em substantivo',
        text:
          'Um erro comum é acreditar que a nominalização sempre deixa o francês mais formal ou melhor escrito. ' +
          'A Académie française observa que ela corresponde a uma moda, deixa a frase muito mais pesada e recomenda preferir uma oração construída em torno de um verbo, como [[X a redressé cette entreprise|X reergueu esta empresa]] em vez de [[le redressement de cette entreprise par X|a recuperação desta empresa por X]]. ' +
          'Também não invente substantivos aplicando mecanicamente um sufixo: [[décider → décision|decidir → decisão]] ' +
          'é uma formação que precisa ser aprendida. Outro cuidado é não esquecer o artigo e o gênero do substantivo formado. ' +
          'Prefira uma frase verbal quando ela transmitir a informação de maneira mais clara e direta.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na compreensão escrita, reconheça substantivos derivados de verbos e adjetivos para identificar rapidamente o assunto principal de uma notícia, um relatório ou um texto administrativo. ' +
          'Na produção escrita, utilize a nominalização para resumir acontecimentos, apresentar problemas e organizar argumentos sem repetir estruturas verbais. ' +
          'Pratique especialmente transformações como [[augmenter → augmentation|aumentar → aumento]], [[participer → participation|participar → participação]], [[fermer → fermeture|fechar → fechamento]] ' +
          'e [[disponible → disponibilité|disponível → disponibilidade]]. Verifique sempre o gênero do substantivo e a relação entre seus complementos.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O Dictionnaire de l’Académie française confirma a definição de nominalização, a transformação de uma oração em grupo nominal (“os deputados adotam este texto” → “a adoção deste texto pelos deputados”) e a recomendação de preferir uma oração com verbo. ' +
          'O Usito confirma, nas etimologias, [[organisation|organização]] (de [[organiser|organizar]] e -ation), [[fermeture|fechamento]] (de [[fermer|fechar]] e -ure), [[nettoyage|limpeza]] (de [[nettoyer|limpar]] e -age) e [[disponibilité|disponibilidade]] (de [[disponible|disponível]] e -ité), e confirma o gênero: [[la décision|a decisão]], [[l’organisation|a organização]], [[la fermeture|o fechamento]], [[la disponibilité|a disponibilidade]], [[l’absence|a ausência]], [[la participation|a participação]] e [[l’augmentation|o aumento]] são femininos, e [[le nettoyage|a limpeza]] é masculino. Atenção: para [[décision|decisão]], [[absence|ausência]], [[participation|participação]] e [[augmentation|aumento]], o Usito indica origem diretamente do latim, e não a formação por sufixo a partir de [[décider|decidir]], [[absent|ausente]], [[participer|participar]] ou [[augmenter|aumentar]]; a relação entre verbo e nome existe, mas a tabela a apresenta como transformação regular. ' +
          'Não têm fonte: a lista geral de sufixos (-tion, -ment, -age, -ure, -ité, -ence, -té), a perda das marcas de tempo e pessoa, os exemplos e a dica para a prova. ' +
          'O guia "La grammaire du français : terminologie grammaticale" (Ministério da Educação francês, Eduscol) foi lido, mas não trata de nominalização nem lista os sufixos -tion, -ment, -age e -ité, entre outros. Ele só confirma o princípio geral de que os sufixos podem mudar a classe gramatical da base ([[président → présidentiel|presidente → presidencial]]) e que as marcas de tempo, modo e pessoa são morfemas flexionais, não sufixos. Por isso não sustenta a tabela de formação. ' +
          'Esses pontos são material didático, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'La nominalisation : transformer des verbes et des adjectifs en noms',
    summary:
      'Apprenez à transformer des verbes et des adjectifs en noms afin de construire des phrases plus concises et de développer une écriture plus élaborée en français. ' +
      'Découvrez les principaux procédés de formation, les changements dans la structure de la phrase et l’utilisation de la nominalisation dans les textes formels, les rapports et les argumentations.',
    blocks: [
      { type: 'heading', text: '1. Qu’est-ce que la nominalisation ?' },
      {
        type: 'paragraph',
        text:
          'La nominalisation consiste à transformer un verbe, un adjectif ou même une phrase entière en un nom ou en un groupe nominal. ' +
          'Au lieu de présenter directement une action ou une caractéristique, on exprime cette information au moyen d’un nom. ' +
          'Ce procédé permet de condenser l’information et se révèle particulièrement utile dans les textes administratifs, les rapports, les articles de presse et les argumentations plus élaborées.'
      },
      { type: 'heading', text: '2. Formation des noms' },
      {
        type: 'paragraph',
        text:
          'De nombreux noms sont formés par l’ajout de suffixes à la base d’un verbe ou d’un adjectif. ' +
          'Parmi les terminaisons fréquentes, on trouve -tion et -ation, -ment, -age et -ure pour certains noms dérivés de verbes, ainsi que -ité, -ence et -té pour certains noms dérivés d’adjectifs. ' +
          'Cependant, ces modèles ne sont pas des formules universelles : certains mots présentent des modifications du radical ou des formations moins prévisibles.'
      },
      {
        type: 'table',
        headers: ['Base', 'Transformation'],
        rows: [
          ['Verbe', 'décider → décision'],
          ['Verbe', 'organiser → organisation'],
          ['Verbe', 'développer → développement'],
          ['Verbe', 'fermer → fermeture'],
          ['Verbe', 'nettoyer → nettoyage'],
          ['Adjectif', 'disponible → disponibilité'],
          ['Adjectif', 'absent → absence'],
          ['Adjectif', 'patient → patience'],
          ['Adjectif', 'beau → beauté']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Attention au genre : lorsqu’un mot devient un nom, il possède son propre genre grammatical. ' +
          'On ne peut pas le déduire automatiquement du genre du mot d’origine ni simplement de son suffixe. ' +
          'Mémorisez le nom avec son article, par exemple : la décision, le développement, la fermeture et la disponibilité.'
      },
      { type: 'heading', text: '3. Transformer des phrases verbales en groupes nominaux' },
      {
        type: 'paragraph',
        text:
          'La nominalisation permet également de transformer une phrase organisée autour d’un verbe en un groupe nominal. ' +
          'Dans cette transformation, le verbe principal est remplacé par un nom et les autres éléments sont réorganisés pour conserver l’information. ' +
          'L’agent de l’action et ses compléments peuvent être introduits par des prépositions comme de, à et par, selon la construction.'
      },
      {
        type: 'list',
        items: [
          'La municipalité a fermé le centre communautaire. → La fermeture du centre communautaire par la municipalité.',
          'Les résidents participent à la consultation. → La participation des résidents à la consultation.',
          'Les loyers augmentent dans ce quartier. → L’augmentation des loyers dans ce quartier.',
          'Le service est disponible pour les nouveaux résidents. → La disponibilité du service pour les nouveaux résidents.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Remarquez que la nominalisation peut supprimer des informations explicites sur le temps et la personne. ' +
          'Par exemple, « Les résidents participent à la consultation » présente une action au présent, tandis que « La participation des résidents à la consultation » présente l’événement comme un concept, sans indiquer directement le moment où il s’est produit.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne transformez pas toutes les phrases en noms',
        text:
          'Une erreur fréquente consiste à croire que la nominalisation rend toujours le français plus formel ou mieux écrit. ' +
          'L’Académie française observe qu’elle correspond à une mode, alourdit considérablement la phrase et recommande de préférer une proposition construite autour d’un verbe, comme « X a redressé cette entreprise » plutôt que « le redressement de cette entreprise par X ». ' +
          'N’inventez pas non plus des noms en appliquant mécaniquement un suffixe : par exemple, décider devient décision, une formation qu’il faut apprendre. ' +
          'Enfin, n’oubliez pas l’article et le genre du nom obtenu. Préférez une phrase verbale lorsqu’elle transmet l’information de manière plus claire et plus directe.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'En compréhension écrite, reconnaissez les noms dérivés de verbes et d’adjectifs afin d’identifier rapidement le sujet principal d’un article, d’un rapport ou d’un texte administratif. ' +
          'En production écrite, utilisez la nominalisation pour résumer des événements, présenter des problèmes et organiser vos arguments sans répéter les mêmes structures verbales. ' +
          'Entraînez-vous particulièrement avec des transformations comme augmenter → augmentation, participer → participation, fermer → fermeture et disponible → disponibilité. ' +
          'Vérifiez toujours le genre du nom et la relation entre ses compléments.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Le Dictionnaire de l’Académie française confirme la définition de la nominalisation, la transformation d’une proposition en groupe nominal (« les députés adoptent ce texte » → « l’adoption de ce texte par les députés ») et la recommandation de préférer une proposition construite autour d’un verbe. ' +
          'Usito confirme, dans les étymologies, organisation (de organiser et -ation), fermeture (de fermer et -ure), nettoyage (de nettoyer et -age) et disponibilité (de disponible et -ité), et confirme le genre : la décision, l’organisation, la fermeture, la disponibilité, l’absence, la participation et l’augmentation sont féminins, et le nettoyage est masculin. Précision : pour décision, absence, participation et augmentation, Usito indique une origine directement latine, et non une formation par suffixe à partir de décider, absent, participer ou augmenter ; le lien entre le verbe et le nom existe, mais le tableau le présente comme une transformation régulière. ' +
          'Ne sont pas sourcés : la liste générale des suffixes (-tion, -ment, -age, -ure, -ité, -ence, -té), la perte des marques de temps et de personne, les exemples et le conseil pour l’examen. ' +
          'Le guide « La grammaire du français : terminologie grammaticale » (ministère français de l’Éducation nationale, Eduscol) a été lu, mais il ne traite pas de la nominalisation et ne liste pas les suffixes -tion, -ment, -age, -ité, etc. Il confirme seulement le principe général selon lequel les suffixes peuvent changer la classe grammaticale de la base (président → présidentiel) et que les marques de temps, de mode et de personne sont des morphèmes flexionnels, non des suffixes. Il ne soutient donc pas le tableau de formation. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'organisation — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/organisation'
    },
    {
      title: 'fermeture — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/fermeture'
    },
    {
      title: 'nettoyage — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/nettoyage'
    },
    {
      title: 'disponibilité — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/disponibilit%C3%A9'
    },
    {
      title: 'décision — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/d%C3%A9cision'
    },
    {
      title: 'absence — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/absence'
    },
    {
      title: 'participation — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/participation'
    },
    {
      title: 'augmentation — Usito, Université de Sherbrooke',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/augmentation'
    },
    {
      title: 'Nominalisation — Dictionnaire de l’Académie française, 9e édition',
      url: 'https://www.dictionnaire-academie.fr/article/A9N0561'
    }
  ]
}

export default content
