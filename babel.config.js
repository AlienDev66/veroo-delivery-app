module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      ["inline-dotenv"],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@components': './src/components',
            '@libs': './src/libs',
            '@contexts': './src/contexts',
            '@dtos': './src/dtos',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@styles': './src/styles',
            '@assets': './src/assets',
            '@utils': './src/utils',
            '@global': './src/global'
          }
        }
      ]
    ]
  }
}
