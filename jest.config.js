module.exports = {
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>config/jest/enzymeSetup.js'],
    roots: ['<rootDir>/packages', '<rootDir>/components'],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/build/',
        '/.d2/',
        'Transfer/__tests__/common/createChildren.js',
    ],
}
