import i18next from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    load: 'languageOnly',
    addPath: '../public/assets/locales/add/{{lng}}/translation',
    supportedLngs: ['en', 'fr', 'es', 'pt'],
    fallbackLgn: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/portfolio/public/assets/locales/{{lng}}/translation.json'
    },
    allowMultiLoading: false,
  })

export default i18next