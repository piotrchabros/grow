/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_GROW: string;
  readonly VITE_URL_MARKETING: string;
  readonly VITE_URL_CONSULTING: string;
  readonly VITE_URL_TECHNOLOGY: string;
  readonly VITE_URL_AI: string;
  readonly VITE_URL_ECOMMERCE: string;
  readonly VITE_URL_MARKETING_ECOMMERCE: string;
  readonly VITE_URL_CONSULTING_ECOMMERCE: string;
  readonly VITE_URL_TECH_ECOMMERCE: string;
  readonly VITE_URL_AI_ECOMMERCE: string;
  readonly VITE_CALCOM_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
