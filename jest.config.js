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
          statements: 30,
          branches: 55,
          functions: 15,
          lines: 30,
      },
  },
};
