import { When } from 'cypress-cucumber-preprocessor/steps'

When('the user clicks on the Checkbox', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"]').click()
})
