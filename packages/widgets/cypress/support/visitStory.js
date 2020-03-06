const urlEncodeStoryBookName = name =>
    name
        .replace(/\(|\)/g, '')
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .toLowerCase()

Cypress.Commands.add('visitStory', (namespace, storyName, options = {}) => {
    const formattedNamespace = urlEncodeStoryBookName(namespace)
    const formattedStoryName = urlEncodeStoryBookName(storyName)
    const id = `${formattedNamespace}--${formattedStoryName}`

    /**
     * See
     *
     * * https://github.com/cypress-io/cypress/issues/95
     * * https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window-fetch
     * * https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__window-fetch/cypress/integration/polyfill-fetch-from-tests-spec.js
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
