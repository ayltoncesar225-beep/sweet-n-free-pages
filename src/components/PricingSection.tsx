import { CTAButton } from "./CTAButton";
import { Shield, Clock } from "lucide-react";

export const PricingSection = () => {
  return (
    <section className="section-spacing gradient-cta-section">
      <div className="container max-w-lg mx-auto text-center">
        <h2 className="text-section-title text-foreground mb-2">
          Comece sua transformação hoje
        </h2>
        <p className="text-muted-foreground mb-8">
          Por um valor acessível para qualquer pessoa
        </p>

        <div className="card-soft mb-6 relative overflow-hidden">
          {/* Discount badge */}
          <div className="absolute top-4 right-4 bg-cta text-cta-foreground px-3 py-1 rounded-full text-sm font-bold">
            -60%
          </div>

          <div className="py-4">
            <p className="text-muted-foreground text-sm mb-1">De</p>
            <p className="text-2xl text-muted-foreground line-through mb-2">
              R$ 49,90
            </p>
            <p className="text-muted-foreground text-sm mb-1">Por apenas</p>
            <p className="text-5xl font-bold text-foreground">
              R$ 19<span className="text-3xl">,90</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Pagamento único
            </p>
          </div>
        </div>

        <CTAButton>Começar meu detox de dopamina agora</CTAButton>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-success" />
            <span>Compra 100% segura</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-calm" />
            <span>Acesso imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};
