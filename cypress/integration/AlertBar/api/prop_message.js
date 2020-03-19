import '../common/index'
import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('an AlertBar with disabled icon is rendered', () => {
    cy.visitStory('AlertBar', 'Disabled icon')
})

Given('an AlertBar with custom icon is rendered', () => {
    cy.visitStory('AlertBar', 'Custom icon')
})

Then('the icon will be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-icon"]').should('be.visible')
})

Then('the icon will not be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-icon"]').should('not.be.visible')
})

Then('the custom icon will be visible', () => {
    cy.get('[data-test="dhis2-uicore-alertbar-icon"]')
        .contains('Custom icon')
        .should('be.visible')
})
