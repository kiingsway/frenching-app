import type { FlashcardDeckDraft } from './types'

// Essenciais do dia a dia (A2–B1): além do básico (bonjour, merci), as palavras e
// expressões que aparecem o tempo todo nos áudios e textos da prova sobre trabalho,
// moradia, serviços e rotina.
const deck: FlashcardDeckDraft = {
  id: 'essenciais',
  title: 'Essenciais do dia a dia',
  description: 'Iniciante, mas nem tanto (A2–B1): rotina, moradia, trabalho e serviços.',
  sources: [
    { title: 'Dictionnaire Le Robert', url: 'https://dictionnaire.lerobert.com/' },
    { title: 'Dictionnaire Larousse', url: 'https://www.larousse.fr/dictionnaires/francais' },
    { title: 'Usito (dictionnaire du français au Québec)', url: 'https://usito.usherbrooke.ca/' },
    { title: 'TV5Monde – Apprendre le français', url: 'https://apprendre.tv5monde.com/' }
  ],
  cards: [
    {
      fr: 'avoir besoin de',
      pt: 'precisar de',
      example: {
        fr: 'J’ai besoin d’une attestation de travail.',
        pt: 'Preciso de uma declaração de trabalho.'
      },
      note: 'Sempre com de: avoir besoin de quelque chose, avoir besoin de faire quelque chose.'
    },
    {
      fr: 'il faut',
      pt: 'é preciso, tem que',
      example: {
        fr: 'Il faut arriver quinze minutes avant l’examen.',
        pt: 'É preciso chegar quinze minutos antes da prova.'
      },
      note: 'Impessoal: só existe com il. Seguido de infinitivo ou de um substantivo (il faut du temps).'
    },
    {
      fr: 'd’habitude',
      pt: 'normalmente, de costume',
      example: {
        fr: 'D’habitude, je prends le métro pour aller au travail.',
        pt: 'Normalmente pego o metrô para ir ao trabalho.'
      }
    },
    {
      fr: 'se débrouiller',
      pt: 'se virar, dar conta',
      example: {
        fr: 'Je me débrouille bien en français maintenant.',
        pt: 'Agora eu me viro bem em francês.'
      },
      note: 'Verbo pronominal: no passé composé usa être (je me suis débrouillé).'
    },
    {
      fr: 'prendre rendez-vous',
      pt: 'marcar uma consulta, um horário',
      example: {
        fr: 'J’ai pris rendez-vous chez le médecin pour jeudi.',
        pt: 'Marquei consulta com o médico para quinta.'
      },
      note: 'Sem artigo: prendre rendez-vous. Para cancelar: annuler un rendez-vous.'
    },
    {
      fr: 'être en retard',
      pt: 'estar atrasado',
      example: {
        fr: 'Désolé, je suis en retard à cause de la neige.',
        pt: 'Desculpe, estou atrasado por causa da neve.'
      },
      note: 'O contrário: être en avance (adiantado) e être à l’heure (no horário).'
    },
    {
      fr: 'le loyer',
      pt: 'o aluguel (o valor pago)',
      example: {
        fr: 'Le loyer comprend le chauffage et l’électricité.',
        pt: 'O aluguel inclui o aquecimento e a eletricidade.'
      },
      note: 'Alugar = louer. O inquilino = le locataire; o proprietário = le propriétaire.'
    },
    {
      fr: 'déménager',
      pt: 'mudar de casa',
      example: {
        fr: 'Nous allons déménager à Québec en juillet.',
        pt: 'Vamos nos mudar para Quebec em julho.'
      },
      note: 'Só para mudança de casa. Mudar de ideia = changer d’avis.'
    },
    {
      fr: 'le quartier',
      pt: 'o bairro',
      example: {
        fr: 'Mon quartier est calme et proche des écoles.',
        pt: 'Meu bairro é tranquilo e perto das escolas.'
      }
    },
    {
      fr: 'faire les courses',
      pt: 'fazer compras (de mercado)',
      example: {
        fr: 'Je fais les courses le samedi matin.',
        pt: 'Faço as compras no sábado de manhã.'
      },
      note: 'No Québec também se diz faire l’épicerie. Fazer compras em lojas, por prazer = faire du shopping (no Québec, magasiner).'
    },
    {
      fr: 'la facture',
      pt: 'a conta, a fatura',
      example: {
        fr: 'Je dois payer la facture d’Internet avant le 15.',
        pt: 'Tenho que pagar a conta de internet antes do dia 15.'
      },
      note: 'A conta do restaurante = l’addition (no Québec, la facture também).'
    },
    {
      fr: 'remplir un formulaire',
      pt: 'preencher um formulário',
      example: {
        fr: 'Il faut remplir ce formulaire et le signer.',
        pt: 'É preciso preencher este formulário e assiná-lo.'
      }
    },
    {
      fr: 'chercher un emploi',
      pt: 'procurar emprego',
      example: {
        fr: 'Elle cherche un emploi dans la santé.',
        pt: 'Ela está procurando emprego na área da saúde.'
      },
      note: 'Sem preposição: chercher quelque chose (procurar algo), não "chercher pour".'
    },
    {
      fr: 'embaucher',
      pt: 'contratar',
      example: {
        fr: 'L’entreprise embauche trois techniciens.',
        pt: 'A empresa está contratando três técnicos.'
      },
      note: 'Ser contratado = être embauché. Demitir = licencier, renvoyer.'
    },
    {
      fr: 'le congé',
      pt: 'a folga, as férias, a licença',
      example: {
        fr: 'Je suis en congé la semaine prochaine.',
        pt: 'Estou de folga na semana que vem.'
      },
      note: 'Licença-maternidade = le congé de maternité. As férias (escolares) = les vacances.'
    },
    {
      fr: 'ça dépend',
      pt: 'depende',
      example: {
        fr: 'Tu viens ce soir ? — Ça dépend de l’heure.',
        pt: 'Você vem hoje à noite? — Depende do horário.'
      },
      note: 'Sempre com de: ça dépend de quelque chose.'
    },
    {
      fr: 'en fait',
      pt: 'na verdade',
      example: {
        fr: 'Je pensais que c’était gratuit, mais en fait, c’est payant.',
        pt: 'Eu achava que era grátis, mas na verdade é pago.'
      },
      note: 'Corrige ou precisa o que foi dito. Pronuncia-se o t final.'
    },
    {
      fr: 'avoir l’air',
      pt: 'parecer, ter cara de',
      example: {
        fr: 'Tu as l’air fatigué aujourd’hui.',
        pt: 'Você parece cansado hoje.'
      },
      note: 'Avoir l’air + adjetivo ou avoir l’air de + infinitivo (il a l’air de comprendre).'
    },
    {
      fr: 'se rendre compte',
      pt: 'perceber, dar-se conta',
      example: {
        fr: 'Je me suis rendu compte que j’avais oublié mes clés.',
        pt: 'Percebi que tinha esquecido as chaves.'
      },
      note: 'Pronominal, com être no passé composé. Seguido de que ou de de (se rendre compte de quelque chose).'
    },
    {
      fr: 'faire la queue',
      pt: 'fazer fila',
      example: {
        fr: 'On a fait la queue pendant une heure au bureau des passeports.',
        pt: 'Ficamos uma hora na fila do escritório de passaportes.'
      },
      note: 'No Québec também se diz faire la file.'
    }
  ]
}

export default deck
