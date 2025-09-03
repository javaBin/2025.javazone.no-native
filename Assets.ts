import { StyleSheet, Dimensions, Platform } from 'react-native';
// @ts-ignore
import Doughnut from '@/assets/images/javaZone2022Doughnut.webp';

// @ts-ignore UI
import TextureMarble from '@/assets/images/background/texture-marble.png';
import PapyrusRoll from '@/assets/UI/papyrus-roll.svg';
import PapyrusSheet from '@/assets/UI/papyrus-sheet.svg';
import PapyrusRollOld from '@/assets/UI/papyrus-roll-old.svg';
import PapyrusSheetOld from '@/assets/UI/papyrus-sheet-old.svg';
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
import XLogo from '@/assets/icons/x.svg';
import LinkedInLogo from '@/assets/icons/linkedin.svg';
import BlueSkyLogo from '@/assets/icons/bluesky.svg';
import HeartFilled from '@/assets/program-svg/heart-filled.svg';
import HeartVoid from '@/assets/program-svg/heart-void.svg';
import LaurelWealth from '@/assets/program-svg/laurel-wealth.svg';
import Vine from '@/assets/icons/vine.svg';
import Vine2 from '@/assets/icons/vine2.svg';
import Lyre from '@/assets/icons/lyre.svg';
import Caesar from '@/assets/icons/caezar.svg';
import CaesarDj from '@/assets/images/awezone/cesar-dj.svg';
import endometrioseforeningen from '@/assets/images/awezone/endometrioseforeningen.svg';
import kreftforeningen from '@/assets/images/awezone/kreftforeningen.svg';
import legerutengrenser from '@/assets/images/awezone/legerutengrenser.svg';

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

