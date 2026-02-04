// Quiz images - replace these URLs with your own images
export const quizImages = {
  hero: "", // Will use imported image
  q1: "", // Will use imported image
  q2: "", // Will use imported image
  q3: "", // Will use imported image
  q4: "", // Will use imported image
  resultLow: "", // Will use imported image
  resultMid: "", // Will use imported image
  resultHigh: "", // Will use imported image
};

export interface QuizQuestion {
  id: number;
  title: string;
  options: {
    text: string;
    score: number;
  }[];
  feedback: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Quando chega a noite, o que acontece com você?",
    options: [
      { text: "Eu descanso de boa.", score: 0 },
      { text: "Demoro um pouco, mas durmo.", score: 1 },
      { text: "Minha cabeça liga e fica repetindo tudo.", score: 2 },
      { text: "Eu deito cansado(a), mas a mente me tortura e eu não desligo.", score: 3 }
    ],
    feedback: "Isso não é falta de força — é sobrecarga acumulada."
  },
  {
    id: 2,
    title: "No seu corpo, a ansiedade aparece como…",
    options: [
      { text: "Quase não aparece.", score: 0 },
      { text: "Tensão leve / inquietação.", score: 1 },
      { text: "Aperto no peito, nó na garganta, respiração curta.", score: 2 },
      { text: "Coração dispara, tremor, medo sem motivo e sensação de que algo ruim vai acontecer.", score: 3 }
    ],
    feedback: "Seu corpo pode estar preso no modo 'alerta'."
  },
  {
    id: 3,
    title: "O que te assusta mais ultimamente?",
    options: [
      { text: "Nada demais.", score: 0 },
      { text: "Ficar preocupado(a) com coisas pequenas.", score: 1 },
      { text: "Não conseguir relaxar nem quando 'tá tudo bem'.", score: 2 },
      { text: "Perder o controle, travar, chorar do nada ou ter uma crise em público.", score: 3 }
    ],
    feedback: "Você não está sozinho(a). Tem como reduzir isso com passos."
  },
  {
    id: 4,
    title: "O quanto isso está roubando sua vida?",
    options: [
      { text: "Quase nada.", score: 0 },
      { text: "Um pouco, mas eu dou conta.", score: 1 },
      { text: "Eu deixo coisas importantes pra depois porque não tenho energia.", score: 2 },
      { text: "Eu estou sobrevivendo: evito gente, evito lugares, e finjo que tá tudo bem por fora.", score: 3 }
    ],
    feedback: "Quando vira sobrevivência, você merece um caminho claro, não mais força."
  }
];
