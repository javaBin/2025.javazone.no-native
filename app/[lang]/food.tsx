import { ScreenTemplate } from '@/components';
import { SectionBox } from '@/UI';
import { Image, Pressable, StyleSheet, Text, View, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
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

const restaurantAnchors = [
  'Webstep',      // menu-americas.jpg
  'Bouvet',       // menu-galia.jpg
  'System',       // menu-germania.jpg
  'Kodemaker',    // menu-hispania.jpg
  'Bekk',         // menu-roma.jpg
  'Knowit',       // menu-super-bowl.jpg
  'Capgemini',    // menu_thai.jpg
];

const FoodMenu = () => {
  const [filter, setFilter] = useState<'all' | 'breakfast' | 'restaurants' | 'snacks'>('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Check if there's a hash in the URL on component mount
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash) {
      const anchorIndex = restaurantAnchors.indexOf(hash);
      if (anchorIndex !== -1) {
        // Found the restaurant, open its modal
        const restaurantImageIndex = anchorIndex + 1; // +1 because restaurants start at index 1 in images array
        setSelectedImage(images[restaurantImageIndex]);
        setModalVisible(true);
        setFilter('restaurants'); // Show restaurants section
      }
    }
  }, []);

  const showBreakfast = () => filter === 'all' || filter === 'breakfast';
  const showRestaurants = () => filter === 'all' || filter === 'restaurants';
  const showSnacks = () => filter === 'all' || filter === 'snacks';

  const openImageModal = (imageSource: any) => {
    setSelectedImage(imageSource);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

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
          <View style={{marginBottom: 20}}>
            <Text style={[Assets.styles.sectionTitle, {fontSize: 22}]}>Breakfast</Text>
            <Pressable
              onPress={() => openImageModal(images[0])}
            >
            <Image
              key={0}
              source={images[0]}
              style={{
                width: '100%',
                height: 500,
                marginBottom: 10,
                marginTop: 10,
                maxWidth: 1000,
              }}
              resizeMode="contain"
            />
            </Pressable>
          </View>
        )}
        {showRestaurants() && (
          <View style={{marginBottom: 20}}>
            <Text style={[Assets.styles.sectionTitle, {fontSize: 22}]}>Restaurants</Text>
            <View style={foodMenuStyles.gridContainer}>
              {images.slice(1, -1).map((src, index) => (
                <View key={index + 1} style={foodMenuStyles.gridItem}>
                  <View nativeID={restaurantAnchors[index]} />
                  <Pressable
                    onPress={() => openImageModal(src)}
                  >
                    <Image
                      source={src}
                      style={foodMenuStyles.gridImage}
                      resizeMode="contain"
                    />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        )}
        {showSnacks() && (
          <View>
            <Text style={[Assets.styles.sectionTitle, {fontSize: 22}]}>Snacks</Text>
            <Pressable
              onPress={() => openImageModal(images[images.length - 1])}
            >
            <Image
              key={images.length - 1}
              source={images[images.length - 1]}
              style={{
                width: '100%',
                height: 500,
                marginBottom: 10,
                marginTop: 10,
                maxWidth: 1000,
              }}
              resizeMode="contain"
            />
            </Pressable>
          </View>
        )}
      </SectionBox>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeImageModal}
      >
        <Pressable style={foodMenuStyles.modalOverlay} onPress={closeImageModal}>
          <View style={foodMenuStyles.modalContainer}>
            {selectedImage && (
              <Image
                source={selectedImage}
                style={foodMenuStyles.modalImage}
                resizeMode="contain"
              />
            )}
          </View>
        </Pressable>
      </Modal>
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  gridItem: {
    width: '32%',
    marginBottom: 10,
  },
  gridImage: {
    width: '100%',
    height: 200,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
});

export default FoodMenu;
