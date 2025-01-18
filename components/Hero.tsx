import { Assets } from '@/Assets';
import { SvgImage } from '@/components';

const Hero = () => {
  return (
    <div className="hero">
      <SvgImage SVG={Assets.images.hero.duke} height={20} />
      <SvgImage SVG={Assets.images.hero.javaZone} height={20} />
      <SvgImage SVG={Assets.images.hero.divider} height={20} />
      <SvgImage SVG={Assets.images.hero.year} height={20} />
    </div>
  );
};

export default Hero;
