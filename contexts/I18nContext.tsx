import * as Localization from 'expo-localization';
import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";

const I18nContext = createContext({});

export const useI18nContext = () => {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error("useI18nContext must be used within an I18nContextProvider");
    }
    return context;
}

export const I18nContextProvider = ({ children }: { children: React.ReactNode}) => {
    const [locale, setLocale] = useState<string | null>();

    const updateLocale = async (locale: string) => {
        await AsyncStorage.setItem('javazone_locale', locale);
        i18next.changeLanguage(locale);
        setLocale(locale);
    }

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
        }
        loadLocales();
    }, [locale]);

    return (
        <I18nContext.Provider value={{
            setLocale: async (locale: string) => await updateLocale(locale),
            locale
        }}>
            {children}
        </I18nContext.Provider>
    )
}