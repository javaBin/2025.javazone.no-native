import React, { useEffect } from 'react';
import { PageTitle, SvgCallbackImage, SvgImage } from '@/UI';
import { Assets } from '@/Assets';
import { Dimensions, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { fetchProgram } from '@/api/fetchProgram';
import { Session } from '@/api/types/talksProgram';
import { ScreenTemplate } from '@/components';

type HoldTheDateProps = {
  subPageHeader?: string;
};

const HoldTheDate = ({ subPageHeader }: HoldTheDateProps) => {
  const { t } = useTranslation();

  const [sessions, setSessions] = React.useState<Session[]>([]);

  useEffect(() => {
    fetchProgram().then((data) => setSessions(data.sessions));
  }, []);

  return (
    <ScreenTemplate>
      <View style={[{ marginTop: 50 }]}>
        <SvgCallbackImage SVG={Assets.images.hero.HeroDuke} height={150} />

        <PageTitle title={t('javaZone_2025')} />
        <View style={styles.cardFlex}>
          {sessions.map((session) => (
            <View style={styles.card}>
              <View style={styles.cardInner}>
                <Text style={styles.roomText}>{session.room}</Text>
                <Text style={styles.cardTitle}>{session.title}</Text>
                {session.speakers.map((speaker) => (
                  <Text style={styles.speaker}>{speaker.name}</Text>
                ))}
                <View style={{}}>
                  <TouchableOpacity style={{ marginTop: 10 }} onPress={() => Linking.openURL(`https://x.com/${session.speakers[0].twitter}`)}>
                  <SvgImage style={{}} SVG={Assets.icons.XLogo} height={20} width={20} />
                </TouchableOpacity>
                </View>                
                <Text style={styles.time}>45 min</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  cardFlex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  card: {
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 10,
    overflow: 'hidden',
    fontFamily: 'PlayfairDisplay_400Regular',
    maxWidth: 400,
    width: '100%',
  },
  roomText: {
    color: '#343434',
    fontSize: 14,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  speaker: {
    color: '#363636',
    fontSize: 14,
  },
  time: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardInner: {
    borderColor: Assets.colors.jz2025ThemeColors.cyberYellow,
    backgroundColor: 'white',
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%',
  },
  text: {
    color: Assets.colors.brand.neutral,
    fontSize: Platform.OS == 'web' ? 18 : 16,
  },
});

export default HoldTheDate;
