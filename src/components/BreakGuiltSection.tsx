import { AlertCircle, CheckCircle } from "lucide-react";

export const BreakGuiltSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-lg mx-auto">
        <div className="card-soft">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-calm flex-shrink-0 mt-0.5" />
            <h2 className="text-section-title text-foreground">
              A culpa não é sua.
            </h2>
          </div>

          <div className="space-y-4 text-body-lg text-muted-foreground">
            <p>
              Você não é preguiçoso e nem tem falta de disciplina.
            </p>
            
            <p>
              O problema é que seu cérebro foi{" "}
              <strong className="text-foreground">programado para buscar recompensas rápidas</strong>{" "}
              — notificações, redes sociais, vídeos curtos...
            </p>

            <p>
              Isso gera um ciclo de vício que{" "}
              <span className="text-pain font-medium">esgota sua dopamina</span> e rouba sua capacidade de focar nas coisas que realmente importam.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">
                A boa notícia? Esse ciclo pode ser quebrado em apenas 7 dias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
