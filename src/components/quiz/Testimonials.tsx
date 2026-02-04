import { Star } from "lucide-react";

const testimonials = [
  {
    name: "M. 28",
    text: "Achei que era frescura minha, mas quando vi o resultado entendi que era sério. Comecei a aplicar as técnicas e em uma semana já dormia melhor."
  },
  {
    name: "L. 34",
    text: "O quiz me fez perceber que não era 'só estresse'. O método é simples e direto — sem enrolação."
  },
  {
    name: "R. 41",
    text: "Finalmente algo que não promete milagre. São passos práticos que eu consigo fazer mesmo cansada."
  }
];

export const Testimonials = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center text-muted-foreground">
        O que outras pessoas disseram
      </h3>
      <div className="space-y-3">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="p-4 bg-card/50 rounded-xl border border-border/30"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-hope text-hope" />
              ))}
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-2">
              "{testimonial.text}"
            </p>
            <p className="text-xs text-muted-foreground">— {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
