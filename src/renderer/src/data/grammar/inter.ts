import { buildTopic, type GrammarLevel } from './types'

// Gramática — Intermediário (B1). Resposta certa = primeira opção.
export const INTER: GrammarLevel = {
  sectionId: 'gram-inter',
  label: 'Intermediário (B1)',
  sources: [
    {
      title: 'Kwiziq French – Gramática por tema e nível',
      url: 'https://french.kwiziq.com/revision/grammar'
    },
    { title: 'Lawless French – Grammar', url: 'https://www.lawlessfrench.com/grammar/' },
    { title: 'Le Conjugueur (Le Figaro)', url: 'https://leconjugueur.lefigaro.fr/' }
  ],
  topics: {
    'gi-imparfait': buildTopic('gi-imparfait', [
      [
        "Quand j'étais petit, je ___ au parc tous les jours.",
        ['jouais', 'ai joué', 'joue', 'jouerai'],
        'Hábito no passado (“tous les jours”, “quand j’étais petit”): imparfait.'
      ],
      [
        'Hier, il ___ quand je suis sorti.',
        ['pleuvait', 'a plu', 'pleut', 'pleuvra'],
        'O cenário (o que estava acontecendo) vai no imparfait; a ação pontual (je suis sorti) no passé composé.'
      ],
      [
        'Je lisais quand le téléphone ___.',
        ['a sonné', 'sonnait', 'sonne', 'sonnera'],
        'Uma ação pontual interrompe outra em andamento: a interrupção vai no passé composé.'
      ],
      [
        "L'année dernière, nous ___ en Espagne une semaine.",
        ['sommes allés', 'allions', 'allons', 'irons'],
        'Fato concluído e delimitado no tempo (une semaine, l’année dernière): passé composé.'
      ],
      [
        'Quand il était jeune, il ___ les cheveux longs.',
        ['avait', 'a eu', 'a', 'aura'],
        'Descrição de como algo era no passado: imparfait.'
      ],
      [
        'Soudain, la lumière ___.',
        ['s’est éteinte', 's’éteignait', 's’éteint', 's’éteindra'],
        '“Soudain” marca um acontecimento repentino e pontual: passé composé.'
      ]
    ]),
    'gi-futur-simple': buildTopic('gi-futur-simple', [
      [
        'Demain, il ___ beau.',
        ['fera', 'faira', 'fairera', 'faisera'],
        'Faire tem radical irregular no futuro: fer- (je ferai, il fera).'
      ],
      [
        "Nous ___ à Québec l'année prochaine.",
        ['irons', 'allerons', 'irions', 'iront'],
        'Aller no futuro usa o radical ir-: nous irons. Irions é condicional.'
      ],
      [
        'Quand tu ___ à Paris, appelle-moi.',
        ['seras', 'es', 'serais', 'sois'],
        'Diferente do português, depois de quand com sentido de futuro usa-se o futur: quand tu seras.'
      ],
      [
        'Vous ___ le temps ?',
        ['aurez', 'avrez', 'aurrez', 'aurais'],
        'Avoir no futuro: radical aur- (j’aurai, vous aurez).'
      ],
      [
        'Je ___ si je peux.',
        ['viendrai', 'venirai', 'viendrais', 'vendrai'],
        'Venir no futuro: radical viendr-. Viendrais (com -s) é condicional.'
      ],
      [
        'Ils ___ faire attention.',
        ['devront', 'deveront', 'doiveront', 'devrons'],
        'Devoir no futuro: radical devr- (ils devront).'
      ]
    ]),
    'gi-conditionnel': buildTopic('gi-conditionnel', [
      [
        "Je ___ un café, s'il vous plaît.",
        ['voudrais', 'voudrai', 'voulu', 'vouloir'],
        'Pedido educado: condicional (je voudrais). Voudrai, sem -s, é futuro.'
      ],
      [
        "Si j'avais le temps, je ___ plus.",
        ['lirais', 'lirai', 'lisais', 'lis'],
        'Si + imparfait → condicional na outra oração: je lirais.'
      ],
      [
        'Tu ___ m’aider ? (pedido educado)',
        ['pourrais', 'pourrait', 'pourrions', 'pouvoir'],
        'Condicional de pouvoir com tu: tu pourrais.'
      ],
      [
        'À ta place, je ___.',
        ['partirais', 'partirai', 'partais', 'pars'],
        '“À ta place” = conselho hipotético: condicional.'
      ],
      [
        'Nous ___ visiter le musée, si possible.',
        ['aimerions', 'aimerons', 'aimions', 'aimerais'],
        'Desejo expresso com educação: condicional (nous aimerions).'
      ],
      [
        'Il ___ mieux partir tôt.',
        ['vaudrait', 'valrait', 'vaudrais', 'vaudrions'],
        'Il vaudrait mieux = seria melhor (condicional de valoir, impessoal).'
      ]
    ]),
    'gi-pronomes': buildTopic('gi-pronomes', [
      [
        'Tu vois Marie ? — Oui, je ___ vois.',
        ['la', 'lui', 'le', 'en'],
        'Voir quelqu’un: COD feminino → la.'
      ],
      [
        'Tu as parlé à ton frère ? — Oui, je ___ ai parlé.',
        ['lui', 'l’', 'le', 'y'],
        'Parler à quelqu’un: COI → lui (para ele ou ela).'
      ],
      [
        "Tu vas à Montréal ? — Oui, j'___ vais demain.",
        ['y', 'en', 'le', 'lui'],
        'Y substitui um lugar introduzido por à, en, chez…'
      ],
      [
        "Tu veux du café ? — Oui, j'___ veux bien.",
        ['en', 'y', 'le', 'la'],
        'En substitui um complemento com partitivo (du, de la, des) ou de.'
      ],
      [
        'Il donne le livre à Marie. → Il ___ donne.',
        ['le lui', 'lui le', 'la lui', 'le leur'],
        'Ordem dos pronomes: le/la/les antes de lui/leur → le lui.'
      ],
      [
        'Tu me prêtes ta voiture ? — Oui, je ___ prête.',
        ['te la', 'la te', 'te le', 'lui la'],
        'Ordem: me/te/nous/vous antes de le/la/les → te la.'
      ],
      [
        'Des enfants ? Elle ___ a trois.',
        ['en', 'les', 'y', 'leur'],
        'Com quantidade (trois, beaucoup, un…), o substantivo é substituído por en: elle en a trois.'
      ]
    ]),
    'gi-relativos': buildTopic('gi-relativos', [
      [
        'Le livre ___ est sur la table est à moi.',
        ['qui', 'que', 'dont', 'où'],
        'Qui substitui o sujeito do verbo seguinte (le livre est sur la table).'
      ],
      [
        "Le film ___ j'ai vu hier était super.",
        ['que', 'qui', 'dont', 'où'],
        'Que substitui o COD (j’ai vu le film).'
      ],
      [
        'La ville ___ je suis né est petite.',
        ['où', 'que', 'qui', 'dont'],
        'Où substitui um lugar (ou um momento).'
      ],
      [
        "Le collègue ___ je t'ai parlé arrive demain.",
        ['dont', 'que', 'qui', 'où'],
        'Dont substitui um complemento com de (parler de quelqu’un).'
      ],
      [
        'C’est le jour ___ nous nous sommes rencontrés.',
        ['où', 'que', 'quand', 'dont'],
        'Para tempo, o relativo também é où: le jour où, l’année où.'
      ],
      [
        'La maison ___ les fenêtres sont bleues est à vendre.',
        ['dont', 'où', 'que', 'qui'],
        'Dont indica posse: les fenêtres de la maison → la maison dont les fenêtres…'
      ]
    ]),
    'gi-comparativo': buildTopic('gi-comparativo', [
      [
        'Paul est ___ grand que Marc.',
        ['plus', 'plus de', 'autant', 'davantage'],
        'Comparativo com adjetivo: plus/aussi/moins + adjetivo + que. Plus de é para substantivos.'
      ],
      [
        "Ce restaurant est ___ que l'autre.",
        ['meilleur', 'plus bon', 'plus meilleur', 'bonner'],
        'Bon tem comparativo irregular: meilleur (nunca “plus bon”).'
      ],
      [
        'Elle chante ___ que sa sœur.',
        ['mieux', 'meilleur', 'plus bien', 'plus bon'],
        'Bien (advérbio) tem comparativo irregular: mieux. Meilleur é para adjetivos.'
      ],
      [
        "C'est la ___ ville du monde.",
        ['plus belle', 'belle plus', 'plus de belle', 'meilleure belle'],
        'Superlativo: le/la/les + plus + adjetivo (+ de): la plus belle ville du monde.'
      ],
      [
        "J'ai ___ livres que toi.",
        ['autant de', 'autant', 'aussi', 'aussi de'],
        'Igualdade com substantivo: autant de + substantivo + que.'
      ],
      [
        'Il travaille ___ que moi.',
        ['moins', 'moins de', 'aussi de', 'le moins de'],
        'Comparativo com verbo: verbo + plus/autant/moins + que.'
      ]
    ]),
    'gi-plus-que-parfait': buildTopic('gi-plus-que-parfait', [
      [
        'Quand je suis arrivé, le film ___ déjà commencé.',
        ['avait', 'a', 'était', 'aurait'],
        'Ação anterior a outra ação passada: plus-que-parfait (avoir no imparfait + particípio).'
      ],
      [
        "Elle m'a dit qu'elle ___ partie la veille.",
        ['était', 'avait', 'est', 'serait'],
        'Partir usa être: no plus-que-parfait, être no imparfait (elle était partie).'
      ],
      [
        'Il ne savait pas que nous ___.',
        ['avions déménagé', 'avons déménagé', 'aurons déménagé', 'déménageons'],
        'A mudança aconteceu antes do momento passado “il ne savait pas”: plus-que-parfait.'
      ],
      [
        "J'étais fatigué parce que je n'___ pas dormi.",
        ['avais', 'ai', 'étais', 'aurais'],
        'Causa anterior ao estado passado: plus-que-parfait (je n’avais pas dormi).'
      ],
      [
        "Si j'___ su, je serais venu.",
        ['avais', 'aurais', 'ai', 'étais'],
        'Hipótese sobre o passado: si + plus-que-parfait (nunca condicional depois de si).'
      ],
      [
        'Ils ___ déjà mangé quand on les a appelés.',
        ['avaient', 'ont', 'étaient', 'auraient'],
        'Já tinham comido antes da ligação: plus-que-parfait.'
      ]
    ]),
    'gi-condicionais': buildTopic('gi-condicionais', [
      [
        'Si tu viens, on ___ au cinéma.',
        ['ira', 'irait', 'allait', 'aille'],
        'Si + présent → futur (ou présent/imperativo): condição real e possível.'
      ],
      [
        "Si j'avais de l'argent, je ___ une maison.",
        ['achèterais', 'achèterai', 'achetais', 'achète'],
        'Si + imparfait → condicional: hipótese sobre o presente.'
      ],
      [
        'Si tu ___ plus, tu réussirais.',
        ['travaillais', 'travaillerais', 'travailles', 'travailleras'],
        'Depois de si vem o imparfait, nunca o condicional.'
      ],
      [
        "S'il ___ beau demain, nous irons à la plage.",
        ['fait', 'fera', 'ferait', 'faisait'],
        'Mesmo falando do futuro, depois de si usa-se o présent: s’il fait beau demain.'
      ],
      [
        "Si j'étais toi, je ___.",
        ['refuserais', 'refuserai', 'refusais', 'refuse'],
        'Si + imparfait (j’étais) → condicional (je refuserais).'
      ],
      [
        'Si vous ___ des questions, appelez-moi.',
        ['avez', 'aurez', 'auriez', 'ayez'],
        'Si + présent → imperativo: si vous avez des questions, appelez-moi.'
      ]
    ]),
    'gi-discurso-indireto': buildTopic('gi-discurso-indireto', [
      [
        '« Je suis fatigué. » → Il dit qu’il ___ fatigué.',
        ['est', 'était', 'sera', 'soit'],
        'Com o verbo introdutor no presente (il dit), o tempo não muda.'
      ],
      [
        '« Viens ! » → Elle me dit ___ venir.',
        ['de', 'que', 'à', 'qu’'],
        'O imperativo vira de + infinitivo no discurso indireto: elle me dit de venir.'
      ],
      [
        '« Où habites-tu ? » → Il me demande ___ j’habite.',
        ['où', 'que', 'si', 'ce que'],
        'Pergunta com palavra interrogativa: ela se mantém (où, quand, comment…), sem inversão.'
      ],
      [
        '« Tu as faim ? » → Elle me demande ___ j’ai faim.',
        ['si', 'que', 'est-ce que', 'qu’'],
        'Pergunta de sim/não vira si no discurso indireto.'
      ],
      [
        '« Qu’est-ce que tu fais ? » → Il me demande ___ je fais.',
        ['ce que', 'qu’est-ce que', 'que', 'quoi'],
        'Qu’est-ce que vira ce que no discurso indireto.'
      ],
      [
        '« Je pars demain. » → Il a dit qu’il ___ le lendemain.',
        ['partait', 'part', 'partira', 'est parti'],
        'Com o verbo introdutor no passado, présent vira imparfait (e demain vira le lendemain).'
      ]
    ]),
    'gi-subjonctif': buildTopic('gi-subjonctif', [
      [
        "Il faut que tu ___ à l'heure.",
        ['sois', 'es', 'seras', 'étais'],
        '“Il faut que” (obrigação) exige subjonctif: que tu sois.'
      ],
      [
        'Je veux que vous ___ ce document.',
        ['lisiez', 'lisez', 'lirez', 'lire'],
        'Vontade sobre outra pessoa (vouloir que) exige subjonctif: que vous lisiez.'
      ],
      [
        'Je suis content que tu ___ là.',
        ['sois', 'es', 'seras', 'être'],
        'Sentimento (être content que) exige subjonctif.'
      ],
      [
        'Il est important que nous ___ ensemble.',
        ['travaillions', 'travaillons', 'travaillerons', 'travaillerions'],
        'Il est important que → subjonctif. Com nous e vous, o subjonctif dos verbos em -er tem -ions/-iez.'
      ],
      [
        "Je doute qu'il ___ raison.",
        ['ait', 'a', 'aura', 'avait'],
        'Dúvida (douter que) exige subjonctif: qu’il ait.'
      ],
      [
        'Elle souhaite que ses enfants ___ heureux.',
        ['soient', 'sont', 'seront', 'étaient'],
        'Desejo (souhaiter que) exige subjonctif: qu’ils soient.'
      ],
      [
        'Il faut que je ___ mes devoirs.',
        ['fasse', 'fais', 'ferai', 'faisse'],
        'Faire tem subjonctif irregular: que je fasse.'
      ]
    ]),
    'gi-negacao': buildTopic('gi-negacao', [
      [
        "Je n'ai ___ dix dollars.",
        ['que', 'pas', 'aucun', 'rien'],
        'Ne… que = apenas, só (restrição): je n’ai que dix dollars.'
      ],
      [
        "Il n'aime ___ le thé ni le café.",
        ['ni', 'pas', 'que', 'plus'],
        'Negação de dois elementos: ne… ni… ni (il n’aime ni le thé ni le café).'
      ],
      [
        "___ n'est venu à la réunion.",
        ['Personne', 'Rien', 'Aucun', 'Jamais'],
        'Personne pode ser sujeito: personne ne… (sem pas).'
      ],
      [
        "___ ne s'est passé hier soir.",
        ['Rien', 'Personne', 'Aucun', 'Jamais'],
        'Rien como sujeito: rien ne s’est passé.'
      ],
      [
        "Je n'ai ___ idée.",
        ['aucune', 'aucun', 'pas', 'rien'],
        'Aucun concorda com o substantivo: idée é feminino → aucune.'
      ],
      [
        'Il ne travaille ___ ici : il a pris sa retraite.',
        ['plus', 'jamais', 'que', 'rien'],
        'Trabalhava e parou (aposentou-se): ne… plus.'
      ]
    ]),
    'gi-demonstrativos': buildTopic('gi-demonstrativos', [
      [
        'Quelle robe préfères-tu ? — ___-ci, la rouge.',
        ['Celle', 'Celui', 'Cette', 'Ceux'],
        'Pronome demonstrativo para robe (feminino singular): celle.'
      ],
      [
        'Ces livres sont à toi ? — Non, ce sont ___ de Marie.',
        ['ceux', 'celles', 'celui', 'ces'],
        'Livres é masculino plural: ceux.'
      ],
      [
        'Dis-moi ___ tu penses.',
        ['ce que', 'ce qui', 'que', 'qu’est-ce que'],
        'Ce que = o que (objeto do verbo: tu penses quelque chose).'
      ],
      [
        "___ m'inquiète, c'est le prix.",
        ['Ce qui', 'Ce que', 'Qui', 'Que'],
        'Ce qui = o que (sujeito do verbo: quelque chose m’inquiète).'
      ],
      [
        "Ce n'est pas ton stylo, c'est ___.",
        ['le mien', 'la mienne', 'mien', 'mon'],
        'Stylo é masculino: le mien. O pronome possessivo sempre leva artigo.'
      ],
      [
        'Ta voiture est rouge ; ___ est bleue.',
        ['la nôtre', 'le nôtre', 'notre', 'la notre'],
        'Voiture é feminino: la nôtre. O pronome tem acento circunflexo (nôtre); o determinante notre não tem.'
      ]
    ]),
    'gi-indefinidos': buildTopic('gi-indefinidos', [
      [
        '___ les étudiants sont présents.',
        ['Tous', 'Tout', 'Toutes', 'Toute'],
        'Étudiants é masculino plural: tous les étudiants.'
      ],
      [
        '___ a son propre bureau.',
        ['Chacun', 'Chaque', 'Tous', 'Plusieurs'],
        'Chacun é pronome (fica sozinho). Chaque é determinante e precisa de um substantivo (chaque employé).'
      ],
      [
        'Il y a ___ à la porte.',
        ['quelqu’un', 'quelque', 'chacun', 'quelques'],
        'Quelqu’un = alguém (pronome).'
      ],
      [
        "J'ai lu ___ livres de cet auteur.",
        ['plusieurs', 'chacun', 'quelqu’un', 'aucun'],
        'Plusieurs + substantivo no plural = vários.'
      ],
      [
        '___ jour, il fait la même chose.',
        ['Chaque', 'Chacun', 'Tout', 'Tous'],
        'Chaque + substantivo no singular = cada.'
      ],
      [
        'Elle a mangé ___ le gâteau.',
        ['tout', 'tous', 'toute', 'toutes'],
        'Gâteau é masculino singular: tout le gâteau.'
      ]
    ]),
    'gi-duracao': buildTopic('gi-duracao', [
      [
        "J'habite au Canada ___ cinq ans.",
        ['depuis', 'pendant', 'pour', 'dans'],
        'Situação que começou no passado e continua: présent + depuis.'
      ],
      [
        "J'ai vécu à Paris ___ trois ans.",
        ['pendant', 'depuis', 'dans', 'pour'],
        'Duração de algo terminado: pendant.'
      ],
      [
        'Demain, je pars ___ une semaine en Gaspésie.',
        ['pour', 'depuis', 'il y a', 'en'],
        'Duração prevista com verbos como partir, venir, aller: pour.'
      ],
      [
        "J'ai lu ce roman ___ deux jours.",
        ['en', 'depuis', 'pour', 'dans'],
        'En indica o tempo que se levou para fazer algo.'
      ],
      [
        'Le train part ___ dix minutes.',
        ['dans', 'en', 'depuis', 'pendant'],
        'Dans + tempo = daqui a (ponto no futuro).'
      ],
      [
        '___ quand travailles-tu ici ?',
        ['Depuis', 'Pendant', 'Pour', 'Dans'],
        'Desde quando: depuis quand.'
      ]
    ]),
    'gi-verbos-preposicao': buildTopic('gi-verbos-preposicao', [
      [
        'Je pense souvent ___ mes vacances.',
        ['à', 'de', 'sur', 'pour'],
        'Penser à = pensar em (ter na cabeça).'
      ],
      [
        "Qu'est-ce que tu penses ___ ce film ?",
        ['de', 'à', 'sur', 'pour'],
        'Penser de = achar de (opinião).'
      ],
      [
        'Ce film plaît beaucoup ___ jeunes.',
        ['aux', 'les', 'des', 'pour les'],
        'Plaire à quelqu’un: o que agrada é o sujeito, e a pessoa vem com à (aux jeunes).'
      ],
      ['Il a décidé ___ partir.', ['de', 'à', 'pour', 'par'], 'Décider de + infinitivo.'],
      [
        "Je t'aide ___ porter les valises.",
        ['à', 'de', 'pour', 'par'],
        'Aider quelqu’un à + infinitivo.'
      ],
      [
        'Depuis que tu es partie, tu ___ manques beaucoup.',
        ['me', 'te', 'm’en', 'moi'],
        'Manquer à é “ao contrário” do português: a pessoa de quem se sente falta é o sujeito. Tu me manques = sinto sua falta.'
      ],
      [
        "Il s'intéresse ___ la politique.",
        ['à', 'de', 'pour', 'sur'],
        'S’intéresser à = interessar-se por.'
      ]
    ]),
    'gi-adjetivos-posicao': buildTopic('gi-adjetivos-posicao', [
      [
        "C'est mon ___ : je ne travaille plus avec lui.",
        ['ancien patron', 'patron ancien', 'patron passé', 'passé patron'],
        'Ancien antes do substantivo = antigo, ex- (que já não é). Depois = velho, de época.'
      ],
      [
        'Il habite dans une ___ : elle date de 1850.',
        ['maison ancienne', 'ancienne maison', 'maison anciennes', 'anciens maison'],
        'Depois do substantivo, ancien = antigo, de época. Une ancienne maison seria uma casa onde ele morava antes.'
      ],
      [
        "C'est un ___ : un repas coûte 200 $.",
        ['restaurant cher', 'cher restaurant', 'restaurant chère', 'chers restaurant'],
        'Cher depois do substantivo = caro. Antes = querido.'
      ],
      [
        '___, merci pour ton message.',
        ['Chère Julie', 'Julie chère', 'Cher Julie', 'Julie cher'],
        'Cher antes = querido (como no começo de cartas), concordando: chère Julie.'
      ],
      [
        'Il a sa ___ : il ne la partage avec personne.',
        ['propre chambre', 'chambre propre', 'propres chambre', 'chambre propres'],
        'Propre antes = próprio. Depois = limpo.'
      ],
      [
        "C'est un ___ : il mesure deux mètres.",
        ['homme grand', 'grand homme', 'homme grands', 'grands homme'],
        'Grand depois de homme = alto. Un grand homme = um grande homem (importante).'
      ]
    ])
  }
}
