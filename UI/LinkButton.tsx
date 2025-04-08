import React from 'react';
import { Assets } from '@/Assets';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import {Dimensions, Platform, StyleSheet, TouchableOpacity} from 'react-native';

type LinkButtonProps = {
  href: string;
  title: string;
  targetBlank?: boolean;
  margin?: number;
  disabled?: boolean;
  androidBlurPatch?: boolean;
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, targetBlank, margin, disabled, androidBlurPatch }) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        disabled && styles.disabledButton,
        androidBlurPatch && Platform.OS === 'android' ? styles.blurPatch : {},
        { margin: margin ? margin : 5 }
      ]}
      disabled={disabled}
    >
        <LinearGradient
          style={[styles.gradient, Assets.styles.shadow]}
          colors={[Assets.colors.jz2025ThemeColors.crimsonRed, Assets.colors.jz2025ThemeColors.gradientRed]}
        >
          <Link
            style={[styles.title, disabled && styles.disabledTitle]}
            href={disabled ? '#' : href}
            target={targetBlank && targetBlank ? '_blank' : '_self'}
            rel="noopener"
          >
            {title}
          </Link>
        </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  blurPatch: {
    /** Blur patch needed for buttons in a blurView (android only) - see PR 49 */
    boxShadow: '0 0 25 5 rgba(247, 243, 241, 0.9)',
  },
  buttonContainer: {
    borderRadius: 5,
    alignSelf: 'center',
    minWidth: 300,
  },
  gradient: {
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Assets.colors.jz2025ThemeColors.orangeYellow,
    fontSize: Dimensions.get('window').width > 1200 ? 20 : 18,
    fontFamily: 'Cinzel_500Medium',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: Dimensions.get('window').width > 1200 ? 60 : 40,
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledTitle: {
    color: 'gray',
  },
});
