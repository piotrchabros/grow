import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonEn from './locales/en/common.json';
import commonPl from './locales/pl/common.json';

interface AppResources {
  en?: Record<string, unknown>;
  pl?: Record<string, unknown>;
}

export function initI18n(appResources?: AppResources) {
  const enTranslation = {
    ...commonEn,
    ...(appResources?.en ?? {}),
  };

  const plTranslation = {
    ...commonPl,
    ...(appResources?.pl ?? {}),
  };

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: enTranslation },
        pl: { translation: plTranslation },
      },
      fallbackLng: 'en',
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['navigator'],
      },
    });

  return i18n;
}
