import React from 'react';
import { SvgImage, PageTitle } from '@/UI';
import { Assets } from '@/Assets';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

type HoldTheDateProps = {
  subPageHeader?: string;
};

const HoldTheDate = ({ subPageHeader }: HoldTheDateProps) => {
  const { t } = useTranslation();

  const years = [
    // todo: use t, not array
    { label: '2024', link: Assets.links.program24 },
    { label: '2023', link: Assets.links.program23 },
    { label: '2022', link: Assets.links.program22 },
    { label: '2019', link: Assets.links.program19 },
    { label: '2018', link: Assets.links.program18 },
  ];

  return (
    <View style={styles.content}>
      <SvgImage SVG={Assets.images.hero.HeroDuke} height={150} />

      <PageTitle title={t('javaZone_2025')} />
      {subPageHeader && <Text style={styles.subPageHeading}>{subPageHeader}</Text>}
      <Text style={styles.subHeading}>{t('in_progress')}</Text>

      <View style={[styles.titleContainer, { marginTop: 20 }]}>
        <Text style={[styles.title, styles.titleLeft]}>{t('conference_title')}</Text>
        <Text style={[styles.title, styles.titleRight]}>{t('conference_date')}</Text>
      </View>

      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.titleLeft]}>{t('location_title')}</Text>
        <Text style={[styles.title, styles.titleRight]}>{t('location')}</Text>
      </View>

      <View style={styles.listContainer}>
        {years.map((year, index) => (
          <Link
            key={index}
            href={year.link}
            rel="noopener norefferer"
            style={{
              color: Assets.colors.jz2025ThemeColors.vividOrange,
              fontFamily: 'Cinzel_400Regular',
              fontSize: Dimensions.get('window').width >= 768 ? 20 : 16,
              textDecorationLine: 'underline',
              marginHorizontal: 5,
            }}
          >
            {year.label}
          </Link>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 'auto'
  },
  heading: {
    fontSize: Dimensions.get('window').width > 768 ? 38 : 36,
    fontWeight: 'bold',
    color: Assets.colors.brand.charcoal,
    fontFamily: 'Cinzel_400Regular',
  },
  subHeading: {
    fontSize: Dimensions.get('window').width > 768 ? 32 : 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Assets.colors.jz2025ThemeColors.darkBrown,
    fontFamily: 'Cinzel_700Bold',
    textAlign: 'center'
  },
  subPageHeading: {
    fontSize: Dimensions.get('window').width > 768 ? 28 : 26,
    fontWeight: '500',
    color: Assets.colors.brand.charcoal,
    fontFamily: 'Cinzel_600SemiBold',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width > 768 ? 400 : 380,
  },
  title: {
    fontSize: Dimensions.get('window').width > 768 ? 20 : 18,
    textAlign: 'left',
  },
  titleLeft: {
    alignSelf: 'flex-start',
    color: Assets.colors.brand.charcoal,
    fontWeight: '500',
    marginLeft: Dimensions.get('window').width > 768 ? 0 : 15,
    fontFamily: 'PlayfairDisplay_700Bold',
    width: '30%',
  },
  titleRight: {
    alignSelf: 'flex-end',
    color: Assets.colors.brand.charcoal,
    marginLeft: Dimensions.get('window').width > 768 ? 10 : 5,
    fontFamily: 'PlayfairDisplay_400Regular',
    width: '70%',
  },
  callout: {
    color: Assets.colors.logo.brightYellow,
    marginTop: 15,
    marginBottom: 5,
    fontStyle: 'italic',
    fontSize: 18,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
    marginTop: 5,
  },
  listItem: {
    padding: 5,
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
  pressed: {
    backgroundColor: Assets.colors.gradient.brown, // Hover state color (when pressed)
  },
  text: {
    color: Assets.colors.brand.neutral,
    fontSize: Platform.OS == 'web' ? 18 : 16,
  },
});

export default HoldTheDate;
