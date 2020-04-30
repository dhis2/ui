/**
 * Copied (and slightly modified) from here:
 * https://github.com/cypress-io/cypress/issues/915#issuecomment-344389511
 *
 * This works because cypress commands are not promises.
 * They're executed sequentially, never in parallel.
 *
 * See here: https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Commands-Are-Not-Promises
 * > You cannot race or run multiple commands at the same time (in parallel).
 */
const all = (...commands) => {
    const results = []
    commands.forEach(command => command().then(result => results.push(result)))
    return cy.wrap(results)
}

Cypress.Commands.add('all', all)
