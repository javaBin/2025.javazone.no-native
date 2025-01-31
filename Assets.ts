import { Platform, StyleSheet, Dimensions } from "react-native";
// @ts-ignore
import JavaBinLogo from '@/assets/images/logo/javaBin-logo.svg';
// @ts-ignore
import Doughnut from '@/assets/images/javaZone2022Doughnut.webp';
// @ts-ignore
import TextureMarble from '@/assets/images/background/texture-marble.png';

// Icons
import TriangleRight from '@/assets/icons/triangle-right.svg';
import TriangleDown from '@/assets/icons/triangle-down.svg';
import MenuRoundedInactive from '@/assets/icons/menu-rounded-inactive.svg';
import MenuRoundedActive from '@/assets/icons/menu-rounded-active.svg';
import Logo from '@/assets/images/logo/javaZone-logo.svg';

// Tab icons
import Home from '@/assets/icons/home.svg';
import Info from '@/assets/icons/info.svg';
import Partner from '@/assets/icons/partner.svg';
import Program from '@/assets/icons/program.svg';
import Speaker from '@/assets/icons/speaker.svg';

const screenWidth = Dimensions.get('window').width;

export const Assets = {
    links: {
        javaBinMail: 'mailto:javazone@java.no', // todo: is this correct?
        javaZoneMail: 'mailto:javazone@java.no',
        programMail: 'mailto:program@java.no',
        partnerMail: 'mailto:partner@java.no',
        volunteerMail: 'mailto:student@java.no',
        javaBoardMail: 'mailto:styret@java.no',
        program24: 'https://2024.javazone.no/program',
        program23: 'https://2023.javazone.no/#/program',
        program22: 'https://2022.javazone.no/#/program',
        program19: 'https://2019.javazone.no/program',
        program18: 'https://2018.javazone.no/program',
        partnerRegistration: 'https://event.checkin.no/101610/javazone-2025-partnership',
    },
    images: {
        Logo,
        JavaBinLogo,
        Doughnut,
    },
    background: TextureMarble,
    icons: {
        TriangleRight,
        TriangleDown,
        MenuRoundedInactive,
        MenuRoundedActive,
        Home,
        Info,
        Partner,
        Program,
        Speaker,
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
            darkRed: '#780722',
            darkBrown: '#403532',
            lightBrown: '#6c605c',
            linen: '#F9F6F5',
            cyberYellow: '#FFD400',
            cyberYellowOpacity: 'rgba(255, 212, 0, 0.7)',
            orangeYellow: '#FCAF17',
            orangeYellowOpacity: 'rgba(252, 175, 23, 0.7)',
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
        },
        scrollContainer: {
            width: screenWidth <= 768 ? '90%' : '80%',
            marginTop: Platform.OS === 'web' ? 50 : 0
        },
        scrollContentContainer: {
            display: "flex",
            width: '100%',
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: 30,
        },
        pageTitle: {},
        text: {
            color: '#403532', // dark-brown
            marginVertical: 5,
            fontSize: screenWidth > 768 ? 18 : 16,
            fontFamily: 'PlayfairDisplay_400Regular',
            textAlign: 'justify',
        },
        sectionTitle: {
            color: '#403532', // dark-brown
            fontSize: screenWidth > 768 ? 24 : 20,
            fontWeight: 'bold',
            marginTop: 5,
            fontFamily: 'Cinzel_700Bold',
        },
        sectionSubTitle: {
            color: '#403532', // dark-brown
            fontSize: screenWidth > 768 ? 20 : 18,
            fontWeight: 'semibold',
            fontStyle: 'italic',
            marginTop: 5,
            fontFamily: 'Cinzel_600SemiBold',
        },
        section: {
            marginHorizontal: 20,
            marginVertical: 5,
        },
        intro: {
            color: '#403532', // dark-brown
            marginVertical: 5,
            fontSize: screenWidth > 768 ? 18 : 16,
            fontFamily: 'Cinzel_400Regular',
        },
        callout: {
            color: '#B10A32', // crimson-red
            fontSize: screenWidth > 768 ? 20 : 18,
            fontFamily: 'PlayfairDisplay_400Regular_Italic',
        },
        listText: {
            color: '#1e1616', // gradient.brown
            marginVertical: 5,
            fontSize: screenWidth > 768 ? 18 : 16,
            fontFamily: 'PlayfairDisplay_400Regular',
        },
        disclaimerText: {
            color: '#6c605c', // light-brown
            fontSize: screenWidth > 768 ? 16 : 14,
        }
    }),
}