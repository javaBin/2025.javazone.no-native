import { SvgImage } from '@/components/index';
import { Assets } from '@/Assets';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

type HoldTheDateProps = {
  subPageHeader?: string;
};

const HoldTheDate = ({ subPageHeader }: HoldTheDateProps) => {
  const [pressedIndex, setPressedIndex] = useState<number | null>(null); // Track which button is pressed
  const { t } = useTranslation();

  const years = [
    { label: '2024', link: 'https://2024.javazone.no/program' },
    { label: '2023', link: 'https://2023.javazone.no/#/program' },
    { label: '2022', link: 'https://2022.javazone.no/#/program' },
    { label: '2019', link: 'https://2019.javazone.no/program' },
    { label: '2018', link: 'https://2018.javazone.no/program' },
  ];

  return (
    <View style={styles.content}>
      <SvgImage SVG={Assets.images.Logo} height={50} style={{ marginBottom: 20 }} />

      <Text style={styles.heading}>{t('javaZone_2025')}</Text>
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

      <Text style={styles.callout}>{t('hold_the_date')}</Text>

      <View style={styles.listContainer}>
        {years.map((year, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.listItem, pressedIndex === index && styles.pressed]} // Highlight only the pressed button
            onPressIn={() => setPressedIndex(index)} // Set the pressed index
            onPressOut={() => setPressedIndex(null)} // Reset when the press is released
          >
            <Link style={styles.text} href={year.link}>
              {year.label}
            </Link>
          </TouchableOpacity>
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
  },
  heading: {
    fontSize: Platform.OS == 'web' ? 38 : 36,
    fontWeight: 'bold',
    color: Assets.colors.brand.cream,
  },
  subHeading: {
    fontSize: Platform.OS == 'web' ? 32 : 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Assets.colors.logo.brightOrange,
  },
  subPageHeading: {
    fontSize: Platform.OS == 'web' ? 28 : 68,
    fontWeight: '500',
    color: Assets.colors.brand.beige,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 330,
  },
  title: {
    fontSize: Platform.OS == 'web' ? 20 : 18,
  },
  titleLeft: {
    alignSelf: 'flex-start',
    color: Assets.colors.brand.beige,
    fontWeight: '500',
    width: '50%',
  },
  titleRight: {
    alignSelf: 'flex-end',
    color: Assets.colors.brand.dutchWhite,
    marginLeft: Platform.OS == 'web' ? 5 : 1,
    width: '60%',
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
  },
  listItem: {
    padding: 5,
    backgroundColor: 'white', // Normal state color
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
    backgroundColor: 'darkwhite', // Hover state color (when pressed)
  },
  text: {
    color: Assets.colors.brand.neutral,
    fontSize: 18,
  },
});

export default HoldTheDate;
