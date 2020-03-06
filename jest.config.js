module.exports = {
    rootDir: '.',
    setupFilesAfterEnv: ['<rootDir>config/jest/enzymeSetup.js'],
    roots: ['<rootDir>/packages/core/src', '<rootDir>/packages/widgets/src'],
}
