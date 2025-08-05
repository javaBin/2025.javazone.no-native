const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  // Add web support for React Native modules
  resolver.platforms = ['ios', 'android', 'native', 'web'];

  // Add support for SVG files
  transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles'];

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer/expo'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg').filter((ext) => ext !== 'db'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  return config;
})();
