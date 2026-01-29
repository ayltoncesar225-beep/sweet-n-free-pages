import { Smartphone, Clock, Battery, Frown } from "lucide-react";

const painPoints = [
  {
    icon: Smartphone,
    text: "Abre o celular sem nem perceber",
  },
  {
    icon: Clock,
    text: "Começa tarefas e não consegue terminar",
  },
  {
    icon: Battery,
    text: "Vive cansado, mesmo sem esforço físico",
  },
  {
    icon: Frown,
    text: "Nada parece realmente motivador",
  },
];

export const PainSection = () => {
  return (
    <section className="section-spacing bg-pain-soft">
      <div className="container max-w-lg mx-auto">
        <h2 className="text-section-title text-foreground text-center mb-6">
          Isso parece familiar?
        </h2>

        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card p-4 rounded-xl border border-pain/20"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-pain/10 rounded-full flex items-center justify-center">
                <point.icon className="w-5 h-5 text-pain" />
              </div>
              <p className="text-body-lg text-foreground">{point.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-muted-foreground text-sm">
          Se você marcou pelo menos 2 itens, continue lendo...
        </p>
      </div>
    </section>
  );
};
