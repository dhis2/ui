import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a ModalTitle with children is rendered', () => {
    cy.visitStory('ModalTitle', 'With children')
    cy.get('[data-test="dhis2-uicore-modaltitle"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
