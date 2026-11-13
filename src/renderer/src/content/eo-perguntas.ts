import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-perguntas',

  pt: {
    title: 'Como formular perguntas: entonação, est-ce que e inversão',
    summary:
      'Você vai aprender as três principais maneiras de formular perguntas em francês e entender quando utilizar cada uma. ' +
      'Também vai praticar perguntas com palavras interrogativas, inversão do sujeito e do verbo e estruturas naturais para conversas do cotidiano.',
    blocks: [
      { type: 'heading', text: 'Três maneiras de fazer uma pergunta' },
      {
        type: 'paragraph',
        text:
          'Em francês, uma pergunta pode ser formulada de três maneiras principais: mantendo a ordem normal da frase e utilizando a entonação, acrescentando [[est-ce que|estrutura interrogativa]] ' +
          'antes do sujeito ou invertendo a posição do verbo e do pronome sujeito. As três formas são corretas, mas apresentam diferenças de registro e formalidade.'
      },
      {
        type: 'table',
        headers: ['Forma', 'Estrutura', 'Exemplo', 'Contexto'],
        rows: [
            [
              'Entonação',
              '[[Sujet + verbe|Sujeito + verbo]]',
              '[[Vous avez reçu mon courriel ?|Você recebeu meu e-mail?]]',
              'Muito comum na conversa cotidiana e informal.'
            ],
            [
              '[[Est-ce que|Estrutura interrogativa]]',
              '[[Est-ce que + sujet + verbe|Est-ce que + sujeito + verbo]]',
              '[[Est-ce que vous avez reçu mon courriel ?|Você recebeu meu e-mail?]]',
              'Forma neutra, natural e adequada a diferentes situações.'
            ],
            [
              'Inversão',
              '[[Verbe + pronom sujet|Verbo + pronome sujeito]]',
              '[[Avez-vous reçu mon courriel ?|Você recebeu meu e-mail?]]',
              'Mais formal, frequente na escrita e em situações cuidadosas.'
            ]
        ]
      },
      { type: 'heading', text: 'Perguntas com palavras interrogativas' },
      {
        type: 'paragraph',
        text:
          'As palavras interrogativas podem aparecer com as três estruturas, conforme o tipo de pergunta e o registro desejado. ' +
          'Algumas das mais utilizadas são [[où|onde]], [[quand|quando]], [[comment|como]], [[pourquoi|por que]], [[combien|quanto]], [[qui|quem]] e [[que|o que]].'
      },
      {
        type: 'list',
        items: [
          '[[Tu habites où ?|Você mora onde?]] — Entonação.',
          '[[Où est-ce que tu habites ?|Onde você mora?]] — Estrutura interrogativa.',
          '[[Où habites-tu ?|Onde você mora?]] — Inversão.',
          '[[Pourquoi est-ce que vous cherchez un appartement ?|Por que vocês estão procurando um apartamento?]] — Estrutura interrogativa.',
          '[[Pourquoi cherchez-vous un appartement ?|Por que vocês estão procurando um apartamento?]] — Inversão.',
          '[[Qu’est-ce que vous souhaitez commander ?|O que vocês desejam pedir?]] — Pergunta com estrutura interrogativa.'
        ]
      },
      { type: 'heading', text: 'Detalhes importantes da inversão' },
      {
        type: 'paragraph',
        text:
          'Na inversão, o pronome sujeito aparece depois do verbo e os dois são ligados por hífen. ' +
          'Quando o verbo termina em -e ou -a e o pronome seguinte é [[il|ele]], [[elle|ela]] ou [[on|a gente]], acrescenta-se um [[t euphonique|t eufônico]], ligado por hífens, ' +
          'entre o verbo e o pronome para evitar o encontro de vogais, segundo o OQLF: [[Parle-t-elle français ?|Ela fala francês?]] e [[A-t-il terminé ?|Ele terminou?]]. ' +
          'Quando o sujeito é um substantivo, ele pode ser retomado por um pronome depois do verbo: [[Votre collègue vient-il demain ?|Seu colega vem amanhã?]].'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não misture est-ce que com inversão',
        text:
          'Um erro frequente é combinar as duas estruturas. Não escreva [[Est-ce que avez-vous reçu le document ?|Est-ce que você recebeu o documento? (errado)]] ' +
          'nem [[Est-ce que venez-vous demain ?|Est-ce que vocês vêm amanhã? (errado)]] ' +
          'Escolha apenas uma construção: [[Est-ce que vous avez reçu le document ?|Você recebeu o documento?]] ' +
          'ou [[Avez-vous reçu le document ?|Você recebeu o documento?]]. Na entonação, mantenha a ordem normal do sujeito antes do verbo.'
      },
      {
        type: 'paragraph',
        text:
          'Outra dificuldade é distinguir [[qu’est-ce que|o que]] ' +
          'de [[qu’est-ce qui|o que]]: a primeira estrutura introduz uma pergunta sobre o objeto de uma ação, enquanto a segunda introduz uma pergunta em que o próprio elemento desconhecido é o sujeito. ' +
          'Compare [[Qu’est-ce que tu fais ?|O que você está fazendo?]] e [[Qu’est-ce qui se passe ?|O que está acontecendo?]].'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Na produção oral, pratique formular perguntas claras e adequadas ao contexto da conversa. A entonação e [[est-ce que|a estrutura interrogativa]] ' +
          'são boas opções para manter a comunicação natural, enquanto a inversão permite variar seu registro e demonstrar domínio de estruturas mais elaboradas. ' +
          'Treine especialmente perguntas sobre experiências, opiniões, preferências, horários, preços e situações do cotidiano. ' +
          'Na produção escrita, revise a posição do sujeito, os hífens e os pontos de interrogação.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam os procedimentos da pergunta direta (inversão do sujeito e do verbo, retomada do sujeito por pronome, palavras interrogativas e [[est-ce que|estrutura interrogativa]]), a pergunta com forma de frase declarativa marcada só pela entonação e pelo ponto de interrogação, e a regra do t eufônico. ' +
          'O Lawless French confirma que a inversão é formal e soa afetada fora de situações formais, que [[est-ce que|estrutura interrogativa]] é o registro normal e que há opções informais. ' +
          'Não têm fonte: a distinção entre [[qu’est-ce que|o que]] e [[qu’est-ce qui|o que]], a lista de exemplos e a dica de treino. ' +
          'Essa dica é conselho de preparação, não regra oficial. As páginas consultadas não indicam preferência por alguma estrutura no TEF Canada ou no TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Comment poser des questions : intonation, est-ce que et inversion',
    summary:
      'Vous apprendrez les trois principales façons de poser des questions en français et à comprendre quand utiliser chacune d’elles. ' +
      'Vous pratiquerez également les questions avec des mots interrogatifs, l’inversion du sujet et du verbe ainsi que des structures naturelles pour les conversations de tous les jours.',
    blocks: [
      { type: 'heading', text: 'Trois façons de poser une question' },
      {
        type: 'paragraph',
        text:
          'En français, une question peut être formulée de trois façons principales : en conservant l’ordre habituel de la phrase et en utilisant l’intonation, en ajoutant est-ce que avant le sujet ou en inversant la position du verbe et du pronom sujet. ' +
          'Les trois formes sont correctes, mais elles présentent des différences de registre et de formalité.'
      },
      {
        type: 'table',
        headers: ['Forme', 'Structure', 'Exemple', 'Contexte'],
        rows: [
            [
              'Intonation',
              'Sujet + verbe',
              'Vous avez reçu mon courriel ?',
              'Très courant dans les conversations quotidiennes et informelles.'
            ],
            [
              'Est-ce que',
              'Est-ce que + sujet + verbe',
              'Est-ce que vous avez reçu mon courriel ?',
              'Forme neutre, naturelle et adaptée à différentes situations.'
            ],
            [
              'Inversion',
              'Verbe + pronom sujet',
              'Avez-vous reçu mon courriel ?',
              'Plus formel, fréquent à l’écrit et dans les situations où l’on adopte un registre soigné.'
            ]
        ]
      },
      { type: 'heading', text: 'Les questions avec des mots interrogatifs' },
      {
        type: 'paragraph',
        text:
          'Les mots interrogatifs peuvent être employés avec les trois structures, selon le type de question et le registre souhaité. ' +
          'Parmi les plus utilisés, on trouve où, quand, comment, pourquoi, combien, qui et que.'
      },
      {
        type: 'list',
        items: [
          'Tu habites où ? — Intonation.',
          'Où est-ce que tu habites ? — Est-ce que.',
          'Où habites-tu ? — Inversion.',
          'Pourquoi est-ce que vous cherchez un appartement ? — Est-ce que.',
          'Pourquoi cherchez-vous un appartement ? — Inversion.',
          'Qu’est-ce que vous souhaitez commander ? — Question avec est-ce que.'
        ]
      },
      { type: 'heading', text: 'Les détails importants de l’inversion' },
      {
        type: 'paragraph',
        text:
          'Dans l’inversion, le pronom sujet se place après le verbe et les deux éléments sont reliés par un trait d’union. ' +
          'Lorsque le verbe se termine par e ou par a et que le pronom suivant est il, elle ou on, on ajoute un t euphonique, entre deux traits d’union, entre le verbe et le pronom pour éviter la rencontre de deux voyelles, selon l’OQLF : « Parle-t-elle français ? ' +
          '» et « A-t-il terminé ? » Lorsque le sujet est un nom, il peut être repris par un pronom après le verbe : « Votre collègue vient-il demain ? ».'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne combinez pas est-ce que et l’inversion',
        text:
          'Une erreur fréquente consiste à combiner les deux structures. N’écrivez pas « Est-ce que avez-vous reçu le document ? ' +
          '» ni « Est-ce que venez-vous demain ? ». Choisissez une seule construction : « Est-ce que vous avez reçu le document ? » ou « Avez-vous reçu le document ? ». ' +
          'Avec l’intonation, conservez l’ordre habituel du sujet avant le verbe.'
      },
      {
        type: 'paragraph',
        text:
          'Une autre difficulté consiste à distinguer qu’est-ce que de qu’est-ce qui : la première structure introduit une question portant sur le complément d’une action, tandis que la seconde introduit une question dans laquelle l’élément recherché est lui-même le sujet. ' +
          'Comparez « Qu’est-ce que tu fais ? » et « Qu’est-ce qui se passe ? ».'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans la production orale, entraînez-vous à poser des questions claires et adaptées au contexte de la conversation. ' +
          'L’intonation et est-ce que sont de bonnes options pour maintenir une communication naturelle, tandis que l’inversion permet de varier votre registre et de démontrer votre maîtrise de structures plus élaborées. ' +
          'Entraînez-vous particulièrement à poser des questions sur les expériences, les opinions, les préférences, les horaires, les prix et les situations de la vie quotidienne. ' +
          'Dans la production écrite, vérifiez la position du sujet, les traits d’union et les points d’interrogation.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment les procédés de l’interrogation directe (inversion du sujet et du verbe, reprise du sujet par un pronom, mots interrogatifs et est-ce que), la question de forme déclarative marquée seulement par l’intonation et le point d’interrogation, et la règle du t euphonique. ' +
          'Lawless French confirme que l’inversion est formelle et paraît guindée hors des situations formelles, que est-ce que est le registre normal et qu’il existe des options informelles. ' +
          'Ne sont pas sourcés : la distinction entre qu’est-ce que et qu’est-ce qui, la liste d’exemples et le conseil d’entraînement. ' +
          'Ce conseil est une recommandation de préparation, et non une règle officielle. Les pages consultées n’indiquent pas de préférence pour une structure au TEF Canada ou au TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Phrase interrogative et emploi du point d’interrogation — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23383/la-ponctuation/point-dinterrogation/phrase-interrogative-et-emploi-du-point-dinterrogation'
    },
    {
      title: 'Les types de phrases — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24269/la-grammaire/la-grammaire-actuelle/la-phrase/les-types-de-phrases'
    },
    {
      title: 'Emploi du t euphonique — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22513/la-prononciation/prononciation-de-certaines-lettres/emploi-du-t-euphonique'
    },
    {
      title: 'Avoiding Inversion — Lawless French',
      url: 'https://www.lawlessfrench.com/grammar/avoiding-inversion'
    }
  ]
}

export default content
