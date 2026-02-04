import { Check, Clock, Shield, Zap } from "lucide-react";
import { CTAButton } from "./CTAButton";

const CHECKOUT_URL = "https://pay.kiwify.com.br/PxYvQLR?afid=WiVayn5V";

interface ProductBlockProps {
  level: 'low' | 'mid' | 'high';
}

const levelTitles = {
  low: "Organize sua mente com passos simples",
  mid: "Um plano guiado para reduzir a ansiedade",
  high: "Retome o controle com um método claro"
};

const ctaTexts = {
  low: "Quero organizar minha mente agora",
  mid: "Quero um passo a passo",
  high: "Quero começar agora"
};

export const ProductBlock = ({ level }: ProductBlockProps) => {
  const benefits = [
    "Ferramentas rápidas pra quando a mente acelerar",
    "Técnicas simples para reduzir picos de ansiedade",
    "Rotina prática para desligar à noite e dormir melhor",
    "Como interromper o looping de pensamentos",
    "Um caminho claro pra você seguir sem se sentir sozinho(a)"
  ];

  return (
    <div className="result-card p-6 space-y-6">
      <h3 className="text-xl font-serif font-semibold text-center leading-tight">
        {levelTitles[level]}
      </h3>

      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-0.5 p-1 rounded-full bg-primary/20">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">{benefit}</p>
          </div>
        ))}
      </div>

      <CTAButton 
        text={ctaTexts[level]} 
        href={CHECKOUT_URL}
      />

      <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Zap className="w-3 h-3" />
          <span>Acesso imediato</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>Direto ao ponto</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className="w-3 h-3" />
          <span>Você no controle</span>
        </div>
      </div>
    </div>
  );
};
