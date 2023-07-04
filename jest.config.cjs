module.exports = {
      testEnvironment: "jsdom",
      setupFilesAfterEnv: [
        "<rootDir>/setupTests.js"
      ],
      moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
      }
    };