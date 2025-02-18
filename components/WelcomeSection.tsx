import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Assets } from '@/Assets';

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <View style={[styles.titleContainer, { marginTop: 20, flexDirection: 'column', marginBottom: 'auto' }]}>
      <Text style={styles.welcomeText}>{t('javaZone.welcome_to_NOVA')}</Text>
      <Text style={styles.welcomeText}>{t('conference_date')}</Text>

      <View style={styles.ticketContainer}>
        <Text style={styles.ticketText}>{t('ticket.announcement')}</Text>
      </View>
    </View>
  );
};

export default WelcomeSection;

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
  },
  welcomeText: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: Dimensions.get('window').width > 768 ? 30 : 25,
    textAlign: 'center',
  },
  ticketContainer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 3,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 3,
    borderBlockStartColor: Assets.colors.jz2025ThemeColors.orangeYellow,
    borderBlockEndColor: Assets.colors.jz2025ThemeColors.vividOrange,
    borderStartColor: Assets.colors.jz2025ThemeColors.cyberYellow,
    borderEndColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  ticketText: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: Dimensions.get('window').width > 768 ? 24 : 20,
    color: Assets.colors.jz2025ThemeColors.darkBrown,
  },
});
