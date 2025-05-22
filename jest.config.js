module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // If you use CSS modules or similar
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // For additional Jest DOM matchers
};
