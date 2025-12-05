import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const FooterSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-chocolate text-cream">
      {/* Final CTA */}
      <div className="py-16 border-b border-cream/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Pronto para Transformar Sua{" "}
            <span className="text-primary">Confeitaria</span>?
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-8">
            Junte-se a mais de 5.000 pessoas que já descobriram o prazer de 
            fazer bolos deliciosos e saudáveis. Aproveite o preço especial!
          </p>
          <Button
            variant="cta"
            size="xl"
            onClick={scrollToOffer}
            className="animate-pulse-soft"
          >
            Quero Meu Ebook por R$ 19,90!
          </Button>
          <p className="text-cream/60 text-sm mt-4">
            ⏰ Oferta por tempo limitado — Garanta agora!
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍰</span>
              <span className="font-display text-xl font-bold">
                Receitas Saudáveis
              </span>
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-cream/60">
              <a href="#" className="hover:text-cream transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-cream transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-cream transition-colors">
                Contato
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-cream/60">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>© 2024</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-cream/10 text-center text-xs text-cream/40">
            <p>
              Este produto não substitui o acompanhamento médico ou nutricional. 
              Consulte sempre um profissional de saúde antes de fazer mudanças na sua dieta.
              As imagens são meramente ilustrativas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
