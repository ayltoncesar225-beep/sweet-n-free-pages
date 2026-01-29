import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CHECKOUT_URL = "https://pay.kiwify.com.br/E9DaRtf";

export const CTAButton = ({ children, className = "" }: CTAButtonProps) => {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-button flex items-center justify-center gap-2 ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
};
