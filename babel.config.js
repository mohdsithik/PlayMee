module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
