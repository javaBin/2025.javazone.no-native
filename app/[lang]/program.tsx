import { HoldTheDate, ProgramCard, ScreenTemplate } from '@/components';
import { useTranslation } from 'react-i18next';
import { fetchProgram } from '@/api/fetchProgram';
import React, { useEffect, useState } from 'react';
import { Session, TalksProgram } from '@/api/types/talksProgram';
import { Text, TouchableOpacity, View, StyleSheet, Animated, Platform } from 'react-native';
import { Assets } from '@/Assets';
import FlatList = Animated.FlatList;
import { SectionBox } from '@/UI';
import { BlurView } from 'expo-blur';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import useProgramFilters from '@/hooks/useProgramFilters';
import { dayAndTimeFormatWithMonth } from '@/utils/programUtils';

const dateFilters = [
  { id: 'tue', label: 'Sep 2', labelGreek: 'a.d. IV Non. Sept.' },
  { id: 'wed', label: 'Sep 3', labelGreek: 'a.d. III Non. Sept.' },
  { id: 'thur', label: 'Sep 4', labelGreek: 'prid. Non. Sept.' },
  { id: 'live', label: 'Live', labelGreek: 'praesēns' },
];

const formatFilters = [
  { id: 'workshop', label: 'Workshop', labelGreek: 'laboratorium' },
  { id: 'presentation', label: 'Presentation', labelGreek: 'expositiō' },
  { id: 'lightning-talk', label: 'Lightning talk', labelGreek: 'orātiō brevis' },
];

