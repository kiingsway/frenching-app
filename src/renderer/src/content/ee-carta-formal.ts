import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ee-carta-formal',

  pt: {
    title: 'Carta formal e e-mail profissional em francês',
    summary:
      'Aprenda a escrever cartas formais e e-mails profissionais em francês canadense, organizando corretamente o assunto, a saudação, o corpo da mensagem e o encerramento. ' +
      'Você vai praticar fórmulas de cortesia, solicitações, reclamações e comunicações administrativas, evitando traduções literais e inadequações de formalidade.',
    blocks: [
      { type: 'heading', text: '1. Características da comunicação formal' },
      {
        type: 'paragraph',
        text:
          'Uma comunicação profissional exige clareza, objetividade, organização e cortesia. ' +
          'Diferentemente de uma mensagem informal, uma carta ou um e-mail profissional deve utilizar um registro respeitoso, frases bem construídas e vocabulário adequado ao destinatário. ' +
          'No francês canadense, o termo [[courriel|e-mail]] é amplamente utilizado. Na França, também é comum encontrar [[e-mail|e-mail]] e [[mail|e-mail]]. ' +
          'Independentemente do formato, o conteúdo precisa ser claro e adaptado à situação.'
      },
      { type: 'heading', text: '2. Estrutura de uma carta e de um e-mail profissional' },
      {
        type: 'table',
        headers: ['Elemento', 'Carta formal', 'E-mail profissional'],
        rows: [
          [
            '[[Identification|Identificação]]',
            '[[Lieu et date|Local e data]], informações do remetente e do destinatário, quando necessárias.',
            'Endereços eletrônicos dos destinatários nos campos apropriados.'
          ],
          [
            '[[Objet|Assunto]]',
            '[[Objet|Assunto]] indicando claramente o motivo da correspondência.',
            '[[Objet du courriel|Assunto do e-mail]] breve e específico.'
          ],
          [
            '[[Salutation|Saudação]]',
            '[[Madame, Monsieur,|Prezada senhora, prezado senhor,]] ou uma saudação personalizada.',
            '[[Bonjour, Madame,|Bom dia, senhora,]] ou [[Bonjour, Monsieur,|Bom dia, senhor,]].'
          ],
          [
            '[[Introduction|Introdução]]',
            'Apresentar o motivo da correspondência.',
            'Explicar diretamente por que está entrando em contato.'
          ],
          [
            '[[Développement|Desenvolvimento]]',
            'Detalhar a situação, apresentar informações e justificar a solicitação.',
            'Explicar o problema, fornecer detalhes e indicar o que espera do destinatário.'
          ],
          [
            '[[Conclusion|Conclusão]]',
            'Reafirmar a solicitação ou indicar a ação esperada.',
            'Informar os próximos passos ou solicitar uma resposta.'
          ],
          [
            '[[Formule de clôture|Encerramento]]',
            '[[Je vous prie d’agréer, Madame, mes salutations distinguées.|Queira aceitar, senhora, meus cumprimentos respeitosos.]]',
            '[[Cordialement,|Atenciosamente,]] ou [[Meilleures salutations,|Cordiais saudações,]].'
          ],
          [
            '[[Signature|Assinatura]]',
            'Nome e, quando necessário, dados de contato.',
            'Nome e, se pertinente, cargo e organização.'
          ]
        ]
      },
      { type: 'heading', text: '3. Vocabulário e fórmulas profissionais' },
      {
        type: 'table',
        headers: ['Função', 'Expressão em francês', 'Utilização'],
        rows: [
          [
            'Iniciar o contato',
            '[[Je me permets de vous écrire au sujet de...|Permito-me escrever a respeito de...]]',
            'Apresentar formalmente o motivo do contato.'
          ],
          [
            'Solicitar informações',
            '[[Je souhaiterais obtenir des renseignements concernant...|Gostaria de obter informações sobre...]]',
            'Fazer uma solicitação educada.'
          ],
          [
            'Encaminhar documentos',
            '[[Vous trouverez ci-joint les documents demandés.|Você encontrará em anexo os documentos solicitados.]]',
            'Informar que está enviando anexos.'
          ],
          [
            'Apresentar uma reclamação',
            '[[Je souhaite vous faire part de mon insatisfaction concernant...|Gostaria de expressar minha insatisfação em relação a...]]',
            'Comunicar um problema formalmente.'
          ],
          [
            'Solicitar providências',
            '[[Je vous serais reconnaissant de bien vouloir intervenir.|Eu lhe agradeceria se pudesse tomar as providências necessárias.]]',
            'Pedir uma ação ou solução.'
          ],
          [
            'Solicitar confirmação',
            '[[Je vous remercie de bien vouloir confirmer la réception de ce message.|Agradeço por confirmar o recebimento desta mensagem.]]',
            'Solicitar uma confirmação.'
          ],
          [
            'Aguardar resposta',
            '[[Dans l’attente de votre réponse, je vous remercie de votre attention.|Aguardando sua resposta, agradeço sua atenção.]]',
            'Preparar o encerramento da mensagem.'
          ],
          [
            'Disponibilizar-se',
            '[[Je reste à votre disposition pour tout renseignement complémentaire.|Permaneço à sua disposição para qualquer informação adicional.]]',
            'Demonstrar disponibilidade.'
          ]
        ]
      },
      { type: 'heading', text: '4. Exemplo prático: e-mail solicitando um reparo' },
      {
        type: 'paragraph',
        text:
          'Situação: você mora em um apartamento em Montreal e o aquecimento deixou de funcionar. Escreva ao administrador do imóvel solicitando um reparo e uma previsão para a visita de um técnico.'
      },
      {
        type: 'paragraph',
        text:
          '[[Objet : Demande de réparation du système de chauffage. Madame, Monsieur, Je vous écris au sujet du système de chauffage de mon appartement, situé au 3e étage de l’immeuble, au 1250, rue Saint-Denis, à Montréal. Depuis hier soir, le chauffage ne fonctionne plus, ce qui rend le logement particulièrement inconfortable, surtout pendant les périodes froides. Je souhaiterais donc savoir s’il serait possible de faire intervenir un technicien dans les meilleurs délais. Pourriez-vous également m’indiquer à quel moment une visite pourrait être organisée ? Je suis disponible en semaine après 17 h. Je vous remercie par avance de votre aide et reste dans l’attente de votre réponse. Cordialement, Lucas Ferreira.|Assunto: Solicitação de reparo do sistema de aquecimento. Prezada senhora, prezado senhor, Escrevo a respeito do sistema de aquecimento do meu apartamento, localizado no terceiro andar do edifício, no número 1250 da rua Saint-Denis, em Montreal. Desde ontem à noite, o aquecimento não está funcionando, o que torna o imóvel particularmente desconfortável, especialmente durante os períodos frios. Gostaria, portanto, de saber se seria possível enviar um técnico o mais breve possível. Poderiam também me informar quando uma visita poderia ser agendada? Estou disponível durante a semana depois das 17h. Agradeço antecipadamente pela ajuda e aguardo sua resposta. Atenciosamente, Lucas Ferreira.]]'
      },
      { type: 'heading', text: '5. Armadilhas comuns para brasileiros' },
      {
        type: 'list',
        items: [
          'Traduzir literalmente expressões portuguesas. [[Je vous écris pour vous demander...|Escrevo para solicitar...]] é natural, enquanto construções como [[Je suis écrivant pour...|Estou escrevendo para...]] não seguem a estrutura verbal usual do francês.',
          'Utilizar [[Salut|Oi]] em uma comunicação administrativa ou profissional com uma pessoa desconhecida. Prefira [[Bonjour|Olá ou bom dia]].',
          'Fazer pedidos muito diretos. [[Envoyez-moi le document.|Envie-me o documento.]] pode soar como uma ordem. Prefira [[Pourriez-vous m’envoyer le document ?|Poderia me enviar o documento?]].',
          'Escrever um assunto genérico, como [[Demande|Solicitação]]. Prefira um assunto específico, como [[Demande de rendez-vous|Solicitação de agendamento]].',
          'Confundir [[ci-joint|em anexo]] com [[ci-dessous|abaixo]]. O primeiro indica um documento anexado; o segundo introduz uma informação apresentada mais abaixo.',
          'Esquecer de mencionar os anexos. Se escrever [[Vous trouverez ci-joint les documents demandés.|Você encontrará em anexo os documentos solicitados.]], certifique-se de que realmente está enviando os documentos.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção ao verbo demander e à pessoa a quem se pede',
        text:
          'Para brasileiros, [[demander|pedir ou perguntar]] é um falso cognato: ele não tem o sentido de exigir ou de “demandar” alguém na justiça. Significa pedir ou perguntar. ' +
          'Na construção [[demander quelque chose à quelqu’un|pedir alguma coisa a alguém]], a pessoa a quem se pede vem depois do objeto, com a preposição [[à|a]], ou antes do verbo, como pronome. ' +
          'Por exemplo: [[Je demande un renseignement à la gestionnaire.|Peço uma informação à gerente.]] ou [[Je vous demande un renseignement.|Peço uma informação ao senhor.]] ' +
          'Já para pedir que alguém faça algo, usa-se [[demander à quelqu’un de faire quelque chose|pedir a alguém para fazer alguma coisa]], com [[à|a]] antes da pessoa e [[de|de]] antes do verbo.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que uma comunicação profissional precisa demonstrar',
        text:
          'Uma boa carta ou um bom e-mail profissional deve permitir que o destinatário compreenda rapidamente o motivo do contato e saiba qual providência é esperada. ' +
          'Utilize um assunto específico, apresente o contexto sem excesso de detalhes, formule seu pedido com cortesia e finalize adequadamente. ' +
          'Em uma avaliação escrita, a correção gramatical não é suficiente: a organização, a clareza, a adequação do registro e a realização do objetivo comunicativo também são importantes. ' +
          'Antes de finalizar, revise os pronomes de tratamento, as conjugações, as preposições, a pontuação e a coerência entre a solicitação e o encerramento.'
      }
    ]
  },

  fr: {
    title: 'La lettre formelle et le courriel professionnel',
    summary:
      'Apprenez à rédiger des lettres formelles et des courriels professionnels en français canadien en organisant correctement l’objet, la salutation, le corps du message et la formule de clôture. ' +
      'Vous pratiquerez les formules de politesse, les demandes de renseignements, les réclamations et les communications administratives, tout en évitant les traductions littérales et les erreurs de registre.',
    blocks: [
      { type: 'heading', text: '1. Les caractéristiques de la communication formelle' },
      {
        type: 'paragraph',
        text:
          'Une communication professionnelle exige de la clarté, de la précision, une bonne organisation et de la courtoisie. ' +
          'Contrairement à un message informel, une lettre ou un courriel professionnel doit employer un registre respectueux, des phrases bien construites et un vocabulaire adapté au destinataire. ' +
          'En français canadien, le terme courriel est largement utilisé. En France, on rencontre également e-mail et mail. ' +
          'Quel que soit le format, le contenu doit être clair et adapté à la situation.'
      },
      { type: 'heading', text: '2. La structure d’une lettre et d’un courriel professionnel' },
      {
        type: 'table',
        headers: ['Élément', 'Lettre formelle', 'Courriel professionnel'],
        rows: [
          [
            'Identification',
            'Lieu et date, coordonnées de l’expéditeur et du destinataire, lorsque nécessaire.',
            'Adresses électroniques des destinataires dans les champs appropriés.'
          ],
          [
            'Objet',
            'Objet indiquant clairement le motif de la correspondance.',
            'Objet du courriel bref et précis.'
          ],
          [
            'Salutation',
            'Madame, Monsieur, ou une formule personnalisée.',
            'Bonjour, Madame, ou Bonjour, Monsieur,'
          ],
          [
            'Introduction',
            'Présenter le motif de la correspondance.',
            'Expliquer directement pourquoi vous prenez contact.'
          ],
          [
            'Développement',
            'Détailler la situation, présenter les informations et justifier la demande.',
            'Expliquer le problème, fournir des précisions et indiquer ce que vous attendez du destinataire.'
          ],
          [
            'Conclusion',
            'Rappeler la demande ou indiquer l’action attendue.',
            'Préciser les prochaines étapes ou solliciter une réponse.'
          ],
          [
            'Formule de clôture',
            'Je vous prie d’agréer, Madame, mes salutations distinguées.',
            'Cordialement, ou Meilleures salutations,'
          ],
          ['Signature', 'Nom et, si nécessaire, coordonnées.', 'Nom et, le cas échéant, fonction et organisation.']
        ]
      },
      { type: 'heading', text: '3. Vocabulaire et formules professionnelles' },
      {
        type: 'table',
        headers: ['Fonction', 'Expression en français', 'Utilisation'],
        rows: [
          [
            'Commencer la communication',
            'Je me permets de vous écrire au sujet de...',
            'Présenter officiellement le motif du contact.'
          ],
          [
            'Demander des renseignements',
            'Je souhaiterais obtenir des renseignements concernant...',
            'Formuler une demande polie.'
          ],
          [
            'Transmettre des documents',
            'Vous trouverez ci-joint les documents demandés.',
            'Indiquer que des pièces jointes accompagnent le message.'
          ],
          [
            'Présenter une réclamation',
            'Je souhaite vous faire part de mon insatisfaction concernant...',
            'Signaler officiellement un problème.'
          ],
          [
            'Demander une intervention',
            'Je vous serais reconnaissant de bien vouloir intervenir.',
            'Demander une action ou une solution.'
          ],
          [
            'Demander une confirmation',
            'Je vous remercie de bien vouloir confirmer la réception de ce message.',
            'Solliciter une confirmation.'
          ],
          [
            'Attendre une réponse',
            'Dans l’attente de votre réponse, je vous remercie de votre attention.',
            'Préparer la clôture du message.'
          ],
          [
            'Se rendre disponible',
            'Je reste à votre disposition pour tout renseignement complémentaire.',
            'Montrer sa disponibilité.'
          ]
        ]
      },
      { type: 'heading', text: '4. Exemple pratique : courriel demandant une réparation' },
      {
        type: 'paragraph',
        text:
          'Situation : vous habitez dans un appartement à Montréal et le chauffage ne fonctionne plus. Écrivez à l’administrateur de l’immeuble pour demander une réparation et obtenir une date de visite d’un technicien.'
      },
      {
        type: 'paragraph',
        text:
          'Objet : Demande de réparation du système de chauffage. Madame, Monsieur, Je vous écris au sujet du système de chauffage de mon appartement, situé au 3e étage de l’immeuble, au 1250, rue Saint-Denis, à Montréal. Depuis hier soir, le chauffage ne fonctionne plus, ce qui rend le logement particulièrement inconfortable, surtout pendant les périodes froides. Je souhaiterais donc savoir s’il serait possible de faire intervenir un technicien dans les meilleurs délais. Pourriez-vous également m’indiquer à quel moment une visite pourrait être organisée ? Je suis disponible en semaine après 17 h. Je vous remercie par avance de votre aide et reste dans l’attente de votre réponse. Cordialement, Lucas Ferreira.'
      },
      { type: 'heading', text: '5. Pièges fréquents pour les lusophones' },
      {
        type: 'list',
        items: [
          'Traduire littéralement les expressions portugaises. « Je vous écris pour vous demander... » est naturel, tandis que des constructions comme « Je suis écrivant pour... » ne correspondent pas à la structure verbale habituelle du français.',
          'Utiliser « Salut » dans une communication administrative ou professionnelle avec une personne inconnue. Préférez « Bonjour ».',
          'Formuler des demandes trop directes. « Envoyez-moi le document. » peut ressembler à un ordre. Préférez « Pourriez-vous m’envoyer le document ? ».',
          'Rédiger un objet trop général, comme « Demande ». Préférez un objet précis, comme « Demande de rendez-vous ».',
          'Confondre « ci-joint » et « ci-dessous ». Le premier désigne un document annexé ; le second introduit une information présentée plus bas.',
          'Oublier de mentionner les pièces jointes. Lorsque vous écrivez « Vous trouverez ci-joint les documents demandés. », assurez-vous de joindre réellement les documents.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention au verbe demander et à la personne à qui l’on demande',
        text:
          'Pour les lusophones, « demander » est un faux ami : il n’a pas le sens d’exiger ni celui de poursuivre quelqu’un en justice, comme « demandar » en portugais. Il signifie poser une question ou formuler une demande. ' +
          'Dans la construction « demander quelque chose à quelqu’un », la personne à qui l’on s’adresse vient après l’objet, avec la préposition à, ou avant le verbe, sous forme de pronom. ' +
          'Par exemple : « Je demande un renseignement à la gestionnaire. » ou « Je vous demande un renseignement. » ' +
          'Pour demander à quelqu’un d’agir, on emploie « demander à quelqu’un de faire quelque chose », avec à devant la personne et de devant le verbe.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’une communication professionnelle doit démontrer',
        text:
          'Une bonne lettre ou un bon courriel professionnel doit permettre au destinataire de comprendre rapidement le motif du contact et de savoir quelle action est attendue. ' +
          'Utilisez un objet précis, présentez le contexte sans donner trop de détails, formulez votre demande avec courtoisie et terminez de manière appropriée. ' +
          'Dans une évaluation écrite, la correction grammaticale ne suffit pas : l’organisation, la clarté, l’adaptation du registre et la réalisation de l’objectif de communication sont également importantes. ' +
          'Avant de terminer, relisez les pronoms de politesse, les conjugaisons, les prépositions, la ponctuation et la cohérence entre la demande et la formule de clôture.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Rédaction des courriels : généralités – Banque de dépannage linguistique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22794/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/courriel/generalites-sur-la-redaction-du-courriel'
    },
    {
      title: 'Rédaction de l’objet : le courriel – Banque de dépannage linguistique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/25514/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/courriel/objet-du-courriel'
    },
    {
      title: 'Formules d’appel dans les courriels : règles d’usage – Banque de dépannage linguistique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24944/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/courriel/formules-dappel-dans-le-courriel'
    },
    {
      title: 'La salutation dans le courriel : exemples de formules – Banque de dépannage linguistique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24946/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/courriel/formules-de-salutation-dans-le-courriel'
    },
    {
      title: 'L’introduction de la lettre – Banque de dépannage linguistique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22344/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/lettre/introduction-de-la-lettre'
    }
  ]
}

export default content
