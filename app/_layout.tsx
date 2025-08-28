import * as Localization from 'expo-localization';
import * as SystemUI from 'expo-system-ui';
import en from '@/services/i18n/en-US.json';
import nb from '@/services/i18n/nb-NO.json';
import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { I18nContextProvider } from '@/contexts/I18nContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tabs, useGlobalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState, Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router/stack';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Assets } from '@/Assets';
import { BlurView } from 'expo-blur';
import { SvgImage } from '@/UI';
import { LanguagePicker, animationDuration, PapyrusMenu } from '@/components';
import { SvgProps } from 'react-native-svg';
import { FavoritesContext, FavoritesContextProvider } from '@/contexts/FavoritesContext';

interface PapyrusInterface {
  closeAnimation: () => {};
}

const RootLayout = () => {
  const resources = { en, nb };
  const [isRedirected, setIsRedirected] = useState(false);
  const [languageLoaded, setLanguageLoaded] = useState(false); // track if i18n is initialized
  const [language, setLanguage] = useState<string | null>(); // language (locale) to use
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { lang } = useGlobalSearchParams();
  const router = useRouter();
  const screenWidth = Dimensions.get('window').width;
  const papyrusMenuRef = useRef<PapyrusInterface>();

  useEffect(() => {
    // Set background color
    SystemUI.setBackgroundColorAsync(Assets.colors.gradient.medium);
  }, []);

  useEffect(() => {
    // we either don't have a language, or we've already initialized
    if (!language || languageLoaded) return;

    i18n
      .use(initReactI18next)
      .init({
        compatibilityJSON: 'v3',
        resources,
        lng: language,
        fallbackLng: 'en',
      })
      .then(() => setLanguageLoaded(true));
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

  const screenOptions = {
    headerShown: true,
    headerTitle: () => (
      <View style={styles.header}>
        <Pressable onPress={() => router.navigate(`/${lang}`)}>
          <View style={styles.headerLogoTitle}>
            <SvgImage SVG={Assets.images.hero.HeroDuke} height={24} width={24} style={{ marginHorizontal: 10 }} />
            <Text style={styles.headerTitle}>JavaZone 2025</Text>
          </View>
        </Pressable>
        <View style={styles.navBar}>
          <Pressable onPress={() => router.replace(`${lang}/program`)}>
            <Text style={styles.navItem}>Program</Text>
          </Pressable>
          <Pressable onPress={() => router.replace(`${lang}/partner`)}>
            <Text style={styles.navItem}>Partner</Text>
          </Pressable>
          <Pressable onPress={() => router.replace(`${lang}/speaker`)}>
            <Text style={styles.navItem}>Speaker</Text>
          </Pressable>
          <Pressable onPress={() => router.replace(`${lang}/speaker/kids`)}>
            <Text style={styles.navItem}>JavaZone Kids</Text>
          </Pressable>
          <Pressable onPress={() => router.replace(`${lang}/speaker/awezone`)}>
            <Text style={styles.navItem}>AweZone</Text>
          </Pressable>
          <Pressable onPress={() => router.replace(`${lang}/aboutUs`)}>
            <Text style={styles.navItem}>About Us</Text>
          </Pressable>
        </View>
        <View style={{ display: screenWidth > 834 ? 'flex' : 'none' }}>{languageLoaded && <LanguagePicker />}</View>
      </View>
    ),
  };

  const nativeScreenOptions = {
    tabBarStyle: styles.tabBar,
    tabBarLabelStyle: styles.tabBarLabel,
    tabBarActiveTintColor: Assets.colors.jz2025ThemeColors.vividOrange,
    tabBarInactiveTintColor: Assets.colors.jz2025ThemeColors.darkBrown,
    tabBarBackground: () => (
      <BlurView
        tint="light"
        intensity={80}
        experimentalBlurMethod={'dimezisBlurView'}
        style={styles.tabBarBlurContainer}
      />
    ),
    headerShown: true,
    headerTransparent: true,
    headerBackground: () => (
      <BlurView
        tint="light"
        intensity={80}
        experimentalBlurMethod={'dimezisBlurView'}
        style={[StyleSheet.absoluteFill]}
      />
    ),
    headerTitle: '',
    headerBackButtonMenuEnabled: true,
    headerRight: () => languageLoaded && <LanguagePicker />,
  };

  const webScreenOptions = {
    headerTransparent: true,
    headerBackground: () => <BlurView tint="light" intensity={100} style={[StyleSheet.absoluteFill]} />,
    headerLeft: () => null, // this is to disable "<-" back button on web-app
    headerRight: () => (
      <Pressable
        onPress={() => {
          if (!toggleMenu) {
            setToggleMenu(true);
          } else {
            papyrusMenuRef?.current?.closeAnimation();
            setTimeout(() => {
              setToggleMenu(false);
            }, animationDuration);
          }
        }}
        style={{ ...styles.hamburger }}
      >
        <SvgImage
          SVG={toggleMenu ? Assets.icons.MenuRoundedActive : Assets.icons.MenuRoundedInactive}
          height={24}
          width={24}
          style={{ width: 'auto' }}
        />
      </Pressable>
    ),
  };

  const renderIcon = (
    focused: Boolean,
    ActiveIcon: FunctionComponent<SvgProps>,
    InactiveIcon: FunctionComponent<SvgProps>
  ) => (focused ? <ActiveIcon height={24} width={'100%'} /> : <InactiveIcon height={24} width={'100%'} />);

  if (Platform.OS === 'web') {
    return (
      <SafeAreaProvider>
        <I18nContextProvider>
          <FavoritesContextProvider>
            <PapyrusMenu
              ref={papyrusMenuRef}
              languageLoaded={languageLoaded}
              setToggleMenu={setToggleMenu}
              toggleMenu={toggleMenu}
            />
            <Stack initialRouteName="[lang]/index" screenOptions={{ ...screenOptions, ...webScreenOptions }}>
              <Stack.Screen name="[lang]/index" options={{ title: '' }} />
              <Stack.Screen name="[lang]/program" options={{ title: 'Program' }} />
              <Stack.Screen name="[lang]/partner" options={{ title: 'Partner' }} />
              <Stack.Screen name="[lang]/speaker" options={{ title: 'Speaker' }} />
              <Stack.Screen name="[lang]/volunteers" options={{ title: 'Volunteers' }} />
              <Stack.Screen name="[lang]/info" options={{ title: 'Info' }} />
              <Stack.Screen name="[lang]/aboutUs" options={{ title: 'AboutUs' }} />
              <Stack.Screen name="[lang]/heroes" options={{ title: 'Heroes' }} />
            </Stack>
          </FavoritesContextProvider>
        </I18nContextProvider>
      </SafeAreaProvider>
    );
  } else {
    // @ts-ignore
    return (
      <SafeAreaProvider>
        <I18nContextProvider>
          <FavoritesContextProvider>
            <Tabs initialRouteName="[lang]/index" screenOptions={{ ...nativeScreenOptions }}>
              <Tabs.Screen
                name="[lang]/index"
                options={{
                  title: 'Home',
                  tabBarIcon: ({ focused }) => renderIcon(focused, Assets.icons.Home, Assets.icons.HomeInactive),
                }}
              />
              <Tabs.Screen
                name="[lang]/program"
                options={{
                  title: 'Program',
                  tabBarIcon: ({ focused }) => renderIcon(focused, Assets.icons.Program, Assets.icons.ProgramInactive),
                }}
              />
              <Tabs.Screen
                name="[lang]/partner"
                options={{
                  title: 'Partner',
                  tabBarIcon: ({ focused }) => renderIcon(focused, Assets.icons.Partner, Assets.icons.PartnerInactive),
                }}
              />
              <Tabs.Screen
                name="[lang]/speaker"
                options={{
                  title: 'Speaker',
                  tabBarIcon: ({ focused }) => renderIcon(focused, Assets.icons.Speaker, Assets.icons.SpeakerInactive),
                  headerShown: false,
                }}
              />
              <Tabs.Screen
                name="[lang]/volunteers"
                options={{
                  title: 'Volunteers',
                  tabBarIcon: ({ focused }) =>
                    renderIcon(focused, Assets.icons.HandHeartActive, Assets.icons.HandHeartInactive),
                }}
              />
              <Tabs.Screen
                name="[lang]/info"
                options={{
                  title: 'Info',
                  tabBarIcon: ({ focused }) => renderIcon(focused, Assets.icons.Info, Assets.icons.InfoInactive),
                }}
              />
              <Tabs.Screen name="[lang]/speaker/tips" options={{ href: null }} />
              <Tabs.Screen name="[lang]/aboutUs" options={{ href: null }} />
              <Tabs.Screen name="[lang]/speaker/kids" options={{ href: null }} />
              <Tabs.Screen name="[lang]/speaker/reimbursement" options={{ href: null }} />
              <Tabs.Screen name="[lang]/+not-found" options={{ href: null }} />
            </Tabs>
          </FavoritesContextProvider>
        </I18nContextProvider>
      </SafeAreaProvider>
    );
  }
};

export default RootLayout;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 15 : -5, // don't change! 💅🏼
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: 'Cinzel_400Regular',
    alignSelf: 'center',
    display: 'flex',
    width: '100%',
  },
  tabBarBlurContainer: {
    flex: 1,
    padding: Platform.OS === 'android' ? 36 : 42,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: Platform.OS === 'ios' ? 93 : 'auto', // don't change! 💅🏼
    bottom: Platform.OS === 'android' ? -15 : 0, // don't change! 💅🏼
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 20,
  },
  headerLogoTitle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginLeft: Dimensions.get('window').width > 768 ? 100 : 0,
  },
  headerTitle: {
    color: Assets.colors.jz2025ThemeColors.darkBrown,
    fontFamily: 'Cinzel_500Medium',
    fontSize: 20,
    marginTop: 5,
  },
  hamburger: {
    marginHorizontal: 20,
    display: Dimensions.get('window').width > 834 ? 'none' : 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  navBar: {
    display: Dimensions.get('window').width > 834 ? 'flex' : 'none',
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
