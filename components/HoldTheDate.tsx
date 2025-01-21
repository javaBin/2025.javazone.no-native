import { SvgImage, Hero } from '@/components/index';
import { Assets } from '@/Assets';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, useGlobalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

type HoldTheDateProps = {
  subPageHeader?: string;
};

const HoldTheDate = ({ subPageHeader }: HoldTheDateProps) => {
  const [pressedIndex, setPressedIndex] = useState<number | null>(null); // Track which button is pressed
  const { t } = useTranslation();
  const { lang } = useGlobalSearchParams();

  const years = [
    { label: '2024', link: 'https://2024.javazone.no/program' },
    { label: '2023', link: 'https://2023.javazone.no/#/program' },
    { label: '2022', link: 'https://2022.javazone.no/#/program' },
    { label: '2019', link: 'https://2019.javazone.no/program' },
    { label: '2018', link: 'https://2018.javazone.no/program' },
  ];

  return <View style={styles.content}></View>;
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
    color: Assets.colors.brand.charcoal,
  },
  subHeading: {
    fontSize: Platform.OS == 'web' ? 32 : 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: Assets.colors.brand.charcoal,
  },
  subPageHeading: {
    fontSize: Platform.OS == 'web' ? 28 : 26,
    fontWeight: '500',
    color: Assets.colors.brand.charcoal,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: 'auto',
  },
  title: {
    fontSize: Platform.OS == 'web' ? 20 : 18,
  },
  titleLeft: {
    alignSelf: 'flex-start',
    color: Assets.colors.brand.charcoal,
    fontWeight: '500',
    width: '50%',
  },
  titleRight: {
    alignSelf: 'flex-end',
    color: Assets.colors.brand.charcoal,
    marginLeft: Platform.OS == 'web' ? 5 : 1,
    width: '100%',
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
    //backgroundColor: Assets.colors.gradient.dark, // Normal state color
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
