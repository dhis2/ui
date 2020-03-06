import { toId } from '@storybook/csf'

Cypress.Commands.add('visitStory', (namespace, storyName) => {
    const id = toId(namespace, storyName)
    cy.visit(`iframe.html?id=${id}`)
})
