export const Footer = () => {
  return (
    <footer className="section-spacing py-6 bg-background border-t border-border">
      <div className="container max-w-lg mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} O Detox de Dopamina
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Este produto não substitui acompanhamento médico ou psicológico.
        </p>
      </div>
    </footer>
  );
};
