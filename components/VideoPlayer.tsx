import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

type VideoPlayerProps = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const screenWidth = Dimensions.get('window').width;
    const videoWidth = screenWidth > 768 ? screenWidth * 0.55 : screenWidth * 0.85;
    const videoHeight = videoWidth * (9 / 16);

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    video: {
      position: 'relative',
    },
  });

  return Platform.OS === 'web' ? (
    <View style={styles.container}>
      <iframe
        src={`${videoUrl}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{
            ...styles.video,
            width: videoWidth,
            height: videoHeight
      }}
        title="JavaZone 2025 Partner meeting #1"
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={{ height: videoHeight, width: videoWidth }}>
        <WebView source={{ uri: `${videoUrl}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479` }} />
      </View>
    </View>
  );
};

export default VideoPlayer;
