import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Assets } from '@/Assets';

const { width: screenWidth } = Dimensions.get('window');
const isMobile = screenWidth < 768; // Define your mobile breakpoint

const VerticalLinesRightLeft = () => {
  return (
    <>
      <View style={isMobile ? {...mobileStyles.verticalLineLeft, ...styles.shadow} : {...styles.verticalLineLeft, ...styles.shadow}} />
      <View style={isMobile ? {...mobileStyles.verticalLineLeftVividOrange, ...styles.shadow} : {...styles.verticalLineLeftVividOrange, ...styles.shadow}} />
      <View style={isMobile ? {...mobileStyles.verticalLineLeftCyberYellow, ...styles.shadow} : {...styles.verticalLineLeftCyberYellow, ...styles.shadow}} />
      <View style={isMobile ? {...mobileStyles.verticalLineLeftOrangeYellow, ...styles.shadow} : {...styles.verticalLineLeftOrangeYellow, ...styles.shadow}} />
      <View style={isMobile ? {...mobileStyles.verticalLineRight, ...styles.shadow} : {...styles.verticalLineRight, ...styles.shadow}} />
      <View style={isMobile ? {...mobileStyles.verticalLineRightVividOrange, ...styles.shadow} : {...styles.verticalLineRightVividOrange, ...styles.shadow}} />
      <View style={isMobile ? {...mobileStyles.verticalLineRightCyberYellow, ...styles.shadow} : {...styles.verticalLineRightCyberYellow, ...styles.shadow}} />
      <View style={isMobile ? {...mobileStyles.verticalLineRightOrangeYellow, ...styles.shadow} : {...styles.verticalLineRightOrangeYellow, ...styles.shadow}} />
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Assets.colors.jz2025ThemeColors.darkBrown,
    shadowOpacity: 0.1,
    shadowOffset: {width: -1, height: 1},
    shadowRadius: 10,
  },
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
});

export default VerticalLinesRightLeft;
