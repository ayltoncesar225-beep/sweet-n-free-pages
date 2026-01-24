import { motion } from "framer-motion";
import { Check, ShieldCheck, Star, Gift, Clock, CreditCard, Zap, HelpCircle } from "lucide-react";
import { useState } from "react";

interface ResultData {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

interface ResultScreenProps {
  result: ResultData;
}

const CHECKOUT_URL = "https://pay.kiwify.com.br/aB0AfY5";

const testimonials = [
  {
    name: "Carla M.",
    text: "Finalmente posso comer bolo sem culpa! As receitas são deliciosas.",
  },
  {
    name: "Fernanda S.",
    text: "Fáceis de fazer e minha família toda aprovou!",
  },
];

const faqs = [
  {
    question: "Como eu recebo?",
    answer: "Acesso imediato por e-mail após a compra.",
  },
  {
    question: "Precisa ter experiência?",
    answer: "Não! Receitas simples e passo a passo.",
  },
  {
    question: "Os ingredientes são caros?",
    answer: "Não, usamos ingredientes acessíveis de mercado.",
  },
  {
    question: "E se eu não gostar?",
    answer: "Devolvemos 100% em até 7 dias.",
  },
];

export const ResultScreen = ({ result }: ResultScreenProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pb-24 bg-gradient-to-b from-background to-secondary/30"
    >
      {/* Result Header */}
      <div className="bg-gradient-to-br from-primary to-accent px-5 py-8 text-primary-foreground">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-3 py-1 rounded-full mb-3">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">Seu resultado</span>
          </div>
          <h1 className="text-2xl font-extrabold mb-2">{result.title}</h1>
          <p className="text-sm opacity-90">{result.subtitle}</p>
        </motion.div>
      </div>

      <div className="px-5 py-6">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-xl p-4 mb-5"
        >
          <p className="text-sm text-foreground leading-relaxed">
            {result.description}
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h3 className="font-bold text-foreground mb-3">O que você vai ganhar:</h3>
          <div className="flex flex-col gap-2">
            {result.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-accent-foreground" />
                </div>
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card border-2 border-primary/30 rounded-2xl p-5 mb-6 shadow-soft"
        >
          <div className="flex items-center gap-2 mb-3">
            <Gift className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">Recomendação para você</span>
          </div>
          
          <h3 className="text-lg font-extrabold text-foreground mb-3">
            20 Bolos Sem Açúcar, Sem Glúten e Sem Lactose
          </h3>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>20 receitas testadas e aprovadas</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>Passo a passo simples e fácil</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              <span>Ingredientes acessíveis</span>
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-extrabold text-primary">R$ 19,90</span>
            <span className="text-sm text-muted-foreground line-through">R$ 49,90</span>
          </div>

          <a
            href={CHECKOUT_URL}
            className="block w-full py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold text-center text-lg rounded-xl shadow-button animate-pulse-soft"
          >
            Quero minhas receitas 🍰
          </a>

          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <CreditCard className="w-3 h-3" /> Pix e cartão
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Compra segura
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3" /> Acesso imediato
            </span>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-xl p-4 mb-6"
        >
          <ShieldCheck className="w-8 h-8 text-accent flex-shrink-0" />
          <div>
            <p className="font-bold text-foreground text-sm">Garantia de 7 dias</p>
            <p className="text-xs text-muted-foreground">Se não gostar, devolvemos 100% do valor.</p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-6"
        >
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            O que dizem as clientes
          </h3>
          <div className="flex flex-col gap-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-foreground mb-2">"{testimonial.text}"</p>
                <p className="text-xs font-semibold text-muted-foreground">— {testimonial.name}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2 italic">
            *Depoimentos ilustrativos (exemplos do que clientes costumam relatar).
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            Dúvidas frequentes
          </h3>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="bg-card border border-border rounded-xl p-4 text-left transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-foreground">{faq.question}</span>
                  <span className="text-muted-foreground text-lg">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-sm text-muted-foreground mt-2"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Sticky Bottom Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg"
      >
        <a
          href={CHECKOUT_URL}
          className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg rounded-xl shadow-button"
        >
          <span>R$ 19,90</span>
          <span className="w-px h-5 bg-primary-foreground/30" />
          <span>Comprar agora →</span>
        </a>
      </motion.div>
    </motion.div>
  );
};
