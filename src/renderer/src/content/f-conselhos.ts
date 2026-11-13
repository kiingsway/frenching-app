import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-conselhos',

  pt: {
    title: 'Dar conselhos: recomendações, sugestões e advertências',
    summary:
      'Aprenda a aconselhar alguém, recomendar uma atitude e sugerir alternativas em francês, utilizando diferentes níveis de formalidade. ' +
      'Conheça construções com o condicional, o imperativo, o infinitivo e o subjuntivo para expressar conselhos de maneira natural, educada e adequada à situação.',
    blocks: [
      { type: 'heading', text: '1. Como dar conselhos em francês' },
      {
        type: 'paragraph',
        text:
          'Existem várias maneiras de aconselhar alguém em francês. ' +
          'A escolha depende do grau de formalidade, da relação com o interlocutor e da intensidade da recomendação. ' +
          'Você pode apresentar uma sugestão de maneira delicada, fazer uma recomendação direta ou expressar uma necessidade. ' +
          'Em contextos profissionais, prefira construções mais educadas; entre amigos, expressões informais são perfeitamente naturais.'
      },
      {
        type: 'table',
        headers: ['Construção', 'Significado', 'Exemplo'],
        rows: [
            [
              '[[Tu devrais + infinitif|Você deveria + infinitivo]]',
              'Conselho moderado e educado.',
              '[[Tu devrais te reposer.|Você deveria descansar.]]'
            ],
            [
              '[[Tu pourrais + infinitif|Você poderia + infinitivo]]',
              'Sugestão de uma possibilidade.',
              '[[Tu pourrais prendre le métro.|Você poderia pegar o metrô.]]'
            ],
            [
              '[[Je te conseille de + infinitif|Aconselho você a + infinitivo]]',
              'Recomendação direta.',
              '[[Je te conseille de pratiquer tous les jours.|Aconselho você a praticar todos os dias.]]'
            ],
            [
              '[[Je vous recommande de + infinitif|Recomendo que você + infinitivo]]',
              'Recomendação educada ou profissional.',
              '[[Je vous recommande de prendre rendez-vous.|Recomendo que você marque um horário.]]'
            ],
            [
              '[[Il vaut mieux + infinitif|É melhor + infinitivo]]',
              'Indicar a alternativa mais adequada.',
              '[[Il vaut mieux partir tôt.|É melhor sair cedo.]]'
            ],
            [
              '[[Il faut + infinitif|É necessário + infinitivo]]',
              'Expressar uma necessidade ou orientação geral.',
              '[[Il faut vérifier les documents.|É necessário verificar os documentos.]]'
            ],
            [
              '[[À ta place, je + conditionnel|No seu lugar, eu + condicional]]',
              'Dar um conselho pessoal e menos impositivo.',
              '[[À ta place, je chercherais un autre logement.|No seu lugar, procuraria outra moradia.]]'
            ]
        ]
      },
      { type: 'heading', text: '2. Recomendar, sugerir e advertir' },
      {
        type: 'paragraph',
        text:
          'Os verbos [[conseiller|aconselhar]], [[recommander|recomendar]], [[suggérer|sugerir]] e [[déconseiller|desaconselhar]] ' +
          'permitem formular recomendações mais específicas. Quando você aconselha alguém a realizar uma ação, uma estrutura frequente é verbo + pessoa + de + infinitivo. ' +
          'Exemplo: [[Je te conseille de contacter le centre communautaire.|Aconselho você a entrar em contato com o centro comunitário.]] ' +
          'Para expressar uma advertência, utilize [[Tu ferais mieux de...|Seria melhor você...]] ou [[Je te déconseille de...|Desaconselho você a...]]'
      },
      {
        type: 'paragraph',
        text:
          'Quando o conselho envolve duas pessoas realizando ações diferentes, pode ser necessário utilizar o subjuntivo. ' +
          'Compare [[Je te conseille de consulter un médecin.|Aconselho você a consultar um médico.]] ' +
          'com [[Je te conseille que tu consultes un médecin.|Aconselho que você consulte um médico.]] ' +
          'A primeira estrutura, com infinitivo, é a forma mais direta e natural nessa situação. ' +
          'Também podemos utilizar [[Il vaut mieux que tu consultes un médecin.|É melhor que você consulte um médico.]]'
      },
      {
        type: 'paragraph',
        text:
          'O imperativo também pode transmitir conselhos, especialmente em conversas informais ou instruções práticas. ' +
          'Exemplos: [[Prends le temps de réfléchir.|Reserve um tempo para pensar.]], [[Fais attention à tes dépenses.|Preste atenção aos seus gastos.]] ' +
          'e [[N’oubliez pas de vérifier votre dossier.|Não se esqueça de verificar seu processo.]] ' +
          'Para diminuir a sensação de ordem, prefira o condicional ou uma sugestão introduzida por [[Tu pourrais...|Você poderia...]]'
      },
      { type: 'heading', text: '3. Exemplos em contexto' },
      {
        type: 'paragraph',
        text:
          'Situação: um amigo acabou de chegar a Montreal e está procurando emprego, mas ainda não conhece bem o mercado de trabalho local. ' +
          'Você deseja ajudá-lo com algumas recomendações.'
      },
      {
        type: 'list',
        items: [
          '[[À ta place, je préparerais un CV adapté au marché du travail québécois.|No seu lugar, prepararia um currículo adaptado ao mercado de trabalho quebequense.]]',
          '[[Tu devrais consulter les offres d’emploi régulièrement.|Você deveria consultar as ofertas de emprego regularmente.]]',
          '[[Je te conseille également de développer ton réseau professionnel.|Também aconselho você a desenvolver sua rede profissional.]]',
          '[[Tu pourrais participer à des activités de réseautage.|Você poderia participar de atividades de networking.]]',
          '[[Il vaut mieux pratiquer le français chaque jour.|É melhor praticar francês todos os dias.]]',
          '[[Évite de refuser une occasion avant de bien connaître les conditions.|Evite recusar uma oportunidade antes de conhecer bem as condições.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não confunda o infinitivo com o subjuntivo',
        text:
          'Um erro comum de brasileiros é traduzir literalmente estruturas como aconselho você que faça e utilizar o infinitivo depois de [[conseiller à quelqu’un de|aconselhar alguém a]]. ' +
          'A construção mais natural é [[Je te conseille de vérifier les informations.|Aconselho você a verificar as informações.]] ' +
          'Quando o conselho é formulado com [[Il vaut mieux que|É melhor que]], utilize o subjuntivo: [[Il vaut mieux que tu vérifies les informations.|É melhor que você verifique as informações.]] ' +
          'Outro cuidado importante é não usar o imperativo indiscriminadamente. [[Vérifiez votre dossier.|Verifique seu processo.]] ' +
          'é uma instrução direta; [[Vous devriez vérifier votre dossier.|Você deveria verificar seu processo.]] apresenta uma recomendação mais delicada.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na expressão oral do TEF Canada, a seção B exige apresentar um documento e argumentar para convencer seu interlocutor. ' +
          'No TCF Canada, a terceira tarefa da expressão oral exige apresentar espontaneamente um ponto de vista e desenvolvê-lo de maneira convincente. ' +
          'Treine situações em que seja necessário recomendar uma solução, explicar por que ela é adequada e responder às objeções de outra pessoa. ' +
          'Utilize uma sequência natural: apresente o conselho, justifique sua recomendação, dê um exemplo e reconheça possíveis limitações. ' +
          'Varie expressões como [[Tu devrais...|Você deveria...]], [[Je te conseille de...|Aconselho você a...]] e [[À votre place, je...|No seu lugar, eu...]]'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O TV5MONDE confirma que, para aconselhar ou desaconselhar, se usam o verbo [[falloir|ser necessário]] ([[il faut|é necessário]], [[il ne faut pas|não se deve]]), verbos como [[conseiller|aconselhar]], [[recommander|recomendar]], [[suggérer|sugerir]] e [[déconseiller|desaconselhar]] e estruturas fixas do tipo nome + [[c’est de|é]] + infinitivo, e que o imperativo serve para dar uma instrução, um conselho ou uma ordem, com [[tu|tu]] para quem se conhece bem e [[vous|você / vocês]] para quem não se conhece bem ou para várias pessoas. ' +
          'Não têm fonte: [[Tu devrais|Você deveria]], [[Tu pourrais|Você poderia]], [[À ta place, je|No seu lugar, eu]], [[Tu ferais mieux de|Seria melhor você]] e [[Il vaut mieux|É melhor]] (com infinitivo e com subjuntivo), a comparação entre infinitivo e subjuntivo depois de [[conseiller|aconselhar]], a suavização do imperativo pelo condicional, os diálogos e a sequência sugerida na dica. ' +
          'O manual do examinador do TCF confirma a tarefa 3 oral (4 minutos e 30, tomar posição de forma convincente, com perguntas do examinador), e o PDF de exemplos do TEF confirma a seção B (apresentar um documento e convencer um amigo). ' +
          'Não existe exigência oficial de utilizar essas expressões específicas ou seguir exatamente a sequência sugerida. ' +
          'Essas recomendações são conselhos de preparação, não regras oficiais dos exames.'
      }
    ]
  },

  fr: {
    title: 'Donner des conseils : recommandations, suggestions et mises en garde',
    summary:
      'Apprenez à conseiller quelqu’un, à recommander une action et à proposer des solutions en français, en utilisant différents niveaux de formalité. ' +
      'Découvrez les constructions avec le conditionnel, l’impératif, l’infinitif et le subjonctif pour exprimer des conseils de manière naturelle, polie et adaptée à la situation.',
    blocks: [
      { type: 'heading', text: '1. Comment donner des conseils en français' },
      {
        type: 'paragraph',
        text:
          'Il existe plusieurs façons de donner des conseils en français. ' +
          'Le choix dépend du degré de formalité, de la relation avec l’interlocuteur et de l’intensité de la recommandation. ' +
          'Vous pouvez présenter une suggestion de manière délicate, faire une recommandation directe ou exprimer une nécessité. ' +
          'Dans les contextes professionnels, privilégiez les formulations plus polies ; entre amis, les expressions familières sont tout à fait naturelles.'
      },
      {
        type: 'table',
        headers: ['Construction', 'Signification', 'Exemple'],
        rows: [
            [
              'Tu devrais + infinitif',
              'Conseil modéré et poli.',
              'Tu devrais te reposer.'
            ],
            [
              'Tu pourrais + infinitif',
              'Suggestion d’une possibilité.',
              'Tu pourrais prendre le métro.'
            ],
            [
              'Je te conseille de + infinitif',
              'Recommandation directe.',
              'Je te conseille de pratiquer tous les jours.'
            ],
            [
              'Je vous recommande de + infinitif',
              'Recommandation polie ou professionnelle.',
              'Je vous recommande de prendre rendez-vous.'
            ],
            [
              'Il vaut mieux + infinitif',
              'Indiquer la solution la plus appropriée.',
              'Il vaut mieux partir tôt.'
            ],
            [
              'Il faut + infinitif',
              'Exprimer une nécessité ou une orientation générale.',
              'Il faut vérifier les documents.'
            ],
            [
              'À ta place, je + conditionnel',
              'Donner un conseil personnel et moins directif.',
              'À ta place, je chercherais un autre logement.'
            ]
        ]
      },
      { type: 'heading', text: '2. Recommander, suggérer et mettre en garde' },
      {
        type: 'paragraph',
        text:
          'Les verbes conseiller, recommander, suggérer et déconseiller permettent de formuler des recommandations plus précises. ' +
          'Lorsqu’on conseille à quelqu’un de réaliser une action, une structure fréquente est verbe + personne + de + infinitif. ' +
          'Exemple : « Je te conseille de contacter le centre communautaire ». Pour exprimer une mise en garde, utilisez « Tu ferais mieux de… ' +
          '» ou « Je te déconseille de… ».'
      },
      {
        type: 'paragraph',
        text:
          'Lorsque le conseil concerne deux personnes qui réalisent des actions différentes, il peut être nécessaire d’utiliser le subjonctif. ' +
          'Comparez « Je te conseille de consulter un médecin » et « Je te conseille que tu consultes un médecin ». ' +
          'La première structure, avec l’infinitif, est la forme la plus directe et naturelle dans cette situation. ' +
          'On peut également utiliser « Il vaut mieux que tu consultes un médecin ».'
      },
      {
        type: 'paragraph',
        text:
          'L’impératif permet également de donner des conseils, particulièrement dans les conversations informelles ou les instructions pratiques. ' +
          'Exemples : « Prends le temps de réfléchir », « Fais attention à tes dépenses » et « N’oubliez pas de vérifier votre dossier ». ' +
          'Pour atténuer le caractère directif, privilégiez le conditionnel ou une suggestion introduite par « Tu pourrais… ».'
      },
      { type: 'heading', text: '3. Exemples en contexte' },
      {
        type: 'paragraph',
        text:
          'Situation : un ami vient d’arriver à Montréal et cherche un emploi, mais il ne connaît pas encore bien le marché du travail local. ' +
          'Vous souhaitez l’aider en lui donnant quelques recommandations.'
      },
      {
        type: 'list',
        items: [
          'À ta place, je préparerais un CV adapté au marché du travail québécois.',
          'Tu devrais consulter les offres d’emploi régulièrement.',
          'Je te conseille également de développer ton réseau professionnel.',
          'Tu pourrais participer à des activités de réseautage.',
          'Il vaut mieux pratiquer le français chaque jour.',
          'Évite de refuser une occasion avant de bien connaître les conditions.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne confondez pas l’infinitif et le subjonctif',
        text:
          'Une erreur fréquente chez les lusophones consiste à traduire littéralement des structures comme aconselho você que faça et à employer l’infinitif incorrectement après conseiller à quelqu’un de. ' +
          'La construction la plus naturelle est « Je te conseille de vérifier les informations ». ' +
          'Lorsque le conseil est formulé avec « Il vaut mieux que », utilisez le subjonctif : « Il vaut mieux que tu vérifies les informations ». ' +
          'Une autre précaution importante consiste à ne pas employer l’impératif dans toutes les situations. ' +
          '« Vérifiez votre dossier » est une instruction directe, tandis que « Vous devriez vérifier votre dossier » présente une recommandation plus délicate.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans l’expression orale du TEF Canada, la section B consiste à présenter un document et à argumenter pour convaincre votre interlocuteur. ' +
          'Au TCF Canada, la troisième tâche de l’expression orale consiste à présenter spontanément un point de vue et à le développer de manière convaincante. ' +
          'Entraînez-vous à répondre à des situations où vous devez recommander une solution, expliquer pourquoi elle est appropriée et répondre aux objections d’une autre personne. ' +
          'Suivez une démarche naturelle : présentez votre conseil, justifiez votre recommandation, donnez un exemple et reconnaissez les limites éventuelles. ' +
          'Variez les expressions comme « Tu devrais… », « Je te conseille de… » et « À votre place, je… ».'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'TV5MONDE confirme que, pour conseiller ou déconseiller, on emploie le verbe falloir (il faut, il ne faut pas), des verbes comme conseiller, recommander, suggérer et déconseiller et des structures figées du type nom + c’est de + infinitif, et que l’impératif sert à donner une instruction, un conseil ou un ordre, avec tu pour une personne qu’on connaît bien et vous pour une personne qu’on ne connaît pas bien ou pour plusieurs personnes. ' +
          'Ne sont pas sourcés : Tu devrais, Tu pourrais, À ta place, je, Tu ferais mieux de et Il vaut mieux (avec l’infinitif et avec le subjonctif), la comparaison entre infinitif et subjonctif après conseiller, l’adoucissement de l’impératif par le conditionnel, les dialogues et l’ordre suggéré dans le conseil. ' +
          'Le manuel de l’examinateur du TCF confirme la tâche 3 orale (4 minutes 30, prendre position de façon convaincante, avec des questions de l’examinateur), et le PDF d’exemples du TEF confirme la section B (présenter un document et convaincre un(e) ami(e)). ' +
          'Aucune exigence officielle n’impose l’utilisation de ces expressions précises ni le respect exact de la démarche proposée. ' +
          'Ces recommandations sont des conseils de préparation et non des règles officielles des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Manuel de l’examinateur du TCF, version Q, décembre 2025 — France Éducation international',
      url: 'https://www.france-education-international.fr/document/manuel-examinateur-tcf'
    },
    {
      title: 'Expression orale : exemples de sujets — Le français des affaires (TEF Canada)',
      url: 'https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2024/10/tef-exemples-epreuve-eo.pdf'
    },
    {
      title: 'Dar conselhos — TV5MONDE',
      url: 'https://apprendre.tv5monde.com/fr/aides/grammaire-donner-des-conseils'
    },
    {
      title: 'O imperativo — TV5MONDE',
      url: 'https://apprendre.tv5monde.com/fr/aides/grammaire-limperatif-0'
    },
    {
      title: 'TEF Canada — Apresentação das provas — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'TCF Canada — Apresentação das provas — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    }
  ]
}

export default content
