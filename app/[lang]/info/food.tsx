import { ScreenTemplate } from '@/components';
import { SectionBox } from '@/UI';
import { Image } from 'react-native';
import React from 'react';

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
  require('@/assets/images/info/late-night-snack.jpg')
];

const FoodMenu = () => (
  <ScreenTemplate pageTitle="JavaZone Food">
    <SectionBox sectionTitle="Menu">
      {images.map((path, index) => (
        <Image
          key={index}
          source={path}
          style={{
            width: '100%',
            height: 700,
            marginBottom: 10,
            marginTop: index === 0 ? 10 : 0,
            maxWidth: 1000
          }}
          resizeMode="contain"
        />
      ))}
    </SectionBox>
  </ScreenTemplate>
);

export default FoodMenu;
