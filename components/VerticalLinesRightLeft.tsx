import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Assets } from '@/Assets';

const { width: screenWidth } = Dimensions.get('window');
const isMobile = screenWidth <= 768;

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const VerticalLinesRightLeft = () => {
  const [containerStyle, setContainerStyle] = useState(styles.container);
  const route = useRoute();

  const leftLineWidth = useRef(new Animated.Value(isMobile ? 250 : 2000)).current;
  const leftVividOrangeWidth = useRef(new Animated.Value(isMobile ? 90 : 400)).current;
  const leftOrangeYellowWidth = useRef(new Animated.Value(isMobile ? 80 : 300)).current;
  const leftCyberYellowWidth = useRef(new Animated.Value(isMobile ? 70 : 200)).current;
  const leftDarkRedWidth = useRef(new Animated.Value(isMobile ? 60 : 100)).current;
  const rightLineWidth = useRef(new Animated.Value(isMobile ? 250 : 2000)).current;
  const rightVividOrangeWidth = useRef(new Animated.Value(isMobile ? 90 : 400)).current;
  const rightOrangeYellowWidth = useRef(new Animated.Value(isMobile ? 80 : 300)).current;
  const rightCyberYellowWidth = useRef(new Animated.Value(isMobile ? 70 : 200)).current;
  const rightDarkRedWidth = useRef(new Animated.Value(isMobile ? 60 : 100)).current;

  useEffect(() => {
    const animateLines = () => {
      Animated.stagger(1, [
        Animated.timing(leftLineWidth, {
          toValue: isMobile ? 20 : 100,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(leftVividOrangeWidth, {
          toValue: isMobile ? 2.5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(leftOrangeYellowWidth, {
          toValue: isMobile ? 2.5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(leftCyberYellowWidth, {
          toValue: isMobile ? 2.5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(leftDarkRedWidth, {
          toValue: isMobile ? 5 : 15,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightLineWidth, {
          toValue: isMobile ? 20 : 100,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightVividOrangeWidth, {
          toValue: isMobile ? 2.5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightOrangeYellowWidth, {
          toValue: isMobile ? 2.5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightCyberYellowWidth, {
          toValue: isMobile ? 2.5 : 10,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(rightDarkRedWidth, {
          toValue: isMobile ? 5 : 15,
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
      rightLineWidth.setValue(isMobile ? 20 : 100);
      rightVividOrangeWidth.setValue(isMobile ? 2.5 : 10);
      rightOrangeYellowWidth.setValue(isMobile ? 2.5 : 10);
      rightCyberYellowWidth.setValue(isMobile ? 2.5 : 10);
      rightDarkRedWidth.setValue(isMobile ? 5 : 15);
      leftLineWidth.setValue(isMobile ? 20 : 100);
      leftVividOrangeWidth.setValue(isMobile ? 2.5 : 10);
      leftOrangeYellowWidth.setValue(isMobile ? 2.5 : 10);
      leftCyberYellowWidth.setValue(isMobile ? 2.5 : 10);
      leftDarkRedWidth.setValue(isMobile ? 5 : 15);
    }
  }, [route, isMobile]);

  return (
    <View style={containerStyle}>
      <AnimatedLinearGradient
        colors={[Assets.colors.jz2025ThemeColors.gradientRed, Assets.colors.jz2025ThemeColors.crimsonRed]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
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
      <AnimatedLinearGradient
        colors={[Assets.colors.jz2025ThemeColors.darkRed, Assets.colors.jz2025ThemeColors.gradientRed]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          isMobile ? mobileStyles.verticalLineLeftDarkRed : styles.verticalLineLeftDarkRed,
          { width: leftDarkRedWidth },
        ]}
      />

      <AnimatedLinearGradient
          colors={[Assets.colors.jz2025ThemeColors.crimsonRed, Assets.colors.jz2025ThemeColors.gradientRed]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
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
      <AnimatedLinearGradient
          colors={[Assets.colors.jz2025ThemeColors.gradientRed, Assets.colors.jz2025ThemeColors.darkRed]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        style={[
          isMobile ? mobileStyles.verticalLineRightDarkRed : styles.verticalLineRightDarkRed,
          { width: rightDarkRedWidth },
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
  shadow: {
    shadowColor: Assets.colors.jz2025ThemeColors.darkBrown,
    shadowOpacity: 0.1,
    shadowOffset: { width: -1, height: 1 },
    shadowRadius: 10,
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
  verticalLineLeftDarkRed: {
    position: 'absolute',
    left: 30,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.darkRed,
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
  verticalLineRightDarkRed: {
    position: 'absolute',
    right: 30,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.darkRed,
  },
});

const mobileStyles = StyleSheet.create({
  verticalLineLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 20,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineLeftVividOrange: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2.5,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineLeftOrangeYellow: {
    position: 'absolute',
    left: 2.5,
    top: 0,
    bottom: 0,
    width: 2.5,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineLeftCyberYellow: {
    position: 'absolute',
    left: 5,
    top: 0,
    bottom: 0,
    width: 2.5,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
  verticalLineLeftDarkRed: {
    position: 'absolute',
    left: 7.5,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.darkRed,
  },
  verticalLineRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 20,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineRightVividOrange: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 2.5,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineRightOrangeYellow: {
    position: 'absolute',
    right: 2.5,
    top: 0,
    bottom: 0,
    width: 2.5,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineRightCyberYellow: {
    position: 'absolute',
    right: 5,
    top: 0,
    bottom: 0,
    width: 2.5,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
  verticalLineRightDarkRed: {
    position: 'absolute',
    right: 7.5,
    top: 0,
    bottom: 0,
    backgroundColor: Assets.colors.jz2025ThemeColors.darkRed,
  },
});

export default VerticalLinesRightLeft;
