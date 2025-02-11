import { Image, ImageSourcePropType, ImageStyle, StyleSheet } from 'react-native';
import React from 'react';

interface CircleImageProps {
  source: ImageSourcePropType;
  size: number;
  style?: ImageStyle;
}

const CircleImage: React.FC<CircleImageProps> = ({ source, size, style }: CircleImageProps) => {
  const styles = StyleSheet.create({
    image: {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  });

  return <Image style={[styles.image, style]} source={source} />;
};

export default CircleImage;
