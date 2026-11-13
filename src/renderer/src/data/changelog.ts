// Novidades do app (Configurações → Sobre → Novidades), no formato do Keep a Changelog
// (https://keepachangelog.com), em português e em francês.
// Regra (CLAUDE.md): toda mudança que quem usa o app percebe ganha uma entrada aqui, no
// mesmo commit. Versões só com mudanças internas (workflow, documentação técnica) ficam
// de fora. A versão mais nova fica no topo.

export type ChangeType = 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security'

// Ordem das seções dentro de cada versão, como no Keep a Changelog
export const CHANGE_TYPES: ChangeType[] = [
  'added',
  'changed',
  'deprecated',
  'removed',
  'fixed',
  'security'
]

export const CHANGE_LABELS: Record<ChangeType, { pt: string; fr: string }> = {
  added: { pt: 'Adicionado', fr: 'Ajouté' },
  changed: { pt: 'Modificado', fr: 'Modifié' },
  deprecated: { pt: 'Obsoleto', fr: 'Obsolète' },
  removed: { pt: 'Removido', fr: 'Supprimé' },
  fixed: { pt: 'Corrigido', fr: 'Corrigé' },
  security: { pt: 'Segurança', fr: 'Sécurité' }
}

export interface ChangeText {
  pt: string
  fr: string
}

