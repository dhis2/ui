module.exports = {
    setupFilesAfterEnv: [
        `${__dirname}/jest.enzyme.config.js`,
        `${__dirname}/jest.testing-library.config.js`,
    ],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/.d2/'],
}
