export interface MegamenuItem {
  labelKey: string;
  descriptionKey: string;
  href: string;
}

export interface MegamenuCategory {
  labelKey: string;
  items: MegamenuItem[];
}

export interface MegamenuConfig {
  categories: MegamenuCategory[];
}
