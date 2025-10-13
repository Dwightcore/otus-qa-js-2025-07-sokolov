export default {
  testEnvironment: 'allure-jest/node',
  testEnvironmentOptions: {
    resultsDir: 'reports/allure-results'
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
  }
}
