module.exports = {
  modulePathIgnorePatterns: ["public", "node_modules"],
  modulePaths: ["<rootDir>", "<rootDir>/src"],
  resetModules: true,
  restoreMocks: true,
  setupFiles: ["<rootDir>/scr/config/enzyme"],
  setupFilesAfterEnv: ["<rootDir>/src/config/jest"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/src/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/src/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  moduleNameMapper: {
    "styled-components": "<rootDir>/node_modules/styled-components"
  }
};
