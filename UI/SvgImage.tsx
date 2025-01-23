import { SvgProps } from 'react-native-svg';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type SvgImageProps = {
  SVG: React.FC<SvgProps>;
  height: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
  title?: string;
};

const SvgImage: React.FC<SvgImageProps> = ({ SVG, height, width, style, title }) => {
  return (
    <View
      style={style ? style :
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }
      }
    >
        <SVG height={height} width={width !== undefined ? width : '100%'} title={title ? title : ''} />
    </View>
  );
};

export default SvgImage;
