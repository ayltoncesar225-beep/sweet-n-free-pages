import { useState } from "react";
import QuizIntro from "./QuizIntro";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

export interface QuizAnswer {
  questionId: number;
  answer: string;
}

const questions = [
  {
    id: 1,
    question: "Você tem alguma restrição alimentar?",
    options: [
      { value: "gluten", label: "🌾 Intolerância ao glúten", emoji: "🌾" },
      { value: "lactose", label: "🥛 Intolerância à lactose", emoji: "🥛" },
      { value: "sugar", label: "🍬 Preciso evitar açúcar", emoji: "🍬" },
      { value: "all", label: "✨ Todas as anteriores", emoji: "✨" },
    ],
  },
  {
    id: 2,
    question: "Qual é seu maior desafio na cozinha?",
    options: [
      { value: "time", label: "⏰ Falta de tempo", emoji: "⏰" },
      { value: "skills", label: "👩‍🍳 Não sei cozinhar bem", emoji: "👩‍🍳" },
      { value: "ingredients", label: "🛒 Encontrar ingredientes", emoji: "🛒" },
      { value: "taste", label: "😋 Fazer receitas saborosas", emoji: "😋" },
    ],
  },
  {
    id: 3,
    question: "Com que frequência você come doces?",
    options: [
      { value: "daily", label: "📅 Todo dia", emoji: "📅" },
      { value: "weekly", label: "📆 Algumas vezes por semana", emoji: "📆" },
      { value: "rarely", label: "🌙 Raramente", emoji: "🌙" },
      { value: "avoid", label: "🚫 Evito por restrições", emoji: "🚫" },
    ],
  },
  {
    id: 4,
    question: "Por que você quer aprender receitas saudáveis?",
    options: [
      { value: "health", label: "💪 Melhorar minha saúde", emoji: "💪" },
      { value: "family", label: "👨‍👩‍👧 Alimentar minha família melhor", emoji: "👨‍👩‍👧" },
      { value: "business", label: "💰 Vender e lucrar", emoji: "💰" },
      { value: "pleasure", label: "😊 Comer sem culpa", emoji: "😊" },
    ],
  },
];

const QuizContainer = () => {
  const [step, setStep] = useState<"intro" | "quiz" | "result">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleStart = () => {
    setStep("quiz");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, { questionId: questions[currentQuestion].id, answer }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setStep("result");
      }, 300);
    }
  };

  const handleRestart = () => {
    setStep("intro");
    setCurrentQuestion(0);
    setAnswers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {step === "intro" && <QuizIntro onStart={handleStart} />}
      
      {step === "quiz" && (
        <QuizQuestion
          question={questions[currentQuestion]}
          currentIndex={currentQuestion}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
      
      {step === "result" && <QuizResult answers={answers} onRestart={handleRestart} />}
    </div>
  );
};

export default QuizContainer;
