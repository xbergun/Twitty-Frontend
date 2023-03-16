import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translation.json';
import tr from './tr/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        tr: {
            translation: tr,
        },
    },
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
