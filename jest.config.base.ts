export default {
  preset: 'ts-jest',
  roots: ['<rootDir>/**/src'],
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/**/coverage/',
  verbose: true,
};
