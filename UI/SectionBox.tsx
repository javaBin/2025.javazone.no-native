import { Assets } from '@/Assets';
import { BlurView } from 'expo-blur';
import { DimensionValue, Platform, StyleProp, Text, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

type SectionBoxProps = {
  children: React.ReactNode;
  sectionTitle: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

/** 'dimezisBlurView' is a must for BlurView support on android */
const SectionBox: React.FC<SectionBoxProps> = ({ children, sectionTitle, style, titleStyle }) => {
  return (
    <BlurView
      tint="light"
      intensity={Platform.OS === 'web' ? 20 : 65}
      experimentalBlurMethod={'dimezisBlurView'}
      style={[Assets.styles.section, Assets.styles.shadow, style]}
    >
      <Text style={[Assets.styles.sectionTitle, titleStyle]}>{sectionTitle}</Text>
      {children}
    </BlurView>
  );
};

export default SectionBox;
