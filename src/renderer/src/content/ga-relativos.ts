import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-relativos',

  pt: {
    title: 'Pronomes relativos compostos: lequel, auquel, duquel e suas variações',
    summary:
      'Aprenda a utilizar os pronomes relativos compostos para conectar frases e evitar repetições, especialmente depois de preposições. ' +
      'Domine as variações de gênero e número, as contrações com à e de e a diferença entre esses pronomes e dont.',
    blocks: [
      { type: 'heading', text: 'O que são e como funcionam' },
      {
        type: 'paragraph',
        text:
          'Os pronomes relativos compostos ' +
          'retomam um substantivo mencionado anteriormente e introduzem uma oração que acrescenta informações sobre ele. ' +
          'O principal pronome dessa categoria é [[lequel|o qual]], que varia em gênero e número de acordo com seu antecedente. ' +
          'Diferentemente de [[qui|que, como sujeito]], [[que|que, como complemento direto]], [[dont|de quem / de que]] ' +
          'e [[où|onde]], ele é frequentemente utilizado depois de preposições, como [[avec|com]], [[dans|em]], [[sur|sobre]] e [[pour|para]].'
      },
      {
        type: 'table',
        headers: ['Antecedente', 'Forma com à', 'Forma com de'],
        rows: [
            [
              'Masculino singular',
              '[[auquel|ao qual]]',
              '[[duquel|do qual]]'
            ],
            [
              'Feminino singular',
              '[[à laquelle|à qual]]',
              '[[de laquelle|da qual]]'
            ],
            [
              'Masculino plural',
              '[[auxquels|aos quais]]',
              '[[desquels|dos quais]]'
            ],
            [
              'Feminino plural',
              '[[auxquelles|às quais]]',
              '[[desquelles|das quais]]'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'A escolha depende do gênero e do número do substantivo retomado. As contrações acontecem quando [[lequel|o qual]] é precedido pelas preposições [[à|a]] ' +
          'ou [[de|de]]. Observe que, no feminino singular, não há contração: utilizamos [[à laquelle|à qual]] e [[de laquelle|da qual]]. ' +
          'Para outras preposições, basta colocá-las antes da forma correspondente: [[avec lequel|com o qual]], [[dans laquelle|na qual]], [[sur lesquels|sobre os quais]] ' +
          'e [[pour lesquelles|para as quais]].'
      },
      {
        type: 'paragraph',
        text:
          'Normalmente, esses pronomes aparecem depois de uma preposição. Quando o antecedente é uma pessoa, [[qui|quem]] ' +
          'costuma ser a opção mais comum, embora [[lequel|o qual]] também seja possível em determinadas construções. ' +
          'Quando o antecedente é uma coisa ou um animal, usa-se sempre [[lequel|o qual]]: [[L’entreprise pour laquelle nous travaillons offre d’excellents avantages sociaux.|A empresa para a qual trabalhamos oferece excelentes benefícios sociais.]] ' +
          'Depois de [[parmi|entre / dentre]], utiliza-se sempre uma forma de [[lequel|o qual]], independentemente de o antecedente ser uma pessoa ou uma coisa.'
      },
      { type: 'heading', text: 'Diferença entre dont e duquel' },
      {
        type: 'paragraph',
        text:
          'Essa distinção é especialmente importante. ' +
          'Quando um verbo, adjetivo ou substantivo exige diretamente a preposição [[de|de]], geralmente utilizamos [[dont|de quem / de que]]. ' +
          'Exemplo: [[Le dossier dont je parle est important.|O documento de que estou falando é importante.]] Quando [[de|de]] ' +
          'faz parte de uma locução prepositiva, utilizamos a locução seguida da forma correspondente de [[lequel|o qual]]: [[le centre près duquel|o centro perto do qual]], [[la salle à côté de laquelle|a sala ao lado da qual]] ' +
          'e [[les réunions au cours desquelles|as reuniões durante as quais]]. Portanto, [[duquel|do qual]] não substitui automaticamente [[dont|de quem / de que]].'
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'paragraph',
        text:
          '[[Le programme auquel je me suis inscrit offre des cours de français gratuits.|O programa no qual me inscrevi oferece cursos gratuitos de francês.]] ' +
          '[[La salle dans laquelle se tiendra la réunion est accessible en autobus.|A sala na qual acontecerá a reunião é acessível de ônibus.]] ' +
          '[[Les documents dont nous avons besoin sont disponibles sur le site de la municipalité.|Os documentos de que precisamos estão disponíveis no site da prefeitura.]] ' +
          '[[Le centre communautaire près duquel se trouve l’arrêt d’autobus sera rénové cet été.|O centro comunitário perto do qual fica o ponto de ônibus será reformado neste verão.]] ' +
          '[[Les propositions parmi lesquelles le comité doit choisir ont été publiées sur le site de la ville.|As propostas entre as quais o comitê deve escolher foram publicadas no site da cidade.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não escreva à lequel ou de lequel',
        text:
          'Um erro comum é manter a preposição separada do pronome, como acontece na tradução literal do português. ' +
          'As formas corretas são [[auquel|ao qual]], e não [[à lequel|a o qual (errado)]], e [[duquel|do qual]], e não [[de lequel|de o qual (errado)]]. ' +
          'Também não confunda [[dont|de quem / de que]] ' +
          'com [[duquel|do qual]]: o primeiro costuma substituir um complemento introduzido diretamente por [[de|de]], enquanto o segundo aparece especialmente depois de locuções prepositivas terminadas em [[de|de]]. ' +
          'Finalmente, confira sempre o gênero e o número do antecedente antes de escolher a forma.'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Pratique a conexão de frases mais elaboradas',
        text:
          'Nas produções escrita e oral do TEF Canada e do TCF Canada, a capacidade de conectar ideias com precisão contribui para a clareza, a coesão e a variedade gramatical. ' +
          'Pratique transformar duas frases simples em uma única frase com pronome relativo. ' +
          'Por exemplo, em vez de dizer que você frequenta um programa e que esse programa oferece aulas gratuitas, utilize uma construção como [[le programme auquel je participe|o programa do qual participo]]. ' +
          'Dê atenção especial às preposições exigidas pelos verbos, como [[participer à|participar de]], [[s’intéresser à|interessar-se por]] ' +
          'e [[avoir besoin de|precisar de]].'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam as formas de [[lequel|o qual]] e as contrações com [[à|a]] e [[de|de]] (sem contração no feminino singular), o uso de [[qui|quem]] ou [[lequel|o qual]] com pessoas, o uso sempre de [[lequel|o qual]] com coisas e depois de [[parmi|entre / dentre]], e que [[dont|de quem / de que]] equivale a [[de|de]] mais pronome. ' +
          'Não têm fonte aberta: a distinção entre [[dont|de quem / de que]] e [[duquel|do qual]] com locuções prepositivas como explicada, os exemplos e a dica para a prova. ' +
          'As três páginas do Portail linguistique du Canada citadas no JSON original não puderam ser abertas e não foram usadas. ' +
          'Essa dica é conselho de preparação, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Les pronoms relatifs composés : lequel, auquel, duquel et leurs variantes',
    summary:
      'Apprenez à utiliser les pronoms relatifs composés pour relier des phrases et éviter les répétitions, notamment après les prépositions. ' +
      'Maîtrisez les variations en genre et en nombre, les contractions avec à et de ainsi que la différence entre ces pronoms et dont.',
    blocks: [
      { type: 'heading', text: 'Définition et fonctionnement' },
      {
        type: 'paragraph',
        text:
          'Les pronoms relatifs composés reprennent un nom déjà mentionné et introduisent une proposition qui apporte des précisions sur celui-ci. ' +
          'Le principal pronom de cette catégorie est lequel, qui varie en genre et en nombre selon son antécédent. ' +
          'Contrairement à qui, que, dont et où, il est fréquemment utilisé après des prépositions comme avec, dans, sur et pour.'
      },
      {
        type: 'table',
        headers: ['Antécédent', 'Forme avec à', 'Forme avec de'],
        rows: [
            [
              'Masculin singulier',
              'auquel',
              'duquel'
            ],
            [
              'Féminin singulier',
              'à laquelle',
              'de laquelle'
            ],
            [
              'Masculin pluriel',
              'auxquels',
              'desquels'
            ],
            [
              'Féminin pluriel',
              'auxquelles',
              'desquelles'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Le choix dépend du genre et du nombre du nom repris. Les contractions se produisent lorsque lequel est précédé des prépositions à ou de. ' +
          'Il faut remarquer qu’au féminin singulier, il n’y a pas de contraction : on utilise à laquelle et de laquelle. ' +
          'Avec les autres prépositions, il suffit de les placer devant la forme correspondante : avec lequel, dans laquelle, sur lesquels et pour lesquelles.'
      },
      {
        type: 'paragraph',
        text:
          'Ces pronoms apparaissent généralement après une préposition. ' +
          'Lorsque l’antécédent désigne une personne, qui est souvent la forme privilégiée, bien que lequel soit également possible dans certaines constructions. ' +
          'Lorsque l’antécédent est une chose ou un animal, on emploie toujours lequel : L’entreprise pour laquelle nous travaillons offre d’excellents avantages sociaux. ' +
          'Après parmi, on utilise toujours une forme de lequel, que l’antécédent désigne une personne ou une chose.'
      },
      { type: 'heading', text: 'Différence entre dont et duquel' },
      {
        type: 'paragraph',
        text:
          'Cette distinction est particulièrement importante. Lorsqu’un verbe, un adjectif ou un nom exige directement la préposition de, on utilise généralement dont. ' +
          'Exemple : Le dossier dont je parle est important. ' +
          'Lorsque de fait partie d’une locution prépositive, on utilise cette locution suivie de la forme correspondante de lequel : le centre près duquel, la salle à côté de laquelle et les réunions au cours desquelles. ' +
          'Ainsi, duquel ne remplace pas automatiquement dont.'
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'paragraph',
        text:
          'Le programme auquel je me suis inscrit offre des cours de français gratuits. La salle dans laquelle se tiendra la réunion est accessible en autobus. ' +
          'Les documents dont nous avons besoin sont disponibles sur le site de la municipalité. ' +
          'Le centre communautaire près duquel se trouve l’arrêt d’autobus sera rénové cet été. ' +
          'Les propositions parmi lesquelles le comité doit choisir ont été publiées sur le site de la ville.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'N’écrivez pas à lequel ou de lequel',
        text:
          'Une erreur fréquente consiste à laisser la préposition séparée du pronom, comme dans une traduction littérale du portugais. ' +
          'Les formes correctes sont auquel et non à lequel, ainsi que duquel et non de lequel. ' +
          'Ne confondez pas non plus dont et duquel : le premier remplace généralement un complément introduit directement par de, tandis que le second apparaît notamment après des locutions prépositives terminées par de. ' +
          'Enfin, vérifiez toujours le genre et le nombre de l’antécédent avant de choisir la forme.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Entraînez-vous à relier des phrases plus élaborées',
        text:
          'Dans les productions écrites et orales du TEF Canada et du TCF Canada, la capacité à relier les idées avec précision contribue à la clarté, à la cohésion et à la variété grammaticale. ' +
          'Entraînez-vous à transformer deux phrases simples en une seule phrase contenant un pronom relatif. ' +
          'Par exemple, au lieu de dire que vous participez à un programme et que ce programme offre des cours gratuits, utilisez une construction comme le programme auquel je participe. ' +
          'Portez une attention particulière aux prépositions exigées par les verbes, comme participer à, s’intéresser à et avoir besoin de.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment les formes de lequel et les contractions avec à et de (sans contraction au féminin singulier), l’emploi de qui ou de lequel avec une personne, l’emploi constant de lequel avec une chose et après parmi, et le fait que dont équivaut à de plus un pronom. ' +
          'Ne sont pas sourcés : la distinction entre dont et duquel avec des locutions prépositives telle qu’expliquée, les exemples et le conseil pour l’examen. ' +
          'Les trois pages du Portail linguistique du Canada citées dans le JSON d’origine n’ont pas pu être ouvertes et n’ont pas été utilisées. ' +
          'Ce conseil est une recommandation de préparation, et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le pronom relatif lequel et les formes contractées duquel et auquel — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23508/la-grammaire/les-pronoms/pronoms-relatifs/le-pronom-relatif-lequel-et-les-formes-contractees-duquel-et-auquel'
    },
    {
      title: 'Le pronom relatif dont — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22904/la-grammaire/les-pronoms/pronoms-relatifs/le-pronom-relatif-dont'
    }
  ]
}

export default content
