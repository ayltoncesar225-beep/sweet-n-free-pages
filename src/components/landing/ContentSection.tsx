import { BookOpen, ChefHat, Lightbulb, ListChecks, Utensils } from "lucide-react";

const ebookContent = [
  { icon: BookOpen, text: "20 receitas exclusivas e testadas" },
  { icon: ListChecks, text: "Passo a passo simples e ilustrado" },
  { icon: Utensils, text: "Lista de ingredientes acessíveis" },
  { icon: Lightbulb, text: "Dicas extras de preparo saudável" },
  { icon: ChefHat, text: "Sugestões de substituições inteligentes" },
];

const recipes = [
  "Bolo de Chocolate com Cacau 100%",
  "Bolo de Cenoura com Cobertura de Coco",
  "Bolo de Banana com Canela",
  "Bolo de Limão Siciliano",
  "Bolo de Maçã com Especiarias",
  "Bolo Formigueiro Fit",
  "Bolo de Laranja com Amêndoas",
];

const ContentSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-sage-light text-sage px-4 py-2 rounded-full text-sm font-medium mb-4">
              Conteúdo Completo
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-chocolate mb-6">
              O Que Você Vai Encontrar no{" "}
              <span className="text-primary">Ebook</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Um guia completo com tudo que você precisa para dominar a arte dos bolos saudáveis
            </p>

            <div className="space-y-4">
              {ebookContent.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft"
                >
                  <div className="w-12 h-12 bg-terracotta-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Recipe List */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-terracotta-light rounded-full blur-3xl opacity-40" />
            
            <div className="relative bg-card rounded-3xl p-8 shadow-medium">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📖</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Algumas das Receitas
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Veja uma prévia do que você vai aprender
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {recipes.map((recipe, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-secondary transition-colors"
                  >
                    <span className="w-8 h-8 bg-sage-light rounded-full flex items-center justify-center text-sm font-bold text-sage">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{recipe}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 p-3 bg-terracotta-light rounded-lg">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                    +
                  </span>
                  <span className="text-primary font-medium">
                    E mais 13 receitas incríveis!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
