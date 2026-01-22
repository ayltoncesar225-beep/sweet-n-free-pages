import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";

interface QuizStartProps {
  onStart: () => void;
}

export const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 safe-bottom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-sm"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full quiz-gradient-bg flex items-center justify-center mb-8 quiz-button-shadow"
        >
          <AlertTriangle className="w-10 h-10 text-primary-foreground" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-quiz-title text-foreground mb-4"
        >
          Seu score pode estar travado por erros invisíveis
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-quiz-subtitle text-muted-foreground mb-10"
        >
          Responda esse quiz rápido e descubra se seus hábitos financeiros estão te prejudicando.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="w-full touch-target flex items-center justify-center gap-2 px-8 py-4 quiz-gradient-bg text-primary-foreground text-quiz-cta rounded-xl quiz-button-shadow transition-all duration-200 hover:opacity-95 active:opacity-90"
        >
          Descobrir agora
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Trust indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-xs text-muted-foreground"
        >
          ⏱️ Leva menos de 2 minutos
        </motion.p>
      </motion.div>
    </div>
  );
};
