import { Linking, Pressable, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';
import { Assets } from '@/Assets';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgImage } from '@/UI';
import React from 'react';
import { Session } from '@/api/types/talksProgram';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import { useGlobalSearchParams, useRouter } from 'expo-router';

type ProgramCardProps = {
  session: Session;
  isFavorite: boolean;
}

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

  // Animation values for each social media icon
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
    }
  });

  const twitterHandlers = createAnimationHandlers(twitterScale);
  const linkedinHandlers = createAnimationHandlers(linkedinScale);
  const blueskyHandlers = createAnimationHandlers(blueskyScale);

  return (
    <Pressable style={styles.card} key={session.id} onPress={navigateToDetail}>
      <LinearGradient
        style={[styles.gradient, Assets.styles.shadow]}
        colors={[
          '#fefaf1',
          '#f9ecd4',
          '#f5e3bf',
          '#f2dab0',
          '#f9e7ca',
          '#fff6e4',
        ]}
      >
        <Text style={styles.roomText}>{session.room}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.cardTitle}>{session.title}</Text>
          <Pressable onPress={toggleFavorite}>
            <SvgImage
              SVG={isFavorite ? Assets.icons.HeartFilled : Assets.icons.HeartVoid}
              height={50}
              width={40}
            />
          </Pressable>
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
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderColor: Assets.colors.jz2025ThemeColors.cyberYellow,
    borderWidth: 4,
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
    borderColor: Assets.colors.jz2025ThemeColors.crimsonRed,
    borderWidth: 4,
    borderRadius: 10,
    overflow: 'hidden',
    fontFamily: 'PlayfairDisplay_400Regular',
    width: '100%',
    maxWidth: 400,
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
})

export default ProgramCard;