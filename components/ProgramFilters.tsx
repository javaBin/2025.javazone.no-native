import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Assets } from '@/Assets';

const dateFilters = [
  { id: 'wed', label: 'Wed, September 3' },
  { id: 'thur', label: 'Thur, September 4' },
];

const formatFilters = [
  { id: 'workshop', label: 'Workshop' },
  { id: 'lightning-talk', label: 'Lightning talk' },
  { id: 'presentation', label: 'Presentation' },
];

type FilterType = 'date' | 'language' | 'format';

type Filters = {
  date: string | null;
  language: string | null;
  format: string | null;
};

type ProgramFiltersProps = {
  filters: Filters;
  setFilter: (type: FilterType, value: string | null) => void;
  clearFilters: () => void;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (v: boolean) => void;
};

export default function ProgramFilters({
  filters,
  setFilter,
  clearFilters,
  showFavoritesOnly,
  setShowFavoritesOnly,
}: ProgramFiltersProps) {
  return (
    <View>
      <View style={{ flexDirection: 'column', alignSelf: 'center', width: '100%' }}>
        <Pressable
          style={[styles.filterButton, showFavoritesOnly && styles.filterButtonSelected]}
          onPress={() => {
            setShowFavoritesOnly(!showFavoritesOnly);
            if (!showFavoritesOnly) clearFilters();
          }}
        >
          <Text style={styles.buttonText}>{showFavoritesOnly ? 'Full Program' : 'Favorites'}</Text>
        </Pressable>
        {/*
        <Text style={[Assets.styles.listText, { textAlign: 'center', margin: 10 }]}>Day</Text>

        <View style={styles.filterFlex}>
          {dateFilters.map((filter) => (
            <Pressable
              key={filter.id}
              onPress={() => {
                setFilter('date', filter.id);
                setShowFavoritesOnly(false);
              }}
              style={[
                styles.filterButton,
                filters.date === filter.id && styles.filterButtonSelected,
              ]}
            >
              <Text style={styles.buttonText}>{filter.label}</Text>
            </Pressable>
          ))}
        </View>
*/}
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        <View style={{ alignSelf: 'center', alignItems: 'center', flexShrink: 1 }}>
          <Text style={[Assets.styles.listText, { textAlign: 'center', margin: 10 }]}>Language</Text>
          <View style={styles.filterFlex}>
            {dateFilters.map((lang) => (
              <Pressable
                key={lang.id}
                onPress={() => setFilter('date', lang.id)}
                style={[styles.filterButton, filters.date === lang.id && styles.filterButtonSelected]}
              >
                <Text style={styles.buttonText}>{lang.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{ alignSelf: 'center', alignItems: 'center', flexShrink: 1 }}>
          <Text style={[Assets.styles.listText, { textAlign: 'center', margin: 10 }]}>Format</Text>
          <View style={styles.filterFlex}>
            {formatFilters.map((format) => (
              <Pressable
                key={format.id}
                onPress={() => setFilter('format', format.id)}
                style={[styles.filterButton, filters.format === format.id && styles.filterButtonSelected]}
              >
                <Text style={styles.buttonText}>{format.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
      <Pressable style={styles.clearFilterButton} onPress={clearFilters}>
        <Text style={styles.buttonText}>Clear filters</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  filterFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
    margin: 5,
  },
  filterButton: {
    padding: 10,
    fontFamily: 'PlayfairDisplay_400Regular',
    textAlign: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 4,
    backgroundColor: Assets.colors.jz2025ThemeColors.gradientRed,
    maxWidth: '100%',
  },
  filterButtonSelected: {
    backgroundColor: Assets.colors.jz2025ThemeColors.lightBrown,
  },
  clearFilterButton: {
    backgroundColor: Assets.colors.jz2025ThemeColors.gradientRed,
    borderColor: Assets.colors.jz2025ThemeColors.gradientRed,
    borderWidth: 0.5,
    borderRadius: 4,
    maxWidth: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  buttonText: {
    fontFamily: 'Cinzel_500Medium',
    fontSize: 16,
    color: Assets.colors.jz2025ThemeColors.sheet,
    textAlign: 'center',
  },
});
