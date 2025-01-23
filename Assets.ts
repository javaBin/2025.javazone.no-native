// @ts-ignore
import JavaBinLogo from '@/assets/images/logo/javaBin-logo.png';
// @ts-ignore
import Doughnut from '@/assets/images/javaZone2022Doughnut.webp';
import TriangleRight from '@/assets/icons/triangle-right.svg';
import TriangleDown from '@/assets/icons/triangle-down.svg';
import MenuRoundedInactive from '@/assets/icons/menu-rounded-inactive.svg';
import MenuRoundedActive from '@/assets/icons/menu-rounded-active.svg';
import Logo from '@/assets/images/logo/javaZone-logo.svg';
import GreekTemple from '@/assets/icons/greek-temple.svg';
import GreekHelmet from '@/assets/icons/greek-helmet.svg';
import { Platform, StyleSheet, Dimensions } from "react-native";

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
    },
    images: {
        Logo,
        JavaBinLogo,
        Doughnut,
    },
    icons: {
        TriangleRight,
        TriangleDown,
        MenuRoundedInactive,
        MenuRoundedActive,
        GreekTemple,
        GreekHelmet,
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
        },
        scrollContainer: {
            width: screenWidth < 768 ? '90%' : '80%',
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
            color: '#2D2D2D', // charcoal
            marginVertical: 5,
            fontSize: screenWidth >= 768 ? 18 : 14,
            fontFamily: 'PlayfairDisplay_400Regular',
            textAlign: 'justify'
        },
        sectionTitle: {
            color: '#F7941D', // vivid-orange
            fontSize: screenWidth >= 768 ? 24 : 20,
            fontWeight: 'bold',
            marginTop: 5,
            fontFamily: 'Cinzel_700Bold',
        },
        sectionSubTitle: {
            color: '#F7941D', // vivid-orange
            fontSize: screenWidth >= 768 ? 20 : 16,
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
            //fontStyle: 'italic',
            marginBottom: 5,
            fontSize: screenWidth >= 768 ? 18 : 14,
            fontFamily: 'Cinzel_400Regular',
        },
        callout: {
            color: '#FCAF17', // orange-yellow
            //fontStyle: 'italic',
            fontSize: screenWidth >= 768 ? 20 : 16,
            fontFamily: 'PlayfairDisplay_400Regular_Italic',
            //textShadowColor: 'rgba(64, 53, 50, 0.25)', // dark-brown
            //textShadowOffset: {width: -1, height: 1},
            //textShadowRadius: 5,
        },
        listText: {
            color: '#1e1616', // gradient.brown
            marginVertical: 5,
            fontSize: screenWidth >= 768 ? 18 : 14,
            fontFamily: 'PlayfairDisplay_400Regular',
        },
    }),
}