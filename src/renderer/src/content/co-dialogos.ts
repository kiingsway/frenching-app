import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-dialogos',

  pt: {
    title: 'Diálogos do cotidiano',
    summary: 'Conversas entre duas pessoas aparecem na compreensão oral, que avalia a capacidade de entender francês falado em situações de comunicação corrente, como diálogos, entrevistas e conversas ao telefone. [1] Em diálogos, as perguntas podem envolver o contexto, a relação entre os interlocutores e detalhes práticos da situação. [2]',
    blocks: [
      { type: 'heading', text: 'As quatro perguntas de todo diálogo' },
      {
        type: 'list',
        items: [
          'Onde? Uma farmácia, um banco ou uma loja. [2]',
          'Quem? Cliente e vendedor, paciente e profissional de saúde, dois colegas. [2]',
          'O quê? O problema ou o pedido: trocar um produto, remarcar uma consulta, pedir um favor a um colega. [2]',
          'Como termina? O que foi decidido ou o que vai acontecer depois.'
        ]
      },
      { type: 'heading', text: '[[Tu|você, informal]] ou [[vous|o senhor, a senhora]]: a relação entre as pessoas' },
      { type: 'paragraph', text: 'Escute como as pessoas se tratam. [[Vous|O senhor, a senhora]] e fórmulas como [[Madame|senhora]] ou [[je vous en prie|por favor; não há de quê]] indicam uma relação formal (cliente e atendente, desconhecidos). [[Tu|Você, informal]], apelidos e frases curtas indicam amigos, família ou colegas próximos. Algumas perguntas podem cobrar justamente isso. [2]' },
      { type: 'heading', text: 'Situações frequentes' },
      {
        type: 'table',
        headers: ['Situação', 'Expressões típicas'],
        rows: [
          ['Loja [2]', '[[Je peux vous aider ?|Posso ajudar?]] · [[Vous faites quelle taille ?|Qual é o seu tamanho?]] · [[Je voudrais l’échanger.|Queria trocar.]]'],
          ['Restaurante [2]', '[[Vous avez réservé ?|Vocês têm reserva?]] · [[L’addition, s’il vous plaît.|A conta, por favor.]] · [[C’est pour emporter ?|É para viagem?]]'],
          ['Consulta médica [2]', '[[Qu’est-ce qui vous amène ?|O que o traz aqui?]] · [[J’ai mal à la gorge.|Estou com dor de garganta.]] · [[Je vous fais une ordonnance.|Vou lhe passar uma receita.]]'],
          ['Banco, correios, administração [2]', '[[Il me faut une pièce d’identité.|Preciso de um documento de identidade.]] · [[Remplissez ce formulaire.|Preencha este formulário.]] · [[C’est au guichet 4.|É no guichê 4.]]'],
          ['Trabalho [2]', '[[On fait le point ?|Vamos ver como estão as coisas?]] · [[Je suis débordé.|Estou sobrecarregado.]] · [[Tu peux me remplacer jeudi ?|Você pode me substituir na quinta?]]']
        ]
      },
      { type: 'heading', text: 'Intenção: o que a pessoa quer de verdade' },
      { type: 'paragraph', text: 'Muitas vezes o pedido não é dito de forma direta. [[Il fait un peu froid ici, non ?|Está meio frio aqui, não?]] pode ser um pedido para fechar a janela. [[Je ne suis pas sûr que ce soit possible.|Não tenho certeza de que seja possível.]] costuma ser uma recusa educada. Pergunte-se sempre o que a frase faz na conversa: pedir, recusar, aceitar, reclamar ou propor.' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'A primeira ideia nem sempre é a final',
        text: 'Nos diálogos, as pessoas podem mudar de ideia: [[On se voit lundi ?|A gente se vê na segunda?]] — [[Lundi, je ne peux pas…|Na segunda não posso…]] [[Mardi plutôt ?|Pode ser na terça?]] [2] Se a pergunta é sobre o que ficou combinado, a resposta é o que foi aceito no fim.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text: 'Use vídeos e exercícios de compreensão oral do TV5MONDE para praticar. [3] Como treino complementar, responda às quatro perguntas: onde, quem, o quê e como termina.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text: 'Não aparecem nas fontes desta página: a interpretação de [[tu|tu]]/[[vous|vous]], apelidos e frases curtas como sinais da relação entre interlocutores; a quarta pergunta sobre o desfecho como critério específico; a leitura de frases indiretas como pedidos ou recusas; a orientação de considerar apenas a decisão aceita no fim. As quatro perguntas, as falas da tabela e os demais exemplos são recursos didáticos, não um formato ou regras oficiais da prova. As dicas e os exemplos de treino são conselhos de preparação, não regras da prova.'
      }
    ]
  },

  fr: {
    title: 'Dialogues de la vie quotidienne',
    summary: 'Les conversations entre deux personnes font partie de la compréhension orale, qui évalue la capacité à comprendre le français parlé dans des situations de communication courante, comme les dialogues, les entrevues et les conversations téléphoniques. [1] Dans les dialogues, les questions peuvent porter sur le contexte, la relation entre les interlocuteurs et des détails pratiques de la situation. [2]',
    blocks: [
      { type: 'heading', text: 'Les quatre questions de tout dialogue' },
      {
        type: 'list',
        items: [
          'Où ? Une pharmacie, une banque ou un magasin. [2]',
          'Qui ? Un client et un vendeur, un patient et un professionnel de la santé, deux collègues. [2]',
          'Quoi ? Le problème ou la demande : échanger un produit, reporter un rendez-vous, demander un service à un collègue. [2]',
          'Comment ça finit ? Ce qui a été décidé ou ce qui va se passer ensuite.'
        ]
      },
      { type: 'heading', text: 'Tu ou vous : la relation entre les personnes' },
      { type: 'paragraph', text: 'Écoutez comment les personnes s’adressent l’une à l’autre. « Vous » et des formules comme « Madame » ou « je vous en prie » indiquent une relation formelle (client et employé, inconnus). « Tu », les surnoms et les phrases courtes indiquent des amis, la famille ou des collègues proches. Certaines questions peuvent porter justement là-dessus. [2]' },
      { type: 'heading', text: 'Situations fréquentes' },
      {
        type: 'table',
        headers: ['Situation', 'Expressions typiques'],
        rows: [
          ['Magasin [2]', 'Je peux vous aider ? · Vous faites quelle taille ? · Je voudrais l’échanger.'],
          ['Restaurant [2]', 'Vous avez réservé ? · L’addition, s’il vous plaît. · C’est pour emporter ?'],
          ['Chez le médecin [2]', 'Qu’est-ce qui vous amène ? · J’ai mal à la gorge. · Je vous fais une ordonnance.'],
          ['Banque, poste, administration [2]', 'Il me faut une pièce d’identité. · Remplissez ce formulaire. · C’est au guichet 4.'],
          ['Travail [2]', 'On fait le point ? · Je suis débordé. · Tu peux me remplacer jeudi ?']
        ]
      },
      { type: 'heading', text: 'L’intention : ce que la personne veut vraiment' },
      { type: 'paragraph', text: 'Souvent, la demande n’est pas formulée directement. « Il fait un peu froid ici, non ? » peut être une demande pour fermer la fenêtre. « Je ne suis pas sûr que ce soit possible. » est souvent un refus poli. Demandez-vous toujours ce que fait la phrase dans la conversation : demander, refuser, accepter, se plaindre ou proposer.' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'La première idée n’est pas toujours la bonne',
        text: 'Dans les dialogues, les personnes peuvent changer d’avis : « On se voit lundi ? — Lundi, je ne peux pas… Mardi plutôt ? ». [2] Si la question porte sur ce qui a été convenu, la réponse est ce qui a été accepté à la fin.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text: 'Utilisez les vidéos et les exercices de compréhension orale de TV5MONDE pour vous entraîner. [3] En complément, répondez aux quatre questions : où, qui, quoi et comment ça finit.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text: 'N’apparaissent pas dans les sources de cette fiche : l’interprétation de tu/vous, des surnoms et des phrases courtes comme indices de la relation entre les interlocuteurs ; la quatrième question sur le dénouement comme critère précis ; l’interprétation de phrases indirectes comme des demandes ou des refus ; la consigne de retenir uniquement la décision acceptée à la fin. Les quatre questions, les répliques du tableau et les autres exemples sont des ressources didactiques, et non un format ou des règles officielles de l’examen. Les conseils et les exemples d’entraînement sont des stratégies de préparation, pas des règles de l’examen.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  // A ordem é fixa: o texto cita cada fonte pelo número da posição ([1], [2]…). Ao mudar, atualize os [n].
  sources: [
    {
      title: 'Université de Sherbrooke – TCF : compréhension orale',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-orale'
    },
    {
      title: 'Open Exam Prep – Conversations with Pictures & Everyday Dialogues',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/listening-comprehension/listening-short-dialogues'
    },
    {
      title: 'TV5MONDE – Apprendre le français',
      url: 'https://apprendre.tv5monde.com/fr'
    }
  ]
}

export default content
