import React from 'react';
import { Dimensions, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Assets } from '@/Assets';
import { SvgImage } from '@/UI/';

type PageTitleProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  subTitle?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subTitle && <Text style={[Assets.styles.sectionSubTitle, { marginBottom: 20 }]}>{subTitle}</Text>}
      <SvgImage SVG={Assets.UI.DividerWide} height={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '100%',
  },
  title: {
    fontSize: Dimensions.get('window').width > 768 ? 42 : 36,

    color: Assets.colors.brand.charcoal,
    fontFamily: 'Cinzel_400Regular',
    textAlign: 'center',
  },
});

export default PageTitle;
