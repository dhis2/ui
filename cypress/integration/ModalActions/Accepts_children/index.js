import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a ModalActions with children is rendered', () => {
    cy.visitStory('ModalActions', 'With children')
    cy.get('[data-test="dhis2-uicore-modalactions"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
