import { BookOpen, Users, Timer } from "lucide-react";

export const ProductSection = () => {
  return (
    <section className="section-spacing bg-calm-soft">
      <div className="container max-w-lg mx-auto text-center">
        <h2 className="text-section-title text-foreground mb-4">
          Apresentamos o{" "}
          <span className="text-calm">Detox de Dopamina</span>
        </h2>

        <p className="text-body-lg text-muted-foreground mb-8">
          Um método prático de 7 dias, criado para pessoas comuns, com rotina real — 
          não para monges ou influencers fitness.
        </p>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-card p-4 rounded-xl text-center">
            <BookOpen className="w-6 h-6 text-calm mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Formato</p>
            <p className="font-semibold text-foreground text-sm">PDF</p>
          </div>

          <div className="bg-card p-4 rounded-xl text-center">
            <Timer className="w-6 h-6 text-calm mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Duração</p>
            <p className="font-semibold text-foreground text-sm">7 dias</p>
          </div>

          <div className="bg-card p-4 rounded-xl text-center">
            <Users className="w-6 h-6 text-calm mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Para</p>
            <p className="font-semibold text-foreground text-sm">Todos</p>
          </div>
        </div>
      </div>
    </section>
  );
};
