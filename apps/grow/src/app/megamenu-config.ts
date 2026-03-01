import type { MegamenuConfig } from '@org/shared-megamenu';

export function getMegamenuConfig(): MegamenuConfig {
  return {
    categories: [
      {
        labelKey: 'nav.solutions',
        items: [
          {
            labelKey: 'nav.marketing',
            descriptionKey: 'nav.marketing.description',
            href: import.meta.env.VITE_URL_MARKETING,
          },
          {
            labelKey: 'nav.consulting',
            descriptionKey: 'nav.consulting.description',
            href: import.meta.env.VITE_URL_CONSULTING,
          },
          {
            labelKey: 'nav.technology',
            descriptionKey: 'nav.technology.description',
            href: import.meta.env.VITE_URL_TECHNOLOGY,
          },
          {
            labelKey: 'nav.ai',
            descriptionKey: 'nav.ai.description',
            href: import.meta.env.VITE_URL_AI,
          },
        ],
      },
      {
        labelKey: 'nav.industries',
        items: [
          {
            labelKey: 'nav.ecommerce',
            descriptionKey: 'nav.ecommerce.description',
            href: import.meta.env.VITE_URL_ECOMMERCE,
          },
        ],
      },
    ],
  };
}
