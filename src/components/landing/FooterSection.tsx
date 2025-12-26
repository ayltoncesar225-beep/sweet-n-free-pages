import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/aB0AfY5";

const FooterSection = () => {
  return (
    <footer className="bg-chocolate text-cream">
      {/* Final CTA */}
      <div className="py-10 md:py-16 border-b border-cream/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Pronto para Transformar Sua{" "}
            <span className="text-primary">Confeitaria</span>?
          </h2>
          <p className="text-cream/80 text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
            Junte-se a mais de 5.000 pessoas que já descobriram o prazer de 
            fazer bolos deliciosos e saudáveis. Aproveite o preço especial!
          </p>
          <Button
            variant="cta"
            size="xl"
            className="w-full md:w-auto animate-pulse-soft text-base md:text-xl"
            asChild
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Quero Meu Ebook por R$ 19,90!
            </a>
          </Button>
          <p className="text-cream/60 text-xs md:text-sm mt-4">
            ⏰ Oferta por tempo limitado — Garanta agora!
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl">🍰</span>
              <span className="font-display text-lg md:text-xl font-bold">
                Receitas Saudáveis
              </span>
            </div>

            {/* Links */}
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-cream/60">
              <a href="#" className="hover:text-cream transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-cream transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-cream transition-colors">
                Contato
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-xs md:text-sm text-cream/60">
              <span>Feito com</span>
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
              <span>© 2024</span>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-cream/10 text-center text-[10px] md:text-xs text-cream/40">
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
