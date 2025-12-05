import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "As receitas são realmente sem glúten, lactose e açúcar?",
    answer:
      "Sim! Todas as 20 receitas foram desenvolvidas 100% livres de glúten, lactose e açúcar refinado. Utilizamos farinhas alternativas (como de amêndoas, aveia sem glúten e coco), leites vegetais e adoçantes naturais como xilitol, eritritol e stevia.",
  },
  {
    question: "Diabéticos podem consumir essas receitas?",
    answer:
      "Sim, as receitas foram pensadas para serem seguras para diabéticos. No entanto, recomendamos sempre consultar seu médico ou nutricionista antes de incluir qualquer novo alimento na dieta, especialmente se você toma medicamentos para controle glicêmico.",
  },
  {
    question: "Preciso de utensílios profissionais para fazer as receitas?",
    answer:
      "Não! Todas as receitas podem ser feitas com utensílios básicos de cozinha: batedeira comum (ou até à mão), formas tradicionais e forno convencional. Nada de equipamentos caros ou profissionais.",
  },
  {
    question: "Posso fazer as receitas para vender?",
    answer:
      "Absolutamente! Muitos de nossos clientes são confeiteiros que usam as receitas para ampliar seu cardápio com opções saudáveis. Você pode comercializar os bolos livremente, mantendo apenas o direito autoral do ebook.",
  },
  {
    question: "Como recebo o ebook após a compra?",
    answer:
      "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download do ebook em PDF. Pagamentos por Pix ou cartão são aprovados em segundos. Boletos podem levar até 3 dias úteis.",
  },
  {
    question: "E se eu não gostar das receitas?",
    answer:
      "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta enviar um e-mail solicitando o reembolso e devolvemos 100% do valor pago, sem perguntas.",
  },
  {
    question: "Os ingredientes são fáceis de encontrar?",
    answer:
      "Sim! Priorizamos ingredientes que você encontra facilmente em supermercados comuns ou lojas de produtos naturais. Nada de ingredientes importados ou difíceis de achar.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-block bg-terracotta-light text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-chocolate mb-4 md:mb-6">
            Perguntas{" "}
            <span className="text-primary">Respondidas</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Tire suas dúvidas antes de garantir seu ebook
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg md:rounded-xl px-4 md:px-6 border-none shadow-soft"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-4 md:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-6 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a
            href="mailto:contato@receitassaudaveis.com"
            className="text-primary font-medium hover:underline text-sm md:text-base"
          >
            contato@receitassaudaveis.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
