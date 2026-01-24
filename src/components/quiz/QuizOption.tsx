import { motion } from "framer-motion";

interface QuizOptionProps {
  label: string;
  emoji?: string;
  onClick: () => void;
  delay?: number;
}

export const QuizOption = ({ label, emoji, onClick, delay = 0 }: QuizOptionProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full min-h-[56px] px-5 py-4 bg-card border-2 border-border rounded-xl text-left font-semibold text-foreground shadow-card hover:border-primary hover:shadow-soft transition-all duration-200 active:bg-secondary flex items-center gap-3"
    >
      {emoji && <span className="text-xl">{emoji}</span>}
      <span className="text-base leading-tight">{label}</span>
    </motion.button>
  );
};
