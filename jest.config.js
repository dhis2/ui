module.exports = {
    setupFilesAfterEnv: ['<rootDir>config/jest/enzymeSetup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/src/__tests__/common/'],
}
