import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Isso é difícil de aplicar?",
    answer:
      "Não. O método foi criado para ser simples e prático. Cada dia tem passos claros que qualquer pessoa consegue seguir, mesmo com pouco tempo livre.",
  },
  {
    question: "Preciso parar totalmente de usar o celular?",
    answer:
      "De jeito nenhum. O objetivo não é eliminar o celular, mas usar de forma consciente. Você vai aprender a controlar o uso, não ser controlado por ele.",
  },
  {
    question: "Funciona para quem trabalha o dia todo?",
    answer:
      "Sim! O método foi pensado para pessoas com rotina corrida. As práticas diárias levam poucos minutos e podem ser adaptadas ao seu dia.",
  },
  {
    question: "Em quanto tempo vou sentir diferença?",
    answer:
      "A maioria das pessoas nota mudanças já nos primeiros 3-4 dias. Em 7 dias, a transformação é clara: mais foco, menos ansiedade e mais energia.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-spacing bg-muted">
      <div className="container max-w-lg mx-auto">
        <h2 className="text-section-title text-foreground text-center mb-6">
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-4"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
