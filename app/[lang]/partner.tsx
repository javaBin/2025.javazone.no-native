import { BulletListItem, ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { Assets } from '@/Assets';
import React from 'react';
import { LinkButton, LinkText, SvgImage } from '@/UI';
import { BlurView } from 'expo-blur';

const Partner = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <ScreenTemplate pageTitle={t('pageTitles.partner')} shouldScrollToTop={true}>
      <Text style={[Assets.styles.text, { marginBottom: 20, marginHorizontal: 10 }]}>
        {t('partner.partner_info.questions_email')}{' '}
        <LinkText title={t('javaZone.partners_mail')} href={Assets.links.partnerMail} />
      </Text>
      <LinkButton
        href={Assets.links.partnerRegistration}
        title={t('partner.partner_info.register_cta')}
        targetBlank={true}
      />

      <Text style={[Assets.styles.sectionTitle, { marginBottom: 20, marginTop: isMobile ? 20 : 40 }]}>
        {t('partner.partner_info.partner_packages')}
      </Text>
      <View style={styles.partnerContentInfo}>
        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.standard_package')}</Text>
          <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 100 000,- NOK ex VAT</Text>

          <BulletListItem text={t('partner.partner_info.standard_package_detail_1')} />
          <BulletListItem text={t('partner.partner_info.standard_package_detail_2')} />
          <BulletListItem text={t('partner.partner_info.standard_package_detail_3')} />
          <BulletListItem text={t('partner.partner_info.standard_package_detail_4')} />
          <BulletListItem text={t('partner.partner_info.standard_package_detail_5')} />
          <BulletListItem text={t('partner.partner_info.standard_package_detail_6')} />
          <BulletListItem text={t('partner.partner_info.standard_package_detail_7')} />
        </BlurView>

        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.restaurant_stand')}</Text>
          <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>

          <BulletListItem text={t('partner.partner_info.restaurant_stand_detail_1')} />
          <BulletListItem text={t('partner.partner_info.restaurant_stand_detail_2')} />
          <BulletListItem text={t('partner.partner_info.restaurant_stand_detail_3')} />
          <BulletListItem text={t('partner.partner_info.restaurant_stand_detail_4')} />
        </BlurView>

        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.concept_stand')}</Text>
          <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>

          <BulletListItem text={t('partner.partner_info.concept_stand_detail_1')} />
          <BulletListItem text={t('partner.partner_info.concept_stand_detail_2')} />
          <BulletListItem text={t('partner.partner_info.concept_stand_detail_3')} />
        </BlurView>

        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.partner_tickets')}</Text>
          <Text style={Assets.styles.intro}>
            {t('partner.partner_info.price')}: 9 220,- NOK ex VAT {'\n'}incl ticket fee
          </Text>
          <Text style={[Assets.styles.text]}>{t('partner.partner_info.partner_tickets_detail_1')}</Text>

          <BulletListItem text={t('partner.partner_info.round_robin_distribution')} />
          <BulletListItem text={t('partner.partner_info.first_come_first_served')} />
          <LinkButton
            href={Assets.links.partnerTickets}
            title={t('partner.partner_info.order_tickets')}
            targetBlank={true}
            margin={isMobile ? 10 : 20}
          />
        </BlurView>

        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.extended_package')}</Text>
          <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 160 000,- NOK ex VAT</Text>
          <Text style={Assets.styles.text}>{t('partner.partner_info.same_as_standard')}</Text>
        </BlurView>
      </View>

      <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 20 }} />
      <View style={[styles.videoContainer, { marginBottom: 50 }]}>
        <Text style={[Assets.styles.sectionTitle, { marginHorizontal: 15, marginBottom: 20 }]}>
          {t('partner.watch_partner_meeting')}
        </Text>
        <VideoPlayer videoUrl={'https://player.vimeo.com/video/1038270530'} />
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    marginTop: 10,
  },
  partnerContentInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  partnerContentInfoMobile: {
    flexDirection: 'column',
  },
  partnerContentItem: {
    alignItems: 'flex-start',
    width: Dimensions.get('window').width > 768 ? '45%' : '100%',
    marginHorizontal: Dimensions.get('window').width > 768 ? 5 : 0,
    padding: 25,
    borderRadius: 5,
    shadowColor: Assets.colors.jz2025ThemeColors.darkBrown,
    shadowOpacity: 0.1,
    shadowOffset: { width: -1, height: 1 },
    shadowRadius: 10,
    flexGrow: 1,
  },
});

export default Partner;
