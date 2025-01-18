import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Assets } from '@/Assets';

const { width: screenWidth } = Dimensions.get('window');
const isMobile = screenWidth < 768; // Define your mobile breakpoint

const VerticalLinesRightLeft = () => {
  return (
    <>
      <View style={isMobile ? mobileStyles.verticalLineLeft : styles.verticalLineLeft} />
      <View style={isMobile ? mobileStyles.verticalLineLeftVividOrange : styles.verticalLineLeftVividOrange} />
      <View style={isMobile ? mobileStyles.verticalLineLeftCyberYellow : styles.verticalLineLeftCyberYellow} />
      <View style={isMobile ? mobileStyles.verticalLineLeftOrangeYellow : styles.verticalLineLeftOrangeYellow} />
      <View style={isMobile ? mobileStyles.verticalLineRight : styles.verticalLineRight} />
      <View style={isMobile ? mobileStyles.verticalLineRightVividOrange : styles.verticalLineRightVividOrange} />
      <View style={isMobile ? mobileStyles.verticalLineRightCyberYellow : styles.verticalLineRightCyberYellow} />
      <View style={isMobile ? mobileStyles.verticalLineRightOrangeYellow : styles.verticalLineRightOrangeYellow} />
    </>
  );
};

const styles = StyleSheet.create({
  verticalLineLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 100,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineLeftVividOrange: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineLeftOrangeYellow: {
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineLeftCyberYellow: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
  verticalLineRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 100,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineRightVividOrange: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineRightOrangeYellow: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineRightCyberYellow: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    width: 10,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
});

const mobileStyles = StyleSheet.create({
  verticalLineLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 30,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineLeftVividOrange: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineLeftOrangeYellow: {
    position: 'absolute',
    left: 5,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineLeftCyberYellow: {
    position: 'absolute',
    left: 10,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
  verticalLineRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 30,
    backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  verticalLineRightVividOrange: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  verticalLineRightOrangeYellow: {
    position: 'absolute',
    right: 5,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  verticalLineRightCyberYellow: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
});

export default VerticalLinesRightLeft;
