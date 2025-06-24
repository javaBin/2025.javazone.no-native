import React, { useEffect, useState } from 'react';
import { PageTitle, SvgCallbackImage, SvgImage } from '@/UI';
import { Assets } from '@/Assets';
import { Dimensions, Linking, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { fetchProgram } from '@/api/fetchProgram';
import { Session } from '@/api/types/talksProgram';
import { ScreenTemplate } from '@/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

type HoldTheDateProps = {
  subPageHeader?: string;
};

const HoldTheDate = ({ subPageHeader }: HoldTheDateProps) => {
  const { t } = useTranslation();

  const [sessions, setSessions] = React.useState<Session[]>([]);

  const [pressedDate, setPressedDate] = useState<string | null>(null);
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const [favorites, setFavorites] = useState<Session[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

   useEffect(() => {
    fetchProgram().then((data) => setSessions(data.sessions));
    const loadFavorites = async () => {
      const storedFavorites = await getData('favorites');
      if (storedFavorites) setFavorites(storedFavorites);
    };

    loadFavorites();
  }, []);
  // From Async Storage documentation
  const storeData = async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error(e);
    }
  };

  const addFavorite = async (session: Session) => {
    const isFavorite = favorites.some((fav) => fav.id === session.id);

    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== session.id);
    } else {
      updatedFavorites = [...favorites, session];
    }

    setFavorites(updatedFavorites);
    await storeData('favorites', updatedFavorites);
  };

  const dateFilters = [
    { id: 'tue', label: 'Tue, September 2' },
    { id: 'wed', label: 'Wed, September 3' },
    { id: 'thur', label: 'Thur, September 4' },
    { id: 'live', label: 'Live' },
  ];

  const languageFilters = [
    { id: 'en', label: 'English' },
    { id: 'no', label: 'Norwegian' },
  ];

  const formatFilters = [
    { id: 'workshop', label: 'Workshop' },
    { id: 'lightning-talk', label: 'Lightning talk' },
    { id: 'presentation', label: 'Presentation' },
  ];

  const filteredSessions = sessions.filter((session) => {
    const matchesDate =
      !selectedDate ||
      selectedDate === 'full' ||
      (selectedDate === 'wed' && session.startTime?.startsWith('2024-09-03')) ||
      (selectedDate === 'thur' && session.startTime?.startsWith('2024-09-04')) ||
      selectedDate === 'live';

    const matchesLanguage = !selectedLanguage || selectedLanguage === 'all' || session.language === selectedLanguage;

    const matchesFormat = !selectedFormat || selectedFormat == 'all' || session.format === selectedFormat;

    return matchesDate && matchesLanguage && matchesFormat;
  });

  function groupSessionsByTimeslot(sessions: Session[]): Record<string, Session[]> {
    const hasStartTime = sessions.some((session) => !!session.startTime);

    if (!hasStartTime) {
      return {
        '': sessions,
      };
    }

    return sessions.reduce((acc: Record<string, Session[]>, session: Session) => {
      const startTime = session.startSlot ?? '00:00';
      const timeslot = startTime;
      if (!acc[timeslot]) {
        acc[timeslot] = [];
      }
      acc[timeslot].push(session);
      return acc;
    }, {});
  }

  const sessionsToShow = showFavoritesOnly ? favorites : filteredSessions;
  const groupedSessions = groupSessionsByTimeslot(Object.values(sessionsToShow).flat());
  const sortedTimeslots = Object.keys(groupedSessions).sort((a, b) => a.localeCompare(b));

  const dayAndTimeFormatWithMonth = Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  const currentTime = new Date('2024-09-07T03:24:00');

  function isInteractable(filter: { id: string; label: string }) {
    const isSelected = selectedDate === filter.id;
    const isHovered = hoveredFilter === filter.id;
    const isPressed = pressedDate === filter.id;
    return { isSelected, isHovered, isPressed };
  }

  return (
    <ScreenTemplate>
      <View style={{ marginTop: 50 }}>
        <SvgCallbackImage SVG={Assets.images.hero.HeroDuke} height={150} />
        <PageTitle title={t('Program for javaZone 2025')} />
        <BlurView
          tint="light"
          intensity={Platform.OS === 'web' ? 20 : 40}
          experimentalBlurMethod={'dimezisBlurView'}
          style={{ ...Assets.styles.section, ...Assets.styles.shadow }}
        >
          <SvgImage SVG={Assets.icons.LaurelWealth} height={100} width={100} />
          <View style={styles.filterFlex}>
            <Pressable
              style={styles.filterButton}
              onPress={() => {
                setSelectedDate(null);
                setSelectedLanguage(null);
                setSelectedFormat(null);
                setShowFavoritesOnly(true);
              }}
            >
              <Text style={styles.buttonText}>Show Favorites</Text>
            </Pressable>
            <View style={styles.filterFlex}>
              <Text style={Assets.styles.listText}>Day</Text>
              {dateFilters.map((filter) => {
                const { isSelected, isHovered, isPressed } = isInteractable(filter);
                return (
                  <Pressable
                    key={filter.id}
                    onHoverIn={() => setHoveredFilter(filter.id)}
                    onHoverOut={() => setHoveredFilter(null)}
                    onPressIn={() => setPressedDate(filter.id)}
                    onPressOut={() => setPressedDate(null)}
                    onPress={() => {
                      setSelectedDate(filter.id);
                      setShowFavoritesOnly(false);
                    }}
                    style={() => [
                      styles.filterButton,
                      (isSelected || isHovered || isPressed) && styles.filterButtonSelected,
                    ]}
                  >
                    <Text style={styles.buttonText}>{filter.label}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 , alignItems:'center'}}>
            <Text style={Assets.styles.listText}>Language</Text>
            <View style={styles.filterFlex}>
              {languageFilters.map((lang) => {
                const { isSelected, isHovered, isPressed } = isInteractable(lang);

                return (
                  <Pressable
                    key={lang.id}
                    onHoverIn={() => setHoveredFilter(lang.id)}
                    onHoverOut={() => setHoveredFilter(null)}
                    onPress={() => setSelectedLanguage(lang.id)}
                    style={[
                      styles.filterButton,
                      (isSelected || isHovered || isPressed) && styles.filterButtonSelected,
                    ]}
                  >
                    <Text style={styles.buttonText}>{lang.label}</Text>
                  </Pressable>
                );
              })}
            </View>
            <Text style={Assets.styles.listText}>Format</Text>
            <View style={styles.filterFlex}>
              {formatFilters.map((format) => {
                const { isSelected, isHovered, isPressed } = isInteractable(format);

                return (
                  <Pressable
                    key={format.id}
                    onHoverIn={() => setHoveredFilter(format.id)}
                    onHoverOut={() => setHoveredFilter(null)}
                    onPress={() => setSelectedFormat(format.id)}
                    style={[
                      styles.filterButton,
                      (isSelected || isHovered || isPressed) && styles.filterButtonSelected,
                    ]}
                  >
                    <Text style={styles.buttonText}>{format.label}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
          <Pressable
            style={styles.clearFilterButton}
            onPress={() => {
              setSelectedFormat(null);
              setSelectedLanguage(null);
              setSelectedDate(null);
            }}
          >
            <Text style={styles.clearFilterButtonText}>Clear filters</Text>
          </Pressable>
        </BlurView>
        <View>
          {sortedTimeslots
            .filter((time) => time.split('T')[0] <= currentTime.toISOString().split('T')[0])
            .map((time, key) => (
              <View key={`${time}-${key}`}>
                {time && (
                  <Text style={  Assets.styles.sectionSubTitle}>{dayAndTimeFormatWithMonth.format(new Date(time))}</Text>
                )}
                <View style={styles.cardFlex}>
                  {groupedSessions[time].map((session) => (
                    <View style={styles.card} key={session.id}>
                      <View style={styles.cardInner}>
                        {/*   <LinearGradient
                        style={[styles.gradient, Assets.styles.shadow]}
                        colors={['#ffffff', '#f9f9f9', '#f2f2f2', '#e5e5e5', '#dcdcdc', '#cfcfcf', '#bfbfbf']}
                      >*/}
                        <Text style={styles.roomText}>{session.room}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Text style={styles.cardTitle}>{session.title}</Text>
                          <Pressable onPress={() => addFavorite(session)}>
                            <Text>
                              {favorites.some((fav) => fav.id === session.id) ? (
                                <SvgImage SVG={Assets.icons.HeartFilled} height={40} width={40} />
                              ) : (
                                <SvgImage SVG={Assets.icons.HeartVoid} height={40} width={40} />
                              )}
                            </Text>
                          </Pressable>
                        </View>
                        {session.speakers.map((speaker) => (
                          <Text style={styles.speaker} key={speaker.name}>
                            {speaker.name}
                          </Text>
                        ))}

                        <View style={{ display: 'flex', flexDirection: 'row', marginHorizontal: 'auto', gap: 20 }}>
                          <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => Linking.openURL(`https://x.com/${session.speakers[0].twitter}`)}
                          >
                            <SvgImage SVG={Assets.icons.XLogo} height={20} width={20} />
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => Linking.openURL(`https://x.com/${session.speakers[0].twitter}`)}
                          >
                            <SvgImage SVG={Assets.icons.XLogo} height={20} width={20} />
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => Linking.openURL(`https://x.com/${session.speakers[0].twitter}`)}
                          >
                            <SvgImage SVG={Assets.icons.XLogo} height={20} width={20} />
                          </TouchableOpacity>
                        </View>
                        <Text style={styles.time}>45 min</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
        </View>
      </View>
    </ScreenTemplate>
  );
};

const sharedShadow = {
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.2,
  shadowRadius: 8,
};

const sharedButton = {
  padding: 8,
  fontFamily: 'PlayfairDisplay_400Regular',
  textAlign: 'center',
};

const border = {
  borderColor: Assets.colors.jz2025ThemeColors.cyberYellow,
  borderWidth: 1,
  borderRadius: 2,
};

const baseFilterButton = {
  ...sharedButton,
  ...sharedShadow,
  ...border,
  backgroundColor: '#ffebcd',
};

const selectedButton = {
  ...baseFilterButton,
  backgroundColor: Assets.colors.jz2025ThemeColors.cyberYellow,
};

const sharedText = {
  fontFamily: 'PlayfairDisplay_400Regular',
  fontSize: 16
};

const styles = StyleSheet.create({
  gradient: {
    borderColor: Assets.colors.jz2025ThemeColors.cyberYellow,
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%',
  },

  filterFlex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
    margin: 20,
  },

  filterButton: {
    ...baseFilterButton,
  },

  filterButtonSelected: {
    ...selectedButton,
  },

  clearFilterButton: {
    ...baseFilterButton,
    backgroundColor: Assets.colors.jz2025ThemeColors.gradientRed,
    width: '100%',
    maxWidth: 200,
    alignSelf: 'center',
    margin: 20,
  },

  buttonText: {
    ...sharedText,
    color: Assets.colors.jz2025ThemeColors.darkRed,
    textAlign: 'center',
  },

  clearFilterButtonText: {
    ...sharedText,
    color: Assets.colors.jz2025ThemeColors.cyberYellow,
    textAlign: 'center',
  },

  cardFlex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },

  card: {
    borderColor: Assets.colors.jz2025ThemeColors.crimsonRed,
    borderWidth: 4,
    borderRadius: 10,
    overflow: 'hidden',
    fontFamily: 'PlayfairDisplay_400Regular',
    width: '100%',
    maxWidth: 400,
  },

  cardInner: {
    backgroundColor: 'white',
    borderColor: Assets.colors.jz2025ThemeColors.cyberYellow,
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  roomText: {
    color: '#343434',
    fontSize: 14,
    marginBottom: 10,
  },

  speaker: {
    color: '#363636',
    fontSize: 14,
  },

  time: {
    justifyContent: 'flex-end',
  },

  text: {
    color: Assets.colors.brand.neutral,
    fontSize: Platform.OS === 'web' ? 18 : 16,
  },
});

export default HoldTheDate;
