import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('a DropdownButton with children is rendered', () => {
    cy.visitStory('DropdownButton', 'With children')
    cy.get('[data-test="dhis2-uicore-dropdownbutton"]').should('be.visible')
})

Then('the children are visible', () => {
    cy.contains('I am a child').should('be.visible')
})
