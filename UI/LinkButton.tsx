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
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, targetBlank, margin }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, { margin: margin ? margin : 0 }]}>
      <ImageBackground source={Assets.background} style={styles.imageBackground}>
        <LinearGradient
          start={{ x: 0.1, y: 0.4 }}
          style={styles.gradient}
          colors={[
            Assets.colors.jz2025ThemeColors.cyberYellowOpacity,
            Assets.colors.jz2025ThemeColors.orangeYellowOpacity,
          ]}
        >
          <Link
            style={styles.title}
            href={href}
            target={targetBlank && targetBlank ? '_blank' : '_self'}
            rel="noopener"
          >
            {title}
          </Link>
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
