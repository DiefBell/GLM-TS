/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  
  /*** coverage ***/
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/index.ts",
    "!src/**/*.test.ts",
    "!src/**/*.bench.ts",
  ],
  coverageReporters: [
    "text-summary",
    "html",
    "json-summary"
  ],
  coverageThreshold: {
      global: {
          statements: 35,
          branches: 55,
          functions: 20,
          lines: 35,
      },
  },
};
