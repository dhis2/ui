module.exports = {
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>config/jest/enzymeSetup.js'],
    roots: ['<rootDir>/packages'],
    testPathIgnorePatterns: [
        '/node_modules/',
        'Transfer/__tests__/common/createChildren.js',
    ],
    watchPathIgnorePatterns: ['<rootDir>/packages/icons/test/'],
}
