module.exports = {
    rootDir: '.',
    setupFilesAfterEnv: [
        '<rootDir>/jest.enzyme.config.js',
        '<rootDir>/jest.testing-library.config.js',
    ],
    roots: ['<rootDir>/collections', '<rootDir>/components'],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/.d2/'],
}
