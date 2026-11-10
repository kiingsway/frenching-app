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
