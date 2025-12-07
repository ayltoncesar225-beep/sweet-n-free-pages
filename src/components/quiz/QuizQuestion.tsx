import { useState } from "react";

interface Option {
  value: string;
  label: string;
  emoji: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface QuizQuestionProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
}

const QuizQuestion = ({ question, currentIndex, totalQuestions, onAnswer }: QuizQuestionProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onAnswer(value);
  };

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="flex-1 flex flex-col px-4 py-6 safe-area-inset">
      {/* Progress */}
      <div className="mb-6 animate-fade-in">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-muted-foreground font-medium">
            Pergunta {currentIndex + 1} de {totalQuestions}
          </span>
          <span className="text-xs text-primary font-semibold">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-cta rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center" key={question.id}>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-chocolate text-center mb-8 animate-slide-up">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          {question.options.map((option, index) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left flex items-center gap-3 ${
                selected === option.value
                  ? "border-primary bg-terracotta-light scale-[0.98]"
                  : "border-border bg-card hover:border-primary/50 hover:bg-card/80 active:scale-[0.98]"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-2xl">{option.emoji}</span>
              <span className="font-medium text-foreground text-base">
                {option.label.replace(option.emoji + " ", "")}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
