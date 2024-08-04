module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|@testing-library)/)',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@juanpablocs/rn-interactive-maps$': '<rootDir>/__mocks__/@juanpablocs/rn-interactive-maps.js',
    '^@juanpablocs/rn-slider-carousel$': '<rootDir>/__mocks__/@juanpablocs/rn-slider-carousel.js',

  },
};
