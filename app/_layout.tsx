import * as Localization from 'expo-localization';
import * as SystemUI from 'expo-system-ui';
import en from '@/services/i18n/en-US.json';
import nb from '@/services/i18n/nb-NO.json';
import { useEffect, useState } from 'react';
import { I18nContextProvider } from '@/contexts/I18nContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tabs, useGlobalSearchParams, useRouter} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, Platform, StyleSheet } from 'react-native';
import { Stack } from 'expo-router/stack';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Assets } from '@/Assets';
import { BlurView } from 'expo-blur';

const RootLayout = () => {
  const resources = { en, nb };
  const [isRedirected, setIsRedirected] = useState(false);
  const [languageLoaded, setLanguageLoaded] = useState(false); // track if i18n is initialized
  const [language, setLanguage] = useState<string | null>(); // language (locale) to use
  const { lang } = useGlobalSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Set background color
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
    // handle redirection to default language if no lang route provided
    if (!lang && !isRedirected) {
      router.replace('/en');
      setLanguage('en-US');
      setIsRedirected(true);
    }

    //handle language change when route param updates
    if (lang === 'no' && language !== 'nb-no') {
      setLanguage('nb-no');
    } else if (lang === 'en' && language !== 'en-US') {
      setLanguage('en-US');
    }
  }, [lang, isRedirected]);

  useEffect(() => {
    const getStoredLanguageAndSet = async () => {
      if (Platform.OS === 'web') return;

      // get the device's current system locale from expo-localization
      const storedLocale = await AsyncStorage.getItem('javazone_locale');
      const phoneLocale = Localization.getLocales()?.[0]?.languageTag ?? 'en-US';
      setLanguage(storedLocale ? storedLocale : phoneLocale);
    };

    getStoredLanguageAndSet();
  }, []);

  /** app reloads when the system locale is changed for iOS,
   *  this doesn't apply for Android
   *      need to listen for changes to the AppState and manually change the language with i18next
   */
  useEffect(() => {
    if (Platform.OS !== 'android') return;

    // any time app state changes, get and set new locale
    const handleAppStateChange = async () => {
      const storedLocale = await AsyncStorage.getItem('javazone_locale');
      const phoneLocale = Localization.getLocales()?.[0]?.languageTag ?? 'en-US';
      await i18n.changeLanguage(storedLocale ? storedLocale : phoneLocale);
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, []);

    if (Platform.OS === 'web') {
        return (
            <SafeAreaProvider>
                <I18nContextProvider>
                    <Stack initialRouteName="[lang]/index" screenOptions={{headerShown: false}}>
                        <Stack.Screen name="[lang]/index"/>
                        <Stack.Screen name="[lang]/program"/>
                        <Stack.Screen name="[lang]/partner"/>
                        <Stack.Screen name="[lang]/speaker"/>
                    </Stack>
                </I18nContextProvider>
            </SafeAreaProvider>
        );
    } else {
        return (
            <SafeAreaProvider>
                <I18nContextProvider>
                    <Tabs initialRouteName="[lang]/index" screenOptions={{
                        headerShown: false,
                        tabBarStyle: styles.tabBar,
                        tabBarBackground: () => (
                            <BlurView tint="dark" intensity={80} style={styles.blurContainer} />
                        )}}>
                        <Tabs.Screen name="[lang]/index" options={{title: "Home"}}/>
                        <Tabs.Screen name="[lang]/program" options={{title: "Program"}}/>
                        <Tabs.Screen name="[lang]/partner" options={{title: "Partner"}}/>
                        <Tabs.Screen name="[lang]/speaker" options={{title: "Speaker"}}/>
                        <Tabs.Screen name="[lang]/info" options={{title: "Info"}}/>

                        <Tabs.Screen name="+not-found" options={{href: null}}/>
                    </Tabs>
                </I18nContextProvider>
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
    },
    blurContainer: {
        flex: 1,
        padding: 30,
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: "absolute",
        width: '100%',
    },
});
export default RootLayout;
