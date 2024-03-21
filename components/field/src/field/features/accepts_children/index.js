import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a Field with children is rendered', () => {
    cy.visitStory('Field', 'With children')
    cy.get('[data-test="dhis2-uicore-field"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
