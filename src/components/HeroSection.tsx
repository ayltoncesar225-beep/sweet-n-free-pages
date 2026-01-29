import { CTAButton } from "./CTAButton";
import { Brain, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="gradient-hero section-spacing pt-12 pb-12">
      <div className="container max-w-lg mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-calm-soft text-calm px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Método de 7 dias</span>
        </div>

        {/* Headline */}
        <h1 className="text-hero text-foreground mb-4 text-balance">
          Você não é preguiçoso.{" "}
          <span className="text-calm">Seu cérebro está sobrecarregado.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-subhero text-muted-foreground mb-8 text-balance">
          Descubra como recuperar foco, motivação e clareza mental em apenas{" "}
          <strong className="text-foreground">7 dias</strong>, sem depender de força de vontade.
        </p>

        {/* Book illustration */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative animate-float">
            <div className="w-44 h-60 bg-gradient-to-br from-calm to-primary rounded-lg shadow-2xl flex flex-col items-center justify-center p-4 text-primary-foreground">
              <Brain className="w-12 h-12 mb-3 opacity-90" />
              <p className="text-xs font-medium opacity-80 uppercase tracking-wide">Ebook</p>
              <p className="text-lg font-bold text-center leading-tight mt-1">O Detox de Dopamina</p>
            </div>
            {/* Shadow effect */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-36 h-4 bg-foreground/10 rounded-full blur-lg" />
          </div>
        </div>

        {/* CTA */}
        <CTAButton>Quero recuperar meu foco agora</CTAButton>

        {/* Trust indicator */}
        <p className="mt-4 text-sm text-muted-foreground">
          ✓ Acesso imediato após a compra
        </p>
      </div>
    </section>
  );
};
