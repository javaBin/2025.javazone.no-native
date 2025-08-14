// OK
import React, { useEffect, useState } from 'react';
import { PageTitle, SectionBox } from '@/UI';
import { Assets } from '@/Assets';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { fetchProgram } from '@/api/fetchProgram';
import { ProgramCard, ScreenTemplate } from '@/components';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import useProgramFilters from '@/hooks/useProgramFilters';
import ProgramFilters from '@/components/ProgramFilters';
import { groupSessionsByTimeslot, formatSessionTime } from '@/utils/programUtils';
import { Session } from '@/api/types/talksProgram';
import { useGlobalSearchParams } from 'expo-router';

const Index = () => {
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

  useEffect(() => {
    fetchProgram().then((data) => setSessions(data.sessions));
  }, []);

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
};

const styles = StyleSheet.create({
  cardFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },

  text: {
    color: Assets.colors.brand.neutral,
    fontSize: Platform.OS === 'web' ? 18 : 16,
  },
});

export default Index;
