// @ts-ignore
import JavaBinLogo from '@/assets/images/logo/javaBin-logo.png';
// @ts-ignore
import Doughnut from '@/assets/images/javaZone2022Doughnut.webp';
import TriangleRight from '@/assets/icons/triangle-right.svg';
import TriangleDown from '@/assets/icons/triangle-down.svg';
import MenuRoundedInactive from '@/assets/icons/menu-rounded-inactive.svg';
import MenuRoundedActive from '@/assets/icons/menu-rounded-active.svg';
import Logo from '@/assets/images/javaZone-logo.svg';
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
        scrollContainer: {
            display: "flex",
            width: '100%',
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: 30,
        },
        pageTitle: {},
        text: {
            color: '#D6BD98', // beige
            marginVertical: 5,
            fontSize: screenWidth >= 768 ? 18 : 14
        },
        sectionTitle: {
            color: '#ECDFCC', // cream
            fontSize: screenWidth >= 768 ? 24 : 20,
            fontWeight: 'bold',
            marginTop: 5
        },
        sectionSubTitle: {
            color: '#ECDFCC', // cream
            fontSize: screenWidth >= 768 ? 20 : 16,
            fontWeight: 'semibold',
            fontStyle: 'italic',
            marginTop: 5
        },
        section: {
            marginHorizontal: 20,
            marginVertical: 5,
        },
        callout: {
            color: '#EFDFBB', // dutch-white
            fontStyle: 'italic',
            marginBottom: 5,
            fontSize: screenWidth >= 768 ? 18 : 14,
        },
        intro: {
            color: '#ED6F24', // bright-orange
            fontStyle: 'italic',
            fontSize: screenWidth >= 768 ? 20 : 16,
        },
        listText: {
            color: '#ECDFCC', // cream
            marginVertical: 5,
            fontSize: screenWidth >= 768 ? 18 : 14,
        },
    }),
}