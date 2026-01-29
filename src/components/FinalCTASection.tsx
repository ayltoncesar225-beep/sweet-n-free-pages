import { CTAButton } from "./CTAButton";

export const FinalCTASection = () => {
  return (
    <section className="section-spacing bg-calm">
      <div className="container max-w-lg mx-auto text-center text-primary-foreground">
        <h2 className="text-section-title mb-4">
          Pronto para recuperar o controle da sua mente?
        </h2>

        <p className="text-primary-foreground/80 mb-8">
          Daqui a 7 dias, você pode estar se sentindo mais focado, mais leve e 
          mais no controle da sua própria vida.
        </p>

        <CTAButton className="bg-card text-foreground hover:bg-card/90">
          Sim, quero começar agora!
        </CTAButton>

        <p className="mt-4 text-sm text-primary-foreground/70">
          Apenas R$ 19,90 • Acesso imediato • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};
