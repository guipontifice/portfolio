import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { pt } from '../public/assets/locales/pt/translation.json';
import { en } from '../public/assets/locales/en/translation.json';
import { es } from '../public/assets/locales/es/translation.json';
const options = {
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  
    debug: true,
  
    resources: {
      pt: {
        common: pt['pt'],
      },
      en: {
        common: en.en,
      },
      es: {
        common: es['es']
      }
    },
  
    fallbackLng: 'en',
  
    ns: ['common'],
  
    defaultNS: 'common',
  
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    },
  };
  
  i18n
    .use(LanguageDetector)
    .init(options)
    .changeLanguage('en', (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
  
  export default i18n;