import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MenuItem supplied with a label is rendered', () => {
    cy.visitStory('MenuItem', 'With label')
    cy.get('[data-test="dhis2-uicore-menuitem"]').should('be.visible')
})

Then('the label will be visible', () => {
    cy.contains('Label').should('be.visible')
})
