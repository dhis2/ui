import { toId } from '@storybook/csf'

Cypress.Commands.add('visitStory', (namespace, storyName, options = {}) => {
    const id = toId(namespace, storyName)

    /**
     * See
     *
     * * https://github.com/cypress-io/cypress/issues/95
     * * https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbi
     * * https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbi
     *
     * for an explanation why this is currently necessay...
     */
    return cy.readFile('cypress/assets/unfetch.umd.js').then(content => {
        return cy.visit(`iframe.html?id=${id}`, {
            ...options,
            onBeforeLoad: win => {
                delete win.fetch
                win.eval(content)
                win.fetch = win.unfetch
                options.onBeforeLoad && options.onBeforeLoad(win)
            },
        })
    })
})
