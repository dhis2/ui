module.exports = {
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>/jest.enzyme.config.js'],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/.d2/'],
}
