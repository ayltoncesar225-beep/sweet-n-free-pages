import { FileText, CheckSquare, Zap } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Ebook completo em PDF",
    description: "Método detalhado para os 7 dias",
  },
  {
    icon: CheckSquare,
    title: "Checklist prático",
    description: "Para acompanhar sua evolução diária",
  },
  {
    icon: Zap,
    title: "Acesso imediato",
    description: "Receba tudo após a confirmação",
  },
];

export const WhatYouGetSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-lg mx-auto">
        <h2 className="text-section-title text-foreground text-center mb-6">
          O que você recebe
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="card-soft flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-calm-soft rounded-xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-calm" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
