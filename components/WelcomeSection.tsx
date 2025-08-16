import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Assets } from '@/Assets';
import { LinkButton } from '@/UI';

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <View style={[styles.titleContainer, { marginTop: 50, flexDirection: 'column', marginBottom: 'auto' }]}>
      <Text style={styles.welcomeText}>{t('javaZone.welcome_to_NOVA')}</Text>
      <Text style={styles.welcomeText}>{t('conference_date')}</Text>

      <View style={styles.eventCheckinContainer}>
        <LinkButton href={Assets.links.eventCheckin} title={t('javaZone.event_check_in')} targetBlank={true} />
      </View>

      <View style={styles.eventCheckinContainer}>
        <Text style={styles.workshopText}>{t('javaZone.workshop_registration')}</Text>
        <LinkButton href={Assets.links.workshopRegistration} title={t('javaZone.register_for_workshops')} targetBlank={true} />
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
    fontSize: Dimensions.get('window').width > 768 ? 36 : 24,
    textAlign: 'center',
  },
  workshopText: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: Dimensions.get('window').width > 768 ? 26 : 22,
    textAlign: 'center',
    marginVertical: 10,
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
  eventCheckinContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
});
