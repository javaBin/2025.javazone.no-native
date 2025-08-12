import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions, ScrollView } from 'react-native';
import { ScreenTemplate } from '@/components';
import { SectionBox } from '@/UI';
import { useTranslation } from 'react-i18next';
import { Assets } from '@/Assets';

// Import all hero images
const heroImages = {
  Alexander: require('@/assets/images/jzHeroes/Alexander - Runhild Heggem, javaBin-6.jpg'),
  'Alexander Amiri': require('@/assets/images/jzHeroes/Alexander Amiri - Runhild Heggem, javaBin-14.jpg'),
  Anders: require('@/assets/images/jzHeroes/Anders - Runhild Heggem, javaBin-8.jpg'),
  Beate: require('@/assets/images/jzHeroes/Beate - Runhild Heggem, javaBin-19.jpg'),
  Bjørn: require('@/assets/images/jzHeroes/Bjørn - Runhild Heggem, javaBin-9.jpg'),
  Børge: require('@/assets/images/jzHeroes/Børge - Runhild Heggem, javaBin-16.jpg'),
  Caroline: require('@/assets/images/jzHeroes/Caroline V - Runhild Heggem, javaBin-2.jpg'),
  Dennis: require('@/assets/images/jzHeroes/Dennis - Runhild Heggem, javaBin-30.jpg'),
  Dervis: require('@/assets/images/jzHeroes/Dervis - Runhild Heggem, javaBin-27.jpg'),
  Eirin: require('@/assets/images/jzHeroes/Eirin - Runhild Heggem, javaBin-29.jpg'),
  Ellaoui: require('@/assets/images/jzHeroes/Ellaoui - Runhild Heggem, javaBin-7.jpg'),
  Erlend: require('@/assets/images/jzHeroes/Erlend - Runhild Heggem, javaBin-11.jpg'),
  Ewa: require('@/assets/images/jzHeroes/Ewa - Runhild Heggem, javaBin-5.jpg'),
  Felix: require('@/assets/images/jzHeroes/Felix - Runhild Heggem, javaBin-4.jpg'),
  Håkon: require('@/assets/images/jzHeroes/Håkon - Runhild Heggem, javaBin-3.jpg'),
  'John Martin': require('@/assets/images/jzHeroes/John Martin - Runhild Heggem, javaBin-15.jpg'),
  Kjetil: require('@/assets/images/jzHeroes/Kjetil - Runhild Heggem, javaBin-10.jpg'),
  Kristian: require('@/assets/images/jzHeroes/Kristian - Runhild Heggem, javaBin-18.jpg'),
  Mai: require('@/assets/images/jzHeroes/Mai - Runhild Heggem, javaBin-25.jpg'),
  Marek: require('@/assets/images/jzHeroes/Marek - Runhild Heggem, javaBin-12.jpg'),
  Ole: require('@/assets/images/jzHeroes/Ole - Runhild Heggem, javaBin-13.jpg'),
  Rune: require('@/assets/images/jzHeroes/Rune - Runhild Heggem, javaBin-21.jpg'),
  Runhild: require('@/assets/images/jzHeroes/Runhild Heggem, javaBin-20.jpg'),
  Soumitra: require('@/assets/images/jzHeroes/Soumitra - Runhild Heggem, javaBin-28.jpg'),
  Sverre: require('@/assets/images/jzHeroes/Sverre - Runhild Heggem, javaBin-17.jpg'),
  Tuan: require('@/assets/images/jzHeroes/Tuan - Runhild Heggem, javaBin-23.jpg'),
  Vytautas: require('@/assets/images/jzHeroes/Vytautas - Runhild Heggem, javaBin-22.jpg'),
  Wasana: require('@/assets/images/jzHeroes/Wasana - Runhild Heggem, javaBin-24.jpg'),
  Øyvind: require('@/assets/images/jzHeroes/Øyvind - Runhild Heggem, javaBin-26.jpg'),
};

const Heroes = () => {
  const { t } = useTranslation();
  const screenWidth = Dimensions.get('window').width;

  // Set a maximum width for the grid container to prevent images from getting too large
  const maxContainerWidth = 600;
  const containerWidth = Math.min(screenWidth - 40, maxContainerWidth);

  // Calculate item width: 3 items per row with gaps handled by flexbox
  const gap = 15;
  const itemWidth = (containerWidth - gap * 2) / 3;

  return (
    <ScreenTemplate pageTitle={t('pageTitles.heroes')} shouldScrollToTop={true}>
      <SectionBox sectionTitle={t('heroes.title')}>
        <Text style={[Assets.styles.text, { marginBottom: 20 }]}>{t('heroes.description')}</Text>

        <View style={[styles.gridContainer, { maxWidth: maxContainerWidth, alignSelf: 'center', gap: gap }]}>
          {Object.entries(heroImages).map(([name, imageSource]) => (
            <View key={name} style={[styles.heroCard, { width: itemWidth }]}>
              <Image
                source={imageSource}
                style={[styles.heroImage, { width: itemWidth, height: itemWidth }]}
                resizeMode="cover"
              />
              <Text style={styles.heroName}>{name}</Text>
            </View>
          ))}
        </View>
      </SectionBox>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    width: '100%',
  },
  heroCard: {
    alignItems: 'center',
  },
  heroImage: {
    borderRadius: 8,
    marginBottom: 8,
  },
  heroName: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'Cinzel_600SemiBold',
  },
});

export default Heroes;
