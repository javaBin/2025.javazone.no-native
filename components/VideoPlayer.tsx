import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

type VideoPlayerProps = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const screenWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    video: {
      position: 'relative',
    },
  });

  return Platform.OS === 'web' ? (
    <View>
      <iframe
        src={`${videoUrl}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{ ...styles.video, width: screenWidth / 1.3, height: 'auto' }}
        title="JavaZone 2025 Partner meeting #1"
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </View>
  ) : (
    <View style={{ width: screenWidth, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
      <View style={{ height: 185, width: 335 }}>
        <WebView source={{ uri: `${videoUrl}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479` }} />
      </View>
    </View>
  );
};

export default VideoPlayer;
