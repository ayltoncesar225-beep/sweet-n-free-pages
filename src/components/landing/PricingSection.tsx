import { Button } from "@/components/ui/button";
import { Check, Gift, Zap, Clock } from "lucide-react";

const includedFeatures = [
  "20 receitas exclusivas testadas",
  "Passo a passo detalhado",
  "Lista de ingredientes acessíveis",
  "Dicas de preparo profissional",
  "Tabela de substituições",
  "Acesso vitalício",
  "Atualizações gratuitas",
];

const PricingSection = () => {
  return (
    <section id="oferta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            Oferta Especial por Tempo Limitado
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6">
            Garanta Seu Ebook com{" "}
            <span className="text-primary">Desconto Exclusivo</span>
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-card rounded-3xl overflow-hidden shadow-medium">
            {/* Ribbon */}
            <div className="absolute top-4 right-4">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Zap className="w-4 h-4" />
                60% OFF
              </div>
            </div>

            <div className="p-8 md:p-10">
              {/* Product Title */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  20 Receitas de Bolos Saudáveis
                </h3>
                <p className="text-muted-foreground">
                  Sem Glúten • Sem Lactose • Sem Açúcar
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-muted-foreground line-through">
                    R$ 49,90
                  </span>
                  <span className="bg-sage-light text-sage px-3 py-1 rounded-full text-sm font-medium">
                    Economize R$ 30
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="font-display text-6xl font-bold text-primary">
                    19
                  </span>
                  <span className="text-2xl text-primary font-bold">,90</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Pagamento único • Acesso vitalício
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-sage-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-sage" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bonus */}
              <div className="bg-terracotta-light rounded-xl p-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">BÔNUS EXCLUSIVO</p>
                    <p className="text-sm text-muted-foreground">
                      Mini Guia de Substituições Saudáveis (valor: R$ 19,90)
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button variant="cta" size="xl" className="w-full mb-4">
                Baixar Ebook por Apenas R$ 19,90
              </Button>

              {/* Urgency */}
              <div className="flex items-center justify-center gap-2 text-sm text-primary">
                <Clock className="w-4 h-4" />
                <span className="font-medium">
                  Oferta válida por tempo limitado!
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-secondary px-8 py-4">
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  🔒 Pagamento Seguro
                </span>
                <span className="flex items-center gap-1">
                  ✉️ Entrega por E-mail
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl mb-2">💳</div>
            <p className="text-sm text-muted-foreground">Cartão, Pix ou Boleto</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🔐</div>
            <p className="text-sm text-muted-foreground">SSL Certificado</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📧</div>
            <p className="text-sm text-muted-foreground">Acesso Imediato</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <p className="text-sm text-muted-foreground">7 Dias de Garantia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
