import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'allure-jest/node',
  testEnvironmentOptions: { resultsDir: 'reports/allure-results' },

  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: [
  '/node_modules/(?!(got|@sindresorhus/is|p-cancelable|form-data-encoder|get-stream|http2-wrapper|cacheable-lookup|cacheable-request|decompress-response|lowercase-keys|responselike)/)'
  ],

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['<rootDir>/(specs|tests)/**/*.(test|spec).ts'],

  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Jest Test Report',
        outputPath: 'public/jest-report/index.html',
        includeFailureMsg: true,
        includeSuiteFailure: true
      },
    ],
  ],
};

export default config;
