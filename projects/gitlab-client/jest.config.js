module.exports = {

  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/public-api.ts'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'lcov',
    'text-summary'
  ],

  testPathIgnorePatterns: [
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/e2e/',
    '<rootDir>/node_modules/',
    '<rootDir>/**/*.(js|scss)'
  ],

  testMatch: [
    '<rootDir>/src/**/*.spec.ts'
  ]
};
