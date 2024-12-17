import { ScreenTemplate, VideoPlayer } from '@/components';
import { useTranslation } from 'react-i18next';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useMediaQuery } from 'react-responsive';
import { Assets } from '@/Assets';

const Partner = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 614 });

  return (
    <ScreenTemplate>
      <ScrollView style={{ zIndex: -1 }}>
        <View style={styles.content}>
          <Text style={styles.heading}>{t('partner.watch_partner_meeting')}</Text>
          <VideoPlayer videoUrl={'https://player.vimeo.com/video/1038270530'} />
        </View>
      </ScrollView>
    </ScreenTemplate>
  );
};

const styles = StyleSheet.create({
  partnerHeadingInfo: {
    display: 'flex',
    marginHorizontal: 100,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  partnerContentInfo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  partnerContentInfoMobile: {
    flexDirection: 'column',
  },
  partnerContentItem: {
    flexBasis: '50%',
    padding: 10,
  },
  partnerContentItemMobile: {
    flexBasis: 285,
    padding: 3,
  },
  content: {
    marginTop: 50,
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
