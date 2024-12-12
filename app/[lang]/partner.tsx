import { ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Assets } from '@/Assets';

const Partner = () => {
  const { t } = useTranslation();

  return (
    <ScreenTemplate>
      <View style={styles.content}>
        <Text style={styles.heading}>{t('partner.watch_partner_meeting')}</Text>
        <VideoPlayer videoUrl={'https://player.vimeo.com/video/1038270530'} />
      </View>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    marginHorizontal: 20,
    fontSize: Platform.OS == 'web' ? 20 : 18,
    fontWeight: 'bold',
    color: Assets.colors.brand.cream,
    marginBottom: 20,
  },
});
export default Partner;
