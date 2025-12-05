import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    location: "São Paulo, SP",
    text: "Sou diabética e achei que nunca mais comeria bolo. Essas receitas mudaram minha vida! O bolo de chocolate fica incrivelmente fofinho.",
    rating: 5,
    avatar: "👩‍🦰",
  },
  {
    name: "Carlos Eduardo",
    location: "Rio de Janeiro, RJ",
    text: "Comprei para minha esposa que tem intolerância à lactose. Ela amou! Agora fazemos bolos toda semana e toda a família come junto.",
    rating: 5,
    avatar: "👨",
  },
  {
    name: "Ana Paula Silva",
    location: "Belo Horizonte, MG",
    text: "Como confeiteira, ampliei meu cardápio com opções fit e triplicou meus pedidos! Os clientes amam e pagam mais por produtos saudáveis.",
    rating: 5,
    avatar: "👩‍🍳",
  },
  {
    name: "Fernanda Lima",
    location: "Curitiba, PR",
    text: "As receitas são práticas demais! Faço em menos de 30 minutos e os ingredientes são super acessíveis. Recomendo muito!",
    rating: 5,
    avatar: "👩",
  },
  {
    name: "Rodrigo Mendes",
    location: "Porto Alegre, RS",
    text: "Perdi 8kg comendo essas receitas no lugar dos doces tradicionais. Não sinto falta de nada, os bolos são deliciosos!",
    rating: 5,
    avatar: "👨‍💼",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-terracotta-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Depoimentos Reais
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6">
            O Que Nossos{" "}
            <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 5.000 pessoas já transformaram sua confeitaria com nosso ebook
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5.000+", label: "Clientes Satisfeitos" },
            { value: "4.9", label: "Avaliação Média" },
            { value: "98%", label: "Taxa de Aprovação" },
            { value: "20", label: "Receitas Exclusivas" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
