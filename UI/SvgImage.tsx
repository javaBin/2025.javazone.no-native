import { SvgProps } from 'react-native-svg';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import React, { useCallback, useState, FunctionComponent } from 'react';
import { useFocusEffect } from 'expo-router';

type SvgImageProps = {
  SVG: FunctionComponent<SvgProps>;
  height: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
  title?: string;
};

const SvgImage: React.FC<SvgImageProps> = ({ SVG, height, width, style, title }) => {
  return (
    <View style={style || styles.imageContainer}>
      <SVG height={height} width={width && width ? width : '100%'} title={title || ''} />
    </View>
  ) ;
};

export const SvgCallbackImage: React.FC<SvgImageProps> = ({ SVG, height, width, style, title }) => {
    const [isMounted, setIsMounted] = useState(false);

    useFocusEffect(
        useCallback(() => {
            // Force re-render when screen becomes focused
            setIsMounted(true);

            return () => {
                setIsMounted(false);
            };
        }, [])
    );

    return isMounted ? (
        <View style={style || styles.imageContainer}>
            <SVG height={height} width={width && width ? width : '100%'} title={title || ''} />
        </View>
    ) : null;
}

const styles = StyleSheet.create({
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
})

export default SvgImage;
