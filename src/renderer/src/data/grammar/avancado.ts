import { buildTopic, type GrammarLevel } from './types'

// Gramática — Avançado (B2–C1). Resposta certa = primeira opção.
export const AVANCADO: GrammarLevel = {
  sectionId: 'gram-avancado',
  label: 'Avançado (B2–C1)',
  sources: [
    {
      title: 'Kwiziq French – Gramática por tema e nível',
      url: 'https://french.kwiziq.com/revision/grammar'
    },
    { title: 'Lawless French – Grammar', url: 'https://www.lawlessfrench.com/grammar/' },
    { title: 'Le Conjugueur (Le Figaro)', url: 'https://leconjugueur.lefigaro.fr/' }
  ],
  topics: {
    'ga-relativos': buildTopic('ga-relativos', [
      [
        "Le stylo avec ___ j'écris est neuf.",
        ['lequel', 'laquelle', 'qui', 'que'],
        'Depois de preposição, para coisas: lequel/laquelle/lesquels/lesquelles. Stylo é masculino → lequel.'
      ],
      [
        "La réunion à ___ j'ai assisté était longue.",
        ['laquelle', 'lequel', 'qui', 'que'],
        'Assister à + réunion (feminino): à laquelle.'
      ],
      [
        'Le projet ___ je pense depuis des mois va commencer.',
        ['auquel', 'duquel', 'à qui', 'que'],
        'Penser à + projet (masculino): à + lequel = auquel. Para coisas, evita-se à qui.'
      ],
      [
        'Les amis ___ je pars en vacances sont québécois.',
        ['avec lesquels', 'avec lesquelles', 'auxquels', 'desquels'],
        'Partir avec des amis (masculino plural): avec lesquels (com pessoas, avec qui também serve).'
      ],
      [
        "Le parc près ___ j'habite est immense.",
        ['duquel', 'dont', 'auquel', 'lequel'],
        'Locuções com de (près de, à côté de, au milieu de) pedem duquel/de laquelle, não dont.'
      ],
      [
        'Les questions ___ vous avez répondu étaient faciles.',
        ['auxquelles', 'auxquels', 'desquelles', 'lesquelles'],
        'Répondre à + questions (feminino plural): à + lesquelles = auxquelles.'
      ]
    ]),
    'ga-conditionnel-passe': buildTopic('ga-conditionnel-passe', [
      [
        "Si j'avais su, je ___ venu.",
        ['serais', 'aurais', 'étais', 'serai'],
        'Si + plus-que-parfait → conditionnel passé. Venir usa être: je serais venu.'
      ],
      [
        "Si tu m'avais appelé, je t'___ aidé.",
        ['aurais', 'avais', 'aurai', 'serais'],
        'Conditionnel passé com avoir: j’aurais aidé.'
      ],
      [
        'Nous ___ dû partir plus tôt.',
        ['aurions', 'avions', 'aurons', 'serions'],
        'Arrependimento ou crítica sobre o passado: devoir no conditionnel passé (nous aurions dû).'
      ],
      [
        'Si elle ___ le train, elle serait arrivée à l’heure.',
        ['avait pris', 'aurait pris', 'prenait', 'a pris'],
        'Depois de si, o plus-que-parfait (nunca o condicional).'
      ],
      [
        "À ta place, je n'___ rien dit.",
        ['aurais', 'avais', 'aurai', 'serais'],
        'Hipótese sobre o passado: conditionnel passé (je n’aurais rien dit).'
      ],
      [
        'Ils ___ partis si tu ne les avais pas retenus.',
        ['seraient', 'auraient', 'étaient', 'seront'],
        'Partir usa être: ils seraient partis.'
      ]
    ]),
    'ga-subjonctif': buildTopic('ga-subjonctif', [
      [
        "Bien qu'il ___ malade, il est venu travailler.",
        ['soit', 'est', 'était', 'sera'],
        'Bien que (concessão) exige subjonctif.'
      ],
      [
        'Je t’explique pour que tu ___.',
        ['comprennes', 'comprends', 'comprendras', 'comprenais'],
        'Pour que (finalidade) exige subjonctif: que tu comprennes.'
      ],
      [
        "Rentre avant qu'il ___ nuit.",
        ['fasse', 'fait', 'fera', 'faisait'],
        'Avant que exige subjonctif: avant qu’il fasse nuit.'
      ],
      [
        'Je suis content que tu ___ venu.',
        ['sois', 'es', 'étais', 'seras'],
        'Sentimento sobre algo já acontecido: subjonctif passé (que tu sois venu).'
      ],
      [
        "Après qu'il ___ parti, nous avons dîné.",
        ['est', 'soit', 'sera', 'serait'],
        'Armadilha: après que pede o indicativo (é um fato). Na fala muitos usam o subjonctif, mas a norma é o indicativo.'
      ],
      [
        "Je regrette qu'elle ne ___ pas venue hier.",
        ['soit', 'est', 'était', 'sera'],
        'Regretter que → subjonctif; ação passada → subjonctif passé (qu’elle soit venue).'
      ],
      [
        'Il travaille sans que personne ne le ___.',
        ['sache', 'sait', 'saura', 'savait'],
        'Sans que exige subjonctif: sans que personne le sache (o ne aqui é opcional, “ne explétif”).'
      ]
    ]),
    'ga-passiva': buildTopic('ga-passiva', [
      [
        'Le gâteau ___ par ma mère.',
        ['a été préparé', 'a préparé', 'est préparant', 'a été préparée'],
        'Voz passiva: être + particípio, concordando com o sujeito (le gâteau → préparé). No passé composé: a été préparé.'
      ],
      [
        'La lettre sera ___ demain.',
        ['envoyée', 'envoyé', 'envoyer', 'envoyés'],
        'O particípio concorda com o sujeito (la lettre → envoyée).'
      ],
      [
        'Ces maisons ___ en 1900.',
        ['ont été construites', 'ont construit', 'ont été construits', 'sont construites'],
        'Fato passado na passiva: ont été construites (maisons é feminino plural).'
      ],
      [
        'Le directeur est respecté ___ tous.',
        ['de', 'à', 'pour', 'avec'],
        'Com verbos de sentimento ou estado (respecter, aimer, connaître), o agente costuma vir com de (par também é aceito).'
      ],
      [
        '« On a annulé le vol. » → ___',
        ['Le vol a été annulé.', 'Le vol est annulant.', 'Le vol a annulé.', 'Le vol s’a annulé.'],
        'O COD da ativa vira sujeito da passiva; a frase com on fica sem agente.'
      ],
      [
        'La décision ___ par le comité la semaine dernière.',
        ['a été prise', 'est prise', 'a été pris', 'avait pris'],
        'Prendre → pris; décision é feminino → prise. Fato passado: a été prise.'
      ]
    ]),
    'ga-gerondif': buildTopic('ga-gerondif', [
      [
        'Il écoute de la musique ___.',
        ['en travaillant', 'en travaillé', 'à travaillant', 'travaillant en'],
        'Gérondif = en + particípio presente (-ant): ações simultâneas do mesmo sujeito.'
      ],
      [
        "C'est ___ qu'on devient forgeron.",
        ['en forgeant', 'en forgé', 'forgeant en', 'en forger'],
        'O gérondif também indica o modo ou o meio (provérbio: c’est en forgeant qu’on devient forgeron).'
      ],
      [
        '___ fatiguée, elle est rentrée tôt.',
        ['Étant', 'En étant', 'Été', 'Être'],
        'Particípio presente sem en, com sentido de causa (= comme elle était fatiguée).'
      ],
      [
        'Les étudiants ___ un visa doivent remplir ce formulaire.',
        ['ayant', 'en ayant', 'ayants', 'avants'],
        'Particípio presente no lugar de uma relativa (= qui ont un visa). É invariável.'
      ],
      [
        "Il s'est blessé ___ du vélo.",
        ['en faisant', 'en fait', 'faisant en', 'à faisant'],
        'Gérondif de faire: en faisant (ação simultânea).'
      ],
      [
        'Elle a appris le français ___ des films.',
        ['en regardant', 'en regardants', 'regardant en', 'en regardé'],
        'Gérondif indica o meio: en regardant (invariável).'
      ]
    ]),
    'ga-nominalizacao': buildTopic('ga-nominalizacao', [
      [
        'Le prix a augmenté. → ___ du prix',
        ['l’augmentation', 'l’augmentement', 'l’augmentage', 'l’augmentance'],
        'Muitos verbos em -er formam o substantivo em -ation: augmenter → l’augmentation.'
      ],
      [
        'Les élèves sont arrivés. → ___ des élèves',
        ['l’arrivée', 'l’arrivement', 'l’arrivation', 'l’arrive'],
        'Alguns verbos formam o substantivo a partir do particípio feminino: arriver → l’arrivée, entrer → l’entrée.'
      ],
      [
        'On a construit un pont. → ___ d’un pont',
        ['la construction', 'le construit', 'la constructure', 'le constructement'],
        'Construire → la construction (sufixo -tion).'
      ],
      [
        'Le gouvernement a décidé… → ___ du gouvernement',
        ['la décision', 'le décidement', 'la décidation', 'le décidage'],
        'Décider → la décision.'
      ],
      [
        'Les loyers sont chers. → ___ des loyers',
        ['la cherté', 'la cherance', 'le chèrement', 'la chèreté'],
        'Adjetivos também se nominalizam: cher → la cherté (o alto custo).'
      ],
      [
        'Le magasin ouvre à 9 h. → ___ du magasin',
        ['l’ouverture', 'l’ouvrage', 'l’ouvrement', 'l’ouvrition'],
        'Ouvrir → l’ouverture (fermer → la fermeture). Ouvrage existe, mas significa obra, trabalho.'
      ]
    ]),
    'ga-expressao': buildTopic('ga-expressao', [
      [
        'Il est resté chez lui ___ la pluie.',
        ['à cause de', 'grâce à', 'malgré', 'pour'],
        'Causa negativa + substantivo: à cause de. Grâce à é para causas positivas.'
      ],
      [
        '___ son aide, j’ai réussi.',
        ['Grâce à', 'À cause de', 'Malgré', 'Bien que'],
        'Causa positiva + substantivo: grâce à.'
      ],
      [
        'Il est sorti ___ la pluie.',
        ['malgré', 'à cause de', 'grâce à', 'parce que'],
        'Oposição + substantivo: malgré (= apesar de).'
      ],
      [
        'Je parle lentement ___ tout le monde comprenne.',
        ['pour que', 'parce que', 'afin de', 'bien que'],
        'Finalidade + oração com outro sujeito: pour que + subjonctif. Afin de pede infinitivo.'
      ],
      [
        'Il a beaucoup travaillé ; ___, il a réussi.',
        ['par conséquent', 'pourtant', 'cependant', 'bien que'],
        'Consequência: par conséquent, donc, c’est pourquoi.'
      ],
      [
        'Elle est riche ; ___, elle vit simplement.',
        ['pourtant', 'donc', 'par conséquent', 'car'],
        'Oposição ou concessão entre duas ideias: pourtant, cependant, néanmoins.'
      ],
      [
        "Je n'ai pas pu venir ___ j'étais malade.",
        ['parce que', 'pour que', 'bien que', 'afin que'],
        'Causa + oração: parce que + indicativo.'
      ]
    ]),
    'ga-concordancia': buildTopic('ga-concordancia', [
      [
        'Il a dit : « J’ai fini. » → Il a dit qu’il ___ fini.',
        ['avait', 'a', 'aura', 'aurait'],
        'Verbo introdutor no passado: passé composé vira plus-que-parfait (il avait fini).'
      ],
      [
        'Elle a dit : « Je viendrai. » → Elle a dit qu’elle ___.',
        ['viendrait', 'viendra', 'venait', 'vienne'],
        'Verbo introdutor no passado: futur vira conditionnel présent (futuro do passado).'
      ],
      [
        'Il m’a demandé : « Où vas-tu ? » → Il m’a demandé où j’___.',
        ['allais', 'vais', 'irai', 'aille'],
        'Verbo introdutor no passado: présent vira imparfait.'
      ],
      [
        'Il a dit : « Je partirai demain. » → Il a dit qu’il partirait ___.',
        ['le lendemain', 'demain', 'hier', 'la veille'],
        'As marcas de tempo também mudam: demain → le lendemain, hier → la veille, aujourd’hui → ce jour-là.'
      ],
      [
        'Elle a dit : « Je l’ai vu hier. » → Elle a dit qu’elle l’avait vu ___.',
        ['la veille', 'hier', 'le lendemain', 'demain'],
        'Hier vira la veille (o dia anterior).'
      ],
      [
        'Il m’a demandé : « Tu as faim ? » → Il m’a demandé si j’___ faim.',
        ['avais', 'ai', 'aurai', 'aie'],
        'Présent vira imparfait com verbo introdutor no passado.'
      ]
    ]),
    'ga-futur-anterieur': buildTopic('ga-futur-anterieur', [
      [
        'Quand tu ___ tes devoirs, tu pourras sortir.',
        ['auras fini', 'finiras', 'as fini', 'avais fini'],
        'Ação futura que termina antes de outra ação futura: futur antérieur (avoir/être no futuro + particípio).'
      ],
      [
        "Dès qu'il ___, on mangera.",
        ['sera arrivé', 'est arrivé', 'était arrivé', 'serait arrivé'],
        'Depois de dès que, quand, lorsque, une fois que, para algo anterior a outra ação futura: futur antérieur.'
      ],
      [
        "Demain, à 20 h, j'___ déjà dîné.",
        ['aurai', 'avais', 'aurais', 'ai'],
        'Ação que estará concluída num momento futuro: futur antérieur (j’aurai dîné).'
      ],
      [
        'Ne viens pas trop tard : elle ___ partie avant ton arrivée.',
        ['sera', 'aura', 'était', 'a'],
        'Partir usa être: elle sera partie.'
      ],
      [
        "Il n'est pas là ? Il ___ oublié le rendez-vous.",
        ['aura', 'sera', 'avait', 'aurais'],
        'O futur antérieur também expressa uma suposição sobre o passado: il aura oublié = deve ter esquecido.'
      ],
      [
        'Lorsque nous ___, nous vous appellerons.',
        ['aurons atterri', 'avons atterri', 'atterrissions', 'aurions atterri'],
        'Ação anterior a outra no futuro (appellerons): futur antérieur.'
      ]
    ]),
    'ga-passe-simple': buildTopic('ga-passe-simple', [
      [
        'Il ___ la porte et sortit. (ouvrir)',
        ['ouvrit', 'ouvra', 'ouvrait', 'ouvrut'],
        'Ouvrir no passé simple: il ouvrit (como os verbos em -ir).'
      ],
      [
        'Ce jour-là, ils ___ à Paris. (arriver)',
        ['arrivèrent', 'arrivirent', 'arrivâmes', 'arrivairent'],
        'Verbos em -er no passé simple, 3ª pessoa do plural: -èrent.'
      ],
      [
        'Elle ___ la première à parler. (être)',
        ['fut', 'fit', 'été', 'furent'],
        'Être no passé simple: il/elle fut, ils furent.'
      ],
      [
        'Le roi ___ construire un château. (faire)',
        ['fit', 'fut', 'faisa', 'fasit'],
        'Faire no passé simple: il fit (não confundir com fut, de être).'
      ],
      [
        'Dans « Il fut surpris », « fut » vient du verbe : ___',
        ['être', 'faire', 'fuir', 'falloir'],
        'Fut = passé simple de être.'
      ],
      [
        '« Ils eurent » vient du verbe : ___',
        ['avoir', 'être', 'aller', 'devoir'],
        'Eurent = passé simple de avoir (il eut, ils eurent).'
      ],
      [
        '« Nous vînmes » vient du verbe : ___',
        ['venir', 'voir', 'vendre', 'vivre'],
        'Vînmes = passé simple de venir (il vint, nous vînmes).'
      ]
    ]),
    'ga-causativo': buildTopic('ga-causativo', [
      [
        'Je ___ réparer ma voiture au garage.',
        ['fais', 'suis', 'ai', 'me fait'],
        'Faire + infinitivo = mandar fazer (outra pessoa faz a ação).'
      ],
      [
        "Elle s'est fait ___ les cheveux.",
        ['couper', 'coupé', 'coupée', 'coupés'],
        'Depois de faire, o verbo fica no infinitivo: se faire couper les cheveux.'
      ],
      [
        'Le professeur fait ___ les élèves.',
        ['travailler', 'travaillé', 'travaillent', 'à travailler'],
        'Faire + infinitivo + quem faz a ação: fait travailler les élèves.'
      ],
      [
        "Ma voiture ? Je l'ai fait ___ hier.",
        ['réparer', 'réparée', 'réparé', 'réparant'],
        'No causativo, o particípio fait não concorda, mesmo com COD antes: je l’ai fait réparer.'
      ],
      [
        'Tu me fais ___ !',
        ['rire', 'ri', 'riant', 'ris'],
        'Faire + infinitivo: tu me fais rire = você me faz rir.'
      ],
      [
        'Je vais faire ___ une maison.',
        ['construire', 'construit', 'construite', 'construction'],
        'Faire construire = mandar construir.'
      ]
    ]),
    'ga-indicativo-subjuntivo': buildTopic('ga-indicativo-subjuntivo', [
      [
        "Je pense qu'il ___ raison.",
        ['a', 'ait', 'avoir', 'eût'],
        'Penser que no afirmativo expressa certeza: indicativo.'
      ],
      [
        "Je ne pense pas qu'il ___ raison.",
        ['ait', 'a', 'avoir', 'ayant'],
        'Penser que no negativo expressa dúvida: subjonctif (na fala, o indicativo também aparece).'
      ],
      [
        'Je crois que nous ___ en retard.',
        ['sommes', 'soyons', 'être', 'étant'],
        'Croire que no afirmativo: indicativo.'
      ],
      [
        'Je ne crois pas que ce ___ une bonne idée.',
        ['soit', 'est', 'être', 'sera'],
        'Croire que no negativo: subjonctif.'
      ],
      [
        'Je trouve que ce film ___ trop long.',
        ['est', 'soit', 'être', 'étant'],
        'Trouver que (opinião) no afirmativo: indicativo.'
      ],
      [
        "Il est certain qu'il ___.",
        ['viendra', 'vienne', 'venir', 'venant'],
        'Certeza (il est certain, sûr, évident que): indicativo.'
      ],
      [
        "Il n'est pas sûr qu'il ___.",
        ['vienne', 'viendra', 'venir', 'venant'],
        'Certeza negada vira dúvida: subjonctif.'
      ]
    ]),
    'ga-infinitivo-passado': buildTopic('ga-infinitivo-passado', [
      [
        'Après ___, il est sorti.',
        ['avoir mangé', 'manger', 'avoir manger', 'mangé'],
        'Após + infinitivo passado (avoir/être + particípio): após ter feito algo.'
      ],
      [
        'Après ___, elle a appelé sa mère.',
        ['être arrivée', 'avoir arrivée', 'être arriver', 'arrivée'],
        'Arriver usa être; no infinitivo passado o particípio concorda com o sujeito (elle → arrivée).'
      ],
      [
        'Avant ___, lave-toi les mains.',
        ['de manger', 'manger', 'avoir mangé', 'de mangé'],
        'Avant de + infinitivo presente (mesmo sujeito).'
      ],
      [
        'Il a été puni pour ___.',
        ['avoir menti', 'être menti', 'avoir mentir', 'mentant'],
        'Pour + infinitivo passado indica a causa (algo já feito).'
      ],
      [
        'Je suis content de vous ___.',
        ['avoir rencontré', 'rencontré', 'avoir rencontrer', 'être rencontré'],
        'Infinitivo passado para algo já concluído: content de vous avoir rencontré.'
      ],
      [
        "Après s'___ levés, ils ont pris le petit-déjeuner.",
        ['être', 'avoir', 'étant', 'été'],
        'Verbos pronominais usam être também no infinitivo passado: après s’être levés.'
      ]
    ]),
    'ga-futuro-passado': buildTopic('ga-futuro-passado', [
      [
        "Je savais qu'elle ___. (accepter)",
        ['accepterait', 'acceptera', 'accepte', 'acceptât'],
        'Futuro visto a partir do passado: conditionnel présent.'
      ],
      [
        "J'___ partir quand le téléphone a sonné.",
        ['allais', 'vais', 'irai', 'irais'],
        'Aller no imparfait + infinitivo = estava prestes a (futur proche no passado).'
      ],
      [
        'Elle pensait que le film ___ à 20 h.',
        ['commencerait', 'commencera', 'commence', 'commençât'],
        'Depois de um verbo no passado, o futuro vira conditionnel.'
      ],
      [
        "Nous ___ sortir quand il s'est mis à pleuvoir.",
        ['allions', 'allons', 'irons', 'irions'],
        'Estávamos prestes a sair: aller no imparfait + infinitivo.'
      ],
      [
        "On m'avait promis que tout ___ prêt à midi.",
        ['serait', 'sera', 'soit', 'été'],
        'Promessa no passado sobre o futuro: conditionnel (serait).'
      ],
      [
        "Il croyait qu'on lui ___. (répondre)",
        ['répondrait', 'répondra', 'réponde', 'répondit'],
        'Futuro no passado: conditionnel présent.'
      ]
    ])
  }
}
