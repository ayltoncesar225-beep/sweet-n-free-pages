import { motion } from "framer-motion";

interface QuizOptionProps {
  emoji?: string;
  text: string;
  onClick: () => void;
  index: number;
}

export const QuizOption = ({ emoji, text, onClick, index }: QuizOptionProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onClick={onClick}
      className="w-full touch-target flex items-center gap-3 p-4 bg-card border-2 border-border rounded-xl text-left transition-all duration-200 hover:border-primary hover:bg-primary/5 active:scale-[0.98] quiz-card-shadow"
    >
      {emoji && <span className="text-2xl flex-shrink-0">{emoji}</span>}
      <span className="text-quiz-option text-foreground">{text}</span>
    </motion.button>
  );
};
