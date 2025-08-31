import { ScreenTemplate } from '@/components';
import { SectionBox } from '@/UI';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Assets } from '@/Assets';

const images = [
  require('@/assets/images/info/breakfast.jpg'),
  require('@/assets/images/info/menu-americas.jpg'),
  require('@/assets/images/info/menu-galia.jpg'),
  require('@/assets/images/info/menu-germania.jpg'),
  require('@/assets/images/info/menu-hispania.jpg'),
  require('@/assets/images/info/menu-roma.jpg'),
  require('@/assets/images/info/menu-super-bowl.jpg'),
  require('@/assets/images/info/menu_thai.jpg'),
  require('@/assets/images/info/menu-guilty-pleasures.jpg'),
  require('@/assets/images/info/late-night-snack.jpg'),
];

const FoodMenu = () => {
  const [filter, setFilter] = useState<'all' | 'breakfast' | 'restaurants' | 'snacks'>('all');

  const showBreakfast = () => filter === 'all' || filter === 'breakfast';
  const showRestaurants = () => filter === 'all' || filter === 'restaurants';
  const showSnacks = () => filter === 'all' || filter === 'snacks';

  return (
    <ScreenTemplate pageTitle="JavaZone Food">
      <SectionBox sectionTitle="Menu">
        <View style={foodMenuStyles.filterFlex}>
          <Pressable
            style={[foodMenuStyles.filterButton, filter === 'breakfast' && foodMenuStyles.filterButtonSelected]}
            onPress={() => setFilter(filter === 'breakfast' ? 'all' : 'breakfast')}
          >
            <Text style={foodMenuStyles.buttonText}>Breakfast</Text>
          </Pressable>
          <Pressable
            style={[foodMenuStyles.filterButton, filter === 'restaurants' && foodMenuStyles.filterButtonSelected]}
            onPress={() => setFilter(filter === 'restaurants' ? 'all' : 'restaurants')}
          >
            <Text style={foodMenuStyles.buttonText}>Restaurants</Text>
          </Pressable>
          <Pressable
            style={[foodMenuStyles.filterButton, filter === 'snacks' && foodMenuStyles.filterButtonSelected]}
            onPress={() => setFilter(filter === 'snacks' ? 'all' : 'snacks')}
          >
            <Text style={foodMenuStyles.buttonText}>Late Night Snack</Text>
          </Pressable>
        </View>
        {showBreakfast() && (
          <View>
            <Text style={Assets.styles.sectionSubTitle}>Breakfast</Text>
            <Text style={[Assets.styles.text,{alignSelf:'center'}]}>Served (feks) 12:00 - 16:00</Text>
            <Image
              key={0}
              source={images[0]}
              style={{
                width: '100%',
                height: 800,
                marginBottom: 10,
                marginTop: 10,
                maxWidth: 1000,
              }}
              resizeMode="contain"
            />
          </View>
        )}
        {showRestaurants() && (
          <View>
            <Text style={Assets.styles.sectionSubTitle}>Restaurants</Text>
            <Text style={[Assets.styles.text,{alignSelf:'center'}]}>Served (feks) 12:00 - 16:00</Text>
            {images.slice(1, -1).map((src, index) => (
              <Image
                key={index + 1}
                source={src}
                style={{
                  width: '100%',
                  height: 800,
                  marginBottom: 10,
                  marginTop: 10,
                  maxWidth: 1000,
                }}
                resizeMode="contain"
              />
            ))}
          </View>
        )}
        {showSnacks() && (
          <View>
            <Text style={Assets.styles.sectionSubTitle}>Snacks</Text>
            <Text style={[Assets.styles.text,{alignSelf:'center'}]}>Served (feks) 12:00 - 16:00</Text>
            <Image
              key={images.length - 1}
              source={images[images.length - 1]}
              style={{
                width: '100%',
                height: 800,
                marginBottom: 10,
                marginTop: 0,
                maxWidth: 1000,
              }}
              resizeMode="contain"
            />
          </View>
        )}
      </SectionBox>
    </ScreenTemplate>
  );
};

const foodMenuStyles = StyleSheet.create({
  filterFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
    margin: 20,
  },
  filterButton: {
    padding: 10,
    fontFamily: 'PlayfairDisplay_400Regular',
    textAlign: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 4,
    backgroundColor: Assets.colors.jz2025ThemeColors.gradientRed,
    maxWidth: '100%',
  },
  filterButtonSelected: {
    backgroundColor: Assets.colors.jz2025ThemeColors.lightBrown,
  },
  clearFilterButton: {
    backgroundColor: Assets.colors.jz2025ThemeColors.gradientRed,
    borderColor: Assets.colors.jz2025ThemeColors.gradientRed,
    borderWidth: 0.5,
    borderRadius: 4,
    maxWidth: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    fontFamily: 'Cinzel_500Medium',
    fontSize: 16,
    color: Assets.colors.jz2025ThemeColors.sheet,
    textAlign: 'center',
  },
});

export default FoodMenu;
