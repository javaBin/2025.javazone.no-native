import {Dimensions, StyleSheet, View} from 'react-native';
import {Fragment} from "react";

type VideoPlayerProps = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const screenWidth = Dimensions.get('window').width;
  const videoHeight = screenWidth / 3;

  return (
    <Fragment>
      <View style={styles.container}>
        <iframe
          src={`${videoUrl}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{ ...styles.video, width: screenWidth, height: videoHeight }}
          title="JavaZone 2025 Partner meeting #1"
        ></iframe>
      </View>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'relative',
  },
});

export default VideoPlayer;
