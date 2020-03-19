import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a MenuList with children is rendered', () => {
    cy.visitStory('MenuList', 'With children')
    cy.get('[data-test="dhis2-uicore-menulist"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
