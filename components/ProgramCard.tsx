import { Linking, Pressable, StyleSheet, Text, TouchableOpacity, View, Animated, Platform } from 'react-native';
import { Assets } from '@/Assets';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgImage } from '@/UI';
import React from 'react';
import { Session } from '@/api/types/talksProgram';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { createAnimations } from '@/utils/animationUtils';
import { formatSessionInfo, formatSessionTime, safeParseDate } from '@/utils/programUtils';

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

  const animations = createAnimations();

  return (
    <Pressable style={[styles.card, Assets.styles.shadow]} key={session.id} onPress={navigateToDetail}>
      <BlurView
        tint="default"
        intensity={Platform.OS === 'web' ? 20 : 40}
        experimentalBlurMethod={'dimezisBlurView'}
        style={[styles.innerCardContainer]}
      >
        <Text style={styles.sessionInfo}>{formatSessionInfo(session, true, lang)}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.cardTitle}>{session.title}</Text>
          <Animated.View
            style={{
              transform: [{ scale: animations.favoriteButton.scale }],
            }}
            onPointerEnter={animations.favoriteButton.handlers.handleMouseEnter}
            onPointerLeave={animations.favoriteButton.handlers.handleMouseLeave}
          >
            <Pressable onPress={toggleFavorite}>
              <SvgImage SVG={isFavorite ? Assets.icons.HeartFilled : Assets.icons.HeartVoid} height={50} width={40} />
            </Pressable>
          </Animated.View>
        </View>
        {session.speakers.map((speaker, index) => {
          const animations = createAnimations(index);

          return (
            <View key={speaker.name} style={{ flexDirection: 'row', gap: 10 }}>
              <Text style={styles.speaker}>{speaker.name}</Text>
              {(speaker.twitter || speaker.linkedin || speaker.bluesky) && (
                <View style={{ flexDirection: 'row', gap: 5 }}>
                  {speaker.twitter && (
                    <Animated.View
                      style={{
                        transform: [{ scale: animations.twitter.scale }],
                      }}
                      onPointerEnter={animations.twitter.handlers.handleMouseEnter}
                      onPointerLeave={animations.twitter.handlers.handleMouseLeave}
                    >
                      <TouchableOpacity
                        onPress={(e) => {
                          e.stopPropagation();
                          Linking.openURL(`https://x.com/${speaker.twitter}`);
                        }}
                      >
                        <SvgImage SVG={Assets.icons.XLogo} height={20} width={20} />
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
                      <TouchableOpacity
                        onPress={(e) => {
                          e.stopPropagation();
                          Linking.openURL(`${speaker.linkedin}`);
                        }}
                      >
                        <SvgImage SVG={Assets.icons.LinkedInLogo} height={20} width={20} />
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
                        onPress={(e) => {
                          e.stopPropagation();
                          Linking.openURL(`https://bsky.app/profile/${speaker.bluesky!.replace('@', '')}`);
                        }}
                      >
                        <SvgImage SVG={Assets.icons.BlueSkyLogo} height={20} width={20} />
                      </TouchableOpacity>
                    </Animated.View>
                  )}
                </View>
              )}
            </View>
          );
        })}

        {session.suggestedKeywords && (
          <View style={{ marginVertical: 10, flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
            {session.suggestedKeywords.split(',').map((keyword: string, index: number) => (
              <Text key={index} style={styles.keyword}>
                #{keyword.trim()}
              </Text>
            ))}
          </View>
        )}

        <Text style={styles.time}>{session.format} - {session.length} min</Text>
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
  sessionInfo: {
    color: '#343434',
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '500',
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
