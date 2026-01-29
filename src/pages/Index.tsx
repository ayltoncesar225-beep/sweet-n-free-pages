import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { BreakGuiltSection } from "@/components/BreakGuiltSection";
import { ProductSection } from "@/components/ProductSection";
import { MethodSection } from "@/components/MethodSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainSection />
      <BreakGuiltSection />
      <ProductSection />
      <MethodSection />
      <BenefitsSection />
      <WhatYouGetSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
