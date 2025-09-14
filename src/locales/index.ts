import enCommon from "./en/common.json";
import enNavigation from "./en/navigation.json";
import enForms from "./en/forms.json";

import arCommon from "./ar/common.json";
import arNavigation from "./ar/navigation.json";
import arForms from "./ar/forms.json";

type TranslationObject = { [key: string]: string };

export const translations: { en: TranslationObject; ar: TranslationObject } = {
  en: {
    ...enCommon,
    ...enNavigation,
    ...enForms,
  },
  ar: {
    ...arCommon,
    ...arNavigation,
    ...arForms,
  },
};

export const getTranslation = (language: "en" | "ar", key: string) => {
  return translations[language]?.[key] || key;
};
