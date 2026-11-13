import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-infinitivo-passado',

  pt: {
    title: 'Infinitivo passado: après avoir fait e avant de',
    summary:
      'Aprenda a utilizar o infinitivo passado para indicar que uma ação foi concluída antes de outra. ' +
      'Entenda a diferença entre après avoir + particípio passado e avant de + infinitivo, reconhecendo também quando utilizar o infinitivo simples, o infinitivo passado ou uma oração com sujeito próprio.',
    blocks: [
      { type: 'heading', text: 'Formação do infinitivo passado' },
      {
        type: 'paragraph',
        text:
          'O [[infinitif passé|infinitivo passado]] é um tempo composto do infinitivo, formado pelo verbo auxiliar [[avoir|ter]] ou [[être|ser / estar]] ' +
          'no infinitivo, seguido do [[participe passé|particípio passado]] do verbo principal. Ele expressa uma ação concluída antes de outra ação mencionada na frase. ' +
          'Exemplos: [[avoir terminé|ter terminado]], [[être arrivé|ter chegado]] e [[s’être inscrit|ter se inscrito]]. ' +
          'A escolha do auxiliar segue as mesmas regras dos tempos compostos, e o particípio pode precisar de concordância. ' +
          'O OQLF registra que o infinitivo passado marca a anterioridade e pode ser ativo ([[avoir lavé|ter lavado]]), passivo ([[avoir été lavé|ter sido lavado]]) ou pronominal ([[s’être lavé|ter se lavado]]).'
      },
      {
        type: 'table',
        headers: ['Construção', 'Exemplo', 'Explicação'],
        rows: [
            [
              'Com avoir',
              '[[avoir mangé|ter comido]]',
              'Auxiliar avoir + particípio passado.'
            ],
            [
              'Com être',
              '[[être parti|ter partido]]',
              'Auxiliar être + particípio passado.'
            ],
            [
              'Verbo pronominal',
              '[[s’être préparé|ter se preparado]]',
              'Pronome reflexivo + être + particípio passado.'
            ],
            [
              'Forma negativa',
              '[[ne pas avoir terminé|não ter terminado]]',
              'A negação fica antes do auxiliar.'
            ]
        ]
      },
      { type: 'heading', text: 'Après, avant de e a relação temporal' },
      {
        type: 'paragraph',
        text:
          'A expressão [[après avoir + participe passé|depois de ter + particípio passado]] indica que uma ação já foi concluída antes da ação principal. ' +
          'Quando [[après|depois]] ' +
          'é seguido diretamente por um verbo no infinitivo, utiliza-se o infinitivo passado: [[Après avoir terminé son travail, elle est rentrée chez elle.|Depois de terminar seu trabalho, ela voltou para casa.]] ' +
          'Já [[avant de + infinitif présent|antes de + infinitivo presente]] ' +
          'indica uma ação que ainda será realizada em relação à ação principal: [[Avant de partir, elle vérifie ses documents.|Antes de sair, ela verifica seus documentos.]]'
      },
      {
        type: 'paragraph',
        text:
          'Também é possível utilizar o infinitivo passado depois de [[avant de|antes de]] ' +
          'quando se deseja destacar que uma ação precisa estar concluída antes de outra: [[Avant d’avoir signé le contrat, le client demande des précisions.|Antes de ter assinado o contrato, o cliente pede esclarecimentos.]] ' +
          'Compare as duas estruturas: [[avant de signer|antes de assinar]] ' +
          'apresenta a ação sem destacar sua conclusão, enquanto [[avant d’avoir signé|antes de ter assinado]] enfatiza o aspecto concluído da ação.'
      },
      {
        type: 'paragraph',
        text:
          'Nas construções adverbiais com infinitivo, o sujeito implícito normalmente deve ser o mesmo da oração principal. ' +
          'Segundo o OQLF, em textos formais, como a correspondência administrativa e os trabalhos escolares, essa regra deve ser respeitada, embora na prática o contexto muitas vezes evite a ambiguidade. Quando os sujeitos são diferentes, utilize uma oração subordinada com verbo conjugado: [[Après que Nadia a quitté le bureau, son collègue a fermé la porte.|Depois que Nadia saiu do escritório, seu colega fechou a porta.]] ' +
          '[[Avant que les employés partent, la directrice vérifie les locaux.|Antes que os funcionários saiam, a diretora verifica as instalações.]] ' +
          'Observe que [[après que|depois que]] é seguido do indicativo, enquanto [[avant que|antes que]] exige o subjuntivo.'
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'paragraph',
        text:
          '[[Après avoir reçu son permis de travail, Rafael a commencé à chercher un appartement à Toronto.|Depois de receber sua autorização de trabalho, Rafael começou a procurar um apartamento em Toronto.]] ' +
          '[[Avant de signer le bail, il a vérifié les conditions du contrat.|Antes de assinar o contrato de aluguel, ele verificou as condições do contrato.]] ' +
          '[[Après s’être installé dans son nouveau logement, il a communiqué sa nouvelle adresse à son employeur.|Depois de se instalar em sua nova moradia, ele comunicou seu novo endereço ao empregador.]] ' +
          '[[Avant d’avoir terminé toutes les démarches, il ne pouvait pas confirmer sa date d’entrée en fonction.|Antes de ter concluído todos os procedimentos, ele não podia confirmar sua data de início no trabalho.]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Cuidado com après e com o sujeito implícito',
        text:
          'Em textos formais, prefira o infinitivo passado depois de [[après|depois de]]: diga [[après avoir mangé|depois de ter comido]], e não [[après manger|depois de comer (evite)]]. ' +
          'Outro erro é esquecer que [[avant de|antes de]] normalmente exige o infinitivo, e não um verbo conjugado. ' +
          'Atenção também ao sujeito: o OQLF cita como construção defeituosa [[Après avoir quitté la salle, mon téléphone a sonné.|Depois de sair da sala, meu telefone tocou. (errado)]] ' +
          'porque o sujeito implícito de sair seria o telefone. ' +
          'Reformule com [[Après que j’ai quitté la salle, mon téléphone a sonné.|Depois que saí da sala, meu telefone tocou.]]'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Demonstre precisão ao organizar acontecimentos',
        text:
          'No TCF Canada, a expressão escrita tem 3 exercícios (60 minutos), e a compreensão escrita tem 39 questões de múltipla escolha em 60 minutos. ' +
          'No TEF Canada, a compreensão escrita e a expressão escrita também são provas obrigatórias. ' +
          'Pratique explicar procedimentos, experiências profissionais e acontecimentos anteriores utilizando construções como [[Après avoir obtenu mon diplôme, j’ai commencé à travailler.|Depois de obter meu diploma, comecei a trabalhar.]] ' +
          'e [[Avant de prendre une décision, il est important de comparer les options.|Antes de tomar uma decisão, é importante comparar as opções.]] ' +
          'Não utilize o infinitivo passado apenas para tornar a frase mais complexa: escolha a estrutura que representa corretamente a relação temporal e os sujeitos envolvidos.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam a formação do [[infinitif passé|infinitivo passado]] e seu valor de anterioridade (formas ativa, passiva e pronominal), a regra do sujeito implícito do infinitivo, e [[après que|depois que]] com indicativo e [[avant que|antes que]] com subjuntivo. ' +
          'O FEI e o Le français des affaires confirmam as provas de compreensão e expressão escrita. ' +
          'Não têm fonte: a preferência por [[après avoir mangé|depois de ter comido]] em vez de [[après manger|depois de comer]], o infinitivo passado depois de [[avant de|antes de]] com valor enfático, os exemplos e a dica de treino. ' +
          'Essa dica é conselho de preparação, não regra oficial nem exigência das provas. ' +
          'A página do OQLF sobre o adjetivo [[avant|antes]] citada no JSON original trata de outro assunto e não foi usada.'
      }
    ]
  },

  fr: {
    title: 'L’infinitif passé : après avoir fait et avant de',
    summary:
      'Apprenez à utiliser l’infinitif passé pour indiquer qu’une action est accomplie avant une autre. ' +
      'Comprenez la différence entre après avoir + participe passé et avant de + infinitif, et sachez également quand employer l’infinitif simple, l’infinitif passé ou une proposition avec son propre sujet.',
    blocks: [
      { type: 'heading', text: 'Formation de l’infinitif passé' },
      {
        type: 'paragraph',
        text:
          'L’infinitif passé est un temps composé de l’infinitif, formé de l’auxiliaire avoir ou être à l’infinitif, suivi du participe passé du verbe principal. ' +
          'Il exprime une action accomplie avant une autre action mentionnée dans la phrase. Exemples : avoir terminé, être arrivé et s’être inscrit. ' +
          'L’OQLF précise qu’il peut être actif (avoir lavé), passif (avoir été lavé) ou pronominal (s’être lavé). ' +
          'Le choix de l’auxiliaire suit les mêmes règles que pour les temps composés, et le participe passé peut nécessiter un accord.'
      },
      {
        type: 'table',
        headers: ['Construction', 'Exemple', 'Explication'],
        rows: [
            [
              'Avec avoir',
              'avoir mangé',
              'Auxiliaire avoir + participe passé.'
            ],
            [
              'Avec être',
              'être parti',
              'Auxiliaire être + participe passé.'
            ],
            [
              'Verbe pronominal',
              's’être préparé',
              'Pronom réfléchi + être + participe passé.'
            ],
            [
              'Forme négative',
              'ne pas avoir terminé',
              'La négation précède l’auxiliaire.'
            ]
        ]
      },
      { type: 'heading', text: 'Après, avant de et la relation temporelle' },
      {
        type: 'paragraph',
        text:
          'L’expression après avoir + participe passé indique qu’une action est déjà accomplie avant l’action principale. ' +
          'Lorsque après est directement suivi d’un verbe à l’infinitif, on utilise l’infinitif passé : Après avoir terminé son travail, elle est rentrée chez elle. ' +
          'En revanche, avant de + infinitif présent indique une action qui sera réalisée avant l’action principale : Avant de partir, elle vérifie ses documents.'
      },
      {
        type: 'paragraph',
        text:
          'Il est également possible d’utiliser l’infinitif passé après avant de lorsque l’on veut souligner qu’une action doit être accomplie avant une autre : Avant d’avoir signé le contrat, le client demande des précisions. ' +
          'Comparez les deux constructions : avant de signer présente l’action sans insister sur son accomplissement, tandis que avant d’avoir signé met l’accent sur son aspect accompli.'
      },
      {
        type: 'paragraph',
        text:
          'Dans les constructions adverbiales avec un infinitif, le sujet implicite doit normalement être le même que celui de la proposition principale. ' +
          'Selon l’OQLF, dans les textes soignés, comme la correspondance administrative et les travaux scolaires, cette règle doit être respectée, même si, dans l’usage, le contexte évite souvent l’équivoque. Lorsque les sujets sont différents, utilisez une proposition subordonnée avec un verbe conjugué : Après que Nadia a quitté le bureau, son collègue a fermé la porte. ' +
          'Avant que les employés partent, la directrice vérifie les locaux. Remarquez qu’après que est suivi de l’indicatif, tandis qu’avant que demande le subjonctif.'
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'paragraph',
        text:
          'Après avoir reçu son permis de travail, Rafael a commencé à chercher un appartement à Toronto. Avant de signer le bail, il a vérifié les conditions du contrat. ' +
          'Après s’être installé dans son nouveau logement, il a communiqué sa nouvelle adresse à son employeur. ' +
          'Avant d’avoir terminé toutes les démarches, il ne pouvait pas confirmer sa date d’entrée en fonction.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à après et au sujet implicite',
        text:
          'Dans les textes soignés, préférez l’infinitif passé après après : dites après avoir mangé et non après manger. ' +
          'Une autre erreur consiste à oublier que avant de demande normalement un infinitif et non un verbe conjugué. ' +
          'Attention également au sujet : l’OQLF cite comme construction boiteuse « Après avoir quitté la salle, mon téléphone a sonné », car le sujet implicite du verbe quitter serait le téléphone. ' +
          'Reformulez avec « Après que j’ai quitté la salle, mon téléphone a sonné ».'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Montrez votre précision dans l’organisation des événements',
        text:
          'Au TCF Canada, l’expression écrite comprend 3 exercices (60 minutes) et la compréhension écrite comprend 39 questions à choix multiple en 60 minutes. ' +
          'Au TEF Canada, la compréhension écrite et l’expression écrite font aussi partie des épreuves obligatoires. ' +
          'Entraînez-vous à expliquer des procédures, des expériences professionnelles et des événements antérieurs en utilisant des constructions comme Après avoir obtenu mon diplôme, j’ai commencé à travailler et Avant de prendre une décision, il est important de comparer les options. ' +
          'N’utilisez pas l’infinitif passé uniquement pour rendre une phrase plus complexe : choisissez la structure qui représente correctement la relation temporelle et les sujets concernés.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment la formation de l’infinitif passé et sa valeur d’antériorité (formes active, passive et pronominale), la règle du sujet implicite de l’infinitif, et après que avec l’indicatif et avant que avec le subjonctif. ' +
          'Le FEI et Le français des affaires confirment les épreuves de compréhension et d’expression écrites. ' +
          'Ne sont pas sourcés : la préférence pour après avoir mangé plutôt que après manger, l’infinitif passé après avant de avec une valeur d’insistance, les exemples et le conseil d’entraînement. ' +
          'Ce conseil est une recommandation de préparation, et non une règle officielle ni une exigence des examens. ' +
          'La page de l’OQLF sur l’adjectif avant citée dans le JSON d’origine porte sur un autre sujet et n’a pas été utilisée.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Généralités sur l’infinitif — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24205/la-grammaire/le-verbe/modes/infinitif/generalites-sur-linfinitif'
    },
    {
      title: 'Logique syntaxique : sujet sous-entendu de l’infinitif — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24711/la-syntaxe/constructions-syntaxiques-boiteuses/logique-syntaxique-sujet-sous-entendu-de-linfinitif'
    },
    {
      title: 'Mode verbal avec après que et avant que — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21132/la-grammaire/le-verbe/modes/concordance-des-temps/mode-verbal-avec-apres-que-et-avant-que'
    },
    {
      title: 'TCF Canada — France Éducation international',
      url: 'https://www.france-education-international.fr/test/tcf-canada'
    },
    {
      title: 'TEF Canada — Présentation des épreuves — Le français des affaires',
      url: 'https://www.lefrancaisdesaffaires.fr/candidat/test-evaluation-francais/tef-canada/presentation/'
    }
  ]
}

export default content
