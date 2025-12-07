import { Button } from "@/components/ui/button";
import { Check, Gift, Shield, Zap, Star, Clock } from "lucide-react";
import type { QuizAnswer } from "./QuizContainer";
import heroCakes from "@/assets/hero-cakes.jpg";
import { trackInitiateCheckout } from "@/lib/facebook-pixel";

const CHECKOUT_URL = "https://tinyurl.com/bde3bksm";

const benefits = [
  "20 receitas exclusivas testadas",
  "Passo a passo detalhado",
  "Ingredientes acessíveis",
  "Dicas profissionais",
  "Acesso vitalício",
];

interface QuizResultProps {
  answers: QuizAnswer[];
  onRestart: () => void;
}

const QuizResult = ({ answers, onRestart }: QuizResultProps) => {
  // Personalized message based on answers
  const getPersonalizedMessage = () => {
    const reasons = answers.find(a => a.questionId === 4);
    
    if (reasons?.answer === "health") {
      return "Perfeito! Você vai adorar nossas receitas que cuidam da sua saúde sem abrir mão do sabor.";
    }
    if (reasons?.answer === "family") {
      return "Maravilha! Sua família vai se deliciar com bolos saudáveis que todos podem comer!";
    }
    if (reasons?.answer === "business") {
      return "Excelente escolha! Essas receitas são perfeitas para vender e lucrar com produtos diferenciados!";
    }
    return "Ótimo! Agora você pode comer bolo sem nenhuma culpa e com muito sabor!";
  };

  return (
    <div className="flex-1 flex flex-col px-4 py-6 safe-area-inset overflow-y-auto">
      {/* Success Badge */}
      <div className="text-center mb-6 animate-scale-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-light rounded-full mb-4">
          <Star className="w-8 h-8 text-sage" />
        </div>
        <h1 className="font-display text-2xl font-bold text-chocolate mb-2">
          Resultado do Quiz!
        </h1>
        <p className="text-muted-foreground text-sm">
          {getPersonalizedMessage()}
        </p>
      </div>

      {/* Product Card */}
      <div className="bg-card rounded-2xl shadow-medium overflow-hidden mb-6 animate-slide-up">
        {/* Image */}
        <div className="relative">
          <img
            src={heroCakes}
            alt="Ebook 20 Receitas de Bolos Saudáveis"
            className="w-full h-40 object-cover"
          />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Zap className="w-3 h-3" />
            70% OFF
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="font-display text-lg font-bold text-foreground mb-1">
            20 Receitas de Bolos Saudáveis
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Sem Glúten • Sem Lactose • Sem Açúcar
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-lg text-muted-foreground line-through">
              R$ 49,90
            </span>
            <span className="font-display text-3xl font-bold text-primary">
              R$ 14,90
            </span>
          </div>

          {/* Benefits */}
          <div className="space-y-2 mb-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-sage" />
                </div>
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Bonus */}
          <div className="bg-terracotta-light rounded-xl p-3 mb-5 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm">BÔNUS GRÁTIS</p>
              <p className="text-xs text-muted-foreground">
                Mini Guia de Substituições
              </p>
            </div>
          </div>

          {/* CTA */}
          <Button 
            variant="cta" 
            size="xl" 
            className="w-full text-base py-5" 
            asChild
          >
            <a 
              href={CHECKOUT_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={trackInitiateCheckout}
            >
              Quero Minhas Receitas Agora!
            </a>
          </Button>

          {/* Urgency */}
          <div className="flex items-center justify-center gap-2 text-xs text-primary mt-3">
            <Clock className="w-3 h-3" />
            <span className="font-medium">Oferta por tempo limitado!</span>
          </div>
        </div>

        {/* Trust Footer */}
        <div className="bg-secondary px-4 py-3 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            7 dias de garantia
          </span>
          <span>•</span>
          <span>🔒 Pagamento seguro</span>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-card rounded-xl p-4 mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-sm text-foreground italic mb-2">
          "Finalmente posso comer bolo sem passar mal! As receitas são deliciosas e super fáceis."
        </p>
        <p className="text-xs text-muted-foreground font-medium">
          — Maria Clara, São Paulo
        </p>
      </div>

      {/* Restart */}
      <button 
        onClick={onRestart}
        className="text-sm text-muted-foreground underline text-center mb-4"
      >
        Refazer quiz
      </button>
    </div>
  );
};

export default QuizResult;
