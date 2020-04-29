import { parseSelectorWithDataTest } from './common/parseSelectorWithDataTest'

/**
 * Takes a space-separated list of dataTestIds and wraps & prefixes them
 * @param {jQuery} subject
 * @param {string} selectors
 * @param {string} [prefix]
 * @returns {Object}
 *
 * @example
 * //These are equivalent:
 * cy.get('.foo').find('{node-filter} input')
 * cy.get('.foo').find('[data-test="dhis2-uicore-node-filter"] input')
 *
 * //These as well:
 * cy.get('.foo').find('{node} input', 'custom-prefix')
 * cy.get('.foo').find('[data-test="custom-prefix-node"] input')
 */
// eslint-disable-next-line max-params
const find = (originalFn, subject, selectors, options = {}) => {
    const { prefix, ...restOptions } = options
    const selector = parseSelectorWithDataTest(selectors, prefix)
    return originalFn(subject, selector, restOptions)
}

Cypress.Commands.overwrite('find', find)
