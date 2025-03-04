import { Assets } from '@/Assets';
import { SvgImage, SvgCallbackImage } from '@/UI';
import { Dimensions, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const isMobile = screenWidth <= 768;

const Hero = () => {
  return (
    <View style={{ flexDirection: 'column', gap: 15, marginTop: 50, paddingTop: 20 }}>
      <SvgCallbackImage SVG={Assets.images.hero.HeroDuke} height={isMobile ? 175 : 200} />
      <SvgImage SVG={Assets.images.hero.HeroJavaZone} height={isMobile ? 60 : 100} />
      <SvgImage SVG={Assets.UI.DividerWide} height={isMobile ? 15 : 20} style={{ marginTop: 5, marginBottom: 20 }} />
      <SvgImage SVG={Assets.images.hero.HeroYear} height={isMobile ? 40 : 50} style={{ marginBottom: 30 }} />
    </View>
  );
};

export default Hero;
