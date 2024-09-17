import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Modal with children is rendered', () => {
    cy.visitStory('Modal', 'With children')
    cy.get('[data-test="dhis2-uicore-modal"]').should('exist')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
