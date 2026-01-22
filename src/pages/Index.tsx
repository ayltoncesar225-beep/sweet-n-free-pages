import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { QuizStart } from "@/components/quiz/QuizStart";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizResult } from "@/components/quiz/QuizResult";
import { quizQuestions } from "@/data/quizData";

type QuizState = "start" | "questions" | "result";

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleStart = () => {
    setQuizState("questions");
    setCurrentQuestion(0);
  };

  const handleAnswer = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizState("result");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {quizState === "start" && (
          <QuizStart key="start" onStart={handleStart} />
        )}

        {quizState === "questions" && (
          <div key="questions" className="min-h-screen flex flex-col">
            <QuizProgress
              current={currentQuestion + 1}
              total={quizQuestions.length}
            />
            
            <div className="flex-1 flex items-center justify-center py-6">
              <div className="w-full max-w-md">
                <AnimatePresence mode="wait">
                  <QuizQuestion
                    key={currentQuestion}
                    question={quizQuestions[currentQuestion].question}
                    options={quizQuestions[currentQuestion].options}
                    onAnswer={handleAnswer}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {quizState === "result" && <QuizResult key="result" />}
      </AnimatePresence>
    </div>
  );
};

export default Index;
