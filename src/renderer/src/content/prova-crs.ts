import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'prova-crs',

  pt: {
    title: 'Pontuação CRS para francês',
    summary:
      'No Express Entry, cada candidato recebe uma nota no CRS (Comprehensive Ranking System), de até 1.200 pontos. ' +
      'O idioma é um dos fatores que mais pesam, e o francês pode render pontos de três formas diferentes.',
    blocks: [
      { type: 'heading', text: 'As três formas de o francês dar pontos' },
      {
        type: 'list',
        items: [
          'Como primeira língua oficial: até 136 pontos (34 por habilidade).',
          'Como segunda língua oficial, se a primeira for o inglês: até 24 pontos.',
          'Bônus por francês: até 50 pontos extras para quem tem NCLC 7 nas 4 habilidades.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Além disso, o nível de idioma multiplica outros fatores na "transferibilidade de habilidades", combinado com estudo ou experiência fora do Canadá.'
      },

      { type: 'heading', text: 'Primeira língua oficial (por habilidade)' },
      {
        type: 'table',
        headers: ['NCLC em cada habilidade', 'Sem cônjuge', 'Com cônjuge'],
        rows: [
          ['Abaixo de 4', '0', '0'],
          ['4 ou 5', '6', '6'],
          ['6', '9', '8'],
          ['7', '17', '16'],
          ['8', '23', '22'],
          ['9', '31', '29'],
          ['10 ou mais', '34', '32']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Onde está o salto',
        text:
          'Repare nos saltos de NCLC 6 para 7 (+8 por habilidade) e de 8 para 9 (+8). ' +
          'Subir as 4 habilidades de NCLC 7 para NCLC 9 rende 56 pontos só neste fator, para quem não tem cônjuge.'
      },

      { type: 'heading', text: 'Segunda língua oficial (por habilidade)' },
      {
        type: 'table',
        headers: ['NCLC/CLB em cada habilidade', 'Pontos'],
        rows: [
          ['4 ou menos', '0'],
          ['5 ou 6', '1'],
          ['7 ou 8', '3'],
          ['9 ou mais', '6']
        ]
      },
      {
        type: 'paragraph',
        text: 'O máximo é 24 pontos sem cônjuge e 22 com cônjuge.'
      },

      { type: 'heading', text: 'Bônus por francês' },
      {
        type: 'table',
        headers: ['Situação', 'Pontos extras'],
        rows: [
          ['NCLC 7+ nas 4 habilidades em francês e inglês CLB 4 ou menos (ou sem teste de inglês)', '25'],
          ['NCLC 7+ nas 4 habilidades em francês e inglês CLB 5+ nas 4 habilidades', '50']
        ]
      },

      { type: 'heading', text: 'Transferibilidade de habilidades' },
      {
        type: 'paragraph',
        text:
          'Esses pontos combinam o idioma com outro fator. Exigem pelo menos NCLC 7, e o valor máximo só vem com NCLC 9 nas 4 habilidades. ' +
          'O total desta parte é limitado a 100 pontos.'
      },
      {
        type: 'table',
        headers: ['Combinação', 'NCLC 7+ (alguma habilidade abaixo de 9)', 'NCLC 9+ nas 4'],
        rows: [
          ['Curso pós-secundário de 1 ano ou mais', '13', '25'],
          ['Dois diplomas (um de 3+ anos), mestrado ou doutorado', '25', '50'],
          ['1 ou 2 anos de experiência fora do Canadá', '13', '25'],
          ['3+ anos de experiência fora do Canadá', '25', '50']
        ]
      },

      { type: 'heading', text: 'Exemplos (sem cônjuge, francês como primeira língua)' },
      {
        type: 'table',
        headers: ['Perfil', 'Primeira língua', 'Segunda língua', 'Bônus', 'Total do idioma'],
        rows: [
          ['NCLC 7 nas 4, sem inglês', '68', '0', '25', '93'],
          ['NCLC 9 nas 4, sem inglês', '124', '0', '25', '149'],
          ['NCLC 9 nas 4, inglês CLB 5 nas 4', '124', '4', '50', '178']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Os totais não incluem a transferibilidade, que pode somar até 100 pontos a mais conforme sua formação e experiência.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'NCLC 7 é o portão; acima dele são pontos',
        text:
          'Para entrar na categoria de francês dos sorteios, basta NCLC 7 nas 4 habilidades. Mas os sorteios são decididos pela nota CRS, ' +
          'e a nota de corte varia de um sorteio para outro. Cada nível acima de 7 aumenta suas chances.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Vale a pena fazer um teste de inglês?',
        text:
          'Se você já tem NCLC 7 em francês, um teste de inglês com CLB 5 nas 4 habilidades dobra o bônus (de 25 para 50) e ainda soma pontos de segunda língua.'
      }
    ]
  },

  fr: {
    title: 'Points CRS pour le français',
    summary:
      'Dans Entrée express, chaque candidat reçoit une note au SCG (Système de classement global, CRS en anglais), jusqu’à 1 200 points. ' +
      'La langue est l’un des facteurs les plus importants, et le français peut rapporter des points de trois façons.',
    blocks: [
      { type: 'heading', text: 'Les trois façons dont le français rapporte des points' },
      {
        type: 'list',
        items: [
          'Comme première langue officielle : jusqu’à 136 points (34 par compétence).',
          'Comme deuxième langue officielle, si la première est l’anglais : jusqu’à 24 points.',
          'Points supplémentaires pour le français : jusqu’à 50 points pour le NCLC 7 dans les 4 compétences.'
        ]
      },
      {
        type: 'paragraph',
        text:
          'De plus, le niveau de langue multiplie d’autres facteurs dans la « transférabilité des compétences », combiné aux études ou à l’expérience hors du Canada.'
      },

      { type: 'heading', text: 'Première langue officielle (par compétence)' },
      {
        type: 'table',
        headers: ['NCLC dans chaque compétence', 'Sans conjoint', 'Avec conjoint'],
        rows: [
          ['Moins de 4', '0', '0'],
          ['4 ou 5', '6', '6'],
          ['6', '9', '8'],
          ['7', '17', '16'],
          ['8', '23', '22'],
          ['9', '31', '29'],
          ['10 ou plus', '34', '32']
        ]
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Où se trouve le saut',
        text:
          'Remarquez les sauts du NCLC 6 au 7 (+8 par compétence) et du 8 au 9 (+8). ' +
          'Passer les 4 compétences du NCLC 7 au NCLC 9 rapporte 56 points rien que pour ce facteur, sans conjoint.'
      },

      { type: 'heading', text: 'Deuxième langue officielle (par compétence)' },
      {
        type: 'table',
        headers: ['NCLC/CLB dans chaque compétence', 'Points'],
        rows: [
          ['4 ou moins', '0'],
          ['5 ou 6', '1'],
          ['7 ou 8', '3'],
          ['9 ou plus', '6']
        ]
      },
      {
        type: 'paragraph',
        text: 'Le maximum est de 24 points sans conjoint et de 22 avec conjoint.'
      },

      { type: 'heading', text: 'Points supplémentaires pour le français' },
      {
        type: 'table',
        headers: ['Situation', 'Points supplémentaires'],
        rows: [
          ['NCLC 7+ dans les 4 compétences en français et anglais CLB 4 ou moins (ou sans test d’anglais)', '25'],
          ['NCLC 7+ dans les 4 compétences en français et anglais CLB 5+ dans les 4 compétences', '50']
        ]
      },

      { type: 'heading', text: 'Transférabilité des compétences' },
      {
        type: 'paragraph',
        text:
          'Ces points combinent la langue avec un autre facteur. Ils exigent au moins le NCLC 7, et la valeur maximale n’est atteinte qu’avec le NCLC 9 dans les 4 compétences. ' +
          'Le total de cette partie est plafonné à 100 points.'
      },
      {
        type: 'table',
        headers: ['Combinaison', 'NCLC 7+ (une compétence sous 9)', 'NCLC 9+ dans les 4'],
        rows: [
          ['Études postsecondaires d’un an ou plus', '13', '25'],
          ['Deux diplômes (dont un de 3 ans ou plus), maîtrise ou doctorat', '25', '50'],
          ['1 ou 2 ans d’expérience hors du Canada', '13', '25'],
          ['3 ans ou plus d’expérience hors du Canada', '25', '50']
        ]
      },

      { type: 'heading', text: 'Exemples (sans conjoint, français comme première langue)' },
      {
        type: 'table',
        headers: ['Profil', 'Première langue', 'Deuxième langue', 'Points suppl.', 'Total langue'],
        rows: [
          ['NCLC 7 dans les 4, sans anglais', '68', '0', '25', '93'],
          ['NCLC 9 dans les 4, sans anglais', '124', '0', '25', '149'],
          ['NCLC 9 dans les 4, anglais CLB 5 dans les 4', '124', '4', '50', '178']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Ces totaux n’incluent pas la transférabilité, qui peut ajouter jusqu’à 100 points selon votre formation et votre expérience.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Le NCLC 7 ouvre la porte ; au-delà, ce sont des points',
        text:
          'Pour entrer dans la catégorie francophone des tirages, le NCLC 7 dans les 4 compétences suffit. Mais les tirages se décident sur la note SCG, ' +
          'et la note de passage varie d’un tirage à l’autre. Chaque niveau au-dessus de 7 augmente vos chances.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Faut-il passer un test d’anglais ?',
        text:
          'Si vous avez déjà le NCLC 7 en français, un test d’anglais avec CLB 5 dans les 4 compétences double les points supplémentaires (de 25 à 50) et ajoute des points de deuxième langue.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'IRCC – Comprehensive Ranking System (CRS) criteria',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/crs-criteria.html'
    },
    {
      title: 'IRCC – Express Entry for French-speaking skilled workers',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/eligibility/francophone-immigration-express-entry.html'
    },
    {
      title: 'Berlitz – How French language points work in Express Entry',
      url: 'https://www.berlitz.com/en-ca/blog/how-french-language-points-work-express-entry-tef-canada-crs-score'
    }
  ]
}

export default content
