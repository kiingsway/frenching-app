import type { TopicContent } from './types'

const content: TopicContent = {
  id: 'v-trabalho',

  pt: {
    title: 'Trabalho: emprego, carreira, direitos e equilíbrio profissional',
    summary:
      'Aprenda o vocabulário francês relacionado ao mercado de trabalho canadense, incluindo procura de emprego, currículo, entrevistas, contratação e condições de trabalho. ' +
      'Saiba conversar sobre direitos trabalhistas, teletrabalho, horários flexíveis e equilíbrio entre a vida profissional e pessoal, desenvolvendo argumentos sobre vantagens e desafios do mundo do trabalho.',
    blocks: [
      { type: 'heading', text: '1. Emprego, carreira e mercado de trabalho' },
      {
        type: 'paragraph',
        text:
          'Para falar sobre o mercado de trabalho, é importante distinguir emprego, cargo, profissão e carreira. ' +
          'No francês canadense, você também encontrará expressões específicas para falar sobre contratação, tipos de vínculo profissional, remuneração e jornada de trabalho. ' +
          'Conhecer esse vocabulário ajuda a descrever sua experiência e compreender ofertas de emprego.'
      },
      {
        type: 'table',
        headers: ['Categoria', 'Vocabulário em francês', 'Uso'],
        rows: [
            [
              'Emprego',
              '[[un emploi|um emprego]], [[un poste|um cargo / uma vaga]], [[un métier|uma profissão]], [[une carrière|uma carreira]]',
              'Oportunidades e trajetória profissional.'
            ],
            [
              'Contratação',
              '[[une offre d’emploi|uma oferta de emprego]], [[une candidature|uma candidatura]], [[un candidat / une candidate|um candidato / uma candidata]], [[un employeur|um empregador]], [[un recruteur / une recruteuse|um recrutador / uma recrutadora]]',
              'Processo seletivo e contratação.'
            ],
            [
              'Tipos de emprego',
              '[[à temps plein|em tempo integral]], [[à temps partiel|em meio período]], [[un emploi temporaire|um emprego temporário]], [[un poste permanent|um cargo permanente]], [[un emploi contractuel|um emprego por contrato]]',
              'Modalidades de contratação e jornada.'
            ],
            [
              'Relações profissionais',
              '[[un salarié / une salariée|um empregado / uma empregada]], [[un travailleur autonome|um trabalhador autônomo]], [[un collègue|um colega]], [[un supérieur hiérarchique|um superior hierárquico]], [[une équipe|uma equipe]]',
              'Pessoas e relações no ambiente profissional.'
            ],
            [
              'Experiência e qualificações',
              '[[une expérience professionnelle|uma experiência profissional]], [[une formation|uma formação]], [[une compétence|uma competência]], [[une qualification|uma qualificação]], [[une référence professionnelle|uma referência profissional]]',
              'Histórico e capacidades profissionais.'
            ]
        ]
      },
      { type: 'heading', text: '2. Currículo, candidatura e entrevista' },
      {
        type: 'paragraph',
        text:
          'Para procurar emprego no Canadá, você precisará conhecer o vocabulário relacionado aos documentos de candidatura e às etapas de seleção. ' +
          'No Québec, utiliza-se [[curriculum vitæ|currículo]], geralmente abreviado como [[CV|CV]], e [[lettre d’accompagnement|carta de apresentação]]. ' +
          'Para a carta, [[lettre de motivation|carta de motivação]] também é uma expressão utilizada. ' +
          'Uma particularidade regional importante: no Québec e em outras comunidades francófonas do Canadá, [[entrevue d’embauche|entrevista de emprego]] ' +
          'é uma forma corrente. O OQLF registra [[entretien d’embauche|entrevista de emprego]] como termo preferido e [[entrevue d’embauche|entrevista de emprego]] e [[entrevue d’emploi|entrevista de emprego]] como termos usados no Québec e no Canadá, formados por influência do inglês, mas bem construídos.'
      },
      {
        type: 'table',
        headers: ['Francês', 'Significado', 'Contexto'],
        rows: [
            [
              '[[rédiger un CV|elaborar um currículo]]',
              'Preparar o histórico profissional.',
              'Candidatura.'
            ],
            [
              '[[postuler à un emploi|candidatar-se a um emprego]]',
              'Enviar uma candidatura.',
              'Procura de emprego.'
            ],
            [
              '[[une lettre d’accompagnement|uma carta de apresentação]]',
              'Apresentar suas qualificações e seu interesse pela vaga.',
              'Candidatura.'
            ],
            [
              '[[convoquer quelqu’un à une entrevue|convocar alguém para uma entrevista]]',
              'Convidar um candidato para uma entrevista.',
              'Recrutamento.'
            ],
            [
              '[[passer une entrevue|participar de uma entrevista]]',
              'Realizar uma entrevista de seleção.',
              'Seleção.'
            ],
            [
              '[[être embauché|ser contratado]]',
              'Conseguir uma vaga.',
              'Contratação.'
            ],
            [
              '[[négocier son salaire|negociar o salário]]',
              'Discutir as condições de remuneração.',
              'Negociação.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Exemplo de entrevista: Julia está se candidatando a uma vaga de atendimento ao cliente em uma empresa de Toronto. ' +
          'A recrutadora pergunta sobre suas experiências, competências e expectativas profissionais.'
      },
      {
        type: 'list',
        items: [
          'Recrutadora: [[Pouvez-vous me parler de vos expériences précédentes ?|Você poderia falar sobre suas experiências anteriores?]]',
          'Candidata: [[J’ai trois ans d’expérience en service à la clientèle.|Tenho três anos de experiência em atendimento ao cliente.]]',
          'Recrutadora: [[Quelles sont vos principales qualités ?|Quais são suas principais qualidades?]]',
          'Candidata: [[Je suis organisée, ponctuelle et capable de travailler en équipe.|Sou organizada, pontual e capaz de trabalhar em equipe.]]',
          'Recrutadora: [[Pourquoi souhaitez-vous rejoindre notre entreprise ?|Por que deseja fazer parte da nossa empresa?]]',
          'Candidata: [[Je souhaite développer mes compétences et contribuer à la qualité du service.|Desejo desenvolver minhas competências e contribuir para a qualidade do serviço.]]'
        ]
      },
      { type: 'heading', text: '3. Condições de trabalho e direitos trabalhistas' },
      {
        type: 'paragraph',
        text:
          'Para conversar sobre seus direitos e as condições oferecidas por uma empresa, familiarize-se com os principais termos trabalhistas. ' +
          'Eles aparecem em contratos, documentos administrativos, conversas com empregadores e discussões sobre qualidade de vida. ' +
          'Atenção: as regras trabalhistas dependem da província, da categoria profissional e da situação de cada trabalhador.'
      },
      {
        type: 'table',
        headers: ['Francês', 'Tema', 'Significado'],
        rows: [
            [
              '[[un contrat de travail|um contrato de trabalho]]',
              'Contrato de trabalho',
              'Documento que estabelece a relação profissional.'
            ],
            [
              '[[les conditions de travail|as condições de trabalho]]',
              'Condições de trabalho',
              'Regras e circunstâncias do emprego.'
            ],
            [
              '[[un salaire horaire|um salário por hora]], [[un salaire annuel|um salário anual]]',
              'Remuneração',
              'Formas de pagamento.'
            ],
            [
              '[[le salaire minimum|o salário mínimo]]',
              'Salário mínimo',
              'Valor mínimo previsto pelas normas aplicáveis.'
            ],
            [
              '[[les heures supplémentaires|as horas extras]]',
              'Horas adicionais',
              'Tempo trabalhado além da jornada normal, conforme as regras aplicáveis.'
            ],
            [
              '[[les vacances annuelles|as férias anuais]], [[les congés payés|as licenças remuneradas]]',
              'Férias e licenças',
              'Períodos de afastamento remunerado.'
            ],
            [
              '[[un jour férié|um feriado]], [[une pause|um intervalo]], [[un repos hebdomadaire|um descanso semanal]]',
              'Descansos',
              'Períodos de pausa e repouso.'
            ],
            [
              '[[une convention collective|uma convenção coletiva]], [[les avantages sociaux|os benefícios trabalhistas]]',
              'Benefícios e acordos',
              'Condições adicionais de emprego.'
            ],
            [
              '[[la santé et la sécurité au travail|a saúde e segurança no trabalho]], [[le harcèlement au travail|o assédio no trabalho]]',
              'Proteção no ambiente profissional',
              'Segurança e respeito no local de trabalho.'
            ]
        ]
      },
      { type: 'heading', text: '4. Teletrabalho e equilíbrio entre vida profissional e pessoal' },
      {
        type: 'paragraph',
        text:
          'As formas de organização do trabalho também são temas importantes no Canadá. ' +
          'O vocabulário permite discutir vantagens e desvantagens de trabalhar em casa, comparecer ao escritório e ter horários flexíveis. ' +
          'No francês canadense, [[télétravail|teletrabalho]] e [[travail à distance|trabalho remoto]] ' +
          'são expressões utilizadas para atividades profissionais realizadas fora das instalações do empregador com recursos de comunicação e informática.'
      },
      {
        type: 'list',
        items: [
          '[[le télétravail|O teletrabalho]]',
          '[[le travail hybride|O trabalho híbrido]]',
          '[[le travail en présentiel|O trabalho presencial]]',
          '[[un horaire flexible|Um horário flexível]]',
          '[[un horaire variable|Um horário variável]]',
          '[[un quart de travail|Um turno de trabalho]]',
          '[[la conciliation travail-famille|A conciliação entre trabalho e família]]',
          '[[l’équilibre entre vie professionnelle et vie personnelle|O equilíbrio entre vida profissional e pessoal]]',
          '[[la charge de travail|A carga de trabalho]]',
          '[[le stress professionnel|O estresse profissional]]',
          '[[la productivité|A produtividade]]'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Para debater esse assunto, você pode comparar os benefícios e os desafios de cada modalidade. ' +
          'O teletrabalho pode reduzir o tempo de deslocamento e oferecer mais flexibilidade, mas também pode dificultar a separação entre trabalho e vida pessoal. ' +
          'A expressão [[conciliation travail-famille|conciliação entre trabalho e família]] ' +
          'refere-se especificamente às responsabilidades familiares; para falar de uma questão mais ampla, utilize [[équilibre entre vie professionnelle et vie personnelle|equilíbrio entre vida profissional e pessoal]].'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Armadilha: não confunda CV e résumé',
        text:
          'Use [[curriculum vitæ|currículo]] ou [[CV|CV]] para o documento profissional: o OQLF usa essas formas. A palavra [[résumé|resumo]] ' +
          'significa uma síntese de informações e não deve ser usada como tradução automática do inglês resume no sentido de currículo. ' +
          'Outro cuidado é distinguir [[travailleur autonome|trabalhador autônomo]] ' +
          'de [[salarié|empregado assalariado]]: o OQLF observa que os critérios para distingui-los podem variar de uma lei para outra. ' +
          'Também não confunda [[entretien d’embauche|entrevista de emprego]] com [[entrevue d’embauche|entrevista de emprego]]: as duas formas existem, e a segunda é de uso canadense.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Dica para a prova',
        text:
          'Para desenvolver seu vocabulário em tarefas de compreensão e produção, pratique situações relacionadas à procura de emprego, às entrevistas, às condições de trabalho e ao teletrabalho. ' +
          'Prepare-se para apresentar suas experiências e competências, comparar modalidades de emprego, discutir vantagens e desvantagens e defender sua opinião sobre qualidade de vida profissional. ' +
          'Utilize exemplos concretos e conectores como [[d’une part... d’autre part...|por um lado... por outro lado...]], [[en revanche|em contrapartida]] ' +
          'e [[par conséquent|consequentemente]]. Uma argumentação bem desenvolvida deve explicar não apenas o que você pensa, mas também por que pensa dessa maneira.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sem fonte oficial',
        text:
          'O OQLF confirma [[curriculum vitæ|currículo]] e [[CV|CV]], [[lettre d’accompagnement|carta de apresentação]] (também chamada [[lettre de motivation|carta de motivação]]), [[entretien d’embauche|entrevista de emprego]] e [[entrevue d’embauche|entrevista de emprego]], [[travailleur autonome|trabalhador autônomo]], [[télétravail|teletrabalho]] e [[conciliation travail-famille|conciliação entre trabalho e família]]. ' +
          'Não têm fonte confirmada: as listas de vocabulário de emprego, contratação, condições de trabalho e direitos, o contraste com [[résumé|resumo]], as expressões [[postuler à un emploi|candidatar-se a um emprego]] e [[passer une entrevue|participar de uma entrevista]], [[travail à distance|trabalho remoto]], [[travail hybride|trabalho híbrido]], o diálogo de entrevista e a dica para a prova. ' +
          'O vocabulário de direitos é apresentado como vocabulário, não como aconselhamento jurídico: as regras variam entre províncias, categorias profissionais e situações. Para conhecer direitos concretos, consulte a legislação e o órgão trabalhista competente da província. ' +
          'Essas estratégias são conselhos de preparação, não regras oficiais do TEF Canada ou do TCF Canada.'
      }
    ]
  },

  fr: {
    title: 'Le travail : emploi, entrevue, CV, droits, télétravail et équilibre de vie',
    summary:
      'Apprenez le vocabulaire français lié au marché du travail canadien, notamment la recherche d’emploi, le curriculum vitæ, les entrevues, le recrutement et les conditions de travail. ' +
      'Apprenez à parler des droits des travailleurs, du télétravail, des horaires flexibles et de l’équilibre entre vie professionnelle et vie personnelle, tout en développant des arguments sur les avantages et les défis du monde du travail.',
    blocks: [
      { type: 'heading', text: '1. Emploi, carrière et marché du travail' },
      {
        type: 'paragraph',
        text:
          'Pour parler du marché du travail, il est important de distinguer l’emploi, le poste, le métier et la carrière. ' +
          'En français canadien, on trouve également des expressions particulières pour parler du recrutement, des types de relations professionnelles, de la rémunération et des horaires de travail. ' +
          'La connaissance de ce vocabulaire permet de décrire son expérience et de comprendre les offres d’emploi.'
      },
      {
        type: 'table',
        headers: ['Catégorie', 'Vocabulaire français', 'Signification'],
        rows: [
            [
              'Emploi',
              'un emploi, un poste, un métier, une carrière',
              'Possibilités et parcours professionnels.'
            ],
            [
              'Recrutement',
              'une offre d’emploi, une candidature, un candidat / une candidate, un employeur, un recruteur / une recruteuse',
              'Processus de sélection et d’embauche.'
            ],
            [
              'Types d’emploi',
              'à temps plein, à temps partiel, un emploi temporaire, un poste permanent, un emploi contractuel',
              'Modalités d’embauche et durée du travail.'
            ],
            [
              'Relations professionnelles',
              'un salarié / une salariée, un travailleur autonome, un collègue, un supérieur hiérarchique, une équipe',
              'Personnes et relations dans le milieu professionnel.'
            ],
            [
              'Expérience et qualifications',
              'une expérience professionnelle, une formation, une compétence, une qualification, une référence professionnelle',
              'Parcours et aptitudes professionnelles.'
            ]
        ]
      },
      { type: 'heading', text: '2. Curriculum vitæ, candidature et entrevue' },
      {
        type: 'paragraph',
        text:
          'Pour chercher un emploi au Canada, il faut connaître le vocabulaire lié aux documents de candidature et aux étapes de sélection. ' +
          'Au Québec, on utilise curriculum vitæ, généralement abrégé en CV, et lettre d’accompagnement. ' +
          'Lettre de motivation est également une expression utilisée pour désigner cette lettre. ' +
          'Une particularité régionale importante : au Québec et dans d’autres communautés francophones du Canada, entrevue d’embauche est une expression courante. L’OQLF enregistre entretien d’embauche comme terme privilégié, et entrevue d’embauche et entrevue d’emploi comme termes en usage au Québec et au Canada, calqués sur l’anglais mais bien formés.'
      },
      {
        type: 'table',
        headers: ['Expression française', 'Signification', 'Contexte'],
        rows: [
            [
              'rédiger un CV',
              'Préparer son parcours professionnel.',
              'Candidature.'
            ],
            [
              'postuler à un emploi',
              'Présenter sa candidature.',
              'Recherche d’emploi.'
            ],
            [
              'une lettre d’accompagnement',
              'Présenter ses qualifications et son intérêt pour le poste.',
              'Candidature.'
            ],
            [
              'convoquer quelqu’un à une entrevue',
              'Inviter un candidat à une entrevue.',
              'Recrutement.'
            ],
            [
              'passer une entrevue',
              'Participer à une entrevue de sélection.',
              'Sélection.'
            ],
            [
              'être embauché',
              'Obtenir un poste.',
              'Embauche.'
            ],
            [
              'négocier son salaire',
              'Discuter des conditions de rémunération.',
              'Négociation.'
            ]
        ]
      },
      {
        type: 'paragraph',
        text:
          'Exemple d’entrevue : Julia postule un poste en service à la clientèle dans une entreprise de Toronto. ' +
          'La recruteuse lui pose des questions sur ses expériences, ses compétences et ses objectifs professionnels.'
      },
      {
        type: 'list',
        items: [
          'Recruteuse : Pouvez-vous me parler de vos expériences précédentes ?',
          'Candidate : J’ai trois ans d’expérience en service à la clientèle.',
          'Recruteuse : Quelles sont vos principales qualités ?',
          'Candidate : Je suis organisée, ponctuelle et capable de travailler en équipe.',
          'Recruteuse : Pourquoi souhaitez-vous rejoindre notre entreprise ?',
          'Candidate : Je souhaite développer mes compétences et contribuer à la qualité du service.'
        ]
      },
      { type: 'heading', text: '3. Conditions de travail et droits des travailleurs' },
      {
        type: 'paragraph',
        text:
          'Pour discuter de vos droits et des conditions offertes par une entreprise, familiarisez-vous avec les principaux termes du monde du travail. ' +
          'Ils apparaissent dans les contrats, les documents administratifs, les échanges avec les employeurs et les discussions sur la qualité de vie. ' +
          'Attention : les règles du travail dépendent de la province, de la catégorie professionnelle et de la situation de chaque travailleur.'
      },
      {
        type: 'table',
        headers: ['Expression française', 'Signification', 'Contexte'],
        rows: [
            [
              'un contrat de travail',
              'Contrat de travail.',
              'Document qui établit la relation professionnelle.'
            ],
            [
              'les conditions de travail',
              'Conditions de travail.',
              'Règles et circonstances de l’emploi.'
            ],
            [
              'un salaire horaire, un salaire annuel',
              'Rémunération.',
              'Modes de paiement.'
            ],
            [
              'le salaire minimum',
              'Salaire minimum.',
              'Montant minimal prévu par les normes applicables.'
            ],
            [
              'les heures supplémentaires',
              'Heures supplémentaires.',
              'Temps travaillé au-delà de la durée normale, selon les règles applicables.'
            ],
            [
              'les vacances annuelles, les congés payés',
              'Vacances et congés.',
              'Périodes d’absence rémunérées.'
            ],
            [
              'un jour férié, une pause, un repos hebdomadaire',
              'Repos et pauses.',
              'Périodes de pause et de repos.'
            ],
            [
              'une convention collective, les avantages sociaux',
              'Avantages et accords.',
              'Conditions supplémentaires d’emploi.'
            ],
            [
              'la santé et la sécurité au travail, le harcèlement au travail',
              'Protection dans le milieu professionnel.',
              'Sécurité et respect au travail.'
            ]
        ]
      },
      { type: 'heading', text: '4. Télétravail et équilibre entre vie professionnelle et vie personnelle' },
      {
        type: 'paragraph',
        text:
          'Les modes d’organisation du travail sont également des sujets importants au Canada. ' +
          'Le vocabulaire permet de discuter des avantages et des inconvénients du travail à domicile, de la présence au bureau et des horaires flexibles. ' +
          'En français canadien, télétravail et travail à distance désignent des activités professionnelles exercées à l’extérieur des locaux de l’employeur au moyen d’outils informatiques et de communication.'
      },
      {
        type: 'list',
        items: [
          'Le télétravail',
          'Le travail hybride',
          'Le travail en présentiel',
          'Un horaire flexible',
          'Un horaire variable',
          'Un quart de travail',
          'La conciliation travail-famille',
          'L’équilibre entre vie professionnelle et vie personnelle',
          'La charge de travail',
          'Le stress professionnel',
          'La productivité'
        ]
      },
      {
        type: 'paragraph',
        text:
          'Pour discuter de ce sujet, vous pouvez comparer les avantages et les défis de chaque mode de travail. ' +
          'Le télétravail peut réduire les déplacements et offrir davantage de flexibilité, mais il peut aussi rendre plus difficile la séparation entre la vie professionnelle et la vie personnelle. ' +
          'L’expression conciliation travail-famille désigne spécifiquement la conciliation avec les responsabilités familiales ; pour parler d’une question plus générale, utilisez équilibre entre vie professionnelle et vie personnelle.'
      },
      {
        type: 'callout',
        tone: 'warning',
        title: 'Piège : ne confondez pas CV et résumé',
        text:
          'Utilisez curriculum vitæ ou CV pour désigner le document professionnel : ce sont les formes employées par l’OQLF. ' +
          'Le mot résumé désigne une synthèse d’informations et ne doit pas être utilisé comme traduction automatique du mot anglais resume au sens de curriculum vitæ. ' +
          'Une autre distinction importante concerne travailleur autonome et salarié : l’OQLF observe que les critères pour les distinguer peuvent différer d’une loi à l’autre. ' +
          'Enfin, ne confondez pas entretien d’embauche et entrevue d’embauche : les deux formes existent, et la seconde est d’usage canadien.'
      },
      {
        type: 'callout',
        tone: 'tip',
        title: 'Conseil pour l’examen',
        text:
          'Pour enrichir votre vocabulaire dans les activités de compréhension et de production, entraînez-vous avec des situations liées à la recherche d’emploi, aux entrevues, aux conditions de travail et au télétravail. ' +
          'Préparez-vous à présenter vos expériences et vos compétences, à comparer différents modes d’emploi, à discuter des avantages et des inconvénients et à défendre votre opinion sur la qualité de vie professionnelle. ' +
          'Utilisez des exemples concrets et des connecteurs comme d’une part... d’autre part..., en revanche et par conséquent. ' +
          'Une argumentation bien développée doit expliquer non seulement ce que vous pensez, mais également pourquoi vous pensez de cette manière.'
      },
      {
        type: 'callout',
        tone: 'unverified',
        title: 'Sans source officielle',
        text:
          'L’OQLF confirme curriculum vitæ et CV, lettre d’accompagnement (aussi appelée lettre de motivation), entretien d’embauche et entrevue d’embauche, travailleur autonome, télétravail et conciliation travail-famille. ' +
          'Ne sont pas confirmés par une source : les listes de vocabulaire de l’emploi, du recrutement, des conditions de travail et des droits, le contraste avec résumé, les expressions postuler à un emploi et passer une entrevue, travail à distance, travail hybride, le dialogue d’entrevue et le conseil pour l’examen. ' +
          'Le vocabulaire des droits est présenté comme du vocabulaire et non comme un conseil juridique : les règles varient selon les provinces, les catégories professionnelles et les situations. Pour connaître les droits applicables, consultez la législation et l’organisme compétent de votre province. ' +
          'Ces stratégies sont des conseils de préparation et non des règles officielles du TEF Canada ou du TCF Canada.'
      }
    ]
  },

  audio: ['title', 'summary', 'headings', 'paragraphs', 'lists', 'callouts', 'tables', 'terms'],

  sources: [
    {
      title: 'Le curriculum vitæ : conseils de rédaction — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22593/la-redaction-et-la-communication/redaction-administrative-et-commerciale/curriculum-vitae/conseils-pour-la-redaction-du-curriculum-vitae'
    },
    {
      title: 'La lettre d’accompagnement du CV : conseils de rédaction — Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/22813/la-redaction-et-la-communication/redaction-administrative-et-commerciale/curriculum-vitae/redaction-de-la-lettre-daccompagnement-du-curriculum-vitae'
    },
    {
      title: 'Entretien d’embauche — Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8870029/entretien-dembauche'
    },
    {
      title: 'Travailleur autonome — Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8869717/travailleur-autonome'
    },
    {
      title: 'Télétravail — Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8393674/teletravail'
    },
    {
      title: 'Conciliation travail-famille — Grand dictionnaire terminologique, Office québécois de la langue française',
      url: 'https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/8870316/conciliation-travail-famille'
    },
    {
      title: 'Droits et obligations des travailleurs — CNESST',
      url: 'https://www.cnesst.gouv.qc.ca/fr/organisation/cnesst/droits-obligations-pour-tous-en-matiere-travail/droits-obligations-travailleurs'
    },
    {
      title: 'Your guide to the Employment Standards Act — Government of Ontario',
      url: 'https://www.ontario.ca/document/your-guide-employment-standards-act-0'
    },
    {
      title: 'How do I apply for a job? — Government of Canada Job Bank',
      url: 'https://www.jobbank.gc.ca/findajob/resources/apply-for-jobs'
    },
    {
      title: 'Preparing for an interview — Government of Canada Job Bank',
      url: 'https://www.jobbank.gc.ca/trouverunemploi/ressources/preparer-entrevue'
    }
  ]
}

export default content
