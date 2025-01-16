// @ts-ignore
import JavaBinLogo from '@/assets/images/javaBin-logo.png';
// @ts-ignore
import Doughnut from '@/assets/images/javaZone2022Doughnut.webp';
import TriangleRight from '@/assets/icons/triangle-right.svg';
import TriangleDown from '@/assets/icons/triangle-down.svg';
import MenuRoundedInactive from '@/assets/icons/menu-rounded-inactive.svg';
import MenuRoundedActive from '@/assets/icons/menu-rounded-active.svg';
import Logo from '@/assets/images/javaZone-logo.svg';
import { StyleSheet } from "react-native";

export const Assets = {
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
        }
    },
    styles: StyleSheet.create({
        safeArea: {
            flex: 1,
            position: 'relative',
            marginHorizontal: 0,
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#ECDFCC', // cream
        },
    }),
}