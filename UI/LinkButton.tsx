import React from 'react';
import { Assets } from '@/Assets';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Dimensions, ImageBackground, Linking, Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';

type LinkButtonProps = {
  href: string;
  title: string;
  targetBlank?: boolean;
  margin?: number;
  disabled?: boolean;
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, targetBlank, margin, disabled }) => {
  const handlePress = () => {
    if (!disabled && href) {
      Linking.openURL(href);
    }
  };
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { margin: margin ? margin : 0 }]}
      disabled={disabled}
      onPress={Platform.OS === 'web' ? undefined : handlePress}
    >
      <ImageBackground source={Assets.background} style={styles.imageBackground}>
        <LinearGradient
          start={{ x: 0.1, y: 0.4 }}
          style={styles.gradient}
          colors={
            disabled
              ? ['#ccc', '#aaa']
              : [
                  Assets.colors.jz2025ThemeColors.cyberYellowOpacity,
                  Assets.colors.jz2025ThemeColors.orangeYellowOpacity,
                ]
          }
        >
          {Platform.OS === 'web' ? (
            <Link
              href={href}
              target={targetBlank ? '_blank' : '_self'}
              rel={targetBlank ? 'noopener noreferrer' : undefined}
              style={[
                styles.title,
                { pointerEvents: disabled ? 'none' : 'auto', color: disabled ? '#777' : 'black' }, // Hindrer interaksjon på web
              ]}
              disabled={disabled}
            >
              {title}
            </Link>
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    margin: 5,
    borderRadius: 5,
    alignSelf: 'center',
    elevation: 2, // Shadow effect for Android
    shadowColor: Assets.colors.jz2025ThemeColors.darkBrown, // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    borderRadius: 5,
    width: 200,
  },
  title: {
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontSize: Dimensions.get('window').width > 768 ? 18 : 16,
    fontFamily: 'Cinzel_500Medium',
    textAlign: 'center',
    width: '100%',
    padding: 6,
  },
});
