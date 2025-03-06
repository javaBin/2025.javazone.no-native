import React from 'react';
import { Assets } from '@/Assets';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Dimensions, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

type LinkButtonProps = {
  href: string;
  title: string;
  targetBlank?: boolean;
  margin?: number;
  disabled?: boolean;
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, targetBlank, margin, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { margin: margin ? margin : 0 }, disabled && styles.disabledButton]}
      disabled={disabled}
    >
        <LinearGradient
          style={styles.gradient}
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
  buttonContainer: {
    margin: 5,
    borderRadius: 5,
    alignSelf: 'center',
    elevation: 2, // Shadow effect for Android
    shadowColor: Assets.colors.jz2025ThemeColors.darkBrown, // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
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
