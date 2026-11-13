import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-informacoes',

  pt: {
    title: 'Pedir e dar informações',
    summary:
      'Aprenda a solicitar informações de maneira educada, fazer perguntas específicas e fornecer respostas claras em francês. ' +
      'Pratique situações cotidianas e profissionais, como perguntar sobre horários, preços, serviços, inscrições, documentos e procedimentos, utilizando diferentes níveis de formalidade.',
    blocks: [
      { type: 'heading', text: '1. Solicitar informações com educação' },
      {
        type: 'paragraph',
        text:
          'Para pedir informações, é importante adaptar sua linguagem ao interlocutor e à situação. ' +
          'Em contextos profissionais, administrativos ou ao conversar com desconhecidos, prefira expressões mais educadas, utilizando [[vous|você formal]]. ' +
          'Nesses pedidos, [[renseignement|informação / esclarecimento]] e [[information|informação]] têm sentidos muito próximos e são intercambiáveis em vários contextos. ' +
          'Information designa primeiro a ação de informar, como em [[une séance d’information|uma sessão informativa]] ' +
          'e [[un bureau d’information|um balcão de informações]].'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado', 'Utilização'],
        rows: [
            [
              '[[Je voudrais obtenir des renseignements sur...|Gostaria de obter informações sobre...]]',
              'Solicitação educada de informações.',
              'Formal / neutro'
            ],
            [
              '[[Pourriez-vous me renseigner sur... ?|Você poderia me informar sobre...?]]',
              'Pedido direto e cortês.',
              'Formal / neutro'
            ],
            [
              '[[J’aimerais savoir si...|Gostaria de saber se...]]',
              'Introduzir uma pergunta indireta.',
              'Formal / neutro'
            ],
            [
              '[[Est-ce que vous pourriez me préciser... ?|Você poderia me esclarecer...?]]',
              'Solicitar um detalhe específico.',
              'Formal / neutro'
            ],
            [
              '[[Je voudrais savoir comment...|Gostaria de saber como...]]',
              'Perguntar sobre um procedimento.',
              'Formal / neutro'
            ],
            [
              '[[Tu peux me dire où... ?|Você pode me dizer onde...?]]',
              'Solicitar uma informação informalmente.',
              'Informal'
            ]
        ]
      },
      { type: 'heading', text: '2. Fazer perguntas específicas' },
      {
        type: 'paragraph',
        text:
          'Uma boa solicitação deve ser objetiva e permitir que o interlocutor forneça uma resposta útil. ' +
          'Identifique primeiro qual informação você precisa: preço, horário, localização, condições, documentos necessários ou prazo. ' +
          'Utilize palavras interrogativas e estruturas adequadas para cada situação.'
      },
      {
        type: 'list',
        items: [
          '[[Combien coûte l’inscription ?|Quanto custa a inscrição?]]',
          '[[Quels documents faut-il fournir ?|Quais documentos é necessário apresentar?]]',
          '[[À quelle heure le service ferme-t-il ?|A que horas o serviço fecha?]]',
          '[[Où se trouve le bureau d’accueil ?|Onde fica o balcão de atendimento?]]',
          '[[Quelles sont les conditions d’admission ?|Quais são as condições de admissão?]]',
          '[[Y a-t-il des frais supplémentaires ?|Existem taxas adicionais?]]',
          '[[Est-ce que je dois prendre rendez-vous ?|Preciso marcar um horário?]]',
          '[[Quelle est la date limite pour déposer le dossier ?|Qual é o prazo final para entregar o processo?]]'
        ]
      },
      { type: 'heading', text: '3. Dar informações e esclarecer dúvidas' },
      {
        type: 'paragraph',
        text:
          'Ao fornecer informações, procure responder diretamente à pergunta e acrescentar detalhes relevantes quando necessário. ' +
          'Em situações profissionais ou administrativas, você pode informar horários, explicar procedimentos, indicar documentos e orientar o interlocutor sobre os próximos passos. ' +
          'Para organizar sua resposta, utilize expressões como [[Tout d’abord|Primeiramente]], [[Ensuite|Em seguida]], [[Il faut également...|Também é necessário...]] ' +
          'e [[Pour résumer|Resumindo]].'
      },
      {
        type: 'list',
        items: [
          '[[Le service est ouvert du lundi au vendredi, de 9 h à 17 h.|O serviço funciona de segunda a sexta-feira, das 9h às 17h.]]',
          '[[Vous devez remplir ce formulaire et fournir une preuve d’adresse.|Você deve preencher este formulário e apresentar um comprovante de endereço.]]',
          '[[L’inscription se fait entièrement en ligne.|A inscrição é feita totalmente pela internet.]]',
          '[[La prochaine séance d’information aura lieu la semaine prochaine.|A próxima sessão informativa acontecerá na semana que vem.]]',
          '[[Le centre se trouve juste en face de la bibliothèque.|O centro fica bem em frente à biblioteca.]]',
          '[[Vous pouvez nous écrire par courriel si vous avez d’autres questions.|Você pode nos escrever por e-mail caso tenha outras perguntas.]]'
        ]
      },
      { type: 'heading', text: '4. Confirmar informações e pedir esclarecimentos' },
      {
        type: 'paragraph',
        text:
          'Nem sempre a primeira resposta esclarece todas as dúvidas. ' +
          'Você pode confirmar o que entendeu, pedir que o interlocutor repita uma informação ou solicitar um exemplo. ' +
          'Essas estratégias demonstram atenção e ajudam a manter a conversa organizada. ' +
          'Utilize expressões como [[Si je comprends bien...|Se entendi bem...]], [[Pourriez-vous répéter, s’il vous plaît ?|Você poderia repetir, por favor?]], [[Qu’entendez-vous par...?|O que você quer dizer com...?]] ' +
          'e [[Donc, si je résume...|Então, resumindo...]]'
      },
      {
        type: 'paragraph',
        text: 'Exemplo de diálogo: uma pessoa entra em contato com um centro comunitário de Toronto para obter informações sobre as inscrições em um curso de francês.'
      },
      {
        type: 'paragraph',
        text:
          '[[Bonjour, je voudrais obtenir des renseignements sur les cours de français.|Olá, gostaria de obter informações sobre os cursos de francês.]] ' +
          '[[Bien sûr.|Claro.]] [[Les cours ont lieu deux soirs par semaine, de 18 h à 20 h.|As aulas acontecem duas noites por semana, das 18h às 20h.]] ' +
          '[[Est-ce que le matériel est compris dans les frais d’inscription ?|O material está incluído na taxa de inscrição?]] ' +
          '[[Oui, les manuels sont inclus.|Sim, os livros estão incluídos.]] [[L’inscription se fait en ligne.|A inscrição é feita pela internet.]] [[Merci.|Obrigado.]] ' +
          '[[Pourriez-vous me préciser la date limite d’inscription ?|Você poderia me informar o prazo final para inscrição?]] ' +
          '[[Vous devez vous inscrire avant la fin du mois.|Você precisa se inscrever antes do final do mês.]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não confunda demander e poser',
        text:
          'Um erro comum de brasileiros é traduzir literalmente perguntar uma pergunta utilizando [[demander une question|demander une question]]. ' +
          'Essa construção é um decalque do inglês e deve ser evitada. Para formular uma pergunta, utilize [[poser une question|fazer uma pergunta]]. ' +
          'Já [[demander un renseignement|pedir uma informação]] e [[demander des renseignements à quelqu’un|pedir informações a alguém]] são construções corretas. ' +
          'Outra atenção importante: não limite sua conversa a perguntas genéricas. ' +
          'Em vez de perguntar somente [[Pouvez-vous me donner des informations ?|Você pode me dar informações?]], seja específico sobre o que precisa saber.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'No TCF Canada, a segunda tarefa da expressão oral consiste em interagir com um interlocutor em uma situação cotidiana para obter informações. ' +
          'A instrução especifica a situação e os papéis de cada participante. No TEF Canada, a seção A da expressão oral tem como objetivo obter informações. ' +
          'Pratique situações como procurar uma moradia, consultar horários de transporte, conhecer um serviço, perguntar sobre uma formação ou obter informações sobre uma inscrição. ' +
          'Prepare perguntas variadas, escute as respostas, faça perguntas complementares e confirme os detalhes importantes. ' +
          'O objetivo não é apenas formular perguntas, mas manter uma interação natural e conseguir as informações necessárias.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A OQLF confirma: [[renseignement|informação / esclarecimento]] e [[information|informação]] são próximos e intercambiáveis em vários contextos ([[Vous permettez que je vous demande un renseignement ?|Posso lhe pedir uma informação?]]); [[une réunion d’information|uma reunião informativa]] usa information; o plural [[informations|informações]] no sentido de renseignements é amplamente atestado e aceitável; [[demander une question|demander une question]] é decalque do inglês, e a forma correta é [[poser une question|fazer uma pergunta]]; e, numa carta, um pedido pode começar por [[Après avoir consulté votre site Web, j’aimerais obtenir de la documentation relative à...|Depois de consultar seu site, gostaria de obter documentação sobre...]]. ' +
          'O manual do examinador do TCF confirma a tarefa 2 do TCF Canada (obter informações numa situação cotidiana de comunicação não formal, com o estatuto do interlocutor indicado), e o PDF de exemplos de sujets do TEF confirma a seção A (telefonar para obter informações sobre um anúncio, com cerca de dez perguntas). ' +
          'Não têm fonte: as expressões das tabelas e das listas, [[un bureau d’information|um balcão de informações]] (a OQLF cita [[le bureau des renseignements|o balcão de informações]] e [[un kiosque d’information touristique|um quiosque de informação turística]]), os diálogos, os exemplos e as estratégias de preparação. As fórmulas de mise en attente da OQLF não são usadas na página. ' +
          'Não existe exigência oficial de utilizar as expressões apresentadas ou seguir exatamente a sequência sugerida. ' +
          'Essas recomendações são conselhos de preparação, não regras oficiais dos exames.'
      }
    ]
  },

  fr: {
    title: 'Demander et donner des renseignements',
    summary:
      'Apprenez à demander des renseignements poliment, à poser des questions précises et à fournir des réponses claires en français. ' +
      'Entraînez-vous dans des situations quotidiennes et professionnelles, notamment pour demander des horaires, des prix, des informations sur des services, des inscriptions, des documents et des procédures, en adaptant votre niveau de langue au contexte.',
    blocks: [
      { type: 'heading', text: '1. Demander des renseignements poliment' },
      {
        type: 'paragraph',
        text:
          'Pour demander des renseignements, il est important d’adapter son langage à son interlocuteur et à la situation. ' +
          'Dans les contextes professionnels, administratifs ou lorsqu’on s’adresse à des inconnus, privilégiez des expressions polies en utilisant vous. ' +
          'Dans ces demandes, renseignement et information ont des sens très proches et sont interchangeables dans plusieurs contextes. ' +
          'On trouve également le mot information, notamment dans des expressions comme une séance d’information et un bureau d’information.'
      },
      {
        type: 'table',
        headers: ['Expression en français', 'Signification', 'Utilisation'],
        rows: [
            [
              'Je voudrais obtenir des renseignements sur...',
              'Demande polie de renseignements.',
              'Formel / neutre'
            ],
            [
              'Pourriez-vous me renseigner sur... ?',
              'Demande directe et courtoise.',
              'Formel / neutre'
            ],
            [
              'J’aimerais savoir si...',
              'Introduire une question indirecte.',
              'Formel / neutre'
            ],
            [
              'Est-ce que vous pourriez me préciser... ?',
              'Demander un détail précis.',
              'Formel / neutre'
            ],
            [
              'Je voudrais savoir comment...',
              'Demander des informations sur une procédure.',
              'Formel / neutre'
            ],
            [
              'Tu peux me dire où... ?',
              'Demander un renseignement de manière informelle.',
              'Informel'
            ]
        ]
      },
      { type: 'heading', text: '2. Poser des questions précises' },
      {
        type: 'paragraph',
        text:
          'Une bonne demande doit être claire et permettre à l’interlocuteur de fournir une réponse utile. ' +
          'Identifiez d’abord le renseignement dont vous avez besoin : prix, horaires, emplacement, conditions, documents nécessaires ou échéance. ' +
          'Utilisez des mots interrogatifs et des structures adaptées à chaque situation.'
      },
      {
        type: 'list',
        items: [
          'Combien coûte l’inscription ?',
          'Quels documents faut-il fournir ?',
          'À quelle heure le service ferme-t-il ?',
          'Où se trouve le bureau d’accueil ?',
          'Quelles sont les conditions d’admission ?',
          'Y a-t-il des frais supplémentaires ?',
          'Est-ce que je dois prendre rendez-vous ?',
          'Quelle est la date limite pour déposer le dossier ?'
        ]
      },
      { type: 'heading', text: '3. Donner des renseignements et répondre aux questions' },
      {
        type: 'paragraph',
        text:
          'Lorsque vous fournissez des renseignements, essayez de répondre directement à la question et d’ajouter des précisions pertinentes au besoin. ' +
          'Dans les situations professionnelles ou administratives, vous pouvez indiquer des horaires, expliquer des procédures, préciser les documents nécessaires et orienter votre interlocuteur vers les prochaines étapes. ' +
          'Pour organiser votre réponse, utilisez des expressions comme tout d’abord, ensuite, il faut également et pour résumer.'
      },
      {
        type: 'list',
        items: [
          'Le service est ouvert du lundi au vendredi, de 9 h à 17 h.',
          'Vous devez remplir ce formulaire et fournir une preuve d’adresse.',
          'L’inscription se fait entièrement en ligne.',
          'La prochaine séance d’information aura lieu la semaine prochaine.',
          'Le centre se trouve juste en face de la bibliothèque.',
          'Vous pouvez nous écrire par courriel si vous avez d’autres questions.'
        ]
      },
      { type: 'heading', text: '4. Confirmer les renseignements et demander des précisions' },
      {
        type: 'paragraph',
        text:
          'La première réponse ne permet pas toujours de dissiper tous les doutes. ' +
          'Vous pouvez confirmer ce que vous avez compris, demander à votre interlocuteur de répéter une information ou solliciter un exemple. ' +
          'Ces stratégies démontrent votre attention et permettent de maintenir une conversation structurée. ' +
          'Utilisez des expressions comme si je comprends bien, pourriez-vous répéter, s’il vous plaît ?, qu’entendez-vous par… ? et donc, si je résume…'
      },
      {
        type: 'paragraph',
        text: 'Exemple de dialogue : une personne communique avec un centre communautaire de Toronto pour obtenir des renseignements sur les inscriptions à un cours de français.'
      },
      {
        type: 'paragraph',
        text:
          'Bonjour, je voudrais obtenir des renseignements sur les cours de français. Bien sûr. Les cours ont lieu deux soirs par semaine, de 18 h à 20 h. ' +
          'Est-ce que le matériel est compris dans les frais d’inscription ? Oui, les manuels sont inclus. L’inscription se fait en ligne. Merci. ' +
          'Pourriez-vous me préciser la date limite d’inscription ? Vous devez vous inscrire avant la fin du mois.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne confondez pas demander et poser',
        text:
          'Une erreur fréquente chez les lusophones consiste à traduire littéralement l’expression demander une question en utilisant « demander une question ». ' +
          'Cette tournure, calquée sur l’anglais, est à éviter. Pour formuler une question, utilisez poser une question. ' +
          'En revanche, demander un renseignement et demander des renseignements à quelqu’un sont des constructions correctes. ' +
          'Faites également attention à ne pas limiter votre conversation à des questions trop générales. ' +
          'Au lieu de demander seulement « Pouvez-vous me donner des informations ? », soyez précis sur ce que vous souhaitez savoir.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Au TCF Canada, la deuxième tâche de l’expression orale consiste à interagir avec un interlocuteur dans une situation de la vie quotidienne afin d’obtenir des renseignements. ' +
          'La consigne précise la situation et les rôles de chaque participant. ' +
          'Au TEF Canada, la section A de l’expression orale a pour objectif d’obtenir des renseignements. ' +
          'Entraînez-vous avec des situations comme la recherche d’un logement, la consultation des horaires de transport, la découverte d’un service, une demande de renseignements sur une formation ou une inscription. ' +
          'Préparez différentes questions, écoutez les réponses, posez des questions complémentaires et confirmez les détails importants. ' +
          'L’objectif n’est pas seulement de poser des questions, mais de maintenir une interaction naturelle et d’obtenir les renseignements nécessaires.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme : renseignement et information sont proches et interchangeables dans plusieurs contextes (Vous permettez que je vous demande un renseignement ?) ; une réunion d’information emploie information ; le pluriel informations au sens de renseignements est largement attesté et acceptable ; demander une question est un calque de l’anglais, et la forme correcte est poser une question ; et, dans une lettre, une demande peut commencer par Après avoir consulté votre site Web, j’aimerais obtenir de la documentation relative à.... ' +
          'Le manuel de l’examinateur du TCF confirme la tâche 2 du TCF Canada (obtenir des informations dans une situation de la vie quotidienne dans un cadre non formel, le statut de l’interlocuteur étant précisé), et le PDF d’exemples de sujets du TEF confirme la section A (téléphoner pour obtenir des informations sur une annonce, avec une dizaine de questions). ' +
          'Ne sont pas sourcés : les expressions des tableaux et des listes, un bureau d’information (l’OQLF cite le bureau des renseignements et un kiosque d’information touristique), les dialogues, les exemples et les stratégies de préparation. Les formules de mise en attente de l’OQLF ne sont pas utilisées dans la page. ' +
          'Aucune exigence officielle n’impose l’utilisation des expressions présentées ni le respect exact de la démarche proposée. ' +
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
      title: 'Différence entre information et renseignement — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22926/le-vocabulaire/nuances-semantiques/difference-entre-information-et-renseignement'
    },
    {
      title: 'L’introduction de la lettre : formules pour une demande de renseignements — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22344/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/lettre/introduction-de-la-lettre'
    },
    {
      title: 'Mettre une personne en attente : formules et règles d’usage — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23261/la-redaction-et-la-communication/communications-telephoniques/mettre-une-personne-en-attente'
    },
    {
      title: 'La tournure déconseillée « demander une question » — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22770/les-emprunts-a-langlais/emprunts-syntaxiques/la-tournure-anglaise-deconseillee-demander-une-question'
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
