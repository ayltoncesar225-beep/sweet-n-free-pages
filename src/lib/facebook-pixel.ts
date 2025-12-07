// Facebook Pixel tracking utilities

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export const trackInitiateCheckout = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: '20 Receitas de Bolos Saudáveis',
      content_category: 'Ebook',
      value: 14.90,
      currency: 'BRL'
    });
  }
};

export const trackLead = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};

export const trackCompleteRegistration = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration');
  }
};
