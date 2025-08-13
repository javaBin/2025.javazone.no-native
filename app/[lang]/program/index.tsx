import { ProgramCard, ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { fetchProgram } from '@/api/fetchProgram';
import React, { useEffect, useState } from 'react';
import { Session } from '@/api/types/talksProgram';
import {Text, TouchableOpacity, View, StyleSheet, Animated, Dimensions} from 'react-native';
import { Assets } from "@/Assets";
import FlatList = Animated.FlatList;
import { useFavoritesContext } from "@/contexts/FavoritesContext";
import useProgramFilters from "@/hooks/useProgramFilters";
import { dayAndTimeFormatWithMonth } from "@/utils/programUtils";

const Program = () => {
    const { t } = useTranslation();
    const [sessions, setSessions] = useState<Session[]>([]);
    const { favorites } = useFavoritesContext();
    const {
        filters, // not used
        setFilter,
        clearFilters,
        showFavoritesOnly,
        setShowFavoritesOnly,
        filteredSessions, // not used
        sortedTimeslots,
        groupedSessions,
    } = useProgramFilters(sessions, favorites);

    const dateFilters = [
        { id: 'tue', label: 'Sep 2', labelGreek: 'a.d. IV Non. Sept.' },
        { id: 'wed', label: 'Sep 3', labelGreek: 'a.d. III Non. Sept.' },
        { id: 'thur', label: 'Sep 4', labelGreek: 'prid. Non. Sept.' },
        { id: 'live', label: 'Live', labelGreek: 'praesēns' },
    ];

    const formatFilters = [
        { id: 'workshop', label: 'Workshop', labelGreek: 'laboratorium' },
        { id: 'presentation', label: t('program.presentation'), labelGreek: 'expositiō' },
        { id: 'lightning-talk', label: 'Lightning Talk', labelGreek: 'orātiō brevis' },
    ];

    useEffect(() => {
        fetchProgram()
            .then((data) => {
                setSessions(data.sessions);
            })
            .catch((error) => {
                console.error('Error fetching program:', error);
            });
    }, []);

    const flatListData = sortedTimeslots.map((time, index) => ({
        id: `${time}-${index}`,
        time,
        sessions: groupedSessions[time],
    }));

    const renderTimeslotItem = ({ item }: { item: { id: string; time: string; sessions: Session[] } }) => (
        <>
            {item.time && (
                <Text style={[Assets.styles.sectionSubTitle, {padding: 10}]}>
                    {dayAndTimeFormatWithMonth.format(new Date(item.time))}
                </Text>
            )}
            <FlatList
                data={item.sessions}
                renderItem={(sessionItem) =>
                    <ProgramCard key={sessionItem.item.id} session={sessionItem.item} isFavorite={favorites.some((favId) => favId === sessionItem.item.id)}/>
                    }
                keyExtractor={(item) => item.id}
                numColumns={Dimensions.get('window').width > 1000 ? 2 : 1}
                columnWrapperStyle={Dimensions.get('window').width > 1000 && {margin: 10}}
                contentContainerStyle={styles.gallery}
            />
        </>
    );

    const handleFilterFavorites = () => {
        setShowFavoritesOnly(!showFavoritesOnly);
        if (!showFavoritesOnly) clearFilters();
    }

    return (
        <ScreenTemplate pageTitle={t('pageTitles.program')} shouldScrollToTop={true} dangerousOverride={true}>
            <View style={styles.container}>
                <View style={templeMenuStyles.menuContainer}>

                    <View style={templeMenuStyles.topMenu}>
                        <View style={[templeMenuStyles.pyramid, templeMenuStyles.pyramidOuterBorder]} />
                        <View style={[
                            templeMenuStyles.pyramid,
                            templeMenuStyles.pyramidOuterBackground,
                            Dimensions.get('window').width > 1240 ?
                                pyramidLargeStyles.outerBackground :
                                Dimensions.get('window').width > 1000 ?
                                    pyramidMediumStyles.outerBackground :
                                    pyramidSmallStyles.outerBackground]} />
                        <View style={[
                            templeMenuStyles.pyramid,
                            templeMenuStyles.pyramidInnerBorder,
                            Dimensions.get('window').width > 1240 ?
                                pyramidLargeStyles.innerBorder :
                                Dimensions.get('window').width > 1000 ?
                                    pyramidMediumStyles.innerBorder :
                                    pyramidSmallStyles.innerBorder]} />
                        <View style={[
                            templeMenuStyles.pyramid,
                            templeMenuStyles.pyramidInnerBackground,
                            Dimensions.get('window').width > 1240 ?
                                pyramidLargeStyles.innerBackground :
                                Dimensions.get('window').width > 1000 ?
                                    pyramidMediumStyles.innerBackground :
                                    pyramidSmallStyles.innerBackground]} />

                        <TouchableOpacity onPress={handleFilterFavorites} style={templeMenuStyles.pyramidContent}>
                            <Text style={templeMenuStyles.favoriteTitle}>FAVORITES</Text>
                            <Text style={templeMenuStyles.favoriteSubtitle}>RĒS SELECTAE</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[templeMenuStyles.bottomMenu, Assets.styles.shadow]}>
                        <View style={[templeMenuStyles.menuGroup, templeMenuStyles.dateMenuGroup]}>
                            <Text style={templeMenuStyles.menuGroupLabel}>Date</Text>

                            <View style={templeMenuStyles.menuGroupContent}>
                                {dateFilters.map((filter) => (
                                    <TouchableOpacity
                                        key={filter.id}
                                        style={templeMenuStyles.buttonWrapper}
                                        onPress={() => setFilter('date', filter.id)}
                                    >
                                        <Text style={templeMenuStyles.buttonTitle}>{filter.label}</Text>
                                        <View style={templeMenuStyles.buttonDivider} />
                                        <Text style={templeMenuStyles.buttonSubtitle}>{filter.labelGreek}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <View style={[templeMenuStyles.menuGroup, templeMenuStyles.typeMenuGroup]}>
                            <Text style={templeMenuStyles.menuGroupLabel}>Type</Text>

                            <View style={templeMenuStyles.menuGroupContent}>
                                {formatFilters.map((format) => (
                                    <TouchableOpacity
                                        key={format.id}
                                        style={templeMenuStyles.buttonWrapper}
                                        onPress={() => setFilter('format', format.id)}
                                    >
                                        <Text style={templeMenuStyles.buttonTitle}>{format.label}</Text>
                                        <View style={templeMenuStyles.buttonDivider} />
                                        <Text style={templeMenuStyles.buttonSubtitle}>{format.labelGreek}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.pillarContentContainer}>
                    <View style={[styles.pillar, Assets.styles.shadow]}>
                        <View style={styles.pillarLine}/>
                        <View style={styles.pillarLine}/>
                        <View style={styles.pillarLine}/>
                    </View>

                    <FlatList
                        data={flatListData}
                        renderItem={renderTimeslotItem}
                        keyExtractor={(item) => item.id}
                        numColumns={1}
                    />

                    {/*<FlatList
                        data={mockupData}
                        renderItem={(item) =>
                            <BlurView
                                tint="light"
                                intensity={Platform.OS === 'web' ? 30 : 40}
                                experimentalBlurMethod={'dimezisBlurView'}
                                style={[cardStyles.container, Assets.styles.shadow]}>

                                <View style={cardStyles.horizontalSpaceBetween}>
                                    <Text style={cardStyles.room}>{item.item.room}</Text>
                                    <Text style={cardStyles.duration}>{item.item.length}</Text>
                                </View>

                                <View style={cardStyles.horizontalSpaceBetween}>
                                    <Text style={cardStyles.title}>{item.item.title}</Text>
                                    <Pressable onPress={toggleFavorite}>
                                        <SvgImage SVG={item.item.isFavorite ? Assets.icons.HeartFilled : Assets.icons.HeartVoid} height={40} width={40} />
                                    </Pressable>
                                </View>

                                <Text style={cardStyles.type}>{item.item.language}{' '}{item.item.format}</Text>
                                <View style={cardStyles.horizontalStart}>
                                    <Text style={cardStyles.author}>{item.item.author}</Text>
                                    <SvgImage SVG={Assets.icons.XLogo} height={20} width={20} style={cardStyles.social} />
                                </View>

                            </BlurView>}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        columnWrapperStyle={{margin: 10}}
                        contentContainerStyle={styles.gallery}
                    />*/}

                    <View style={[styles.pillar, Assets.styles.shadow]}>
                        <View style={styles.pillarLine}/>
                        <View style={styles.pillarLine}/>
                        <View style={styles.pillarLine}/>
                    </View>
                </View>
            </View>
        </ScreenTemplate>
    );
};

const pyramidLargeStyles = StyleSheet.create({
    outerBackground: {
        borderLeftWidth: Dimensions.get('window').width > 1365 ? 550 : 500,
        borderRightWidth: Dimensions.get('window').width > 1365 ? 550 : 500,
        borderBottomWidth: Dimensions.get('window').width > 1365 ? 100 : 100,
    },
    innerBorder: {
        borderLeftWidth: Dimensions.get('window').width > 1365 ? 500 : 455,
        borderRightWidth: Dimensions.get('window').width > 1365 ? 500 : 455,
        borderBottomWidth: Dimensions.get('window').width > 1365 ? 90 : 90,
    },
    innerBackground: {
        borderLeftWidth: Dimensions.get('window').width > 1365 ? 491 : 441,
        borderRightWidth: Dimensions.get('window').width > 1365 ? 491 : 441,
        borderBottomWidth: Dimensions.get('window').width > 1365 ? 88 : 88,
    },
});

const pyramidMediumStyles = StyleSheet.create({
    outerBackground: {
        borderLeftWidth: Dimensions.get('window').width > 1200 ? 450 : 400,
        borderRightWidth: Dimensions.get('window').width > 1200 ? 450 : 400,
        borderBottomWidth: Dimensions.get('window').width > 1200 ? 100 : 100,
    },
    innerBorder: {
        borderLeftWidth: Dimensions.get('window').width > 1200 ? 410 : 365,
        borderRightWidth: Dimensions.get('window').width > 1200 ? 410 : 365,
        borderBottomWidth: Dimensions.get('window').width > 1200 ? 90 : 90,
    },
    innerBackground: {
        borderLeftWidth: Dimensions.get('window').width > 1200 ? 396 : 351,
        borderRightWidth: Dimensions.get('window').width > 1200 ? 396 : 351,
        borderBottomWidth: Dimensions.get('window').width > 1200 ? 88 : 88,
    },
});

const pyramidSmallStyles = StyleSheet.create({
    outerBackground: {
        borderLeftWidth: Dimensions.get('window').width > 950 ? 350 : 300,
        borderRightWidth: Dimensions.get('window').width > 950 ? 350 : 300,
        borderBottomWidth: Dimensions.get('window').width > 950 ? 100 : 100,
    },
    innerBorder: {
        borderLeftWidth: Dimensions.get('window').width > 950 ? 305 : 265,
        borderRightWidth: Dimensions.get('window').width > 950 ? 305 : 265,
        borderBottomWidth: Dimensions.get('window').width > 950 ? 90 : 90,
    },
    innerBackground: {
        borderLeftWidth: Dimensions.get('window').width > 950 ? 298 : 258,
        borderRightWidth: Dimensions.get('window').width > 950 ? 298 : 258,
        borderBottomWidth: Dimensions.get('window').width > 950 ? 88 : 88,
    },
});

const templeMenuStyles = StyleSheet.create({
    menuContainer: {
        width: Dimensions.get('window').width > 1000 ? '100%' : '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        zIndex: 90,
    },
    topMenu: {
        width: '100%',
        height: 150,
        aspectRatio: 5, // controls height of triangle
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: 20,
    },
    pyramid: {
        position: 'absolute',
        width: 0,
        height: 0,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderStyle: 'solid',
    },
    pyramidOuterBorder: {
        bottom: 0,
        //borderLeftWidth: 555,
        //borderRightWidth: 555,
        //borderBottomWidth: 101,
        borderBottomColor: Assets.colors.jz2025ThemeColors.lightBrown,
        zIndex: 10,
    },
    pyramidOuterBackground: {
        bottom: 0,
        borderBottomColor: Assets.colors.jz2025ThemeColors.sheet,
        zIndex: 20,
    },
    pyramidInnerBorder: {
        bottom: 5,
        borderBottomColor: Assets.colors.jz2025ThemeColors.sheetShadow,
        zIndex: 30,
    },
    pyramidInnerBackground: {
        bottom: 6,
        borderBottomColor: Assets.colors.jz2025ThemeColors.sheet,
        zIndex: 40,
    },
    pyramidContent: {
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
        zIndex: 50,
    },
    favoriteTitle: {
        fontSize: Dimensions.get('window').width > 1300 ? 24 : 22,
        color: Assets.colors.jz2025ThemeColors.darkRed,
        fontFamily: 'PlayfairDisplay_400Regular_Italic',
        textTransform: 'uppercase',
    },
    favoriteSubtitle: {
        fontSize: Dimensions.get('window').width > 1300 ? 22 : 20,
        color: Assets.colors.jz2025ThemeColors.lightBrown,
        fontFamily: 'Cinzel_400Regular',
        textTransform: 'uppercase',
    },
    bottomMenu: {
        display: 'flex',
        flexDirection: Dimensions.get('window').width > 1300 ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        minHeight: Dimensions.get('window').width > 1300 ? 150 : 'auto',
        padding: 5,
        borderRadius: 10,
        backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
        borderStyle: 'solid',
        //borderWidth: 1,
        borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
        zIndex: 20,
    },
    menuGroup: {
        flex: 1,
        flexDirection: Dimensions.get('window').width > 1000 ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    dateMenuGroup: {
        width: Dimensions.get('window').width > 1300 ? 'auto' : '100%',
        maxWidth: Dimensions.get('window').width > 1300 ? '48%' : '100%',
    },
    typeMenuGroup: {
        width: Dimensions.get('window').width > 1300 ? 'auto' : '100%',
        maxWidth: Dimensions.get('window').width > 1300 ? '51%' : '100%',
        paddingTop: Dimensions.get('window').width > 1300 ? 0 : 5,
    },
    menuGroupLabel: {
        width: Dimensions.get('window').width > 1000 ? '100%' : 70,
        height: Dimensions.get('window').width > 1000 ? 'auto' : '100%',
        marginRight: Dimensions.get('window').width > 1000 ? 5 : 0,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Assets.colors.jz2025ThemeColors.sheetShadow,
        color: Assets.colors.jz2025ThemeColors.lightBrown,
        fontFamily: 'PlayfairDisplay_400Regular',
        textAlign: 'center',
        alignContent: 'center',
        fontSize: Dimensions.get('window').width > 1300 ? 22 : Dimensions.get('window').width > 1000 ? 20 : 18,
        paddingVertical: Dimensions.get('window').width > 1300 ? 5 : 2,
    },
    menuGroupContent: {
        height: Dimensions.get('window').width > 1300 ? '100%' : 'auto',
        width: Dimensions.get('window').width > 1000 ? '100%' : '89%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Assets.colors.jz2025ThemeColors.sheetShadow,
        paddingHorizontal: 5,
        paddingVertical: Dimensions.get('window').width > 1300 ? 10 : Dimensions.get('window').width > 1000 ? 5 : 2,
    },
    buttonTitle: {
        fontSize: Dimensions.get('window').width > 1403 ? 20 : Dimensions.get('window').width > 1000 ? 18 : 16,
        color: Assets.colors.jz2025ThemeColors.darkRed,
        fontFamily: 'PlayfairDisplay_400Regular_Italic',
        textTransform: 'uppercase',
        padding: Dimensions.get('window').width > 1000 ? 5 : 0,
    },
    buttonDivider: {
        display: Dimensions.get('window').width > 1000 ? 'flex' : 'none',
        borderTopWidth: 1,
        borderTopColor: Assets.colors.jz2025ThemeColors.sheetShadow,
        width: '80%',
    },
    buttonSubtitle: {
        fontSize: Dimensions.get('window').width > 1376 ? 14 : 12,
        color: Assets.colors.jz2025ThemeColors.lightBrown,
        fontFamily: 'Cinzel_400Regular',
        paddingTop: 5,
    },
})

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    pillarContentContainer: {
        width: Dimensions.get('window').width > 1000 ? '100%' : '90%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: "center",
        flexDirection: 'row',
    },
    pillar: {
        width: Dimensions.get('window').width > 1000 ? 80 : 70,
        height: '100%',
        marginHorizontal: 10,
        padding: 5,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
        backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    pillarLine: {
        width: 1,
        height: '100%',
        backgroundColor: Assets.colors.jz2025ThemeColors.sheetShadow
    },
    gallery: {
        gap: 10,
        marginTop: 10,
    },
})


export default Program;
