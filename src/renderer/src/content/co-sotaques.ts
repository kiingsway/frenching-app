import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'co-sotaques',

  pt: {
    title: 'Sotaques: França, Québec, África francófona, Bélgica e Suíça',
    summary:
      'Os áudios podem trazer vozes de diferentes regiões francófonas, sobretudo nos níveis mais altos. ' +
      'Você não precisa imitar nenhum sotaque, mas precisa reconhecer as diferenças mais comuns para não se perder quando a pronúncia não é a dos áudios de curso.',
    blocks: [
      { type: 'heading', text: 'Por que treinar sotaques' },
      {
        type: 'paragraph',
        text:
          'A maior parte dos materiais de curso usa um francês padrão, lento e claro. No Canadá você vai ouvir o francês do Québec e do Canadá atlântico, ' +
          'e no dia a dia (e às vezes na prova) aparecem também falantes da Bélgica, da Suíça e da África. ' +
          'Quem só treinou com um tipo de voz se assusta com o primeiro sotaque diferente.'
      },

      { type: 'heading', text: 'As diferenças mais marcantes' },
      {
        type: 'table',
        headers: ['Região', 'O que muda na pronúncia', 'Vocabulário típico'],
        rows: [
          [
            'Québec',
            'O t e o d antes de i e u soam como "ts" e "dz" (tu, "você", soa "tsu"; dire, "dizer", soa "dzire"); vogais mais longas e abertas',
            'char (carro), magasiner (fazer compras), fin de semaine (fim de semana)'
          ],
          [
            'Bélgica',
            'Ritmo e entonação próprios; algumas vogais mais longas',
            'septante (70), nonante (90), "s’il vous plaît" (por favor; lá, também "aqui está") ao entregar algo'
          ],
          [
            'Suíça',
            'Fala mais pausada, vogais alongadas no fim das palavras',
            'septante (70), huitante (80, em alguns cantões), nonante (90), le natel (celular)'
          ],
          [
            'África francófona',
            'O r costuma ser vibrado; sílabas pronunciadas de forma mais regular',
            'Varia muito por país; em geral próximo do francês padrão, com expressões locais'
          ]
        ]
      },

      { type: 'heading', text: 'Números que mudam' },
      {
        type: 'paragraph',
        text:
          'Na Bélgica e na Suíça, 70 é septante e 90 é nonante, em vez de soixante-dix e quatre-vingt-dix. ' +
          'Em alguns cantões suíços, 80 é huitante. Num anúncio com preço ou horário, isso pode decidir a resposta.'
      },

      { type: 'heading', text: 'O francês do Québec no dia a dia' },
      {
        type: 'list',
        items: [
          '"Tu" depois do verbo marca uma pergunta na fala informal: "Tu viens-tu ?" quer dizer "Tu viens ?" (Você vem?).',
          '"Pantoute" significa "pas du tout" (de jeito nenhum), e "c’est plate" significa "c’est ennuyeux" (é chato).',
          '"Bienvenue" (bem-vindo) também é a resposta para "merci" (obrigado), como "de nada".',
          'As refeições: déjeuner (café da manhã), dîner (almoço) e souper (jantar).'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'O foco é a pronúncia',
        text:
          'Na prova, não se preocupe com vocabulário regional raro: as perguntas cobram o sentido geral. ' +
          'O que mais atrapalha é a pronúncia diferente, então é o ouvido que precisa de treino.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Como treinar',
        text:
          'Varie as fontes: Radio-Canada para o Québec, RTBF para a Bélgica, RTS para a Suíça e RFI para a África francófona. ' +
          'Dez minutos por dia com uma voz diferente já fazem diferença.'
      }
    ]
  },

  fr: {
    title: 'Les accents : France, Québec, Afrique francophone, Belgique et Suisse',
    summary:
      'Les documents peuvent faire entendre des voix de différentes régions francophones, surtout aux niveaux les plus élevés. ' +
      'Vous n’avez pas besoin d’imiter un accent, mais vous devez reconnaître les différences les plus courantes pour ne pas vous perdre quand la prononciation n’est pas celle des manuels.',
    blocks: [
      { type: 'heading', text: 'Pourquoi s’entraîner aux accents' },
      {
        type: 'paragraph',
        text:
          'La plupart des manuels utilisent un français standard, lent et clair. Au Canada, vous entendrez le français du Québec et du Canada atlantique, ' +
          'et au quotidien (parfois aussi à l’examen) des locuteurs de Belgique, de Suisse et d’Afrique. ' +
          'Si vous ne vous êtes entraîné qu’avec un seul type de voix, le premier accent différent peut vous déstabiliser.'
      },

      { type: 'heading', text: 'Les différences les plus marquantes' },
      {
        type: 'table',
        headers: ['Région', 'Ce qui change dans la prononciation', 'Vocabulaire typique'],
        rows: [
          [
            'Québec',
            'Le t et le d devant i et u se prononcent « ts » et « dz » (tu se dit « tsu », dire se dit « dzire ») ; voyelles plus longues et plus ouvertes',
            'un char (une voiture), magasiner (faire les magasins), la fin de semaine (le week-end)'
          ],
          [
            'Belgique',
            'Un rythme et une intonation particuliers ; certaines voyelles plus longues',
            'septante, nonante, « s’il vous plaît » pour tendre quelque chose'
          ],
          [
            'Suisse',
            'Un débit plus posé, des voyelles allongées en fin de mot',
            'septante, huitante (dans certains cantons), nonante, le natel (le portable)'
          ],
          [
            'Afrique francophone',
            'Le r souvent roulé ; des syllabes prononcées de façon plus régulière',
            'Très variable selon les pays ; en général proche du français standard, avec des expressions locales'
          ]
        ]
      },

      { type: 'heading', text: 'Des nombres qui changent' },
      {
        type: 'paragraph',
        text:
          'En Belgique et en Suisse, on dit septante et nonante au lieu de soixante-dix et quatre-vingt-dix. ' +
          'Dans certains cantons suisses, on dit aussi huitante pour quatre-vingts. Dans une annonce avec un prix ou un horaire, ça peut décider de la réponse.'
      },

      { type: 'heading', text: 'Le français du Québec au quotidien' },
      {
        type: 'list',
        items: [
          '« Tu » après le verbe marque une question à l’oral familier : « Tu viens-tu ? » veut dire « Tu viens ? ».',
          '« Pantoute » veut dire « pas du tout », et « c’est plate » veut dire « c’est ennuyeux ».',
          '« Bienvenue » sert aussi à répondre à « merci », comme « de rien ».',
          'Les repas : le déjeuner (le petit-déjeuner), le dîner (le déjeuner) et le souper (le dîner).'
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'L’essentiel, c’est la prononciation',
        text:
          'À l’examen, ne vous inquiétez pas du vocabulaire régional rare : les questions portent sur le sens général. ' +
          'Ce qui gêne le plus, c’est une prononciation différente : c’est donc l’oreille qu’il faut entraîner.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Comment s’entraîner',
        text:
          'Variez les sources : Radio-Canada pour le Québec, la RTBF pour la Belgique, la RTS pour la Suisse et RFI pour l’Afrique francophone. ' +
          'Dix minutes par jour avec une voix différente font déjà la différence.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'Wikipédia – Français québécois',
      url: 'https://fr.wikipedia.org/wiki/Fran%C3%A7ais_qu%C3%A9b%C3%A9cois'
    },
    {
      title: 'Wikipédia – Français de Belgique',
      url: 'https://fr.wikipedia.org/wiki/Fran%C3%A7ais_de_Belgique'
    },
    {
      title: 'Wikipédia – Français de Suisse',
      url: 'https://fr.wikipedia.org/wiki/Fran%C3%A7ais_de_Suisse'
    },
    {
      title: 'Wikipédia – Français d’Afrique',
      url: 'https://fr.wikipedia.org/wiki/Fran%C3%A7ais_d%27Afrique'
    },
    {
      title: 'Université Toulouse – Les accents de la francophonie (cours de prononciation FLE)',
      url: 'https://pipc-uoh.univ-tlse2.fr/08/TRSCRPT/PEPF_M04-0310_accents-francophonie.pdf'
    }
  ]
}

export default content
