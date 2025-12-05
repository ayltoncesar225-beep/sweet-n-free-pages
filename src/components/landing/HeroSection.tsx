import { Button } from "@/components/ui/button";
import { ChefHat, Heart, Sparkles } from "lucide-react";
import heroCakes from "@/assets/hero-cakes.jpg";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-terracotta-light rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-sage-light rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sage-light text-sage px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>100% Natural e Saudável</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-chocolate leading-tight">
              Aprenda a Fazer{" "}
              <span className="text-primary">Bolos Deliciosos</span> e Saudáveis
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-chocolate-light font-display">
              Sem Glúten, Sem Lactose e Sem Açúcar — Prontos em Minutos!
            </p>

            <p className="text-lg text-muted-foreground max-w-xl">
              20 receitas exclusivas para você saborear bolos incríveis sem abrir mão da saúde. 
              Perfeito para toda a família!
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ChefHat className="w-5 h-5 text-primary" />
                <span>20 Receitas Exclusivas</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                <span>Aprovado por Nutricionistas</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" onClick={scrollToOffer}>
                Quero Receitas Saudáveis Agora!
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToOffer}>
                Ver Oferta Especial
              </Button>
            </div>

            {/* Urgency */}
            <p className="text-sm text-primary font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Oferta por tempo limitado — Garanta o seu!
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-medium">
              <img
                src={heroCakes}
                alt="Bolos saudáveis sem glúten, sem lactose e sem açúcar"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-medium animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sage-light rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍰</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">+5.000</p>
                  <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
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
