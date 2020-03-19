import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MenuItem supplied with an icon is rendered', () => {
    cy.visitStory('MenuItem', 'With icon')
    cy.get('[data-test="dhis2-uicore-menuitem"]').should('be.visible')
})

Then('the icon will be visible', () => {
    cy.contains('Icon').should('be.visible')
})
