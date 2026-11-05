import { buildTopic, type GrammarLevel } from './types'

// Gramática — Base (A1–A2). Resposta certa = primeira opção.
export const BASE: GrammarLevel = {
  sectionId: 'gram-base',
  label: 'Base (A1–A2)',
  sources: [
    {
      title: 'Kwiziq French – Gramática por tema e nível',
      url: 'https://french.kwiziq.com/revision/grammar'
    },
    { title: 'Lawless French – Grammar', url: 'https://www.lawlessfrench.com/grammar/' },
    { title: 'Le Conjugueur (Le Figaro)', url: 'https://leconjugueur.lefigaro.fr/' }
  ],
  topics: {
    'gb-artigos': buildTopic('gb-artigos', [
      [
        'Le matin, je bois ___ café.',
        ['du', 'de la', 'des', 'de'],
        'Quantidade indeterminada de um substantivo masculino singular: partitivo du (de + le).'
      ],
      [
        "Je n'ai pas ___ voiture.",
        ['de', 'une', 'la', 'du'],
        'Depois de uma negação (ne… pas), un/une/du/de la/des viram de (ou d’).'
      ],
      [
        "J'adore ___ chocolat.",
        ['le', 'du', 'un', 'de'],
        'Com verbos de gosto (aimer, adorer, détester, préférer) usa-se o artigo definido: on parle du chocolat en général.'
      ],
      [
        'Tu veux ___eau ?',
        ['de l’', 'du', 'de la', 'des'],
        'Partitivo antes de vogal ou h mudo: de l’ (de l’eau, de l’argent), seja o substantivo masculino ou feminino.'
      ],
      [
        'Il y a ___ pommes sur la table.',
        ['des', 'de la', 'du', 'de'],
        'Plural indefinido: des. De la e du são só para o singular; de sozinho só depois de negação (ou antes de adjetivo no plural).'
      ],
      [
        "C'est ___ ami de Paul.",
        ['un', 'une', 'du', 'des'],
        'Ami é masculino singular: un ami (a liaison soa “un‿nami”). Une amie seria o feminino.'
      ]
    ]),
    'gb-genero': buildTopic('gb-genero', [
      [
        'Ma sœur est très ___.',
        ['sportive', 'sportif', 'sportifs', 'sportives'],
        'Adjetivos em -if fazem o feminino em -ive: sportif → sportive. Ma sœur é feminino singular.'
      ],
      [
        'Ces livres sont ___.',
        ['intéressants', 'intéressant', 'intéressantes', 'intéressante'],
        'Livres é masculino plural: o adjetivo concorda e ganha -s.'
      ],
      [
        'Elle est ___ de théâtre.',
        ['actrice', 'acteuse', 'acteure', 'actresse'],
        'Substantivos em -teur costumam fazer o feminino em -trice: acteur → actrice, directeur → directrice.'
      ],
      [
        "J'achète deux ___ par semaine.",
        ['journaux', 'journals', 'journales', 'journaus'],
        'Substantivos em -al fazem o plural em -aux: un journal → des journaux, un cheval → des chevaux.'
      ],
      [
        "C'est ___ problème important.",
        ['un', 'une', 'des', 'de la'],
        'Problème é masculino, apesar do -e final (como système, programme, thème: palavras de origem grega em -ème/-me).'
      ],
      [
        'Elle a les ___ bleus.',
        ['yeux', 'œils', 'œuils', 'yeuxs'],
        'Plural irregular: un œil → des yeux.'
      ]
    ]),
    'gb-adjetivos': buildTopic('gb-adjetivos', [
      [
        "C'est une ___ maison.",
        ['belle', 'beau', 'bel', 'beaux'],
        'Beau vem antes do substantivo; no feminino singular é belle.'
      ],
      [
        'Il a acheté une ___.',
        ['voiture rouge', 'rouge voiture', 'voiture rouges', 'rouges voiture'],
        'Adjetivos de cor ficam depois do substantivo e concordam: une voiture rouge (rouge já termina em -e).'
      ],
      [
        "C'est un ___ homme.",
        ['bel', 'beau', 'belle', 'beaux'],
        'Antes de substantivo masculino que começa por vogal ou h mudo, beau vira bel (un bel homme), como vieux → vieil e nouveau → nouvel.'
      ],
      [
        'Nous avons visité un ___ appartement.',
        ['vieil', 'vieux', 'vieille', 'vieilles'],
        'Vieux vira vieil antes de substantivo masculino singular que começa por vogal: un vieil appartement.'
      ],
      [
        'Les filles sont ___.',
        ['heureuses', 'heureux', 'heureuse', 'heureuxes'],
        'Adjetivos em -eux fazem o feminino em -euse; no plural, -euses.'
      ],
      [
        'Elle porte une jupe et un chapeau ___.',
        ['noirs', 'noires', 'noir', 'noire'],
        'Um adjetivo que qualifica um substantivo feminino e um masculino vai para o masculino plural.'
      ]
    ]),
    'gb-present': buildTopic('gb-present', [
      [
        'Nous ___ français à la maison.',
        ['parlons', 'parlez', 'parlent', 'parle'],
        'Verbos em -er no présent: nous parlons (terminação -ons).'
      ],
      [
        'Ils ___ au bureau en bus.',
        ['vont', 'allent', 'vais', 'allons'],
        'Aller é irregular: je vais, tu vas, il va, nous allons, vous allez, ils vont.'
      ],
      [
        'Tu ___ quel âge ?',
        ['as', 'es', 'a', 'ai'],
        'Em francês, idade se diz com avoir: tu as quel âge ? / j’ai 30 ans.'
      ],
      [
        'Vous ___ quoi ce week-end ?',
        ['faites', 'faisez', 'font', 'fais'],
        'Faire é irregular: vous faites (como vous êtes e vous dites).'
      ],
      [
        'Je ___ le train de 8 h.',
        ['prends', 'prend', 'prenons', 'prenez'],
        'Prendre: je prends, tu prends, il prend. Com je, a terminação é -s.'
      ],
      [
        'Elles ___ rentrer tôt.',
        ['doivent', 'devent', 'doient', 'devont'],
        'Devoir: je dois, nous devons, ils/elles doivent.'
      ],
      [
        'Est-ce que tu ___ venir demain ?',
        ['peux', 'peut', 'pouvez', 'peuvent'],
        'Pouvoir: je peux, tu peux (com -x), il peut.'
      ]
    ]),
    'gb-negacao': buildTopic('gb-negacao', [
      [
        '— Tu vois quelqu’un ? — Non, je ne vois ___.',
        ['personne', 'rien', 'jamais', 'pas'],
        'O contrário de quelqu’un é ne… personne (ninguém).'
      ],
      [
        '— Tu veux quelque chose ? — Non, je ne veux ___, merci.',
        ['rien', 'personne', 'jamais', 'aucun'],
        'O contrário de quelque chose é ne… rien (nada).'
      ],
      [
        'Elle fumait avant, mais elle ne fume ___.',
        ['plus', 'jamais', 'rien', 'personne'],
        'Ne… plus = não… mais: algo que acontecia e parou.'
      ],
      [
        'Je ___ suis jamais allé au Japon.',
        ['ne', 'pas', 'ni', 'non'],
        'A negação tem duas partes: ne + jamais. Ne vai antes do verbo conjugado (aqui o auxiliar suis).'
      ],
      [
        'Il ___ venu à la fête.',
        ['n’est pas', 'ne pas est', 'est ne pas', 'n’pas est'],
        'No passé composé, ne… pas envolve o auxiliar: il n’est pas venu.'
      ],
      [
        'Le médecin lui conseille de ___.',
        ['ne pas fumer', 'ne fumer pas', 'pas fumer', 'fumer ne pas'],
        'Com infinitivo, as duas partes ficam juntas antes do verbo: ne pas fumer.'
      ]
    ]),
    'gb-interrogacao': buildTopic('gb-interrogacao', [
      [
        '___ tu habites ?',
        ['Où', 'Que', 'Qui', 'Quel'],
        'Où = onde. Na fala, a pergunta sem inversão é comum: Où tu habites ? / Tu habites où ?'
      ],
      [
        '___est-ce que vous faites ce soir ?',
        ['Qu’', 'Qui', 'Quoi', 'Quel'],
        'Qu’est-ce que = o que (objeto). Qui est-ce que perguntaria por uma pessoa.'
      ],
      [
        '___ heure est-il ?',
        ['Quelle', 'Quel', 'Quels', 'Quelles'],
        'Quel concorda com o substantivo: heure é feminino singular → quelle.'
      ],
      [
        'Où ___ ?',
        ['habite-t-elle', 'habite-elle', 'habite elle', 'elle habite-t'],
        'Na inversão, quando o verbo termina em vogal e o pronome começa por vogal, entra um -t- entre hífens: habite-t-elle, va-t-il.'
      ],
      [
        '— ___ parle ? — C’est Marie.',
        ['Qui', 'Que', 'Quoi', 'Quel'],
        'Qui pergunta por uma pessoa que é sujeito do verbo.'
      ],
      [
        'Tu travailles ici ___ ? — Depuis 2020.',
        ['depuis quand', 'combien', 'pourquoi', 'comment'],
        'A resposta “depuis 2020” responde a depuis quand (desde quando).'
      ]
    ]),
    'gb-preposicoes': buildTopic('gb-preposicoes', [
      [
        "J'habite ___ Montréal.",
        ['à', 'en', 'au', 'dans'],
        'Com cidades usa-se à: à Montréal, à Paris.'
      ],
      [
        'Elle travaille ___ France.',
        ['en', 'à', 'au', 'aux'],
        'Países femininos (a maioria termina em -e) levam en: en France, en Belgique.'
      ],
      [
        'Nous allons ___ Canada.',
        ['au', 'en', 'à', 'aux'],
        'Países masculinos levam au: au Canada, au Japon. Países no plural levam aux: aux États-Unis.'
      ],
      [
        'Je vais ___ le dentiste demain.',
        ['chez', 'à', 'en', 'dans'],
        'Chez = na casa ou no consultório de alguém: chez le dentiste, chez moi.'
      ],
      [
        "J'apprends le français ___ deux ans.",
        ['depuis', 'pendant', 'il y a', 'en'],
        'Ação que começou no passado e continua: présent + depuis.'
      ],
      [
        'Je suis arrivé au Canada ___ trois mois.',
        ['il y a', 'depuis', 'pendant', 'dans'],
        'Il y a + tempo = há (atrás): um momento pontual no passado.'
      ],
      [
        'Il a dormi ___ huit heures.',
        ['pendant', 'depuis', 'il y a', 'dans'],
        'Pendant indica a duração de uma ação já terminada.'
      ]
    ]),
    'gb-possessivos': buildTopic('gb-possessivos', [
      [
        "C'est ___ amie Julie.",
        ['mon', 'ma', 'me', 'mes'],
        'Antes de substantivo feminino que começa por vogal, usa-se mon/ton/son: mon amie, son école.'
      ],
      [
        'Ils ont vendu ___ maison.',
        ['leur', 'leurs', 'son', 'ses'],
        'Vários donos (ils) e um objeto: leur. Leurs seria para vários objetos.'
      ],
      [
        'Nous sommes contents : ___ enfants ont réussi.',
        ['nos', 'notre', 'nôtres', 'nous'],
        'Possessivo de nous no plural: nos (notre para um só). Nôtres é pronome (les nôtres), não vem antes do substantivo.'
      ],
      [
        '___ homme est mon voisin.',
        ['Cet', 'Ce', 'Cette', 'Ces'],
        'Antes de substantivo masculino singular que começa por vogal ou h mudo, ce vira cet: cet homme, cet ami.'
      ],
      [
        "J'aime beaucoup ___ chanson.",
        ['cette', 'ce', 'cet', 'ces'],
        'Chanson é feminino singular: cette.'
      ],
      [
        'Paul a perdu ___ clés.',
        ['ses', 'sa', 'son', 'leurs'],
        'Um dono (Paul) e vários objetos: ses.'
      ]
    ]),
    'gb-passe-compose': buildTopic('gb-passe-compose', [
      [
        'Hier, nous ___ allés au cinéma.',
        ['sommes', 'avons', 'êtes', 'ont'],
        'Aller é conjugado com être no passé composé (como venir, partir, arriver, naître, mourir…).'
      ],
      [
        'Elle ___ mangé une pizza.',
        ['a', 'est', 'as', 'ont'],
        'A maioria dos verbos usa avoir: elle a mangé.'
      ],
      [
        'Elles sont ___ à 20 h.',
        ['arrivées', 'arrivé', 'arrivés', 'arrivée'],
        'Com être, o particípio concorda com o sujeito: elles (feminino plural) → arrivées.'
      ],
      ['Je ___ né en 1990.', ['suis', 'ai', 'étais', 'avais'], 'Naître usa être: je suis né(e).'],
      [
        "La lettre ? Je l'ai ___ hier.",
        ['écrite', 'écrit', 'écrits', 'écrites'],
        'Com avoir, o particípio concorda com o COD quando ele vem antes: l’ = la lettre (feminino) → écrite.'
      ],
      [
        'Ils ___ levés tôt.',
        ['se sont', 'ont', 'se ont', 's’ont'],
        'Verbos pronominais usam sempre être: ils se sont levés.'
      ],
      [
        "Qu'est-ce que tu as ___ ce week-end ?",
        ['fait', 'faites', 'faire', 'fais'],
        'Particípio de faire: fait.'
      ]
    ]),
    'gb-futur-proche': buildTopic('gb-futur-proche', [
      [
        'Demain, je ___ visiter le musée.',
        ['vais', 'va', 'allais', 'vas'],
        'Futur proche: aller no présent + infinitivo. Com je: je vais visiter.'
      ],
      [
        'Attention, le train ___ partir !',
        ['va', 'vient de', 'venait', 'allait'],
        '“Attention” avisa de algo que está para acontecer: futur proche (va partir).'
      ],
      [
        "Elle ___ sortir : tu l'as ratée de deux minutes.",
        ['vient de', 'va', 'allait', 'est'],
        'Passé récent: venir de + infinitivo = acabou de. Ela saiu há dois minutos.'
      ],
      [
        'Nous ___ déménager le mois prochain.',
        ['allons', 'venons de', 'allions', 'sommes'],
        '“Le mois prochain” pede futuro: nous allons déménager.'
      ],
      [
        'Je ne ___ pas rester longtemps.',
        ['vais', 'viens', 'va', 'allé'],
        'Na negação do futur proche, ne… pas envolve aller: je ne vais pas rester.'
      ],
      [
        '— Tu as faim ? — Non, je ___ manger.',
        ['viens de', 'vais', 'venir', 'vais de'],
        'Não tem fome porque acabou de comer: passé récent (je viens de manger).'
      ]
    ]),
    'gb-imperativo': buildTopic('gb-imperativo', [
      [
        "___ la porte, s'il te plaît.",
        ['Ferme', 'Fermes', 'Fermer', 'Fermé'],
        'No imperativo com tu, os verbos em -er perdem o -s: ferme, parle, mange.'
      ],
      [
        '___ attention !',
        ['Faites', 'Faisez', 'Fait', 'Faire'],
        'Imperativo de faire com vous: faites.'
      ],
      [
        "___ patients, s'il vous plaît.",
        ['Soyez', 'Êtes', 'Soyiez', 'Sois'],
        'Être tem imperativo irregular: sois, soyons, soyez. “Patients” no plural pede vous: soyez.'
      ],
      [
        'Tu es fatigué ? ___ !',
        ['Couche-toi', 'Te couche', 'Couches-toi', 'Toi couche'],
        'Imperativo afirmativo de verbo pronominal: o pronome vem depois, com hífen, e te vira toi.'
      ],
      [
        'Ne ___ pas !',
        ['t’inquiète', 'inquiète-toi', 't’inquiètes', 'inquiètes-toi'],
        'No imperativo negativo, o pronome volta para antes do verbo: ne t’inquiète pas.'
      ],
      [
        'Tu veux aller à la plage ? ___ !',
        ['Vas-y', 'Va-y', 'Vais-y', 'Allez-y-tu'],
        'Va recupera o -s antes de y e en, para a liaison: vas-y, manges-en.'
      ]
    ]),
    'gb-pronominais': buildTopic('gb-pronominais', [
      [
        'Je ___ lève à 7 h.',
        ['me', 'se', 'te', 'nous'],
        'O pronome reflexivo acompanha o sujeito: je me, tu te, il se, nous nous, vous vous, ils se.'
      ],
      [
        'Nous ___ promenons au parc.',
        ['nous', 'se', 'vous', 'me'],
        'Com nous, o reflexivo também é nous: nous nous promenons.'
      ],
      [
        "Elle s'est ___ les mains.",
        ['lavé', 'lavée', 'lavés', 'lavées'],
        'Aqui o COD é les mains, que vem depois do verbo: o particípio não concorda.'
      ],
      [
        'Ils ___ disputés hier soir.',
        ['se sont', 'ont', 'se ont', 'sont'],
        'No passé composé, os pronominais usam être: ils se sont disputés.'
      ],
      [
        'Tu ___ souviens de lui ?',
        ['te', 'se', 'me', 'toi'],
        'Se souvenir com tu: tu te souviens.'
      ],
      [
        'Vous allez ___ coucher tard ?',
        ['vous', 'se', 'nous', 'te'],
        'Com infinitivo, o reflexivo concorda com o sujeito: vous allez vous coucher.'
      ]
    ]),
    'gb-contracoes': buildTopic('gb-contracoes', [
      ['Je vais ___ cinéma.', ['au', 'à le', 'à la', 'aux'], 'À + le vira sempre au.'],
      [
        'Il revient ___ États-Unis.',
        ['des', 'du', 'de les', 'aux'],
        'De + les vira des; États-Unis é masculino plural.'
      ],
      [
        "C'est le livre ___ professeur.",
        ['du', 'de le', 'de la', 'des'],
        'De + le vira sempre du.'
      ],
      [
        'Elle habite ___ Mexique.',
        ['au', 'en', 'à', 'du'],
        'Le Mexique é masculino (apesar do -e): au Mexique, como au Cambodge e au Mozambique.'
      ],
      [
        'Il vient ___ Italie.',
        ['d’', 'du', 'des', 'en'],
        'Origem de país feminino: de/d’ sem artigo (d’Italie, de France). Masculino: du (du Canada).'
      ],
      ['Je parle ___ enfants.', ['aux', 'à les', 'au', 'à'], 'À + les vira sempre aux.'],
      [
        'On va ___ Asie cet été.',
        ['en', 'au', 'à l’', 'aux'],
        'Continentes são femininos e levam en: en Asie, en Europe, en Afrique.'
      ]
    ]),
    'gb-cest-il-est': buildTopic('gb-cest-il-est', [
      [
        '___ médecin.',
        ['Il est', 'C’est', 'Il est un', 'Elle est une'],
        'Profissão sem artigo: il/elle est + profissão (il est médecin).'
      ],
      [
        '___ un bon médecin.',
        ['C’est', 'Il est', 'Il', 'Ce'],
        'Com artigo (un, une, le…) usa-se c’est: c’est un bon médecin.'
      ],
      [
        'Regarde cette femme : ___ ma voisine.',
        ['c’est', 'elle est', 'il est', 'elle'],
        'Antes de determinante (ma, mon, la…) + substantivo usa-se c’est.'
      ],
      [
        'Paris ? ___ une ville magnifique.',
        ['C’est', 'Elle est', 'Il est', 'Ce sont'],
        'Une ville tem artigo: c’est une ville.'
      ],
      [
        'Mes parents ? ___ très gentils.',
        ['Ils sont', 'Ce sont', 'C’est', 'Il est'],
        'Só adjetivo, falando de pessoas determinadas: ils sont. Ce sont pede substantivo (ce sont des gens gentils).'
      ],
      [
        '— Qui est-ce ? — ___ Marc, mon collègue.',
        ['C’est', 'Il est', 'Il', 'Ce sont'],
        'Para identificar alguém por nome próprio: c’est Marc.'
      ]
    ]),
    'gb-tonicos': buildTopic('gb-tonicos', [
      [
        '___, je préfère le thé.',
        ['Moi', 'Je', 'Me', 'Mon'],
        'Para dar ênfase ao sujeito, usa-se o pronome tônico: moi, je…'
      ],
      [
        'Tu viens avec ___ ?',
        ['nous', 'on', 'notre', 'nos'],
        'Depois de preposição (avec, pour, chez…) usa-se o pronome tônico: avec nous. On só pode ser sujeito.'
      ],
      [
        "C'est pour ___ , ce cadeau ? — Oui, c'est pour toi.",
        ['moi', 'me', 'je', 'mon'],
        'Depois de preposição: pour moi.'
      ],
      [
        'Ils sont plus grands que ___.',
        ['lui', 'il', 'le', 'son'],
        'Depois de que na comparação vem o pronome tônico: que lui, que moi.'
      ],
      [
        'Ce soir, ___ va au cinéma, toi et moi ?',
        ['on', 'nous', 'vous', 'ils'],
        'Na fala, on = nous, mas o verbo fica na 3ª pessoa do singular: on va. Com nous seria nous allons.'
      ],
      [
        'Hier, Paul et moi, on ___ partis tôt.',
        ['est', 'sont', 'sommes', 'a'],
        'On leva o verbo no singular (on est), mas, quando quer dizer nous, o particípio costuma concordar: on est partis.'
      ]
    ]),
    'gb-numeros': buildTopic('gb-numeros', [
      [
        'En France et au Canada, 70 se dit : ___.',
        ['soixante-dix', 'septante', 'sept-dix', 'soixante-et-dix'],
        '70 = soixante-dix na França e no Canadá. Septante é usado na Bélgica e na Suíça.'
      ],
      [
        'Ma grand-mère a ___ ans. (80)',
        ['quatre-vingts', 'quatre-vingt', 'huit-dix', 'quatre-vingtième'],
        '80 = quatre-vingts, com -s porque nada vem depois. Em 81, 82… o -s cai: quatre-vingt-un.'
      ],
      [
        '93 se dit : ___.',
        ['quatre-vingt-treize', 'quatre-vingts-treize', 'quatre-vingt-dix-trois', 'neuf-trois'],
        '93 = 4 × 20 + 13: quatre-vingt-treize (sem -s, porque vem outro número depois).'
      ],
      [
        'Nous sommes ___ 3 mai.',
        ['le', 'au', 'en', 'à'],
        'Datas levam o artigo le: le 3 mai, le 1er juillet.'
      ],
      ['Je suis né ___ 1995.', ['en', 'le', 'au', 'à'], 'Anos e meses levam en: en 1995, en mai.'],
      ['Le cours commence ___ 9 h.', ['à', 'en', 'le', 'au'], 'Hora: à 9 h (à neuf heures).'],
      [
        'Il est 10 h 45 : il est onze heures ___.',
        ['moins le quart', 'et quart', 'et demie', 'moins demi'],
        '10 h 45 = onze heures moins le quart (15 minutos para as onze).'
      ]
    ]),
    'gb-expressoes': buildTopic('gb-expressoes', [
      [
        "J'___ faim.",
        ['ai', 'suis', 'fais', 'a'],
        'Fome, sede, frio, calor, medo: com avoir (j’ai faim, j’ai soif, j’ai froid).'
      ],
      [
        "Il ___ froid aujourd'hui.",
        ['fait', 'est', 'a', 'y a'],
        'Tempo meteorológico: il fait froid, il fait beau, il fait 20 degrés.'
      ],
      [
        "Tu as ___ : c'est la bonne réponse.",
        ['raison', 'tort', 'besoin', 'peur'],
        'Avoir raison = ter razão. Avoir tort = estar errado.'
      ],
      [
        'Elle a ___ des araignées.',
        ['peur', 'froid', 'sommeil', 'honte'],
        'Avoir peur de = ter medo de.'
      ],
      [
        'Ils ___ du vélo le dimanche.',
        ['font', 'ont', 'sont', 'vont'],
        'Esportes e atividades com faire de: faire du vélo, faire de la natation.'
      ],
      [
        "J'ai ___ de dormir.",
        ['envie', 'faim', 'chaud', 'soif'],
        'Avoir envie de + infinitivo = estar com vontade de.'
      ]
    ]),
    'gb-adverbios': buildTopic('gb-adverbios', [
      [
        'Il parle ___.',
        ['lentement', 'lentment', 'lentemment', 'lent'],
        'Advérbio = feminino do adjetivo + -ment: lente → lentement.'
      ],
      [
        '___, il a raison.',
        ['Évidemment', 'Évidentement', 'Évidamment', 'Évidément'],
        'Adjetivos em -ent fazem o advérbio em -emment: évident → évidemment.'
      ],
      [
        "C'est ___ bon.",
        ['vraiment', 'vraiement', 'vraiemant', 'vrais'],
        'Adjetivos terminados em vogal fazem o advérbio a partir do masculino: vrai → vraiment, poli → poliment.'
      ],
      [
        'Il a ___ compris.',
        ['bien', 'bon', 'bonne', 'bons'],
        'Bien é advérbio (bon é adjetivo). Nos tempos compostos, advérbios curtos ficam entre o auxiliar e o particípio.'
      ],
      [
        'Il pleut ___ ici.',
        ['constamment', 'constantement', 'constemment', 'constament'],
        'Adjetivos em -ant fazem o advérbio em -amment: constant → constamment.'
      ],
      [
        "Il m'a répondu ___.",
        ['gentiment', 'gentilment', 'gentillement', 'gentilement'],
        'Exceção: gentil → gentiment.'
      ]
    ]),
    'gb-grafia': buildTopic('gb-grafia', [
      [
        'Nous ___ en juillet. (commencer)',
        ['commençons', 'commencons', 'commenceons', 'commençeons'],
        'Verbos em -cer: c vira ç antes de a e o, para manter o som de “s”: nous commençons.'
      ],
      [
        'Nous ___ ensemble. (manger)',
        ['mangeons', 'mangons', 'mangeont', 'manjons'],
        'Verbos em -ger: entra um e antes de a e o, para manter o som de “j”: nous mangeons.'
      ],
      [
        "Je m'___ Pierre. (appeler)",
        ['appelle', 'appele', 'apelle', 'appèle'],
        'Appeler dobra o l quando a terminação é muda: j’appelle, ils appellent (mas nous appelons).'
      ],
      [
        'Tu ___ un nouveau téléphone ? (acheter)',
        ['achètes', 'achetes', 'achettes', 'achêtes'],
        'Acheter ganha acento grave quando a terminação é muda: tu achètes (mas nous achetons).'
      ],
      [
        'Nous ___ Marie ce soir. (appeler)',
        ['appelons', 'appellons', 'apelons', 'appèlons'],
        'Com nous e vous a terminação é pronunciada, então não se dobra o l: nous appelons.'
      ],
      [
        'Elle ___ le thé. (préférer)',
        ['préfère', 'préfére', 'prefère', 'préfèrre'],
        'Préférer: o segundo é vira è quando a terminação é muda: elle préfère (mas nous préférons).'
      ]
    ]),
    'gb-savoir-connaitre': buildTopic('gb-savoir-connaitre', [
      [
        'Je ___ Paul depuis dix ans.',
        ['connais', 'sais', 'connaît', 'sait'],
        'Conhecer pessoas e lugares: connaître.'
      ],
      [
        'Tu ___ nager ?',
        ['sais', 'connais', 'sait', 'connaît'],
        'Saber fazer algo (savoir + infinitivo): tu sais nager.'
      ],
      [
        'Vous ___ où se trouve la gare ?',
        ['savez', 'connaissez', 'savons', 'connaissons'],
        'Savoir antes de uma oração (où, si, que, pourquoi…).'
      ],
      [
        'Elle ___ très bien Montréal.',
        ['connaît', 'sait', 'connaissent', 'savent'],
        'Conhecer um lugar: connaître (elle connaît).'
      ],
      [
        'Je ne ___ pas pourquoi il est parti.',
        ['sais', 'connais', 'sait', 'connaît'],
        'Savoir + pourquoi: je ne sais pas pourquoi.'
      ],
      [
        'Nous ___ ce restaurant : il est excellent.',
        ['connaissons', 'savons', 'connaissez', 'savez'],
        'Conhecer um lugar (substantivo): connaître.'
      ]
    ])
  }
}
