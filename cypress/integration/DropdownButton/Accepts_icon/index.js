import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a DropdownButton with an icon prop is rendered', () => {
    cy.visitStory('DropdownButton', 'With icon')
    cy.get('[data-test="dhis2-uicore-dropdownbutton"]').should('be.visible')
})

Then('the icon is visible', () => {
    cy.contains('Icon').should('be.visible')
})
