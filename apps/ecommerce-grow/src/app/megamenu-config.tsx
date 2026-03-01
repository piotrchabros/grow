import type { MegamenuConfig } from '@org/shared-megamenu';

const MarketingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const ConsultingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const TechnologyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const AiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
    <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
    <path d="M8.56 13a8 8 0 0 0-2.3 3.5" />
    <path d="M15.44 13a8 8 0 0 1 2.3 3.5" />
  </svg>
);

const AboutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export function getMegamenuConfig(): MegamenuConfig {
  return {
    categories: [
      {
        labelKey: 'nav.solutions',
        items: [
          {
            labelKey: 'nav.marketing',
            descriptionKey: 'nav.marketing.description',
            href: import.meta.env.VITE_URL_MARKETING_ECOMMERCE,
            icon: <MarketingIcon />,
          },
          {
            labelKey: 'nav.consulting',
            descriptionKey: 'nav.consulting.description',
            href: import.meta.env.VITE_URL_CONSULTING_ECOMMERCE,
            icon: <ConsultingIcon />,
          },
          {
            labelKey: 'nav.technology',
            descriptionKey: 'nav.technology.description',
            href: import.meta.env.VITE_URL_TECH_ECOMMERCE,
            icon: <TechnologyIcon />,
          },
          {
            labelKey: 'nav.ai',
            descriptionKey: 'nav.ai.description',
            href: import.meta.env.VITE_URL_AI_ECOMMERCE,
            icon: <AiIcon />,
          },
        ],
      },
      {
        labelKey: 'nav.company',
        items: [
          {
            labelKey: 'nav.about',
            descriptionKey: 'nav.about.description',
            href: import.meta.env.VITE_URL_GROW + '/about',
            icon: <AboutIcon />,
          },
          {
            labelKey: 'nav.contact',
            descriptionKey: 'nav.contact.description',
            href: '#contact',
            icon: <ContactIcon />,
          },
        ],
      },
    ],
  };
}
