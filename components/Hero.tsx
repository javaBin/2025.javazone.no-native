import { Assets } from '@/Assets';
import { SvgImage } from '@/components';
import { Dimensions, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const isMobile = screenWidth < 768;

const Hero = () => {
  return (
    <View style={{ flexDirection: 'column', gap: 15 }}>
      <SvgImage SVG={Assets.images.hero.duke} height={200} />
      <SvgImage SVG={Assets.images.hero.javaZone} height={isMobile ? 60 : 100} />
      <SvgImage
        SVG={Assets.images.hero.divider}
        height={isMobile ? 15 : 20}
        style={{ marginTop: 5, marginBottom: 20 }}
      />
      <SvgImage SVG={Assets.images.hero.year} height={isMobile ? 40 : 50} style={{ marginBottom: 30 }} />
    </View>
  );
};

export default Hero;
