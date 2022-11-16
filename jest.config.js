/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  
  /*** coverage ***/
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/index.ts",
  ],
  coverageReporters: [
    "text-summary",
    "html",
    "json-summary"
  ],
  coverageThreshold: {
      global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
      },
  },
};
