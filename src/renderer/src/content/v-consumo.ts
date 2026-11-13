import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-consumo',

  pt: {
    title: 'Compras e consumo: lojas, comércio online, reclamações e consumo responsável',
    summary:
      'Aprenda o vocabulário francês relacionado a compras em lojas físicas e pela internet, incluindo preços, descontos, pagamentos, entregas e devoluções. ' +
      'Saiba como reclamar de produtos defeituosos, solicitar reembolsos e discutir hábitos de consumo responsável, com atenção às particularidades do comércio canadense.',
    blocks: [
      { type: 'heading', text: '1. Lojas, comércio e compras' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre compras, é importante conhecer os estabelecimentos comerciais, os produtos e as operações de pagamento. ' +
          'No francês canadense, o verbo [[magasiner|fazer compras]] é muito utilizado, enquanto na França são comuns expressões como [[faire les magasins|ir às lojas]] ' +
          'e [[faire du shopping|fazer compras]]. Também é importante distinguir uma loja, um estabelecimento comercial e um shopping center.'
      },
      {
        type: 'table',
        headers: ['Categoria', 'Vocabulário em francês', 'Uso'],
        rows: [
            [
              'Estabelecimentos',
              '[[un magasin|uma loja]], [[un commerce|um estabelecimento comercial]], [[un centre commercial|um shopping center]], [[une boutique|uma boutique / loja pequena]], [[une épicerie|um mercado / mercearia]]',
              'Locais de compra.'
            ],
            [
              'Pessoas e setores',
              '[[un commerçant|um comerciante]], [[un vendeur|um vendedor]], [[un client|um cliente]], [[un rayon|um setor / uma seção]], [[la caisse|o caixa]]',
              'Pessoas e áreas de atendimento.'
            ],
            [
              'Preços e descontos',
              '[[un prix|um preço]], [[un rabais|um desconto]], [[une réduction|uma redução / desconto]], [[une promotion|uma promoção]], [[un article en solde|um produto em promoção]]',
              'Valores e ofertas comerciais.'
            ],
            [
              'Pagamento',
              '[[un paiement|um pagamento]], [[payer comptant|pagar à vista]], [[payer par carte|pagar com cartão]], [[un reçu|um recibo / comprovante]], [[une facture|uma fatura / nota]]',
              'Formas e comprovantes de pagamento.'
            ],
            [
              'Produtos e serviços',
              '[[un produit|um produto]], [[une marchandise|uma mercadoria]], [[un service|um serviço]], [[une marque|uma marca]], [[une garantie|uma garantia]]',
              'Bens e serviços disponíveis para compra.'
            ]
        ]
      },
      { type: 'heading', text: '2. Comércio eletrônico e compras online' },
      {
        type: 'paragraph',
        text:
          'No comércio eletrônico, você encontrará vocabulário relacionado à escolha dos produtos, confirmação dos pedidos e acompanhamento das entregas. ' +
          'Antes de finalizar uma compra, é importante observar o preço total, os impostos, as taxas de entrega e as condições de devolução. ' +
          'Algumas expressões essenciais são [[faire un achat en ligne|fazer uma compra online]], [[passer une commande|fazer um pedido]], [[un site marchand|um site de comércio eletrônico]], [[un panier d’achat|um carrinho de compras]], [[les frais de livraison|as taxas de entrega]], [[le suivi de commande|o rastreamento do pedido]] ' +
          'e [[un délai de livraison|um prazo de entrega]].'
      },
      {
        type: 'list',
        items: [
          '[[Avant de confirmer ma commande, je vérifie le prix total et les frais de livraison.|Antes de confirmar meu pedido, verifico o preço total e as taxas de entrega.]]',
          '[[J’ai reçu un courriel confirmant l’expédition de mon colis.|Recebi um e-mail confirmando o envio da minha encomenda.]]',
          '[[Le produit est indiqué comme étant en rupture de stock.|O produto aparece como indisponível em estoque.]]',
          '[[Je préfère payer par carte de crédit lorsque j’achète en ligne.|Prefiro pagar com cartão de crédito quando compro pela internet.]]',
          '[[Le délai de livraison annoncé était de cinq jours ouvrables.|O prazo de entrega anunciado era de cinco dias úteis.]]'
        ]
      },
      { type: 'heading', text: '3. Reclamações, devoluções e problemas com compras' },
      {
        type: 'paragraph',
        text:
          'Quando uma compra apresenta problemas, é importante saber descrever a situação e explicar qual solução você espera. ' +
          'Alguns termos fundamentais são [[un article défectueux|um produto defeituoso]], [[un article endommagé|um produto danificado]], [[un produit non conforme à la description|um produto diferente da descrição]], [[une réclamation|uma reclamação]], [[un remboursement|um reembolso]], [[un échange|uma troca]], [[une réparation|um conserto]], [[une preuve d’achat|um comprovante de compra]] ' +
          'e [[une politique de retour|uma política de devolução]]. ' +
          'Ao entrar em contato com o estabelecimento, apresente os detalhes do pedido, explique o problema e indique se deseja uma troca, um conserto ou um reembolso. ' +
          'Guarde a nota, o contrato e as mensagens trocadas. ' +
          'As condições de devolução variam conforme a política do estabelecimento e as normas aplicáveis à situação; não presuma que todo produto sem defeito possa ser devolvido.'
      },
      {
        type: 'list',
        items: [
          '[[Bonjour, j’ai reçu un article différent de celui que j’ai commandé.|Olá, recebi um produto diferente daquele que encomendei.]]',
          '[[Le produit ne correspond pas à la description publiée sur votre site.|O produto não corresponde à descrição publicada no seu site.]]',
          '[[Mon colis est arrivé endommagé et je souhaiterais signaler le problème.|Minha encomenda chegou danificada e gostaria de comunicar o problema.]]',
          '[[Pourriez-vous m’indiquer les options de retour ou de remboursement ?|Você poderia me informar as opções de devolução ou reembolso?]]',
          '[[Je peux vous transmettre la facture et le numéro de commande.|Posso enviar a nota e o número do pedido.]]',
          '[[Je souhaiterais obtenir un échange plutôt qu’un remboursement.|Gostaria de obter uma troca em vez de um reembolso.]]'
        ]
      },
      { type: 'heading', text: '4. Consumo responsável e hábitos sustentáveis' },
      {
        type: 'paragraph',
        text:
          'O consumo responsável envolve considerar não apenas o preço, mas também a durabilidade, a origem e o impacto ambiental dos produtos. ' +
          'No Canadá, são frequentes as discussões sobre [[la consommation responsable|o consumo responsável]], [[l’achat local|a compra de produtos locais]], [[les produits durables|os produtos duráveis]], [[les articles d’occasion|os artigos usados]], [[les produits réutilisables|os produtos reutilizáveis]], [[les emballages recyclables|as embalagens recicláveis]] ' +
          'e [[la réduction des déchets|a redução de resíduos]]. Outras ações importantes incluem [[réduire|reduzir]], [[réutiliser|reutilizar]], [[réparer|consertar]] ' +
          'e [[recycler|reciclar]]. Você também pode falar sobre [[le suremballage|o excesso de embalagens]], [[le gaspillage|o desperdício]] ' +
          'e [[l’obsolescence programmée|a obsolescência programada]].'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não confunda réclamation, plainte e remboursement',
        text:
          'Em português, usamos a palavra “reclamação” em situações diferentes. ' +
          'O site da Office de la protection du consommateur (OPC) usa [[porter plainte auprès de l’Office|registrar uma reclamação junto ao órgão]], [[négocier avec le commerçant|negociar com o comerciante]] e [[mettre en demeure le commerçant|notificar formalmente o comerciante]] como etapas para resolver um problema. ' +
          'Para falar de um pedido de solução ao comerciante, [[faire une réclamation auprès du commerçant|fazer uma reclamação junto ao comerciante]] é compreensível, mas a OPC usa [[négocier avec le commerçant|negociar com o comerciante]]. ' +
          'Além disso, não confunda [[un remboursement|um reembolso]], [[un échange|uma troca]] ' +
          'e [[un retour|uma devolução]]: o OQLF define a [[politique de retour|política de devolução]] como as condições para devolver mercadoria e obter um reembolso, uma troca ou um crédito.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Nas atividades de compreensão e produção, pratique situações como comparar preços, escolher produtos, reclamar de uma entrega, solicitar um reembolso e discutir hábitos de consumo. ' +
          'Ao desenvolver uma opinião sobre consumo responsável, apresente vantagens, limitações e exemplos concretos. ' +
          'Utilize estruturas como [[D’un côté..., de l’autre...|De um lado..., de outro...]], [[Il serait préférable de...|Seria preferível...]] ' +
          'e [[Cela permet de réduire...|Isso permite reduzir...]] ' +
          'Na comunicação oral, procure explicar claramente o problema, fazer uma solicitação específica e reagir à resposta do interlocutor. ' +
          'Na produção escrita, organize uma reclamação com a descrição do problema, os dados da compra e a solução desejada.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O OQLF confirma [[politique de retour|política de devolução]]. O site da OPC confirma [[porter plainte|registrar uma reclamação]] junto ao órgão, [[négocier avec le commerçant|negociar com o comerciante]] e [[mettre en demeure|notificar formalmente]]. ' +
          'As páginas do Governo de Ontário, do Bureau da consommation e do Canada.ca existem e tratam de devoluções, consumo verde e plástico. ' +
          'Não têm fonte confirmada: as tabelas de vocabulário de lojas, preços, pagamento, comércio eletrônico e consumo responsável, [[magasiner|fazer compras]] como uso regional, [[faire une réclamation|fazer uma reclamação]], os diálogos e a dica para a prova. ' +
          'As condições jurídicas de devolução e reembolso variam conforme a província, o tipo de compra e o estado do produto. ' +
          'Essas estratégias são conselhos de preparação, não regras oficiais do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Achats et consommation : magasins, commerce en ligne, réclamations et consommation responsable',
    summary:
      'Apprenez le vocabulaire français lié aux achats en magasin et sur Internet, notamment les prix, les rabais, les paiements, les livraisons et les retours. ' +
      'Apprenez à signaler un problème avec un produit, à demander un remboursement et à discuter des habitudes de consommation responsable, en tenant compte des particularités du commerce canadien.',
    blocks: [
      { type: 'heading', text: '1. Magasins, commerce et achats' },
      {
        type: 'paragraph',
        text:
          'Pour parler des achats, il est important de connaître les établissements commerciaux, les produits et les opérations de paiement. ' +
          'En français québécois, le verbe magasiner est très utilisé, tandis qu’en France, on emploie couramment des expressions comme faire les magasins et faire du shopping. ' +
          'Il est également important de distinguer un magasin, un commerce et un centre commercial.'
      },
      {
        type: 'table',
        headers: ['Catégorie', 'Vocabulaire français', 'Signification'],
        rows: [
            [
              'Établissements',
              'un magasin, un commerce, un centre commercial, une boutique, une épicerie',
              'Lieux où l’on fait des achats.'
            ],
            [
              'Personnes et secteurs',
              'un commerçant, un vendeur, un client, un rayon, la caisse',
              'Personnes et espaces de vente.'
            ],
            [
              'Prix et rabais',
              'un prix, un rabais, une réduction, une promotion, un article en solde',
              'Prix et offres commerciales.'
            ],
            [
              'Paiement',
              'un paiement, payer comptant, payer par carte, un reçu, une facture',
              'Modes de paiement et justificatifs.'
            ],
            [
              'Produits et services',
              'un produit, une marchandise, un service, une marque, une garantie',
              'Biens et services proposés à la vente.'
            ]
        ]
      },
      { type: 'heading', text: '2. Commerce électronique et achats en ligne' },
      {
        type: 'paragraph',
        text:
          'Dans le commerce électronique, vous trouverez du vocabulaire lié au choix des produits, à la confirmation des commandes et au suivi des livraisons. ' +
          'Avant de finaliser un achat, il est important de vérifier le prix total, les taxes, les frais de livraison et les conditions de retour. ' +
          'Parmi les expressions essentielles, on trouve faire un achat en ligne, passer une commande, un site marchand, un panier d’achat, les frais de livraison, le suivi de commande et un délai de livraison.'
      },
      {
        type: 'list',
        items: [
          'Avant de confirmer ma commande, je vérifie le prix total et les frais de livraison.',
          'J’ai reçu un courriel confirmant l’expédition de mon colis.',
          'Le produit est indiqué comme étant en rupture de stock.',
          'Je préfère payer par carte de crédit lorsque j’achète en ligne.',
          'Le délai de livraison annoncé était de cinq jours ouvrables.'
        ]
      },
      { type: 'heading', text: '3. Réclamations, retours et problèmes liés aux achats' },
      {
        type: 'paragraph',
        text:
          'Lorsqu’un achat présente un problème, il est important de savoir décrire la situation et d’expliquer quelle solution vous souhaitez obtenir. ' +
          'Parmi les termes essentiels, on trouve un article défectueux, un article endommagé, un produit non conforme à la description, une réclamation, un remboursement, un échange, une réparation, une preuve d’achat et une politique de retour. ' +
          'Lorsque vous communiquez avec le commerçant, présentez les détails de la commande, expliquez le problème et précisez si vous souhaitez un échange, une réparation ou un remboursement. ' +
          'Conservez la facture, le contrat et les échanges de messages. ' +
          'Les conditions de retour varient selon la politique du commerçant et les règles applicables à la situation ; ne présumez pas que tout produit non défectueux peut être retourné.'
      },
      {
        type: 'list',
        items: [
          'Bonjour, j’ai reçu un article différent de celui que j’ai commandé.',
          'Le produit ne correspond pas à la description publiée sur votre site.',
          'Mon colis est arrivé endommagé et je souhaiterais signaler le problème.',
          'Pourriez-vous m’indiquer les options de retour ou de remboursement ?',
          'Je peux vous transmettre la facture et le numéro de commande.',
          'Je souhaiterais obtenir un échange plutôt qu’un remboursement.'
        ]
      },
      { type: 'heading', text: '4. Consommation responsable et habitudes durables' },
      {
        type: 'paragraph',
        text:
          'La consommation responsable consiste à tenir compte non seulement du prix, mais aussi de la durabilité, de l’origine et de l’impact environnemental des produits. ' +
          'Au Canada, les discussions portent souvent sur la consommation responsable, l’achat local, les produits durables, les articles d’occasion, les produits réutilisables, les emballages recyclables et la réduction des déchets. ' +
          'Parmi les actions importantes, on trouve également réduire, réutiliser, réparer et recycler. ' +
          'Vous pouvez aussi parler du suremballage, du gaspillage et de l’obsolescence programmée.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne confondez pas réclamation, plainte et remboursement',
        text:
          'En portugais, le mot « reclamação » est utilisé dans des situations différentes. ' +
          'Le site de l’Office de la protection du consommateur (OPC) emploie porter plainte auprès de l’Office, négocier avec le commerçant et mettre en demeure le commerçant comme étapes pour régler un problème. ' +
          'Pour parler d’une demande de solution auprès du commerçant, faire une réclamation auprès du commerçant est compréhensible, mais l’OPC emploie négocier avec le commerçant. ' +
          'De plus, ne confondez pas un remboursement, un échange et un retour : l’OQLF définit la politique de retour comme les conditions pour retourner une marchandise et obtenir un remboursement, un échange ou un crédit.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Dans les activités de compréhension et de production, entraînez-vous avec des situations comme comparer des prix, choisir des produits, signaler un problème de livraison, demander un remboursement et discuter des habitudes de consommation. ' +
          'Pour développer une opinion sur la consommation responsable, présentez des avantages, des limites et des exemples concrets. ' +
          'Utilisez des structures comme d’un côté..., de l’autre..., il serait préférable de... et cela permet de réduire.... ' +
          'Dans la communication orale, essayez d’expliquer clairement le problème, de formuler une demande précise et de réagir à la réponse de votre interlocuteur. ' +
          'Dans la production écrite, organisez votre réclamation en décrivant le problème, les détails de l’achat et la solution souhaitée.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme politique de retour. Le site de l’OPC confirme porter plainte auprès de l’Office, négocier avec le commerçant et mettre en demeure. ' +
          'Les pages du gouvernement de l’Ontario, du Bureau de la consommation et de Canada.ca existent et portent sur les retours, la consommation verte et le plastique. ' +
          'Ne sont pas confirmés par une source : les tableaux de vocabulaire des magasins, des prix, du paiement, du commerce en ligne et de la consommation responsable, magasiner comme usage régional, faire une réclamation, les dialogues et le conseil pour l’examen. ' +
          'Les conditions juridiques de retour et de remboursement varient selon la province, le type d’achat et l’état du produit. ' +
          'Ces stratégies sont des conseils de préparation et non des règles officielles du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Politique de retour — Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26541627/politique-de-retour'
    },
    {
      title: 'Conseils de consommation : avant d’acheter par Internet — Office de la protection du consommateur',
      url: 'https://www.opc.gouv.qc.ca/consommateur/sujet/achat/internet/conseils/'
    },
    {
      title: 'Étapes à suivre pour régler un problème avec un commerçant — Office de la protection du consommateur',
      url: 'https://www.opc.gouv.qc.ca/consommateur/probleme-commercant/etapes'
    },
    {
      title: 'Returns, exchanges and warranties in Ontario — Government of Ontario',
      url: 'https://www.ontario.ca/page/returns-exchanges-and-warranties-ontario'
    },
    {
      title: 'Être consommateur vert — Bureau de la consommation, Gouvernement du Canada',
      url: 'https://ised-isde.canada.ca/site/bureau-consommation/fr/etre-consommateur-vert'
    },
    {
      title: 'Comment réduire la pollution et les déchets plastiques au quotidien — Environnement et Changement climatique Canada',
      url: 'https://www.canada.ca/fr/environnement-changement-climatique/campagnes/defi-combattre-pollution-plastique.html'
    }
  ]
}

export default content
