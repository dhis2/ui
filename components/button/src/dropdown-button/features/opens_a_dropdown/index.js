import '../common/index.js'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default DropdownButton is rendered', () => {
    cy.visitStory('DropdownButton', 'Default')
})

Given('a DropdownButton with opened dropdown is rendered', () => {
    cy.visitStory('DropdownButton', 'Default')

    cy.get('[data-test="dhis2-uicore-dropdownbutton"]').click()
    cy.get('[data-test="dhis2-uicore-dropdownbutton-popper"]').should('exist')
})

When('the user clicks the backdrop Layer', () => {
    cy.get('[data-test="dhis2-uicore-layer"]').click()
})

Then('the dropdown is not rendered', () => {
    cy.get('[data-test="dhis2-uicore-dropdownbutton-popper"]').should(
        'not.exist'
    )
})

Then('the dropdown is rendered', () => {
    cy.get('[data-test="dhis2-uicore-dropdownbutton-popper"]').should('exist')
})
