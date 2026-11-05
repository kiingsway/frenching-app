export interface Flashcard {
  id: string
  front: string
  back: string
  deck: string
}

// Baralho de exemplo; depois virá de arquivos de conteúdo / banco.
export const FLASHCARDS: Flashcard[] = [
  { id: 'f1', deck: 'Trabalho', front: 'un emploi', back: 'um emprego' },
  { id: 'f2', deck: 'Trabalho', front: 'un entretien d’embauche', back: 'uma entrevista de emprego' },
  { id: 'f3', deck: 'Moradia', front: 'le loyer', back: 'o aluguel' },
  { id: 'f4', deck: 'Moradia', front: 'un déménagement', back: 'uma mudança (de casa)' },
  { id: 'f5', deck: 'Conectores', front: 'cependant', back: 'entretanto, no entanto' },
  { id: 'f6', deck: 'Conectores', front: 'bien que (+ subj.)', back: 'embora' }
]
