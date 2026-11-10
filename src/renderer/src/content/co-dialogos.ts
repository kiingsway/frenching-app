import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-dialogos',

  pt: {
    title: 'Diálogos do cotidiano',
    summary:
      'Conversas entre duas pessoas em situações do dia a dia: numa loja, num guichê, numa consulta, no trabalho. ' +
      'As perguntas raramente cobram uma palavra isolada. Querem saber quem são as pessoas, onde estão, o que querem e o que decidem.',
    blocks: [
      { type: 'heading', text: 'As quatro perguntas de todo diálogo' },
      {
        type: 'list',
        items: [
          'Onde? Uma farmácia, uma agência de banco, a recepção de um hotel.',
          'Quem? Cliente e vendedor, paciente e médico, dois colegas.',
          'O quê? O problema ou o pedido: trocar um produto, marcar uma consulta, pedir um dia de folga.',
          'Como termina? O que foi decidido ou o que vai acontecer depois.'
        ]
      },

      { type: 'heading', text: '[[Tu|você, informal]] ou [[vous|o senhor, a senhora]]: a relação entre as pessoas' },
      {
        type: 'paragraph',
        text:
          'Escute como as pessoas se tratam. "[[Vous|o senhor, a senhora]]" e fórmulas como "[[Madame|senhora]]" ou "[[je vous en prie|por favor; não há de quê]]" indicam uma relação formal (cliente e atendente, desconhecidos). ' +
          '"[[Tu|você, informal]]", apelidos e frases curtas indicam amigos, família ou colegas próximos. Algumas perguntas cobram justamente isso.'
      },

      { type: 'heading', text: 'Situações frequentes' },
      {
        type: 'table',
        headers: ['Situação', 'Expressões típicas'],
        rows: [
          [
            'Loja',
            '[[Je peux vous aider ?|Posso ajudar?]] · [[Vous faites quelle taille ?|Qual é o seu tamanho?]] · [[Je voudrais l’échanger.|Queria trocar.]]'
          ],
          [
            'Restaurante',
            '[[Vous avez réservé ?|Vocês têm reserva?]] · [[L’addition, s’il vous plaît.|A conta, por favor.]] · [[C’est pour emporter ?|É para viagem?]]'
          ],
          [
            'Consulta médica',
            '[[Qu’est-ce qui vous amène ?|O que o traz aqui?]] · [[J’ai mal à la gorge.|Estou com dor de garganta.]] · [[Je vous fais une ordonnance.|Vou lhe passar uma receita.]]'
          ],
          [
            'Banco, correios, administração',
            '[[Il me faut une pièce d’identité.|Preciso de um documento de identidade.]] · [[Remplissez ce formulaire.|Preencha este formulário.]] · [[C’est au guichet 4.|É no guichê 4.]]'
          ],
          [
            'Trabalho',
            '[[On fait le point ?|Vamos ver como estão as coisas?]] · [[Je suis débordé.|Estou sobrecarregado.]] · [[Tu peux me remplacer jeudi ?|Você pode me substituir na quinta?]]'
          ]
        ]
      },

      { type: 'heading', text: 'Intenção: o que a pessoa quer de verdade' },
      {
        type: 'paragraph',
        text:
          'Muitas vezes o pedido não é dito de forma direta. "[[Il fait un peu froid ici, non ?|Está meio frio aqui, não?]]" pode ser um pedido para fechar a janela. ' +
          '"[[Je ne suis pas sûr que ce soit possible|Não tenho certeza de que seja possível]]" costuma ser uma recusa educada. ' +
          'Pergunte-se sempre o que a frase faz na conversa: pedir, recusar, aceitar, reclamar ou propor.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'A primeira ideia nem sempre é a final',
        text:
          'Nos diálogos as pessoas mudam de ideia: "[[On se voit lundi ? — Lundi, je ne peux pas… Mardi plutôt ?|A gente se vê na segunda? — Na segunda não posso… Pode ser na terça?]]". ' +
          'Se a pergunta é sobre o que ficou combinado, a resposta é o que foi aceito no fim.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'Assista a cenas curtas de séries ou a vídeos de [[FLE|français langue étrangère: francês como língua estrangeira]] sem legenda e responda às quatro perguntas: onde, quem, o quê e como termina. ' +
          'Depois confira com a legenda.'
      }
    ]
  },

  fr: {
    title: 'Dialogues de la vie quotidienne',
    summary:
      'Des conversations entre deux personnes dans des situations de tous les jours : dans un magasin, à un guichet, chez le médecin, au travail. ' +
      'Les questions portent rarement sur un mot isolé. Elles veulent savoir qui sont les personnes, où elles sont, ce qu’elles veulent et ce qu’elles décident.',
    blocks: [
      { type: 'heading', text: 'Les quatre questions de tout dialogue' },
      {
        type: 'list',
        items: [
          'Où ? Une pharmacie, une agence bancaire, la réception d’un hôtel.',
          'Qui ? Un client et un vendeur, un patient et un médecin, deux collègues.',
          'Quoi ? Le problème ou la demande : échanger un produit, prendre rendez-vous, demander un jour de congé.',
          'Comment ça finit ? Ce qui a été décidé ou ce qui va se passer ensuite.'
        ]
      },

      { type: 'heading', text: 'Tu ou vous : la relation entre les personnes' },
      {
        type: 'paragraph',
        text:
          'Écoutez comment les personnes s’adressent l’une à l’autre. « Vous » et des formules comme « Madame » ou « je vous en prie » indiquent une relation formelle (client et employé, inconnus). ' +
          '« Tu », les surnoms et les phrases courtes indiquent des amis, la famille ou des collègues proches. Certaines questions portent justement là-dessus.'
      },

      { type: 'heading', text: 'Situations fréquentes' },
      {
        type: 'table',
        headers: ['Situation', 'Expressions typiques'],
        rows: [
          ['Magasin', 'Je peux vous aider ? · Vous faites quelle taille ? · Je voudrais l’échanger.'],
          ['Restaurant', 'Vous avez réservé ? · L’addition, s’il vous plaît. · C’est pour emporter ?'],
          ['Chez le médecin', 'Qu’est-ce qui vous amène ? · J’ai mal à la gorge. · Je vous fais une ordonnance.'],
          ['Banque, poste, administration', 'Il me faut une pièce d’identité. · Remplissez ce formulaire. · C’est au guichet 4.'],
          ['Travail', 'On fait le point ? · Je suis débordé. · Tu peux me remplacer jeudi ?']
        ]
      },

      { type: 'heading', text: 'L’intention : ce que la personne veut vraiment' },
      {
        type: 'paragraph',
        text:
          'Souvent, la demande n’est pas formulée directement. « Il fait un peu froid ici, non ? » peut être une demande pour fermer la fenêtre. ' +
          '« Je ne suis pas sûr que ce soit possible » est souvent un refus poli. ' +
          'Demandez-vous toujours ce que fait la phrase dans la conversation : demander, refuser, accepter, se plaindre ou proposer.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'La première idée n’est pas toujours la bonne',
        text:
          'Dans les dialogues, les gens changent d’avis : « On se voit lundi ? — Lundi, je ne peux pas… Mardi plutôt ? ». ' +
          'Si la question porte sur ce qui a été convenu, la réponse est ce qui a été accepté à la fin.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Regardez de courtes scènes de séries ou des vidéos de FLE sans sous-titres et répondez aux quatre questions : où, qui, quoi et comment ça finit. ' +
          'Vérifiez ensuite avec les sous-titres.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Université de Sherbrooke – TCF : compréhension orale',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-orale'
    },
    {
      title: 'Open Exam Prep – TEF Canada Listening: structure and question types',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/listening-comprehension/listening-overview'
    },
    {
      title: 'TV5MONDE – Apprendre le français',
      url: 'https://apprendre.tv5monde.com/fr'
    }
  ]
}

export default content
