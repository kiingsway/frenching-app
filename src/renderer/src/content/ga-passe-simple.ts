import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-passe-simple',

  pt: {
    title: 'Passé simple (passado simples): reconhecimento na leitura',
    summary:
      'Aprenda a reconhecer o passado simples francês em textos narrativos, históricos, literários e jornalísticos, sem precisar utilizá-lo em conversas cotidianas. ' +
      'Identifique suas terminações mais frequentes, os principais verbos irregulares e a diferença entre esse tempo, o imperfeito e o passado composto.',
    blocks: [
      { type: 'heading', text: 'O que é e quando aparece' },
      {
        type: 'paragraph',
        text:
          'O [[passé simple|passado simples]] é um tempo do [[indicatif|indicativo]] utilizado principalmente na língua escrita. ' +
          'Ele apresenta acontecimentos passados como ações concluídas, sucessivas ou delimitadas, sendo especialmente frequente em narrativas literárias, textos históricos e determinados textos jornalísticos. ' +
          'Na comunicação oral contemporânea, o [[passé composé|passado composto]] geralmente ocupa seu lugar. ' +
          'O OQLF informa que o [[passé simple|passado simples]] está praticamente ausente da língua falada e, na escrita, aparece sobretudo na terceira pessoa, em obras literárias e também em textos científicos e jornalísticos. Na primeira e na segunda pessoa, prefere-se o [[passé composé|passado composto]].'
      },
      { type: 'heading', text: 'Como reconhecer suas formas' },
      {
        type: 'table',
        headers: ['Tipo de verbo', 'Formas características', 'Observação'],
        rows: [
            [
              'Modelo de parler',
              '[[je parlai, il parla, ils parlèrent, nous parlâmes|eu falei, ele falou, eles falaram, nós falamos]]',
              'Verbos regulares terminados em -er.'
            ],
            [
              'Modelo de finir',
              '[[je finis, il finit, ils finirent, nous finîmes|eu terminei, ele terminou, eles terminaram, nós terminamos]]',
              'Verbos regulares terminados em -ir, como finir.'
            ],
            [
              'Verbos irregulares',
              '[[il fut, il eut, il fit, il prit, il put|ele foi, ele teve, ele fez, ele pegou, ele pôde]]',
              'Formas frequentes de verbos irregulares.'
            ],
            [
              'Verbos venir e tenir',
              '[[il vint, ils vinrent, il tint, ils tinrent|ele veio, eles vieram, ele segurou, eles seguraram]]',
              'Formas características desses dois verbos e seus derivados.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Algumas terminações ajudam bastante no reconhecimento: -a e -èrent nos verbos em -er, -it e -irent nos verbos do modelo finir ' +
          'e -ut e -urent em muitos verbos irregulares. ' +
          'As formas da primeira e da segunda pessoa do plural também apresentam circunflexo, como [[nous parlâmes|nós falamos]] e [[vous finîtes|vocês terminaram]]. ' +
          'Entretanto, não basta procurar uma terminação: muitos verbos possuem radicais irregulares que precisam ser reconhecidos.'
      },
      {
        type: 'paragraph',
        text:
          'Na narrativa, o [[passé simple|passado simples]] costuma apresentar os acontecimentos principais, enquanto o [[imparfait|imperfeito]] ' +
          'descreve o cenário, as circunstâncias e as situações em andamento. ' +
          'Compare: [[La bibliothèque était silencieuse lorsque la directrice ouvrit les portes.|A biblioteca estava silenciosa quando a diretora abriu as portas.]] ' +
          'A primeira forma descreve o ambiente; a segunda apresenta o acontecimento que faz a narrativa avançar. O [[passé composé|passado composto]] ' +
          'tem significado próximo, mas é normalmente preferido na comunicação cotidiana.'
      },
      { type: 'heading', text: 'Exemplo de narrativa' },
      {
        type: 'paragraph',
        text:
          '[[Ce matin-là, la bibliothèque était presque vide.|Naquela manhã, a biblioteca estava quase vazia.]] ' +
          '[[À neuf heures, la directrice ouvrit les portes et alluma les lumières.|Às nove horas, a diretora abriu as portas e acendeu as luzes.]] ' +
          '[[Peu après, trois résidents entrèrent et déposèrent leurs livres sur le comptoir.|Pouco depois, três moradores entraram e colocaram seus livros no balcão.]] ' +
          '[[La directrice leur annonça que la salle de lecture fermerait à midi pour permettre les réparations.|A diretora anunciou a eles que a sala de leitura fecharia ao meio-dia para permitir os reparos.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda reconhecimento com uso cotidiano',
        text:
          'Um erro possível é tentar utilizar o [[passé simple|passado simples]] sempre que o português apresenta um verbo no passado. ' +
          'Na comunicação cotidiana, prefira o [[passé composé|passado composto]]. Outro cuidado: algumas formas são iguais às do presente do indicativo. ' +
          'Por exemplo, [[il finit|ele terminou]] pode significar também [[il finit|ele termina]], dependendo do contexto. ' +
          'Observe os marcadores temporais, a sequência dos acontecimentos e o restante da narrativa antes de identificar o tempo verbal.'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Priorize a compreensão do texto',
        text:
          'No TCF Canada, a compreensão escrita tem 39 questões de múltipla escolha em 60 minutos. ' +
          'No TEF Canada, a compreensão escrita também é uma prova obrigatória. ' +
          'Ao encontrar o [[passé simple|passado simples]], procure identificar quem realizou a ação, o que aconteceu e em qual sequência os acontecimentos ocorreram. ' +
          'Não interrompa a leitura para tentar conjugar todos os verbos: reconhecer o sentido no contexto é mais importante do que memorizar todas as formas.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam as terminações do [[passé simple|passado simples]] (verbos em -er, em -ir e irregulares, e as formas especiais de [[venir|vir]] e [[tenir|segurar]]), o uso para ações concluídas, sucessivas ou delimitadas, a combinação com o [[imparfait|imperfeito]] nas narrativas, a proximidade com o [[passé composé|passado composto]], e o uso sobretudo escrito e na terceira pessoa. ' +
          'O FEI e o Le français des affaires confirmam as provas de compreensão escrita. ' +
          'Não têm fonte: o exemplo de narrativa, a ambiguidade de [[il finit|ele terminou]] com o presente como exemplo e a dica de leitura. ' +
          'Estudar as formas para reconhecê-las é conselho de preparação, não exigência das provas, e as páginas consultadas não indicam que o [[passé simple|passado simples]] apareça em algum texto ou questão.'
      }
    ]
  },

  fr: {
    title: 'Le passé simple : le reconnaître en lecture',
    summary:
      'Apprenez à reconnaître le passé simple dans les textes narratifs, historiques, littéraires et journalistiques, sans avoir besoin de l’utiliser dans les conversations quotidiennes. ' +
      'Identifiez ses terminaisons les plus fréquentes, les principaux verbes irréguliers et les différences entre ce temps, l’imparfait et le passé composé.',
    blocks: [
      { type: 'heading', text: 'Définition et emplois' },
      {
        type: 'paragraph',
        text:
          'Le passé simple est un temps de l’indicatif principalement utilisé à l’écrit. ' +
          'Il présente des événements passés comme des actions accomplies, successives ou délimitées dans le temps. ' +
          'Il est particulièrement fréquent dans les récits littéraires, les textes historiques et certains textes journalistiques. ' +
          'Dans la communication orale contemporaine, le passé composé occupe généralement sa place. ' +
          'L’OQLF indique que le passé simple est pratiquement absent de la langue parlée et que, à l’écrit, il apparaît surtout à la troisième personne, dans les ouvrages littéraires mais aussi dans les textes scientifiques et journalistiques. Aux première et deuxième personnes, on préfère le passé composé.'
      },
      { type: 'heading', text: 'Comment reconnaître ses formes' },
      {
        type: 'table',
        headers: ['Type de verbe', 'Formes caractéristiques', 'Observation'],
        rows: [
            [
              'Modèle de parler',
              'je parlai, il parla, ils parlèrent, nous parlâmes',
              'Verbes réguliers terminés en -er.'
            ],
            [
              'Modèle de finir',
              'je finis, il finit, ils finirent, nous finîmes',
              'Verbes réguliers terminés en -ir, comme finir.'
            ],
            [
              'Verbes irréguliers',
              'il fut, il eut, il fit, il prit, il put',
              'Formes fréquentes de verbes irréguliers.'
            ],
            [
              'Verbes venir et tenir',
              'il vint, ils vinrent, il tint, ils tinrent',
              'Formes caractéristiques de ces deux verbes et de leurs dérivés.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Certaines terminaisons facilitent la reconnaissance : -a et -èrent pour les formes fréquentes des verbes en -er, -it et -irent pour les verbes du modèle finir, et -ut et -urent pour de nombreux verbes irréguliers. ' +
          'Les formes de la première et de la deuxième personne du pluriel comportent également un accent circonflexe, comme nous parlâmes et vous finîtes. ' +
          'Cependant, il ne suffit pas de repérer une terminaison : de nombreux verbes possèdent des radicaux irréguliers qu’il faut apprendre à reconnaître.'
      },
      {
        type: 'paragraph',
        text:
          'Dans un récit, le passé simple présente généralement les événements principaux, tandis que l’imparfait décrit le décor, les circonstances et les situations en cours. ' +
          'Comparez : La bibliothèque était silencieuse lorsque la directrice ouvrit les portes. ' +
          'La première forme décrit l’environnement ; la deuxième présente l’événement qui fait avancer le récit. ' +
          'Le passé composé a une valeur proche, mais il est normalement privilégié dans la communication quotidienne.'
      },
      { type: 'heading', text: 'Exemple de récit' },
      {
        type: 'paragraph',
        text:
          'Ce matin-là, la bibliothèque était presque vide. À neuf heures, la directrice ouvrit les portes et alluma les lumières. ' +
          'Peu après, trois résidents entrèrent et déposèrent leurs livres sur le comptoir. ' +
          'La directrice leur annonça que la salle de lecture fermerait à midi pour permettre les réparations.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas reconnaissance et usage quotidien',
        text:
          'Une erreur possible consiste à vouloir utiliser le passé simple chaque fois que le portugais présente un verbe au passé. ' +
          'Dans la communication quotidienne, préférez le passé composé. Autre précaution : certaines formes sont identiques à celles du présent de l’indicatif. ' +
          'Par exemple, il finit peut signifier aussi bien qu’il a terminé que le fait qu’il termine, selon le contexte. ' +
          'Observez les marqueurs temporels, l’enchaînement des événements et le reste du récit avant d’identifier le temps verbal.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Privilégiez la compréhension du texte',
        text:
          'Au TCF Canada, la compréhension écrite comprend 39 questions à choix multiple en 60 minutes. ' +
          'Au TEF Canada, la compréhension écrite fait aussi partie des épreuves obligatoires. ' +
          'Lorsque vous rencontrez le passé simple, cherchez à identifier qui a réalisé l’action, ce qui s’est passé et dans quel ordre les événements se sont déroulés. ' +
          'N’interrompez pas votre lecture pour essayer de conjuguer tous les verbes : reconnaître leur sens dans le contexte est plus important que mémoriser toutes les formes.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment les terminaisons du passé simple (verbes en -er, en -ir et irréguliers, et les formes particulières de venir et de tenir), l’emploi pour des actions accomplies, successives ou délimitées, la combinaison avec l’imparfait dans les récits, la proximité avec le passé composé, et l’usage surtout écrit et à la troisième personne. ' +
          'Le FEI et Le français des affaires confirment les épreuves de compréhension écrite. ' +
          'Ne sont pas sourcés : l’exemple de récit, l’ambiguïté de il finit avec le présent comme exemple et le conseil de lecture. ' +
          'Étudier les formes pour les reconnaître est un conseil de préparation, et non une exigence des examens, et les pages consultées n’indiquent pas que le passé simple apparaîtra dans un texte ou une question.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Formes du passé simple — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24207/la-grammaire/le-verbe/conjugaison/formes-du-passe-simple'
    },
    {
      title: 'Généralités sur le passé simple — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24210/la-grammaire/le-verbe/temps-grammaticaux/passe/generalites-sur-le-passe-simple'
    },
    {
      title: 'Déclin du passé simple et ses emplois actuels — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24209/la-grammaire/le-verbe/temps-grammaticaux/passe/declin-du-passe-simple-et-ses-emplois-actuels'
    },
    {
      title: 'TCF Canada — Présentation des épreuves — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
