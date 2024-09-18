import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a FlyoutMenu with children is rendered', () => {
    cy.visitStory('FlyoutMenu', 'With Children')
    cy.get('[data-test="dhis2-uicore-menu"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
