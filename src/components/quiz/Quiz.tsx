import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { StartScreen } from "./StartScreen";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestion } from "./QuizQuestion";
import { ResultScreen } from "./ResultScreen";

type QuizStep = "start" | "q1" | "q2" | "q3" | "q4" | "result";

interface Answers {
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
}

const questions = {
  q1: {
    title: "Qual é o seu maior objetivo com essas receitas?",
    subtitle: "Escolha a opção que mais combina com você",
    options: [
      { id: "doce", label: "Matar a vontade de doce sem culpa", emoji: "🍫" },
      { id: "dieta", label: "Manter a dieta sem sofrer", emoji: "💪" },
      { id: "restricao", label: "Fazer algo seguro pra minha restrição", emoji: "🛡️" },
      { id: "familia", label: "Ter opções melhores pra família", emoji: "👨‍👩‍👧" },
    ],
  },
  q2: {
    title: "Qual dessas situações mais combina com você?",
    subtitle: "Selecione sua principal necessidade",
    options: [
      { id: "acucar", label: "Quero sem açúcar", emoji: "🚫" },
      { id: "gluten", label: "Quero sem glúten", emoji: "🌾" },
      { id: "lactose", label: "Quero sem lactose", emoji: "🥛" },
      { id: "todos", label: "Quero sem os 3 (açúcar, glúten e lactose)", emoji: "✨" },
    ],
  },
  q3: {
    title: "O que mais te trava na hora de fazer bolo 'fit'?",
    subtitle: "Qual sua maior dificuldade?",
    options: [
      { id: "sabor", label: "Medo de ficar sem sabor", emoji: "😋" },
      { id: "dificil", label: "Receitas difíceis", emoji: "📖" },
      { id: "ingredientes", label: "Ingredientes caros/difíceis", emoji: "💰" },
      { id: "tempo", label: "Falta de tempo", emoji: "⏰" },
    ],
  },
  q4: {
    title: "Quando você mais sente vontade de comer doce?",
    subtitle: "Isso nos ajuda a entender sua rotina",
    options: [
      { id: "noite", label: "À noite", emoji: "🌙" },
      { id: "almoco", label: "Depois do almoço", emoji: "🍽️" },
      { id: "tarde", label: "No café da tarde", emoji: "☕" },
      { id: "fds", label: "No fim de semana", emoji: "🎉" },
    ],
  },
};

const results = {
  restricao: {
    title: "Plano Restrição Segura 🛡️",
    subtitle: "Feito especialmente pra quem precisa evitar açúcar, glúten e lactose",
    description:
      "Pelo que você respondeu, você busca receitas seguras que respeitem suas restrições alimentares. Sabemos que não é fácil encontrar opções gostosas e confiáveis — por isso criamos esse ebook.",
    benefits: [
      "20 receitas 100% sem açúcar, glúten e lactose",
      "Ingredientes seguros e fáceis de encontrar",
      "Passo a passo simples pra não errar",
    ],
  },
  dieta: {
    title: "Plano Doce Sem Culpa 💪",
    subtitle: "Pra quem quer manter a dieta sem abrir mão do prazer",
    description:
      "Pelo que você respondeu, você quer comer doce sem sair da linha. Essas receitas são perfeitas pra matar a vontade sem culpa — e sem sabotar seus resultados.",
    benefits: [
      "Receitas leves e saborosas",
      "Opções pra diferentes momentos do dia",
      "Substitutos inteligentes do açúcar",
    ],
  },
  tempo: {
    title: "Plano Rápido do Dia a Dia ⏰",
    subtitle: "Receitas práticas pra quem tem pouco tempo",
    description:
      "Pelo que você respondeu, falta de tempo é o seu maior desafio. Essas receitas foram pensadas pra serem rápidas e práticas — sem perder o sabor.",
    benefits: [
      "Receitas que levam poucos minutos",
      "Modo de preparo direto ao ponto",
      "Ingredientes fáceis de encontrar",
    ],
  },
  sabor: {
    title: "Plano Sabor de Verdade 😋",
    subtitle: "Bolos gostosos de verdade, sem açúcar e cia.",
    description:
      "Pelo que você respondeu, você tem medo de bolo fit ser sem graça. Relaxa! Essas receitas foram testadas até ficarem deliciosas — sem parecer 'diet'.",
    benefits: [
      "Receitas aprovadas no teste do sabor",
      "Texturas macias e saborosas",
      "Dicas pra deixar ainda mais gostoso",
    ],
  },
};

type ResultType = keyof typeof results;

const calculateResult = (answers: Answers): ResultType => {
  // Priority: restricao > tempo > sabor > dieta
  if (answers.q2 === "todos" || answers.q1 === "restricao") {
    return "restricao";
  }
  if (answers.q3 === "tempo") {
    return "tempo";
  }
  if (answers.q3 === "sabor") {
    return "sabor";
  }
  return "dieta";
};

export const Quiz = () => {
  const [step, setStep] = useState<QuizStep>("start");
  const [answers, setAnswers] = useState<Answers>({});

  const handleStart = () => setStep("q1");

  const handleAnswer = (question: keyof Answers, answer: string) => {
    setAnswers((prev) => ({ ...prev, [question]: answer }));
    
    const nextStep: Record<string, QuizStep> = {
      q1: "q2",
      q2: "q3",
      q3: "q4",
      q4: "result",
    };
    
    setStep(nextStep[question]);
  };

  const currentQuestion = step.startsWith("q") ? parseInt(step.slice(1)) : 0;
  const resultType = calculateResult(answers);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {step === "start" && <StartScreen key="start" onStart={handleStart} />}

        {step !== "start" && step !== "result" && (
          <div key={step}>
            <QuizProgress current={currentQuestion} total={4} />
            {step === "q1" && (
              <QuizQuestion
                {...questions.q1}
                onSelect={(id) => handleAnswer("q1", id)}
              />
            )}
            {step === "q2" && (
              <QuizQuestion
                {...questions.q2}
                onSelect={(id) => handleAnswer("q2", id)}
              />
            )}
            {step === "q3" && (
              <QuizQuestion
                {...questions.q3}
                onSelect={(id) => handleAnswer("q3", id)}
              />
            )}
            {step === "q4" && (
              <QuizQuestion
                {...questions.q4}
                onSelect={(id) => handleAnswer("q4", id)}
              />
            )}
          </div>
        )}

        {step === "result" && (
          <ResultScreen key="result" result={results[resultType]} />
        )}
      </AnimatePresence>
    </div>
  );
};
