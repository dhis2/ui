import { When } from '@badeball/cypress-cucumber-preprocessor'

When('the user clicks on the Checkbox', () => {
    cy.get('[data-test="dhis2-uicore-checkbox"]').click()
})
