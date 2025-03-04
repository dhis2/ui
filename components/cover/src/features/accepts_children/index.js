import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Cover with children is rendered', () => {
    cy.visitStory('Cover', 'With Children')
    cy.get('[data-test="dhis2-uicore-componentcover"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
