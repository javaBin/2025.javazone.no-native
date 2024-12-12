import { StyleSheet } from 'react-native';
import { ResizeMode, Video } from 'expo-av';

type VideoPlayerProps = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  return (
    <Video
      source={{ uri: videoUrl }} // Replace with your video URL
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      videoStyle={styles.video}
    />
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
