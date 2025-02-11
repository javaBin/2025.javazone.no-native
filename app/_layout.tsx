import * as Localization from 'expo-localization';
import * as SystemUI from 'expo-system-ui';
import en from '@/services/i18n/en-US.json';
import nb from '@/services/i18n/nb-NO.json';
import { useEffect, useState } from 'react';
import { I18nContextProvider } from '@/contexts/I18nContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link, Tabs, useGlobalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router/stack';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Assets } from '@/Assets';
import { BlurView } from 'expo-blur';
import { SvgImage } from '@/UI';

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

  const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      bottom: 0,
    },
    tabBarLabel: {
      fontSize: 12,
      fontFamily: 'Cinzel_400Regular',
    },
    tabBarBlurContainer: {
      flex: 1,
      padding: 42,
      textAlign: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'absolute',
      width: '100%',
      bottom: 0, // only moves blurContainer, not the actual tabs
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      width: screenWidth - 20,
    },
    headerLogoTitle: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      marginLeft: screenWidth > 768 ? 100 : 0,
    },
    headerTitle: {
      color: Assets.colors.jz2025ThemeColors.darkBrown,
      fontFamily: 'Cinzel_500Medium',
      fontSize: 20,
      marginTop: 5,
    },
    hamburger: {
      marginHorizontal: 20,
      display: screenWidth > 834 ? 'none' : 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    drawer: {
      position: 'absolute',
      zIndex: 1,
      right: 0,
      top: 63.5, // default header height 64 - do not change!
      display: toggleMenu ? 'flex' : 'none',
      justifyContent: 'flex-start',
      overflow: 'hidden',
    },
    drawerContent: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: 180,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    drawerItem: {
      color: Assets.colors.jz2025ThemeColors.darkBrown,
      paddingHorizontal: 20,
      marginVertical: 5,
      fontSize: 16,
      fontFamily: 'PlayfairDisplay_400Regular',
      textShadowColor: Assets.colors.brand.beige,
      textShadowOffset: { width: 0, height: 0.2 },
      textShadowRadius: 3,
    },
    navBar: {
      display: screenWidth > 834 ? 'flex' : 'none',
      flexDirection: 'row',
      flexGrow: 1,
      maxWidth: '75%',
      justifyContent: 'space-evenly',
    },
    navItem: {
      fontFamily: 'PlayfairDisplay_400Regular',
      color: Assets.colors.jz2025ThemeColors.darkBrown,
      fontSize: 18,
      margin: 5,
      textShadowColor: Assets.colors.jz2025ThemeColors.darkBrown,
    },
  });

  const screenOptions = {
    headerShown: true,
    headerTitle: () => (
      <View style={styles.header}>
        <Pressable onPress={() => router.navigate(`/${lang}`)}>
          <View style={styles.headerLogoTitle}>
            <SvgImage SVG={Assets.images.Logo} height={24} width={24} style={{ marginHorizontal: 10 }} />
            <Text style={styles.headerTitle}>JavaZone 2025</Text>
          </View>
        </Pressable>

        <View style={styles.navBar}>
          <Link href={`${lang}/program`} style={styles.navItem}>
            Program
          </Link>
          <Link href={`${lang}/partner`} style={styles.navItem}>
            Partner
          </Link>
          <Link href={`${lang}/speaker`} style={styles.navItem}>
            Speaker
          </Link>
          <Link href={`${lang}/info`} style={styles.navItem}>
            Info
          </Link>
        </View>
      </View>
    ),
  };

  const nativeScreenOptions = {
    tabBarStyle: styles.tabBar,
    tabBarLabelStyle: styles.tabBarLabel,
    tabBarActiveTintColor: Assets.colors.jz2025ThemeColors.vividOrange,
    tabBarInactiveTintColor: Assets.colors.jz2025ThemeColors.darkBrown,
    tabBarBackground: () => <BlurView tint="light" intensity={80} style={styles.tabBarBlurContainer} />,
    headerShown: false, // todo: debating what to do with a possible header for native, BlurView doesn't work for some reason
  };

  const webScreenOptions = {
    headerTransparent: screenWidth > 768,
    headerBackground: () =>
      screenWidth > 768 ? (
        <BlurView tint="light" intensity={90} style={[StyleSheet.absoluteFill]} />
      ) : (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Assets.colors.jz2025ThemeColors.sheetOpacity,
              borderBottomColor: '#403431',
              borderBottomWidth: 0.1,
            },
          ]}
        />
      ),
    headerLeft: () => null, // this is to disable "<-" back button on web-app
    headerRight: () => (
      <Pressable onPress={() => setToggleMenu(!toggleMenu)} style={styles.hamburger}>
        <SvgImage
          SVG={toggleMenu ? Assets.icons.MenuRoundedActive : Assets.icons.MenuRoundedInactive}
          height={24}
          width={24}
          style={{ width: 'auto' }}
        />
      </Pressable>
    ),
  };

  if (Platform.OS === 'web') {
    return (
      <SafeAreaProvider>
        <I18nContextProvider>
          <BlurView tint="light" intensity={10} style={styles.drawer}>
            <SvgImage SVG={Assets.UI.PapyrusSheet} height={180} style={{ opacity: 0.9 }} />
            <View style={styles.drawerContent}>
              <Link
                href={{ pathname: `${lang}/program` }}
                style={styles.drawerItem}
                onPress={() => setToggleMenu(false)}
              >
                Program
              </Link>
              <Link
                href={{ pathname: `${lang}/partner` }}
                style={styles.drawerItem}
                onPress={() => setToggleMenu(false)}
              >
                Partner
              </Link>
              <Link
                href={{ pathname: `${lang}/speaker` }}
                style={styles.drawerItem}
                onPress={() => setToggleMenu(false)}
              >
                Speaker
              </Link>
              <Link href={{ pathname: `${lang}/info` }} style={styles.drawerItem} onPress={() => setToggleMenu(false)}>
                Info
              </Link>
            </View>
            <SvgImage SVG={Assets.UI.PapyrusRoll} height={25} />
          </BlurView>

          <Stack initialRouteName="[lang]/index" screenOptions={{ ...screenOptions, ...webScreenOptions }}>
            <Stack.Screen name="[lang]/index" options={{ title: '' }} />
            <Stack.Screen name="[lang]/program" options={{ title: 'Program' }} />
            <Stack.Screen name="[lang]/partner" options={{ title: 'Partner' }} />
            <Stack.Screen name="[lang]/speaker" options={{ title: 'Speaker' }} />
            <Stack.Screen name="[lang]/info" options={{ title: 'Info' }} />
          </Stack>
        </I18nContextProvider>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <I18nContextProvider>
          <Tabs initialRouteName="[lang]/index" screenOptions={{ ...nativeScreenOptions }}>
            <Tabs.Screen
              name="[lang]/index"
              options={{
                title: 'Home',
                tabBarIcon: () => <SvgImage SVG={Assets.icons.Home} height={24} title={'game-icons:greek-temple'} />,
              }}
            />
            <Tabs.Screen
              name="[lang]/program"
              options={{
                title: 'Program',
                tabBarIcon: () => <SvgImage SVG={Assets.icons.Program} height={24} />,
              }}
            />
            <Tabs.Screen
              name="[lang]/partner"
              options={{
                title: 'Partner',
                tabBarIcon: () => <SvgImage SVG={Assets.icons.Partner} height={24} />,
              }}
            />
            <Tabs.Screen
              name="[lang]/speaker"
              options={{
                title: 'Speaker',
                tabBarIcon: () => <SvgImage SVG={Assets.icons.Speaker} height={24} />,
              }}
            />
            <Tabs.Screen
              name="[lang]/info"
              options={{
                title: 'Info',
                tabBarIcon: () => <SvgImage SVG={Assets.icons.Info} height={24} />,
              }}
            />
            <Tabs.Screen name="[lang]/+not-found" options={{ href: null }} />
          </Tabs>
        </I18nContextProvider>
      </SafeAreaProvider>
    );
  }
};

export default RootLayout;
