import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-pronominais',

  pt: {
    title: 'Verbos pronominais em francês',
    summary:
      'Aprenda a identificar e conjugar verbos pronominais, utilizados para expressar ações que o sujeito realiza sobre si mesmo, ações recíprocas e situações do cotidiano. ' +
      'Entenda a posição dos pronomes, a formação da negação e o uso desses verbos no passado.',
    blocks: [
      { type: 'heading', text: '1. O que são verbos pronominais' },
      {
        type: 'paragraph',
        text:
          'Os verbos pronominais são conjugados com um pronome reflexivo que retoma o sujeito da frase. ' +
          'Esse pronome varia conforme a pessoa: [[me, te, se, nous, vous, se|me, te, se, nos, vos, se]]. ' +
          'Em alguns casos, a ação é realizada pelo sujeito sobre si mesmo; em outros, duas ou mais pessoas realizam a ação umas sobre as outras. ' +
          'Existem também verbos que são obrigatoriamente pronominais.'
      },
      { type: 'heading', text: '2. Pronomes reflexivos e conjugação' },
      {
        type: 'paragraph',
        text:
          'Para conjugar um verbo pronominal, coloque o pronome reflexivo antes do verbo e faça a conjugação normalmente. ' +
          'Observe o exemplo com [[se lever|levantar-se]], muito utilizado para falar da rotina.'
      },
      {
        type: 'table',
        headers: ['Pessoa', 'Pronome', 'Verbo conjugado'],
        rows: [
          ['Eu', '[[me|me]]', '[[Je me lève.|Eu me levanto.]]'],
          ['Você', '[[te|te]]', '[[Tu te lèves.|Você se levanta.]]'],
          ['Ele / Ela', '[[se|se]]', '[[Il se lève.|Ele se levanta.]]'],
          ['Nós', '[[nous|nos]]', '[[Nous nous levons.|Nós nos levantamos.]]'],
          ['Vocês / Tratamento formal', '[[vous|vos]]', '[[Vous vous levez.|Vocês se levantam.]]'],
          ['Eles / Elas', '[[se|se]]', '[[Ils se lèvent.|Eles se levantam.]]']
        ]
      },
      { type: 'heading', text: '3. Tipos de verbos pronominais' },
      {
        type: 'list',
        items: [
          'Reflexivos: o sujeito realiza a ação sobre si mesmo. [[Je me lave.|Eu me lavo.]]',
          'Recíprocos: duas ou mais pessoas realizam a ação umas sobre as outras. [[Ils se parlent.|Eles conversam entre si.]]',
          'Essencialmente pronominais: precisam obrigatoriamente do pronome reflexivo. [[Je me souviens de mon enfance.|Eu me lembro da minha infância.]]',
            'Alguns exemplos frequentes: [[se réveiller|acordar]], [[s’habiller|vestir-se]], [[se dépêcher|apressar-se]], [[se reposer|descansar]] ' +
            'e [[se souvenir de|lembrar-se de]].'
        ]
      },
      { type: 'heading', text: '4. Exemplos no cotidiano e na negação' },
      { type: 'paragraph', text: 'Observe como os verbos pronominais aparecem em uma rotina diária:' },
      {
        type: 'paragraph',
        text:
          '[[Je me réveille à six heures.|Eu acordo às seis horas.]] ' +
          '[[Je me prépare rapidement et je me rends au travail en transport en commun.|Eu me preparo rapidamente e vou ao trabalho de transporte público.]] ' +
          '[[Le soir, je me repose et je me couche vers onze heures.|À noite, descanso e vou dormir por volta das onze horas.]]'
      },
      {
        type: 'paragraph',
        text:
          'Na forma negativa, coloque [[ne|não]] antes do pronome reflexivo e [[pas|não]] depois do verbo conjugado: [[Je ne me lève pas tôt.|Eu não me levanto cedo.]] ' +
          'Quando o verbo pronominal está no infinitivo, o pronome também fica antes do verbo: [[Je préfère me reposer.|Prefiro descansar.]]'
      },
      { type: 'heading', text: '5. Verbos pronominais no passado' },
      {
        type: 'paragraph',
        text:
          'No [[passé composé|pretérito perfeito composto]], os verbos pronominais utilizam o auxiliar [[être|ser / estar]]. ' +
          'O particípio passado concorda com o sujeito quando o pronome reflexivo funciona como complemento direto: [[Elle s’est levée tôt.|Ela se levantou cedo.]] ' +
          'Entretanto, existem casos em que não ocorre concordância: [[Elle s’est lavé les mains.|Ela lavou as mãos.]] [[Ils se sont parlé.|Eles conversaram entre si.]] ' +
          'Essas diferenças dependem da função do pronome e da posição do complemento direto.'
      },
      { type: 'heading', text: '6. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não esqueça o pronome reflexivo',
        text:
          'Um erro comum é traduzir literalmente construções do português e esquecer o pronome em francês. ' +
          'Para dizer que você acorda, utilize [[Je me réveille|Eu acordo]], e não [[Je réveille|Eu acordo (errado)]]. ' +
          'A segunda construção está incompleta nesse contexto, pois [[réveiller|acordar alguém]] normalmente exige indicar quem está sendo acordado. ' +
          'Compare: [[Je réveille mon frère.|Eu acordo meu irmão.]]'
      },
      {
        type: 'list',
        items: [
          'Não confunda [[Je lave.|Eu lavo.]] com [[Je me lave.|Eu me lavo.]]. O pronome altera a construção e o sentido da frase.',
          'Não coloque o pronome depois do verbo conjugado. O correto é [[Je me prépare.|Eu me preparo.]], e não uma construção equivalente a eu preparo-me. A exceção é o imperativo afirmativo, em que o pronome vem depois: [[Lève-toi !|Levante-se!]]',
          'Não confunda [[se souvenir de|lembrar-se de]] com uma construção sem pronome. Esse verbo é essencialmente pronominal.',
          'Lembre-se de que [[nous|nos]] e [[vous|vos]] aparecem tanto como sujeitos quanto como pronomes reflexivos, dependendo da construção.',
            'No passado, não acrescente automaticamente uma terminação ao particípio. Compare [[Elles se sont levées.|Elas se levantaram.]] ' +
            'e [[Elles se sont parlé.|Elas conversaram entre si.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como aplicar esse conteúdo nas provas',
        text:
          'Pratique principalmente os verbos pronominais relacionados à rotina, à vida pessoal, ao trabalho e aos relacionamentos. ' +
          'Na expressão oral, eles ajudam a descrever hábitos e experiências com naturalidade. ' +
          'Na expressão escrita, revise a conjugação, a negação e a concordância dos particípios. ' +
          'Para alcançar B2, procure também reconhecer construções pronominais cujo significado não corresponde literalmente à tradução de cada palavra.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As quatro páginas da OQLF listadas abrem, e a de sentido reflexivo confirma o que a página diz sobre o sentido reflexivo e a concordância do particípio (pronome complemento direto × indireto). ' +
          'Nenhuma fonte confirma as sugestões de aplicação nas provas TEF Canada e TCF Canada, nem a referência ao nível B2: são recomendações de preparação. ' +
          'Não representam exigências específicas de uma tarefa nem garantem que esse conteúdo será cobrado.'
      }
    ]
  },

  fr: {
    title: 'Les verbes pronominaux',
    summary:
      'Apprenez à reconnaître et à conjuguer les verbes pronominaux, utilisés pour exprimer des actions que le sujet effectue sur lui-même, des actions réciproques et des situations du quotidien. ' +
      'Découvrez la position des pronoms, la formation de la négation et l’utilisation de ces verbes au passé.',
    blocks: [
      { type: 'heading', text: '1. Qu’est-ce qu’un verbe pronominal ?' },
      {
        type: 'paragraph',
        text:
          'Les verbes pronominaux se conjuguent avec un pronom réfléchi qui renvoie au sujet de la phrase. Ce pronom varie selon la personne : me, te, se, nous, vous, se. ' +
          'Dans certains cas, le sujet effectue une action sur lui-même ; dans d’autres, deux personnes ou plus effectuent une action les unes sur les autres. ' +
          'Il existe également des verbes qui sont obligatoirement pronominaux.'
      },
      { type: 'heading', text: '2. Pronoms réfléchis et conjugaison' },
      {
        type: 'paragraph',
        text:
          'Pour conjuguer un verbe pronominal, placez le pronom réfléchi devant le verbe et conjuguez celui-ci normalement. ' +
          'Observez l’exemple du verbe se lever, très utilisé pour parler de sa routine.'
      },
      {
        type: 'table',
        headers: ['Personne', 'Pronom', 'Verbe conjugué'],
        rows: [
          ['Première personne du singulier', 'me', 'Je me lève.'],
          ['Deuxième personne du singulier', 'te', 'Tu te lèves.'],
          ['Troisième personne du singulier', 'se', 'Il se lève.'],
          ['Première personne du pluriel', 'nous', 'Nous nous levons.'],
          ['Deuxième personne du pluriel', 'vous', 'Vous vous levez.'],
          ['Troisième personne du pluriel', 'se', 'Ils se lèvent.']
        ]
      },
      { type: 'heading', text: '3. Les types de verbes pronominaux' },
      {
        type: 'list',
        items: [
          'Réfléchis : le sujet effectue une action sur lui-même. Je me lave.',
          'Réciproques : deux personnes ou plus effectuent une action les unes sur les autres. Ils se parlent.',
          'Essentiellement pronominaux : ils nécessitent obligatoirement un pronom réfléchi. Je me souviens de mon enfance.',
          'Quelques exemples fréquents : se réveiller, s’habiller, se dépêcher, se reposer et se souvenir de.'
        ]
      },
      { type: 'heading', text: '4. Exemples dans la vie quotidienne et à la forme négative' },
      { type: 'paragraph', text: 'Observez comment les verbes pronominaux apparaissent dans une routine quotidienne :' },
      {
        type: 'paragraph',
        text: 'Je me réveille à six heures. Je me prépare rapidement et je me rends au travail en transport en commun. Le soir, je me repose et je me couche vers onze heures.'
      },
      {
        type: 'paragraph',
        text:
          'À la forme négative, placez ne avant le pronom réfléchi et pas après le verbe conjugué : Je ne me lève pas tôt. ' +
          'Lorsque le verbe pronominal est à l’infinitif, le pronom se place également devant le verbe : Je préfère me reposer.'
      },
      { type: 'heading', text: '5. Les verbes pronominaux au passé' },
      {
        type: 'paragraph',
        text:
          'Au passé composé, les verbes pronominaux utilisent l’auxiliaire être. ' +
          'Le participe passé s’accorde avec le sujet lorsque le pronom réfléchi fonctionne comme complément direct : Elle s’est levée tôt. ' +
          'Cependant, il existe des cas où le participe ne s’accorde pas : Elle s’est lavé les mains. Ils se sont parlé. ' +
          'Ces différences dépendent de la fonction du pronom et de la position du complément direct.'
      },
      { type: 'heading', text: '6. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'N’oubliez pas le pronom réfléchi',
        text:
          'Une erreur fréquente consiste à traduire littéralement des constructions portugaises et à oublier le pronom en français. ' +
          'Pour dire que vous vous réveillez, utilisez « Je me réveille », et non « Je réveille ». ' +
          'Cette deuxième construction est incomplète dans ce contexte, car le verbe réveiller demande normalement de préciser qui est réveillé. ' +
          'Comparez : « Je réveille mon frère ».'
      },
      {
        type: 'list',
        items: [
          'Ne confondez pas « Je lave » et « Je me lave ». Le pronom modifie la construction et le sens de la phrase.',
          'Ne placez pas le pronom après le verbe conjugué. On dit « Je me prépare », et non une construction qui correspondrait à je prépare-moi. L’exception est l’impératif affirmatif, où le pronom se place après le verbe : « Lève-toi ! ».',
          'Ne confondez pas « se souvenir de » avec une construction sans pronom. Ce verbe est essentiellement pronominal.',
          'Rappelez-vous que « nous » et « vous » peuvent être utilisés comme sujets et comme pronoms réfléchis, selon la construction.',
          'Au passé, n’ajoutez pas automatiquement une terminaison au participe. Comparez « Elles se sont levées » et « Elles se sont parlé ».'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment appliquer ces connaissances aux examens',
        text:
          'Entraînez-vous principalement avec les verbes pronominaux liés à la routine, à la vie personnelle, au travail et aux relations. ' +
          'À l’expression orale, ils permettent de décrire des habitudes et des expériences de manière naturelle. ' +
          'À l’expression écrite, révisez la conjugaison, la négation et l’accord des participes. ' +
          'Pour atteindre le niveau B2, apprenez également à reconnaître les constructions pronominales dont le sens ne correspond pas littéralement à la traduction de chaque mot.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les quatre pages de l’OQLF indiquées s’ouvrent, et celle du sens réfléchi confirme ce que la page dit sur le sens réfléchi et l’accord du participe (pronom complément direct ou indirect). ' +
          'Aucune source ne confirme les suggestions d’application aux épreuves du TEF Canada et du TCF Canada, ni la référence au niveau B2 : ce sont des recommandations de préparation. ' +
          'Elles ne constituent pas des exigences propres à une tâche et ne garantissent pas que ce contenu sera évalué.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – Banque de dépannage linguistique : Verbe pronominal de sens réfléchi',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22954/la-grammaire/le-verbe/verbes-pronominaux/verbe-pronominal-de-sens-reflechi'
    },
    {
      title: 'OQLF – Banque de dépannage linguistique : Verbe pronominal de sens réciproque',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22955/la-grammaire/le-verbe/verbes-pronominaux/verbe-pronominal-de-sens-reciproque'
    },
    {
      title: 'OQLF – Banque de dépannage linguistique : Accord du participe passé des verbes essentiellement pronominaux',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22940/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-etre/accord-du-participe-passe-des-verbes-essentiellement-pronominaux'
    },
    {
      title: 'OQLF – Banque de dépannage linguistique : Synthèse des règles d’accord du participe passé employé avec être',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/24222/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-etre/synthese-des-regles-daccord-du-participe-passe-employe-avec-etre'
    }
  ]
}

export default content
