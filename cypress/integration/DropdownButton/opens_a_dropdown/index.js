import '../common/index'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('a default DropdownButton is rendered', () => {
    cy.visitStory('DropdownButton', 'Default')
})

Given('a DropdownButton with opened dropdown is rendered', () => {
    cy.visitStory('DropdownButton', 'Default')

    cy.get('[data-test="dhis2-uicore-dropdownbutton"]').click()
    cy.get('[data-test="dhis2-uicore-dropdownbutton-popper"]').should('exist')
})

When('the Backdrop is clicked', () => {
    cy.get('[data-test="dhis2-uicore-backdrop"]').click()
})

Then('the dropdown is not rendered', () => {
    cy.get('[data-test="dhis2-uicore-dropdownbutton-popper"]').should(
        'not.exist'
    )
})

Then('the dropdown is rendered', () => {
    cy.get('[data-test="dhis2-uicore-dropdownbutton-popper"]').should('exist')
})
