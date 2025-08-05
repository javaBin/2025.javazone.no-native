module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Use the standard Reanimated plugin (will be updated when you upgrade)
      'react-native-reanimated/plugin',
    ],
  };
};
