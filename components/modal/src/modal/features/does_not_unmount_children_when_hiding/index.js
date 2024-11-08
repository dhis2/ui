import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a modal with a counter component is rendered', () => {
    cy.visitStory('Modal', 'With stateful children')
})

Given('the counter is 0', () => {
    cy.get('#counter-value').contains('0')
})

When('the user increases the counter once', () => {
    cy.get('#increment-counter').click()
})

When('the counter should be 1', () => {
    cy.get('#counter-value').contains('1')
})

When('the user hides the modal', () => {
    cy.get('#hide-modal').click()
})

Then('the modal should not be visible', () => {
    cy.get('#hide-modal').should('not.be.visible')
})

Then('the user shows the modal', () => {
    cy.get('#show-modal').click()
})

Then('the modal should be visible', () => {
    cy.get('#hide-modal').should('be.visible')
})

Then('the counter value should be one', () => {
    cy.get('#counter-value').contains('1')
})
