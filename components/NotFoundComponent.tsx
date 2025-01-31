import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// @ts-ignore
import { Assets } from '@/Assets';
import { LinkText } from "@/UI";

const NotFoundComponent = () => {
    const { t } = useTranslation();
    const screenWidth = Dimensions.get('window').width;

    const styles = StyleSheet.create({
        content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: screenWidth > 768 ? '50%' : '80%',
        },
        errorCode: {
            color: Assets.colors.jz2025ThemeColors.cyberYellow,
            fontSize: screenWidth > 768 ? 58 : 44,
            fontFamily: 'Cinzel_800ExtraBold',
            fontWeight: '800',
            textTransform: 'uppercase',
        },
        highlight: {
            fontFamily: 'Cinzel_600SemiBold',
            color: Assets.colors.jz2025ThemeColors.crimsonRed,
            fontSize: screenWidth > 768 ? 20 : 18,
        }
    });

    return (
        <View style={styles.content}>
            <Text style={styles.errorCode}>{t('404.error_code')}</Text>
            <Text style={Assets.styles.sectionTitle}>{t('404.error_title')}</Text>

            <Text style={Assets.styles.text}>
                {t('404.lost_page_start')}
                <Text style={styles.highlight}>{t('404.404')}</Text>
                {t('404.lost_page_end')}
            </Text>

            <Text style={Assets.styles.text}>{t('404.tech_fails')}</Text>

            <Text style={Assets.styles.text}>
                {t('404.tell_us_start')}
                <LinkText title={t('404.tell_us_end')} href={Assets.links.javaBinMail}/>
            </Text>
        </View>
    );
};

export default NotFoundComponent;
