import type { TopicContent } from './types'

const TU = '[[tu|você (informal)]]'
const VOUS = '[[vous|o senhor, a senhora ou vocês]]'

const content: TopicContent = {
  id: 'ee-registro',

  pt: {
    title: 'Registro formal e informal: como utilizar tu, vous e fórmulas de cortesia',
    summary:
      'Aprenda a escolher o nível de formalidade adequado em mensagens, e-mails e correspondências em francês canadense. ' +
      'Você vai dominar a diferença entre tutoiement e vouvoiement, aprender fórmulas naturais de abertura e fechamento e evitar erros que podem tornar sua comunicação informal demais ou excessivamente formal.',
    blocks: [
      { type: 'heading', text: '1. Entenda a diferença entre o registro formal e o informal' },
      {
        type: 'paragraph',
        text:
          'Em francês, a maneira de se dirigir a alguém depende da relação entre as pessoas, do contexto e do grau de formalidade. ' +
          `Existem duas formas principais: [[le tutoiement|o tratamento informal, com ${'tu'}]] e [[le vouvoiement|o tratamento formal ou respeitoso, com ${'vous'}]]. ` +
          `No Québec, o uso de ${TU} em determinadas situações sociais e profissionais é mais espontâneo do que em algumas outras regiões francófonas. ` +
          `Mesmo assim, quando você não conhece o destinatário ou não sabe qual tratamento utilizar, começar com ${VOUS} é uma escolha prudente. ` +
          'O importante é adaptar a linguagem à situação e manter o mesmo tratamento durante toda a mensagem.'
      },
      {
        type: 'table',
        headers: ['Registro', 'Quando utilizar', 'Exemplo'],
        rows: [
          [
            '[[Tutoiement|Informal]]',
            'Amigos, familiares, pessoas próximas e colegas com quem existe familiaridade.',
            '[[Tu peux m’envoyer le document ?|Você pode me enviar o documento?]]'
          ],
          [
            '[[Vouvoiement|Formal ou respeitoso]]',
            'Pessoas desconhecidas, contatos profissionais, instituições e situações administrativas.',
            '[[Pourriez-vous m’envoyer le document ?|O senhor poderia me enviar o documento?]]'
          ],
          [
            '[[Vous de politesse|Vous de cortesia]]',
            'Uma única pessoa tratada formalmente.',
            '[[Je vous remercie pour votre réponse.|Agradeço pela sua resposta.]]'
          ],
          [
            '[[Vous au pluriel|Vous no plural]]',
            'Duas ou mais pessoas, independentemente da formalidade.',
            '[[Vous pouvez entrer.|Vocês podem entrar.]]'
          ]
        ]
      },
      { type: 'heading', text: '2. Fórmulas de abertura: como começar uma mensagem' },
      {
        type: 'paragraph',
        text:
          'A abertura deve corresponder ao destinatário. Em mensagens pessoais, uma saudação simples costuma ser suficiente. ' +
          'Em um e-mail profissional ou administrativo, utilize uma fórmula mais neutra ou formal. ' +
          'No francês canadense, [[Bonjour|Bom dia ou Olá]] é uma opção muito versátil e natural, inclusive em comunicações profissionais.'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Tradução', 'Contexto'],
        rows: [
          ['[[Salut, Marc !|Oi, Marc!]]', 'Saudação informal.', 'Amigos e pessoas próximas.'],
          [
            '[[Allô, Julie !|Oi, Julie!]]',
            'Saudação informal.',
            'Familiar ou conversa cotidiana; também é comum ao telefone no Québec.'
          ],
          [
            '[[Bonjour, Sophie,|Olá, Sophie,]]',
            'Saudação neutra.',
            'Colegas e contatos profissionais conhecidos.'
          ],
          [
            '[[Bonjour, Madame,|Bom dia, senhora,]]',
            'Saudação respeitosa.',
            'Contato profissional ou administrativo.'
          ],
          [
            '[[Bonjour, Monsieur,|Bom dia, senhor,]]',
            'Saudação respeitosa.',
            'Contato profissional ou administrativo.'
          ],
          [
            '[[Madame, Monsieur,|Prezada senhora, prezado senhor,]]',
            'Saudação formal.',
            'Quando não se conhece o nome do destinatário de uma correspondência.'
          ],
          [
            '[[Bonjour,|Bom dia ou Olá,]]',
            'Saudação neutra.',
            'E-mails profissionais e mensagens gerais.'
          ]
        ]
      },
      { type: 'heading', text: '3. Fórmulas de fechamento: como terminar uma mensagem' },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Tradução', 'Contexto'],
        rows: [
          ['[[À bientôt !|Até breve!]]', 'Informal.', 'Amigos e familiares.'],
          ['[[À demain !|Até amanhã!]]', 'Informal.', 'Quando existe um próximo encontro.'],
          [
            '[[Amicalement,|Um abraço ou cordialmente,]]',
            'Pessoal e amistoso.',
            'Amigos e pessoas próximas.'
          ],
          [
            '[[Bonne journée !|Tenha um bom dia!]]',
            'Neutro e cordial.',
            'Mensagens cotidianas e profissionais.'
          ],
          [
            '[[Cordialement,|Atenciosamente,]]',
            'Profissional e neutro.',
            'E-mails de trabalho e comunicações administrativas.'
          ],
          [
            '[[Meilleures salutations,|Cordiais saudações,]]',
            'Profissional.',
            'Correspondências formais.'
          ],
          [
            '[[Je vous prie d’agréer, Madame, l’expression de mes salutations distinguées.|Queira aceitar, senhora, a expressão de meus cumprimentos respeitosos.]]',
            'Muito formal.',
            'Cartas administrativas ou correspondências muito formais.'
          ]
        ]
      },
      { type: 'heading', text: '4. Exemplos práticos: a mesma situação em dois registros' },
      {
        type: 'paragraph',
        text:
          'Situação: você precisa avisar que não poderá participar de uma reunião e solicitar uma nova data. Observe como o tratamento muda conforme o destinatário.'
      },
      {
        type: 'paragraph',
        text:
          '[[Salut Thomas ! Je voulais te prévenir que je ne pourrai pas participer à notre réunion de vendredi. J’ai un rendez-vous important qui vient d’être confirmé. Est-ce qu’on pourrait la reporter à lundi prochain ? Je suis disponible toute la journée. Désolé pour ce changement de dernière minute et merci de ta compréhension. À bientôt !|Oi, Thomas! Queria te avisar que não poderei participar da nossa reunião de sexta-feira. Tenho um compromisso importante que acabou de ser confirmado. Será que poderíamos adiá-la para a próxima segunda-feira? Estou disponível o dia todo. Desculpe pela mudança de última hora e obrigado pela compreensão. Até breve!]]'
      },
      {
        type: 'paragraph',
        text:
          '[[Bonjour, Madame, Je vous écris afin de vous informer que je ne pourrai malheureusement pas participer à la réunion prévue vendredi. En raison d’un rendez-vous professionnel confirmé récemment, je souhaiterais savoir s’il serait possible de la reporter à lundi prochain. Je reste disponible toute la journée et je pourrais m’adapter à l’horaire qui vous conviendra le mieux. Je vous prie de bien vouloir m’excuser pour ce changement et vous remercie de votre compréhension. Cordialement, Lucas.|Bom dia, senhora. Escrevo para informar que, infelizmente, não poderei participar da reunião prevista para sexta-feira. Devido a um compromisso profissional confirmado recentemente, gostaria de saber se seria possível adiá-la para a próxima segunda-feira. Permaneço disponível o dia todo e poderia me adaptar ao horário que for mais conveniente para a senhora. Peço desculpas pela mudança e agradeço pela compreensão. Atenciosamente, Lucas.]]'
      },
      { type: 'heading', text: '5. Armadilhas comuns para brasileiros' },
      {
        type: 'list',
        items: [
          `Confundir ${VOUS} com “vocês”. [[Vous|o senhor, a senhora ou vocês]] também pode se referir a uma única pessoa quando existe uma relação formal ou respeitosa.`,
          'Misturar os tratamentos na mesma mensagem. Evite começar com [[Bonjour, Madame,|Bom dia, senhora,]] e depois escrever [[tu peux me répondre|você pode me responder]] em vez de utilizar a conjugação de [[vous|o senhor, a senhora ou vocês]].',
          'Utilizar [[Salut|Oi]] em uma reclamação dirigida a uma administração ou a uma pessoa desconhecida. Prefira uma saudação neutra ou formal.',
          'Utilizar [[Cordialement|Atenciosamente]] em uma conversa informal entre amigos. Escolha um fechamento compatível com a relação.',
          'Traduzir literalmente fórmulas portuguesas. [[À mon avis|Na minha opinião]] não deve ser substituído por construções inventadas como [[À mon opinion|Na minha opinião]].',
          'Acreditar que [[vous|o senhor, a senhora ou vocês]] é sempre a opção obrigatória em qualquer situação profissional. No Québec, o [[tutoiement|tratamento com tu]] também pode ser espontâneo em equipes e ambientes de trabalho com relações mais próximas.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com a concordância e a consistência',
        text:
          'Um erro frequente é utilizar [[vous|o senhor, a senhora ou vocês]] no início e depois continuar conjugando os verbos como se estivesse falando com [[tu|você (informal)]]. ' +
          'Por exemplo, [[Vous pouvez m’aider ?|O senhor pode me ajudar?]] está correto, mas [[Vous peux m’aider ?|O senhor pode me ajudar?]] está errado. ' +
          'Mesmo quando [[vous|o senhor, a senhora ou vocês]] se refere a uma única pessoa, o verbo utiliza a conjugação correspondente à segunda pessoa do plural. ' +
          'Também lembre-se de que o [[vous de politesse|vous de cortesia]] não significa necessariamente que você está falando com várias pessoas. ' +
          'Mantenha os possessivos e pronomes coerentes com o tratamento escolhido.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que a prova espera de você',
        text:
          'No TEF Canada e no TCF Canada, o registro deve corresponder à situação apresentada no enunciado. ' +
          'Identifique quem receberá a mensagem, qual é a relação entre vocês e qual é o objetivo da comunicação. ' +
          'Em uma reclamação formal, utilize [[vous|o senhor, a senhora ou vocês]], uma abertura respeitosa e pedidos educados. ' +
          'Em uma mensagem para um amigo, [[tu|você (informal)]] e expressões naturais são mais adequados. ' +
          'Demonstre domínio de diferentes fórmulas sem exagerar na formalidade. ' +
          'Antes de finalizar, confira se a saudação, os pronomes, as conjugações e o fechamento pertencem ao mesmo registro. ' +
          'A consistência da comunicação é tão importante quanto a correção gramatical.'
      }
    ]
  },

  fr: {
    title: 'Registre formel et informel : bien utiliser tu, vous et les formules de politesse',
    summary:
      'Apprenez à choisir le niveau de formalité approprié dans les messages, les courriels et la correspondance en français canadien. ' +
      'Vous maîtriserez la différence entre le tutoiement et le vouvoiement, découvrirez des formules naturelles d’ouverture et de clôture et éviterez les erreurs qui peuvent rendre votre communication trop familière ou excessivement formelle.',
    blocks: [
      { type: 'heading', text: '1. Comprendre la différence entre le registre formel et informel' },
      {
        type: 'paragraph',
        text:
          'En français, la manière de s’adresser à quelqu’un dépend de la relation entre les personnes, du contexte et du degré de formalité. ' +
          'Il existe deux formes principales : le tutoiement, avec tu, et le vouvoiement, avec vous. ' +
          'Au Québec, l’utilisation spontanée de tu dans certaines situations sociales et professionnelles est plus fréquente que dans certaines autres régions francophones. ' +
          'Malgré cela, lorsqu’on ne connaît pas le destinataire ou qu’on ne sait pas quelle forme employer, commencer par vous constitue un choix prudent. ' +
          'L’essentiel est d’adapter son langage à la situation et de conserver le même registre tout au long du message.'
      },
      {
        type: 'table',
        headers: ['Registre', 'Quand l’utiliser', 'Exemple'],
        rows: [
          [
            'Tutoiement',
            'Amis, membres de la famille, personnes proches et collègues avec lesquels on entretient une relation familière.',
            'Tu peux m’envoyer le document ?'
          ],
          [
            'Vouvoiement',
            'Personnes inconnues, contacts professionnels, institutions et situations administratives.',
            'Pourriez-vous m’envoyer le document ?'
          ],
          [
            'Vous de politesse',
            'Une seule personne à qui l’on s’adresse de manière formelle.',
            'Je vous remercie pour votre réponse.'
          ],
          [
            'Vous au pluriel',
            'Deux personnes ou plus, quel que soit le degré de formalité.',
            'Vous pouvez entrer.'
          ]
        ]
      },
      { type: 'heading', text: '2. Les formules d’ouverture : comment commencer un message' },
      {
        type: 'paragraph',
        text:
          'La formule d’ouverture doit correspondre au destinataire. Dans les messages personnels, une salutation simple suffit généralement. ' +
          'Dans un courriel professionnel ou administratif, utilisez une formule plus neutre ou formelle. ' +
          'En français canadien, Bonjour est une expression très polyvalente et naturelle, y compris dans les communications professionnelles.'
      },
      {
        type: 'table',
        headers: ['Expression', 'Registre et utilisation'],
        rows: [
          ['Salut, Marc !', 'Salutation informelle pour les amis et les personnes proches.'],
          ['Allô, Julie !', 'Salutation familière, également courante au téléphone au Québec.'],
          ['Bonjour, Sophie,', 'Salutation neutre pour les collègues et les contacts professionnels connus.'],
          ['Bonjour, Madame,', 'Salutation respectueuse dans un contexte professionnel ou administratif.'],
          ['Bonjour, Monsieur,', 'Salutation respectueuse dans un contexte professionnel ou administratif.'],
          ['Madame, Monsieur,', 'Salutation formelle lorsqu’on ne connaît pas le nom du destinataire.'],
          ['Bonjour,', 'Salutation neutre pour les courriels professionnels et les messages généraux.']
        ]
      },
      { type: 'heading', text: '3. Les formules de clôture : comment terminer un message' },
      {
        type: 'table',
        headers: ['Expression', 'Registre et utilisation'],
        rows: [
          ['À bientôt !', 'Informel, pour les amis et la famille.'],
          ['À demain !', 'Informel, lorsqu’une prochaine rencontre est prévue.'],
          ['Amicalement,', 'Personnel et chaleureux, pour les personnes proches.'],
          ['Bonne journée !', 'Neutre et cordial, dans les messages quotidiens et professionnels.'],
          ['Cordialement,', 'Professionnel et neutre, pour les courriels de travail et les communications administratives.'],
          ['Meilleures salutations,', 'Professionnel, pour la correspondance formelle.'],
          [
            'Je vous prie d’agréer, Madame, l’expression de mes salutations distinguées.',
            'Très formel, pour les lettres administratives et les correspondances officielles.'
          ]
        ]
      },
      { type: 'heading', text: '4. Exemples pratiques : une même situation dans deux registres' },
      {
        type: 'paragraph',
        text:
          'Situation : vous devez annoncer que vous ne pourrez pas participer à une réunion et demander une nouvelle date. Observez comment le registre change selon le destinataire.'
      },
      {
        type: 'paragraph',
        text:
          'Salut Thomas ! Je voulais te prévenir que je ne pourrai pas participer à notre réunion de vendredi. J’ai un rendez-vous important qui vient d’être confirmé. Est-ce qu’on pourrait la reporter à lundi prochain ? Je suis disponible toute la journée. Désolé pour ce changement de dernière minute et merci de ta compréhension. À bientôt !'
      },
      {
        type: 'paragraph',
        text:
          'Bonjour, Madame, Je vous écris afin de vous informer que je ne pourrai malheureusement pas participer à la réunion prévue vendredi. En raison d’un rendez-vous professionnel confirmé récemment, je souhaiterais savoir s’il serait possible de la reporter à lundi prochain. Je reste disponible toute la journée et je pourrais m’adapter à l’horaire qui vous conviendra le mieux. Je vous prie de bien vouloir m’excuser pour ce changement et vous remercie de votre compréhension. Cordialement, Lucas.'
      },
      { type: 'heading', text: '5. Pièges fréquents pour les lusophones' },
      {
        type: 'list',
        items: [
          'Croire que vous désigne toujours plusieurs personnes. Vous peut également désigner une seule personne lorsqu’il existe une relation formelle ou respectueuse.',
          'Mélanger les deux formes dans un même message. Évitez de commencer par « Bonjour, Madame, » puis d’écrire « tu peux me répondre » au lieu d’utiliser la conjugaison de vous.',
          'Utiliser « Salut » dans une réclamation adressée à une administration ou à une personne inconnue. Préférez une salutation neutre ou formelle.',
          'Utiliser « Cordialement » dans une conversation informelle entre amis. Choisissez une formule de clôture adaptée à votre relation.',
          'Traduire littéralement les formules portugaises. « À mon avis » est correct, mais des constructions inventées comme « À mon opinion » ne sont pas naturelles.',
          'Croire que vous est toujours obligatoire dans toutes les situations professionnelles. Au Québec, le tutoiement peut également être spontané dans les équipes et les milieux de travail où les relations sont plus proches.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à la conjugaison et à la cohérence',
        text:
          'Une erreur fréquente consiste à utiliser vous au début du message, puis à continuer à conjuguer les verbes comme si l’on s’adressait à une personne avec tu. ' +
          'Par exemple, « Vous pouvez m’aider ? » est correct, tandis que « Vous peux m’aider ? » est incorrect. ' +
          'Même lorsque vous désigne une seule personne, le verbe prend la forme de la deuxième personne du pluriel. ' +
          'Rappelez-vous également que le vous de politesse ne signifie pas nécessairement que vous vous adressez à plusieurs personnes. ' +
          'Conservez des pronoms et des déterminants cohérents avec la forme choisie.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que l’examen attend de vous',
        text:
          'Au TEF Canada et au TCF Canada, le registre doit correspondre à la situation présentée dans la consigne. ' +
          'Identifiez la personne qui recevra le message, votre relation avec elle et l’objectif de la communication. ' +
          'Dans une réclamation formelle, utilisez vous, une formule d’ouverture respectueuse et des demandes polies. ' +
          'Dans un message destiné à un ami, tu et des expressions naturelles sont plus appropriés. ' +
          'Montrez que vous maîtrisez différentes formules sans exagérer le niveau de formalité. ' +
          'Avant de terminer, vérifiez que la salutation, les pronoms, les conjugaisons et la formule de clôture appartiennent au même registre. ' +
          'La cohérence de la communication est aussi importante que la correction grammaticale.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Contextes d’emploi du vouvoiement et du tutoiement – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/25140/la-redaction-et-la-communication/protocole-et-activites-publiques/contextes-demploi-du-vouvoiement-et-du-tutoiement'
    },
    {
      title: 'Formules d’appel dans les courriels : règles d’usage – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24944/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/courriel/formules-dappel-dans-le-courriel'
    },
    {
      title: 'La salutation dans le courriel : exemples de formules – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24946/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/courriel/formules-de-salutation-dans-le-courriel'
    },
    {
      title: 'Rédaction des courriels : généralités – Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22794/la-redaction-et-la-communication/redaction-administrative-et-commerciale/correspondance/courriel/generalites-sur-la-redaction-du-courriel'
    }
  ]
}

export default content
