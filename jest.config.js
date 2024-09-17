module.exports = {
    rootDir: '.',
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>/jest.enzyme.config.js',
        '<rootDir>/jest.testing-library.config.js',
    ],
    roots: ['<rootDir>/src'],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/.d2/'],
}
