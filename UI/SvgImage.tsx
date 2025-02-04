import { SvgProps } from 'react-native-svg';
import React, {FunctionComponent} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

type SvgImageProps = {
  SVG: FunctionComponent<SvgProps>;
  height: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
  title?: string;
};

const SvgImage: React.FC<SvgImageProps> = ({ SVG, height, width, style, title }) => {
    // todo: fix issue with svg images not rendering after navigation, thought: onNavigate() something ... render()

    return (
        <View
          style={
            style
              ? style
              : {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                }
          }
        >
            <SVG height={height} width={width && width ? width : '100%'} title={title ? title : ''} />
        </View>
    );
};

export default SvgImage;
