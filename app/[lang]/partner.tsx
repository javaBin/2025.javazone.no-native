import { HoldTheDate, ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import { Platform, Text, StyleSheet } from 'react-native';
import { Assets } from '@/Assets';

const Partner = () => {
  const { t } = useTranslation();

  return (
    <ScreenTemplate>
      <Text style={styles.heading}>{t('partner.watch_partner_meeting')}</Text>
      <VideoPlayer videoUrl={require('../../assets/videos/JavaZone_2025_Partner_meeting_1.mp4')} />
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: Platform.OS == 'web' ? 38 : 36,
    fontWeight: 'bold',
    color: Assets.colors.brand.cream,
    marginBottom: 20,
  },
});

export default Partner;
