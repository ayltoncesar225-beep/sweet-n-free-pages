import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
}

export const CTAButton = ({ text, href, onClick, showArrow = true, className = "" }: CTAButtonProps) => {
  const handleClick = () => {
    if (href) {
      // Meta Pixel - Track InitiateCheckout
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout', {
          content_name: 'quiz_cta'
        });
      }
      window.open(href, '_blank', 'noopener,noreferrer');
    }
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`btn-cta w-full flex items-center justify-center gap-3 ${className}`}
    >
      <span>{text}</span>
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};
