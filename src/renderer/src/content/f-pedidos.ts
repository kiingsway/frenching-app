import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'f-pedidos',

  pt: {
    title: 'Fazer pedidos, sugestões e convites; aceitar e recusar',
    summary:
      'Você vai aprender a formular pedidos educadamente, apresentar sugestões e convidar alguém para atividades sociais ou profissionais. ' +
      'Também vai praticar como aceitar, recusar ou negociar uma proposta, utilizando expressões naturais e adequadas ao grau de formalidade da situação.',
    blocks: [
      { type: 'heading', text: 'Como formular pedidos, sugestões e convites' },
      {
        type: 'paragraph',
        text:
          'Em francês, a escolha das palavras depende da situação e da relação com a outra pessoa. ' +
          'Para fazer pedidos, utilize construções educadas, como [[Je voudrais...|Eu gostaria de...]] e [[Est-ce que vous pourriez... ?|Você poderia...?]]. ' +
          'Para apresentar sugestões, utilize [[On pourrait...|Poderíamos...]] ou [[Que dirais-tu de... ?|O que você acha de...?]]. ' +
          'Para convidar alguém, são naturais expressões como [[Ça te dirait de... ?|Você gostaria de...?]] e [[Je t’invite à...|Convido você para...]]'
      },
      {
        type: 'table',
        headers: ['Objetivo', 'Expressões em francês', 'Significado'],
        rows: [
            [
              'Pedido educado',
              '[[Est-ce que tu pourrais m’aider ?|Você poderia me ajudar?]]',
              'Pedir ajuda de maneira cordial.'
            ],
            [
              'Pedido formal',
              '[[Pourriez-vous m’envoyer le document par courriel, s’il vous plaît ?|Poderia me enviar o documento por e-mail, por favor?]]',
              'Solicitar algo em contexto profissional.'
            ],
            [
              'Sugestão',
              '[[On pourrait se rencontrer après le travail.|Poderíamos nos encontrar depois do trabalho.]]',
              'Apresentar uma possibilidade.'
            ],
            [
              'Sugestão informal',
              '[[Et si on allait prendre un café samedi ?|Que tal irmos tomar um café no sábado?]]',
              'Propor uma atividade.'
            ],
            [
              'Convite informal',
              '[[Ça te dirait de venir souper chez nous vendredi ?|Você gostaria de vir jantar na nossa casa na sexta?]]',
              'Convidar alguém próximo.'
            ],
            [
              'Convite formal',
              '[[Je vous invite à participer à notre rencontre.|Convido você a participar do nosso encontro.]]',
              'Convidar alguém em contexto profissional ou formal.'
            ]
        ]
      },
      { type: 'heading', text: 'Como aceitar uma proposta' },
      {
        type: 'paragraph',
        text:
          'Para aceitar um convite ou uma sugestão, demonstre interesse e, quando apropriado, agradeça. ' +
          'Você também pode fazer perguntas para confirmar os detalhes da atividade.'
      },
      {
        type: 'list',
        items: [
          '[[Oui, avec plaisir !|Sim, com prazer!]]',
          '[[Bien sûr, ça me ferait plaisir.|Claro, seria um prazer.]]',
          '[[Merci pour l’invitation.|Obrigado pelo convite.]] [[Je serai là avec plaisir.|Estarei lá com prazer.]]',
          '[[Ça me tente beaucoup !|Estou com muita vontade!]]',
          '[[Bonne idée !|Boa ideia!]] [[À quelle heure ?|A que horas?]]',
          '[[Bien sûr, je peux m’en occuper.|Claro, posso cuidar disso.]]',
          '[[Est-ce que je peux apporter quelque chose ?|Posso levar alguma coisa?]]'
        ]
      },
      { type: 'heading', text: 'Como recusar ou propor uma alternativa' },
      {
        type: 'paragraph',
        text:
          'Uma recusa educada geralmente começa com um agradecimento ou uma expressão de consideração. ' +
          'Em seguida, você pode explicar brevemente o motivo e, quando houver interesse, sugerir outra possibilidade. ' +
          'Se precisar de mais tempo para decidir, também pode pedir para responder depois.'
      },
      {
        type: 'list',
        items: [
          '[[Merci de penser à moi, mais je ne pourrai pas venir.|Obrigado por pensar em mim, mas não poderei ir.]]',
          '[[C’est gentil, mais je ne suis pas libre ce jour-là.|É muito gentil, mas não estou disponível nesse dia.]]',
          '[[J’aimerais bien, mais j’ai déjà quelque chose de prévu.|Eu gostaria, mas já tenho outro compromisso.]]',
          '[[Je suis désolé, mais je ne pourrai pas m’en occuper aujourd’hui.|Desculpe, mas não poderei cuidar disso hoje.]]',
          '[[Est-ce qu’on pourrait remettre ça à dimanche prochain ?|Poderíamos deixar isso para o próximo domingo?]]',
          '[[Une autre journée vous conviendrait-elle ?|Outro dia seria conveniente para você?]]',
          '[[Je vais vérifier mon horaire et je vous confirmerai demain.|Vou verificar minha agenda e confirmarei amanhã.]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'No francês canadense, [[fin de semaine|fim de semana]] é uma expressão muito comum; na França, também se utiliza [[week-end|fim de semana]]. ' +
          'No Québec, [[souper|jantar, refeição da noite]] é a palavra habitual para a refeição noturna. ' +
          'Observe também a diferença entre [[tu|você, em contexto informal]] e [[vous|você, em contexto formal, ou vocês]]. ' +
          'A escolha deve acompanhar a relação com a pessoa.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda educação com tradução literal',
        text:
          'Um erro comum de brasileiros é utilizar [[Je veux...|Eu quero...]] para qualquer pedido. ' +
          'Embora a construção esteja gramaticalmente correta, dependendo do contexto pode parecer direta demais. ' +
          'Em situações formais ou com pessoas desconhecidas, prefira [[Je voudrais...|Eu gostaria de...]] ou [[Est-ce que vous pourriez... ?|Você poderia...?]]. ' +
          'Outro cuidado: não responda apenas [[Non|Não]] quando precisar recusar um convite. ' +
          'Agradeça, explique brevemente a indisponibilidade e, quando possível, proponha uma alternativa.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Em atividades de produção oral e escrita, pratique adaptar sua resposta ao objetivo e ao interlocutor. ' +
          'Ao receber uma proposta, demonstre que compreendeu, aceite ou recuse com clareza e desenvolva uma justificativa quando necessário. ' +
          'Para recusar sem encerrar a interação, apresente uma alternativa ou proponha outro horário. ' +
          'Treine situações como pedir ajuda, negociar um compromisso, organizar um encontro, convidar alguém e responder a uma proposta profissional.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'Das fontes listadas, só o Mon Portfolio NCLC 5 a 8 (IRCC) e a ficha "Accepter, refuser ou reporter une invitation" (Québec Atout, Autrement dit) foram lidos, assim como o TV5MONDE e a OQLF; a página do Portal linguístico do Canadá (nos-langues.canada.ca) não abre no navegador (verificação de segurança do Cloudflare, não contornada), e o que ela diz foi obtido por um resumo de busca, não pela leitura direta. ' +
          'O portfólio confirma, na seção de convites, [[Que dirais-tu de venir souper ce soir ?|O que você acha de vir jantar hoje à noite?]] (convidar), [[J’aimerais bien, merci.|Eu gostaria, obrigado.]], [[Bien sûr. À quelle heure ?|Claro. A que horas?]] e [[Est-ce que je peux apporter quelque chose ?|Posso levar alguma coisa?]] (aceitar), [[J’aimerais bien, mais j’ai d’autres choses à faire.|Eu gostaria, mas tenho outras coisas a fazer.]] e [[Je suis désolé, mais j’ai d’autres plans.|Desculpe, mas tenho outros planos.]] (recusar) e [[Merci. Je vais vérifier mon agenda.|Obrigado. Vou verificar minha agenda.]] (hesitar). ' +
          'Na seção de pedidos confirma [[Pourriez-vous... ?|Poderia...?]], [[Est-ce qu’il vous serait possible de... ?|Seria possível...?]] e [[Peux-tu... ?|Pode...?]], e distingue a linguagem formal da familiar. ' +
          'A ficha do Québec Atout confirma, para aceitar, [[Ça me tente.|Estou com vontade.]], [[J’accepte avec plaisir.|Aceito com prazer.]] e [[C’est gentil d’avoir pensé à moi.|É gentil da sua parte ter pensado em mim.]]; para recusar, [[Je ne suis pas libre ce jour-là.|Não estou livre nesse dia.]], [[J’ai autre chose au programme.|Tenho outro compromisso.]] e [[Je suis désolé.|Sinto muito.]]; e, para adiar, [[On se reprendra.|Fica para outra vez.]], [[Est-ce qu’on pourrait remettre ça ?|Será que podemos adiar?]] e [[On ne pourrait pas trouver un autre moment ?|Não poderíamos achar outro momento?]]. ' +
          'O TV5MONDE confirma, para aceitar, [[Pourquoi pas !|Por que não!]], [[Ça me va !|Combinado!]], [[D’accord !|Combinado!]], [[Avec plaisir !|Com prazer!]] e [[C’est gentil, merci.|É gentil, obrigado.]], para recusar com polidez [[Désolé(e)|Desculpe]] seguido de [[Je ne peux pas, je suis pris(e)|Não posso, estou ocupado]] ou [[J’ai un rendez-vous|Tenho um compromisso]], e para propor outra data [[C’est possible la semaine prochaine ?|É possível na semana que vem?]]. A OQLF confirma que um pedido pode ter a forma de uma pergunta direta, como [[Peux-tu fermer la porte ?|Pode fechar a porta?]], [[Que dirais-tu de marcher un peu plus vite ?|O que acha de andar um pouco mais rápido?]] e [[Si l’on faisait une petite pause ?|E se fizéssemos uma pequena pausa?]], e que, na correspondência, um desejo pode ser formulado como [[Auriez-vous l’obligeance de transmettre ma demande à qui de droit ?|O senhor teria a gentileza de encaminhar meu pedido a quem de direito?]]. ' +
          'Segundo esse resumo, o Portal linguístico indica que [[s’il vous plaît|por favor]] serve para fazer um pedido educado a uma pessoa tratada por [[vous|você formal]] ou a várias pessoas, para dar uma ordem ou para aceitar com polidez, que se escreve por extenso, sem hífens, de preferência no fim da frase, como em [[Pourriez-vous m’envoyer le document par courriel, s’il vous plaît ?|Poderia me enviar o documento por e-mail, por favor?]], e que a abreviação [[S.V.P.|por favor]] é familiar e pouco adequada a uma carta oficial. ' +
          'Não aparecem nas fontes lidas: [[Je voudrais...|Eu gostaria de...]], [[On pourrait...|Poderíamos...]], [[Et si on allait...|Que tal irmos...]], [[Ça te dirait de... ?|Você gostaria de...?]], [[Je t’invite à...|Convido você para...]], [[Merci de penser à moi|Obrigado por pensar em mim]] e [[C’est gentil, mais...|É gentil, mas...]], a nota sobre [[fin de semaine|fim de semana]] e [[souper|jantar]] e o aviso sobre [[Je veux...|Eu quero...]]. ' +
          'Entretanto, essas fontes não estabelecem um roteiro obrigatório nem confirmam que cada uma dessas situações apareça em uma questão específica do TEF Canada ou do TCF Canada. ' +
          'As estratégias de resposta apresentadas na dica são conselhos de preparação, não regras oficiais das provas.'
      }
    ]
  },

  fr: {
    title: 'Faire des demandes, des suggestions et des invitations ; accepter et refuser',
    summary:
      'Vous apprendrez à formuler des demandes poliment, à présenter des suggestions et à inviter quelqu’un à participer à des activités sociales ou professionnelles. ' +
      'Vous pratiquerez également les façons d’accepter, de refuser ou de négocier une proposition en utilisant des expressions naturelles et adaptées au degré de formalité de la situation.',
    blocks: [
      { type: 'heading', text: 'Comment formuler des demandes, des suggestions et des invitations' },
      {
        type: 'paragraph',
        text:
          'En français, le choix des mots dépend de la situation et de la relation avec l’autre personne. ' +
          'Pour faire des demandes, utilisez des formulations polies comme « Je voudrais... » et « Est-ce que vous pourriez...? ». ' +
          'Pour présenter des suggestions, utilisez « On pourrait... » ou « Que dirais-tu de...? ». Pour inviter quelqu’un, des expressions comme « Ça te dirait de...? ' +
          '» et « Je t’invite à... » sont naturelles.'
      },
      {
        type: 'table',
        headers: ['Objectif', 'Expressions en français', 'Utilisation'],
        rows: [
            [
              'Demande polie',
              'Est-ce que tu pourrais m’aider ?',
              'Demander de l’aide de manière courtoise.'
            ],
            [
              'Demande formelle',
              'Pourriez-vous m’envoyer le document par courriel, s’il vous plaît ?',
              'Faire une demande dans un contexte professionnel.'
            ],
            [
              'Suggestion',
              'On pourrait se rencontrer après le travail.',
              'Présenter une possibilité.'
            ],
            [
              'Suggestion informelle',
              'Et si on allait prendre un café samedi ?',
              'Proposer une activité.'
            ],
            [
              'Invitation informelle',
              'Ça te dirait de venir souper chez nous vendredi ?',
              'Inviter une personne proche.'
            ],
            [
              'Invitation formelle',
              'Je vous invite à participer à notre rencontre.',
              'Inviter quelqu’un dans un contexte professionnel ou formel.'
            ]
        ]
      },
      { type: 'heading', text: 'Comment accepter une proposition' },
      {
        type: 'paragraph',
        text:
          'Pour accepter une invitation ou une suggestion, montrez votre intérêt et, lorsque c’est approprié, remerciez la personne. ' +
          'Vous pouvez également poser des questions pour confirmer les détails de l’activité.'
      },
      {
        type: 'list',
        items: [
          'Oui, avec plaisir !',
          'Bien sûr, ça me ferait plaisir.',
          'Merci pour l’invitation. Je serai là avec plaisir.',
          'Ça me tente beaucoup !',
          'Bonne idée ! À quelle heure ?',
          'Bien sûr, je peux m’en occuper.',
          'Est-ce que je peux apporter quelque chose ?'
        ]
      },
      { type: 'heading', text: 'Comment refuser ou proposer une autre possibilité' },
      {
        type: 'paragraph',
        text:
          'Un refus poli commence généralement par un remerciement ou une marque de considération. ' +
          'Ensuite, vous pouvez expliquer brièvement la raison et, lorsque vous êtes intéressé, proposer une autre possibilité. ' +
          'Si vous avez besoin de plus de temps pour prendre une décision, vous pouvez également demander à répondre plus tard.'
      },
      {
        type: 'list',
        items: [
          'Merci de penser à moi, mais je ne pourrai pas venir.',
          'C’est gentil, mais je ne suis pas libre ce jour-là.',
          'J’aimerais bien, mais j’ai déjà quelque chose de prévu.',
          'Je suis désolé, mais je ne pourrai pas m’en occuper aujourd’hui.',
          'Est-ce qu’on pourrait remettre ça à dimanche prochain ?',
          'Une autre journée vous conviendrait-elle ?',
          'Je vais vérifier mon horaire et je vous confirmerai demain.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'En français canadien, fin de semaine est une expression très courante ; en France, on utilise également week-end. ' +
          'Au Québec, souper est le mot habituel pour désigner le repas du soir. ' +
          'Observez aussi la différence entre tu, dans un contexte informel, et vous, dans un contexte formel ou pour s’adresser à plusieurs personnes. ' +
          'Le choix doit correspondre à votre relation avec votre interlocuteur.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas politesse et traduction littérale',
        text:
          'Une erreur fréquente chez les personnes lusophones consiste à utiliser « Je veux... » pour toutes les demandes. ' +
          'Bien que cette construction soit grammaticalement correcte, elle peut sembler trop directe selon le contexte. ' +
          'Dans les situations formelles ou avec des personnes que vous ne connaissez pas, préférez « Je voudrais... » ou « Est-ce que vous pourriez...? ». ' +
          'Autre précaution : ne répondez pas simplement « Non » lorsque vous devez refuser une invitation. ' +
          'Remerciez la personne, expliquez brièvement votre indisponibilité et, lorsque c’est possible, proposez une autre possibilité.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les activités de production orale et écrite, entraînez-vous à adapter votre réponse à l’objectif et à votre interlocuteur. ' +
          'Lorsque vous recevez une proposition, montrez que vous l’avez comprise, acceptez-la ou refusez-la clairement et développez une justification lorsque c’est nécessaire. ' +
          'Pour refuser sans mettre fin à l’interaction, présentez une autre possibilité ou proposez un autre horaire. ' +
          'Entraînez-vous avec des situations comme demander de l’aide, négocier un rendez-vous, organiser une rencontre, inviter quelqu’un et répondre à une proposition professionnelle.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Parmi les sources listées, ont été lus Mon Portfolio NCLC 5 à 8 (IRCC), la fiche « Accepter, refuser ou reporter une invitation » (Québec Atout, Autrement dit), TV5MONDE et l’OQLF ; la page du Portail linguistique du Canada (nos-langues.canada.ca) ne s’ouvre pas dans le navigateur (vérification de sécurité de Cloudflare, non contournée), et ce qu’elle dit a été obtenu par un résumé de recherche, non par une lecture directe. ' +
          'Le portfolio confirme, dans la section sur les invitations, Que dirais-tu de venir souper ce soir ? (inviter), J’aimerais bien, merci, Bien sûr. À quelle heure ? et Est-ce que je peux apporter quelque chose ? (accepter), J’aimerais bien, mais j’ai d’autres choses à faire et Je suis désolé, mais j’ai d’autres plans (refuser) et Merci. Je vais vérifier mon agenda (hésiter). ' +
          'Dans la section sur les demandes, il confirme Pourriez-vous... ?, Est-ce qu’il vous serait possible de... ? et Peux-tu... ?, et distingue le langage formel du langage familier. ' +
          'La fiche de Québec Atout confirme, pour accepter, Ça me tente., J’accepte avec plaisir. et C’est gentil d’avoir pensé à moi. ; pour refuser, Je ne suis pas libre ce jour-là., J’ai autre chose au programme. et Je suis désolé. ; et, pour reporter, On se reprendra., Est-ce qu’on pourrait remettre ça ? et On ne pourrait pas trouver un autre moment ?. ' +
          'TV5MONDE confirme, pour accepter, Pourquoi pas !, Ça me va !, D’accord !, Avec plaisir ! et C’est gentil, merci., pour refuser poliment Désolé(e) suivi de Je ne peux pas, je suis pris(e) ou J’ai un rendez-vous, et pour proposer une autre date C’est possible la semaine prochaine ?. L’OQLF confirme qu’une demande peut prendre la forme d’une interrogation directe, comme Peux-tu fermer la porte ?, Que dirais-tu de marcher un peu plus vite ? et Si l’on faisait une petite pause ?, et que, dans la correspondance, un souhait peut être formulé comme Auriez-vous l’obligeance de transmettre ma demande à qui de droit ?. ' +
          'Selon ce résumé, le Portail linguistique indique que s’il vous plaît sert à formuler une demande polie à une personne vouvoyée ou à plusieurs personnes, à donner un ordre ou à acquiescer poliment, qu’il s’écrit au long, sans traits d’union, de préférence à la fin de la phrase, comme dans Pourriez-vous m’envoyer le document par courriel, s’il vous plaît ?, et que l’abréviation S.V.P. est familière et peu adaptée à une lettre officielle. ' +
          'Ne figurent pas dans les sources lues : Je voudrais..., On pourrait..., Et si on allait..., Ça te dirait de... ?, Je t’invite à..., Merci de penser à moi et C’est gentil, mais..., la note sur fin de semaine et souper et l’avertissement sur Je veux.... ' +
          'Toutefois, ces sources n’établissent aucun scénario obligatoire et ne confirment pas que chacune de ces situations apparaisse dans une question précise du TEF Canada ou du TCF Canada. ' +
          'Les stratégies de réponse présentées dans le conseil sont des recommandations de préparation, et non des règles officielles des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Gouvernement du Québec — Québec Atout : Accepter, refuser ou reporter une invitation',
      url: 'https://referencesfrancisation.immigration-quebec.gouv.qc.ca/moodle_ref/pluginfile.php/1/block_public_files/files/Catalogue/PDF/DA%20Cahiers/Cahier%204/01%20Activit%C3%A9s%20sociales/CA_DA_O1T2S3_Cahier4_T3-I2_291_autrement_dit_accepter_refuser.pdf'
    },
    {
      title: 'Immigration, Réfugiés et Citoyenneté Canada — Mon Portfolio NCLC : NCLC 5 à 8',
      url: 'https://www.language.ca/wp-content/uploads/2019/09/Mon-Portfolio-NCLC_5_8_mars_2019.pdf'
    },
    {
      title: 'TV5MONDE — Accepter ou refuser une proposition',
      url: 'https://apprendre.tv5monde.com/en/aides/vocabulaire-accepter-une-proposition-0'
    },
    {
      title: 'Portail linguistique du Canada — S’il vous plaît',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/sil-vous-plait'
    },
    {
      title: 'Office québécois de la langue française — Formuler une demande avec une interrogation',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23384/la-ponctuation/point-dinterrogation/emplois-particuliers-du-point-dinterrogation'
    }
  ]
}

export default content