// Partner logos
import Accenture from '@/assets/partners/accenture.svg';
import Bekk from '@/assets/partners/bekk.svg';
import Bouvet from '@/assets/partners/bouvet.svg';
import Capgemini from '@/assets/partners/capgemini.svg';
import Capra from '@/assets/partners/capra.svg';
import CGI from '@/assets/partners/cgi.svg';
import Cloudberries from '@/assets/partners/cloudberries.svg';
import Computas from '@/assets/partners/computas.svg';
import DNB from '@/assets/partners/dnb.svg';
import Elastic from '@/assets/partners/elastic.svg';
import Embriq from '@/assets/partners/embriq.svg';
import Entur from '@/assets/partners/entur.svg';
import Finn from '@/assets/partners/finn.svg';
import Fremtind from '@/assets/partners/fremtind.svg';
import Gjensidige from '@/assets/partners/gjensidige.svg';
import GoogleCloud from '@/assets/partners/googleCloud.svg';
import Husbanken from '@/assets/partners/husbanken.svg';
import Kantega from '@/assets/partners/kantega.svg';
import Knowit from '@/assets/partners/knowit.svg';
import Kodemaker from '@/assets/partners/kodemaker.svg';
import Miles from '@/assets/partners/miles.svg';
import NAV from '@/assets/partners/nav.svg';
import Netcompany from '@/assets/partners/netcompany-cropped.svg';
import NorskTipping from '@/assets/partners/norsktipping.svg';
import KSDigitaleFellestjenester from '@/assets/partners/ks-digitale-fellestjenester.svg';
import PolitietPIT from '@/assets/partners/politietpit.svg';
import PostenBring from '@/assets/partners/postenbring.svg';
import RedHat from '@/assets/partners/redhat.svg';
import Scelto from '@/assets/partners/scelto.svg';
import Scienta from '@/assets/partners/scienta.svg';
import Skatteetaten from '@/assets/partners/skatteetaten.svg';
import SopraSteria from '@/assets/partners/soprasteria.svg';
import Sparebank1 from '@/assets/partners/sparebank1.svg';
import StatensVegvesen from '@/assets/partners/statensvegvesen.svg';
import Statnett from '@/assets/partners/statnett.svg';
import Storebrand from '@/assets/partners/storebrand.svg';
import Systek from '@/assets/partners/systek.svg';
import Telenor from '@/assets/partners/telenor.svg';
import TetDigital from '@/assets/partners/tetdigital.svg';
import Tietoevry from '@/assets/partners/tietoevry.svg';
import Tolletaten from '@/assets/partners/tolletaten.svg';
import Tripletex from '@/assets/partners/tripletex.svg';
import Uptime from '@/assets/partners/uptime.svg';
import Vaadin from '@/assets/partners/vaadin.svg';
import Webstep from '@/assets/partners/webstep.svg';
import Apotek1 from '@/assets/partners/apotek1.svg';
import BankID from '@/assets/partners/BankIDBankaxept.svg';
import Bronoy from '@/assets/partners/brreg.svg';
import Crayon from '@/assets/partners/crayonconsulting.svg';
import ElOgIt from '@/assets/partners/elogit.svg';
import JetBrains from '@/assets/partners/jetbrains.svg';
import JPRO from '@/assets/partners/jpro.svg';
import Mastercard from '@/assets/partners/mastercard.svg';
import Sonat from '@/assets/partners/sonat.svg';
import Tomra from '@/assets/partners/tomra.svg';
import Yne from '@/assets/partners/yne.svg';
import Ambita from '@/assets/partners/ambita.svg';
import GE from '@/assets/partners/GE.svg';
import Kartverket from '@/assets/partners/kartverket.svg';
import SSB from '@/assets/partners/ssb.svg';
import STOE from '@/assets/partners/stoe.svg';
import VEND from '@/assets/partners/vend.svg';

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
    workshopRegistration: 'https://event.checkin.no/138671/javazone-workshops-2025',
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
    PapyrusRollOld,
    PapyrusSheet,
    PapyrusSheetOld,
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
    XLogo,
    LinkedInLogo,
    BlueSkyLogo,
    HeartFilled,
    HeartVoid,
    LaurelWealth,
    Vine,
    Vine2,
    Lyre,
    Caesar,
    CaesarDj,
    endometrioseforeningen,
    kreftforeningen,
    legerutengrenser,
  },
  partnerLogos: {
    Accenture,
    Bekk,
    Bouvet,
    Capgemini,
    Capra,
    CGI,
    Cloudberries,
    Computas,
    DNB,
    Elastic,
    Embriq,
    Entur,
    Finn,
    Fremtind,
    Gjensidige,
    GoogleCloud,
    Husbanken,
    Kantega,
    Knowit,
    Kodemaker,
    Miles,
    NAV,
    Netcompany,
    NorskTipping,
    KSDigitaleFellestjenester,
    PolitietPIT,
    PostenBring,
    RedHat,
    Scelto,
    Scienta,
    Skatteetaten,
    SopraSteria,
    Sparebank1,
    StatensVegvesen,
    Statnett,
    Storebrand,
    Systek,
    Telenor,
    TetDigital,
    Tietoevry,
    Tolletaten,
    Tripletex,
    Uptime,
    Vaadin,
    Webstep,
    Apotek1,
    BankID,
    Bornoy: Bronoy,
    Crayon,
    ElOgIt,
    GE,
    JetBrains,
    JPRO,
    Mastercard,
    Sonat,
    Tomra,
    Ambita,
    Kartverket,
    SSB,
    STOE,
    VEND
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
    dangerousOverrideScrollContentContainer: {
      width: screenWidth > 768 ? '82.5%' : '90%',
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
      /** note: this cannot have overflow hidden, that will remove shadow on iOS,
       * it cannot have borderRadius either, because that would require overflow hidden
       * so let it have sharp edges on native, prioritize contrast over roundness */
      width: '100%',
      marginHorizontal: 20,
      marginVertical: 8,
      paddingVertical: 20,
      paddingHorizontal: 30,
      borderRadius: 5, // only for web
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
      marginVertical: 5,
      fontSize: screenWidth > 768 ? 20 : 18,
      fontFamily: 'PlayfairDisplay_400Regular',
      textAlign: 'justify',
    },
    shadow: {
      /** note: this will only work if overflow hidden is disabled, see comment under Assets.styles.section
       *  don't touch! 💅🏼 */
      shadowColor: '#403532', // dark-brown
      elevation: 7, // android
      shadowRadius: Platform.OS === 'web' ? 3 : 7,
      shadowOpacity: Platform.OS === 'web' ? 0.1 : 0.2,
      shadowOffset: { width: 0, height: 3 },
    },
  }),
};
export {
  Capgemini,
  Capra,
  CGI,
  DNB,
  Kantega,
  Knowit,
  NAV,
  Netcompany,
  NorskTipping,
  KSDigitaleFellestjenester,
  PolitietPIT,
  PostenBring,
  RedHat,
  Scelto,
  Scienta,
  Skatteetaten,
  SopraSteria,
  Sparebank1,
  StatensVegvesen,
  Statnett,
  Storebrand,
  Systek,
  Telenor,
  TetDigital,
  Tietoevry,
  Tolletaten,
  Tripletex,
  Uptime,
  Vaadin,
  Webstep,
  Entur,
  Finn,
  Fremtind,
  Gjensidige,
  GoogleCloud,
  Husbanken,
  Accenture,
  Bekk,
  Bouvet,
  Cloudberries,
  Computas,
  Elastic,
  Embriq,
  Kodemaker,
  Miles,
  Apotek1,
  BankID,
  Bronoy,
  Crayon,
  ElOgIt,
  GE,
  JetBrains,
  JPRO,
  Mastercard,
  Sonat,
  Tomra,
  Yne,
  Ambita,
  Kartverket,
  SSB,
  STOE,
  VEND
};
