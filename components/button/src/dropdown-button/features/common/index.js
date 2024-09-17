import { When } from '@badeball/cypress-cucumber-preprocessor'

When('the DropdownButton is clicked', () => {
    cy.get('[data-test="dhis2-uicore-dropdownbutton"]').click()
})
