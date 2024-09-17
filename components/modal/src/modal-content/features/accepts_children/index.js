import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a ModalContent with children is rendered', () => {
    cy.visitStory('ModalContent', 'With children')
    cy.get('[data-test="dhis2-uicore-modalcontent"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
