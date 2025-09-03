import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  Alert,
  Animated,
  Pressable,
} from 'react-native';
import { useGlobalSearchParams, useLocalSearchParams, useRouter } from 'expo-router';
import { Assets } from '@/Assets';
import { PageTitle, SectionBox, SvgImage } from '@/UI';
import { ScreenTemplate, VideoPlayer } from '@/components';
import { fetchIndividualProgram } from '@/api/fetchProgram';
import { Session } from '@/api/types/talksProgram';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import { useTranslation } from 'react-i18next';
import { createAnimations } from '@/utils/animationUtils';
import { useMediaQuery } from 'react-responsive';
import { formatSessionInfo } from '@/utils/programUtils';

const SessionDetail = () => {
  const { sessionId } = useLocalSearchParams<{ sessionId: string }>();
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const { lang } = useGlobalSearchParams();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { favorites, addFavorite, removeFavorite } = useFavoritesContext();

  const isFavorite = session ? favorites.includes(session.id) : false;

  useEffect(() => {
    const loadSession = async () => {
      try {
        setLoading(true);
        setError(null);
        const sessionData = await fetchIndividualProgram(sessionId);
        setSession(sessionData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(errorMessage);
        Alert.alert('Error', errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) {
      loadSession();
    }
  }, [sessionId]);

  const toggleFavorite = () => {
    if (!session) return;

    if (isFavorite) {
      removeFavorite(session.id);
    } else {
      addFavorite(session.id);
    }
  };

  if (loading) {
    return (
      <ScreenTemplate>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Assets.colors.jz2025ThemeColors.crimsonRed} />
          <Text style={[Assets.styles.text, { marginTop: 10 }]}>Loading session...</Text>
        </View>
      </ScreenTemplate>
    );
  }

  if (error || !session) {
    return (
      <ScreenTemplate>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={[Assets.styles.text, { color: Assets.colors.jz2025ThemeColors.crimsonRed }]}>
            {error || 'Session not found'}
          </Text>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              marginTop: 20,
              padding: 10,
              backgroundColor: Assets.colors.jz2025ThemeColors.crimsonRed,
              borderRadius: 5,
            }}
          >
            <Text style={[Assets.styles.text, { color: 'white' }]}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </ScreenTemplate>
    );
  }
  const animations = createAnimations();

  return (
    <ScreenTemplate shouldScrollToTop={true}>
      <PageTitle title={session.title} />

      <SectionBox sectionTitle="">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: 10 }}>
            {/* Session details */}
            <View style={{ marginBottom: 20 }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 15, justifyContent: 'space-between' }}>
                {/* Left spacer to balance the layout */}
                <View style={{ width: 40 }} />

                {/* Centered text */}
                <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 5 }}>
                  <Text style={[Assets.styles.sectionSubTitle, { fontSize: 25, textAlign: 'center' }]}>Session Details</Text>
                </View>

                {/* Favorite Button - takes fixed space */}
                <View style={{ width: 40, alignItems: 'flex-end' }}>
                  <Animated.View
                    style={{
                      transform: [{ scale: animations.favoriteButton.scale }],
                    }}
                    onPointerEnter={animations.favoriteButton.handlers.handleMouseEnter}
                    onPointerLeave={animations.favoriteButton.handlers.handleMouseLeave}>
                    <Pressable onPress={toggleFavorite}>
                      <SvgImage SVG={isFavorite ? Assets.icons.HeartFilled : Assets.icons.HeartVoid} height={50} width={40} />
                    </Pressable>
                  </Animated.View>
                </View>
              </View>

              <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10 }}>
                <Text style={[Assets.styles.text, { marginBottom: 5 }]}>
                  <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Format: </Text>
                  {session.format}
                </Text>

                <Text style={[Assets.styles.text, { marginBottom: 5 }]}>
                  <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Duration: </Text>
                  {session.length} min
                </Text>
              </View>
              <Text style={[Assets.styles.text, { marginBottom: 5, alignSelf: 'center' }]}>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Time and room: </Text>
                {formatSessionInfo(session, false, lang)}
              </Text>
            </View>
            <SvgImage SVG={Assets.UI.DividerWide} height={10} />

            {/* Speakers */}
            {session.speakers && session.speakers.length > 0 && (
              <View style={{ marginVertical: 20, alignItems: 'center' }}>
                <Text style={[Assets.styles.sectionSubTitle, { fontSize: 25 }]}>
                  {session.speakers.length > 1 ? 'Speakers' : 'Speaker'}
                </Text>

                {session.speakers.map((speaker, index) => {
                  const animations = createAnimations(index);
                  return (
                    <View key={index} style={{ marginBottom: 15 }}>
                      <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Text
                          style={[
                            Assets.styles.text,
                            {
                              fontSize: isMobile ? 20 : 22,
                              color: Assets.colors.jz2025ThemeColors.darkRed,
                              fontWeight: 'bold',
                            },
                          ]}
                        >
                          {speaker.name}
                        </Text>

                        {/* Social media links */}
                        {(speaker.twitter || speaker.linkedin || speaker.bluesky) && (
                          <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
                            {speaker.twitter && (
                              <Animated.View
                                style={{
                                  transform: [{ scale: animations.twitter.scale }],
                                }}
                                onPointerEnter={animations.twitter.handlers.handleMouseEnter}
                                onPointerLeave={animations.twitter.handlers.handleMouseLeave}
                              >
                                <TouchableOpacity
                                  onPress={() => Linking.openURL(`https://x.com/${speaker.twitter}`)}
                                >
                                  <SvgImage SVG={Assets.icons.XLogo} height={25} width={25} />
                                </TouchableOpacity>
                              </Animated.View>
                            )}
                            {speaker.linkedin && (
                              <Animated.View
                                style={{
                                  transform: [{ scale: animations.linkedin.scale }],
                                }}
                                onPointerEnter={animations.linkedin.handlers.handleMouseEnter}
                                onPointerLeave={animations.linkedin.handlers.handleMouseLeave}
                              >
                                <TouchableOpacity onPress={() => Linking.openURL(`${speaker.linkedin}`)}>
                                  <SvgImage SVG={Assets.icons.LinkedInLogo} height={25} width={25} />
                                </TouchableOpacity>
                              </Animated.View>
                            )}
                            {speaker.bluesky && (
                              <Animated.View
                                style={{
                                  transform: [{ scale: animations.bluesky.scale }],
                                }}
                                onPointerEnter={animations.bluesky.handlers.handleMouseEnter}
                                onPointerLeave={animations.bluesky.handlers.handleMouseLeave}
                              >
                                <TouchableOpacity
                                  onPress={() =>
                                    Linking.openURL(`https://bsky.app/profile/${speaker.bluesky!.replace('@', '')}`)
                                  }
                                >
                                  <SvgImage SVG={Assets.icons.BlueSkyLogo} height={25} width={25} />
                                </TouchableOpacity>
                              </Animated.View>
                            )}
                          </View>
                        )}
                      </View>
                      {speaker.bio && <Text style={[Assets.styles.text, { marginTop: 5 }]}>{speaker.bio}</Text>}
                    </View>
                  );
                })}

              </View>
            )}

            {/* Abstract */}
            {session.abstract && (
              <View style={{ marginBottom: 20 }}>
                <Text style={[Assets.styles.sectionSubTitle, { fontSize: 25 }]}>Abstract</Text>
                <Text style={Assets.styles.text}>{session.abstract}</Text>
              </View>
            )}

            {session.workshopPrerequisites && (
              <View style={{ marginBottom: 20 }}>
                <Text style={[Assets.styles.sectionSubTitle, { fontSize: 25 }]}>Workshop Prerequisites</Text>
                <Text style={Assets.styles.text}>{session.workshopPrerequisites}</Text>
              </View>
            )}
            <SvgImage SVG={Assets.UI.DividerWide} height={10} />

            {/* Suggested Keywords */}
            {session.suggestedKeywords && (
              <View style={{ marginVertical: 20 }}>
                <Text style={[Assets.styles.sectionSubTitle, { marginBottom: 10, fontSize: 25 }]}>Keywords</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                  {session.suggestedKeywords.split(',').map((keyword: string, index: number) => (
                    <Text
                      key={index}
                      style={{
                        color: Assets.colors.jz2025ThemeColors.crimsonRed,
                        fontSize: 14,
                        fontWeight: '500',
                        backgroundColor: 'rgba(249, 246, 245, 0.65)',
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 12,
                      }}
                    >
                      #{keyword.trim()}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            {/* Language */}
            {session.language && (
              <View style={{ marginBottom: 20 }}>
                <Text style={[Assets.styles.text]}>
                  <Text style={{ fontWeight: 'bold' }}>Language: </Text>
                  {session.language === 'no' ? 'Norsk' : session.language === 'en' ? 'English' : session.language}
                </Text>
              </View>
            )}

            {/*Video*/}
            {session.video && (
              <View style={{ marginTop: 30, marginBottom: 20 }}>
                <Text style={[Assets.styles.sectionSubTitle, { fontSize: 25, marginBottom: 20, textAlign: 'center' }]}>
                  Session Video
                </Text>
                <VideoPlayer videoUrl={`https://player.vimeo.com/video/${session.video}`} />
              </View>
            )}
          </View>
        </ScrollView>
      </SectionBox>
    </ScreenTemplate>
  );
};

export default SessionDetail;
