import { Animated, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Assets } from '@/Assets';
import { ScreenTemplate } from '@/components';
import { CircleImage, LinkText, SvgImage, ToggleText } from '@/UI';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import ScrollView = Animated.ScrollView;
import PageTitle from '@/UI/PageTitle';
import {BlurView} from 'expo-blur';

const Info = () => {
    // @ts-ignore
    const { t } = useTranslation();
    const [toggleJavaBin, setToggleJavaBin] = useState<boolean>(false);
    const [toggleJavaZone, setToggleJavaZone] = useState<boolean>(false);
    const [togglePrinciples, setTogglePrinciples] = useState<boolean>(false);
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        if (screenWidth > 768) {
            setToggleJavaBin(true);
            setToggleJavaZone(true);
            setTogglePrinciples(true);
        }
    }, []);

    const handleToggle = (title: string, toggle: boolean) => {
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
        <ScreenTemplate>
            <ScrollView style={Assets.styles.scrollContainer}
                        contentContainerStyle={Assets.styles.scrollContentContainer}
                        alwaysBounceVertical={false}
                        showsVerticalScrollIndicator={false}>

                <PageTitle title={t('pageTitles.info')}/>
                {/* About javaBin */}
                <BlurView tint="light" intensity={20} style={{...Assets.styles.section, ...Assets.styles.shadow}}>
                    <Text style={Assets.styles.sectionTitle}>{t('javaBin.about')}</Text>
                    <Text style={Assets.styles.text}>{t('javaBin.about_javaBin')}</Text>
                    <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>

                    <ToggleText title={t('javaBin.read_more')} toggle={toggleJavaBin} handleToggle={() => handleToggle(t('javaBin.read_more'), toggleJavaBin)}/>

                    <View style={{display: toggleJavaBin ? "flex" : "none"}}>
                        <Text style={Assets.styles.text}>{t('javaBin.about_JavaZone')}</Text>
                        <Text style={Assets.styles.text}>{t('javaBin.about_meetups')}</Text>
                        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>

                        <Text style={Assets.styles.sectionSubTitle}>{t('javaBin.become_active')}</Text>
                        <Text style={Assets.styles.text}>{t('javaBin.about_becoming_active')}</Text>

                        <View style={styles.imageContainer}>
                            <SvgImage SVG={Assets.images.JavaBinLogo} height={150} style={styles.image}/>
                        </View>
                    </View>
                </BlurView>


                {/* About JavaZone */}
                <BlurView tint="light" intensity={20} style={{...Assets.styles.section, ...Assets.styles.shadow}}>
                    <Text style={Assets.styles.sectionTitle}>{t('javaZone.about')}</Text>
                    <Text style={Assets.styles.text}>{t('javaZone.about_JavaZone')}</Text>
                    <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>

                    <ToggleText title={t('javaZone.read_more')} toggle={toggleJavaZone} handleToggle={() => handleToggle(t('javaZone.read_more'), toggleJavaZone)}/>

                    <View style={{display: toggleJavaZone ? "flex" : "none"}}>
                        <Text style={Assets.styles.text}>{t('javaZone.goal')}</Text>
                        <Text style={Assets.styles.text}>{t('javaZone.last_year')}</Text>
                        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>

                        <Text style={Assets.styles.sectionSubTitle}>{t('javaZone.who_is_behind')}</Text>
                        <Text style={Assets.styles.text}>{t('javaZone.about_organizers')}</Text>
                        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>

                        <Text style={Assets.styles.sectionSubTitle}>{t('javaZone.core_team_title')}</Text>
                        <View style={{alignSelf: 'center', width: '100%', marginBottom: 20}}>

                            <View style={screenWidth > 834 ? styles.listItemWrapperDesktop : styles.listItemWrapperMobile}>
                                <View style={[styles.listItemGroup, styles.listItemGroupLeft]}>
                                    <View style={styles.listItemContainer}>
                                        <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.leader')}</Text>
                                        <LinkText title={t('javaZone.javaZone_mail')} href={Assets.links.javaZoneMail} style={styles.listItem}/>
                                    </View>
                                    <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.leader_name')}</Text>
                                </View>

                                <View style={[styles.listItemGroup, styles.listItemGroupRight]}>
                                    <View style={styles.listItemContainer}>
                                        <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.program')}</Text>
                                        <LinkText title={t('javaZone.program_mail')} href={Assets.links.programMail} style={styles.listItem}/>
                                    </View>
                                    <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.program_name')}</Text>
                                </View>
                            </View>

                            <View style={screenWidth > 834 ? styles.listItemWrapperDesktop : styles.listItemWrapperMobile}>
                                <View style={[styles.listItemGroup, styles.listItemGroupLeft]}>
                                    <View style={styles.listItemContainer}>
                                        <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.partners')}</Text>
                                        <LinkText title={t('javaZone.partners_mail')} href={Assets.links.partnerMail} style={styles.listItem}/>
                                    </View>
                                    <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.partners_name')}</Text>
                                </View>

                                <View style={[styles.listItemGroup, styles.listItemGroupRight]}>
                                    <View style={styles.listItemContainer}>
                                        <Text style={[styles.listItemRole, styles.listItem]}>{t('javaZone.volunteers')}</Text>
                                        <LinkText title={t('javaZone.volunteers_mail')} href={Assets.links.volunteerMail} style={styles.listItem}/>
                                    </View>
                                    <Text style={[styles.listItemName, styles.listItem]}>{t('javaZone.volunteers_name')}</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={Assets.styles.text}>{t('javaZone.thank_you')}</Text>
                        <Text style={Assets.styles.text}>
                            {t('javaZone.reach_core_team')}
                            <LinkText title={t('javaZone.javaZone_mail')} href={Assets.links.javaZoneMail} style={styles.listItem}/>
                        </Text>
                        <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
                    </View>
                </BlurView>


                {/* Principles */}
                <BlurView tint="light" intensity={20} style={{...Assets.styles.section, ...Assets.styles.shadow}}>
                    <Text style={Assets.styles.sectionTitle}>{t('principles.principles')}</Text>
                    <Text style={Assets.styles.text}>{t('principles.intro')}</Text>

                    <ToggleText title={t('principles.read_more')} toggle={togglePrinciples} handleToggle={() => handleToggle(t('principles.read_more'), togglePrinciples)}/>

                    <View style={{display: togglePrinciples ? "flex" : "none"}}>
                        <Text style={Assets.styles.text}>{t('principles.about')}</Text>
                        <Text style={Assets.styles.intro}>{t('principles.notify')}</Text>
                        <Text style={Assets.styles.sectionSubTitle}>{t('principles.before_conference')}</Text>
                        <Text style={Assets.styles.text}>
                            {t('principles.contact_us_start')}
                            <LinkText title={t('javaZone.javaZone_mail')} href={Assets.links.javaZoneMail} style={styles.listItem}/>
                            {t('principles.contact_us_middle')}
                            <LinkText title={t('principles.java_board_mail')} href={Assets.links.javaBoardMail} style={styles.listItem}/>
                            {t('principles.contact_us_end')}
                        </Text>
                        <Text style={Assets.styles.sectionSubTitle}>{t('principles.during_conference')}</Text>
                        <Text style={Assets.styles.text}>{t('principles.contact_stand')}</Text>
                    </View>
                    <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
                </BlurView>


                {/* Food */}
                <BlurView tint="light" intensity={20} style={{...Assets.styles.section, ...Assets.styles.shadow}}>
                    <Text style={Assets.styles.sectionTitle}>{t('food.food')}</Text>
                    <View style={styles.paragraphImageContainer}>
                        <View style={{display: 'flex', width: screenWidth > 768 ? '75%' : screenWidth-200}}>
                            <Text style={[Assets.styles.text]}>{t('food.about')}</Text>
                            <Text style={[Assets.styles.text, {display: screenWidth > 768 ? 'flex' : 'none'}]}>{t('food.our_chefs')}</Text>
                        </View>
                        <CircleImage source={Assets.images.Doughnut}
                                     size={screenWidth <= 768 ? 100 : 200}
                                     style={{marginHorizontal: screenWidth > 768 ? 'auto' : 20}}
                        />
                    </View>
                    <Text style={[Assets.styles.text, {display: screenWidth <= 768 ? 'flex' : 'none'}]}>{t('food.our_chefs')}</Text>
                    <SvgImage SVG={Assets.UI.DividerDot} height={10} style={{margin: 10}}/>
                </BlurView>


                {/* Volunteers */}
                {/* More sections... */}
                {/* Waste */}
                <BlurView tint="light" intensity={20} style={[Assets.styles.section, Assets.styles.shadow, {marginBottom: 50}]}>
                    <Text style={Assets.styles.sectionTitle}>♻️ Sustainable waste management and recycling at JavaZone</Text>
                    <Text style={Assets.styles.text}>More information to come</Text>
                </BlurView>
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
        marginVertical: 10,
    },
    image: {
        width: Dimensions.get('window').width > 768 ? '50%' : '80%',
        marginBottom: Dimensions.get('window').width > 768 ? 20 : 0,
        objectFit: 'scale-down',
        resizeMode: 'contain',
    },
    listItemWrapperDesktop: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        flexWrap: 'wrap',
        alignSelf: 'center',
    },
    listItemWrapperMobile: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    },
    listItemGroup: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: Dimensions.get('window').width > 834 ? 'row' : 'column',
    },
    listItemGroupLeft:{
        width: Dimensions.get('window').width > 834 ? 360: 240,
        marginLeft: Dimensions.get('window').width > 834 ? 60 : 0,
    },
    listItemGroupRight: {
        width: Dimensions.get('window').width > 834 ? 425: 240,
    },
    listItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    listItem: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'left',
        fontFamily: 'PlayfairDisplay_400Regular',
        fontSize: Dimensions.get('window').width > 768 ? 18 : 16,
    },
    listItemRole: {
        color: Assets.colors.gradient.brown,
    },
    listItemMail: {
        color: Assets.colors.jz2025ThemeColors.vividOrange,
    },
    listItemName: {
        color: Dimensions.get('window').width > 768 ? Assets.colors.jz2025ThemeColors.darkBrown : Assets.colors.gradient.brown,
        marginTop: Dimensions.get('window').width > 768 ? 10 : 0
    },
    paragraphImageContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    }
});

export default Info;