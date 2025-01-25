import { View, Text, StyleSheet, Platform } from 'react-native';
import { Assets } from '@/Assets';
import { useTranslation } from 'react-i18next';

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <View style={[styles.titleContainer, { marginTop: 20, flexDirection: 'column' }]}>
      <Text style={{ fontFamily: 'PlayfairDisplay_400Regular', fontSize: 30 }}>{t('javaZone.welcome_to_NOVA')}</Text>
      <Text style={{ fontFamily: 'PlayfairDisplay_400Regular', fontSize: 30 }}>September 3-4</Text>
    </View>
  );
};

export default WelcomeSection;

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 55,
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 'auto',
  },
  title: {
    fontSize: Platform.OS == 'web' ? 20 : 18,
  },
});