export interface ChangelogEntry {
  version: string
  // AAAA-MM-DD
  date: string
  changes: Partial<Record<ChangeType, ChangeText[]>>
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: '1.4.2',
    date: '2026-11-12',
    changes: {
      added: [
        {
          pt: '62 novas páginas de estudo no Painel: 15 em Gramática — Intermediário (B1), 12 em Gramática — Avançado (B2–C1), 16 em Vocabulário temático, 12 em Funções comunicativas e 7 em Expressão oral — Competências. Parte do áudio dessas páginas ainda vai ser gerada.',
          fr: '62 nouvelles fiches d’étude dans le Tableau de bord : 15 en Grammaire — Intermédiaire (B1), 12 en Grammaire — Avancé (B2–C1), 16 en Vocabulaire thématique, 12 en Fonctions communicatives et 7 en Expression orale — Compétences. Une partie de l’audio de ces fiches sera générée plus tard.'
        },
        {
          pt: 'Busca no Painel: digite parte do título de um tópico para ver só os tópicos que batem, com as seções já abertas. Maiúsculas e acentos não fazem diferença, e Esc limpa a busca.',
          fr: 'Recherche dans le Tableau de bord : tapez une partie du titre d’un sujet pour n’afficher que les sujets correspondants, avec les sections déjà ouvertes. Les majuscules et les accents ne comptent pas, et Échap efface la recherche.'
        },
        {
          pt: 'Na Compreensão escrita, o nível A1 e um primeiro texto dele: o horário e os serviços de uma farmácia, com 6 questões, para começar pelo mais fácil.',
          fr: 'En Compréhension écrite, le niveau A1 et un premier texte de ce niveau : les heures d’ouverture et les services d’une pharmacie, avec 6 questions, pour commencer par le plus facile.'
        }
      ],
      changed: [
        {
          pt: 'Páginas de “Conhecendo a prova” atualizadas com as regras oficiais de 2026: a suspensão dos pedidos de nova correção da expressão oral e escrita do TCF Canada (de setembro de 2026 ao outono de 2027), o prazo de 20 dias entre duas provas do TCF, a mudança no cálculo do CRS de 3 de novembro de 2026 e a validade do resultado.',
          fr: 'Fiches de « Connaître l’examen » mises à jour selon les règles officielles de 2026 : la suspension des demandes de recorrection de l’expression orale et écrite du TCF Canada (de septembre 2026 à l’automne 2027), le délai de 20 jours entre deux passations du TCF, le changement du calcul du SCG du 3 novembre 2026 et la validité des résultats.'
        }
      ]
    }
  },
  {
    version: '1.4.1',
    date: '2026-11-12',
    changes: {
      added: [
        {
          pt: 'A aba Compreensão escrita foi liberada: leia um documento (aviso, e-mail, anúncio, notícia, editorial) e responda às questões em francês, como no TEF e no TCF Canada. Por enquanto são 5 textos, do A2 ao C1; outros virão nas próximas versões.',
          fr: 'L’onglet Compréhension écrite est ouvert : lisez un document (avis, courriel, annonce, article, éditorial) et répondez aux questions en français, comme au TEF et au TCF Canada. Pour l’instant, il y a 5 textes, du niveau A2 au C1 ; d’autres suivront dans les prochaines versions.'
        },
        {
          pt: 'Dois modos na Compreensão escrita: Treino, com a explicação logo depois de cada resposta, a tradução do texto parágrafo por parágrafo e o áudio em francês ao clicar no título, num parágrafo ou na pergunta, e Prova, com cronômetro de 1 min 30 por questão, textos do mais fácil ao mais difícil e correção só no fim.',
          fr: 'Deux modes en Compréhension écrite : Entraînement, avec l’explication juste après chaque réponse, la traduction du texte paragraphe par paragraphe et l’audio en français en cliquant sur le titre, un paragraphe ou la question, et Examen, avec un chronomètre de 1 min 30 par question, des textes du plus facile au plus difficile et la correction seulement à la fin.'
        },
        {
          pt: 'Na Compreensão escrita, filtros por nível e por tipo de documento, o botão “Revisar erros” para refazer as questões que você errou e um atalho para a página de teoria de cada tipo de texto. O progresso é salvo na conta, como na Gramática.',
          fr: 'En Compréhension écrite, des filtres par niveau et par type de document, le bouton « Revoir les erreurs » pour refaire les questions ratées et un raccourci vers la fiche théorique de chaque type de texte. La progression est enregistrée dans le compte, comme en Grammaire.'
        },
        {
          pt: 'Em Configurações, a “Lista de textos” mostra todos os textos de compreensão escrita com a tradução, as questões e as respostas certas.',
          fr: 'Dans Paramètres, la « Liste des textes » affiche tous les textes de compréhension écrite avec leur traduction, les questions et les bonnes réponses.'
        }
      ]
    }
  },
  {
    version: '1.4.0',
    date: '2026-11-12',
    changes: {
      added: [
        {
          pt: 'Nas páginas de estudo, uma caixa vermelha “Sem fonte oficial” no fim avisa o que a página afirma sem uma fonte que o confirme, para você saber o que é regra da prova e o que é só conselho de preparação.',
          fr: 'Dans les fiches d’étude, une boîte rouge « Sans source officielle » en fin de page signale ce que la fiche affirme sans source qui le confirme, pour distinguer ce qui est une règle de l’examen de ce qui n’est qu’un conseil de préparation.'
        },
        {
          pt: 'Novas páginas de estudo em Expressão escrita → Competências: “Estrutura de texto: introdução, desenvolvimento, conclusão”, “Registro formal × informal (tu/vous, fórmulas de abertura e fechamento)”, “Carta formal e e-mail profissional”, “Narrar fatos no passado (récit)” e “Argumentar: tese, argumentos, exemplos, contra-argumento, concessão”, “Conectores lógicos”, “Respeitar contagem de palavras”, “Revisão: concordância, acentos, ortografia” e, em Expressão oral, “TEF – Seção A: obter informações” e “TEF – Seção B: convencer um amigo”, com exemplos, armadilhas e dicas para o TEF e o TCF Canada.',
          fr: 'Nouvelles fiches d’étude dans Expression écrite → Compétences : « Structure d’un texte : introduction, développement, conclusion », « Registre formel × informel (tu/vous, formules d’ouverture et de clôture) », « Lettre formelle et courriel professionnel », « Raconter des faits au passé (récit) » et « Argumenter : thèse, arguments, exemples, contre-argument, concession », « Connecteurs logiques », « Le décompte des mots », « Révision : accords, accents et orthographe » et, en Expression orale, « TEF – Section A : obtenir des renseignements » et « TEF – Section B : convaincre un ami », avec des exemples, des pièges et des conseils pour le TEF et le TCF Canada.'
        },
        {
          pt: 'Botão para reportar erro na barra do topo das páginas de estudo: abre uma janela para escrever o que está errado na página, para corrigir depois. O botão só aparece para quem está conectado com uma conta com acesso à nuvem.',
          fr: 'Bouton pour signaler une erreur dans la barre du haut des fiches d’étude : il ouvre une fenêtre pour écrire ce qui ne va pas sur la page, pour la corriger plus tard. Le bouton n’apparaît que pour les personnes connectées avec un compte qui a accès au nuage.'
        },
        {
          pt: 'Para a conta administradora, a lista "Páginas reportadas" em Configurações → Administração, com a página, o comentário, a data e quem reportou, e opções para abrir a página, marcar como resolvido e apagar.',
          fr: 'Pour le compte administrateur, la liste « Pages signalées » dans Paramètres → Administration, avec la page, le commentaire, la date et l’auteur du signalement, et des options pour ouvrir la page, la marquer comme résolue et la supprimer.'
        },
        {
          pt: 'Para a conta administradora, uma bolinha vermelha no botão Configurações e em "Páginas reportadas" enquanto houver página reportada que ainda não foi resolvida nem apagada.',
          fr: 'Pour le compte administrateur, une pastille rouge sur le bouton Paramètres et sur « Pages signalées » tant qu’il reste une page signalée qui n’a pas été résolue ni supprimée.'
        },
        {
          pt: 'Reportar áudio, no lugar da sugestão de troca de voz: no menu do botão direito de um áudio (ou tocando e segurando), "Reportar este áudio" abre uma janela para enviar o reporte, com um comentário opcional sobre o que soa errado, e o menu não mostra mais as vozes. Os reportes aparecem em Configurações → Áudios → Áudios reportados (para a conta administradora, em Configurações → Administração, com a troca de voz de cada áudio), com botões para ouvir o áudio e abrir a página em que ele foi reportado, e uma bolinha verde avisa quando um reporte seu é resolvido.',
          fr: 'Signaler un audio, à la place de la suggestion de changement de voix : dans le menu du clic droit sur un audio (ou en appuyant longuement), « Signaler cet audio » ouvre une fenêtre pour envoyer le signalement, avec un commentaire facultatif sur ce qui sonne mal, et le menu n’affiche plus les voix. Les signalements apparaissent dans Paramètres → Audios → Audios signalés (pour le compte administrateur, dans Paramètres → Administration, avec le changement de voix de chaque audio), avec des boutons pour écouter l’audio et ouvrir la fiche où il a été signalé, et une pastille verte prévient quand un de vos signalements est résolu.'
        },
        {
          pt: 'Muitas páginas de estudo novas: em Expressão escrita → Tipos de tarefa, o TEF (Seções A e B) e o TCF (Tarefas 1, 2 e 3); em Expressão oral, o TCF (Tarefas 1, 2 e 3); em Gramática, imperativo, verbos pronominais, contrações, “c’est × il est”, pronomes tônicos, números, horas e datas, expressões, advérbios, verbos com mudança de grafia, “savoir × connaître”, “imparfait × passé composé”, voz passiva e gérondif; e, em Vocabulário, Canadá e Economia e finanças pessoais.',
          fr: 'De nombreuses nouvelles fiches d’étude : dans Expression écrite → Types de tâche, le TEF (Sections A et B) et le TCF (Tâches 1, 2 et 3) ; dans Expression orale, le TCF (Tâches 1, 2 et 3) ; en Grammaire, l’impératif, les verbes pronominaux, les contractions, « c’est × il est », les pronoms toniques, les nombres, les heures et les dates, les expressions, les adverbes, les verbes à changement d’orthographe, « savoir × connaître », « imparfait × passé composé », la voix passive et le gérondif ; et, en Vocabulaire, le Canada et l’économie et les finances personnelles.'
        },
        {
          pt: 'Na barra das páginas de estudo, um botão para trocar o estilo da página (Padrão ou Leitura) sem sair dela. O seletor de idioma agora mostra BR e FR, com o ícone de áudio no FR, e as dicas dos botões com atalho (Esc, setas, +, −, Enter, Ctrl 0) mostram a tecla desenhada.',
          fr: 'Dans la barre des fiches d’étude, un bouton pour changer le style de la page (Standard ou Lecture) sans la quitter. Le sélecteur de langue affiche maintenant BR et FR, avec l’icône audio sur FR, et les info-bulles des boutons avec raccourci (Échap, flèches, +, −, Entrée, Ctrl 0) montrent la touche dessinée.'
        },
        {
          pt: 'No Painel, ao voltar de uma página de estudo, a tela volta à altura onde você clicou e deixa abertas a seção desse tópico e a seção que ainda tem item para concluir.',
          fr: 'Dans le tableau de bord, en revenant d’une fiche d’étude, l’écran retrouve la hauteur où vous aviez cliqué et laisse ouvertes la section de ce sujet et celle qui a encore un sujet à terminer.'
        }
      ],
      changed: [
        {
          pt: 'A barra do topo das páginas de estudo agora se ajusta ao tamanho da tela e fica sempre numa linha só. O botão "⋯" fica à esquerda dos controles da direita e vai levando os itens para o menu, da esquerda para a direita: primeiro o estilo da página, depois o zoom e por último o idioma. O botão de reportar fica sempre no menu, por último, e o "Concluir" nunca sai da barra (só vira o ícone). Os botões Anterior e Próximo também encolhem e viram setas.',
          fr: 'La barre du haut des fiches d’étude s’adapte maintenant à la taille de l’écran et tient toujours sur une seule ligne. Le bouton « ⋯ » se place à gauche des contrôles de droite et y fait passer les éléments, de gauche à droite : d’abord le style de la page, puis le zoom et enfin la langue. Le bouton de signalement reste toujours dans le menu, en dernier, et « Terminer » ne quitte jamais la barre (il n’affiche plus que son icône). Les boutons Précédent et Suivant rétrécissent aussi et deviennent des flèches.'
        },
        {
          pt: 'No Painel, o subtítulo de cada seção mostra quantos tópicos ainda estão "em breve", só os tópicos já escritos entram na conta dos concluídos (e no total geral), a barra de progresso dentro da seção saiu (a bolinha já mostra o progresso) e, em cada seção, os tópicos disponíveis vêm primeiro e os "em breve" no fim.',
          fr: 'Dans le tableau de bord, le sous-titre de chaque section indique combien de sujets sont encore « bientôt disponibles », seuls les sujets déjà rédigés comptent pour les terminés (et pour le total), la barre de progression à l’intérieur de la section a disparu (la pastille montre déjà la progression) et, dans chaque section, les sujets disponibles viennent d’abord, puis ceux « bientôt disponibles ».'
        },
        {
          pt: 'O estilo "Atual" das páginas de estudo agora se chama "Padrão" (em Configurações → Aparência e na própria página).',
          fr: 'Le style « Actuel » des fiches d’étude s’appelle maintenant « Standard » (dans Paramètres → Apparence et sur la page elle-même).'
        },
        {
          pt: 'Mais páginas de Compreensão escrita e de Gramática (base) agora mostram a tradução do francês numa dica, com áudio ao clicar.',
          fr: 'D’autres fiches de Compréhension écrite et de Grammaire (base) affichent maintenant la traduction du français dans une info-bulle, avec l’audio au clic.'
        },
        {
          pt: 'Ao começar uma rodada em Gramática ou uma sessão em Flashcards, a tela agora "mergulha" no jogo: o menu recua e desfoca, e o jogo chega do primeiro plano até ficar nítido. Ao sair, o movimento é o contrário.',
          fr: 'Au début d’une série en Grammaire ou d’une session de Flashcards, l’écran « plonge » maintenant dans le jeu : le menu recule et devient flou, et le jeu arrive du premier plan jusqu’à devenir net. En sortant, le mouvement est inversé.'
        }
      ],
      fixed: [
        {
          pt: 'No Safari do iPhone, a barra de baixo do app não fica mais escondida atrás da barra do navegador.',
          fr: 'Sur Safari pour iPhone, la barre du bas de l’application n’est plus cachée derrière la barre du navigateur.'
        }
      ]
    }
  },
  {
    version: '1.3.2',
    date: '2026-11-12',
    changes: {
      added: [
        {
          pt: 'Na página "Documentos do cotidiano", uma tabela nova mostra o mesmo dia escrito de vários jeitos (por extenso, ano-mês-dia como no Québec, dia/mês/ano e abreviado), além de prazos e horários, explicando como ler cada um.',
          fr: 'Dans la fiche « Documents de la vie quotidienne », un nouveau tableau montre le même jour écrit de plusieurs façons (en toutes lettres, année-mois-jour comme au Québec, jour/mois/année et en abrégé), ainsi que des délais et des horaires, en expliquant comment les lire.'
        }
      ],
      changed: [
        {
          pt: 'Na mesma página, o francês da versão em português agora tem a tradução numa dica e áudio ao clicar, e cada expressão do vocabulário aparece numa linha própria, com o que ela diz na prática.',
          fr: 'Dans la même fiche, le français de la version portugaise a maintenant sa traduction dans une bulle et un audio au clic, et chaque expression du vocabulaire a sa propre ligne, avec ce qu’elle veut dire en pratique.'
        }
      ]
    }
  },
  {
    version: '1.3.1',
    date: '2026-11-12',
    changes: {
      added: [
        {
          pt: 'Cinco páginas novas em "Compreensão escrita": ofertas de emprego, anúncios de moradia e regulamentos; artigos de jornal e notícias (faits divers); estratégias de leitura; textos literários e abstratos; e textos argumentativos e editoriais. Todas com versão em francês, fontes e áudio.',
          fr: 'Cinq nouvelles fiches dans « Compréhension écrite » : offres d’emploi, annonces de logement et règlements ; articles de presse et faits divers ; stratégies de lecture ; textes littéraires et abstraits ; textes argumentatifs et éditoriaux. Toutes avec version en français, sources et audio.'
        },
        {
          pt: 'Novo estilo "Leitura" para as páginas de estudo, em Configurações → Aparência → Página de estudo: coluna mais estreita, letra de livro no texto, tabelas e avisos mais leves e rótulos nas listas.',
          fr: 'Nouveau style « Lecture » pour les fiches d’étude, dans Paramètres → Apparence → Fiche d’étude : colonne plus étroite, police de livre pour le texte, tableaux et avis plus légers et étiquettes dans les listes.'
        },
        {
          pt: 'Nas páginas de estudo, o tempo de leitura aparece abaixo do resumo e uma linha fina na barra do topo mostra quanto da página você já leu.',
          fr: 'Dans les fiches d’étude, le temps de lecture apparaît sous le résumé et un fin trait dans la barre du haut montre la part de la page déjà lue.'
        },
        {
          pt: 'Baralho novo nos Flashcards: "Diferenças de gênero entre português e francês", com 50 substantivos que mudam de gênero (em francês, "le pont" é masculino, mas a ponte é feminina), cada um com exemplo e áudio.',
          fr: 'Nouveau paquet dans les Flashcards : « Différences de genre entre portugais et français », avec 50 noms dont le genre change (« le pont » est masculin, mais « a ponte » est féminin en portugais), chacun avec exemple et audio.'
        },
        {
          pt: 'Na Lista de áudios, um filtro por voz mostra só os textos falados por Sylvie, Antoine, Denise ou Vivienne, com o total de cada uma.',
          fr: 'Dans la Liste des audios, un filtre par voix n’affiche que les textes dits par Sylvie, Antoine, Denise ou Vivienne, avec le total de chacune.'
        }
      ],
      changed: [
        {
          pt: 'Na página Sotaques, as refeições agora mostram também como é na França (petit-déjeuner, déjeuner e dîner), e a dica de tradução de palavras que mudam de sentido (como déjeuner e dîner) mostra o significado de cada região.',
          fr: 'Dans la fiche Accents, les repas montrent aussi l’usage en France (petit-déjeuner, déjeuner et dîner), et la bulle de traduction des mots dont le sens change (comme déjeuner et dîner) indique le sens de chaque région.'
        }
      ]
    }
  },
  {
    version: '1.3.0',
    date: '2026-11-09',
    changes: {
      added: [
        {
          pt: 'Nas páginas de estudo em português, o francês mostra a tradução numa dica ao passar o mouse ou tocar, no lugar dos parênteses. Por enquanto, nas seções "Conhecendo a prova" e "Compreensão oral".',
          fr: 'Dans les fiches d’étude en portugais, le français affiche sa traduction dans une bulle au survol ou au toucher, au lieu des parenthèses. Pour l’instant, dans les sections « Connaître l’examen » et « Compréhension orale ».'
        },
        {
          pt: 'Esses termos em francês tocam o áudio ao clicar, e a dica tem um botão de play. O botão direito (ou tocar e segurar) abre o menu de voz, como nos outros áudios.',
          fr: 'Ces termes en français se font entendre d’un clic, et la bulle a un bouton de lecture. Le clic droit (ou un appui long) ouvre le menu des voix, comme pour les autres audios.'
        },
        {
          pt: 'Esta tela de Novidades, em Configurações → Sobre.',
          fr: 'Cet écran des Nouveautés, dans Paramètres → À propos.'
        }
      ]
    }
  },
  {
    version: '1.2.5',
    date: '2026-11-08',
    changes: {
      changed: [
        {
          pt: 'Documentos do projeto: a barra com o botão de voltar e o nome do arquivo fica fixa no topo, e as tabelas ganharam um visual novo.',
          fr: 'Documents du projet : la barre avec le bouton retour et le nom du fichier reste en haut, et les tableaux ont un nouveau style.'
        }
      ]
    }
  },
  {
    version: '1.2.4',
    date: '2026-11-08',
    changes: {
      added: [
        {
          pt: 'Plano das próximas abas (compreensão, produção e simulados) em Configurações → Documentos do projeto.',
          fr: 'Plan des prochains onglets (compréhension, expression et examens blancs) dans Paramètres → Documents du projet.'
        }
      ]
    }
  },
  {
    version: '1.2.3',
    date: '2026-11-08',
    changes: {
      changed: [
        {
          pt: 'Em Sobre, um ícone mostra se você está no app do Windows ou no site.',
          fr: 'Dans À propos, une icône indique si vous êtes dans l’application Windows ou sur le site.'
        }
      ]
    }
  },
  {
    version: '1.2.2',
    date: '2026-11-08',
    changes: {
      changed: [
        {
          pt: 'A Sylvie, voz do Canadá, passa a ser a padrão para os áudios novos. As vozes aparecem na ordem Sylvie, Antoine, Denise e Vivienne, e os áudios que já existiam continuam com a mesma voz.',
          fr: 'Sylvie, une voix canadienne, devient la voix par défaut des nouveaux audios. Les voix apparaissent dans l’ordre Sylvie, Antoine, Denise et Vivienne, et les audios existants gardent leur voix.'
        }
      ]
    }
  },
  {
    version: '1.2.1',
    date: '2026-11-08',
    changes: {
      changed: [
        {
          pt: 'A bolinha de cada voz mostra a bandeira do país, no lugar da inicial.',
          fr: 'La pastille de chaque voix affiche le drapeau du pays au lieu de l’initiale.'
        }
      ]
    }
  },
  {
    version: '1.2.0',
    date: '2026-11-08',
    changes: {
      added: [
        {
          pt: 'Duas vozes do Canadá: Sylvie (mulher) e Antoine (homem).',
          fr: 'Deux voix canadiennes : Sylvie (femme) et Antoine (homme).'
        },
        {
          pt: 'Bolinha azul em Configurações e no botão "Reiniciar e atualizar" quando há uma versão nova pronta.',
          fr: 'Pastille bleue sur Paramètres et sur le bouton « Redémarrer et mettre à jour » quand une nouvelle version est prête.'
        }
      ],
      changed: [
        {
          pt: 'No menu do áudio, dá para sugerir qualquer uma das outras vozes, e não só uma.',
          fr: 'Dans le menu audio, on peut suggérer n’importe quelle autre voix, et plus seulement une.'
        }
      ]
    }
  },
  {
    version: '1.1.13',
    date: '2026-11-08',
    changes: {
      security: [
        {
          pt: 'Os dados na nuvem ficaram mais protegidos: o banco de dados só aceita os apps autorizados.',
          fr: 'Les données dans le nuage sont mieux protégées : la base de données n’accepte que les applications autorisées.'
        }
      ]
    }
  },
  {
    version: '1.1.8',
    date: '2026-11-08',
    changes: {
      changed: [
        {
          pt: 'Nas páginas de Compreensão oral em português, as palavras e frases em francês ganharam tradução.',
          fr: 'Dans les fiches de compréhension orale en portugais, les mots et phrases en français sont maintenant traduits.'
        }
      ]
    }
  },
  {
    version: '1.1.6',
    date: '2026-11-07',
    changes: {
      added: [
        {
          pt: 'Mais 11 cartões no baralho de conectores dos Flashcards.',
          fr: '11 nouvelles cartes dans le paquet des connecteurs des Flashcards.'
        }
      ]
    }
  },
  {
    version: '1.1.5',
    date: '2026-11-07',
    changes: {
      changed: [
        {
          pt: 'Documentos do projeto: os blocos de texto quebram a linha em vez de rolar para o lado e têm um botão Copiar.',
          fr: 'Documents du projet : les blocs de texte passent à la ligne au lieu de défiler sur le côté et ont un bouton Copier.'
        }
      ]
    }
  },
  {
    version: '1.1.4',
    date: '2026-11-07',
    changes: {
      added: [
        {
          pt: 'Guia para pedir conteúdo a outras IAs, em Configurações → Documentos do projeto.',
          fr: 'Guide pour demander du contenu à d’autres IA, dans Paramètres → Documents du projet.'
        }
      ]
    }
  },
  {
    version: '1.1.3',
    date: '2026-11-07',
    changes: {
      added: [
        {
          pt: 'Baralho "Essenciais do dia a dia" nos Flashcards.',
          fr: 'Paquet « Essentiels du quotidien » dans les Flashcards.'
        }
      ]
    }
  },
  {
    version: '1.1.0',
    date: '2026-11-06',
    changes: {
      added: [
        {
          pt: 'Aba Flashcards: 50 cartões em 3 baralhos, com repetição espaçada (FSRS), áudio em francês, lista de cartões e progresso salvo na conta.',
          fr: 'Onglet Flashcards : 50 cartes dans 3 paquets, avec répétition espacée (FSRS), audio en français, liste des cartes et progression enregistrée dans le compte.'
        },
        {
          pt: 'Dez páginas de estudo de Gramática Base, incluindo artigos e gênero e número.',
          fr: 'Dix fiches d’étude de grammaire de base, dont les articles, le genre et le nombre.'
        },
        {
          pt: 'Páginas de Compreensão escrita sobre documentos do cotidiano e e-mails e cartas.',
          fr: 'Fiches de compréhension écrite sur les documents du quotidien et les courriels et lettres.'
        },
        {
          pt: 'No celular, pressionar e segurar um áudio abre o menu dele.',
          fr: 'Sur téléphone, un appui long sur un audio ouvre son menu.'
        }
      ],
      changed: [
        {
          pt: 'Painel com seções recolhíveis e um anel de progresso em cada uma.',
          fr: 'Tableau de bord avec des sections repliables et un anneau de progression pour chacune.'
        },
        {
          pt: 'Animações ao trocar de tela: as páginas deslizam para os lados, e a página de estudo sobe ao abrir e desce ao fechar.',
          fr: 'Animations entre les écrans : les pages glissent sur le côté, et la fiche d’étude monte à l’ouverture et descend à la fermeture.'
        },
        {
          pt: 'O salvamento na nuvem passa a valer só para contas aprovadas. Sem aprovação, tudo continua salvo no computador.',
          fr: 'La sauvegarde dans le nuage est réservée aux comptes approuvés. Sans approbation, tout reste enregistré sur l’ordinateur.'
        },
        {
          pt: 'Sugerir outra voz para um áudio passa a exigir uma conta com acesso à nuvem.',
          fr: 'Suggérer une autre voix pour un audio demande désormais un compte avec accès au nuage.'
        }
      ],
      fixed: [
        {
          pt: 'Acentos que apareciam errados no menu.',
          fr: 'Accents mal affichés dans le menu.'
        }
      ]
    }
  },
  {
    version: '1.0.0',
    date: '2026-11-05',
    changes: {
      added: [
        {
          pt: 'Primeira versão do Frenching, para estudar para o TEF Canada e o TCF Canada com a meta de NCLC 7.',
          fr: 'Première version de Frenching, pour préparer le TEF Canada et le TCF Canada avec l’objectif du NCLC 7.'
        },
        {
          pt: 'Painel com a lista de estudos e o progresso de cada seção.',
          fr: 'Tableau de bord avec la liste des sujets et la progression de chaque section.'
        },
        {
          pt: 'Páginas de estudo em português e em francês, com fontes no fim e áudio em cada trecho da versão em francês.',
          fr: 'Fiches d’étude en portugais et en français, avec les sources à la fin et un audio pour chaque passage de la version française.'
        },
        {
          pt: 'Aba Gramática: 312 questões de múltipla escolha em 50 tópicos, do A1 ao C1, com explicação, treino rápido, prática por nível e revisão de erros.',
          fr: 'Onglet Grammaire : 312 questions à choix multiples sur 50 sujets, du A1 au C1, avec explication, entraînement rapide, pratique par niveau et révision des erreurs.'
        },
        {
          pt: 'Conta opcional com Google: progresso e configurações sincronizados entre computadores e o site.',
          fr: 'Compte Google facultatif : progression et paramètres synchronisés entre les ordinateurs et le site.'
        },
        {
          pt: 'Funciona sem internet: o app do Windows sempre, e o site depois da primeira visita.',
          fr: 'Fonctionne sans Internet : toujours dans l’application Windows, et sur le site après la première visite.'
        },
        {
          pt: 'Atualização automática no app do Windows instalado.',
          fr: 'Mise à jour automatique dans l’application Windows installée.'
        },
        {
          pt: 'Aparência: tema claro, escuro ou do sistema, cor principal e cor de fundo.',
          fr: 'Apparence : thème clair, sombre ou du système, couleur principale et couleur de fond.'
        },
        {
          pt: 'Em janelas estreitas e no celular, o menu vira uma barra embaixo.',
          fr: 'Dans les fenêtres étroites et sur téléphone, le menu devient une barre en bas.'
        }
      ]
    }
  }
]
