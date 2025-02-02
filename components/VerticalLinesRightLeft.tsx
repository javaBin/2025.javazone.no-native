import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Assets } from '@/Assets';

const { width: screenWidth } = Dimensions.get('window');
const isMobile = screenWidth < 768; // Define your mobile breakpoint

const VerticalLinesRightLeft = () => {
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const route = useRoute();

  const leftLineWidth = useRef(new Animated.Value(isMobile ? 250 : 1000)).current;
  const leftVividOrangeWidth = useRef(new Animated.Value(isMobile ? 90 : 400)).current;
  const leftOrangeYellowWidth = useRef(new Animated.Value(isMobile ? 80 : 300)).current;
  const leftCyberYellowWidth = useRef(new Animated.Value(isMobile ? 70 : 200)).current;
  const rightLineWidth = useRef(new Animated.Value(isMobile ? 250 : 1000)).current;
  const rightVividOrangeWidth = useRef(new Animated.Value(isMobile ? 90 : 400)).current;
  const rightOrangeYellowWidth = useRef(new Animated.Value(isMobile ? 80 : 300)).current;
  const rightCyberYellowWidth = useRef(new Animated.Value(isMobile ? 70 : 200)).current;

  useEffect(() => {
    const animateLines = () => {
      Animated.stagger(1, [
        Animated.timing(leftLineWidth, {
          toValue: isMobile ? 30 : 100,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(leftVividOrangeWidth, {
          toValue: isMobile ? 5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(leftOrangeYellowWidth, {
          toValue: isMobile ? 5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(leftCyberYellowWidth, {
          toValue: isMobile ? 5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightLineWidth, {
          toValue: isMobile ? 30 : 100,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightVividOrangeWidth, {
          toValue: isMobile ? 5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightOrangeYellowWidth, {
          toValue: isMobile ? 5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightCyberYellowWidth, {
          toValue: isMobile ? 5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start(() => {
        setContainerStyle(styles.containerAfterAnimation);
      });
    };

    if (route.name === `[lang]/index`) {
      const timeoutId = setTimeout(animateLines, 1000);
      return () => clearTimeout(timeoutId);
    } else {
      setContainerStyle(styles.containerAfterAnimation);
      rightLineWidth.setValue(isMobile ? 30 : 100);
      rightVividOrangeWidth.setValue(isMobile ? 5 : 10);
      rightOrangeYellowWidth.setValue(isMobile ? 5 : 10);
      rightCyberYellowWidth.setValue(isMobile ? 5 : 10);
      leftLineWidth.setValue(isMobile ? 30 : 100);
      leftVividOrangeWidth.setValue(isMobile ? 5 : 10);
      leftOrangeYellowWidth.setValue(isMobile ? 5 : 10);
      leftCyberYellowWidth.setValue(isMobile ? 5 : 10);
    }
  }, [route, isMobile]);

  return (
    <View style={containerStyle}>
      <Animated.View
        style={[isMobile ? mobileStyles.verticalLineLeft : styles.verticalLineLeft, { width: leftLineWidth }]}
      />
      <Animated.View
        style={[
          isMobile ? mobileStyles.verticalLineLeftVividOrange : styles.verticalLineLeftVividOrange,
          { width: leftVividOrangeWidth },
        ]}
      />
      <Animated.View
        style={[
          isMobile ? mobileStyles.verticalLineLeftOrangeYellow : styles.verticalLineLeftOrangeYellow,
          { width: leftOrangeYellowWidth },
        ]}
      />
      <Animated.View
        style={[
          isMobile ? mobileStyles.verticalLineLeftCyberYellow : styles.verticalLineLeftCyberYellow,
          { width: leftCyberYellowWidth },
        ]}
      />
      <Animated.View
        style={[isMobile ? mobileStyles.verticalLineRight : styles.verticalLineRight, { width: rightLineWidth }]}
      />
      <Animated.View
        style={[
          isMobile ? mobileStyles.verticalLineRightVividOrange : styles.verticalLineRightVividOrange,
          { width: rightVividOrangeWidth },
        ]}
      />
      <Animated.View
        style={[
          isMobile ? mobileStyles.verticalLineRightOrangeYellow : styles.verticalLineRightOrangeYellow,
          { width: rightOrangeYellowWidth },
        ]}
      />
      <Animated.View
        style={[
          isMobile ? mobileStyles.verticalLineRightCyberYellow : styles.verticalLineRightCyberYellow,
          { width: rightCyberYellowWidth },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  containerAfterAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  verticalLineLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineLeftVividOrange: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineLeftOrangeYellow: {
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineLeftCyberYellow: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
  verticalLineRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineRightVividOrange: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineRightOrangeYellow: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineRightCyberYellow: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
});

const mobileStyles = StyleSheet.create({
  verticalLineLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineLeftVividOrange: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineLeftOrangeYellow: {
    position: 'absolute',
    left: 5,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineLeftCyberYellow: {
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
  verticalLineRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineRightVividOrange: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineRightOrangeYellow: {
    position: 'absolute',
    right: 5,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineRightCyberYellow: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
});

export default VerticalLinesRightLeft;
