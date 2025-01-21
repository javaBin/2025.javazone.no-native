import React from 'react';
import { ImageBackground, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import { CountryCode, FlagSize, FlagStyle } from '@/models';
import { useI18nContext } from '@/contexts/I18nContext';
import { Flag } from '@/components/index';
import { Assets } from '@/Assets';
import { useMediaQuery } from 'react-responsive';
import { VerticalLinesRightLeft } from '@/components';
import { useFonts, Cinzel_400Regular, Cinzel_700Bold, Cinzel_800ExtraBold } from '@expo-google-fonts/cinzel';
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
} from '@expo-google-fonts/playfair-display';

type ScreenTemplateProps = {
  children: React.ReactNode;
  headerPadding?: number;
};

const ScreenTemplate = ({ children, headerPadding }: ScreenTemplateProps) => {
  const headerHeight = useHeaderHeight();
  // @ts-ignore
  const { setLocale } = useI18nContext();
  const { top } = useSafeAreaInsets();
  const newTop = Platform.OS === 'android' ? top : 0;
  const isMobile = useMediaQuery({ maxWidth: 614 });
  let [fontsLoaded] = useFonts({
    Cinzel_400Regular,
    Cinzel_700Bold,
    Cinzel_800ExtraBold,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
  });

  return (
    <ImageBackground
      source={require('@/assets/images/background/texture-marble.png')}
      style={{ flex: 1, width: '100%', height: '100%' }}
    >
      <View style={styles.overlay} />
      <SafeAreaView style={Assets.styles.safeArea}>
        <VerticalLinesRightLeft />
        <View style={[Assets.styles.container, { marginTop: newTop }]}>
          <View style={styles.languagePickers}>
            <Flag
              flagLocale={'nb-NO'}
              countryCode={CountryCode.Norwegian}
              flagStyle={FlagStyle.Flat}
              flagSize={FlagSize.Small}
              onPress={async () => await setLocale('nb-NO')}
            />
            <Flag
              flagLocale={'en-US'}
              countryCode={CountryCode.British}
              flagStyle={FlagStyle.Flat}
              flagSize={FlagSize.Small}
              onPress={async () => await setLocale('en-US')}
            />
          </View>
          {children}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  languagePickers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    right: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(254, 240, 195, 6)',
    opacity: 0.5,
  },
});

export default ScreenTemplate;
