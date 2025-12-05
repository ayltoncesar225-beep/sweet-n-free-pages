import { Shield, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-sage-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Shield Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-sage rounded-full flex items-center justify-center">
                  <Shield className="w-16 h-16 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <span className="inline-block bg-sage text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Garantia Incondicional
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-chocolate mb-4">
                  7 Dias de Garantia{" "}
                  <span className="text-primary">100% do Seu Dinheiro</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Se você não amar as receitas, se não conseguir fazer bolos incríveis, 
                  ou simplesmente mudar de ideia — devolvemos <strong>100% do seu dinheiro</strong>. 
                  Sem perguntas, sem burocracia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-sage" />
                    <span>Reembolso em até 24h</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-sage" />
                    <span>Sem perguntas</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-sage" />
                    <span>Compra segura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
