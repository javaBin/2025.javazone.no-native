import { View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Assets } from '@/Assets';

const VerticalLinesRightLeft = () => {
  return (
    <>
      <View style={styles.verticalLineLeft} />
      <View style={styles.verticalLineLeftVividOrange} />
      <View style={styles.verticalLineLeftCyberYellow} />
      <View style={styles.verticalLineLeftOrangeYellow} />
      <View style={styles.verticalLineRight} />
      <View style={styles.verticalLineRightVividOrange} />
      <View style={styles.verticalLineRightCyberYellow} />
      <View style={styles.verticalLineRightOrangeYellow} />
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

export default VerticalLinesRightLeft;
