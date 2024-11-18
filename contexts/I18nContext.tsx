import * as Localization from 'expo-localization';
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import { useRouter } from 'expo-router';

const I18nContext = createContext({});

export const useI18nContext = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18nContext must be used within an I18nContextProvider');
  }
  return context;
};

export const I18nContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<string | null>();
  const router = useRouter();

  const updateLocale = async (locale: string) => {
    await AsyncStorage.setItem('javazone_locale', locale);
    await i18next.changeLanguage(locale);
    setLocale(locale);
  };

  useEffect(() => {
    if (locale) return;

    const loadLocales = async () => {
      const storedLocale = await AsyncStorage.getItem('javazone_locale');
      if (storedLocale) {
        setLocale(storedLocale);
      } else {
        const locale = Localization.getLocales()?.[0].languageTag;
        setLocale(locale);
      }
    };
    loadLocales();
  }, [locale]);

  const setLocaleParam = async (locale: string) => {
    const routeLang = locale === 'nb-NO' ? 'no' : 'en';
    await updateLocale(locale);
    router.setParams({ lang: routeLang });
  };

  return (
    <I18nContext.Provider
      value={{
        setLocale: setLocaleParam,
        locale,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};
