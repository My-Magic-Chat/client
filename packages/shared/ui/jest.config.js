module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        ".(css|less|scss)$": "identity-obj-proxy",
        '\\.(png|jpg|jpeg|webp|ttf|woff|woff2|svg|mp4)$': '<rootDir>/__mocks__/fileMock.ts',
        "^@shared(.*)$": "<rootDir>/src/shared$1",
        "^@fragments(.*)$": "<rootDir>/src/fragments$1",
        "^@animations(.*)$": "<rootDir>/src/animations$1",
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@services(.*)$": "<rootDir>/src/shared/services$1",
    },
    setupFilesAfterEnv: ['./setup-jest.js'],
    collectCoverageFrom: [`src/**/*.tsx`, `!src/**/*.dto.*`, `!src/**/*.stories.*`],
    modulePathIgnorePatterns: ['.*__mocks__.*']
};
