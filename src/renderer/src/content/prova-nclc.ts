import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'prova-nclc',

  pt: {
    title: 'Sistema NCLC e conversão de notas',
    summary:
      'O IRCC não olha diretamente para a nota do TEF ou do TCF: ele converte cada nota em um nível NCLC. ' +
      'É o NCLC de cada habilidade que decide se você cumpre os requisitos e quantos pontos ganha.',
    blocks: [
      { type: 'heading', text: 'O que é o NCLC' },
      {
        type: 'paragraph',
        text:
          'NCLC significa Niveaux de compétence linguistique canadiens. É a escala oficial do Canadá para medir o francês de adultos; ' +
          'a versão em inglês se chama CLB (Canadian Language Benchmarks). As duas são paralelas: NCLC 7 em francês vale o mesmo que CLB 7 em inglês.'
      },
      {
        type: 'list',
        items: [
          'São 12 níveis, divididos em 3 estágios de 4 níveis cada.',
          'Cada uma das 4 habilidades recebe seu próprio nível: compreensão oral, compreensão escrita, expressão oral e expressão escrita.',
          'Não existe "NCLC geral": não se faz média entre as habilidades.'
        ]
      },
      {
        type: 'table',
        headers: ['Estágio', 'Níveis', 'Em termos práticos'],
        rows: [
          ['I – Básico', 'NCLC 1 a 4', 'Situações simples e previsíveis do dia a dia'],
          ['II – Intermediário', 'NCLC 5 a 8', 'Comunicação independente em situações sociais, de estudo e de trabalho'],
          ['III – Avançado', 'NCLC 9 a 12', 'Situações complexas, abstratas e exigentes']
        ]
      },

      { type: 'heading', text: 'Quanto você precisa' },
      {
        type: 'table',
        headers: ['Programa', 'Mínimo exigido'],
        rows: [
          ['Categoria de francês do Express Entry', 'NCLC 7 nas 4 habilidades'],
          ['Federal Skilled Worker (primeira língua)', 'NCLC 7 nas 4 habilidades'],
          ['Canadian Experience Class', 'NCLC 7 (empregos TEER 0 e 1) ou NCLC 5 (TEER 2 e 3) nas 4 habilidades'],
          ['Federal Skilled Trades', 'NCLC 5 em oral (falar e ouvir) e NCLC 4 em leitura e escrita']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'A habilidade mais fraca decide',
        text:
          'Se você tirar NCLC 9 em três habilidades e NCLC 6 em uma, não cumpre o requisito de NCLC 7. ' +
          'Por isso vale mais equilibrar as quatro do que brilhar em uma só.'
      },

      { type: 'heading', text: 'Tabela de conversão: TCF Canada' },
      {
        type: 'paragraph',
        text: 'Compreensões são notadas de 100 a 699; expressões, de 0 a 20.'
      },
      {
        type: 'table',
        headers: ['NCLC', 'Compreensão oral', 'Compreensão escrita', 'Expressão oral', 'Expressão escrita'],
        rows: [
          ['10+', '549–699', '549–699', '16–20', '16–20'],
          ['9', '523–548', '524–548', '14–15', '14–15'],
          ['8', '503–522', '499–523', '12–13', '12–13'],
          ['7', '458–502', '453–498', '10–11', '10–11'],
          ['6', '398–457', '406–452', '7–9', '7–9'],
          ['5', '369–397', '375–405', '6', '6'],
          ['4', '331–368', '342–374', '4–5', '4–5']
        ]
      },

      { type: 'heading', text: 'Tabela de conversão: TEF Canada' },
      {
        type: 'paragraph',
        text:
          'Use a nota da coluna "Équivalence ancien score" do seu certificado. ' +
          'Compreensão oral vai até 360, compreensão escrita até 300 e as expressões até 450.'
      },
      {
        type: 'table',
        headers: ['NCLC', 'Compreensão oral', 'Compreensão escrita', 'Expressão oral', 'Expressão escrita'],
        rows: [
          ['10', '316–360', '263–300', '393–450', '393–450'],
          ['9', '298–315', '248–262', '371–392', '371–392'],
          ['8', '280–297', '233–247', '349–370', '349–370'],
          ['7', '249–279', '207–232', '310–348', '310–348'],
          ['6', '217–248', '181–206', '271–309', '271–309'],
          ['5', '181–216', '151–180', '226–270', '226–270'],
          ['4', '145–180', '121–150', '181–225', '181–225']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Atenção ao certificado do TEF',
        text:
          'O certificado do TEF mostra duas notas: "Score / 699" e "Équivalence ancien score". ' +
          'O IRCC pede apenas a "Équivalence ancien score". Para provas feitas entre 11/12/2023 e 06/05/2024 houve uma conversão temporária diferente, ' +
          'que já foi desfeita; quem fez a prova nesse período deve atualizar o perfil com as notas novas.'
      },

      { type: 'heading', text: 'Como ler o seu resultado' },
      {
        type: 'list',
        items: [
          'Pegue a nota de cada habilidade separadamente.',
          'Procure em qual faixa da tabela ela cai: esse é o NCLC daquela habilidade.',
          'Compare cada um dos 4 NCLC com o mínimo do programa.',
          'O resultado precisa ter menos de 2 anos tanto ao criar o perfil no Express Entry quanto ao enviar o pedido de residência.'
        ]
      },
      {
        type: 'table',
        headers: ['Exemplo (TCF Canada)', 'Nota', 'NCLC'],
        rows: [
          ['Compreensão oral', '470', '7'],
          ['Compreensão escrita', '510', '8'],
          ['Expressão oral', '12', '8'],
          ['Expressão escrita', '9', '6']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Neste exemplo, a pessoa não entra na categoria de francês: a expressão escrita ficou em NCLC 6. ' +
          'Bastariam 10 pontos (de 20) na escrita para chegar ao NCLC 7.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica',
        text:
          'Treine com margem. Se o NCLC 7 do TCF começa em 10/20 na escrita, mire em 12 nos simulados. ' +
          'No dia da prova, nervosismo e um tema difícil costumam tirar alguns pontos.'
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'As tabelas mudam de tempos em tempos. Antes de se inscrever ou de preencher o perfil, confira a versão atual na página do IRCC.'
      }
    ]
  },

  fr: {
    title: 'Le système NCLC et la conversion des résultats',
    summary:
      'IRCC ne regarde pas directement votre résultat au TEF ou au TCF : il convertit chaque note en niveau NCLC. ' +
      'C’est le NCLC de chaque compétence qui détermine si vous remplissez les exigences et combien de points vous obtenez.',
    blocks: [
      { type: 'heading', text: 'Qu’est-ce que le NCLC ?' },
      {
        type: 'paragraph',
        text:
          'NCLC signifie Niveaux de compétence linguistique canadiens. C’est l’échelle officielle du Canada pour mesurer le français des adultes ; ' +
          'la version anglaise s’appelle CLB (Canadian Language Benchmarks). Les deux sont parallèles : le NCLC 7 en français équivaut au CLB 7 en anglais.'
      },
      {
        type: 'list',
        items: [
          'L’échelle compte 12 niveaux, répartis en 3 stades de 4 niveaux chacun.',
          'Chacune des 4 compétences reçoit son propre niveau : compréhension de l’oral, compréhension de l’écrit, expression orale et expression écrite.',
          'Il n’existe pas de « NCLC global » : on ne fait pas la moyenne des compétences.'
        ]
      },
      {
        type: 'table',
        headers: ['Stade', 'Niveaux', 'Concrètement'],
        rows: [
          ['I – Débutant', 'NCLC 1 à 4', 'Situations simples et prévisibles de la vie quotidienne'],
          ['II – Intermédiaire', 'NCLC 5 à 8', 'Communication autonome dans des situations sociales, d’études et de travail'],
          ['III – Avancé', 'NCLC 9 à 12', 'Situations complexes, abstraites et exigeantes']
        ]
      },

      { type: 'heading', text: 'De quel niveau avez-vous besoin ?' },
      {
        type: 'table',
        headers: ['Programme', 'Minimum exigé'],
        rows: [
          ['Catégorie francophone d’Entrée express', 'NCLC 7 dans les 4 compétences'],
          ['Travailleurs qualifiés (fédéral), première langue', 'NCLC 7 dans les 4 compétences'],
          ['Catégorie de l’expérience canadienne', 'NCLC 7 (emplois FEER 0 et 1) ou NCLC 5 (FEER 2 et 3) dans les 4 compétences'],
          ['Métiers spécialisés (fédéral)', 'NCLC 5 à l’oral (parler et écouter) et NCLC 4 en lecture et en écriture']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'C’est la compétence la plus faible qui compte',
        text:
          'Si vous obtenez le NCLC 9 dans trois compétences et le NCLC 6 dans une seule, vous ne remplissez pas l’exigence du NCLC 7. ' +
          'Il vaut donc mieux équilibrer les quatre que briller dans une seule.'
      },

      { type: 'heading', text: 'Grille de conversion : TCF Canada' },
      {
        type: 'paragraph',
        text: 'Les compréhensions sont notées de 100 à 699 ; les expressions, de 0 à 20.'
      },
      {
        type: 'table',
        headers: ['NCLC', 'Compréhension orale', 'Compréhension écrite', 'Expression orale', 'Expression écrite'],
        rows: [
          ['10+', '549–699', '549–699', '16–20', '16–20'],
          ['9', '523–548', '524–548', '14–15', '14–15'],
          ['8', '503–522', '499–523', '12–13', '12–13'],
          ['7', '458–502', '453–498', '10–11', '10–11'],
          ['6', '398–457', '406–452', '7–9', '7–9'],
          ['5', '369–397', '375–405', '6', '6'],
          ['4', '331–368', '342–374', '4–5', '4–5']
        ]
      },

      { type: 'heading', text: 'Grille de conversion : TEF Canada' },
      {
        type: 'paragraph',
        text:
          'Utilisez la note de la colonne « Équivalence ancien score » de votre attestation. ' +
          'La compréhension orale va jusqu’à 360, la compréhension écrite jusqu’à 300 et les expressions jusqu’à 450.'
      },
      {
        type: 'table',
        headers: ['NCLC', 'Compréhension orale', 'Compréhension écrite', 'Expression orale', 'Expression écrite'],
        rows: [
          ['10', '316–360', '263–300', '393–450', '393–450'],
          ['9', '298–315', '248–262', '371–392', '371–392'],
          ['8', '280–297', '233–247', '349–370', '349–370'],
          ['7', '249–279', '207–232', '310–348', '310–348'],
          ['6', '217–248', '181–206', '271–309', '271–309'],
          ['5', '181–216', '151–180', '226–270', '226–270'],
          ['4', '145–180', '121–150', '181–225', '181–225']
        ]
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Attention à l’attestation du TEF',
        text:
          'L’attestation du TEF affiche deux notes : « Score / 699 » et « Équivalence ancien score ». ' +
          'IRCC demande uniquement l’« Équivalence ancien score ». Pour les examens passés entre le 11/12/2023 et le 06/05/2024, une conversion temporaire différente a été appliquée, ' +
          'puis annulée ; les personnes concernées doivent mettre à jour leur profil avec les nouvelles notes.'
      },

      { type: 'heading', text: 'Comment lire votre résultat' },
      {
        type: 'list',
        items: [
          'Prenez la note de chaque compétence séparément.',
          'Cherchez dans quelle tranche de la grille elle se situe : c’est le NCLC de cette compétence.',
          'Comparez chacun des 4 NCLC avec le minimum du programme.',
          'Le résultat doit dater de moins de 2 ans au moment de créer le profil Entrée express et au moment de soumettre la demande de résidence permanente.'
        ]
      },
      {
        type: 'table',
        headers: ['Exemple (TCF Canada)', 'Note', 'NCLC'],
        rows: [
          ['Compréhension orale', '470', '7'],
          ['Compréhension écrite', '510', '8'],
          ['Expression orale', '12', '8'],
          ['Expression écrite', '9', '6']
        ]
      },
      {
        type: 'paragraph',
        text:
          'Dans cet exemple, la personne n’est pas admissible à la catégorie francophone : l’expression écrite est au NCLC 6. ' +
          'Il aurait suffi de 10 points (sur 20) à l’écrit pour atteindre le NCLC 7.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil',
        text:
          'Entraînez-vous avec une marge. Si le NCLC 7 du TCF commence à 10/20 à l’écrit, visez 12 aux examens blancs. ' +
          'Le jour de l’examen, le stress et un sujet difficile font souvent perdre quelques points.'
      },
      {
        type: 'callout',
        tone: 'warning',
        text:
          'Les grilles changent de temps en temps. Avant de vous inscrire ou de remplir votre profil, vérifiez la version actuelle sur la page d’IRCC.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables'],

  sources: [
    {
      title: 'IRCC – Express Entry: Language test results',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-test.html'
    },
    {
      title: 'IRCC – Express Entry for French-speaking skilled workers',
      url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit/temporary/eligibility/francophone-immigration-express-entry.html'
    },
    {
      title: 'IRCC – Comprendre les Niveaux de compétence linguistique canadiens (vidéo)',
      url: 'https://www.canada.ca/fr/immigration-refugies-citoyennete/nouvelles/video/competence-linguistique-canadiens.html'
    },
    {
      title: 'Centre des niveaux de compétence linguistique canadiens – NCLC, Français langue seconde pour adultes',
      url: 'https://publications.gc.ca/collections/collection_2010/cic/Ci51-194-2006-fra.pdf'
    },
    {
      title: 'French Test Simulator – Scores, Levels and NCLC',
      url: 'https://frenchtestsimulator.com/scores-levels-and-nclc/'
    }
  ]
}

export default content
