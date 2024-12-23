import { ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { Assets } from '@/Assets';
import { Link } from 'expo-router';

const Partner = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 614 });

  return (
    <ScreenTemplate>
      <ScrollView style={[{ zIndex: -1 }, isMobile && { marginTop: 40 }]}>
        <View style={[styles.partnerHeadingInfo, isMobile && { marginHorizontal: 44.5 }]}>
          <Text style={styles.sectionTitle}>{t('partner.partner_info.javaZone_2025_partner')}</Text>
          <Text style={[styles.sectionText, { fontSize: 20 }]}>
            {t('partner.partner_info.partner_registration_opens')}
          </Text>
          <Text style={[styles.sectionText, { fontSize: 16 }]}>
            {t('partner.partner_info.questions_email')}{' '}
            <Link style={{ color: 'inherit', textDecorationLine: 'underline' }} href="mailto:partner@java.no">
              partner@java.no
            </Link>
          </Text>
        </View>

        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50 }}>
          <Text style={styles.sectionTitle}>{t('partner.partner_info.partner_packages')}</Text>
          <View style={[styles.partnerContentInfo, isMobile && styles.partnerContentInfoMobile]}>
            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={styles.sectionSubTitle}>{t('partner.partner_info.standard_package')}</Text>
              <View>
                <Text style={styles.sectionLightText}>{t('partner.partner_info.price')}: 100 000,- NOK ex VAT</Text>
              </View>
              <View>
                <Text style={styles.sectionText}>• {t('partner.partner_info.standard_package_detail_1')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.standard_package_detail_2')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.standard_package_detail_3')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.standard_package_detail_4')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.standard_package_detail_5')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.standard_package_detail_6')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.standard_package_detail_7')}</Text>
              </View>
            </View>

            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={styles.sectionSubTitle}>{t('partner.partner_info.restaurant_stand')}</Text>
              <View>
                <Text style={styles.sectionLightText}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>
              </View>
              <View>
                <Text style={styles.sectionText}>• {t('partner.partner_info.restaurant_stand_detail_1')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.restaurant_stand_detail_2')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.restaurant_stand_detail_3')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.restaurant_stand_detail_4')}</Text>
              </View>
            </View>

            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={styles.sectionSubTitle}>{t('partner.partner_info.concept_stand')}</Text>
              <View>
                <Text style={styles.sectionLightText}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>
              </View>
              <View>
                <Text style={styles.sectionText}>• {t('partner.partner_info.concept_stand_detail_1')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.concept_stand_detail_2')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.concept_stand_detail_3')}</Text>
              </View>
            </View>

            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={styles.sectionSubTitle}>{t('partner.partner_info.extended_package')}</Text>
              <Text style={styles.sectionText}>{t('partner.partner_info.same_as_standard')}</Text>
              <View>
                <Text style={styles.sectionLightText}>{t('partner.partner_info.price')}: 160 000,- NOK ex VAT</Text>
              </View>
            </View>

            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={styles.sectionSubTitle}>{t('partner.partner_info.partner_tickets')}</Text>
              <Text style={[styles.sectionText, !isMobile && { width: 600 }]}>
                {t('partner.partner_info.partner_tickets_detail_1')}
              </Text>
              <View>
                <Text style={styles.sectionLightText}>
                  {t('partner.partner_info.price')}: 9 220,- NOK ex VAT incl ticket fee
                </Text>
              </View>
              <View>
                <Text style={styles.sectionText}>• {t('partner.partner_info.round_robin_distribution')}</Text>
                <Text style={styles.sectionText}>• {t('partner.partner_info.first_come_first_served')}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.partnerVideoHeading}>{t('partner.watch_partner_meeting')}</Text>
          <VideoPlayer videoUrl={'https://player.vimeo.com/video/1038270530'} />
        </View>
      </ScrollView>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  partnerHeadingInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  partnerContentInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  partnerContentInfoMobile: {
    flexDirection: 'column',
  },
  partnerContentItem: {
    alignItems: 'center',
    flexBasis: 'auto',
    padding: 10,
  },
  partnerContentItemMobile: {
    flexBasis: 'auto',
    padding: 3,
  },
  content: {
    marginTop: 50,
  },
  partnerVideoHeading: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: Platform.OS == 'web' ? 20 : 18,
    fontWeight: 'bold',
    color: Assets.colors.brand.cream,
  },
  sectionTitle: {
    color: Assets.colors.brand.cream,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
  },
  sectionSubTitle: {
    color: Assets.colors.brand.cream,
    fontSize: 16,
    fontWeight: 'semibold',
    fontStyle: 'italic',
    marginTop: 5,
  },
  sectionText: {
    color: Assets.colors.brand.beige,
    marginVertical: 5,
  },
  sectionLightText: {
    color: Assets.colors.brand.cream,
    marginVertical: 5,
  },
});

export default Partner;
