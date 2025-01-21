import { Assets } from '@/Assets';
import { SvgImage } from '@/components';
import { View } from 'react-native';

const Hero = () => {
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <SvgImage SVG={Assets.images.hero.duke} height={20} />
      <SvgImage SVG={Assets.images.hero.javaZone} height={20} />
      <SvgImage SVG={Assets.images.hero.divider} height={20} />
      <SvgImage SVG={Assets.images.hero.year} height={20} />
    </View>
  );
};

export default Hero;
