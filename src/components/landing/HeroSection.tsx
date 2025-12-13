import { Button } from "@/components/ui/button";
import { ChefHat, Heart, Sparkles } from "lucide-react";
import heroCakes from "@/assets/hero-cakes.jpg";

const CHECKOUT_URL = "https://pay.cakto.com.br/k3266ew?affiliate=JBer4Ln4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-terracotta-light rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-40 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 bg-sage-light rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] lg:min-h-[80vh]">
          {/* Content */}
          <div className="space-y-5 md:space-y-8 animate-slide-up order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sage-light text-sage px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span>100% Natural e Saudável</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-chocolate leading-tight">
              Aprenda a Fazer{" "}
              <span className="text-primary">Doces Deliciosos</span> e Saudáveis
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-chocolate-light font-display">
              Sem Glúten, Sem Lactose e Sem Açúcar — Prontos em Minutos!
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              150 Receitas Exclusivas para você saborear doces incríveis sem abrir mão da saúde. 
              Perfeito para toda a família!
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <ChefHat className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span> 150 Receitas Exclusivas</span>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span>Aprovado por Nutricionistas</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full md:w-auto text-base md:text-xl px-8 md:px-12"
                asChild
              >
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  Quero Receitas Saudáveis Agora!
                </a>
              </Button>
            </div>

            {/* Urgency */}
            <p className="text-xs md:text-sm text-primary font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Oferta por tempo limitado — Garanta o seu!
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-medium">
              <img
                src={heroCakes}
                alt="Bolos saudáveis sem glúten, sem lactose e sem açúcar"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-card p-3 md:p-4 rounded-xl md:rounded-2xl shadow-medium animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-sage-light rounded-full flex items-center justify-center">
                  <span className="text-xl md:text-2xl">🍰</span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm md:text-base">+5.000</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
