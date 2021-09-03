/**
 * See https://docs.cypress.io/api/commands/click.html#Click-with-key-combinations
 * for why doing the follwoing is necessary:
 *
 * `cy.get('body').type(`{...}`, { release: false })`
 */
const clickWith = (subject, modifierKey, options) => {
    // the "cmd" key is called "meta" in js
    const keyName = modifierKey === 'cmd' ? 'meta' : modifierKey

    cy.get('body').type(`{${keyName}}`, { release: false })
    cy.wrap(subject).click(options)

    // The key is only released after the test is over,
    // releasing it manually fixed that issue
    cy.get('body').type(`{${keyName}}`, { release: true })

    return cy.wrap(subject)
}

Cypress.Commands.add('clickWith', { prevSubject: true }, clickWith)
