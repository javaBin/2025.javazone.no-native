import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Platform,
  Dimensions
} from 'react-native';
import { Assets } from '@/Assets';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgImage } from '@/UI';
import React from 'react';
import { Session } from '@/api/types/talksProgram';
import { useFavoritesContext } from '@/contexts/FavoritesContext';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { createAnimations } from '@/utils/animationUtils';
import {useTranslation} from "react-i18next";

type ProgramCardProps = {
  session: Session;
  isFavorite: boolean;
};

const ProgramCard: React.FC<ProgramCardProps> = ({ session, isFavorite }: ProgramCardProps) => {
  const { addFavorite, removeFavorite } = useFavoritesContext();
  const { lang } = useGlobalSearchParams();
  const { t } = useTranslation();
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

  const getLangFormat = (session: Session) => {
    const language = session.language === 'no' ? t('language_name.nb-NO') : t('language_name.en-US');
    const format = session.format === 'presentation' ? t('program.presentation') : session.format.replace('-', ' ');
    return language + ' ' + format;
  }

  return (
    <Pressable key={session.id} onPress={navigateToDetail} style={[styles.container, Assets.styles.shadow]}>
      <BlurView
          tint="light"
          intensity={Platform.OS === 'web' ? 30 : 40}
          experimentalBlurMethod={'dimezisBlurView'}
          style={styles.content}>

        <View style={styles.horizontalSpaceBetween}>
          <Text style={styles.room}>{session.room || t('program.room_TBD')}</Text>
          <Text style={styles.lengthDuration}>{session.length}{' min'}</Text>
        </View>

        <View style={styles.horizontalSpaceBetween}>
          <Text style={styles.title}>{session.title}</Text>
          <Animated.View
            style={{
              transform: [{ scale: animations.favoriteButton.scale }],
            }}
            onPointerEnter={animations.favoriteButton.handlers.handleMouseEnter}
            onPointerLeave={animations.favoriteButton.handlers.handleMouseLeave}
          >
            <Pressable onPress={toggleFavorite}>
              <SvgImage SVG={isFavorite ? Assets.icons.HeartFilled : Assets.icons.HeartVoid} height={40} width={40} />
            </Pressable>
          </Animated.View>
        </View>

        <Text style={styles.format}>{getLangFormat(session)}</Text>

        {/* TODO: REFACTOR BELOW */}
        <View style={styles.horizontalWrap}>
        {session.speakers.map((speaker, index) => {
          const animations = createAnimations(index);
          const prevSpeaker = session.speakers[index - 1];
          const prevNoSocials = prevSpeaker && !prevSpeaker.twitter && !prevSpeaker.linkedin && !prevSpeaker.bluesky;
          const speakerName = prevNoSocials ? ', ' + speaker.name : speaker.name;

          return (
            <View key={speaker.name} style={styles.horizontalContain}>
              <Text style={styles.speakerName}>{speakerName}</Text>

              {(speaker.twitter || speaker.linkedin || speaker.bluesky) && (
                <View style={styles.horizontalContain}>
                  {speaker.twitter && (
                    <Animated.View
                      style={[styles.social, {
                        transform: [{ scale: animations.twitter.scale }],
                      }]}
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
                      style={[styles.social, {
                        transform: [{ scale: animations.linkedin.scale }],
                      }]}
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
                      style={[styles.social, {
                        transform: [{ scale: animations.bluesky.scale }],
                      }]}
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
        </View>

        {session.suggestedKeywords && (
          <View style={styles.horizontalWrap}>
            {session.suggestedKeywords.split(',').map((keyword: string, index: number) => (
              <Text key={index} style={styles.keyword}>
                #{keyword.trim().toLowerCase().replaceAll(' ', ' #')}
              </Text>
            ))}
          </View>
        )}
      </BlurView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    height: 'auto',
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    height: '100%',
  },
  title: {
    width: '75%',
    fontSize: 20,
    fontFamily: 'PlayfairDisplay_400Regular',
  },
  room: {
    fontSize: 16,
    fontFamily: 'Cinzel_400Regular',
    color: Assets.colors.jz2025ThemeColors.darkBrown,
  },
  lengthDuration: {
    fontSize: 16,
    fontFamily: 'Cinzel_400Regular',
    color: Assets.colors.jz2025ThemeColors.darkBrown,
  },
  format: {
    fontSize: 18,
    fontFamily: 'PlayfairDisplay_400Regular',
    color: Assets.colors.jz2025ThemeColors.darkBrown,
    marginTop: 'auto',
    paddingTop: 20,
  },
  speakerName: {
    fontSize: 18,
    fontFamily: 'PlayfairDisplay_400Regular',
    color: Assets.colors.jz2025ThemeColors.darkBrown,
  },
  social: {
    paddingHorizontal: 5,
  },
  keyword: {
    color: Assets.colors.jz2025ThemeColors.crimsonRed,
    fontSize: 12,
    fontWeight: '500',
    paddingRight: 5,
  },
  horizontalStart: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  horizontalSpaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  horizontalWrap: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  horizontalContain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
export default ProgramCard;
