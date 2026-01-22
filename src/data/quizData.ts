export interface QuizQuestionData {
  question: string;
  options: {
    emoji?: string;
    text: string;
  }[];
}

export const quizQuestions: QuizQuestionData[] = [
  {
    question: "Você já teve crédito ou parcelamento negado?",
    options: [
      { emoji: "😞", text: "Sim, já aconteceu" },
      { emoji: "😕", text: "Já aconteceu uma vez" },
      { emoji: "😬", text: "Ainda não, mas tenho medo" },
      { emoji: "🙂", text: "Nunca passei por isso" },
    ],
  },
  {
    question: "Você entende como o score funciona?",
    options: [
      { emoji: "❌", text: "Não entendo" },
      { emoji: "🤔", text: "Mais ou menos" },
      { emoji: "😵", text: "Cada pessoa fala uma coisa" },
      { emoji: "✅", text: "Entendo bem" },
    ],
  },
  {
    question: "Qual dessas situações mais parece com você?",
    options: [
      { text: "Pago contas, mas nada muda" },
      { text: "Já atrasei e não sei o impacto" },
      { text: "Tenho dívidas antigas" },
      { text: "Evito crédito por medo" },
    ],
  },
  {
    question: "Quando pensa na sua vida financeira, você se sente…",
    options: [
      { emoji: "😣", text: "Frustrado(a)" },
      { emoji: "😕", text: "Confuso(a)" },
      { emoji: "😰", text: "Ansioso(a)" },
      { emoji: "😌", text: "Tranquilo(a)" },
    ],
  },
  {
    question: "Você acha que pequenos hábitos podem estar te prejudicando sem você perceber?",
    options: [
      { text: "Sim, com certeza" },
      { text: "Talvez" },
      { text: "Nunca pensei nisso" },
      { text: "Não acredito" },
    ],
  },
  {
    question: "Se você entendesse melhor o score, isso ajudaria sua vida hoje?",
    options: [
      { text: "Ajudaria muito" },
      { text: "Ajudaria um pouco" },
      { text: "Não sei dizer" },
      { text: "Não faria diferença" },
    ],
  },
  {
    question: "Você gostaria de aprender, de forma simples, como cuidar melhor do seu perfil financeiro?",
    options: [
      { text: "Sim, quero aprender" },
      { text: "Talvez" },
      { text: "Ainda estou pensando" },
      { text: "Não tenho interesse" },
    ],
  },
];
