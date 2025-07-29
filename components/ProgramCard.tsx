import { Linking, Pressable, StyleSheet, Text, TouchableOpacity, View, Animated, Platform } from 'react-native';
import { Assets } from '@/Assets';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgImage } from '@/UI';
import React from 'react';
import { Session } from '@/api/types/talksProgram';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';

type ProgramCardProps = {
  session: Session;
  isFavorite: boolean;
};

const ProgramCard: React.FC<ProgramCardProps> = ({ session, isFavorite }: ProgramCardProps) => {
  const { addFavorite, removeFavorite } = useFavoritesContext();
  const { lang } = useGlobalSearchParams();
  const router = useRouter();

  const toggleFavorite = (e: any) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(session.id);
    } else {
      addFavorite(session.id);
    }
  };

  const navigateToDetail = () => {
    router.push(`${lang}/program/${session.id}`);
  };

  const favoriteButtonScale = new Animated.Value(1);
  const twitterScale = new Animated.Value(1);
  const linkedinScale = new Animated.Value(1);
  const blueskyScale = new Animated.Value(1);

  const createAnimationHandlers = (scaleValue: Animated.Value) => ({
    handleMouseEnter: () => {
      Animated.spring(scaleValue, {
        toValue: 1.4,
        useNativeDriver: true,
      }).start();
    },
    handleMouseLeave: () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    },
  });

  const favoriteButtonHandlers = createAnimationHandlers(favoriteButtonScale);
  const twitterHandlers = createAnimationHandlers(twitterScale);
  const linkedinHandlers = createAnimationHandlers(linkedinScale);
  const blueskyHandlers = createAnimationHandlers(blueskyScale);

  return (
    <Pressable style={[styles.card, Assets.styles.shadow]} key={session.id} onPress={navigateToDetail}>
      <BlurView
        tint="default"
        intensity={Platform.OS === 'web' ? 20 : 40}
        experimentalBlurMethod={'dimezisBlurView'}
        style={[styles.innerCardContainer]}
      >
        <Text style={styles.roomText}>{session.room}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.cardTitle}>{session.title}</Text>
          <Animated.View
            style={{
              transform: [{ scale: favoriteButtonScale }],
            }}
            onPointerEnter={favoriteButtonHandlers.handleMouseEnter}
            onPointerLeave={favoriteButtonHandlers.handleMouseLeave}>
            <Pressable onPress={toggleFavorite}>
              <SvgImage SVG={isFavorite ? Assets.icons.HeartFilled : Assets.icons.HeartVoid} height={50} width={40} />
            </Pressable>
          </Animated.View>
        </View>
        {session.speakers.map((speaker) => (
          <Text style={styles.speaker} key={speaker.name}>
            {speaker.name}
          </Text>
        ))}

        {(session.speakers[0]?.twitter || session.speakers[0]?.linkedin || session.speakers[0]?.bluesky) && (
          <View style={{ marginTop: 10, flexDirection: 'row', gap: 10 }}>
            {session.speakers[0]?.twitter && (
              <Animated.View
                style={{
                  transform: [{ scale: twitterScale }],
                }}
                onPointerEnter={twitterHandlers.handleMouseEnter}
                onPointerLeave={twitterHandlers.handleMouseLeave}
              >
                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation();
                    Linking.openURL(`https://x.com/${session.speakers[0].twitter}`);
                  }}
                >
                  <SvgImage SVG={Assets.icons.XLogo} height={20} width={20} />
                </TouchableOpacity>
              </Animated.View>
            )}
            {session.speakers[0]?.linkedin && (
              <Animated.View
                style={{
                  transform: [{ scale: linkedinScale }],
                }}
                onPointerEnter={linkedinHandlers.handleMouseEnter}
                onPointerLeave={linkedinHandlers.handleMouseLeave}
              >
                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation();
                    Linking.openURL(`${session.speakers[0].linkedin}`);
                  }}
                >
                  <SvgImage SVG={Assets.icons.LinkedInLogo} height={20} width={20} />
                </TouchableOpacity>
              </Animated.View>
            )}
            {session.speakers[0]?.bluesky && (
              <Animated.View
                style={{
                  transform: [{ scale: blueskyScale }],
                }}
                onPointerEnter={blueskyHandlers.handleMouseEnter}
                onPointerLeave={blueskyHandlers.handleMouseLeave}
              >
                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation();
                    Linking.openURL(`https://bsky.app/profile/${session.speakers[0].bluesky!.replace('@', '')}`);
                  }}
                >
                  <SvgImage SVG={Assets.icons.BlueSkyLogo} height={20} width={20} />
                </TouchableOpacity>
              </Animated.View>
            )}
          </View>
        )}

        {session.suggestedKeywords && (
          <View style={{ marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
            {session.suggestedKeywords.split(',').map((keyword: string, index: number) => (
              <Text key={index} style={styles.keyword}>
                #{keyword.trim()}
              </Text>
            ))}
          </View>
        )}

        <Text style={styles.time}>{session.length} min</Text>
      </BlurView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  innerCardContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%',
  },
  roomText: {
    color: '#343434',
    fontSize: 14,
    marginBottom: 10,
  },
  card: {
    overflow: 'hidden',
    fontFamily: 'PlayfairDisplay_400Regular',
    width: '100%',
    maxWidth: 400,
    borderRadius: 5,
  },
  time: {
    justifyContent: 'flex-end',
  },
  speaker: {
    color: '#363636',
    fontSize: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  keyword: {
    color: Assets.colors.jz2025ThemeColors.crimsonRed,
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ProgramCard;
