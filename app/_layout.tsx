import * as Localization from 'expo-localization';
import { Stack } from 'expo-router/stack';
import { initReactI18next } from "react-i18next";
import { useEffect, useState } from 'react';
import en from '@/services/i18n/en-US.json';
import nb from '@/services/i18n/nb-NO.json';
import i18n from 'i18next';
import { AppState, Platform } from "react-native";
import { I18nContextProvider } from "@/contexts/I18nContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Assets } from "@/Assets";
import * as SystemUI from 'expo-system-ui';

const RootLayout = () => {
    const resources = {en, nb};
    const [ languageLoaded, setLanguageLoaded ] = useState(false); // track if i18n is initialized
    const [ language, setLanguage ] = useState<string | null>(); // language (locale) to use

    useEffect(() => {
        // the root view background color falls outside the React tree, override with system ui
        SystemUI.setBackgroundColorAsync(Assets.colors.gradient.medium);
    }, []);

    useEffect(() => {
        // we either don't have a language, or we've already initialized
        if (!language || languageLoaded) return;

        i18n.use(initReactI18next).init({
            compatibilityJSON: 'v3',
            resources,
            lng: language,
            fallbackLng: 'en',
        });

        setLanguageLoaded(true);
    }, [language, languageLoaded]);

    useEffect(() => {
        const getSystemLanguageAndSet = async () => {
            // get the device's current system locale from expo-localization
            const phoneLocale = Localization.getLocales()?.[0]?.languageTag ?? 'en-US'; // todo: denne henter første språk lagret aka skurken
            setLanguage(phoneLocale);

            if (languageLoaded) router.setParams({ lang: phoneLocale });
        }

        getSystemLanguageAndSet();
    }, []);

    /** app reloads when the system locale is changed for iOS,
     *  this doesn't apply for Android
     *      need to listen for changes to the AppState and manually change the language with i18next
     */
    useEffect(() => {
        if (Platform.OS !== 'android') return;

        // any time app state changes, get and set new locale
        const handleAppStateChange = async () => {
            await i18n.changeLanguage(
                Localization.getLocales()?.[0]?.languageTag ?? 'en-US'
            );
        }

        const subscription = AppState.addEventListener('change', handleAppStateChange);

        return () => {
            subscription.remove();
        }
    }, []);

    // don't load the app until everything is initialized (fonts, assets etc.)
    if (!languageLoaded) return null;

    return (
        <SafeAreaProvider>
            <I18nContextProvider>
                <Stack initialRouteName={`index`} screenOptions={{headerShown: false}}>
                    <Stack.Screen name={`index`} />
                    <Stack.Screen name={`partner`} />
                    <Stack.Screen name={`speaker`} />
                    <Stack.Screen name={`program`} />
                </Stack>
            </I18nContextProvider>
        </SafeAreaProvider>
    );
}
export default RootLayout;