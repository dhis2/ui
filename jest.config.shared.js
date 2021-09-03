module.exports = {
    setupFilesAfterEnv: [`${__dirname}/jest.enzyme.config.js`],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/.d2/'],
}
