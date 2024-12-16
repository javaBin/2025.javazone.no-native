import { ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Assets } from '@/Assets';

const Partner = () => {
  const { t } = useTranslation();

  return (
    <ScreenTemplate>
      <ScrollView>
        <View style={styles.partnerHeadingInfo}>
          <h1>{t('partner.partner_info.javaZone_2025_partner')}</h1>
          <p>{t('partner.partner_info.partner_registration_opens')}</p>
          <p>
            {t('partner.partner_info.questions_email')}{' '}
            <a style={{ color: 'inherit' }} href="mailto:partner@java.no">
              partner@java.no
            </a>
          </p>
        </View>

        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50 }}>
          <h2>{t('partner.partner_info.partner_packages')}</h2>
          <View style={styles.partnerContentInfo}>
            <View style={styles.partnerContentItem}>
              <h3>{t('partner.partner_info.standard_package')}</h3>
              <div>
                <p>{t('partner.partner_info.price')}: 100 000,- NOK ex VAT</p>
              </div>
              <ul>
                <li>{t('partner.partner_info.standard_package_detail_1')}</li>
                <li>{t('partner.partner_info.standard_package_detail_2')}</li>
                <li>{t('partner.partner_info.standard_package_detail_3')}</li>
                <li>{t('partner.partner_info.standard_package_detail_4')}</li>
                <li>{t('partner.partner_info.standard_package_detail_5')}</li>
                <li>{t('partner.partner_info.standard_package_detail_6')}</li>
                <li>{t('partner.partner_info.standard_package_detail_7')}</li>
              </ul>
            </View>

            <View style={styles.partnerContentItem}>
              <h3>{t('partner.partner_info.restaurant_stand')}</h3>
              <div>
                <p>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</p>
              </div>
              <ul>
                <li>{t('partner.partner_info.restaurant_stand_detail_1')}</li>
                <li>{t('partner.partner_info.restaurant_stand_detail_2')}</li>
                <li>{t('partner.partner_info.restaurant_stand_detail_3')}</li>
                <li>{t('partner.partner_info.restaurant_stand_detail_4')}</li>
              </ul>
            </View>

            <View style={styles.partnerContentItem}>
              <h3>{t('partner.partner_info.concept_stand')}</h3>
              <div>
                <p>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</p>
              </div>
              <ul>
                <li>{t('partner.partner_info.concept_stand_detail_1')}</li>
                <li>{t('partner.partner_info.concept_stand_detail_2')}</li>
                <li>{t('partner.partner_info.concept_stand_detail_3')}</li>
              </ul>
            </View>

            <View style={styles.partnerContentItem}>
              <h3>{t('partner.partner_info.extended_package')}</h3>
              <p>{t('partner.partner_info.same_as_standard')}</p>
              <div>
                <p>{t('partner.partner_info.price')}: 160 000,- NOK ex VAT</p>
              </div>
            </View>

            <View style={styles.partnerContentItem}>
              <h3>{t('partner.partner_info.partner_tickets')}</h3>
              <p>{t('partner.partner_info.partner_tickets_detail_1')}</p>
              <div>
                <p>{t('partner.partner_info.price')}: 9 220,- NOK ex VAT incl ticket fee</p>
              </div>
              <ul>
                <li>{t('partner.partner_info.round_robin_distribution')}</li>
                <li>{t('partner.partner_info.first_come_first_served')}</li>
              </ul>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.heading}>{t('partner.watch_partner_meeting')}</Text>
          <VideoPlayer videoUrl={'https://player.vimeo.com/video/1038270530'} />
        </View>
      </ScrollView>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  partnerHeadingInfo: {
    display: 'flex',
    marginHorizontal: 100,
    fontSize: 20,
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
  partnerContentItem: {
    flexBasis: '50%',
    padding: 10,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    marginHorizontal: 20,
    fontSize: Platform.OS == 'web' ? 20 : 18,
    fontWeight: 'bold',
    color: Assets.colors.brand.cream,
    marginBottom: 20,
  },
});

export default Partner;
