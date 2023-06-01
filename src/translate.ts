import kz from './assets/i18n/kz.json';
import en from './assets/i18n/en.json';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resour = {
    en: {
        translation: en,
    },
    kz: {
        translation: kz,
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "HELLO": "Hello, I'm"
                }
            },
            kz: {
                translation: {
                    "HELLO": "Салем, мен"
                }
            }
        },
        lng: 'kz',
        // detection: {
        //     order: ['htmlTag', 'localStorage', 'cookie', 'path', 'subdomain'],
        //     caches: ['localStorage'],
        // },
        // react: {useSuspense: false},
        // interpolation: {
        //     escapeValue: false
        // },
    });


