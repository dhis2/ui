const path = require('path')
// `d2-app-scripts test` merges its own default jest config in first, then
// this file, then any `jest` field in package.json (shallow merge, so
// re-declaring `moduleNameMapper` here fully replaces the default one). We
// require the default config directly off the resolved package entry point
// (rather than via a deep import, which its `exports` map blocks) so we can
// keep its asset mocks while adding the mapping packages like `ou-tree`
// actually need.
const cliAppScriptsDefaults = require(path.join(
    path.dirname(require.resolve('@dhis2/cli-app-scripts')),
    '../config/jest.config.js'
))

module.exports = {
    setupFilesAfterEnv: [
        `${__dirname}/jest.globals.config.js`,
        `${__dirname}/jest.enzyme.config.js`,
        `${__dirname}/jest.testing-library.config.js`,
    ],
    testPathIgnorePatterns: ['/node_modules/', '/build/', '/.d2/'],
    moduleNameMapper: {
        ...cliAppScriptsDefaults.moduleNameMapper,
        // Some TS packages (e.g. ou-tree) import sibling modules with an
        // explicit `.js` extension even from `.ts`/`.tsx` files (resolved by
        // TypeScript and the bundler, but not by Jest's resolver) — strip it
        // so Jest falls back to its normal extension resolution and finds
        // the `.tsx`/`.ts` file.
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
}
