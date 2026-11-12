// Estrutura dos tópicos, espelhando topicos-de-estudo.md.
// Os ids são estáveis: o progresso salvo depende deles.

export interface Topic {
  id: string
  title: string
}

export interface Section {
  id: string
  title: string
  topics: Topic[]
}

export const SECTIONS: Section[] = [
  {
    id: 'prova',
    title: 'Conhecendo a prova',
    topics: [
      { id: 'prova-tef-tcf', title: 'Diferenças entre TEF Canada e TCF Canada (escolha do exame)' },
      {
        id: 'prova-nclc',
        title: 'Sistema NCLC (Niveaux de compétence linguistique canadiens) e conversão de notas'
      },
      { id: 'prova-cecr', title: 'Correspondência NCLC ↔ CECR (NCLC 7 ≈ B2)' },
      {
        id: 'prova-crs',
        title: 'Pontuação CRS para francês (primeira e segunda língua oficial, bônus francófono)'
      },
      { id: 'prova-formato', title: 'Formato e tempo de cada prova' },
      { id: 'prova-criterios', title: 'Critérios de correção das provas de produção (oral e escrita)' },
      { id: 'prova-qcm', title: 'Gestão de tempo e estratégias para QCM (múltipla escolha)' }
    ]
  },
  {
    id: 'co',
    title: 'Compréhension orale (compreensão oral)',
    topics: [
      {
        id: 'co-mensagens',
        title: 'Mensagens curtas: anúncios, recados de secretária eletrônica, avisos em estações/aeroportos'
      },
      { id: 'co-dialogos', title: 'Diálogos do cotidiano (lojas, serviços, consultas, trabalho)' },
      { id: 'co-radio', title: 'Entrevistas e reportagens de rádio' },
      { id: 'co-debates', title: 'Debates e opiniões (identificar ponto de vista e tom)' },
      { id: 'co-palestras', title: 'Apresentações/palestras de nível mais abstrato' },
      { id: 'co-sotaques', title: 'Sotaques: França, Québec, África francófona, Bélgica/Suíça' },
      {
        id: 'co-falado',
        title: 'Francês falado: liaisons, elisões, ritmo rápido, "ne" omitido, expressões informais'
      },
      {
        id: 'co-estrategias',
        title: 'Estratégias: antecipar pela leitura das perguntas, identificar palavras-chave, inferência'
      }
    ]
  },
  {
    id: 'ce',
    title: 'Compréhension écrite (compreensão escrita)',
    topics: [
      { id: 'ce-cotidiano', title: 'Documentos do cotidiano: anúncios, cardápios, horários, formulários, placas' },
      { id: 'ce-cartas', title: 'E-mails e cartas (pessoais e administrativas)' },
      { id: 'ce-ofertas', title: 'Ofertas de emprego, anúncios de moradia, regulamentos' },
      { id: 'ce-noticias', title: 'Artigos de jornal e notícias (faits divers)' },
      { id: 'ce-argumentativos', title: 'Textos argumentativos e editoriais' },
      { id: 'ce-literarios', title: 'Textos literários/abstratos (níveis mais altos)' },
      {
        id: 'ce-estrategias',
        title:
          'Estratégias: leitura dinâmica (skimming/scanning), identificar a ideia principal, intenção do autor, sinônimos e paráfrases'
      }
    ]
  },
  {
    id: 'ee-tarefas',
    title: 'Expression écrite — Tipos de tarefa',
    topics: [
      { id: 'ee-tef-a', title: 'TEF – Seção A: continuar um fait divers (narrar, estilo jornalístico)' },
      { id: 'ee-tef-b', title: 'TEF – Seção B: carta/texto argumentativo defendendo um ponto de vista' },
      { id: 'ee-tcf-1', title: 'TCF – Tâche 1: mensagem curta (convite, pedido, informação)' },
      { id: 'ee-tcf-2', title: 'TCF – Tâche 2: artigo/relato de experiência (blog, fórum, jornal)' },
      { id: 'ee-tcf-3', title: 'TCF – Tâche 3: comparar dois documentos e dar sua opinião' }
    ]
  },
  {
    id: 'ee-competencias',
    title: 'Expression écrite — Competências',
    topics: [
      { id: 'ee-estrutura', title: 'Estrutura de texto: introdução, desenvolvimento, conclusão' },
      { id: 'ee-registro', title: 'Registro formal × informal (tu/vous, fórmulas de abertura e fechamento)' },
      { id: 'ee-carta-formal', title: 'Carta formal e e-mail profissional' },
      { id: 'ee-narrar', title: 'Narrar fatos no passado (récit)' },
      {
        id: 'ee-argumentar',
        title: 'Argumentar: tese, argumentos, exemplos, contra-argumento, concessão'
      },
      {
        id: 'ee-conectores',
        title: 'Conectores lógicos (causa, consequência, oposição, concessão, adição, conclusão)'
      },
      { id: 'ee-palavras', title: 'Respeitar contagem de palavras' },
      { id: 'ee-revisao', title: 'Revisão: concordância, acentos, ortografia' }
    ]
  },
  {
    id: 'eo-tarefas',
    title: 'Expression orale — Tipos de tarefa',
    topics: [
      {
        id: 'eo-tef-a',
        title: 'TEF – Seção A: obter informações (ligação telefônica sobre um anúncio, fazer perguntas)'
      },
      { id: 'eo-tef-b', title: 'TEF – Seção B: convencer/persuadir um amigo sobre algo de um anúncio' },
      {
        id: 'eo-tcf-1',
        title: 'TCF – Tâche 1: entrevista dirigida (falar de si, rotina, trabalho, projetos)'
      },
      {
        id: 'eo-tcf-2',
        title: 'TCF – Tâche 2: interação/role-play (obter informações, fazer perguntas)'
      },
      { id: 'eo-tcf-3', title: 'TCF – Tâche 3: expressar e defender um ponto de vista' }
    ]
  },
  {
    id: 'eo-competencias',
    title: 'Expression orale — Competências',
    topics: [
      {
        id: 'eo-apresentacao',
        title: 'Apresentação pessoal (formação, profissão, motivos para imigrar)'
      },
      { id: 'eo-perguntas', title: 'Formular perguntas (inversão, est-ce que, entonação)' },
      { id: 'eo-opiniao', title: 'Expressar opinião, concordar, discordar, nuançar' },
      { id: 'eo-persuadir', title: 'Persuadir e responder a objeções' },
      { id: 'eo-hesitacao', title: 'Expressões de hesitação e ganhar tempo (euh, alors, voyons…)' },
      { id: 'eo-pronuncia', title: 'Pronúncia: vogais nasais, r francês, u/ou, e/é/è, liaison' },
      { id: 'eo-fluidez', title: 'Fluidez e entonação' }
    ]
  },
  {
    id: 'gram-base',
    title: 'Gramática — Base (A1–A2)',
    topics: [
      { id: 'gb-artigos', title: 'Artigos definidos, indefinidos e partitivos' },
      { id: 'gb-genero', title: 'Gênero e número de substantivos e adjetivos' },
      { id: 'gb-adjetivos', title: 'Posição e concordância dos adjetivos' },
      { id: 'gb-present', title: 'Présent (verbos regulares e irregulares principais)' },
      { id: 'gb-negacao', title: 'Negação (ne… pas, jamais, rien, personne, plus)' },
      { id: 'gb-interrogacao', title: 'Interrogação' },
      {
        id: 'gb-preposicoes',
        title: 'Preposições de lugar e tempo (à, en, au, chez, depuis, pendant, il y a)'
      },
      { id: 'gb-possessivos', title: 'Possessivos e demonstrativos' },
      { id: 'gb-passe-compose', title: 'Passé composé (avoir/être, concordância do particípio)' },
      { id: 'gb-futur-proche', title: 'Futur proche e passé récent' },
      { id: 'gb-imperativo', title: 'Imperativo' },
      { id: 'gb-pronominais', title: 'Verbos pronominais' },
      {
        id: 'gb-contracoes',
        title: 'Contrações (au, du, aux, des) e artigos com países e continentes'
      },
      { id: 'gb-cest-il-est', title: 'C’est × il/elle est' },
      { id: 'gb-tonicos', title: 'Pronomes tônicos (moi, toi, lui…) e on × nous' },
      { id: 'gb-numeros', title: 'Números, horas e datas' },
      {
        id: 'gb-expressoes',
        title: 'Expressões com avoir, faire e il fait (avoir besoin de, avoir envie de, o tempo)'
      },
      { id: 'gb-adverbios', title: 'Advérbios: formação com -ment e posição na frase' },
      { id: 'gb-grafia', title: 'Verbos com mudança de grafia (-cer, -ger, -eler/-eter)' },
      { id: 'gb-savoir-connaitre', title: 'Savoir × connaître' }
    ]
  },
  {
    id: 'gram-inter',
    title: 'Gramática — Intermediário (B1)',
    topics: [
      { id: 'gi-imparfait', title: 'Imparfait × passé composé' },
      { id: 'gi-futur-simple', title: 'Futur simple' },
      { id: 'gi-conditionnel', title: 'Conditionnel présent (polidez, hipótese)' },
      { id: 'gi-pronomes', title: 'Pronomes COD/COI, y e en, ordem dos pronomes duplos' },
      { id: 'gi-relativos', title: 'Pronomes relativos simples (qui, que, où, dont)' },
      { id: 'gi-comparativo', title: 'Comparativo e superlativo' },
      { id: 'gi-plus-que-parfait', title: 'Plus-que-parfait' },
      { id: 'gi-condicionais', title: 'Frases condicionais (si + présent / imparfait)' },
      { id: 'gi-discurso-indireto', title: 'Discurso indireto' },
      {
        id: 'gi-subjonctif',
        title: 'Subjonctif présent (vontade, sentimento, obrigação, dúvida)'
      },
      {
        id: 'gi-negacao',
        title: 'Negação avançada (ne… que, ne… plus, ni… ni, personne ne, rien ne, aucun)'
      },
      {
        id: 'gi-demonstrativos',
        title: 'Pronomes demonstrativos e possessivos (celui, ce qui/ce que, le mien)'
      },
      { id: 'gi-indefinidos', title: "Pronomes indefinidos (tout, chacun, quelqu'un, plusieurs)" },
      { id: 'gi-duracao', title: 'Preposições de duração (depuis, pendant, pour, en, dans)' },
      {
        id: 'gi-verbos-preposicao',
        title: 'Verbos com preposição fixa (penser à/de, manquer à, plaire à)'
      },
      {
        id: 'gi-adjetivos-posicao',
        title: 'Adjetivos que mudam de sentido conforme a posição (ancien, propre, cher)'
      }
    ]
  },
  {
    id: 'gram-avancado',
    title: 'Gramática — Avançado (B2–C1)',
    topics: [
      { id: 'ga-relativos', title: 'Pronomes relativos compostos (lequel, auquel, duquel…)' },
      { id: 'ga-conditionnel-passe', title: 'Conditionnel passé e si + plus-que-parfait' },
      {
        id: 'ga-subjonctif',
        title: 'Subjonctif passé e subjuntivo após conjunções (bien que, pour que, avant que…)'
      },
      { id: 'ga-passiva', title: 'Voz passiva' },
      { id: 'ga-gerondif', title: 'Gérondif e particípio presente' },
      { id: 'ga-nominalizacao', title: 'Nominalização' },
      {
        id: 'ga-expressao',
        title: 'Expressão da causa, consequência, finalidade, oposição e concessão'
      },
      { id: 'ga-concordancia', title: 'Concordância de tempos no discurso indireto' },
      { id: 'ga-futur-anterieur', title: 'Futur antérieur' },
      { id: 'ga-passe-simple', title: 'Passé simple (reconhecimento na leitura)' },
      { id: 'ga-causativo', title: 'Faire + infinitivo (causativo)' },
      {
        id: 'ga-indicativo-subjuntivo',
        title: 'Indicativo × subjuntivo depois de penser, croire e trouver que (afirmativo × negativo)'
      },
      {
        id: 'ga-infinitivo-passado',
        title: 'Infinitivo passado (après avoir fait, avant de + infinitivo)'
      },
      {
        id: 'ga-futuro-passado',
        title: "Futuro no passado (j'allais + infinitivo, condicional como futuro do passado)"
      }
    ]
  },
  {
    id: 'vocab',
    title: 'Vocabulário temático',
    topics: [
      { id: 'v-pessoal', title: 'Vida pessoal: família, apresentação, rotina, personalidade' },
      { id: 'v-moradia', title: 'Moradia: aluguel, vizinhança, mudança, anúncios imobiliários' },
      {
        id: 'v-trabalho',
        title:
          'Trabalho: emprego, entrevista, currículo, direitos, teletrabalho, conciliação vida/trabalho'
      },
      { id: 'v-educacao', title: 'Educação e formação: escola, universidade, formação contínua' },
      { id: 'v-saude', title: 'Saúde: médico, farmácia, sistema de saúde, bem-estar, esporte' },
      {
        id: 'v-consumo',
        title: 'Compras e consumo: lojas, comércio online, reclamações, consumo responsável'
      },
      { id: 'v-transportes', title: 'Transportes e mobilidade urbana' },
      { id: 'v-viagens', title: 'Viagens e turismo' },
      { id: 'v-lazer', title: 'Lazer e cultura: cinema, música, festivais, leitura' },
      { id: 'v-alimentacao', title: 'Alimentação e gastronomia' },
      {
        id: 'v-ambiente',
        title: 'Meio ambiente: clima, reciclagem, energia, desenvolvimento sustentável'
      },
      {
        id: 'v-tecnologia',
        title: 'Tecnologia: internet, redes sociais, inteligência artificial, vida digital'
      },
      { id: 'v-midia', title: 'Mídia e informação: imprensa, fake news' },
      {
        id: 'v-sociedade',
        title: 'Sociedade: imigração, integração, diversidade, envelhecimento, voluntariado'
      },
      { id: 'v-cidadania', title: 'Cidadania e serviços públicos: administração, documentos, bancos' },
      {
        id: 'v-canada',
        title: 'Vida no Canadá: clima, inverno, bilinguismo, comunidades francófonas fora do Québec'
      },
      { id: 'v-economia', title: 'Economia e finanças pessoais' },
      { id: 'v-expressoes', title: 'Expressões idiomáticas e quebequismos comuns' }
    ]
  },
  {
    id: 'funcoes',
    title: 'Funções comunicativas',
    topics: [
      { id: 'f-cumprimentar', title: 'Cumprimentar, apresentar-se, despedir-se (formal e informal)' },
      { id: 'f-informacoes', title: 'Pedir e dar informações' },
      { id: 'f-descrever', title: 'Descrever pessoas, lugares, objetos' },
      { id: 'f-narrar', title: 'Narrar eventos passados' },
      { id: 'f-planos', title: 'Expressar planos e projetos futuros' },
      { id: 'f-gostos', title: 'Expressar gostos, preferências e sentimentos' },
      { id: 'f-pedidos', title: 'Fazer pedidos, sugestões e convites; aceitar e recusar' },
      { id: 'f-reclamar', title: 'Reclamar e pedir solução' },
      { id: 'f-conselhos', title: 'Dar conselhos' },
      { id: 'f-opiniao', title: 'Expressar e justificar opinião' },
      { id: 'f-argumentar', title: 'Argumentar, comparar e concluir' },
      { id: 'f-hipotese', title: 'Expressar hipótese, certeza e dúvida' }
    ]
  },
  {
    id: 'simulados',
    title: 'Simulados e prática',
    topics: [
      { id: 's-co', title: 'Simulados cronometrados de compreensão oral' },
      { id: 's-ce', title: 'Simulados cronometrados de compreensão escrita' },
      { id: 's-ee', title: 'Banco de temas para produção escrita (com correção)' },
      { id: 's-eo', title: 'Banco de temas para produção oral (gravar e revisar)' },
      { id: 's-erros', title: 'Revisão de erros recorrentes' },
      { id: 's-completo', title: 'Simulado completo (4 provas)' }
    ]
  }
]
