import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gi-discurso-indireto',

  pt: {
    title: 'Discurso indireto: como relatar falas, perguntas e ordens',
    summary:
      'Você vai aprender a transformar afirmações, perguntas e ordens do discurso direto em discurso indireto. ' +
      'Também vai estudar as mudanças nos tempos verbais, nos pronomes e nas expressões de tempo e lugar ao relatar algo que outra pessoa disse.',
    blocks: [
      { type: 'heading', text: 'O que é o discurso indireto' },
      {
        type: 'paragraph',
        text:
          'O [[discours indirect|discurso indireto]] permite contar o que outra pessoa disse sem repetir suas palavras exatamente. ' +
          'Diferentemente do [[discours direct|discurso direto]], que utiliza dois-pontos e aspas para reproduzir uma fala, o discurso indireto integra essa informação à frase por meio de um verbo introdutor, como [[dire|dizer]], [[expliquer|explicar]], [[demander|perguntar]] ' +
          'ou [[annoncer|anunciar]].'
      },
      {
        type: 'table',
        headers: ['Tipo de frase', 'Estrutura no discurso indireto', 'Exemplo'],
        rows: [
            [
              'Afirmação',
              '[[que|que (conjunção)]]',
              '[[Elle dit qu’elle est prête.|Ela diz que está pronta.]]'
            ],
            [
              'Pergunta de sim ou não',
              '[[si|se]]',
              '[[Il demande si le bureau est ouvert.|Ele pergunta se o escritório está aberto.]]'
            ],
            [
              'Pergunta com palavra interrogativa',
              'Manter a palavra interrogativa; [[qu’est-ce que|o que]] transforma-se em [[ce que|o que]], e [[qu’est-ce qui|o que]] em [[ce qui|o que]].',
              '[[Elle demande où se trouve l’arrêt d’autobus.|Ela pergunta onde fica o ponto de ônibus.]]'
            ],
            [
              'Ordem ou pedido',
              '[[de + infinitif|de + infinitivo]]',
              '[[L’agente demande aux candidats de remplir le formulaire.|A agente pede aos candidatos que preencham o formulário.]]'
            ]
        ]
      },
      { type: 'heading', text: 'Concordância dos tempos verbais' },
      {
        type: 'paragraph',
        text:
          'Quando o verbo introdutor está no passado, normalmente ocorre uma mudança no tempo verbal da fala relatada. ' +
          'Essa mudança é chamada de [[concordance des temps|concordância dos tempos]].'
      },
      {
        type: 'table',
        headers: ['Discurso direto', 'Discurso indireto com introdutor no passado', 'Exemplo'],
        rows: [
            [
              '[[Présent|Presente]]',
              '[[Imparfait|Pretérito imperfeito]]',
              '[[« Je travaille ici. » → Il a dit qu’il travaillait ici.|« Trabalho aqui. » → Ele disse que trabalhava aqui.]]'
            ],
            [
              '[[Passé composé|Passado composto]]',
              '[[Plus-que-parfait|Mais-que-perfeito]]',
              '[[« J’ai terminé le rapport. » → Elle a dit qu’elle avait terminé le rapport.|« Terminei o relatório. » → Ela disse que tinha terminado o relatório.]]'
            ],
            [
              '[[Futur simple|Futuro simples]]',
              '[[Conditionnel présent|Condicional presente]]',
              '[[« Je reviendrai demain. » → Il a dit qu’il reviendrait le lendemain.|« Voltarei amanhã. » → Ele disse que voltaria no dia seguinte.]]'
            ],
            [
              '[[Imparfait, plus-que-parfait et conditionnel|Imperfeito, mais-que-perfeito e condicional]]',
              'Geralmente permanecem no mesmo tempo.',
              '[[« Je travaillais ici. » → Elle a dit qu’elle travaillait ici.|« Eu trabalhava aqui. » → Ela disse que trabalhava aqui.]]'
            ]
        ]
      },
      { type: 'heading', text: 'Exemplos em contexto' },
      {
        type: 'list',
        items: [
          '[[La cliente a demandé si le service était offert la fin de semaine.|A cliente perguntou se o serviço era oferecido no fim de semana.]]',
          '[[Marc a expliqué qu’il avait envoyé le formulaire la veille.|Marc explicou que tinha enviado o formulário na véspera.]]',
          '[[L’agente a demandé aux participants de présenter leur pièce d’identité.|A agente pediu aos participantes que apresentassem seu documento de identidade.]]',
          '[[Sophie a demandé où se trouvait le centre de services.|Sophie perguntou onde ficava o centro de serviços.]]'
        ]
      },
      { type: 'heading', text: 'Armadilhas frequentes' },
      {
        type: 'paragraph',
        text:
          'Os pronomes pessoais e possessivos devem ser adaptados conforme quem está relatando a fala e a quem ela se referia originalmente. ' +
          'As expressões de tempo e lugar também podem mudar conforme o ponto de vista: [[demain|amanhã]] pode virar [[le lendemain|no dia seguinte]], [[hier|ontem]] ' +
          'pode virar [[la veille|na véspera]] e [[ici|aqui]] pode virar [[là|lá]]. ' +
          'Quando o verbo introdutor está no presente, geralmente não é necessário alterar o tempo verbal: [[Elle dit qu’elle travaille ici.|Ela diz que trabalha aqui.]]'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não mantenha a estrutura da pergunta direta',
        text:
          'Um erro frequente é manter [[est-ce que|será que]] dentro de uma pergunta indireta. ' +
          'Diga [[Il m’a demandé si le bureau était ouvert.|Ele me perguntou se o escritório estava aberto.]] ' +
          'e não [[Il m’a demandé est-ce que le bureau était ouvert.|Ele me perguntou se o escritório estava aberto. (errado)]] ' +
          'Também evite a inversão do sujeito e do verbo dentro da pergunta indireta.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Nos exercícios de compreensão escrita e oral, procure identificar o verbo que introduz a fala e a natureza da informação relatada. ' +
          'Na produção escrita e oral, pratique as três estruturas principais: [[que|que (conjunção)]] para afirmações, [[si|se]] ' +
          'para perguntas de sim ou não e [[de + infinitif|de + infinitivo]] para pedidos e ordens dirigidos a outra pessoa. ' +
          'Confira também a concordância dos tempos e a mudança dos pronomes.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A página do OQLF sobre [[demander|perguntar / pedir]] confirma que o verbo pode ser seguido de [[si|se]] ou de uma palavra interrogativa, como [[où|onde]], e de [[de|de]] mais infinitivo quando o sujeito do infinitivo é outra pessoa. ' +
          'O Tiré à part do curso de francês para imigrantes adultos (CCDMD, outil Discours indirect, p. 196-199) confirma: os verbos introdutores; a supressão das aspas e dos dois-pontos; [[que|que]] para afirmações; a mudança de pronomes e possessivos ([[vous → nous|vocês → nós]]); a concordância dos tempos com introdutor no passado; [[de + infinitif|de + infinitivo]] para o imperativo; [[si|se]] no lugar de [[est-ce que|será que]] ou da inversão; [[ce que|o que]] e [[ce qui|o que]]; as palavras interrogativas mantidas sem inversão; e as expressões de tempo e lugar. ' +
          'Não têm fonte: os exemplos e a dica para a prova. ' +
          'O guia do professor "À nous la parole" (francês de especialidade, engenharia, Université de Montréal) repete o quadro de concordância: presente → imperfeito, passé composé → plus-que-parfait, futur simple → conditionnel présent, futur antérieur → conditionnel passé, imperativo → [[de + infinitif|de + infinitivo]], [[est-ce que|será que]] ou inversão → [[si|se]], [[qu’est-ce qui|o que]] → [[ce qui|o que]] e [[qu’est-ce que|o que]] → [[ce que|o que]], com a ressalva de que o quadro não traz todas as regras. ' +
          'Esses pontos são material didático, não regra oficial nem exigência do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Le discours indirect : rapporter des paroles, des questions et des ordres',
    summary:
      'Vous apprendrez à transformer des affirmations, des questions et des ordres du discours direct au discours indirect. ' +
      'Vous étudierez également les changements de temps verbaux, de pronoms et d’expressions de temps et de lieu lorsque vous rapportez les paroles d’une autre personne.',
    blocks: [
      { type: 'heading', text: 'Qu’est-ce que le discours indirect ?' },
      {
        type: 'paragraph',
        text:
          'Le discours indirect permet de rapporter ce qu’une autre personne a dit sans reprendre exactement ses paroles. ' +
          'Contrairement au discours direct, qui utilise les deux-points et les guillemets pour reproduire une déclaration, le discours indirect intègre cette information à la phrase au moyen d’un verbe introducteur, comme dire, expliquer, demander ou annoncer.'
      },
      {
        type: 'table',
        headers: ['Type de phrase', 'Structure au discours indirect', 'Exemple'],
        rows: [
            [
              'Affirmation',
              'que',
              'Elle dit qu’elle est prête.'
            ],
            [
              'Question à réponse affirmative ou négative',
              'si',
              'Il demande si le bureau est ouvert.'
            ],
            [
              'Question avec un mot interrogatif',
              'Conserver le mot interrogatif ; qu’est-ce que devient ce que, et qu’est-ce qui devient ce qui.',
              'Elle demande où se trouve l’arrêt d’autobus.'
            ],
            [
              'Ordre ou demande',
              'de + infinitif',
              'L’agente demande aux candidats de remplir le formulaire.'
            ]
        ]
      },
      { type: 'heading', text: 'La concordance des temps verbaux' },
      {
        type: 'paragraph',
        text: 'Lorsque le verbe introducteur est au passé, le temps verbal des paroles rapportées change généralement. Ce phénomène s’appelle la concordance des temps.'
      },
      {
        type: 'table',
        headers: ['Discours direct', 'Discours indirect avec un introducteur au passé', 'Exemple'],
        rows: [
            [
              'Présent',
              'Imparfait',
              '« Je travaille ici. » → Il a dit qu’il travaillait ici.'
            ],
            [
              'Passé composé',
              'Plus-que-parfait',
              '« J’ai terminé le rapport. » → Elle a dit qu’elle avait terminé le rapport.'
            ],
            [
              'Futur simple',
              'Conditionnel présent',
              '« Je reviendrai demain. » → Il a dit qu’il reviendrait le lendemain.'
            ],
            [
              'Imparfait, plus-que-parfait et conditionnel',
              'Généralement conservés au même temps.',
              '« Je travaillais ici. » → Elle a dit qu’elle travaillait ici.'
            ]
        ]
      },
      { type: 'heading', text: 'Exemples en contexte' },
      {
        type: 'list',
        items: [
          'La cliente a demandé si le service était offert la fin de semaine.',
          'Marc a expliqué qu’il avait envoyé le formulaire la veille.',
          'L’agente a demandé aux participants de présenter leur pièce d’identité.',
          'Sophie a demandé où se trouvait le centre de services.'
        ]
      },
      { type: 'heading', text: 'Pièges fréquents' },
      {
        type: 'paragraph',
        text:
          'Les pronoms personnels et possessifs doivent être adaptés selon la personne qui rapporte les paroles et les personnes auxquelles elles faisaient référence à l’origine. ' +
          'Les expressions de temps et de lieu peuvent également changer selon le point de vue : demain peut devenir le lendemain, hier peut devenir la veille et ici peut devenir là. ' +
          'Lorsque le verbe introducteur est au présent, il n’est généralement pas nécessaire de modifier le temps verbal : Elle dit qu’elle travaille ici.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne conservez pas la structure de la question directe',
        text:
          'Une erreur fréquente consiste à conserver est-ce que dans une question indirecte. ' +
          'Dites « Il m’a demandé si le bureau était ouvert » et non « Il m’a demandé est-ce que le bureau était ouvert ». ' +
          'Évitez aussi l’inversion du sujet et du verbe dans la question indirecte.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les exercices de compréhension écrite et orale, repérez le verbe qui introduit les paroles et identifiez la nature de l’information rapportée. ' +
          'Dans vos productions écrites et orales, entraînez-vous à utiliser les trois structures principales : que pour les affirmations, si pour les questions à réponse affirmative ou négative et de + infinitif pour les demandes et les ordres adressés à une autre personne. ' +
          'Vérifiez également la concordance des temps et les changements de pronoms.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La page de l’OQLF sur demander confirme que le verbe peut être suivi de si ou d’un mot interrogatif, comme où, et de de plus l’infinitif lorsque le sujet de l’infinitif est une autre personne. ' +
          'Le Tiré à part du cours de français pour immigrants adultes (CCDMD, outil Discours indirect, p. 196-199) confirme : les verbes introducteurs ; la disparition des guillemets et des deux-points ; que pour les phrases déclaratives ; le changement des pronoms et des déterminants possessifs (vous → nous) ; la concordance des temps avec un verbe introducteur au passé ; de + infinitif pour l’impératif ; si à la place de est-ce que ou de l’inversion ; ce que et ce qui ; les mots interrogatifs maintenus sans inversion ; et les expressions de temps et de lieu. ' +
          'Ne sont pas sourcés : les exemples et le conseil pour l’examen. ' +
          'Le guide de l’enseignant « À nous la parole » (français de spécialité, ingénierie, Université de Montréal) reprend le tableau de concordance : présent → imparfait, passé composé → plus-que-parfait, futur simple → conditionnel présent, futur antérieur → conditionnel passé, impératif → de + infinitif, est-ce que ou inversion → si, qu’est-ce qui → ce qui et qu’est-ce que → ce que, en précisant que le tableau ne contient pas toutes les règles. ' +
          'Ces points sont du matériel pédagogique, et non une règle officielle ni une exigence du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'À nous la parole : guide de l’enseignant, français de spécialité, domaine de l’ingénierie, niveau intermédiaire-avancé (jour 16, discours indirect) — Université de Montréal',
      url: 'https://referencesfrancisation.immigration-quebec.gouv.qc.ca/moodle_ref/pluginfile.php/1/block_public_files/files/Cours_specialises/GSA/section1/P-0101-P1.pdf'
    },
    {
      title: 'Tiré à part (outil Discours indirect, p. 196-199) — Cours de français langue seconde pour immigrant adulte, Administration, droit et affaires (CCDMD)',
      url: 'https://referencesfrancisation.immigration-quebec.gouv.qc.ca/moodle_ref/pluginfile.php/1/block_public_files/files/Cours_specialises/ADA/Cahier-guide/Tire-a-part.pdf'
    },
    {
      title: 'Demander et ses compléments — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/25220/la-syntaxe/le-complement-du-verbe/demander-et-ses-complements'
    }
  ]
}

export default content
