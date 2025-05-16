import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ta from './ta.json';

export const languageResources = {
  ta: {translation: ta},
  en: {translation: en},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'ta',
  fallbacking: 'ta',
  resources: languageResources,
});

export default i18next;
