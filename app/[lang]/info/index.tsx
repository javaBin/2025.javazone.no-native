import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Assets } from '@/Assets';
import { ScreenTemplate } from '@/components';
import { SvgImage, SectionBox, LinkText, LinkButton } from '@/UI';
import { BulletListItem } from '@/components';
import React from 'react';
import { Link, useGlobalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

const JavaZoneInfo = () => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  // Calculate responsive image width with padding consideration
  const imageWidth = Math.min(screenWidth * 0.9, 610);

  return (
    <ScreenTemplate pageTitle={t('info.jz2025_info')} shouldScrollToTop={true}>
      {/* Introduction */}
      <SectionBox sectionTitle={t('info.less_then_a_week')}>
        <Text style={[Assets.styles.preface, styles.introText]}>
          {t('info.cant_wait_to_see')}
        </Text>
      </SectionBox>

      {/* Venue */}
      <SectionBox sectionTitle={t('info.javazone_venue')}>
        <Text style={Assets.styles.text}>
          {t('info.nova_spektrum_venue_info')}
        </Text>

        <View style={styles.addressBox}>
          <Text style={[Assets.styles.text, styles.addressText]}>{t('info.nova_spektrum_address_line1')}</Text>
          <Text style={[Assets.styles.text, styles.addressText]}>{t('info.nova_spektrum_address_line2')}</Text>
        </View>
      </SectionBox>

      {/* Public Transportation */}
      <SectionBox sectionTitle={t('info.public_transportation_title')}>
        <Text style={Assets.styles.sectionSubTitle}>{t('info.train_vy')}</Text>
        <Text style={Assets.styles.text}>
          {t('info.train_vy_info')}
        </Text>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>{t('info.airport_express')}</Text>
        <Text style={Assets.styles.text}>{t('info.airport_express_info')}</Text>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>{t('info.bus_title')}</Text>
        <Text style={Assets.styles.text}>{t('info.bus_info')}</Text>
      </SectionBox>

      {/* Parking */}
      <SectionBox sectionTitle={t('info.parking_title')}>
        <Text style={Assets.styles.text}>
          {t('info.parking_info')}
        </Text>

        <View style={styles.pricingBox}>
          <Text style={Assets.styles.sectionSubTitle}>{t('info.vehicles_under_3500')}</Text>
          <Text style={Assets.styles.text}>{t('info.vehicles_under_3500_price')}</Text>
        </View>

        <View style={styles.pricingBox}>
          <Text style={Assets.styles.sectionSubTitle}>{t('info.vehicles_over_3500')}</Text>
          <Text style={Assets.styles.text}>{t('info.vehicles_over_3500_price')}</Text>
        </View>

        <BulletListItem text={t('info.disabled_parking')} />
        <BulletListItem text={t('info.ev_charging')} />

        <View style={styles.linkContainer}>
          <Link href="https://maps.app.goo.gl/PRsnr73LnHxS5qwH8" style={styles.linkText}>
            {t('info.view_parking_maps')}
          </Link>
        </View>
      </SectionBox>

      <LinkButton href={`info/directions`} title={t('info.more_detailed_directions')} />

      {/* Workshop Venue */}
      <SectionBox sectionTitle={t('info.workshop_venue')}>
        <Text style={Assets.styles.text}>
          {t('info.workshop_venue_info')}
        </Text>
      </SectionBox>

      {/* Accessibility */}
      <SectionBox sectionTitle={t('info.accessibility_title')}>
        <Text style={Assets.styles.text}>
          {t('info.accessibility_info')}
        </Text>

        <View style={styles.contactBox}>
          <Link href="mailto:javazone@macsimum.no" style={styles.linkText}>
            javazone@macsimum.no
          </Link>
        </View>
      </SectionBox>

      {/* Weather */}
      <SectionBox sectionTitle={t('info.weather_title')}>
        <Text style={Assets.styles.text}>
          {t('info.weather_info')}
        </Text>
      </SectionBox>

      {/* Currency */}
      <SectionBox sectionTitle={t('info.currency_title')}>
        <Text style={Assets.styles.text}>
          {t('info.currency_info')}
        </Text>
      </SectionBox>

      {/* Conference */}
      <SectionBox sectionTitle={t('info.conference_title')}>
        <Text style={Assets.styles.text}>
          {t('info.conference_info')}
        </Text>
      </SectionBox>

      {/* Tickets */}
      <SectionBox sectionTitle={t('info.tickets_title')}>
        <Text style={Assets.styles.text}>
          {t('info.tickets_info')}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/ticket.jpg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>

      {/* Food */}
      <SectionBox sectionTitle={t('info.food_title')}>
        <Text style={Assets.styles.text}>
          {t('info.food_info')}
        </Text>
        <LinkButton href={`food`} title={t('info.food_button')}/>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/food1.jpg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>

      {/* AweZone */}
      <SectionBox sectionTitle={t('info.awezone_title')}>
        <Text style={Assets.styles.text}>
          {t('info.awezone_info')}
        </Text>
        <BulletListItem text={t('info.bars_open')} />
        <BulletListItem text={t('info.party_starts')} />

        <LinkButton href={`awezone`} title={t('info.more_awezone_details')}/>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/party.jpeg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>

      {/* LuckyZone */}
      <SectionBox sectionTitle={t('info.luckyzone_title')}>
        <Text style={Assets.styles.text}>
          {t('info.luckyzone_info')}
        </Text>
        <Link href={'https://endometriose.no/hjelp-oss-a-hjelpe/'} style={styles.linkText} target={"_blank"}>
          <BulletListItem text={t('info.endometriose')} />
        </Link>
        <Link href={'https://legerutengrenser.no/stott-oss/vipps/'} style={styles.linkText} target={"_blank"}>
          <BulletListItem text={t('info.leger_uten_grenser')} />
        </Link>
        <Link href={'https://kreftforeningen.no/stott-kreftforeningen/'} style={styles.linkText} target={"_blank"}>
          <BulletListItem text={t('info.kreftforeningen')} />
        </Link>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/luckyzone.png')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="contain"
          />
        </View>
      </SectionBox>

      {/* Speakers */}
      <SectionBox sectionTitle={t('info.speakers_title')}>
        <Text style={Assets.styles.text}>
          {t('info.speakers_info')}
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/speaker.jpg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>

      {/* Code of Conduct */}
      <SectionBox sectionTitle={t('info.code_of_conduct_title')}>
        <Text style={Assets.styles.text}>
          {t('info.code_of_conduct_info')}
        </Text>
        <View style={styles.linkContainer}>
          <Link href="https://java.no/principles" style={styles.linkText}>
            {t('info.code_of_conduct_link')}
          </Link>
        </View>
      </SectionBox>

      {/* Social Media */}
      <SectionBox sectionTitle={t('info.social_media_title')}>
        <Text style={Assets.styles.text}>
          {t('info.social_media_info')}
        </Text>
      </SectionBox>

      {/* More Info */}
      <SectionBox sectionTitle={t('info.more_info_title')}>
        <Text style={Assets.styles.text}>
          {t('info.more_info_text')}
        </Text>
        <View style={styles.contactBox}>
          <Link href="mailto:javazone@java.no" style={styles.linkText}>
            javazone@java.no
          </Link>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/info/crew.jpg')}
            style={[styles.heroImage, { width: imageWidth, height: 300, maxWidth: '100%' }]}
            resizeMode="cover"
          />
        </View>
      </SectionBox>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  introText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width > 768 ? 20 : 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressBox: {
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: Assets.colors.jz2025ThemeColors.vividOrange,
  },
  addressText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  pricingBox: {
    backgroundColor: Assets.colors.jz2025ThemeColors.linen,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: Assets.colors.jz2025ThemeColors.crimsonRed,
  },
  linkContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  contactBox: {
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  },
  linkText: {
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular',
    fontSize: Dimensions.get('window').width > 768 ? 20 : 18,
    textDecorationLine: 'underline',
    marginHorizontal: 3,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
});

export default JavaZoneInfo;
