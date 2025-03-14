import { StyleSheet, Dimensions } from 'react-native';
// @ts-ignore
import Doughnut from '@/assets/images/javaZone2022Doughnut.webp';

// @ts-ignore UI
import TextureMarble from '@/assets/images/background/texture-marble.png';
import PapyrusRoll from '@/assets/UI/papyrus-roll.svg';
import PapyrusSheet from '@/assets/UI/papyrus-sheet.svg';
import DividerWide from '@/assets/UI/divider-wide.svg';
import DividerDot from '@/assets/UI/divider-dot.svg';
import PillarTop from '@/assets/UI/pillar-top.svg';
import VineLeft from '@/assets/UI/vine-left.svg';
import VineRight from '@/assets/UI/vine-right.svg';

import HeroDuke from '@/assets/images/hero/hero-duke.svg';
import HeroJavaZone from '@/assets/images/hero/hero-javazone.svg';
import HeroYear from '@/assets/images/hero/hero-year.svg';
import Logo from '@/assets/images/logo/javaZone-logo.svg';
import JavaBinLogo from '@/assets/images/logo/javaBin-logo.svg';

// Icons
import TriangleRight from '@/assets/icons/triangle-right.svg';
import TriangleDown from '@/assets/icons/triangle-down.svg';
import MenuRoundedInactive from '@/assets/icons/menu-rounded-inactive.svg';
import MenuRoundedActive from '@/assets/icons/menu-rounded-active.svg';
import TwitterFrame from '@/assets/icons/twitter-frame.svg';
import FacebookFrame from '@/assets/icons/facebook-frame.svg';
import LinkedInFrame from '@/assets/icons/linkedin-frame.svg';
import ToTopArrow from '@/assets/icons/to-top-arrow.svg';
import HandHeartInactive from '@/assets/icons/hand-heart-inactive.svg';
import HandHeartActive from '@/assets/icons/hand-heart-active.svg';

// Tab icons
import Home from '@/assets/icons/home.svg';
import HomeInactive from '@/assets/icons/home-inactive.svg';
import Info from '@/assets/icons/info.svg';
import InfoInactive from '@/assets/icons/info-inactive.svg';
import Partner from '@/assets/icons/partner.svg';
import PartnerInactive from '@/assets/icons/partner-inactive.svg';
import Program from '@/assets/icons/program.svg';
import ProgramInactive from '@/assets/icons/program-inactive.svg';
import Speaker from '@/assets/icons/speaker.svg';
import SpeakerInactive from '@/assets/icons/speaker-inactive.svg';

const screenWidth = Dimensions.get('window').width;

