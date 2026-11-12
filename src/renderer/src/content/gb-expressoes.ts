import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'gb-expressoes',

  pt: {
    title: 'Expressões com avoir, faire e il fait',
    summary:
      'Aprenda a utilizar expressões comuns com avoir e faire para falar de necessidades, desejos, sensações, atividades e condições meteorológicas. ' +
      'Entenda também a diferença entre avoir chaud e il fait chaud, além das construções mais utilizadas no francês canadense.',
    blocks: [
      { type: 'heading', text: '1. Os verbos avoir e faire no presente' },
      {
        type: 'table',
        headers: ['Pessoa', '[[Avoir|Ter]]', '[[Faire|Fazer]]'],
        rows: [
            [
              'Eu',
              '[[J’ai|Eu tenho]]',
              '[[Je fais|Eu faço]]'
            ],
            [
              'Você',
              '[[Tu as|Você tem]]',
              '[[Tu fais|Você faz]]'
            ],
            [
              'Ele / Ela',
              '[[Il / Elle a|Ele / Ela tem]]',
              '[[Il / Elle fait|Ele / Ela faz]]'
            ],
            [
              'Nós',
              '[[Nous avons|Nós temos]]',
              '[[Nous faisons|Nós fazemos]]'
            ],
            [
              'Vocês',
              '[[Vous avez|Vocês têm]]',
              '[[Vous faites|Vocês fazem]]'
            ],
            [
              'Eles / Elas',
              '[[Ils / Elles ont|Eles / Elas têm]]',
              '[[Ils / Elles font|Eles / Elas fazem]]'
            ]
        ]
      },
      { type: 'heading', text: '2. Expressões com avoir: necessidades, desejos e sensações' },
      {
        type: 'paragraph',
        text:
          'Em francês, diversas necessidades, vontades e sensações são expressas com o verbo [[avoir|ter]], mesmo quando, em português, utilizamos o verbo estar ou uma construção diferente. ' +
          'Duas estruturas especialmente importantes são [[avoir besoin de|ter necessidade de]] e [[avoir envie de|ter vontade de]]. ' +
          'Ambas podem ser seguidas de um substantivo ou de um verbo no infinitivo, sempre com a preposição [[de|de]]. Antes de uma vogal ou de um h mudo, [[de|de]] ' +
          'transforma-se em [[d’|d’]].'
      },
      {
        type: 'table',
        headers: ['Expressão', 'Exemplo em francês', 'Tradução'],
        rows: [
            [
              'Necessidade',
              '[[J’ai besoin de repos.|Preciso de descanso.]]',
              'Ter necessidade de algo.'
            ],
            [
              'Necessidade de fazer algo',
              '[[J’ai besoin de travailler.|Preciso trabalhar.]]',
              'Ter necessidade de realizar uma ação.'
            ],
            [
              'Desejo',
              '[[J’ai envie d’un café.|Estou com vontade de tomar um café.]]',
              'Ter vontade de algo.'
            ],
            [
              'Desejo de fazer algo',
              '[[J’ai envie de voyager.|Estou com vontade de viajar.]]',
              'Ter vontade de realizar uma ação.'
            ],
            [
              'Fome',
              '[[J’ai faim.|Estou com fome.]]',
              'Ter fome.'
            ],
            [
              'Sede',
              '[[J’ai soif.|Estou com sede.]]',
              'Ter sede.'
            ],
            [
              'Frio',
              '[[J’ai froid.|Estou com frio.]]',
              'Sentir frio.'
            ],
            [
              'Calor',
              '[[J’ai chaud.|Estou com calor.]]',
              'Sentir calor.'
            ],
            [
              'Sono',
              '[[J’ai sommeil.|Estou com sono.]]',
              'Sentir sono.'
            ],
            [
              'Medo',
              '[[J’ai peur des araignées.|Tenho medo de aranhas.]]',
              'Sentir medo.'
            ]
        ]
      },
      { type: 'heading', text: '3. Expressões com faire e il fait' },
      {
        type: 'paragraph',
        text:
          'O verbo [[faire|fazer]] aparece em diversas expressões fixas e atividades cotidianas. ' +
          'Nem sempre sua tradução literal corresponde à construção utilizada em português. ' +
          'Uma aplicação especialmente importante é [[il fait|faz]], utilizada impessoalmente para descrever condições meteorológicas. Nesse caso, [[il|ele]] ' +
          'não representa uma pessoa ou objeto: é apenas o sujeito gramatical da frase.'
      },
      {
        type: 'table',
        headers: ['Expressão em francês', 'Significado em português', 'Utilização'],
        rows: [
            [
              '[[faire du sport|praticar esportes]]',
              'Praticar uma atividade física.',
              'Atividades físicas.'
            ],
            [
              '[[faire l’épicerie|fazer compras de supermercado]]',
              'Comprar alimentos e produtos do dia a dia.',
              'Expressão comum no Québec.'
            ],
            [
              '[[faire les courses|fazer compras]]',
              'Comprar alimentos e outros produtos.',
              'Alternativa muito utilizada na França.'
            ],
            [
              '[[faire la cuisine|cozinhar]]',
              'Preparar refeições.',
              'Atividades domésticas.'
            ],
            [
              '[[faire attention à|prestar atenção a]]',
              'Ter cuidado ou prestar atenção.',
              'Atenção e precaução.'
            ],
            [
              '[[Il fait beau.|O tempo está bom.]]',
              'Condições meteorológicas agradáveis.',
              'Clima.'
            ],
            [
              '[[Il fait chaud.|Faz calor.]]',
              'Temperatura elevada no ambiente.',
              'Clima.'
            ],
            [
              '[[Il fait froid.|Faz frio.]]',
              'Temperatura baixa no ambiente.',
              'Clima.'
            ],
            [
              '[[Il fait frais.|Está fresco.]]',
              'Temperatura agradável ou ligeiramente baixa.',
              'Clima.'
            ],
            [
              '[[Il fait 20 °C.|Está fazendo 20 °C.]]',
              'Indicar a temperatura.',
              'Clima e temperatura.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Nem todas as expressões meteorológicas utilizam [[faire|fazer]]. Também são comuns [[Il y a du vent.|Está ventando.]], [[Il pleut.|Está chovendo.]] ' +
          'e [[Il neige.|Está nevando.]] A pergunta habitual para falar sobre o clima é [[Quel temps fait-il ?|Como está o tempo?]].'
      },
      { type: 'heading', text: '4. Armadilhas comuns para brasileiros' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Não confunda avoir e il fait ao falar de temperatura',
        text:
          'A diferença é importante: [[J’ai froid.|Estou com frio.]] descreve a sensação de uma pessoa, enquanto [[Il fait froid.|Faz frio.]] ' +
          'descreve a temperatura do ambiente. O mesmo acontece com [[J’ai chaud.|Estou com calor.]] e [[Il fait chaud.|Faz calor.]] ' +
          'Também não traduza literalmente expressões como estar com fome ou estar com sono. Em francês, utilize avoir, e não être.'
      },
      {
        type: 'list',
        items: [
          'Não diga [[Je suis faim|Estou com fome (errado)]] O correto é [[J’ai faim.|Estou com fome.]]',
          'Não diga [[Je suis besoin de repos|Preciso de descanso (errado)]] Utilize [[J’ai besoin de repos.|Preciso de descanso.]]',
            'Não confunda [[J’ai envie de partir.|Estou com vontade de ir embora.]] com [[Je veux partir.|Quero ir embora.]] ' +
            'A primeira construção expressa vontade ou desejo; a segunda expressa diretamente uma intenção.',
            'Não diga [[Je fais froid|Estou com frio (errado)]] Utilize [[J’ai froid.|Estou com frio.]] ' +
            'ou [[Il fait froid.|Faz frio.]], dependendo do contexto.',
          'Para informar a temperatura, prefira [[Il fait 20 °C.|Está fazendo 20 °C.]], e não uma construção literal como [[C’est 20 degrés|É 20 graus (calque do inglês)]]',
          'Não diga [[Il fait pleut|Está chovendo (errado)]] Utilize [[Il pleut.|Está chovendo.]]'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'O que praticar para a prova',
        text:
          'Pratique essas expressões em situações cotidianas: explicar suas necessidades, falar de seus desejos, descrever sensações, comentar atividades e conversar sobre o clima. ' +
          'Na compreensão oral, reconheça expressões frequentes como [[J’ai besoin de|Preciso de]], [[J’ai envie de|Estou com vontade de]] e [[Il fait froid|Faz frio]]. ' +
          'Na expressão oral e escrita, saiba utilizá-las espontaneamente e construir frases completas com os verbos avoir e faire.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O OQLF confirma que, para indicar a temperatura, usa-se il fait com sujeito impessoal (il fait froid, il fait beau, il fait 18 °C) e não c’est 18 °C, calque do inglês. ' +
          'O Usito confirma que faire l’épicerie é uso do Québec, com o sentido de comprar mantimentos. ' +
          'A página do Le Robert listada só traz exemplos de avoir froid. ' +
          'A página do Portal linguistique du Canada sobre besoin não pôde ser aberta por causa de uma verificação de segurança do site, então avoir besoin de e avoir envie de, as sensações com avoir (faim, soif, sommeil, peur) e a diferença entre J’ai froid e Il fait froid não foram confirmados por fonte aberta. ' +
          'Também não há fonte para faire les courses como forma usada na França, nem para as recomendações de preparação para o TEF Canada e o TCF Canada: são sugestões de preparação, não exigências das provas.'
      }
    ]
  },

  fr: {
    title: 'Les expressions avec avoir, faire et il fait',
    summary:
      'Apprenez à utiliser les expressions courantes avec avoir et faire pour parler de besoins, de désirs, de sensations, d’activités et de conditions météorologiques. ' +
      'Découvrez également la différence entre avoir chaud et il fait chaud, ainsi que les constructions les plus utilisées en français canadien.',
    blocks: [
      { type: 'heading', text: '1. Les verbes avoir et faire au présent' },
      {
        type: 'table',
        headers: ['Personne', 'Avoir', 'Faire'],
        rows: [
            [
              'Je',
              'J’ai',
              'Je fais'
            ],
            [
              'Tu',
              'Tu as',
              'Tu fais'
            ],
            [
              'Il / Elle',
              'Il / Elle a',
              'Il / Elle fait'
            ],
            [
              'Nous',
              'Nous avons',
              'Nous faisons'
            ],
            [
              'Vous',
              'Vous avez',
              'Vous faites'
            ],
            [
              'Ils / Elles',
              'Ils / Elles ont',
              'Ils / Elles font'
            ]
        ]
      },
      { type: 'heading', text: '2. Les expressions avec avoir : besoins, désirs et sensations' },
      {
        type: 'paragraph',
        text:
          'En français, de nombreux besoins, désirs et sensations s’expriment avec le verbe avoir, même lorsque le portugais utilise le verbe être ou une construction différente. ' +
          'Deux structures particulièrement importantes sont avoir besoin de et avoir envie de. ' +
          'Elles peuvent toutes les deux être suivies d’un nom ou d’un verbe à l’infinitif, toujours avec la préposition de. ' +
          'Devant une voyelle ou un h muet, de devient d’.'
      },
      {
        type: 'table',
        headers: ['Expression', 'Exemple en français', 'Signification'],
        rows: [
            [
              'Besoin',
              'J’ai besoin de repos.',
              'Avoir besoin de quelque chose.'
            ],
            [
              'Besoin de faire quelque chose',
              'J’ai besoin de travailler.',
              'Avoir besoin de réaliser une action.'
            ],
            [
              'Désir',
              'J’ai envie d’un café.',
              'Avoir envie de quelque chose.'
            ],
            [
              'Désir de faire quelque chose',
              'J’ai envie de voyager.',
              'Avoir envie de réaliser une action.'
            ],
            [
              'Faim',
              'J’ai faim.',
              'Avoir faim.'
            ],
            [
              'Soif',
              'J’ai soif.',
              'Avoir soif.'
            ],
            [
              'Froid',
              'J’ai froid.',
              'Ressentir le froid.'
            ],
            [
              'Chaud',
              'J’ai chaud.',
              'Ressentir la chaleur.'
            ],
            [
              'Sommeil',
              'J’ai sommeil.',
              'Avoir envie de dormir.'
            ],
            [
              'Peur',
              'J’ai peur des araignées.',
              'Ressentir de la peur.'
            ]
        ]
      },
      { type: 'heading', text: '3. Les expressions avec faire et il fait' },
      {
        type: 'paragraph',
        text:
          'Le verbe faire apparaît dans de nombreuses expressions figées et activités quotidiennes. ' +
          'Sa traduction littérale ne correspond pas toujours à la construction utilisée en portugais. ' +
          'Une utilisation particulièrement importante est il fait, employée de manière impersonnelle pour décrire les conditions météorologiques. ' +
          'Dans ce cas, il ne désigne ni une personne ni un objet : c’est simplement le sujet grammatical de la phrase.'
      },
      {
        type: 'table',
        headers: ['Expression en français', 'Signification', 'Utilisation'],
        rows: [
            [
              'faire du sport',
              'Pratiquer une activité physique.',
              'Activités physiques.'
            ],
            [
              'faire l’épicerie',
              'Acheter des aliments et des produits du quotidien.',
              'Expression courante au Québec.'
            ],
            [
              'faire les courses',
              'Acheter des aliments et d’autres produits.',
              'Autre formulation très utilisée en France.'
            ],
            [
              'faire la cuisine',
              'Préparer des repas.',
              'Activités domestiques.'
            ],
            [
              'faire attention à',
              'Faire preuve de prudence ou être attentif.',
              'Attention et précaution.'
            ],
            [
              'Il fait beau.',
              'Les conditions météorologiques sont agréables.',
              'Météo.'
            ],
            [
              'Il fait chaud.',
              'La température ambiante est élevée.',
              'Météo.'
            ],
            [
              'Il fait froid.',
              'La température ambiante est basse.',
              'Météo.'
            ],
            [
              'Il fait frais.',
              'La température est agréable ou légèrement basse.',
              'Météo.'
            ],
            [
              'Il fait 20 °C.',
              'Indiquer la température.',
              'Météo et température.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Toutes les expressions météorologiques ne s’utilisent pas avec faire. On utilise également « Il y a du vent », « Il pleut » et « Il neige ». ' +
          'La question habituelle pour parler de la météo est « Quel temps fait-il ? ».'
      },
      { type: 'heading', text: '4. Les pièges fréquents pour les lusophones' },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Ne confondez pas avoir et il fait pour parler de la température',
        text:
          'La différence est importante : « J’ai froid » décrit la sensation d’une personne, tandis que « Il fait froid » décrit la température ambiante. ' +
          'Il en va de même pour « J’ai chaud » et « Il fait chaud ». ' +
          'Ne traduisez pas non plus littéralement les expressions portugaises correspondant à avoir faim ou avoir sommeil. En français, utilisez avoir et non être.'
      },
      {
        type: 'list',
        items: [
          'Ne dites pas « Je suis faim » pour exprimer la faim. La forme correcte est « J’ai faim ».',
          'Ne dites pas « Je suis besoin de repos » pour exprimer un besoin. Utilisez « J’ai besoin de repos ».',
            'Ne confondez pas « J’ai envie de partir » et « Je veux partir ». ' +
            'La première construction exprime un désir ou une envie ; la deuxième exprime directement une intention.',
          'Ne dites pas « Je fais froid » pour exprimer votre sensation de froid. Utilisez « J’ai froid » ou « Il fait froid », selon le contexte.',
          'Pour indiquer la température, préférez « Il fait 20 °C » à une construction littérale comme « C’est 20 degrés ».',
          'Ne dites pas « Il fait pleut ». Utilisez « Il pleut ».'
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Ce qu’il faut pratiquer pour l’examen',
        text:
          'Entraînez-vous à utiliser ces expressions dans des situations quotidiennes : expliquer vos besoins, parler de vos envies, décrire vos sensations, présenter vos activités et discuter de la météo. ' +
          'En compréhension orale, reconnaissez les expressions fréquentes comme « J’ai besoin de », « J’ai envie de » et « Il fait froid ». ' +
          'En expression orale et écrite, apprenez à les utiliser spontanément et à construire des phrases complètes avec les verbes avoir et faire.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme que, pour indiquer la température, on utilise il fait avec un sujet impersonnel (il fait froid, il fait beau, il fait 18 °C) et non c’est 18 °C, calque de l’anglais. ' +
          'Usito confirme que faire l’épicerie est un emploi québécois, au sens d’acheter des provisions. ' +
          'La page du Robert indiquée ne contient que des exemples de avoir froid. ' +
          'La page du Portail linguistique du Canada sur besoin n’a pas pu être ouverte à cause d’une vérification de sécurité du site : avoir besoin de et avoir envie de, les sensations avec avoir (faim, soif, sommeil, peur) et la différence entre J’ai froid et Il fait froid ne sont donc pas confirmés par une source ouverte. ' +
          'Il n’y a pas non plus de source pour faire les courses comme forme employée en France, ni pour les recommandations de préparation au TEF Canada et au TCF Canada : ce sont des suggestions de préparation, pas des exigences des épreuves.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'OQLF – C’est 18 degrés : construção calcada do inglês, desaconselhada',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/23804/les-emprunts-a-langlais/emprunts-syntaxiques/cest-18-degres-construction-anglaise-deconseillee'
    },
    {
      title: 'Portail linguistique du Canada – Besoin : construction avoir besoin de',
      url: 'https://nos-langues.canada.ca/fr/juridictionnaire/besoin'
    },
    {
      title: 'Usito – Faire l’épicerie : usage québécois',
      url: 'https://usito.usherbrooke.ca/d%C3%A9finitions/%C3%A9picerie/lexies'
    },
    {
      title: 'Le Robert – avoir froid : exemplos de uso',
      url: 'https://dictionnaire.lerobert.com/definition/avoir-froid'
    }
  ]
}

export default content
