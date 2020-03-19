import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a SplitButton with children is rendered', () => {
    cy.visitStory('SplitButton', 'With children')
    cy.get('[data-test="dhis2-uicore-splitbutton"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.get('[data-test="dhis2-uicore-splitbutton-button"]')
        .contains('I am a child')
        .should('be.visible')
})
