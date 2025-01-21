import { View, Text, StyleSheet, Platform } from 'react-native';
import { Assets } from '@/Assets';

const WelcomeSection = () => {
  return (
    <View style={[styles.titleContainer, { marginTop: 20, flexDirection: 'column' }]}>
      <Text style={{ fontFamily: 'PlayfairDisplay_400Regular', fontSize: 40 }}>
        Velkommen til NOVA Spektrum, Lillestrøm
      </Text>
      <Text style={{ fontFamily: 'PlayfairDisplay_400Regular', fontSize: 40 }}>September 3-4</Text>
    </View>
  );
};

export default WelcomeSection;

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 'auto',
  },
  title: {
    fontSize: Platform.OS == 'web' ? 20 : 18,
  },
  titleLeft: {
    alignSelf: 'flex-start',
    color: Assets.colors.brand.charcoal,
    fontWeight: '500',
    width: '50%',
  },
  titleRight: {
    alignSelf: 'flex-end',
    color: Assets.colors.brand.charcoal,
    marginLeft: Platform.OS == 'web' ? 5 : 1,
    width: '100%',
  },
});
