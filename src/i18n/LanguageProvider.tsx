import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Language, TranslationKeys } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
}

export function LanguageProvider({
  children,
  defaultLanguage = "en",
  storageKey = "app-language",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(storageKey);
    return (stored as Language) || defaultLanguage;
  });

  const isRTL = language === "ar";

  useEffect(() => {
    localStorage.setItem(storageKey, language);
    
    // Update document direction and language
    const root = document.documentElement;
    root.dir = isRTL ? "rtl" : "ltr";
    root.lang = language;
  }, [language, isRTL, storageKey]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}