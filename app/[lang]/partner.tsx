import { ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import {
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { Assets } from '@/Assets';
import React from 'react';
import { LinkButton, LinkText, SvgImage } from "@/UI";
import { BlurView } from "expo-blur";

const Partner = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const temporaryVideoFix = () => {
    return Platform.OS === 'web' ?
     (
        <View style={{width: '100%'}}>
          <Text style={[Assets.styles.sectionSubTitle, {
            paddingHorizontal: isMobile ? 5 : 0,
            marginBottom: isMobile ? 15 : 20}]}>
            {t('partner.watch_partner_meeting')}
          </Text>
          <VideoPlayer videoUrl={Assets.links.partnerVideo} />
        </View>
    ) : (<View></View>)
  }

  return (
    <ScreenTemplate pageTitle={t('pageTitles.partner')} shouldScrollToTop={true}>
      <Text style={[Assets.styles.sectionSubTitle, {textAlign: 'center'}]}>
        {t('partner.partner_info.partner_registration_opens')}
      </Text>
      <Text style={[Assets.styles.text, {marginBottom: 20, marginHorizontal: 10}]}>
        {t('partner.partner_info.questions_email')}{' '}
        <LinkText title={t('javaZone.partners_mail')} href={Assets.links.partnerMail}/>
      </Text>
      <LinkButton href={Assets.links.partnerRegistration} title={t('partner.partner_info.register_cta')} targetBlank={true}/>

      <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 20}}/>

      <Text style={[Assets.styles.sectionTitle, {marginBottom: 10, marginTop: isMobile ? 2.5 : 0}]}>{t('partner.partner_info.partner_packages')}</Text>
      <View style={styles.partnerContentInfo}>
        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.standard_package')}</Text>
          <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 100 000,- NOK ex VAT</Text>

          <View>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_1')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_2')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_3')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_4')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_5')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_6')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.standard_package_detail_7')}</Text>
          </View>
        </BlurView>

        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.restaurant_stand')}</Text>
          <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>

          <View>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.restaurant_stand_detail_1')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.restaurant_stand_detail_2')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.restaurant_stand_detail_3')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.restaurant_stand_detail_4')}</Text>
          </View>
        </BlurView>

        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.concept_stand')}</Text>
          <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 190 000,- NOK ex VAT</Text>

          <View>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.concept_stand_detail_1')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.concept_stand_detail_2')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.concept_stand_detail_3')}</Text>
          </View>
        </BlurView>

        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.partner_tickets')}</Text>
          <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 9 220,- NOK ex VAT {'\n'}incl ticket fee</Text>
          <Text style={[Assets.styles.text]}>{t('partner.partner_info.partner_tickets_detail_1')}</Text>

          <View>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.round_robin_distribution')}</Text>
            <Text style={Assets.styles.listText}>- {t('partner.partner_info.first_come_first_served')}</Text>
          </View>
        </BlurView>

        <BlurView tint="light" intensity={20} style={styles.partnerContentItem}>
          <Text style={Assets.styles.sectionSubTitle}>{t('partner.partner_info.extended_package')}</Text>
          <Text style={Assets.styles.intro}>{t('partner.partner_info.price')}: 160 000,- NOK ex VAT</Text>
          <Text style={Assets.styles.text}>{t('partner.partner_info.same_as_standard')}</Text>
        </BlurView>
      </View>

      <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 20}}/>

      {temporaryVideoFix()}
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
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
    flexGrow: 1
  },
});

export default Partner;
