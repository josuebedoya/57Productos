import 'react-i18next';
import translationEN from './locales/en.json';

declare module 'react-i18next' {
  type DefaultResources = typeof translationEN;

  interface CustomTypeOptions {
    translation: DefaultResources;
  }
}