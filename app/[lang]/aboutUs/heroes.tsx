import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions, FlatList, Platform } from 'react-native';
import { ScreenTemplate } from '@/components';
import { PageTitle, SectionBox, SvgImage } from '@/UI';
import { useTranslation } from 'react-i18next';
import { Assets } from '@/Assets';
import { useMediaQuery } from 'react-responsive';

// Import all hero images
const heroImages = {
  'Alexander S.': require('@/assets/images/jzHeroes/Alexander - Runhild Heggem, javaBin-6.jpg'),
  'Alexander A.': require('@/assets/images/jzHeroes/Alexander Amiri - Runhild Heggem, javaBin-14.jpg'),
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
  Henrik: require('@/assets/images/jzHeroes/Henrik - Runhild Heggem, javaBin-32.jpg'),
  Håkon: require('@/assets/images/jzHeroes/Håkon - Runhild Heggem, javaBin-3.jpg'),
  'Jan Erik': require('@/assets/images/jzHeroes/Jan Erik - Runhild Heggem, javaBin-33.jpg'),
  'John Martin': require('@/assets/images/jzHeroes/John Martin - Runhild Heggem, javaBin-15.jpg'),
  Jørn: require('@/assets/images/jzHeroes/Jørn - Runhild Heggem, javaBin-31.jpg'),
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
  const isMobile = useMediaQuery({ maxWidth: 768 });


  // Set a maximum width for the grid container to prevent images from getting too large
  const maxContainerWidth = 600;
  const containerWidth = Math.min(screenWidth - 40, maxContainerWidth);

  // Calculate item width: 3 items per row with gaps handled by flexbox
  const gap = 15;
  const itemWidth = (containerWidth - gap * 2) / 3;

  // Convert hero images to FlatList data
  const heroData = Object.entries(heroImages).map(([name, imageSource]) => ({
    id: name,
    name,
    imageSource,
  }));

  const renderHeaderItem = () => {
    return (
        <>
          <Text style={Assets.styles.text}>{t('heroes.description')}</Text>
          <Text style={[styles.creditsText, { marginBottom: 20 }]}>Photography by Runhild Heggem / javaBin</Text>
        </>
    )
  };

  const renderHeroItem = ({ item }: { item: typeof heroData[0] }) => (
    <View style={[styles.heroCard, { width: itemWidth }]}>
      <Image
        source={item.imageSource}
        style={[styles.heroImage, { width: itemWidth, height: itemWidth }]}
        resizeMode="cover"
      />
      <Text style={styles.heroName}>{item.name}</Text>
    </View>
  );

  const isNotWeb = Platform.OS !== 'web';

  return (
    <ScreenTemplate pageTitle={t("pageTitles.heroes")} shouldScrollToTop={true} flatListPage={isNotWeb}>
      <SectionBox sectionTitle={t('heroes.title')}>
        <View style={[styles.flatListContainer, { maxWidth: maxContainerWidth, alignSelf: 'center', marginTop: 20 }]}>
          <FlatList
            data={heroData}
            renderItem={renderHeroItem}
            ListHeaderComponent={renderHeaderItem}
            keyExtractor={(item) => item.id}
            numColumns={isMobile ? 2 : 3 && isNotWeb ? 2 : 3}
            contentContainerStyle={styles.gridContainer}
            columnWrapperStyle={styles.row}
            removeClippedSubviews={true}
            maxToRenderPerBatch={9}
            initialNumToRender={12}
            windowSize={5}
            getItemLayout={(data, index) => ({
              length: itemWidth + 8 + 16, // image height + text height + margins
              offset: (itemWidth + 8 + 16) * Math.floor(index / 3),
              index,
            })}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SectionBox>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    height: Platform.OS != 'web' ? '77%' : 'auto',
    width: '100%',
  },
  gridContainer: {
    paddingHorizontal: 0,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
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
  creditsText: {
    color: '#403532', // dark-brown
    marginVertical: 10,
    fontSize: Dimensions.get('window').width > 768 ? 18 : 16,
    fontFamily: 'Cinzel_400Regular',
    textAlign: 'left',
    width: '100%',
  }
});

export default Heroes;
