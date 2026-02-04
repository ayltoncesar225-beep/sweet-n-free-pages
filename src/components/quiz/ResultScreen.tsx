import { AlertCircle, Check, ArrowRight } from "lucide-react";
import { ProductBlock } from "./ProductBlock";
import { Testimonials } from "./Testimonials";
import { CTAButton } from "./CTAButton";

// Import result images
import resultLowImg from "@/assets/quiz-result-low.jpg";
import resultMidImg from "@/assets/quiz-result-mid.jpg";
import resultHighImg from "@/assets/quiz-result-high.jpg";

const CHECKOUT_URL = "https://pay.kiwify.com.br/PxYvQLR?afid=WiVayn5V";

interface ResultScreenProps {
  score: number;
}

type ResultLevel = 'low' | 'mid' | 'high';

interface ResultData {
  level: ResultLevel;
  title: string;
  description: string;
  image: string;
  bullets: string[];
  steps: string[];
}

const getResultData = (score: number): ResultData => {
  if (score <= 3) {
    return {
      level: 'low',
      title: "Sinais iniciais de sobrecarga",
      description: "Você ainda consegue tocar a vida, mas a ansiedade já está deixando marcas.",
      image: resultLowImg,
      bullets: [
        "Noites levemente agitadas, mas ainda funcionais",
        "Tensão ocasional que passa rápido",
        "Pequenas preocupações que não dominam o dia"
      ],
      steps: [
        "Reserve 2 min antes de dormir para respiração lenta (4-7-8)",
        "Anote uma preocupação no papel e 'deixe lá' antes de deitar",
        "Reduza telas 30 min antes de dormir"
      ]
    };
  } else if (score <= 8) {
    return {
      level: 'mid',
      title: "Ansiedade drenando sua energia",
      description: "Seu corpo e sua mente estão pedindo pausa — não é preguiça, é excesso.",
      image: resultMidImg,
      bullets: [
        "Dificuldade para 'desligar' mesmo quando quer descansar",
        "Tensão física frequente (ombros, peito, mandíbula)",
        "Pensamentos repetitivos que drenam sua energia"
      ],
      steps: [
        "Faça pausas intencionais de 5 min a cada 2 horas",
        "Use a técnica 5-4-3-2-1 quando sentir a mente acelerar",
        "Identifique 1 gatilho recorrente e crie um plano simples"
      ]
    };
  } else {
    return {
      level: 'high',
      title: "Modo alerta constante",
      description: "Você não precisa aguentar isso calado(a). Dá pra começar a retomar o controle com um caminho simples.",
      image: resultHighImg,
      bullets: [
        "Picos de ansiedade frequentes ou intensos",
        "Medo de perder o controle ou ter crises",
        "Evitar situações por medo de não dar conta"
      ],
      steps: [
        "Reconheça: seu sistema nervoso está sobrecarregado, não você",
        "Comece com micro-pausas de 60 segundos (respiração + presença)",
        "Busque um método guiado para não precisar descobrir sozinho(a)"
      ]
    };
  }
};

export const ResultScreen = ({ score }: ResultScreenProps) => {
  const result = getResultData(score);

  // Meta Pixel - Track CompleteRegistration (quiz completion)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'CompleteRegistration', {
      content_name: 'quiz_result',
      status: result.level,
      value: score
    });
  }

  return (
    <div className="space-y-8 slide-up">
      {/* Result Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>Seu resultado</span>
        </div>
        <h1 className="text-2xl font-serif font-bold leading-tight">
          {result.title}
        </h1>
      </div>

      {/* Result Image */}
      <img 
        src={result.image} 
        alt="Resultado do quiz"
        className="quiz-image"
      />

      {/* Description */}
      <p className="text-lg text-foreground/90 leading-relaxed text-center">
        {result.description}
      </p>

      {/* Impact Bullets */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          O que pode estar acontecendo:
        </h3>
        {result.bullets.map((bullet, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
            <div className="mt-0.5 w-2 h-2 rounded-full bg-hope flex-shrink-0" />
            <p className="text-sm text-foreground/80">{bullet}</p>
          </div>
        ))}
      </div>

      {/* Practical Steps */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          3 passos práticos para agora:
        </h3>
        {result.steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
            <div className="mt-0.5 p-1 rounded-full bg-primary/20 flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <p className="text-sm text-foreground/90">{step}</p>
          </div>
        ))}
      </div>

      {/* Product Offer */}
      <ProductBlock level={result.level} />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <div className="space-y-4 pt-4">
        <CTAButton 
          text="Quero começar agora" 
          href={CHECKOUT_URL}
        />
        <p className="text-xs text-center text-muted-foreground">
          Acesso imediato • Direto ao ponto • Você no controle
        </p>
      </div>

      {/* Disclaimer */}
      <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
        <p className="text-xs text-muted-foreground leading-relaxed text-center">
          <strong>Aviso importante:</strong> Isso não substitui acompanhamento profissional. 
          Se você estiver em crise ou com sofrimento intenso, procure ajuda. 
          Em emergência, ligue <strong>188 (CVV)</strong>.
        </p>
      </div>
    </div>
  );
};
