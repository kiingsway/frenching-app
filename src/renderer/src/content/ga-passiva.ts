import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-passiva',

  pt: {
    title: 'A voz passiva em francês',
    summary:
      'Aprenda a transformar frases da voz ativa para a voz passiva e a destacar quem recebe uma ação em vez de quem a realiza. ' +
      'Domine a formação com o auxiliar être, a concordância do particípio passado, os diferentes tempos verbais e as situações em que a transformação passiva não é possível.',
    blocks: [
      { type: 'heading', text: '1. O que é a voz passiva' },
      {
        type: 'paragraph',
        text:
          'Na voz ativa, o sujeito realiza a ação. Na voz passiva, o sujeito recebe ou sofre essa ação. ' +
          'A transformação permite mudar o foco da frase: em vez de destacar quem realizou a ação, destacamos a pessoa ou a coisa afetada por ela. ' +
          'Compare: [[Le service traite les demandes.|O serviço processa as solicitações.]] ' +
          '[[Les demandes sont traitées par le service.|As solicitações são processadas pelo serviço.]] Na segunda frase, o foco passa do serviço para as solicitações.'
      },
      {
        type: 'table',
        headers: ['Voz ativa', 'Voz passiva', 'Transformação'],
        rows: [
            [
              '[[L’équipe prépare les documents.|A equipe prepara os documentos.]]',
              '[[Les documents sont préparés par l’équipe.|Os documentos são preparados pela equipe.]]',
              'O complemento direto passa a ser o sujeito.'
            ],
            [
              '[[Le directeur a approuvé la demande.|O diretor aprovou a solicitação.]]',
              '[[La demande a été approuvée par le directeur.|A solicitação foi aprovada pelo diretor.]]',
              'O tempo passado é preservado.'
            ],
            [
              '[[La municipalité construira le bâtiment.|A prefeitura construirá o edifício.]]',
              '[[Le bâtiment sera construit par la municipalité.|O edifício será construído pela prefeitura.]]',
              'O tempo futuro é preservado.'
            ]
        ]
      },
      { type: 'heading', text: '2. Como formar a voz passiva' },
      {
        type: 'paragraph',
        text:
          'A estrutura básica é [[être|ser / estar]] conjugado no tempo desejado, seguido do particípio passado do verbo principal. ' +
          'Ao transformar uma frase ativa em passiva, o complemento direto da frase original passa a ser o sujeito. ' +
          'O sujeito original torna-se o complemento que indica quem realizou a ação, geralmente introduzido por [[par|por]]. ' +
          'Essa informação pode ser omitida quando não é conhecida ou não é importante.'
      },
      {
        type: 'table',
        headers: ['Tempo verbal', 'Estrutura passiva', 'Exemplo'],
        rows: [
            [
              'Presente',
              '[[être|ser]] no presente + particípio',
              '[[Le dossier est examiné.|O processo é examinado.]]'
            ],
            [
              'Passado composto',
              '[[avoir|ter]] + [[été|sido]] + particípio',
              '[[Le dossier a été examiné.|O processo foi examinado.]]'
            ],
            [
              'Imperfeito',
              '[[être|ser]] no imperfeito + particípio',
              '[[Le dossier était examiné.|O processo era examinado.]]'
            ],
            [
              'Mais-que-perfeito',
              '[[avoir|ter]] no imperfeito + [[été|sido]] + particípio',
              '[[Le dossier avait été examiné.|O processo tinha sido examinado.]]'
            ],
            [
              'Futuro simples',
              '[[être|ser]] no futuro + particípio',
              '[[Le dossier sera examiné.|O processo será examinado.]]'
            ],
            [
              'Condicional presente',
              '[[être|ser]] no condicional + particípio',
              '[[Le dossier serait examiné.|O processo seria examinado.]]'
            ]
        ]
      },
      { type: 'heading', text: '3. Concordância e complemento de agente' },
      {
        type: 'paragraph',
        text:
          'Na voz passiva, o particípio passado concorda em gênero e número com o sujeito. ' +
          'O agente, isto é, quem realiza a ação, normalmente é introduzido por [[par|por]]. Em alguns contextos, também pode aparecer com [[de|de]]. ' +
          'A escolha depende da construção e do verbo utilizado.'
      },
      {
        type: 'list',
        items: [
          'Masculino singular: [[Le rapport a été rédigé.|O relatório foi redigido.]]',
          'Feminino singular: [[La demande a été approuvée.|A solicitação foi aprovada.]]',
          'Masculino plural: [[Les rapports ont été rédigés.|Os relatórios foram redigidos.]]',
          'Feminino plural: [[Les demandes ont été approuvées.|As solicitações foram aprovadas.]]',
          'Agente com [[par|por]]: [[Le bâtiment a été conçu par un architecte.|O edifício foi projetado por um arquiteto.]]',
          'Agente com [[de|de]]: [[Elle est appréciée de ses collègues.|Ela é apreciada pelos colegas.]]',
          'Agente omitido: [[La décision a été annoncée hier.|A decisão foi anunciada ontem.]]'
        ]
      },
      { type: 'heading', text: '4. Exemplos em situações cotidianas' },
      {
        type: 'paragraph',
        text:
          'Imagine que um centro comunitário de Toronto recebe inscrições para cursos, verifica documentos e comunica os resultados aos participantes. ' +
          'A voz passiva permite descrever esses procedimentos destacando as etapas do processo, sem precisar repetir quem é responsável por cada ação.'
      },
      {
        type: 'paragraph',
        text:
          '[[Les demandes sont reçues par le centre communautaire.|As solicitações são recebidas pelo centro comunitário.]] ' +
          '[[Les documents sont vérifiés par l’équipe administrative.|Os documentos são verificados pela equipe administrativa.]] ' +
          '[[Les dossiers incomplets seront retournés aux candidats.|Os processos incompletos serão devolvidos aos candidatos.]] ' +
          '[[Les inscriptions ont été confirmées par courriel.|As inscrições foram confirmadas por e-mail.]]'
      },
      { type: 'heading', text: '5. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Nem toda estrutura com être é voz passiva',
        text:
          'Um erro frequente é considerar qualquer verbo acompanhado de [[être|ser / estar]] e particípio passado uma construção passiva. ' +
          'Compare [[Ma collègue est arrivée à 8 h.|Minha colega chegou às 8h.]] ' +
          'e [[Ma collègue a été accueillie par le directeur.|Minha colega foi recebida pelo diretor.]] ' +
          'Na primeira frase, o verbo indica uma chegada e está na voz ativa, apesar de utilizar [[être|ser / estar]] como auxiliar. ' +
          'Na segunda, a colega recebe a ação de ser recebida, portanto a construção é passiva.'
      },
      {
        type: 'list',
        items: [
            'Não use o presente para dizer que a ação já aconteceu: [[La lettre est envoyée.|A carta é enviada.]] ' +
            'Para uma ação já concluída, use o passé composé do verbo [[être|ser / estar]], que dá [[a été|foi]] + particípio: [[La lettre a été envoyée.|A carta foi enviada.]]',
          'Não esqueça a concordância do particípio com o sujeito: [[Les lettres ont été envoyées.|As cartas foram enviadas.]]',
            'Não transforme verbos que exigem complemento indireto. [[Elle parle à son collègue.|Ela conversa com seu colega.]] ' +
            'não permite a transformação passiva correspondente.',
          'Não pense que o agente precisa aparecer obrigatoriamente. [[Le problème a été résolu.|O problema foi resolvido.]] é uma frase passiva completa.',
            'Não altere o tempo verbal durante a transformação. ' +
            'Uma frase no futuro deve continuar no futuro: [[Le service traitera la demande.|O serviço processará a solicitação.]] ' +
            'torna-se [[La demande sera traitée par le service.|A solicitação será processada pelo serviço.]]',
            'Não confunda o complemento de agente com qualquer expressão introduzida por [[par|por]]. ' +
            'Em [[Il est arrivé par le train.|Ele chegou de trem.]], essa expressão indica o meio de transporte, não o agente de uma ação passiva.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique transformar frases da voz ativa para a passiva, preservando o tempo verbal e fazendo corretamente a concordância do particípio. ' +
          'Na expressão escrita, reconheça como essa construção pode aparecer em notícias, relatórios, comunicados e explicações de procedimentos. ' +
          'Na compreensão oral, identifique quem realiza a ação e quem a recebe. ' +
          'Para buscar um desempenho B2, saiba também reconhecer quando a voz passiva é adequada e quando a voz ativa transmite a informação de maneira mais clara e natural.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A página do OQLF sobre a forma passiva confirma a formação com être em todos os tempos (présent, futur, passé composé, plus-que-parfait), o complemento agente com par e, mais raramente, de (Maryse est appréciée de tous ses collègues), a restrição aos verbos transitivos diretos e a diferença entre voz passiva e voz ativa com être (Luis est arrivé par le train). ' +
          'A página do OQLF sobre a concordância do particípio com être abre, mas só o título foi conferido. ' +
          'A página do Portal linguistique du Canada sobre o complemento de agente não pôde ser aberta por causa de uma verificação de segurança do site. ' +
          'Nenhuma fonte confirma o condicional (serait examiné) e as recomendações de aplicação ao TEF Canada e ao TCF Canada, nem a referência ao nível B2: são sugestões de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'La voix passive',
    summary:
      'Apprenez à transformer des phrases de la voix active à la voix passive et à mettre en évidence la personne ou la chose qui reçoit une action plutôt que celle qui la réalise. ' +
      'Maîtrisez la formation avec l’auxiliaire être, l’accord du participe passé, les différents temps verbaux et les situations dans lesquelles la transformation passive est impossible.',
    blocks: [
      { type: 'heading', text: '1. Qu’est-ce que la voix passive ?' },
      {
        type: 'paragraph',
        text:
          'À la voix active, le sujet réalise l’action. À la voix passive, le sujet reçoit ou subit cette action. ' +
          'La transformation permet de modifier le point de vue de la phrase : au lieu de mettre en évidence la personne qui réalise l’action, on met en évidence la personne ou la chose concernée. ' +
          'Comparez : « Le service traite les demandes. » « Les demandes sont traitées par le service. » Dans la deuxième phrase, l’accent passe du service aux demandes.'
      },
      {
        type: 'table',
        headers: ['Voix active', 'Voix passive', 'Transformation'],
        rows: [
            [
              'L’équipe prépare les documents.',
              'Les documents sont préparés par l’équipe.',
              'Le complément direct devient le sujet.'
            ],
            [
              'Le directeur a approuvé la demande.',
              'La demande a été approuvée par le directeur.',
              'Le temps du passé est conservé.'
            ],
            [
              'La municipalité construira le bâtiment.',
              'Le bâtiment sera construit par la municipalité.',
              'Le futur est conservé.'
            ]
        ]
      },
      { type: 'heading', text: '2. Comment former la voix passive' },
      {
        type: 'paragraph',
        text:
          'La structure de base est l’auxiliaire être conjugué au temps souhaité, suivi du participe passé du verbe principal. ' +
          'Lorsqu’on transforme une phrase active en phrase passive, le complément direct de la phrase originale devient le sujet. ' +
          'Le sujet original devient le complément qui indique qui a réalisé l’action, généralement introduit par par. ' +
          'Ce complément peut être omis lorsqu’il est inconnu ou peu important.'
      },
      {
        type: 'table',
        headers: ['Temps verbal', 'Structure passive', 'Exemple'],
        rows: [
            [
              'Présent',
              'être au présent + participe passé',
              'Le dossier est examiné.'
            ],
            [
              'Passé composé',
              'avoir + été + participe passé',
              'Le dossier a été examiné.'
            ],
            [
              'Imparfait',
              'être à l’imparfait + participe passé',
              'Le dossier était examiné.'
            ],
            [
              'Plus-que-parfait',
              'avoir à l’imparfait + été + participe passé',
              'Le dossier avait été examiné.'
            ],
            [
              'Futur simple',
              'être au futur + participe passé',
              'Le dossier sera examiné.'
            ],
            [
              'Conditionnel présent',
              'être au conditionnel + participe passé',
              'Le dossier serait examiné.'
            ]
        ]
      },
      { type: 'heading', text: '3. L’accord et le complément d’agent' },
      {
        type: 'paragraph',
        text:
          'À la voix passive, le participe passé s’accorde en genre et en nombre avec le sujet. ' +
          'L’agent, c’est-à-dire la personne qui réalise l’action, est normalement introduit par par. Dans certains contextes, il peut également être introduit par de. ' +
          'Le choix dépend de la construction et du verbe utilisé.'
      },
      {
        type: 'list',
        items: [
          'Masculin singulier : « Le rapport a été rédigé. »',
          'Féminin singulier : « La demande a été approuvée. »',
          'Masculin pluriel : « Les rapports ont été rédigés. »',
          'Féminin pluriel : « Les demandes ont été approuvées. »',
          'Agent introduit par par : « Le bâtiment a été conçu par un architecte. »',
          'Agent introduit par de : « Elle est appréciée de ses collègues. »',
          'Agent omis : « La décision a été annoncée hier. »'
        ]
      },
      { type: 'heading', text: '4. Exemples dans des situations quotidiennes' },
      {
        type: 'paragraph',
        text:
          'Imaginez qu’un centre communautaire de Toronto reçoit des inscriptions à des cours, vérifie les documents et communique les résultats aux participants. ' +
          'La voix passive permet de décrire ces procédures en mettant l’accent sur les différentes étapes, sans devoir répéter qui est responsable de chaque action.'
      },
      {
        type: 'paragraph',
        text:
          'Les demandes sont reçues par le centre communautaire. Les documents sont vérifiés par l’équipe administrative. ' +
          'Les dossiers incomplets seront retournés aux candidats. Les inscriptions ont été confirmées par courriel.'
      },
      { type: 'heading', text: '5. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Toute construction avec être n’est pas une phrase passive',
        text:
          'Une erreur fréquente consiste à considérer tout verbe accompagné de être et d’un participe passé comme une construction passive. ' +
          'Comparez « Ma collègue est arrivée à 8 h » et « Ma collègue a été accueillie par le directeur ». ' +
          'Dans la première phrase, le verbe exprime une arrivée et reste à la voix active, même s’il utilise être comme auxiliaire. ' +
          'Dans la deuxième, la collègue reçoit l’action d’être accueillie ; la construction est donc passive.'
      },
      {
        type: 'list',
        items: [
          'N’utilisez pas le présent pour dire que l’action a déjà eu lieu : « La lettre est envoyée ». Pour une action déjà accomplie, utilisez le passé composé du verbe être, ce qui donne « a été » suivi du participe passé : « La lettre a été envoyée ».',
          'N’oubliez pas l’accord du participe avec le sujet : « Les lettres ont été envoyées ».',
          'Ne transformez pas les verbes qui exigent un complément indirect. « Elle parle à son collègue » ne permet pas la transformation passive correspondante.',
          'Ne pensez pas que l’agent doit obligatoirement être exprimé. « Le problème a été résolu » est une phrase passive complète.',
            'Ne modifiez pas le temps verbal pendant la transformation. ' +
            'Une phrase au futur doit rester au futur : « Le service traitera la demande » devient « La demande sera traitée par le service ».',
            'Ne confondez pas le complément d’agent avec tous les groupes introduits par par. ' +
            'Dans « Il est arrivé par le train », ce groupe indique le moyen de transport et non l’agent d’une action passive.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous à transformer des phrases de la voix active à la voix passive, en conservant le temps verbal et en faisant correctement l’accord du participe. ' +
          'En expression écrite, apprenez à reconnaître cette construction dans les articles de presse, les rapports, les communiqués et les explications de procédures. ' +
          'En compréhension orale, identifiez qui réalise l’action et qui la reçoit. ' +
          'Pour viser le niveau B2, sachez également reconnaître les situations où la voix passive est appropriée et celles où la voix active transmet l’information de façon plus claire et naturelle.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La page de l’OQLF sur la forme passive confirme la formation avec être à tous les temps (présent, futur, passé composé, plus-que-parfait), le complément d’agent avec par et, plus rarement, de (Maryse est appréciée de tous ses collègues), la restriction aux verbes transitifs directs et la différence entre la voix passive et la voix active avec être (Luis est arrivé par le train). ' +
          'La page de l’OQLF sur l’accord du participe avec être s’ouvre, mais seul le titre a été vérifié. ' +
          'La page du Portail linguistique du Canada sur le complément d’agent n’a pas pu être ouverte à cause d’une vérification de sécurité du site. ' +
          'Aucune source ne confirme le conditionnel (serait examiné) ni les recommandations d’application au TEF Canada et au TCF Canada, ni la référence au niveau B2 : ce sont des suggestions de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – Phrase à la forme passive',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22950/la-grammaire/la-grammaire-actuelle/la-phrase/phrase-a-la-forme-passive'
    },
    {
      title: 'OQLF – Accord du participe passé employé avec l’auxiliaire être',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21547/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-etre/accord-du-participe-passe-employe-avec-lauxiliaire-etre'
    },
    {
      title: 'Portail linguistique du Canada – Complément d’agent',
      url: 'https://nos-langues.canada.ca/fr/cles-de-la-redaction/complement-dagent'
    }
  ]
}

export default content
