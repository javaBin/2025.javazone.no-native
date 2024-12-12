import { StyleSheet } from 'react-native';
import { ResizeMode, Video } from 'expo-av';

type VideoPlayerProps = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  return (
    <>
      <div style={styles.container}>
        <iframe
          src="https://player.vimeo.com/video/1038270530?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={styles.video}
          title="JavaZone 2025 Partner meeting #1"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'relative',
    width: 1000,
    height: 500,
  },
});

export default VideoPlayer;
