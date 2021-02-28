module.exports = {
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>config/jest/enzymeSetup.js'],
    roots: ['<rootDir>/packages'],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/packages\/.*\/build',
        'Transfer/__tests__/common/createChildren.js',
    ],
}
