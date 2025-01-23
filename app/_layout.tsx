import * as Localization from 'expo-localization';
import * as SystemUI from 'expo-system-ui';
import en from '@/services/i18n/en-US.json';
import nb from '@/services/i18n/nb-NO.json';
import { useEffect, useState } from 'react';
import { I18nContextProvider } from '@/contexts/I18nContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link, Tabs, useGlobalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppState, Dimensions, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import { Stack } from 'expo-router/stack';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Assets } from '@/Assets';
import { BlurView } from 'expo-blur';
import { SvgImage } from "@/components";

const RootLayout = () => {
    const resources = { en, nb };
    const [isRedirected, setIsRedirected] = useState(false);
    const [languageLoaded, setLanguageLoaded] = useState(false); // track if i18n is initialized
    const [language, setLanguage] = useState<string | null>(); // language (locale) to use
    const [toggleMenu, setToggleMenu] = useState<boolean>(false); // todo: make hamburger icon into X icon when active toggle?
    const { lang } = useGlobalSearchParams();
    const router = useRouter();
    const screenWidth = Dimensions.get('window').width;

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

            if (!isRedirected) {
                router.replace(`/${lang}`); // test if this affects performance or not
                setIsRedirected(true);
            }
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

    const webScreenOptions = Platform.OS === 'web' ? {
        headerLeft: () => null
    } : {}
    const screensOptions = {
        headerShown: true,
        headerTransparent: true,
        headerBackground: () => (
            <BlurView
                tint="light"
                intensity={90}
                style={StyleSheet.absoluteFill}
            />
        ),
        headerTintColor: Assets.colors.jz2025ThemeColors.vividOrange,
        headerTitle: () => (
            <Pressable onPress={() => router.replace(`/${lang}`)}>
                <View style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                    <SvgImage SVG={Assets.images.Logo} height={24} width={24} style={{marginHorizontal: 10}} />
                    <Text style={{
                        color: Assets.colors.jz2025ThemeColors.vividOrange,
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
            bottom: 0,
        },
        tabBarLabel: {
            fontSize: 12,
            fontFamily: 'Cinzel_400Regular',
        },
        blurContainer: {
            flex: 1,
            padding: 42,
            textAlign: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: "absolute",
            width: '100%',
            bottom: 0 // only moves blurcontainer, not the actual tabs
        },
        drawer: {
            //width: '15%',
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
            paddingHorizontal: screenWidth >= 768 ? 50 : 20,
            marginVertical: 3,
            fontSize: screenWidth >= 768 ? 18 : 16,
        }
    });

    if (Platform.OS === 'web') {
        return (
            <SafeAreaProvider>
                <I18nContextProvider>
                    <BlurView tint="light" intensity={90} style={styles.drawer}>
                        <Link href={{pathname: `${lang}/program`}} style={styles.navLink} onPress={() => setToggleMenu(false)}>Program</Link>
                        <Link href={{pathname: `${lang}/partner`}} style={styles.navLink} onPress={() => setToggleMenu(false)}>Partner</Link>
                        <Link href={{pathname: `${lang}/speaker`}} style={styles.navLink} onPress={() => setToggleMenu(false)}>Speaker</Link>
                        <Link href={{pathname: `${lang}/info`}} style={styles.navLink} onPress={() => setToggleMenu(false)}>Info</Link>
                    </BlurView>
                    <Stack initialRouteName="[lang]/index" screenOptions={{...screensOptions, ...webScreenOptions}}>
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
                        tabBarLabelStyle: styles.tabBarLabel,
                        tabBarActiveTintColor: Assets.colors.jz2025ThemeColors.vividOrange,
                        tabBarInactiveTintColor: Assets.colors.jz2025ThemeColors.darkBrown,
                        tabBarBackground: () => (
                            <BlurView tint="light" intensity={80} style={styles.blurContainer} />
                        )}}>
                        <Tabs.Screen name="[lang]/index" options={{
                            title: "Home",
                            tabBarIcon: () => (
                                <SvgImage SVG={Assets.icons.GreekTemple} height={24} title={"game-icons:greek-temple"} />
                            ),
                        }}/>
                        <Tabs.Screen name="[lang]/program" options={{
                            title: "Program",
                            tabBarIcon: () => (
                                <SvgImage SVG={Assets.icons.GreekHelmet} height={24} />
                            ),
                        }}/>
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
