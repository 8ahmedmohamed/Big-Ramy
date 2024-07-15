// I18Next
import Translations from 'i18next';
import { initReactI18next } from 'react-i18next';

// Json File
import TranslateList from './translateList.json';

// Get Languages
async function getLanguages () {
    const languages = {};

    for (let Index = 0; Index < TranslateList.MODULE.length; Index++) {
        const Module = TranslateList.MODULE[Index];
    
        // English File
        const LangEN = import(`./Languages/${Module.NAME}/en.json`);
        await LangEN.then((file) => languages.en = { ...languages.en, [Module.NAME]: file.default });
    
        // Arabic File
        const LangAR = import(`./Languages/${Module.NAME}/ar.json`);
        await LangAR.then((file) => languages.ar = { ...languages.ar, [Module.NAME]: file.default });
    }
    return languages;
}

// Translation
Translations
    .use(initReactI18next)
    .init({
        keySeparator: false,
        resources: await getLanguages(),
        interpolation: { escapeValue: false },
        fallbackLng: localStorage.language || 'en'
    }).then();