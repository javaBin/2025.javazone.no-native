import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Assets } from '@/Assets';
import { LinkButton, SvgImage } from '@/UI';
import { useGlobalSearchParams } from 'expo-router';
import React from 'react';

const WelcomeSection = () => {
  const { t } = useTranslation();
  const { lang } = useGlobalSearchParams();

  return (
    <View style={[styles.titleContainer, { marginTop: 50, flexDirection: 'column', marginBottom: 'auto' }]}>
      <Text style={styles.welcomeText}>{t('javaZone.welcome_to_NOVA')}</Text>
      <Text style={styles.welcomeText}>{t('conference_date')}</Text>
      <Text style={[styles.ticketText, {marginTop: 20}]}>{t('javaZone.waiting_list')}</Text>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <LinkButton href={`${lang}/program`} title={t("program")} targetBlank={false} />
        </View>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} />
        <View style={styles.buttonWrapper}>
          <LinkButton href={`${lang}/info`} title={t("Info")} targetBlank={false} />
        </View>
        <View style={styles.buttonWrapper}>
          <LinkButton href={`${lang}/volunteers`} title={t("Volunteers")} targetBlank={false} />
        </View>
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
    textAlign: 'center',
    fontSize: Dimensions.get('window').width > 768 ? 24 : 20,
    color: Assets.colors.jz2025ThemeColors.darkBrown,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    gap: 15,
    width: '100%',
  },
  buttonWrapper: {
    width: '80%',
    maxWidth: 300,
  },
  eventCheckinContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
});
