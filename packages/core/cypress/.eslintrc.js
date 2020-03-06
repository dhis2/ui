const config = require('../.eslintrc.js')

module.exports = {
    ...config,
    env: { es6: true },
    globals: {
        Cypress: 'readonly',
        cy: 'readonly',
    },
}
