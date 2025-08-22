// OK
import React, { useEffect, useState, useMemo } from 'react';
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
  const screenWidth = Dimensions.get('window').width;
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

  const renderItem = ({ item }: { item: typeof flatListData[0] }) => {
    if (item.type === 'header') {
      return (
        <Text style={[Assets.styles.sectionSubTitle, { padding: 10, textAlign: 'center', width: '80%' }]}>
          {formatSessionTime(item.time!, lang)}
        </Text>
      );
    }

    return (
      <View style={styles.programCardContainer}>
        <ProgramCard
          key={item.session!.id}
          session={item.session!}
          isFavorite={favorites.some((favId) => favId === item.session!.id)}
        />
      </View>
    );
  };

  const ListHeader = () => (
    <View style={{width: '80%'}}>
      <PageTitle title={t('Program for javaZone 2025')} />
      <View style={styles.filtersContainer}>
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
    </View>
  );

  return (
    <ScreenTemplate shouldScrollToTop={true} flatListPage={true}>
      <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={[
          styles.gridContainer,
          {
            paddingBottom: Platform.OS != 'web' ? 120 : 100,
          }
        ]}
        removeClippedSubviews={true}
        maxToRenderPerBatch={9}
        initialNumToRender={12}
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
    width: '75%',
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
});

export default Program;
