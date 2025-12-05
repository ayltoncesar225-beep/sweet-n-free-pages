import { Baby, ChefHat, Heart, Scale, Stethoscope, Users } from "lucide-react";

const audiences = [
  {
    icon: Stethoscope,
    title: "Intolerantes e Alérgicos",
    description: "Pessoas com intolerância a glúten ou lactose que não abrem mão de uma sobremesa deliciosa",
  },
  {
    icon: Scale,
    title: "Quem Quer Emagrecer",
    description: "Para quem busca reduzir açúcar e comer bem sem sentir que está de dieta",
  },
  {
    icon: Heart,
    title: "Diabéticos e Pré-diabéticos",
    description: "Receitas seguras com adoçantes naturais que não elevam a glicemia",
  },
  {
    icon: ChefHat,
    title: "Confeiteiros(as)",
    description: "Profissionais que querem ampliar o cardápio com opções saudáveis e lucrativas",
  },
  {
    icon: Baby,
    title: "Mães e Pais",
    description: "Que buscam sobremesas saudáveis e gostosas para toda a família",
  },
  {
    icon: Users,
    title: "Amantes de Confeitaria",
    description: "Qualquer pessoa que ama bolos e quer versões mais nutritivas",
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Para quem é este ebook?
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-chocolate mb-4 md:mb-6">
            Este Ebook Foi Feito{" "}
            <span className="text-primary">Especialmente</span> Para Você
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Se você se identifica com algum desses perfis, este ebook vai transformar sua relação com a confeitaria
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative p-5 md:p-6 bg-card rounded-xl md:rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-terracotta-light rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-sage-light rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <audience.icon className="w-6 h-6 md:w-7 md:h-7 text-sage" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-base md:text-lg text-foreground font-medium mb-1 md:mb-2">
            Reconheceu algum desses perfis?
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Então você está a um passo de revolucionar sua confeitaria! 👇
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
