import { Assets } from '@/Assets';
import { SvgImage } from '@/components';
import { View } from 'react-native';

const Hero = () => {
  return (
    <View style={{ flexDirection: 'column', gap: 15 }}>
      <SvgImage SVG={Assets.images.hero.duke} height={100} />
      <SvgImage SVG={Assets.images.hero.javaZone} height={80} />
      <SvgImage SVG={Assets.images.hero.divider} height={10} style={{ marginTop: -10 }} />
      <SvgImage SVG={Assets.images.hero.year} height={30} />
    </View>
  );
};

export default Hero;
