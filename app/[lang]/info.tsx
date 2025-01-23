import { Animated, Image, Platform, Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Assets } from '@/Assets';
import { CircleImage, ScreenTemplate, SvgImage } from '@/components';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import ScrollView = Animated.ScrollView;
import { Link } from 'expo-router';

const Info = () => {
    // @ts-ignore
    const { t } = useTranslation();
    const [toggleJavaBin, setToggleJavaBin] = useState<boolean>(false);
    const [toggleJavaZone, setToggleJavaZone] = useState<boolean>(false);
    const [togglePrinciples, setTogglePrinciples] = useState<boolean>(false);
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => { // todo: set native style if screen dimensions equals phone
        if (Platform.OS !== 'web') return;
        setToggleJavaBin(true);
        setToggleJavaZone(true);
        setTogglePrinciples(true);
    }, []);

    const ToggleButton = (title: string, toggle: boolean) => {
        const handleToggle = () => {
            switch (title) {
                case t('javaBin.read_more'): {
                    setToggleJavaBin(!toggle);
                    break;
                }
                case t('javaZone.read_more'): {
                    setToggleJavaZone(!toggle);
                    break;
                }
                case t('principles.read_more'): {
                    setTogglePrinciples(!toggle);
                    break;
                }
            }
        }

        return (
            <Pressable style={styles.toggleButton} onPress={handleToggle}>
                <Text style={styles.toggleTitle}>{title}</Text>
                <View style={{width: 22}}>
                    {
                        toggle ?
                            <SvgImage SVG={Assets.icons.TriangleDown} height={22} width={22}/> :
                            <SvgImage SVG={Assets.icons.TriangleRight} height={22} width={22}/>
                    }
                </View>
            </Pressable>
        )
    }

    return (
        <ScreenTemplate>
            <ScrollView style={Assets.styles.scrollContainer}
                        contentContainerStyle={Assets.styles.scrollContentContainer}
                        alwaysBounceVertical={false}
                        showsVerticalScrollIndicator={false}>
                <View style={Assets.styles.section}>
                    <Text style={Assets.styles.sectionTitle}>{t('javaBin.about')}</Text>
                    <Text style={Assets.styles.text}>{t('javaBin.about_javaBin')}</Text>

                    {ToggleButton(t('javaBin.read_more'), toggleJavaBin)}

                    <View style={{display: toggleJavaBin ? "flex" : "none"}}>
                        <Text style={Assets.styles.text}>{t('javaBin.about_JavaZone')}</Text>
                        <Text style={Assets.styles.text}>{t('javaBin.about_meetups')}</Text>
                        <Text style={Assets.styles.sectionSubTitle}>{t('javaBin.become_active')}</Text>
                        <Text style={Assets.styles.text}>{t('javaBin.about_becoming_active')}</Text>

                        <View style={styles.imageContainer}>
                            <Image source={Assets.images.JavaBinLogo} style={styles.image}/>
                            <Text style={Assets.styles.callout}>{t('javaBin.intro')}</Text>
                        </View>
                    </View>
                </View>

                <View style={Assets.styles.section}>
                    <Text style={Assets.styles.sectionTitle}>{t('javaZone.about')}</Text>
                    <Text style={Assets.styles.text}>{t('javaZone.about_JavaZone')}</Text>

                    {ToggleButton(t('javaZone.read_more'), toggleJavaZone)}

                    <View style={{display: toggleJavaZone ? "flex" : "none"}}>
                        <Text style={Assets.styles.text}>{t('javaZone.goal')}</Text>
                        <Text style={Assets.styles.text}>{t('javaZone.last_year')}</Text>
                        <Text style={Assets.styles.sectionSubTitle}>{t('javaZone.who_is_behind')}</Text>
                        <Text style={Assets.styles.text}>{t('javaZone.about_organizers')}</Text>
                        <Text style={Assets.styles.sectionSubTitle}>{t('javaZone.core_team_title')}</Text>

                        <View style={{display: 'flex', flexDirection: screenWidth >= 768 ? 'row' : 'column'}}>
                            <View style={styles.listItemContainer}>
                                <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.leader')}</Text>
                                <Link href={Assets.links.javaZoneMail} style={[styles.listItemMail, styles.listItem]}>{t('javaZone.javaZone_mail')}</Link>
                            </View>
                            <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.leader_name')}</Text>
                        </View>

                        <View style={{display: 'flex', flexDirection: screenWidth >= 768 ? 'row' : 'column'}}>
                            <View style={styles.listItemContainer}>
                                <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.program')}</Text>
                                <Link href={Assets.links.programMail} style={[styles.listItemMail, styles.listItem]}>{t('javaZone.program_mail')}</Link>
                            </View>
                            <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.program_name')}</Text>
                        </View>

                        <View style={{display: 'flex', flexDirection:screenWidth >= 768 ? 'row' : 'column'}}>
                            <View style={styles.listItemContainer}>
                                <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.partners')}</Text>
                                <Link href={Assets.links.partnerMail} style={[styles.listItemMail, styles.listItem]}>{t('javaZone.partners_mail')}</Link>
                            </View>
                            <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.partners_name')}</Text>
                        </View>

                        <View style={{display: 'flex', flexDirection: screenWidth >= 768 ? 'row' : 'column'}}>
                            <View style={styles.listItemContainer}>
                                <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.volunteers')}</Text>
                                <Link href={Assets.links.volunteerMail} style={[styles.listItemMail, styles.listItem]}>{t('javaZone.volunteers_mail')}</Link>
                            </View>
                            <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.volunteers_name')}</Text>
                        </View>

                        <Text style={Assets.styles.text}>{t('javaZone.thank_you')}</Text>
                        <Text style={Assets.styles.text}>
                            {t('javaZone.reach_core_team')}
                            <Link href={Assets.links.javaZoneMail} style={styles.listItemMail}>{t('javaZone.javaZone_mail')}</Link>
                        </Text>
                    </View>
                </View>

                <View style={Assets.styles.section}>
                    <Text style={Assets.styles.sectionTitle}>{t('principles.principles')}</Text>
                    <Text style={Assets.styles.text}>{t('principles.intro')}</Text>

                    {ToggleButton(t('principles.read_more'), togglePrinciples)}

                    <View style={{display: togglePrinciples ? "flex" : "none"}}>
                        <Text style={Assets.styles.text}>{t('principles.about')}</Text>
                        <Text style={Assets.styles.intro}>{t('principles.notify')}</Text>
                        <Text style={Assets.styles.sectionSubTitle}>{t('principles.before_conference')}</Text>
                        <Text style={Assets.styles.text}>
                            {t('principles.contact_us_start')}
                            <Link href={Assets.links.javaZoneMail} style={styles.listItemMail}>{t('javaZone.javaZone_mail')}</Link>
                            {t('principles.contact_us_middle')}
                            <Link href={Assets.links.javaBoardMail} style={styles.listItemMail}>{t('principles.java_board_mail')}</Link>
                            {t('principles.contact_us_end')}
                        </Text>
                        <Text style={Assets.styles.sectionSubTitle}>{t('principles.during_conference')}</Text>
                        <Text style={Assets.styles.text}>{t('principles.contact_stand')}</Text>
                    </View>
                </View>

                <View style={[Assets.styles.section, screenWidth < 768 ? {width: '90%'} : {width: '100%'}]}>
                    <Text style={Assets.styles.sectionTitle}>{t('food.food')}</Text>
                    <View style={styles.paragraphImageContainer}>
                        <View style={{display: 'flex', width: screenWidth >= 768 ? '90%' : '100%'}}>
                            <Text style={Assets.styles.text}>{t('food.about')}</Text>
                            <Text style={[Assets.styles.text, {display: screenWidth >= 768 ? 'flex' : 'none'}]}>{t('food.our_chefs')}</Text>
                        </View>
                        <CircleImage source={Assets.images.Doughnut}
                                     size={screenWidth < 768 ? 100 : 200}
                                     style={{marginHorizontal: 5}}
                        />
                    </View>
                    <Text style={[Assets.styles.text, {display: screenWidth < 768 ? 'flex' : 'none'}]}>{t('food.our_chefs')}</Text>
                </View>

                <View style={[Assets.styles.section, {marginBottom: 50}]}>
                    <Text style={Assets.styles.sectionTitle}>♻️ Sustainable waste management and recycling at JavaZone</Text>
                    <Text style={Assets.styles.text}>More information to come</Text>
                </View>
            </ScrollView>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: '50%',
        objectFit: 'scale-down',
        resizeMode: 'contain'
    },
    toggleButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        marginVertical: 5
    },
    toggleTitle: {
        color: Assets.colors.jz2025ThemeColors.crimsonRed,
        fontSize: Dimensions.get('window').width >= 768 ? 20 : 16,
        fontFamily: 'Cinzel_500Medium'
    },
    listItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    listItem: {
        display: "flex",
        marginRight: 5,
        flexWrap: "wrap",
        fontSize: Dimensions.get('window').width >= 768 ? 18 : 14,
        fontFamily: 'PlayfairDisplay_400Regular',
    },
    listItemRole: {
        color: Assets.colors.gradient.brown,
    },
    listItemMail: {
        color: Assets.colors.jz2025ThemeColors.crimsonRed,
    },
    listItemName: {
        color: Dimensions.get('window').width >= 768 ? Assets.colors.jz2025ThemeColors.darkBrown : Assets.colors.gradient.brown,
        marginBottom: 5,
        marginTop: Dimensions.get('window').width >= 768 ? 10 : 0
    },
    paragraphImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('window').width >= 768 ? '95%' : '75%',
        justifyContent: "space-between",
    }
});

export default Info;