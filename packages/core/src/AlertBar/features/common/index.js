import { When, Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default AlertBar is rendered', () => {
    cy.visitStory('AlertBar', 'Default')
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('be.visible')
})

Then('the AlertBar will not be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar"]').should('not.be.visible')
})

When('the default duration has passed', () => {
    cy.wait(8000)
})
