import type { ReactNode } from 'react';

export interface MegamenuItem {
  labelKey: string;
  descriptionKey: string;
  href: string;
  icon?: ReactNode;
}

export interface MegamenuCategory {
  labelKey: string;
  items: MegamenuItem[];
}

export interface MegamenuConfig {
  categories: MegamenuCategory[];
}
