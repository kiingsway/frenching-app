import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-savoir-connaitre',

  pt: {
    title: 'Diferença entre savoir e connaître',
    summary:
      'Aprenda a diferenciar os verbos savoir e connaître, ambos relacionados ao conhecimento, mas utilizados em situações diferentes. ' +
      'Entenda como expressar habilidades, informações, familiaridade com pessoas e lugares, além de conhecer as conjugações e as construções mais comuns.',
    blocks: [
      { type: 'heading', text: '1. Qual é a diferença entre savoir e connaître?' },
      {
        type: 'paragraph',
        text:
          'Os dois verbos podem ser traduzidos como saber ou conhecer em português, mas não são sempre intercambiáveis. [[Savoir|Saber]] ' +
          'expressa principalmente o conhecimento de uma informação, de um fato ou a capacidade de realizar uma atividade. [[Connaître|Conhecer]] ' +
          'indica familiaridade com uma pessoa, um lugar, uma coisa ou determinado assunto. ' +
          'Em alguns contextos, os dois podem ser utilizados, mas com nuances de significado.'
      },
      {
        type: 'table',
        headers: ['Verbo', 'Construção frequente', 'Exemplo'],
        rows: [
            [
              '[[Savoir|Saber]]',
              '[[savoir + infinitif|saber + infinitivo]]',
              '[[Je sais conduire.|Sei dirigir.]]'
            ],
            [
              '[[Savoir|Saber]]',
              '[[savoir + que / si / où / comment|saber + que / se / onde / como]]',
              '[[Je sais où elle habite.|Sei onde ela mora.]]'
            ],
            [
              '[[Savoir|Saber]]',
              'Informação específica',
              '[[Je sais son adresse.|Sei o endereço dele.]]'
            ],
            [
              '[[Connaître|Conhecer]]',
              '[[connaître + personne|conhecer + pessoa]]',
              '[[Je connais Marie.|Conheço Marie.]]'
            ],
            [
              '[[Connaître|Conhecer]]',
              '[[connaître + lieu|conhecer + lugar]]',
              '[[Je connais Toronto.|Conheço Toronto.]]'
            ],
            [
              '[[Connaître|Conhecer]]',
              '[[connaître + chose ou domaine|conhecer + coisa ou assunto]]',
              '[[Je connais bien ce sujet.|Conheço bem esse assunto.]]'
            ]
        ]
      },
      { type: 'heading', text: '2. Conjugação no presente do indicativo' },
      {
        type: 'paragraph',
        text:
          'Os dois verbos são irregulares e precisam ser memorizados. ' +
          'Observe as diferenças entre seus radicais, especialmente nas formas da primeira e da segunda pessoa do plural.'
      },
      {
        type: 'table',
        headers: ['Pronome', 'Savoir', 'Connaître'],
        rows: [
            [
              'Eu',
              '[[Je sais|Eu sei]]',
              '[[Je connais|Eu conheço]]'
            ],
            [
              'Você',
              '[[Tu sais|Você sabe]]',
              '[[Tu connais|Você conhece]]'
            ],
            [
              'Ele / Ela',
              '[[Il / Elle sait|Ele / Ela sabe]]',
              '[[Il / Elle connaît|Ele / Ela conhece]]'
            ],
            [
              'Nós',
              '[[Nous savons|Nós sabemos]]',
              '[[Nous connaissons|Nós conhecemos]]'
            ],
            [
              'Vocês',
              '[[Vous savez|Vocês sabem]]',
              '[[Vous connaissez|Vocês conhecem]]'
            ],
            [
              'Eles / Elas',
              '[[Ils / Elles savent|Eles / Elas sabem]]',
              '[[Ils / Elles connaissent|Eles / Elas conhecem]]'
            ]
        ]
      },
      { type: 'heading', text: '3. Quando utilizar savoir' },
      {
        type: 'paragraph',
        text:
          'Utilize [[savoir|saber]] para falar de informações, fatos, conhecimentos específicos e habilidades adquiridas. ' +
          'É muito comum encontrar esse verbo seguido de infinitivo ou de uma oração introduzida por palavras interrogativas ou pela conjunção [[que|que]].'
      },
      {
        type: 'list',
        items: [
          'Habilidade: [[Je sais parler français.|Sei falar francês.]]',
          'Capacidade adquirida: [[Elle sait conduire depuis cinq ans.|Ela sabe dirigir há cinco anos.]]',
          'Informação: [[Je sais que tu travailles à Toronto.|Sei que você trabalha em Toronto.]]',
          'Pergunta indireta: [[Tu sais où se trouve la station de métro ?|Você sabe onde fica a estação de metrô?]]',
          'Conhecimento específico: [[Nous savons résoudre ce problème.|Sabemos resolver esse problema.]]',
          'Informação memorizada: [[Il sait son numéro de téléphone par cœur.|Ele sabe seu número de telefone de cor.]]'
        ]
      },
      { type: 'heading', text: '4. Quando utilizar connaître' },
      {
        type: 'paragraph',
        text:
          'Utilize [[connaître|conhecer]] para falar de familiaridade com pessoas, lugares, coisas e assuntos. ' +
          'O verbo normalmente é seguido de um substantivo ou pronome, e não de um verbo no infinitivo.'
      },
      {
        type: 'list',
        items: [
          'Conhecer uma pessoa: [[Je connais bien mon collègue.|Conheço bem meu colega.]]',
          'Conhecer um lugar: [[Nous connaissons Montréal.|Conhecemos Montreal.]]',
          'Conhecer uma coisa: [[Tu connais ce film ?|Você conhece esse filme?]]',
          'Ter familiaridade com um assunto: [[Elle connaît bien la culture québécoise.|Ela conhece bem a cultura quebequense.]]',
          'Conhecer alguém pela primeira vez: [[J’ai connu mon meilleur ami à l’université.|Conheci meu melhor amigo na universidade.]]',
          'Conhecer por experiência: [[Il a connu plusieurs difficultés après son arrivée au Canada.|Ele passou por várias dificuldades depois de sua chegada ao Canadá.]]'
        ]
      },
      { type: 'heading', text: '5. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não traduza os dois verbos diretamente do português',
        text:
          'Um erro comum é utilizar [[connaître|conhecer]] antes de um verbo no infinitivo. ' +
          'Para dizer que você sabe dirigir, a construção correta é [[Je sais conduire.|Sei dirigir.]], e não [[Je connais conduire|Conheço dirigir (errado)]]. ' +
          'Da mesma forma, para dizer que conhece uma cidade, utilize [[Je connais Toronto.|Conheço Toronto.]], e não uma construção com [[savoir|saber]] ' +
          'seguida diretamente do nome da cidade. Atenção também à nuance: [[Je sais la réponse.|Sei a resposta.]] ' +
          'destaca a informação conhecida, enquanto [[Je connais bien cette question.|Conheço bem essa questão.]] destaca a familiaridade com o assunto.'
      },
      {
        type: 'list',
        items: [
          'Não confunda [[Je sais|Eu sei]] com [[Je connais|Eu conheço]]. A escolha depende do tipo de conhecimento que você deseja expressar.',
          'Não utilize [[connaître|conhecer]] antes de um infinitivo para indicar habilidade. Prefira [[savoir faire|saber fazer]].',
          'Lembre-se de que [[savoir|saber]] também pode acompanhar substantivos, especialmente quando indica informações: [[Je sais son nom.|Sei o nome dele.]]',
            'Não confunda [[J’ai su|Fiquei sabendo / soube]] com [[J’ai connu|Conheci / vivenciei]]. Os particípios passados são diferentes: [[su|sabido]] ' +
            'e [[connu|conhecido]].',
            'Não considere a distinção uma regra absolutamente rígida. [[Savoir|Saber]] e [[connaître|conhecer]] ' +
            'podem apresentar significados próximos em determinados contextos.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique especialmente situações em que você precisa falar sobre habilidades, conhecimentos profissionais, pessoas, lugares e experiências pessoais. ' +
          'Na expressão oral, utilize [[savoir|saber]] para explicar o que consegue fazer e [[connaître|conhecer]] ' +
          'para apresentar sua familiaridade com ambientes e assuntos. ' +
          'Na expressão escrita e na compreensão, preste atenção à construção que acompanha cada verbo e ao significado transmitido pelo contexto.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'A página do OQLF listada confirma o sentido comum dos dois verbos e a distinção: connaître para pessoas, coisas, existência, domínio de uma área e experiência vivida; savoir para atividade aprendida, informação, algo sabido de cor e conhecimento mais aprofundado. ' +
          'Ela também diz que a oposição é muitas vezes sutil e que, em certos contextos, os dois verbos servem. ' +
          'A ficha "Savoir ou connaître ?" do ministério do Québec (Québec Atout) confirma [[savoir + infinitif|saber + infinitivo]] ([[Mon enfant sait marcher.|Meu filho sabe andar.]]), [[savoir|saber]] seguido de [[où|onde]], [[quand|quando]], [[comment|como]], [[combien|quanto]] ou [[que|que]] ([[Tu sais que je suis malade.|Você sabe que estou doente.]]) e [[connaître|conhecer]] + nome ([[Je connais l’histoire de mon pays.|Conheço a história do meu país.]] e [[Elle ne connaît pas le premier ministre.|Ela não conhece o primeiro-ministro.]]). Ela não trata de savoir + nome, mas a OQLF cobre esse ponto: [[savoir|saber]] aceita um complemento de coisa com o sentido de estar informado ou saber de cor ([[Les journalistes savent la date des prochaines élections.|Os jornalistas sabem a data das próximas eleições.]], [[Cet élève sait sa table de multiplication par cœur.|Esse aluno sabe a tabuada de cor.]]), o que sustenta [[Je sais son nom.|Sei o nome dele.]], e não aceita pessoa como complemento, salvo em usos literários. ' +
          'Nenhuma fonte confirma as recomendações de aplicação ao TEF Canada e ao TCF Canada: são sugestões de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'Savoir et connaître : quelle différence ?',
    summary:
      'Apprenez à distinguer les verbes savoir et connaître, qui sont tous les deux liés à la connaissance, mais qui s’utilisent dans des situations différentes. ' +
      'Découvrez comment exprimer des compétences, des informations et une familiarité avec des personnes ou des lieux, tout en maîtrisant leurs conjugaisons et leurs constructions les plus courantes.',
    blocks: [
      { type: 'heading', text: '1. Quelle est la différence entre savoir et connaître ?' },
      {
        type: 'paragraph',
        text:
          'Les deux verbes peuvent exprimer des idées proches, mais ils ne sont pas toujours interchangeables. ' +
          'Savoir exprime principalement la connaissance d’une information, d’un fait ou la capacité à réaliser une activité. ' +
          'Connaître indique une familiarité avec une personne, un lieu, une chose ou un domaine particulier. ' +
          'Dans certains contextes, les deux verbes peuvent être utilisés, mais avec des nuances de sens.'
      },
      {
        type: 'table',
        headers: ['Verbe', 'Construction fréquente', 'Exemple'],
        rows: [
            [
              'Savoir',
              'savoir + infinitif',
              'Je sais conduire.'
            ],
            [
              'Savoir',
              'savoir + que / si / où / comment',
              'Je sais où elle habite.'
            ],
            [
              'Savoir',
              'Information précise',
              'Je sais son adresse.'
            ],
            [
              'Connaître',
              'connaître + personne',
              'Je connais Marie.'
            ],
            [
              'Connaître',
              'connaître + lieu',
              'Je connais Toronto.'
            ],
            [
              'Connaître',
              'connaître + chose ou domaine',
              'Je connais bien ce sujet.'
            ]
        ]
      },
      { type: 'heading', text: '2. La conjugaison au présent de l’indicatif' },
      {
        type: 'paragraph',
        text:
          'Les deux verbes sont irréguliers et leurs formes doivent être mémorisées. ' +
          'Observez les différences entre leurs radicaux, notamment aux première et deuxième personnes du pluriel.'
      },
      {
        type: 'table',
        headers: ['Pronom', 'Savoir', 'Connaître'],
        rows: [
            [
              'Je',
              'Je sais',
              'Je connais'
            ],
            [
              'Tu',
              'Tu sais',
              'Tu connais'
            ],
            [
              'Il / Elle',
              'Il / Elle sait',
              'Il / Elle connaît'
            ],
            [
              'Nous',
              'Nous savons',
              'Nous connaissons'
            ],
            [
              'Vous',
              'Vous savez',
              'Vous connaissez'
            ],
            [
              'Ils / Elles',
              'Ils / Elles savent',
              'Ils / Elles connaissent'
            ]
        ]
      },
      { type: 'heading', text: '3. Quand utiliser savoir ?' },
      {
        type: 'paragraph',
        text:
          'Utilisez savoir pour parler d’informations, de faits, de connaissances précises et de compétences acquises. ' +
          'Ce verbe est très souvent suivi d’un infinitif ou d’une proposition introduite par des mots interrogatifs ou par la conjonction que.'
      },
      {
        type: 'list',
        items: [
          'Compétence : « Je sais parler français. »',
          'Capacité acquise : « Elle sait conduire depuis cinq ans. »',
          'Information : « Je sais que tu travailles à Toronto. »',
          'Question indirecte : « Tu sais où se trouve la station de métro ? »',
          'Connaissance précise : « Nous savons résoudre ce problème. »',
          'Information mémorisée : « Il sait son numéro de téléphone par cœur. »'
        ]
      },
      { type: 'heading', text: '4. Quand utiliser connaître ?' },
      {
        type: 'paragraph',
        text:
          'Utilisez connaître pour parler de votre familiarité avec des personnes, des lieux, des choses et des domaines. ' +
          'Ce verbe est généralement suivi d’un nom ou d’un pronom, et non d’un verbe à l’infinitif.'
      },
      {
        type: 'list',
        items: [
          'Connaître une personne : « Je connais bien mon collègue. »',
          'Connaître un lieu : « Nous connaissons Montréal. »',
          'Connaître une chose : « Tu connais ce film ? »',
          'Être familier avec un domaine : « Elle connaît bien la culture québécoise. »',
          'Faire la connaissance de quelqu’un : « J’ai connu mon meilleur ami à l’université. »',
          'Faire l’expérience de quelque chose : « Il a connu plusieurs difficultés après son arrivée au Canada. »'
        ]
      },
      { type: 'heading', text: '5. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne traduisez pas directement les deux verbes du portugais',
        text:
          'Une erreur fréquente consiste à utiliser connaître devant un verbe à l’infinitif. ' +
          'Pour dire que vous savez conduire, la construction correcte est « Je sais conduire », et non « Je connais conduire ». ' +
          'De même, pour dire que vous connaissez une ville, utilisez « Je connais Toronto », et non une construction avec savoir directement suivi du nom de la ville. ' +
          'Attention également à la nuance : « Je sais la réponse » met l’accent sur l’information connue, tandis que « Je connais bien cette question » souligne votre familiarité avec le sujet.'
      },
      {
        type: 'list',
        items: [
          'Ne confondez pas « Je sais » et « Je connais ». Le choix dépend du type de connaissance que vous souhaitez exprimer.',
          'N’utilisez pas connaître devant un infinitif pour exprimer une compétence. Préférez « savoir faire ».',
          'Rappelez-vous que savoir peut également être suivi d’un nom, notamment lorsqu’il s’agit d’une information : « Je sais son nom ».',
          'Ne confondez pas « J’ai su » et « J’ai connu ». Les participes passés sont différents : su et connu.',
          'Ne considérez pas cette distinction comme une règle absolument rigide. Savoir et connaître peuvent avoir des sens proches dans certains contextes.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous particulièrement dans les situations où vous devez parler de compétences, de connaissances professionnelles, de personnes, de lieux et d’expériences personnelles. ' +
          'À l’expression orale, utilisez savoir pour expliquer ce que vous êtes capable de faire et connaître pour présenter votre familiarité avec des lieux et des sujets. ' +
          'À l’expression écrite et en compréhension, faites attention à la construction qui accompagne chaque verbe et au sens transmis par le contexte.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'La page de l’OQLF indiquée confirme le sens commun des deux verbes et la distinction : connaître pour les personnes, les choses, l’existence, la maîtrise d’un domaine et l’expérience vécue ; savoir pour l’activité apprise, l’information, ce qu’on sait par cœur et une connaissance plus approfondie. ' +
          'Elle dit aussi que l’opposition est souvent ténue et que, dans certains contextes, les deux verbes peuvent convenir. ' +
          'La fiche « Savoir ou connaître ? » du ministère du Québec (Québec Atout) confirme savoir + infinitif (Mon enfant sait marcher), savoir suivi de où, quand, comment, combien ou que (Tu sais que je suis malade) et connaître + nom (Je connais l’histoire de mon pays, Elle ne connaît pas le premier ministre). Elle ne traite pas de savoir + nom, mais l’OQLF couvre ce point : savoir accepte un complément de chose au sens d’être informé ou de savoir par cœur (Les journalistes savent la date des prochaines élections., Cet élève sait sa table de multiplication par cœur.), ce qui soutient Je sais son nom., et n’accepte pas de personne comme complément, sauf dans des emplois littéraires. ' +
          'Aucune source ne confirme les recommandations d’application au TEF Canada et au TCF Canada : ce sont des suggestions de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Savoir ou connaître ? (fiche Québec Atout, Autrement dit) — ministère de l’Immigration du Québec',
      url: 'https://referencesfrancisation.immigration-quebec.gouv.qc.ca/moodle_ref/pluginfile.php/1/block_public_files/files/Catalogue/PDF/DA%20Cahiers/Cahier%204/02%20%C3%89tablissement/CA_DA_O2T2S2_Cahier4_T3-IF6_248_249_lacunaire_savoir_connaitre.pdf'
    },
    {
      title: 'OQLF – Différence entre savoir et connaître',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22416/le-vocabulaire/nuances-semantiques/difference-entre-savoir-et-connaitre'
    },
    {
      title: 'Ministère de l’Immigration, de la Francisation et de l’Intégration du Québec – Savoir ou connaître ?',
      url: 'https://referencesfrancisation.immigration-quebec.gouv.qc.ca/moodle_ref/pluginfile.php/1/block_public_files/files/Catalogue/PDF/DA%20Cahiers/Cahier%204/02%20Établissement/CA_DA_O2T2S2_Cahier4_T3-IF6_248_249_lacunaire_savoir_connaitre.pdf'
    }
  ]
}

export default content
