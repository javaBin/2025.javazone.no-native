import Logo from '@/constants/images/logo-sharp.svg';
import {StyleSheet} from "react-native";

export const Assets = {
    images: {
        Logo
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
            light: '#414345'
        }
    },
    styles: StyleSheet.create({
        safeArea: {
            flex: 1,
            position: 'relative',
            marginHorizontal: 0,
            /*backgroundColor: '#2D2D2D' // charcoal*/
        },
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#ECDFCC', // cream
            /*backgroundColor: '#2D2D2D' // charcoal*/
        },
    }),
}