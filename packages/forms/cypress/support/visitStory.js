import { toId } from '@storybook/router'

Cypress.Commands.add('visitStory', (namespace, storyName) => {
    const id = toId(namespace, storyName)
    cy.visit(`iframe.html?id=${id}`)
})
