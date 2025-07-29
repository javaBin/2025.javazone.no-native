import React, { useRef } from 'react';
import { ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Assets } from '@/Assets';
import { PageTitle } from '@/UI';
import { VerticalLinesRightLeft, Footer } from '@/components';
import {
  useFonts,
  Cinzel_400Regular,
  Cinzel_500Medium,
  Cinzel_600SemiBold,
  Cinzel_700Bold,
  Cinzel_800ExtraBold,
} from '@expo-google-fonts/cinzel';
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
} from '@expo-google-fonts/playfair-display';

type ScreenTemplateProps = {
  children: React.ReactNode;
  pageTitle?: string;
  pageSubtitle?: string;
  shouldScrollToTop?: boolean;
  infoPage?: boolean;
  dangerousOverride?: boolean;
};

const ScreenTemplate = ({ children, pageTitle, pageSubtitle, shouldScrollToTop, dangerousOverride = false }: ScreenTemplateProps) => {
  const { top } = useSafeAreaInsets();
  const newTop = Platform.OS === 'android' ? top : 0;
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  useFonts({
    Cinzel_400Regular,
    Cinzel_500Medium,
    Cinzel_600SemiBold,
    Cinzel_700Bold,
    Cinzel_800ExtraBold,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
  });

  return (
    <ImageBackground source={Assets.background} style={{ flex: 1, width: '100%', height: '100%' }}>
      <SafeAreaView style={Assets.styles.safeArea}>
        <VerticalLinesRightLeft />

        <View style={[Assets.styles.container, { marginTop: newTop }]}>
          <ScrollView
            ref={scrollViewRef}
            style={Assets.styles.scrollContainer}
            contentContainerStyle={dangerousOverride ?
                Assets.styles.dangerousOverrideScrollContentContainer :
                Assets.styles.scrollContentContainer}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
          >
            {pageTitle && <PageTitle title={pageTitle} subTitle={pageSubtitle} />}

            {children}

            <Footer displayToTopArrow={shouldScrollToTop} handleScrollToTop={handleScrollToTop} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ScreenTemplate;