export const Assets = {
  links: {
    javaBinMail: 'mailto:javazone@java.no',
    javaZoneMail: 'mailto:javazone@java.no',
    programMail: 'mailto:program@java.no',
    partnerMail: 'mailto:partner@java.no',
    volunteerMail: 'mailto:student@java.no',
    javaBoardMail: 'mailto:styret@java.no',
    kidsMail: 'mailto:kids@java.no',
    refundMail: 'mailto:refund@java.no',
    program24: 'https://2024.javazone.no/program',
    program23: 'https://2023.javazone.no/#/program',
    program22: 'https://2022.javazone.no/#/program',
    program19: 'https://2019.javazone.no/program',
    program18: 'https://2018.javazone.no/program',
    javaBinHomePage: 'https://www.java.no/',
    codeOfConduct: 'https://www.java.no/principles',
    javaZoneFacebook: 'https://www.facebook.com/javazoneconference',
    javaZoneTwitter: 'https://x.com/javazone',
    javaZoneLinkedIn: 'https://www.linkedin.com/company/javazone/',
    partnerRegistration: 'https://event.checkin.no/101610/javazone-2025-partnership',
    partnerVideo: 'https://player.vimeo.com/video/1038270530',
    partnerTickets: 'https://event.checkin.no/108603/javazone-2025-partner-tickets',
    eventCheckin: 'https://event.checkin.no/109009/javazone-2025',
  },
  images: {
    Logo,
    JavaBinLogo,
    Doughnut,
    hero: {
      HeroDuke,
      HeroJavaZone,
      HeroYear,
    },
  },
  background: TextureMarble,
  UI: {
    PapyrusRoll,
    PapyrusSheet,
    DividerWide,
    DividerDot,
    PillarTop,
    VineLeft,
    VineRight,
  },
  icons: {
    TriangleRight,
    TriangleDown,
    MenuRoundedInactive,
    MenuRoundedActive,
    Home,
    HomeInactive,
    Info,
    InfoInactive,
    Partner,
    PartnerInactive,
    Program,
    ProgramInactive,
    Speaker,
    SpeakerInactive,
    TwitterFrame,
    FacebookFrame,
    LinkedInFrame,
    ToTopArrow,
    HandHeartInactive,
    HandHeartActive,
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
      gradientRed: '#9f092d',
      darkRed: '#780722',
      darkBrown: '#403532',
      lightBrown: '#6c605c',
      linen: '#F9F6F5',
      sheet: '#e8dacf',
      sheetOpacity: 'rgba(232, 218, 207, 0.9)',
      sheetShadow: '#d3c5bb',
      cyberYellow: '#FFD400',
      cyberYellowOpacity: 'rgba(255, 212, 0, 0.7)',
      orangeYellow: '#FCAF17',
      orangeYellowOpacity: 'rgba(252, 175, 23, 0.7)',
      vividOrange: '#F7941D',
      footerGrey: '#666',
    },
  },
  styles: StyleSheet.create({
    safeArea: {
      flex: 1,
      position: 'relative',
      margin: 0,
      overflow: 'hidden',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    scrollContainer: {
      width: '100%',
    },
    scrollContentContainer: {
      width: screenWidth > 768 ? '60%' : '90%',
      alignItems: 'center',
      justifyContent: 'space-between',
      alignSelf: 'center',
      marginTop: 50,
      padding: 10,
    },
    pageTitle: {},
    preface: {
      color: '#403532', // dark-brown
      marginVertical: 5,
      fontSize: screenWidth > 768 ? 22 : 20,
      fontFamily: 'PlayfairDisplay_400Regular',
      textAlign: 'justify',
      fontWeight: '500',
    },
    text: {
      color: '#403532', // dark-brown
      marginVertical: 5,
      fontSize: screenWidth > 768 ? 20 : 18,
      fontFamily: 'PlayfairDisplay_400Regular',
      textAlign: 'justify',
    },
    sectionTitle: {
      color: '#403532', // dark-brown
      fontSize: screenWidth > 768 ? 28 : 22,
      marginTop: 10,
      fontFamily: 'Cinzel_700Bold',
      textAlign: 'center',
    },
    sectionSubTitle: {
      color: '#403532', // dark-brown
      fontSize: screenWidth > 768 ? 22 : 20,
      fontWeight: 'semibold',
      marginTop: 7.5,
      fontFamily: 'Cinzel_600SemiBold',
      textAlign: 'center',
      width: '100%',
    },
    section: {
      width: '100%',
      marginHorizontal: 20,
      marginVertical: 8,
      borderRadius: 5,
      paddingVertical: 20,
      paddingHorizontal: 30,
    },
    intro: {
      color: '#403532', // dark-brown
      marginVertical: 10,
      fontSize: screenWidth > 768 ? 20 : 18,
      fontFamily: 'Cinzel_400Regular',
      textAlign: 'center',
      width: '100%',
    },
    callout: {
      color: '#B10A32', // crimson-red
      fontSize: screenWidth > 768 ? 22 : 18,
      fontFamily: 'PlayfairDisplay_400Regular_Italic',
    },
    listText: {
      color: '#403532', // dark-brown
      marginVertical: 5,
      fontSize: screenWidth > 768 ? 20 : 18,
      fontFamily: 'PlayfairDisplay_400Regular',
    },
    disclaimerText: {
      color: '#6c605c', // light-brown
      fontSize: screenWidth > 768 ? 16 : 14,
      fontFamily: 'PlayfairDisplay_400Regular',
    },
    shadow: {
      elevation: 2, // Shadow effect for Android
      shadowColor: '#403532', // dark-brown, iOS shadow
      shadowOpacity: 0.1,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
    },
  }),
};
