import type { FlashcardDeckDraft } from './types'

// Diferenças de gênero PT↔FR: palavras que são masculinas em um idioma e femininas no outro.
// Cada cartão mostra o gênero correto, a tradução e um exemplo para evitar erros com artigos e concordância.
// Substantivos que começam com vogal (l’arbre, l’adresse…) aparecem com un/une, porque o
// artigo l’ esconde o gênero.
const deck: FlashcardDeckDraft = {
  id: 'genre-different',
  title: 'Diferenças de gênero entre português e francês',
  description:
    '50 substantivos cujo gênero gramatical muda entre português e francês. Aprenda a identificar essas diferenças para evitar erros com artigos e concordância, do A1 ao C1.',
  sources: [
    {
      title: 'Office québécois de la langue française – L’accord dans le groupe nominal',
      url: 'https://www.oqlf.gouv.qc.ca/francisation/ordres_prof/capsules-grammaticales/accord-groupe-nominal.aspx'
    },
    {
      title: 'Usito – Dictionnaire de français québécois',
      url: 'https://usito.usherbrooke.ca/'
    },
    {
      title: 'Le Robert',
      url: 'https://dictionnaire.lerobert.com/'
    },
    {
      title: 'Lawless French',
      url: 'https://www.lawlessfrench.com/'
    },
    {
      title: 'TV5MONDE Langue française',
      url: 'https://langue-francaise.tv5monde.com/'
    }
  ],
  cards: [
    {
      fr: 'la voiture',
      pt: 'o carro',
      example: {
        fr: 'J’utilise la voiture pour aller au travail.',
        pt: 'Uso o carro para ir ao trabalho.'
      },
      note: 'Feminino em francês, masculino em português. No Québec, também se diz un char ou une auto (informal).'
    },
    {
      fr: 'le vélo',
      pt: 'a bicicleta',
      example: {
        fr: 'Je vais au travail à vélo pour économiser de l’argent.',
        pt: 'Vou ao trabalho de bicicleta para economizar dinheiro.'
      },
      note: 'Masculino em francês, feminino em português. À vélo = de bicicleta.'
    },
    {
      fr: 'la mer',
      pt: 'o mar',
      example: {
        fr: 'Nous aimons passer nos vacances au bord de la mer.',
        pt: 'Gostamos de passar nossas férias à beira-mar.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'le pont',
      pt: 'a ponte',
      example: {
        fr: 'Ce pont relie deux quartiers de la ville.',
        pt: 'Esta ponte liga dois bairros da cidade.'
      },
      note: 'Masculino em francês, feminino em português.'
    },
    {
      fr: 'la dent',
      pt: 'o dente',
      example: {
        fr: 'Je dois prendre rendez-vous chez le dentiste parce que j’ai mal à une dent.',
        pt: 'Preciso marcar uma consulta com o dentista porque estou com dor de dente.'
      },
      note: 'Feminino em francês (une dent), masculino em português (um dente).'
    },
    {
      fr: 'le voyage',
      pt: 'a viagem',
      example: {
        fr: 'Mon voyage au Québec m’a permis de découvrir une nouvelle culture.',
        pt: 'Minha viagem ao Québec me permitiu descobrir uma nova cultura.'
      },
      note: 'Masculino em francês, feminino em português. Faire un voyage = fazer uma viagem.'
    },
    {
      fr: 'la chaleur',
      pt: 'o calor',
      example: {
        fr: 'En été, la chaleur peut rendre les journées de travail difficiles.',
        pt: 'No verão, o calor pode tornar os dias de trabalho difíceis.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'un arbre',
      pt: 'a árvore',
      example: {
        fr: 'La ville prévoit de planter davantage d’arbres dans les espaces publics.',
        pt: 'A cidade planeja plantar mais árvores nos espaços públicos.'
      },
      note: 'Masculino em francês (un arbre), feminino em português (uma árvore). Com o artigo l’ (l’arbre), o gênero não aparece.'
    },
    {
      fr: 'la radio',
      pt: 'o rádio',
      example: {
        fr: 'J’écoute la radio en français pour améliorer ma compréhension orale.',
        pt: 'Escuto o rádio em francês para melhorar minha compreensão oral.'
      },
      note: 'Feminino em francês. Em português, o aparelho é masculino (o rádio), e a emissora é feminina (a rádio).'
    },
    {
      fr: 'le garage',
      pt: 'a garagem',
      example: {
        fr: 'Nous avons laissé la voiture dans le garage pendant la nuit.',
        pt: 'Deixamos o carro na garagem durante a noite.'
      },
      note: 'Masculino em francês, feminino em português.'
    },
    {
      fr: 'le pantalon',
      pt: 'a calça',
      example: {
        fr: 'Je cherche un pantalon confortable pour travailler.',
        pt: 'Estou procurando uma calça confortável para trabalhar.'
      },
      note: 'Masculino e singular em francês (un pantalon). Em português, costuma ser feminino e plural (as calças).'
    },
    {
      fr: 'la robe',
      pt: 'o vestido',
      example: {
        fr: 'Elle cherche une robe élégante pour la cérémonie.',
        pt: 'Ela procura um vestido elegante para a cerimônia.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'le doute',
      pt: 'a dúvida',
      example: {
        fr: 'J’ai un doute concernant les documents nécessaires pour ma demande.',
        pt: 'Tenho uma dúvida sobre os documentos necessários para minha solicitação.'
      },
      note: 'Masculino em francês, feminino em português. Avoir un doute = ter uma dúvida; sans doute = provavelmente.'
    },
    {
      fr: 'une adresse',
      pt: 'o endereço',
      example: {
        fr: 'Veuillez indiquer votre adresse actuelle au Canada.',
        pt: 'Por favor, informe seu endereço atual no Canadá.'
      },
      note: 'Feminino em francês (une adresse), masculino em português (um endereço). Com o artigo l’ (l’adresse), o gênero não aparece.'
    },
    {
      fr: 'la fin',
      pt: 'o fim',
      example: {
        fr: 'À la fin de l’année, nous ferons le bilan de nos progrès.',
        pt: 'No fim do ano, faremos um balanço dos nossos progressos.'
      },
      note: 'Feminino em francês, masculino em português. À la fin de = no final de.'
    },
    {
      fr: 'le matin',
      pt: 'a manhã',
      example: {
        fr: 'Je préfère étudier le français le matin, quand je suis plus concentré.',
        pt: 'Prefiro estudar francês de manhã, quando estou mais concentrado.'
      },
      note: 'Masculino em francês, feminino em português. Diz-se le matin, nunca la matin.'
    },
    {
      fr: 'le choix',
      pt: 'a escolha',
      example: {
        fr: 'Le choix d’un logement dépend souvent du budget et de l’emplacement.',
        pt: 'A escolha de uma moradia geralmente depende do orçamento e da localização.'
      },
      note: 'Masculino em francês, feminino em português. Faire un choix = fazer uma escolha.'
    },
    {
      fr: 'le repas',
      pt: 'a refeição',
      example: {
        fr: 'Il est important de prendre un repas équilibré avant de commencer sa journée.',
        pt: 'É importante fazer uma refeição equilibrada antes de começar o dia.'
      },
      note: 'Masculino em francês, feminino em português. Cuidado com os nomes das refeições: no Québec, le déjeuner é o café da manhã, le dîner é o almoço e le souper é o jantar; na França, le déjeuner é o almoço e le dîner é o jantar.'
    },
    {
      fr: 'la taille',
      pt: 'o tamanho',
      example: {
        fr: 'La taille de cet appartement est idéale pour une petite famille.',
        pt: 'O tamanho deste apartamento é ideal para uma família pequena.'
      },
      note: 'Feminino em francês, masculino em português. Também pode significar estatura (a altura de uma pessoa) ou cintura, conforme o contexto.'
    },
    {
      fr: 'le message',
      pt: 'a mensagem',
      example: {
        fr: 'J’ai reçu un message concernant mon rendez-vous de demain.',
        pt: 'Recebi uma mensagem sobre minha consulta de amanhã.'
      },
      note: 'Masculino em francês, feminino em português. Diz-se un message, nunca une message.'
    },
    {
      fr: 'la valeur',
      pt: 'o valor',
      example: {
        fr: 'La valeur de ce contrat est importante pour l’entreprise.',
        pt: 'O valor desse contrato é importante para a empresa.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'la peur',
      pt: 'o medo',
      example: {
        fr: 'J’ai peur de rater l’examen.',
        pt: 'Tenho medo de falhar na prova.'
      },
      note: 'Feminino em francês, masculino em português. Avoir peur de = ter medo de.'
    },
    {
      fr: 'la journée',
      pt: 'o dia',
      example: {
        fr: 'Je travaille toute la journée en fin de semaine.',
        pt: 'Trabalho o dia inteiro no fim de semana.'
      },
      note: 'Feminino em francês, masculino em português. Journée é o dia visto como duração (o dia inteiro); jour, que é masculino, é o dia como data ou unidade.'
    },
    {
      fr: 'une année',
      pt: 'o ano',
      example: {
        fr: 'Cette année, je veux atteindre le NCLC 7.',
        pt: 'Este ano, quero atingir o NCLC 7.'
      },
      note: 'Feminino em francês (une année), masculino em português (um ano). Com o artigo l’ (l’année), o gênero não aparece.'
    },
    {
      fr: 'la minute',
      pt: 'o minuto',
      example: {
        fr: 'Attends une minute, je vérifie mon courriel.',
        pt: 'Espera um minuto, vou verificar meu e-mail.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'la seconde',
      pt: 'o segundo',
      example: {
        fr: 'Une seconde, s’il vous plaît.',
        pt: 'Um segundo, por favor.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'la connaissance',
      pt: 'o conhecimento',
      example: {
        fr: 'La connaissance du français est essentielle pour le TEF Canada.',
        pt: 'O conhecimento do francês é essencial para o TEF Canada.'
      },
      note: 'Feminino em francês, masculino em português. Também significa pessoa conhecida: faire connaissance = conhecer alguém.'
    },
    {
      fr: 'la naissance',
      pt: 'o nascimento',
      example: {
        fr: 'Écrivez votre date de naissance sur le formulaire.',
        pt: 'Escreva sua data de nascimento no formulário.'
      },
      note: 'Feminino em francês, masculino em português. Date de naissance = data de nascimento.'
    },
    {
      fr: 'la croissance',
      pt: 'o crescimento',
      example: {
        fr: 'La croissance économique a ralenti cette année.',
        pt: 'O crescimento econômico desacelerou este ano.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'la reconnaissance',
      pt: 'o reconhecimento',
      example: {
        fr: 'La reconnaissance des diplômes étrangers peut prendre du temps.',
        pt: 'O reconhecimento de diplomas estrangeiros pode demorar.'
      },
      note: 'Feminino em francês, masculino em português. Também significa gratidão.'
    },
    {
      fr: 'la rivière',
      pt: 'o rio',
      example: {
        fr: 'Nous avons marché le long de la rivière.',
        pt: 'Caminhamos ao longo do rio.'
      },
      note: 'Feminino em francês, masculino em português. Le fleuve, que é masculino, é o rio que desemboca no mar.'
    },
    {
      fr: 'la glace',
      pt: 'o gelo',
      example: {
        fr: 'Il y a de la glace sur le trottoir.',
        pt: 'Há gelo na calçada.'
      },
      note: 'Feminino em francês, masculino em português. Sorvete: no Québec, la crème glacée; na França, une glace.'
    },
    {
      fr: 'la monnaie',
      pt: 'o troco',
      example: {
        fr: 'Vous avez de la monnaie pour le stationnement ?',
        pt: 'Você tem troco para o estacionamento?'
      },
      note: 'Feminino em francês, masculino em português. Também significa moeda (a moeda de um país).'
    },
    {
      fr: 'la banque',
      pt: 'o banco',
      example: {
        fr: 'Je dois passer à la banque avant midi.',
        pt: 'Preciso passar no banco antes do meio-dia.'
      },
      note: 'Feminino em francês, masculino em português. O banco de sentar é le banc.'
    },
    {
      fr: 'le lit',
      pt: 'a cama',
      example: {
        fr: 'Le lit est près de la fenêtre.',
        pt: 'A cama fica perto da janela.'
      },
      note: 'Masculino em francês, feminino em português.'
    },
    {
      fr: 'le couteau',
      pt: 'a faca',
      example: {
        fr: 'Passez-moi le couteau, s’il vous plaît.',
        pt: 'Passe-me a faca, por favor.'
      },
      note: 'Masculino em francês, feminino em português.'
    },
    {
      fr: 'une erreur',
      pt: 'o erro',
      example: {
        fr: 'Il y a une erreur dans mon formulaire.',
        pt: 'Há um erro no meu formulário.'
      },
      note: 'Feminino em francês (une erreur), masculino em português (um erro). Com o artigo l’ (l’erreur), o gênero não aparece.'
    },
    {
      fr: 'la blessure',
      pt: 'o ferimento',
      example: {
        fr: 'Il a une blessure au genou.',
        pt: 'Ele tem um ferimento no joelho.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'la fourchette',
      pt: 'o garfo',
      example: {
        fr: 'Mets la fourchette à gauche de l’assiette.',
        pt: 'Coloque o garfo à esquerda do prato.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'une assiette',
      pt: 'o prato',
      example: {
        fr: 'L’assiette est dans le lave-vaisselle.',
        pt: 'O prato está na lava-louças.'
      },
      note: 'Feminino em francês (une assiette), masculino em português (um prato). Com o artigo l’ (l’assiette), o gênero não aparece.'
    },
    {
      fr: 'la serviette de table',
      pt: 'o guardanapo',
      example: {
        fr: 'Une serviette de table, s’il vous plaît.',
        pt: 'Um guardanapo, por favor.'
      },
      note: 'Feminino em francês, masculino em português. Serviette sozinha costuma ser toalha.'
    },
    {
      fr: 'la carte',
      pt: 'o cartão',
      example: {
        fr: 'J’ai payé avec ma carte de débit.',
        pt: 'Paguei com meu cartão de débito.'
      },
      note: 'Feminino em francês, masculino em português. Carte também significa mapa e cardápio.'
    },
    {
      fr: 'la job',
      pt: 'o emprego',
      example: {
        fr: 'Elle a trouvé une job à temps partiel.',
        pt: 'Ela encontrou um emprego de meio período.'
      },
      note: 'Informal. No Québec, une job é feminino; na França, un job é masculino. Na linguagem mais formal, diz-se un emploi, que é masculino.'
    },
    {
      fr: 'la cheville',
      pt: 'o tornozelo',
      example: {
        fr: 'Il s’est tordu la cheville en jouant au soccer.',
        pt: 'Ele torceu o tornozelo jogando futebol.'
      },
      note: 'Feminino em francês, masculino em português.'
    },
    {
      fr: 'la rate',
      pt: 'o baço',
      example: {
        fr: 'Le médecin lui a dit de surveiller sa rate.',
        pt: 'O médico disse para ele monitorar o baço.'
      },
      note: 'Feminino em francês, masculino em português. Le rat, masculino, é o rato.'
    },
    {
      fr: 'le dos',
      pt: 'as costas',
      example: {
        fr: 'J’ai mal au dos après avoir magasiné.',
        pt: 'Estou com dor nas costas depois de fazer compras.'
      },
      note: 'Masculino singular em francês, feminino plural em português.'
    },
    {
      fr: 'un ongle',
      pt: 'a unha',
      example: {
        fr: 'Elle se coupe les ongles chaque semaine.',
        pt: 'Ela corta as unhas toda semana.'
      },
      note: 'Masculino em francês (un ongle), feminino em português (uma unha). Com o artigo l’ (l’ongle), o gênero não aparece.'
    },
    {
      fr: 'le poivre',
      pt: 'a pimenta',
      example: {
        fr: 'Mettez du poivre dans la soupe.',
        pt: 'Coloque pimenta na sopa.'
      },
      note: 'Masculino em francês, feminino em português. Poivre é a pimenta-do-reino; a pimenta ardida é le piment.'
    },
    {
      fr: 'le beurre',
      pt: 'a manteiga',
      example: {
        fr: 'Elle achète du beurre et du pain.',
        pt: 'Ela compra manteiga e pão.'
      },
      note: 'Masculino em francês, feminino em português.'
    },
    {
      fr: 'le fruit',
      pt: 'a fruta',
      example: {
        fr: 'Il mange un fruit chaque matin.',
        pt: 'Ele come uma fruta toda manhã.'
      },
      note: 'Masculino em francês, feminino em português.'
    }
  ]
}

export default deck
