import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";

export const QuizResult = () => {
  const handleCTA = () => {
    window.location.href = "https://pay.kirvano.com/52acf480-265f-4448-b1d8-5e1bceb9a49c?aff=daee17f9-327a-4528-9ba8-7018f4c5132c";
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-8 safe-bottom">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6"
        >
          <CheckCircle className="w-8 h-8 text-primary" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-quiz-title text-foreground text-center mb-4"
        >
          Seu perfil financeiro pode estar sendo afetado por detalhes que quase ninguém explica
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-quiz-subtitle text-muted-foreground text-center mb-8"
        >
          Com base nas suas respostas, entender como o score funciona e evitar erros comuns pode ajudar muito na sua organização financeira.
        </motion.p>

        {/* Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-card border border-border rounded-2xl p-6 quiz-card-shadow mb-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Oferta Especial</span>
          </div>
          
          <h3 className="text-lg font-bold text-foreground mb-2">
            Guia Educativo Completo
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4">
            Aprenda de forma simples como cuidar do seu perfil financeiro e evitar os erros mais comuns.
          </p>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-extrabold text-foreground">R$47</span>
            <span className="text-sm text-muted-foreground">acesso imediato</span>
          </div>

          {/* CTA Button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ 
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            onClick={handleCTA}
            className="w-full touch-target flex items-center justify-center gap-2 px-6 py-4 bg-accent text-accent-foreground text-quiz-cta rounded-xl quiz-cta-shadow transition-all duration-200 hover:opacity-95 active:opacity-90"
          >
            Quero acessar o guia agora
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-2 w-full mb-6"
        >
          {[
            "✅ Acesso vitalício",
            "✅ Conteúdo prático e direto",
            "✅ Linguagem simples, sem termos técnicos",
          ].map((benefit, index) => (
            <p key={index} className="text-sm text-muted-foreground text-center">
              {benefit}
            </p>
          ))}
        </motion.div>
      </motion.div>

      {/* Legal Disclaimer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center pt-4 border-t border-border"
      >
        <p className="text-xs text-muted-foreground leading-relaxed">
          Este conteúdo é educativo. Resultados variam de acordo com hábitos e histórico financeiro.
        </p>
      </motion.footer>
    </div>
  );
};
