module.exports = {
  modulePathIgnorePatterns: ["public", "node_modules"],
  modulePaths: ["<rootDir>", "<rootDir>/src"],
  resetModules: true,
  restoreMocks: true,
  setupFiles: ["<rootDir>/config/enzyme"],
  setupFilesAfterEnv: ["<rootDir>/config/jest"],
  snapshotSerializers: ["<rootDir>/node_modules/enzyme-to-json/serializer"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ]
};
