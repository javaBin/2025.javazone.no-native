import { Linking, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Assets } from '@/Assets';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgImage } from '@/UI';
import React from 'react';
import { Session } from '@/api/types/talksProgram';
import { useFavoritesContext } from '@/contexts/FavoritesContext';

type ProgramCardProps = {
  session: Session;
  isFavorite: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ session, isFavorite }: ProgramCardProps) => {
  const { addFavorite, removeFavorite } = useFavoritesContext();

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(session.id);
    } else {
      addFavorite(session.id);
    }
  };

  return (
    <View style={styles.card} key={session.id}>
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

        {session.speakers[0]?.twitter && (
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => Linking.openURL(`https://x.com/${session.speakers[0].twitter}`)}
          >
            <SvgImage SVG={Assets.icons.XLogo} height={20} width={20} />
          </TouchableOpacity>
        )}

        <Text style={styles.time}>{session.length} min</Text>
      </LinearGradient>
    </View>
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
})

export default ProgramCard;