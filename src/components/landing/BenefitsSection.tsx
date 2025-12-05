import { Check, Clock, DollarSign, Heart, Leaf, Sparkles, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Receitas Rápidas e Práticas",
    description: "Prepare bolos deliciosos em menos de 40 minutos",
  },
  {
    icon: Heart,
    title: "Ideal para Dietas Restritivas",
    description: "100% sem glúten, sem lactose e sem açúcar refinado",
  },
  {
    icon: DollarSign,
    title: "Ingredientes Econômicos",
    description: "Use ingredientes simples que você encontra em qualquer mercado",
  },
  {
    icon: Sparkles,
    title: "Bolos Fofinhos e Saborosos",
    description: "Texturas perfeitas que surpreendem até os mais exigentes",
  },
  {
    icon: Users,
    title: "Perfeito para Toda a Família",
    description: "Receitas aprovadas por crianças e adultos",
  },
  {
    icon: Leaf,
    title: "Alternativa Saudável",
    description: "Adoçantes naturais e farinhas nutritivas",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block bg-terracotta-light text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Por que escolher nosso ebook?
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-chocolate mb-4 md:mb-6">
            Benefícios que Transformam sua{" "}
            <span className="text-primary">Cozinha</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Descubra como é fácil preparar sobremesas incríveis que cuidam da sua saúde
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-5 md:p-6 bg-background rounded-xl md:rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-terracotta-light rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary transition-colors duration-300">
                <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-10 md:mt-16 p-5 md:p-8 bg-sage-light rounded-xl md:rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4 text-center md:text-left">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-sage rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground">
                  Perfeito para Vender ou Presentear
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Amplie seu cardápio de confeitaria saudável
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sage font-semibold text-sm md:text-base">
              <span className="text-2xl md:text-3xl">🎁</span>
              <span>Bônus exclusivo incluído!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
