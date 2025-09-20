export default {
  testEnvironment: 'allure-jest/node',
  testEnvironmentOptions: {
    resultsDir: 'reports/allure-results'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
}
