import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ga-concordancia',

  pt: {
    title: 'Concordância de tempos no discurso indireto',
    summary:
      'Você vai aprender como os tempos verbais mudam ao relatar, no passado, algo que outra pessoa disse ou pensou. ' +
      'Também vai estudar as relações de anterioridade, simultaneidade e posterioridade, as exceções para fatos que continuam verdadeiros e as mudanças nas expressões temporais.',
    blocks: [
      { type: 'heading', text: 'O princípio da concordância' },
      {
        type: 'paragraph',
        text:
          'No [[discours direct|discurso direto]], reproduzimos as palavras de alguém como foram pronunciadas. ' +
          'No [[discours indirect|discurso indireto]], relatamos essas palavras dentro de outra frase, utilizando um [[verbe introducteur|verbo introdutor]], como [[dire|dizer]], [[expliquer|explicar]], [[annoncer|anunciar]] ' +
          'ou [[affirmer|afirmar]]. A escolha dos tempos verbais depende principalmente do tempo do verbo introdutor e da relação cronológica entre os acontecimentos. ' +
          'Quando o verbo introdutor está no presente ou no futuro, geralmente mantemos o tempo original. Quando está no passado, aplicamos a concordância dos tempos.'
      },
      {
        type: 'table',
        headers: ['Tempo no discurso direto', 'Transformação com verbo introdutor no passado', 'Relação temporal'],
        rows: [
            [
              '[[Présent de l’indicatif|Presente do indicativo]]',
              '[[Imparfait|Pretérito imperfeito]]',
              'Simultaneidade com o passado.'
            ],
            [
              '[[Passé composé|Passado composto]]',
              '[[Plus-que-parfait|Mais-que-perfeito]]',
              'Acontecimento anterior ao relato.'
            ],
            [
              '[[Futur simple|Futuro simples]]',
              '[[Conditionnel présent|Condicional presente]]',
              'Posterioridade em relação ao passado.'
            ],
            [
              '[[Futur antérieur|Futuro anterior]]',
              '[[Conditionnel passé|Condicional passado]]',
              'Ação futura que será concluída em relação ao passado.'
            ],
            [
              '[[Imparfait|Pretérito imperfeito]], [[plus-que-parfait|mais-que-perfeito]] e [[conditionnel|condicional]]',
              'Geralmente permanecem no mesmo tempo.',
              'A relação temporal já está expressa pela forma verbal.'
            ]
        ]
      },
      { type: 'heading', text: 'Transformações em contexto' },
      {
        type: 'list',
        items: [
          '[[« Je travaille à Montréal. »|« Trabalho em Montreal. »]] → [[Elle a expliqué qu’elle travaillait à Montréal.|Ela explicou que trabalhava em Montreal.]]',
            '[[« J’ai envoyé le dossier hier. »|« Enviei o documento ontem. »]] ' +
            '→ [[Il a précisé qu’il avait envoyé le dossier la veille.|Ele esclareceu que tinha enviado o documento na véspera.]]',
          '[[« Je répondrai demain. »|« Responderei amanhã. »]] → [[Elle a promis qu’elle répondrait le lendemain.|Ela prometeu que responderia no dia seguinte.]]',
            '[[« J’aurai terminé avant midi. »|« Terei terminado antes do meio-dia. »]] ' +
            '→ [[Il a annoncé qu’il aurait terminé avant midi.|Ele anunciou que teria terminado antes do meio-dia.]]'
        ]
      },
      { type: 'heading', text: 'Fatos que continuam verdadeiros' },
      {
        type: 'paragraph',
        text:
          'A concordância não deve ser aplicada mecanicamente em todas as situações. ' +
          'Quando uma informação continua verdadeira no momento do relato, é possível manter o presente para destacar sua validade atual. ' +
          'Compare: [[La direction a rappelé que le service ferme à 17 h.|A direção lembrou que o serviço fecha às 17h.]] O presente indica que o horário continua válido. ' +
          'Também seria possível utilizar o imperfeito, [[La direction a rappelé que le service fermait à 17 h.|A direção lembrou que o serviço fechava às 17h.]], apresentando a informação a partir de uma perspectiva passada. ' +
          'A escolha depende do contexto e do ponto de vista de quem relata.'
      },
      { type: 'heading', text: 'Mudanças nas expressões temporais' },
      {
        type: 'table',
        headers: ['Discurso direto', 'Discurso indireto no passado', 'Significado'],
        rows: [
            [
              '[[Aujourd’hui|Hoje]]',
              '[[Ce jour-là|Naquele dia]]',
              'Referência ao dia do relato original.'
            ],
            [
              '[[Maintenant / en ce moment|Agora / neste momento]]',
              '[[À ce moment-là|Naquele momento]]',
              'Referência a um momento passado.'
            ],
            [
              '[[Hier|Ontem]]',
              '[[La veille|Na véspera]]',
              'Dia anterior ao relato original.'
            ],
            [
              '[[Demain|Amanhã]]',
              '[[Le lendemain|No dia seguinte]]',
              'Dia posterior ao relato original.'
            ],
            [
              '[[La semaine prochaine|Na semana que vem]]',
              '[[La semaine suivante|Na semana seguinte]]',
              'Semana posterior ao relato original.'
            ],
            [
              '[[Ici|Aqui]]',
              '[[Là|Lá]]',
              'Lugar observado a partir de outro ponto de vista.'
            ]
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não interprete todo condicional como hipótese',
        text:
          'Um erro frequente é pensar que o [[conditionnel présent|condicional presente]] sempre expressa uma situação hipotética. ' +
          'O OQLF explica que, com um verbo no passado, ele indica uma ação futura em relação a esse momento (o “futuro do passado”) e, em geral, não implica condição. ' +
          'Por exemplo, [[Elle a dit qu’elle répondrait demain.|Ela disse que responderia amanhã.]] ' +
          'não expressa necessariamente uma condição: o condicional representa o futuro visto a partir do passado. ' +
          'Outro cuidado é não alterar automaticamente expressões como amanhã e ontem sem verificar se o ponto de referência temporal realmente mudou.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Ao relatar informações em uma produção escrita ou oral, identifique primeiro o verbo introdutor. ' +
          'Depois, determine se o acontecimento relatado é anterior, simultâneo ou posterior ao momento da fala original. ' +
          'Pratique especialmente as transformações [[présent → imparfait|presente → imperfeito]], [[passé composé → plus-que-parfait|passado composto → mais-que-perfeito]] ' +
          'e [[futur → conditionnel|futuro → condicional]]. Revise também os pronomes e os marcadores temporais para manter a cronologia correta do relato.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A página do OQLF sobre o valor temporal do condicional confirma que, depois de um verbo no passado, o [[futur simple|futuro simples]] vira [[conditionnel présent|condicional presente]] e o [[futur antérieur|futuro anterior]] vira [[conditionnel passé|condicional passado]], com valor de futuro do passado e sem ideia de condição, inclusive no discurso indireto. ' +
          'O guia de gramática da Escola da função pública do Canadá (Grammaire d’appoint, nível C, capítulo sobre o discurso indireto) confirma as correspondências [[présent → imparfait|presente → imperfeito]], [[passé composé → plus-que-parfait|passado composto → mais-que-perfeito]], [[futur simple → conditionnel présent|futuro simples → condicional presente]], a manutenção de [[imparfait|imperfeito]] e [[conditionnel|condicional]] e as expressões de tempo ([[aujourd’hui → ce jour-là|hoje → naquele dia]], [[maintenant → à ce moment-là|agora → naquele momento]], [[hier → la veille|ontem → na véspera]], [[demain → le lendemain|amanhã → no dia seguinte]], [[la semaine prochaine → la semaine suivante|semana que vem → semana seguinte]]). ' +
          'O Tiré à part do curso de francês para imigrantes adultos (CCDMD, outil Discours indirect) confirma as mesmas correspondências de tempos e acrescenta [[ici → là|aqui → lá]], [[avant-hier → l’avant-veille|anteontem → na antevéspera]], [[après-demain → le surlendemain|depois de amanhã → dois dias depois]] e as formas [[la semaine dernière → la semaine précédente|semana passada → semana anterior]], [[tout à l’heure → plus tôt / plus tard|daqui a pouco → mais cedo / mais tarde]]. ' +
          'O CCDMD (La concordance des temps à l’indicatif : la simultanéité) confirma que o [[présent|presente]] pode ser mantido na subordinada depois de um verbo no passado quando se relata algo que era e continua sendo verdadeiro, uso frequente no discurso relatado ([[Elle a dit que je suis un génie.|Ela disse que sou um gênio.]]), e que o [[imparfait|imperfeito]] pode exprimir um fato geralmente verdadeiro depois de um verbo no [[plus-que-parfait|mais-que-perfeito]]. ' +
          'Não têm fonte: os exemplos e a dica para a prova. ' +
          'Esses pontos são material didático, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'La concordance des temps dans le discours indirect',
    summary:
      'Vous apprendrez comment les temps verbaux changent lorsqu’on rapporte au passé les paroles ou les pensées d’une autre personne. ' +
      'Vous étudierez également les relations d’antériorité, de simultanéité et de postériorité, les exceptions concernant les faits qui restent vrais et les modifications des expressions temporelles.',
    blocks: [
      { type: 'heading', text: 'Le principe de la concordance des temps' },
      {
        type: 'paragraph',
        text:
          'Dans le discours direct, on reproduit les paroles d’une personne telles qu’elles ont été prononcées. ' +
          'Dans le discours indirect, on rapporte ces paroles à l’intérieur d’une autre phrase, à l’aide d’un verbe introducteur comme dire, expliquer, annoncer ou affirmer. ' +
          'Le choix des temps verbaux dépend principalement du temps du verbe introducteur et de la relation chronologique entre les événements. ' +
          'Lorsque le verbe introducteur est au présent ou au futur, on conserve généralement le temps original. ' +
          'Lorsqu’il est au passé, on applique les règles de la concordance des temps.'
      },
      {
        type: 'table',
        headers: ['Temps au discours direct', 'Transformation avec un verbe introducteur au passé', 'Relation temporelle'],
        rows: [
            [
              'Présent de l’indicatif',
              'Imparfait',
              'Simultanéité par rapport au passé.'
            ],
            [
              'Passé composé',
              'Plus-que-parfait',
              'Événement antérieur au récit.'
            ],
            [
              'Futur simple',
              'Conditionnel présent',
              'Postériorité par rapport au passé.'
            ],
            [
              'Futur antérieur',
              'Conditionnel passé',
              'Action future qui sera accomplie par rapport au passé.'
            ],
            [
              'Imparfait, plus-que-parfait et conditionnel',
              'Généralement conservés au même temps.',
              'La relation temporelle est déjà exprimée par la forme verbale.'
            ]
        ]
      },
      { type: 'heading', text: 'Transformations en contexte' },
      {
        type: 'list',
        items: [
          '« Je travaille à Montréal. » → Elle a expliqué qu’elle travaillait à Montréal.',
          '« J’ai envoyé le dossier hier. » → Il a précisé qu’il avait envoyé le dossier la veille.',
          '« Je répondrai demain. » → Elle a promis qu’elle répondrait le lendemain.',
          '« J’aurai terminé avant midi. » → Il a annoncé qu’il aurait terminé avant midi.'
        ]
      },
      { type: 'heading', text: 'Les faits qui restent vrais' },
      {
        type: 'paragraph',
        text:
          'La concordance des temps ne doit pas être appliquée mécaniquement dans toutes les situations. ' +
          'Lorsqu’une information reste vraie au moment où l’on rapporte les paroles, il est possible de conserver le présent pour souligner sa validité actuelle. ' +
          'Comparez : « La direction a rappelé que le service ferme à 17 h. » Le présent indique que l’horaire est toujours valable. ' +
          'Il serait également possible d’utiliser l’imparfait : « La direction a rappelé que le service fermait à 17 h. », en présentant l’information dans une perspective passée. Le choix dépend du contexte et du point de vue de la personne qui rapporte les paroles.'
      },
      { type: 'heading', text: 'Les changements des expressions temporelles' },
      {
        type: 'table',
        headers: ['Discours direct', 'Discours indirect au passé', 'Sens'],
        rows: [
            [
              'Aujourd’hui',
              'Ce jour-là',
              'Référence au jour du discours original.'
            ],
            [
              'Maintenant / en ce moment',
              'À ce moment-là',
              'Référence à un moment passé.'
            ],
            [
              'Hier',
              'La veille',
              'Jour précédant le discours original.'
            ],
            [
              'Demain',
              'Le lendemain',
              'Jour suivant le discours original.'
            ],
            [
              'La semaine prochaine',
              'La semaine suivante',
              'Semaine suivant le discours original.'
            ],
            [
              'Ici',
              'Là',
              'Lieu observé depuis un autre point de vue.'
            ]
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'N’interprétez pas tout conditionnel comme une hypothèse',
        text:
          'Une erreur fréquente consiste à penser que le conditionnel présent exprime toujours une situation hypothétique. ' +
          'L’OQLF explique qu’avec un verbe au passé, il évoque une action future par rapport à ce moment (le « futur du passé ») et n’implique généralement pas de condition. Par exemple : « Elle a dit qu’elle répondrait demain ». ' +
          'Il ne s’agit pas nécessairement d’une condition : le conditionnel représente le futur envisagé à partir du passé. ' +
          'Faites également attention à ne pas modifier automatiquement des expressions comme demain et hier sans vérifier si le point de référence temporel a réellement changé.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Lorsque vous rapportez des informations dans une production écrite ou orale, identifiez d’abord le verbe introducteur. ' +
          'Déterminez ensuite si l’événement rapporté est antérieur, simultané ou postérieur au moment où les paroles ont été prononcées. ' +
          'Entraînez-vous particulièrement aux transformations présent → imparfait, passé composé → plus-que-parfait et futur → conditionnel. ' +
          'Vérifiez également les pronoms et les marqueurs temporels afin de conserver la chronologie correcte du récit.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La page de l’OQLF sur la valeur temporelle du conditionnel confirme qu’après un verbe au passé, le futur simple devient conditionnel présent et le futur antérieur devient conditionnel passé, avec une valeur de futur du passé et sans idée de condition, y compris dans le discours indirect. ' +
          'Le guide de grammaire de l’École de la fonction publique du Canada (Grammaire d’appoint, niveau C, chapitre sur le discours indirect) confirme les correspondances présent → imparfait, passé composé → plus-que-parfait, futur simple → conditionnel présent, le maintien de l’imparfait et du conditionnel et les expressions de temps (aujourd’hui → ce jour-là, maintenant → à ce moment-là, hier → la veille, demain → le lendemain, la semaine prochaine → la semaine suivante). ' +
          'Le Tiré à part du cours de français pour immigrants adultes (CCDMD, outil Discours indirect) confirme les mêmes correspondances de temps et ajoute ici → là, avant-hier → l’avant-veille, après-demain → le surlendemain ainsi que la semaine dernière → la semaine précédente et tout à l’heure → plus tôt / plus tard. ' +
          'Le CCDMD (La concordance des temps à l’indicatif : la simultanéité) confirme que le présent peut être maintenu dans la subordonnée après un verbe au passé lorsqu’on rapporte ce qui était et reste vrai, emploi fréquent dans le discours rapporté (Elle a dit que je suis un génie.), et que l’imparfait peut exprimer un fait généralement vrai après un verbe au plus-que-parfait. ' +
          'Ne sont pas sourcés : les exemples et le conseil pour l’examen. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'La concordance des temps à l’indicatif : la simultanéité — Centre collégial de développement de matériel didactique (CCDMD)',
      url: 'https://ameliofrancais.ccdmd.qc.ca/storage/amelioration-du-francais/ressources/1697833657-09Concordance_V2.pdf'
    },
    {
      title: 'Tiré à part (outil Discours indirect, p. 196-199) — Cours de français langue seconde pour immigrant adulte, Administration, droit et affaires (CCDMD)',
      url: 'https://referencesfrancisation.immigration-quebec.gouv.qc.ca/moodle_ref/pluginfile.php/1/block_public_files/files/Cours_specialises/ADA/Cahier-guide/Tire-a-part.pdf'
    },
    {
      title: 'Grammaire d’appoint, niveau C : cahier d’autoapprentissage (chapitre 9, Discours indirect) — École de la fonction publique du Canada',
      url: 'https://publications.gc.ca/collections/collection_2020/efpc-csps/SC102-1-15-2007-fra.pdf'
    },
    {
      title: 'Conditionnel : valeur temporelle — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24138/la-grammaire/le-verbe/temps-grammaticaux/conditionnel/valeur-temporelle-du-conditionnel'
    }
  ]
}

export default content
