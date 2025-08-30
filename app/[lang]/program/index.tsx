import { ProgramCard, ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { fetchProgram } from '@/api/fetchProgram';
import React, { useEffect, useState } from 'react';
import { Session } from '@/api/types/talksProgram';
import { Text, TouchableOpacity, View, StyleSheet, Animated, Dimensions } from 'react-native';
import { Assets } from '@/Assets';
import FlatList = Animated.FlatList;
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import useProgramFilters from '@/hooks/useProgramFilters';
import { formatSessionInfo, formatSessionTime } from '@/utils/programUtils';
import { useGlobalSearchParams } from 'expo-router';
import lang from '@/app/[lang]';

const Program = () => {
  const { t } = useTranslation();
  const { lang } = useGlobalSearchParams();
  const [sessions, setSessions] = useState<Session[]>([]);
  const { favorites } = useFavoritesContext();
  const {
    setFilter,
    clearFilters,
    showFavoritesOnly,
    setShowFavoritesOnly,
    sortedTimeslots,
    groupedSessions,
  } = useProgramFilters(sessions, favorites);

  // Get screen dimensions for responsive design
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1000;
  const isDesktop = screenWidth >= 1000;

  // Calculate available height for content (screen height minus menu height)
  const menuHeight = isMobile ? 280 : 320;
  const availableHeight = screenHeight - menuHeight;

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

  // Flatten the data structure to avoid nested FlatList
  const flatListData = sortedTimeslots.reduce((acc, time, timeIndex) => {
    // Add time header
    if (time) {
      acc.push({
        id: `time-${time}-${timeIndex}`,
        type: 'timeHeader',
        time,
      });
    }

    // Add sessions for this timeslot
    const sessions = groupedSessions[time] || [];
    sessions.forEach((session, sessionIndex) => {
      acc.push({
        id: `session-${session.id}-${timeIndex}-${sessionIndex}`,
        type: 'session',
        session,
        isDesktop,
      });
    });

    return acc;
  }, [] as any[]);

  const renderFlatListItem = ({ item }: { item: any }) => {
    if (item.type === 'timeHeader') {
      return (
        <Text style={[Assets.styles.sectionSubTitle, { padding: 10, marginTop: 10 }]}>
          {formatSessionTime(item.time,  lang)}
        </Text>
      );
    }

    if (item.type === 'session') {
      return (
        <View style={{ marginTop: 20, width: '100%' }}>
          <ProgramCard
            session={item.session}
            isFavorite={favorites.some((favId) => favId === item.session.id)}
          />
        </View>
      );
    }

    return null;
  };

  const handleFilterFavorites = () => {
    if (showFavoritesOnly) {
      // Going from favorites back to full program
      setShowFavoritesOnly(false);
      // Don't clear filters, just show all sessions with current filters
    } else {
      // Going from full program to favorites
      setShowFavoritesOnly(true);
      // Clear any existing filters when showing favorites
      clearFilters();
    }
  };

  return (
    <ScreenTemplate pageTitle={t('pageTitles.program')} shouldScrollToTop={false}>
      <View style={styles.container}>
        {/* Temple Menu - Mobile-Optimized Temple Design - FIXED */}
        <View style={[templeMenuStyles.menuContainer, isMobile && templeMenuStyles.mobileMenuContainer]}>
          {/* Pyramid - Scaled down for mobile, full size for desktop */}
          <View
            style={[
              templeMenuStyles.topMenu,
              isMobile && templeMenuStyles.mobileTopMenu,
              isTablet && templeMenuStyles.tabletTopMenu,
            ]}
          >
            <View style={[templeMenuStyles.pyramid, templeMenuStyles.pyramidOuterBorder]} />
            <View
              style={[
                templeMenuStyles.pyramid,
                templeMenuStyles.pyramidOuterBackground,
                isMobile
                  ? pyramidMobileStyles.outerBackground
                  : screenWidth > 1240
                    ? pyramidLargeStyles.outerBackground
                    : screenWidth > 1000
                      ? pyramidMediumStyles.outerBackground
                      : pyramidSmallStyles.outerBackground,
              ]}
            />
            <View
              style={[
                templeMenuStyles.pyramid,
                templeMenuStyles.pyramidInnerBorder,
                isMobile
                  ? pyramidMobileStyles.innerBorder
                  : screenWidth > 1240
                    ? pyramidLargeStyles.innerBorder
                    : screenWidth > 1000
                      ? pyramidMediumStyles.innerBorder
                      : pyramidSmallStyles.innerBorder,
              ]}
            />
            <View
              style={[
                templeMenuStyles.pyramid,
                templeMenuStyles.pyramidInnerBackground,
                isMobile
                  ? pyramidMobileStyles.innerBackground
                  : screenWidth > 1240
                    ? pyramidLargeStyles.innerBackground
                    : screenWidth > 1000
                      ? pyramidMediumStyles.innerBackground
                      : pyramidSmallStyles.innerBackground,
              ]}
            />

            <TouchableOpacity onPress={handleFilterFavorites} style={templeMenuStyles.pyramidContent}>
              <Text
                style={[
                  templeMenuStyles.favoriteTitle,
                  isMobile && templeMenuStyles.mobileFavoriteTitle,
                  showFavoritesOnly && templeMenuStyles.fullProgramTitle,
                  showFavoritesOnly && isMobile && templeMenuStyles.mobileFullProgramTitle,
                  showFavoritesOnly && isTablet && templeMenuStyles.tabletFullProgramTitle,
                ]}
              >
                {showFavoritesOnly ? "FULL PROGRAM" : "FAVORITES"}
              </Text>
              <Text
                style={[
                  templeMenuStyles.favoriteSubtitle,
                  isMobile && templeMenuStyles.mobileFavoriteSubtitle,
                  showFavoritesOnly && templeMenuStyles.fullProgramSubtitle,
                  showFavoritesOnly && isMobile && templeMenuStyles.mobileFullProgramSubtitle,
                  showFavoritesOnly && isTablet && templeMenuStyles.tabletFullProgramSubtitle,
                ]}
              >
                {showFavoritesOnly ? "OMNIA PROGRAMMATA" : "RĒS SELECTAE"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Menu - Compact for mobile */}
          <View
            style={[templeMenuStyles.bottomMenu, Assets.styles.shadow, isMobile && templeMenuStyles.mobileBottomMenu]}
          >
            {/* Mobile Layout: Compact Grid */}
            {isMobile ? (
              <View style={templeMenuStyles.mobileFilterGrid}>
                {/* Date filters row - 3 small boxes */}
                <View style={templeMenuStyles.dateFilterRow}>
                  {dateFilters.slice(0, 3).map((filter) => (
                    <TouchableOpacity
                      key={filter.id}
                      style={templeMenuStyles.smallDateButton}
                      onPress={() => setFilter('date', filter.id)}
                    >
                      <Text style={templeMenuStyles.smallDateButtonText}>{filter.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Live button - full width below date row */}
                <TouchableOpacity
                  style={templeMenuStyles.liveButtomFullWidth}
                  onPress={() => setFilter('date', 'live')}
                >
                  <Text style={templeMenuStyles.liveButtonText}>Live</Text>
                </TouchableOpacity>

                {/* Format filters row */}
                <View style={templeMenuStyles.formatFilterRow}>
                  {formatFilters.map((format) => (
                    <TouchableOpacity
                      key={format.id}
                      style={templeMenuStyles.formatButton}
                      onPress={() => setFilter('format', format.id)}
                    >
                      <Text style={templeMenuStyles.formatButtonText}>{format.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Reset button - full width below format row */}
                <View style={{marginTop: 5, width: '100%'}}>
                  <TouchableOpacity
                    style={templeMenuStyles.liveButtomFullWidth}
                    onPress={() => clearFilters()}
                  >
                    <Text style={templeMenuStyles.liveButtonText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              /* Desktop/Tablet Layout - Keep existing structure */
              <>
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
              </>
            )}
          </View>
        </View>

        {/* Content Area - FIXED PILLARS WITH SCROLLABLE CONTENT */}
        <View style={[styles.pillarContentContainer, isMobile && styles.mobilePillarContentContainer]}>
          {/* Left Pillar - FIXED at left edge */}
          <View
            style={[
              styles.pillar,
              Assets.styles.shadow,
              isMobile && styles.mobilePillar,
              isTablet && styles.tabletPillar,
              { height: availableHeight, left: 0 }
            ]}
          >
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
          </View>

          {/* SCROLLABLE Main Content Area - Independent Scroll */}
          <View style={[
            styles.mainContentContainer,
            isMobile && styles.mobileMainContentContainer,
            { height: availableHeight }
          ]}>
            <FlatList
              style={styles.mainContentFlatList}
              contentContainerStyle={styles.mainContentScrollContainer}
              data={flatListData}
              renderItem={renderFlatListItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={true}
              scrollIndicatorInsets={{ right: 1 }}
              nestedScrollEnabled={false}
              bounces={true}
              scrollEventThrottle={16}
              removeClippedSubviews={true}
              maxToRenderPerBatch={10}
              initialNumToRender={15}
              windowSize={10}
            />
          </View>

          {/* Right Pillar - FIXED at right edge */}
          <View
            style={[
              styles.pillar,
              Assets.styles.shadow,
              isMobile && styles.mobilePillar,
              isTablet && styles.tabletPillar,
              { height: availableHeight, right: 0 }
            ]}
          >
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
            <View style={[styles.pillarLine, isMobile && styles.mobilePillarLine]} />
          </View>
        </View>
      </View>
    </ScreenTemplate>
  );
};

const pyramidLargeStyles = StyleSheet.create({
  outerBackground: {
    borderLeftWidth: Dimensions.get('window').width > 1365 ? 600 : 500,
    borderRightWidth: Dimensions.get('window').width > 1365 ? 600 : 500,
    borderBottomWidth: Dimensions.get('window').width > 1365 ? 120 : 100,
  },
  innerBorder: {
    borderLeftWidth: Dimensions.get('window').width > 1365 ? 530 : 455,
    borderRightWidth: Dimensions.get('window').width > 1365 ? 530 : 455,
    borderBottomWidth: Dimensions.get('window').width > 1365 ? 110 : 90,
  },
  innerBackground: {
    borderLeftWidth: Dimensions.get('window').width > 1365 ? 521 : 441,
    borderRightWidth: Dimensions.get('window').width > 1365 ? 521 : 441,
    borderBottomWidth: Dimensions.get('window').width > 1365 ? 108 : 88,
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

const pyramidMobileStyles = StyleSheet.create({
  outerBackground: {
    borderLeftWidth: 185,
    borderRightWidth: 185,
    borderBottomWidth: 85,
  },
  innerBorder: {
    borderLeftWidth: 165,
    borderRightWidth: 165,
    borderBottomWidth: 70,
  },
  innerBackground: {
    borderLeftWidth: 160,
    borderRightWidth: 160,
    borderBottomWidth: 63,
  },
});

const templeMenuStyles = StyleSheet.create({
  menuContainer: {
    width: Dimensions.get('window').width < 768
      ? 370 // Mobile: 185 + 185 = 370
      : Dimensions.get('window').width > 1240
        ? (Dimensions.get('window').width > 1365 ? 1200 : 1000) // Large: 600 + 600 = 1200 or 500 + 500 = 1000
        : Dimensions.get('window').width > 1000
          ? (Dimensions.get('window').width > 1200 ? 900 : 800) // Medium: 450 + 450 = 900 or 400 + 400 = 800
          : (Dimensions.get('window').width > 950 ? 700 : 600), // Small: 350 + 350 = 700 or 300 + 300 = 600
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 90,
  },
  mobileMenuContainer: {
    // Specific styles for mobile menu container
    width: '100%',
    padding: 0,
    alignItems: 'flex-start',
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
  mobileTopMenu: {
    // Specific styles for mobile top menu
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabletTopMenu: {
    // Smaller top menu for tablets
    height: 120,
  },
  pyramid: {
    position: 'absolute',
    width: -0,
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
    bottom: Dimensions.get('window').width > 1300 ? 20 : 10,
    alignItems: 'center',
    zIndex: 50,
  },
  favoriteTitle: {
    fontSize: Dimensions.get('window').width > 1300 ? 24 : 22,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
  },
  mobileFavoriteTitle: {
    // Specific styles for mobile favorite title
    fontSize: 18,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  fullProgramTitle: {
    fontSize: 16, // Smaller font size for "FULL PROGRAM" when favorites are shown
  },
  mobileFullProgramTitle: {
    // Specific styles for mobile "FULL PROGRAM" title
    fontSize: 16,
  },
  tabletFullProgramTitle: {
    // Specific styles for tablet "FULL PROGRAM" title
    fontSize: 18,
  },
  favoriteSubtitle: {
    fontSize: Dimensions.get('window').width > 1300 ? 22 : 20,
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontFamily: 'Cinzel_400Regular',
    textTransform: 'uppercase',
  },
  mobileFavoriteSubtitle: {
    // Specific styles for mobile favorite subtitle
    fontSize: 14,
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontFamily: 'Cinzel_400Regular',
    textTransform: 'uppercase',
    marginTop: 2,
  },
  fullProgramSubtitle: {
    // Styles for the subtitle when showing "FULL PROGRAM"
    fontSize: 14,
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontFamily: 'Cinzel_400Regular',
    textTransform: 'uppercase',
  },
  mobileFullProgramSubtitle: {
    // Specific styles for mobile "FULL PROGRAM" subtitle
    fontSize: 12,
  },
  tabletFullProgramSubtitle: {
    // Specific styles for tablet "FULL PROGRAM" subtitle
    fontSize: 14,
  },
  mobileFavoritesButton: {
    // Styles for the favorites button on mobile
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
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
  mobileBottomMenu: {
    // Specific styles for mobile bottom menu
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    padding: 0,
  },
  menuGroup: {
    flex: 1,
    flexDirection: Dimensions.get('window').width > 1000 ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  mobileMenuGroup: {
    // Specific styles for mobile menu group
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
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
  mobileMenuGroupLabel: {
    // Specific styles for mobile menu group label
    fontSize: 16,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  menuGroupContent: {
    height: Dimensions.get('window').width > 1300 ? '100%' : 'auto',
    width: Dimensions.get('window').width > 1000 ? '100%' : '89%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
  },
  mobileMenuGroupContent: {
    // Specific styles for mobile menu group content
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
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
  mobileButtonWrapper: {
    // Specific styles for mobile button wrapper
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Assets.colors.jz2025ThemeColors.sheetShadow,
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: Dimensions.get('window').width > 1403 ? 20 : Dimensions.get('window').width > 1000 ? 18 : 16,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
    padding: Dimensions.get('window').width > 1000 ? 5 : 0,
  },
  mobileButtonTitle: {
    // Specific styles for mobile button title
    fontSize: 16,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
    textAlign: 'center',
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
  mobileFilterGrid: {
    width: '100%',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dateFilterRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  smallDateButton: {
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
  },
  smallDateButtonText: {
    fontSize: 14,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
  },
  liveButtomFullWidth: {
    width: '100%',
    backgroundColor: Assets.colors.jz2025ThemeColors.darkRed,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  liveButtonText: {
    fontSize: 16,
    color: Assets.colors.jz2025ThemeColors.sheet,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
  },
  formatFilterRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  formatButton: {
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
  },
  formatButtonText: {
    fontSize: 14,
    textAlign: 'center',
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
  },
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pillarContentContainer: {
    width: Dimensions.get('window').width < 768
      ? 370 // Mobile: 185 + 185 = 370
      : Dimensions.get('window').width > 1240
        ? (Dimensions.get('window').width > 1365 ? 1200 : 1000) // Large: 600 + 600 = 1200 or 500 + 500 = 1000
        : Dimensions.get('window').width > 1000
          ? (Dimensions.get('window').width > 1200 ? 900 : 800) // Medium: 450 + 450 = 900 or 400 + 400 = 800
          : (Dimensions.get('window').width > 950 ? 700 : 600), // Small: 350 + 350 = 700 or 300 + 300 = 600
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
  },
  mobilePillarContentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 370, // Mobile temple width: 185 + 185
    justifyContent: 'space-between',
  },
  pillar: {
    width: Dimensions.get('window').width > 1000 ? 50 : 40,
    height: '100%',
    padding: 3,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  mobilePillar: {
    width: 35,
    height: '100%',
    padding: 2,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  tabletPillar: {
    width: 45,
  },
  pillarLine: {
    width: 1,
    height: '100%',
    backgroundColor: Assets.colors.jz2025ThemeColors.sheetShadow,
  },
  mobilePillarLine: {
    width: 1,
    height: '100%',
    backgroundColor: Assets.colors.jz2025ThemeColors.lightBrown,
  },
  gallery: {
    gap: 10,
    marginTop: 10,
  },
  // Main content container - holds the FlatList and enables independent scrolling
  mainContentContainer: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginHorizontal: Dimensions.get('window').width < 768 ? 35 : 50, // Account for pillar width
    paddingHorizontal: 10,
  },
  mobileMainContentContainer: {
    width: '100%',
    flex: 1,
    marginHorizontal: 35, // Account for mobile pillar width
    paddingHorizontal: 10,
  },
  // FlatList styles for independent scrolling
  mainContentFlatList: {
    width: '100%',
    height: '100%',
    flex: 1,
    scrollbarColor: `${Assets.colors.jz2025ThemeColors.crimsonRed} transparent`
  },
  // Content container for the FlatList
  mainContentScrollContainer: {
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Program;
