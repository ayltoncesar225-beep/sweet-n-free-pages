import { Shield } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="section-spacing">
      <div className="container max-w-lg mx-auto">
        <div className="card-soft bg-success-soft border-success/20 text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-success" />
          </div>

          <h2 className="text-section-title text-foreground mb-4">
            Garantia de 7 dias
          </h2>

          <p className="text-body-lg text-muted-foreground">
            Se você aplicar o método e sentir que não fez diferença na sua vida, 
            basta enviar um e-mail e devolvemos 100% do seu dinheiro.{" "}
            <strong className="text-foreground">Sem perguntas, sem burocracia.</strong>
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Você não tem nada a perder — apenas foco a ganhar.
          </p>
        </div>
      </div>
    </section>
  );
};
