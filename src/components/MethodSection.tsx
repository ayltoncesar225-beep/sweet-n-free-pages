import { CTAButton } from "./CTAButton";

const days = [
  { day: 1, title: "Consciência e reset mental" },
  { day: 2, title: "Limpeza digital" },
  { day: 3, title: "Redução de estímulos artificiais" },
  { day: 4, title: "Reconstrução do foco" },
  { day: 5, title: "Dopamina saudável" },
  { day: 6, title: "Rotina mínima produtiva" },
  { day: 7, title: "Consolidação dos hábitos" },
];

export const MethodSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-lg mx-auto">
        <h2 className="text-section-title text-foreground text-center mb-2">
          O Método de 7 Dias
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Passo a passo simples e prático
        </p>

        <div className="space-y-3 mb-8">
          {days.map(({ day, title }) => (
            <div
              key={day}
              className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-calm text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {day}
              </div>
              <p className="text-foreground font-medium">{title}</p>
            </div>
          ))}
        </div>

        <CTAButton>Começar meu detox agora</CTAButton>
      </div>
    </section>
  );
};
