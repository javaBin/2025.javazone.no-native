import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Assets } from '@/Assets';
import { ScreenTemplate } from '@/components';
import { SvgImage, SectionBox, LinkText } from '@/UI';
import { BulletListItem } from '@/components';
import React from 'react';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

const Directions = () => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScreenTemplate pageTitle={t('info.directions.how_to')} shouldScrollToTop={true}>
      {/* Introduction */}
      <SectionBox sectionTitle={t('info.directions.location')}>
        <Text style={Assets.styles.preface}>
          {t('info.directions.nova_spektrum')}
        </Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.visiting_address')}</Text>
        <View style={styles.addressBox}>
          <Text style={[Assets.styles.text, styles.addressText]}>NOVA Spektrum</Text>
          <Text style={[Assets.styles.text, styles.addressText]}>Messeveien 8</Text>
          <Text style={[Assets.styles.text, styles.addressText]}>2004 Lillestrøm</Text>
        </View>
      </SectionBox>

      {/* Public Transportation */}
      <SectionBox sectionTitle={`🚆 ${t('info.directions.public_transportation')}`}>
        <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.train')}</Text>
        <Text style={Assets.styles.text}>
          {t('info.directions.vy_info')}
        </Text>
        <View style={styles.importantBox}>
          <Text style={[Assets.styles.callout, styles.importantText]}>
            {t('info.directions.important_note')}
          </Text>
        </View>
        <Text style={Assets.styles.text}>{t('info.directions.use_ruter')}</Text>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.airport_train')}</Text>
        <Text style={Assets.styles.text}>
          {t('info.directions.airport_train_info')}
        </Text>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.bus')}</Text>
        <Text style={Assets.styles.text}>
          {t('info.directions.bus_info')}
        </Text>

        <View style={styles.linkContainer}>
          <LinkText
            title={t('info.directions.view_walking_directions')}
            href="https://maps.app.goo.gl/6YCAZhLvBNHJA2rD6"
          />
        </View>
      </SectionBox>

      {/* Car/Motorcycle */}
      <SectionBox sectionTitle={`🚗 ${t('info.directions.car_motorcycle')}`}>
        <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.parking_info')}</Text>
        <Text style={Assets.styles.text}>
          {t('info.directions.parking_info_one')}
        </Text>

        <View style={styles.importantBox}>
          <Text style={[Assets.styles.callout, styles.warningText]}>
            {t('info.directions.parking_info_two')}
          </Text>
        </View>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.parking_rates')}</Text>

        <View style={styles.pricingBox}>
          <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.vehicles_under_3_5_kg')}</Text>
          <Text style={Assets.styles.text}>{t('info.directions.also_applies_to')}</Text>
          <BulletListItem text={t('info.directions.nok_per_hour')} />
          <BulletListItem text={t('info.directions.max_price')} />
        </View>

        <View style={styles.pricingBox}>
          <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.vehicles_over_3500_kg')}</Text>
          <BulletListItem text={t('info.directions.nok_144_per_hour')} />
          <BulletListItem text={t('info.directions.max_price_over_3500')} />
        </View>

        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.special_parking')}</Text>
        <BulletListItem text={t('info.directions.disabled_parking')} />
        <BulletListItem text={t('info.directions.electric_charging')} />

        <Text style={Assets.styles.sectionSubTitle}>{t('info.directions.payment_options')}</Text>
        <Text style={Assets.styles.text}>{t('info.directions.payment_methods')}</Text>

        <View style={styles.linkContainer}>
          <LinkText
            title={t('info.directions.view_parking_location')}
            href="https://maps.app.goo.gl/PRsnr73LnHxS5qwH8"
          />
        </View>
      </SectionBox>

      {/* Accessibility */}
      <SectionBox sectionTitle={t('info.directions.accessibility')}>
        <Text style={Assets.styles.text}>
          {t('info.directions.accessibility_info')}
        </Text>

        <View style={styles.contactBox}>
          <Text style={Assets.styles.text}>
            {t('info.directions.contact_assistance')}
          </Text>
          <Link
            href="mailto:javazone@macsimum.no"
            style={styles.linkText}
          >
            {t('info.directions.contact_email')}
          </Link>
        </View>
      </SectionBox>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
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
  importantBox: {
    backgroundColor: Assets.colors.jz2025ThemeColors.sheetOpacity,
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  },
  importantText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  warningText: {
    textAlign: 'left',
    fontSize: Dimensions.get('window').width > 768 ? 18 : 16,
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
  }
});

export default Directions;
