import { Assets } from '@/Assets';
import { BlurView } from 'expo-blur';
import { Platform, StyleProp, Text, ViewStyle } from 'react-native';
import React from 'react';

type SectionBoxProps = {
  children: React.ReactNode;
  sectionTitle: string;
  style?: StyleProp<ViewStyle>;
};

/** 'dimezisBlurView' is a must for BlurView support on android */
const SectionBox: React.FC<SectionBoxProps> = ({ children, sectionTitle, style }) => {
  return (
    <BlurView
      tint="light"
      intensity={Platform.OS === 'web' ? 20 : 40}
      experimentalBlurMethod={'dimezisBlurView'}
      style={[Assets.styles.section, Assets.styles.shadow, style]}
    >
      <Text style={Assets.styles.sectionTitle}>{sectionTitle}</Text>
      {children}
    </BlurView>
  );
};

export default SectionBox;
