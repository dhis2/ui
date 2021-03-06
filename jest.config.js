module.exports = {
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>/jest.enzyme.config.js'],
    roots: [
        '<rootDir>/collections',
        '<rootDir>/components',
        '<rootDir>/utilities',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/build/',
        '/.d2/',
        'Transfer/__tests__/common/createChildren.js',
    ],
}
