import type { FlashcardDeckDraft } from './types'

// Falsos cognatos PT↔FR: parecem com uma palavra do português, mas querem dizer outra
// coisa. Cada cartão explica a armadilha e como dizer o sentido "falso" em francês.
const deck: FlashcardDeckDraft = {
  id: 'falsos-cognatos',
  title: 'Falsos cognatos',
  description: 'Palavras que parecem português, mas enganam: attendre, la journée, exquis…',
  sources: [
    { title: 'Dictionnaire Le Robert', url: 'https://dictionnaire.lerobert.com/' },
    { title: 'Dictionnaire Larousse', url: 'https://www.larousse.fr/dictionnaires/francais' },
    { title: 'Usito (dictionnaire du français au Québec)', url: 'https://usito.usherbrooke.ca/' }
  ],
  cards: [
    {
      fr: 'attendre',
      pt: 'esperar, aguardar',
      example: {
        fr: 'J’attends le bus depuis vingt minutes.',
        pt: 'Estou esperando o ônibus há vinte minutos.'
      },
      trap: 'Não é atender. Atender (o telefone, um cliente) = répondre (au téléphone), servir, recevoir.'
    },
    {
      fr: 'la journée',
      pt: 'o dia (o período, a duração do dia)',
      example: {
        fr: 'J’ai passé toute la journée à la bibliothèque.',
        pt: 'Passei o dia inteiro na biblioteca.'
      },
      trap: 'Não é jornada no sentido de viagem (= le voyage, le périple). "Bonne journée !" = Tenha um bom dia!'
    },
    {
      fr: 'le collège',
      pt: 'a escola dos anos finais do ensino fundamental (França)',
      example: {
        fr: 'Ma fille entre au collège en septembre.',
        pt: 'Minha filha começa os anos finais do fundamental em setembro.'
      },
      trap: 'Não é colégio em geral (= l’école) nem faculdade (= l’université). Na França, vai dos 11 aos 15 anos; no Québec, "collège" costuma indicar o cégep (pré-universitário ou técnico).'
    },
    {
      fr: 'exquis',
      pt: 'delicioso, requintado',
      example: {
        fr: 'Ce dessert est vraiment exquis.',
        pt: 'Esta sobremesa está realmente deliciosa.'
      },
      trap: 'Não é esquisito (= bizarre, étrange). Exquis é um elogio! Feminino: exquise.'
    },
    {
      fr: 'le magasin',
      pt: 'a loja',
      example: {
        fr: 'Ce magasin ferme à vingt et une heures.',
        pt: 'Esta loja fecha às vinte e uma horas.'
      },
      trap: 'Não é revista (= le magazine, la revue).'
    },
    {
      fr: 'la tasse',
      pt: 'a xícara',
      example: {
        fr: 'Tu veux une tasse de café ?',
        pt: 'Você quer uma xícara de café?'
      },
      trap: 'Não é taça (= le verre à pied, la coupe).'
    },
    {
      fr: 'rester',
      pt: 'ficar, permanecer',
      example: {
        fr: 'Ce soir, je reste à la maison.',
        pt: 'Hoje à noite, vou ficar em casa.'
      },
      trap: 'O sentido principal não é restar: je reste = eu fico. "Restar, sobrar" só na forma impessoal: il reste du pain (sobrou pão).'
    },
    {
      fr: 'le cadre',
      pt: 'o executivo, o gerente; a moldura',
      example: {
        fr: 'Elle est cadre dans une grande banque.',
        pt: 'Ela é executiva num grande banco.'
      },
      trap: 'Não é o quadro pintado (= le tableau). Na empresa, un cadre é um funcionário de nível gerencial.'
    },
    {
      fr: 'prétendre',
      pt: 'afirmar, alegar',
      example: {
        fr: 'Il prétend avoir tout compris.',
        pt: 'Ele afirma ter entendido tudo.'
      },
      trap: 'Não é pretender (= avoir l’intention de, compter faire).'
    },
    {
      fr: 'le parfum',
      pt: 'o perfume; o sabor (de sorvete, iogurte…)',
      example: {
        fr: 'Quel parfum de glace veux-tu ?',
        pt: 'Que sabor de sorvete você quer?'
      },
      trap: 'Na sorveteria, parfum é sabor! Para o gosto em geral: le goût.'
    },
    {
      fr: 'sensible',
      pt: 'sensível',
      example: {
        fr: 'Il est très sensible à la critique.',
        pt: 'Ele é muito sensível a críticas.'
      },
      trap: 'Não é sensato (= raisonnable, sensé).'
    },
    {
      fr: 'le délai',
      pt: 'o prazo',
      example: {
        fr: 'Vous avez un délai de trente jours pour répondre.',
        pt: 'Vocês têm um prazo de trinta dias para responder.'
      },
      trap: 'Não é atraso (= le retard). Muito comum em documentos de imigração.'
    },
    {
      fr: 'éventuellement',
      pt: 'possivelmente, se for o caso',
      example: {
        fr: 'Nous pourrions éventuellement changer la date.',
        pt: 'Poderíamos, se for o caso, mudar a data.'
      },
      trap: 'Não é de vez em quando (= parfois, de temps en temps). Indica uma possibilidade.'
    },
    {
      fr: 'la vague',
      pt: 'a onda',
      example: {
        fr: 'Une vague de chaleur touche le Québec cette semaine.',
        pt: 'Uma onda de calor atinge o Québec esta semana.'
      },
      trap: 'Não é vaga. Vaga de emprego = un poste (à pourvoir); vaga de estacionamento = une place.'
    },
    {
      fr: 'la nouvelle',
      pt: 'a notícia; o conto',
      example: {
        fr: 'J’ai une bonne nouvelle à t’annoncer.',
        pt: 'Tenho uma boa notícia para te dar.'
      },
      trap: 'Não é novela (de TV = le feuilleton, la série).'
    },
    {
      fr: 'l’entretien',
      pt: 'a entrevista; a manutenção',
      example: {
        fr: 'J’ai un entretien d’embauche demain matin.',
        pt: 'Tenho uma entrevista de emprego amanhã de manhã.'
      },
      trap: 'Não é entretenimento (= le divertissement).'
    },
    {
      fr: 'la carte',
      pt: 'o mapa; o cartão; o cardápio',
      example: {
        fr: 'Est-ce que je peux voir la carte, s’il vous plaît ?',
        pt: 'Posso ver o cardápio, por favor?'
      },
      trap: 'Não é carta (correspondência = la lettre).'
    }
  ]
}

export default deck
