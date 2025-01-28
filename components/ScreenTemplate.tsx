import React from 'react';
import { Dimensions, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';
import { LinearGradient } from 'expo-linear-gradient';
import { CountryCode, FlagSize, FlagStyle } from '@/models';
import { useI18nContext } from '@/contexts/I18nContext';
import { Flag, Footer } from '@/components/index';
import { Assets } from '@/Assets';

type ScreenTemplateProps = {
  children: React.ReactNode;
  headerPadding?: number;
};

const ScreenTemplate = ({ children, headerPadding }: ScreenTemplateProps) => {
  // useHeaderHeight is a hook that gives you the height of the header
  const headerHeight = useHeaderHeight();
  // @ts-ignore
  const { setLocale } = useI18nContext();
  const { top } = useSafeAreaInsets(); // can use this to define screen top based on platform
  const newTop = Platform.OS === 'android' ? top : 0;
  const screenWidth = Dimensions.get('window').width;

  return (
    <LinearGradient
      colors={[Assets.colors.gradient.medium, Assets.colors.gradient.dark]}
      style={{ flex: 1, width: screenWidth, paddingTop: headerPadding ? headerHeight : 64 }}
      locations={[0, 1]}
    >
      <SafeAreaView style={Assets.styles.safeArea}>
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  languagePickers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default ScreenTemplate;
