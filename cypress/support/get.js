import { parseSelectorWithDataTest } from './common/parseSelectorWithDataTest.js'

/**
 * Takes a space-separated list of dataTestIds and wraps & prefixes them
 * @param {string} selectors
 * @param {string} [prefix]
 * @returns {Object}
 *
 * @example
 * //These are equivalent:
 * cy.get('{node-filter} input')
 * cy.get('[data-test="dhis2-uicore-node-filter"] input')
 *
 * //These as well:
 * cy.get('{node} {node} input', 'custom-prefix')
 * cy.get('[data-test="custom-prefix-node"] [data-test="custom-prefix-node"] input')
 */
Cypress.Commands.overwriteQuery('get', function (originalFn, selectors, options = {}) {
    const { prefix, ...restOptions } = options
    const selector = parseSelectorWithDataTest(selectors, prefix)
    return originalFn.call(this, selector, restOptions)
})
