/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Needs to transform JS files form filenamify and filename-reserved-regex packages
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: [
    // Removes packages folders from ignore pattern
    "<rootDir>/node_modules/(?!(?:filenamify|filename-reserved-regex))",
  ],
};
