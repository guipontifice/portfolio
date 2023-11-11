import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import cookies from 'js-cookie';

function getLoadPath() {
    const lng = cookies.get('i18next') || 'en';
    const base = import.meta.env.BASE_URL || ''; // Vite base path
    return `${base}assets/locales/${lng}/translation.json`;
}
// Initialize i18next with language detection and HTTP backend
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'fr', 'es', 'pt'],
        fallbackLng: false, // fixed a typo in fallbackLng
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: getLoadPath
        },
    });


// Additionally, log the constructed path to verify how `{{lng}}` is replaced
console.log('Constructed URL:', i18next.services.backendConnector.backend.options.loadPath);
