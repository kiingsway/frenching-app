import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'ce-cartas',

  pt: {
    title: 'E-mails e cartas (pessoais e administrativas)',
    summary:
      'Mensagens de amigos, e-mails de trabalho e cartas de uma administração aparecem em toda a compreensão escrita. ' +
      'Para responder rápido, é preciso reconhecer quem escreve para quem, por que motivo e o que se pede ao leitor.',
    blocks: [
      { type: 'heading', text: 'Dois registros, duas leituras' },
      {
        type: 'paragraph',
        text:
          'As mensagens pessoais (amigos, família, vizinhos) usam tu, frases curtas e linguagem informal; aparecem nas questões mais fáceis. ' +
          'As cartas administrativas e profissionais (banco, prefeitura, empregador, proprietário) usam vous, fórmulas fixas e frases longas; ' +
          'aparecem no meio da prova, perto do nível B1–B2 que corresponde ao NCLC 7.'
      },

      { type: 'heading', text: 'As perguntas de sempre' },
      {
        type: 'table',
        headers: ['Pergunta', 'Onde está a resposta'],
        rows: [
          [
            'Quem escreve e para quem?',
            'Assinatura, cabeçalho, fórmula de saudação (Chère Julie × Madame, Monsieur)'
          ],
          [
            'Por que a pessoa escreve?',
            'Primeiro parágrafo: Je vous écris pour… / Suite à votre demande…'
          ],
          [
            'O que se pede ao leitor?',
            'Verbos de pedido e o último parágrafo: Merci de nous retourner…'
          ],
          [
            'Qual é o prazo ou a condição?',
            'Datas e expressões como avant le, au plus tard, à défaut de'
          ],
          ['Qual é o tom?', 'Agradecimento, reclamação, desculpa, convite, recusa']
        ]
      },

      { type: 'heading', text: 'Fórmulas que indicam a intenção' },
      {
        type: 'table',
        headers: ['Fórmula', 'Intenção'],
        rows: [
          ['Je me permets de vous contacter au sujet de…', 'Abrir um assunto formal'],
          ['Suite à notre entretien téléphonique…', 'Dar continuidade a um contato anterior'],
          [
            'Nous avons le regret de vous informer que…',
            'Dar uma má notícia (recusa, cancelamento)'
          ],
          ['Nous avons le plaisir de vous annoncer que…', 'Dar uma boa notícia (aceitação)'],
          ['Je vous serais reconnaissant(e) de…', 'Pedir algo com cortesia'],
          ['Veuillez trouver ci-joint…', 'Anunciar um anexo'],
          ['Je tiens à vous faire part de mon mécontentement', 'Reclamar'],
          [
            'Veuillez agréer, Madame, Monsieur, mes salutations distinguées',
            'Encerrar uma carta formal'
          ],
          ['Bisous / À plus / Grosses bises', 'Encerrar uma mensagem entre amigos']
        ]
      },

      { type: 'heading', text: 'Estratégia de leitura' },
      {
        type: 'list',
        items: [
          'Leia a pergunta, depois o cabeçalho, a saudação e a assinatura: em poucos segundos você sabe quem fala com quem.',
          'Leia com atenção o primeiro parágrafo (o motivo) e o último (o pedido ou a próxima etapa).',
          'Sublinhe mentalmente datas, valores e documentos pedidos.',
          'Repare nos conectores de oposição (cependant, toutefois, en revanche): depois deles costuma vir a informação decisiva.',
          'Em cartas de recusa, a má notícia vem muitas vezes cercada de agradecimentos: não se deixe enganar pelo tom gentil.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Pedido explícito × pedido educado',
        text:
          'Na carta formal, uma obrigação raramente aparece como ordem. "Nous vous invitons à vous présenter muni de vos pièces d’identité" ' +
          'não é um convite opcional: quer dizer que você deve comparecer com seus documentos.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'Leia e-mails e cartas reais em francês: avisos da Revenu Québec, cartas de bancos, newsletters de associações. ' +
          'Para cada um, resuma em uma frase: quem escreve, por que e o que espera do leitor. Isso também prepara a expressão escrita.'
      }
    ]
  },

  fr: {
    title: 'Courriels et lettres (personnels et administratifs)',
    summary:
      'Les messages d’amis, les courriels professionnels et les lettres d’une administration reviennent dans toute l’épreuve de compréhension écrite. ' +
      'Pour répondre vite, il faut reconnaître qui écrit à qui, pour quelle raison et ce qu’on demande au lecteur.',
    blocks: [
      { type: 'heading', text: 'Deux registres, deux lectures' },
      {
        type: 'paragraph',
        text:
          'Les messages personnels (amis, famille, voisins) utilisent le tutoiement, des phrases courtes et une langue familière ; ils figurent parmi les questions les plus faciles. ' +
          'Les lettres administratives et professionnelles (banque, mairie, employeur, propriétaire) utilisent le vouvoiement, des formules figées et des phrases longues ; ' +
          'elles apparaissent au milieu de l’épreuve, autour du niveau B1–B2 qui correspond au NCLC 7.'
      },

      { type: 'heading', text: 'Les questions habituelles' },
      {
        type: 'table',
        headers: ['Question', 'Où se trouve la réponse'],
        rows: [
          [
            'Qui écrit et à qui ?',
            'La signature, l’en-tête, la formule d’appel (Chère Julie ou Madame, Monsieur)'
          ],
          [
            'Pourquoi la personne écrit-elle ?',
            'Le premier paragraphe : Je vous écris pour… / Suite à votre demande…'
          ],
          [
            'Que demande-t-on au lecteur ?',
            'Les verbes de demande et le dernier paragraphe : Merci de nous retourner…'
          ],
          [
            'Quel est le délai ou la condition ?',
            'Les dates et des expressions comme avant le, au plus tard, à défaut de'
          ],
          ['Quel est le ton ?', 'Remerciement, réclamation, excuse, invitation, refus']
        ]
      },

      { type: 'heading', text: 'Les formules qui révèlent l’intention' },
      {
        type: 'table',
        headers: ['Formule', 'Intention'],
        rows: [
          ['Je me permets de vous contacter au sujet de…', 'Ouvrir un sujet de façon formelle'],
          ['Suite à notre entretien téléphonique…', 'Donner suite à un contact précédent'],
          [
            'Nous avons le regret de vous informer que…',
            'Annoncer une mauvaise nouvelle (refus, annulation)'
          ],
          [
            'Nous avons le plaisir de vous annoncer que…',
            'Annoncer une bonne nouvelle (acceptation)'
          ],
          ['Je vous serais reconnaissant(e) de…', 'Demander poliment'],
          ['Veuillez trouver ci-joint…', 'Signaler une pièce jointe'],
          ['Je tiens à vous faire part de mon mécontentement', 'Se plaindre'],
          [
            'Veuillez agréer, Madame, Monsieur, mes salutations distinguées',
            'Terminer une lettre formelle'
          ],
          ['Bisous / À plus / Grosses bises', 'Terminer un message entre amis']
        ]
      },

      { type: 'heading', text: 'Stratégie de lecture' },
      {
        type: 'list',
        items: [
          'Lisez la question, puis l’en-tête, la formule d’appel et la signature : en quelques secondes, vous savez qui parle à qui.',
          'Lisez attentivement le premier paragraphe (la raison) et le dernier (la demande ou l’étape suivante).',
          'Repérez les dates, les montants et les documents demandés.',
          'Observez les connecteurs d’opposition (cependant, toutefois, en revanche) : l’information décisive vient souvent juste après.',
          'Dans une lettre de refus, la mauvaise nouvelle est souvent entourée de remerciements : ne vous laissez pas tromper par le ton aimable.'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Demande explicite ou demande polie',
        text:
          'Dans une lettre formelle, une obligation prend rarement la forme d’un ordre. « Nous vous invitons à vous présenter muni de vos pièces d’identité » ' +
          'n’est pas une invitation facultative : cela veut dire que vous devez venir avec vos papiers.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Lisez de vrais courriels et de vraies lettres en français : les avis de Revenu Québec, les lettres de banques, les infolettres d’associations. ' +
          'Pour chacun, résumez en une phrase : qui écrit, pourquoi et ce qu’on attend du lecteur. Cela prépare aussi l’expression écrite.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Université de Sherbrooke – TCF : compréhension écrite',
      url: 'https://www.usherbrooke.ca/centredelangues/tests-et-certifications/test-de-connaissance-du-francais-tcf/description-du-tcf/comprehension-ecrite'
    },
    {
      title: 'Le français des affaires – TEF Canada : présentation des épreuves',
      url: 'https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/presentation/'
    },
    {
      title: 'Open Exam Prep – TEF Canada Reading: structure and question types',
      url: 'https://open-exam-prep.com/study-guides/tef-canada/reading-comprehension/reading-overview'
    }
  ]
}

export default content
