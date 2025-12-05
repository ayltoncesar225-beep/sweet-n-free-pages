import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ContentSection from "@/components/landing/ContentSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ContentSection />
      <TargetAudienceSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
