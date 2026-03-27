"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import { Locale, Translations, translations } from "./translations";

interface I18nContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  t: translations.en,
  setLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("mazely-locale") as Locale | null;
    if (saved && translations[saved]) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
      return;
    }
    const browserLang = navigator.language.slice(0, 2) as Locale;
    if (translations[browserLang]) {
      setLocaleState(browserLang);
      document.documentElement.lang = browserLang;
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("mazely-locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  return (
    <I18nContext.Provider
      value={{ locale, t: translations[locale], setLocale }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
