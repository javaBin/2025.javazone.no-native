import { BulletListItem, ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { SectionBox, SvgImage } from '@/UI';
import { Platform, Text, View, ScrollView } from 'react-native';
import { Assets } from '@/Assets';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LinkButton from '@/UI/LinkButton';
import { Dimensions } from 'react-native';

const eventCheckInLink = 'https://event.checkin.no/132451/javazone-kids-2025';
const workshops = [
  {
    title: 'kids.workshop_bitbot_title',
    room: 'kids.workshop_bitbot_room',
    instructors: ['kids.workshop_bitbot_instructor_one', 'kids.workshop_bitbot_instructor_three'],
    checkInLink: eventCheckInLink,
    description: ['kids.workshop_bitbot_description_one', 'kids.workshop_bitbot_description_two'],
    info: ['kids.workshop_bitbot_info_one', 'kids.workshop_bitbot_info_two', 'kids.workshop_bitbot_info_three'],
    equipment: [
      'kids.workshop_bitbot_equipment_one',
      'kids.workshop_bitbot_equipment_two',
      'kids.workshop_bitbot_equipment_three',
    ],
  },
  {
    title: 'kids.workshop_mBot_title',
    room: 'kids.workshop_mBot_room',
    instructors: ['kids.workshop_mBot_instructor_one', 'kids.workshop_mBot_instructor_two'],
    checkInLink: eventCheckInLink,
    description: [
      'kids.workshop_mBot_description_one',
      'kids.workshop_mBot_description_two',
      'kids.workshop_mBot_description_three',
    ],
    info: ['kids.workshop_mBot_info_one', 'kids.workshop_mBot_info_two', 'kids.workshop_mBot_info_three'],
    equipment: ['kids.workshop_mBot_equipment_one'],
  },
  {
    title: 'kids.workshop_3Dprinting_title',
    room: 'kids.workshop_3Dprinting_room',
    instructors: ['kids.workshop_3Dprinting_instructor_one'],
    checkInLink: eventCheckInLink,
    description: ['kids.workshop_3Dprinting_description_one', 'kids.workshop_3Dprinting_description_two'],
    info: [
      'kids.workshop_3Dprinting_info_one',
      'kids.workshop_3Dprinting_info_two',
      'kids.workshop_3Dprinting_info_three',
    ],
    equipment: ['kids.workshop_3Dprinting_equipment_one'],
  },
];

const SpeakerKids = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const screenWidth = Dimensions.get('window').width;
  const totalSpacer = isMobile ? 40 : 180;
  const cardWidth = isMobile || Platform.OS != 'web'
    ? Math.round(screenWidth * 0.9)
    : Math.round((screenWidth - totalSpacer - 150) / 3);

  return (
    <ScreenTemplate pageTitle={t('kids.title')}>
      <Text style={[Assets.styles.sectionSubTitle, { marginTop: -10, fontWeight: '500' }]}>{t('kids.top_text')}</Text>
      <SectionBox sectionTitle={''}>
        <View style={{ marginHorizontal: 'auto', width: '80%' }}>
          <Text style={[Assets.styles.text]}>{t('kids.intro_one')}</Text>
          <Text style={[Assets.styles.text, { textAlign: 'center' }]}>{t('kids.intro_two')}</Text>
        </View>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10, marginTop: 20 }} />

        <View style={{ marginHorizontal: 'auto' }}>
          <Text style={Assets.styles.sectionSubTitle}>{t('kids.time_and_place')}</Text>
          <BulletListItem text={t('kids.time_and_place_one')} />
          <BulletListItem text={t('kids.time_and_place_two')} />
          <BulletListItem text={t('kids.time_and_place_three')} />
        </View>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

        <Text style={Assets.styles.sectionSubTitle}>{t('kids.sign_up')}</Text>
        <Text style={Assets.styles.text}>{t('kids.sign_up_description_one')}</Text>
        <Text style={Assets.styles.text}>{t('kids.sign_up_description_two')}</Text>

        <Text style={Assets.styles.sectionSubTitle}>{t('kids.equipment')}</Text>
        <Text style={Assets.styles.text}>{t('kids.equipment_info')}</Text>

        <Text style={Assets.styles.sectionSubTitle}>{t('kids.three_workshops')}</Text>
        <Text style={Assets.styles.text}>{t('kids.workshops_info')}</Text>
        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />
        <Text style={[Assets.styles.sectionTitle, {color: Assets.colors.jz2025ThemeColors.crimsonRed}]}>{t('kids.welcome')}</Text>
      </SectionBox>
      <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <View
          style={{
            flexDirection: isMobile || Platform.OS != 'web' ? 'column' : 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: isMobile || Platform.OS != 'web' ? 'center' : 'flex-start',
            gap: 20,
            marginTop: 20,
            ...(Platform.OS != 'web' && {
              paddingHorizontal: 20,
            }),
          }}
        >
          {workshops.map((workshop, index) => (
            <View
              key={index}
              style={{
                width: cardWidth,
                maxWidth: Platform.OS != 'web' ? screenWidth - 60 : cardWidth,
                position: 'relative',
                alignItems: 'center',
                height: 650,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  position: 'absolute',
                  top: 15,
                  left: 15,
                  fontSize: 50,
                  fontWeight: 'bold',
                  color: Assets.colors.jz2025ThemeColors.vividOrange,
                  zIndex: 1,
                }}
              >
                {index + 1}
              </Text>

              <SectionBox
                sectionTitle={t(`${workshop.title}`)}
                titleStyle={{
                  width: '77%',
                  marginHorizontal: 'auto',
                  fontSize: isMobile ? 18 : 22
                }}
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                <ScrollView
                  contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                  showsVerticalScrollIndicator={true}
                  indicatorStyle="default"
                  style={{
                    flex: 1,
                    ...(Platform.OS === 'web' && {
                      scrollbarColor: `${Assets.colors.jz2025ThemeColors.crimsonRed} transparent`,
                      scrollbarWidth: 'thin',
                    }),
                  }}
                  {...(Platform.OS === 'ios' && {
                    scrollIndicatorInsets: { right: 1 },
                  })}
                >
                  <View style={{ flexDirection: 'column', gap: 15, paddingRight: 20 }}>
                    <Text style={[Assets.styles.text, { marginHorizontal: 'auto', marginVertical: 2 }]}>
                      {t(`${workshop.room}`)}
                    </Text>

                    <View>
                      <Text style={[Assets.styles.sectionSubTitle, { fontSize: 16 }]}>{t('kids.instructors')}</Text>
                      {workshop.instructors.map((instructor, i) => (
                        <Text key={i} style={[Assets.styles.text, { textAlign: 'center', marginVertical: 1, fontSize: 14 }]}>
                          {t(instructor)}
                        </Text>
                      ))}
                    </View>

                    <View>
                      <Text style={[Assets.styles.sectionSubTitle, { fontSize: 16 }]}>{t('kids.about_workshop')}</Text>
                      {workshop.description.map((paragraph, i) => (
                        <Text key={i} style={[Assets.styles.text, { fontSize: 14, lineHeight: 18 }]}>
                          {t(paragraph)}
                        </Text>
                      ))}
                    </View>

                    <View>
                      <Text style={[Assets.styles.sectionSubTitle, { fontSize: 16 }]}>{t('kids.practical_info')}</Text>
                      <View style={{ marginHorizontal: 'auto' }}>
                        {workshop.info.map((item, i) => (
                          <BulletListItem key={i} text={t(`${item}`)} textStyle={{ fontSize: 14 }} />
                        ))}
                      </View>
                    </View>

                    <View>
                      <Text style={[Assets.styles.sectionSubTitle, { fontSize: 16 }]}>{t('kids.equipment')}</Text>
                      <View style={{ marginHorizontal: 'auto' }}>
                        {workshop.equipment.map((item, i) => (
                          <BulletListItem key={i} text={t(`${item}`)} textStyle={{ fontSize: 14 }} />
                        ))}
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </SectionBox>
            </View>
          ))}
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <LinkButton
          disabled={false}
          href={eventCheckInLink}
          title={t('kids.registration_button')}
          targetBlank={false}
          margin={isMobile ? 10 : 20}
          androidBlurPatch={Platform.OS === 'android'}
        />
      </View>
    </ScreenTemplate>
  );
};

export default SpeakerKids;
