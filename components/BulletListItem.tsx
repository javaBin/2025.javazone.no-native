import React from 'react';
import { SvgImage } from '@/UI';
import { Assets } from '@/Assets';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

type BulletListItemProps = {
  text: string;
};
const BulletListItem: React.FC<BulletListItemProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <SvgImage SVG={Assets.UI.DividerDot} height={8} style={styles.bullet} />
      <Text style={Assets.styles.listText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    maxWidth: '100%',
  },
  bullet: {
    marginTop: 15,
    marginRight: Dimensions.get('window').width > 768 ? 15 : 10,
    maxWidth: 10
  },
});

export default BulletListItem;
