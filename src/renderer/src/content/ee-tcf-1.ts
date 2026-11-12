import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-tcf-1',

  pt: {
    title: 'TCF – Tarefa 1: escrever mensagens curtas e eficazes',
    summary:
      'Aprenda a escrever mensagens curtas em francês para convidar alguém, solicitar informações, fazer pedidos ou comunicar acontecimentos. ' +
      'Você vai praticar a organização das informações, a escolha do tom adequado ao destinatário e as expressões necessárias para produzir mensagens claras, naturais e completas, respeitando o limite de palavras do TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. O que a tarefa exige?' },
      {
        type: 'paragraph',
        text:
          'Na [[Tâche 1|Tarefa 1]] ' +
          'da expressão escrita do TCF Canada, você precisa redigir uma mensagem para descrever, contar e/ou explicar alguma coisa a uma ou várias pessoas. ' +
          'O enunciado informa quem receberá a mensagem e qual é a relação entre você e o destinatário. A resposta deve ter entre 60 e 120 palavras. ' +
          'As situações podem envolver convites, pedidos, informações, descrições de lugares ou objetos e relatos de acontecimentos. ' +
          'O mais importante é responder ao que foi solicitado, transmitir todas as informações necessárias e utilizar uma linguagem adequada à situação.'
      },
      { type: 'heading', text: '2. Antes de escrever, interprete o enunciado' },
      {
        type: 'list',
        items: [
          'Identifique o destinatário: você está escrevendo para um amigo, um colega de trabalho, um vizinho ou uma pessoa desconhecida?',
          'Descubra o objetivo da mensagem: convidar, pedir, informar, descrever, explicar ou contar alguma coisa.',
          'Identifique todas as informações solicitadas. Se o enunciado pedir data, horário, local e motivo, não deixe nenhum desses elementos de fora.',
          'Escolha o registro adequado: informal para amigos e familiares; formal ou neutro para desconhecidos e situações administrativas.',
          'Verifique o formato esperado: pode ser uma mensagem pessoal, um e-mail, uma resposta ou um texto curto em outro contexto de comunicação.'
        ]
      },
      { type: 'heading', text: '3. Estrutura de uma mensagem curta' },
      {
        type: 'paragraph',
        text:
          'Uma mensagem bem organizada geralmente apresenta uma saudação, o motivo do contato, as informações principais e um encerramento apropriado. ' +
          'Nem todas as situações exigem uma saudação ou assinatura, mas esses elementos ajudam quando o formato é uma mensagem pessoal ou um e-mail.'
      },
      {
        type: 'table',
        headers: ['Função', 'Expressão em francês', 'Como utilizar'],
        rows: [
            [
              'Saudação informal',
              '[[Salut, Camille !|Oi, Camille!]]',
              'Cumprimentar alguém próximo.'
            ],
            [
              'Saudação formal',
              '[[Bonjour, Madame,|Bom dia, senhora,]]',
              'Cumprimentar uma pessoa em contexto formal.'
            ],
            [
              'Apresentar o motivo',
              '[[Je t’écris pour t’inviter à...|Estou escrevendo para te convidar para...]]',
              'Explicar por que está enviando a mensagem.'
            ],
            [
              'Fazer um pedido',
              '[[Pourrais-tu me renseigner sur... ?|Você poderia me informar sobre...?]]',
              'Solicitar informações educadamente.'
            ],
            [
              'Comunicar uma informação',
              '[[Je voulais te prévenir que...|Queria te avisar que...]]',
              'Transmitir uma novidade ou comunicar uma mudança.'
            ],
            [
              'Acrescentar detalhes',
              '[[L’activité aura lieu samedi prochain à 18 h.|A atividade acontecerá no próximo sábado às 18h.]]',
              'Informar data, horário e local.'
            ],
            [
              'Encerrar informalmente',
              '[[À bientôt !|Até breve!]]',
              'Finalizar uma mensagem para alguém próximo.'
            ],
            [
              'Encerrar formalmente',
              '[[Cordialement,|Atenciosamente,]]',
              'Finalizar um e-mail formal ou profissional.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemplos de situações possíveis' },
      {
        type: 'table',
        headers: ['Situação', 'Expressão útil em francês', 'Informações necessárias'],
        rows: [
            [
              'Convite',
              '[[Je t’invite à venir chez moi samedi.|Convido você para vir à minha casa no sábado.]]',
              'Motivo, data, horário, local e confirmação de presença.'
            ],
            [
              'Pedido',
              '[[Pourrais-tu m’envoyer les documents par courriel ?|Você poderia me enviar os documentos por e-mail?]]',
              'O que está sendo solicitado, por que e para quando.'
            ],
            [
              'Informação',
              '[[Je vous informe que le rendez-vous est reporté.|Informo que o compromisso foi adiado.]]',
              'O que aconteceu, qual é a mudança e quais são as novas condições.'
            ],
            [
              'Descrição',
              '[[Mon nouvel appartement est lumineux et situé près du métro.|Meu novo apartamento é iluminado e fica perto do metrô.]]',
              'Características, localização e detalhes relevantes.'
            ]
        ]
      },
      { type: 'heading', text: '5. Exemplo prático: escrever um convite' },
      {
        type: 'paragraph',
        text:
          'Enunciado fictício: um amigo quer saber como você pretende comemorar a mudança para seu novo apartamento. ' +
          'Escreva uma mensagem convidando-o para a comemoração e fornecendo as informações necessárias.'
      },
      { type: 'paragraph', text: 'Assunto da mensagem:' },
      { type: 'paragraph', text: '[[Une soirée pour fêter mon nouvel appartement|Uma noite para comemorar meu novo apartamento]]' },
      {
        type: 'paragraph',
        text:
          '[[Salut Camille !|Oi, Camille!]] ' +
          '[[J’organise un petit souper chez moi samedi prochain, à partir de 18 h, pour fêter mon nouvel appartement.|Estou organizando um pequeno jantar na minha casa no próximo sábado, a partir das 18h, para comemorar meu novo apartamento.]] ' +
          '[[J’habite près de la station de métro Jean-Talon, donc tu peux venir facilement en métro.|Moro perto da estação de metrô Jean-Talon, então você pode vir facilmente de metrô.]] ' +
          '[[Chacun peut apporter quelque chose à manger ou à boire, mais ce n’est pas obligatoire.|Cada um pode trazer alguma coisa para comer ou beber, mas não é obrigatório.]] ' +
          '[[Peux-tu me confirmer ta présence avant jeudi ?|Você pode me confirmar sua presença até quinta-feira?]] ' +
          '[[J’espère que tu pourras venir !|Espero que possa vir!]] [[À bientôt, Mariana.|Até breve, Mariana.]]'
      },
      { type: 'heading', text: '6. Armadilhas comuns para brasileiros' },
      {
        type: 'list',
        items: [
          
            'Utilizar sempre o tratamento informal. [[Tu|Você, tratamento informal]] é adequado para amigos, mas [[vous|você ou vocês, tratamento formal]] ' +
            'é geralmente mais apropriado para pessoas desconhecidas e situações profissionais.',
          'Esquecer informações importantes. Um convite sem data, horário ou local pode não cumprir completamente o objetivo da mensagem.',
          'Escrever frases excessivamente longas. Prefira frases claras, conectadas e com uma ideia principal por vez.',
          
            'Confundir uma solicitação com uma ordem. Expressões como [[Pourrais-tu... ?|Você poderia...?]] e [[Serait-il possible de... ?|Seria possível...?]] ' +
            'tornam o pedido mais educado.',
          
            'Utilizar um encerramento inadequado. [[À bientôt|Até breve]] combina com uma mensagem informal, enquanto [[Cordialement|Atenciosamente]] ' +
            'é mais apropriado para uma comunicação profissional.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com o falso cognato attendre',
        text:
          'Um erro típico de brasileiros é interpretar [[attendre|esperar]] como atender. Por exemplo, [[J’attends ta réponse.|Estou aguardando sua resposta.]] ' +
          'não significa que você está atendendo alguém. Para dizer atender ao telefone, utilize [[répondre au téléphone|atender ao telefone]]. ' +
          'Aprenda o significado das palavras dentro de frases completas para evitar traduções automáticas do português.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que a prova realmente cobra',
        text:
          'A orientação oficial do TCF Canada estabelece um mínimo de 60 e um máximo de 120 palavras para esta tarefa. ' +
          'Você precisa comunicar a mensagem com clareza, fornecer as informações solicitadas, descrever, contar ou explicar quando necessário e utilizar vocabulário e estruturas adequados ao destinatário. ' +
          'Não escreva um texto argumentativo longo quando a situação exige apenas uma mensagem simples. ' +
          'Reserve um momento para verificar se respondeu a todos os pontos do enunciado e confira o número de palavras, os verbos, os artigos, as preposições e a concordância. ' +
          'Uma mensagem curta, completa e natural é melhor do que um texto longo cheio de informações desnecessárias.'
      }
    ]
  },

  fr: {
    title: 'TCF – Tâche 1 : rédiger des messages courts et efficaces',
    summary:
      'Apprenez à rédiger de courts messages en français pour inviter quelqu’un, demander des renseignements, formuler une demande ou communiquer des événements. ' +
      'Vous pratiquerez l’organisation des informations, le choix du registre adapté au destinataire et les expressions nécessaires pour produire des messages clairs, naturels et complets, tout en respectant le nombre de mots exigé au TCF Canada.',
    blocks: [
      { type: 'heading', text: '1. Que demande cette tâche ?' },
      {
        type: 'paragraph',
        text:
          'Dans la tâche 1 de l’expression écrite du TCF Canada, vous devez rédiger un message pour décrire, raconter et/ou expliquer quelque chose à une ou plusieurs personnes. ' +
          'La consigne précise qui recevra votre message et quelle est votre relation avec le destinataire. Votre réponse doit compter entre 60 et 120 mots. ' +
          'Les situations peuvent porter sur des invitations, des demandes, des informations, des descriptions de lieux ou d’objets et des récits d’événements. ' +
          'Le plus important est de répondre à la demande, de transmettre toutes les informations nécessaires et d’utiliser un langage adapté à la situation.'
      },
      { type: 'heading', text: '2. Avant de rédiger, analysez la consigne' },
      {
        type: 'list',
        items: [
          'Identifiez le destinataire : écrivez-vous à un ami, à un collègue, à un voisin ou à une personne que vous ne connaissez pas ?',
          'Déterminez l’objectif du message : inviter, demander, informer, décrire, expliquer ou raconter quelque chose.',
          'Repérez toutes les informations demandées. Si la consigne exige une date, une heure, un lieu et une raison, n’oubliez aucun de ces éléments.',
          'Choisissez le registre approprié : informel pour les amis et la famille ; formel ou neutre pour les inconnus et les situations administratives.',
          'Vérifiez le format attendu : il peut s’agir d’un message personnel, d’un courriel, d’une réponse ou d’un court texte dans un autre contexte de communication.'
        ]
      },
      { type: 'heading', text: '3. Structure d’un message court' },
      {
        type: 'paragraph',
        text:
          'Un message bien organisé comporte généralement une salutation, la raison du contact, les informations principales et une formule de clôture appropriée. ' +
          'Toutes les situations n’exigent pas une salutation ou une signature, mais ces éléments sont utiles lorsqu’il s’agit d’un message personnel ou d’un courriel.'
      },
      {
        type: 'table',
        headers: ['Fonction', 'Expression en français', 'Utilisation'],
        rows: [
            [
              'Salutation informelle',
              'Salut, Camille !',
              'Saluer une personne proche.'
            ],
            [
              'Salutation formelle',
              'Bonjour, Madame,',
              'Saluer une personne dans un contexte formel.'
            ],
            [
              'Présenter la raison',
              'Je t’écris pour t’inviter à...',
              'Expliquer pourquoi vous envoyez le message.'
            ],
            [
              'Faire une demande',
              'Pourrais-tu me renseigner sur... ?',
              'Demander des informations poliment.'
            ],
            [
              'Communiquer une information',
              'Je voulais te prévenir que...',
              'Transmettre une nouvelle ou annoncer un changement.'
            ],
            [
              'Ajouter des détails',
              'L’activité aura lieu samedi prochain à 18 h.',
              'Préciser la date, l’heure et le lieu.'
            ],
            [
              'Terminer de manière informelle',
              'À bientôt !',
              'Terminer un message destiné à une personne proche.'
            ],
            [
              'Terminer de manière formelle',
              'Cordialement,',
              'Terminer un courriel professionnel ou formel.'
            ]
        ]
      },
      { type: 'heading', text: '4. Exemples de situations possibles' },
      {
        type: 'table',
        headers: ['Situation', 'Expression utile', 'Informations nécessaires'],
        rows: [
            [
              'Invitation',
              'Je t’invite à venir chez moi samedi.',
              'La raison, la date, l’heure, le lieu et la confirmation de présence.'
            ],
            [
              'Demande',
              'Pourrais-tu m’envoyer les documents par courriel ?',
              'Ce qui est demandé, pourquoi et pour quelle date.'
            ],
            [
              'Information',
              'Je vous informe que le rendez-vous est reporté.',
              'Ce qui s’est passé, le changement et les nouvelles conditions.'
            ],
            [
              'Description',
              'Mon nouvel appartement est lumineux et situé près du métro.',
              'Les caractéristiques, l’emplacement et les détails pertinents.'
            ]
        ]
      },
      { type: 'heading', text: '5. Exemple pratique : rédiger une invitation' },
      {
        type: 'paragraph',
        text:
          'Consigne fictive : un ami souhaite savoir comment vous comptez célébrer votre installation dans votre nouvel appartement. ' +
          'Écrivez-lui un message pour l’inviter à la célébration et lui fournir les informations nécessaires.'
      },
      { type: 'paragraph', text: 'Objet du message :' },
      { type: 'paragraph', text: 'Une soirée pour fêter mon nouvel appartement' },
      {
        type: 'paragraph',
        text:
          'Salut Camille ! J’organise un petit souper chez moi samedi prochain, à partir de 18 h, pour fêter mon nouvel appartement. ' +
          'J’habite près de la station de métro Jean-Talon, donc tu peux venir facilement en métro. ' +
          'Chacun peut apporter quelque chose à manger ou à boire, mais ce n’est pas obligatoire. Peux-tu me confirmer ta présence avant jeudi ? ' +
          'J’espère que tu pourras venir ! À bientôt, Mariana.'
      },
      { type: 'heading', text: '6. Pièges fréquents pour les lusophones' },
      {
        type: 'list',
        items: [
          
            'Toujours utiliser le tutoiement. ' +
            '« Tu » convient aux amis, mais « vous » est généralement plus approprié avec les personnes inconnues et dans les situations professionnelles.',
          'Oublier des informations importantes. Une invitation sans date, heure ou lieu ne répond pas complètement à son objectif.',
          'Écrire des phrases excessivement longues. Privilégiez des phrases claires, reliées entre elles et présentant une idée principale à la fois.',
          'Confondre une demande et un ordre. Des expressions comme « Pourrais-tu... ? » et « Serait-il possible de... ? » rendent la demande plus polie.',
          
            'Choisir une formule de clôture inadaptée. ' +
            '« À bientôt » convient à un message informel, tandis que « Cordialement » est plus approprié à une communication professionnelle.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au faux ami attendre',
        text:
          'Une erreur typique chez les lusophones consiste à interpréter « attendre » comme le portugais « atender ». En réalité, « attendre » signifie patienter. ' +
          'Par exemple, « J’attends ta réponse. » signifie que vous attendez une réponse de quelqu’un. ' +
          'Pour dire que vous répondez au téléphone, utilisez « répondre au téléphone ». ' +
          'Apprenez le sens des mots dans des phrases complètes afin d’éviter les traductions automatiques du portugais.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que l’examen évalue réellement',
        text:
          'Les consignes officielles du TCF Canada établissent un minimum de 60 et un maximum de 120 mots pour cette tâche. ' +
          'Vous devez communiquer clairement, fournir les informations demandées, décrire, raconter ou expliquer lorsque cela est nécessaire et utiliser un vocabulaire ainsi que des structures adaptés au destinataire. ' +
          'Ne rédigez pas un long texte argumentatif lorsque la situation exige simplement un message. ' +
          'Prenez le temps de vérifier que vous avez répondu à tous les points de la consigne et contrôlez le nombre de mots, les verbes, les articles, les prépositions et les accords. ' +
          'Un message court, complet et naturel vaut mieux qu’un texte long contenant des informations inutiles.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'TCF Canada – Présentation des épreuves – France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'Exemple d’épreuve d’expression écrite TCF TP, Québec et Canada – France Éducation international',
      url: 'https://www.france-education-international.fr/document/tcf-tp-qc-ca-exemple-epreuve-ee'
    }
  ]
}

export default content
