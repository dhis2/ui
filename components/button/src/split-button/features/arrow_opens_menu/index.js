import '../common/index'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SplitButton is rendered', () => {
    cy.visitStory('SplitButton', 'Default')
})

Given('the SplitButton menu is open', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-toggle"]').click()
    cy.get('[data-test="dhis2-uicore-splitbutton-menu"]').should('be.visible')
})

Given('the SplitButton menu is closed', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-menu"]').should('not.exist')
})

When('the user clicks the backdrop Layer', () => {
    cy.get('[data-test="dhis2-uicore-layer"]').click()
})

Then('the menu is not visible', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-menu"]').should('not.exist')
})

Then('the component is not visible', () => {
    cy.contains('Component').should('not.exist')
})

Then('the menu is visible', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-menu"]').should('be.visible')
})

Then('the component is visible', () => {
    cy.contains('Component').should('be.visible')
})
