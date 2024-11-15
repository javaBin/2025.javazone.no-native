// @ts-ignore
import { ScreenTemplate } from "@/components";
import { useTranslation } from "react-i18next";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
// @ts-ignore
import { Assets } from "@/Assets";
import { Link } from "expo-router";

const NotFound = () => {
    const { t } = useTranslation();
    const screenWidth = Dimensions.get("window").width;

    const styles = StyleSheet.create({
        content: {
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            width: '100%',
        },
        errorCode: {
            color: Assets.colors.brand.cream,
            fontSize: Platform.OS == 'web' ? 58 : 44,
            fontWeight: '800',
            textTransform: 'uppercase',
        },
        errorTitle: {
            color: Assets.colors.logo.brightOrange,
            width: '95%',
            fontSize: screenWidth > 768 ? 36 : 32,
            fontWeight: 'semibold',
            marginBottom: 20,
            textAlign: 'center',
        },
        errorMessageLight: {
            color: Assets.colors.brand.dutchWhite
        },
        errorMessageMedium: {
            color: Assets.colors.brand.beige,
        },
        text: {
            margin: 10,
            width: screenWidth > 768 ? '60%' : '85%',
            fontSize: screenWidth > 768 ? 20 : 18,
        },
        highlight: {
            color: Assets.colors.logo.brightRed,
            fontWeight: 'bold'
        },
        link: {
            color: Assets.colors.logo.brightYellow,
            textDecorationLine: 'underline',
        }
    });

    return (
        <ScreenTemplate>
            <View style={styles.content}>
                <Text style={styles.errorCode}>{t('404.error_code')}</Text>
                <Text style={styles.errorTitle}>{t('404.error_title')}</Text>

                <Text style={[styles.errorMessageMedium, styles.text]}>
                    {t('404.lost_page_start')}
                    <Text style={styles.highlight}>{t('404.404')}</Text>
                    {t('404.lost_page_end')}
                </Text>

                <Text style={[styles.errorMessageMedium, styles.text]}>{t('404.tech_fails')}</Text>

                <Text style={[styles.errorMessageLight, styles.text]}>
                    {t('404.tell_us_start')}
                    <Link href={Assets.links.javaBinMail} style={styles.link}>
                        {t('404.tell_us_end')}
                    </Link>
                </Text>
            </View>
        </ScreenTemplate>
    )
}

export default NotFound;