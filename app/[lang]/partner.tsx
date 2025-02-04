import { ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { Assets } from '@/Assets';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

const Partner = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 614 });
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScreenTemplate>
      <ScrollView
        style={{ width: screenWidth < 768 ? '100%' : '90%' }}
        contentContainerStyle={Assets.styles.scrollContainer}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={Assets.styles.section}>
          <Text style={Assets.styles.sectionTitle}>{t('partner.partner_info.javaZone_2025_partner')}</Text>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.partner_registration_opens')}</Text>

          <Text style={Assets.styles.text}>
            {t('partner.partner_info.questions_email')}{' '}
            <Link style={{ color: 'inherit', textDecorationLine: 'underline' }} href={Assets.links.partnerMail}>
              {t('javaZone.partners_mail')}
            </Link>
          </Text>

          <Text style={Assets.styles.text}>
            <TouchableOpacity style={styles.registerButton}>
              <LinearGradient
                start={{ x: 0.1, y: 0.4 }}
                style={{ padding: 6, borderRadius: 3, opacity: 20, width: 200, alignItems: 'center' }}
                colors={[Assets.colors.gradient.brown, Assets.colors.gradient.dark]}
              >
                <Link
                  style={{ color: Assets.colors.logo.mediumYellow }}
                  href="https://event.checkin.no/101610/javazone-2025-partnership"
                  target="_blank"
                  rel="noopener"
                >
                  {t('partner.partner_info.register_cta')}
                </Link>
              </LinearGradient>
            </TouchableOpacity>
          </Text>
        </View>

        <View style={Assets.styles.section}>
          <Text style={Assets.styles.sectionTitle}>{t('partner.partner_info.partner_packages')}</Text>
          <View style={[styles.partnerContentInfo, isMobile && styles.partnerContentInfoMobile]}>
            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={Assets.styles.intro}>{t('partner.partner_info.standard_package')}</Text>
              <View>
                <Text style={Assets.styles.callout}>{t('partner.partner_info.price')}: 100 000,- NOK ex VAT</Text>
              </View>
              <View>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.standard_package_detail_1')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.standard_package_detail_2')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.standard_package_detail_3')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.standard_package_detail_4')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.standard_package_detail_5')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.standard_package_detail_6')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.standard_package_detail_7')}</Text>
              </View>
            </View>

            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={Assets.styles.intro}>{t('partner.partner_info.restaurant_stand')}</Text>
              <View>
                <Text style={Assets.styles.callout}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>
              </View>
              <View>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.restaurant_stand_detail_1')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.restaurant_stand_detail_2')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.restaurant_stand_detail_3')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.restaurant_stand_detail_4')}</Text>
              </View>
            </View>

            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={Assets.styles.intro}>{t('partner.partner_info.concept_stand')}</Text>
              <View>
                <Text style={Assets.styles.callout}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>
              </View>
              <View>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.concept_stand_detail_1')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.concept_stand_detail_2')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.concept_stand_detail_3')}</Text>
              </View>
            </View>

            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={Assets.styles.intro}>{t('partner.partner_info.partner_tickets')}</Text>
              <Text style={Assets.styles.callout}>
                {t('partner.partner_info.price')}: 9 220,- NOK ex VAT incl ticket fee
              </Text>
              <Text style={[Assets.styles.text]}>{t('partner.partner_info.partner_tickets_detail_1')}</Text>
              <View>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.round_robin_distribution')}</Text>
                <Text style={Assets.styles.listText}>• {t('partner.partner_info.first_come_first_served')}</Text>
              </View>
            </View>

            <View style={[styles.partnerContentItem, isMobile && styles.partnerContentItemMobile]}>
              <Text style={[Assets.styles.intro, { maxWidth: '100%' }]}>
                {t('partner.partner_info.extended_package')}
              </Text>
              <Text style={Assets.styles.text}>{t('partner.partner_info.same_as_standard')}</Text>
              <View>
                <Text style={Assets.styles.callout}>{t('partner.partner_info.price')}: 160 000,- NOK ex VAT</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.content, { marginBottom: 50 }]}>
        <Text style={[Assets.styles.sectionTitle, { marginHorizontal: 15, marginBottom: 20 }]}>{t('partner.watch_partner_meeting')}</Text>
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
    justifyContent: 'flex-start',
    width: '100%',
  },
  partnerContentInfoMobile: {
    flexDirection: 'column',
  },
  partnerContentItem: {
    alignItems: 'flex-start',
    flexBasis: 'auto',
    padding: 20,
    width: Dimensions.get('window').width >= 768 ? '50%' : '100%',
  },
  partnerContentItemMobile: {
    flexBasis: 'auto',
    padding: 3,
  },
  content: {
    marginTop: 10,
  },
  partnerVideoHeading: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: Platform.OS == 'web' ? 20 : 18,
    fontWeight: 'bold',
    color: Assets.colors.brand.cream,
  },
  registerButton: {
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // Shadow effect for Android
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default Partner;
