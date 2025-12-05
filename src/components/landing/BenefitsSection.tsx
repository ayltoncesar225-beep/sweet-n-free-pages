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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-terracotta-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Por que escolher nosso ebook?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6">
            Benefícios que Transformam sua{" "}
            <span className="text-primary">Cozinha</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra como é fácil preparar sobremesas incríveis que cuidam da sua saúde
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-terracotta-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 p-8 bg-sage-light rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Perfeito para Vender ou Presentear
                </h3>
                <p className="text-muted-foreground">
                  Amplie seu cardápio de confeitaria saudável
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sage font-semibold">
              <span className="text-3xl">🎁</span>
              <span>Bônus exclusivo incluído!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
