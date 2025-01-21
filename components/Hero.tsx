import { Assets } from '@/Assets';
import { SvgImage } from '@/components';
import { View } from 'react-native';

const Hero = () => {
  return (
    <View style={{ flexDirection: 'column', gap: 15 }}>
      <SvgImage SVG={Assets.images.hero.duke} height={200} />
      <SvgImage SVG={Assets.images.hero.javaZone} height={100} />
      <SvgImage SVG={Assets.images.hero.divider} height={20} style={{ marginTop: 5, marginBottom: 20 }} />
      <SvgImage SVG={Assets.images.hero.year} height={30} style={{ marginBottom: 60 }} />
    </View>
  );
};

export default Hero;
