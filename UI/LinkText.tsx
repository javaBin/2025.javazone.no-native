import { Dimensions, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Link } from 'expo-router';
import { Assets } from '@/Assets';
import React from 'react';

type LinkTextProps = {
  title: string;
  href: string;
  style?: StyleProp<ViewStyle>;
  targetSelf?: boolean;
};

const LinkText: React.FC<LinkTextProps> = ({ title, href, style, targetSelf }) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target={targetSelf && targetSelf ? '_self' : '_blank'}
      style={{ ...styles.listItemMail, ...{ style } }}
    >
      {title}
    </Link>
  );
};

const styles = StyleSheet.create({
  listItemMail: {
    color: Assets.colors.jz2025ThemeColors.vividOrange,
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: Dimensions.get('window').width > 768 ? 18 : 16,
    textDecorationLine: 'underline',
    marginHorizontal: 3,
  },
});

export default LinkText;
