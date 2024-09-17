import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MenuItem supplied with a label is rendered', () => {
    cy.visitStory('MenuItem', 'With Label')
    cy.get('[data-test="dhis2-uicore-menuitem"]').should('be.visible')
})

Then('the label is visible', () => {
    cy.get(':contains("label")').should('be.visible')
})
