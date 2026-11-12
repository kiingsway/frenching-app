import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'eo-tef-a',

  pt: {
    title: 'TEF – Expressão oral, Seção A: obter informações e fazer perguntas',
    summary:
      'Aprenda a conduzir uma conversa simulando uma ligação telefônica para obter informações sobre um anúncio de emprego, moradia, serviço ou atividade. ' +
      'Você vai praticar perguntas abertas e fechadas, pedidos de esclarecimento, fórmulas de cortesia e estratégias para manter uma conversa natural com o examinador durante os cinco minutos da tarefa.',
    blocks: [
      { type: 'heading', text: '1. O que a tarefa exige?' },
      {
        type: 'paragraph',
        text:
          'Na Seção A da expressão oral do TEF Canada, você recebe um anúncio de algum serviço ou oportunidade e deve demonstrar interesse, simulando uma ligação telefônica para obter mais informações. ' +
          'A atividade dura 5 minutos e a orientação oficial dos exemplos recomenda fazer aproximadamente dez perguntas. ' +
          'O examinador interpreta a pessoa responsável pelo anúncio e responde aos seus questionamentos. ' +
          'Embora a situação represente uma ligação telefônica, a prova acontece presencialmente, em uma conversa com o examinador. ' +
          'Seu objetivo é obter informações, pedir esclarecimentos quando necessário e manter uma conversa formal, clara e natural.'
      },
      { type: 'heading', text: '2. Como se preparar antes de começar' },
      {
        type: 'list',
        items: [
          'Identifique o tipo de anúncio: pode ser uma oferta de emprego, aluguel de imóvel, curso, atividade de lazer ou prestação de serviços.',
          'Observe quais informações já estão disponíveis e quais ainda precisam ser esclarecidas.',
          'Prepare perguntas sobre preço, horários, disponibilidade, localização, condições, requisitos e procedimentos.',
          'Comece com uma apresentação educada, explique o motivo da ligação e demonstre interesse.',
          'Escute as respostas do examinador e formule perguntas complementares de acordo com as informações recebidas.'
        ]
      },
      { type: 'heading', text: '3. Exemplo prático: anúncio de aluguel em Montreal' },
      {
        type: 'paragraph',
        text: 'Título do anúncio: [[Logement 3 ½ à louer près du métro Crémazie|Apartamento de um quarto para alugar perto da estação de metrô Crémazie]].'
      },
      {
        type: 'paragraph',
        text:
          '[[À louer : logement 3 ½ situé près de la station de métro Crémazie, à Montréal.|Para alugar: apartamento de um quarto localizado perto da estação de metrô Crémazie, em Montreal.]] ' +
          '[[Disponible dès le 1er juillet.|Disponível a partir de 1º de julho.]] [[Chauffage inclus.|Aquecimento incluído.]] ' +
          '[[Électroménagers fournis.|Eletrodomésticos fornecidos.]] [[Immeuble avec buanderie.|Edifício com lavanderia.]] ' +
          '[[Pour obtenir plus d’informations ou organiser une visite, communiquez avec le propriétaire par téléphone.|Para obter mais informações ou agendar uma visita, entre em contato com o proprietário por telefone.]]'
      },
      { type: 'heading', text: '4. Dez perguntas que você poderia fazer' },
      {
        type: 'table',
        headers: ['Informação desejada', 'Pergunta em francês', 'Objetivo'],
        rows: [
            [
              'Disponibilidade',
              '[[Le logement est-il toujours disponible ?|O apartamento ainda está disponível?]]',
              'Confirmar se o imóvel continua disponível.'
            ],
            [
              'Preço',
              '[[Quel est le montant du loyer mensuel ?|Qual é o valor do aluguel mensal?]]',
              'Descobrir o custo do aluguel.'
            ],
            [
              'Aquecimento',
              '[[Le chauffage est-il inclus dans le prix ?|O aquecimento está incluído no preço?]]',
              'Confirmar o que está incluído.'
            ],
            [
              'Eletricidade',
              '[[L’électricité est-elle comprise également ?|A eletricidade também está incluída?]]',
              'Esclarecer despesas adicionais.'
            ],
            [
              'Eletrodomésticos',
              '[[Quels électroménagers sont fournis ?|Quais eletrodomésticos são fornecidos?]]',
              'Identificar os equipamentos disponíveis.'
            ],
            [
              'Lavanderia',
              '[[Y a-t-il une buanderie dans l’immeuble ?|Existe uma lavanderia no edifício?]]',
              'Perguntar sobre as instalações.'
            ],
            [
              'Data de disponibilidade',
              '[[Le logement est-il disponible dès le 1er juillet ?|O apartamento estará disponível a partir de 1º de julho?]]',
              'Confirmar a data de entrada.'
            ],
            [
              'Contrato',
              '[[Quelle est la durée du bail ?|Qual é a duração do contrato de aluguel?]]',
              'Conhecer as condições da locação.'
            ],
            [
              'Estacionamento',
              '[[Y a-t-il une place de stationnement ?|Existe uma vaga de estacionamento?]]',
              'Verificar a disponibilidade de estacionamento.'
            ],
            [
              'Visita',
              '[[Serait-il possible de visiter le logement cette semaine ?|Seria possível visitar o apartamento nesta semana?]]',
              'Solicitar um horário para conhecer o imóvel.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Exemplo de aprofundamento da conversa: se o examinador disser que o aquecimento está incluído, mas não mencionar a eletricidade, você pode perguntar: [[Vous avez indiqué que le chauffage était inclus.|Você informou que o aquecimento estava incluído.]] ' +
          '[[Pourriez-vous me confirmer si l’électricité est également comprise ?|Poderia confirmar se a eletricidade também está incluída?]]'
      },
      { type: 'heading', text: '5. Como fazer perguntas e pedir esclarecimentos' },
      {
        type: 'table',
        headers: ['Função', 'Expressão em francês', 'Utilização'],
        rows: [
            [
              'Pergunta aberta',
              '[[Pourriez-vous me donner plus de détails sur... ?|Poderia me dar mais detalhes sobre...?]]',
              'Obter uma explicação mais completa.'
            ],
            [
              'Solicitar esclarecimento',
              '[[Pourriez-vous préciser ce point ?|Poderia esclarecer esse ponto?]]',
              'Aprofundar uma informação.'
            ],
            [
              'Confirmar informação',
              '[[Est-ce que j’ai bien compris que... ?|Entendi corretamente que...?]]',
              'Verificar se compreendeu a resposta.'
            ],
            [
              'Pedir repetição',
              '[[Pourriez-vous répéter, s’il vous plaît ?|Poderia repetir, por favor?]]',
              'Quando não conseguiu ouvir ou compreender.'
            ],
            [
              'Reformular uma resposta',
              '[[Donc, si je comprends bien...|Então, se entendi corretamente...]]',
              'Demonstrar compreensão e confirmar detalhes.'
            ],
            [
              'Perguntar sobre condições',
              '[[Quelles sont les conditions à remplir ?|Quais são as condições que precisam ser cumpridas?]]',
              'Descobrir requisitos e restrições.'
            ],
            [
              'Encerrar educadamente',
              '[[Merci beaucoup pour ces renseignements.|Muito obrigado pelas informações.]]',
              'Finalizar a conversa com cortesia.'
            ]
        ]
      },
      { type: 'heading', text: '6. Armadilhas comuns para brasileiros' },
      {
        type: 'list',
        items: [
            'Fazer perguntas muito curtas sem desenvolver a conversa. Uma sequência de perguntas isoladas pode parecer mecânica. ' +
            'Reaja às respostas e peça informações complementares.',
            'Utilizar sempre a mesma estrutura interrogativa. Varie entre [[Est-ce que... ?|Será que...?]], [[Quel est... ?|Qual é...?]], [[Combien coûte... ' +
            '?|Quanto custa...?]] e [[Pourriez-vous... ?|Poderia...?]].',
            'Esquecer o registro formal. Como você está conversando com uma pessoa desconhecida em uma situação de atendimento, prefira [[vous|tratamento formal]] ' +
            'em vez de [[tu|tratamento informal]].',
          'Interromper o examinador ou ignorar suas respostas. A atividade exige interação, não apenas a leitura de uma lista preparada.',
          'Não pedir esclarecimentos quando a resposta é vaga. Aproveite informações incompletas para formular novas perguntas.',
          'Ficar em silêncio quando não conhece uma palavra. Reformule a pergunta utilizando um vocabulário que você domina.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com perguntas traduzidas literalmente',
        text:
          'Brasileiros frequentemente utilizam estruturas como [[Je veux savoir le prix.|Quero saber o preço.]] ' +
          'em situações nas quais uma formulação mais educada seria preferível. Embora a frase seja gramaticalmente possível, ela pode soar muito direta. ' +
          'Prefira [[J’aimerais connaître le prix.|Gostaria de saber o preço.]] ou [[Pourriez-vous m’indiquer le tarif ?|Poderia me informar o valor?]]. ' +
          'Outro erro é confundir [[demander|pedir ou perguntar]] com demandar. Em francês, [[demander des renseignements|solicitar informações]] ' +
          'é uma construção natural e muito útil nesta tarefa.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que o avaliador realmente espera',
        text:
          'A Seção A dura 5 minutos e a orientação oficial recomenda aproximadamente dez perguntas. ' +
          'A avaliação considera sua capacidade de obter informações, solicitar esclarecimentos, manter uma conversa formal e adaptar suas respostas às intervenções do examinador. ' +
          'Também são avaliados o vocabulário, a sintaxe e a pronúncia. ' +
          'Não basta preparar dez perguntas e pronunciá-las mecanicamente: é necessário ouvir, reagir e aprofundar as respostas. ' +
          'Uma boa estratégia é começar com perguntas gerais, passar para detalhes específicos e finalizar confirmando as informações mais importantes. ' +
          'Treine diferentes tipos de anúncio para não depender de um único roteiro.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A duração de 5 minutos, o telefonema sobre um anúncio, o examinador no papel de quem responde, a recomendação de cerca de dez perguntas, o formato presencial e os critérios de avaliação (informar-se, pedir esclarecimentos, manter uma conversa formal, léxico, sintaxe e pronúncia) vêm do material oficial de exemplos e da página de preparação do Le français des affaires. ' +
          'Nenhuma fonte confirma isto: que a avaliação considera adaptar as respostas às intervenções do examinador, a estratégia de ir de perguntas gerais a detalhes e confirmar no final, que os anúncios incluem moradia (o material cita emprego, serviços, lazer e anúncios públicos) e a ideia de que o tratamento com [[vous|o senhor, a senhora ou vocês]] é o esperado (deduzida de “conversa formal”). ' +
          'Trate tudo isso como conselho de preparação, não como regra da prova.'
      }
    ]
  },

  fr: {
    title: 'TEF – Expression orale, section A : obtenir des renseignements et poser des questions',
    summary:
      'Apprenez à mener une conversation en simulant un appel téléphonique afin d’obtenir des renseignements sur une annonce concernant un emploi, un logement, un service ou une activité. ' +
      'Vous pratiquerez les questions ouvertes et fermées, les demandes de précision, les formules de politesse et les stratégies nécessaires pour maintenir une conversation naturelle avec l’examinateur pendant les cinq minutes de l’épreuve.',
    blocks: [
      { type: 'heading', text: '1. Que demande cette activité ?' },
      {
        type: 'paragraph',
        text:
          'Dans la section A de l’expression orale du TEF Canada, vous recevez une annonce concernant un service ou une occasion et devez montrer votre intérêt en simulant un appel téléphonique pour obtenir davantage de renseignements. ' +
          'L’activité dure 5 minutes et les exemples officiels recommandent de poser une dizaine de questions. ' +
          'L’examinateur joue le rôle de la personne responsable de l’annonce et répond à vos questions. ' +
          'Même si la situation représente un appel téléphonique, l’épreuve se déroule en personne, dans le cadre d’une conversation avec l’examinateur. ' +
          'Votre objectif est d’obtenir des informations, de demander des précisions lorsque nécessaire et de maintenir une conversation formelle, claire et naturelle.'
      },
      { type: 'heading', text: '2. Comment se préparer avant de commencer' },
      {
        type: 'list',
        items: [
          'Identifiez le type d’annonce : il peut s’agir d’une offre d’emploi, d’une location de logement, d’un cours, d’une activité de loisirs ou d’un service.',
          'Observez les informations déjà disponibles et celles qui doivent encore être précisées.',
          'Préparez des questions sur le prix, les horaires, les disponibilités, l’emplacement, les conditions, les exigences et les démarches à effectuer.',
          'Commencez par une présentation polie, expliquez la raison de votre appel et montrez votre intérêt.',
          'Écoutez les réponses de l’examinateur et posez des questions complémentaires en fonction des informations obtenues.'
        ]
      },
      { type: 'heading', text: '3. Exemple pratique : annonce de location à Montréal' },
      { type: 'paragraph', text: 'Titre de l’annonce : Logement 3 ½ à louer près du métro Crémazie.' },
      {
        type: 'paragraph',
        text:
          'À louer : logement 3 ½ situé près de la station de métro Crémazie, à Montréal. Disponible dès le 1er juillet. Chauffage inclus. Électroménagers fournis. ' +
          'Immeuble avec buanderie. Pour obtenir plus d’informations ou organiser une visite, communiquez avec le propriétaire par téléphone.'
      },
      { type: 'heading', text: '4. Dix questions que vous pourriez poser' },
      {
        type: 'table',
        headers: ['Information recherchée', 'Question en français', 'Objectif'],
        rows: [
            [
              'Disponibilité',
              'Le logement est-il toujours disponible ?',
              'Vérifier si le logement est encore libre.'
            ],
            [
              'Prix',
              'Quel est le montant du loyer mensuel ?',
              'Connaître le coût de la location.'
            ],
            [
              'Chauffage',
              'Le chauffage est-il inclus dans le prix ?',
              'Vérifier les services compris.'
            ],
            [
              'Électricité',
              'L’électricité est-elle comprise également ?',
              'Préciser les dépenses supplémentaires.'
            ],
            [
              'Électroménagers',
              'Quels électroménagers sont fournis ?',
              'Identifier les équipements disponibles.'
            ],
            [
              'Buanderie',
              'Y a-t-il une buanderie dans l’immeuble ?',
              'Se renseigner sur les installations.'
            ],
            [
              'Date de disponibilité',
              'Le logement est-il disponible dès le 1er juillet ?',
              'Confirmer la date d’emménagement.'
            ],
            [
              'Bail',
              'Quelle est la durée du bail ?',
              'Connaître les conditions de location.'
            ],
            [
              'Stationnement',
              'Y a-t-il une place de stationnement ?',
              'Vérifier les possibilités de stationnement.'
            ],
            [
              'Visite',
              'Serait-il possible de visiter le logement cette semaine ?',
              'Demander un rendez-vous pour voir le logement.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Exemple pour approfondir la conversation : si l’examinateur indique que le chauffage est inclus, mais ne mentionne pas l’électricité, vous pouvez demander : « Vous avez indiqué que le chauffage était inclus. ' +
          'Pourriez-vous me confirmer si l’électricité est également comprise ? »'
      },
      { type: 'heading', text: '5. Comment poser des questions et demander des précisions' },
      {
        type: 'table',
        headers: ['Fonction', 'Expression en français', 'Utilisation'],
        rows: [
            [
              'Question ouverte',
              'Pourriez-vous me donner plus de détails sur... ?',
              'Obtenir une explication plus complète.'
            ],
            [
              'Demander une précision',
              'Pourriez-vous préciser ce point ?',
              'Approfondir une information.'
            ],
            [
              'Confirmer une information',
              'Est-ce que j’ai bien compris que... ?',
              'Vérifier si vous avez bien compris la réponse.'
            ],
            [
              'Demander de répéter',
              'Pourriez-vous répéter, s’il vous plaît ?',
              'Lorsque vous n’avez pas bien entendu ou compris.'
            ],
            [
              'Reformuler une réponse',
              'Donc, si je comprends bien...',
              'Montrer que vous avez compris et confirmer les détails.'
            ],
            [
              'Se renseigner sur les conditions',
              'Quelles sont les conditions à remplir ?',
              'Découvrir les exigences et les restrictions.'
            ],
            [
              'Terminer poliment',
              'Merci beaucoup pour ces renseignements.',
              'Terminer la conversation avec courtoisie.'
            ]
        ]
      },
      { type: 'heading', text: '6. Pièges fréquents pour les lusophones' },
      {
        type: 'list',
        items: [
            'Poser des questions trop courtes sans développer la conversation. Une succession de questions isolées peut sembler mécanique. ' +
            'Réagissez aux réponses et demandez des informations complémentaires.',
          'Toujours utiliser la même structure interrogative. Variez entre « Est-ce que... ? », « Quel est... ? », « Combien coûte... ? » et « Pourriez-vous... ? ».',
          'Oublier le registre formel. Comme vous parlez à une personne inconnue dans une situation de renseignement, préférez vous plutôt que tu.',
          'Interrompre l’examinateur ou ignorer ses réponses. L’activité exige une interaction et non la simple lecture d’une liste préparée.',
          'Ne pas demander de précisions lorsque la réponse est vague. Utilisez les informations incomplètes pour formuler de nouvelles questions.',
          'Rester silencieux lorsque vous ne connaissez pas un mot. Reformulez votre question en utilisant un vocabulaire que vous maîtrisez.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux questions traduites littéralement',
        text:
          'Les lusophones utilisent parfois des constructions comme « Je veux savoir le prix » dans des situations où une formulation plus polie serait préférable. ' +
          'Même si cette phrase est grammaticalement possible, elle peut sembler trop directe. ' +
          'Préférez « J’aimerais connaître le prix » ou « Pourriez-vous m’indiquer le tarif ? ». ' +
          'Une autre erreur consiste à confondre « demander » avec le portugais demandar. ' +
          'En français, « demander des renseignements » est une construction naturelle et très utile dans cette tâche.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce que l’examinateur attend réellement',
        text:
          'La section A dure 5 minutes et les consignes officielles recommandent de poser une dizaine de questions. ' +
          'L’évaluation porte sur votre capacité à obtenir des renseignements, à demander des précisions, à maintenir une conversation formelle et à adapter vos réponses aux interventions de l’examinateur. ' +
          'Le vocabulaire, la syntaxe et la prononciation sont également évalués. ' +
          'Il ne suffit pas de préparer dix questions et de les prononcer mécaniquement : vous devez écouter, réagir et approfondir les réponses. ' +
          'Une bonne stratégie consiste à commencer par des questions générales, à passer ensuite aux détails et à terminer en confirmant les informations les plus importantes. ' +
          'Entraînez-vous avec différents types d’annonces afin de ne pas dépendre d’un seul scénario.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La durée de 5 minutes, l’appel téléphonique au sujet d’une annonce, l’examinateur dans le rôle de la personne qui répond, la recommandation d’une dizaine de questions, le format en face à face et les critères d’évaluation (s’informer, faire préciser les réponses, tenir une conversation formelle, lexique, syntaxe et prononciation) proviennent du document officiel d’exemples et de la page de préparation du Français des affaires. ' +
          'Aucune source ne confirme ceci : que l’évaluation tient compte de l’adaptation des réponses aux interventions de l’examinateur, la stratégie qui va des questions générales aux détails puis à la confirmation finale, que les annonces comprennent des logements (le document cite des offres d’emploi, de services, des loisirs et des annonces publiques) et l’idée que le vouvoiement est attendu (déduite de « conversation formelle »). ' +
          'Considérez tout cela comme des conseils de préparation, et non comme des règles de l’examen.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Exemples de sujets – Épreuve d’expression orale du TEF – Le français des affaires, CCI Paris Île-de-France',
      url: 'https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2024/10/tef-exemples-epreuve-eo.pdf'
    },
    {
      title: 'Se préparer à l’épreuve d’expression orale du TEF – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/se-preparer-a-lepreuve-dexpression-orale-du-tef/'
    },
    {
      title: 'TEF Canada – Présentation des épreuves – Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
