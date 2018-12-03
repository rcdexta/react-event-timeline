// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  'moduleNameMapper': {
    '\\.(jpg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js'
  },
  collectCoverage: true
}