const Program = () => {
  const { t } = useTranslation();
  const [sessions, setSessions] = useState<Session[]>([]);
  const { favorites } = useFavoritesContext();
  const {
    filters,
    setFilter,
    clearFilters,
    showFavoritesOnly,
    setShowFavoritesOnly,
    filteredSessions,
    sortedTimeslots,
    groupedSessions,
  } = useProgramFilters(sessions, favorites);

  useEffect(() => {
    fetchProgram().then((data) => setSessions(data.sessions));
  }, []);

  // Prepare data for FlatList
  const flatListData = sortedTimeslots.map((time, index) => ({
    id: `${time}-${index}`,
    time,
    sessions: groupedSessions[time],
  }));

  const renderTimeslotItem = ({ item }: { item: { id: string; time: string; sessions: Session[] } }) => (
    <View style={styles.timeslotContainer}>
      {item.time && (
        <Text style={[Assets.styles.sectionSubTitle, { margin: 30 }]}>
          {dayAndTimeFormatWithMonth.format(new Date(item.time))}
        </Text>
      )}
      <View style={[styles.card]}>
        {item.sessions.map((session) => (
          <ProgramCard
            key={session.id}
            session={session}
            isFavorite={favorites.some((favId) => favId === session.id)}
          />
        ))}
      </View>
    </View>
  );

  return (
    <ScreenTemplate pageTitle={t('pageTitles.program')} shouldScrollToTop={true} dangerousOverride={true}>
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          <View style={styles.topMenu}>
            <View style={styles.pyramidOuterBorder} />
            <View style={styles.pyramidOuterBackground} />
            <View style={styles.pyramidInnerBorder} />
            <View style={styles.pyramidInnerBackground} />

            <TouchableOpacity
              onPress={() => {
                setShowFavoritesOnly(!showFavoritesOnly);
                if (!showFavoritesOnly) clearFilters();
              }}
              style={styles.pyramidContent}
            >
              <Text style={styles.favoriteTitle}>FAVORITES</Text>
              <Text style={styles.favoriteSubtitle}>RĒS SELECTAE</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.bottomMenu, Assets.styles.shadow]}>
            <View style={[styles.menuGroup, styles.dateMenuGroup]}>
              <Text style={styles.menuGroupLabel}>Date</Text>

              <View style={styles.menuGroupContent}>
                {dateFilters.map((filter) => (
                  <TouchableOpacity
                    key={filter.id}
                    style={styles.buttonWrapper}
                    onPress={() => setFilter('date', filter.id)}
                  >
                    <Text style={styles.buttonTitle}>{filter.label}</Text>
                    <View style={styles.buttonDivider} />
                    <Text style={styles.buttonSubtitle}>{filter.labelGreek}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={[styles.menuGroup, styles.typeMenuGroup]}>
              <Text style={styles.menuGroupLabel}>Type</Text>

              <View style={styles.menuGroupContent}>
                {formatFilters.map((format) => (
                  <TouchableOpacity
                    key={format.id}
                    style={styles.buttonWrapper}
                    onPress={() => setFilter('format', format.id)}
                  >
                    <Text style={styles.buttonTitle}>{format.label}</Text>
                    <View style={styles.buttonDivider} />
                    <Text style={styles.buttonSubtitle}>{format.labelGreek}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>

        <View style={styles.pillarContentContainer}>
          <View style={[styles.pillar, Assets.styles.shadow]}>
            <View style={styles.pillarLine} />
            <View style={styles.pillarLine} />
            <View style={styles.pillarLine} />
          </View>

          <FlatList
            data={flatListData}
            renderItem={renderTimeslotItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ margin: 10 }}
            contentContainerStyle={styles.gallery}
          />

          <View style={[styles.pillar, Assets.styles.shadow]}>
            <View style={styles.pillarLine} />
            <View style={styles.pillarLine} />
            <View style={styles.pillarLine} />
          </View>
        </View>
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  menuContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  pyramidOuterBorder: {
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: 0,
    //borderLeftWidth: 555,
    //borderRightWidth: 555,
    //borderBottomWidth: 101,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Assets.colors.jz2025ThemeColors.lightBrown,
    borderStyle: 'solid',
    zIndex: 10,
  },
  pyramidOuterBackground: {
    position: 'absolute',
    bottom: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 550,
    borderRightWidth: 550,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Assets.colors.jz2025ThemeColors.sheet,
    borderStyle: 'solid',
    zIndex: 20,
  },
  pyramidInnerBorder: {
    position: 'absolute',
    bottom: 5,
    width: 0,
    height: 0,
    borderLeftWidth: 500,
    borderRightWidth: 500,
    borderBottomWidth: 90,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Assets.colors.jz2025ThemeColors.sheetShadow,
    borderStyle: 'solid',
    zIndex: 30,
  },
  pyramidInnerBackground: {
    position: 'absolute',
    bottom: 6,
    width: 0,
    height: 0,
    borderLeftWidth: 491,
    borderRightWidth: 491,
    borderBottomWidth: 88,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Assets.colors.jz2025ThemeColors.sheet,
    borderStyle: 'solid',
    zIndex: 40,
  },
  pyramidContent: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    zIndex: 50,
  },
  favoriteTitle: {
    fontSize: 24,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
  },
  favoriteSubtitle: {
    fontSize: 22,
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontFamily: 'Cinzel_400Regular',
    textTransform: 'uppercase',
  },
  bottomMenu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    minHeight: 150,
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 5,
  },
  dateMenuGroup: {
    maxWidth: '48%',
  },
  typeMenuGroup: {
    maxWidth: '51%',
  },
  menuGroupLabel: {
    width: '100%',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Assets.colors.jz2025ThemeColors.sheetShadow,
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontFamily: 'PlayfairDisplay_400Regular',
    textAlign: 'center',
    fontSize: 22,
    paddingVertical: 5,
  },
  menuGroupContent: {
    height: '100%',
    width: '100%',
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
    paddingVertical: 10,
  },
  buttonTitle: {
    fontSize: 20,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    fontFamily: 'PlayfairDisplay_400Regular_Italic',
    textTransform: 'uppercase',
    padding: 5,
  },
  buttonDivider: {
    borderTopWidth: 1,
    borderTopColor: Assets.colors.jz2025ThemeColors.sheetShadow,
    width: '80%',
  },
  buttonSubtitle: {
    fontSize: 14,
    color: Assets.colors.jz2025ThemeColors.lightBrown,
    fontFamily: 'Cinzel_400Regular',
    paddingTop: 5,
  },
  pillarContentContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pillar: {
    width: 80,
    height: '100%',
    marginHorizontal: 10,
    padding: 5,
    borderStyle: 'solid',
    //borderWidth: 1,
    borderTopWidth: 0,
    borderColor: Assets.colors.jz2025ThemeColors.lightBrown,
    backgroundColor: Assets.colors.jz2025ThemeColors.sheet,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pillarLine: {
    width: 1,
    height: '100%',
    backgroundColor: Assets.colors.jz2025ThemeColors.sheetShadow,
  },
  gallery: {
    gap: 10,
    marginTop: 10,
  },
  card: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal: 10,
    height: 300,
  },
  timeslotContainer: {
    flex: 1,
    margin: 5,
  },
});

export default Program;
