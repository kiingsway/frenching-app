import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-hipotese',

  pt: {
    title: 'Expressar hipótese, certeza e dúvida',
    summary:
      'Você vai aprender a expressar diferentes graus de certeza, apresentar possibilidades e formular hipóteses em francês. ' +
      'Também vai estudar quais estruturas exigem indicativo, subjuntivo ou condicional e como diferenciar uma possibilidade real de uma situação imaginária.',
    blocks: [
      { type: 'heading', text: 'Graus de certeza e dúvida' },
      {
        type: 'paragraph',
        text:
          'Ao expressar uma opinião ou interpretar uma situação, você pode demonstrar certeza, probabilidade ou dúvida. ' +
          'Em francês, determinadas expressões estão associadas a modos verbais específicos. O [[indicatif|indicativo]] ' +
          'apresenta informações como fatos ou possibilidades consideradas prováveis, enquanto o [[subjonctif|subjuntivo]] ' +
          'apresenta situações incertas, possíveis ou ainda não realizadas. O [[conditionnel|condicional]] ' +
          'também permite expressar uma hipótese ou apresentar uma informação com ressalvas.'
      },
      {
        type: 'table',
        headers: ['Intenção', 'Expressões e construção', 'Modo verbal'],
        rows: [
            [
              'Certeza',
              '[[Je suis sûr que...|Tenho certeza de que...]], [[Je sais que...|Sei que...]], [[Il est évident que...|É evidente que...]]',
              'Indicativo'
            ],
            [
              'Probabilidade',
              '[[Il est probable que...|É provável que...]], [[Peut-être que...|Talvez...]], [[Sans doute...|Provavelmente...]]',
              'Indicativo'
            ],
            [
              'Dúvida',
              '[[Je doute que...|Duvido que...]], [[Je ne suis pas certain que...|Não tenho certeza de que...]], [[Il est possible que...|É possível que...]]',
              'Subjuntivo'
            ],
            [
              'Possibilidade',
              '[[Il se peut que...|Pode ser que...]], [[Il est peu probable que...|É pouco provável que...]]',
              'Subjuntivo'
            ],
            [
              'Hipótese ou informação não confirmada',
              '[[Il serait possible que...|Seria possível que...]], [[Selon certaines informations, il y aurait...|Segundo algumas informações, haveria...]]',
              'Condicional, conforme a construção'
            ]
        ]
      },
      { type: 'heading', text: 'Formular hipóteses e apresentar condições' },
      {
        type: 'paragraph',
        text:
          'As frases condicionais permitem imaginar consequências que dependem de determinadas circunstâncias. ' +
          'A escolha dos tempos verbais indica se a situação é possível, hipotética ou contrária ao que realmente aconteceu.'
      },
      {
        type: 'table',
        headers: ['Estrutura', 'Utilização', 'Exemplo'],
        rows: [
            [
              '[[Si + présent → présent / futur|Se + presente → presente / futuro]]',
              'Condição considerada possível ou realista.',
              '[[Si le bus arrive à l’heure, nous prendrons le métro.|Se o ônibus chegar no horário, pegaremos o metrô.]]'
            ],
            [
              '[[Si + imparfait → conditionnel présent|Se + imperfeito → condicional presente]]',
              'Hipótese imaginária ou pouco provável no presente ou futuro.',
              '[[Si j’avais plus de temps, je voyagerais davantage.|Se eu tivesse mais tempo, viajaria mais.]]'
            ],
            [
              '[[Si + plus-que-parfait → conditionnel passé|Se + mais-que-perfeito → condicional passado]]',
              'Hipótese passada que não se realizou.',
              '[[Si nous avions réservé plus tôt, nous aurions obtenu de meilleures places.|Se tivéssemos reservado mais cedo, teríamos conseguido lugares melhores.]]'
            ]
        ]
      },
      { type: 'heading', text: 'Exemplos em situações reais' },
      {
        type: 'list',
        items: [
          '[[Je suis certain que cette solution fonctionnera.|Tenho certeza de que esta solução funcionará.]]',
          '[[Il est probable que les travaux commenceront lundi.|É provável que as obras comecem na segunda-feira.]]',
          '[[Je doute que cette proposition soit acceptée.|Duvido que esta proposta seja aceita.]]',
          '[[Il se peut que nous arrivions un peu en retard.|Pode ser que cheguemos um pouco atrasados.]]',
          '[[Selon les premières informations, le train aurait subi une panne.|Segundo as primeiras informações, o trem teria sofrido uma pane.]]',
          '[[Prends ton parapluie au cas où il pleuvrait.|Pegue seu guarda-chuva caso chova.]]',
          '[[Nous irons à la plage à condition qu’il fasse beau.|Iremos à praia desde que faça bom tempo.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Algumas expressões exigem atenção especial. [[Au cas où|Caso]] é seguido pelo condicional: [[au cas où il pleuvrait|caso chova]]. ' +
          'Já [[à condition que|desde que / com a condição de que]] exige o subjuntivo: [[à condition qu’il soit disponible|desde que ele esteja disponível]]. ' +
          'O condicional também aparece para apresentar informações não confirmadas, especialmente em notícias e relatos atribuídos a outras fontes.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda hipótese com condição real',
        text:
          'Um erro comum de brasileiros é utilizar o condicional imediatamente depois de [[si|se]] em frases condicionais. ' +
          'Não escreva [[Si j’aurais le temps, je voyagerais.|Se eu teria tempo, viajaria.]] ' +
          'A construção correta é [[Si j’avais le temps, je voyagerais.|Se eu tivesse tempo, viajaria.]] ' +
          'Atenção também à diferença entre [[Je me demande si elle viendra.|Pergunto-me se ela virá.]] e [[Si elle vient, nous partirons.|Se ela vier, partiremos.]] ' +
          'No primeiro caso, [[si|se]] ' +
          'introduz uma pergunta indireta e pode acompanhar diferentes tempos verbais, inclusive o condicional; no segundo, introduz uma condição.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na compreensão escrita e oral, observe as palavras que indicam certeza, probabilidade e dúvida para interpretar corretamente a intenção do falante. ' +
          'Na produção oral e escrita, varie suas estruturas: apresente fatos com o indicativo, expresse incertezas com o subjuntivo e formule hipóteses com o condicional. ' +
          'Pratique justificar suas opiniões e apresentar possibilidades sem afirmar como certo algo que ainda não foi confirmado. ' +
          'Uma boa argumentação também demonstra que você sabe diferenciar fatos, previsões e suposições.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O TV5MONDE confirma, para certeza, [[Je le sais, j’en suis sûr(e)|Eu sei, tenho certeza]], [[c’est évident|é evidente]] e [[c’est sûr|é certo]], para dúvida [[Je ne suis pas sûr(e)|Não tenho certeza]], [[il me semble|parece-me]] e [[j’imagine|imagino]], e o subjuntivo depois de [[Je doute que|Duvido que]] e [[Il est peu probable que|É pouco provável que]]. A OQLF confirma: o subjuntivo depois de verbos de opinião e de julgamento ([[Il est fort possible que vous soyez convoqué à nouveau.|É muito possível que você seja convocado de novo.]]), de vontade e de sentimento; o conditionnel com valor de incerteza na imprensa ([[Selon la rumeur, le président annoncerait la fusion demain.|Segundo o boato, o presidente anunciaria a fusão amanhã.]]) e de polidez; as frases com [[si|se]] (imparfait → conditionnel présent; plus-que-parfait → conditionnel passé, ou conditionnel présent para uma ação possível; condição no presente com consequência no futuro); o erro de usar o condicional depois de [[si|se]] de condição, como em [[Je viendrais si tu voudrais.|Eu viria se você quisesse. (errado)]]; e que [[si|se]] de pergunta indireta aceita o condicional ([[Je lui ai demandé s’il voudrait me remplacer.|Perguntei-lhe se ele queria me substituir.]]). ' +
          'Não têm fonte: [[Il est probable que|É provável que]] e [[Il est évident que|É evidente que]] com indicativo, [[Peut-être que|Talvez]], [[Sans doute|Provavelmente]], [[Il se peut que|Pode ser que]], [[au cas où|caso]] com o condicional, [[à condition que|desde que]] com o subjuntivo, os exemplos e a classificação da tabela. ' +
          'Entretanto, não estabelecem uma lista obrigatória dessas expressões nem confirmam que todas essas estruturas sejam cobradas em questões específicas do TEF Canada ou do TCF Canada. ' +
          'A estratégia apresentada na dica é um conselho de preparação, não uma regra oficial das provas.'
      }
    ]
  },

  fr: {
    title: 'Exprimer une hypothèse, une certitude et un doute',
    summary:
      'Vous apprendrez à exprimer différents degrés de certitude, à présenter des possibilités et à formuler des hypothèses en français. ' +
      'Vous étudierez également les constructions qui exigent l’indicatif, le subjonctif ou le conditionnel et apprendrez à distinguer une possibilité réelle d’une situation imaginaire.',
    blocks: [
      { type: 'heading', text: 'Les degrés de certitude et de doute' },
      {
        type: 'paragraph',
        text:
          'Lorsqu’on exprime une opinion ou qu’on interprète une situation, on peut manifester une certitude, une probabilité ou un doute. ' +
          'En français, certaines expressions sont associées à des modes verbaux particuliers. ' +
          'L’indicatif présente des informations comme des faits ou des possibilités considérées comme probables, tandis que le subjonctif présente des situations incertaines, possibles ou pas encore réalisées. ' +
          'Le conditionnel permet également d’exprimer une hypothèse ou de présenter une information avec des réserves.'
      },
      {
        type: 'table',
        headers: ['Intention', 'Expressions et construction', 'Mode verbal'],
        rows: [
            [
              'Certitude',
              'Je suis sûr que..., Je sais que..., Il est évident que...',
              'Indicatif'
            ],
            [
              'Probabilité',
              'Il est probable que..., Peut-être que..., Sans doute...',
              'Indicatif'
            ],
            [
              'Doute',
              'Je doute que..., Je ne suis pas certain que..., Il est possible que...',
              'Subjonctif'
            ],
            [
              'Possibilité',
              'Il se peut que..., Il est peu probable que...',
              'Subjonctif'
            ],
            [
              'Hypothèse ou information non confirmée',
              'Il serait possible que..., Selon certaines informations, il y aurait...',
              'Conditionnel, selon la construction'
            ]
        ]
      },
      { type: 'heading', text: 'Formuler des hypothèses et présenter des conditions' },
      {
        type: 'paragraph',
        text:
          'Les phrases conditionnelles permettent d’imaginer des conséquences qui dépendent de certaines circonstances. ' +
          'Le choix des temps verbaux indique si la situation est possible, hypothétique ou contraire à ce qui s’est réellement passé.'
      },
      {
        type: 'table',
        headers: ['Structure', 'Utilisation', 'Exemple'],
        rows: [
            [
              'Si + présent → présent / futur',
              'Condition considérée comme possible ou réaliste.',
              'Si le bus arrive à l’heure, nous prendrons le métro.'
            ],
            [
              'Si + imparfait → conditionnel présent',
              'Hypothèse imaginaire ou peu probable dans le présent ou l’avenir.',
              'Si j’avais plus de temps, je voyagerais davantage.'
            ],
            [
              'Si + plus-que-parfait → conditionnel passé',
              'Hypothèse passée qui ne s’est pas réalisée.',
              'Si nous avions réservé plus tôt, nous aurions obtenu de meilleures places.'
            ]
        ]
      },
      { type: 'heading', text: 'Exemples dans des situations réelles' },
      {
        type: 'list',
        items: [
          'Je suis certain que cette solution fonctionnera.',
          'Il est probable que les travaux commenceront lundi.',
          'Je doute que cette proposition soit acceptée.',
          'Il se peut que nous arrivions un peu en retard.',
          'Selon les premières informations, le train aurait subi une panne.',
          'Prends ton parapluie au cas où il pleuvrait.',
          'Nous irons à la plage à condition qu’il fasse beau.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Certaines expressions demandent une attention particulière. Au cas où est suivi du conditionnel : au cas où il pleuvrait. ' +
          'En revanche, à condition que exige le subjonctif : à condition qu’il soit disponible. ' +
          'Le conditionnel peut également servir à présenter des informations non confirmées, notamment dans les actualités et les récits attribués à d’autres sources.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas hypothèse et condition réelle',
        text:
          'Une erreur fréquente chez les personnes lusophones consiste à employer le conditionnel immédiatement après si dans une phrase conditionnelle. ' +
          'N’écrivez pas « Si j’aurais le temps, je voyagerais. » La construction correcte est « Si j’avais le temps, je voyagerais. ' +
          '» Faites également attention à la différence entre « Je me demande si elle viendra. » et « Si elle vient, nous partirons. ' +
          '» Dans le premier cas, si introduit une interrogation indirecte et peut accompagner différents temps verbaux, y compris le conditionnel ; dans le deuxième, il introduit une condition.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'En compréhension écrite et orale, observez les mots qui indiquent la certitude, la probabilité et le doute afin d’interpréter correctement l’intention du locuteur. ' +
          'Dans vos productions orales et écrites, variez vos constructions : présentez les faits à l’indicatif, exprimez les incertitudes au subjonctif et formulez des hypothèses au conditionnel. ' +
          'Entraînez-vous à justifier vos opinions et à présenter des possibilités sans affirmer comme certain ce qui n’a pas encore été confirmé. ' +
          'Une bonne argumentation montre également que vous savez différencier les faits, les prévisions et les suppositions.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'TV5MONDE confirme, pour la certitude, Je le sais, j’en suis sûr(e), c’est évident et c’est sûr, pour le doute Je ne suis pas sûr(e), il me semble et j’imagine, et le subjonctif après Je doute que et Il est peu probable que. L’OQLF confirme : le subjonctif après les verbes d’opinion et de jugement (Il est fort possible que vous soyez convoqué à nouveau.), de volonté et de sentiment ; le conditionnel à valeur d’incertitude dans la presse (Selon la rumeur, le président annoncerait la fusion demain.) et de politesse ; les phrases avec si (imparfait → conditionnel présent ; plus-que-parfait → conditionnel passé, ou conditionnel présent pour une action possible ; condition au présent avec conséquence au futur) ; l’erreur d’employer le conditionnel après le si de condition, comme dans Je viendrais si tu voudrais. ; et que le si d’interrogation indirecte admet le conditionnel (Je lui ai demandé s’il voudrait me remplacer.). ' +
          'Ne sont pas sourcés : Il est probable que et Il est évident que avec l’indicatif, Peut-être que, Sans doute, Il se peut que, au cas où avec le conditionnel, à condition que avec le subjonctif, les exemples et le classement du tableau. ' +
          'Toutefois, elles n’établissent aucune liste obligatoire de ces expressions et ne confirment pas que toutes ces structures soient évaluées dans des questions précises du TEF Canada ou du TCF Canada. ' +
          'La stratégie présentée dans le conseil est une recommandation de préparation, et non une règle officielle des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'TV5MONDE — Accepter ou non la discussion : les degrés de certitude',
      url: 'https://apprendre.tv5monde.com/fr/aides/grammaire-accepter-ou-non-la-discussion-ou-les-degres-de-certitude'
    },
    {
      title: 'TV5MONDE — Le subjonctif',
      url: 'https://apprendre.tv5monde.com/fr/aides/grammaire-le-subjonctif'
    },
    {
      title: 'Office québécois de la langue française — Valeur modale du conditionnel',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24148/la-grammaire/le-verbe/temps-grammaticaux/conditionnel/valeur-modale-du-conditionnel'
    },
    {
      title: 'Office québécois de la langue française — Conditionnel dans les phrases hypothétiques',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24140/la-grammaire/le-verbe/temps-grammaticaux/conditionnel/conditionnel-dans-les-phrases-hypothetiques'
    },
    {
      title: 'Office québécois de la langue française — Subjonctif après certains verbes',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24253/la-grammaire/le-verbe/modes/subjonctif/subjonctif-apres-certains-verbes'
    }
  ]
}

export default content
