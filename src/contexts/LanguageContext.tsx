import React, {
  createContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { translations } from "@/locales";
import type { Language } from "@/types";

export interface LanguageContextType {
  language: Language;
  isRTL: boolean;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const [isRTL, setIsRTL] = useState<boolean>(false);

  const toggleLanguage = (): void => {
    const newLanguage: Language = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    setIsRTL(newLanguage === "ar");

    // Update document attributes
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  const value: LanguageContextType = {
    language,
    isRTL,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
