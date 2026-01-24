import { motion } from "framer-motion";
import { QuizOption } from "./QuizOption";

interface Option {
  id: string;
  label: string;
  emoji?: string;
}

interface QuizQuestionProps {
  title: string;
  subtitle?: string;
  options: Option[];
  onSelect: (optionId: string) => void;
}

export const QuizQuestion = ({ title, subtitle, options, onSelect }: QuizQuestionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col px-4 py-6 min-h-[calc(100vh-80px)]"
    >
      <div className="mb-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold text-foreground leading-tight mb-2"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <QuizOption
            key={option.id}
            label={option.label}
            emoji={option.emoji}
            onClick={() => onSelect(option.id)}
            delay={0.1 + index * 0.08}
          />
        ))}
      </div>
    </motion.div>
  );
};
