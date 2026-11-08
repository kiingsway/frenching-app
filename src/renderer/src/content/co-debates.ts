import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-debates',

  pt: {
    title: 'Debates e opiniões: ponto de vista e tom',
    summary:
      'Em debates e conversas com opiniões, não basta entender o assunto: as perguntas querem saber o que cada pessoa pensa, ' +
      'se concorda ou discorda e com que tom fala. É uma habilidade central a partir do nível B2.',
    blocks: [
      { type: 'heading', text: 'Identificar o ponto de vista' },
      {
        type: 'paragraph',
        text:
          'Para cada pessoa, faça três perguntas: ela é a favor, contra ou tem dúvidas? Qual é o argumento principal dela? Ela muda de posição ao longo da conversa? ' +
          'Num debate com duas ou três vozes, associe cada opinião a uma voz (homem ou mulher, jornalista ou convidado).'
      },

      { type: 'heading', text: 'Expressões de opinião' },
      {
        type: 'table',
        headers: ['Posição', 'Expressões'],
        rows: [
          ['Concordar', 'Je suis tout à fait d’accord. (Concordo totalmente.) · C’est exactement ça. (É exatamente isso.) · Vous avez raison. (Você tem razão.)'],
          ['Discordar', 'Je ne suis pas de cet avis. (Não sou dessa opinião.) · Pas du tout. (De jeito nenhum.) · Je ne vois pas les choses comme ça. (Não vejo as coisas assim.)'],
          ['Concordar em parte', 'Oui, mais… (Sim, mas…) · C’est vrai, cela dit… (É verdade, dito isso…) · Je comprends, pourtant… (Entendo, no entanto…)'],
          ['Dúvida', 'Je me demande si… (Eu me pergunto se…) · Je ne suis pas convaincu. (Não estou convencido.) · Ça reste à voir. (Isso ainda vamos ver.)'],
          ['Certeza', 'Il est évident que… (É evidente que…) · Sans aucun doute. (Sem nenhuma dúvida.) · Je suis persuadé que… (Estou convencido de que…)']
        ]
      },

      { type: 'heading', text: 'O tom muda o sentido' },
      {
        type: 'list',
        items: [
          'Ironia: "Ah, génial, encore une réunion !" (Ah, que ótimo, mais uma reunião!) é uma crítica, mesmo usando uma palavra positiva.',
          'Atenuação: "Ce n’est pas mal" (Não é ruim) e "C’est plutôt intéressant" (É bem interessante) são elogios moderados, não entusiasmo.',
          'Exagero: "C’est une catastrophe" (É uma catástrofe) pode ser só um incômodo dito com força.',
          'Hesitação: "Bof" (ah, sei lá), "euh" (hã) e "je sais pas trop" (não sei muito bem) indicam falta de convicção.'
        ]
      },

      { type: 'heading', text: 'Onde está a opinião de verdade' },
      {
        type: 'paragraph',
        text:
          'A opinião costuma vir depois de um conector de oposição. Em "C’est cher, mais c’est de très bonne qualité" (É caro, mas é de ótima qualidade), a pessoa é a favor. ' +
          'Preste atenção especial a mais (mas), pourtant (no entanto), cependant (porém), en revanche (em compensação) e finalement (no fim).'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com as palavras que você reconhece',
        text:
          'Uma alternativa pode repetir palavras exatas do áudio e mesmo assim estar errada, porque inverte a opinião. ' +
          'Compare o sentido, não as palavras.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'Ouça programas de debate e, para cada participante, escreva uma frase: "X acha que… porque…". ' +
          'Se não conseguir escrever, ouça de novo só o trecho dessa pessoa.'
      }
    ]
  },

  fr: {
    title: 'Débats et opinions : point de vue et ton',
    summary:
      'Dans les débats et les conversations où l’on donne son avis, comprendre le sujet ne suffit pas : les questions veulent savoir ce que pense chaque personne, ' +
      'si elle est d’accord ou non, et sur quel ton elle parle. C’est une compétence clé à partir du niveau B2.',
    blocks: [
      { type: 'heading', text: 'Repérer le point de vue' },
      {
        type: 'paragraph',
        text:
          'Pour chaque personne, posez-vous trois questions : est-elle pour, contre, ou a-t-elle des doutes ? Quel est son argument principal ? Change-t-elle d’avis au cours de la conversation ? ' +
          'Dans un débat à deux ou trois voix, associez chaque opinion à une voix (homme ou femme, journaliste ou invité).'
      },

      { type: 'heading', text: 'Exprimer une opinion' },
      {
        type: 'table',
        headers: ['Position', 'Expressions'],
        rows: [
          ['Être d’accord', 'Je suis tout à fait d’accord. · C’est exactement ça. · Vous avez raison.'],
          ['Ne pas être d’accord', 'Je ne suis pas de cet avis. · Pas du tout. · Je ne vois pas les choses comme ça.'],
          ['Être d’accord en partie', 'Oui, mais… · C’est vrai, cela dit… · Je comprends, pourtant…'],
          ['Le doute', 'Je me demande si… · Je ne suis pas convaincu. · Ça reste à voir.'],
          ['La certitude', 'Il est évident que… · Sans aucun doute. · Je suis persuadé que…']
        ]
      },

      { type: 'heading', text: 'Le ton change le sens' },
      {
        type: 'list',
        items: [
          'L’ironie : « Ah, génial, encore une réunion ! » est une critique, même avec un mot positif.',
          'L’atténuation : « Ce n’est pas mal » et « C’est plutôt intéressant » sont des compliments modérés, pas de l’enthousiasme.',
          'L’exagération : « C’est une catastrophe » peut n’être qu’une petite gêne dite avec force.',
          'L’hésitation : « Bof », « euh » et « je sais pas trop » montrent un manque de conviction.'
        ]
      },

      { type: 'heading', text: 'Où se trouve vraiment l’opinion' },
      {
        type: 'paragraph',
        text:
          'L’opinion vient souvent après un connecteur d’opposition. Dans « C’est cher, mais c’est de très bonne qualité », la personne est pour. ' +
          'Soyez particulièrement attentif à mais, pourtant, cependant, en revanche et finalement.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Méfiez-vous des mots que vous reconnaissez',
        text:
          'Une réponse peut reprendre les mots exacts de l’audio et pourtant être fausse, parce qu’elle inverse l’opinion. ' +
          'Comparez le sens, pas les mots.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Écoutez des émissions de débat et, pour chaque participant, écrivez une phrase : « X pense que… parce que… ». ' +
          'Si vous n’y arrivez pas, réécoutez seulement le passage de cette personne.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Open Exam Prep – TEF Canada Listening: structure and question types',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/listening-comprehension/listening-overview'
    },
    {
      title: 'Université de Sherbrooke – TCF : compréhension orale',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-orale'
    },
    {
      title: 'RFI – Le français facile',
      url: 'https://francaisfacile.rfi.fr/fr/'
    }
  ]
}

export default content
