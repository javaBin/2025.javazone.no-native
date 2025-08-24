// OK
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { PageTitle, SectionBox } from '@/UI';
import { Assets } from '@/Assets';
import { View, Text, StyleSheet, Platform, FlatList, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { fetchProgram } from '@/api/fetchProgram';
import { ProgramCard, ScreenTemplate } from '@/components';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import useProgramFilters from '@/hooks/useProgramFilters';
import ProgramFilters from '@/components/ProgramFilters';
import { groupSessionsByTimeslot, formatSessionTime } from '@/utils/programUtils';
import { Session } from '@/api/types/talksProgram';
import { useGlobalSearchParams } from 'expo-router';

const Program = () => {
  const { t } = useTranslation();
  const { lang } = useGlobalSearchParams();
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

  const windowWidth = Dimensions.get('window').width - 100;

  const emptyFavorites = useMemo(() => {
    return favorites.length === 0 && showFavoritesOnly;
  }, [showFavoritesOnly, favorites.length]);

  useEffect(() => {
    fetchProgram()
      .then((data) => {
        setSessions(data.sessions);
      })
      .catch((error) => {
        console.error('Error fetching program:', error);
      });
  }, []);

  // Web version
  if (Platform.OS === 'web') {
    return (
      <ScreenTemplate shouldScrollToTop={true}>
        <PageTitle title={t('Program for javaZone 2025')} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <SectionBox sectionTitle={''}>
            <ProgramFilters
              filters={filters}
              setFilter={setFilter}
              clearFilters={clearFilters}
              showFavoritesOnly={showFavoritesOnly}
              setShowFavoritesOnly={setShowFavoritesOnly}
            />
          </SectionBox>
        </View>
        <View>
          {sortedTimeslots.map((time, key) => (
            <View key={`${time}-${key}`}>
              {time && (
                <Text style={[Assets.styles.sectionSubTitle, { margin: 30, alignSelf: 'center' }]}>
                  {formatSessionTime(time, lang)}
                </Text>
              )}
              <View style={styles.cardFlex}>
                {groupedSessions[time].map((session, index) => (
                  <ProgramCard
                    key={session.id}
                    session={session}
                    isFavorite={favorites.some((favId) => favId === session.id)}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScreenTemplate>
    );
  }

  // Native version (existing FlatList implementation)
  // Flatten data structure for single FlatList
  const flatListData = useMemo(() => {
    const items: Array<{
      id: string;
      type: 'header' | 'session';
      time?: string;
      session?: Session;
    }> = [];

    sortedTimeslots.forEach((time) => {
      // Add timeslot header
      items.push({
        id: `header-${time}`,
        type: 'header',
        time,
      });

      // Add all sessions for this timeslot
      groupedSessions[time].forEach((session) => {
        items.push({
          id: `session-${session.id}`,
          type: 'session',
          session,
        });
      });
    });

    return items;
  }, [sortedTimeslots, groupedSessions]);

  const renderItem = useCallback(
    ({ item }: { item: (typeof flatListData)[0] }) => {
      if (item.type === 'header') {
        return (
          <>
            <Text style={[Assets.styles.sectionSubTitle, { padding: 10, textAlign: 'center', width: windowWidth }]}>
              {formatSessionTime(item.time!, lang)}
            </Text>
          </>
        );
      }

      return (
        <View style={[styles.programCardContainer, { width: windowWidth }]}>
          <ProgramCard
            key={item.session!.id}
            session={item.session!}
            isFavorite={favorites.some((favId) => favId === item.session!.id)}
          />
        </View>
      );
    },
    [favorites, lang, windowWidth]
  );

  const keyExtractor = useCallback((item: (typeof flatListData)[0]) => item.id, []);

  const ListHeader = useCallback(() => (
      <View style={{ width: windowWidth, alignSelf: 'center' }}>
        <PageTitle title={t('Program for javaZone 2025')} />
        <View style={styles.filtersContainer}>
            <ProgramFilters
              filters={filters}
              setFilter={setFilter}
              clearFilters={clearFilters}
              showFavoritesOnly={showFavoritesOnly}
              setShowFavoritesOnly={setShowFavoritesOnly}
            />
        </View>
        {emptyFavorites && (
          <View style={styles.noFavoritesContainer}>
            <Text style={styles.noFavoritesText}>No favorites saved</Text>
          </View>
        )}
      </View>
    ),
    [t, filters, setFilter, clearFilters, showFavoritesOnly, setShowFavoritesOnly, flatListData, windowWidth]
  );

  const getItemLayout = useCallback(
    (data: any, index: number) => ({
      length: 200, // Estimated item height
      offset: 200 * index,
      index,
    }),
    []
  );

  return (
    <ScreenTemplate shouldScrollToTop={true} flatListPage={true}>
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={[
          styles.gridContainer,
          {
            paddingBottom: Platform.OS != 'web' ? 120 : 100,
          },
        ]}
        removeClippedSubviews={true}
        maxToRenderPerBatch={6}
        initialNumToRender={8}
        windowSize={10}
        updateCellsBatchingPeriod={50}
        getItemLayout={Platform.OS != 'web' ? getItemLayout : undefined}
        showsVerticalScrollIndicator={false}
      />
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  cardFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  gallery: {
    gap: 100,
    marginTop: 10,
  },
  gridContainer: {
    gap: 20,
    paddingHorizontal: 10,
  },
  programCardContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  filtersContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  text: {
    color: Assets.colors.brand.neutral,
    fontSize: Platform.OS === 'web' ? 18 : 16,
  },
  noFavoritesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    width: '100%',
  },
  noFavoritesText: {
    color: Assets.colors.brand.neutral,
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default Program;
