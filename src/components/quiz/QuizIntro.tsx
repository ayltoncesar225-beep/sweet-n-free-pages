import { Button } from "@/components/ui/button";
import { Sparkles, ChefHat, Heart } from "lucide-react";
import heroCakes from "@/assets/hero-cakes.jpg";

interface QuizIntroProps {
  onStart: () => void;
}

const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <div className="flex-1 flex flex-col px-4 py-6 safe-area-inset">
      {/* Hero Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-medium mb-6 animate-fade-in">
        <img
          src={heroCakes}
          alt="Doces saudáveis"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            <span>Quiz Rápido • 4 Perguntas</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center animate-slide-up">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-chocolate text-center mb-3 leading-tight">
          Descubra Como Fazer{" "}
          <span className="text-primary">Doces Deliciosos</span> Sem Culpa!
        </h1>

        <p className="text-muted-foreground text-center text-base mb-6">
          Responda 4 perguntas e descubra o segredo para sobremesas incríveis 
          <span className="font-semibold text-foreground"> sem glúten, sem lactose e sem açúcar</span>.
        </p>

        {/* Trust badges */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ChefHat className="w-4 h-4 text-primary" />
            <span>150 Receitas</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Heart className="w-4 h-4 text-primary" />
            <span>+5.000 Clientes</span>
          </div>
        </div>

        {/* CTA */}
        <Button 
          variant="cta" 
          size="xl" 
          className="w-full text-lg py-6"
          onClick={onStart}
        >
          Começar Quiz Grátis
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          ⏱️ Leva menos de 1 minuto
        </p>
      </div>
    </div>
  );
};

export default QuizIntro;
