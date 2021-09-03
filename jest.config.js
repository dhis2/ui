module.exports = {
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>/jest.enzyme.config.js'],
    roots: ['<rootDir>/collections', '<rootDir>/components'],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/.d2/'],
}
