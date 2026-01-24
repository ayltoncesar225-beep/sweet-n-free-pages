import { motion } from "framer-motion";
import { ChefHat, Clock, Sparkles } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col px-5 py-8 bg-gradient-to-b from-background to-secondary/30"
    >
      {/* Hero Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex justify-center mb-6"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-button">
          <ChefHat className="w-12 h-12 text-primary-foreground" />
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-extrabold text-foreground text-center leading-tight mb-3"
      >
        Descubra o bolo perfeito pra sua rotina 🍰
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-muted-foreground text-center text-base mb-8"
      >
        Responda 4 perguntas rápidas e receba uma recomendação personalizada
      </motion.p>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col gap-3 mb-8"
      >
        <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-accent" />
          </div>
          <span className="text-sm font-medium text-foreground">Menos de 1 minuto</span>
        </div>
        <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground">Resultado personalizado</span>
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold text-lg rounded-xl shadow-button hover:shadow-soft transition-all duration-200"
      >
        Começar agora →
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center text-xs text-muted-foreground mt-4"
      >
        100% gratuito • Sem cadastro
      </motion.p>
    </motion.div>
  );
};
