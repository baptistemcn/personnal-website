module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: [
    "index.ts",
    "db.ts"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg|webp)$": "jest-file-loader",
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts",
    "@testing-library/jest-dom/extend-expect"
  ],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/src/assets/"
  ]
};