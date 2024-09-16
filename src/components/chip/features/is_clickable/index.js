import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Chip with onClick handler is rendered', () => {
    cy.visitStory('Chip', 'With on click')
})

When('the Chip is clicked', () => {
    cy.get('[data-test="dhis2-uicore-chip"]').click()
})

Then('the onClick handler is called', () => {
    cy.window().should((win) => {
        expect(win.onClick).to.be.calledWith({})
    })
})
