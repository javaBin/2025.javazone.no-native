import { BulletListItem, ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { SectionBox, SvgImage } from '@/UI';
import { Platform, Text, View } from 'react-native';
import { Assets } from '@/Assets';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LinkButton from '@/UI/LinkButton';

const workshops = [
  {
    title: 'kids.workshop_bitbot_title',
    room: 'kids.workshop_bitbot_room',
    instructors: ['kids.workshop_bitbot_instructor_one', 'kids.workshop_bitbot_instructor_three'],
    checkInLink: 'kids.workshop_bitbot_check_in_link',
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
    checkInLink: 'kids.workshop_mBot_check_in_link',
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
    checkInLink: 'kids.workshop_3Dprinting_check_in_link',
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
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
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

        <Text style={Assets.styles.sectionTitle}>{t('kids.welcome')}</Text>
      </SectionBox>
      <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{ margin: 10 }} />

      <View
        style={{
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 20,
          marginTop: 20,
        }}
      >
        {workshops.map((workshop, index) => (
          <View
            key={index}
            // @ts-ignore
            style={{
              width: isMobile ? '87%' : '52vh',
              position: 'relative',
              alignItems: 'center',
              minHeight: 500,
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
              titleStyle={{ width: '77%', marginHorizontal: 'auto' }}
              style={{
                minHeight: isMobile && index === 2 ? 1200 : 1400,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <View style={{ flex: 1, flexDirection: 'column', gap: 34, marginBottom: 90 }}>
                <Text style={[Assets.styles.text, { marginHorizontal: 'auto', marginVertical: 2 }]}>
                  {t(`${workshop.room}`)}
                </Text>
                <View style={{ height: 120, justifyContent: 'flex-start' }}>
                  <Text style={[Assets.styles.sectionSubTitle]}>{t('kids.instructors')}</Text>
                  {workshop.instructors.map((instructor, i) => (
                    <Text key={i} style={[Assets.styles.text, { textAlign: 'center', marginVertical: 2 }]}>
                      {t(instructor)}
                    </Text>
                  ))}
                </View>

                <View style={{ gap: 16 }}>
                  <Text style={[Assets.styles.sectionSubTitle]}>{t('kids.about_workshop')}</Text>
                  {workshop.description.map((paragraph, i) => (
                    <Text key={i} style={[Assets.styles.text]}>
                      {t(paragraph)}
                    </Text>
                  ))}
                </View>

                <Text style={[Assets.styles.sectionSubTitle, { marginTop: 'auto' }]}>{t('kids.practical_info')}</Text>
                <View style={{ marginHorizontal: 'auto' }}>
                  {workshop.info.map((item, i) => (
                    <BulletListItem key={i} text={t(`${item}`)} />
                  ))}
                </View>

                <View style={{ marginHorizontal: 'auto' }}>
                  <Text style={[Assets.styles.sectionSubTitle]}>{t('kids.equipment')}</Text>
                  {workshop.equipment.map((item, i) => (
                    <BulletListItem key={i} text={t(`${item}`)} />
                  ))}
                </View>
              </View>

              <LinkButton
                disabled={true}
                href={t(workshop.checkInLink)}
                title={'Påmelding åpner 30. juni kl. 12.00'}
                targetBlank={false}
                margin={isMobile ? 10 : 20}
                androidBlurPatch={Platform.OS === 'android'}
              />
            </SectionBox>
          </View>
        ))}
      </View>
    </ScreenTemplate>
  );
};

export default SpeakerKids;
