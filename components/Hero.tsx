import { Assets } from '@/Assets';
import {SvgImage, SvgCallbackImage, DukeSVG} from '@/UI';
import {Dimensions, Platform, View} from 'react-native';
import React from "react";
import {PapyrusRollSVG} from "@/UI/PapyrusRollSVG";

const { width: screenWidth } = Dimensions.get('window');
const isMobile = screenWidth <= 768;

const Hero = () => {
  return (
    <View style={{...Assets.styles.container, ...{ flexDirection: 'column', gap: 15, marginTop: 50, paddingTop: 20 }}}>
      <DukeSVG height={161} width={158} />
      <SvgImage SVG={Assets.images.hero.HeroJavaZone} height={119/2} width={627/2} />
      <SvgImage SVG={Assets.UI.DividerWide} height={11 * 1.2} width={129 * 1.2} style={{ marginTop: 5, marginBottom: 20 }} />
      <SvgImage SVG={Assets.images.hero.HeroYear} height={46 * 0.8} width={306 * 0.8} style={{ marginBottom: 30 }} />
    </View>
  );
};

export default Hero;
      //<SvgImage SVG={Assets.images.hero.HeroDuke} height={161} width={158} />
