import {Animated, Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import { Assets } from "@/Assets";
import { CircleImage, ScreenTemplate, SvgImage } from "@/components";
import { useTranslation } from "react-i18next";
import React, {useEffect, useState} from "react";
import ScrollView = Animated.ScrollView;
import {Link, useRouter} from "expo-router";

const Info = () => {
    // @ts-ignore
    const { t } = useTranslation();
    const [toggleJavaBin, setToggleJavaBin] = useState<boolean>(false);
    const [toggleJavaZone, setToggleJavaZone] = useState<boolean>(false);
    const [togglePrinciples, setTogglePrinciples] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        // temporary until we fix info page for web
        // this version is only for native and todo: needs refactoring
        if (Platform.OS === 'web') router.navigate('/en');
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
                    setTogglePrinciples(!togglePrinciples);
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
            <ScrollView style={{width: '100%'}} contentContainerStyle={styles.container} alwaysBounceVertical={false}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{t('javaBin.about')}</Text>
                    <Text style={styles.sectionText}>{t('javaBin.about_javaBin')}</Text>

                    {ToggleButton(t('javaBin.read_more'), toggleJavaBin)}

                    <View style={{display: toggleJavaBin ? "flex" : "none"}}>
                        <Text style={styles.sectionText}>{t('javaBin.about_JavaZone')}</Text>
                        <Text style={styles.sectionText}>{t('javaBin.about_meetups')}</Text>
                        <Text style={styles.sectionSubTitle}>{t('javaBin.become_active')}</Text>
                        <Text style={styles.sectionText}>{t('javaBin.about_becoming_active')}</Text>

                        <View style={styles.imageContainer}>
                            <Image source={Assets.images.JavaBinLogo} style={styles.image}/>
                            <Text style={styles.intro}>{t('javaBin.intro')}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{t('javaZone.about')}</Text>
                    <Text style={styles.sectionText}>{t('javaZone.about_JavaZone')}</Text>

                    {ToggleButton(t('javaZone.read_more'), toggleJavaZone)}

                    <View style={{display: toggleJavaZone ? "flex" : "none"}}>
                        <Text style={styles.sectionText}>{t('javaZone.goal')}</Text>
                        <Text style={styles.sectionText}>{t('javaZone.last_year')}</Text>
                        <Text style={styles.sectionSubTitle}>{t('javaZone.who_is_behind')}</Text>
                        <Text style={styles.sectionText}>{t('javaZone.about_organizers')}</Text>
                        <Text style={styles.sectionSubTitle}>{t('javaZone.core_team_title')}</Text>

                        <View style={styles.listItemContainer}>
                            <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.leader')}</Text>
                            <Link href={Assets.links.javaZoneMail} style={[styles.listItemMail, styles.listItem]}>{t('javaZone.javaZone_mail')}</Link>
                        </View>
                        <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.leader_name')}</Text>

                        <View style={styles.listItemContainer}>
                            <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.program')}</Text>
                            <Link href={Assets.links.programMail} style={[styles.listItemMail, styles.listItem]}>{t('javaZone.program_mail')}</Link>
                        </View>
                        <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.program_name')}</Text>

                        <View style={styles.listItemContainer}>
                            <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.partners')}</Text>
                            <Link href={Assets.links.partnerMail} style={[styles.listItemMail, styles.listItem]}>{t('javaZone.partners_mail')}</Link>
                        </View>
                        <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.partners_name')}</Text>

                        <View style={styles.listItemContainer}>
                            <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.volunteers')}</Text>
                            <Link href={Assets.links.volunteerMail} style={[styles.listItemMail, styles.listItem]}>{t('javaZone.volunteers_mail')}</Link>
                        </View>
                        <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.volunteers_name')}</Text>

                        <Text style={styles.sectionText}>{t('javaZone.thank_you')}</Text>
                        <Text style={styles.sectionText}>
                            {t('javaZone.reach_core_team')}
                            <Link href={Assets.links.javaZoneMail} style={styles.listItemMail}>{t('javaZone.javaZone_mail')}</Link>
                        </Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{t('principles.principles')}</Text>
                    <Text style={styles.sectionText}>{t('principles.intro')}</Text>

                    {ToggleButton(t('principles.read_more'), togglePrinciples)}

                    <View style={{display: togglePrinciples ? "flex" : "none"}}>
                        <Text style={styles.sectionText}>{t('principles.about')}</Text>
                        <Text style={styles.callout}>{t('principles.notify')}</Text>
                        <Text style={styles.sectionSubTitle}>{t('principles.before_conference')}</Text>
                        <Text style={styles.sectionText}>
                            {t('principles.contact_us_start')}
                            <Link href={Assets.links.javaZoneMail} style={styles.listItemMail}>{t('javaZone.javaZone_mail')}</Link>
                            {t('principles.contact_us_middle')}
                            <Link href={Assets.links.javaBoardMail} style={styles.listItemMail}>{t('principles.java_board_mail')}</Link>
                            {t('principles.contact_us_end')}
                        </Text>
                        <Text style={styles.sectionSubTitle}>{t('principles.during_conference')}</Text>
                        <Text style={styles.sectionText}>{t('principles.contact_stand')}</Text>
                    </View>
                </View>

                <View style={[styles.section, {width: '90%'}]}>
                    <Text style={styles.sectionTitle}>{t('food.food')}</Text>
                    <View style={{display: 'flex', flexDirection: 'row', width: '75%'}}>
                        <Text style={styles.sectionText}>{t('food.about')}</Text>
                        <CircleImage source={Assets.images.Doughnut} size={100} style={{marginHorizontal: 5}} />
                    </View>
                    <Text style={styles.sectionText}>{t('food.our_chefs')}</Text>
                </View>

                <View style={[styles.section, {marginBottom: 50}]}>
                    <Text style={styles.sectionTitle}>Sustainable waste management and recycling at JavaZone</Text>
                    <Text style={styles.sectionText}>More information to come</Text>
                </View>
            </ScrollView>
        </ScreenTemplate>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: '100%',
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 30,
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: '50%',
        objectFit: 'scale-down',
    },
    intro: {
        color: Assets.colors.logo.brightOrange,
        fontStyle: 'italic',
        fontSize: 16
    },
    section: {
        marginHorizontal: 20,
        marginVertical: 5,
    },
    sectionTitle: {
        color: Assets.colors.brand.cream,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5
    },
    sectionSubTitle: {
        color: Assets.colors.brand.cream,
        fontSize: 16,
        fontWeight: 'semibold',
        fontStyle: 'italic',
        marginTop: 5
    },
    sectionText: {
        color: Assets.colors.brand.beige,
        marginVertical: 5,
    },
    toggleButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "flex-start"
    },
    toggleTitle: {
        color: Assets.colors.logo.brightOrange,
        fontSize: 16,
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
    },
    listItemRole: {
        color: Assets.colors.brand.beige,
    },
    listItemMail: {
        color: Assets.colors.logo.brightYellow,
    },
    listItemName: {
        color: Assets.colors.brand.cream,
        marginBottom: 5
    },
    callout: {
        color: Assets.colors.brand.dutchWhite,
        fontStyle: 'italic',
        marginBottom: 5
    }
});

export default Info;