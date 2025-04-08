import { Assets } from '@/Assets';
import { BlurView } from 'expo-blur';
import {Platform, Text } from 'react-native';
import React from 'react';

type SectionBoxProps = {
  children: React.ReactNode;
  sectionTitle: string;
};
/** 'dimezisBlurView' is a must for BlurView support on android */
const SectionBox: React.FC<SectionBoxProps> = ({ children, sectionTitle }) => {
  return (
    <BlurView tint="light" intensity={Platform.OS === 'web' ? 20 : 40} experimentalBlurMethod={'dimezisBlurView'} style={{ ...Assets.styles.section, ...Assets.styles.shadow }}>
      <Text style={Assets.styles.sectionTitle}>{sectionTitle}</Text>
      {children}
    </BlurView>
  );
};

export default SectionBox;
