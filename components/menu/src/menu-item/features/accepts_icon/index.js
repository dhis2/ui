import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a MenuItem supplied with an icon is rendered', () => {
    cy.visitStory('MenuItem', 'With Icon')
    cy.get('[data-test="dhis2-uicore-menuitem"]').should('be.visible')
})

Then('the icon will be visible', () => {
    cy.contains('Icon').should('be.visible')
})
