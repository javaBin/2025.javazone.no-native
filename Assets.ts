// @ts-ignore
import JavaBinLogo from '@/assets/images/logo/javaBin-logo.png';
// @ts-ignore
import Doughnut from '@/assets/images/javaZone2022Doughnut.webp';
import TriangleRight from '@/assets/icons/triangle-right.svg';
import TriangleDown from '@/assets/icons/triangle-down.svg';
import Logo from '@/assets/images/logo/javaZone-logo.svg';
import { StyleSheet } from 'react-native';
import HeroDivider from '@/assets/images/hero/hero-divider.svg';
import HeroDuke from '@/assets/images/hero/hero-duke.svg';
import HeroJavaZone from '@/assets/images/hero/hero-javazone.svg';
import HeroYear from '@/assets/images/hero/hero-year.svg';

export const Assets = {
  fonts: {
    cinzelRegular: 'PlayfairDisplay_400Regular',
    cinzelBold: 'Cinzel-Bold',
  },
  links: {
    javaBinMail: 'mailto:javazone@java.no',
    javaZoneMail: 'mailto:javazone@java.no',
    programMail: 'mailto:program@java.no',
    partnerMail: 'mailto:partner@java.no',
    volunteerMail: 'mailto:student@java.no',
    javaBoardMail: 'mailto:styret@java.no',
  },
  images: {
    Logo,
    JavaBinLogo,
    Doughnut,
    hero: {
      divider: HeroDivider,
      duke: HeroDuke,
      javaZone: HeroJavaZone,
      year: HeroYear,
    },
  },
  icons: {
    TriangleRight,
    TriangleDown,
  },
  colors: {
    transparent: 'transparent',
    brand: {
      primary: '#181C14',
      secondary: '#3C3D37',
      tertiary: '#697565',
      neutral: '#676758',
      cream: '#ECDFCC',
      dutchWhite: '#EFDFBB',
      beige: '#D6BD98',
      charcoal: '#2D2D2D',
    },
    logo: {
      brightOrange: '#ED6F24',
      brightRed: '#CC2817',
      mediumRed: '#BA1818',
      mediumOrange: '#EA5B14',
      brightYellow: '#FCC139',
      mediumYellow: '#F9B235',
    },
    gradient: {
      dark: '#120707',
      medium: '#232526',
      light: '#414345',
      brown: '#1e1616',
    },
    jz2025ThemeColors: {
      crimsonRed: '#B10A32',
      darkBrown: '#403532',
      linen: '#F9F6F5',
      cyberYellow: '#FFD400',
      orangeYellow: '#FCAF17',
      vividOrange: '#F7941D',
    },
  },
  styles: StyleSheet.create({
    safeArea: {
      flex: 1,
      position: 'relative',
      marginHorizontal: 0,
      zIndex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: '#ECDFCC', // cream
    },
  }),
};
