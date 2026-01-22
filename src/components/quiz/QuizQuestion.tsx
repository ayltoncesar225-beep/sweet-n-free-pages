import { motion } from "framer-motion";
import { QuizOption } from "./QuizOption";

interface Option {
  emoji?: string;
  text: string;
}

interface QuizQuestionProps {
  question: string;
  options: Option[];
  onAnswer: (answerIndex: number) => void;
}

export const QuizQuestion = ({ question, options, onAnswer }: QuizQuestionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-5 px-4 pb-8"
    >
      <h2 className="text-quiz-question text-foreground text-center px-2">
        {question}
      </h2>
      
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <QuizOption
            key={index}
            emoji={option.emoji}
            text={option.text}
            onClick={() => onAnswer(index)}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};
