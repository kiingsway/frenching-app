import type { ReadingPassageDraft } from './types'

// Textos originais da aba Compreensão escrita. Resposta certa = primeira opção.
// Nomes de pessoas, empresas e da cidade de Val-des-Érables são fictícios.
// Textos novos entram no fim da lista; ids não mudam depois de publicados.
// Só import de tipo: o scripts/generate-audio.mts lê este arquivo direto no Node.
export const TEXTOS: ReadingPassageDraft[] = [
  {
    id: 'ce-avis-eau',
    level: 'A2',
    kind: 'ce-cotidiano',
    title: 'Avis aux locataires',
    text: [
      'Immeuble du 2450, rue Beaubien Est, Montréal',
      'Le mardi 14 octobre, l’eau sera coupée de 9 h à 15 h dans tout l’immeuble pour des travaux de plomberie.',
      'Pendant les travaux, merci de ne pas utiliser l’ascenseur : les ouvriers en auront besoin pour transporter leur matériel.',
      'Des bouteilles d’eau seront offertes gratuitement au rez-de-chaussée, près des boîtes aux lettres.',
      'Pour toute question, communiquez avec le concierge au 514 555-0182, du lundi au vendredi, de 8 h à 17 h.',
      'La gestion Habitations Rivard'
    ],
    translation: [
      'Prédio da rue Beaubien Est, 2450, Montreal',
      'Na terça-feira, 14 de outubro, a água será cortada das 9h às 15h em todo o prédio para obras de encanamento.',
      'Durante as obras, por favor não usem o elevador: os operários vão precisar dele para transportar o material.',
      'Garrafas de água serão oferecidas de graça no térreo, perto das caixas de correio.',
      'Em caso de dúvida, entrem em contato com o zelador pelo 514 555-0182, de segunda a sexta, das 8h às 17h.',
      'A administração Habitations Rivard'
    ],
    questions: [
      [
        'Pourquoi l’eau sera-t-elle coupée ?',
        [
          'Pour des travaux de plomberie.',
          'Pour réparer l’ascenseur.',
          'Parce que les locataires n’ont pas payé.',
          'Pour installer de nouvelles boîtes aux lettres.'
        ],
        'O segundo parágrafo diz “pour des travaux de plomberie” (obras de encanamento). O elevador e as caixas de correio aparecem no aviso, mas por outros motivos.'
      ],
      [
        'Qu’est-ce que les locataires ne doivent pas faire pendant les travaux ?',
        [
          'Prendre l’ascenseur.',
          'Boire l’eau en bouteille.',
          'Appeler le concierge.',
          'Sortir de l’immeuble.'
        ],
        '“Merci de ne pas utiliser l’ascenseur”: num aviso, “merci de ne pas…” é um pedido educado para não fazer algo, e não um agradecimento. A prova troca a palavra do texto por um sinônimo: utiliser l’ascenseur = prendre l’ascenseur.'
      ],
      [
        'Où les locataires peuvent-ils trouver de l’eau gratuitement ?',
        [
          'Au rez-de-chaussée, près des boîtes aux lettres.',
          'Chez le concierge, du lundi au vendredi.',
          'Dans l’ascenseur, après 15 h.',
          'Au dépanneur du coin.'
        ],
        '“Des bouteilles d’eau seront offertes gratuitement au rez-de-chaussée.” Rez-de-chaussée é o térreo. O dépanneur (no Québec, a lojinha de conveniência do bairro) não aparece no texto.'
      ]
    ]
  },

  {
    id: 'ce-courriel-horaire',
    level: 'B1',
    kind: 'ce-cartas',
    title: 'Objet : Changement d’horaire pour la fin de semaine',
    text: [
      'Bonjour à toutes et à tous,',
      'Comme vous le savez, le magasin sera fermé lundi prochain pour l’Action de grâce. Pour compenser, nous allons prolonger nos heures d’ouverture samedi et dimanche : le magasin ouvrira à 8 h au lieu de 9 h et fermera à 21 h.',
      'J’ai besoin de deux personnes de plus pour chacune de ces deux journées. Si vous êtes disponibles, répondez à ce courriel d’ici jeudi midi. Les heures supplémentaires seront payées à taux et demi, comme d’habitude.',
      'Par ailleurs, la formation sur la nouvelle caisse, prévue mercredi, est reportée à la semaine suivante, car le formateur est malade. Je vous communiquerai la nouvelle date dès que possible.',
      'Merci de votre collaboration et bonne fin de semaine !',
      'Nathalie Bouchard, gérante'
    ],
    translation: [
      'Bom dia a todas e a todos,',
      'Como vocês sabem, a loja vai ficar fechada na segunda-feira que vem por causa do Dia de Ação de Graças. Para compensar, vamos estender o horário de funcionamento no sábado e no domingo: a loja vai abrir às 8h em vez das 9h e fechar às 21h.',
      'Preciso de mais duas pessoas em cada um desses dois dias. Se vocês estiverem disponíveis, respondam a este e-mail até quinta-feira ao meio-dia. As horas extras serão pagas com 50% a mais, como de costume.',
      'Além disso, o treinamento sobre o novo caixa, previsto para quarta-feira, foi adiado para a semana seguinte, porque o instrutor está doente. Passo a nova data assim que possível.',
      'Obrigada pela colaboração e bom fim de semana!',
      'Nathalie Bouchard, gerente'
    ],
    questions: [
      [
        'Pourquoi le magasin ouvrira-t-il plus longtemps la fin de semaine ?',
        [
          'Parce qu’il sera fermé le lundi suivant.',
          'Parce que la formation est annulée.',
          'Parce qu’il manque de caisses.',
          'Parce que le formateur est malade.'
        ],
        '“Le magasin sera fermé lundi prochain… Pour compenser, nous allons prolonger nos heures.” O horário maior compensa o feriado de segunda. O instrutor doente explica outra coisa: o adiamento do treinamento. Fin de semaine é a forma do Québec; na França, week-end.'
      ],
      [
        'Que doivent faire les employés qui veulent faire des heures supplémentaires ?',
        [
          'Répondre au courriel avant jeudi midi.',
          'Se présenter au magasin samedi à 8 h.',
          'Téléphoner à la gérante lundi.',
          'S’inscrire à la formation de mercredi.'
        ],
        '“Si vous êtes disponibles, répondez à ce courriel d’ici jeudi midi.” D’ici jeudi = até quinta-feira (prazo). Courriel é a forma do Québec; na França, e-mail ou mail.'
      ],
      [
        'Qu’apprend-on au sujet de la formation ?',
        [
          'Elle aura lieu plus tard, à une date à confirmer.',
          'Elle est annulée définitivement.',
          'Elle aura lieu mercredi, comme prévu.',
          'Elle sera donnée par la gérante.'
        ],
        '“Est reportée à la semaine suivante… je vous communiquerai la nouvelle date.” Reporter é adiar, e não cancelar (annuler). Confundir reporter com “reportar” ou com cancelar é um erro comum de quem fala português.'
      ]
    ]
  },

  {
    id: 'ce-annonce-logement',
    level: 'B1',
    kind: 'ce-ofertas',
    title: 'À louer : 4 ½ à Sherbrooke, libre le 1er juillet',
    text: [
      'Grand 4 ½ au 2e étage d’un triplex, à 10 minutes à pied de l’Université de Sherbrooke.',
      '1 150 $ par mois, chauffé et éclairé. Électroménagers inclus (cuisinière et réfrigérateur). Laveuse et sécheuse non fournies, mais les entrées sont installées.',
      'Un espace de stationnement dans la cour, déneigé l’hiver. Balcon à l’arrière.',
      'Bail de 12 mois. Animaux non acceptés. Non-fumeurs seulement.',
      'Visites le samedi, sur rendez-vous. Écrivez à Marc par texto au 819 555-0147 : pas d’appels après 20 h, s’il vous plaît.'
    ],
    translation: [
      'Apartamento grande de 4 ½ cômodos no 2º andar de um triplex, a 10 minutos a pé da Université de Sherbrooke.',
      '1 150 dólares por mês, com aquecimento e luz incluídos. Eletrodomésticos incluídos (fogão e geladeira). Máquina de lavar e secadora não incluídas, mas as instalações para elas já existem.',
      'Uma vaga de estacionamento no pátio, com a neve retirada no inverno. Varanda nos fundos.',
      'Contrato de 12 meses. Não são aceitos animais. Só para não fumantes.',
      'Visitas aos sábados, com hora marcada. Escreva para o Marc por mensagem de texto no 819 555-0147: sem ligações depois das 20h, por favor.'
    ],
    questions: [
      [
        'Qu’est-ce qui est compris dans le prix du loyer ?',
        [
          'Le chauffage et l’électricité.',
          'La laveuse et la sécheuse.',
          'Deux espaces de stationnement.',
          'Internet et le câble.'
        ],
        'No Québec, “chauffé et éclairé” quer dizer que o aquecimento e a luz (eletricidade) estão no aluguel. A máquina de lavar e a secadora estão “non fournies” (não incluídas): só as instalações existem.'
      ],
      [
        'Une étudiante qui a un chat peut-elle louer ce logement ?',
        [
          'Non, parce que les animaux ne sont pas acceptés.',
          'Oui, si elle signe un bail de 12 mois.',
          'Oui, parce que le logement est près de l’université.',
          'Oui, à condition de ne pas fumer.'
        ],
        '“Animaux non acceptés.” O contrato de 12 meses e a regra de não fumantes existem, mas não mudam a proibição de animais.'
      ],
      [
        'Comment faut-il contacter le propriétaire ?',
        [
          'En lui envoyant un message texte.',
          'En l’appelant le soir, après 20 h.',
          'En passant le samedi sans rendez-vous.',
          'En lui écrivant un courriel.'
        ],
        '“Écrivez à Marc par texto.” Texto é a mensagem de texto do celular (na França, SMS). O anúncio pede para não ligar depois das 20h e diz que as visitas são com hora marcada.'
      ]
    ]
  },

  {
    id: 'ce-verglas',
    level: 'B2',
    kind: 'ce-noticias',
    title: 'Verglas : des milliers de foyers toujours privés d’électricité',
    text: [
      'VAL-DES-ÉRABLES – Près de 12 000 foyers étaient toujours privés d’électricité mardi soir, deux jours après la tempête de verglas qui a frappé la région dimanche.',
      'Selon la municipalité, le poids de la glace a fait tomber des dizaines d’arbres sur les fils électriques. Les équipes de réparation travaillent jour et nuit, mais certains secteurs ruraux pourraient attendre jusqu’à la fin de semaine avant que le courant soit rétabli.',
      'Les écoles primaires et secondaires resteront fermées mercredi. Le centre communautaire, qui dispose d’une génératrice, accueille les résidents qui ne peuvent pas chauffer leur logement. On y sert des repas chauds et on peut y recharger son téléphone.',
      'Les autorités rappellent qu’il est dangereux d’utiliser un barbecue ou une génératrice à l’intérieur, à cause du risque d’intoxication au monoxyde de carbone. Elles demandent aussi de ne jamais s’approcher d’un fil tombé au sol.'
    ],
    translation: [
      'VAL-DES-ÉRABLES – Quase 12 000 residências ainda estavam sem eletricidade na terça-feira à noite, dois dias depois da tempestade de chuva congelada que atingiu a região no domingo.',
      'Segundo a prefeitura, o peso do gelo derrubou dezenas de árvores sobre os fios elétricos. As equipes de reparo trabalham dia e noite, mas alguns setores rurais podem ter de esperar até o fim de semana para a energia ser restabelecida.',
      'As escolas primárias e secundárias vão continuar fechadas na quarta-feira. O centro comunitário, que tem um gerador, recebe os moradores que não conseguem aquecer a casa. Lá são servidas refeições quentes e é possível carregar o celular.',
      'As autoridades lembram que é perigoso usar uma churrasqueira ou um gerador dentro de casa, por causa do risco de intoxicação por monóxido de carbono. Também pedem que ninguém nunca se aproxime de um fio caído no chão.'
    ],
    questions: [
      [
        'Quelle est la principale cause de la panne ?',
        [
          'Des arbres alourdis par la glace sont tombés sur les fils.',
          'La génératrice du centre communautaire est tombée en panne.',
          'Les équipes de réparation ont coupé le courant dimanche.',
          'La consommation d’électricité a soudainement augmenté.'
        ],
        '“Le poids de la glace a fait tomber des dizaines d’arbres sur les fils électriques.” A resposta usa uma paráfrase: o peso do gelo vira “arbres alourdis par la glace”. A prova raramente repete as palavras do texto.'
      ],
      [
        'Selon l’article, quand le courant pourrait-il revenir dans certains secteurs ruraux ?',
        [
          'Pas avant la fin de semaine.',
          'Mardi soir.',
          'Mercredi, avant la réouverture des écoles.',
          'Dans deux semaines.'
        ],
        '“Certains secteurs ruraux pourraient attendre jusqu’à la fin de semaine.” Terça à noite é quando ainda havia 12 000 residências sem luz, e as escolas continuam fechadas na quarta: as duas datas estão no texto, mas respondem a outras perguntas.'
      ],
      [
        'Pourquoi les autorités déconseillent-elles d’utiliser un barbecue à l’intérieur ?',
        [
          'Parce qu’il peut causer une intoxication au monoxyde de carbone.',
          'Parce qu’il peut faire tomber les fils électriques.',
          'Parce qu’il consomme trop d’électricité.',
          'Parce que le centre communautaire sert déjà des repas.'
        ],
        '“À cause du risque d’intoxication au monoxyde de carbone.” À cause de introduz a causa. Os fios caídos aparecem em outro conselho: não se aproximar deles.'
      ]
    ]
  },

  {
    id: 'ce-editorial-centre-ville',
    level: 'C1',
    kind: 'ce-argumentativos',
    title: 'Télétravail : le centre-ville n’est pas condamné',
    text: [
      'Depuis que le télétravail s’est installé dans nos habitudes, on annonce régulièrement la mort des centres-villes. Les tours de bureaux se videraient, les commerces fermeraient les uns après les autres et les rues deviendraient désertes après 17 h. Ce scénario catastrophe a le mérite d’être simple ; il a surtout le défaut d’être incomplet.',
      'Certes, les travailleurs ne reviendront pas cinq jours sur cinq dans des bureaux qu’ils ont appris à quitter. Prétendre le contraire relève de la nostalgie plus que de l’analyse. Mais un centre-ville n’a jamais été qu’un empilement de bureaux : c’est aussi un lieu de culture, d’études et de rencontres.',
      'Plutôt que de s’acharner à faire revenir les employés de force, les villes gagneraient à transformer une partie des immeubles vides en logements. Habiter au centre, c’est y consommer, y sortir et y faire vivre les commerces de proximité, et ce, sept jours sur sept.',
      'Une telle conversion coûte cher et prend du temps, on en convient. Encore faut-il comparer ce coût à celui de l’inaction : des quartiers entiers qui perdent leur raison d’être. Le centre-ville de demain sera moins un lieu où l’on travaille qu’un lieu où l’on vit. C’est peut-être une chance.'
    ],
    translation: [
      'Desde que o teletrabalho entrou nos nossos hábitos, anuncia-se com frequência a morte dos centros das cidades. As torres de escritórios se esvaziariam, as lojas fechariam uma atrás da outra e as ruas ficariam desertas depois das 17h. Esse cenário catastrófico tem o mérito de ser simples; tem sobretudo o defeito de ser incompleto.',
      'É verdade que os trabalhadores não vão voltar cinco dias por semana a escritórios dos quais aprenderam a sair. Dizer o contrário é mais nostalgia do que análise. Mas um centro nunca foi só um amontoado de escritórios: é também um lugar de cultura, de estudos e de encontros.',
      'Em vez de insistir em fazer os funcionários voltarem à força, as cidades ganhariam em transformar parte dos prédios vazios em moradias. Morar no centro é consumir lá, sair lá e manter vivo o comércio do bairro, e isso sete dias por semana.',
      'Uma conversão dessas custa caro e leva tempo, é preciso admitir. Mas ainda é preciso comparar esse custo ao da inação: bairros inteiros que perdem a razão de existir. O centro de amanhã será menos um lugar onde se trabalha do que um lugar onde se vive. Talvez seja uma oportunidade.'
    ],
    questions: [
      [
        'Quelle est la thèse principale de l’auteur ?',
        [
          'Le centre-ville peut survivre s’il devient davantage un lieu de vie.',
          'Le télétravail fera inévitablement disparaître les centres-villes.',
          'Il faut obliger les employés à revenir au bureau tous les jours.',
          'Les tours de bureaux vides doivent être démolies.'
        ],
        'O título (“n’est pas condamné”) e a conclusão (“moins un lieu où l’on travaille qu’un lieu où l’on vit”) mostram a tese. A segunda opção é a ideia que o autor critica no primeiro parágrafo: os condicionais (se videraient, fermeraient) apresentam a opinião dos outros, e não a dele.'
      ],
      [
        'Que veut dire l’auteur quand il écrit que ce scénario « a surtout le défaut d’être incomplet » ?',
        [
          'Il oublie que le centre-ville a d’autres fonctions que le travail.',
          'Il exagère le nombre de personnes en télétravail.',
          'Il est trop compliqué pour être compris.',
          'Il a déjà été contredit par les chiffres.'
        ],
        'O parágrafo seguinte explica o que falta no cenário: “c’est aussi un lieu de culture, d’études et de rencontres”. O autor não fala de números nem diz que o cenário é complicado: diz o contrário, que é “simple”.'
      ],
      [
        'Dans le dernier paragraphe, quelle objection l’auteur reconnaît-il ?',
        [
          'Transformer les immeubles coûte cher et prend du temps.',
          'Les gens préfèrent vivre en banlieue.',
          'Les commerces de proximité sont trop chers.',
          'Les bureaux vides sont déjà tous loués.'
        ],
        '“On en convient” (é preciso admitir) marca a concessão: o autor aceita um argumento contrário e logo responde com “encore faut-il…”. Reconhecer a concessão e o contra-argumento é o que a prova cobra nos textos argumentativos.'
      ]
    ]
  },

  {
    id: 'ce-horaire-pharmacie',
    level: 'A1',
    kind: 'ce-cotidiano',
    title: 'Pharmacie Lavoie : heures d’ouverture',
    text: [
      'Lundi au vendredi : de 9 h à 21 h',
      'Samedi : de 10 h à 18 h',
      'Dimanche : fermé',
      'Le 1er juillet, la pharmacie est fermée.',
      'Livraison gratuite à domicile, du lundi au vendredi.',
      'Vaccin contre la grippe : le mardi et le jeudi, sur rendez-vous.',
      'Stationnement gratuit derrière la pharmacie.',
      'Téléphone : 418 555-0123'
    ],
    translation: [
      'De segunda a sexta: das 9h às 21h',
      'Sábado: das 10h às 18h',
      'Domingo: fechado',
      'No dia 1º de julho, a farmácia está fechada.',
      'Entrega grátis em casa, de segunda a sexta.',
      'Vacina contra a gripe: às terças e quintas, com hora marcada.',
      'Estacionamento grátis atrás da farmácia.',
      'Telefone: 418 555-0123'
    ],
    questions: [
      [
        'Quel jour de la semaine la pharmacie est-elle fermée ?',
        ['Le dimanche.', 'Le samedi.', 'Le lundi.', 'Le vendredi.'],
        '“Dimanche : fermé.” Dimanche é domingo e samedi é sábado: cuidado para não trocar os dois. Fermé quer dizer fechado (o contrário de ouvert, aberto).'
      ],
      [
        'À quelle heure la pharmacie ouvre-t-elle le samedi ?',
        ['À 10 h.', 'À 9 h.', 'À 18 h.', 'À 21 h.'],
        '“Samedi : de 10 h à 18 h.” Ouvrir é abrir: a farmácia abre às 10h e fecha às 18h. As 9h e as 21h são o horário de segunda a sexta. Em francês, as horas são escritas com h e espaços: 10 h.'
      ],
      [
        'Est-ce que la pharmacie est ouverte le 1er juillet ?',
        [
          'Non, elle est fermée.',
          'Oui, de 9 h à 21 h.',
          'Oui, de 10 h à 18 h.',
          'Oui, seulement le matin.'
        ],
        '“Le 1er juillet, la pharmacie est fermée.” O aviso abre uma exceção ao horário normal: nesse dia, fechada o dia todo. Fermée tem -e no fim porque concorda com la pharmacie (feminino). 1er se lê premier: em francês, só o dia 1 usa o ordinal.'
      ],
      [
        'Quels jours peut-on recevoir le vaccin contre la grippe ?',
        [
          'Le mardi et le jeudi.',
          'Le lundi et le vendredi.',
          'Le mercredi et le samedi.',
          'Tous les jours.'
        ],
        '“Vaccin contre la grippe : le mardi et le jeudi.” Mardi é terça e jeudi é quinta; mercredi, a quarta, é fácil de confundir com mardi. Sur rendez-vous quer dizer com hora marcada.'
      ],
      [
        'Où est le stationnement ?',
        [
          'Derrière la pharmacie.',
          'Devant la pharmacie.',
          'À côté de la pharmacie.',
          'Dans la rue.'
        ],
        '“Stationnement gratuit derrière la pharmacie.” Derrière é atrás; devant é na frente. Stationnement é a palavra do Québec para estacionamento; na França, diz-se parking.'
      ],
      [
        'Le samedi, est-ce que la pharmacie fait des livraisons ?',
        [
          'Non, seulement du lundi au vendredi.',
          'Oui, de 10 h à 18 h.',
          'Oui, gratuitement.',
          'Oui, sur rendez-vous.'
        ],
        '“Livraison gratuite à domicile, du lundi au vendredi.” A farmácia abre no sábado, mas a entrega só vale de segunda a sexta. Gratuite (grátis) está no texto, mas não responde à pergunta: é a armadilha.'
      ]
    ]
  }
]
