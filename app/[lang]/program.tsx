// OK
import React, { useEffect, useState } from 'react';
import { PageTitle, PapyrusSheetSVG, SectionBox, SvgCallbackImage, SvgImage } from '@/UI';
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

const screenWidth = Dimensions.get('window').width;

type HoldTheDateProps = {
  subPageHeader?: string;
};
// OK
const HoldTheDate = ({ subPageHeader }: HoldTheDateProps) => {
  const { t } = useTranslation();

  const [sessions, setSessions] = React.useState<Session[]>([]);
  // States for filter knappene. Jeg klarte ikke ordentlig å gjøre det ved hjelp av mindre antall...Sorry...

  const [pressedDate, setPressedDate] = useState<string | null>(null);
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  const [pressedLanguage, setPressedLanguage] = useState<string | null>(null);
  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null);

  const [pressedFormat, setPressedFormat] = useState<string | null>(null);
  const [hoveredFormat, setHoveredFormat] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const [favorites, setFavorites] = useState<Session[]>([]);
  const [pressedFavorites, setPressedFavorites] = useState(false);
  const [hoveredFavorites, setHoveredFavorites] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    fetchProgram().then((data) => setSessions(data.sessions));
    const loadFavorites = async () => {
      const storedFavorites = await getData('favorites');
      if (storedFavorites) setFavorites(storedFavorites);
    };

    loadFavorites();
  }, []);

  // Async Storage for å lagre data i local storage.
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
  // Legger data til local storage.
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

  //Filter knappene for dato,språk og format.
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

  //Filter som sjekker om brukeren valgte dato, språk og format av "talk".
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

  //Funksjon som grupperer "talks" basert på dato og tid.
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

  // Her bestemmes det om brukeren vil se favoritter eller hele program.
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

  //Funksjoner som er ansvarlig for tilstand av filter-knappene.
  function isDateInteractable(filter: { id: string; label: string }) {
    const isSelected = selectedDate === filter.id;
    const isHovered = hoveredDate === filter.id;
    const isPressed = pressedDate === filter.id;
    return { isSelected, isHovered, isPressed };
  }

  function isLanguageInteractable(filter: { id: string; label: string }) {
    const isSelected = selectedLanguage === filter.id;
    const isHovered = hoveredLanguage === filter.id;
    const isPressed = pressedLanguage === filter.id;
    return { isSelected, isHovered, isPressed };
  }

  function isFormatInteractable(filter: { id: string; label: string }) {
    const isSelected = selectedFormat === filter.id;
    const isHovered = hoveredFormat === filter.id;
    const isPressed = pressedFormat === filter.id;
    return { isSelected, isHovered, isPressed };
  }

  return (
    <ScreenTemplate shouldScrollToTop={true}>
      <View style={{ marginTop: 50 }}>
        <SvgCallbackImage SVG={Assets.images.hero.HeroDuke} height={150} />
        <PageTitle title={t('Program for javaZone 2025')} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <SectionBox sectionTitle={''}>
            <SvgImage SVG={Assets.icons.LaurelWealth} height={100} width={100} />
            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
              <Pressable
                style={[
                  styles.filterButton,
                  { alignSelf: 'center', marginBottom: 20 },
                  (showFavoritesOnly || hoveredFavorites || pressedFavorites) && styles.filterButtonSelected,
                ]}
                onHoverIn={() => setHoveredFavorites(true)}
                onHoverOut={() => setHoveredFavorites(false)}
                onPressIn={() => setPressedFavorites(true)}
                onPressOut={() => setPressedFavorites(false)}
                onPress={() => {
                  setShowFavoritesOnly(!showFavoritesOnly);
                  if (!showFavoritesOnly) {
                    setSelectedDate(null);
                    setSelectedLanguage(null);
                    setSelectedFormat(null);
                  }
                }}
              >
                <Text style={[styles.buttonText]}>{showFavoritesOnly ? 'Full Program' : 'Favorites'}</Text>
              </Pressable>
              <Text style={[Assets.styles.listText, { textAlign: 'center', margin: 10 }]}>Day</Text>
              <View style={styles.filterFlex}>
                {dateFilters.map((filter) => {
                  const { isSelected, isHovered, isPressed } = isDateInteractable(filter);
                  return (
                    <Pressable
                      key={filter.id}
                      onHoverIn={() => setHoveredDate(filter.id)}
                      onHoverOut={() => setHoveredDate(null)}
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
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
              <View style={{ alignSelf: 'center', alignItems: 'center', flexShrink: 1 }}>
                <Text style={[Assets.styles.listText, { textAlign: 'center', margin: 10 }]}>Language</Text>
                <View style={styles.filterFlex}>
                  {languageFilters.map((lang) => {
                    const { isSelected, isHovered, isPressed } = isLanguageInteractable(lang);
                    return (
                      <Pressable
                        key={lang.id}
                        onHoverIn={() => setHoveredLanguage(lang.id)}
                        onHoverOut={() => setHoveredLanguage(null)}
                        onPress={() => setSelectedLanguage(lang.id)}
                        onPressIn={() => setPressedLanguage(lang.id)}
                        onPressOut={() => setPressedLanguage(null)}
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
              </View>
              <View style={{ alignSelf: 'center', alignItems: 'center', flexShrink: 1 }}>
                <Text style={[Assets.styles.listText, { textAlign: 'center', margin: 10 }]}>Format</Text>
                <View style={styles.filterFlex}>
                  {formatFilters.map((format) => {
                    const { isSelected, isHovered, isPressed } = isFormatInteractable(format);
                    return (
                      <Pressable
                        key={format.id}
                        onHoverIn={() => setHoveredFormat(format.id)}
                        onHoverOut={() => setHoveredFormat(null)}
                        onPress={() => setSelectedFormat(format.id)}
                        onPressIn={() => setPressedFormat(format.id)}
                        onPressOut={() => setPressedFormat(null)}
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
          </SectionBox>
        </View>
        <View>
          {sortedTimeslots
            .filter((time) => time.split('T')[0] <= currentTime.toISOString().split('T')[0])
            .map((time, key) => (
              <View key={`${time}-${key}`}>
                {time && (
                  <Text style={[Assets.styles.sectionSubTitle, { margin: 30 }]}>
                    {dayAndTimeFormatWithMonth.format(new Date(time))}
                  </Text>
                )}
                <View style={styles.cardFlex}>
                  {groupedSessions[time].map((session) => (
                    <View style={styles.card} key={session.id}>
                      <LinearGradient
                        style={[styles.gradient, Assets.styles.shadow]}
                        colors={[
                          '#fefaf1', // почти белый с теплотой
                          '#f9ecd4', // очень светлый бежево-кремовый
                          '#f5e3bf', // светлый тёплый пергамент
                          '#f2dab0', // мягкий оттенок выцветшей карамели
                          '#f9e7ca', // воздушный теплый крем
                          '#fff6e4', // светлый возврат — почти свет свечи
                        ]}
                      >
                        <Text style={styles.roomText}>{session.room}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Text style={styles.cardTitle}>{session.title}</Text>
                          <Pressable onPress={() => addFavorite(session)}>
                            <Text>
                              {favorites.some((fav) => fav.id === session.id) ? (
                                <SvgImage SVG={Assets.icons.HeartFilled} height={50} width={40} />
                              ) : (
                                <SvgImage SVG={Assets.icons.HeartVoid} height={50} width={40} />
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
                        <Text style={styles.time}>{session.length} min</Text>
                      </LinearGradient>
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
  shadowOpacity: 0.3,
  shadowRadius: 10,
};

const sharedButton = {
  padding: 10,
  fontFamily: 'PlayfairDisplay_400Regular',
  textAlign: 'center',
};

const border = {
  borderColor: Assets.colors.jz2025ThemeColors.orangeYellow,
  borderWidth: 0.5,
  borderRadius: 4,
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
  fontSize: 16,
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
    margin: 5,
  },

  filterButton: {
    ...baseFilterButton,
    maxWidth: '100%',
  },

  filterButtonSelected: {
    ...selectedButton,
  },

  clearFilterButton: {
    ...baseFilterButton,
    ...sharedShadow,
    borderColor: Assets.colors.jz2025ThemeColors.gradientRed,
    backgroundColor: Assets.colors.jz2025ThemeColors.gradientRed,
    maxWidth: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
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
