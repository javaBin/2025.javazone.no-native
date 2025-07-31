import { Animated } from 'react-native';

export const createAnimations = (index?: number) => {
  const favoriteButtonScale = new Animated.Value(1);
  const twitterScale = new Animated.Value(1);
  const linkedinScale = new Animated.Value(1);
  const blueskyScale = new Animated.Value(1);

  return {
    favoriteButton: {
      scale: favoriteButtonScale,
      handlers: createAnimationHandlers(favoriteButtonScale)
    },
    twitter: {
      scale: twitterScale,
      handlers: createAnimationHandlers(twitterScale)
    },
    linkedin: {
      scale: linkedinScale,
      handlers: createAnimationHandlers(linkedinScale)
    },
    bluesky: {
      scale: blueskyScale,
      handlers: createAnimationHandlers(blueskyScale)
    }
  };
};

const createAnimationHandlers = (scaleValue: Animated.Value) => ({
  handleMouseEnter: () => {
    Animated.spring(scaleValue, {
      toValue: 1.4,
      useNativeDriver: true,
    }).start();
  },
  handleMouseLeave: () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  },
});