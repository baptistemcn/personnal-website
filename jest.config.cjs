module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts",
    "@testing-library/jest-dom/extend-expect"
  ],
  testEnvironment: "jsdom"
};

