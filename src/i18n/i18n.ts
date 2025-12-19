import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
// @ts-ignore
import en from './locales/en.json';
// @ts-ignore
import es from './locales/es.json';

const resources = {
  en: {translation: en},
  es: {translation: es},
} as const;

export const defaultLng = 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLng, // Default language
    fallbackLng: defaultLng,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

