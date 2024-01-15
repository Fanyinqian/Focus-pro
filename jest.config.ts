module.exports = {
  roots: [
    '<rootDir>/tests',
  ],
  testRegex: 'tests/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
    '.(less|css)$': 'jest-less-loader',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "@yq/focus-pro/(.*)" : '<rootDir>/src/index.ts'
  },
}