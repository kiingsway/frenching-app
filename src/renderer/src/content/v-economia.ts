import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-economia',

  pt: {
    title: 'Economia e finanças pessoais',
    summary:
      'Aprenda o vocabulário francês relacionado a salários, despesas, orçamento, poupança, contas bancárias, crédito e dívidas. ' +
      'Desenvolva a capacidade de falar sobre seu custo de vida no Canadá, explicar decisões financeiras e compreender situações comuns envolvendo bancos e pagamentos.',
    blocks: [
      { type: 'heading', text: '1. Renda, orçamento e despesas' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre finanças pessoais, é importante conhecer os termos relacionados ao dinheiro que você recebe e ao dinheiro que gasta. ' +
          'Um orçamento é uma ferramenta utilizada para organizar [[les revenus|as receitas]] ' +
          'e [[les dépenses|as despesas]], acompanhar os gastos e estabelecer objetivos financeiros. ' +
          'No Canadá, é comum organizar o orçamento mensalmente e separar despesas fixas, variáveis e valores destinados à poupança.'
      },
      {
        type: 'table',
        headers: ['Francês', 'Definição'],
        rows: [
            [
              '[[un revenu|uma renda]]',
              'Dinheiro recebido por uma pessoa.'
            ],
            [
              '[[un salaire|um salário]]',
              'Pagamento recebido pelo trabalho.'
            ],
            [
              '[[une dépense|uma despesa]]',
              'Dinheiro utilizado em uma compra ou obrigação.'
            ],
            [
              '[[les dépenses fixes|as despesas fixas]]',
              'Gastos recorrentes, como aluguel e seguros.'
            ],
            [
              '[[les dépenses variables|as despesas variáveis]]',
              'Gastos que podem mudar de um mês para outro.'
            ],
            [
              '[[le loyer|o aluguel]]',
              'Valor pago pelo uso de uma moradia.'
            ],
            [
              '[[une facture|uma conta / fatura]]',
              'Valor devido por um serviço ou consumo.'
            ],
            [
              '[[les économies|as economias / a poupança acumulada]]',
              'Dinheiro guardado.'
            ],
            [
              '[[l’épargne|a poupança]]',
              'Dinheiro reservado para objetivos futuros.'
            ],
            [
              '[[un fonds d’urgence|um fundo de emergência]]',
              'Dinheiro reservado para imprevistos.'
            ]
        ]
      },
      { type: 'heading', text: '2. Banco, crédito e dívidas' },
      {
        type: 'paragraph',
        text:
          'No cotidiano canadense, você pode precisar falar sobre movimentações bancárias, pagamentos, limites de crédito e empréstimos. ' +
          'É importante diferenciar o saldo de uma conta, o valor devido no cartão de crédito e os juros cobrados quando uma dívida não é paga integralmente.'
      },
      {
        type: 'table',
        headers: ['Francês', 'Definição'],
        rows: [
            [
              '[[un compte bancaire|uma conta bancária]]',
              'Conta mantida em uma instituição financeira.'
            ],
            [
              '[[un compte-chèques|uma conta corrente]]',
              'Conta utilizada para transações cotidianas. Na França, diz-se [[un compte courant|uma conta corrente]].'
            ],
            [
              '[[un compte d’épargne|uma conta poupança]]',
              'Conta destinada a guardar dinheiro.'
            ],
            [
              '[[un relevé bancaire|um extrato bancário]]',
              'Documento que apresenta as movimentações da conta.'
            ],
            [
              '[[un solde|um saldo]]',
              'Valor disponível ou devido em uma conta.'
            ],
            [
              '[[des frais bancaires|tarifas bancárias]]',
              'Valores cobrados pelos serviços financeiros.'
            ],
            [
              '[[une carte de crédit|um cartão de crédito]]',
              'Meio de pagamento que permite utilizar crédito.'
            ],
            [
              '[[une limite de crédit|um limite de crédito]]',
              'Valor máximo disponibilizado para utilização.'
            ],
            [
              '[[le taux d’intérêt|a taxa de juros]]',
              'Percentual cobrado sobre um empréstimo ou saldo devedor.'
            ],
            [
              '[[le paiement minimum|o pagamento mínimo]]',
              'Menor valor exigido no pagamento mensal de uma dívida.'
            ],
            [
              '[[une cote de crédit|uma pontuação de crédito]]',
              'Indicador utilizado pelos credores para avaliar o risco de crédito.'
            ],
            [
              '[[une dette|uma dívida]]',
              'Valor que uma pessoa deve pagar.'
            ],
            [
              '[[un prêt|um empréstimo]]',
              'Dinheiro recebido com obrigação de devolução.'
            ],
            [
              '[[rembourser|reembolsar / quitar]]',
              'Devolver o dinheiro de uma dívida ou empréstimo.'
            ],
            [
              '[[la date d’échéance|a data de vencimento]]',
              'Data limite para realizar um pagamento.'
            ]
        ]
      },
      { type: 'heading', text: '3. Expressões e exemplos no contexto canadense' },
      {
        type: 'paragraph',
        text:
          'Algumas expressões são especialmente úteis para conversar sobre orçamento, pagamentos e objetivos financeiros. ' +
          'Observe como elas aparecem em situações cotidianas.'
      },
      {
        type: 'list',
        items: [
          'Organizar um orçamento: [[faire un budget|fazer um orçamento]].',
          'Controlar os gastos: [[suivre ses dépenses|acompanhar as despesas]].',
          'Guardar dinheiro: [[mettre de l’argent de côté|guardar dinheiro]].',
          'Reduzir os gastos: [[réduire ses dépenses|reduzir as despesas]].',
          'Pagar uma conta: [[payer une facture|pagar uma conta]].',
          'Quitar uma dívida: [[rembourser une dette|quitar uma dívida]].',
          'Fazer uma compra parcelada: [[payer en plusieurs versements|pagar em várias parcelas]].',
          'Receber o salário por depósito direto: [[recevoir son salaire par dépôt direct|receber o salário por depósito direto]].',
          'Estar endividado: [[être endetté|estar endividado]].',
          'Conseguir chegar ao fim do mês: [[arriver à joindre les deux bouts|conseguir fazer o dinheiro durar até o fim do mês]].'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Exemplo de situação financeira: Amélie trabalha em Toronto e organiza seu orçamento mensal. ' +
          '[[Chaque mois, Amélie reçoit son salaire par dépôt direct.|Todos os meses, Amélie recebe seu salário por depósito direto.]] ' +
          '[[Elle paie son loyer et ses factures, puis elle met une somme de côté pour les imprévus.|Ela paga seu aluguel e suas contas e depois guarda uma quantia para imprevistos.]] ' +
          '[[Elle consulte son relevé de carte de crédit et règle le solde avant la date d’échéance.|Ela consulta o extrato do cartão de crédito e quita o saldo antes da data de vencimento.]]'
      },
      { type: 'heading', text: '4. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção às diferenças entre pagar, quitar e economizar',
        text:
          'Em francês, [[payer|pagar]] e [[rembourser|reembolsar / quitar]] não são sempre intercambiáveis. Utilize [[payer une facture|pagar uma conta]] ' +
          'para uma fatura e [[rembourser un prêt|quitar um empréstimo]] para devolver o dinheiro emprestado. ' +
          'Outra distinção importante é entre [[épargner|poupar / guardar dinheiro]] e [[économiser|economizar / reduzir gastos]]. ' +
          'O primeiro destaca a formação de uma reserva financeira; o segundo pode indicar redução de despesas ou economia em uma compra.'
      },
      {
        type: 'list',
        items: [
            'Não confunda [[un revenu|uma renda]] com [[un bénéfice|um lucro]]. ' +
            'O primeiro é o dinheiro recebido; o segundo representa o resultado positivo de uma atividade financeira ou comercial.',
          'Não confunda [[un solde créditeur|um saldo credor]] com [[un solde débiteur|um saldo devedor]]. São situações financeiras diferentes.',
            'Não utilize [[emprunter|emprestar]] para dizer que você empresta dinheiro a alguém. Em francês, [[emprunter de l’argent|pegar dinheiro emprestado]] ' +
            'significa receber dinheiro de outra pessoa; para emprestar dinheiro, utilize [[prêter de l’argent|emprestar dinheiro]].',
            'Não confunda [[une carte de débit|um cartão de débito]] com [[une carte de crédit|um cartão de crédito]]. ' +
            'O primeiro utiliza dinheiro da conta, enquanto o segundo utiliza crédito disponibilizado pela instituição financeira.',
            'Não traduza literalmente a expressão estar sem dinheiro. Utilize [[Je n’ai plus d’argent.|Não tenho mais dinheiro.]] ' +
            'ou [[Je suis à court d’argent.|Estou sem dinheiro.]]',
            'Não confunda [[les intérêts|os juros]] com [[le capital|o valor principal da dívida]]. ' +
            'Os juros são cobrados sobre o dinheiro emprestado ou devido, enquanto o capital corresponde ao valor principal.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique situações envolvendo orçamento doméstico, custo de vida, aumento de despesas, consumo, poupança e endividamento. ' +
          'Na compreensão oral, treine reconhecer valores, taxas, datas de vencimento e condições de pagamento. ' +
          'Na expressão oral e escrita, desenvolva argumentos sobre hábitos de consumo, educação financeira e decisões econômicas. ' +
          'Para buscar o nível B2, saiba explicar consequências, comparar alternativas e justificar escolhas utilizando vocabulário financeiro preciso.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'As cinco páginas da Agência de Consumo em Matéria Financeira do Canadá listadas abrem e trazem o vocabulário de orçamento, renda, despesas, poupança, fundo de emergência, saldo, pagamento mínimo, data de vencimento, extrato, taxa de juros, limite de crédito, cota de crédito, dívida, reembolso e capital. ' +
          'Nelas não aparecem dépenses fixes, dépenses variables e économies. ' +
          'Nenhuma fonte confirma: a diferença entre épargner e économiser, emprunter e prêter, solde créditeur e débiteur, revenu e bénéfice; as expressões de conversação (arriver à joindre les deux bouts, être à court d’argent); a forma compte courant na França; o exemplo fictício de Amélie; e a afirmação de que é comum organizar o orçamento mensalmente no Canadá. ' +
          'Também não há fonte para as recomendações de preparação para o TEF Canada e o TCF Canada, nem para a referência ao nível B2: são sugestões de preparação, não regras das provas.'
      }
    ]
  },

  fr: {
    title: 'L’économie et les finances personnelles',
    summary:
      'Apprenez le vocabulaire français lié aux salaires, aux dépenses, au budget, à l’épargne, aux comptes bancaires, au crédit et aux dettes. ' +
      'Développez votre capacité à parler du coût de la vie au Canada, à expliquer vos décisions financières et à comprendre des situations courantes concernant les banques et les paiements.',
    blocks: [
      { type: 'heading', text: '1. Les revenus, le budget et les dépenses' },
      {
        type: 'paragraph',
        text:
          'Pour parler de finances personnelles, il est important de connaître les termes liés à l’argent que vous recevez et à celui que vous dépensez. ' +
          'Un budget est un outil qui permet d’organiser les revenus et les dépenses, de suivre les frais et de fixer des objectifs financiers. ' +
          'Au Canada, il est courant de préparer un budget mensuel et de distinguer les dépenses fixes, les dépenses variables et les sommes destinées à l’épargne.'
      },
      {
        type: 'table',
        headers: ['En français', 'Définition'],
        rows: [
            [
              'un revenu',
              'Argent reçu par une personne.'
            ],
            [
              'un salaire',
              'Rémunération reçue en échange d’un travail.'
            ],
            [
              'une dépense',
              'Argent utilisé pour un achat ou une obligation.'
            ],
            [
              'les dépenses fixes',
              'Dépenses récurrentes.'
            ],
            [
              'les dépenses variables',
              'Dépenses qui peuvent changer d’un mois à l’autre.'
            ],
            [
              'le loyer',
              'Montant payé pour habiter un logement.'
            ],
            [
              'une facture',
              'Montant dû pour un service ou une consommation.'
            ],
            [
              'les économies',
              'Argent mis de côté.'
            ],
            [
              'l’épargne',
              'Argent réservé à des objectifs futurs.'
            ],
            [
              'un fonds d’urgence',
              'Argent réservé aux imprévus.'
            ]
        ]
      },
      { type: 'heading', text: '2. La banque, le crédit et les dettes' },
      {
        type: 'paragraph',
        text:
          'Dans la vie quotidienne au Canada, vous pourriez avoir besoin de parler des opérations bancaires, des paiements, des limites de crédit et des prêts. ' +
          'Il est important de distinguer le solde d’un compte, le montant dû sur une carte de crédit et les intérêts facturés lorsqu’une dette n’est pas entièrement remboursée.'
      },
      {
        type: 'table',
        headers: ['En français', 'Définition'],
        rows: [
            [
              'un compte bancaire',
              'Compte détenu auprès d’une institution financière.'
            ],
            [
              'un compte-chèques',
              'Compte utilisé pour les opérations courantes. En France, on dit un compte courant.'
            ],
            [
              'un compte d’épargne',
              'Compte destiné à mettre de l’argent de côté.'
            ],
            [
              'un relevé bancaire',
              'Document présentant les opérations d’un compte.'
            ],
            [
              'un solde',
              'Montant disponible ou dû sur un compte.'
            ],
            [
              'des frais bancaires',
              'Montants facturés pour des services financiers.'
            ],
            [
              'une carte de crédit',
              'Moyen de paiement permettant d’utiliser du crédit.'
            ],
            [
              'une limite de crédit',
              'Montant maximal autorisé pour l’utilisation du crédit.'
            ],
            [
              'le taux d’intérêt',
              'Pourcentage facturé sur un prêt ou un solde dû.'
            ],
            [
              'le paiement minimum',
              'Montant minimum exigé pour le paiement mensuel d’une dette.'
            ],
            [
              'une cote de crédit',
              'Indicateur utilisé par les prêteurs pour évaluer le risque de crédit.'
            ],
            [
              'une dette',
              'Montant qu’une personne doit rembourser.'
            ],
            [
              'un prêt',
              'Argent reçu avec l’obligation de le rembourser.'
            ],
            [
              'rembourser',
              'Rendre l’argent emprunté ou régler une dette.'
            ],
            [
              'la date d’échéance',
              'Date limite à laquelle un paiement doit être effectué.'
            ]
        ]
      },
      { type: 'heading', text: '3. Expressions et exemples dans le contexte canadien' },
      {
        type: 'paragraph',
        text:
          'Certaines expressions sont particulièrement utiles pour parler du budget, des paiements et des objectifs financiers. ' +
          'Observez comment elles sont utilisées dans des situations quotidiennes.'
      },
      {
        type: 'list',
        items: [
          'Organiser un budget : faire un budget.',
          'Suivre ses dépenses : suivre ses dépenses.',
          'Mettre de l’argent de côté : mettre de l’argent de côté.',
          'Réduire ses dépenses : réduire ses dépenses.',
          'Payer une facture : payer une facture.',
          'Rembourser une dette : rembourser une dette.',
          'Faire un achat en plusieurs versements : payer en plusieurs versements.',
          'Recevoir son salaire par dépôt direct : recevoir son salaire par dépôt direct.',
          'Être endetté : être endetté.',
          'Arriver à la fin du mois avec ses revenus : arriver à joindre les deux bouts.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Exemple de situation financière : Amélie travaille à Toronto et organise son budget mensuel. Chaque mois, Amélie reçoit son salaire par dépôt direct. ' +
          'Elle paie son loyer et ses factures, puis elle met une somme de côté pour les imprévus. ' +
          'Elle consulte son relevé de carte de crédit et règle le solde avant la date d’échéance.'
      },
      { type: 'heading', text: '4. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention aux différences entre payer, rembourser et économiser',
        text:
          'En français, payer et rembourser ne sont pas toujours interchangeables. ' +
          'Utilisez payer une facture pour une facture et rembourser un prêt pour rendre l’argent emprunté. ' +
          'Une autre distinction importante concerne épargner et économiser. ' +
          'Le premier met l’accent sur la constitution d’une réserve financière ; le second peut désigner une réduction des dépenses ou une économie réalisée sur un achat.'
      },
      {
        type: 'list',
        items: [
            'Ne confondez pas un revenu et un bénéfice. ' +
            'Le premier désigne l’argent reçu ; le deuxième représente le résultat positif d’une activité financière ou commerciale.',
          'Ne confondez pas un solde créditeur et un solde débiteur. Ce sont deux situations financières différentes.',
            'Ne confondez pas emprunter et prêter. ' +
            'Emprunter de l’argent signifie recevoir de l’argent d’une autre personne ; prêter de l’argent signifie en donner temporairement à quelqu’un.',
          'Ne traduisez pas littéralement l’expression portugaise correspondant à être sans argent. Utilisez « Je n’ai plus d’argent » ou « Je suis à court d’argent ».',
            'Ne confondez pas les intérêts et le capital de la dette. ' +
            'Les intérêts sont facturés sur l’argent emprunté ou dû, tandis que le capital correspond au montant principal.'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous avec des situations concernant le budget familial, le coût de la vie, l’augmentation des dépenses, la consommation, l’épargne et l’endettement. ' +
          'En compréhension orale, pratiquez la reconnaissance des montants, des taux, des dates d’échéance et des conditions de paiement. ' +
          'À l’expression orale et écrite, développez des arguments sur les habitudes de consommation, l’éducation financière et les décisions économiques. ' +
          'Pour viser le niveau B2, apprenez à expliquer des conséquences, à comparer des solutions et à justifier vos choix avec un vocabulaire financier précis.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'Les cinq pages de l’Agence de la consommation en matière financière du Canada indiquées s’ouvrent et présentent le vocabulaire du budget, des revenus, des dépenses, de l’épargne, du fonds d’urgence, du solde, du paiement minimum, de la date d’échéance, du relevé, du taux d’intérêt, de la limite de crédit, de la cote de crédit, de la dette, du remboursement et du capital. ' +
          'Les expressions dépenses fixes, dépenses variables et économies n’y figurent pas. ' +
          'Aucune source ne confirme : la différence entre épargner et économiser, emprunter et prêter, solde créditeur et débiteur, revenu et bénéfice ; les expressions conversationnelles (arriver à joindre les deux bouts, être à court d’argent) ; la forme compte courant en France ; l’exemple fictif d’Amélie ; et l’affirmation selon laquelle il est courant de préparer un budget mensuel au Canada. ' +
          'Il n’y a pas non plus de source pour les recommandations de préparation au TEF Canada et au TCF Canada, ni pour la référence au niveau B2 : ce sont des suggestions de préparation, pas des règles des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Agence de la consommation en matière financière du Canada – Faire un budget',
      url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/faire-budget.html'
    },
    {
      title: 'Agence de la consommation en matière financière du Canada – Régler votre solde de carte de crédit',
      url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/cartes-credit/regler-carte-credit.html'
    },
    {
      title: 'Agence de la consommation en matière financière du Canada – Principes de base des dossiers et cotes de crédit',
      url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/dossier-pointage-credit/dossier-cote-credit-base.html'
    },
    {
      title: 'Agence de la consommation en matière financière du Canada – Comprendre les dettes',
      url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/dettes/plan-payer-dettes.html'
    },
    {
      title: 'Agence de la consommation en matière financière du Canada – Utiliser votre carte de crédit de façon responsable',
      url: 'https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/cartes-credit/gerer-credit-responsible.html'
    }
  ]
}

export default content
