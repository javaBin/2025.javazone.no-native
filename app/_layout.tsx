import * as Localization from 'expo-localization';
import * as SystemUI from 'expo-system-ui';
import en from '@/services/i18n/en-US.json';
import nb from '@/services/i18n/nb-NO.json';
import { useEffect, useState } from 'react';
import { I18nContextProvider } from '@/contexts/I18nContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Link, Tabs, useGlobalSearchParams, useRouter} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppState, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import { Stack } from 'expo-router/stack';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Assets } from '@/Assets';
import { BlurView } from 'expo-blur';
import { SvgImage } from "@/components";
import {getDefaultHeaderHeight} from "@react-navigation/elements"; // todo: delete this package

const RootLayout = () => {
    const resources = { en, nb };
    const [isRedirected, setIsRedirected] = useState(false);
    const [languageLoaded, setLanguageLoaded] = useState(false); // track if i18n is initialized
    const [language, setLanguage] = useState<string | null>(); // language (locale) to use
    const [toggleMenu, setToggleMenu] = useState<boolean>(false); // todo: make hamburger icon into X icon when active toggle
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
        if (Platform.OS !== 'web') return;

        // handle redirection to default language if no lang route provided
        if ((!lang && !isRedirected) || (lang !== 'no' && lang !== 'en')) {
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

    const screensOptions = {
        headerShown: true,
        //headerBackVisible: Platform.OS !== 'web', // todo: use hook instead to remove back button on web
        headerStyle: {
            //backgroundColor: Assets.colors.gradient.medium,
            //elevation: 0,
            //shadowOpacity: 0,
            //borderBottomWidth: 0,
        },
        headerTransparent: true,
        headerBackground: () => (
            <BlurView
                tint="dark"
                intensity={90}
                style={StyleSheet.absoluteFill}
            />
        ),
        headerTintColor: Assets.colors.brand.cream,
        headerTitle: () => (
            <Pressable onPress={() => router.replace(`/${lang}`)}>
                <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                    <SvgImage SVG={Assets.images.Logo} height={24} width={24} style={{marginHorizontal: 10}} />
                    <Text style={{
                        color: Assets.colors.brand.cream,
                        fontSize: 20,
                        marginTop: 5}}
                    >JavaZone 2025
                    </Text>
                </View>
            </Pressable>
        ),
        headerRight: () => (
            <Pressable onPress={() => setToggleMenu(!toggleMenu)} style={{marginHorizontal: 10, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                <SvgImage SVG={toggleMenu ? Assets.icons.MenuRoundedActive : Assets.icons.MenuRoundedInactive} height={24} width={24} style={{width: 'auto'}} />
            </Pressable>
        ),
    };

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
        drawer: {
            //backgroundColor: Assets.colors.gradient.light,
            width: '15%',
            position: 'absolute',
            zIndex: 1,
            right: 0,
            top: 64, // default header height 64 - do not change!
            display: toggleMenu ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'flex-start',
            overflow: 'hidden',
            paddingVertical: 5
        },
        navLink: {
            color: Assets.colors.logo.brightOrange,
            marginHorizontal: 20,
            marginVertical: 3
        }
    });

    if (Platform.OS === 'web') {
        return (
            <SafeAreaProvider>
                <I18nContextProvider>
                    <BlurView tint="dark" intensity={90} style={styles.drawer}>
                        <Link href={{pathname: `${lang}/program`}} style={styles.navLink}>Program</Link>
                        <Link href={{pathname: `${lang}/partner`}} style={styles.navLink}>Partner</Link>
                        <Link href={{pathname: `${lang}/speaker`}} style={styles.navLink}>Speaker</Link>
                        <Link href={{pathname: `${lang}/info`}} style={styles.navLink}>Info</Link>
                    </BlurView>
                    <Stack initialRouteName="[lang]/index" screenOptions={screensOptions}>
                        <Stack.Screen name="[lang]/index" options={{title: ""}}/>
                        <Stack.Screen name="[lang]/program" options={{title: "Program"}}/>
                        <Stack.Screen name="[lang]/partner" options={{title: "Partner"}}/>
                        <Stack.Screen name="[lang]/speaker" options={{title: "Speaker"}}/>
                        <Stack.Screen name="[lang]/info" options={{title: "Info"}}/>
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

                        <Tabs.Screen name="[lang]/+not-found" options={{href: null}}/>
                    </Tabs>
                </I18nContextProvider>
            </SafeAreaProvider>
        );
    }
}

export default RootLayout;
