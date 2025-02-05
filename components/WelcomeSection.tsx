import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BlurView } from 'expo-blur';
import { useMediaQuery } from 'react-responsive';
import { SvgImage } from '@/UI';
import { Assets } from '@/Assets';

const WelcomeSection = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <View style={[styles.titleContainer, { marginTop: 20, flexDirection: 'column' }]}>
      <Text style={styles.welcomeText}>{t('javaZone.welcome_to_NOVA')}</Text>
      <Text style={styles.welcomeText}>September 3-4</Text>
      <View style={styles.blurViewWrapper}>
        <SvgImage SVG={Assets.UI.VineLeft} height={100} style={styles.vineLeft} />
        <BlurView
          tint="light"
          intensity={10}
          style={[
            { ...styles.ticketContentItem, ...styles.ticketContentItemUniversal },
            isMobile && styles.ticketContentItemMobile,
          ]}
        >
          <Text style={styles.welcomeText}>Ticket sales will start March 3rd</Text>
        </BlurView>
        <SvgImage SVG={Assets.UI.VineRight} height={100} style={styles.vineRight} />
      </View>
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
    fontSize: Dimensions.get('window').width > 768 ? 20 : 18,
  },
  welcomeText: {
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: Dimensions.get('window').width > 768 ? 30 : 25,
    textAlign: 'center',
  },
  ticketContentItemUniversal: {
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#403532',
    shadowOpacity: 0.1,
    shadowOffset: { width: -1, height: 1 },
    shadowRadius: 10,
  },
  ticketContentItem: {
    alignItems: 'center',
    flexBasis: 'auto',
    padding: 25,
    marginHorizontal: 5,
    width: Dimensions.get('window').width > 768 ? '100%' : '100%',
  },
  ticketContentItemMobile: {
    flexBasis: 'auto',
    padding: 10,
  },
  blurViewWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  vineLeft: {
    position: 'absolute',
    left: -5,
    top: 10,
    zIndex: 1,
  },
  vineRight: {
    position: 'absolute',
    right: -5,
    top: 10,
    zIndex: 1,
  },
});
