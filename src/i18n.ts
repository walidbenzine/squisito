
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslation from '../public/locales/fr.json';
import itTranslation from '../public/locales/it.json';
import enTranslation from '../public/locales/en.json';

const resources = {
  fr: {
    translation: frTranslation
  },
  it: {
    translation: itTranslation
  },
  en: {
    translation: enTranslation,
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false // non nécessaire pour React
    }
  });

export default i18n;
