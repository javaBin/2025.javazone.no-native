import { Dimensions, StyleSheet, View } from 'react-native';

type VideoPlayerProps = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const screenWidth = Dimensions.get('window').width;
  const videoHeight = screenWidth / 1.9;

  return (
    <View style={styles.container}>
      <iframe
        src={`${videoUrl}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{ ...styles.video, width: screenWidth / 1.1, height: 350 }}
        title="JavaZone 2025 Partner meeting #1"
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  video: {
    position: 'relative',
  },
});

export default VideoPlayer;
