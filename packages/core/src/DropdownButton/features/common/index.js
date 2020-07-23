import { When } from 'cypress-cucumber-preprocessor/steps'

When('the DropdownButton is clicked', () => {
    cy.get('[data-test="dhis2-uicore-dropdownbutton"]').click()
})
