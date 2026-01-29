import { Check } from "lucide-react";

const benefits = [
  "Mais foco e clareza mental",
  "Menos ansiedade no dia a dia",
  "Mais energia e disposição",
  "Menos dependência do celular",
  "Prazer nas coisas simples",
  "Motivação genuína para agir",
];

export const BenefitsSection = () => {
  return (
    <section className="section-spacing bg-success-soft">
      <div className="container max-w-lg mx-auto">
        <h2 className="text-section-title text-foreground text-center mb-6">
          O que você vai conquistar
        </h2>

        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card p-4 rounded-xl"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-success-foreground" />
              </div>
              <p className="text-foreground font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
