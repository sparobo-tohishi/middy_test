module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/*.ts',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
