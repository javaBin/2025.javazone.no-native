import { BulletListItem, ScreenTemplate } from '@/components';
import { SectionBox, SvgImage } from '@/UI';
import { Dimensions, Text, View } from 'react-native';
import { Assets } from '@/Assets';
import React from 'react';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

const Awezone = () => {
  const { t } = useTranslation();
  const isNotMobile = Dimensions.get('window').width > 450;
  // @ts-ignore
  return (
    <ScreenTemplate pageTitle={t('awezone.page_title')}>
      <SectionBox sectionTitle="">
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom:0 }}>
          {isNotMobile ? (
              <>
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
                <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
              </>
            )
            :
            (
            <>
              <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
              <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
              <SvgImage SVG={Assets.icons.Vine} height={80} style={{ flex: 1, width: undefined, margin: 0, padding: 0 }} />
            </>
          )}
        </View>
        <Text style={[Assets.styles.intro, { marginBottom: 16 }]}>
          {t('awezone.traditional_party')}
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          {t('awezone.we_will_stay')}
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          {t('awezone.bars_open_time')}
        </Text>

        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>{t('awezone.partner_bands')}</Text>
        <Text style={[Assets.styles.text, { marginBottom: 8 }]}>
          {t('awezone.concert_room_info')}
        </Text>
        <BulletListItem text={t('awezone.band_kanban')} />
        <BulletListItem text={t('awezone.band_endure')} />
        <BulletListItem text={t('awezone.band_carsten')} textStyle={{marginBottom: 30}}/>

        <SvgImage SVG={Assets.icons.CaesarDj} height={100} width={100} />
        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>{t('awezone.expo_dj')}</Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          DJ Sebastian Emes is playing in Expo from <Text style={{ fontWeight: 'bold' }}>{t('awezone.dj_time_bold')}</Text> – closing time.
          Feel free to ask for your favourite song.
        </Text>

        <SvgImage SVG={Assets.icons.Lyre} height={100} width={100} />
        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>{t('awezone.headliner_band')}</Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          This year's headliner band is <Text style={{ fontWeight: 'bold' }}>{t('awezone.ylvis_bold')}</Text>, known for "The Fox", "The
          Cabin" and many more. Join us for an epic show!
        </Text>
        <SvgImage SVG={Assets.icons.Caesar} height={100} width={100} />
        <Text style={[Assets.styles.sectionSubTitle, { marginTop: 24, marginBottom: 8 }]}>{t('awezone.caesars_palace')}</Text>
        <Text style={[Assets.styles.text, { marginBottom: 8 }]}>
          {t('awezone.casino_info')}
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 8 }]}>
          {t('awezone.donation_info')}
        </Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 20,
          flexWrap: 'wrap',
          marginVertical: 16
        }}>
          <Link
            href={"https://endometriose.no/hjelp-oss-a-hjelpe/"}
            target={"_blank"}
            style={{
            width: 'auto',
            marginBottom: 16,
          }}>
            <View style={{
              alignItems: 'center',
              padding: 8,
              backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
              borderRadius: 8
            }}>
              <SvgImage SVG={Assets.icons.endometrioseforeningen} height={60} width={60} />
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                marginTop: 8,
                fontWeight: '500',
                fontSize: 16
              }]}>
                Endometrioseforeningen
              </Text>
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                color: '#666',
                marginTop: 2,
                fontSize: 12
              }]}>
                {t('awezone.endometriosis_association')}
              </Text>
            </View>
          </Link>

          <Link
            href={"https://kreftforeningen.no/stott-kreftforeningen/"}
            target={"_blank"}
            style={{
              width: 'auto',
              marginBottom: 16,
            }}>
            <View style={{
              alignItems: 'center',
              padding: 8,
              backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
              borderRadius: 8
            }}>
              <SvgImage SVG={Assets.icons.kreftforeningen} height={60} width={60} />
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                marginTop: 8,
                fontWeight: '500',
                fontSize: 16
              }]}>
                Kreftforeningen
              </Text>
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                color: '#666',
                marginTop: 2,
                fontSize: 13
              }]}>
                {t('awezone.norwegian_cancer_society')}
              </Text>
            </View>
          </Link>

          <Link
            href={"https://legerutengrenser.no/stott-oss/vipps/"}
            target={"_blank"}
            style={{
            width: 'auto',
            marginBottom: 16,
          }}>
            <View style={{
              alignItems: 'center',
              padding: 8,
              backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
              borderRadius: 8
            }}>
              <SvgImage SVG={Assets.icons.legerutengrenser} height={60} width={60} />
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                marginTop: 8,
                fontWeight: '500',
                fontSize: 16
              }]}>
                Leger Uten Grenser
              </Text>
              <Text style={[Assets.styles.text, {
                textAlign: 'center',
                color: '#666',
                marginTop: 2,
                fontSize: 12
              }]}>
                {t('awezone.medecins_sans_frontieres')}
              </Text>
            </View>
          </Link>
        </View>

        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          {t('awezone.enjoy_activities')}
        </Text>
        <Text style={[Assets.styles.text, { marginBottom: 16 }]}>
          {t('awezone.food_info')}
        </Text>
      </SectionBox>
    </ScreenTemplate>
  );
};

export default Awezone;
