import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-subjonctif',

  pt: {
    title: 'Passado do subjuntivo e conjunções que exigem o subjuntivo',
    summary:
      'Aprenda a formar e utilizar o passado do subjuntivo para expressar ações concluídas em estruturas de concessão, finalidade e anterioridade. ' +
      'Domine também as conjunções que exigem o subjuntivo e as diferenças em relação às construções que pedem o indicativo.',
    blocks: [
      { type: 'heading', text: 'Formação e significado do passado do subjuntivo' },
      {
        type: 'paragraph',
        text:
          'O [[passé du subjonctif|passado do subjuntivo]] é um tempo composto formado pelo [[présent du subjonctif|presente do subjuntivo]] do auxiliar [[avoir|ter]] ' +
          'ou [[être|ser / estar]], seguido do particípio passado do verbo principal. A escolha do auxiliar segue as mesmas regras dos demais tempos compostos. ' +
          'Exemplos de formação: [[que j’aie terminé|que eu tenha terminado]] e [[qu’elle soit arrivée|que ela tenha chegado]].'
      },
      {
        type: 'paragraph',
        text:
          'Esse tempo apresenta uma ação como concluída antes do momento de referência da oração principal. ' +
          'Portanto, o passado do subjuntivo não indica necessariamente que o acontecimento ocorreu no passado do calendário. ' +
          'Compare: [[Bien qu’elle soit fatiguée, elle continue à travailler.|Embora esteja cansada, ela continua trabalhando.]] ' +
          '[[Bien qu’elle ait terminé son rapport, elle attend encore une réponse.|Embora tenha terminado seu relatório, ela ainda espera uma resposta.]] ' +
          'Na primeira frase, o estado de cansaço é apresentado como simultâneo à ação; na segunda, a conclusão do relatório é anterior à espera.'
      },
      { type: 'heading', text: 'Conjunções seguidas do subjuntivo' },
      {
        type: 'table',
        headers: ['Conjunção em francês', 'Modo verbal', 'Ideia expressa'],
        rows: [
            [
              '[[bien que|embora]]',
              '[[subjonctif|subjuntivo]]',
              'Concessão ou oposição'
            ],
            [
              '[[pour que / afin que|para que / a fim de que]]',
              '[[subjonctif|subjuntivo]]',
              'Finalidade ou objetivo'
            ],
            [
              '[[avant que|antes que]]',
              '[[subjonctif|subjuntivo]]',
              'Ação ainda não realizada no momento de referência'
            ],
            [
              '[[jusqu’à ce que|até que]]',
              '[[subjonctif|subjuntivo]]',
              'Limite temporal'
            ],
            [
              '[[à condition que|desde que / com a condição de que]]',
              '[[subjonctif|subjuntivo]]',
              'Condição ou exigência'
            ],
            [
              '[[après que|depois que]]',
              '[[indicatif|indicativo]]',
              'Acontecimento apresentado como realizado ou certo'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'A escolha entre presente e passado do subjuntivo depende da relação temporal entre as ações. ' +
          'Use o presente quando a ação subordinada é simultânea ou posterior ao momento de referência e o passado quando ela é apresentada como concluída anteriormente. ' +
          'Com [[être|ser / estar]], o particípio concorda em gênero e número com o sujeito. ' +
          'Com [[avoir|ter]], em regra, concorda com o complemento direto quando este aparece antes do verbo. Também é possível encontrar o [[ne explétif|ne expletivo]] ' +
          'depois de [[avant que|antes que]]: ele não expressa negação e pode ser omitido.'
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'paragraph',
        text:
          '[[Bien que l’équipe ait terminé la vérification, la directrice attend encore l’approbation du service financier.|Embora a equipe tenha concluído a verificação, a diretora ainda espera a aprovação do setor financeiro.]] ' +
          '[[Elle prépare une version provisoire pour que les membres l’aient reçue avant la réunion de lundi.|Ela prepara uma versão provisória para que os membros a tenham recebido antes da reunião de segunda-feira.]] ' +
          '[[Avant que le comité n’ait rendu sa décision, l’équipe aura vérifié les deux options.|Antes que o comitê tenha anunciado sua decisão, a equipe terá verificado as duas opções.]] ' +
          '[[Après que le comité aura rendu sa décision, la directrice transmettra le compte rendu à tous les employés.|Depois que o comitê tiver anunciado sua decisão, a diretora enviará o relatório a todos os funcionários.]]'
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda avant que e après que',
        text:
          'Um erro frequente é escolher o modo verbal apenas pela ideia de tempo. Segundo o OQLF, [[avant que|antes que]] ' +
          'exige o subjuntivo, porque a ação ainda não foi realizada, enquanto [[après que|depois que]] é seguido pelo indicativo, porque a ação é certa. ' +
          'Diga [[Avant qu’il ait commencé, j’aurai fini.|Antes que ele tenha começado, terei terminado.]] ' +
          'Portanto, evite a construção [[après que + subjonctif|depois que + subjuntivo]] em produções formais: embora seja encontrada no uso contemporâneo, é criticada. ' +
          'Outro cuidado é não esquecer a concordância do particípio passado quando o auxiliar é [[être|ser / estar]].'
      },
      { type: 'heading', text: 'Dica para a prova' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Demonstre domínio das relações entre as ideias',
        text:
          'No TCF Canada, a expressão escrita tem 3 exercícios (60 minutos) e a expressão oral tem 3 exercícios (12 minutos, dos quais 2 de preparação). ' +
          'No TEF Canada, a expressão escrita e a expressão oral também são provas obrigatórias. ' +
          'Treine o uso de concessão, finalidade e anterioridade em frases completas. ' +
          'Escolha o tempo verbal de acordo com a relação entre as ações e evite utilizar estruturas avançadas apenas para tornar a frase mais complexa.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As páginas do OQLF confirmam a formação do subjuntivo, a concordância do particípio com [[être|ser / estar]] e [[avoir|ter]], os modos exigidos pelas conjunções da tabela ([[bien que|embora]] é “geralmente subjuntivo”), ' +
          'o indicativo depois de [[après que|depois que]] com crítica ao subjuntivo, e o [[ne explétif|ne expletivo]] depois de [[avant que|antes que]]. ' +
          'O FEI e o Le français des affaires confirmam as provas de expressão escrita e oral do TCF Canada e do TEF Canada. ' +
          'Não têm fonte: a explicação do passado do subjuntivo como ação concluída antes do momento de referência nos exemplos, os exemplos e o conselho de treino. ' +
          'Esses pontos são material didático, não regra oficial. As páginas consultadas não indicam que o passado do subjuntivo ou essas conjunções sejam exigidos em alguma questão das provas.'
      }
    ]
  },

  fr: {
    title: 'Le passé du subjonctif et le subjonctif après les conjonctions',
    summary:
      'Apprenez à former et à utiliser le passé du subjonctif pour exprimer des actions accomplies dans des structures de concession, de but et d’antériorité. ' +
      'Maîtrisez également les conjonctions qui exigent le subjonctif et les différences avec les constructions qui demandent l’indicatif.',
    blocks: [
      { type: 'heading', text: 'Formation et valeur du passé du subjonctif' },
      {
        type: 'paragraph',
        text:
          'Le passé du subjonctif est un temps composé formé avec le présent du subjonctif de l’auxiliaire avoir ou être, suivi du participe passé du verbe principal. ' +
          'Le choix de l’auxiliaire suit les mêmes règles que pour les autres temps composés. Voici deux exemples de formation : que j’aie terminé et qu’elle soit arrivée.'
      },
      {
        type: 'paragraph',
        text:
          'Ce temps présente une action comme accomplie avant le moment de référence de la proposition principale. ' +
          'Le passé du subjonctif n’indique donc pas nécessairement que l’événement s’est produit dans le passé du calendrier. ' +
          'Comparez ces deux phrases : Bien qu’elle soit fatiguée, elle continue à travailler. Bien qu’elle ait terminé son rapport, elle attend encore une réponse. ' +
          'Dans la première phrase, l’état de fatigue est présenté comme simultané à l’action. Dans la deuxième, la fin du rapport est antérieure à l’attente.'
      },
      { type: 'heading', text: 'Les conjonctions suivies du subjonctif' },
      {
        type: 'table',
        headers: ['Conjonction', 'Mode verbal', 'Valeur exprimée'],
        rows: [
            [
              'bien que',
              'subjonctif',
              'Concession ou opposition'
            ],
            [
              'pour que / afin que',
              'subjonctif',
              'But ou objectif'
            ],
            [
              'avant que',
              'subjonctif',
              'Action qui n’est pas encore réalisée au moment de référence'
            ],
            [
              'jusqu’à ce que',
              'subjonctif',
              'Limite temporelle'
            ],
            [
              'à condition que',
              'subjonctif',
              'Condition ou exigence'
            ],
            [
              'après que',
              'indicatif',
              'Événement présenté comme réalisé ou certain'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Le choix entre le présent et le passé du subjonctif dépend de la relation temporelle entre les actions. ' +
          'Utilisez le présent lorsque l’action subordonnée est simultanée ou postérieure au moment de référence, et le passé lorsqu’elle est présentée comme déjà accomplie. ' +
          'Avec être, le participe passé s’accorde en genre et en nombre avec le sujet. ' +
          'Avec avoir, il s’accorde généralement avec le complément direct lorsque celui-ci est placé avant le verbe. ' +
          'On peut également rencontrer le ne explétif après avant que : il n’exprime aucune négation et peut être omis.'
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'paragraph',
        text:
          'Bien que l’équipe ait terminé la vérification, la directrice attend encore l’approbation du service financier. ' +
          'Elle prépare une version provisoire pour que les membres l’aient reçue avant la réunion de lundi. ' +
          'Avant que le comité n’ait rendu sa décision, l’équipe aura vérifié les deux options. ' +
          'Après que le comité aura rendu sa décision, la directrice transmettra le compte rendu à tous les employés.'
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas avant que et après que',
        text:
          'Une erreur fréquente consiste à choisir le mode verbal uniquement en fonction de l’idée temporelle. Selon l’OQLF, avant que ' +
          'exige le subjonctif, car l’action n’est pas encore réalisée, tandis qu’après que est suivi de l’indicatif, car l’action est certaine. ' +
          'Dites « Avant qu’il ait commencé, j’aurai fini ». ' +
          'Il faut donc éviter la construction après que + subjonctif dans les productions formelles : bien qu’elle soit attestée dans l’usage contemporain, elle est critiquée. ' +
          'Attention également à ne pas oublier l’accord du participe passé lorsque l’auxiliaire est être.'
      },
      { type: 'heading', text: 'Conseil pour l’examen' },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Montrez votre maîtrise des relations entre les idées',
        text:
          'Au TCF Canada, l’expression écrite comprend 3 exercices (60 minutes) et l’expression orale comprend 3 exercices (12 minutes, dont 2 minutes de préparation). ' +
          'Au TEF Canada, l’expression écrite et l’expression orale font aussi partie des épreuves obligatoires. ' +
          'Entraînez-vous à exprimer la concession, le but et l’antériorité dans des phrases complètes. ' +
          'Choisissez le temps verbal en fonction de la relation entre les actions et évitez d’utiliser des structures avancées uniquement pour rendre vos phrases plus complexes.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les pages de l’OQLF confirment la formation du subjonctif, l’accord du participe passé avec être et avoir, les modes exigés par les conjonctions du tableau (bien que est « généralement subjonctif »), ' +
          'l’indicatif après après que, avec une critique du subjonctif, et le ne explétif après avant que. ' +
          'Le FEI et Le français des affaires confirment les épreuves d’expression écrite et orale du TCF Canada et du TEF Canada. ' +
          'Ne sont pas sourcés : l’explication du passé du subjonctif comme action accomplie avant le moment de référence dans les exemples, les exemples et le conseil d’entraînement. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle. Les pages consultées n’indiquent pas que le passé du subjonctif ou ces conjonctions soient exigés dans une question des examens.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le subjonctif : formes et conjugaison — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24237/la-grammaire/le-verbe/conjugaison/formes-du-subjonctif'
    },
    {
      title: 'Subordonnants composés suivis du subjonctif ou de l’indicatif — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24238/la-grammaire/le-verbe/modes/subjonctif/subjonctif-ou-indicatif-apres-les-subordonnants-composes'
    },
    {
      title: 'APRÈS QUE et AVANT QUE : mode verbal — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21132/la-grammaire/le-verbe/modes/concordance-des-temps/mode-verbal-avec-apres-que-et-avant-que'
    },
    {
      title: 'NE explétif : syntaxe et emploi — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22467/la-syntaxe/la-negation-et-la-restriction/constructions-avec-un-ne-expletif'
    },
    {
      title: 'Participe passé employé avec l’auxiliaire être : accord — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21547/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-etre/accord-du-participe-passe-employe-avec-lauxiliaire-etre'
    },
    {
      title: 'Participe passé employé avec l’auxiliaire avoir : règles d’accord — Banque de dépannage linguistique, OQLF',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/21546/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-avoir/accord-du-participe-passe-employe-avec-lauxiliaire-avoir'
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
